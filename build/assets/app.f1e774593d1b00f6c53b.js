!function(e) {
    function n(r) {
        if (t[r]) return t[r].exports;
        var o = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }
    var t = {};
    n.m = e, n.c = t, n.i = function(e) {
        return e;
    }, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: r
        });
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return n.d(t, "a", t), t;
    }, n.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n);
    }, n.p = "/assets/", n(n.s = 15);
}([ function(e, n) {
    function t() {
        throw new Error("setTimeout has not been defined");
    }
    function r() {
        throw new Error("clearTimeout has not been defined");
    }
    function o(e) {
        if (s === setTimeout) return setTimeout(e, 0);
        if ((s === t || !s) && setTimeout) return s = setTimeout, setTimeout(e, 0);
        try {
            return s(e, 0);
        } catch (n) {
            try {
                return s.call(null, e, 0);
            } catch (n) {
                return s.call(this, e, 0);
            }
        }
    }
    function i(e) {
        if (l === clearTimeout) return clearTimeout(e);
        if ((l === r || !l) && clearTimeout) return l = clearTimeout, clearTimeout(e);
        try {
            return l(e);
        } catch (n) {
            try {
                return l.call(null, e);
            } catch (n) {
                return l.call(this, e);
            }
        }
    }
    function u() {
        h && d && (h = !1, d.length ? y = d.concat(y) : v = -1, y.length && a());
    }
    function a() {
        if (!h) {
            var e = o(u);
            h = !0;
            for (var n = y.length; n; ) {
                for (d = y, y = []; ++v < n; ) d && d[v].run();
                v = -1, n = y.length;
            }
            d = null, h = !1, i(e);
        }
    }
    function c(e, n) {
        this.fun = e, this.array = n;
    }
    function f() {}
    var s, l, p = e.exports = {};
    !function() {
        try {
            s = "function" == typeof setTimeout ? setTimeout : t;
        } catch (e) {
            s = t;
        }
        try {
            l = "function" == typeof clearTimeout ? clearTimeout : r;
        } catch (e) {
            l = r;
        }
    }();
    var d, y = [], h = !1, v = -1;
    p.nextTick = function(e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1) for (var t = 1; t < arguments.length; t++) n[t - 1] = arguments[t];
        y.push(new c(e, n)), 1 !== y.length || h || o(a);
    }, c.prototype.run = function() {
        this.fun.apply(null, this.array);
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", 
    p.versions = {}, p.on = f, p.addListener = f, p.once = f, p.off = f, p.removeListener = f, 
    p.removeAllListeners = f, p.emit = f, p.binding = function(e) {
        throw new Error("process.binding is not supported");
    }, p.cwd = function() {
        return "/";
    }, p.chdir = function(e) {
        throw new Error("process.chdir is not supported");
    }, p.umask = function() {
        return 0;
    };
}, function(e, n, t) {
    "use strict";
    function r(e) {
        return function() {
            return e;
        };
    }
    var o = function() {};
    o.thatReturns = r, o.thatReturnsFalse = r(!1), o.thatReturnsTrue = r(!0), o.thatReturnsNull = r(null), 
    o.thatReturnsThis = function() {
        return this;
    }, o.thatReturnsArgument = function(e) {
        return e;
    }, e.exports = o;
}, function(e, n, t) {
    "use strict";
    (function(n) {
        function t(e, n, t, o, i, u, a, c) {
            if (r(n), !e) {
                var f;
                if (void 0 === n) f = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
                    var s = [ t, o, i, u, a, c ], l = 0;
                    f = new Error(n.replace(/%s/g, function() {
                        return s[l++];
                    })), f.name = "Invariant Violation";
                }
                throw f.framesToPop = 1, f;
            }
        }
        var r = function(e) {};
        "production" !== n.env.NODE_ENV && (r = function(e) {
            if (void 0 === e) throw new Error("invariant requires an error message argument");
        }), e.exports = t;
    }).call(n, t(0));
}, function(e, n, t) {
    "use strict";
    (function(n) {
        var r = t(1), o = r;
        "production" !== n.env.NODE_ENV && function() {
            var e = function(e) {
                for (var n = arguments.length, t = Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                var o = 0, i = "Warning: " + e.replace(/%s/g, function() {
                    return t[o++];
                });
                "undefined" != typeof console && console.error(i);
                try {
                    throw new Error(i);
                } catch (e) {}
            };
            o = function(n, t) {
                if (void 0 === t) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
                if (0 !== t.indexOf("Failed Composite propType: ") && !n) {
                    for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) o[i - 2] = arguments[i];
                    e.apply(void 0, [ t ].concat(o));
                }
            };
        }(), e.exports = o;
    }).call(n, t(0));
}, function(e, n, t) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
}, function(e, n) {
    e.exports = React;
}, function(e, n, t) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != typeof n && "function" != typeof n ? e : n;
    }
    function u(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
    }
    var a = t(5), c = r(a), f = t(14), s = r(f);
    t(8);
    var l = t(9), p = r(l), d = t(7), y = r(d), h = function(e) {
        function n() {
            var e, t, r, u;
            o(this, n);
            for (var a = arguments.length, f = Array(a), s = 0; s < a; s++) f[s] = arguments[s];
            return t = r = i(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(f))), 
            r.render = function() {
                return c.default.createElement("div", {
                    style: {
                        padding: "2em"
                    }
                }, c.default.createElement(y.default, {
                    content: p.default
                }));
            }, u = t, i(r, u);
        }
        return u(n, e), n;
    }(a.Component), v = document.getElementById("react");
    s.default.render(c.default.createElement(h, null), v);
}, function(e, n, t) {
    "use strict";
    function r(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function o(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function i(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != typeof n && "function" != typeof n ? e : n;
    }
    function u(e, n) {
        if ("function" != typeof n && null !== n) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
        e.prototype = Object.create(n && n.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(e, n) : e.__proto__ = n);
    }
    Object.defineProperty(n, "__esModule", {
        value: !0
    });
    var a = t(5), c = r(a), f = t(13), s = r(f), l = function(e) {
        function n() {
            var e, t, r, u;
            o(this, n);
            for (var a = arguments.length, f = Array(a), s = 0; s < a; s++) f[s] = arguments[s];
            return t = r = i(this, (e = n.__proto__ || Object.getPrototypeOf(n)).call.apply(e, [ this ].concat(f))), 
            r.render = function() {
                return c.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: r.props.content
                    }
                });
            }, u = t, i(r, u);
        }
        return u(n, e), n;
    }(a.Component);
    l.propTypes = {
        content: s.default.string.isRequired
    }, n.default = l;
}, function(e, n) {}, function(e, n) {
    e.exports = '<h1 id="how-to-use">how to use</h1>\n<h2 id="global-scope-modules">global scope modules</h2>\n<p><code>npm i -g babel-cli react-native-cli  webpack-dev-server webpack eslint mocha nodemon</code></p>\n<h2 id="modules">modules</h2>\n<p><code>npm i</code></p>\n<h2 id="about-babelrc">about .babelrc</h2>\n<p>no <code>.babelrc</code> and <code>*.js</code> in root directory;<br>no babel configuration in code;<br>file <code>.babelrc</code> could be only in each subdirectory of root; </p>\n<h2 id="dev-mode">dev mode</h2>\n<p><code>npm run server-dev</code>\n<code>npm run webpack-dev</code></p>\n<h2 id="prod-mode">prod mode</h2>\n<p><code>npm start</code></p>\n<h2 id="deployment">deployment</h2>\n<p>...</p>\n';
}, function(e, n, t) {
    "use strict";
    (function(n) {
        function r(e, t, r, c, f) {
            if ("production" !== n.env.NODE_ENV) for (var s in e) if (e.hasOwnProperty(s)) {
                var l;
                try {
                    o("function" == typeof e[s], "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", c || "React class", r, s), 
                    l = e[s](t, s, c, r, null, u);
                } catch (e) {
                    l = e;
                }
                if (i(!l || l instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", c || "React class", r, s, typeof l), 
                l instanceof Error && !(l.message in a)) {
                    a[l.message] = !0;
                    var p = f ? f() : "";
                    i(!1, "Failed %s type: %s%s", r, l.message, null != p ? p : "");
                }
            }
        }
        if ("production" !== n.env.NODE_ENV) var o = t(2), i = t(3), u = t(4), a = {};
        e.exports = r;
    }).call(n, t(0));
}, function(e, n, t) {
    "use strict";
    var r = t(1), o = t(2);
    e.exports = function() {
        function e() {
            o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
        }
        function n() {
            return e;
        }
        e.isRequired = e;
        var t = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: n,
            element: e,
            instanceOf: n,
            node: e,
            objectOf: n,
            oneOf: n,
            oneOfType: n,
            shape: n
        };
        return t.checkPropTypes = r, t.PropTypes = t, t;
    };
}, function(e, n, t) {
    "use strict";
    (function(n) {
        var r = t(1), o = t(2), i = t(3), u = t(4), a = t(10);
        e.exports = function(e, t) {
            function c(e) {
                var n = e && (_ && e[_] || e[x]);
                if ("function" == typeof n) return n;
            }
            function f(e, n) {
                return e === n ? 0 !== e || 1 / e == 1 / n : e !== e && n !== n;
            }
            function s(e) {
                this.message = e, this.stack = "";
            }
            function l(e) {
                function r(r, f, l, p, d, y, h) {
                    if (p = p || P, y = y || l, h !== u) if (t) o(!1, "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"); else if ("production" !== n.env.NODE_ENV && "undefined" != typeof console) {
                        var v = p + ":" + l;
                        !a[v] && c < 3 && (i(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", y, p), 
                        a[v] = !0, c++);
                    }
                    return null == f[l] ? r ? new s(null === f[l] ? "The " + d + " `" + y + "` is marked as required in `" + p + "`, but its value is `null`." : "The " + d + " `" + y + "` is marked as required in `" + p + "`, but its value is `undefined`.") : null : e(f, l, p, d, y);
                }
                if ("production" !== n.env.NODE_ENV) var a = {}, c = 0;
                var f = r.bind(null, !1);
                return f.isRequired = r.bind(null, !0), f;
            }
            function p(e) {
                function n(n, t, r, o, i, u) {
                    var a = n[t];
                    if (O(a) !== e) return new s("Invalid " + o + " `" + i + "` of type `" + T(a) + "` supplied to `" + r + "`, expected `" + e + "`.");
                    return null;
                }
                return l(n);
            }
            function d(e) {
                function n(n, t, r, o, i) {
                    if ("function" != typeof e) return new s("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
                    var a = n[t];
                    if (!Array.isArray(a)) {
                        return new s("Invalid " + o + " `" + i + "` of type `" + O(a) + "` supplied to `" + r + "`, expected an array.");
                    }
                    for (var c = 0; c < a.length; c++) {
                        var f = e(a, c, r, o, i + "[" + c + "]", u);
                        if (f instanceof Error) return f;
                    }
                    return null;
                }
                return l(n);
            }
            function y(e) {
                function n(n, t, r, o, i) {
                    if (!(n[t] instanceof e)) {
                        var u = e.name || P;
                        return new s("Invalid " + o + " `" + i + "` of type `" + E(n[t]) + "` supplied to `" + r + "`, expected instance of `" + u + "`.");
                    }
                    return null;
                }
                return l(n);
            }
            function h(e) {
                function t(n, t, r, o, i) {
                    for (var u = n[t], a = 0; a < e.length; a++) if (f(u, e[a])) return null;
                    return new s("Invalid " + o + " `" + i + "` of value `" + u + "` supplied to `" + r + "`, expected one of " + JSON.stringify(e) + ".");
                }
                return Array.isArray(e) ? l(t) : ("production" !== n.env.NODE_ENV && i(!1, "Invalid argument supplied to oneOf, expected an instance of array."), 
                r.thatReturnsNull);
            }
            function v(e) {
                function n(n, t, r, o, i) {
                    if ("function" != typeof e) return new s("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
                    var a = n[t], c = O(a);
                    if ("object" !== c) return new s("Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected an object.");
                    for (var f in a) if (a.hasOwnProperty(f)) {
                        var l = e(a, f, r, o, i + "." + f, u);
                        if (l instanceof Error) return l;
                    }
                    return null;
                }
                return l(n);
            }
            function m(e) {
                function t(n, t, r, o, i) {
                    for (var a = 0; a < e.length; a++) {
                        if (null == (0, e[a])(n, t, r, o, i, u)) return null;
                    }
                    return new s("Invalid " + o + " `" + i + "` supplied to `" + r + "`.");
                }
                return Array.isArray(e) ? l(t) : ("production" !== n.env.NODE_ENV && i(!1, "Invalid argument supplied to oneOfType, expected an instance of array."), 
                r.thatReturnsNull);
            }
            function b(e) {
                function n(n, t, r, o, i) {
                    var a = n[t], c = O(a);
                    if ("object" !== c) return new s("Invalid " + o + " `" + i + "` of type `" + c + "` supplied to `" + r + "`, expected `object`.");
                    for (var f in e) {
                        var l = e[f];
                        if (l) {
                            var p = l(a, f, r, o, i + "." + f, u);
                            if (p) return p;
                        }
                    }
                    return null;
                }
                return l(n);
            }
            function g(n) {
                switch (typeof n) {
                  case "number":
                  case "string":
                  case "undefined":
                    return !0;

                  case "boolean":
                    return !n;

                  case "object":
                    if (Array.isArray(n)) return n.every(g);
                    if (null === n || e(n)) return !0;
                    var t = c(n);
                    if (!t) return !1;
                    var r, o = t.call(n);
                    if (t !== n.entries) {
                        for (;!(r = o.next()).done; ) if (!g(r.value)) return !1;
                    } else for (;!(r = o.next()).done; ) {
                        var i = r.value;
                        if (i && !g(i[1])) return !1;
                    }
                    return !0;

                  default:
                    return !1;
                }
            }
            function w(e, n) {
                return "symbol" === e || ("Symbol" === n["@@toStringTag"] || "function" == typeof Symbol && n instanceof Symbol);
            }
            function O(e) {
                var n = typeof e;
                return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : w(n, e) ? "symbol" : n;
            }
            function T(e) {
                var n = O(e);
                if ("object" === n) {
                    if (e instanceof Date) return "date";
                    if (e instanceof RegExp) return "regexp";
                }
                return n;
            }
            function E(e) {
                return e.constructor && e.constructor.name ? e.constructor.name : P;
            }
            var _ = "function" == typeof Symbol && Symbol.iterator, x = "@@iterator", P = "<<anonymous>>", j = {
                array: p("array"),
                bool: p("boolean"),
                func: p("function"),
                number: p("number"),
                object: p("object"),
                string: p("string"),
                symbol: p("symbol"),
                any: function() {
                    return l(r.thatReturnsNull);
                }(),
                arrayOf: d,
                element: function() {
                    function n(n, t, r, o, i) {
                        var u = n[t];
                        if (!e(u)) {
                            return new s("Invalid " + o + " `" + i + "` of type `" + O(u) + "` supplied to `" + r + "`, expected a single ReactElement.");
                        }
                        return null;
                    }
                    return l(n);
                }(),
                instanceOf: y,
                node: function() {
                    function e(e, n, t, r, o) {
                        return g(e[n]) ? null : new s("Invalid " + r + " `" + o + "` supplied to `" + t + "`, expected a ReactNode.");
                    }
                    return l(e);
                }(),
                objectOf: v,
                oneOf: h,
                oneOfType: m,
                shape: b
            };
            return s.prototype = Error.prototype, j.checkPropTypes = a, j.PropTypes = j, j;
        };
    }).call(n, t(0));
}, function(e, n, t) {
    (function(n) {
        if ("production" !== n.env.NODE_ENV) {
            var r = "function" == typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, o = function(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r;
            };
            e.exports = t(12)(o, !0);
        } else e.exports = t(11)();
    }).call(n, t(0));
}, function(e, n) {
    e.exports = ReactDOM;
}, function(e, n, t) {
    e.exports = t(6);
} ]);