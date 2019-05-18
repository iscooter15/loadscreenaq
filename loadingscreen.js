if (!String.fromCodePoint) {
    (function() {
        var e = function() {
            try {
                var e = {};
                var t = Object.defineProperty;
                var n = t(e, e, e) && t
            } catch (i) {}
            return n
        }();
        var t = String.fromCharCode;
        var n = Math.floor;
        var i = function() {
            var e = 16384;
            var i = [];
            var r;
            var o;
            var s = -1;
            var a = arguments.length;
            if (!a) {
                return ""
            }
            var u = "";
            while (++s < a) {
                var f = Number(arguments[s]);
                if (!isFinite(f) || f < 0 || f > 1114111 || n(f) != f) {
                    throw RangeError("Invalid code point: " + f)
                }
                if (f <= 65535) {
                    i.push(f)
                } else {
                    f -= 65536;
                    r = (f >> 10) + 55296;
                    o = f % 1024 + 56320;
                    i.push(r, o)
                }
                if (s + 1 == a || i.length > e) {
                    u += t.apply(null, i);
                    i.length = 0
                }
            }
            return u
        };
        if (e) {
            e(String, "fromCodePoint", {
                value: i,
                configurable: true,
                writable: true
            })
        } else {
            String.fromCodePoint = i
        }
    })()
}
if (!String.prototype.codePointAt) {
    (function() {
        "use strict";
        var e = function(e) {
            if (this == null) {
                throw TypeError()
            }
            var t = String(this);
            var n = t.length;
            var i = e ? Number(e) : 0;
            if (i != i) {
                i = 0
            }
            if (i < 0 || i >= n) {
                return undefined
            }
            var r = t.charCodeAt(i);
            var o;
            if (r >= 55296 && r <= 56319 && n > i + 1) {
                o = t.charCodeAt(i + 1);
                if (o >= 56320 && o <= 57343) {
                    return (r - 55296) * 1024 + o - 56320 + 65536
                }
            }
            return r
        };
        if (Object.defineProperty) {
            Object.defineProperty(String.prototype, "codePointAt", {
                value: e,
                configurable: true,
                writable: true
            })
        } else {
            String.prototype.codePointAt = e
        }
    })()
}
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(e, t) {
        var n = this.toString();
        if (typeof t !== "number" || !isFinite(t) || Math.floor(t) !== t || t > n.length) {
            t = n.length
        }
        t -= e.length;
        var i = n.lastIndexOf(e, t);
        return i !== -1 && i === t
    }
}
if (!String.prototype.includes) {
    String.prototype.includes = function(e, t) {
        "use strict";
        if (typeof t !== "number") {
            t = 0
        }
        if (t + e.length > this.length) {
            return false
        } else {
            return this.indexOf(e, t) !== -1
        }
    }
}
if (!String.prototype.normalize) {}
if (!String.prototype.padEnd) {
    String.prototype.padEnd = function e(t, n) {
        t = t >> 0;
        n = String(typeof n !== "undefined" ? n : " ");
        if (this.length > t) {
            return String(this)
        } else {
            t = t - this.length;
            if (t > n.length) {
                n += n.repeat(t / n.length)
            }
            return String(this) + n.slice(0, t)
        }
    }
}
if (!String.prototype.padStart) {
    String.prototype.padStart = function t(e, n) {
        e = e >> 0;
        n = String(typeof n !== "undefined" ? n : " ");
        if (this.length > e) {
            return String(this)
        } else {
            e = e - this.length;
            if (e > n.length) {
                n += n.repeat(e / n.length)
            }
            return n.slice(0, e) + String(this)
        }
    }
}
if (!String.prototype.repeat) {
    String.prototype.repeat = function(e) {
        "use strict";
        if (this == null) {
            throw new TypeError("can't convert " + this + " to object")
        }
        var t = "" + this;
        e = +e;
        if (e != e) {
            e = 0
        }
        if (e < 0) {
            throw new RangeError("repeat count must be non-negative")
        }
        if (e == Infinity) {
            throw new RangeError("repeat count must be less than infinity")
        }
        e = Math.floor(e);
        if (t.length == 0 || e == 0) {
            return ""
        }
        if (t.length * e >= 1 << 28) {
            throw new RangeError("repeat count must not overflow maximum string size")
        }
        var n = "";
        for (;;) {
            if ((e & 1) == 1) {
                n += t
            }
            e >>>= 1;
            if (e == 0) {
                break
            }
            t += t
        }
        return n
    }
}
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(e, t) {
        t = t || 0;
        return this.substr(t, e.length) === e
    }
}
if (!String.prototype.trim) {
    String.prototype.trim = function() {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }
}(function(e, t) {
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = e.document ? t(e, true) : function(e) {
            if (!e.document) {
                throw new Error("jQuery requires a window with a document")
            }
            return t(e)
        }
    } else {
        t(e)
    }
})(typeof window !== "undefined" ? window : this, function(e, t) {
    var n = [];
    var i = e.document;
    var r = n.slice;
    var o = n.concat;
    var s = n.push;
    var a = n.indexOf;
    var u = {};
    var f = u.toString;
    var l = u.hasOwnProperty;
    var c = {};
    var p = "2.2.4",
        d = function(e, t) {
            return new d.fn.init(e, t)
        },
        h = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        g = /^-ms-/,
        m = /-([\da-z])/gi,
        y = function(e, t) {
            return t.toUpperCase()
        };
    d.fn = d.prototype = {
        jquery: p,
        constructor: d,
        selector: "",
        length: 0,
        toArray: function() {
            return r.call(this)
        },
        get: function(e) {
            return e != null ? e < 0 ? this[e + this.length] : this[e] : r.call(this)
        },
        pushStack: function(e) {
            var t = d.merge(this.constructor(), e);
            t.prevObject = this;
            t.context = this.context;
            return t
        },
        each: function(e) {
            return d.each(this, e)
        },
        map: function(e) {
            return this.pushStack(d.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(r.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: s,
        sort: n.sort,
        splice: n.splice
    };
    d.extend = d.fn.extend = function() {
        var e, t, n, i, r, o, s = arguments[0] || {},
            a = 1,
            u = arguments.length,
            f = false;
        if (typeof s === "boolean") {
            f = s;
            s = arguments[a] || {};
            a++
        }
        if (typeof s !== "object" && !d.isFunction(s)) {
            s = {}
        }
        if (a === u) {
            s = this;
            a--
        }
        for (; a < u; a++) {
            if ((e = arguments[a]) != null) {
                for (t in e) {
                    n = s[t];
                    i = e[t];
                    if (s === i) {
                        continue
                    }
                    if (f && i && (d.isPlainObject(i) || (r = d.isArray(i)))) {
                        if (r) {
                            r = false;
                            o = n && d.isArray(n) ? n : []
                        } else {
                            o = n && d.isPlainObject(n) ? n : {}
                        }
                        s[t] = d.extend(f, o, i)
                    } else if (i !== undefined) {
                        s[t] = i
                    }
                }
            }
        }
        return s
    };
    d.extend({
        expando: "jQuery" + (p + Math.random()).replace(/\D/g, ""),
        isReady: true,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return d.type(e) === "function"
        },
        isArray: Array.isArray,
        isWindow: function(e) {
            return e != null && e === e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !d.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isPlainObject: function(e) {
            var t;
            if (d.type(e) !== "object" || e.nodeType || d.isWindow(e)) {
                return false
            }
            if (e.constructor && !l.call(e, "constructor") && !l.call(e.constructor.prototype || {}, "isPrototypeOf")) {
                return false
            }
            for (t in e) {}
            return t === undefined || l.call(e, t)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) {
                return false
            }
            return true
        },
        type: function(e) {
            if (e == null) {
                return e + ""
            }
            return typeof e === "object" || typeof e === "function" ? u[f.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            var t, n = eval;
            e = d.trim(e);
            if (e) {
                if (e.indexOf("use strict") === 1) {
                    t = i.createElement("script");
                    t.text = e;
                    i.head.appendChild(t).parentNode.removeChild(t)
                } else {
                    n(e)
                }
            }
        },
        camelCase: function(e) {
            return e.replace(g, "ms-").replace(m, y)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var n, i = 0;
            if (v(e)) {
                n = e.length;
                for (; i < n; i++) {
                    if (t.call(e[i], i, e[i]) === false) {
                        break
                    }
                }
            } else {
                for (i in e) {
                    if (t.call(e[i], i, e[i]) === false) {
                        break
                    }
                }
            }
            return e
        },
        trim: function(e) {
            return e == null ? "" : (e + "").replace(h, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            if (e != null) {
                if (v(Object(e))) {
                    d.merge(n, typeof e === "string" ? [e] : e)
                } else {
                    s.call(n, e)
                }
            }
            return n
        },
        inArray: function(e, t, n) {
            return t == null ? -1 : a.call(t, e, n)
        },
        merge: function(e, t) {
            var n = +t.length,
                i = 0,
                r = e.length;
            for (; i < n; i++) {
                e[r++] = t[i]
            }
            e.length = r;
            return e
        },
        grep: function(e, t, n) {
            var i, r = [],
                o = 0,
                s = e.length,
                a = !n;
            for (; o < s; o++) {
                i = !t(e[o], o);
                if (i !== a) {
                    r.push(e[o])
                }
            }
            return r
        },
        map: function(e, t, n) {
            var i, r, s = 0,
                a = [];
            if (v(e)) {
                i = e.length;
                for (; s < i; s++) {
                    r = t(e[s], s, n);
                    if (r != null) {
                        a.push(r)
                    }
                }
            } else {
                for (s in e) {
                    r = t(e[s], s, n);
                    if (r != null) {
                        a.push(r)
                    }
                }
            }
            return o.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, i, o;
            if (typeof t === "string") {
                n = e[t];
                t = e;
                e = n
            }
            if (!d.isFunction(e)) {
                return undefined
            }
            i = r.call(arguments, 2);
            o = function() {
                return e.apply(t || this, i.concat(r.call(arguments)))
            };
            o.guid = e.guid = e.guid || d.guid++;
            return o
        },
        now: Date.now,
        support: c
    });
    if (typeof Symbol === "function") {
        d.fn[Symbol.iterator] = n[Symbol.iterator]
    }
    d.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        u["[object " + t + "]"] = t.toLowerCase()
    });

    function v(e) {
        var t = !!e && "length" in e && e.length,
            n = d.type(e);
        if (n === "function" || d.isWindow(e)) {
            return false
        }
        return n === "array" || t === 0 || typeof t === "number" && t > 0 && t - 1 in e
    }
    var x = function(e) {
        var t, n, i, r, o, s, a, u, f, l, c, p, d, h, g, m, y, v, x, b = "sizzle" + 1 * new Date,
            w = e.document,
            T = 0,
            C = 0,
            k = st(),
            S = st(),
            E = st(),
            N = function(e, t) {
                if (e === t) {
                    c = true
                }
                return 0
            },
            D = 1 << 31,
            A = {}.hasOwnProperty,
            j = [],
            L = j.pop,
            P = j.push,
            O = j.push,
            q = j.slice,
            H = function(e, t) {
                var n = 0,
                    i = e.length;
                for (; n < i; n++) {
                    if (e[n] === t) {
                        return n
                    }
                }
                return -1
            },
            M = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            F = "[\\x20\\t\\r\\n\\f]",
            I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            R = "\\[" + F + "*(" + I + ")(?:" + F + "*([*^$|!~]?=)" + F + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + F + "*\\]",
            B = ":(" + I + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|" + ".*" + ")\\)|)",
            $ = new RegExp(F + "+", "g"),
            W = new RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
            _ = new RegExp("^" + F + "*," + F + "*"),
            z = new RegExp("^" + F + "*([>+~]|" + F + ")" + F + "*"),
            X = new RegExp("=" + F + "*([^\\]'\"]*?)" + F + "*\\]", "g"),
            U = new RegExp(B),
            G = new RegExp("^" + I + "$"),
            V = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + R),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F + "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F + "*(\\d+)|))" + F + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + M + ")$", "i"),
                needsContext: new RegExp("^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F + "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)", "i")
            },
            Y = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            K = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            Z = /[+~]/,
            et = /'|\\/g,
            tt = new RegExp("\\\\([\\da-f]{1,6}" + F + "?|(" + F + ")|.)", "ig"),
            nt = function(e, t, n) {
                var i = "0x" + t - 65536;
                return i !== i || n ? t : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, i & 1023 | 56320)
            },
            it = function() {
                p()
            };
        try {
            O.apply(j = q.call(w.childNodes), w.childNodes);
            j[w.childNodes.length].nodeType
        } catch (rt) {
            O = {
                apply: j.length ? function(e, t) {
                    P.apply(e, q.call(t))
                } : function(e, t) {
                    var n = e.length,
                        i = 0;
                    while (e[n++] = t[i++]) {}
                    e.length = n - 1
                }
            }
        }

        function ot(e, t, i, r) {
            var o, a, f, l, c, h, y, v, T = t && t.ownerDocument,
                C = t ? t.nodeType : 9;
            i = i || [];
            if (typeof e !== "string" || !e || C !== 1 && C !== 9 && C !== 11) {
                return i
            }
            if (!r) {
                if ((t ? t.ownerDocument || t : w) !== d) {
                    p(t)
                }
                t = t || d;
                if (g) {
                    if (C !== 11 && (h = K.exec(e))) {
                        if (o = h[1]) {
                            if (C === 9) {
                                if (f = t.getElementById(o)) {
                                    if (f.id === o) {
                                        i.push(f);
                                        return i
                                    }
                                } else {
                                    return i
                                }
                            } else {
                                if (T && (f = T.getElementById(o)) && x(t, f) && f.id === o) {
                                    i.push(f);
                                    return i
                                }
                            }
                        } else if (h[2]) {
                            O.apply(i, t.getElementsByTagName(e));
                            return i
                        } else if ((o = h[3]) && n.getElementsByClassName && t.getElementsByClassName) {
                            O.apply(i, t.getElementsByClassName(o));
                            return i
                        }
                    }
                    if (n.qsa && !E[e + " "] && (!m || !m.test(e))) {
                        if (C !== 1) {
                            T = t;
                            v = e
                        } else if (t.nodeName.toLowerCase() !== "object") {
                            if (l = t.getAttribute("id")) {
                                l = l.replace(et, "\\$&")
                            } else {
                                t.setAttribute("id", l = b)
                            }
                            y = s(e);
                            a = y.length;
                            c = G.test(l) ? "#" + l : "[id='" + l + "']";
                            while (a--) {
                                y[a] = c + " " + mt(y[a])
                            }
                            v = y.join(",");
                            T = Z.test(e) && ht(t.parentNode) || t
                        }
                        if (v) {
                            try {
                                O.apply(i, T.querySelectorAll(v));
                                return i
                            } catch (k) {} finally {
                                if (l === b) {
                                    t.removeAttribute("id")
                                }
                            }
                        }
                    }
                }
            }
            return u(e.replace(W, "$1"), t, i, r)
        }

        function st() {
            var e = [];

            function t(n, r) {
                if (e.push(n + " ") > i.cacheLength) {
                    delete t[e.shift()]
                }
                return t[n + " "] = r
            }
            return t
        }

        function at(e) {
            e[b] = true;
            return e
        }

        function ut(e) {
            var t = d.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return false
            } finally {
                if (t.parentNode) {
                    t.parentNode.removeChild(t)
                }
                t = null
            }
        }

        function ft(e, t) {
            var n = e.split("|"),
                r = n.length;
            while (r--) {
                i.attrHandle[n[r]] = t
            }
        }

        function lt(e, t) {
            var n = t && e,
                i = n && e.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (i) {
                return i
            }
            if (n) {
                while (n = n.nextSibling) {
                    if (n === t) {
                        return -1
                    }
                }
            }
            return e ? 1 : -1
        }

        function ct(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return n === "input" && t.type === e
            }
        }

        function pt(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return (n === "input" || n === "button") && t.type === e
            }
        }

        function dt(e) {
            return at(function(t) {
                t = +t;
                return at(function(n, i) {
                    var r, o = e([], n.length, t),
                        s = o.length;
                    while (s--) {
                        if (n[r = o[s]]) {
                            n[r] = !(i[r] = n[r])
                        }
                    }
                })
            })
        }

        function ht(e) {
            return e && typeof e.getElementsByTagName !== "undefined" && e
        }
        n = ot.support = {};
        o = ot.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? t.nodeName !== "HTML" : false
        };
        p = ot.setDocument = function(e) {
            var t, r, s = e ? e.ownerDocument || e : w;
            if (s === d || s.nodeType !== 9 || !s.documentElement) {
                return d
            }
            d = s;
            h = d.documentElement;
            g = !o(d);
            if ((r = d.defaultView) && r.top !== r) {
                if (r.addEventListener) {
                    r.addEventListener("unload", it, false)
                } else if (r.attachEvent) {
                    r.attachEvent("onunload", it)
                }
            }
            n.attributes = ut(function(e) {
                e.className = "i";
                return !e.getAttribute("className")
            });
            n.getElementsByTagName = ut(function(e) {
                e.appendChild(d.createComment(""));
                return !e.getElementsByTagName("*").length
            });
            n.getElementsByClassName = J.test(d.getElementsByClassName);
            n.getById = ut(function(e) {
                h.appendChild(e).id = b;
                return !d.getElementsByName || !d.getElementsByName(b).length
            });
            if (n.getById) {
                i.find["ID"] = function(e, t) {
                    if (typeof t.getElementById !== "undefined" && g) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                };
                i.filter["ID"] = function(e) {
                    var t = e.replace(tt, nt);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
            } else {
                delete i.find["ID"];
                i.filter["ID"] = function(e) {
                    var t = e.replace(tt, nt);
                    return function(e) {
                        var n = typeof e.getAttributeNode !== "undefined" && e.getAttributeNode("id");
                        return n && n.value === t
                    }
                }
            }
            i.find["TAG"] = n.getElementsByTagName ? function(e, t) {
                if (typeof t.getElementsByTagName !== "undefined") {
                    return t.getElementsByTagName(e)
                } else if (n.qsa) {
                    return t.querySelectorAll(e)
                }
            } : function(e, t) {
                var n, i = [],
                    r = 0,
                    o = t.getElementsByTagName(e);
                if (e === "*") {
                    while (n = o[r++]) {
                        if (n.nodeType === 1) {
                            i.push(n)
                        }
                    }
                    return i
                }
                return o
            };
            i.find["CLASS"] = n.getElementsByClassName && function(e, t) {
                if (typeof t.getElementsByClassName !== "undefined" && g) {
                    return t.getElementsByClassName(e)
                }
            };
            y = [];
            m = [];
            if (n.qsa = J.test(d.querySelectorAll)) {
                ut(function(e) {
                    h.appendChild(e).innerHTML = "<a id='" + b + "'></a>" + "<select id='" + b + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>";
                    if (e.querySelectorAll("[msallowcapture^='']").length) {
                        m.push("[*^$]=" + F + "*(?:''|\"\")")
                    }
                    if (!e.querySelectorAll("[selected]").length) {
                        m.push("\\[" + F + "*(?:value|" + M + ")")
                    }
                    if (!e.querySelectorAll("[id~=" + b + "-]").length) {
                        m.push("~=")
                    }
                    if (!e.querySelectorAll(":checked").length) {
                        m.push(":checked")
                    }
                    if (!e.querySelectorAll("a#" + b + "+*").length) {
                        m.push(".#.+[+~]")
                    }
                });
                ut(function(e) {
                    var t = d.createElement("input");
                    t.setAttribute("type", "hidden");
                    e.appendChild(t).setAttribute("name", "D");
                    if (e.querySelectorAll("[name=d]").length) {
                        m.push("name" + F + "*[*^$|!~]?=")
                    }
                    if (!e.querySelectorAll(":enabled").length) {
                        m.push(":enabled", ":disabled")
                    }
                    e.querySelectorAll("*,:x");
                    m.push(",.*:")
                })
            }
            if (n.matchesSelector = J.test(v = h.matches || h.webkitMatchesSelector || h.mozMatchesSelector || h.oMatchesSelector || h.msMatchesSelector)) {
                ut(function(e) {
                    n.disconnectedMatch = v.call(e, "div");
                    v.call(e, "[s!='']:x");
                    y.push("!=", B)
                })
            }
            m = m.length && new RegExp(m.join("|"));
            y = y.length && new RegExp(y.join("|"));
            t = J.test(h.compareDocumentPosition);
            x = t || J.test(h.contains) ? function(e, t) {
                var n = e.nodeType === 9 ? e.documentElement : e,
                    i = t && t.parentNode;
                return e === i || !!(i && i.nodeType === 1 && (n.contains ? n.contains(i) : e.compareDocumentPosition && e.compareDocumentPosition(i) & 16))
            } : function(e, t) {
                if (t) {
                    while (t = t.parentNode) {
                        if (t === e) {
                            return true
                        }
                    }
                }
                return false
            };
            N = t ? function(e, t) {
                if (e === t) {
                    c = true;
                    return 0
                }
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                if (i) {
                    return i
                }
                i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1;
                if (i & 1 || !n.sortDetached && t.compareDocumentPosition(e) === i) {
                    if (e === d || e.ownerDocument === w && x(w, e)) {
                        return -1
                    }
                    if (t === d || t.ownerDocument === w && x(w, t)) {
                        return 1
                    }
                    return l ? H(l, e) - H(l, t) : 0
                }
                return i & 4 ? -1 : 1
            } : function(e, t) {
                if (e === t) {
                    c = true;
                    return 0
                }
                var n, i = 0,
                    r = e.parentNode,
                    o = t.parentNode,
                    s = [e],
                    a = [t];
                if (!r || !o) {
                    return e === d ? -1 : t === d ? 1 : r ? -1 : o ? 1 : l ? H(l, e) - H(l, t) : 0
                } else if (r === o) {
                    return lt(e, t)
                }
                n = e;
                while (n = n.parentNode) {
                    s.unshift(n)
                }
                n = t;
                while (n = n.parentNode) {
                    a.unshift(n)
                }
                while (s[i] === a[i]) {
                    i++
                }
                return i ? lt(s[i], a[i]) : s[i] === w ? -1 : a[i] === w ? 1 : 0
            };
            return d
        };
        ot.matches = function(e, t) {
            return ot(e, null, null, t)
        };
        ot.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== d) {
                p(e)
            }
            t = t.replace(X, "='$1']");
            if (n.matchesSelector && g && !E[t + " "] && (!y || !y.test(t)) && (!m || !m.test(t))) {
                try {
                    var i = v.call(e, t);
                    if (i || n.disconnectedMatch || e.document && e.document.nodeType !== 11) {
                        return i
                    }
                } catch (r) {}
            }
            return ot(t, d, null, [e]).length > 0
        };
        ot.contains = function(e, t) {
            if ((e.ownerDocument || e) !== d) {
                p(e)
            }
            return x(e, t)
        };
        ot.attr = function(e, t) {
            if ((e.ownerDocument || e) !== d) {
                p(e)
            }
            var r = i.attrHandle[t.toLowerCase()],
                o = r && A.call(i.attrHandle, t.toLowerCase()) ? r(e, t, !g) : undefined;
            return o !== undefined ? o : n.attributes || !g ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null
        };
        ot.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        };
        ot.uniqueSort = function(e) {
            var t, i = [],
                r = 0,
                o = 0;
            c = !n.detectDuplicates;
            l = !n.sortStable && e.slice(0);
            e.sort(N);
            if (c) {
                while (t = e[o++]) {
                    if (t === e[o]) {
                        r = i.push(o)
                    }
                }
                while (r--) {
                    e.splice(i[r], 1)
                }
            }
            l = null;
            return e
        };
        r = ot.getText = function(e) {
            var t, n = "",
                i = 0,
                o = e.nodeType;
            if (!o) {
                while (t = e[i++]) {
                    n += r(t)
                }
            } else if (o === 1 || o === 9 || o === 11) {
                if (typeof e.textContent === "string") {
                    return e.textContent
                } else {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        n += r(e)
                    }
                }
            } else if (o === 3 || o === 4) {
                return e.nodeValue
            }
            return n
        };
        i = ot.selectors = {
            cacheLength: 50,
            createPseudo: at,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: true
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: true
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    e[1] = e[1].replace(tt, nt);
                    e[3] = (e[3] || e[4] || e[5] || "").replace(tt, nt);
                    if (e[2] === "~=") {
                        e[3] = " " + e[3] + " "
                    }
                    return e.slice(0, 4)
                },
                CHILD: function(e) {
                    e[1] = e[1].toLowerCase();
                    if (e[1].slice(0, 3) === "nth") {
                        if (!e[3]) {
                            ot.error(e[0])
                        }
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * (e[3] === "even" || e[3] === "odd"));
                        e[5] = +(e[7] + e[8] || e[3] === "odd")
                    } else if (e[3]) {
                        ot.error(e[0])
                    }
                    return e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    if (V["CHILD"].test(e[0])) {
                        return null
                    }
                    if (e[3]) {
                        e[2] = e[4] || e[5] || ""
                    } else if (n && U.test(n) && (t = s(n, true)) && (t = n.indexOf(")", n.length - t) - n.length)) {
                        e[0] = e[0].slice(0, t);
                        e[2] = n.slice(0, t)
                    }
                    return e.slice(0, 3)
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(tt, nt).toLowerCase();
                    return e === "*" ? function() {
                        return true
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = k[e + " "];
                    return t || (t = new RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) && k(e, function(e) {
                        return t.test(typeof e.className === "string" && e.className || typeof e.getAttribute !== "undefined" && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, n) {
                    return function(i) {
                        var r = ot.attr(i, e);
                        if (r == null) {
                            return t === "!="
                        }
                        if (!t) {
                            return true
                        }
                        r += "";
                        return t === "=" ? r === n : t === "!=" ? r !== n : t === "^=" ? n && r.indexOf(n) === 0 : t === "*=" ? n && r.indexOf(n) > -1 : t === "$=" ? n && r.slice(-n.length) === n : t === "~=" ? (" " + r.replace($, " ") + " ").indexOf(n) > -1 : t === "|=" ? r === n || r.slice(0, n.length + 1) === n + "-" : false
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = e.slice(0, 3) !== "nth",
                        s = e.slice(-4) !== "last",
                        a = t === "of-type";
                    return i === 1 && r === 0 ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, u) {
                        var f, l, c, p, d, h, g = o !== s ? "nextSibling" : "previousSibling",
                            m = t.parentNode,
                            y = a && t.nodeName.toLowerCase(),
                            v = !u && !a,
                            x = false;
                        if (m) {
                            if (o) {
                                while (g) {
                                    p = t;
                                    while (p = p[g]) {
                                        if (a ? p.nodeName.toLowerCase() === y : p.nodeType === 1) {
                                            return false
                                        }
                                    }
                                    h = g = e === "only" && !h && "nextSibling"
                                }
                                return true
                            }
                            h = [s ? m.firstChild : m.lastChild];
                            if (s && v) {
                                p = m;
                                c = p[b] || (p[b] = {});
                                l = c[p.uniqueID] || (c[p.uniqueID] = {});
                                f = l[e] || [];
                                d = f[0] === T && f[1];
                                x = d && f[2];
                                p = d && m.childNodes[d];
                                while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                    if (p.nodeType === 1 && ++x && p === t) {
                                        l[e] = [T, d, x];
                                        break
                                    }
                                }
                            } else {
                                if (v) {
                                    p = t;
                                    c = p[b] || (p[b] = {});
                                    l = c[p.uniqueID] || (c[p.uniqueID] = {});
                                    f = l[e] || [];
                                    d = f[0] === T && f[1];
                                    x = d
                                }
                                if (x === false) {
                                    while (p = ++d && p && p[g] || (x = d = 0) || h.pop()) {
                                        if ((a ? p.nodeName.toLowerCase() === y : p.nodeType === 1) && ++x) {
                                            if (v) {
                                                c = p[b] || (p[b] = {});
                                                l = c[p.uniqueID] || (c[p.uniqueID] = {});
                                                l[e] = [T, x]
                                            }
                                            if (p === t) {
                                                break
                                            }
                                        }
                                    }
                                }
                            }
                            x -= r;
                            return x === i || x % i === 0 && x / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var n, r = i.pseudos[e] || i.setFilters[e.toLowerCase()] || ot.error("unsupported pseudo: " + e);
                    if (r[b]) {
                        return r(t)
                    }
                    if (r.length > 1) {
                        n = [e, e, "", t];
                        return i.setFilters.hasOwnProperty(e.toLowerCase()) ? at(function(e, n) {
                            var i, o = r(e, t),
                                s = o.length;
                            while (s--) {
                                i = H(e, o[s]);
                                e[i] = !(n[i] = o[s])
                            }
                        }) : function(e) {
                            return r(e, 0, n)
                        }
                    }
                    return r
                }
            },
            pseudos: {
                not: at(function(e) {
                    var t = [],
                        n = [],
                        i = a(e.replace(W, "$1"));
                    return i[b] ? at(function(e, t, n, r) {
                        var o, s = i(e, null, r, []),
                            a = e.length;
                        while (a--) {
                            if (o = s[a]) {
                                e[a] = !(t[a] = o)
                            }
                        }
                    }) : function(e, r, o) {
                        t[0] = e;
                        i(t, null, o, n);
                        t[0] = null;
                        return !n.pop()
                    }
                }),
                has: at(function(e) {
                    return function(t) {
                        return ot(e, t).length > 0
                    }
                }),
                contains: at(function(e) {
                    e = e.replace(tt, nt);
                    return function(t) {
                        return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
                    }
                }),
                lang: at(function(e) {
                    if (!G.test(e || "")) {
                        ot.error("unsupported lang: " + e)
                    }
                    e = e.replace(tt, nt).toLowerCase();
                    return function(t) {
                        var n;
                        do {
                            if (n = g ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) {
                                n = n.toLowerCase();
                                return n === e || n.indexOf(e + "-") === 0
                            }
                        } while ((t = t.parentNode) && t.nodeType === 1);
                        return false
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === h
                },
                focus: function(e) {
                    return e === d.activeElement && (!d.hasFocus || d.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === false
                },
                disabled: function(e) {
                    return e.disabled === true
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && !!e.checked || t === "option" && !!e.selected
                },
                selected: function(e) {
                    if (e.parentNode) {
                        e.parentNode.selectedIndex
                    }
                    return e.selected === true
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) {
                        if (e.nodeType < 6) {
                            return false
                        }
                    }
                    return true
                },
                parent: function(e) {
                    return !i.pseudos["empty"](e)
                },
                header: function(e) {
                    return Q.test(e.nodeName)
                },
                input: function(e) {
                    return Y.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return t === "input" && e.type === "button" || t === "button"
                },
                text: function(e) {
                    var t;
                    return e.nodeName.toLowerCase() === "input" && e.type === "text" && ((t = e.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: dt(function() {
                    return [0]
                }),
                last: dt(function(e, t) {
                    return [t - 1]
                }),
                eq: dt(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: dt(function(e, t) {
                    var n = 0;
                    for (; n < t; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                odd: dt(function(e, t) {
                    var n = 1;
                    for (; n < t; n += 2) {
                        e.push(n)
                    }
                    return e
                }),
                lt: dt(function(e, t, n) {
                    var i = n < 0 ? n + t : n;
                    for (; --i >= 0;) {
                        e.push(i)
                    }
                    return e
                }),
                gt: dt(function(e, t, n) {
                    var i = n < 0 ? n + t : n;
                    for (; ++i < t;) {
                        e.push(i)
                    }
                    return e
                })
            }
        };
        i.pseudos["nth"] = i.pseudos["eq"];
        for (t in {
                radio: true,
                checkbox: true,
                file: true,
                password: true,
                image: true
            }) {
            i.pseudos[t] = ct(t)
        }
        for (t in {
                submit: true,
                reset: true
            }) {
            i.pseudos[t] = pt(t)
        }

        function gt() {}
        gt.prototype = i.filters = i.pseudos;
        i.setFilters = new gt;
        s = ot.tokenize = function(e, t) {
            var n, r, o, s, a, u, f, l = S[e + " "];
            if (l) {
                return t ? 0 : l.slice(0)
            }
            a = e;
            u = [];
            f = i.preFilter;
            while (a) {
                if (!n || (r = _.exec(a))) {
                    if (r) {
                        a = a.slice(r[0].length) || a
                    }
                    u.push(o = [])
                }
                n = false;
                if (r = z.exec(a)) {
                    n = r.shift();
                    o.push({
                        value: n,
                        type: r[0].replace(W, " ")
                    });
                    a = a.slice(n.length)
                }
                for (s in i.filter) {
                    if ((r = V[s].exec(a)) && (!f[s] || (r = f[s](r)))) {
                        n = r.shift();
                        o.push({
                            value: n,
                            type: s,
                            matches: r
                        });
                        a = a.slice(n.length)
                    }
                }
                if (!n) {
                    break
                }
            }
            return t ? a.length : a ? ot.error(e) : S(e, u).slice(0)
        };

        function mt(e) {
            var t = 0,
                n = e.length,
                i = "";
            for (; t < n; t++) {
                i += e[t].value
            }
            return i
        }

        function yt(e, t, n) {
            var i = t.dir,
                r = n && i === "parentNode",
                o = C++;
            return t.first ? function(t, n, o) {
                while (t = t[i]) {
                    if (t.nodeType === 1 || r) {
                        return e(t, n, o)
                    }
                }
            } : function(t, n, s) {
                var a, u, f, l = [T, o];
                if (s) {
                    while (t = t[i]) {
                        if (t.nodeType === 1 || r) {
                            if (e(t, n, s)) {
                                return true
                            }
                        }
                    }
                } else {
                    while (t = t[i]) {
                        if (t.nodeType === 1 || r) {
                            f = t[b] || (t[b] = {});
                            u = f[t.uniqueID] || (f[t.uniqueID] = {});
                            if ((a = u[i]) && a[0] === T && a[1] === o) {
                                return l[2] = a[2]
                            } else {
                                u[i] = l;
                                if (l[2] = e(t, n, s)) {
                                    return true
                                }
                            }
                        }
                    }
                }
            }
        }

        function vt(e) {
            return e.length > 1 ? function(t, n, i) {
                var r = e.length;
                while (r--) {
                    if (!e[r](t, n, i)) {
                        return false
                    }
                }
                return true
            } : e[0]
        }

        function xt(e, t, n) {
            var i = 0,
                r = t.length;
            for (; i < r; i++) {
                ot(e, t[i], n)
            }
            return n
        }

        function bt(e, t, n, i, r) {
            var o, s = [],
                a = 0,
                u = e.length,
                f = t != null;
            for (; a < u; a++) {
                if (o = e[a]) {
                    if (!n || n(o, i, r)) {
                        s.push(o);
                        if (f) {
                            t.push(a)
                        }
                    }
                }
            }
            return s
        }

        function wt(e, t, n, i, r, o) {
            if (i && !i[b]) {
                i = wt(i)
            }
            if (r && !r[b]) {
                r = wt(r, o)
            }
            return at(function(o, s, a, u) {
                var f, l, c, p = [],
                    d = [],
                    h = s.length,
                    g = o || xt(t || "*", a.nodeType ? [a] : a, []),
                    m = e && (o || !t) ? bt(g, p, e, a, u) : g,
                    y = n ? r || (o ? e : h || i) ? [] : s : m;
                if (n) {
                    n(m, y, a, u)
                }
                if (i) {
                    f = bt(y, d);
                    i(f, [], a, u);
                    l = f.length;
                    while (l--) {
                        if (c = f[l]) {
                            y[d[l]] = !(m[d[l]] = c)
                        }
                    }
                }
                if (o) {
                    if (r || e) {
                        if (r) {
                            f = [];
                            l = y.length;
                            while (l--) {
                                if (c = y[l]) {
                                    f.push(m[l] = c)
                                }
                            }
                            r(null, y = [], f, u)
                        }
                        l = y.length;
                        while (l--) {
                            if ((c = y[l]) && (f = r ? H(o, c) : p[l]) > -1) {
                                o[f] = !(s[f] = c)
                            }
                        }
                    }
                } else {
                    y = bt(y === s ? y.splice(h, y.length) : y);
                    if (r) {
                        r(null, s, y, u)
                    } else {
                        O.apply(s, y)
                    }
                }
            })
        }

        function Tt(e) {
            var t, n, r, o = e.length,
                s = i.relative[e[0].type],
                a = s || i.relative[" "],
                u = s ? 1 : 0,
                l = yt(function(e) {
                    return e === t
                }, a, true),
                c = yt(function(e) {
                    return H(t, e) > -1
                }, a, true),
                p = [function(e, n, i) {
                    var r = !s && (i || n !== f) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                    t = null;
                    return r
                }];
            for (; u < o; u++) {
                if (n = i.relative[e[u].type]) {
                    p = [yt(vt(p), n)]
                } else {
                    n = i.filter[e[u].type].apply(null, e[u].matches);
                    if (n[b]) {
                        r = ++u;
                        for (; r < o; r++) {
                            if (i.relative[e[r].type]) {
                                break
                            }
                        }
                        return wt(u > 1 && vt(p), u > 1 && mt(e.slice(0, u - 1).concat({
                            value: e[u - 2].type === " " ? "*" : ""
                        })).replace(W, "$1"), n, u < r && Tt(e.slice(u, r)), r < o && Tt(e = e.slice(r)), r < o && mt(e))
                    }
                    p.push(n)
                }
            }
            return vt(p)
        }

        function Ct(e, t) {
            var n = t.length > 0,
                r = e.length > 0,
                o = function(o, s, a, u, l) {
                    var c, h, m, y = 0,
                        v = "0",
                        x = o && [],
                        b = [],
                        w = f,
                        C = o || r && i.find["TAG"]("*", l),
                        k = T += w == null ? 1 : Math.random() || .1,
                        S = C.length;
                    if (l) {
                        f = s === d || s || l
                    }
                    for (; v !== S && (c = C[v]) != null; v++) {
                        if (r && c) {
                            h = 0;
                            if (!s && c.ownerDocument !== d) {
                                p(c);
                                a = !g
                            }
                            while (m = e[h++]) {
                                if (m(c, s || d, a)) {
                                    u.push(c);
                                    break
                                }
                            }
                            if (l) {
                                T = k
                            }
                        }
                        if (n) {
                            if (c = !m && c) {
                                y--
                            }
                            if (o) {
                                x.push(c)
                            }
                        }
                    }
                    y += v;
                    if (n && v !== y) {
                        h = 0;
                        while (m = t[h++]) {
                            m(x, b, s, a)
                        }
                        if (o) {
                            if (y > 0) {
                                while (v--) {
                                    if (!(x[v] || b[v])) {
                                        b[v] = L.call(u)
                                    }
                                }
                            }
                            b = bt(b)
                        }
                        O.apply(u, b);
                        if (l && !o && b.length > 0 && y + t.length > 1) {
                            ot.uniqueSort(u)
                        }
                    }
                    if (l) {
                        T = k;
                        f = w
                    }
                    return x
                };
            return n ? at(o) : o
        }
        a = ot.compile = function(e, t) {
            var n, i = [],
                r = [],
                o = E[e + " "];
            if (!o) {
                if (!t) {
                    t = s(e)
                }
                n = t.length;
                while (n--) {
                    o = Tt(t[n]);
                    if (o[b]) {
                        i.push(o)
                    } else {
                        r.push(o)
                    }
                }
                o = E(e, Ct(r, i));
                o.selector = e
            }
            return o
        };
        u = ot.select = function(e, t, r, o) {
            var u, f, l, c, p, d = typeof e === "function" && e,
                h = !o && s(e = d.selector || e);
            r = r || [];
            if (h.length === 1) {
                f = h[0] = h[0].slice(0);
                if (f.length > 2 && (l = f[0]).type === "ID" && n.getById && t.nodeType === 9 && g && i.relative[f[1].type]) {
                    t = (i.find["ID"](l.matches[0].replace(tt, nt), t) || [])[0];
                    if (!t) {
                        return r
                    } else if (d) {
                        t = t.parentNode
                    }
                    e = e.slice(f.shift().value.length)
                }
                u = V["needsContext"].test(e) ? 0 : f.length;
                while (u--) {
                    l = f[u];
                    if (i.relative[c = l.type]) {
                        break
                    }
                    if (p = i.find[c]) {
                        if (o = p(l.matches[0].replace(tt, nt), Z.test(f[0].type) && ht(t.parentNode) || t)) {
                            f.splice(u, 1);
                            e = o.length && mt(f);
                            if (!e) {
                                O.apply(r, o);
                                return r
                            }
                            break
                        }
                    }
                }
            }(d || a(e, h))(o, t, !g, r, !t || Z.test(e) && ht(t.parentNode) || t);
            return r
        };
        n.sortStable = b.split("").sort(N).join("") === b;
        n.detectDuplicates = !!c;
        p();
        n.sortDetached = ut(function(e) {
            return e.compareDocumentPosition(d.createElement("div")) & 1
        });
        if (!ut(function(e) {
                e.innerHTML = "<a href='#'></a>";
                return e.firstChild.getAttribute("href") === "#"
            })) {
            ft("type|href|height|width", function(e, t, n) {
                if (!n) {
                    return e.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
                }
            })
        }
        if (!n.attributes || !ut(function(e) {
                e.innerHTML = "<input/>";
                e.firstChild.setAttribute("value", "");
                return e.firstChild.getAttribute("value") === ""
            })) {
            ft("value", function(e, t, n) {
                if (!n && e.nodeName.toLowerCase() === "input") {
                    return e.defaultValue
                }
            })
        }
        if (!ut(function(e) {
                return e.getAttribute("disabled") == null
            })) {
            ft(M, function(e, t, n) {
                var i;
                if (!n) {
                    return e[t] === true ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
                }
            })
        }
        return ot
    }(e);
    d.find = x;
    d.expr = x.selectors;
    d.expr[":"] = d.expr.pseudos;
    d.uniqueSort = d.unique = x.uniqueSort;
    d.text = x.getText;
    d.isXMLDoc = x.isXML;
    d.contains = x.contains;
    var b = function(e, t, n) {
        var i = [],
            r = n !== undefined;
        while ((e = e[t]) && e.nodeType !== 9) {
            if (e.nodeType === 1) {
                if (r && d(e).is(n)) {
                    break
                }
                i.push(e)
            }
        }
        return i
    };
    var w = function(e, t) {
        var n = [];
        for (; e; e = e.nextSibling) {
            if (e.nodeType === 1 && e !== t) {
                n.push(e)
            }
        }
        return n
    };
    var T = d.expr.match.needsContext;
    var C = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/;
    var k = /^.[^:#\[\.,]*$/;

    function S(e, t, n) {
        if (d.isFunction(t)) {
            return d.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            })
        }
        if (t.nodeType) {
            return d.grep(e, function(e) {
                return e === t !== n
            })
        }
        if (typeof t === "string") {
            if (k.test(t)) {
                return d.filter(t, e, n)
            }
            t = d.filter(t, e)
        }
        return d.grep(e, function(e) {
            return a.call(t, e) > -1 !== n
        })
    }
    d.filter = function(e, t, n) {
        var i = t[0];
        if (n) {
            e = ":not(" + e + ")"
        }
        return t.length === 1 && i.nodeType === 1 ? d.find.matchesSelector(i, e) ? [i] : [] : d.find.matches(e, d.grep(t, function(e) {
            return e.nodeType === 1
        }))
    };
    d.fn.extend({
        find: function(e) {
            var t, n = this.length,
                i = [],
                r = this;
            if (typeof e !== "string") {
                return this.pushStack(d(e).filter(function() {
                    for (t = 0; t < n; t++) {
                        if (d.contains(r[t], this)) {
                            return true
                        }
                    }
                }))
            }
            for (t = 0; t < n; t++) {
                d.find(e, r[t], i)
            }
            i = this.pushStack(n > 1 ? d.unique(i) : i);
            i.selector = this.selector ? this.selector + " " + e : e;
            return i
        },
        filter: function(e) {
            return this.pushStack(S(this, e || [], false))
        },
        not: function(e) {
            return this.pushStack(S(this, e || [], true))
        },
        is: function(e) {
            return !!S(this, typeof e === "string" && T.test(e) ? d(e) : e || [], false).length
        }
    });
    var E, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        D = d.fn.init = function(e, t, n) {
            var r, o;
            if (!e) {
                return this
            }
            n = n || E;
            if (typeof e === "string") {
                if (e[0] === "<" && e[e.length - 1] === ">" && e.length >= 3) {
                    r = [null, e, null]
                } else {
                    r = N.exec(e)
                }
                if (r && (r[1] || !t)) {
                    if (r[1]) {
                        t = t instanceof d ? t[0] : t;
                        d.merge(this, d.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : i, true));
                        if (C.test(r[1]) && d.isPlainObject(t)) {
                            for (r in t) {
                                if (d.isFunction(this[r])) {
                                    this[r](t[r])
                                } else {
                                    this.attr(r, t[r])
                                }
                            }
                        }
                        return this
                    } else {
                        o = i.getElementById(r[2]);
                        if (o && o.parentNode) {
                            this.length = 1;
                            this[0] = o
                        }
                        this.context = i;
                        this.selector = e;
                        return this
                    }
                } else if (!t || t.jquery) {
                    return (t || n).find(e)
                } else {
                    return this.constructor(t).find(e)
                }
            } else if (e.nodeType) {
                this.context = this[0] = e;
                this.length = 1;
                return this
            } else if (d.isFunction(e)) {
                return n.ready !== undefined ? n.ready(e) : e(d)
            }
            if (e.selector !== undefined) {
                this.selector = e.selector;
                this.context = e.context
            }
            return d.makeArray(e, this)
        };
    D.prototype = d.fn;
    E = d(i);
    var A = /^(?:parents|prev(?:Until|All))/,
        j = {
            children: true,
            contents: true,
            next: true,
            prev: true
        };
    d.fn.extend({
        has: function(e) {
            var t = d(e, this),
                n = t.length;
            return this.filter(function() {
                var e = 0;
                for (; e < n; e++) {
                    if (d.contains(this, t[e])) {
                        return true
                    }
                }
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                o = [],
                s = T.test(e) || typeof e !== "string" ? d(e, t || this.context) : 0;
            for (; i < r; i++) {
                for (n = this[i]; n && n !== t; n = n.parentNode) {
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : n.nodeType === 1 && d.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
                }
            }
            return this.pushStack(o.length > 1 ? d.uniqueSort(o) : o)
        },
        index: function(e) {
            if (!e) {
                return this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }
            if (typeof e === "string") {
                return a.call(d(e), this[0])
            }
            return a.call(this, e.jquery ? e[0] : e)
        },
        add: function(e, t) {
            return this.pushStack(d.uniqueSort(d.merge(this.get(), d(e, t))))
        },
        addBack: function(e) {
            return this.add(e == null ? this.prevObject : this.prevObject.filter(e))
        }
    });

    function L(e, t) {
        while ((e = e[t]) && e.nodeType !== 1) {}
        return e
    }
    d.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(e) {
            return b(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return b(e, "parentNode", n)
        },
        next: function(e) {
            return L(e, "nextSibling")
        },
        prev: function(e) {
            return L(e, "previousSibling")
        },
        nextAll: function(e) {
            return b(e, "nextSibling")
        },
        prevAll: function(e) {
            return b(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return b(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return b(e, "previousSibling", n)
        },
        siblings: function(e) {
            return w((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return w(e.firstChild)
        },
        contents: function(e) {
            return e.contentDocument || d.merge([], e.childNodes)
        }
    }, function(e, t) {
        d.fn[e] = function(n, i) {
            var r = d.map(this, t, n);
            if (e.slice(-5) !== "Until") {
                i = n
            }
            if (i && typeof i === "string") {
                r = d.filter(i, r)
            }
            if (this.length > 1) {
                if (!j[e]) {
                    d.uniqueSort(r)
                }
                if (A.test(e)) {
                    r.reverse()
                }
            }
            return this.pushStack(r)
        }
    });
    var P = /\S+/g;

    function O(e) {
        var t = {};
        d.each(e.match(P) || [], function(e, n) {
            t[n] = true
        });
        return t
    }
    d.Callbacks = function(e) {
        e = typeof e === "string" ? O(e) : d.extend({}, e);
        var t, n, i, r, o = [],
            s = [],
            a = -1,
            u = function() {
                r = e.once;
                i = t = true;
                for (; s.length; a = -1) {
                    n = s.shift();
                    while (++a < o.length) {
                        if (o[a].apply(n[0], n[1]) === false && e.stopOnFalse) {
                            a = o.length;
                            n = false
                        }
                    }
                }
                if (!e.memory) {
                    n = false
                }
                t = false;
                if (r) {
                    if (n) {
                        o = []
                    } else {
                        o = ""
                    }
                }
            },
            f = {
                add: function() {
                    if (o) {
                        if (n && !t) {
                            a = o.length - 1;
                            s.push(n)
                        }(function i(t) {
                            d.each(t, function(t, n) {
                                if (d.isFunction(n)) {
                                    if (!e.unique || !f.has(n)) {
                                        o.push(n)
                                    }
                                } else if (n && n.length && d.type(n) !== "string") {
                                    i(n)
                                }
                            })
                        })(arguments);
                        if (n && !t) {
                            u()
                        }
                    }
                    return this
                },
                remove: function() {
                    d.each(arguments, function(e, t) {
                        var n;
                        while ((n = d.inArray(t, o, n)) > -1) {
                            o.splice(n, 1);
                            if (n <= a) {
                                a--
                            }
                        }
                    });
                    return this
                },
                has: function(e) {
                    return e ? d.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    if (o) {
                        o = []
                    }
                    return this
                },
                disable: function() {
                    r = s = [];
                    o = n = "";
                    return this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    r = s = [];
                    if (!n) {
                        o = n = ""
                    }
                    return this
                },
                locked: function() {
                    return !!r
                },
                fireWith: function(e, n) {
                    if (!r) {
                        n = n || [];
                        n = [e, n.slice ? n.slice() : n];
                        s.push(n);
                        if (!t) {
                            u()
                        }
                    }
                    return this
                },
                fire: function() {
                    f.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return f
    };
    d.extend({
        Deferred: function(e) {
            var t = [
                    ["resolve", "done", d.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", d.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", d.Callbacks("memory")]
                ],
                n = "pending",
                i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        r.done(arguments).fail(arguments);
                        return this
                    },
                    then: function() {
                        var e = arguments;
                        return d.Deferred(function(n) {
                            d.each(t, function(t, o) {
                                var s = d.isFunction(e[t]) && e[t];
                                r[o[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    if (e && d.isFunction(e.promise)) {
                                        e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                                    } else {
                                        n[o[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                    }
                                })
                            });
                            e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return e != null ? d.extend(e, i) : i
                    }
                },
                r = {};
            i.pipe = i.then;
            d.each(t, function(e, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add;
                if (a) {
                    s.add(function() {
                        n = a
                    }, t[e ^ 1][2].disable, t[2][2].lock)
                }
                r[o[0]] = function() {
                    r[o[0] + "With"](this === r ? i : this, arguments);
                    return this
                };
                r[o[0] + "With"] = s.fireWith
            });
            i.promise(r);
            if (e) {
                e.call(r, r)
            }
            return r
        },
        when: function(e) {
            var t = 0,
                n = r.call(arguments),
                i = n.length,
                o = i !== 1 || e && d.isFunction(e.promise) ? i : 0,
                s = o === 1 ? e : d.Deferred(),
                a = function(e, t, n) {
                    return function(i) {
                        t[e] = this;
                        n[e] = arguments.length > 1 ? r.call(arguments) : i;
                        if (n === u) {
                            s.notifyWith(t, n)
                        } else if (!--o) {
                            s.resolveWith(t, n)
                        }
                    }
                },
                u, f, l;
            if (i > 1) {
                u = new Array(i);
                f = new Array(i);
                l = new Array(i);
                for (; t < i; t++) {
                    if (n[t] && d.isFunction(n[t].promise)) {
                        n[t].promise().progress(a(t, f, u)).done(a(t, l, n)).fail(s.reject)
                    } else {
                        --o
                    }
                }
            }
            if (!o) {
                s.resolveWith(l, n)
            }
            return s.promise()
        }
    });
    var q;
    d.fn.ready = function(e) {
        d.ready.promise().done(e);
        return this
    };
    d.extend({
        isReady: false,
        readyWait: 1,
        holdReady: function(e) {
            if (e) {
                d.readyWait++
            } else {
                d.ready(true)
            }
        },
        ready: function(e) {
            if (e === true ? --d.readyWait : d.isReady) {
                return
            }
            d.isReady = true;
            if (e !== true && --d.readyWait > 0) {
                return
            }
            q.resolveWith(i, [d]);
            if (d.fn.triggerHandler) {
                d(i).triggerHandler("ready");
                d(i).off("ready")
            }
        }
    });

    function H() {
        i.removeEventListener("DOMContentLoaded", H);
        e.removeEventListener("load", H);
        d.ready()
    }
    d.ready.promise = function(t) {
        if (!q) {
            q = d.Deferred();
            if (i.readyState === "complete" || i.readyState !== "loading" && !i.documentElement.doScroll) {
                e.setTimeout(d.ready)
            } else {
                i.addEventListener("DOMContentLoaded", H);
                e.addEventListener("load", H)
            }
        }
        return q.promise(t)
    };
    d.ready.promise();
    var M = function(e, t, n, i, r, o, s) {
        var a = 0,
            u = e.length,
            f = n == null;
        if (d.type(n) === "object") {
            r = true;
            for (a in n) {
                M(e, t, a, n[a], true, o, s)
            }
        } else if (i !== undefined) {
            r = true;
            if (!d.isFunction(i)) {
                s = true
            }
            if (f) {
                if (s) {
                    t.call(e, i);
                    t = null
                } else {
                    f = t;
                    t = function(e, t, n) {
                        return f.call(d(e), n)
                    }
                }
            }
            if (t) {
                for (; a < u; a++) {
                    t(e[a], n, s ? i : i.call(e[a], a, t(e[a], n)))
                }
            }
        }
        return r ? e : f ? t.call(e) : u ? t(e[0], n) : o
    };
    var F = function(e) {
        return e.nodeType === 1 || e.nodeType === 9 || !+e.nodeType
    };

    function I() {
        this.expando = d.expando + I.uid++
    }
    I.uid = 1;
    I.prototype = {
        register: function(e, t) {
            var n = t || {};
            if (e.nodeType) {
                e[this.expando] = n
            } else {
                Object.defineProperty(e, this.expando, {
                    value: n,
                    writable: true,
                    configurable: true
                })
            }
            return e[this.expando]
        },
        cache: function(e) {
            if (!F(e)) {
                return {}
            }
            var t = e[this.expando];
            if (!t) {
                t = {};
                if (F(e)) {
                    if (e.nodeType) {
                        e[this.expando] = t
                    } else {
                        Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: true
                        })
                    }
                }
            }
            return t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if (typeof t === "string") {
                r[t] = n
            } else {
                for (i in t) {
                    r[i] = t[i]
                }
            }
            return r
        },
        get: function(e, t) {
            return t === undefined ? this.cache(e) : e[this.expando] && e[this.expando][t]
        },
        access: function(e, t, n) {
            var i;
            if (t === undefined || t && typeof t === "string" && n === undefined) {
                i = this.get(e, t);
                return i !== undefined ? i : this.get(e, d.camelCase(t))
            }
            this.set(e, t, n);
            return n !== undefined ? n : t
        },
        remove: function(e, t) {
            var n, i, r, o = e[this.expando];
            if (o === undefined) {
                return
            }
            if (t === undefined) {
                this.register(e)
            } else {
                if (d.isArray(t)) {
                    i = t.concat(t.map(d.camelCase))
                } else {
                    r = d.camelCase(t);
                    if (t in o) {
                        i = [t, r]
                    } else {
                        i = r;
                        i = i in o ? [i] : i.match(P) || []
                    }
                }
                n = i.length;
                while (n--) {
                    delete o[i[n]]
                }
            }
            if (t === undefined || d.isEmptyObject(o)) {
                if (e.nodeType) {
                    e[this.expando] = undefined
                } else {
                    delete e[this.expando]
                }
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return t !== undefined && !d.isEmptyObject(t)
        }
    };
    var R = new I;
    var B = new I;
    var $ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        W = /[A-Z]/g;

    function _(e, t, n) {
        var i;
        if (n === undefined && e.nodeType === 1) {
            i = "data-" + t.replace(W, "-$&").toLowerCase();
            n = e.getAttribute(i);
            if (typeof n === "string") {
                try {
                    n = n === "true" ? true : n === "false" ? false : n === "null" ? null : +n + "" === n ? +n : $.test(n) ? d.parseJSON(n) : n
                } catch (r) {}
                B.set(e, t, n)
            } else {
                n = undefined
            }
        }
        return n
    }
    d.extend({
        hasData: function(e) {
            return B.hasData(e) || R.hasData(e)
        },
        data: function(e, t, n) {
            return B.access(e, t, n)
        },
        removeData: function(e, t) {
            B.remove(e, t)
        },
        _data: function(e, t, n) {
            return R.access(e, t, n)
        },
        _removeData: function(e, t) {
            R.remove(e, t)
        }
    });
    d.fn.extend({
        data: function(e, t) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (e === undefined) {
                if (this.length) {
                    r = B.get(o);
                    if (o.nodeType === 1 && !R.get(o, "hasDataAttrs")) {
                        n = s.length;
                        while (n--) {
                            if (s[n]) {
                                i = s[n].name;
                                if (i.indexOf("data-") === 0) {
                                    i = d.camelCase(i.slice(5));
                                    _(o, i, r[i])
                                }
                            }
                        }
                        R.set(o, "hasDataAttrs", true)
                    }
                }
                return r
            }
            if (typeof e === "object") {
                return this.each(function() {
                    B.set(this, e)
                })
            }
            return M(this, function(t) {
                var n, i;
                if (o && t === undefined) {
                    n = B.get(o, e) || B.get(o, e.replace(W, "-$&").toLowerCase());
                    if (n !== undefined) {
                        return n
                    }
                    i = d.camelCase(e);
                    n = B.get(o, i);
                    if (n !== undefined) {
                        return n
                    }
                    n = _(o, i, undefined);
                    if (n !== undefined) {
                        return n
                    }
                    return
                }
                i = d.camelCase(e);
                this.each(function() {
                    var n = B.get(this, i);
                    B.set(this, i, t);
                    if (e.indexOf("-") > -1 && n !== undefined) {
                        B.set(this, e, t)
                    }
                })
            }, null, t, arguments.length > 1, null, true)
        },
        removeData: function(e) {
            return this.each(function() {
                B.remove(this, e)
            })
        }
    });
    d.extend({
        queue: function(e, t, n) {
            var i;
            if (e) {
                t = (t || "fx") + "queue";
                i = R.get(e, t);
                if (n) {
                    if (!i || d.isArray(n)) {
                        i = R.access(e, t, d.makeArray(n))
                    } else {
                        i.push(n)
                    }
                }
                return i || []
            }
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = d.queue(e, t),
                i = n.length,
                r = n.shift(),
                o = d._queueHooks(e, t),
                s = function() {
                    d.dequeue(e, t)
                };
            if (r === "inprogress") {
                r = n.shift();
                i--
            }
            if (r) {
                if (t === "fx") {
                    n.unshift("inprogress")
                }
                delete o.stop;
                r.call(e, s, o)
            }
            if (!i && o) {
                o.empty.fire()
            }
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return R.get(e, n) || R.access(e, n, {
                empty: d.Callbacks("once memory").add(function() {
                    R.remove(e, [t + "queue", n])
                })
            })
        }
    });
    d.fn.extend({
        queue: function(e, t) {
            var n = 2;
            if (typeof e !== "string") {
                t = e;
                e = "fx";
                n--
            }
            if (arguments.length < n) {
                return d.queue(this[0], e)
            }
            return t === undefined ? this : this.each(function() {
                var n = d.queue(this, e, t);
                d._queueHooks(this, e);
                if (e === "fx" && n[0] !== "inprogress") {
                    d.dequeue(this, e)
                }
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                d.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, i = 1,
                r = d.Deferred(),
                o = this,
                s = this.length,
                a = function() {
                    if (!--i) {
                        r.resolveWith(o, [o])
                    }
                };
            if (typeof e !== "string") {
                t = e;
                e = undefined
            }
            e = e || "fx";
            while (s--) {
                n = R.get(o[s], e + "queueHooks");
                if (n && n.empty) {
                    i++;
                    n.empty.add(a)
                }
            }
            a();
            return r.promise(t)
        }
    });
    var z = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var X = new RegExp("^(?:([+-])=|)(" + z + ")([a-z%]*)$", "i");
    var U = ["Top", "Right", "Bottom", "Left"];
    var G = function(e, t) {
        e = t || e;
        return d.css(e, "display") === "none" || !d.contains(e.ownerDocument, e)
    };

    function V(e, t, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function() {
                return i.cur()
            } : function() {
                return d.css(e, t, "")
            },
            u = a(),
            f = n && n[3] || (d.cssNumber[t] ? "" : "px"),
            l = (d.cssNumber[t] || f !== "px" && +u) && X.exec(d.css(e, t));
        if (l && l[3] !== f) {
            f = f || l[3];
            n = n || [];
            l = +u || 1;
            do {
                o = o || ".5";
                l = l / o;
                d.style(e, t, l + f)
            } while (o !== (o = a() / u) && o !== 1 && --s)
        }
        if (n) {
            l = +l || +u || 0;
            r = n[1] ? l + (n[1] + 1) * n[2] : +n[2];
            if (i) {
                i.unit = f;
                i.start = l;
                i.end = r
            }
        }
        return r
    }
    var Y = /^(?:checkbox|radio)$/i;
    var Q = /<([\w:-]+)/;
    var J = /^$|\/(?:java|ecma)script/i;
    var K = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    K.optgroup = K.option;
    K.tbody = K.tfoot = K.colgroup = K.caption = K.thead;
    K.th = K.td;

    function Z(e, t) {
        var n = typeof e.getElementsByTagName !== "undefined" ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== "undefined" ? e.querySelectorAll(t || "*") : [];
        return t === undefined || t && d.nodeName(e, t) ? d.merge([e], n) : n
    }

    function et(e, t) {
        var n = 0,
            i = e.length;
        for (; n < i; n++) {
            R.set(e[n], "globalEval", !t || R.get(t[n], "globalEval"))
        }
    }
    var tt = /<|&#?\w+;/;

    function nt(e, t, n, i, r) {
        var o, s, a, u, f, l, c = t.createDocumentFragment(),
            p = [],
            h = 0,
            g = e.length;
        for (; h < g; h++) {
            o = e[h];
            if (o || o === 0) {
                if (d.type(o) === "object") {
                    d.merge(p, o.nodeType ? [o] : o)
                } else if (!tt.test(o)) {
                    p.push(t.createTextNode(o))
                } else {
                    s = s || c.appendChild(t.createElement("div"));
                    a = (Q.exec(o) || ["", ""])[1].toLowerCase();
                    u = K[a] || K._default;
                    s.innerHTML = u[1] + d.htmlPrefilter(o) + u[2];
                    l = u[0];
                    while (l--) {
                        s = s.lastChild
                    }
                    d.merge(p, s.childNodes);
                    s = c.firstChild;
                    s.textContent = ""
                }
            }
        }
        c.textContent = "";
        h = 0;
        while (o = p[h++]) {
            if (i && d.inArray(o, i) > -1) {
                if (r) {
                    r.push(o)
                }
                continue
            }
            f = d.contains(o.ownerDocument, o);
            s = Z(c.appendChild(o), "script");
            if (f) {
                et(s)
            }
            if (n) {
                l = 0;
                while (o = s[l++]) {
                    if (J.test(o.type || "")) {
                        n.push(o)
                    }
                }
            }
        }
        return c
    }(function() {
        var e = i.createDocumentFragment(),
            t = e.appendChild(i.createElement("div")),
            n = i.createElement("input");
        n.setAttribute("type", "radio");
        n.setAttribute("checked", "checked");
        n.setAttribute("name", "t");
        t.appendChild(n);
        c.checkClone = t.cloneNode(true).cloneNode(true).lastChild.checked;
        t.innerHTML = "<textarea>x</textarea>";
        c.noCloneChecked = !!t.cloneNode(true).lastChild.defaultValue
    })();
    var it = /^key/,
        rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ot = /^([^.]*)(?:\.(.+)|)/;

    function st() {
        return true
    }

    function at() {
        return false
    }

    function ut() {
        try {
            return i.activeElement
        } catch (e) {}
    }

    function ft(e, t, n, i, r, o) {
        var s, a;
        if (typeof t === "object") {
            if (typeof n !== "string") {
                i = i || n;
                n = undefined
            }
            for (a in t) {
                ft(e, a, n, i, t[a], o)
            }
            return e
        }
        if (i == null && r == null) {
            r = n;
            i = n = undefined
        } else if (r == null) {
            if (typeof n === "string") {
                r = i;
                i = undefined
            } else {
                r = i;
                i = n;
                n = undefined
            }
        }
        if (r === false) {
            r = at
        } else if (!r) {
            return e
        }
        if (o === 1) {
            s = r;
            r = function(e) {
                d().off(e);
                return s.apply(this, arguments)
            };
            r.guid = s.guid || (s.guid = d.guid++)
        }
        return e.each(function() {
            d.event.add(this, t, r, i, n)
        })
    }
    d.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var o, s, a, u, f, l, c, p, h, g, m, y = R.get(e);
            if (!y) {
                return
            }
            if (n.handler) {
                o = n;
                n = o.handler;
                r = o.selector
            }
            if (!n.guid) {
                n.guid = d.guid++
            }
            if (!(u = y.events)) {
                u = y.events = {}
            }
            if (!(s = y.handle)) {
                s = y.handle = function(t) {
                    return typeof d !== "undefined" && d.event.triggered !== t.type ? d.event.dispatch.apply(e, arguments) : undefined
                }
            }
            t = (t || "").match(P) || [""];
            f = t.length;
            while (f--) {
                a = ot.exec(t[f]) || [];
                h = m = a[1];
                g = (a[2] || "").split(".").sort();
                if (!h) {
                    continue
                }
                c = d.event.special[h] || {};
                h = (r ? c.delegateType : c.bindType) || h;
                c = d.event.special[h] || {};
                l = d.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && d.expr.match.needsContext.test(r),
                    namespace: g.join(".")
                }, o);
                if (!(p = u[h])) {
                    p = u[h] = [];
                    p.delegateCount = 0;
                    if (!c.setup || c.setup.call(e, i, g, s) === false) {
                        if (e.addEventListener) {
                            e.addEventListener(h, s)
                        }
                    }
                }
                if (c.add) {
                    c.add.call(e, l);
                    if (!l.handler.guid) {
                        l.handler.guid = n.guid
                    }
                }
                if (r) {
                    p.splice(p.delegateCount++, 0, l)
                } else {
                    p.push(l)
                }
                d.event.global[h] = true
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, u, f, l, c, p, h, g, m, y = R.hasData(e) && R.get(e);
            if (!y || !(u = y.events)) {
                return
            }
            t = (t || "").match(P) || [""];
            f = t.length;
            while (f--) {
                a = ot.exec(t[f]) || [];
                h = m = a[1];
                g = (a[2] || "").split(".").sort();
                if (!h) {
                    for (h in u) {
                        d.event.remove(e, h + t[f], n, i, true)
                    }
                    continue
                }
                c = d.event.special[h] || {};
                h = (i ? c.delegateType : c.bindType) || h;
                p = u[h] || [];
                a = a[2] && new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)");
                s = o = p.length;
                while (o--) {
                    l = p[o];
                    if ((r || m === l.origType) && (!n || n.guid === l.guid) && (!a || a.test(l.namespace)) && (!i || i === l.selector || i === "**" && l.selector)) {
                        p.splice(o, 1);
                        if (l.selector) {
                            p.delegateCount--
                        }
                        if (c.remove) {
                            c.remove.call(e, l)
                        }
                    }
                }
                if (s && !p.length) {
                    if (!c.teardown || c.teardown.call(e, g, y.handle) === false) {
                        d.removeEvent(e, h, y.handle)
                    }
                    delete u[h]
                }
            }
            if (d.isEmptyObject(u)) {
                R.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            e = d.event.fix(e);
            var t, n, i, o, s, a = [],
                u = r.call(arguments),
                f = (R.get(this, "events") || {})[e.type] || [],
                l = d.event.special[e.type] || {};
            u[0] = e;
            e.delegateTarget = this;
            if (l.preDispatch && l.preDispatch.call(this, e) === false) {
                return
            }
            a = d.event.handlers.call(this, e, f);
            t = 0;
            while ((o = a[t++]) && !e.isPropagationStopped()) {
                e.currentTarget = o.elem;
                n = 0;
                while ((s = o.handlers[n++]) && !e.isImmediatePropagationStopped()) {
                    if (!e.rnamespace || e.rnamespace.test(s.namespace)) {
                        e.handleObj = s;
                        e.data = s.data;
                        i = ((d.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, u);
                        if (i !== undefined) {
                            if ((e.result = i) === false) {
                                e.preventDefault();
                                e.stopPropagation()
                            }
                        }
                    }
                }
            }
            if (l.postDispatch) {
                l.postDispatch.call(this, e)
            }
            return e.result
        },
        handlers: function(e, t) {
            var n, i, r, o, s = [],
                a = t.delegateCount,
                u = e.target;
            if (a && u.nodeType && (e.type !== "click" || isNaN(e.button) || e.button < 1)) {
                for (; u !== this; u = u.parentNode || this) {
                    if (u.nodeType === 1 && (u.disabled !== true || e.type !== "click")) {
                        i = [];
                        for (n = 0; n < a; n++) {
                            o = t[n];
                            r = o.selector + " ";
                            if (i[r] === undefined) {
                                i[r] = o.needsContext ? d(r, this).index(u) > -1 : d.find(r, this, null, [u]).length
                            }
                            if (i[r]) {
                                i.push(o)
                            }
                        }
                        if (i.length) {
                            s.push({
                                elem: u,
                                handlers: i
                            })
                        }
                    }
                }
            }
            if (a < t.length) {
                s.push({
                    elem: this,
                    handlers: t.slice(a)
                })
            }
            return s
        },
        props: ("altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " + "metaKey relatedTarget shiftKey target timeStamp view which").split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                if (e.which == null) {
                    e.which = t.charCode != null ? t.charCode : t.keyCode
                }
                return e
            }
        },
        mouseHooks: {
            props: ("button buttons clientX clientY offsetX offsetY pageX pageY " + "screenX screenY toElement").split(" "),
            filter: function(e, t) {
                var n, r, o, s = t.button;
                if (e.pageX == null && t.clientX != null) {
                    n = e.target.ownerDocument || i;
                    r = n.documentElement;
                    o = n.body;
                    e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0);
                    e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)
                }
                if (!e.which && s !== undefined) {
                    e.which = s & 1 ? 1 : s & 2 ? 3 : s & 4 ? 2 : 0
                }
                return e
            }
        },
        fix: function(e) {
            if (e[d.expando]) {
                return e
            }
            var t, n, r, o = e.type,
                s = e,
                a = this.fixHooks[o];
            if (!a) {
                this.fixHooks[o] = a = rt.test(o) ? this.mouseHooks : it.test(o) ? this.keyHooks : {}
            }
            r = a.props ? this.props.concat(a.props) : this.props;
            e = new d.Event(s);
            t = r.length;
            while (t--) {
                n = r[t];
                e[n] = s[n]
            }
            if (!e.target) {
                e.target = i
            }
            if (e.target.nodeType === 3) {
                e.target = e.target.parentNode
            }
            return a.filter ? a.filter(e, s) : e
        },
        special: {
            load: {
                noBubble: true
            },
            focus: {
                trigger: function() {
                    if (this !== ut() && this.focus) {
                        this.focus();
                        return false
                    }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === ut() && this.blur) {
                        this.blur();
                        return false
                    }
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && d.nodeName(this, "input")) {
                        this.click();
                        return false
                    }
                },
                _default: function(e) {
                    return d.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    if (e.result !== undefined && e.originalEvent) {
                        e.originalEvent.returnValue = e.result
                    }
                }
            }
        }
    };
    d.removeEvent = function(e, t, n) {
        if (e.removeEventListener) {
            e.removeEventListener(t, n)
        }
    };
    d.Event = function(e, t) {
        if (!(this instanceof d.Event)) {
            return new d.Event(e, t)
        }
        if (e && e.type) {
            this.originalEvent = e;
            this.type = e.type;
            this.isDefaultPrevented = e.defaultPrevented || e.defaultPrevented === undefined && e.returnValue === false ? st : at
        } else {
            this.type = e
        }
        if (t) {
            d.extend(this, t)
        }
        this.timeStamp = e && e.timeStamp || d.now();
        this[d.expando] = true
    };
    d.Event.prototype = {
        constructor: d.Event,
        isDefaultPrevented: at,
        isPropagationStopped: at,
        isImmediatePropagationStopped: at,
        isSimulated: false,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = st;
            if (e && !this.isSimulated) {
                e.preventDefault()
            }
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = st;
            if (e && !this.isSimulated) {
                e.stopPropagation()
            }
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = st;
            if (e && !this.isSimulated) {
                e.stopImmediatePropagation()
            }
            this.stopPropagation()
        }
    };
    d.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        d.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                    r = e.relatedTarget,
                    o = e.handleObj;
                if (!r || r !== i && !d.contains(i, r)) {
                    e.type = o.origType;
                    n = o.handler.apply(this, arguments);
                    e.type = t
                }
                return n
            }
        }
    });
    d.fn.extend({
        on: function(e, t, n, i) {
            return ft(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return ft(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) {
                i = e.handleObj;
                d(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                return this
            }
            if (typeof e === "object") {
                for (r in e) {
                    this.off(r, t, e[r])
                }
                return this
            }
            if (t === false || typeof t === "function") {
                n = t;
                t = undefined
            }
            if (n === false) {
                n = at
            }
            return this.each(function() {
                d.event.remove(this, e, n, t)
            })
        }
    });
    var lt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        ct = /<script|<style|<link/i,
        pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        dt = /^true\/(.*)/,
        ht = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function gt(e, t) {
        return d.nodeName(e, "table") && d.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function mt(e) {
        e.type = (e.getAttribute("type") !== null) + "/" + e.type;
        return e
    }

    function yt(e) {
        var t = dt.exec(e.type);
        if (t) {
            e.type = t[1]
        } else {
            e.removeAttribute("type")
        }
        return e
    }

    function vt(e, t) {
        var n, i, r, o, s, a, u, f;
        if (t.nodeType !== 1) {
            return
        }
        if (R.hasData(e)) {
            o = R.access(e);
            s = R.set(t, o);
            f = o.events;
            if (f) {
                delete s.handle;
                s.events = {};
                for (r in f) {
                    for (n = 0, i = f[r].length; n < i; n++) {
                        d.event.add(t, r, f[r][n])
                    }
                }
            }
        }
        if (B.hasData(e)) {
            a = B.access(e);
            u = d.extend({}, a);
            B.set(t, u)
        }
    }

    function xt(e, t) {
        var n = t.nodeName.toLowerCase();
        if (n === "input" && Y.test(e.type)) {
            t.checked = e.checked
        } else if (n === "input" || n === "textarea") {
            t.defaultValue = e.defaultValue
        }
    }

    function bt(e, t, n, i) {
        t = o.apply([], t);
        var r, s, a, u, f, l, p = 0,
            h = e.length,
            g = h - 1,
            m = t[0],
            y = d.isFunction(m);
        if (y || h > 1 && typeof m === "string" && !c.checkClone && pt.test(m)) {
            return e.each(function(r) {
                var o = e.eq(r);
                if (y) {
                    t[0] = m.call(this, r, o.html())
                }
                bt(o, t, n, i)
            })
        }
        if (h) {
            r = nt(t, e[0].ownerDocument, false, e, i);
            s = r.firstChild;
            if (r.childNodes.length === 1) {
                r = s
            }
            if (s || i) {
                a = d.map(Z(r, "script"), mt);
                u = a.length;
                for (; p < h; p++) {
                    f = r;
                    if (p !== g) {
                        f = d.clone(f, true, true);
                        if (u) {
                            d.merge(a, Z(f, "script"))
                        }
                    }
                    n.call(e[p], f, p)
                }
                if (u) {
                    l = a[a.length - 1].ownerDocument;
                    d.map(a, yt);
                    for (p = 0; p < u; p++) {
                        f = a[p];
                        if (J.test(f.type || "") && !R.access(f, "globalEval") && d.contains(l, f)) {
                            if (f.src) {
                                if (d._evalUrl) {
                                    d._evalUrl(f.src)
                                }
                            } else {
                                d.globalEval(f.textContent.replace(ht, ""))
                            }
                        }
                    }
                }
            }
        }
        return e
    }

    function wt(e, t, n) {
        var i, r = t ? d.filter(t, e) : e,
            o = 0;
        for (;
            (i = r[o]) != null; o++) {
            if (!n && i.nodeType === 1) {
                d.cleanData(Z(i))
            }
            if (i.parentNode) {
                if (n && d.contains(i.ownerDocument, i)) {
                    et(Z(i, "script"))
                }
                i.parentNode.removeChild(i)
            }
        }
        return e
    }
    d.extend({
        htmlPrefilter: function(e) {
            return e.replace(lt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, o, s, a = e.cloneNode(true),
                u = d.contains(e.ownerDocument, e);
            if (!c.noCloneChecked && (e.nodeType === 1 || e.nodeType === 11) && !d.isXMLDoc(e)) {
                s = Z(a);
                o = Z(e);
                for (i = 0, r = o.length; i < r; i++) {
                    xt(o[i], s[i])
                }
            }
            if (t) {
                if (n) {
                    o = o || Z(e);
                    s = s || Z(a);
                    for (i = 0, r = o.length; i < r; i++) {
                        vt(o[i], s[i])
                    }
                } else {
                    vt(e, a)
                }
            }
            s = Z(a, "script");
            if (s.length > 0) {
                et(s, !u && Z(e, "script"))
            }
            return a
        },
        cleanData: function(e) {
            var t, n, i, r = d.event.special,
                o = 0;
            for (;
                (n = e[o]) !== undefined; o++) {
                if (F(n)) {
                    if (t = n[R.expando]) {
                        if (t.events) {
                            for (i in t.events) {
                                if (r[i]) {
                                    d.event.remove(n, i)
                                } else {
                                    d.removeEvent(n, i, t.handle)
                                }
                            }
                        }
                        n[R.expando] = undefined
                    }
                    if (n[B.expando]) {
                        n[B.expando] = undefined
                    }
                }
            }
        }
    });
    d.fn.extend({
        domManip: bt,
        detach: function(e) {
            return wt(this, e, true)
        },
        remove: function(e) {
            return wt(this, e)
        },
        text: function(e) {
            return M(this, function(e) {
                return e === undefined ? d.text(this) : this.empty().each(function() {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        this.textContent = e
                    }
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return bt(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = gt(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return bt(this, arguments, function(e) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = gt(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return bt(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this)
                }
            })
        },
        after: function() {
            return bt(this, arguments, function(e) {
                if (this.parentNode) {
                    this.parentNode.insertBefore(e, this.nextSibling)
                }
            })
        },
        empty: function() {
            var e, t = 0;
            for (;
                (e = this[t]) != null; t++) {
                if (e.nodeType === 1) {
                    d.cleanData(Z(e, false));
                    e.textContent = ""
                }
            }
            return this
        },
        clone: function(e, t) {
            e = e == null ? false : e;
            t = t == null ? e : t;
            return this.map(function() {
                return d.clone(this, e, t)
            })
        },
        html: function(e) {
            return M(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (e === undefined && t.nodeType === 1) {
                    return t.innerHTML
                }
                if (typeof e === "string" && !ct.test(e) && !K[(Q.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = d.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) {
                            t = this[n] || {};
                            if (t.nodeType === 1) {
                                d.cleanData(Z(t, false));
                                t.innerHTML = e
                            }
                        }
                        t = 0
                    } catch (r) {}
                }
                if (t) {
                    this.empty().append(e)
                }
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return bt(this, arguments, function(t) {
                var n = this.parentNode;
                if (d.inArray(this, e) < 0) {
                    d.cleanData(Z(this));
                    if (n) {
                        n.replaceChild(t, this)
                    }
                }
            }, e)
        }
    });
    d.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        d.fn[e] = function(e) {
            var n, i = [],
                r = d(e),
                o = r.length - 1,
                a = 0;
            for (; a <= o; a++) {
                n = a === o ? this : this.clone(true);
                d(r[a])[t](n);
                s.apply(i, n.get())
            }
            return this.pushStack(i)
        }
    });
    var Tt, Ct = {
        HTML: "block",
        BODY: "block"
    };

    function kt(e, t) {
        var n = d(t.createElement(e)).appendTo(t.body),
            i = d.css(n[0], "display");
        n.detach();
        return i
    }

    function St(e) {
        var t = i,
            n = Ct[e];
        if (!n) {
            n = kt(e, t);
            if (n === "none" || !n) {
                Tt = (Tt || d("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement);
                t = Tt[0].contentDocument;
                t.write();
                t.close();
                n = kt(e, t);
                Tt.detach()
            }
            Ct[e] = n
        }
        return n
    }
    var Et = /^margin/;
    var Nt = new RegExp("^(" + z + ")(?!px)[a-z%]+$", "i");
    var Dt = function(t) {
        var n = t.ownerDocument.defaultView;
        if (!n || !n.opener) {
            n = e
        }
        return n.getComputedStyle(t)
    };
    var At = function(e, t, n, i) {
        var r, o, s = {};
        for (o in t) {
            s[o] = e.style[o];
            e.style[o] = t[o]
        }
        r = n.apply(e, i || []);
        for (o in t) {
            e.style[o] = s[o]
        }
        return r
    };
    var jt = i.documentElement;
    (function() {
        var t, n, r, o, s = i.createElement("div"),
            a = i.createElement("div");
        if (!a.style) {
            return
        }
        a.style.backgroundClip = "content-box";
        a.cloneNode(true).style.backgroundClip = "";
        c.clearCloneStyle = a.style.backgroundClip === "content-box";
        s.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" + "padding:0;margin-top:1px;position:absolute";
        s.appendChild(a);

        function u() {
            a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;" + "position:relative;display:block;" + "margin:auto;border:1px;padding:1px;" + "top:1%;width:50%";
            a.innerHTML = "";
            jt.appendChild(s);
            var i = e.getComputedStyle(a);
            t = i.top !== "1%";
            o = i.marginLeft === "2px";
            n = i.width === "4px";
            a.style.marginRight = "50%";
            r = i.marginRight === "4px";
            jt.removeChild(s)
        }
        d.extend(c, {
            pixelPosition: function() {
                u();
                return t
            },
            boxSizingReliable: function() {
                if (n == null) {
                    u()
                }
                return n
            },
            pixelMarginRight: function() {
                if (n == null) {
                    u()
                }
                return r
            },
            reliableMarginLeft: function() {
                if (n == null) {
                    u()
                }
                return o
            },
            reliableMarginRight: function() {
                var t, n = a.appendChild(i.createElement("div"));
                n.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;" + "display:block;margin:0;border:0;padding:0";
                n.style.marginRight = n.style.width = "0";
                a.style.width = "1px";
                jt.appendChild(s);
                t = !parseFloat(e.getComputedStyle(n).marginRight);
                jt.removeChild(s);
                a.removeChild(n);
                return t
            }
        })
    })();

    function Lt(e, t, n) {
        var i, r, o, s, a = e.style;
        n = n || Dt(e);
        s = n ? n.getPropertyValue(t) || n[t] : undefined;
        if ((s === "" || s === undefined) && !d.contains(e.ownerDocument, e)) {
            s = d.style(e, t)
        }
        if (n) {
            if (!c.pixelMarginRight() && Nt.test(s) && Et.test(t)) {
                i = a.width;
                r = a.minWidth;
                o = a.maxWidth;
                a.minWidth = a.maxWidth = a.width = s;
                s = n.width;
                a.width = i;
                a.minWidth = r;
                a.maxWidth = o
            }
        }
        return s !== undefined ? s + "" : s
    }

    function Pt(e, t) {
        return {
            get: function() {
                if (e()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }
    var Ot = /^(none|table(?!-c[ea]).+)/,
        qt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Ht = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Mt = ["Webkit", "O", "Moz", "ms"],
        Ft = i.createElement("div").style;

    function It(e) {
        if (e in Ft) {
            return e
        }
        var t = e[0].toUpperCase() + e.slice(1),
            n = Mt.length;
        while (n--) {
            e = Mt[n] + t;
            if (e in Ft) {
                return e
            }
        }
    }

    function Rt(e, t, n) {
        var i = X.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function Bt(e, t, n, i, r) {
        var o = n === (i ? "border" : "content") ? 4 : t === "width" ? 1 : 0,
            s = 0;
        for (; o < 4; o += 2) {
            if (n === "margin") {
                s += d.css(e, n + U[o], true, r)
            }
            if (i) {
                if (n === "content") {
                    s -= d.css(e, "padding" + U[o], true, r)
                }
                if (n !== "margin") {
                    s -= d.css(e, "border" + U[o] + "Width", true, r)
                }
            } else {
                s += d.css(e, "padding" + U[o], true, r);
                if (n !== "padding") {
                    s += d.css(e, "border" + U[o] + "Width", true, r)
                }
            }
        }
        return s
    }

    function $t(e, t, n) {
        var i = true,
            r = t === "width" ? e.offsetWidth : e.offsetHeight,
            o = Dt(e),
            s = d.css(e, "boxSizing", false, o) === "border-box";
        if (r <= 0 || r == null) {
            r = Lt(e, t, o);
            if (r < 0 || r == null) {
                r = e.style[t]
            }
            if (Nt.test(r)) {
                return r
            }
            i = s && (c.boxSizingReliable() || r === e.style[t]);
            r = parseFloat(r) || 0
        }
        return r + Bt(e, t, n || (s ? "border" : "content"), i, o) + "px"
    }

    function Wt(e, t) {
        var n, i, r, o = [],
            s = 0,
            a = e.length;
        for (; s < a; s++) {
            i = e[s];
            if (!i.style) {
                continue
            }
            o[s] = R.get(i, "olddisplay");
            n = i.style.display;
            if (t) {
                if (!o[s] && n === "none") {
                    i.style.display = ""
                }
                if (i.style.display === "" && G(i)) {
                    o[s] = R.access(i, "olddisplay", St(i.nodeName))
                }
            } else {
                r = G(i);
                if (n !== "none" || !r) {
                    R.set(i, "olddisplay", r ? n : d.css(i, "display"))
                }
            }
        }
        for (s = 0; s < a; s++) {
            i = e[s];
            if (!i.style) {
                continue
            }
            if (!t || i.style.display === "none" || i.style.display === "") {
                i.style.display = t ? o[s] || "" : "none"
            }
        }
        return e
    }
    d.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = Lt(e, "opacity");
                        return n === "" ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: true,
            columnCount: true,
            fillOpacity: true,
            flexGrow: true,
            flexShrink: true,
            fontWeight: true,
            lineHeight: true,
            opacity: true,
            order: true,
            orphans: true,
            widows: true,
            zIndex: true,
            zoom: true
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(e, t, n, i) {
            if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) {
                return
            }
            var r, o, s, a = d.camelCase(t),
                u = e.style;
            t = d.cssProps[a] || (d.cssProps[a] = It(a) || a);
            s = d.cssHooks[t] || d.cssHooks[a];
            if (n !== undefined) {
                o = typeof n;
                if (o === "string" && (r = X.exec(n)) && r[1]) {
                    n = V(e, t, r);
                    o = "number"
                }
                if (n == null || n !== n) {
                    return
                }
                if (o === "number") {
                    n += r && r[3] || (d.cssNumber[a] ? "" : "px")
                }
                if (!c.clearCloneStyle && n === "" && t.indexOf("background") === 0) {
                    u[t] = "inherit"
                }
                if (!s || !("set" in s) || (n = s.set(e, n, i)) !== undefined) {
                    u[t] = n
                }
            } else {
                if (s && "get" in s && (r = s.get(e, false, i)) !== undefined) {
                    return r
                }
                return u[t]
            }
        },
        css: function(e, t, n, i) {
            var r, o, s, a = d.camelCase(t);
            t = d.cssProps[a] || (d.cssProps[a] = It(a) || a);
            s = d.cssHooks[t] || d.cssHooks[a];
            if (s && "get" in s) {
                r = s.get(e, true, n)
            }
            if (r === undefined) {
                r = Lt(e, t, i)
            }
            if (r === "normal" && t in Ht) {
                r = Ht[t]
            }
            if (n === "" || n) {
                o = parseFloat(r);
                return n === true || isFinite(o) ? o || 0 : r
            }
            return r
        }
    });
    d.each(["height", "width"], function(e, t) {
        d.cssHooks[t] = {
            get: function(e, n, i) {
                if (n) {
                    return Ot.test(d.css(e, "display")) && e.offsetWidth === 0 ? At(e, qt, function() {
                        return $t(e, t, i)
                    }) : $t(e, t, i)
                }
            },
            set: function(e, n, i) {
                var r, o = i && Dt(e),
                    s = i && Bt(e, t, i, d.css(e, "boxSizing", false, o) === "border-box", o);
                if (s && (r = X.exec(n)) && (r[3] || "px") !== "px") {
                    e.style[t] = n;
                    n = d.css(e, t)
                }
                return Rt(e, n, s)
            }
        }
    });
    d.cssHooks.marginLeft = Pt(c.reliableMarginLeft, function(e, t) {
        if (t) {
            return (parseFloat(Lt(e, "marginLeft")) || e.getBoundingClientRect().left - At(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }
    });
    d.cssHooks.marginRight = Pt(c.reliableMarginRight, function(e, t) {
        if (t) {
            return At(e, {
                display: "inline-block"
            }, Lt, [e, "marginRight"])
        }
    });
    d.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        d.cssHooks[e + t] = {
            expand: function(n) {
                var i = 0,
                    r = {},
                    o = typeof n === "string" ? n.split(" ") : [n];
                for (; i < 4; i++) {
                    r[e + U[i] + t] = o[i] || o[i - 2] || o[0]
                }
                return r
            }
        };
        if (!Et.test(e)) {
            d.cssHooks[e + t].set = Rt
        }
    });
    d.fn.extend({
        css: function(e, t) {
            return M(this, function(e, t, n) {
                var i, r, o = {},
                    s = 0;
                if (d.isArray(t)) {
                    i = Dt(e);
                    r = t.length;
                    for (; s < r; s++) {
                        o[t[s]] = d.css(e, t[s], false, i)
                    }
                    return o
                }
                return n !== undefined ? d.style(e, t, n) : d.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return Wt(this, true)
        },
        hide: function() {
            return Wt(this)
        },
        toggle: function(e) {
            if (typeof e === "boolean") {
                return e ? this.show() : this.hide()
            }
            return this.each(function() {
                if (G(this)) {
                    d(this).show()
                } else {
                    d(this).hide()
                }
            })
        }
    });

    function _t(e, t, n, i, r) {
        return new _t.prototype.init(e, t, n, i, r)
    }
    d.Tween = _t;
    _t.prototype = {
        constructor: _t,
        init: function(e, t, n, i, r, o) {
            this.elem = e;
            this.prop = n;
            this.easing = r || d.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = i;
            this.unit = o || (d.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = _t.propHooks[this.prop];
            return e && e.get ? e.get(this) : _t.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = _t.propHooks[this.prop];
            if (this.options.duration) {
                this.pos = t = d.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)
            } else {
                this.pos = t = e
            }
            this.now = (this.end - this.start) * t + this.start;
            if (this.options.step) {
                this.options.step.call(this.elem, this.now, this)
            }
            if (n && n.set) {
                n.set(this)
            } else {
                _t.propHooks._default.set(this)
            }
            return this
        }
    };
    _t.prototype.init.prototype = _t.prototype;
    _t.propHooks = {
        _default: {
            get: function(e) {
                var t;
                if (e.elem.nodeType !== 1 || e.elem[e.prop] != null && e.elem.style[e.prop] == null) {
                    return e.elem[e.prop]
                }
                t = d.css(e.elem, e.prop, "");
                return !t || t === "auto" ? 0 : t
            },
            set: function(e) {
                if (d.fx.step[e.prop]) {
                    d.fx.step[e.prop](e)
                } else if (e.elem.nodeType === 1 && (e.elem.style[d.cssProps[e.prop]] != null || d.cssHooks[e.prop])) {
                    d.style(e.elem, e.prop, e.now + e.unit)
                } else {
                    e.elem[e.prop] = e.now
                }
            }
        }
    };
    _t.propHooks.scrollTop = _t.propHooks.scrollLeft = {
        set: function(e) {
            if (e.elem.nodeType && e.elem.parentNode) {
                e.elem[e.prop] = e.now
            }
        }
    };
    d.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    };
    d.fx = _t.prototype.init;
    d.fx.step = {};
    var zt, Xt, Ut = /^(?:toggle|show|hide)$/,
        Gt = /queueHooks$/;

    function Vt() {
        e.setTimeout(function() {
            zt = undefined
        });
        return zt = d.now()
    }

    function Yt(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        t = t ? 1 : 0;
        for (; i < 4; i += 2 - t) {
            n = U[i];
            r["margin" + n] = r["padding" + n] = e
        }
        if (t) {
            r.opacity = r.width = e
        }
        return r
    }

    function Qt(e, t, n) {
        var i, r = (Zt.tweeners[t] || []).concat(Zt.tweeners["*"]),
            o = 0,
            s = r.length;
        for (; o < s; o++) {
            if (i = r[o].call(n, t, e)) {
                return i
            }
        }
    }

    function Jt(e, t, n) {
        var i, r, o, s, a, u, f, l, c = this,
            p = {},
            h = e.style,
            g = e.nodeType && G(e),
            m = R.get(e, "fxshow");
        if (!n.queue) {
            a = d._queueHooks(e, "fx");
            if (a.unqueued == null) {
                a.unqueued = 0;
                u = a.empty.fire;
                a.empty.fire = function() {
                    if (!a.unqueued) {
                        u()
                    }
                }
            }
            a.unqueued++;
            c.always(function() {
                c.always(function() {
                    a.unqueued--;
                    if (!d.queue(e, "fx").length) {
                        a.empty.fire()
                    }
                })
            })
        }
        if (e.nodeType === 1 && ("height" in t || "width" in t)) {
            n.overflow = [h.overflow, h.overflowX, h.overflowY];
            f = d.css(e, "display");
            l = f === "none" ? R.get(e, "olddisplay") || St(e.nodeName) : f;
            if (l === "inline" && d.css(e, "float") === "none") {
                h.display = "inline-block"
            }
        }
        if (n.overflow) {
            h.overflow = "hidden";
            c.always(function() {
                h.overflow = n.overflow[0];
                h.overflowX = n.overflow[1];
                h.overflowY = n.overflow[2]
            })
        }
        for (i in t) {
            r = t[i];
            if (Ut.exec(r)) {
                delete t[i];
                o = o || r === "toggle";
                if (r === (g ? "hide" : "show")) {
                    if (r === "show" && m && m[i] !== undefined) {
                        g = true
                    } else {
                        continue
                    }
                }
                p[i] = m && m[i] || d.style(e, i)
            } else {
                f = undefined
            }
        }
        if (!d.isEmptyObject(p)) {
            if (m) {
                if ("hidden" in m) {
                    g = m.hidden
                }
            } else {
                m = R.access(e, "fxshow", {})
            }
            if (o) {
                m.hidden = !g
            }
            if (g) {
                d(e).show()
            } else {
                c.done(function() {
                    d(e).hide()
                })
            }
            c.done(function() {
                var t;
                R.remove(e, "fxshow");
                for (t in p) {
                    d.style(e, t, p[t])
                }
            });
            for (i in p) {
                s = Qt(g ? m[i] : 0, i, c);
                if (!(i in m)) {
                    m[i] = s.start;
                    if (g) {
                        s.end = s.start;
                        s.start = i === "width" || i === "height" ? 1 : 0
                    }
                }
            }
        } else if ((f === "none" ? St(e.nodeName) : f) === "inline") {
            h.display = f
        }
    }

    function Kt(e, t) {
        var n, i, r, o, s;
        for (n in e) {
            i = d.camelCase(n);
            r = t[i];
            o = e[n];
            if (d.isArray(o)) {
                r = o[1];
                o = e[n] = o[0]
            }
            if (n !== i) {
                e[i] = o;
                delete e[n]
            }
            s = d.cssHooks[i];
            if (s && "expand" in s) {
                o = s.expand(o);
                delete e[i];
                for (n in o) {
                    if (!(n in e)) {
                        e[n] = o[n];
                        t[n] = r
                    }
                }
            } else {
                t[i] = r
            }
        }
    }

    function Zt(e, t, n) {
        var i, r, o = 0,
            s = Zt.prefilters.length,
            a = d.Deferred().always(function() {
                delete u.elem
            }),
            u = function() {
                if (r) {
                    return false
                }
                var t = zt || Vt(),
                    n = Math.max(0, f.startTime + f.duration - t),
                    i = n / f.duration || 0,
                    o = 1 - i,
                    s = 0,
                    u = f.tweens.length;
                for (; s < u; s++) {
                    f.tweens[s].run(o)
                }
                a.notifyWith(e, [f, o, n]);
                if (o < 1 && u) {
                    return n
                } else {
                    a.resolveWith(e, [f]);
                    return false
                }
            },
            f = a.promise({
                elem: e,
                props: d.extend({}, t),
                opts: d.extend(true, {
                    specialEasing: {},
                    easing: d.easing._default
                }, n),
                originalProperties: t,
                originalOptions: n,
                startTime: zt || Vt(),
                duration: n.duration,
                tweens: [],
                createTween: function(t, n) {
                    var i = d.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
                    f.tweens.push(i);
                    return i
                },
                stop: function(t) {
                    var n = 0,
                        i = t ? f.tweens.length : 0;
                    if (r) {
                        return this
                    }
                    r = true;
                    for (; n < i; n++) {
                        f.tweens[n].run(1)
                    }
                    if (t) {
                        a.notifyWith(e, [f, 1, 0]);
                        a.resolveWith(e, [f, t])
                    } else {
                        a.rejectWith(e, [f, t])
                    }
                    return this
                }
            }),
            l = f.props;
        Kt(l, f.opts.specialEasing);
        for (; o < s; o++) {
            i = Zt.prefilters[o].call(f, e, l, f.opts);
            if (i) {
                if (d.isFunction(i.stop)) {
                    d._queueHooks(f.elem, f.opts.queue).stop = d.proxy(i.stop, i)
                }
                return i
            }
        }
        d.map(l, Qt, f);
        if (d.isFunction(f.opts.start)) {
            f.opts.start.call(e, f)
        }
        d.fx.timer(d.extend(u, {
            elem: e,
            anim: f,
            queue: f.opts.queue
        }));
        return f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always)
    }
    d.Animation = d.extend(Zt, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                V(n.elem, e, X.exec(t), n);
                return n
            }]
        },
        tweener: function(e, t) {
            if (d.isFunction(e)) {
                t = e;
                e = ["*"]
            } else {
                e = e.match(P)
            }
            var n, i = 0,
                r = e.length;
            for (; i < r; i++) {
                n = e[i];
                Zt.tweeners[n] = Zt.tweeners[n] || [];
                Zt.tweeners[n].unshift(t)
            }
        },
        prefilters: [Jt],
        prefilter: function(e, t) {
            if (t) {
                Zt.prefilters.unshift(e)
            } else {
                Zt.prefilters.push(e)
            }
        }
    });
    d.speed = function(e, t, n) {
        var i = e && typeof e === "object" ? d.extend({}, e) : {
            complete: n || !n && t || d.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !d.isFunction(t) && t
        };
        i.duration = d.fx.off ? 0 : typeof i.duration === "number" ? i.duration : i.duration in d.fx.speeds ? d.fx.speeds[i.duration] : d.fx.speeds._default;
        if (i.queue == null || i.queue === true) {
            i.queue = "fx"
        }
        i.old = i.complete;
        i.complete = function() {
            if (d.isFunction(i.old)) {
                i.old.call(this)
            }
            if (i.queue) {
                d.dequeue(this, i.queue)
            }
        };
        return i
    };
    d.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(G).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = d.isEmptyObject(e),
                o = d.speed(t, n, i),
                s = function() {
                    var t = Zt(this, d.extend({}, e), o);
                    if (r || R.get(this, "finish")) {
                        t.stop(true)
                    }
                };
            s.finish = s;
            return r || o.queue === false ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var i = function(e) {
                var t = e.stop;
                delete e.stop;
                t(n)
            };
            if (typeof e !== "string") {
                n = t;
                t = e;
                e = undefined
            }
            if (t && e !== false) {
                this.queue(e || "fx", [])
            }
            return this.each(function() {
                var t = true,
                    r = e != null && e + "queueHooks",
                    o = d.timers,
                    s = R.get(this);
                if (r) {
                    if (s[r] && s[r].stop) {
                        i(s[r])
                    }
                } else {
                    for (r in s) {
                        if (s[r] && s[r].stop && Gt.test(r)) {
                            i(s[r])
                        }
                    }
                }
                for (r = o.length; r--;) {
                    if (o[r].elem === this && (e == null || o[r].queue === e)) {
                        o[r].anim.stop(n);
                        t = false;
                        o.splice(r, 1)
                    }
                }
                if (t || !n) {
                    d.dequeue(this, e)
                }
            })
        },
        finish: function(e) {
            if (e !== false) {
                e = e || "fx"
            }
            return this.each(function() {
                var t, n = R.get(this),
                    i = n[e + "queue"],
                    r = n[e + "queueHooks"],
                    o = d.timers,
                    s = i ? i.length : 0;
                n.finish = true;
                d.queue(this, e, []);
                if (r && r.stop) {
                    r.stop.call(this, true)
                }
                for (t = o.length; t--;) {
                    if (o[t].elem === this && o[t].queue === e) {
                        o[t].anim.stop(true);
                        o.splice(t, 1)
                    }
                }
                for (t = 0; t < s; t++) {
                    if (i[t] && i[t].finish) {
                        i[t].finish.call(this)
                    }
                }
                delete n.finish
            })
        }
    });
    d.each(["toggle", "show", "hide"], function(e, t) {
        var n = d.fn[t];
        d.fn[t] = function(e, i, r) {
            return e == null || typeof e === "boolean" ? n.apply(this, arguments) : this.animate(Yt(t, true), e, i, r)
        }
    });
    d.each({
        slideDown: Yt("show"),
        slideUp: Yt("hide"),
        slideToggle: Yt("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        d.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    });
    d.timers = [];
    d.fx.tick = function() {
        var e, t = 0,
            n = d.timers;
        zt = d.now();
        for (; t < n.length; t++) {
            e = n[t];
            if (!e() && n[t] === e) {
                n.splice(t--, 1)
            }
        }
        if (!n.length) {
            d.fx.stop()
        }
        zt = undefined
    };
    d.fx.timer = function(e) {
        d.timers.push(e);
        if (e()) {
            d.fx.start()
        } else {
            d.timers.pop()
        }
    };
    d.fx.interval = 13;
    d.fx.start = function() {
        if (!Xt) {
            Xt = e.setInterval(d.fx.tick, d.fx.interval)
        }
    };
    d.fx.stop = function() {
        e.clearInterval(Xt);
        Xt = null
    };
    d.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    d.fn.delay = function(t, n) {
        t = d.fx ? d.fx.speeds[t] || t : t;
        n = n || "fx";
        return this.queue(n, function(n, i) {
            var r = e.setTimeout(n, t);
            i.stop = function() {
                e.clearTimeout(r)
            }
        })
    };
    (function() {
        var e = i.createElement("input"),
            t = i.createElement("select"),
            n = t.appendChild(i.createElement("option"));
        e.type = "checkbox";
        c.checkOn = e.value !== "";
        c.optSelected = n.selected;
        t.disabled = true;
        c.optDisabled = !n.disabled;
        e = i.createElement("input");
        e.value = "t";
        e.type = "radio";
        c.radioValue = e.value === "t"
    })();
    var en, tn = d.expr.attrHandle;
    d.fn.extend({
        attr: function(e, t) {
            return M(this, d.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                d.removeAttr(this, e)
            })
        }
    });
    d.extend({
        attr: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (o === 3 || o === 8 || o === 2) {
                return
            }
            if (typeof e.getAttribute === "undefined") {
                return d.prop(e, t, n)
            }
            if (o !== 1 || !d.isXMLDoc(e)) {
                t = t.toLowerCase();
                r = d.attrHooks[t] || (d.expr.match.bool.test(t) ? en : undefined)
            }
            if (n !== undefined) {
                if (n === null) {
                    d.removeAttr(e, t);
                    return
                }
                if (r && "set" in r && (i = r.set(e, n, t)) !== undefined) {
                    return i
                }
                e.setAttribute(t, n + "");
                return n
            }
            if (r && "get" in r && (i = r.get(e, t)) !== null) {
                return i
            }
            i = d.find.attr(e, t);
            return i == null ? undefined : i
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!c.radioValue && t === "radio" && d.nodeName(e, "input")) {
                        var n = e.value;
                        e.setAttribute("type", t);
                        if (n) {
                            e.value = n
                        }
                        return t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
                o = t && t.match(P);
            if (o && e.nodeType === 1) {
                while (n = o[r++]) {
                    i = d.propFix[n] || n;
                    if (d.expr.match.bool.test(n)) {
                        e[i] = false
                    }
                    e.removeAttribute(n)
                }
            }
        }
    });
    en = {
        set: function(e, t, n) {
            if (t === false) {
                d.removeAttr(e, n)
            } else {
                e.setAttribute(n, n)
            }
            return n
        }
    };
    d.each(d.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = tn[t] || d.find.attr;
        tn[t] = function(e, t, i) {
            var r, o;
            if (!i) {
                o = tn[t];
                tn[t] = r;
                r = n(e, t, i) != null ? t.toLowerCase() : null;
                tn[t] = o
            }
            return r
        }
    });
    var nn = /^(?:input|select|textarea|button)$/i,
        rn = /^(?:a|area)$/i;
    d.fn.extend({
        prop: function(e, t) {
            return M(this, d.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[d.propFix[e] || e]
            })
        }
    });
    d.extend({
        prop: function(e, t, n) {
            var i, r, o = e.nodeType;
            if (o === 3 || o === 8 || o === 2) {
                return
            }
            if (o !== 1 || !d.isXMLDoc(e)) {
                t = d.propFix[t] || t;
                r = d.propHooks[t]
            }
            if (n !== undefined) {
                if (r && "set" in r && (i = r.set(e, n, t)) !== undefined) {
                    return i
                }
                return e[t] = n
            }
            if (r && "get" in r && (i = r.get(e, t)) !== null) {
                return i
            }
            return e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = d.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : nn.test(e.nodeName) || rn.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    if (!c.optSelected) {
        d.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                if (t && t.parentNode) {
                    t.parentNode.selectedIndex
                }
                return null
            },
            set: function(e) {
                var t = e.parentNode;
                if (t) {
                    t.selectedIndex;
                    if (t.parentNode) {
                        t.parentNode.selectedIndex
                    }
                }
            }
        }
    }
    d.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        d.propFix[this.toLowerCase()] = this
    });
    var on = /[\t\r\n\f]/g;

    function sn(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }
    d.fn.extend({
        addClass: function(e) {
            var t, n, i, r, o, s, a, u = 0;
            if (d.isFunction(e)) {
                return this.each(function(t) {
                    d(this).addClass(e.call(this, t, sn(this)))
                })
            }
            if (typeof e === "string" && e) {
                t = e.match(P) || [];
                while (n = this[u++]) {
                    r = sn(n);
                    i = n.nodeType === 1 && (" " + r + " ").replace(on, " ");
                    if (i) {
                        s = 0;
                        while (o = t[s++]) {
                            if (i.indexOf(" " + o + " ") < 0) {
                                i += o + " "
                            }
                        }
                        a = d.trim(i);
                        if (r !== a) {
                            n.setAttribute("class", a)
                        }
                    }
                }
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s, a, u = 0;
            if (d.isFunction(e)) {
                return this.each(function(t) {
                    d(this).removeClass(e.call(this, t, sn(this)))
                })
            }
            if (!arguments.length) {
                return this.attr("class", "")
            }
            if (typeof e === "string" && e) {
                t = e.match(P) || [];
                while (n = this[u++]) {
                    r = sn(n);
                    i = n.nodeType === 1 && (" " + r + " ").replace(on, " ");
                    if (i) {
                        s = 0;
                        while (o = t[s++]) {
                            while (i.indexOf(" " + o + " ") > -1) {
                                i = i.replace(" " + o + " ", " ")
                            }
                        }
                        a = d.trim(i);
                        if (r !== a) {
                            n.setAttribute("class", a)
                        }
                    }
                }
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            if (typeof t === "boolean" && n === "string") {
                return t ? this.addClass(e) : this.removeClass(e)
            }
            if (d.isFunction(e)) {
                return this.each(function(n) {
                    d(this).toggleClass(e.call(this, n, sn(this), t), t)
                })
            }
            return this.each(function() {
                var t, i, r, o;
                if (n === "string") {
                    i = 0;
                    r = d(this);
                    o = e.match(P) || [];
                    while (t = o[i++]) {
                        if (r.hasClass(t)) {
                            r.removeClass(t)
                        } else {
                            r.addClass(t)
                        }
                    }
                } else if (e === undefined || n === "boolean") {
                    t = sn(this);
                    if (t) {
                        R.set(this, "__className__", t)
                    }
                    if (this.setAttribute) {
                        this.setAttribute("class", t || e === false ? "" : R.get(this, "__className__") || "")
                    }
                }
            })
        },
        hasClass: function(e) {
            var t, n, i = 0;
            t = " " + e + " ";
            while (n = this[i++]) {
                if (n.nodeType === 1 && (" " + sn(n) + " ").replace(on, " ").indexOf(t) > -1) {
                    return true
                }
            }
            return false
        }
    });
    var an = /\r/g,
        un = /[\x20\t\r\n\f]+/g;
    d.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            if (!arguments.length) {
                if (r) {
                    t = d.valHooks[r.type] || d.valHooks[r.nodeName.toLowerCase()];
                    if (t && "get" in t && (n = t.get(r, "value")) !== undefined) {
                        return n
                    }
                    n = r.value;
                    return typeof n === "string" ? n.replace(an, "") : n == null ? "" : n
                }
                return
            }
            i = d.isFunction(e);
            return this.each(function(n) {
                var r;
                if (this.nodeType !== 1) {
                    return
                }
                if (i) {
                    r = e.call(this, n, d(this).val())
                } else {
                    r = e
                }
                if (r == null) {
                    r = ""
                } else if (typeof r === "number") {
                    r += ""
                } else if (d.isArray(r)) {
                    r = d.map(r, function(e) {
                        return e == null ? "" : e + ""
                    })
                }
                t = d.valHooks[this.type] || d.valHooks[this.nodeName.toLowerCase()];
                if (!t || !("set" in t) || t.set(this, r, "value") === undefined) {
                    this.value = r
                }
            })
        }
    });
    d.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = d.find.attr(e, "value");
                    return t != null ? t : d.trim(d.text(e)).replace(un, " ")
                }
            },
            select: {
                get: function(e) {
                    var t, n, i = e.options,
                        r = e.selectedIndex,
                        o = e.type === "select-one" || r < 0,
                        s = o ? null : [],
                        a = o ? r + 1 : i.length,
                        u = r < 0 ? a : o ? r : 0;
                    for (; u < a; u++) {
                        n = i[u];
                        if ((n.selected || u === r) && (c.optDisabled ? !n.disabled : n.getAttribute("disabled") === null) && (!n.parentNode.disabled || !d.nodeName(n.parentNode, "optgroup"))) {
                            t = d(n).val();
                            if (o) {
                                return t
                            }
                            s.push(t)
                        }
                    }
                    return s
                },
                set: function(e, t) {
                    var n, i, r = e.options,
                        o = d.makeArray(t),
                        s = r.length;
                    while (s--) {
                        i = r[s];
                        if (i.selected = d.inArray(d.valHooks.option.get(i), o) > -1) {
                            n = true
                        }
                    }
                    if (!n) {
                        e.selectedIndex = -1
                    }
                    return o
                }
            }
        }
    });
    d.each(["radio", "checkbox"], function() {
        d.valHooks[this] = {
            set: function(e, t) {
                if (d.isArray(t)) {
                    return e.checked = d.inArray(d(e).val(), t) > -1
                }
            }
        };
        if (!c.checkOn) {
            d.valHooks[this].get = function(e) {
                return e.getAttribute("value") === null ? "on" : e.value
            }
        }
    });
    var fn = /^(?:focusinfocus|focusoutblur)$/;
    d.extend(d.event, {
        trigger: function(t, n, r, o) {
            var s, a, u, f, c, p, h, g = [r || i],
                m = l.call(t, "type") ? t.type : t,
                y = l.call(t, "namespace") ? t.namespace.split(".") : [];
            a = u = r = r || i;
            if (r.nodeType === 3 || r.nodeType === 8) {
                return
            }
            if (fn.test(m + d.event.triggered)) {
                return
            }
            if (m.indexOf(".") > -1) {
                y = m.split(".");
                m = y.shift();
                y.sort()
            }
            c = m.indexOf(":") < 0 && "on" + m;
            t = t[d.expando] ? t : new d.Event(m, typeof t === "object" && t);
            t.isTrigger = o ? 2 : 3;
            t.namespace = y.join(".");
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
            t.result = undefined;
            if (!t.target) {
                t.target = r
            }
            n = n == null ? [t] : d.makeArray(n, [t]);
            h = d.event.special[m] || {};
            if (!o && h.trigger && h.trigger.apply(r, n) === false) {
                return
            }
            if (!o && !h.noBubble && !d.isWindow(r)) {
                f = h.delegateType || m;
                if (!fn.test(f + m)) {
                    a = a.parentNode
                }
                for (; a; a = a.parentNode) {
                    g.push(a);
                    u = a
                }
                if (u === (r.ownerDocument || i)) {
                    g.push(u.defaultView || u.parentWindow || e)
                }
            }
            s = 0;
            while ((a = g[s++]) && !t.isPropagationStopped()) {
                t.type = s > 1 ? f : h.bindType || m;
                p = (R.get(a, "events") || {})[t.type] && R.get(a, "handle");
                if (p) {
                    p.apply(a, n)
                }
                p = c && a[c];
                if (p && p.apply && F(a)) {
                    t.result = p.apply(a, n);
                    if (t.result === false) {
                        t.preventDefault()
                    }
                }
            }
            t.type = m;
            if (!o && !t.isDefaultPrevented()) {
                if ((!h._default || h._default.apply(g.pop(), n) === false) && F(r)) {
                    if (c && d.isFunction(r[m]) && !d.isWindow(r)) {
                        u = r[c];
                        if (u) {
                            r[c] = null
                        }
                        d.event.triggered = m;
                        r[m]();
                        d.event.triggered = undefined;
                        if (u) {
                            r[c] = u
                        }
                    }
                }
            }
            return t.result
        },
        simulate: function(e, t, n) {
            var i = d.extend(new d.Event, n, {
                type: e,
                isSimulated: true
            });
            d.event.trigger(i, null, t)
        }
    });
    d.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                d.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) {
                return d.event.trigger(e, t, n, true)
            }
        }
    });
    d.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function(e, t) {
        d.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    });
    d.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    c.focusin = "onfocusin" in e;
    if (!c.focusin) {
        d.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            var n = function(e) {
                d.event.simulate(t, e.target, d.event.fix(e))
            };
            d.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        r = R.access(i, t);
                    if (!r) {
                        i.addEventListener(e, n, true)
                    }
                    R.access(i, t, (r || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        r = R.access(i, t) - 1;
                    if (!r) {
                        i.removeEventListener(e, n, true);
                        R.remove(i, t)
                    } else {
                        R.access(i, t, r)
                    }
                }
            }
        })
    }
    var ln = e.location;
    var cn = d.now();
    var pn = /\?/;
    d.parseJSON = function(e) {
        return JSON.parse(e + "")
    };
    d.parseXML = function(t) {
        var n;
        if (!t || typeof t !== "string") {
            return null
        }
        try {
            n = (new e.DOMParser).parseFromString(t, "text/xml")
        } catch (i) {
            n = undefined
        }
        if (!n || n.getElementsByTagName("parsererror").length) {
            d.error("Invalid XML: " + t)
        }
        return n
    };
    var dn = /#.*$/,
        hn = /([?&])_=[^&]*/,
        gn = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        mn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        yn = /^(?:GET|HEAD)$/,
        vn = /^\/\//,
        xn = {},
        bn = {},
        wn = "*/".concat("*"),
        Tn = i.createElement("a");
    Tn.href = ln.href;

    function Cn(e) {
        return function(t, n) {
            if (typeof t !== "string") {
                n = t;
                t = "*"
            }
            var i, r = 0,
                o = t.toLowerCase().match(P) || [];
            if (d.isFunction(n)) {
                while (i = o[r++]) {
                    if (i[0] === "+") {
                        i = i.slice(1) || "*";
                        (e[i] = e[i] || []).unshift(n)
                    } else {
                        (e[i] = e[i] || []).push(n)
                    }
                }
            }
        }
    }

    function kn(e, t, n, i) {
        var r = {},
            o = e === bn;

        function s(a) {
            var u;
            r[a] = true;
            d.each(e[a] || [], function(e, a) {
                var f = a(t, n, i);
                if (typeof f === "string" && !o && !r[f]) {
                    t.dataTypes.unshift(f);
                    s(f);
                    return false
                } else if (o) {
                    return !(u = f)
                }
            });
            return u
        }
        return s(t.dataTypes[0]) || !r["*"] && s("*")
    }

    function Sn(e, t) {
        var n, i, r = d.ajaxSettings.flatOptions || {};
        for (n in t) {
            if (t[n] !== undefined) {
                (r[n] ? e : i || (i = {}))[n] = t[n]
            }
        }
        if (i) {
            d.extend(true, e, i)
        }
        return e
    }

    function En(e, t, n) {
        var i, r, o, s, a = e.contents,
            u = e.dataTypes;
        while (u[0] === "*") {
            u.shift();
            if (i === undefined) {
                i = e.mimeType || t.getResponseHeader("Content-Type")
            }
        }
        if (i) {
            for (r in a) {
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
            }
        }
        if (u[0] in n) {
            o = u[0]
        } else {
            for (r in n) {
                if (!u[0] || e.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                if (!s) {
                    s = r
                }
            }
            o = o || s
        }
        if (o) {
            if (o !== u[0]) {
                u.unshift(o)
            }
            return n[o]
        }
    }

    function Nn(e, t, n, i) {
        var r, o, s, a, u, f = {},
            l = e.dataTypes.slice();
        if (l[1]) {
            for (s in e.converters) {
                f[s.toLowerCase()] = e.converters[s]
            }
        }
        o = l.shift();
        while (o) {
            if (e.responseFields[o]) {
                n[e.responseFields[o]] = t
            }
            if (!u && i && e.dataFilter) {
                t = e.dataFilter(t, e.dataType)
            }
            u = o;
            o = l.shift();
            if (o) {
                if (o === "*") {
                    o = u
                } else if (u !== "*" && u !== o) {
                    s = f[u + " " + o] || f["* " + o];
                    if (!s) {
                        for (r in f) {
                            a = r.split(" ");
                            if (a[1] === o) {
                                s = f[u + " " + a[0]] || f["* " + a[0]];
                                if (s) {
                                    if (s === true) {
                                        s = f[r]
                                    } else if (f[r] !== true) {
                                        o = a[0];
                                        l.unshift(a[1])
                                    }
                                    break
                                }
                            }
                        }
                    }
                    if (s !== true) {
                        if (s && e.throws) {
                            t = s(t)
                        } else {
                            try {
                                t = s(t)
                            } catch (c) {
                                return {
                                    state: "parsererror",
                                    error: s ? c : "No conversion from " + u + " to " + o
                                }
                            }
                        }
                    }
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    d.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ln.href,
            type: "GET",
            isLocal: mn.test(ln.protocol),
            global: true,
            processData: true,
            async: true,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": wn,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": true,
                "text json": d.parseJSON,
                "text xml": d.parseXML
            },
            flatOptions: {
                url: true,
                context: true
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Sn(Sn(e, d.ajaxSettings), t) : Sn(d.ajaxSettings, e)
        },
        ajaxPrefilter: Cn(xn),
        ajaxTransport: Cn(bn),
        ajax: function(t, n) {
            if (typeof t === "object") {
                n = t;
                t = undefined
            }
            n = n || {};
            var r, o, s, a, u, f, l, c, p = d.ajaxSetup({}, n),
                h = p.context || p,
                g = p.context && (h.nodeType || h.jquery) ? d(h) : d.event,
                m = d.Deferred(),
                y = d.Callbacks("once memory"),
                v = p.statusCode || {},
                x = {},
                b = {},
                w = 0,
                T = "canceled",
                C = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (w === 2) {
                            if (!a) {
                                a = {};
                                while (t = gn.exec(s)) {
                                    a[t[1].toLowerCase()] = t[2]
                                }
                            }
                            t = a[e.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return w === 2 ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        if (!w) {
                            e = b[n] = b[n] || e;
                            x[e] = t
                        }
                        return this
                    },
                    overrideMimeType: function(e) {
                        if (!w) {
                            p.mimeType = e
                        }
                        return this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e) {
                            if (w < 2) {
                                for (t in e) {
                                    v[t] = [v[t], e[t]]
                                }
                            } else {
                                C.always(e[C.status])
                            }
                        }
                        return this
                    },
                    abort: function(e) {
                        var t = e || T;
                        if (r) {
                            r.abort(t)
                        }
                        S(0, t);
                        return this
                    }
                };
            m.promise(C).complete = y.add;
            C.success = C.done;
            C.error = C.fail;
            p.url = ((t || p.url || ln.href) + "").replace(dn, "").replace(vn, ln.protocol + "//");
            p.type = n.method || n.type || p.method || p.type;
            p.dataTypes = d.trim(p.dataType || "*").toLowerCase().match(P) || [""];
            if (p.crossDomain == null) {
                f = i.createElement("a");
                try {
                    f.href = p.url;
                    f.href = f.href;
                    p.crossDomain = Tn.protocol + "//" + Tn.host !== f.protocol + "//" + f.host
                } catch (k) {
                    p.crossDomain = true
                }
            }
            if (p.data && p.processData && typeof p.data !== "string") {
                p.data = d.param(p.data, p.traditional)
            }
            kn(xn, p, n, C);
            if (w === 2) {
                return C
            }
            l = d.event && p.global;
            if (l && d.active++ === 0) {
                d.event.trigger("ajaxStart")
            }
            p.type = p.type.toUpperCase();
            p.hasContent = !yn.test(p.type);
            o = p.url;
            if (!p.hasContent) {
                if (p.data) {
                    o = p.url += (pn.test(o) ? "&" : "?") + p.data;
                    delete p.data
                }
                if (p.cache === false) {
                    p.url = hn.test(o) ? o.replace(hn, "$1_=" + cn++) : o + (pn.test(o) ? "&" : "?") + "_=" + cn++
                }
            }
            if (p.ifModified) {
                if (d.lastModified[o]) {
                    C.setRequestHeader("If-Modified-Since", d.lastModified[o])
                }
                if (d.etag[o]) {
                    C.setRequestHeader("If-None-Match", d.etag[o])
                }
            }
            if (p.data && p.hasContent && p.contentType !== false || n.contentType) {
                C.setRequestHeader("Content-Type", p.contentType)
            }
            C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + (p.dataTypes[0] !== "*" ? ", " + wn + "; q=0.01" : "") : p.accepts["*"]);
            for (c in p.headers) {
                C.setRequestHeader(c, p.headers[c])
            }
            if (p.beforeSend && (p.beforeSend.call(h, C, p) === false || w === 2)) {
                return C.abort()
            }
            T = "abort";
            for (c in {
                    success: 1,
                    error: 1,
                    complete: 1
                }) {
                C[c](p[c])
            }
            r = kn(bn, p, n, C);
            if (!r) {
                S(-1, "No Transport")
            } else {
                C.readyState = 1;
                if (l) {
                    g.trigger("ajaxSend", [C, p])
                }
                if (w === 2) {
                    return C
                }
                if (p.async && p.timeout > 0) {
                    u = e.setTimeout(function() {
                        C.abort("timeout")
                    }, p.timeout)
                }
                try {
                    w = 1;
                    r.send(x, S)
                } catch (k) {
                    if (w < 2) {
                        S(-1, k)
                    } else {
                        throw k
                    }
                }
            }

            function S(t, n, i, a) {
                var f, c, x, b, T, k = n;
                if (w === 2) {
                    return
                }
                w = 2;
                if (u) {
                    e.clearTimeout(u)
                }
                r = undefined;
                s = a || "";
                C.readyState = t > 0 ? 4 : 0;
                f = t >= 200 && t < 300 || t === 304;
                if (i) {
                    b = En(p, C, i)
                }
                b = Nn(p, b, C, f);
                if (f) {
                    if (p.ifModified) {
                        T = C.getResponseHeader("Last-Modified");
                        if (T) {
                            d.lastModified[o] = T
                        }
                        T = C.getResponseHeader("etag");
                        if (T) {
                            d.etag[o] = T
                        }
                    }
                    if (t === 204 || p.type === "HEAD") {
                        k = "nocontent"
                    } else if (t === 304) {
                        k = "notmodified"
                    } else {
                        k = b.state;
                        c = b.data;
                        x = b.error;
                        f = !x
                    }
                } else {
                    x = k;
                    if (t || !k) {
                        k = "error";
                        if (t < 0) {
                            t = 0
                        }
                    }
                }
                C.status = t;
                C.statusText = (n || k) + "";
                if (f) {
                    m.resolveWith(h, [c, k, C])
                } else {
                    m.rejectWith(h, [C, k, x])
                }
                C.statusCode(v);
                v = undefined;
                if (l) {
                    g.trigger(f ? "ajaxSuccess" : "ajaxError", [C, p, f ? c : x])
                }
                y.fireWith(h, [C, k]);
                if (l) {
                    g.trigger("ajaxComplete", [C, p]);
                    if (!--d.active) {
                        d.event.trigger("ajaxStop")
                    }
                }
            }
            return C
        },
        getJSON: function(e, t, n) {
            return d.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return d.get(e, undefined, t, "script")
        }
    });
    d.each(["get", "post"], function(e, t) {
        d[t] = function(e, n, i, r) {
            if (d.isFunction(n)) {
                r = r || i;
                i = n;
                n = undefined
            }
            return d.ajax(d.extend({
                url: e,
                type: t,
                dataType: r,
                data: n,
                success: i
            }, d.isPlainObject(e) && e))
        }
    });
    d._evalUrl = function(e) {
        return d.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            async: false,
            global: false,
            "throws": true
        })
    };
    d.fn.extend({
        wrapAll: function(e) {
            var t;
            if (d.isFunction(e)) {
                return this.each(function(t) {
                    d(this).wrapAll(e.call(this, t))
                })
            }
            if (this[0]) {
                t = d(e, this[0].ownerDocument).eq(0).clone(true);
                if (this[0].parentNode) {
                    t.insertBefore(this[0])
                }
                t.map(function() {
                    var e = this;
                    while (e.firstElementChild) {
                        e = e.firstElementChild
                    }
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            if (d.isFunction(e)) {
                return this.each(function(t) {
                    d(this).wrapInner(e.call(this, t))
                })
            }
            return this.each(function() {
                var t = d(this),
                    n = t.contents();
                if (n.length) {
                    n.wrapAll(e)
                } else {
                    t.append(e)
                }
            })
        },
        wrap: function(e) {
            var t = d.isFunction(e);
            return this.each(function(n) {
                d(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                if (!d.nodeName(this, "body")) {
                    d(this).replaceWith(this.childNodes)
                }
            }).end()
        }
    });
    d.expr.filters.hidden = function(e) {
        return !d.expr.filters.visible(e)
    };
    d.expr.filters.visible = function(e) {
        return e.offsetWidth > 0 || e.offsetHeight > 0 || e.getClientRects().length > 0
    };
    var Dn = /%20/g,
        An = /\[\]$/,
        jn = /\r?\n/g,
        Ln = /^(?:submit|button|image|reset|file)$/i,
        Pn = /^(?:input|select|textarea|keygen)/i;

    function On(e, t, n, i) {
        var r;
        if (d.isArray(t)) {
            d.each(t, function(t, r) {
                if (n || An.test(e)) {
                    i(e, r)
                } else {
                    On(e + "[" + (typeof r === "object" && r != null ? t : "") + "]", r, n, i)
                }
            })
        } else if (!n && d.type(t) === "object") {
            for (r in t) {
                On(e + "[" + r + "]", t[r], n, i)
            }
        } else {
            i(e, t)
        }
    }
    d.param = function(e, t) {
        var n, i = [],
            r = function(e, t) {
                t = d.isFunction(t) ? t() : t == null ? "" : t;
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
            };
        if (t === undefined) {
            t = d.ajaxSettings && d.ajaxSettings.traditional
        }
        if (d.isArray(e) || e.jquery && !d.isPlainObject(e)) {
            d.each(e, function() {
                r(this.name, this.value)
            })
        } else {
            for (n in e) {
                On(n, e[n], t, r)
            }
        }
        return i.join("&").replace(Dn, "+")
    };
    d.fn.extend({
        serialize: function() {
            return d.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = d.prop(this, "elements");
                return e ? d.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !d(this).is(":disabled") && Pn.test(this.nodeName) && !Ln.test(e) && (this.checked || !Y.test(e))
            }).map(function(e, t) {
                var n = d(this).val();
                return n == null ? null : d.isArray(n) ? d.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(jn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(jn, "\r\n")
                }
            }).get()
        }
    });
    d.ajaxSettings.xhr = function() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    };
    var qn = {
            0: 200,
            1223: 204
        },
        Hn = d.ajaxSettings.xhr();
    c.cors = !!Hn && "withCredentials" in Hn;
    c.ajax = Hn = !!Hn;
    d.ajaxTransport(function(t) {
        var n, i;
        if (c.cors || Hn && !t.crossDomain) {
            return {
                send: function(r, o) {
                    var s, a = t.xhr();
                    a.open(t.type, t.url, t.async, t.username, t.password);
                    if (t.xhrFields) {
                        for (s in t.xhrFields) {
                            a[s] = t.xhrFields[s]
                        }
                    }
                    if (t.mimeType && a.overrideMimeType) {
                        a.overrideMimeType(t.mimeType)
                    }
                    if (!t.crossDomain && !r["X-Requested-With"]) {
                        r["X-Requested-With"] = "XMLHttpRequest"
                    }
                    for (s in r) {
                        a.setRequestHeader(s, r[s])
                    }
                    n = function(e) {
                        return function() {
                            if (n) {
                                n = i = a.onload = a.onerror = a.onabort = a.onreadystatechange = null;
                                if (e === "abort") {
                                    a.abort()
                                } else if (e === "error") {
                                    if (typeof a.status !== "number") {
                                        o(0, "error")
                                    } else {
                                        o(a.status, a.statusText)
                                    }
                                } else {
                                    o(qn[a.status] || a.status, a.statusText, (a.responseType || "text") !== "text" || typeof a.responseText !== "string" ? {
                                        binary: a.response
                                    } : {
                                        text: a.responseText
                                    }, a.getAllResponseHeaders())
                                }
                            }
                        }
                    };
                    a.onload = n();
                    i = a.onerror = n("error");
                    if (a.onabort !== undefined) {
                        a.onabort = i
                    } else {
                        a.onreadystatechange = function() {
                            if (a.readyState === 4) {
                                e.setTimeout(function() {
                                    if (n) {
                                        i()
                                    }
                                })
                            }
                        }
                    }
                    n = n("abort");
                    try {
                        a.send(t.hasContent && t.data || null)
                    } catch (u) {
                        if (n) {
                            throw u
                        }
                    }
                },
                abort: function() {
                    if (n) {
                        n()
                    }
                }
            }
        }
    });
    d.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                d.globalEval(e);
                return e
            }
        }
    });
    d.ajaxPrefilter("script", function(e) {
        if (e.cache === undefined) {
            e.cache = false
        }
        if (e.crossDomain) {
            e.type = "GET"
        }
    });
    d.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n;
            return {
                send: function(r, o) {
                    t = d("<script>").prop({
                        charset: e.scriptCharset,
                        src: e.url
                    }).on("load error", n = function(e) {
                        t.remove();
                        n = null;
                        if (e) {
                            o(e.type === "error" ? 404 : 200, e.type)
                        }
                    });
                    i.head.appendChild(t[0])
                },
                abort: function() {
                    if (n) {
                        n()
                    }
                }
            }
        }
    });
    var Mn = [],
        Fn = /(=)\?(?=&|$)|\?\?/;
    d.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Mn.pop() || d.expando + "_" + cn++;
            this[e] = true;
            return e
        }
    });
    d.ajaxPrefilter("json jsonp", function(t, n, i) {
        var r, o, s, a = t.jsonp !== false && (Fn.test(t.url) ? "url" : typeof t.data === "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && Fn.test(t.data) && "data");
        if (a || t.dataTypes[0] === "jsonp") {
            r = t.jsonpCallback = d.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback;
            if (a) {
                t[a] = t[a].replace(Fn, "$1" + r)
            } else if (t.jsonp !== false) {
                t.url += (pn.test(t.url) ? "&" : "?") + t.jsonp + "=" + r
            }
            t.converters["script json"] = function() {
                if (!s) {
                    d.error(r + " was not called")
                }
                return s[0]
            };
            t.dataTypes[0] = "json";
            o = e[r];
            e[r] = function() {
                s = arguments
            };
            i.always(function() {
                if (o === undefined) {
                    d(e).removeProp(r)
                } else {
                    e[r] = o
                }
                if (t[r]) {
                    t.jsonpCallback = n.jsonpCallback;
                    Mn.push(r)
                }
                if (s && d.isFunction(o)) {
                    o(s[0])
                }
                s = o = undefined
            });
            return "script"
        }
    });
    d.parseHTML = function(e, t, n) {
        if (!e || typeof e !== "string") {
            return null
        }
        if (typeof t === "boolean") {
            n = t;
            t = false
        }
        t = t || i;
        var r = C.exec(e),
            o = !n && [];
        if (r) {
            return [t.createElement(r[1])]
        }
        r = nt([e], t, o);
        if (o && o.length) {
            d(o).remove()
        }
        return d.merge([], r.childNodes)
    };
    var In = d.fn.load;
    d.fn.load = function(e, t, n) {
        if (typeof e !== "string" && In) {
            return In.apply(this, arguments)
        }
        var i, r, o, s = this,
            a = e.indexOf(" ");
        if (a > -1) {
            i = d.trim(e.slice(a));
            e = e.slice(0, a)
        }
        if (d.isFunction(t)) {
            n = t;
            t = undefined
        } else if (t && typeof t === "object") {
            r = "POST"
        }
        if (s.length > 0) {
            d.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments;
                s.html(i ? d("<div>").append(d.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                s.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            })
        }
        return this
    };
    d.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        d.fn[t] = function(e) {
            return this.on(t, e)
        }
    });
    d.expr.filters.animated = function(e) {
        return d.grep(d.timers, function(t) {
            return e === t.elem
        }).length
    };

    function Rn(e) {
        return d.isWindow(e) ? e : e.nodeType === 9 && e.defaultView
    }
    d.offset = {
        setOffset: function(e, t, n) {
            var i, r, o, s, a, u, f, l = d.css(e, "position"),
                c = d(e),
                p = {};
            if (l === "static") {
                e.style.position = "relative"
            }
            a = c.offset();
            o = d.css(e, "top");
            u = d.css(e, "left");
            f = (l === "absolute" || l === "fixed") && (o + u).indexOf("auto") > -1;
            if (f) {
                i = c.position();
                s = i.top;
                r = i.left
            } else {
                s = parseFloat(o) || 0;
                r = parseFloat(u) || 0
            }
            if (d.isFunction(t)) {
                t = t.call(e, n, d.extend({}, a))
            }
            if (t.top != null) {
                p.top = t.top - a.top + s
            }
            if (t.left != null) {
                p.left = t.left - a.left + r
            }
            if ("using" in t) {
                t.using.call(e, p)
            } else {
                c.css(p)
            }
        }
    };
    d.fn.extend({
        offset: function(e) {
            if (arguments.length) {
                return e === undefined ? this : this.each(function(t) {
                    d.offset.setOffset(this, e, t)
                })
            }
            var t, n, i = this[0],
                r = {
                    top: 0,
                    left: 0
                },
                o = i && i.ownerDocument;
            if (!o) {
                return
            }
            t = o.documentElement;
            if (!d.contains(t, i)) {
                return r
            }
            r = i.getBoundingClientRect();
            n = Rn(o);
            return {
                top: r.top + n.pageYOffset - t.clientTop,
                left: r.left + n.pageXOffset - t.clientLeft
            }
        },
        position: function() {
            if (!this[0]) {
                return
            }
            var e, t, n = this[0],
                i = {
                    top: 0,
                    left: 0
                };
            if (d.css(n, "position") === "fixed") {
                t = n.getBoundingClientRect()
            } else {
                e = this.offsetParent();
                t = this.offset();
                if (!d.nodeName(e[0], "html")) {
                    i = e.offset()
                }
                i.top += d.css(e[0], "borderTopWidth", true);
                i.left += d.css(e[0], "borderLeftWidth", true)
            }
            return {
                top: t.top - i.top - d.css(n, "marginTop", true),
                left: t.left - i.left - d.css(n, "marginLeft", true)
            }
        },
        offsetParent: function() {
            return this.map(function() {
                var e = this.offsetParent;
                while (e && d.css(e, "position") === "static") {
                    e = e.offsetParent
                }
                return e || jt
            })
        }
    });
    d.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        d.fn[e] = function(i) {
            return M(this, function(e, i, r) {
                var o = Rn(e);
                if (r === undefined) {
                    return o ? o[t] : e[i]
                }
                if (o) {
                    o.scrollTo(!n ? r : o.pageXOffset, n ? r : o.pageYOffset)
                } else {
                    e[i] = r
                }
            }, e, i, arguments.length)
        }
    });
    d.each(["top", "left"], function(e, t) {
        d.cssHooks[t] = Pt(c.pixelPosition, function(e, n) {
            if (n) {
                n = Lt(e, t);
                return Nt.test(n) ? d(e).position()[t] + "px" : n
            }
        })
    });
    d.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        d.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, i) {
            d.fn[i] = function(i, r) {
                var o = arguments.length && (n || typeof i !== "boolean"),
                    s = n || (i === true || r === true ? "margin" : "border");
                return M(this, function(t, n, i) {
                    var r;
                    if (d.isWindow(t)) {
                        return t.document.documentElement["client" + e]
                    }
                    if (t.nodeType === 9) {
                        r = t.documentElement;
                        return Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])
                    }
                    return i === undefined ? d.css(t, n, s) : d.style(t, n, i, s)
                }, t, o ? i : undefined, o, null)
            }
        })
    });
    d.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n)
        },
        size: function() {
            return this.length
        }
    });
    d.fn.andSelf = d.fn.addBack;
    if (typeof define === "function" && define.amd) {
        define("jquery", [], function() {
            return d
        })
    }
    var Bn = e.jQuery,
        $n = e.$;
    d.noConflict = function(t) {
        if (e.$ === d) {
            e.$ = $n
        }
        if (t && e.jQuery === d) {
            e.jQuery = Bn
        }
        return d
    };
    if (!t) {
        e.jQuery = e.$ = d
    }
    return d
});
(function n(e, t) {
    if (typeof exports === "object" && typeof module === "object") module.exports = t();
    else if (typeof define === "function" && define.amd) define([], t);
    else if (typeof exports === "object") exports["Typed"] = t();
    else e["Typed"] = t()
})(this, function() {
    return function(e) {
        var t = {};

        function n(i) {
            if (t[i]) return t[i].exports;
            var r = t[i] = {
                exports: {},
                id: i,
                loaded: false
            };
            e[i].call(r.exports, r, r.exports, n);
            r.loaded = true;
            return r.exports
        }
        n.m = e;
        n.c = t;
        n.p = "";
        return n(0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t
            }
        }();

        function r(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var o = n(1);
        var s = n(3);
        var a = function() {
            function e(t, n) {
                r(this, e);
                o.initializer.load(this, n, t);
                this.begin()
            }
            i(e, [{
                key: "toggle",
                value: function t() {
                    this.pause.status ? this.start() : this.stop()
                }
            }, {
                key: "stop",
                value: function n() {
                    if (this.typingComplete) return;
                    if (this.pause.status) return;
                    this.toggleBlinking(true);
                    this.pause.status = true;
                    this.options.onStop(this.arrayPos, this)
                }
            }, {
                key: "start",
                value: function a() {
                    if (this.typingComplete) return;
                    if (!this.pause.status) return;
                    this.pause.status = false;
                    if (this.pause.typewrite) {
                        this.typewrite(this.pause.curString, this.pause.curStrPos)
                    } else {
                        this.backspace(this.pause.curString, this.pause.curStrPos)
                    }
                    this.options.onStart(this.arrayPos, this)
                }
            }, {
                key: "destroy",
                value: function u() {
                    this.reset(false);
                    this.options.onDestroy(this)
                }
            }, {
                key: "reset",
                value: function f() {
                    var e = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
                    clearInterval(this.timeout);
                    this.replaceText("");
                    if (this.cursor && this.cursor.parentNode) {
                        this.cursor.parentNode.removeChild(this.cursor);
                        this.cursor = null
                    }
                    this.strPos = 0;
                    this.arrayPos = 0;
                    this.curLoop = 0;
                    if (e) {
                        this.insertCursor();
                        this.options.onReset(this);
                        this.begin()
                    }
                }
            }, {
                key: "begin",
                value: function l() {
                    var e = this;
                    this.typingComplete = false;
                    this.shuffleStringsIfNeeded(this);
                    this.insertCursor();
                    if (this.bindInputFocusEvents) this.bindFocusEvents();
                    this.timeout = setTimeout(function() {
                        if (!e.currentElContent || e.currentElContent.length === 0) {
                            e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos)
                        } else {
                            e.backspace(e.currentElContent, e.currentElContent.length)
                        }
                    }, this.startDelay)
                }
            }, {
                key: "typewrite",
                value: function c(e, t) {
                    var n = this;
                    if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                        this.el.classList.remove(this.fadeOutClass);
                        if (this.cursor) this.cursor.classList.remove(this.fadeOutClass)
                    }
                    var i = this.humanizer(this.typeSpeed);
                    var r = 1;
                    if (this.pause.status === true) {
                        this.setPauseStatus(e, t, true);
                        return
                    }
                    this.timeout = setTimeout(function() {
                        t = s.htmlParser.typeHtmlChars(e, t, n);
                        var i = 0;
                        var o = e.substr(t);
                        if (o.charAt(0) === "^") {
                            if (/^\^\d+/.test(o)) {
                                var a = 1;
                                o = /\d+/.exec(o)[0];
                                a += o.length;
                                i = parseInt(o);
                                n.temporaryPause = true;
                                n.options.onTypingPaused(n.arrayPos, n);
                                e = e.substring(0, t) + e.substring(t + a);
                                n.toggleBlinking(true)
                            }
                        }
                        if (o.charAt(0) === "`") {
                            while (e.substr(t + r).charAt(0) !== "`") {
                                r++;
                                if (t + r > e.length) break
                            }
                            var u = e.substring(0, t);
                            var f = e.substring(u.length + 1, t + r);
                            var l = e.substring(t + r + 1);
                            e = u + f + l;
                            r--
                        }
                        n.timeout = setTimeout(function() {
                            n.toggleBlinking(false);
                            if (t === e.length) {
                                n.doneTyping(e, t)
                            } else {
                                n.keepTyping(e, t, r)
                            }
                            if (n.temporaryPause) {
                                n.temporaryPause = false;
                                n.options.onTypingResumed(n.arrayPos, n)
                            }
                        }, i)
                    }, i)
                }
            }, {
                key: "keepTyping",
                value: function p(e, t, n) {
                    if (t === 0) {
                        this.toggleBlinking(false);
                        this.options.preStringTyped(this.arrayPos, this)
                    }
                    t += n;
                    var i = e.substr(0, t);
                    this.replaceText(i);
                    this.typewrite(e, t)
                }
            }, {
                key: "doneTyping",
                value: function d(e, t) {
                    var n = this;
                    this.options.onStringTyped(this.arrayPos, this);
                    this.toggleBlinking(true);
                    if (this.arrayPos === this.strings.length - 1) {
                        this.complete();
                        if (this.loop === false || this.curLoop === this.loopCount) {
                            return
                        }
                    }
                    this.timeout = setTimeout(function() {
                        n.backspace(e, t)
                    }, this.backDelay)
                }
            }, {
                key: "backspace",
                value: function h(e, t) {
                    var n = this;
                    if (this.pause.status === true) {
                        this.setPauseStatus(e, t, true);
                        return
                    }
                    if (this.fadeOut) return this.initFadeOut();
                    this.toggleBlinking(false);
                    var i = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout(function() {
                        t = s.htmlParser.backSpaceHtmlChars(e, t, n);
                        var i = e.substr(0, t);
                        n.replaceText(i);
                        if (n.smartBackspace) {
                            var r = n.strings[n.arrayPos + 1];
                            if (r && i === r.substr(0, t)) {
                                n.stopNum = t
                            } else {
                                n.stopNum = 0
                            }
                        }
                        if (t > n.stopNum) {
                            t--;
                            n.backspace(e, t)
                        } else if (t <= n.stopNum) {
                            n.arrayPos++;
                            if (n.arrayPos === n.strings.length) {
                                n.arrayPos = 0;
                                n.options.onLastStringBackspaced();
                                n.shuffleStringsIfNeeded();
                                n.begin()
                            } else {
                                n.typewrite(n.strings[n.sequence[n.arrayPos]], t)
                            }
                        }
                    }, i)
                }
            }, {
                key: "complete",
                value: function g() {
                    this.options.onComplete(this);
                    if (this.loop) {
                        this.curLoop++
                    } else {
                        this.typingComplete = true
                    }
                }
            }, {
                key: "setPauseStatus",
                value: function m(e, t, n) {
                    this.pause.typewrite = n;
                    this.pause.curString = e;
                    this.pause.curStrPos = t
                }
            }, {
                key: "toggleBlinking",
                value: function y(e) {
                    if (!this.cursor) return;
                    if (this.pause.status) return;
                    if (this.cursorBlinking === e) return;
                    this.cursorBlinking = e;
                    var t = e ? "infinite" : 0;
                    this.cursor.style.animationIterationCount = t
                }
            }, {
                key: "humanizer",
                value: function v(e) {
                    return Math.round(Math.random() * e / 2) + e
                }
            }, {
                key: "shuffleStringsIfNeeded",
                value: function x() {
                    if (!this.shuffle) return;
                    this.sequence = this.sequence.sort(function() {
                        return Math.random() - .5
                    })
                }
            }, {
                key: "initFadeOut",
                value: function b() {
                    var e = this;
                    this.el.className += " " + this.fadeOutClass;
                    if (this.cursor) this.cursor.className += " " + this.fadeOutClass;
                    return setTimeout(function() {
                        e.arrayPos++;
                        e.replaceText("");
                        if (e.strings.length > e.arrayPos) {
                            e.typewrite(e.strings[e.sequence[e.arrayPos]], 0)
                        } else {
                            e.typewrite(e.strings[0], 0);
                            e.arrayPos = 0
                        }
                    }, this.fadeOutDelay)
                }
            }, {
                key: "replaceText",
                value: function w(e) {
                    if (this.attr) {
                        this.el.setAttribute(this.attr, e)
                    } else {
                        if (this.isInput) {
                            this.el.value = e
                        } else if (this.contentType === "html") {
                            this.el.innerHTML = e
                        } else {
                            this.el.textContent = e
                        }
                    }
                }
            }, {
                key: "bindFocusEvents",
                value: function T() {
                    var e = this;
                    if (!this.isInput) return;
                    this.el.addEventListener("focus", function(t) {
                        e.stop()
                    });
                    this.el.addEventListener("blur", function(t) {
                        if (e.el.value && e.el.value.length !== 0) {
                            return
                        }
                        e.start()
                    })
                }
            }, {
                key: "insertCursor",
                value: function C() {
                    if (!this.showCursor) return;
                    if (this.cursor) return;
                    this.cursor = document.createElement("span");
                    this.cursor.className = "typed-cursor";
                    this.cursor.innerHTML = this.cursorChar;
                    this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)
                }
            }]);
            return e
        }();
        t["default"] = a;
        e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n) {
                    if (Object.prototype.hasOwnProperty.call(n, i)) {
                        e[i] = n[i]
                    }
                }
            }
            return e
        };
        var r = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t
            }
        }();

        function o(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function s(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var a = n(2);
        var u = o(a);
        var f = function() {
            function e() {
                s(this, e)
            }
            r(e, [{
                key: "load",
                value: function t(e, n, r) {
                    if (typeof r === "string") {
                        e.el = document.querySelector(r)
                    } else {
                        e.el = r
                    }
                    e.options = i({}, u["default"], n);
                    e.isInput = e.el.tagName.toLowerCase() === "input";
                    e.attr = e.options.attr;
                    e.bindInputFocusEvents = e.options.bindInputFocusEvents;
                    e.showCursor = e.isInput ? false : e.options.showCursor;
                    e.cursorChar = e.options.cursorChar;
                    e.cursorBlinking = true;
                    e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent;
                    e.contentType = e.options.contentType;
                    e.typeSpeed = e.options.typeSpeed;
                    e.startDelay = e.options.startDelay;
                    e.backSpeed = e.options.backSpeed;
                    e.smartBackspace = e.options.smartBackspace;
                    e.backDelay = e.options.backDelay;
                    e.fadeOut = e.options.fadeOut;
                    e.fadeOutClass = e.options.fadeOutClass;
                    e.fadeOutDelay = e.options.fadeOutDelay;
                    e.isPaused = false;
                    e.strings = e.options.strings.map(function(e) {
                        return e.trim()
                    });
                    if (typeof e.options.stringsElement === "string") {
                        e.stringsElement = document.querySelector(e.options.stringsElement)
                    } else {
                        e.stringsElement = e.options.stringsElement
                    }
                    if (e.stringsElement) {
                        e.strings = [];
                        e.stringsElement.style.display = "none";
                        var o = Array.prototype.slice.apply(e.stringsElement.children);
                        var s = o.length;
                        if (s) {
                            for (var a = 0; a < s; a += 1) {
                                var f = o[a];
                                e.strings.push(f.innerHTML.trim())
                            }
                        }
                    }
                    e.strPos = 0;
                    e.arrayPos = 0;
                    e.stopNum = 0;
                    e.loop = e.options.loop;
                    e.loopCount = e.options.loopCount;
                    e.curLoop = 0;
                    e.shuffle = e.options.shuffle;
                    e.sequence = [];
                    e.pause = {
                        status: false,
                        typewrite: true,
                        curString: "",
                        curStrPos: 0
                    };
                    e.typingComplete = false;
                    for (var a in e.strings) {
                        e.sequence[a] = a
                    }
                    e.currentElContent = this.getCurrentElContent(e);
                    e.autoInsertCss = e.options.autoInsertCss;
                    this.appendAnimationCss(e)
                }
            }, {
                key: "getCurrentElContent",
                value: function n(e) {
                    var t = "";
                    if (e.attr) {
                        t = e.el.getAttribute(e.attr)
                    } else if (e.isInput) {
                        t = e.el.value
                    } else if (e.contentType === "html") {
                        t = e.el.innerHTML
                    } else {
                        t = e.el.textContent
                    }
                    return t
                }
            }, {
                key: "appendAnimationCss",
                value: function o(e) {
                    if (!e.autoInsertCss) {
                        return
                    }
                    if (!e.showCursor || !e.fadeOut) {
                        return
                    }
                    var t = document.createElement("style");
                    t.type = "text/css";
                    var n = "";
                    if (e.showCursor) {
                        n += "\n        .typed-cursor{\n          opacity: 1;\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "
                    }
                    if (e.fadeOut) {
                        n += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n          -webkit-animation: 0;\n                  animation: 0;\n        }\n      "
                    }
                    if (t.length === 0) {
                        return
                    }
                    t.innerHTML = n;
                    document.head.appendChild(t)
                }
            }]);
            return e
        }();
        t["default"] = f;
        var l = new f;
        t.initializer = l
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: true,
            shuffle: false,
            backDelay: 700,
            fadeOut: false,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: false,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: "|",
            autoInsertCss: true,
            attr: null,
            bindInputFocusEvents: false,
            contentType: "html",
            onComplete: function i(e) {},
            preStringTyped: function r(e, t) {},
            onStringTyped: function o(e, t) {},
            onLastStringBackspaced: function s(e) {},
            onTypingPaused: function a(e, t) {},
            onTypingResumed: function u(e, t) {},
            onReset: function f(e) {},
            onStop: function l(e, t) {},
            onStart: function c(e, t) {},
            onDestroy: function p(e) {}
        };
        t["default"] = n;
        e.exports = t["default"]
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: true
        });
        var n = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n];
                    i.enumerable = i.enumerable || false;
                    i.configurable = true;
                    if ("value" in i) i.writable = true;
                    Object.defineProperty(e, i.key, i)
                }
            }
            return function(t, n, i) {
                if (n) e(t.prototype, n);
                if (i) e(t, i);
                return t
            }
        }();

        function i(e, t) {
            if (!(e instanceof t)) {
                throw new TypeError("Cannot call a class as a function")
            }
        }
        var r = function() {
            function e() {
                i(this, e)
            }
            n(e, [{
                key: "typeHtmlChars",
                value: function t(e, n, i) {
                    if (i.contentType !== "html") return n;
                    var r = e.substr(n).charAt(0);
                    if (r === "<" || r === "&") {
                        var o = "";
                        if (r === "<") {
                            o = ">"
                        } else {
                            o = ";"
                        }
                        while (e.substr(n + 1).charAt(0) !== o) {
                            n++;
                            if (n + 1 > e.length) {
                                break
                            }
                        }
                        n++
                    }
                    return n
                }
            }, {
                key: "backSpaceHtmlChars",
                value: function r(e, t, n) {
                    if (n.contentType !== "html") return t;
                    var i = e.substr(t).charAt(0);
                    if (i === ">" || i === ";") {
                        var r = "";
                        if (i === ">") {
                            r = "<"
                        } else {
                            r = "&"
                        }
                        while (e.substr(t - 1).charAt(0) !== r) {
                            t--;
                            if (t < 0) {
                                break
                            }
                        }
                        t--
                    }
                    return t
                }
            }]);
            return e
        }();
        t["default"] = r;
        var o = new r;
        t.htmlParser = o
    }])
});

