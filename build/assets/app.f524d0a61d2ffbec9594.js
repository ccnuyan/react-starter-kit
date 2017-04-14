!function(e) {
    function n(o) {
        if (t[o]) return t[o].exports;
        var r = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }
    var t = {};
    n.m = e, n.c = t, n.i = function(e) {
        return e;
    }, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            configurable: !1,
            enumerable: !0,
            get: o
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
    }, n.p = "/assets/", n(n.s = 5);
}([ function(e, n, t) {
    "use strict";
    function o(e) {
        return e && e.__esModule ? e : {
            default: e
        };
    }
    function r(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function");
    }
    function u(e, n) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !n || "object" != typeof n && "function" != typeof n ? e : n;
    }
    function c(e, n) {
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
    var i = function() {
        function e(e, n) {
            for (var t = 0; t < n.length; t++) {
                var o = n[t];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), 
                Object.defineProperty(e, o.key, o);
            }
        }
        return function(n, t, o) {
            return t && e(n.prototype, t), o && e(n, o), n;
        };
    }(), a = t(3), l = o(a), p = t(4), f = o(p);
    t(1);
    var s = t(2), d = o(s), b = function(e) {
        function n() {
            return r(this, n), u(this, (n.__proto__ || Object.getPrototypeOf(n)).apply(this, arguments));
        }
        return c(n, e), i(n, [ {
            key: "render",
            value: function() {
                return l.default.createElement("div", {
                    style: {
                        padding: "2em"
                    }
                }, l.default.createElement("div", {
                    dangerouslySetInnerHTML: {
                        __html: d.default
                    }
                }));
            }
        } ]), n;
    }(a.Component), h = document.getElementById("react");
    f.default.render(l.default.createElement(b, null), h);
}, function(e, n) {}, function(e, n) {
    e.exports = '<h1 id="how-to-use">how to use</h1>\n<h2 id="global-scope-modules">global scope modules</h2>\n<p>npm i -g babel-cli react-native-cli  webpack-dev-server webpack eslint mocha nodemon</p>\n<h2 id="modules">modules</h2>\n<p>npm i</p>\n<h2 id="about-babelrc">about .babelrc</h2>\n<p>no .babelrc and *.js in root directory;<br>no babel configuration in code;<br>file .babelrc could be only in each subdirectory of root; </p>\n<h2 id="dev-mode">dev mode</h2>\n<p>npm run server-dev\nnpm run webpack-dev</p>\n<h2 id="prod-mode">prod mode</h2>\n<p>npm start</p>\n';
}, function(e, n) {
    e.exports = React;
}, function(e, n) {
    e.exports = ReactDOM;
}, function(e, n, t) {
    e.exports = t(0);
} ]);