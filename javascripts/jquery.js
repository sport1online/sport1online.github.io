!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
        if (!a.document)throw new Error("jQuery requires a window with a document");
        return b(a)
    } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = a.document, m = "2.1.1", n = function (a, b) {
        return new n.fn.init(a, b)
    }, o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, p = /^-ms-/, q = /-([\da-z])/gi, r = function (a, b) {
        return b.toUpperCase()
    };
    n.fn = n.prototype = {
        jquery: m, constructor: n, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = n.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return n.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(n.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, n.extend = n.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || n.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (a = arguments[h]))for (b in a)c = g[b], d = a[b], g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1, f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {}, g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
        return g
    }, n.extend({
        expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === n.type(a)
        }, isArray: Array.isArray, isWindow: function (a) {
            return null != a && a === a.window
        }, isNumeric: function (a) {
            return !n.isArray(a) && a - parseFloat(a) >= 0
        }, isPlainObject: function (a) {
            return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (a) {
            var b, c = eval;
            a = n.trim(a), a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"), b.text = a, l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
        }, camelCase: function (a) {
            return a.replace(p, "ms-").replace(q, r)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = s(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(o, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            return null == b ? -1 : g.call(b, a, c)
        }, merge: function (a, b) {
            for (var c = +b.length, d = 0, e = a.length; c > d; d++)a[e++] = b[d];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = s(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (c = a[b], b = a, a = c), n.isFunction(a) ? (e = d.call(arguments, 2), f = function () {
                return a.apply(b || this, e.concat(d.call(arguments)))
            }, f.guid = a.guid = a.guid || n.guid++, f) : void 0
        }, now: Date.now, support: k
    }), n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function s(a) {
        var b = a.length, c = n.type(a);
        return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var t = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date, v = a.document, w = 0, x = 0, y = gb(), z = gb(), A = gb(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C = "undefined", D = 1 << 31, E = {}.hasOwnProperty, F = [], G = F.pop, H = F.push, I = F.push, J = F.slice, K = F.indexOf || function (a) {
                for (var b = 0, c = this.length; c > b; b++)if (this[b] === a)return b;
                return -1
            }, L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", O = N.replace("w", "w#"), P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]", Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)", R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"), S = new RegExp("^" + M + "*," + M + "*"), T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"), V = new RegExp(Q), W = new RegExp("^" + O + "$"), X = {
            ID: new RegExp("^#(" + N + ")"),
            CLASS: new RegExp("^\\.(" + N + ")"),
            TAG: new RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + P),
            PSEUDO: new RegExp("^" + Q),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + L + ")$", "i"),
            needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i")
        }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"), db = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        };
        try {
            I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType
        } catch (eb) {
            I = {
                apply: F.length ? function (a, b) {
                    H.apply(a, J.call(b))
                } : function (a, b) {
                    var c = a.length, d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }
        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a)return d;
            if (1 !== (k = b.nodeType) && 9 !== k)return [];
            if (p && !e) {
                if (f = _.exec(a))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return I.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName)return I.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return I.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function hb(a) {
            return a[u] = !0, a
        }

        function ib(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function jb(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function lb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function mb(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function nb(a) {
            return hb(function (b) {
                return b = +b, hb(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) {
            return a && typeof a.getElementsByTagName !== C && a
        }

        c = fb.support = {}, f = fb.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = fb.setDocument = function (a) {
            var b, e = a ? a.ownerDocument || a : v, g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function () {
                m()
            }, !1) : g.attachEvent && g.attachEvent("onunload", function () {
                m()
            })), c.attributes = ib(function (a) {
                return a.className = "i", !a.getAttribute("className")
            }), c.getElementsByTagName = ib(function (a) {
                return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length
            }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function (a) {
                    return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
                }), c.getById = ib(function (a) {
                return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length
            }), c.getById ? (d.find.ID = function (a, b) {
                if (typeof b.getElementById !== C && p) {
                    var c = b.getElementById(a);
                    return c && c.parentNode ? [c] : []
                }
            }, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    return a.getAttribute("id") === b
                }
            }) : (delete d.find.ID, d.filter.ID = function (a) {
                var b = a.replace(cb, db);
                return function (a) {
                    var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id");
                    return c && c.value === b
                }
            }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0
            } : function (a, b) {
                var c, d = [], e = 0, f = b.getElementsByTagName(a);
                if ("*" === a) {
                    while (c = f[e++])1 === c.nodeType && d.push(c);
                    return d
                }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                    return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0
                }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function (a) {
                a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked")
            }), ib(function (a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function (a) {
                c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q)
            }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function (a, b) {
                if (b)while (b = b.parentNode)if (b === a)return !0;
                return !1
            }, B = b ? function (a, b) {
                if (a === b)return l = !0, 0;
                var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1)
            } : function (a, b) {
                if (a === b)return l = !0, 0;
                var c, d = 0, f = a.parentNode, g = b.parentNode, h = [a], i = [b];
                if (!f || !g)return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g)return kb(a, b);
                c = a;
                while (c = c.parentNode)h.unshift(c);
                c = b;
                while (c = c.parentNode)i.unshift(c);
                while (h[d] === i[d])d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function (a, b) {
            return fb(a, null, null, b)
        }, fb.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, fb.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, fb.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = fb.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(cb, db).toLowerCase();
                    return "*" === a ? function () {
                        return !0
                    } : function (a) {
                        return a.nodeName && a.nodeName.toLowerCase() === b
                    }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = fb.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                        return !!a.parentNode
                    } : function (b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                    k[a] = [w, n, m];
                                    break
                                }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                            return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function (a, c) {
                        var d, f = e(a, b), g = f.length;
                        while (g--)d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function (a) {
                        return e(a, 0, c)
                    }) : e
                }
            },
            pseudos: {
                not: hb(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function (a, b, c, e) {
                        var f, g = d(a, null, e, []), h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function (a, e, f) {
                        return b[0] = a, d(b, null, f, c), !c.pop()
                    }
                }), has: hb(function (a) {
                    return function (b) {
                        return fb(a, b).length > 0
                    }
                }), contains: hb(function (a) {
                    return function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: hb(function (a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: nb(function () {
                    return [0]
                }), last: nb(function (a, b) {
                    return [b - 1]
                }), eq: nb(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: nb(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: nb(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: nb(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = lb(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = mb(b);
        function pb() {
        }

        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };
        function qb(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function rb(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
            } : function (b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                } else while (b = b[d])if (1 === b.nodeType || e) {
                    if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                    if (i[d] = j, j[2] = a(b, c, g))return !0
                }
            }
        }

        function sb(a) {
            return a.length > 1 ? function (b, c, d) {
                var e = a.length;
                while (e--)if (!a[e](b, c, d))return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)fb(a, b[d], c);
            return c
        }

        function ub(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || tb(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : ub(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = ub(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function (a) {
                return a === b
            }, h, !0), l = rb(function (a) {
                return K.call(b, a) > -1
            }, h, !0), m = [function (a, c, d) {
                return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d))
            }]; f > i; i++)if (c = d.relative[a[i].type])m = [rb(sb(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                }
                m.push(c)
            }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = G.call(i));
                        s = ub(s)
                    }
                    I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? hb(f) : f
        }

        return h = fb.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && qb(j), !a)return I.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ib(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || jb("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ib(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || jb("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ib(function (a) {
            return null == a.getAttribute("disabled")
        }) || jb(L, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), fb
    }(a);
    n.find = t, n.expr = t.selectors, n.expr[":"] = n.expr.pseudos, n.unique = t.uniqueSort, n.text = t.getText, n.isXMLDoc = t.isXML, n.contains = t.contains;
    var u = n.expr.match.needsContext, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, w = /^.[^:#\[\.,]*$/;

    function x(a, b, c) {
        if (n.isFunction(b))return n.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return n.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (w.test(b))return n.filter(b, a, c);
            b = n.filter(b, a)
        }
        return n.grep(a, function (a) {
            return g.call(b, a) >= 0 !== c
        })
    }

    n.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function (a) {
            return 1 === a.nodeType
        }))
    }, n.fn.extend({
        find: function (a) {
            var b, c = this.length, d = [], e = this;
            if ("string" != typeof a)return this.pushStack(n(a).filter(function () {
                for (b = 0; c > b; b++)if (n.contains(e[b], this))return !0
            }));
            for (b = 0; c > b; b++)n.find(a, e[b], d);
            return d = this.pushStack(c > 1 ? n.unique(d) : d), d.selector = this.selector ? this.selector + " " + a : a, d
        }, filter: function (a) {
            return this.pushStack(x(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(x(this, a || [], !0))
        }, is: function (a) {
            return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
        }
    });
    var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof n ? b[0] : b, n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)), v.test(c[1]) && n.isPlainObject(b))for (c in b)n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            return d = l.getElementById(c[2]), d && d.parentNode && (this.length = 1, this[0] = d), this.context = l, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), n.makeArray(a, this))
    };
    A.prototype = n.fn, y = n(l);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    n.extend({
        dir: function (a, b, c) {
            var d = [], e = void 0 !== c;
            while ((a = a[b]) && 9 !== a.nodeType)if (1 === a.nodeType) {
                if (e && n(a).is(c))break;
                d.push(a)
            }
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), n.fn.extend({
        has: function (a) {
            var b = n(a, this), c = b.length;
            return this.filter(function () {
                for (var a = 0; c > a; a++)if (n.contains(this, b[a]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? n.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        while ((a = a[b]) && 1 !== a.nodeType);
        return a
    }

    n.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return n.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return n.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return n.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return n.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return n.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return n.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return n.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return n.sibling(a.firstChild)
        }, contents: function (a) {
            return a.contentDocument || n.merge([], a.childNodes)
        }
    }, function (a, b) {
        n.fn[a] = function (c, d) {
            var e = n.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = n.filter(d, e)), this.length > 1 && (C[a] || n.unique(e), B.test(a) && e.reverse()), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return n.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    n.Callbacks = function (a) {
        a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (b = a.memory && l, c = !0, g = e || 0, e = 0, f = h.length, d = !0; h && f > g; g++)if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                b = !1;
                break
            }
            d = !1, h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
        }, k = {
            add: function () {
                if (h) {
                    var c = h.length;
                    !function g(b) {
                        n.each(b, function (b, c) {
                            var d = n.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                        })
                    }(arguments), d ? f = h.length : b && (e = c, j(b))
                }
                return this
            }, remove: function () {
                return h && n.each(arguments, function (a, b) {
                    var c;
                    while ((c = n.inArray(b, h, c)) > -1)h.splice(c, 1), d && (f >= c && f--, g >= c && g--)
                }), this
            }, has: function (a) {
                return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], f = 0, this
            }, disable: function () {
                return h = i = b = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, b || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, b) {
                return !h || c && !i || (b = b || [], b = [a, b.slice ? b.slice() : b], d ? i.push(b) : j(b)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!c
            }
        };
        return k
    }, n.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return n.Deferred(function (c) {
                        n.each(b, function (b, f) {
                            var g = n.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? n.extend(a, d) : d
                }
            }, e = {};
            return d.pipe = d.then, n.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    n.fn.ready = function (a) {
        return n.ready.promise().done(a), this
    }, n.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? n.readyWait++ : n.ready(!0)
        }, ready: function (a) {
            (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0, a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]), n.fn.triggerHandler && (n(l).triggerHandler("ready"), n(l).off("ready"))))
        }
    });
    function I() {
        l.removeEventListener("DOMContentLoaded", I, !1), a.removeEventListener("load", I, !1), n.ready()
    }

    n.ready.promise = function (b) {
        return H || (H = n.Deferred(), "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1), a.addEventListener("load", I, !1))), H.promise(b)
    }, n.ready.promise();
    var J = n.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === n.type(c)) {
            e = !0;
            for (h in c)n.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, n.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                return j.call(n(a), c)
            })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    };
    n.acceptData = function (a) {
        return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
    };
    function K() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function () {
                return {}
            }
        }), this.expando = n.expando + Math.random()
    }

    K.uid = 1, K.accepts = n.acceptData, K.prototype = {
        key: function (a) {
            if (!K.accepts(a))return 0;
            var b = {}, c = a[this.expando];
            if (!c) {
                c = K.uid++;
                try {
                    b[this.expando] = {value: c}, Object.defineProperties(a, b)
                } catch (d) {
                    b[this.expando] = c, n.extend(a, b)
                }
            }
            return this.cache[c] || (this.cache[c] = {}), c
        }, set: function (a, b, c) {
            var d, e = this.key(a), f = this.cache[e];
            if ("string" == typeof b)f[b] = c; else if (n.isEmptyObject(f))n.extend(this.cache[e], b); else for (d in b)f[d] = b[d];
            return f
        }, get: function (a, b) {
            var c = this.cache[this.key(a)];
            return void 0 === b ? c : c[b]
        }, access: function (a, b, c) {
            var d;
            return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b), void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c), void 0 !== c ? c : b)
        }, remove: function (a, b) {
            var c, d, e, f = this.key(a), g = this.cache[f];
            if (void 0 === b)this.cache[f] = {}; else {
                n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b), b in g ? d = [b, e] : (d = e, d = d in g ? [d] : d.match(E) || [])), c = d.length;
                while (c--)delete g[d[c]]
            }
        }, hasData: function (a) {
            return !n.isEmptyObject(this.cache[a[this.expando]] || {})
        }, discard: function (a) {
            a[this.expando] && delete this.cache[a[this.expando]]
        }
    };
    var L = new K, M = new K, N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, O = /([A-Z])/g;

    function P(a, b, c) {
        var d;
        if (void 0 === c && 1 === a.nodeType)if (d = "data-" + b.replace(O, "-$1").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
            try {
                c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
            } catch (e) {
            }
            M.set(a, b, c)
        } else c = void 0;
        return c
    }

    n.extend({
        hasData: function (a) {
            return M.hasData(a) || L.hasData(a)
        }, data: function (a, b, c) {
            return M.access(a, b, c)
        }, removeData: function (a, b) {
            M.remove(a, b)
        }, _data: function (a, b, c) {
            return L.access(a, b, c)
        }, _removeData: function (a, b) {
            L.remove(a, b)
        }
    }), n.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = M.get(f), 1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)), P(f, d, e[d])));
                    L.set(f, "hasDataAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                M.set(this, a)
            }) : J(this, function (b) {
                var c, d = n.camelCase(a);
                if (f && void 0 === b) {
                    if (c = M.get(f, a), void 0 !== c)return c;
                    if (c = M.get(f, d), void 0 !== c)return c;
                    if (c = P(f, d, void 0), void 0 !== c)return c
                } else this.each(function () {
                    var c = M.get(this, d);
                    M.set(this, d, b), -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                })
            }, null, b, arguments.length > 1, null, !0)
        }, removeData: function (a) {
            return this.each(function () {
                M.remove(this, a)
            })
        }
    }), n.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = L.get(a, b), c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b = b || "fx";
            var c = n.queue(a, b), d = c.length, e = c.shift(), f = n._queueHooks(a, b), g = function () {
                n.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function () {
                        L.remove(a, [b + "queue", c])
                    })
                })
        }
    }), n.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                var c = n.queue(this, a, b);
                n._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
            })
        }, dequeue: function (a) {
            return this.each(function () {
                n.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = L.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, R = ["Top", "Right", "Bottom", "Left"], S = function (a, b) {
        return a = b || a, "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
    }, T = /^(?:checkbox|radio)$/i;
    !function () {
        var a = l.createDocumentFragment(), b = a.appendChild(l.createElement("div")), c = l.createElement("input");
        c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
    }();
    var U = "undefined";
    k.focusinBubbles = "onfocusin" in a;
    var V = /^key/, W = /^(?:mouse|pointer|contextmenu)|click/, X = /^(?:focusinfocus|focusoutblur)$/, Y = /^([^.]*)(?:\.(.+)|)$/;

    function Z() {
        return !0
    }

    function $() {
        return !1
    }

    function _() {
        try {
            return l.activeElement
        } catch (a) {
        }
    }

    n.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
            if (r) {
                c.handler && (f = c, c = f.handler, e = f.selector), c.guid || (c.guid = n.guid++), (i = r.events) || (i = r.events = {}), (g = r.handle) || (g = r.handle = function (b) {
                    return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                }), b = (b || "").match(E) || [""], j = b.length;
                while (j--)h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o && (l = n.event.special[o] || {}, o = (e ? l.delegateType : l.bindType) || o, l = n.event.special[o] || {}, k = n.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && n.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, f), (m = i[o]) || (m = i[o] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), n.event.global[o] = !0)
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
            if (r && (i = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = Y.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = n.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, m = i[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;
                    while (f--)k = m[f], !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
                    g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle), delete i[o])
                } else for (o in i)n.event.remove(a, o + b[j], c, d, !0);
                n.isEmptyObject(i) && (delete r.handle, L.remove(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (g = h = d = d || l, 3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."), q = r.shift(), r.sort()), k = q.indexOf(":") < 0 && "on" + q, b = b[n.expando] ? b : new n.Event(q, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = r.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : n.makeArray(c, [b]), o = n.event.special[q] || {}, e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                if (!e && !o.noBubble && !n.isWindow(d)) {
                    for (i = o.delegateType || q, X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)p.push(g), h = g;
                    h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                }
                f = 0;
                while ((g = p[f++]) && !b.isPropagationStopped())b.type = f > 1 ? i : o.bindType || q, m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"), m && m.apply(g, c), m = k && g[k], m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c), b.result === !1 && b.preventDefault());
                return b.type = q, e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k], h && (d[k] = null), n.event.triggered = q, d[q](), n.event.triggered = void 0, h && (d[k] = h)), b.result
            }
        },
        dispatch: function (a) {
            a = n.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = n.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, c = 0;
                    while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g, a.data = g.data, e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (a.result = e) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i !== this; i = i.parentNode || this)if (i.disabled !== !0 || "click" !== a.type) {
                for (d = [], c = 0; h > c; c++)f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length), d[e] && d.push(f);
                d.length && g.push({elem: i, handlers: d})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button;
                return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l, d = c.documentElement, e = c.body, a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0), a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        fix: function (a) {
            if (a[n.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new n.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = l), 3 === a.target.nodeType && (a.target = a.target.parentNode), g.filter ? g.filter(a, f) : a
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    return this !== _() && this.focus ? (this.focus(), !1) : void 0
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === _() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return n.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = n.extend(new n.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, n.removeEvent = function (a, b, c) {
        a.removeEventListener && a.removeEventListener(b, c, !1)
    }, n.Event = function (a, b) {
        return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a, b && n.extend(this, b), this.timeStamp = a && a.timeStamp || n.now(), void(this[n.expando] = !0)) : new n.Event(a, b)
    }, n.Event.prototype = {
        isDefaultPrevented: $,
        isPropagationStopped: $,
        isImmediatePropagationStopped: $,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = Z, a && a.preventDefault && a.preventDefault()
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = Z, a && a.stopPropagation && a.stopPropagation()
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = Z, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, n.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        n.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.focusinBubbles || n.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c = function (a) {
            n.event.simulate(b, a.target, n.event.fix(a), !0)
        };
        n.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = L.access(d, b);
                e || d.addEventListener(a, c, !0), L.access(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = L.access(d, b) - 1;
                e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0), L.remove(d, b))
            }
        }
    }), n.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (g in a)this.on(g, b, c, a[g], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1)d = $; else if (!d)return this;
            return 1 === e && (f = d, d = function (a) {
                return n().off(a), f.apply(this, arguments)
            }, d.guid = f.guid || (f.guid = n.guid++)), this.each(function () {
                n.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = $), this.each(function () {
                n.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                n.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? n.event.trigger(a, b, c, !0) : void 0
        }
    });
    var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bb = /<([\w:]+)/, cb = /<|&#?\w+;/, db = /<(?:script|style|link)/i, eb = /checked\s*(?:[^=]|=\s*.checked.)/i, fb = /^$|\/(?:java|ecma)script/i, gb = /^true\/(.*)/, hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ib = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    ib.optgroup = ib.option, ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead, ib.th = ib.td;
    function jb(a, b) {
        return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function kb(a) {
        return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a
    }

    function lb(a) {
        var b = gb.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function mb(a, b) {
        for (var c = 0, d = a.length; d > c; c++)L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
    }

    function nb(a, b) {
        var c, d, e, f, g, h, i, j;
        if (1 === b.nodeType) {
            if (L.hasData(a) && (f = L.access(a), g = L.set(b, f), j = f.events)) {
                delete g.handle, g.events = {};
                for (e in j)for (c = 0, d = j[e].length; d > c; c++)n.event.add(b, e, j[e][c])
            }
            M.hasData(a) && (h = M.access(a), i = n.extend({}, h), M.set(b, i))
        }
    }

    function ob(a, b) {
        var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
        return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
    }

    function pb(a, b) {
        var c = b.nodeName.toLowerCase();
        "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }

    n.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
            if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))for (g = ob(h), f = ob(a), d = 0, e = f.length; e > d; d++)pb(f[d], g[d]);
            if (b)if (c)for (f = f || ob(a), g = g || ob(h), d = 0, e = f.length; e > d; d++)nb(f[d], g[d]); else nb(a, h);
            return g = ob(h, "script"), g.length > 0 && mb(g, !i && ob(a, "script")), h
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)if (e = a[m], e || 0 === e)if ("object" === n.type(e))n.merge(l, e.nodeType ? [e] : e); else if (cb.test(e)) {
                f = f || k.appendChild(b.createElement("div")), g = (bb.exec(e) || ["", ""])[1].toLowerCase(), h = ib[g] || ib._default, f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2], j = h[0];
                while (j--)f = f.lastChild;
                n.merge(l, f.childNodes), f = k.firstChild, f.textContent = ""
            } else l.push(b.createTextNode(e));
            k.textContent = "", m = 0;
            while (e = l[m++])if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e), f = ob(k.appendChild(e), "script"), i && mb(f), c)) {
                j = 0;
                while (e = f[j++])fb.test(e.type || "") && c.push(e)
            }
            return k
        }, cleanData: function (a) {
            for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                if (n.acceptData(c) && (e = c[L.expando], e && (b = L.cache[e]))) {
                    if (b.events)for (d in b.events)f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                    L.cache[e] && delete L.cache[e]
                }
                delete M.cache[c[M.expando]]
            }
        }
    }), n.fn.extend({
        text: function (a) {
            return J(this, function (a) {
                return void 0 === a ? n.text(this) : this.empty().each(function () {
                    (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                })
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = jb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || n.cleanData(ob(c)), c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++)1 === a.nodeType && (n.cleanData(ob(a, !1)), a.textContent = "");
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return n.clone(this, a, b)
            })
        }, html: function (a) {
            return J(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a && 1 === b.nodeType)return b.innerHTML;
                if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(ab, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (n.cleanData(ob(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, n.cleanData(ob(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))return this.each(function (c) {
                var d = m.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this), d = c.firstChild, 1 === c.childNodes.length && (c = d), d)) {
                for (f = n.map(ob(c, "script"), kb), g = f.length; l > j; j++)h = c, j !== o && (h = n.clone(h, !0, !0), g && n.merge(f, ob(h, "script"))), b.call(this[j], h, j);
                if (g)for (i = f[f.length - 1].ownerDocument, n.map(f, lb), j = 0; g > j; j++)h = f[j], fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
            }
            return this
        }
    }), n.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        n.fn[a] = function (a) {
            for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)c = h === g ? this : this.clone(!0), n(e[h])[b](c), f.apply(d, c.get());
            return this.pushStack(d)
        }
    });
    var qb, rb = {};

    function sb(b, c) {
        var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
        return e.detach(), f
    }

    function tb(a) {
        var b = l, c = rb[a];
        return c || (c = sb(a, b), "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = qb[0].contentDocument, b.write(), b.close(), c = sb(a, b), qb.detach()), rb[a] = c), c
    }

    var ub = /^margin/, vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$", "i"), wb = function (a) {
        return a.ownerDocument.defaultView.getComputedStyle(a, null)
    };

    function xb(a, b, c) {
        var d, e, f, g, h = a.style;
        return c = c || wb(a), c && (g = c.getPropertyValue(b) || c[b]), c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)), vb.test(g) && ub.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g
    }

    function yb(a, b) {
        return {
            get: function () {
                return a() ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
        if (f.style) {
            f.style.backgroundClip = "content-box", f.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === f.style.backgroundClip, e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", e.appendChild(f);
            function g() {
                f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f.innerHTML = "", d.appendChild(e);
                var g = a.getComputedStyle(f, null);
                b = "1%" !== g.top, c = "4px" === g.width, d.removeChild(e)
            }

            a.getComputedStyle && n.extend(k, {
                pixelPosition: function () {
                    return g(), b
                }, boxSizingReliable: function () {
                    return null == c && g(), c
                }, reliableMarginRight: function () {
                    var b, c = f.appendChild(l.createElement("div"));
                    return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", c.style.marginRight = c.style.width = "0", f.style.width = "1px", d.appendChild(e), b = !parseFloat(a.getComputedStyle(c, null).marginRight), d.removeChild(e), b
                }
            })
        }
    }(), n.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var zb = /^(none|table(?!-c[ea]).+)/, Ab = new RegExp("^(" + Q + ")(.*)$", "i"), Bb = new RegExp("^([+-])=(" + Q + ")", "i"), Cb = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Db = {letterSpacing: "0", fontWeight: "400"}, Eb = ["Webkit", "O", "Moz", "ms"];

    function Fb(a, b) {
        if (b in a)return b;
        var c = b[0].toUpperCase() + b.slice(1), d = b, e = Eb.length;
        while (e--)if (b = Eb[e] + c, b in a)return b;
        return d
    }

    function Gb(a, b, c) {
        var d = Ab.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Hb(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += n.css(a, c + R[f], !0, e)), d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)), "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e), "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
        return g
    }

    function Ib(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = wb(a), g = "border-box" === n.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = xb(a, b, f), (0 > e || null == e) && (e = a.style[b]), vb.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    function Jb(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = L.get(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d), "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    n.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = xb(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": "cssFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = n.camelCase(b), i = a.style;
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)), g = n.cssHooks[b] || n.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c, "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0)
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = n.camelCase(b);
            return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)), g = n.cssHooks[b] || n.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = xb(a, b, d)), "normal" === e && b in Db && (e = Db[b]), "" === c || c ? (f = parseFloat(e), c === !0 || n.isNumeric(f) ? f || 0 : e) : e
        }
    }), n.each(["height", "width"], function (a, b) {
        n.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function () {
                    return Ib(a, b, d)
                }) : Ib(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && wb(a);
                return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), n.cssHooks.marginRight = yb(k.reliableMarginRight, function (a, b) {
        return b ? n.swap(a, {display: "inline-block"}, xb, [a, "marginRight"]) : void 0
    }), n.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        n.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, ub.test(a) || (n.cssHooks[a + b].set = Gb)
    }), n.fn.extend({
        css: function (a, b) {
            return J(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (n.isArray(b)) {
                    for (d = wb(a), e = b.length; e > g; g++)f[b[g]] = n.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Jb(this, !0)
        }, hide: function () {
            return Jb(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                S(this) ? n(this).show() : n(this).hide()
            })
        }
    });
    function Kb(a, b, c, d, e) {
        return new Kb.prototype.init(a, b, c, d, e)
    }

    n.Tween = Kb, Kb.prototype = {
        constructor: Kb, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (n.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Kb.propHooks[this.prop];
            return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Kb.propHooks[this.prop];
            return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Kb.propHooks._default.set(this), this
        }
    }, Kb.prototype.init.prototype = Kb.prototype, Kb.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, n.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, n.fx = Kb.prototype.init, n.fx.step = {};
    var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$", "i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = Ob.exec(b), f = e && e[3] || (n.cssNumber[a] ? "" : "px"), g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, n.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function Sb() {
        return setTimeout(function () {
            Lb = void 0
        }), Lb = n.now()
    }

    function Tb(a, b) {
        var c, d = 0, e = {height: a};
        for (b = b ? 1 : 0; 4 > d; d += 2 - b)c = R[d], e["margin" + c] = e["padding" + c] = a;
        return b && (e.opacity = e.width = a), e
    }

    function Ub(a, b, c) {
        for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function Vb(a, b, c) {
        var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
        c.queue || (h = n._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, l.always(function () {
            l.always(function () {
                h.unqueued--, n.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = n.css(a, "display"), k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j, "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")), c.overflow && (o.overflow = "hidden", l.always(function () {
            o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], Nb.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
                if ("show" !== e || !q || void 0 === q[d])continue;
                p = !0
            }
            m[d] = q && q[d] || n.style(a, d)
        } else j = void 0;
        if (n.isEmptyObject(m))"inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j); else {
            q ? "hidden" in q && (p = q.hidden) : q = L.access(a, "fxshow", {}), f && (q.hidden = !p), p ? n(a).show() : l.done(function () {
                n(a).hide()
            }), l.done(function () {
                var b;
                L.remove(a, "fxshow");
                for (b in m)n.style(a, b, m[b])
            });
            for (d in m)g = Ub(p ? q[d] : 0, d, l), d in q || (q[d] = g.start, p && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function Wb(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = n.camelCase(c), e = b[d], f = a[c], n.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = n.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function Xb(a, b, c) {
        var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function () {
            delete i.elem
        }), i = function () {
            if (e)return !1;
            for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j = h.promise({
            elem: a,
            props: n.extend({}, b),
            opts: n.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: Lb || Sb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k = j.props;
        for (Wb(k, j.opts.specialEasing); g > f; f++)if (d = Qb[f].call(j, a, k, j.opts))return d;
        return n.map(k, Ub, j), n.isFunction(j.opts.start) && j.opts.start.call(a, j), n.fx.timer(n.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    n.Animation = n.extend(Xb, {
        tweener: function (a, b) {
            n.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], Rb[c] = Rb[c] || [], Rb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? Qb.unshift(a) : Qb.push(a)
        }
    }), n.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? n.extend({}, a) : {
            complete: c || !c && b || n.isFunction(a) && a,
            duration: a,
            easing: c && b || b && !n.isFunction(b) && b
        };
        return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            n.isFunction(d.old) && d.old.call(this), d.queue && n.dequeue(this, d.queue)
        }, d
    }, n.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(S).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = n.isEmptyObject(a), f = n.speed(b, c, d), g = function () {
                var b = Xb(this, n.extend({}, a), f);
                (e || L.get(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = n.timers, g = L.get(this);
                if (e)g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && n.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                for (c.finish = !0, n.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), n.each(["toggle", "show", "hide"], function (a, b) {
        var c = n.fn[b];
        n.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
        }
    }), n.each({
        slideDown: Tb("show"),
        slideUp: Tb("hide"),
        slideToggle: Tb("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        n.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), n.timers = [], n.fx.tick = function () {
        var a, b = 0, c = n.timers;
        for (Lb = n.now(); b < c.length; b++)a = c[b], a() || c[b] !== a || c.splice(b--, 1);
        c.length || n.fx.stop(), Lb = void 0
    }, n.fx.timer = function (a) {
        n.timers.push(a), a() ? n.fx.start() : n.timers.pop()
    }, n.fx.interval = 13, n.fx.start = function () {
        Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
    }, n.fx.stop = function () {
        clearInterval(Mb), Mb = null
    }, n.fx.speeds = {slow: 600, fast: 200, _default: 400}, n.fn.delay = function (a, b) {
        return a = n.fx ? n.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a = l.createElement("input"), b = l.createElement("select"), c = b.appendChild(l.createElement("option"));
        a.type = "checkbox", k.checkOn = "" !== a.value, k.optSelected = c.selected, b.disabled = !0, k.optDisabled = !c.disabled, a = l.createElement("input"), a.value = "t", a.type = "radio", k.radioValue = "t" === a.value
    }();
    var Yb, Zb, $b = n.expr.attrHandle;
    n.fn.extend({
        attr: function (a, b) {
            return J(this, n.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                n.removeAttr(this, a)
            })
        }
    }), n.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(), d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void n.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = n.propFix[c] || c, n.expr.match.bool.test(c) && (a[d] = !1), a.removeAttribute(c)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), Zb = {
        set: function (a, b, c) {
            return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c), c
        }
    }, n.each(n.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = $b[b] || n.find.attr;
        $b[b] = function (a, b, d) {
            var e, f;
            return d || (f = $b[b], $b[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, $b[b] = f), e
        }
    });
    var _b = /^(?:input|select|textarea|button)$/i;
    n.fn.extend({
        prop: function (a, b) {
            return J(this, n.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return this.each(function () {
                delete this[n.propFix[a] || a]
            })
        }
    }), n.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !n.isXMLDoc(a), f && (b = n.propFix[b] || b, e = n.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                }
            }
        }
    }), k.optSelected || (n.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && b.parentNode && b.parentNode.selectedIndex, null
        }
    }), n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        n.propFix[this.toLowerCase()] = this
    });
    var ac = /[\t\r\n\f]/g;
    n.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).addClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = n.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
            if (n.isFunction(a))return this.each(function (b) {
                n(this).removeClass(a.call(this, b, this.className))
            });
            if (h)for (b = (a || "").match(E) || []; j > i; i++)if (c = this[i], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? n.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function (c) {
                n(this).toggleClass(a.call(this, c, this.className, b), b)
            } : function () {
                if ("string" === c) {
                    var b, d = 0, e = n(this), f = a.match(E) || [];
                    while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
            })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    });
    var bc = /\r/g;
    n.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = n.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function (a) {
                        return null == a ? "" : a + ""
                    })), b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
            }
        }
    }), n.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = n.find.attr(a, "value");
                    return null != b ? b : n.trim(n.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                        if (b = n(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                    while (g--)d = e[g], (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                    return c || (a.selectedIndex = -1), f
                }
            }
        }
    }), n.each(["radio", "checkbox"], function () {
        n.valHooks[this] = {
            set: function (a, b) {
                return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (n.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    }), n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        n.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), n.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var cc = n.now(), dc = /\?/;
    n.parseJSON = function (a) {
        return JSON.parse(a + "")
    }, n.parseXML = function (a) {
        var b, c;
        if (!a || "string" != typeof a)return null;
        try {
            c = new DOMParser, b = c.parseFromString(a, "text/xml")
        } catch (d) {
            b = void 0
        }
        return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a), b
    };
    var ec, fc, gc = /#.*$/, hc = /([?&])_=[^&]*/, ic = /^(.*?):[ \t]*([^\r\n]*)$/gm, jc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, kc = /^(?:GET|HEAD)$/, lc = /^\/\//, mc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, nc = {}, oc = {}, pc = "*/".concat("*");
    try {
        fc = location.href
    } catch (qc) {
        fc = l.createElement("a"), fc.href = "", fc = fc.href
    }
    ec = mc.exec(fc.toLowerCase()) || [];
    function rc(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (n.isFunction(c))while (d = f[e++])"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function sc(a, b, c, d) {
        var e = {}, f = a === oc;

        function g(h) {
            var i;
            return e[h] = !0, n.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function tc(a, b) {
        var c, d, e = n.ajaxSettings.flatOptions || {};
        for (c in b)void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
        return d && n.extend(!0, a, d), a
    }

    function uc(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
        if (d)for (e in h)if (h[e] && h[e].test(d)) {
            i.unshift(e);
            break
        }
        if (i[0] in c)f = i[0]; else {
            for (e in c) {
                if (!i[0] || a.converters[e + " " + i[0]]) {
                    f = e;
                    break
                }
                g || (g = e)
            }
            f = f || g
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function vc(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f)f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"])b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    n.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: fc,
            type: "GET",
            isLocal: jc.test(ec[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": pc,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": n.parseJSON, "text xml": n.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? tc(tc(a, n.ajaxSettings), b) : tc(n.ajaxSettings, a)
        },
        ajaxPrefilter: rc(nc),
        ajaxTransport: rc(oc),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!f) {
                            f = {};
                            while (b = ic.exec(e))f[b[1].toLowerCase()] = b[2]
                        }
                        b = f[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? e : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return c && c.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || fc) + "").replace(gc, "").replace(lc, ec[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (h = mc.exec(k.url.toLowerCase()), k.crossDomain = !(!h || h[1] === ec[1] && h[2] === ec[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (ec[3] || ("http:" === ec[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)), sc(nc, k, b, v), 2 === t)return v;
            i = k.global, i && 0 === n.active++ && n.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !kc.test(k.type), d = k.url, k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = hc.test(d) ? d.replace(hc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)), k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]), n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + pc + "; q=0.01" : "") : k.accepts["*"]);
            for (j in k.headers)v.setRequestHeader(j, k.headers[j]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (j in{success: 1, error: 1, complete: 1})v[j](k[j]);
            if (c = sc(oc, k, b, v)) {
                v.readyState = 1, i && m.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, c.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, f, h) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), c = void 0, e = h || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, f && (u = uc(k, v, f)), u = vc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (n.lastModified[d] = w), w = v.getResponseHeader("etag"), w && (n.etag[d] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), i && (m.trigger("ajaxComplete", [v, k]), --n.active || n.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return n.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return n.get(a, void 0, b, "script")
        }
    }), n.each(["get", "post"], function (a, b) {
        n[b] = function (a, c, d, e) {
            return n.isFunction(c) && (e = e || d, d = c, c = void 0), n.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        n.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), n._evalUrl = function (a) {
        return n.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, n.fn.extend({
        wrapAll: function (a) {
            var b;
            return n.isFunction(a) ? this.each(function (b) {
                n(this).wrapAll(a.call(this, b))
            }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                var a = this;
                while (a.firstElementChild)a = a.firstElementChild;
                return a
            }).append(this)), this)
        }, wrapInner: function (a) {
            return this.each(n.isFunction(a) ? function (b) {
                n(this).wrapInner(a.call(this, b))
            } : function () {
                var b = n(this), c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        }, wrap: function (a) {
            var b = n.isFunction(a);
            return this.each(function (c) {
                n(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
            }).end()
        }
    }), n.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0
    }, n.expr.filters.visible = function (a) {
        return !n.expr.filters.hidden(a)
    };
    var wc = /%20/g, xc = /\[\]$/, yc = /\r?\n/g, zc = /^(?:submit|button|image|reset|file)$/i, Ac = /^(?:input|select|textarea|keygen)/i;

    function Bc(a, b, c, d) {
        var e;
        if (n.isArray(b))n.each(b, function (b, e) {
            c || xc.test(a) ? d(a, e) : Bc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== n.type(b))d(a, b); else for (e in b)Bc(a + "[" + e + "]", b[e], c, d)
    }

    n.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = n.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional), n.isArray(a) || a.jquery && !n.isPlainObject(a))n.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Bc(c, a[c], b, e);
        return d.join("&").replace(wc, "+")
    }, n.fn.extend({
        serialize: function () {
            return n.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = n.prop(this, "elements");
                return a ? n.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !n(this).is(":disabled") && Ac.test(this.nodeName) && !zc.test(a) && (this.checked || !T.test(a))
            }).map(function (a, b) {
                var c = n(this).val();
                return null == c ? null : n.isArray(c) ? n.map(c, function (a) {
                    return {name: b.name, value: a.replace(yc, "\r\n")}
                }) : {name: b.name, value: c.replace(yc, "\r\n")}
            }).get()
        }
    }), n.ajaxSettings.xhr = function () {
        try {
            return new XMLHttpRequest
        } catch (a) {
        }
    };
    var Cc = 0, Dc = {}, Ec = {0: 200, 1223: 204}, Fc = n.ajaxSettings.xhr();
    a.ActiveXObject && n(a).on("unload", function () {
        for (var a in Dc)Dc[a]()
    }), k.cors = !!Fc && "withCredentials" in Fc, k.ajax = Fc = !!Fc, n.ajaxTransport(function (a) {
        var b;
        return k.cors || Fc && !a.crossDomain ? {
            send: function (c, d) {
                var e, f = a.xhr(), g = ++Cc;
                if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                for (e in c)f.setRequestHeader(e, c[e]);
                b = function (a) {
                    return function () {
                        b && (delete Dc[g], b = f.onload = f.onerror = null, "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Ec[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {text: f.responseText} : void 0, f.getAllResponseHeaders()))
                    }
                }, f.onload = b(), f.onerror = b("error"), b = Dc[g] = b("abort");
                try {
                    f.send(a.hasContent && a.data || null)
                } catch (h) {
                    if (b)throw h
                }
            }, abort: function () {
                b && b()
            }
        } : void 0
    }), n.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return n.globalEval(a), a
            }
        }
    }), n.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET")
    }), n.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c;
            return {
                send: function (d, e) {
                    b = n("<script>").prop({
                        async: !0,
                        charset: a.scriptCharset,
                        src: a.url
                    }).on("load error", c = function (a) {
                        b.remove(), c = null, a && e("error" === a.type ? 404 : 200, a.type)
                    }), l.head.appendChild(b[0])
                }, abort: function () {
                    c && c()
                }
            }
        }
    });
    var Gc = [], Hc = /(=)\?(?=&|$)|\?\?/;
    n.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = Gc.pop() || n.expando + "_" + cc++;
            return this[a] = !0, a
        }
    }), n.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (Hc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Hc.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Hc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
            return g || n.error(e + " was not called"), g[0]
        }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
            g = arguments
        }, d.always(function () {
            a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Gc.push(e)), g && n.isFunction(f) && f(g[0]), g = f = void 0
        }), "script") : void 0
    }), n.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || l;
        var d = v.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e), e && e.length && n(e).remove(), n.merge([], d.childNodes))
    };
    var Ic = n.fn.load;
    n.fn.load = function (a, b, c) {
        if ("string" != typeof a && Ic)return Ic.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = n.trim(a.slice(h)), a = a.slice(0, h)), n.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (e = "POST"), g.length > 0 && n.ajax({
            url: a,
            type: e,
            dataType: "html",
            data: b
        }).done(function (a) {
            f = arguments, g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, f || [a.responseText, b, a])
            }), this
    }, n.expr.filters.animated = function (a) {
        return n.grep(n.timers, function (b) {
            return a === b.elem
        }).length
    };
    var Jc = a.document.documentElement;

    function Kc(a) {
        return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
    }

    n.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = n.css(a, "top"), i = n.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), n.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
        }
    }, n.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                n.offset.setOffset(this, a, b)
            });
            var b, c, d = this[0], e = {top: 0, left: 0}, f = d && d.ownerDocument;
            if (f)return b = f.documentElement, n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()), c = Kc(f), {
                top: e.top + c.pageYOffset - b.clientTop,
                left: e.left + c.pageXOffset - b.clientLeft
            }) : e
        }, position: function () {
            if (this[0]) {
                var a, b, c = this[0], d = {top: 0, left: 0};
                return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), n.nodeName(a[0], "html") || (d = a.offset()), d.top += n.css(a[0], "borderTopWidth", !0), d.left += n.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - d.top - n.css(c, "marginTop", !0),
                    left: b.left - d.left - n.css(c, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || Jc;
                while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))a = a.offsetParent;
                return a || Jc
            })
        }
    }), n.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (b, c) {
        var d = "pageYOffset" === c;
        n.fn[b] = function (e) {
            return J(this, function (b, e, f) {
                var g = Kc(b);
                return void 0 === f ? g ? g[c] : b[e] : void(g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
            }, b, e, arguments.length, null)
        }
    }), n.each(["top", "left"], function (a, b) {
        n.cssHooks[b] = yb(k.pixelPosition, function (a, c) {
            return c ? (c = xb(a, b), vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
        })
    }), n.each({Height: "height", Width: "width"}, function (a, b) {
        n.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            n.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return J(this, function (b, c, d) {
                    var e;
                    return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), n.fn.size = function () {
        return this.length
    }, n.fn.andSelf = n.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return n
    });
    var Lc = a.jQuery, Mc = a.$;
    return n.noConflict = function (b) {
        return a.$ === n && (a.$ = Mc), b && a.jQuery === n && (a.jQuery = Lc), n
    }, typeof b === U && (a.jQuery = a.$ = n), n
});
;window.Modernizr = function (a, b, c) {
    function z(a) {
        j.cssText = a
    }

    function A(a, b) {
        return z(m.join(a + ";") + (b || ""))
    }

    function B(a, b) {
        return typeof a === b
    }

    function C(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function D(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!C(e, "-") && j[e] !== c)return b == "pfx" ? e : !0
        }
        return !1
    }

    function E(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c)return d === !1 ? a[e] : B(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function F(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1), e = (a + " " + o.join(d + " ") + d).split(" ");
        return B(b, "string") || B(b, "undefined") ? D(e, b) : (e = (a + " " + p.join(d + " ") + d).split(" "), E(e, b, c))
    }

    var d = "2.6.2", e = {}, f = !0, g = b.documentElement, h = "modernizr", i = b.createElement(h), j = i.style, k, l = {}.toString, m = " -webkit- -moz- -o- -ms- ".split(" "), n = "Webkit Moz O ms", o = n.split(" "), p = n.toLowerCase().split(" "), q = {}, r = {}, s = {}, t = [], u = t.slice, v, w = function (a, c, d, e) {
        var f, i, j, k, l = b.createElement("div"), m = b.body, n = m || b.createElement("body");
        if (parseInt(d, 10))while (d--)j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
        return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
    }, x = {}.hasOwnProperty, y;
    !B(x, "undefined") && !B(x.call, "undefined") ? y = function (a, b) {
        return x.call(a, b)
    } : y = function (a, b) {
        return b in a && B(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function (b) {
        var c = this;
        if (typeof c != "function")throw new TypeError;
        var d = u.call(arguments, 1), e = function () {
            if (this instanceof e) {
                var a = function () {
                };
                a.prototype = c.prototype;
                var f = new a, g = c.apply(f, d.concat(u.call(arguments)));
                return Object(g) === g ? g : f
            }
            return c.apply(b, d.concat(u.call(arguments)))
        };
        return e
    }), q.touch = function () {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : w(["@media (", m.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function (a) {
            c = a.offsetTop === 9
        }), c
    }, q.cssanimations = function () {
        return F("animationName")
    }, q.csstransitions = function () {
        return F("transition")
    };
    for (var G in q)y(q, G) && (v = G.toLowerCase(), e[v] = q[G](), t.push((e[v] ? "" : "no-") + v));
    return e.addTest = function (a, b) {
        if (typeof a == "object")for (var d in a)y(a, d) && e.addTest(d, a[d]); else {
            a = a.toLowerCase();
            if (e[a] !== c)return e;
            b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
        }
        return e
    }, z(""), i = k = null, function (a, b) {
        function k(a, b) {
            var c = a.createElement("p"), d = a.getElementsByTagName("head")[0] || a.documentElement;
            return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function l() {
            var a = r.elements;
            return typeof a == "string" ? a.split(" ") : a
        }

        function m(a) {
            var b = i[a[g]];
            return b || (b = {}, h++, a[g] = h, i[h] = b), b
        }

        function n(a, c, f) {
            c || (c = b);
            if (j)return c.createElement(a);
            f || (f = m(c));
            var g;
            return f.cache[a] ? g = f.cache[a].cloneNode() : e.test(a) ? g = (f.cache[a] = f.createElem(a)).cloneNode() : g = f.createElem(a), g.canHaveChildren && !d.test(a) ? f.frag.appendChild(g) : g
        }

        function o(a, c) {
            a || (a = b);
            if (j)return a.createDocumentFragment();
            c = c || m(a);
            var d = c.frag.cloneNode(), e = 0, f = l(), g = f.length;
            for (; e < g; e++)d.createElement(f[e]);
            return d
        }

        function p(a, b) {
            b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function (c) {
                return r.shivMethods ? n(c, a, b) : b.createElem(c)
            }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + l().join().replace(/\w+/g, function (a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(r, b.frag)
        }

        function q(a) {
            a || (a = b);
            var c = m(a);
            return r.shivCSS && !f && !c.hasCSS && (c.hasCSS = !!k(a, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), j || p(a, c), a
        }

        var c = a.html5 || {}, d = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i, e = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i, f, g = "_html5shiv", h = 0, i = {}, j;
        (function () {
            try {
                var a = b.createElement("a");
                a.innerHTML = "<xyz></xyz>", f = "hidden" in a, j = a.childNodes.length == 1 || function () {
                        b.createElement("a");
                        var a = b.createDocumentFragment();
                        return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                    }()
            } catch (c) {
                f = !0, j = !0
            }
        })();
        var r = {
            elements: c.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
            shivCSS: c.shivCSS !== !1,
            supportsUnknownElements: j,
            shivMethods: c.shivMethods !== !1,
            type: "default",
            shivDocument: q,
            createElement: n,
            createDocumentFragment: o
        };
        a.html5 = r, q(b)
    }(this, b), e._version = d, e._prefixes = m, e._domPrefixes = p, e._cssomPrefixes = o, e.testProp = function (a) {
        return D([a])
    }, e.testAllProps = F, e.testStyles = w, e.prefixed = function (a, b, c) {
        return b ? F(a, b, c) : F(a, "pfx")
    }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + t.join(" ") : ""), e
}(this, this.document), function (a, b, c) {
    function d(a) {
        return "[object Function]" == o.call(a)
    }

    function e(a) {
        return "string" == typeof a
    }

    function f() {
    }

    function g(a) {
        return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
        var a = p.shift();
        q = 1, a ? a.t ? m(function () {
            ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
        }, 0) : (a(), h()) : q = 0
    }

    function i(a, c, d, e, f, i, j) {
        function k(b) {
            if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
                "img" != a && m(function () {
                    t.removeChild(l)
                }, 50);
                for (var d in y[c])y[c].hasOwnProperty(d) && y[c][d].onload()
            }
        }

        var j = j || B.errorTimeout, l = b.createElement(a), o = 0, r = 0, u = {t: d, s: c, e: f, a: i, x: j};
        1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function () {
            k.call(this, r)
        }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
    }

    function j(a, b, c, d, f) {
        return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
    }

    function k() {
        var a = B;
        return a.loader = {load: j, i: 0}, a
    }

    var l = b.documentElement, m = a.setTimeout, n = b.getElementsByTagName("script")[0], o = {}.toString, p = [], q = 0, r = "MozAppearance" in l.style, s = r && !!b.createRange().compareNode, t = s ? l : n.parentNode, l = a.opera && "[object Opera]" == o.call(a.opera), l = !!b.attachEvent && !l, u = r ? "object" : l ? "script" : "img", v = l ? "script" : u, w = Array.isArray || function (a) {
            return "[object Array]" == o.call(a)
        }, x = [], y = {}, z = {
        timeout: function (a, b) {
            return b.length && (a.timeout = b[0]), a
        }
    }, A, B;
    B = function (a) {
        function b(a) {
            var a = a.split("!"), b = x.length, c = a.pop(), d = a.length, c = {
                url: c,
                origUrl: c,
                prefixes: a
            }, e, f, g;
            for (f = 0; f < d; f++)g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
            for (f = 0; f < b; f++)c = x[f](c);
            return c
        }

        function g(a, e, f, g, h) {
            var i = b(a), j = i.autoCallback;
            i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function () {
                k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
            })))
        }

        function h(a, b) {
            function c(a, c) {
                if (a) {
                    if (e(a))c || (j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    }), g(a, j, b, 0, h); else if (Object(a) === a)for (n in m = function () {
                        var b = 0, c;
                        for (c in a)a.hasOwnProperty(c) && b++;
                        return b
                    }(), a)a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function () {
                        var a = [].slice.call(arguments);
                        k.apply(this, a), l()
                    } : j[n] = function (a) {
                        return function () {
                            var b = [].slice.call(arguments);
                            a && a.apply(this, b), l()
                        }
                    }(k[n])), g(a[n], j, b, n, h))
                } else!c && l()
            }

            var h = !!a.test, i = a.load || a.both, j = a.callback || f, k = j, l = a.complete || f, m, n;
            c(h ? a.yep : a.nope, !!i), i && c(i)
        }

        var i, j, l = this.yepnope.loader;
        if (e(a))g(a, 0, l, 0); else if (w(a))for (i = 0; i < a.length; i++)j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l); else Object(a) === a && h(a, l)
    }, B.addPrefix = function (a, b) {
        z[a] = b
    }, B.addFilter = function (a) {
        x.push(a)
    }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function () {
        b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function (a, c, d, e, i, j) {
        var k = b.createElement("script"), l, o, e = e || B.errorTimeout;
        k.src = a;
        for (o in d)k.setAttribute(o, d[o]);
        c = j ? h : c || f, k.onreadystatechange = k.onload = function () {
            !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
        }, m(function () {
            l || (l = 1, c(1))
        }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
    }, a.yepnope.injectCss = function (a, c, d, e, g, i) {
        var e = b.createElement("link"), j, c = i ? h : c || f;
        e.href = a, e.rel = "stylesheet", e.type = "text/css";
        for (j in d)e.setAttribute(j, d[j]);
        g || (n.parentNode.insertBefore(e, n), m(c, 0))
    }
}(this, document), Modernizr.load = function () {
    yepnope.apply(window, [].slice.call(arguments, 0))
};
var docCookies = {
    getItem: function (a) {
        return !a || !this.hasItem(a) ? null : unescape(document.cookie.replace(RegExp("(?:^|.*;\\s*)" + escape(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*"), "$1"))
    }, setItem: function (a, c, b, e, f, g) {
        if (a && !/^(?:expires|max\-age|path|domain|secure)$/i.test(a)) {
            var d = "";
            if (b)switch (b.constructor) {
                case Number:
                    d = Infinity === b ? "; expires=Tue, 19 Jan 2038 03:14:07 GMT" : "; max-age=" + b;
                    break;
                case String:
                    d = "; expires=" + b;
                    break;
                case Date:
                    d = "; expires=" + b.toGMTString()
            }
            document.cookie = escape(a) + "=" + escape(c) + d + (f ? "; domain=" + f : "") + (e ? "; path=" + e : "") + (g ? "; secure" : "")
        }
    }, removeItem: function (a, c) {
        a && this.hasItem(a) && (document.cookie = escape(a) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (c ? "; path=" + c : ""))
    }, hasItem: function (a) {
        return RegExp("(?:^|;\\s*)" + escape(a).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(document.cookie)
    }
};
var JQ = jQuery;
window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (a) {
            window.setTimeout(a, 1E3 / 60)
        }
}();
window.transitionEnd = function (a, c) {
    var b = !1, d = document.createElement("div");
    JQ(["transition", "WebkitTransition", "MozTransition", "msTransition"]).each(function (a, c) {
        if (void 0 !== d.style[c])return b = !0, !1
    });
    b ? a.bind("webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend", function (b) {
        a.unbind("webkitTransitionEnd oTransitionEnd MSTransitionEnd transitionend");
        c(b, a)
    }) : setTimeout(function () {
        c(null, a)
    }, 0);
    return a
};
var Royal_Preloader = {
    _overlay: null,
    _loader: null,
    _name: null,
    _percentage: null,
    _on_complete: null,
    _text_loader: null,
    _text_loader_overlay: null,
    _logo_loader: null,
    _logo_loader_meter: null,
    _total: 0,
    _loaded: 0,
    _image_queue: [],
    _percentage_loaded: 0,
    _mode: "number",
    _text: "loading...",
    _text_colour: "#FFFFFF",
    _images: [],
    _show_progress: !0,
    _show_percentage: !0,
    _background: "#000000",
    _logo: "",
    _logo_size: [80, 80],
    _cookie: !1,
    _timeout: 10,
    _init: function () {
        JQ("img").each(function (a) {
            JQ(this).attr("src") && Royal_Preloader._images.push(JQ(this).attr("src"))
        });
        if (Royal_Preloader._cookie) {
            if (docCookies.getItem("melonhtml5_royal_preloader_" + Royal_Preloader._cookie)) {
                JQ("#royal_preloader").remove();
                JQ(document.body).removeClass("royal_preloader");
                return
            }
            docCookies.setItem("melonhtml5_royal_preloader_" + Royal_Preloader._cookie, (new Date).getTime(), Infinity)
        }
        Royal_Preloader._total = Royal_Preloader._images.length;
        Royal_Preloader._build();
        Royal_Preloader._load()
    },
    _build: function () {
        this._overlay = JQ("#royal_preloader");
        this._overlay.length || (this._overlay = JQ("<div>").attr("id", "royal_preloader").prependTo(JQ(document.body)));
        this._overlay.addClass("royal_preloader_" + this._mode);
        "line" !== this._mode && this._overlay.css("background-color", this._background);
        switch (this._mode) {
            case"number":
                var a = this._hexToRgb(this._text_colour);
                this._percentage = JQ("<div>").html("<div></div><span></span>").css({
                    color: this._text_colour,
                    "border-color": a ? "rgba(" + a.r + ", " + a.g + ", " + a.b + ", 0.7)" : this._text_colour
                }).addClass("royal_preloader_percentage").appendTo(this._overlay);
                this._percentage.children("div").css("border-left-color", this._text_colour);
                break;
            case"text":
                this._text_loader = JQ("<div>").addClass("royal_preloader_loader").text(this._text).css("color", this._text_colour).appendTo(this._overlay);
                this._text_loader_overlay = JQ("<div>").css("background-color", this._background).appendTo(this._text_loader);
                break;
            case"scale_text":
                for (var a = "", c = 0; c < this._text.length; c++)a += "<span>" + this._htmlentities(this._text.charAt(c)) + "</span>";
                this._text_loader = JQ("<div>").addClass("royal_preloader_loader").html(a).css("color", this._text_colour).appendTo(this._overlay);
                break;
            case"logo":
                this._logo_loader = JQ("<div>").css({
                    width: this._logo_size[0],
                    height: this._logo_size[1],
                    "margin-left": this._logo_size[0] / 2 * -1,
                    "margin-top": this._logo_size[1] / 2 * -1,
                    "background-image": 'url("' + this._logo + '")'
                }).addClass("royal_preloader_loader").appendTo(this._overlay);
                this._logo_loader_meter = JQ("<div>").css("background-color", this._background).appendTo(this._logo_loader);
                this._show_progress && (this._percentage = JQ("<div>").css({
                    color: this._text_colour,
                    width: this._logo_size[0],
                    height: this._logo_size[1],
                    "margin-left": this._logo_size[0] / 2 * -1,
                    "margin-top": this._logo_size[1] / 2,
                    "background-color": this._background
                }).addClass("royal_preloader_percentage").appendTo(this._overlay));
                break;
            case"line":
                this._line_loader = JQ("<div>").addClass("royal_preloader_loader").css("background-color", this._background).appendTo(this._overlay);
                JQ("<div>").addClass("royal_preloader_peg").css("box-shadow", "0 0 10px " + this._background).appendTo(this._line_loader);
                JQ(document.body).css("visibility", "visible");
                break;
            case"progress":
                this._progress_loader = JQ("<div>").addClass("royal_preloader_loader").appendTo(this._overlay), this._progress_loader_meter = JQ("<div>").addClass("royal_preloader_meter").appendTo(this._progress_loader), this._show_progress && (this._percentage = JQ("<div>").addClass("royal_preloader_percentage").text(0).appendTo(this._overlay))
        }
        this._overlay.appendTo(JQ(document.body));
        "text" !== this._mode && "scale_text" !== this._mode || this._text_loader.css("margin-left", this._text_loader.width() / 2 * -1)
    },
    _load: function () {
        if (("number" === this._mode || "logo" === this._mode || "progress" === this._mode) && this._show_progress) {
            this._percentage.data("num", 0);
            var a = "0" + (Royal_Preloader._show_percentage ? "%" : "");
            "number" === this._mode ? this._percentage.children("span").text(a) : this._percentage.text(a)
        }
        JQ.each(this._images, function (a, b) {
            var d = function () {
                Royal_Preloader._imageOnLoad(b)
            }, e = new Image;
            e.src = b;
            e.complete ? d() : (e.onload = d, e.onerror = d)
        });
        setTimeout(function () {
            Royal_Preloader._overlay && Royal_Preloader._animatePercentage(Royal_Preloader._percentage_loaded, 100)
        }, this._images.length ? 1E3 * this._timeout : 0)
    },
    _hexToRgb: function (a) {
        return (a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a)) ? {
            r: parseInt(a[1], 16),
            g: parseInt(a[2], 16),
            b: parseInt(a[3], 16)
        } : null
    },
    _htmlentities: function (a) {
        return a.toString().replace(/&/g, "&amp;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/ /g, "&nbsp;")
    },
    _animatePercentage: function (a, c) {
        Royal_Preloader._percentage_loaded = a;
        a < c && (a++, setTimeout(function () {
            switch (Royal_Preloader._mode) {
                case"text":
                    Royal_Preloader._text_loader_overlay.css("left", a + "%");
                    break;
                case"scale_text":
                    var b = parseInt(Royal_Preloader._text.length * a * .01, 10);
                    Royal_Preloader._text_loader.children("span").eq(b).addClass("loaded");
                    break;
                case"line":
                    Royal_Preloader._line_loader.width(a + "%");
                    break;
                case"number":
                    Royal_Preloader._show_progress && (b = a + (Royal_Preloader._show_percentage ? "%" : ""), Royal_Preloader._percentage.children("span").text(b));
                    break;
                case"logo":
                    Royal_Preloader._show_progress && (b = a + (Royal_Preloader._show_percentage ? "%" : ""), Royal_Preloader._percentage.text(b));
                    Royal_Preloader._logo_loader_meter.css("bottom", a + "%");
                    break;
                case"progress":
                    Royal_Preloader._show_progress && (b = a + (Royal_Preloader._show_percentage ? "%" : ""), Royal_Preloader._percentage.text(b)), Royal_Preloader._progress_loader_meter.width(a + "%")
            }
            Royal_Preloader._animatePercentage(a, c)
        }, 5), 100 === a && Royal_Preloader._loadFinish())
    },
    _imageOnLoad: function (a) {
        this._image_queue.push(a);
        this._image_queue.length && this._image_queue[0] === a && this._processQueue()
    },
    _reQueue: function () {
        Royal_Preloader._image_queue.splice(0, 1);
        Royal_Preloader._processQueue()
    },
    _processQueue: function () {
        0 !== this._image_queue.length && (this._loaded++, Royal_Preloader._animatePercentage(Royal_Preloader._percentage_loaded, parseInt(this._loaded / this._total * 100, 10)), this._reQueue())
    },
    _loadFinish: function () {
        transitionEnd(this._overlay, function (a, c) {
            Royal_Preloader._overlay && (Royal_Preloader._overlay.remove(), Royal_Preloader._overlay = null)
        });
        this._overlay.addClass("complete");
        JQ(document.body).removeClass("royal_preloader");
        this._on_complete && this._on_complete()
    },
    config: function (a) {
        "undefined" !== typeof a.mode && (this._mode = a.mode);
        "undefined" !== typeof a.text && (this._text = a.text);
        "undefined" !== typeof a.text_colour && (this._text_colour = a.text_colour);
        "undefined" !== typeof a.timeout && (this._timeout = parseInt(a.timeout, 10));
        "undefined" !== typeof a.showProgress && (this._show_progress = a.showProgress ? !0 : !1);
        "undefined" !== typeof a.showPercentage && (this._show_percentage = a.showPercentage ? !0 : !1);
        "undefined" !== typeof a.background && (this._background = a.background);
        "undefined" !== typeof a.logo && (this._logo = a.logo);
        "undefined" !== typeof a.logo_size && (this._logo_size = a.logo_size);
        "undefined" !== typeof a.onComplete && (this._on_complete = a.onComplete);
        "undefined" !== typeof a.images && (this._images = a.images);
        "undefined" !== typeof a.cookie && (this._cookie = a.cookie)
    }
};
setTimeout(function () {
    JQ(document).ready(Royal_Preloader._init)
});
jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (a, b, c, d, e) {
        return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function (a, b, c, d, e) {
        return d * (b /= e) * b + c
    },
    easeOutQuad: function (a, b, c, d, e) {
        return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function (a, b, c, d, e) {
        return d * (b /= e) * b * b + c
    },
    easeOutCubic: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function (a, b, c, d, e) {
        return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function (a, b, c, d, e) {
        return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function (a, b, c, d, e) {
        return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function (a, b, c, d, e) {
        return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function (a, b, c, d, e) {
        return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function (a, b, c, d, e) {
        return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function (a, b, c, d, e) {
        return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function (a, b, c, d, e) {
        return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function (a, b, c, d, e) {
        return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function (a, b, c, d, e) {
        return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function (a, b, c, d, e) {
        return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function (a, b, c, d, e) {
        return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)return c;
        if (1 == (b /= e))return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
    },
    easeOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)return c;
        if (1 == (b /= e))return c + d;
        if (g || (g = .3 * e), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
    },
    easeInOutElastic: function (a, b, c, d, e) {
        var f = 1.70158, g = 0, h = d;
        if (0 == b)return c;
        if (2 == (b /= e / 2))return c + d;
        if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
            h = d;
            var f = g / 4
        } else var f = g / (2 * Math.PI) * Math.asin(d / h);
        return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
    },
    easeInBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function (a, b, c, d, e, f) {
        return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function (a, b, c, d, e) {
        return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function (a, b, c, d, e) {
        return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function (a, b, c, d, e) {
        return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
}), function (a) {
    "use strict";
    function b(a) {
        return new RegExp("(^|\\s+)" + a + "(\\s+|$)")
    }

    function f(a, b) {
        var f = c(a, b) ? e : d;
        f(a, b)
    }

    var c, d, e;
    "classList" in document.documentElement ? (c = function (a, b) {
        return a.classList.contains(b)
    }, d = function (a, b) {
        a.classList.add(b)
    }, e = function (a, b) {
        a.classList.remove(b)
    }) : (c = function (a, c) {
        return b(c).test(a.className)
    }, d = function (a, b) {
        c(a, b) || (a.className = a.className + " " + b)
    }, e = function (a, c) {
        a.className = a.className.replace(b(c), " ")
    });
    var g = {hasClass: c, addClass: d, removeClass: e, toggleClass: f, has: c, add: d, remove: e, toggle: f};
    "function" == typeof define && define.amd ? define(g) : a.classie = g
}(window);
var cbpAnimatedHeader = function () {
    function e() {
        window.addEventListener("scroll", function (a) {
            c || (c = !0, setTimeout(f, 250))
        }, !1)
    }

    function f() {
        var a = g();
        a >= d ? classie.add(b, "cbp-af-header-shrink") : classie.remove(b, "cbp-af-header-shrink"), c = !1
    }

    function g() {
        return window.pageYOffset || a.scrollTop
    }

    var a = document.documentElement, b = document.querySelector(".cbp-af-header"), c = !1, d = 100;
    e()
}();
"function" != typeof Object.create && (Object.create = function (a) {
    function b() {
    }

    return b.prototype = a, new b
}), function (a, b, c) {
    var d = {
        init: function (b, c) {
            var d = this;
            d.$elem = a(c), d.options = a.extend({}, a.fn.owlCarousel.options, d.$elem.data(), b), d.userOptions = b, d.loadContent()
        }, loadContent: function () {
            function b(a) {
                var b, d = "";
                if ("function" == typeof c.options.jsonSuccess)c.options.jsonSuccess.apply(this, [a]); else {
                    for (b in a.owl)a.owl.hasOwnProperty(b) && (d += a.owl[b].item);
                    c.$elem.html(d)
                }
                c.logIn()
            }

            var d, c = this;
            "function" == typeof c.options.beforeInit && c.options.beforeInit.apply(this, [c.$elem]), "string" == typeof c.options.jsonPath ? (d = c.options.jsonPath, a.getJSON(d, b)) : c.logIn()
        }, logIn: function () {
            var a = this;
            a.$elem.data({
                "owl-originalStyles": a.$elem.attr("style"),
                "owl-originalClasses": a.$elem.attr("class")
            }), a.$elem.css({opacity: 0}), a.orignalItems = a.options.items, a.checkBrowser(), a.wrapperWidth = 0, a.checkVisible = null, a.setVars()
        }, setVars: function () {
            var a = this;
            return 0 !== a.$elem.children().length && (a.baseClass(), a.eventTypes(), a.$userItems = a.$elem.children(), a.itemsAmount = a.$userItems.length, a.wrapItems(), a.$owlItems = a.$elem.find(".owl-item"), a.$owlWrapper = a.$elem.find(".owl-wrapper"), a.playDirection = "next", a.prevItem = 0, a.prevArr = [0], a.currentItem = 0, a.customEvents(), void a.onStartup())
        }, onStartup: function () {
            var a = this;
            a.updateItems(), a.calculateAll(), a.buildControls(), a.updateControls(), a.response(), a.moveEvents(), a.stopOnHover(), a.owlStatus(), a.options.transitionStyle !== !1 && a.transitionTypes(a.options.transitionStyle), a.options.autoPlay === !0 && (a.options.autoPlay = 5e3), a.play(), a.$elem.find(".owl-wrapper").css("display", "block"), a.$elem.is(":visible") ? a.$elem.css("opacity", 1) : a.watchVisibility(), a.onstartup = !1, a.eachMoveUpdate(), "function" == typeof a.options.afterInit && a.options.afterInit.apply(this, [a.$elem])
        }, eachMoveUpdate: function () {
            var a = this;
            a.options.lazyLoad === !0 && a.lazyLoad(), a.options.autoHeight === !0 && a.autoHeight(), a.onVisibleItems(), "function" == typeof a.options.afterAction && a.options.afterAction.apply(this, [a.$elem])
        }, updateVars: function () {
            var a = this;
            "function" == typeof a.options.beforeUpdate && a.options.beforeUpdate.apply(this, [a.$elem]), a.watchVisibility(), a.updateItems(), a.calculateAll(), a.updatePosition(), a.updateControls(), a.eachMoveUpdate(), "function" == typeof a.options.afterUpdate && a.options.afterUpdate.apply(this, [a.$elem])
        }, reload: function () {
            var a = this;
            b.setTimeout(function () {
                a.updateVars()
            }, 0)
        }, watchVisibility: function () {
            var a = this;
            return a.$elem.is(":visible") === !1 && (a.$elem.css({opacity: 0}), b.clearInterval(a.autoPlayInterval), b.clearInterval(a.checkVisible), void(a.checkVisible = b.setInterval(function () {
                    a.$elem.is(":visible") && (a.reload(), a.$elem.animate({opacity: 1}, 200), b.clearInterval(a.checkVisible))
                }, 500)))
        }, wrapItems: function () {
            var a = this;
            a.$userItems.wrapAll('<div class="owl-wrapper">').wrap('<div class="owl-item"></div>'), a.$elem.find(".owl-wrapper").wrap('<div class="owl-wrapper-outer">'), a.wrapperOuter = a.$elem.find(".owl-wrapper-outer"), a.$elem.css("display", "block")
        }, baseClass: function () {
            var a = this, b = a.$elem.hasClass(a.options.baseClass), c = a.$elem.hasClass(a.options.theme);
            b || a.$elem.addClass(a.options.baseClass), c || a.$elem.addClass(a.options.theme)
        }, updateItems: function () {
            var c, d, b = this;
            if (b.options.responsive === !1)return !1;
            if (b.options.singleItem === !0)return b.options.items = b.orignalItems = 1, b.options.itemsCustom = !1, b.options.itemsDesktop = !1, b.options.itemsDesktopSmall = !1, b.options.itemsTablet = !1, b.options.itemsTabletSmall = !1, b.options.itemsMobile = !1, !1;
            if (c = a(b.options.responsiveBaseWidth).width(), c > (b.options.itemsDesktop[0] || b.orignalItems) && (b.options.items = b.orignalItems), b.options.itemsCustom !== !1)for (b.options.itemsCustom.sort(function (a, b) {
                return a[0] - b[0]
            }), d = 0; d < b.options.itemsCustom.length; d += 1)b.options.itemsCustom[d][0] <= c && (b.options.items = b.options.itemsCustom[d][1]); else c <= b.options.itemsDesktop[0] && b.options.itemsDesktop !== !1 && (b.options.items = b.options.itemsDesktop[1]), c <= b.options.itemsDesktopSmall[0] && b.options.itemsDesktopSmall !== !1 && (b.options.items = b.options.itemsDesktopSmall[1]), c <= b.options.itemsTablet[0] && b.options.itemsTablet !== !1 && (b.options.items = b.options.itemsTablet[1]), c <= b.options.itemsTabletSmall[0] && b.options.itemsTabletSmall !== !1 && (b.options.items = b.options.itemsTabletSmall[1]), c <= b.options.itemsMobile[0] && b.options.itemsMobile !== !1 && (b.options.items = b.options.itemsMobile[1]);
            b.options.items > b.itemsAmount && b.options.itemsScaleUp === !0 && (b.options.items = b.itemsAmount)
        }, response: function () {
            var d, e, c = this;
            return c.options.responsive === !0 && (e = a(b).width(), c.resizer = function () {
                    a(b).width() !== e && (c.options.autoPlay !== !1 && b.clearInterval(c.autoPlayInterval), b.clearTimeout(d), d = b.setTimeout(function () {
                        e = a(b).width(), c.updateVars()
                    }, c.options.responsiveRefreshRate))
                }, void a(b).resize(c.resizer))
        }, updatePosition: function () {
            var a = this;
            a.jumpTo(a.currentItem), a.options.autoPlay !== !1 && a.checkAp()
        }, appendItemsSizes: function () {
            var b = this, c = 0, d = b.itemsAmount - b.options.items;
            b.$owlItems.each(function (e) {
                var f = a(this);
                f.css({width: b.itemWidth}).data("owl-item", Number(e)), e % b.options.items !== 0 && e !== d || e > d || (c += 1), f.data("owl-roundPages", c)
            })
        }, appendWrapperSizes: function () {
            var a = this, b = a.$owlItems.length * a.itemWidth;
            a.$owlWrapper.css({width: 2 * b, left: 0}), a.appendItemsSizes()
        }, calculateAll: function () {
            var a = this;
            a.calculateWidth(), a.appendWrapperSizes(), a.loops(), a.max()
        }, calculateWidth: function () {
            var a = this;
            a.itemWidth = Math.round(a.$elem.width() / a.options.items)
        }, max: function () {
            var a = this, b = (a.itemsAmount * a.itemWidth - a.options.items * a.itemWidth) * -1;
            return a.options.items > a.itemsAmount ? (a.maximumItem = 0, b = 0, a.maximumPixels = 0) : (a.maximumItem = a.itemsAmount - a.options.items, a.maximumPixels = b), b
        }, min: function () {
            return 0
        }, loops: function () {
            var e, f, g, b = this, c = 0, d = 0;
            for (b.positionsInArray = [0], b.pagesInArray = [], e = 0; e < b.itemsAmount; e += 1)d += b.itemWidth, b.positionsInArray.push(-d), b.options.scrollPerPage === !0 && (f = a(b.$owlItems[e]), g = f.data("owl-roundPages"), g !== c && (b.pagesInArray[c] = b.positionsInArray[e], c = g))
        }, buildControls: function () {
            var b = this;
            b.options.navigation !== !0 && b.options.pagination !== !0 || (b.owlControls = a('<div class="owl-controls"/>').toggleClass("clickable", !b.browser.isTouch).appendTo(b.$elem)), b.options.pagination === !0 && b.buildPagination(), b.options.navigation === !0 && b.buildButtons()
        }, buildButtons: function () {
            var b = this, c = a('<div class="owl-buttons"/>');
            b.owlControls.append(c), b.buttonPrev = a("<div/>", {
                class: "owl-prev",
                html: b.options.navigationText[0] || ""
            }), b.buttonNext = a("<div/>", {
                class: "owl-next",
                html: b.options.navigationText[1] || ""
            }), c.append(b.buttonPrev).append(b.buttonNext), c.on("touchstart.owlControls mousedown.owlControls", 'div[class^="owl"]', function (a) {
                a.preventDefault()
            }), c.on("touchend.owlControls mouseup.owlControls", 'div[class^="owl"]', function (c) {
                c.preventDefault(), a(this).hasClass("owl-next") ? b.next() : b.prev()
            })
        }, buildPagination: function () {
            var b = this;
            b.paginationWrapper = a('<div class="owl-pagination"/>'), b.owlControls.append(b.paginationWrapper), b.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function (c) {
                c.preventDefault(), Number(a(this).data("owl-page")) !== b.currentItem && b.goTo(Number(a(this).data("owl-page")), !0)
            })
        }, updatePagination: function () {
            var c, d, e, f, g, h, b = this;
            if (b.options.pagination === !1)return !1;
            for (b.paginationWrapper.html(""), c = 0, d = b.itemsAmount - b.itemsAmount % b.options.items, f = 0; f < b.itemsAmount; f += 1)f % b.options.items === 0 && (c += 1, d === f && (e = b.itemsAmount - b.options.items), g = a("<div/>", {class: "owl-page"}), h = a("<span></span>", {
                text: b.options.paginationNumbers === !0 ? c : "",
                class: b.options.paginationNumbers === !0 ? "owl-numbers" : ""
            }), g.append(h), g.data("owl-page", d === f ? e : f), g.data("owl-roundPages", c), b.paginationWrapper.append(g));
            b.checkPagination()
        }, checkPagination: function () {
            var b = this;
            return b.options.pagination !== !1 && void b.paginationWrapper.find(".owl-page").each(function () {
                    a(this).data("owl-roundPages") === a(b.$owlItems[b.currentItem]).data("owl-roundPages") && (b.paginationWrapper.find(".owl-page").removeClass("active"), a(this).addClass("active"))
                })
        }, checkNavigation: function () {
            var a = this;
            return a.options.navigation !== !1 && void(a.options.rewindNav === !1 && (0 === a.currentItem && 0 === a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.addClass("disabled")) : 0 === a.currentItem && 0 !== a.maximumItem ? (a.buttonPrev.addClass("disabled"), a.buttonNext.removeClass("disabled")) : a.currentItem === a.maximumItem ? (a.buttonPrev.removeClass("disabled"), a.buttonNext.addClass("disabled")) : 0 !== a.currentItem && a.currentItem !== a.maximumItem && (a.buttonPrev.removeClass("disabled"), a.buttonNext.removeClass("disabled"))))
        }, updateControls: function () {
            var a = this;
            a.updatePagination(), a.checkNavigation(), a.owlControls && (a.options.items >= a.itemsAmount ? a.owlControls.hide() : a.owlControls.show())
        }, destroyControls: function () {
            var a = this;
            a.owlControls && a.owlControls.remove()
        }, next: function (a) {
            var b = this;
            if (b.isTransition)return !1;
            if (b.currentItem += b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem > b.maximumItem + (b.options.scrollPerPage === !0 ? b.options.items - 1 : 0)) {
                if (b.options.rewindNav !== !0)return b.currentItem = b.maximumItem, !1;
                b.currentItem = 0, a = "rewind"
            }
            b.goTo(b.currentItem, a)
        }, prev: function (a) {
            var b = this;
            if (b.isTransition)return !1;
            if (b.options.scrollPerPage === !0 && b.currentItem > 0 && b.currentItem < b.options.items ? b.currentItem = 0 : b.currentItem -= b.options.scrollPerPage === !0 ? b.options.items : 1, b.currentItem < 0) {
                if (b.options.rewindNav !== !0)return b.currentItem = 0, !1;
                b.currentItem = b.maximumItem, a = "rewind"
            }
            b.goTo(b.currentItem, a)
        }, goTo: function (a, c, d) {
            var f, e = this;
            return !e.isTransition && ("function" == typeof e.options.beforeMove && e.options.beforeMove.apply(this, [e.$elem]), a >= e.maximumItem ? a = e.maximumItem : a <= 0 && (a = 0), e.currentItem = e.owl.currentItem = a, e.options.transitionStyle !== !1 && "drag" !== d && 1 === e.options.items && e.browser.support3d === !0 ? (e.swapSpeed(0), e.browser.support3d === !0 ? e.transition3d(e.positionsInArray[a]) : e.css2slide(e.positionsInArray[a], 1), e.afterGo(), e.singleItemTransition(), !1) : (f = e.positionsInArray[a], e.browser.support3d === !0 ? (e.isCss3Finish = !1, c === !0 ? (e.swapSpeed("paginationSpeed"), b.setTimeout(function () {
                    e.isCss3Finish = !0
                }, e.options.paginationSpeed)) : "rewind" === c ? (e.swapSpeed(e.options.rewindSpeed), b.setTimeout(function () {
                    e.isCss3Finish = !0
                }, e.options.rewindSpeed)) : (e.swapSpeed("slideSpeed"), b.setTimeout(function () {
                    e.isCss3Finish = !0
                }, e.options.slideSpeed)), e.transition3d(f)) : c === !0 ? e.css2slide(f, e.options.paginationSpeed) : "rewind" === c ? e.css2slide(f, e.options.rewindSpeed) : e.css2slide(f, e.options.slideSpeed), void e.afterGo()))
        }, jumpTo: function (a) {
            var b = this;
            "function" == typeof b.options.beforeMove && b.options.beforeMove.apply(this, [b.$elem]), a >= b.maximumItem || a === -1 ? a = b.maximumItem : a <= 0 && (a = 0), b.swapSpeed(0), b.browser.support3d === !0 ? b.transition3d(b.positionsInArray[a]) : b.css2slide(b.positionsInArray[a], 1), b.currentItem = b.owl.currentItem = a, b.afterGo()
        }, afterGo: function () {
            var a = this;
            a.prevArr.push(a.currentItem), a.prevItem = a.owl.prevItem = a.prevArr[a.prevArr.length - 2], a.prevArr.shift(0), a.prevItem !== a.currentItem && (a.checkPagination(), a.checkNavigation(), a.eachMoveUpdate(), a.options.autoPlay !== !1 && a.checkAp()), "function" == typeof a.options.afterMove && a.prevItem !== a.currentItem && a.options.afterMove.apply(this, [a.$elem])
        }, stop: function () {
            var a = this;
            a.apStatus = "stop", b.clearInterval(a.autoPlayInterval)
        }, checkAp: function () {
            var a = this;
            "stop" !== a.apStatus && a.play()
        }, play: function () {
            var a = this;
            return a.apStatus = "play", a.options.autoPlay !== !1 && (b.clearInterval(a.autoPlayInterval), void(a.autoPlayInterval = b.setInterval(function () {
                a.next(!0)
            }, a.options.autoPlay)))
        }, swapSpeed: function (a) {
            var b = this;
            "slideSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.slideSpeed)) : "paginationSpeed" === a ? b.$owlWrapper.css(b.addCssSpeed(b.options.paginationSpeed)) : "string" != typeof a && b.$owlWrapper.css(b.addCssSpeed(a))
        }, addCssSpeed: function (a) {
            return {
                "-webkit-transition": "all " + a + "ms ease",
                "-moz-transition": "all " + a + "ms ease",
                "-o-transition": "all " + a + "ms ease",
                transition: "all " + a + "ms ease"
            }
        }, removeTransition: function () {
            return {"-webkit-transition": "", "-moz-transition": "", "-o-transition": "", transition: ""}
        }, doTranslate: function (a) {
            return {
                "-webkit-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + a + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + a + "px, 0px, 0px)",
                transform: "translate3d(" + a + "px, 0px,0px)"
            }
        }, transition3d: function (a) {
            var b = this;
            b.$owlWrapper.css(b.doTranslate(a))
        }, css2move: function (a) {
            var b = this;
            b.$owlWrapper.css({left: a})
        }, css2slide: function (a, b) {
            var c = this;
            c.isCssFinish = !1, c.$owlWrapper.stop(!0, !0).animate({left: a}, {
                duration: b || c.options.slideSpeed,
                complete: function () {
                    c.isCssFinish = !0
                }
            })
        }, checkBrowser: function () {
            var e, a = this, d = c.createElement("p"), f = {
                webkitTransform: "-webkit-transform",
                OTransform: "-o-transform",
                msTransform: "-ms-transform",
                MozTransform: "-moz-transform",
                transform: "transform"
            };
            c.body.insertBefore(d, null);
            for (var g in f)void 0 !== d.style[g] && (d.style[g] = "translate3d(1px,1px,1px)", e = b.getComputedStyle(d).getPropertyValue(f[g]));
            c.body.removeChild(d), isTouch = "ontouchstart" in b || b.navigator.msMaxTouchPoints, a.browser = {
                support3d: void 0 !== e && e.length > 0 && "none" !== e,
                isTouch: isTouch
            }
        }, moveEvents: function () {
            var a = this;
            a.options.mouseDrag === !1 && a.options.touchDrag === !1 || (a.gestures(), a.disabledEvents())
        }, eventTypes: function () {
            var a = this, b = ["s", "e", "x"];
            a.ev_types = {}, a.options.mouseDrag === !0 && a.options.touchDrag === !0 ? b = ["touchstart.owl mousedown.owl", "touchmove.owl mousemove.owl", "touchend.owl touchcancel.owl mouseup.owl"] : a.options.mouseDrag === !1 && a.options.touchDrag === !0 ? b = ["touchstart.owl", "touchmove.owl", "touchend.owl touchcancel.owl"] : a.options.mouseDrag === !0 && a.options.touchDrag === !1 && (b = ["mousedown.owl", "mousemove.owl", "mouseup.owl"]), a.ev_types.start = b[0], a.ev_types.move = b[1], a.ev_types.end = b[2]
        }, disabledEvents: function () {
            var b = this;
            b.$elem.on("dragstart.owl", function (a) {
                a.preventDefault()
            }), b.$elem.on("mousedown.disableTextSelect", function (b) {
                return a(b.target).is("input, textarea, select, option")
            })
        }, gestures: function () {
            function d(a) {
                if (void 0 !== a.touches)return {x: a.touches[0].pageX, y: a.touches[0].pageY};
                if (void 0 === a.touches) {
                    if (void 0 !== a.pageX)return {x: a.pageX, y: a.pageY};
                    if (void 0 === a.pageX)return {x: a.clientX, y: a.clientY}
                }
            }

            function e(b) {
                "on" === b ? (a(c).on(i.ev_types.move, g), a(c).on(i.ev_types.end, h)) : "off" === b && (a(c).off(i.ev_types.move), a(c).off(i.ev_types.end))
            }

            function f(c) {
                var g, f = c.originalEvent || c || b.event;
                if (3 === f.which)return !1;
                if (!(i.itemsAmount <= i.options.items)) {
                    if (i.isCssFinish === !1 && !i.options.dragBeforeAnimFinish)return !1;
                    if (i.isCss3Finish === !1 && !i.options.dragBeforeAnimFinish)return !1;
                    i.options.autoPlay !== !1 && b.clearInterval(i.autoPlayInterval), i.browser.isTouch === !0 || i.$owlWrapper.hasClass("grabbing") || i.$owlWrapper.addClass("grabbing"), i.newPosX = 0, i.newRelativeX = 0, a(this).css(i.removeTransition()), g = a(this).position(), j.relativePos = g.left, j.offsetX = d(f).x - g.left, j.offsetY = d(f).y - g.top, e("on"), j.sliding = !1, j.targetElement = f.target || f.srcElement
                }
            }

            function g(e) {
                var g, h, f = e.originalEvent || e || b.event;
                i.newPosX = d(f).x - j.offsetX, i.newPosY = d(f).y - j.offsetY, i.newRelativeX = i.newPosX - j.relativePos, "function" == typeof i.options.startDragging && j.dragging !== !0 && 0 !== i.newRelativeX && (j.dragging = !0, i.options.startDragging.apply(i, [i.$elem])), (i.newRelativeX > 8 || i.newRelativeX < -8) && i.browser.isTouch === !0 && (void 0 !== f.preventDefault ? f.preventDefault() : f.returnValue = !1, j.sliding = !0), (i.newPosY > 10 || i.newPosY < -10) && j.sliding === !1 && a(c).off("touchmove.owl"), g = function () {
                    return i.newRelativeX / 5
                }, h = function () {
                    return i.maximumPixels + i.newRelativeX / 5
                }, i.newPosX = Math.max(Math.min(i.newPosX, g()), h()), i.browser.support3d === !0 ? i.transition3d(i.newPosX) : i.css2move(i.newPosX)
            }

            function h(c) {
                var f, g, h, d = c.originalEvent || c || b.event;
                d.target = d.target || d.srcElement, j.dragging = !1, i.browser.isTouch !== !0 && i.$owlWrapper.removeClass("grabbing"), i.newRelativeX < 0 ? i.dragDirection = i.owl.dragDirection = "left" : i.dragDirection = i.owl.dragDirection = "right", 0 !== i.newRelativeX && (f = i.getNewPosition(), i.goTo(f, !1, "drag"), j.targetElement === d.target && i.browser.isTouch !== !0 && (a(d.target).on("click.disable", function (b) {
                    b.stopImmediatePropagation(), b.stopPropagation(), b.preventDefault(), a(b.target).off("click.disable")
                }), g = a._data(d.target, "events").click, h = g.pop(), g.splice(0, 0, h))), e("off")
            }

            var i = this, j = {
                offsetX: 0,
                offsetY: 0,
                baseElWidth: 0,
                relativePos: 0,
                position: null,
                minSwipe: null,
                maxSwipe: null,
                sliding: null,
                dargging: null,
                targetElement: null
            };
            i.isCssFinish = !0, i.$elem.on(i.ev_types.start, ".owl-wrapper", f)
        }, getNewPosition: function () {
            var a = this, b = a.closestItem();
            return b > a.maximumItem ? (a.currentItem = a.maximumItem, b = a.maximumItem) : a.newPosX >= 0 && (b = 0, a.currentItem = 0), b
        }, closestItem: function () {
            var b = this, c = b.options.scrollPerPage === !0 ? b.pagesInArray : b.positionsInArray, d = b.newPosX, e = null;
            return a.each(c, function (f, g) {
                d - b.itemWidth / 20 > c[f + 1] && d - b.itemWidth / 20 < g && "left" === b.moveDirection() ? (e = g, b.options.scrollPerPage === !0 ? b.currentItem = a.inArray(e, b.positionsInArray) : b.currentItem = f) : d + b.itemWidth / 20 < g && d + b.itemWidth / 20 > (c[f + 1] || c[f] - b.itemWidth) && "right" === b.moveDirection() && (b.options.scrollPerPage === !0 ? (e = c[f + 1] || c[c.length - 1], b.currentItem = a.inArray(e, b.positionsInArray)) : (e = c[f + 1], b.currentItem = f + 1))
            }), b.currentItem
        }, moveDirection: function () {
            var b, a = this;
            return a.newRelativeX < 0 ? (b = "right", a.playDirection = "next") : (b = "left", a.playDirection = "prev"), b
        }, customEvents: function () {
            var a = this;
            a.$elem.on("owl.next", function () {
                a.next()
            }), a.$elem.on("owl.prev", function () {
                a.prev()
            }), a.$elem.on("owl.play", function (b, c) {
                a.options.autoPlay = c, a.play(), a.hoverStatus = "play"
            }), a.$elem.on("owl.stop", function () {
                a.stop(), a.hoverStatus = "stop"
            }), a.$elem.on("owl.goTo", function (b, c) {
                a.goTo(c)
            }), a.$elem.on("owl.jumpTo", function (b, c) {
                a.jumpTo(c)
            })
        }, stopOnHover: function () {
            var a = this;
            a.options.stopOnHover === !0 && a.browser.isTouch !== !0 && a.options.autoPlay !== !1 && (a.$elem.on("mouseover", function () {
                a.stop()
            }), a.$elem.on("mouseout", function () {
                "stop" !== a.hoverStatus && a.play()
            }))
        }, lazyLoad: function () {
            var c, d, e, f, g, b = this;
            if (b.options.lazyLoad === !1)return !1;
            for (c = 0; c < b.itemsAmount; c += 1)d = a(b.$owlItems[c]), "loaded" !== d.data("owl-loaded") && (e = d.data("owl-item"), f = d.find(".lazyOwl"), "string" == typeof f.data("src") ? (void 0 === d.data("owl-loaded") && (f.hide(), d.addClass("loading").data("owl-loaded", "checked")), g = b.options.lazyFollow !== !0 || e >= b.currentItem, g && e < b.currentItem + b.options.items && f.length && f.each(function () {
                b.lazyPreload(d, a(this))
            })) : d.data("owl-loaded", "loaded"))
        }, lazyPreload: function (a, c) {
            function d() {
                a.data("owl-loaded", "loaded").removeClass("loading"), c.removeAttr("data-src"), "fade" === f.options.lazyEffect ? c.fadeIn(400) : c.show(), "function" == typeof f.options.afterLazyLoad && f.options.afterLazyLoad.apply(this, [f.$elem])
            }

            function e() {
                g += 1, f.completeImg(c.get(0)) || h === !0 ? d() : g <= 100 ? b.setTimeout(e, 100) : d()
            }

            var h, f = this, g = 0;
            "DIV" === c.prop("tagName") ? (c.css("background-image", "url(" + c.data("src") + ")"), h = !0) : c[0].src = c.data("src"), e()
        }, autoHeight: function () {
            function c() {
                var c = a(e.$owlItems[e.currentItem]).height();
                e.wrapperOuter.css("height", c + "px"), e.wrapperOuter.hasClass("autoHeight") || b.setTimeout(function () {
                    e.wrapperOuter.addClass("autoHeight")
                }, 0)
            }

            function d() {
                g += 1, e.completeImg(f.get(0)) ? c() : g <= 100 ? b.setTimeout(d, 100) : e.wrapperOuter.css("height", "")
            }

            var g, e = this, f = a(e.$owlItems[e.currentItem]).find("img");
            void 0 !== f.get(0) ? (g = 0, d()) : c()
        }, completeImg: function (a) {
            var b;
            return !!a.complete && (b = typeof a.naturalWidth, "undefined" === b || 0 !== a.naturalWidth)
        }, onVisibleItems: function () {
            var c, b = this;
            for (b.options.addClassActive === !0 && b.$owlItems.removeClass("active"), b.visibleItems = [], c = b.currentItem; c < b.currentItem + b.options.items; c += 1)b.visibleItems.push(c), b.options.addClassActive === !0 && a(b.$owlItems[c]).addClass("active");
            b.owl.visibleItems = b.visibleItems
        }, transitionTypes: function (a) {
            var b = this;
            b.outClass = "owl-" + a + "-out", b.inClass = "owl-" + a + "-in"
        }, singleItemTransition: function () {
            function a(a) {
                return {position: "relative", left: a + "px"}
            }

            var b = this, c = b.outClass, d = b.inClass, e = b.$owlItems.eq(b.currentItem), f = b.$owlItems.eq(b.prevItem), g = Math.abs(b.positionsInArray[b.currentItem]) + b.positionsInArray[b.prevItem], h = Math.abs(b.positionsInArray[b.currentItem]) + b.itemWidth / 2, i = "webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend";
            b.isTransition = !0, b.$owlWrapper.addClass("owl-origin").css({
                "-webkit-transform-origin": h + "px",
                "-moz-perspective-origin": h + "px",
                "perspective-origin": h + "px"
            }), f.css(a(g, 10)).addClass(c).on(i, function () {
                b.endPrev = !0, f.off(i), b.clearTransStyle(f, c)
            }), e.addClass(d).on(i, function () {
                b.endCurrent = !0, e.off(i), b.clearTransStyle(e, d)
            })
        }, clearTransStyle: function (a, b) {
            var c = this;
            a.css({
                position: "",
                left: ""
            }).removeClass(b), c.endPrev && c.endCurrent && (c.$owlWrapper.removeClass("owl-origin"), c.endPrev = !1, c.endCurrent = !1, c.isTransition = !1)
        }, owlStatus: function () {
            var a = this;
            a.owl = {
                userOptions: a.userOptions,
                baseElement: a.$elem,
                userItems: a.$userItems,
                owlItems: a.$owlItems,
                currentItem: a.currentItem,
                prevItem: a.prevItem,
                visibleItems: a.visibleItems,
                isTouch: a.browser.isTouch,
                browser: a.browser,
                dragDirection: a.dragDirection
            }
        }, clearEvents: function () {
            var d = this;
            d.$elem.off(".owl owl mousedown.disableTextSelect"), a(c).off(".owl owl"), a(b).off("resize", d.resizer)
        }, unWrap: function () {
            var a = this;
            0 !== a.$elem.children().length && (a.$owlWrapper.unwrap(), a.$userItems.unwrap().unwrap(), a.owlControls && a.owlControls.remove()), a.clearEvents(), a.$elem.attr("style", a.$elem.data("owl-originalStyles") || ""), a.$elem.attr("class", a.$elem.data("owl-originalClasses"))
        }, destroy: function () {
            var a = this;
            a.stop(), b.clearInterval(a.checkVisible), a.unWrap(), a.$elem.removeData()
        }, reinit: function (b) {
            var c = this, d = a.extend({}, c.userOptions, b);
            c.unWrap(), c.init(d, c.$elem)
        }, addItem: function (a, b) {
            var d, c = this;
            return !!a && (0 === c.$elem.children().length ? (c.$elem.append(a), c.setVars(), !1) : (c.unWrap(), d = void 0 === b || b === -1 ? -1 : b, d >= c.$userItems.length || d === -1 ? c.$userItems.eq(-1).after(a) : c.$userItems.eq(d).before(a), void c.setVars()))
        }, removeItem: function (a) {
            var c, b = this;
            return 0 !== b.$elem.children().length && (c = void 0 === a || a === -1 ? -1 : a, b.unWrap(), b.$userItems.eq(c).remove(), void b.setVars())
        }
    };
    a.fn.owlCarousel = function (b) {
        return this.each(function () {
            if (a(this).data("owl-init") === !0)return !1;
            a(this).data("owl-init", !0);
            var c = Object.create(d);
            c.init(b, this), a.data(this, "owlCarousel", c)
        })
    }, a.fn.owlCarousel.options = {
        items: 5,
        itemsCustom: !1,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: !1,
        itemsMobile: [479, 1],
        singleItem: !1,
        itemsScaleUp: !1,
        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1e3,
        autoPlay: !1,
        stopOnHover: !1,
        navigation: !1,
        navigationText: ["prev", "next"],
        rewindNav: !0,
        scrollPerPage: !1,
        pagination: !0,
        paginationNumbers: !1,
        responsive: !0,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: b,
        baseClass: "owl-carousel",
        theme: "owl-theme",
        lazyLoad: !1,
        lazyFollow: !0,
        lazyEffect: "fade",
        autoHeight: !1,
        jsonPath: !1,
        jsonSuccess: !1,
        dragBeforeAnimFinish: !0,
        mouseDrag: !0,
        touchDrag: !0,
        addClassActive: !1,
        transitionStyle: !1,
        beforeUpdate: !1,
        afterUpdate: !1,
        beforeInit: !1,
        afterInit: !1,
        beforeMove: !1,
        afterMove: !1,
        afterAction: !1,
        startDragging: !1,
        afterLazyLoad: !1
    }
}(jQuery, window, document), function (a, b, c, d) {
    var i, j, k, l, m, n, o, p, q, r, e = "mPageScroll2id", f = "mPS2id", g = ".m_PageScroll2id,a[rel~='m_PageScroll2id'],.page-scroll-to-id,a[rel~='page-scroll-to-id']", h = {
        scrollSpeed: 1300,
        autoScrollSpeed: !0,
        scrollEasing: "easeInOutExpo",
        scrollingEasing: "easeInOutCirc",
        pageEndSmoothScroll: !0,
        layout: "vertical",
        offset: 0,
        highlightSelector: !1,
        clickedClass: f + "-clicked",
        targetClass: f + "-target",
        highlightClass: f + "-highlight",
        forceSingleHighlight: !1,
        keepHighlightUntilNext: !1,
        disablePluginBelow: !1,
        clickEvents: !0,
        onStart: function () {
        },
        onComplete: function () {
        },
        defaultSelector: !1
    }, s = {
        init: function (d) {
            var d = a.extend(!0, {}, h, d);
            a(c).data(f, d), j = a(c).data(f), i = i ? i + "," + this.selector : this.selector, j.defaultSelector && ("object" == typeof a(i) && 0 !== a(i).length || (i = g)), j.clickEvents && a(c).undelegate("." + f).delegate(i, "click." + f, function (b) {
                if (t._isDisabled.call(null))return void t._removeClasses.call(null);
                var c = a(this), d = c.attr("href"), e = c.prop("href");
                d && d.indexOf("#/") !== -1 || (t._reset.call(null), r = c.data("ps2id-offset") || 0, t._isValid.call(null, d, e) && t._findTarget.call(null, d) && (b.preventDefault(), l = "selector", m = c, t._setClasses.call(null, !0), t._scrollTo.call(null)))
            }), a(b).unbind("." + f).bind("scroll." + f + " resize." + f, function () {
                if (t._isDisabled.call(null))return void t._removeClasses.call(null);
                var b = a("._" + f + "-t");
                b.each(function (c) {
                    var d = a(this), e = d.attr("id"), f = t._findHighlight.call(null, e);
                    t._setClasses.call(null, !1, d, f), c == b.length - 1 && t._extendClasses.call(null)
                })
            }), k = !0, t._setup.call(null)
        }, scrollTo: function (b, c) {
            if (t._isDisabled.call(null))return void t._removeClasses.call(null);
            if (b && "undefined" != typeof b) {
                t._isInit.call(null);
                var d = {layout: j.layout, offset: j.offset, clicked: !1}, c = a.extend(!0, {}, d, c);
                t._reset.call(null), p = c.layout, q = c.offset, b = b.indexOf("#") !== -1 ? b : "#" + b, t._isValid.call(null, b) && t._findTarget.call(null, b) && (l = "scrollTo", m = c.clicked, m && t._setClasses.call(null, !0), t._scrollTo.call(null))
            }
        }, destroy: function () {
            a(b).unbind("." + f), a(c).undelegate("." + f).removeData(f), a("._" + f + "-t").removeData(f), t._removeClasses.call(null, !0)
        }
    }, t = {
        _isDisabled: function () {
            var a = b, d = "inner", e = j.disablePluginBelow instanceof Array ? [j.disablePluginBelow[0] || 0, j.disablePluginBelow[1] || 0] : [j.disablePluginBelow || 0, 0];
            return "innerWidth" in b || (d = "client", a = c.documentElement || c.body), a[d + "Width"] <= e[0] || a[d + "Height"] <= e[1]
        }, _isValid: function (a, c) {
            if (a) {
                c = c ? c : a;
                var d = c.indexOf("#/") !== -1 ? c.split("#/")[0] : c.split("#")[0], e = b.location.toString().split("#")[0];
                return "#" !== a && a.indexOf("#") !== -1 && ("" === d || d === e)
            }
        }, _setup: function () {
            var b = j.highlightSelector && "" !== j.highlightSelector ? j.highlightSelector : i, c = 1;
            return a(b).each(function () {
                var d = a(this), e = d.attr("href"), g = d.prop("href");
                if (t._isValid.call(null, e, g)) {
                    var h = e.indexOf("#/") !== -1 ? e.split("#/")[1] : e.split("#")[1], i = a("#" + h);
                    if (i.length > 0) {
                        i.hasClass("_" + f + "-t") || i.addClass("_" + f + "-t").data(f, {i: c}), d.hasClass("_" + f + "-h") || d.addClass("_" + f + "-h");
                        var j = t._findHighlight.call(null, h);
                        t._setClasses.call(null, !1, i, j), c++, c == a(b).length && t._extendClasses.call(null)
                    }
                }
            })
        }, _findTarget: function (b) {
            var c = b.indexOf("#/") !== -1 ? b.split("#/")[1] : b.split("#")[1], d = a("#" + c);
            if (d.length < 1 || "fixed" === d.css("position")) {
                if ("top" !== c)return;
                d = a("body")
            }
            return n = d, p || (p = j.layout), q = t._setOffset.call(null), o = [(d.offset().top - q[0]).toString(), (d.offset().left - q[1]).toString()], o[0] = o[0] < 0 ? 0 : o[0], o[1] = o[1] < 0 ? 0 : o[1], o
        }, _setOffset: function () {
            q || (q = j.offset ? j.offset : 0), r && (q = r);
            var b, c, d, e;
            switch (typeof q) {
                case"object":
                case"string":
                    b = [q.y ? q.y : q, q.x ? q.x : q], c = [b[0] instanceof jQuery ? b[0] : a(b[0]), b[1] instanceof jQuery ? b[1] : a(b[1])], c[0].length > 0 ? (d = c[0].height(), "fixed" === c[0].css("position") && (d += c[0][0].offsetTop)) : d = !isNaN(parseFloat(b[0])) && isFinite(b[0]) ? parseInt(b[0]) : 0, c[1].length > 0 ? (e = c[1].width(), "fixed" === c[1].css("position") && (e += c[1][0].offsetLeft)) : e = !isNaN(parseFloat(b[1])) && isFinite(b[1]) ? parseInt(b[1]) : 0;
                    break;
                case"function":
                    b = q.call(null), b instanceof Array ? (d = b[0], e = b[1]) : d = e = b;
                    break;
                default:
                    d = e = parseInt(q)
            }
            return [d, e]
        }, _findHighlight: function (c) {
            var d = b.location.toString().split("#")[0], e = a("._" + f + "-h[href='#" + c + "']"), g = a("._" + f + "-h[href='" + d + "#" + c + "']"), h = a("._" + f + "-h[href='#/" + c + "']"), i = a("._" + f + "-h[href='" + d + "#/" + c + "']");
            return e = e.length > 0 ? e : g, h = h.length > 0 ? h : i, h.length > 0 ? h : e
        }, _setClasses: function (b, c, d) {
            var e = j.clickedClass, f = j.targetClass, g = j.highlightClass;
            b && e && "" !== e ? (a("." + e).removeClass(e), m.addClass(e)) : c && f && "" !== f && d && g && "" !== g && (t._currentTarget.call(null, c) ? (c.addClass(f), d.addClass(g)) : (!j.keepHighlightUntilNext || a("." + g).length > 1) && (c.removeClass(f), d.removeClass(g)))
        }, _extendClasses: function () {
            var b = j.targetClass, c = j.highlightClass, d = a("." + b), e = a("." + c), g = b + "-first", h = b + "-last", i = c + "-first", k = c + "-last";
            a("._" + f + "-t").removeClass(g + " " + h), a("._" + f + "-h").removeClass(i + " " + k), j.forceSingleHighlight ? j.keepHighlightUntilNext && d.length > 1 ? (d.slice(0, 1).removeClass(b), e.slice(0, 1).removeClass(c)) : (d.slice(1).removeClass(b), e.slice(1).removeClass(c)) : (d.slice(0, 1).addClass(g).end().slice(-1).addClass(h), e.slice(0, 1).addClass(i).end().slice(-1).addClass(k))
        }, _removeClasses: function (b) {
            a("." + j.clickedClass).removeClass(j.clickedClass), a("." + j.targetClass).removeClass(j.targetClass + " " + j.targetClass + "-first " + j.targetClass + "-last"), a("." + j.highlightClass).removeClass(j.highlightClass + " " + j.highlightClass + "-first " + j.highlightClass + "-last"), b && (a("._" + f + "-t").removeClass("_" + f + "-t"), a("._" + f + "-h").removeClass("_" + f + "-h"))
        }, _currentTarget: function (c) {
            var d = j["target_" + c.data(f).i], e = c[0].getBoundingClientRect();
            if ("undefined" != typeof d) {
                var g = c.offset().top, h = c.offset().left, i = d.from ? d.from + g : g, k = d.to ? d.to + g : g, l = d.fromX ? d.fromX + h : h, m = d.toX ? d.toX + h : h;
                return e.top >= k && e.top <= i && e.left >= m && e.left <= l
            }
            var n = a(b).height(), o = a(b).width(), p = c.height(), q = c.width(), r = 1 + p / n, s = r, t = p < n ? r * (n / p) : r, u = 1 + q / o, v = u, w = q < o ? u * (o / q) : u;
            return e.top <= n / s && e.bottom >= n / t && e.left <= o / v && e.right >= o / w
        }, _scrollTo: function () {
            j.scrollSpeed = parseInt(j.scrollSpeed), o = j.pageEndSmoothScroll ? t._pageEndSmoothScroll.call(null) : o;
            var c = a("html,body"), d = j.autoScrollSpeed ? t._autoScrollSpeed.call(null) : j.scrollSpeed, e = c.is(":animated") ? j.scrollingEasing : j.scrollEasing, f = a(b).scrollTop(), g = a(b).scrollLeft();
            switch (p) {
                case"horizontal":
                    g != o[1] && (t._callbacks.call(null, "onStart"), c.stop().animate({scrollLeft: o[1]}, d, e).promise().then(function () {
                        t._callbacks.call(null, "onComplete")
                    }));
                    break;
                case"auto":
                    if (f != o[0] || g != o[1])if (t._callbacks.call(null, "onStart"), navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                        var h;
                        c.stop().animate({pageYOffset: o[0], pageXOffset: o[1]}, {
                            duration: d,
                            easing: e,
                            step: function (a, c) {
                                "pageXOffset" == c.prop ? h = a : "pageYOffset" == c.prop && b.scrollTo(h, a)
                            }
                        }).promise().then(function () {
                            t._callbacks.call(null, "onComplete")
                        })
                    } else c.stop().animate({scrollTop: o[0], scrollLeft: o[1]}, d, e).promise().then(function () {
                        t._callbacks.call(null, "onComplete")
                    });
                    break;
                default:
                    f != o[0] && (t._callbacks.call(null, "onStart"), c.stop().animate({scrollTop: o[0]}, d, e).promise().then(function () {
                        t._callbacks.call(null, "onComplete")
                    }))
            }
        }, _pageEndSmoothScroll: function () {
            var d = a(c).height(), e = a(c).width(), f = a(b).height(), g = a(b).width();
            return [d - o[0] < f ? d - f : o[0], e - o[1] < g ? e - g : o[1]]
        }, _autoScrollSpeed: function () {
            var d = a(b).scrollTop(), e = a(b).scrollLeft(), f = a(c).height(), g = a(c).width(), h = [j.scrollSpeed + j.scrollSpeed * Math.floor(Math.abs(o[0] - d) / f * 100) / 100, j.scrollSpeed + j.scrollSpeed * Math.floor(Math.abs(o[1] - e) / g * 100) / 100];
            return Math.max.apply(Math, h)
        }, _callbacks: function (a) {
            if (j)switch (this[f] = {trigger: l, clicked: m, target: n, scrollTo: {y: o[0], x: o[1]}}, a) {
                case"onStart":
                    j.onStart.call(null, this[f]);
                    break;
                case"onComplete":
                    j.onComplete.call(null, this[f])
            }
        }, _reset: function () {
            p = q = r = !1
        }, _isInit: function () {
            k || s.init.apply(this)
        }, _easing: function () {
            a.easing.easeInQuad = a.easing.easeInQuad || function (a, b, c, d, e) {
                    return d * (b /= e) * b + c
                }, a.easing.easeOutQuad = a.easing.easeOutQuad || function (a, b, c, d, e) {
                    return -d * (b /= e) * (b - 2) + c
                }, a.easing.easeInOutQuad = a.easing.easeInOutQuad || function (a, b, c, d, e) {
                    return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
                }, a.easing.easeInCubic = a.easing.easeInCubic || function (a, b, c, d, e) {
                    return d * (b /= e) * b * b + c
                }, a.easing.easeOutCubic = a.easing.easeOutCubic || function (a, b, c, d, e) {
                    return d * ((b = b / e - 1) * b * b + 1) + c
                }, a.easing.easeInOutCubic = a.easing.easeInOutCubic || function (a, b, c, d, e) {
                    return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
                }, a.easing.easeInQuart = a.easing.easeInQuart || function (a, b, c, d, e) {
                    return d * (b /= e) * b * b * b + c
                }, a.easing.easeOutQuart = a.easing.easeOutQuart || function (a, b, c, d, e) {
                    return -d * ((b = b / e - 1) * b * b * b - 1) + c
                }, a.easing.easeInOutQuart = a.easing.easeInOutQuart || function (a, b, c, d, e) {
                    return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
                }, a.easing.easeInQuint = a.easing.easeInQuint || function (a, b, c, d, e) {
                    return d * (b /= e) * b * b * b * b + c
                }, a.easing.easeOutQuint = a.easing.easeOutQuint || function (a, b, c, d, e) {
                    return d * ((b = b / e - 1) * b * b * b * b + 1) + c
                }, a.easing.easeInOutQuint = a.easing.easeInOutQuint || function (a, b, c, d, e) {
                    return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
                }, a.easing.easeInExpo = a.easing.easeInExpo || function (a, b, c, d, e) {
                    return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
                }, a.easing.easeOutExpo = a.easing.easeOutExpo || function (a, b, c, d, e) {
                    return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
                }, a.easing.easeInOutExpo = a.easing.easeInOutExpo || function (a, b, c, d, e) {
                    return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
                }, a.easing.easeInSine = a.easing.easeInSine || function (a, b, c, d, e) {
                    return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
                }, a.easing.easeOutSine = a.easing.easeOutSine || function (a, b, c, d, e) {
                    return d * Math.sin(b / e * (Math.PI / 2)) + c
                }, a.easing.easeInOutSine = a.easing.easeInOutSine || function (a, b, c, d, e) {
                    return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
                }, a.easing.easeInCirc = a.easing.easeInCirc || function (a, b, c, d, e) {
                    return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
                }, a.easing.easeOutCirc = a.easing.easeOutCirc || function (a, b, c, d, e) {
                    return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
                }, a.easing.easeInOutCirc = a.easing.easeInOutCirc || function (a, b, c, d, e) {
                    return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
                }, a.easing.easeInElastic = a.easing.easeInElastic || function (a, b, c, d, e) {
                    var f = 1.70158, g = 0, h = d;
                    if (0 == b)return c;
                    if (1 == (b /= e))return c + d;
                    if (g || (g = .3 * e), h < Math.abs(d)) {
                        h = d;
                        var f = g / 4
                    } else var f = g / (2 * Math.PI) * Math.asin(d / h);
                    return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
                }, a.easing.easeOutElastic = a.easing.easeOutElastic || function (a, b, c, d, e) {
                    var f = 1.70158, g = 0, h = d;
                    if (0 == b)return c;
                    if (1 == (b /= e))return c + d;
                    if (g || (g = .3 * e), h < Math.abs(d)) {
                        h = d;
                        var f = g / 4
                    } else var f = g / (2 * Math.PI) * Math.asin(d / h);
                    return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
                }, a.easing.easeInOutElastic = a.easing.easeInOutElastic || function (a, b, c, d, e) {
                    var f = 1.70158, g = 0, h = d;
                    if (0 == b)return c;
                    if (2 == (b /= e / 2))return c + d;
                    if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
                        h = d;
                        var f = g / 4
                    } else var f = g / (2 * Math.PI) * Math.asin(d / h);
                    return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
                }, a.easing.easeInBack = a.easing.easeInBack || function (a, b, c, e, f, g) {
                    return g == d && (g = 1.70158), e * (b /= f) * b * ((g + 1) * b - g) + c
                }, a.easing.easeOutBack = a.easing.easeOutBack || function (a, b, c, e, f, g) {
                    return g == d && (g = 1.70158), e * ((b = b / f - 1) * b * ((g + 1) * b + g) + 1) + c
                }, a.easing.easeInOutBack = a.easing.easeInOutBack || function (a, b, c, e, f, g) {
                    return g == d && (g = 1.70158), (b /= f / 2) < 1 ? e / 2 * (b * b * (((g *= 1.525) + 1) * b - g)) + c : e / 2 * ((b -= 2) * b * (((g *= 1.525) + 1) * b + g) + 2) + c
                }, a.easing.easeInBounce = a.easing.easeInBounce || function (b, c, d, e, f) {
                    return e - a.easing.easeOutBounce(b, f - c, 0, e, f) + d
                }, a.easing.easeOutBounce = a.easing.easeOutBounce || function (a, b, c, d, e) {
                    return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
                }, a.easing.easeInOutBounce = a.easing.easeInOutBounce || function (b, c, d, e, f) {
                    return c < f / 2 ? .5 * a.easing.easeInBounce(b, 2 * c, 0, e, f) + d : .5 * a.easing.easeOutBounce(b, 2 * c - f, 0, e, f) + .5 * e + d
                }
        }
    };
    t._easing.call(), a.fn[e] = function (b) {
        return s[b] ? s[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : s.init.apply(this, arguments)
    }, a[e] = function (b) {
        return s[b] ? s[b].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof b && b ? void a.error("Method " + b + " does not exist") : s.init.apply(this, arguments)
    }, a[e].defaults = h
}(jQuery, window, document), function () {
    function c() {
    }

    function d(a, b) {
        this.path = a, "undefined" != typeof b && null !== b ? (this.at_2x_path = b, this.perform_check = !1) : (this.at_2x_path = a.replace(/\.\w+$/, function (a) {
            return "@2x" + a
        }), this.perform_check = !0)
    }

    function e(a) {
        this.el = a, this.path = new d(this.el.getAttribute("src"), this.el.getAttribute("data-at2x"));
        var b = this;
        this.path.check_2x_variant(function (a) {
            a && b.swap()
        })
    }

    var a = "undefined" == typeof exports ? window : exports, b = {check_mime_type: !0};
    a.Retina = c, c.configure = function (a) {
        null == a && (a = {});
        for (var c in a)b[c] = a[c]
    }, c.init = function (b) {
        null == b && (b = a);
        var c = b.onload || new Function;
        b.onload = function () {
            var d, f, a = document.getElementsByTagName("img"), b = [];
            for (d = 0; d < a.length; d++)f = a[d], b.push(new e(f));
            c()
        }
    }, c.isRetina = function () {
        var b = "(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";
        return a.devicePixelRatio > 1 || !(!a.matchMedia || !a.matchMedia(b).matches)
    }, a.RetinaImagePath = d, d.confirmed_paths = [], d.prototype.is_external = function () {
        return !(!this.path.match(/^https?\:/i) || this.path.match("//" + document.domain))
    }, d.prototype.check_2x_variant = function (a) {
        var c, e = this;
        return this.is_external() ? a(!1) : this.perform_check || "undefined" == typeof this.at_2x_path || null === this.at_2x_path ? this.at_2x_path in d.confirmed_paths ? a(!0) : (c = new XMLHttpRequest, c.open("HEAD", this.at_2x_path), c.onreadystatechange = function () {
            if (4 != c.readyState)return a(!1);
            if (c.status >= 200 && c.status <= 399) {
                if (b.check_mime_type) {
                    var f = c.getResponseHeader("Content-Type");
                    if (null == f || !f.match(/^image/i))return a(!1)
                }
                return d.confirmed_paths.push(e.at_2x_path), a(!0)
            }
            return a(!1)
        }, c.send(), void 0) : a(!0)
    }, a.RetinaImage = e, e.prototype.swap = function (a) {
        function c() {
            b.el.complete ? (b.el.setAttribute("width", b.el.offsetWidth), b.el.setAttribute("height", b.el.offsetHeight), b.el.setAttribute("src", a)) : setTimeout(c, 5)
        }

        "undefined" == typeof a && (a = this.path.at_2x_path);
        var b = this;
        c()
    }, c.isRetina() && c.init(a)
}(), function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa, ba, ca = function (a, b) {
        return function () {
            return a.apply(b, arguments)
        }
    };
    C = function () {
        return "visible" === document.visibilityState || null != z.tests
    }, H = function () {
        var a;
        return a = [], "undefined" != typeof document && null !== document && document.addEventListener("visibilitychange", function () {
            var b, c, d, e;
            for (e = [], c = 0, d = a.length; d > c; c++)b = a[c], e.push(b(C()));
            return e
        }), function (b) {
            return a.push(b)
        }
    }(), v = function (a) {
        var b, c, d;
        c = {};
        for (b in a)d = a[b], c[b] = d;
        return c
    }, t = function (a) {
        var b;
        return b = {}, function () {
            var c, d, e, f, g;
            for (d = "", f = 0, g = arguments.length; g > f; f++)c = arguments[f], d += c.toString() + ",";
            return e = b[d], e || (b[d] = e = a.apply(this, arguments)), e
        }
    }, G = function (a) {
        return function (b) {
            var c, d, e;
            return b instanceof Array || b instanceof NodeList || b instanceof HTMLCollection ? e = function () {
                var e, f, g;
                for (g = [], d = e = 0, f = b.length; f >= 0 ? f > e : e > f; d = f >= 0 ? ++e : --e)c = Array.prototype.slice.call(arguments, 1), c.splice(0, 0, b[d]), g.push(a.apply(this, c));
                return g
            }.apply(this, arguments) : a.apply(this, arguments)
        }
    }, p = function (a, b) {
        var c, d, e;
        e = [];
        for (c in b)d = b[c], e.push(null != a[c] ? a[c] : a[c] = d);
        return e
    }, q = function (a, b) {
        var c, d, e;
        if (null != a.style)return r(a, b);
        e = [];
        for (c in b)d = b[c], e.push(a[c] = d.format());
        return e
    }, r = function (a, b) {
        var c, d, e, f, g;
        b = I(b), f = [], c = D(a);
        for (d in b)g = b[d], _.contains(d) ? f.push([d, g]) : (g = null != g.format ? g.format() : "" + g + ba(d, g), c && W.contains(d) ? a.setAttribute(d, g) : a.style[K(d)] = g);
        return f.length > 0 ? c ? (e = new i, e.applyProperties(f), a.setAttribute("transform", e.decompose().format())) : (g = f.map(function (a) {
            return aa(a[0], a[1])
        }).join(" "), a.style[K("transform")] = g) : void 0
    }, D = function (a) {
        var b, c;
        return "undefined" != typeof SVGElement && null !== SVGElement && "undefined" != typeof SVGSVGElement && null !== SVGSVGElement ? a instanceof SVGElement && !(a instanceof SVGSVGElement) : null != (b = null != (c = z.tests) && "function" == typeof c.isSVG ? c.isSVG(a) : void 0) && b
    }, N = function (a, b) {
        var c;
        return c = Math.pow(10, b), Math.round(a * c) / c
    }, j = function () {
        function a(a) {
            var b, c, d;
            for (this.obj = {}, c = 0, d = a.length; d > c; c++)b = a[c], this.obj[b] = 1
        }

        return a.prototype.contains = function (a) {
            return 1 === this.obj[a]
        }, a
    }(), $ = function (a) {
        return a.replace(/([A-Z])/g, function (a) {
            return "-" + a.toLowerCase()
        })
    }, L = new j("marginTop,marginLeft,marginBottom,marginRight,paddingTop,paddingLeft,paddingBottom,paddingRight,top,left,bottom,right,translateX,translateY,translateZ,perspectiveX,perspectiveY,perspectiveZ,width,height,maxWidth,maxHeight,minWidth,minHeight,borderRadius".split(",")), y = new j("rotate,rotateX,rotateY,rotateZ,skew,skewX,skewY,skewZ".split(",")), _ = new j("translate,translateX,translateY,translateZ,scale,scaleX,scaleY,scaleZ,rotate,rotateX,rotateY,rotateZ,rotateC,rotateCX,rotateCY,skew,skewX,skewY,skewZ,perspective".split(",")), W = new j("accent-height,ascent,azimuth,baseFrequency,baseline-shift,bias,cx,cy,d,diffuseConstant,divisor,dx,dy,elevation,filterRes,fx,fy,gradientTransform,height,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,letter-spacing,limitingConeAngle,markerHeight,markerWidth,numOctaves,order,overline-position,overline-thickness,pathLength,points,pointsAtX,pointsAtY,pointsAtZ,r,radius,rx,ry,seed,specularConstant,specularExponent,stdDeviation,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,surfaceScale,target,targetX,targetY,transform,underline-position,underline-thickness,viewBox,width,x,x1,x2,y,y1,y2,z".split(",")), ba = function (a, b) {
        return "number" != typeof b ? "" : L.contains(a) ? "px" : y.contains(a) ? "deg" : ""
    }, aa = function (a, b) {
        var c, d;
        return c = ("" + b).match(/^([0-9.-]*)([^0-9]*)$/), null != c ? (b = c[1], d = c[2]) : b = parseFloat(b), b = N(parseFloat(b), 10), (null == d || "" === d) && (d = ba(a, b)), "" + a + "(" + b + d + ")"
    }, I = function (a) {
        var b, c, d, e, f, g, h, i;
        d = {};
        for (e in a)if (f = a[e], _.contains(e))if (c = e.match(/(translate|rotateC|rotate|skew|scale|perspective)(X|Y|Z|)/), c && c[2].length > 0)d[e] = f; else for (i = ["X", "Y", "Z"], g = 0, h = i.length; h > g; g++)b = i[g], d[c[1] + b] = f; else d[e] = f;
        return d
    }, x = function (a) {
        var b;
        return b = "opacity" === a ? 1 : 0, "" + b + ba(a, b)
    }, A = function (a, b) {
        var c, d, e, f, g, j, k, l, m, n, o;
        if (f = {}, c = D(a), null != a.style)for (g = window.getComputedStyle(a, null), k = 0, m = b.length; m > k; k++)d = b[k], _.contains(d) ? null == f.transform && (e = c ? new i(null != (o = a.transform.baseVal.consolidate()) ? o.matrix : void 0) : h.fromTransform(g[K("transform")]), f.transform = e.decompose()) : (j = g[d], null == j && W.contains(d) && (j = a.getAttribute(d)), ("" === j || null == j) && (j = x(d)), f[d] = w(j)); else for (l = 0, n = b.length; n > l; l++)d = b[l], f[d] = w(a[d]);
        return f
    }, w = function (a) {
        var b, c, h, i, j;
        for (h = [e, d, f, g], i = 0, j = h.length; j > i; i++)if (c = h[i], b = c.create(a), null != b)return b;
        return null
    }, f = function () {
        function a(a) {
            this.format = ca(this.format, this), this.interpolate = ca(this.interpolate, this), this.obj = a
        }

        return a.prototype.interpolate = function (b, c) {
            var d, e, f, g, h;
            g = this.obj, d = b.obj, f = {};
            for (e in g)h = g[e], f[e] = null != h.interpolate ? h.interpolate(d[e], c) : h;
            return new a(f)
        }, a.prototype.format = function () {
            return this.obj
        }, a.create = function (b) {
            var c, d, e;
            if (b instanceof Object) {
                d = {};
                for (c in b)e = b[c], d[c] = w(e);
                return new a(d)
            }
            return null
        }, a
    }(), g = function () {
        function a(a, b, c) {
            this.prefix = b, this.suffix = c, this.format = ca(this.format, this), this.interpolate = ca(this.interpolate, this), this.value = parseFloat(a)
        }

        return a.prototype.interpolate = function (b, c) {
            var d, e;
            return e = this.value, d = b.value, new a((d - e) * c + e, b.prefix || this.prefix, b.suffix || this.suffix)
        }, a.prototype.format = function () {
            return null == this.prefix && null == this.suffix ? N(this.value, 5) : this.prefix + N(this.value, 5) + this.suffix
        }, a.create = function (b) {
            var c;
            return "string" != typeof b ? new a(b) : (c = ("" + b).match("([^0-9.+-]*)([0-9.+-]+)([^0-9.+-]*)"), null != c ? new a(c[2], c[1], c[3]) : null)
        }, a
    }(), d = function () {
        function a(a, b) {
            this.values = a, this.sep = b, this.format = ca(this.format, this), this.interpolate = ca(this.interpolate, this)
        }

        return a.prototype.interpolate = function (b, c) {
            var d, e, f, g, h, i;
            for (g = this.values, d = b.values, f = [], e = h = 0, i = Math.min(g.length, d.length); i >= 0 ? i > h : h > i; e = i >= 0 ? ++h : --h)f.push(null != g[e].interpolate ? g[e].interpolate(d[e], c) : g[e]);
            return new a(f, this.sep)
        }, a.prototype.format = function () {
            var a;
            return a = this.values.map(function (a) {
                return null != a.format ? a.format() : a
            }), null != this.sep ? a.join(this.sep) : a
        }, a.createFromArray = function (b, c) {
            var d;
            return d = b.map(function (a) {
                return w(a) || a
            }), d = d.filter(function (a) {
                return null != a
            }), new a(d, c)
        }, a.create = function (b) {
            var c, d, e, f, g;
            if (b instanceof Array)return a.createFromArray(b, null);
            if ("string" == typeof b) {
                for (e = [" ", ",", "|", ";", "/", ":"], f = 0, g = e.length; g > f; f++)if (d = e[f], c = b.split(d), c.length > 1)return a.createFromArray(c, d);
                return null
            }
        }, a
    }(), a = function () {
        function a(a, b) {
            this.rgb = null != a ? a : {}, this.format = b, this.toRgba = ca(this.toRgba, this), this.toRgb = ca(this.toRgb, this), this.toHex = ca(this.toHex, this)
        }

        return a.fromHex = function (b) {
            var c, d;
            return c = b.match(/^#([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i), null != c && (b = "#" + c[1] + c[1] + c[2] + c[2] + c[3] + c[3]), d = b.match(/^#([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i), null != d ? new a({
                r: parseInt(d[1], 16),
                g: parseInt(d[2], 16),
                b: parseInt(d[3], 16),
                a: 1
            }, "hex") : null
        }, a.fromRgb = function (b) {
            var c, d;
            return c = b.match(/^rgba?\(([0-9.]*), ?([0-9.]*), ?([0-9.]*)(?:, ?([0-9.]*))?\)$/), null != c ? new a({
                r: parseFloat(c[1]),
                g: parseFloat(c[2]),
                b: parseFloat(c[3]),
                a: parseFloat(null != (d = c[4]) ? d : 1)
            }, null != c[4] ? "rgba" : "rgb") : null
        }, a.componentToHex = function (a) {
            var b;
            return b = a.toString(16), 1 === b.length ? "0" + b : b
        }, a.prototype.toHex = function () {
            return "#" + a.componentToHex(this.rgb.r) + a.componentToHex(this.rgb.g) + a.componentToHex(this.rgb.b)
        }, a.prototype.toRgb = function () {
            return "rgb(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ")"
        }, a.prototype.toRgba = function () {
            return "rgba(" + this.rgb.r + ", " + this.rgb.g + ", " + this.rgb.b + ", " + this.rgb.a + ")"
        }, a
    }(), e = function () {
        function b(a) {
            this.color = a, this.format = ca(this.format, this), this.interpolate = ca(this.interpolate, this)
        }

        return b.prototype.interpolate = function (c, d) {
            var e, f, g, h, i, j, k, l;
            for (h = this.color, e = c.color, g = {}, l = ["r", "g", "b"], j = 0, k = l.length; k > j; j++)f = l[j], i = Math.round((e.rgb[f] - h.rgb[f]) * d + h.rgb[f]), g[f] = Math.min(255, Math.max(0, i));
            return f = "a", i = N((e.rgb[f] - h.rgb[f]) * d + h.rgb[f], 5), g[f] = Math.min(1, Math.max(0, i)), new b(new a(g, e.format))
        }, b.prototype.format = function () {
            return "hex" === this.color.format ? this.color.toHex() : "rgb" === this.color.format ? this.color.toRgb() : "rgba" === this.color.format ? this.color.toRgba() : void 0
        }, b.create = function (c) {
            var d;
            if ("string" == typeof c)return d = a.fromHex(c) || a.fromRgb(c), null != d ? new b(d) : null
        }, b
    }(), c = function () {
        function a(a) {
            this.props = a, this.applyRotateCenter = ca(this.applyRotateCenter, this), this.format = ca(this.format, this), this.interpolate = ca(this.interpolate, this)
        }

        return a.prototype.interpolate = function (b, c) {
            var d, e, f, g, h, i, j, k, l, m, n, o;
            for (f = {}, m = ["translate", "scale", "rotate"], g = 0, k = m.length; k > g; g++)for (e = m[g], f[e] = [], d = h = 0, n = this.props[e].length; n >= 0 ? n > h : h > n; d = n >= 0 ? ++h : --h)f[e][d] = (b.props[e][d] - this.props[e][d]) * c + this.props[e][d];
            for (d = i = 1; 2 >= i; d = ++i)f.rotate[d] = b.props.rotate[d];
            for (o = ["skew"], j = 0, l = o.length; l > j; j++)e = o[j], f[e] = (b.props[e] - this.props[e]) * c + this.props[e];
            return new a(f)
        }, a.prototype.format = function () {
            return "translate(" + this.props.translate.join(",") + ") rotate(" + this.props.rotate.join(",") + ") skewX(" + this.props.skew + ") scale(" + this.props.scale.join(",") + ")"
        }, a.prototype.applyRotateCenter = function (a) {
            var b, c, d, e, f, g;
            for (c = s.createSVGMatrix(), c = c.translate(a[0], a[1]), c = c.rotate(this.props.rotate[0]), c = c.translate(-a[0], -a[1]), d = new i(c), e = d.decompose().props.translate, g = [], b = f = 0; 1 >= f; b = ++f)g.push(this.props.translate[b] -= e[b]);
            return g
        }, a
    }(), s = "undefined" != typeof document && null !== document ? document.createElementNS("http://www.w3.org/2000/svg", "svg") : void 0, i = function () {
        function a(a) {
            this.m = a, this.applyProperties = ca(this.applyProperties, this), this.decompose = ca(this.decompose, this), this.m || (this.m = s.createSVGMatrix())
        }

        return a.prototype.decompose = function () {
            var a, b, d, e, f;
            return e = new k([this.m.a, this.m.b]), f = new k([this.m.c, this.m.d]), a = e.length(), d = e.dot(f), e = e.normalize(), b = f.combine(e, 1, -d).length(), new c({
                translate: [this.m.e, this.m.f],
                rotate: [180 * Math.atan2(this.m.b, this.m.a) / Math.PI, this.rotateCX, this.rotateCY],
                scale: [a, b],
                skew: d / b * 180 / Math.PI
            })
        }, a.prototype.applyProperties = function (a) {
            var b, c, d, e, f, g, h, i;
            for (b = {}, f = 0, g = a.length; g > f; f++)d = a[f], b[d[0]] = d[1];
            for (c in b)e = b[c], "translateX" === c ? this.m = this.m.translate(e, 0) : "translateY" === c ? this.m = this.m.translate(0, e) : "scaleX" === c ? this.m = this.m.scale(e, 1) : "scaleY" === c ? this.m = this.m.scale(1, e) : "rotateZ" === c ? this.m = this.m.rotate(e) : "skewX" === c ? this.m = this.m.skewX(e) : "skewY" === c && (this.m = this.m.skewY(e));
            return this.rotateCX = null != (h = b.rotateCX) ? h : 0, this.rotateCY = null != (i = b.rotateCY) ? i : 0
        }, a
    }(), k = function () {
        function a(a) {
            this.els = a, this.combine = ca(this.combine, this), this.normalize = ca(this.normalize, this), this.length = ca(this.length, this), this.cross = ca(this.cross, this), this.dot = ca(this.dot, this), this.e = ca(this.e, this)
        }

        return a.prototype.e = function (a) {
            return 1 > a || a > this.els.length ? null : this.els[a - 1]
        }, a.prototype.dot = function (a) {
            var b, c, d;
            if (b = a.els || a, d = 0, c = this.els.length, c !== b.length)return null;
            for (c += 1; --c;)d += this.els[c - 1] * b[c - 1];
            return d
        }, a.prototype.cross = function (b) {
            var c, d;
            return d = b.els || b, 3 !== this.els.length || 3 !== d.length ? null : (c = this.els, new a([c[1] * d[2] - c[2] * d[1], c[2] * d[0] - c[0] * d[2], c[0] * d[1] - c[1] * d[0]]))
        }, a.prototype.length = function () {
            var a, b, c, d, e;
            for (a = 0, e = this.els, c = 0, d = e.length; d > c; c++)b = e[c], a += Math.pow(b, 2);
            return Math.sqrt(a)
        }, a.prototype.normalize = function () {
            var b, c, d, e, f;
            d = this.length(), e = [], f = this.els;
            for (c in f)b = f[c], e[c] = b / d;
            return new a(e)
        }, a.prototype.combine = function (b, c, d) {
            var e, f, g, h;
            for (f = [], e = g = 0, h = this.els.length; h >= 0 ? h > g : g > h; e = h >= 0 ? ++g : --g)f[e] = c * this.els[e] + d * b.els[e];
            return new a(f)
        }, a
    }(), b = function () {
        function a() {
            this.toMatrix = ca(this.toMatrix, this), this.format = ca(this.format, this), this.interpolate = ca(this.interpolate, this)
        }

        return a.prototype.interpolate = function (b, c, d) {
            var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v;
            for (null == d && (d = null), g = this, f = new a, u = ["translate", "scale", "skew", "perspective"], p = 0, t = u.length; t > p; p++)for (k = u[p], f[k] = [], h = q = 0, v = g[k].length - 1; v >= 0 ? v >= q : q >= v; h = v >= 0 ? ++q : --q)f[k][h] = null == d || d.indexOf(k) > -1 || d.indexOf("" + k + ["x", "y", "z"][h]) > -1 ? (b[k][h] - g[k][h]) * c + g[k][h] : g[k][h];
            if (null == d || -1 !== d.indexOf("rotate")) {
                if (l = g.quaternion, m = b.quaternion, e = l[0] * m[0] + l[1] * m[1] + l[2] * m[2] + l[3] * m[3], 0 > e) {
                    for (h = r = 0; 3 >= r; h = ++r)l[h] = -l[h];
                    e = -e
                }
                for (e + 1 > .05 ? 1 - e >= .05 ? (o = Math.acos(e), j = 1 / Math.sin(o), n = Math.sin(o * (1 - c)) * j, i = Math.sin(o * c) * j) : (n = 1 - c, i = c) : (m[0] = -l[1], m[1] = l[0], m[2] = -l[3], m[3] = l[2], n = Math.sin(piDouble * (.5 - c)), i = Math.sin(piDouble * c)), f.quaternion = [], h = s = 0; 3 >= s; h = ++s)f.quaternion[h] = l[h] * n + m[h] * i
            } else f.quaternion = g.quaternion;
            return f
        }, a.prototype.format = function () {
            return this.toMatrix().toString()
        }, a.prototype.toMatrix = function () {
            var a, b, c, d, e, f, g, i, j, k, l, m, n, o, p, q;
            for (a = this, e = h.I(4), b = n = 0; 3 >= n; b = ++n)e.els[b][3] = a.perspective[b];
            for (f = a.quaternion, k = f[0], l = f[1], m = f[2], j = f[3], g = a.skew, d = [[1, 0], [2, 0], [2, 1]], b = o = 2; o >= 0; b = --o)g[b] && (i = h.I(4), i.els[d[b][0]][d[b][1]] = g[b], e = e.multiply(i));
            for (e = e.multiply(new h([[1 - 2 * (l * l + m * m), 2 * (k * l - m * j), 2 * (k * m + l * j), 0], [2 * (k * l + m * j), 1 - 2 * (k * k + m * m), 2 * (l * m - k * j), 0], [2 * (k * m - l * j), 2 * (l * m + k * j), 1 - 2 * (k * k + l * l), 0], [0, 0, 0, 1]])), b = p = 0; 2 >= p; b = ++p) {
                for (c = q = 0; 2 >= q; c = ++q)e.els[b][c] *= a.scale[b];
                e.els[3][b] = a.translate[b]
            }
            return e
        }, a
    }(), h = function () {
        function a(a) {
            this.els = a, this.toString = ca(this.toString, this), this.decompose = ca(this.decompose, this), this.inverse = ca(this.inverse, this), this.augment = ca(this.augment, this), this.toRightTriangular = ca(this.toRightTriangular, this), this.transpose = ca(this.transpose, this), this.multiply = ca(this.multiply, this), this.dup = ca(this.dup, this), this.e = ca(this.e, this)
        }

        return a.prototype.e = function (a, b) {
            return 1 > a || a > this.els.length || 1 > b || b > this.els[0].length ? null : this.els[a - 1][b - 1]
        }, a.prototype.dup = function () {
            return new a(this.els)
        }, a.prototype.multiply = function (b) {
            var c, d, e, f, g, h, i, j, k, l, m, n, o;
            for (n = !!b.modulus, c = b.els || b, "undefined" == typeof c[0][0] && (c = new a(c).els), l = this.els.length, i = l, j = c[0].length, e = this.els[0].length, f = [], l += 1; --l;)for (g = i - l, f[g] = [], m = j, m += 1; --m;) {
                for (h = j - m, o = 0, k = e, k += 1; --k;)d = e - k, o += this.els[g][d] * c[d][h];
                f[g][h] = o
            }
            return c = new a(f), n ? c.col(1) : c
        }, a.prototype.transpose = function () {
            var b, c, d, e, f, g, h;
            for (h = this.els.length, b = this.els[0].length, c = [], f = b, f += 1; --f;)for (d = b - f, c[d] = [], g = h, g += 1; --g;)e = h - g, c[d][e] = this.els[e][d];
            return new a(c)
        }, a.prototype.toRightTriangular = function () {
            var a, b, c, d, e, f, g, h, i, j, k, l, m, n;
            for (a = this.dup(), h = this.els.length, e = h, f = this.els[0].length; --h;) {
                if (c = e - h, 0 === a.els[c][c])for (d = k = m = c + 1; e >= m ? e > k : k > e; d = e >= m ? ++k : --k)if (0 !== a.els[d][c]) {
                    for (b = [], i = f, i += 1; --i;)j = f - i, b.push(a.els[c][j] + a.els[d][j]);
                    a.els[c] = b;
                    break
                }
                if (0 !== a.els[c][c])for (d = l = n = c + 1; e >= n ? e > l : l > e; d = e >= n ? ++l : --l) {
                    for (g = a.els[d][c] / a.els[c][c], b = [], i = f, i += 1; --i;)j = f - i, b.push(c >= j ? 0 : a.els[d][j] - a.els[c][j] * g);
                    a.els[d] = b
                }
            }
            return a
        }, a.prototype.augment = function (b) {
            var c, d, e, f, g, h, i, j, k;
            if (c = b.els || b, "undefined" == typeof c[0][0] && (c = new a(c).els), d = this.dup(), e = d.els[0].length, j = d.els.length, h = j, i = c[0].length, j !== c.length)return null;
            for (j += 1; --j;)for (f = h - j, k = i, k += 1; --k;)g = i - k, d.els[f][e + g] = c[f][g];
            return d
        }, a.prototype.inverse = function () {
            var b, c, d, e, f, g, h, i, j, k, l, m, n;
            for (k = this.els.length, h = k, b = this.augment(a.I(k)).toRightTriangular(), i = b.els[0].length, f = [], k += 1; --k;) {
                for (e = k - 1, d = [], l = i, f[e] = [], c = b.els[e][e], l += 1; --l;)m = i - l, j = b.els[e][m] / c, d.push(j), m >= h && f[e].push(j);
                for (b.els[e] = d, g = n = 0; e >= 0 ? e > n : n > e; g = e >= 0 ? ++n : --n) {
                    for (d = [], l = i, l += 1; --l;)m = i - l, d.push(b.els[g][m] - b.els[e][m] * b.els[g][e]);
                    b.els[g] = d
                }
            }
            return new a(f)
        }, a.I = function (b) {
            var c, d, e, f, g;
            for (c = [], f = b, b += 1; --b;)for (d = f - b, c[d] = [], g = f, g += 1; --g;)e = f - g, c[d][e] = d === e ? 1 : 0;
            return new a(c)
        }, a.prototype.decompose = function () {
            var a, c, d, e, f, g, h, i, j, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N;
            for (g = this, v = [], s = [], t = [], l = [], i = [], a = [], c = E = 0; 3 >= E; c = ++E)for (a[c] = [], e = F = 0; 3 >= F; e = ++F)a[c][e] = g.els[c][e];
            if (0 === a[3][3])return !1;
            for (c = G = 0; 3 >= G; c = ++G)for (e = H = 0; 3 >= H; e = ++H)a[c][e] /= a[3][3];
            for (j = g.dup(), c = I = 0; 2 >= I; c = ++I)j.els[c][3] = 0;
            if (j.els[3][3] = 1, 0 !== a[0][3] || 0 !== a[1][3] || 0 !== a[2][3]) {
                for (n = new k(a.slice(0, 4)[3]), d = j.inverse(), w = d.transpose(), i = w.multiply(n).els, c = J = 0; 2 >= J; c = ++J)a[c][3] = 0;
                a[3][3] = 1
            } else i = [0, 0, 0, 1];
            for (c = K = 0; 2 >= K; c = ++K)v[c] = a[3][c], a[3][c] = 0;
            for (p = [], c = L = 0; 2 >= L; c = ++L)p[c] = new k(a[c].slice(0, 3));
            if (s[0] = p[0].length(), p[0] = p[0].normalize(), t[0] = p[0].dot(p[1]), p[1] = p[1].combine(p[0], 1, -t[0]), s[1] = p[1].length(), p[1] = p[1].normalize(), t[0] /= s[1], t[1] = p[0].dot(p[2]), p[2] = p[2].combine(p[0], 1, -t[1]), t[2] = p[1].dot(p[2]), p[2] = p[2].combine(p[1], 1, -t[2]), s[2] = p[2].length(), p[2] = p[2].normalize(), t[1] /= s[2], t[2] /= s[2], h = p[1].cross(p[2]), p[0].dot(h) < 0)for (c = M = 0; 2 >= M; c = ++M)for (s[c] *= -1, e = N = 0; 2 >= N; e = ++N)p[c].els[e] *= -1;
            q = function (a, b) {
                return p[a].els[b]
            }, o = [], o[1] = Math.asin(-q(0, 2)), 0 !== Math.cos(o[1]) ? (o[0] = Math.atan2(q(1, 2), q(2, 2)), o[2] = Math.atan2(q(0, 1), q(0, 0))) : (o[0] = Math.atan2(-q(2, 0), q(1, 1)), o[1] = 0), u = q(0, 0) + q(1, 1) + q(2, 2) + 1, u > 1e-4 ? (r = .5 / Math.sqrt(u), A = .25 / r, B = (q(2, 1) - q(1, 2)) * r, C = (q(0, 2) - q(2, 0)) * r, D = (q(1, 0) - q(0, 1)) * r) : q(0, 0) > q(1, 1) && q(0, 0) > q(2, 2) ? (r = 2 * Math.sqrt(1 + q(0, 0) - q(1, 1) - q(2, 2)), B = .25 * r, C = (q(0, 1) + q(1, 0)) / r, D = (q(0, 2) + q(2, 0)) / r, A = (q(2, 1) - q(1, 2)) / r) : q(1, 1) > q(2, 2) ? (r = 2 * Math.sqrt(1 + q(1, 1) - q(0, 0) - q(2, 2)), B = (q(0, 1) + q(1, 0)) / r, C = .25 * r, D = (q(1, 2) + q(2, 1)) / r, A = (q(0, 2) - q(2, 0)) / r) : (r = 2 * Math.sqrt(1 + q(2, 2) - q(0, 0) - q(1, 1)), B = (q(0, 2) + q(2, 0)) / r, C = (q(1, 2) + q(2, 1)) / r, D = .25 * r, A = (q(1, 0) - q(0, 1)) / r), l = [B, C, D, A], m = new b, m.translate = v, m.scale = s, m.skew = t, m.quaternion = l, m.perspective = i, m.rotate = o;
            for (y in m) {
                x = m[y];
                for (f in x)z = x[f], isNaN(z) && (x[f] = 0)
            }
            return m
        }, a.prototype.toString = function () {
            var a, b, c, d, e;
            for (c = "matrix3d(", a = d = 0; 3 >= d; a = ++d)for (b = e = 0; 3 >= e; b = ++e)c += N(this.els[a][b], 10), (3 !== a || 3 !== b) && (c += ",");
            return c += ")"
        }, a.matrixForTransform = t(function (a) {
            var b, c, d, e, f, g;
            return b = document.createElement("div"), b.style.position = "absolute", b.style.visibility = "hidden", b.style[K("transform")] = a, document.body.appendChild(b), d = window.getComputedStyle(b, null), c = null != (e = null != (f = d.transform) ? f : d[K("transform")]) ? e : null != (g = z.tests) ? g.matrixForTransform(a) : void 0, document.body.removeChild(b), c
        }), a.fromTransform = function (b) {
            var c, d, e, f, g, h;
            for (f = null != b ? b.match(/matrix3?d?\(([-0-9,e \.]*)\)/) : void 0, f ? (c = f[1].split(","), c = c.map(parseFloat), d = 6 === c.length ? [c[0], c[1], 0, 0, c[2], c[3], 0, 0, 0, 0, 1, 0, c[4], c[5], 0, 1] : c) : d = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], g = [], e = h = 0; 3 >= h; e = ++h)g.push(d.slice(4 * e, 4 * e + 4));
            return new a(g)
        }, a
    }(), J = t(function (a) {
        var b, c, d, e, f, g, h, i, j, k;
        if (void 0 !== document.body.style[a])return "";
        for (e = a.split("-"), f = "", g = 0, i = e.length; i > g; g++)d = e[g], f += d.substring(0, 1).toUpperCase() + d.substring(1);
        for (k = ["Webkit", "Moz", "ms"], h = 0, j = k.length; j > h; h++)if (c = k[h], b = c + f, void 0 !== document.body.style[b])return c;
        return ""
    }), K = t(function (a) {
        var b;
        return b = J(a), "Moz" === b ? "" + b + (a.substring(0, 1).toUpperCase() + a.substring(1)) : "" !== b ? "-" + b.toLowerCase() + "-" + $(a) : $(a)
    }), M = "undefined" != typeof window && null !== window ? window.requestAnimationFrame : void 0, n = [], o = [], S = !1, T = 1, "undefined" != typeof window && null !== window && window.addEventListener("keyup", function (a) {
        return 68 === a.keyCode && a.shiftKey && a.ctrlKey ? z.toggleSlow() : void 0
    }), null == M && (E = 0, M = function (a) {
        var b, c, d;
        return b = Date.now(), d = Math.max(0, 16 - (b - E)), c = window.setTimeout(function () {
            return a(b + d)
        }, d), E = b + d, c
    }), P = !1, O = !1, V = function () {
        return P ? void 0 : (P = !0, M(Q))
    }, Q = function (a) {
        var b, c, d, e;
        if (O)return void M(Q);
        for (c = [], d = 0, e = n.length; e > d; d++)b = n[d], m(a, b) || c.push(b);
        return n = n.filter(function (a) {
            return -1 === c.indexOf(a)
        }), 0 === n.length ? P = !1 : M(Q)
    }, m = function (a, b) {
        var c, d, e, f, g, h, i, j;
        if (null == b.tStart && (b.tStart = a), f = (a - b.tStart) / b.options.duration, g = b.curve(f), d = {}, f >= 1)d = b.curve.initialForce ? b.properties.start : b.properties.end; else {
            j = b.properties.start;
            for (c in j)e = j[c], d[c] = B(e, b.properties.end[c], g)
        }
        return q(b.el, d), "function" == typeof(h = b.options).change && h.change(b.el), f >= 1 && "function" == typeof(i = b.options).complete && i.complete(b.el), 1 > f
    }, B = function (a, b, c) {
        return null != a && null != a.interpolate ? a.interpolate(b, c) : null
    }, U = function (a, b, c, d) {
        var e, f, j, k, l, m, p, q;
        if (null != d && (o = o.filter(function (a) {
                return a.id !== d
            })), z.stop(a, {timeout: !1}), !c.animated)return z.css(a, b), void("function" == typeof c.complete && c.complete(this));
        b = I(b), l = A(a, Object.keys(b)), e = {}, m = [];
        for (j in b)p = b[j], null != a.style && _.contains(j) ? m.push([j, p]) : (e[j] = w(p), e[j] instanceof g && null != a.style && (e[j].prefix = "", null == (q = e[j]).suffix && (q.suffix = ba(j, 0))));
        return m.length > 0 && (f = D(a), f ? (k = new i, k.applyProperties(m)) : (p = m.map(function (a) {
            return aa(a[0], a[1])
        }).join(" "), k = h.fromTransform(h.matrixForTransform(p))), e.transform = k.decompose(), f && l.transform.applyRotateCenter([e.transform.props.rotate[1], e.transform.props.rotate[2]])), n.push({
            el: a,
            properties: {start: l, end: e},
            options: c,
            curve: c.type.call(c.type, c)
        }), V()
    }, Z = [], Y = 0, R = function (a) {
        return C() ? a.realTimeoutId = setTimeout(function () {
            return a.fn(), u(a.id)
        }, a.delay) : void 0
    }, l = function (a, b) {
        var c;
        return Y += 1, c = {id: Y, tStart: Date.now(), fn: a, delay: b, originalDelay: b}, R(c), Z.push(c), Y
    }, u = function (a) {
        return Z = Z.filter(function (b) {
            return b.id === a && clearTimeout(b.realTimeoutId), b.id !== a
        })
    }, F = function (a, b) {
        var c;
        return null != a ? (c = a - b.tStart, b.originalDelay - c) : b.originalDelay
    }, "undefined" != typeof window && null !== window && window.addEventListener("unload", function () {
    }), X = null, H(function (a) {
        var b, c, d, e, f, g, h, i, j, k;
        if (O = !a, a) {
            if (P)for (c = Date.now() - X, f = 0, i = n.length; i > f; f++)b = n[f], null != b.tStart && (b.tStart += c);
            for (g = 0, j = Z.length; j > g; g++)d = Z[g], d.delay = F(X, d), R(d);
            return X = null
        }
        for (X = Date.now(), k = [], e = 0, h = Z.length; h > e; e++)d = Z[e], k.push(clearTimeout(d.realTimeoutId));
        return k
    }), z = {}, z.linear = function () {
        return function (a) {
            return a
        }
    }, z.spring = function (a) {
        var b, c, d, e, f, g;
        return null == a && (a = {}), p(a, arguments.callee.defaults), e = Math.max(1, a.frequency / 20), f = Math.pow(20, a.friction / 100), g = a.anticipationSize / 1e3, d = Math.max(0, g), b = function (b) {
            var c, d, e, f, h;
            return c = .8, f = g / (1 - g), h = 0, e = (f - c * h) / (f - h), d = (c - e) / f, d * b * a.anticipationStrength / 100 + e
        }, c = function (a) {
            return Math.pow(f / 10, -a) * (1 - a)
        }, function (a) {
            var d, f, h, i, j, k, l, m;
            return k = a / (1 - g) - g / (1 - g), g > a ? (m = g / (1 - g) - g / (1 - g), l = 0 / (1 - g) - g / (1 - g), j = Math.acos(1 / b(m)), h = (Math.acos(1 / b(l)) - j) / (e * -g), d = b) : (d = c, j = 0, h = 1), f = d(k), i = e * (a - g) * h + j, 1 - f * Math.cos(i)
        }
    }, z.bounce = function (a) {
        var b, c, d, e;
        return null == a && (a = {}), p(a, arguments.callee.defaults), d = Math.max(1, a.frequency / 20), e = Math.pow(20, a.friction / 100), b = function (a) {
            return Math.pow(e / 10, -a) * (1 - a)
        }, c = function (a) {
            var c, e, f, g;
            return g = -1.57, e = 1, c = b(a), f = d * a * e + g, c * Math.cos(f)
        }, c.initialForce = !0, c
    }, z.gravity = function (a) {
        var b, c, d, e, f, g, h;
        return null == a && (a = {}), p(a, arguments.callee.defaults), c = Math.min(a.bounciness / 1250, .8), e = a.elasticity / 1e3, h = 100, d = [], b = function () {
            var d, e;
            for (d = Math.sqrt(2 / h), e = {
                a: -d,
                b: d,
                H: 1
            }, a.initialForce && (e.a = 0, e.b = 2 * e.b); e.H > .001;)b = e.b - e.a, e = {
                a: e.b,
                b: e.b + b * c,
                H: e.H * c * c
            };
            return e.b
        }(), g = function (c, d, e, f) {
            var g, h;
            return b = d - c, h = 2 / b * f - 1 - 2 * c / b, g = h * h * e - e + 1, a.initialForce && (g = 1 - g), g
        }, function () {
            var f, g, i, j;
            for (g = Math.sqrt(2 / (h * b * b)), i = {
                a: -g,
                b: g,
                H: 1
            }, a.initialForce && (i.a = 0, i.b = 2 * i.b), d.push(i), f = b, j = []; i.b < 1 && i.H > .001;)f = i.b - i.a, i = {
                a: i.b,
                b: i.b + f * c,
                H: i.H * e
            }, j.push(d.push(i));
            return j
        }(), f = function (b) {
            var c, e, f;
            for (e = 0, c = d[e]; !(b >= c.a && b <= c.b) && (e += 1, c = d[e]););
            return f = c ? g(c.a, c.b, c.H, b) : a.initialForce ? 0 : 1
        }, f.initialForce = a.initialForce, f
    }, z.forceWithGravity = function (a) {
        return null == a && (a = {}), p(a, arguments.callee.defaults), a.initialForce = !0, z.gravity(a)
    }, z.bezier = function () {
        var a, b, c;
        return b = function (a, b, c, d, e) {
            return Math.pow(1 - a, 3) * b + 3 * Math.pow(1 - a, 2) * a * c + 3 * (1 - a) * Math.pow(a, 2) * d + Math.pow(a, 3) * e
        }, a = function (a, c, d, e, f) {
            return {x: b(a, c.x, d.x, e.x, f.x), y: b(a, c.y, d.y, e.y, f.y)}
        }, c = function (a, b, c) {
            var d, e, f, g, h, i, j, k, l, m;
            for (d = null, l = 0, m = b.length; m > l && (e = b[l], a >= e(0).x && a <= e(1).x && (d = e), null === d); l++);
            if (!d)return c ? 0 : 1;
            for (k = 1e-4, g = 0, i = 1, h = (i + g) / 2, j = d(h).x, f = 0; Math.abs(a - j) > k && 100 > f;)a > j ? g = h : i = h, h = (i + g) / 2, j = d(h).x, f += 1;
            return d(h).y
        }, function (b) {
            var d, e, f;
            return null == b && (b = {}), e = b.points, f = !1, d = function () {
                var b, c, f;
                d = [], f = function (b, c) {
                    var e;
                    return e = function (d) {
                        return a(d, b, b.cp[b.cp.length - 1], c.cp[0], c)
                    }, d.push(e)
                };
                for (b in e) {
                    if (c = parseInt(b), c >= e.length - 1)break;
                    f(e[c], e[c + 1])
                }
                return d
            }(), function (a) {
                return 0 === a ? 0 : 1 === a ? 1 : c(a, d, f)
            }
        }
    }(), z.easeInOut = function (a) {
        var b, c;
        return null == a && (a = {}), b = null != (c = a.friction) ? c : arguments.callee.defaults.friction, z.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{x: .92 - b / 1e3, y: 0}]
            }, {x: 1, y: 1, cp: [{x: .08 + b / 1e3, y: 1}]}]
        })
    }, z.easeIn = function (a) {
        var b, c;
        return null == a && (a = {}), b = null != (c = a.friction) ? c : arguments.callee.defaults.friction, z.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{x: .92 - b / 1e3, y: 0}]
            }, {x: 1, y: 1, cp: [{x: 1, y: 1}]}]
        })
    }, z.easeOut = function (a) {
        var b, c;
        return null == a && (a = {}), b = null != (c = a.friction) ? c : arguments.callee.defaults.friction, z.bezier({
            points: [{
                x: 0,
                y: 0,
                cp: [{x: 0, y: 0}]
            }, {x: 1, y: 1, cp: [{x: .08 + b / 1e3, y: 1}]}]
        })
    }, z.spring.defaults = {
        frequency: 300,
        friction: 200,
        anticipationSize: 0,
        anticipationStrength: 0
    }, z.bounce.defaults = {
        frequency: 300,
        friction: 200
    }, z.forceWithGravity.defaults = z.gravity.defaults = {
        bounciness: 400,
        elasticity: 200
    }, z.easeInOut.defaults = z.easeIn.defaults = z.easeOut.defaults = {friction: 500}, z.css = G(function (a, b) {
        return r(a, b, !0)
    }), z.animate = G(function (a, b, c) {
        var d;
        return null == c && (c = {}), c = v(c), p(c, {
            type: z.easeInOut,
            duration: 1e3,
            delay: 0,
            animated: !0
        }), c.duration = Math.max(0, c.duration * T), c.delay = Math.max(0, c.delay), 0 === c.delay ? U(a, b, c) : (d = z.setTimeout(function () {
            return U(a, b, c, d)
        }, c.delay), o.push({id: d, el: a}))
    }), z.stop = G(function (a, b) {
        return null == b && (b = {}), null == b.timeout && (b.timeout = !0), b.timeout && (o = o.filter(function (c) {
            return c.el !== a || null != b.filter && !b.filter(c) || (z.clearTimeout(c.id), !1)
        })), n = n.filter(function (b) {
            return b.el !== a
        })
    }), z.setTimeout = function (a, b) {
        return l(a, b * T)
    }, z.clearTimeout = function (a) {
        return u(a)
    }, z.toggleSlow = function () {
        return S = !S, T = S ? 3 : 1, "undefined" != typeof console && null !== console && "function" == typeof console.log ? console.log("dynamics.js: slow animations " + (S ? "enabled" : "disabled")) : void 0
    }, "object" == typeof module && "object" == typeof module.exports ? module.exports = z : "function" == typeof define ? define("dynamics", function () {
        return z
    }) : window.dynamics = z
}.call(this), !function (a, b) {
    function c(c) {
        if ("undefined" == typeof c)throw new Error('Pathformer [constructor]: "element" parameter is required');
        if (c.constructor === String && (c = b.getElementById(c), !c))throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        if (!(c.constructor instanceof a.SVGElement || /^svg$/i.test(c.nodeName)))throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        this.el = c, this.scan(c)
    }

    function d(a, b, c) {
        this.isReady = !1, this.setElement(a, b), this.setOptions(b), this.setCallback(c), this.isReady && this.init()
    }

    c.prototype.TYPES = ["line", "ellipse", "circle", "polygon", "polyline", "rect"], c.prototype.ATTR_WATCH = ["cx", "cy", "points", "r", "rx", "ry", "x", "x1", "x2", "y", "y1", "y2"], c.prototype.scan = function (a) {
        for (var b, c, d, e, f = a.querySelectorAll(this.TYPES.join(",")), g = 0; g < f.length; g++)c = f[g], b = this[c.tagName.toLowerCase() + "ToPath"], d = b(this.parseAttr(c.attributes)), e = this.pathMaker(c, d), c.parentNode.replaceChild(e, c)
    }, c.prototype.lineToPath = function (a) {
        var b = {};
        return b.d = "M" + a.x1 + "," + a.y1 + "L" + a.x2 + "," + a.y2, b
    }, c.prototype.rectToPath = function (a) {
        var b = {}, c = parseFloat(a.x) || 0, d = parseFloat(a.y) || 0, e = parseFloat(a.width) || 0, f = parseFloat(a.height) || 0;
        return b.d = "M" + c + " " + d + " ", b.d += "L" + (c + e) + " " + d + " ", b.d += "L" + (c + e) + " " + (d + f) + " ", b.d += "L" + c + " " + (d + f) + " Z", b
    }, c.prototype.polylineToPath = function (a) {
        var b, c, d = {}, e = a.points.trim().split(" ");
        if (-1 === a.points.indexOf(",")) {
            var f = [];
            for (b = 0; b < e.length; b += 2)f.push(e[b] + "," + e[b + 1]);
            e = f
        }
        for (c = "M" + e[0], b = 1; b < e.length; b++)-1 !== e[b].indexOf(",") && (c += "L" + e[b]);
        return d.d = c, d
    }, c.prototype.polygonToPath = function (a) {
        var b = c.prototype.polylineToPath(a);
        return b.d += "Z", b
    }, c.prototype.ellipseToPath = function (a) {
        var b = a.cx - a.rx, c = a.cy, d = parseFloat(a.cx) + parseFloat(a.rx), e = a.cy, f = {};
        return f.d = "M" + b + "," + c + "A" + a.rx + "," + a.ry + " 0,1,1 " + d + "," + e + "A" + a.rx + "," + a.ry + " 0,1,1 " + b + "," + e, f
    }, c.prototype.circleToPath = function (a) {
        var b = {}, c = a.cx - a.r, d = a.cy, e = parseFloat(a.cx) + parseFloat(a.r), f = a.cy;
        return b.d = "M" + c + "," + d + "A" + a.r + "," + a.r + " 0,1,1 " + e + "," + f + "A" + a.r + "," + a.r + " 0,1,1 " + c + "," + f, b
    }, c.prototype.pathMaker = function (a, c) {
        var d, e, f = b.createElementNS("http://www.w3.org/2000/svg", "path");
        for (d = 0; d < a.attributes.length; d++)e = a.attributes[d], -1 === this.ATTR_WATCH.indexOf(e.name) && f.setAttribute(e.name, e.value);
        for (d in c)f.setAttribute(d, c[d]);
        return f
    }, c.prototype.parseAttr = function (a) {
        for (var b, c = {}, d = 0; d < a.length; d++) {
            if (b = a[d], -1 !== this.ATTR_WATCH.indexOf(b.name) && -1 !== b.value.indexOf("%"))throw new Error("Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into 'path' tags. Please use 'viewBox'.");
            c[b.name] = b.value
        }
        return c
    };
    var e, f, g;
    d.LINEAR = function (a) {
        return a
    }, d.EASE = function (a) {
        return -Math.cos(a * Math.PI) / 2 + .5
    }, d.EASE_OUT = function (a) {
        return 1 - Math.pow(1 - a, 3)
    }, d.EASE_IN = function (a) {
        return Math.pow(a, 3)
    }, d.EASE_OUT_BOUNCE = function (a) {
        var b = -Math.cos(.5 * a * Math.PI) + 1, c = Math.pow(b, 1.5), d = Math.pow(1 - a, 2), e = -Math.abs(Math.cos(2.5 * c * Math.PI)) + 1;
        return 1 - d + e * d
    }, d.prototype.setElement = function (c, d) {
        if ("undefined" == typeof c)throw new Error('Vivus [constructor]: "element" parameter is required');
        if (c.constructor === String && (c = b.getElementById(c), !c))throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
        if (this.parentEl = c, d && d.file) {
            var e = b.createElement("object");
            e.setAttribute("type", "image/svg+xml"), e.setAttribute("data", d.file), e.setAttribute("built-by-vivus", "true"), c.appendChild(e), c = e
        }
        switch (c.constructor) {
            case a.SVGSVGElement:
            case a.SVGElement:
                this.el = c, this.isReady = !0;
                break;
            case a.HTMLObjectElement:
                var f, g;
                g = this, f = function (a) {
                    if (!g.isReady) {
                        if (g.el = c.contentDocument && c.contentDocument.querySelector("svg"), !g.el && a)throw new Error("Vivus [constructor]: object loaded does not contain any SVG");
                        return g.el ? (c.getAttribute("built-by-vivus") && (g.parentEl.insertBefore(g.el, c), g.parentEl.removeChild(c), g.el.setAttribute("width", "100%"), g.el.setAttribute("height", "100%")), g.isReady = !0, g.init(), !0) : void 0
                    }
                }, f() || c.addEventListener("load", f);
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)')
        }
    }, d.prototype.setOptions = function (b) {
        var c = ["delayed", "async", "oneByOne", "scenario", "scenario-sync"], e = ["inViewport", "manual", "autostart"];
        if (void 0 !== b && b.constructor !== Object)throw new Error('Vivus [constructor]: "options" parameter must be an object');
        if (b = b || {}, b.type && -1 === c.indexOf(b.type))throw new Error("Vivus [constructor]: " + b.type + " is not an existing animation `type`");
        if (this.type = b.type || c[0], b.start && -1 === e.indexOf(b.start))throw new Error("Vivus [constructor]: " + b.start + " is not an existing `start` option");
        if (this.start = b.start || e[0], this.isIE = -1 !== a.navigator.userAgent.indexOf("MSIE") || -1 !== a.navigator.userAgent.indexOf("Trident/") || -1 !== a.navigator.userAgent.indexOf("Edge/"), this.duration = g(b.duration, 120), this.delay = g(b.delay, null), this.dashGap = g(b.dashGap, 1), this.forceRender = b.hasOwnProperty("forceRender") ? !!b.forceRender : this.isIE, this.selfDestroy = !!b.selfDestroy, this.onReady = b.onReady, this.frameLength = this.currentFrame = this.map = this.delayUnit = this.speed = this.handle = null, this.ignoreInvisible = !!b.hasOwnProperty("ignoreInvisible") && !!b.ignoreInvisible, this.animTimingFunction = b.animTimingFunction || d.LINEAR, this.pathTimingFunction = b.pathTimingFunction || d.LINEAR, this.delay >= this.duration)throw new Error("Vivus [constructor]: delay must be shorter than duration")
    }, d.prototype.setCallback = function (a) {
        if (a && a.constructor !== Function)throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        this.callback = a || function () {
            }
    }, d.prototype.mapping = function () {
        var b, c, d, e, f, h, i, j;
        for (j = h = i = 0, c = this.el.querySelectorAll("path"), b = 0; b < c.length; b++)d = c[b], this.isInvisible(d) || (f = {
            el: d,
            length: Math.ceil(d.getTotalLength())
        }, isNaN(f.length) ? a.console && console.warn && console.warn("Vivus [mapping]: cannot retrieve a path element length", d) : (this.map.push(f), d.style.strokeDasharray = f.length + " " + (f.length + 2 * this.dashGap), d.style.strokeDashoffset = f.length + this.dashGap, f.length += this.dashGap, h += f.length, this.renderPath(b)));
        for (h = 0 === h ? 1 : h, this.delay = null === this.delay ? this.duration / 3 : this.delay, this.delayUnit = this.delay / (c.length > 1 ? c.length - 1 : 1), b = 0; b < this.map.length; b++) {
            switch (f = this.map[b], this.type) {
                case"delayed":
                    f.startAt = this.delayUnit * b, f.duration = this.duration - this.delay;
                    break;
                case"oneByOne":
                    f.startAt = i / h * this.duration, f.duration = f.length / h * this.duration;
                    break;
                case"async":
                    f.startAt = 0, f.duration = this.duration;
                    break;
                case"scenario-sync":
                    d = c[b], e = this.parseAttr(d), f.startAt = j + (g(e["data-delay"], this.delayUnit) || 0), f.duration = g(e["data-duration"], this.duration), j = void 0 !== e["data-async"] ? f.startAt : f.startAt + f.duration, this.frameLength = Math.max(this.frameLength, f.startAt + f.duration);
                    break;
                case"scenario":
                    d = c[b], e = this.parseAttr(d), f.startAt = g(e["data-start"], this.delayUnit) || 0, f.duration = g(e["data-duration"], this.duration), this.frameLength = Math.max(this.frameLength, f.startAt + f.duration)
            }
            i += f.length, this.frameLength = this.frameLength || this.duration
        }
    }, d.prototype.drawer = function () {
        var a = this;
        this.currentFrame += this.speed, this.currentFrame <= 0 ? (this.stop(), this.reset(), this.callback(this)) : this.currentFrame >= this.frameLength ? (this.stop(), this.currentFrame = this.frameLength, this.trace(), this.selfDestroy && this.destroy(), this.callback(this)) : (this.trace(), this.handle = e(function () {
            a.drawer()
        }))
    }, d.prototype.trace = function () {
        var a, b, c, d;
        for (d = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength, a = 0; a < this.map.length; a++)c = this.map[a], b = (d - c.startAt) / c.duration, b = this.pathTimingFunction(Math.max(0, Math.min(1, b))), c.progress !== b && (c.progress = b, c.el.style.strokeDashoffset = Math.floor(c.length * (1 - b)), this.renderPath(a))
    }, d.prototype.renderPath = function (a) {
        if (this.forceRender && this.map && this.map[a]) {
            var b = this.map[a], c = b.el.cloneNode(!0);
            b.el.parentNode.replaceChild(c, b.el), b.el = c
        }
    }, d.prototype.init = function () {
        this.frameLength = 0, this.currentFrame = 0, this.map = [], new c(this.el), this.mapping(), this.starter(), this.onReady && this.onReady(this)
    }, d.prototype.starter = function () {
        switch (this.start) {
            case"manual":
                return;
            case"autostart":
                this.play();
                break;
            case"inViewport":
                var b = this, c = function () {
                    b.isInViewport(b.parentEl, 1) && (b.play(), a.removeEventListener("scroll", c))
                };
                a.addEventListener("scroll", c), c()
        }
    }, d.prototype.getStatus = function () {
        return 0 === this.currentFrame ? "start" : this.currentFrame === this.frameLength ? "end" : "progress"
    }, d.prototype.reset = function () {
        return this.setFrameProgress(0)
    }, d.prototype.finish = function () {
        return this.setFrameProgress(1)
    }, d.prototype.setFrameProgress = function (a) {
        return a = Math.min(1, Math.max(0, a)), this.currentFrame = Math.round(this.frameLength * a), this.trace(), this
    }, d.prototype.play = function (a) {
        if (a && "number" != typeof a)throw new Error("Vivus [play]: invalid speed");
        return this.speed = a || 1, this.handle || this.drawer(), this
    }, d.prototype.stop = function () {
        return this.handle && (f(this.handle), this.handle = null), this
    }, d.prototype.destroy = function () {
        var a, b;
        for (a = 0; a < this.map.length; a++)b = this.map[a], b.el.style.strokeDashoffset = null, b.el.style.strokeDasharray = null, this.renderPath(a)
    }, d.prototype.isInvisible = function (a) {
        var b, c = a.getAttribute("data-ignore");
        return null !== c ? "false" !== c : !!this.ignoreInvisible && (b = a.getBoundingClientRect(), !b.width && !b.height)
    }, d.prototype.parseAttr = function (a) {
        var b, c = {};
        if (a && a.attributes)for (var d = 0; d < a.attributes.length; d++)b = a.attributes[d], c[b.name] = b.value;
        return c
    }, d.prototype.isInViewport = function (a, b) {
        var c = this.scrollY(), d = c + this.getViewportH(), e = a.getBoundingClientRect(), f = e.height, g = c + e.top, h = g + f;
        return b = b || 0, d >= g + f * b && h >= c
    }, d.prototype.docElem = a.document.documentElement, d.prototype.getViewportH = function () {
        var b = this.docElem.clientHeight, c = a.innerHeight;
        return c > b ? c : b
    }, d.prototype.scrollY = function () {
        return a.pageYOffset || this.docElem.scrollTop
    }, e = function () {
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame || a.msRequestAnimationFrame || function (b) {
                return a.setTimeout(b, 1e3 / 60)
            }
    }(), f = function () {
        return a.cancelAnimationFrame || a.webkitCancelAnimationFrame || a.mozCancelAnimationFrame || a.oCancelAnimationFrame || a.msCancelAnimationFrame || function (b) {
                return a.clearTimeout(b)
            }
    }(), g = function (a, b) {
        var c = parseInt(a, 10);
        return c >= 0 ? c : b
    }, "function" == typeof define && define.amd ? define([], function () {
        return d
    }) : "object" == typeof exports ? module.exports = d : a.Vivus = d
}(window, document), function (a) {
    var b = a(window), c = b.height();
    b.resize(function () {
        c = b.height()
    }), a.fn.parallax = function (d, e, f) {
        function k() {
            var f = b.scrollTop();
            g.each(function () {
                var b = a(this), j = b.offset().top, k = h(b);
                j + k < f || j > f + c || g.css("backgroundPosition", d + " " + Math.round((i - f) * e) + "px")
            })
        }

        var h, i, g = a(this);
        g.each(function () {
            i = g.offset().top
        }), h = f ? function (a) {
            return a.outerHeight(!0)
        } : function (a) {
            return a.height()
        }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .1), (arguments.length < 3 || null === f) && (f = !0), b.bind("scroll", k).resize(k), k()
    }
}(jQuery), function () {
    var a = [].indexOf || function (a) {
            for (var b = 0, c = this.length; b < c; b++)if (b in this && this[b] === a)return b;
            return -1
        }, b = [].slice;
    !function (a, b) {
        return "function" == typeof define && define.amd ? define("waypoints", ["jquery"], function (c) {
            return b(c, a)
        }) : b(a.jQuery, a)
    }(this, function (c, d) {
        var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
        return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
            horizontal: {},
            vertical: {}
        }, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function () {
            function a(a) {
                var b = this;
                this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
                    x: a.scrollLeft(),
                    y: a.scrollTop()
                }, this.waypoints = {
                    horizontal: {},
                    vertical: {}
                }, a.data(j, this.id), k[this.id] = this, a.bind(p, function () {
                    var a;
                    if (!b.didScroll && !l)return b.didScroll = !0, a = function () {
                        return b.doScroll(), b.didScroll = !1
                    }, d.setTimeout(a, c[t].settings.scrollThrottle)
                }), a.bind(o, function () {
                    var a;
                    if (!b.didResize)return b.didResize = !0, a = function () {
                        return c[t]("refresh"), b.didResize = !1
                    }, d.setTimeout(a, c[t].settings.resizeThrottle)
                })
            }

            return a.prototype.doScroll = function () {
                var a, b = this;
                return a = {
                    horizontal: {
                        newScroll: this.$element.scrollLeft(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left"
                    },
                    vertical: {
                        newScroll: this.$element.scrollTop(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up"
                    }
                }, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function (a, d) {
                    var e, f, g;
                    return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function (a, b) {
                        var c, e;
                        return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
                    }), g.sort(function (a, b) {
                        return a.offset - b.offset
                    }), f || g.reverse(), c.each(g, function (a, b) {
                        if (b.options.continuous || a === g.length - 1)return b.trigger([e])
                    })
                }), this.oldScroll = {x: a.horizontal.newScroll, y: a.vertical.newScroll}
            }, a.prototype.refresh = function () {
                var a, b, d, e = this;
                return d = c.isWindow(this.element), b = this.$element.offset(), this.doScroll(), a = {
                    horizontal: {
                        contextOffset: d ? 0 : b.left,
                        contextScroll: d ? 0 : this.oldScroll.x,
                        contextDimension: this.$element.width(),
                        oldScroll: this.oldScroll.x,
                        forward: "right",
                        backward: "left",
                        offsetProp: "left"
                    },
                    vertical: {
                        contextOffset: d ? 0 : b.top,
                        contextScroll: d ? 0 : this.oldScroll.y,
                        contextDimension: d ? c[t]("viewportHeight") : this.$element.height(),
                        oldScroll: this.oldScroll.y,
                        forward: "down",
                        backward: "up",
                        offsetProp: "top"
                    }
                }, c.each(a, function (a, b) {
                    return c.each(e.waypoints[a], function (a, d) {
                        var e, f, g, h, i;
                        if (e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, (!d.options.onlyOnScroll || null == g) && d.enabled)return null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
                    })
                })
            }, a.prototype.checkEmpty = function () {
                if (c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical))return this.$element.unbind([o, p].join(" ")), delete k[this.id]
            }, a
        }(), g = function () {
            function a(a, b, d) {
                var e, f;
                d = c.extend({}, c.fn[s].defaults, d), "bottom-in-view" === d.offset && (d.offset = function () {
                    var a;
                    return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
                }), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = a.data(r)) ? f : [], e.push(this.id), a.data(r, e)
            }

            return a.prototype.trigger = function (a) {
                if (this.enabled)return null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0
            }, a.prototype.disable = function () {
                return this.enabled = !1
            }, a.prototype.enable = function () {
                return this.context.refresh(), this.enabled = !0
            }, a.prototype.destroy = function () {
                return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
            }, a.getWaypointsByElement = function (a) {
                var b, d;
                return (d = c(a).data(r)) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function (a) {
                    return b[a]
                })) : []
            }, a
        }(), n = {
            init: function (a, b) {
                var d;
                return null == b && (b = {}), null == (d = b.handler) && (b.handler = a), this.each(function () {
                    var a, d, e, h;
                    return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e.data(j)], d || (d = new f(e)), new g(a, d, b)
                }), c[t]("refresh"), this
            }, disable: function () {
                return n._invoke(this, "disable")
            }, enable: function () {
                return n._invoke(this, "enable")
            }, destroy: function () {
                return n._invoke(this, "destroy")
            }, prev: function (a, b) {
                return n._traverse.call(this, a, b, function (a, b, c) {
                    if (b > 0)return a.push(c[b - 1])
                })
            }, next: function (a, b) {
                return n._traverse.call(this, a, b, function (a, b, c) {
                    if (b < c.length - 1)return a.push(c[b + 1])
                })
            }, _traverse: function (a, b, e) {
                var f, g;
                return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function () {
                    var b;
                    return b = c.inArray(this, g[a]), e(f, b, g[a])
                }), this.pushStack(f)
            }, _invoke: function (a, b) {
                return a.each(function () {
                    var a;
                    return a = g.getWaypointsByElement(this), c.each(a, function (a, c) {
                        return c[b](), !0
                    })
                }), this
            }
        }, c.fn[s] = function () {
            var a, d;
            return d = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], n[d] ? n[d].apply(this, a) : c.isFunction(d) ? n.init.apply(this, arguments) : c.isPlainObject(d) ? n.init.apply(this, [null, d]) : d ? c.error("The " + d + " method does not exist in jQuery Waypoints.") : c.error("jQuery Waypoints needs a callback function or handler option.")
        }, c.fn[s].defaults = {
            context: d,
            continuous: !0,
            enabled: !0,
            horizontal: !1,
            offset: 0,
            triggerOnce: !1
        }, m = {
            refresh: function () {
                return c.each(k, function (a, b) {
                    return b.refresh()
                })
            }, viewportHeight: function () {
                var a;
                return null != (a = d.innerHeight) ? a : e.height()
            }, aggregate: function (a) {
                var b, d, e;
                return b = h, a && (b = null != (e = k[c(a).data(j)]) ? e.waypoints : void 0), b ? (d = {
                    horizontal: [],
                    vertical: []
                }, c.each(d, function (a, e) {
                    return c.each(b[a], function (a, b) {
                        return e.push(b)
                    }), e.sort(function (a, b) {
                        return a.offset - b.offset
                    }), d[a] = c.map(e, function (a) {
                        return a.element
                    }), d[a] = c.unique(d[a])
                }), d) : []
            }, above: function (a) {
                return null == a && (a = d), m._filter(a, "vertical", function (a, b) {
                    return b.offset <= a.oldScroll.y
                })
            }, below: function (a) {
                return null == a && (a = d), m._filter(a, "vertical", function (a, b) {
                    return b.offset > a.oldScroll.y
                })
            }, left: function (a) {
                return null == a && (a = d), m._filter(a, "horizontal", function (a, b) {
                    return b.offset <= a.oldScroll.x
                })
            }, right: function (a) {
                return null == a && (a = d), m._filter(a, "horizontal", function (a, b) {
                    return b.offset > a.oldScroll.x
                })
            }, enable: function () {
                return m._invoke("enable")
            }, disable: function () {
                return m._invoke("disable")
            }, destroy: function () {
                return m._invoke("destroy")
            }, extendFn: function (a, b) {
                return n[a] = b
            }, _invoke: function (a) {
                var b;
                return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function (b, c) {
                    return c[a](), !0
                })
            }, _filter: function (a, b, d) {
                var e, f;
                return (e = k[c(a).data(j)]) ? (f = [], c.each(e.waypoints[b], function (a, b) {
                    if (d(e, b))return f.push(b)
                }), f.sort(function (a, b) {
                    return a.offset - b.offset
                }), c.map(f, function (a) {
                    return a.element
                })) : []
            }
        }, c[t] = function () {
            var a, c;
            return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
        }, c[t].settings = {resizeThrottle: 100, scrollThrottle: 30}, e.load(function () {
            return c[t]("refresh")
        })
    })
}.call(this), function (a) {
    "use strict";
    a.fn.counterUp = function (b) {
        var c = a.extend({time: 400, delay: 10}, b);
        return this.each(function () {
            var b = a(this), d = c, e = function () {
                var a = [], c = d.time / d.delay, e = b.text(), f = /[0-9]+,[0-9]+/.test(e);
                e = e.replace(/,/g, "");
                for (var h = (/^[0-9]+$/.test(e), /^[0-9]+\.[0-9]+$/.test(e)), i = h ? (e.split(".")[1] || []).length : 0, j = c; j >= 1; j--) {
                    var k = parseInt(e / c * j);
                    if (h && (k = parseFloat(e / c * j).toFixed(i)), f)for (; /(\d+)(\d{3})/.test(k.toString());)k = k.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    a.unshift(k)
                }
                b.data("counterup-nums", a), b.text("0");
                var l = function () {
                    b.text(b.data("counterup-nums").shift()), b.data("counterup-nums").length ? setTimeout(b.data("counterup-func"), d.delay) : (delete b.data("counterup-nums"), b.data("counterup-nums", null), b.data("counterup-func", null))
                };
                b.data("counterup-func", l), setTimeout(b.data("counterup-func"), d.delay)
            };
            b.waypoint(e, {offset: "100%", triggerOnce: !0})
        })
    }
}(jQuery), window.scrollReveal = function (a) {
    "use strict";
    function d(b) {
        this.docElem = a.document.documentElement, this.options = this.extend(this.defaults, b), this.styleBank = {}, 1 == this.options.init && this.init()
    }

    var b = 1, c = function () {
        return a.requestAnimationFrame || a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || function (b) {
                a.setTimeout(b, 1e3 / 60)
            }
    }();
    return d.prototype = {
        defaults: {
            after: "0s",
            enter: "bottom",
            move: "24px",
            over: "0.66s",
            easing: "ease-in-out",
            opacity: 0,
            viewportFactor: .33,
            reset: !1,
            init: !0
        }, init: function () {
            this.scrolled = !1;
            var d = this;
            this.elems = Array.prototype.slice.call(this.docElem.querySelectorAll("[data-scroll-reveal]")), this.elems.forEach(function (a, c) {
                var e = a.getAttribute("data-scroll-reveal-id");
                e || (e = b++, a.setAttribute("data-scroll-reveal-id", e)), d.styleBank[e] || (d.styleBank[e] = a.getAttribute("style")), d.update(a)
            });
            var e = function (a) {
                d.scrolled || (d.scrolled = !0, c(function () {
                    d._scrollPage()
                }))
            }, f = function () {
                function a() {
                    d._scrollPage(), d.resizeTimeout = null
                }

                d.resizeTimeout && clearTimeout(d.resizeTimeout), d.resizeTimeout = setTimeout(a, 200)
            };
            a.addEventListener("scroll", e, !1), a.addEventListener("resize", f, !1)
        }, _scrollPage: function () {
            var a = this;
            this.elems.forEach(function (b, c) {
                a.update(b)
            }), this.scrolled = !1
        }, parseLanguage: function (a) {
            function d(a) {
                var b = [], c = ["from", "the", "and", "then", "but", "with"];
                return a.forEach(function (a, d) {
                    c.indexOf(a) > -1 || b.push(a)
                }), b
            }

            var b = a.getAttribute("data-scroll-reveal").split(/[, ]+/), c = {};
            return b = d(b), b.forEach(function (a, d) {
                switch (a) {
                    case"enter":
                        return void(c.enter = b[d + 1]);
                    case"after":
                        return void(c.after = b[d + 1]);
                    case"wait":
                        return void(c.after = b[d + 1]);
                    case"move":
                        return void(c.move = b[d + 1]);
                    case"ease":
                        return c.move = b[d + 1], void(c.ease = "ease");
                    case"ease-in":
                        return c.move = b[d + 1], void(c.easing = "ease-in");
                    case"ease-in-out":
                        return c.move = b[d + 1], void(c.easing = "ease-in-out");
                    case"ease-out":
                        return c.move = b[d + 1], void(c.easing = "ease-out");
                    case"over":
                        return void(c.over = b[d + 1]);
                    default:
                        return
                }
            }), c
        }, update: function (a) {
            var b = this.genCSS(a), c = this.styleBank[a.getAttribute("data-scroll-reveal-id")];
            return null != c ? c += ";" : c = "", a.getAttribute("data-scroll-reveal-initialized") || (a.setAttribute("style", c + b.initial), a.setAttribute("data-scroll-reveal-initialized", !0)), this.isElementInViewport(a, this.options.viewportFactor) ? a.getAttribute("data-scroll-reveal-complete") ? void 0 : this.isElementInViewport(a, this.options.viewportFactor) ? (a.setAttribute("style", c + b.target + b.transition), void(this.options.reset || setTimeout(function () {
                "" != c ? a.setAttribute("style", c) : a.removeAttribute("style"), a.setAttribute("data-scroll-reveal-complete", !0)
            }, b.totalDuration))) : void 0 : void(this.options.reset && a.setAttribute("style", c + b.initial + b.reset))
        }, genCSS: function (a) {
            var c, d, b = this.parseLanguage(a);
            b.enter ? ("top" != b.enter && "bottom" != b.enter || (c = b.enter, d = "y"), "left" != b.enter && "right" != b.enter || (c = b.enter, d = "x")) : ("top" != this.options.enter && "bottom" != this.options.enter || (c = this.options.enter, d = "y"), "left" != this.options.enter && "right" != this.options.enter || (c = this.options.enter, d = "x")), "top" != c && "left" != c || (b.move ? b.move = "-" + b.move : b.move = "-" + this.options.move);
            var e = b.move || this.options.move, f = b.over || this.options.over, g = b.after || this.options.after, h = b.easing || this.options.easing, i = b.opacity || this.options.opacity, j = "-webkit-transition: -webkit-transform " + f + " " + h + " " + g + ",  opacity " + f + " " + h + " " + g + ";transition: transform " + f + " " + h + " " + g + ", opacity " + f + " " + h + " " + g + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;", k = "-webkit-transition: -webkit-transform " + f + " " + h + " 0s,  opacity " + f + " " + h + " " + g + ";transition: transform " + f + " " + h + " 0s,  opacity " + f + " " + h + " " + g + ";-webkit-perspective: 1000;-webkit-backface-visibility: hidden;", l = "-webkit-transform: translate" + d + "(" + e + ");transform: translate" + d + "(" + e + ");opacity: " + i + ";", m = "-webkit-transform: translate" + d + "(0);transform: translate" + d + "(0);opacity: 1;";
            return {
                transition: j,
                initial: l,
                target: m,
                reset: k,
                totalDuration: 1e3 * (parseFloat(f) + parseFloat(g))
            }
        }, getViewportH: function () {
            var b = this.docElem.clientHeight, c = a.innerHeight;
            return b < c ? c : b
        }, getOffset: function (a) {
            var b = 0, c = 0;
            do isNaN(a.offsetTop) || (b += a.offsetTop), isNaN(a.offsetLeft) || (c += a.offsetLeft); while (a = a.offsetParent);
            return {top: b, left: c}
        }, isElementInViewport: function (b, c) {
            var d = a.pageYOffset, e = d + this.getViewportH(), f = b.offsetHeight, g = this.getOffset(b).top, h = g + f, c = c || 0;
            return g + f * c <= e && h >= d || "fixed" == (b.currentStyle ? b.currentStyle : a.getComputedStyle(b, null)).position
        }, extend: function (a, b) {
            for (var c in b)b.hasOwnProperty(c) && (a[c] = b[c]);
            return a
        }
    }, d
}(window);
!function (a) {
    "use strict";
    function d() {
    }

    Royal_Preloader.config({
        mode: "progress",
        showProgress: !0,
        showPercentage: !1,
        background: "#111111"
    }), a(function () {
        var b = a("title").text();
        a(window).blur(function () {
            a("title").text("-> Sport1 Labs <-")
        }), a(window).focus(function () {
            a("title").text(b)
        })
    });
    var b = {duration: 500, type: "oneByOne", animTimingFunction: Vivus.EASE};
    new Vivus("svg-icon-1", b, d), a(window).scroll(function () {
        var b = a(".fade-elements"), c = a(this).scrollTop();
        b.css({"margin-top": -(c / 0) + "px", opacity: 1 - c / 400})
    }), window.scrollReveal = new scrollReveal, jQuery(document).ready(function (a) {
        a(".counter-facts").counterUp({delay: 100, time: 3e3})
    }), a(window).load(function () {
        a(".cd-nav li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
            highlightSelector: ".cd-nav li a",
            offset: 0,
            scrollSpeed: 800,
            scrollEasing: "easeInOutCubic"
        }), a("a[rel='next']").on(function (b) {
            b.preventDefault();
            var c = a(this).parent().parent("section").next().attr("id");
            a.mPageScroll2id("scrollTo", c)
        })
    }), a(document).ready(function () {
        function j(b) {
            a(".cd-nav-container, .cd-overlay").toggleClass("is-visible", b), a("main").toggleClass("scale-down", b)
        }

        a("#owl-slider").owlCarousel({
            navigation: !1,
            pagination: !0,
            transitionStyle: "fade",
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: !0,
            autoPlay: 4e3
        }), a("#owl-slider-1").owlCarousel({
            navigation: !1,
            pagination: !0,
            transitionStyle: "fade",
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: !0,
            autoPlay: 4e3
        }), a("#owl-slider-2").owlCarousel({
            navigation: !1,
            pagination: !0,
            transitionStyle: "fade",
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: !0,
            autoPlay: 4e3
        }), a("#owl-slider-3").owlCarousel({
            navigation: !1,
            pagination: !0,
            transitionStyle: "fade",
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: !0,
            autoPlay: 4e3
        }), a("#owl-slider-4").owlCarousel({
            navigation: !1,
            pagination: !0,
            transitionStyle: "fade",
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: !0,
            autoPlay: 4e3
        }), a(".parallax-color").parallax("50%", .13), a(".parallax-color-1").parallax("50%", .16), a(".parallax-color-2").parallax("50%", .19), a(".parallax-color-3").parallax("50%", .22), a(".parallax-color-4").parallax("50%", .25);
        var b = function () {
            return a(document).height() - a(window).height()
        }, c = function () {
            return a(window).scrollTop()
        };
        if ("max" in document.createElement("progress")) {
            var d = a("progress");
            d.attr({max: b()}), a(document).on("scroll", function () {
                d.attr({value: c()})
            }), a(window).resize(function () {
                d.attr({max: b(), value: c()})
            })
        } else {
            var f, g, d = a(".progress-bar"), e = b(), h = function () {
                return f = c(), g = f / e * 100, g += "%"
            }, i = function () {
                d.css({width: h()})
            };
            a(document).on("scroll", i), a(window).on("resize", function () {
                e = b(), i()
            })
        }
        a(".cd-nav-trigger").on("click", function (a) {
            a.preventDefault(), j(!0)
        }), a(".cd-close-nav, .cd-overlay").on("click", function (a) {
            a.preventDefault(), j(!1)
        }), a(".cd-nav li").on("click", function (a) {
            j(!1)
        })
    })
}(jQuery);