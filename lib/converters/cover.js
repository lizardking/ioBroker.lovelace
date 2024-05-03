const utils = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

function addCommand(entity, control, searchString, serviceName, featureNumber, additionalParsing) {
    const state = control.states.find(s => s.id && s.name === searchString);
    if (state && state.id) {
        const command = {
            service: serviceName,
            setId: state.id,
            parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                if (typeof additionalParsing === 'function') {
                    additionalParsing(entity, command, params, user);
                }
                adapterData.adapter.setForeignState( command.setId, true, false, { user }, err =>
                    err ? reject(err) : resolve());
            })
        };
        entity.context.COMMANDS.push(command);
        entity.attributes.supported_features |= featureNumber;
        return true;
    }
    return false;
}

function handleSetAndTiltCommand(entity, command, data, user) {
    return new Promise((resolve, reject) => {
        if (data.service_data.position >= 0) {
            //Org value calc with min max seems incorrect: let value = (data.service_data.position / 100) * entity.context.STATE.max + entity.context.STATE.min;
            let value = (data.service_data.position / 100) * (entity.context.STATE.max - entity.context.STATE.min) + entity.context.STATE.min;
            if (entity.context.STATE.invert) {

                //Org value calc seems incorrect: value = ((100 - data.service_data.position) / 100) * entity.context.STATE.max + entity.context.STATE.min;
                value = ((100 - data.service_data.position) / 100) * (entity.context.STATE.max - entity.context.STATE.min) + entity.context.STATE.min;

            }
            adapterData.adapter.setForeignState(command.setId, value, false, { user }, err => err ? reject(err) : resolve());
        } else if (data.service_data.tilt_position >= 0) {
            const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt');
            if (attr && attr.setId) {
                //org calue calc seems incorrect: let value = ((data.service_data.tilt_position) / 100) * attr.max + attr.min;
                let value = ((data.service_data.tilt_position) / 100) * (attr.max - attr.min) + attr.min;
                if (attr.invert) {
                    //Value calc seems incorrect: value = ((100 - data.service_data.tilt_position) / 100) * attr.max + attr.min;
                    value = ((100 - data.service_data.tilt_position) / 100) * (attr.max - attr.min) + attr.min;
                }
                adapterData.adapter.setForeignState(attr.setId, value, false,
                    { user }, err => err ? reject(err) : resolve());
            } else {
                reject(new Error('No setId for tilt cover.'));
            }
        } else {
            reject(new Error('No matching service data in set_cover_position.'));
        }
    });
}

// create input_number - slider to be backwards compatible
//This part of code has been in the addBlindLevel function originaly. Hope the code is bit easier to read like this.
function addPositionInputNumberEntity(entities, control, objects, name, id, room, func, _obj, forcedEntityId) {

    const state = control.states.find(s => s.id && s.name === name);
    const entity = entities[0];
    if (state && state.id) {
        const common = objects[state.id] && objects[state.id].common ? objects[state.id].common : {};

        if (state && state.id) {
            //also create input_number - slider to be backwards compatibel:
            const entitySlider = utils.processCommon(entity.attributes.friendly_name, room, func, _obj, 'input_number', forcedEntityId);
            entities.push(entitySlider);
            entitySlider.context.STATE = { setId: state.id, getId: state.id };
            entitySlider.attributes.icon = 'mdi:window-shutter';
            entitySlider.attributes.mode = 'slider';
            entitySlider.attributes.min = common.min !== undefined ? common.min : 0;
            entitySlider.attributes.max = common.max !== undefined ? common.max : 100;
            entitySlider.attributes.step = common.step || 1;
            utils.addID2entity(state.id, entitySlider);
            //support get/set in two different states, but invert needs to match!
            const getState = control.states.find(s => s.id && s.name === name.replace('SET', 'ACTUAL'));
            if (getState && getState.id) {


                entitySlider.context.STATE.getId = getState.id;
                utils.addID2entity(getState.id, entitySlider);
            }
        }
    }
}



