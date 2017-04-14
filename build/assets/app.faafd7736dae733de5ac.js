!function(e) {
    function t(o) {
        if (n[o]) return n[o].exports;
        var r = n[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports;
    }
    var n = {};
    t.m = e, t.c = n, t.i = function(e) {
        return e;
    }, t.d = function(e, n, o) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: o
        });
    }, t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default;
        } : function() {
            return e;
        };
        return t.d(n, "a", n), n;
    }, t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, t.p = "/assets/", t(t.s = 5);
}([ function(e, t, n) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function r(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t;
    }
    function u(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
    }
    var i = n(3), a = o(i), d = n(4), l = o(d);
    n(1);
    var p = n(2), f = o(p), s = function(e) {
        function t() {
            var e, n, o, u;
            r(this, t);
            for (var i = arguments.length, d = Array(i), l = 0; l < i; l++) d[l] = arguments[l];
            return n = o = c(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [ this ].concat(d))), 
            o.render = function() {
                return a.default.createElement("div", {
                    style: {
                        padding: "2em"
                    }
                }, a.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: f.default
                    }
                }));
            }, u = n, c(o, u);
        }
        return u(t, e), t;
    }(i.Component), b = document.getElementById("react");
    l.default.render(a.default.createElement(s, null), b);
}, function(e, t) {}, function(e, t) {
    e.exports = '<h1 id="how-to-use">how to use</h1>\n<h2 id="global-scope-modules">global scope modules</h2>\n<p><code>npm i -g babel-cli react-native-cli  webpack-dev-server webpack eslint mocha nodemon</code></p>\n<h2 id="modules">modules</h2>\n<p><code>npm i</code></p>\n<h2 id="about-babelrc">about .babelrc</h2>\n<p>no <code>.babelrc</code> and <code>*.js</code> in root directory;<br>no babel configuration in code;<br>file <code>.babelrc</code> could be only in each subdirectory of root; </p>\n<h2 id="dev-mode">dev mode</h2>\n<p><code>npm run server-dev</code>\n<code>npm run webpack-dev</code></p>\n<h2 id="prod-mode">prod mode</h2>\n<p><code>npm start</code></p>\n<h2 id="deployment">deployment</h2>\n<p>...</p>\n';
}, function(e, t) {
    e.exports = React;
}, function(e, t) {
    e.exports = ReactDOM;
}, function(e, t, n) {
    e.exports = n(0);
} ]);