function get(e) {
    var t = null,
        n = [];
    location.search.substr(1).split("&").forEach(function(i) {
        n = i.split("=");
        if (n[0] === e) t = decodeURIComponent(n[1])
    });
    return t
}
if (get("test")) {
    $(document).ready(function() {
        var e = 500;
        var t = 0;
        SetFilesNeeded(e);
        window.setInterval(function() {
            var n = ["jpg", "jpeg", "bsp", "vmt", "vtf", "png", "vtx", "mdl", "phy", "vvd", "wav", "mp3", "pcf", "ttf"];
            DownloadingFile("materials/folder/file." + n[Math.floor(Math.random() * 13)]);
            if (t >= e) {
                SetStatusChanged("Sending client info..");
                SetStatusChanged("Receiving client info..")
            } else {
                t++
            }
        }, 300);
        GameDetails("My Gmod Server", "http://yourdomin.com/loading", "ttt_terrortown", 16, "76561197991928585", "terrortown")
    })
}

function TermLoad(e) {
    this.config = e;
    this.element = $("<div class='termload'></div>");
    $("body").prepend(this.element);
    this.terminal = {};
    this.terminal.element = $("<div class='terminal'></div>");
    this.terminal.history = $("<ul class='history'></ul>");
    this.terminal.prompt = $("<div class='prompt'></div>");
    this.element.append(this.terminal.element);
    this.terminal.element.append(this.terminal.history);
    this.terminal.element.append(this.terminal.prompt);
    this.info = {};
    this.info.element = $("<ul class='status-info' style='display: none'></ul>");
    this.info.status = $("<pre class='status'>Downloading Packages</pre>");
    this.info.progress = $("<pre class='progress'></pre>");
    this.info.downloading = $("<pre class='downloading'></pre>");
    this.element.append(this.info.element);
    var t = $("<li></li>");
    t.append("<pre>Status: </pre>");
    t.append(this.info.status);
    this.info.element.append(t);
    var n = $("<li></li>");
    n.append("<pre>Downloading Package: </pre>");
    n.append(this.info.downloading);
    this.info.element.append(n);
    var i = $("<li></li>");
    i.append(this.info.progress);
    this.info.element.append(i);
    this.downloaded = {
        needed: 0,
        count: 0
    };
    var r = this;
    this.input = [{
        action: "type",
        command: "sudo apt-get update &amp;&amp; sudo apt-get upgrade -y",
        speed: 30,
        callback: function() {
            r.info.element.show()
        },
        startDelay: 1,
        endDelay: 1e3
    }];
    if (this.config.rules) {
        this.input.push({
            action: "type",
            command: "./rules.sh",
            output: this.rules.bind(this),
            endDelay: 1e3
        })
    }
    if (this.config.staff) {
        this.input.push({
            action: "type",
            command: "./staff.sh",
            output: this.staff.bind(this),
            endDelay: 1e3
        })
    }
    this.downloaded = {
        needed: 0,
        count: 0
    }
}
TermLoad.prototype = {
    init: function(e) {
        console.log("TERMLOAD: By Nurdism (https://www.gmodstore.com/scripts/view/" + this.config.script + "), licensed to " + this.config.license);
        this.details = e;
        var t = this;
        var n = ["<pre>Using username \"</pre><pre class='cyan'>{USER}</pre><pre>\".</pre>", '<pre>Authenticating with public key "rsa-key-882349890" from agent</pre>', "<pre> </pre>"];
        this.config.header.forEach(function(e) {
            n.push(e)
        });
        n.push("<pre> </pre>", "<pre>Linux 4.4.0-89-generic SMP {DATE} x86_64 x86_64 x86_64 GNU/Linux</pre>", "<pre> </pre>", '<pre>  Server        : </pre><pre class="green">{GAME_NAME}</pre>', '<pre>  Gamemode      : </pre><pre class="green">{GAME_MODE}</pre>', '<pre>  Map           : </pre><pre class="green">{GAME_MAP}</pre>', '<pre>  IPv4          : </pre><pre class="green">{GAME_IP}</pre>', '<pre>  Website       : </pre><pre class="green">{WEBSITE}</pre>', "<pre> </pre>", "<pre>MOTD: " + this.config.motd + "</pre>", "<pre> </pre>");
        this.addLine(n, function() {
            t.clearHandle();
            t.exe(0)
        })
    },
    exe: function(e) {
        if (!this.input[e]) {
            return
        }
        var t = this.input[e];
        var n = this;
        new Typed(".prompt .typed", {
            strings: [t.command],
            startDelay: t.startDelay || 1e3,
            typeSpeed: t.speed || 90,
            onComplete: function(i) {
                setTimeout(function() {
                    $(".prompt .typed").html("");
                    n.addLine([n.config.handle], function() {
                        e++;
                        if (t.callback) {
                            t.callback();
                            if (e < n.input.length) {
                                i.destroy()
                            }
                        } else if (t.output) {
                            n.addLine(typeof t.output === "function" ? t.output() : t.output, function() {
                                if (e < n.input.length) {
                                    i.destroy()
                                }
                            })
                        }
                    }, 0, t.command)
                }, t.endDelay || 1e3)
            },
            onDestroy: function(t) {
                n.exe(e)
            }
        })
    },
    clearHandle: function() {
        this.terminal.prompt.html(this.parse(this.config.handle))
    },
    addLine: function(e, t, n, i) {
        var r = this;
        setTimeout(function() {
            n = n || 0;
            if (n < e.length) {
                r.terminal.history.append("<li>" + r.parse(e[n], i) + "</li>");
                n++;
                r.element.scrollTop($(document).height());
                r.addLine(e, t, n)
            } else {
                if (typeof t === "function") {
                    t()
                }
            }
        }, 15)
    },
    parse: function(e, t) {
        return e.replace(/{DATE}/i, (new Date).toString()).replace(/{USER}/i, this.details.steamid).replace(/{GAME_NAME}/i, this.details.name).replace(/{GAME_MODE}/i, this.details.game).replace(/{GAME_MAP}/i, this.details.map).replace(/{GAME_IP}/i, this.config.server).replace(/{WEBSITE}/i, this.config.website).replace(/{CONTENT}/i, t || "")
    },
    files: function(e) {
        this.downloaded = {
            needed: e,
            count: 0
        }
    },
    downloading: function(e) {
        var t = {
            bsp: "map",
            pcf: "particles",
            ttf: "fonts",
            jpg: "texture",
            jpeg: "texture",
            png: "texture",
            vmt: "texture",
            vtf: "texture",
            vtx: "models",
            mdl: "models",
            phy: "models",
            vvd: "models",
            wav: "sounds",
            mp3: "sounds"
        };
        this.downloaded.count++;
        var n = e.match(/\.([0-9a-z]+)(?:[\?#]|$)/i);
        var i = this.downloaded.count / this.downloaded.needed;
        var r = 48;
        var o = Math.max(1, Math.ceil(i * r));
        var s = Math.max(1, Math.floor(r - i * r));
        this.info.progress.html("[" + Array(o).join("#") + Array(s).join("=") + "] " + Math.floor(i * 100) + "%");
        this.info.downloading.html(e);
        if (n) {
            this.info.downloading.attr("class", "downloading");
            this.info.downloading.addClass(t[n[1]])
        }
    },
    status: function(e) {
        this.info.status.html(e)
    },
    staff: function() {
        var e = this;
        var t = {
            name: 0,
            steam: 0,
            rank: 0
        };
        this.config.staff.forEach(function(e) {
            if (e.name.length > t.name) {
                t.name = e.name.length
            }
            if (e.steam.length > t.steam) {
                t.steam = e.steam.length
            }
            if (e.rank.length > t.rank) {
                t.rank = e.rank.length
            }
        });
        var n = [];
        this.config.staff.forEach(function(i, r) {
            if (r === 0) {
                n.push("<pre>╔═" + "═".repeat(t.name) + "═╦═" + "═".repeat(t.steam) + "═╦═" + "═".repeat(t.rank) + "═╗</pre>")
            }
            n.push("<pre>║ " + i.name.padEnd(t.name) + " ║ " + i.steam.padEnd(t.steam) + " ║ " + i.rank.padEnd(t.rank) + " ║</pre>");
            if (r === e.config.staff.length - 1) {
                n.push("<pre>╚═" + "═".repeat(t.name) + "═╩═" + "═".repeat(t.steam) + "═╩═" + "═".repeat(t.rank) + "═╝</pre>")
            } else {
                n.push("<pre>╠═" + "═".repeat(t.name) + "═╬═" + "═".repeat(t.steam) + "═╬═" + "═".repeat(t.rank) + "═╣</pre>")
            }
        });
        return n
    },
    rules: function() {
        var e = ['<pre class="yellow">Server Rules:</pre>'];
        this.config.rules.forEach(function(t, n) {
            e.push('<pre class="yellow">   ' + (n + 1) + ". " + t + ". </pre>")
        });
        return e
    }
};