function addBlindLevel(entity, control, objects, name, id, room, func, _obj, forcedEntityId) {
    const state = control.states.find(s => s.id && s.name === name);
    // const entity = entities[0];
    if (state && state.id) {
        const common = objects[state.id] && objects[state.id].common ? objects[state.id].common : {};

        if (state && state.id) {



            //fill state with %:
            entity.context.STATE.setId = state.id;
            entity.context.STATE.getId = state.id;
            utils.addID2entity(state.id, entity);
            entity.context.STATE.max = common.max || 100;
            entity.context.STATE.min = common.min || 0;
            entity.context.STATE.getParser = (entity, attr, state) => {
                if (!state) state = { val: null };
                if (state.val != null) {
                    let position = ((state.val - entity.context.STATE.min) / (entity.context.STATE.max - entity.context.STATE.min)) * 100.0;
                    let isClosed = state.val === entity.context.STATE.min;
                    let isOpened = state.val === entity.context.STATE.max;
                    if (entity.context.STATE.invert) {
                        position = 100 - position;
                        isClosed = state.val === entity.context.STATE.max;
                        isOpened = state.val === entity.context.STATE.min;
                    }
                    entity.attributes.current_position = position;
                    if (isClosed) {
                        entity.state = 'closed';
                    } else if (isOpened) {
                        entity.state = 'open';
                    } else {
                        entity.state = String(position);
                    }
                }
            };

            entity.attributes.supported_features |= 4;

            //This is strange. 
            //Shouldnt setting the tilt command be in the addTitltLevel function or is the a specific reason why it is here?
            //Also, using the id of the position  instead of the tilt makes things a bit confusing (eventhough it wont influence the behaviour, since the tilt commend uses the ids from the titlt ATTRIBUTE)
            entity.context.COMMANDS.push({
                service: 'set_cover_tilt_position',
                setId: state.id,
                parseCommand: handleSetAndTiltCommand
            });

            entity.context.COMMANDS.push({
                service: 'set_cover_position',
                setId: state.id,
                parseCommand: handleSetAndTiltCommand
            });
            //need to define toggle here, because default handling does not make much sense for cover.
            entity.context.COMMANDS.push({
                service: 'toggle',
                setId: state.id,
                parseCommand: (entity, command, data, user) => {
                    return new Promise((resolve, reject) => {
                        const up = entity.context.COMMANDS.find(a => a.service === 'open_cover');
                        const down = entity.context.COMMANDS.find(a => a.service === 'close_cover');
                        if (entity.state === 'open' || entity.state === 'opening') {
                            if (down) {
                                adapterData.adapter.setForeignState(down.setId, true, false,
                                    { user }, err => err ? reject(err) : resolve());
                            } else {
                                adapterData.adapter.setForeignState(command.setId, entity.context.STATE.invert ? entity.context.STATE.min : entity.context.STATE.max, false,
                                    { user }, err => err ? reject(err) : resolve());
                            }
                        } else {
                            if (up) {
                                adapterData.adapter.setForeignState(up.setId, true, false,
                                    { user }, err => err ? reject(err) : resolve());
                            } else {
                                adapterData.adapter.setForeignState(command.setId, entity.context.STATE.invert ? entity.context.STATE.max : entity.context.STATE.min, false,
                                    { user }, err => err ? reject(err) : resolve());
                            }
                        }
                    });
                }
            });

            //support get/set in two different states, but invert needs to match!
            const getState = control.states.find(s => s.id && s.name === name.replace('SET', 'ACTUAL'));
            if (getState && getState.id) {
                entity.context.STATE.getId = getState.id;
                utils.addID2entity(getState.id, entity);


            }
        }
        return true;
    }
    return false;
}

function addTiltLevel(entity, control, objects, name) {
    //support for tilt %:
    const state = control.states.find(s => s.id && s.name === name);
    if (state && state.id) {
        const common = objects[state.id] && objects[state.id].common ? objects[state.id].common : {};
        entity.context.ATTRIBUTES = [{
            attribute: 'tilt',
            getId: state.id,
            setId: state.id,
            min: common.min || 0,
            max: common.max || 100,
            getParser: (entity, attr, state) => {
                if (!state) state = { val: null };
                if (state.val != null) {
                    let position = ((state.val - attr.min) / (attr.max - attr.min)) * 100.0;
                    if (attr.invert) {
                        position = 100 - position;
                    }
                    entity.attributes.current_tilt_position = position;
                }
            }
        }];
        utils.addID2entity(state.id, entity);
        entity.attributes.supported_features |= 128;

        const getState = control.states.find(s => s.id && s.name === name.replace('SET', 'ACTUAL'));
        if (getState && getState.id) {
            entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt').getId = getState.id;
            utils.addID2entity(getState.id, entity);
        }
        return true;
    }
    return false;
}


