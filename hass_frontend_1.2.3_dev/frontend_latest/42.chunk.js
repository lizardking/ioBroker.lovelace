(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[42],{

/***/ "./src/resources/html-import/polyfill.js":
/*!***********************************************!*\
  !*** ./src/resources/html-import/polyfill.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* eslint-disable */\n\n/*\n Copyright (c) 2016 The Polymer Project Authors. All rights reserved.\n This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n Code distributed by Google as part of the polymer project is also\n subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n*/\n(function (q) {\n  function y(a, b) {\n    if (\"function\" === typeof window.CustomEvent) return new CustomEvent(a, b);\n    var c = document.createEvent(\"CustomEvent\");\n    c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);\n    return c;\n  }\n\n  function m(a) {\n    if (u) return a.ownerDocument !== document ? a.ownerDocument : null;\n    var b = a.__importDoc;\n\n    if (!b && a.parentNode) {\n      b = a.parentNode;\n      if (\"function\" === typeof b.closest) b = b.closest(\"link[rel=import]\");else for (; !r(b) && (b = b.parentNode););\n      a.__importDoc = b;\n    }\n\n    return b;\n  }\n\n  function D(a) {\n    var b = k(document, \"link[rel=import]:not([import-dependency])\"),\n        c = b.length;\n    c ? g(b, function (b) {\n      return t(b, function () {\n        0 === --c && a();\n      });\n    }) : a();\n  }\n\n  function z(a) {\n    function b() {\n      \"loading\" !== document.readyState && document.body && (document.removeEventListener(\"readystatechange\", b), a());\n    }\n\n    document.addEventListener(\"readystatechange\", b);\n    b();\n  }\n\n  function A(a) {\n    z(function () {\n      return D(function () {\n        return a && a();\n      });\n    });\n  }\n\n  function t(a, b) {\n    if (a.__loaded) b && b();else if (\"script\" === a.localName && !a.src || \"style\" === a.localName && !a.firstChild) a.__loaded = !0, b && b();else {\n      var c = function (d) {\n        a.removeEventListener(d.type, c);\n        a.__loaded = !0;\n        b && b();\n      };\n\n      a.addEventListener(\"load\", c);\n      v && \"style\" === a.localName || a.addEventListener(\"error\", c);\n    }\n  }\n\n  function r(a) {\n    return a.nodeType === Node.ELEMENT_NODE && \"link\" === a.localName && \"import\" === a.rel;\n  }\n\n  function h() {\n    var a = this;\n    this.a = {};\n    this.b = 0;\n    this.g = new MutationObserver(function (b) {\n      return a.w(b);\n    });\n    this.g.observe(document.head, {\n      childList: !0,\n      subtree: !0\n    });\n    this.loadImports(document);\n  }\n\n  function B(a) {\n    g(k(a, \"template\"), function (a) {\n      g(k(a.content, 'script:not([type]),script[type=\"application/javascript\"],script[type=\"text/javascript\"]'), function (a) {\n        var b = document.createElement(\"script\");\n        g(a.attributes, function (a) {\n          return b.setAttribute(a.name, a.value);\n        });\n        b.textContent = a.textContent;\n        a.parentNode.replaceChild(b, a);\n      });\n      B(a.content);\n    });\n  }\n\n  function k(a, b) {\n    return a.childNodes.length ? a.querySelectorAll(b) : E;\n  }\n\n  function g(a, b, c) {\n    var d = a ? a.length : 0,\n        f = c ? -1 : 1;\n\n    for (c = c ? d - 1 : 0; c < d && 0 <= c; c += f) b(a[c], c);\n  }\n\n  var n = document.createElement(\"link\"),\n      u = (\"import\" in n),\n      E = n.querySelectorAll(\"*\"),\n      w = null;\n  !1 === \"currentScript\" in document && Object.defineProperty(document, \"currentScript\", {\n    get: function () {\n      return w || (\"complete\" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);\n    },\n    configurable: !0\n  });\n  var F = /(url\\()([^)]*)(\\))/g,\n      G = /(@import[\\s]+(?!url\\())([^;]*)(;)/g,\n      H = /(<link[^>]*)(rel=['|\"]?stylesheet['|\"]?[^>]*>)/g,\n      e = {\n    u: function (a, b) {\n      a.href && a.setAttribute(\"href\", e.c(a.getAttribute(\"href\"), b));\n      a.src && a.setAttribute(\"src\", e.c(a.getAttribute(\"src\"), b));\n\n      if (\"style\" === a.localName) {\n        var c = e.o(a.textContent, b, F);\n        a.textContent = e.o(c, b, G);\n      }\n    },\n    o: function (a, b, c) {\n      return a.replace(c, function (a, c, l, g) {\n        a = l.replace(/[\"']/g, \"\");\n        b && (a = e.c(a, b));\n        return c + \"'\" + a + \"'\" + g;\n      });\n    },\n    c: function (a, b) {\n      if (void 0 === e.f) {\n        e.f = !1;\n\n        try {\n          var c = new URL(\"b\", \"http://a\");\n          c.pathname = \"c%20d\";\n          e.f = \"http://a/c%20d\" === c.href;\n        } catch (d) {}\n      }\n\n      if (e.f) return new URL(a, b).href;\n      c = e.s;\n      c || (c = document.implementation.createHTMLDocument(\"temp\"), e.s = c, c.i = c.createElement(\"base\"), c.head.appendChild(c.i), c.h = c.createElement(\"a\"));\n      c.i.href = b;\n      c.h.href = a;\n      return c.h.href || a;\n    }\n  },\n      C = {\n    async: !0,\n    load: function (a, b, c) {\n      if (a) {\n        if (a.match(/^data:/)) {\n          a = a.split(\",\");\n          var d = a[1];\n          d = -1 < a[0].indexOf(\";base64\") ? atob(d) : decodeURIComponent(d);\n          b(d);\n        } else {\n          var f = new XMLHttpRequest();\n          f.open(\"GET\", a, C.async);\n\n          f.onload = function () {\n            var a = f.responseURL || f.getResponseHeader(\"Location\");\n            a && 0 === a.indexOf(\"/\") && (a = (location.origin || location.protocol + \"//\" + location.host) + a);\n            var d = f.response || f.responseText;\n            304 === f.status || 0 === f.status || 200 <= f.status && 300 > f.status ? b(d, a) : c(d);\n          };\n\n          f.send();\n        }\n      } else c(\"error: href must be specified\");\n    }\n  },\n      v = /Trident/.test(navigator.userAgent) || /Edge\\/\\d./i.test(navigator.userAgent);\n\n  h.prototype.loadImports = function (a) {\n    var b = this;\n    g(k(a, \"link[rel=import]\"), function (a) {\n      return b.l(a);\n    });\n  };\n\n  h.prototype.l = function (a) {\n    var b = this,\n        c = a.href;\n\n    if (void 0 !== this.a[c]) {\n      var d = this.a[c];\n      d && d.__loaded && (a.__import = d, this.j(a));\n    } else this.b++, this.a[c] = \"pending\", C.load(c, function (a, d) {\n      a = b.A(a, d || c);\n      b.a[c] = a;\n      b.b--;\n      b.loadImports(a);\n      b.m();\n    }, function () {\n      b.a[c] = null;\n      b.b--;\n      b.m();\n    });\n  };\n\n  h.prototype.A = function (a, b) {\n    if (!a) return document.createDocumentFragment();\n    v && (a = a.replace(H, function (a, b, c) {\n      return -1 === a.indexOf(\"type=\") ? b + \" type=import-disable \" + c : a;\n    }));\n    var c = document.createElement(\"template\");\n    c.innerHTML = a;\n    if (c.content) a = c.content, B(a);else for (a = document.createDocumentFragment(); c.firstChild;) a.appendChild(c.firstChild);\n    if (c = a.querySelector(\"base\")) b = e.c(c.getAttribute(\"href\"), b), c.removeAttribute(\"href\");\n    var d = 0;\n    g(k(a, 'link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type=\"application/javascript\"],script[type=\"text/javascript\"]'), function (a) {\n      t(a);\n      e.u(a, b);\n      a.setAttribute(\"import-dependency\", \"\");\n      \"script\" === a.localName && !a.src && a.textContent && (a.setAttribute(\"src\", \"data:text/javascript;charset=utf-8,\" + encodeURIComponent(a.textContent + (\"\\n//# sourceURL=\" + b + (d ? \"-\" + d : \"\") + \".js\\n\"))), a.textContent = \"\", d++);\n    });\n    return a;\n  };\n\n  h.prototype.m = function () {\n    var a = this;\n\n    if (!this.b) {\n      this.g.disconnect();\n      this.flatten(document);\n\n      var b = !1,\n          c = !1,\n          d = function () {\n        c && b && (a.loadImports(document), a.b || (a.g.observe(document.head, {\n          childList: !0,\n          subtree: !0\n        }), a.v()));\n      };\n\n      this.C(function () {\n        c = !0;\n        d();\n      });\n      this.B(function () {\n        b = !0;\n        d();\n      });\n    }\n  };\n\n  h.prototype.flatten = function (a) {\n    var b = this;\n    g(k(a, \"link[rel=import]\"), function (a) {\n      var c = b.a[a.href];\n      (a.__import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = \"loading\", a.__import = a, b.flatten(c), a.appendChild(c));\n    });\n  };\n\n  h.prototype.B = function (a) {\n    function b(f) {\n      if (f < d) {\n        var l = c[f],\n            e = document.createElement(\"script\");\n        l.removeAttribute(\"import-dependency\");\n        g(l.attributes, function (a) {\n          return e.setAttribute(a.name, a.value);\n        });\n        w = e;\n        l.parentNode.replaceChild(e, l);\n        t(e, function () {\n          w = null;\n          b(f + 1);\n        });\n      } else a();\n    }\n\n    var c = k(document, \"script[import-dependency]\"),\n        d = c.length;\n    b(0);\n  };\n\n  h.prototype.C = function (a) {\n    var b = k(document, \"style[import-dependency],link[rel=stylesheet][import-dependency]\"),\n        c = b.length;\n\n    if (c) {\n      var d = v && !!document.querySelector(\"link[rel=stylesheet][href][type=import-disable]\");\n      g(b, function (b) {\n        t(b, function () {\n          b.removeAttribute(\"import-dependency\");\n          0 === --c && a();\n        });\n\n        if (d && b.parentNode !== document.head) {\n          var e = document.createElement(b.localName);\n          e.__appliedElement = b;\n          e.setAttribute(\"type\", \"import-placeholder\");\n          b.parentNode.insertBefore(e, b.nextSibling);\n\n          for (e = m(b); e && m(e);) e = m(e);\n\n          e.parentNode !== document.head && (e = null);\n          document.head.insertBefore(b, e);\n          b.removeAttribute(\"type\");\n        }\n      });\n    } else a();\n  };\n\n  h.prototype.v = function () {\n    var a = this;\n    g(k(document, \"link[rel=import]\"), function (b) {\n      return a.j(b);\n    }, !0);\n  };\n\n  h.prototype.j = function (a) {\n    a.__loaded || (a.__loaded = !0, a.import && (a.import.readyState = \"complete\"), a.dispatchEvent(y(a.import ? \"load\" : \"error\", {\n      bubbles: !1,\n      cancelable: !1,\n      detail: void 0\n    })));\n  };\n\n  h.prototype.w = function (a) {\n    var b = this;\n    g(a, function (a) {\n      return g(a.addedNodes, function (a) {\n        a && a.nodeType === Node.ELEMENT_NODE && (r(a) ? b.l(a) : b.loadImports(a));\n      });\n    });\n  };\n\n  var x = null;\n  if (u) g(k(document, \"link[rel=import]\"), function (a) {\n    a.import && \"loading\" === a.import.readyState || (a.__loaded = !0);\n  }), n = function (a) {\n    a = a.target;\n    r(a) && (a.__loaded = !0);\n  }, document.addEventListener(\"load\", n, !0), document.addEventListener(\"error\", n, !0);else {\n    var p = Object.getOwnPropertyDescriptor(Node.prototype, \"baseURI\");\n    Object.defineProperty((!p || p.configurable ? Node : Element).prototype, \"baseURI\", {\n      get: function () {\n        var a = r(this) ? this : m(this);\n        return a ? a.href : p && p.get ? p.get.call(this) : (document.querySelector(\"base\") || window.location).href;\n      },\n      configurable: !0,\n      enumerable: !0\n    });\n    Object.defineProperty(HTMLLinkElement.prototype, \"import\", {\n      get: function () {\n        return this.__import || null;\n      },\n      configurable: !0,\n      enumerable: !0\n    });\n    z(function () {\n      x = new h();\n    });\n  }\n  A(function () {\n    return document.dispatchEvent(y(\"HTMLImportsLoaded\", {\n      cancelable: !0,\n      bubbles: !0,\n      detail: void 0\n    }));\n  });\n  q.useNative = u;\n  q.whenReady = A;\n  q.importForElement = m;\n\n  q.loadImports = function (a) {\n    x && x.loadImports(a);\n  };\n})(window.HTMLImports = window.HTMLImports || {});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzb3VyY2VzL2h0bWwtaW1wb3J0L3BvbHlmaWxsLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9odG1sLWltcG9ydC9wb2x5ZmlsbC5qcz9kNjU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlICovXG4vKlxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbihmdW5jdGlvbiAocSkge1xuICBmdW5jdGlvbiB5KGEsIGIpIHtcbiAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2Ygd2luZG93LkN1c3RvbUV2ZW50KSByZXR1cm4gbmV3IEN1c3RvbUV2ZW50KGEsIGIpO1xuICAgIHZhciBjID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICBjLmluaXRDdXN0b21FdmVudChhLCAhIWIuYnViYmxlcywgISFiLmNhbmNlbGFibGUsIGIuZGV0YWlsKTtcbiAgICByZXR1cm4gYztcbiAgfVxuICBmdW5jdGlvbiBtKGEpIHtcbiAgICBpZiAodSkgcmV0dXJuIGEub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQgPyBhLm93bmVyRG9jdW1lbnQgOiBudWxsO1xuICAgIHZhciBiID0gYS5fX2ltcG9ydERvYztcbiAgICBpZiAoIWIgJiYgYS5wYXJlbnROb2RlKSB7XG4gICAgICBiID0gYS5wYXJlbnROb2RlO1xuICAgICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGIuY2xvc2VzdCkgYiA9IGIuY2xvc2VzdChcImxpbmtbcmVsPWltcG9ydF1cIik7XG4gICAgICBlbHNlIGZvciAoOyAhcihiKSAmJiAoYiA9IGIucGFyZW50Tm9kZSk7ICk7XG4gICAgICBhLl9faW1wb3J0RG9jID0gYjtcbiAgICB9XG4gICAgcmV0dXJuIGI7XG4gIH1cbiAgZnVuY3Rpb24gRChhKSB7XG4gICAgdmFyIGIgPSBrKGRvY3VtZW50LCBcImxpbmtbcmVsPWltcG9ydF06bm90KFtpbXBvcnQtZGVwZW5kZW5jeV0pXCIpLFxuICAgICAgYyA9IGIubGVuZ3RoO1xuICAgIGNcbiAgICAgID8gZyhiLCBmdW5jdGlvbiAoYikge1xuICAgICAgICAgIHJldHVybiB0KGIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIDAgPT09IC0tYyAmJiBhKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICA6IGEoKTtcbiAgfVxuICBmdW5jdGlvbiB6KGEpIHtcbiAgICBmdW5jdGlvbiBiKCkge1xuICAgICAgXCJsb2FkaW5nXCIgIT09IGRvY3VtZW50LnJlYWR5U3RhdGUgJiZcbiAgICAgICAgZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgYiksIGEoKSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGIpO1xuICAgIGIoKTtcbiAgfVxuICBmdW5jdGlvbiBBKGEpIHtcbiAgICB6KGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBEKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGEgJiYgYSgpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgZnVuY3Rpb24gdChhLCBiKSB7XG4gICAgaWYgKGEuX19sb2FkZWQpIGIgJiYgYigpO1xuICAgIGVsc2UgaWYgKFxuICAgICAgKFwic2NyaXB0XCIgPT09IGEubG9jYWxOYW1lICYmICFhLnNyYykgfHxcbiAgICAgIChcInN0eWxlXCIgPT09IGEubG9jYWxOYW1lICYmICFhLmZpcnN0Q2hpbGQpXG4gICAgKVxuICAgICAgKGEuX19sb2FkZWQgPSAhMCksIGIgJiYgYigpO1xuICAgIGVsc2Uge1xuICAgICAgdmFyIGMgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICBhLnJlbW92ZUV2ZW50TGlzdGVuZXIoZC50eXBlLCBjKTtcbiAgICAgICAgYS5fX2xvYWRlZCA9ICEwO1xuICAgICAgICBiICYmIGIoKTtcbiAgICAgIH07XG4gICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGMpO1xuICAgICAgKHYgJiYgXCJzdHlsZVwiID09PSBhLmxvY2FsTmFtZSkgfHwgYS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgYyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHIoYSkge1xuICAgIHJldHVybiAoXG4gICAgICBhLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgXCJsaW5rXCIgPT09IGEubG9jYWxOYW1lICYmXG4gICAgICBcImltcG9ydFwiID09PSBhLnJlbFxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaCgpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgdGhpcy5hID0ge307XG4gICAgdGhpcy5iID0gMDtcbiAgICB0aGlzLmcgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbiAoYikge1xuICAgICAgcmV0dXJuIGEudyhiKTtcbiAgICB9KTtcbiAgICB0aGlzLmcub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwIH0pO1xuICAgIHRoaXMubG9hZEltcG9ydHMoZG9jdW1lbnQpO1xuICB9XG4gIGZ1bmN0aW9uIEIoYSkge1xuICAgIGcoayhhLCBcInRlbXBsYXRlXCIpLCBmdW5jdGlvbiAoYSkge1xuICAgICAgZyhcbiAgICAgICAgayhcbiAgICAgICAgICBhLmNvbnRlbnQsXG4gICAgICAgICAgJ3NjcmlwdDpub3QoW3R5cGVdKSxzY3JpcHRbdHlwZT1cImFwcGxpY2F0aW9uL2phdmFzY3JpcHRcIl0sc2NyaXB0W3R5cGU9XCJ0ZXh0L2phdmFzY3JpcHRcIl0nXG4gICAgICAgICksXG4gICAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgdmFyIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgIGcoYS5hdHRyaWJ1dGVzLCBmdW5jdGlvbiAoYSkge1xuICAgICAgICAgICAgcmV0dXJuIGIuc2V0QXR0cmlidXRlKGEubmFtZSwgYS52YWx1ZSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgYi50ZXh0Q29udGVudCA9IGEudGV4dENvbnRlbnQ7XG4gICAgICAgICAgYS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChiLCBhKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIEIoYS5jb250ZW50KTtcbiAgICB9KTtcbiAgfVxuICBmdW5jdGlvbiBrKGEsIGIpIHtcbiAgICByZXR1cm4gYS5jaGlsZE5vZGVzLmxlbmd0aCA/IGEucXVlcnlTZWxlY3RvckFsbChiKSA6IEU7XG4gIH1cbiAgZnVuY3Rpb24gZyhhLCBiLCBjKSB7XG4gICAgdmFyIGQgPSBhID8gYS5sZW5ndGggOiAwLFxuICAgICAgZiA9IGMgPyAtMSA6IDE7XG4gICAgZm9yIChjID0gYyA/IGQgLSAxIDogMDsgYyA8IGQgJiYgMCA8PSBjOyBjICs9IGYpIGIoYVtjXSwgYyk7XG4gIH1cbiAgdmFyIG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKSxcbiAgICB1ID0gXCJpbXBvcnRcIiBpbiBuLFxuICAgIEUgPSBuLnF1ZXJ5U2VsZWN0b3JBbGwoXCIqXCIpLFxuICAgIHcgPSBudWxsO1xuICAhMSA9PT0gXCJjdXJyZW50U2NyaXB0XCIgaW4gZG9jdW1lbnQgJiZcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQsIFwiY3VycmVudFNjcmlwdFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICB3IHx8XG4gICAgICAgICAgKFwiY29tcGxldGVcIiAhPT0gZG9jdW1lbnQucmVhZHlTdGF0ZVxuICAgICAgICAgICAgPyBkb2N1bWVudC5zY3JpcHRzW2RvY3VtZW50LnNjcmlwdHMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgIDogbnVsbClcbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIH0pO1xuICB2YXIgRiA9IC8odXJsXFwoKShbXildKikoXFwpKS9nLFxuICAgIEcgPSAvKEBpbXBvcnRbXFxzXSsoPyF1cmxcXCgpKShbXjtdKikoOykvZyxcbiAgICBIID0gLyg8bGlua1tePl0qKShyZWw9Wyd8XCJdP3N0eWxlc2hlZXRbJ3xcIl0/W14+XSo+KS9nLFxuICAgIGUgPSB7XG4gICAgICB1OiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBhLmhyZWYgJiYgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGUuYyhhLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIGIpKTtcbiAgICAgICAgYS5zcmMgJiYgYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZS5jKGEuZ2V0QXR0cmlidXRlKFwic3JjXCIpLCBiKSk7XG4gICAgICAgIGlmIChcInN0eWxlXCIgPT09IGEubG9jYWxOYW1lKSB7XG4gICAgICAgICAgdmFyIGMgPSBlLm8oYS50ZXh0Q29udGVudCwgYiwgRik7XG4gICAgICAgICAgYS50ZXh0Q29udGVudCA9IGUubyhjLCBiLCBHKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG86IGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIHJldHVybiBhLnJlcGxhY2UoYywgZnVuY3Rpb24gKGEsIGMsIGwsIGcpIHtcbiAgICAgICAgICBhID0gbC5yZXBsYWNlKC9bXCInXS9nLCBcIlwiKTtcbiAgICAgICAgICBiICYmIChhID0gZS5jKGEsIGIpKTtcbiAgICAgICAgICByZXR1cm4gYyArIFwiJ1wiICsgYSArIFwiJ1wiICsgZztcbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgYzogZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZS5mKSB7XG4gICAgICAgICAgZS5mID0gITE7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjID0gbmV3IFVSTChcImJcIiwgXCJodHRwOi8vYVwiKTtcbiAgICAgICAgICAgIGMucGF0aG5hbWUgPSBcImMlMjBkXCI7XG4gICAgICAgICAgICBlLmYgPSBcImh0dHA6Ly9hL2MlMjBkXCIgPT09IGMuaHJlZjtcbiAgICAgICAgICB9IGNhdGNoIChkKSB7fVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmYpIHJldHVybiBuZXcgVVJMKGEsIGIpLmhyZWY7XG4gICAgICAgIGMgPSBlLnM7XG4gICAgICAgIGMgfHxcbiAgICAgICAgICAoKGMgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJ0ZW1wXCIpKSxcbiAgICAgICAgICAoZS5zID0gYyksXG4gICAgICAgICAgKGMuaSA9IGMuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLFxuICAgICAgICAgIGMuaGVhZC5hcHBlbmRDaGlsZChjLmkpLFxuICAgICAgICAgIChjLmggPSBjLmNyZWF0ZUVsZW1lbnQoXCJhXCIpKSk7XG4gICAgICAgIGMuaS5ocmVmID0gYjtcbiAgICAgICAgYy5oLmhyZWYgPSBhO1xuICAgICAgICByZXR1cm4gYy5oLmhyZWYgfHwgYTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBDID0ge1xuICAgICAgYXN5bmM6ICEwLFxuICAgICAgbG9hZDogZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgICAgaWYgKGEpXG4gICAgICAgICAgaWYgKGEubWF0Y2goL15kYXRhOi8pKSB7XG4gICAgICAgICAgICBhID0gYS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICB2YXIgZCA9IGFbMV07XG4gICAgICAgICAgICBkID0gLTEgPCBhWzBdLmluZGV4T2YoXCI7YmFzZTY0XCIpID8gYXRvYihkKSA6IGRlY29kZVVSSUNvbXBvbmVudChkKTtcbiAgICAgICAgICAgIGIoZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICBmLm9wZW4oXCJHRVRcIiwgYSwgQy5hc3luYyk7XG4gICAgICAgICAgICBmLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIGEgPSBmLnJlc3BvbnNlVVJMIHx8IGYuZ2V0UmVzcG9uc2VIZWFkZXIoXCJMb2NhdGlvblwiKTtcbiAgICAgICAgICAgICAgYSAmJlxuICAgICAgICAgICAgICAgIDAgPT09IGEuaW5kZXhPZihcIi9cIikgJiZcbiAgICAgICAgICAgICAgICAoYSA9XG4gICAgICAgICAgICAgICAgICAobG9jYXRpb24ub3JpZ2luIHx8XG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdCkgKyBhKTtcbiAgICAgICAgICAgICAgdmFyIGQgPSBmLnJlc3BvbnNlIHx8IGYucmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgICAzMDQgPT09IGYuc3RhdHVzIHx8XG4gICAgICAgICAgICAgIDAgPT09IGYuc3RhdHVzIHx8XG4gICAgICAgICAgICAgICgyMDAgPD0gZi5zdGF0dXMgJiYgMzAwID4gZi5zdGF0dXMpXG4gICAgICAgICAgICAgICAgPyBiKGQsIGEpXG4gICAgICAgICAgICAgICAgOiBjKGQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGYuc2VuZCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgZWxzZSBjKFwiZXJyb3I6IGhyZWYgbXVzdCBiZSBzcGVjaWZpZWRcIik7XG4gICAgICB9LFxuICAgIH0sXG4gICAgdiA9XG4gICAgICAvVHJpZGVudC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSB8fFxuICAgICAgL0VkZ2VcXC9cXGQuL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcbiAgaC5wcm90b3R5cGUubG9hZEltcG9ydHMgPSBmdW5jdGlvbiAoYSkge1xuICAgIHZhciBiID0gdGhpcztcbiAgICBnKGsoYSwgXCJsaW5rW3JlbD1pbXBvcnRdXCIpLCBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGIubChhKTtcbiAgICB9KTtcbiAgfTtcbiAgaC5wcm90b3R5cGUubCA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSB0aGlzLFxuICAgICAgYyA9IGEuaHJlZjtcbiAgICBpZiAodm9pZCAwICE9PSB0aGlzLmFbY10pIHtcbiAgICAgIHZhciBkID0gdGhpcy5hW2NdO1xuICAgICAgZCAmJiBkLl9fbG9hZGVkICYmICgoYS5fX2ltcG9ydCA9IGQpLCB0aGlzLmooYSkpO1xuICAgIH0gZWxzZVxuICAgICAgdGhpcy5iKyssXG4gICAgICAgICh0aGlzLmFbY10gPSBcInBlbmRpbmdcIiksXG4gICAgICAgIEMubG9hZChcbiAgICAgICAgICBjLFxuICAgICAgICAgIGZ1bmN0aW9uIChhLCBkKSB7XG4gICAgICAgICAgICBhID0gYi5BKGEsIGQgfHwgYyk7XG4gICAgICAgICAgICBiLmFbY10gPSBhO1xuICAgICAgICAgICAgYi5iLS07XG4gICAgICAgICAgICBiLmxvYWRJbXBvcnRzKGEpO1xuICAgICAgICAgICAgYi5tKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiLmFbY10gPSBudWxsO1xuICAgICAgICAgICAgYi5iLS07XG4gICAgICAgICAgICBiLm0oKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gIH07XG4gIGgucHJvdG90eXBlLkEgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgIGlmICghYSkgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICB2ICYmXG4gICAgICAoYSA9IGEucmVwbGFjZShILCBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gLTEgPT09IGEuaW5kZXhPZihcInR5cGU9XCIpID8gYiArIFwiIHR5cGU9aW1wb3J0LWRpc2FibGUgXCIgKyBjIDogYTtcbiAgICAgIH0pKTtcbiAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICBjLmlubmVySFRNTCA9IGE7XG4gICAgaWYgKGMuY29udGVudCkgKGEgPSBjLmNvbnRlbnQpLCBCKGEpO1xuICAgIGVsc2VcbiAgICAgIGZvciAoYSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgYy5maXJzdENoaWxkOyApXG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoYy5maXJzdENoaWxkKTtcbiAgICBpZiAoKGMgPSBhLnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpKSlcbiAgICAgIChiID0gZS5jKGMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSwgYikpLCBjLnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgdmFyIGQgPSAwO1xuICAgIGcoXG4gICAgICBrKFxuICAgICAgICBhLFxuICAgICAgICAnbGlua1tyZWw9aW1wb3J0XSxsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXVt0eXBlPWltcG9ydC1kaXNhYmxlXSxzdHlsZTpub3QoW3R5cGVdKSxsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXTpub3QoW3R5cGVdKSxzY3JpcHQ6bm90KFt0eXBlXSksc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLHNjcmlwdFt0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdJ1xuICAgICAgKSxcbiAgICAgIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgIHQoYSk7XG4gICAgICAgIGUudShhLCBiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiLCBcIlwiKTtcbiAgICAgICAgXCJzY3JpcHRcIiA9PT0gYS5sb2NhbE5hbWUgJiZcbiAgICAgICAgICAhYS5zcmMgJiZcbiAgICAgICAgICBhLnRleHRDb250ZW50ICYmXG4gICAgICAgICAgKGEuc2V0QXR0cmlidXRlKFxuICAgICAgICAgICAgXCJzcmNcIixcbiAgICAgICAgICAgIFwiZGF0YTp0ZXh0L2phdmFzY3JpcHQ7Y2hhcnNldD11dGYtOCxcIiArXG4gICAgICAgICAgICAgIGVuY29kZVVSSUNvbXBvbmVudChcbiAgICAgICAgICAgICAgICBhLnRleHRDb250ZW50ICtcbiAgICAgICAgICAgICAgICAgIChcIlxcbi8vIyBzb3VyY2VVUkw9XCIgKyBiICsgKGQgPyBcIi1cIiArIGQgOiBcIlwiKSArIFwiLmpzXFxuXCIpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIChhLnRleHRDb250ZW50ID0gXCJcIiksXG4gICAgICAgICAgZCsrKTtcbiAgICAgIH1cbiAgICApO1xuICAgIHJldHVybiBhO1xuICB9O1xuICBoLnByb3RvdHlwZS5tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhID0gdGhpcztcbiAgICBpZiAoIXRoaXMuYikge1xuICAgICAgdGhpcy5nLmRpc2Nvbm5lY3QoKTtcbiAgICAgIHRoaXMuZmxhdHRlbihkb2N1bWVudCk7XG4gICAgICB2YXIgYiA9ICExLFxuICAgICAgICBjID0gITEsXG4gICAgICAgIGQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgYyAmJlxuICAgICAgICAgICAgYiAmJlxuICAgICAgICAgICAgKGEubG9hZEltcG9ydHMoZG9jdW1lbnQpLFxuICAgICAgICAgICAgYS5iIHx8XG4gICAgICAgICAgICAgIChhLmcub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwIH0pLFxuICAgICAgICAgICAgICBhLnYoKSkpO1xuICAgICAgICB9O1xuICAgICAgdGhpcy5DKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYyA9ICEwO1xuICAgICAgICBkKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuQihmdW5jdGlvbiAoKSB7XG4gICAgICAgIGIgPSAhMDtcbiAgICAgICAgZCgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuICBoLnByb3RvdHlwZS5mbGF0dGVuID0gZnVuY3Rpb24gKGEpIHtcbiAgICB2YXIgYiA9IHRoaXM7XG4gICAgZyhrKGEsIFwibGlua1tyZWw9aW1wb3J0XVwiKSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIHZhciBjID0gYi5hW2EuaHJlZl07XG4gICAgICAoYS5fX2ltcG9ydCA9IGMpICYmXG4gICAgICAgIGMubm9kZVR5cGUgPT09IE5vZGUuRE9DVU1FTlRfRlJBR01FTlRfTk9ERSAmJlxuICAgICAgICAoKGIuYVthLmhyZWZdID0gYSksXG4gICAgICAgIChhLnJlYWR5U3RhdGUgPSBcImxvYWRpbmdcIiksXG4gICAgICAgIChhLl9faW1wb3J0ID0gYSksXG4gICAgICAgIGIuZmxhdHRlbihjKSxcbiAgICAgICAgYS5hcHBlbmRDaGlsZChjKSk7XG4gICAgfSk7XG4gIH07XG4gIGgucHJvdG90eXBlLkIgPSBmdW5jdGlvbiAoYSkge1xuICAgIGZ1bmN0aW9uIGIoZikge1xuICAgICAgaWYgKGYgPCBkKSB7XG4gICAgICAgIHZhciBsID0gY1tmXSxcbiAgICAgICAgICBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgbC5yZW1vdmVBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiKTtcbiAgICAgICAgZyhsLmF0dHJpYnV0ZXMsIGZ1bmN0aW9uIChhKSB7XG4gICAgICAgICAgcmV0dXJuIGUuc2V0QXR0cmlidXRlKGEubmFtZSwgYS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3ID0gZTtcbiAgICAgICAgbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlLCBsKTtcbiAgICAgICAgdChlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdyA9IG51bGw7XG4gICAgICAgICAgYihmICsgMSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGEoKTtcbiAgICB9XG4gICAgdmFyIGMgPSBrKGRvY3VtZW50LCBcInNjcmlwdFtpbXBvcnQtZGVwZW5kZW5jeV1cIiksXG4gICAgICBkID0gYy5sZW5ndGg7XG4gICAgYigwKTtcbiAgfTtcbiAgaC5wcm90b3R5cGUuQyA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSBrKFxuICAgICAgICBkb2N1bWVudCxcbiAgICAgICAgXCJzdHlsZVtpbXBvcnQtZGVwZW5kZW5jeV0sbGlua1tyZWw9c3R5bGVzaGVldF1baW1wb3J0LWRlcGVuZGVuY3ldXCJcbiAgICAgICksXG4gICAgICBjID0gYi5sZW5ndGg7XG4gICAgaWYgKGMpIHtcbiAgICAgIHZhciBkID1cbiAgICAgICAgdiAmJlxuICAgICAgICAhIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCJsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXVt0eXBlPWltcG9ydC1kaXNhYmxlXVwiXG4gICAgICAgICk7XG4gICAgICBnKGIsIGZ1bmN0aW9uIChiKSB7XG4gICAgICAgIHQoYiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGIucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7XG4gICAgICAgICAgMCA9PT0gLS1jICYmIGEoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChkICYmIGIucGFyZW50Tm9kZSAhPT0gZG9jdW1lbnQuaGVhZCkge1xuICAgICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChiLmxvY2FsTmFtZSk7XG4gICAgICAgICAgZS5fX2FwcGxpZWRFbGVtZW50ID0gYjtcbiAgICAgICAgICBlLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJpbXBvcnQtcGxhY2Vob2xkZXJcIik7XG4gICAgICAgICAgYi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShlLCBiLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICBmb3IgKGUgPSBtKGIpOyBlICYmIG0oZSk7ICkgZSA9IG0oZSk7XG4gICAgICAgICAgZS5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkICYmIChlID0gbnVsbCk7XG4gICAgICAgICAgZG9jdW1lbnQuaGVhZC5pbnNlcnRCZWZvcmUoYiwgZSk7XG4gICAgICAgICAgYi5yZW1vdmVBdHRyaWJ1dGUoXCJ0eXBlXCIpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2UgYSgpO1xuICB9O1xuICBoLnByb3RvdHlwZS52ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBhID0gdGhpcztcbiAgICBnKFxuICAgICAgayhkb2N1bWVudCwgXCJsaW5rW3JlbD1pbXBvcnRdXCIpLFxuICAgICAgZnVuY3Rpb24gKGIpIHtcbiAgICAgICAgcmV0dXJuIGEuaihiKTtcbiAgICAgIH0sXG4gICAgICAhMFxuICAgICk7XG4gIH07XG4gIGgucHJvdG90eXBlLmogPSBmdW5jdGlvbiAoYSkge1xuICAgIGEuX19sb2FkZWQgfHxcbiAgICAgICgoYS5fX2xvYWRlZCA9ICEwKSxcbiAgICAgIGEuaW1wb3J0ICYmIChhLmltcG9ydC5yZWFkeVN0YXRlID0gXCJjb21wbGV0ZVwiKSxcbiAgICAgIGEuZGlzcGF0Y2hFdmVudChcbiAgICAgICAgeShhLmltcG9ydCA/IFwibG9hZFwiIDogXCJlcnJvclwiLCB7XG4gICAgICAgICAgYnViYmxlczogITEsXG4gICAgICAgICAgY2FuY2VsYWJsZTogITEsXG4gICAgICAgICAgZGV0YWlsOiB2b2lkIDAsXG4gICAgICAgIH0pXG4gICAgICApKTtcbiAgfTtcbiAgaC5wcm90b3R5cGUudyA9IGZ1bmN0aW9uIChhKSB7XG4gICAgdmFyIGIgPSB0aGlzO1xuICAgIGcoYSwgZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBnKGEuYWRkZWROb2RlcywgZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgYSAmJlxuICAgICAgICAgIGEubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmXG4gICAgICAgICAgKHIoYSkgPyBiLmwoYSkgOiBiLmxvYWRJbXBvcnRzKGEpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuICB2YXIgeCA9IG51bGw7XG4gIGlmICh1KVxuICAgIGcoayhkb2N1bWVudCwgXCJsaW5rW3JlbD1pbXBvcnRdXCIpLCBmdW5jdGlvbiAoYSkge1xuICAgICAgKGEuaW1wb3J0ICYmIFwibG9hZGluZ1wiID09PSBhLmltcG9ydC5yZWFkeVN0YXRlKSB8fCAoYS5fX2xvYWRlZCA9ICEwKTtcbiAgICB9KSxcbiAgICAgIChuID0gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgYSA9IGEudGFyZ2V0O1xuICAgICAgICByKGEpICYmIChhLl9fbG9hZGVkID0gITApO1xuICAgICAgfSksXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBuLCAhMCksXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgbiwgITApO1xuICBlbHNlIHtcbiAgICB2YXIgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsIFwiYmFzZVVSSVwiKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAoIXAgfHwgcC5jb25maWd1cmFibGUgPyBOb2RlIDogRWxlbWVudCkucHJvdG90eXBlLFxuICAgICAgXCJiYXNlVVJJXCIsXG4gICAgICB7XG4gICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBhID0gcih0aGlzKSA/IHRoaXMgOiBtKHRoaXMpO1xuICAgICAgICAgIHJldHVybiBhXG4gICAgICAgICAgICA/IGEuaHJlZlxuICAgICAgICAgICAgOiBwICYmIHAuZ2V0XG4gICAgICAgICAgICA/IHAuZ2V0LmNhbGwodGhpcylcbiAgICAgICAgICAgIDogKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpIHx8IHdpbmRvdy5sb2NhdGlvbikuaHJlZjtcbiAgICAgICAgfSxcbiAgICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICB9XG4gICAgKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoSFRNTExpbmtFbGVtZW50LnByb3RvdHlwZSwgXCJpbXBvcnRcIiwge1xuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9faW1wb3J0IHx8IG51bGw7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgIH0pO1xuICAgIHooZnVuY3Rpb24gKCkge1xuICAgICAgeCA9IG5ldyBoKCk7XG4gICAgfSk7XG4gIH1cbiAgQShmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoXG4gICAgICB5KFwiSFRNTEltcG9ydHNMb2FkZWRcIiwgeyBjYW5jZWxhYmxlOiAhMCwgYnViYmxlczogITAsIGRldGFpbDogdm9pZCAwIH0pXG4gICAgKTtcbiAgfSk7XG4gIHEudXNlTmF0aXZlID0gdTtcbiAgcS53aGVuUmVhZHkgPSBBO1xuICBxLmltcG9ydEZvckVsZW1lbnQgPSBtO1xuICBxLmxvYWRJbXBvcnRzID0gZnVuY3Rpb24gKGEpIHtcbiAgICB4ICYmIHgubG9hZEltcG9ydHMoYSk7XG4gIH07XG59KSgod2luZG93LkhUTUxJbXBvcnRzID0gd2luZG93LkhUTUxJbXBvcnRzIHx8IHt9KSk7XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUVBO0FBQ0E7QUFNQTtBQUNBO0FBVEE7QUFXQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBcENBO0FBSEE7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBeEJBO0FBMEJBO0FBN0JBO0FBekNBO0FBQ0E7QUEwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBVkE7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/resources/html-import/polyfill.js\n");

/***/ })

}]);