export const id=81095;export const ids=[81095];export const modules={81095:(e,n,r)=>{r.d(n,{createLogMessage:()=>t});r(36028);var o=r(27697),a=r(1895);const s=/^\/(?:home-assistant\/frontend\/[^/]+|unknown|\/{2}\.)\//,t=async(e,n,r,i)=>{const c=[];if(n){const e=new a.UAParser,{name:r="unknown browser",version:o=""}=e.getBrowser(),{name:s="unknown OS",version:t=""}=e.getOS(),i=`${r} ${o}`.trim(),f=`${s} ${t}`.trim();c.push(`${n} from ${i} on ${f}`)}if(e instanceof Error){c.push(e.toString()||r);const n=(await(0,o.fromError)(e)).slice(0,10).map((e=>{var n;return null!==(n=e.fileName)&&void 0!==n||(e.fileName=""),URL.canParse(e.fileName)&&(e.fileName=new URL(e.fileName).pathname),e.fileName=e.fileName.replace(s,""),e.toString()}));if(c.push(...n.length>0?n:[i]),e.cause&&c.push(`Caused by: ${await t(e.cause)}`),e instanceof AggregateError){const n=e.errors.map((async(e,n)=>[n,await t(e)]));for await(const[r,o]of n)c.push(`Part ${r+1} of ${e.errors.length}: ${o}`)}}else{const n=JSON.stringify(e,null,2);c.push(r,n===r?"":n,i)}return c.filter(Boolean).join("\n")}}};
//# sourceMappingURL=81095-aRtMBVJlipY.js.map