exports.processBlind = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'cover', forcedEntityId);
    const entities = [entity];

    /*
        cover device classes.
            DEVICE_CLASS_AWNING = "awning"      = iob function awning
            DEVICE_CLASS_BLIND = "blind"        = iob function blind 
            DEVICE_CLASS_CURTAIN = "curtain"    = iob function curtain
            DEVICE_CLASS_DAMPER = "damper"      ????
            DEVICE_CLASS_DOOR = "door"          = iob function door
            DEVICE_CLASS_GARAGE = "garage"      = iob function garage_door
            DEVICE_CLASS_GATE = "gate"          = iob function gate
            DEVICE_CLASS_SHADE = "shade"        = iob function shading
            DEVICE_CLASS_SHUTTER = "shutter"    = iob function shutters
            DEVICE_CLASS_WINDOW = "window"      = iob function window      

        supported features:
            SUPPORT_OPEN = 1
            SUPPORT_CLOSE = 2
            SUPPORT_SET_POSITION = 4
            SUPPORT_STOP = 8
            SUPPORT_OPEN_TILT = 16
            SUPPORT_CLOSE_TILT = 32
            SUPPORT_STOP_TILT = 64
            SUPPORT_SET_TILT_POSITION = 128

        attributes:
            current_position //for shade it seems 0 = open, i.e. up, 100 = closed, i.e. down. HASS says otherway round.
            current_tilt_position
            position
            tilt_position
     */
    entity.context.COMMANDS = [];
    entity.attributes.device_class = 'awning'; //Using awning as default and only go for blind if there is title support (a bit further down).
    entity.context.STATE = { setId: null, getId: null };
    entity.attributes.supported_features = 0;
    entity.attributes.icon = 'mdi:window-shutter';
    adapterData.log.debug('Creating blind of type ' + control.type + ' for ' + id);

    if (addBlindLevel(entity, control, objects, 'SET', id, room, func, _obj, forcedEntityId)) {
        entity.context.STATE.invert = !!adapterData.adapter.config.blindsInvert;
    }

    if (addTiltLevel(entity, control, objects, 'TILT_SET')) {
        const attr = entity.context.ATTRIBUTES.find(a => a.attribute === 'tilt');
        attr.invert = !!adapterData.adapter.config.blindsInvert;
        entity.attributes.device_class = 'blind'; //Only use blind if there is tilt support 
    }

    //add commands, if present:
    addCommand(entity, control, 'STOP', 'stop_cover', 8);
    const haveOpen = addCommand(entity, control, 'OPEN', 'open_cover', 1, entity => entity.state = 'opening');
    const haveClose = addCommand(entity, control, 'CLOSE', 'close_cover', 2, entity => entity.state = 'closing');
    addCommand(entity, control, 'TILT_OPEN', 'open_cover_tilt', 16);
    addCommand(entity, control, 'TILT_CLOSE', 'close_cover_tilt', 32);
    addCommand(entity, control, 'TILT_STOP', 'stop_cover_tilt', 64);

    //use % setting for up/down in case there are no buttons:
    if (!haveOpen) {
        const command = {
            service: 'open_cover',
            setId: entity.context.STATE.setId,
            parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                entity.state = 'opening';
                adapterData.adapter.setForeignState(command.setId,
                    entity.context.STATE.invert ? entity.context.STATE.min : entity.context.STATE.max, false, { user },
                    err =>
                        err ? reject(err) : resolve());
            })
        };
        entity.context.COMMANDS.push(command);
        entity.attributes.supported_features |= 1;
    }
    if (!haveClose) {
        const command = {
            service: 'close_cover',
            setId: entity.context.STATE.setId,
            parseCommand: (entity, command, params, user) => new Promise((resolve, reject) => {
                entity.state = 'closing';
                adapterData.adapter.setForeignState(command.setId,
                    entity.context.STATE.invert ? entity.context.STATE.max : entity.context.STATE.min, false, { user }, err =>
                    err ? reject(err) : resolve());
            })
        };
        entity.context.COMMANDS.push(command);
        entity.attributes.supported_features |= 2;
    }
    if (adapterData.adapter.config.blindsDontCreatePositionInputNumber) {
        //Dont create input number entity if this option is exists and is set
    }
    else {
        // create input_number entity in addition to the cover entity -to be backwards compatible
        addPositionInputNumberEntity(entities, control, objects, 'SET', id, room, func, _obj, forcedEntityId);
    }

    return entities;
};
