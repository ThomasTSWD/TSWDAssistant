! function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function(t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "https://####TSWD####cdn.scaleflex.it/plugins/filerobot-image-editor/2/", n(n.s = 65)
}([function(e, t, n) {
    "use strict";
    e.exports = n(19)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        n.d(t, "c", function() {
            return et
        }), n.d(t, "a", function() {
            return qe
        });
        var r = n(6),
            i = n.n(r),
            o = n(12),
            a = n.n(o),
            s = n(0),
            l = n.n(s),
            c = n(13),
            u = n(7),
            f = n(8),
            p = (n(24), n(4), n(17)),
            d = function(e, t) {
                for (var n = [e[0]], r = 0, i = t.length; r < i; r += 1) n.push(t[r], e[r + 1]);
                return n
            },
            h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            },
            m = function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            },
            g = function() {
                function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }
                return function(t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t
                }
            }(),
            b = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            y = function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            },
            v = function(e, t) {
                var n = {};
                for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
                return n
            },
            _ = function(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            },
            w = function(e) {
                return "object" === (void 0 === e ? "undefined" : h(e)) && e.constructor === Object
            },
            x = Object.freeze([]),
            C = Object.freeze({});

        function k(e) {
            return "function" == typeof e
        }

        function E(e) {
            return e.displayName || e.name || "Component"
        }

        function T(e) {
            return e && "string" == typeof e.styledComponentId
        }
        var O = void 0 !== e && e.env.SC_ATTR || "data-styled",
            S = "undefined" != typeof window && "HTMLElement" in window,
            A = "boolean" == typeof SC_DISABLE_SPEEDY && SC_DISABLE_SPEEDY || !1;
        var R = function(e) {
                function t(n) {
                    m(this, t);
                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) i[o - 1] = arguments[o];
                    var a = _(this, e.call(this, "An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + n + " for more information. " + (i ? "Additional arguments: " + i.join(", ") : "")));
                    return _(a)
                }
                return y(t, e), t
            }(Error),
            j = /^[^\S\n]*?\/\* sc-component-id:\s*(\S+)\s+\*\//gm,
            P = function(e) {
                var t = "" + (e || ""),
                    n = [];
                return t.replace(j, function(e, t, r) {
                    return n.push({
                        componentId: t,
                        matchIndex: r
                    }), e
                }), n.map(function(e, r) {
                    var i = e.componentId,
                        o = e.matchIndex,
                        a = n[r + 1];
                    return {
                        componentId: i,
                        cssFromDOM: a ? t.slice(o, a.matchIndex) : t.slice(o)
                    }
                })
            },
            D = /^\s*\/\/.*$/gm,
            M = new i.a({
                global: !1,
                cascade: !0,
                keyframe: !1,
                prefix: !1,
                compress: !1,
                semicolon: !0
            }),
            L = new i.a({
                global: !1,
                cascade: !0,
                keyframe: !1,
                prefix: !0,
                compress: !1,
                semicolon: !1
            }),
            I = [],
            U = function(e) {
                if (-2 === e) {
                    var t = I;
                    return I = [], t
                }
            },
            B = a()(function(e) {
                I.push(e)
            }),
            z = void 0,
            H = void 0,
            N = void 0,
            F = function(e, t, n) {
                return t > 0 && -1 !== n.slice(0, t).indexOf(H) && n.slice(t - H.length, t) !== H ? "." + z : e
            };
        L.use([function(e, t, n) {
            2 === e && n.length && n[0].lastIndexOf(H) > 0 && (n[0] = n[0].replace(N, F))
        }, B, U]), M.use([B, U]);

        function W(e, t, n) {
            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "&",
                i = e.join("").replace(D, ""),
                o = t && n ? n + " " + t + " { " + i + " }" : i;
            return z = r, H = t, N = new RegExp("\\" + H + "\\b", "g"), L(n || !t ? "" : t, o)
        }
        var Y = function() {
                return n.nc
            },
            q = function(e, t, n) {
                n && ((e[t] || (e[t] = Object.create(null)))[n] = !0)
            },
            $ = function(e, t) {
                e[t] = Object.create(null)
            },
            V = function(e) {
                return function(t, n) {
                    return void 0 !== e[t] && e[t][n]
                }
            },
            X = function(e) {
                var t = "";
                for (var n in e) t += Object.keys(e[n]).join(" ") + " ";
                return t.trim()
            },
            K = function(e) {
                if (e.sheet) return e.sheet;
                for (var t = document.styleSheets.length, n = 0; n < t; n += 1) {
                    var r = document.styleSheets[n];
                    if (r.ownerNode === e) return r
                }
                throw new R(10)
            },
            G = function(e, t, n) {
                if (!t) return !1;
                var r = e.cssRules.length;
                try {
                    e.insertRule(t, n <= r ? n : r)
                } catch (e) {
                    return !1
                }
                return !0
            },
            Q = function(e) {
                return "\n/* sc-component-id: " + e + " */\n"
            },
            J = function(e, t) {
                for (var n = 0, r = 0; r <= t; r += 1) n += e[r];
                return n
            },
            Z = function(e, t) {
                return function(n) {
                    var r = Y();
                    return "<style " + [r && 'nonce="' + r + '"', O + '="' + X(t) + '"', 'data-styled-version="4.2.0"', n].filter(Boolean).join(" ") + ">" + e() + "</style>"
                }
            },
            ee = function(e, t) {
                return function() {
                    var n, r = ((n = {})[O] = X(t), n["data-styled-version"] = "4.2.0", n),
                        i = Y();
                    return i && (r.nonce = i), l.a.createElement("style", b({}, r, {
                        dangerouslySetInnerHTML: {
                            __html: e()
                        }
                    }))
                }
            },
            te = function(e) {
                return function() {
                    return Object.keys(e)
                }
            },
            ne = function(e) {
                return document.createTextNode(Q(e))
            },
            re = function e(t, n) {
                var r = void 0 === t ? Object.create(null) : t,
                    i = void 0 === n ? Object.create(null) : n,
                    o = function(e) {
                        var t = i[e];
                        return void 0 !== t ? t : i[e] = [""]
                    },
                    a = function() {
                        var e = "";
                        for (var t in i) {
                            var n = i[t][0];
                            n && (e += Q(t) + n)
                        }
                        return e
                    };
                return {
                    clone: function() {
                        var t = function(e) {
                                var t = Object.create(null);
                                for (var n in e) t[n] = b({}, e[n]);
                                return t
                            }(r),
                            n = Object.create(null);
                        for (var o in i) n[o] = [i[o][0]];
                        return e(t, n)
                    },
                    css: a,
                    getIds: te(i),
                    hasNameForId: V(r),
                    insertMarker: o,
                    insertRules: function(e, t, n) {
                        o(e)[0] += t.join(" "), q(r, e, n)
                    },
                    removeRules: function(e) {
                        var t = i[e];
                        void 0 !== t && (t[0] = "", $(r, e))
                    },
                    sealed: !1,
                    styleTag: null,
                    toElement: ee(a, r),
                    toHTML: Z(a, r)
                }
            },
            ie = function(e, t, n, r, i) {
                if (S && !n) {
                    var o = function(e, t, n) {
                        var r = document.createElement("style");
                        r.setAttribute(O, ""), r.setAttribute("data-styled-version", "4.2.0");
                        var i = Y();
                        if (i && r.setAttribute("nonce", i), r.appendChild(document.createTextNode("")), e && !t) e.appendChild(r);
                        else {
                            if (!t || !e || !t.parentNode) throw new R(6);
                            t.parentNode.insertBefore(r, n ? t : t.nextSibling)
                        }
                        return r
                    }(e, t, r);
                    return A ? function(e, t) {
                        var n = Object.create(null),
                            r = Object.create(null),
                            i = void 0 !== t,
                            o = !1,
                            a = function(t) {
                                var i = r[t];
                                return void 0 !== i ? i : (r[t] = ne(t), e.appendChild(r[t]), n[t] = Object.create(null), r[t])
                            },
                            s = function() {
                                var e = "";
                                for (var t in r) e += r[t].data;
                                return e
                            };
                        return {
                            clone: function() {
                                throw new R(5)
                            },
                            css: s,
                            getIds: te(r),
                            hasNameForId: V(n),
                            insertMarker: a,
                            insertRules: function(e, r, s) {
                                for (var l = a(e), c = [], u = r.length, f = 0; f < u; f += 1) {
                                    var p = r[f],
                                        d = i;
                                    if (d && -1 !== p.indexOf("@import")) c.push(p);
                                    else {
                                        d = !1;
                                        var h = f === u - 1 ? "" : " ";
                                        l.appendData("" + p + h)
                                    }
                                }
                                q(n, e, s), i && c.length > 0 && (o = !0, t().insertRules(e + "-import", c))
                            },
                            removeRules: function(a) {
                                var s = r[a];
                                if (void 0 !== s) {
                                    var l = ne(a);
                                    e.replaceChild(l, s), r[a] = l, $(n, a), i && o && t().removeRules(a + "-import")
                                }
                            },
                            sealed: !1,
                            styleTag: e,
                            toElement: ee(s, n),
                            toHTML: Z(s, n)
                        }
                    }(o, i) : function(e, t) {
                        var n = Object.create(null),
                            r = Object.create(null),
                            i = [],
                            o = void 0 !== t,
                            a = !1,
                            s = function(e) {
                                var t = r[e];
                                return void 0 !== t ? t : (r[e] = i.length, i.push(0), $(n, e), r[e])
                            },
                            l = function() {
                                var t = K(e).cssRules,
                                    n = "";
                                for (var o in r) {
                                    n += Q(o);
                                    for (var a = r[o], s = J(i, a), l = s - i[a]; l < s; l += 1) {
                                        var c = t[l];
                                        void 0 !== c && (n += c.cssText)
                                    }
                                }
                                return n
                            };
                        return {
                            clone: function() {
                                throw new R(5)
                            },
                            css: l,
                            getIds: te(r),
                            hasNameForId: V(n),
                            insertMarker: s,
                            insertRules: function(r, l, c) {
                                for (var u = s(r), f = K(e), p = J(i, u), d = 0, h = [], m = l.length, g = 0; g < m; g += 1) {
                                    var b = l[g],
                                        y = o;
                                    y && -1 !== b.indexOf("@import") ? h.push(b) : G(f, b, p + d) && (y = !1, d += 1)
                                }
                                o && h.length > 0 && (a = !0, t().insertRules(r + "-import", h)), i[u] += d, q(n, r, c)
                            },
                            removeRules: function(s) {
                                var l = r[s];
                                if (void 0 !== l) {
                                    var c = i[l];
                                    ! function(e, t, n) {
                                        for (var r = t - n, i = t; i > r; i -= 1) e.deleteRule(i)
                                    }(K(e), J(i, l) - 1, c), i[l] = 0, $(n, s), o && a && t().removeRules(s + "-import")
                                }
                            },
                            sealed: !1,
                            styleTag: e,
                            toElement: ee(l, n),
                            toHTML: Z(l, n)
                        }
                    }(o, i)
                }
                return re()
            },
            oe = /\s+/,
            ae = void 0;
        ae = S ? A ? 40 : 1e3 : -1;
        var se = 0,
            le = void 0,
            ce = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S ? document.head : null,
                        r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    m(this, e), this.getImportRuleTag = function() {
                        var e = t.importRuleTag;
                        if (void 0 !== e) return e;
                        var n = t.tags[0];
                        return t.importRuleTag = ie(t.target, n ? n.styleTag : null, t.forceServer, !0)
                    }, se += 1, this.id = se, this.forceServer = r, this.target = r ? null : n, this.tagMap = {}, this.deferred = {}, this.rehydratedNames = {}, this.ignoreRehydratedNames = {}, this.tags = [], this.capacity = 1, this.clones = []
                }
                return e.prototype.rehydrate = function() {
                    if (!S || this.forceServer) return this;
                    var e = [],
                        t = [],
                        n = !1,
                        r = document.querySelectorAll("style[" + O + '][data-styled-version="4.2.0"]'),
                        i = r.length;
                    if (!i) return this;
                    for (var o = 0; o < i; o += 1) {
                        var a = r[o];
                        n || (n = !!a.getAttribute("data-styled-streamed"));
                        for (var s, l = (a.getAttribute(O) || "").trim().split(oe), c = l.length, u = 0; u < c; u += 1) s = l[u], this.rehydratedNames[s] = !0;
                        t.push.apply(t, P(a.textContent)), e.push(a)
                    }
                    var f = t.length;
                    if (!f) return this;
                    var p = this.makeTag(null);
                    ! function(e, t, n) {
                        for (var r = 0, i = n.length; r < i; r += 1) {
                            var o = n[r],
                                a = o.componentId,
                                s = o.cssFromDOM,
                                l = M("", s);
                            e.insertRules(a, l)
                        }
                        for (var c = 0, u = t.length; c < u; c += 1) {
                            var f = t[c];
                            f.parentNode && f.parentNode.removeChild(f)
                        }
                    }(p, e, t), this.capacity = Math.max(1, ae - f), this.tags.push(p);
                    for (var d = 0; d < f; d += 1) this.tagMap[t[d].componentId] = p;
                    return this
                }, e.reset = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    le = new e(void 0, t).rehydrate()
                }, e.prototype.clone = function() {
                    var t = new e(this.target, this.forceServer);
                    return this.clones.push(t), t.tags = this.tags.map(function(e) {
                        for (var n = e.getIds(), r = e.clone(), i = 0; i < n.length; i += 1) t.tagMap[n[i]] = r;
                        return r
                    }), t.rehydratedNames = b({}, this.rehydratedNames), t.deferred = b({}, this.deferred), t
                }, e.prototype.sealAllTags = function() {
                    this.capacity = 1, this.tags.forEach(function(e) {
                        e.sealed = !0
                    })
                }, e.prototype.makeTag = function(e) {
                    var t = e ? e.styleTag : null;
                    return ie(this.target, t, this.forceServer, !1, this.getImportRuleTag)
                }, e.prototype.getTagForId = function(e) {
                    var t = this.tagMap[e];
                    if (void 0 !== t && !t.sealed) return t;
                    var n = this.tags[this.tags.length - 1];
                    return this.capacity -= 1, 0 === this.capacity && (this.capacity = ae, n = this.makeTag(n), this.tags.push(n)), this.tagMap[e] = n
                }, e.prototype.hasId = function(e) {
                    return void 0 !== this.tagMap[e]
                }, e.prototype.hasNameForId = function(e, t) {
                    if (void 0 === this.ignoreRehydratedNames[e] && this.rehydratedNames[t]) return !0;
                    var n = this.tagMap[e];
                    return void 0 !== n && n.hasNameForId(e, t)
                }, e.prototype.deferredInject = function(e, t) {
                    if (void 0 === this.tagMap[e]) {
                        for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].deferredInject(e, t);
                        this.getTagForId(e).insertMarker(e), this.deferred[e] = t
                    }
                }, e.prototype.inject = function(e, t, n) {
                    for (var r = this.clones, i = 0; i < r.length; i += 1) r[i].inject(e, t, n);
                    var o = this.getTagForId(e);
                    if (void 0 !== this.deferred[e]) {
                        var a = this.deferred[e].concat(t);
                        o.insertRules(e, a, n), this.deferred[e] = void 0
                    } else o.insertRules(e, t, n)
                }, e.prototype.remove = function(e) {
                    var t = this.tagMap[e];
                    if (void 0 !== t) {
                        for (var n = this.clones, r = 0; r < n.length; r += 1) n[r].remove(e);
                        t.removeRules(e), this.ignoreRehydratedNames[e] = !0, this.deferred[e] = void 0
                    }
                }, e.prototype.toHTML = function() {
                    return this.tags.map(function(e) {
                        return e.toHTML()
                    }).join("")
                }, e.prototype.toReactElements = function() {
                    var e = this.id;
                    return this.tags.map(function(t, n) {
                        var r = "sc-" + e + "-" + n;
                        return Object(s.cloneElement)(t.toElement(), {
                            key: r
                        })
                    })
                }, g(e, null, [{
                    key: "master",
                    get: function() {
                        return le || (le = (new e).rehydrate())
                    }
                }, {
                    key: "instance",
                    get: function() {
                        return e.master
                    }
                }]), e
            }(),
            ue = function() {
                function e(t, n) {
                    var r = this;
                    m(this, e), this.inject = function(e) {
                        e.hasNameForId(r.id, r.name) || e.inject(r.id, r.rules, r.name)
                    }, this.toString = function() {
                        throw new R(12, String(r.name))
                    }, this.name = t, this.rules = n, this.id = "sc-keyframes-" + t
                }
                return e.prototype.getName = function() {
                    return this.name
                }, e
            }(),
            fe = /([A-Z])/g,
            pe = /^ms-/;
        var de = function(e) {
                return null == e || !1 === e || "" === e
            },
            he = function e(t, n) {
                var r = Object.keys(t).filter(function(e) {
                    return !de(t[e])
                }).map(function(n) {
                    return w(t[n]) ? e(t[n], n) : n.replace(fe, "-$1").toLowerCase().replace(pe, "-ms-") + ": " + (r = n, null == (i = t[n]) || "boolean" == typeof i || "" === i ? "" : "number" != typeof i || 0 === i || r in c.a ? String(i).trim() : i + "px") + ";";
                    var r, i
                }).join(" ");
                return n ? n + " {\n  " + r + "\n}" : r
            };

        function me(e, t, n) {
            if (Array.isArray(e)) {
                for (var r, i = [], o = 0, a = e.length; o < a; o += 1) null !== (r = me(e[o], t, n)) && (Array.isArray(r) ? i.push.apply(i, r) : i.push(r));
                return i
            }
            return de(e) ? null : T(e) ? "." + e.styledComponentId : k(e) ? "function" != typeof(s = e) || s.prototype && s.prototype.isReactComponent || !t ? e : me(e(t), t, n) : e instanceof ue ? n ? (e.inject(n), e.getName()) : e : w(e) ? he(e) : e.toString();
            var s
        }

        function ge(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return k(e) || w(e) ? me(d(x, [e].concat(n))) : me(d(e, n))
        }

        function be(e) {
            for (var t, n = 0 | e.length, r = 0 | n, i = 0; n >= 4;) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(i) | (255 & e.charCodeAt(++i)) << 8 | (255 & e.charCodeAt(++i)) << 16 | (255 & e.charCodeAt(++i)) << 24)) + ((1540483477 * (t >>> 16) & 65535) << 16), r = 1540483477 * (65535 & r) + ((1540483477 * (r >>> 16) & 65535) << 16) ^ (t = 1540483477 * (65535 & (t ^= t >>> 24)) + ((1540483477 * (t >>> 16) & 65535) << 16)), n -= 4, ++i;
            switch (n) {
                case 3:
                    r ^= (255 & e.charCodeAt(i + 2)) << 16;
                case 2:
                    r ^= (255 & e.charCodeAt(i + 1)) << 8;
                case 1:
                    r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(i))) + ((1540483477 * (r >>> 16) & 65535) << 16)
            }
            return ((r = 1540483477 * (65535 & (r ^= r >>> 13)) + ((1540483477 * (r >>> 16) & 65535) << 16)) ^ r >>> 15) >>> 0
        }
        var ye = 52,
            ve = function(e) {
                return String.fromCharCode(e + (e > 25 ? 39 : 97))
            };

        function _e(e) {
            var t = "",
                n = void 0;
            for (n = e; n > ye; n = Math.floor(n / ye)) t = ve(n % ye) + t;
            return ve(n % ye) + t
        }

        function we(e, t) {
            for (var n = 0; n < e.length; n += 1) {
                var r = e[n];
                if (Array.isArray(r) && !we(r, t)) return !1;
                if (k(r) && !T(r)) return !1
            }
            return !t.some(function(e) {
                return k(e) || function(e) {
                    for (var t in e)
                        if (k(e[t])) return !0;
                    return !1
                }(e)
            })
        }
        var xe, Ce = !1,
            ke = function(e) {
                return _e(be(e))
            },
            Ee = function() {
                function e(t, n, r) {
                    m(this, e), this.rules = t, this.isStatic = !Ce && we(t, n), this.componentId = r, ce.master.hasId(r) || ce.master.deferredInject(r, [])
                }
                return e.prototype.generateAndInjectStyles = function(e, t) {
                    var n = this.isStatic,
                        r = this.componentId,
                        i = this.lastClassName;
                    if (S && n && "string" == typeof i && t.hasNameForId(r, i)) return i;
                    var o = me(this.rules, e, t),
                        a = ke(this.componentId + o.join(""));
                    return t.hasNameForId(r, a) || t.inject(this.componentId, W(o, "." + a, void 0, r), a), this.lastClassName = a, a
                }, e.generateName = function(e) {
                    return ke(e)
                }, e
            }(),
            Te = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C,
                    r = !!n && e.theme === n.theme;
                return e.theme && !r ? e.theme : t || n.theme
            },
            Oe = /[[\].#*$><+~=|^:(),"'`-]+/g,
            Se = /(^-|-$)/g;

        function Ae(e) {
            return e.replace(Oe, "-").replace(Se, "")
        }

        function Re(e) {
            return "string" == typeof e && !0
        }
        var je = {
                childContextTypes: !0,
                contextTypes: !0,
                defaultProps: !0,
                displayName: !0,
                getDerivedStateFromProps: !0,
                propTypes: !0,
                type: !0
            },
            Pe = {
                name: !0,
                length: !0,
                prototype: !0,
                caller: !0,
                callee: !0,
                arguments: !0,
                arity: !0
            },
            De = ((xe = {})[u.ForwardRef] = {
                $$typeof: !0,
                render: !0
            }, xe),
            Me = Object.defineProperty,
            Le = Object.getOwnPropertyNames,
            Ie = Object.getOwnPropertySymbols,
            Ue = void 0 === Ie ? function() {
                return []
            } : Ie,
            Be = Object.getOwnPropertyDescriptor,
            ze = Object.getPrototypeOf,
            He = Object.prototype,
            Ne = Array.prototype;

        function Fe(e, t, n) {
            if ("string" != typeof t) {
                var r = ze(t);
                r && r !== He && Fe(e, r, n);
                for (var i = Ne.concat(Le(t), Ue(t)), o = De[e.$$typeof] || je, a = De[t.$$typeof] || je, s = i.length, l = void 0, c = void 0; s--;)
                    if (c = i[s], !(Pe[c] || n && n[c] || a && a[c] || o && o[c]) && (l = Be(t, c))) try {
                        Me(e, c, l)
                    } catch (e) {}
                return e
            }
            return e
        }
        var We = Object(s.createContext)(),
            Ye = We.Consumer,
            qe = function(e) {
                function t(n) {
                    m(this, t);
                    var r = _(this, e.call(this, n));
                    return r.getContext = Object(f.a)(r.getContext.bind(r)), r.renderInner = r.renderInner.bind(r), r
                }
                return y(t, e), t.prototype.render = function() {
                    return this.props.children ? l.a.createElement(We.Consumer, null, this.renderInner) : null
                }, t.prototype.renderInner = function(e) {
                    var t = this.getContext(this.props.theme, e);
                    return l.a.createElement(We.Provider, {
                        value: t
                    }, l.a.Children.only(this.props.children))
                }, t.prototype.getTheme = function(e, t) {
                    if (k(e)) return e(t);
                    if (null === e || Array.isArray(e) || "object" !== (void 0 === e ? "undefined" : h(e))) throw new R(8);
                    return b({}, t, e)
                }, t.prototype.getContext = function(e, t) {
                    return this.getTheme(e, t)
                }, t
            }(s.Component),
            $e = (function() {
                function e() {
                    m(this, e), this.masterSheet = ce.master, this.instance = this.masterSheet.clone(), this.sealed = !1
                }
                e.prototype.seal = function() {
                    if (!this.sealed) {
                        var e = this.masterSheet.clones.indexOf(this.instance);
                        this.masterSheet.clones.splice(e, 1), this.sealed = !0
                    }
                }, e.prototype.collectStyles = function(e) {
                    if (this.sealed) throw new R(2);
                    return l.a.createElement(Xe, {
                        sheet: this.instance
                    }, e)
                }, e.prototype.getStyleTags = function() {
                    return this.seal(), this.instance.toHTML()
                }, e.prototype.getStyleElement = function() {
                    return this.seal(), this.instance.toReactElements()
                }, e.prototype.interleaveWithNodeStream = function(e) {
                    throw new R(3)
                }
            }(), Object(s.createContext)()),
            Ve = $e.Consumer,
            Xe = function(e) {
                function t(n) {
                    m(this, t);
                    var r = _(this, e.call(this, n));
                    return r.getContext = Object(f.a)(r.getContext), r
                }
                return y(t, e), t.prototype.getContext = function(e, t) {
                    if (e) return e;
                    if (t) return new ce(t);
                    throw new R(4)
                }, t.prototype.render = function() {
                    var e = this.props,
                        t = e.children,
                        n = e.sheet,
                        r = e.target;
                    return l.a.createElement($e.Provider, {
                        value: this.getContext(n, r)
                    }, t)
                }, t
            }(s.Component),
            Ke = (new Set, {});
        var Ge = function(e) {
            function t() {
                m(this, t);
                var n = _(this, e.call(this));
                return n.attrs = {}, n.renderOuter = n.renderOuter.bind(n), n.renderInner = n.renderInner.bind(n), n
            }
            return y(t, e), t.prototype.render = function() {
                return l.a.createElement(Ve, null, this.renderOuter)
            }, t.prototype.renderOuter = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ce.master;
                return this.styleSheet = e, this.props.forwardedComponent.componentStyle.isStatic ? this.renderInner() : l.a.createElement(Ye, null, this.renderInner)
            }, t.prototype.renderInner = function(e) {
                var t = this.props.forwardedComponent,
                    n = t.componentStyle,
                    r = t.defaultProps,
                    i = (t.displayName, t.foldedComponentIds),
                    o = t.styledComponentId,
                    a = t.target,
                    l = void 0;
                l = n.isStatic ? this.generateAndInjectStyles(C, this.props) : void 0 !== e ? this.generateAndInjectStyles(Te(this.props, e, r), this.props) : this.generateAndInjectStyles(this.props.theme || C, this.props);
                var c = this.props.as || this.attrs.as || a,
                    u = Re(c),
                    f = {},
                    d = b({}, this.attrs, this.props),
                    h = void 0;
                for (h in d) "forwardedComponent" !== h && "as" !== h && "suppressClassNameWarning" !== h && ("forwardedRef" === h ? f.ref = d[h] : u && !Object(p.a)(h) || (f[h] = d[h]));
                return this.props.style && this.attrs.style && (f.style = b({}, this.attrs.style, this.props.style)), f.className = Array.prototype.concat(i, this.props.className, o, this.attrs.className, l).filter(Boolean).join(" "), Object(s.createElement)(c, f)
            }, t.prototype.buildExecutionContext = function(e, t, n) {
                var r = this,
                    i = b({}, t, {
                        theme: e
                    });
                return n.length ? (this.attrs = {}, n.forEach(function(e) {
                    var t, n = e,
                        o = !1,
                        a = void 0,
                        s = void 0;
                    for (s in k(n) && (n = n(i), o = !0), n) a = n[s], o || !k(a) || (t = a) && t.prototype && t.prototype.isReactComponent || T(a) || (a = a(i)), r.attrs[s] = a, i[s] = a
                }), i) : i
            }, t.prototype.generateAndInjectStyles = function(e, t) {
                var n = t.forwardedComponent,
                    r = n.attrs,
                    i = n.componentStyle;
                n.warnTooManyClasses;
                return i.isStatic && !r.length ? i.generateAndInjectStyles(C, this.styleSheet) : i.generateAndInjectStyles(this.buildExecutionContext(e, t, r), this.styleSheet)
            }, t
        }(s.Component);

        function Qe(e, t, n) {
            var r = T(e),
                i = !Re(e),
                o = t.displayName,
                a = void 0 === o ? function(e) {
                    return Re(e) ? "styled." + e : "Styled(" + E(e) + ")"
                }(e) : o,
                s = t.componentId,
                c = void 0 === s ? function(e, t, n) {
                    var r = "string" != typeof t ? "sc" : Ae(t),
                        i = (Ke[r] || 0) + 1;
                    Ke[r] = i;
                    var o = r + "-" + e.generateName(r + i);
                    return n ? n + "-" + o : o
                }(Ee, t.displayName, t.parentComponentId) : s,
                u = t.ParentComponent,
                f = void 0 === u ? Ge : u,
                p = t.attrs,
                d = void 0 === p ? x : p,
                h = t.displayName && t.componentId ? Ae(t.displayName) + "-" + t.componentId : t.componentId || c,
                m = r && e.attrs ? Array.prototype.concat(e.attrs, d).filter(Boolean) : d,
                g = new Ee(r ? e.componentStyle.rules.concat(n) : n, m, h),
                y = l.a.forwardRef(function(e, t) {
                    return l.a.createElement(f, b({}, e, {
                        forwardedComponent: y,
                        forwardedRef: t
                    }))
                });
            return y.attrs = m, y.componentStyle = g, y.displayName = a, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : x, y.styledComponentId = h, y.target = r ? e.target : e, y.withComponent = function(e) {
                var r = t.componentId,
                    i = v(t, ["componentId"]),
                    o = r && r + "-" + (Re(e) ? e : Ae(E(e)));
                return Qe(e, b({}, i, {
                    attrs: m,
                    componentId: o,
                    ParentComponent: f
                }), n)
            }, y.toString = function() {
                return "." + y.styledComponentId
            }, i && Fe(y, e, {
                attrs: !0,
                componentStyle: !0,
                displayName: !0,
                foldedComponentIds: !0,
                styledComponentId: !0,
                target: !0,
                withComponent: !0
            }), y
        }
        var Je = function(e) {
            return function e(t, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : C;
                if (!Object(u.isValidElementType)(n)) throw new R(1, String(n));
                var i = function() {
                    return t(n, r, ge.apply(void 0, arguments))
                };
                return i.withConfig = function(i) {
                    return e(t, n, b({}, r, i))
                }, i.attrs = function(i) {
                    return e(t, n, b({}, r, {
                        attrs: Array.prototype.concat(r.attrs, i).filter(Boolean)
                    }))
                }, i
            }(Qe, e)
        };
        ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"].forEach(function(e) {
            Je[e] = Je(e)
        });
        ! function() {
            function e(t, n) {
                m(this, e), this.rules = t, this.componentId = n, this.isStatic = we(t, x), ce.master.hasId(n) || ce.master.deferredInject(n, [])
            }
            e.prototype.createStyles = function(e, t) {
                var n = W(me(this.rules, e, t), "");
                t.inject(this.componentId, n)
            }, e.prototype.removeStyles = function(e) {
                var t = this.componentId;
                e.hasId(t) && e.remove(t)
            }, e.prototype.renderStyles = function(e, t) {
                this.removeStyles(t), this.createStyles(e, t)
            }
        }();
        S && (window.scCGSHMRCache = {});
        var Ze = function(e) {
            return e.replace(/\s|\\n/g, "")
        };

        function et(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            var i = ge.apply(void 0, [e].concat(n)),
                o = _e(be(Ze(JSON.stringify(i))));
            return new ue(o, W(i, o, "@keyframes"))
        }
        t.b = Je
    }).call(this, n(22))
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function i(e) {
        return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    n.d(t, "b", function() {
        return s
    }), n.d(t, "a", function() {
        return o
    });
    var o = function(e, t) {
            return null == t && (t = document), "object" === i(e) ? e : t.querySelector(e)
        },
        a = function(e, t) {
            for (var n in t)({}).hasOwnProperty.call(t, n) && (e[n] = t[n]);

            function r() {
                this.constructor = e
            }
            return r.prototype = t.prototype, e.prototype = new r, e.__super__ = t.prototype, e
        },
        s = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, i;
            return t = e, i = [{
                key: "initClass",
                value: function() {
                    var e;
                    this.uniqid = (e = 0, {
                        get: function() {
                            return e++
                        }
                    })
                }
            }, {
                key: "extend",
                value: function(e) {
                    for (var t = e, n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1; i < n; i++) r[i - 1] = arguments[i];
                    for (var o = Array.from(r), a = 0; a < o.length; a++)
                        for (var s = o[a], l = Object.keys(s || {}), c = 0; c < l.length; c++) {
                            var u = l[c];
                            t[u] = s[u]
                        }
                    return t
                }
            }, {
                key: "clampRGB",
                value: function(e) {
                    return e < 0 ? 0 : e > 255 ? 255 : e
                }
            }, {
                key: "copyAttributes",
                value: function(e, t, n) {
                    return null == n && (n = {}),
                        function() {
                            for (var r = [], i = Array.from(e.attributes), o = 0; o < i.length; o++) {
                                var a = i[o];
                                null != n.except && Array.from(n.except).includes(a.nodeName) || r.push(t.setAttribute(a.nodeName, a.nodeValue))
                            }
                            return r
                        }()
                }
            }, {
                key: "dataArray",
                value: function(e) {
                    return null == e && (e = 0), Caman.NodeJS || null != window.Uint8Array ? new Uint8Array(e) : new Array(e)
                }
            }], (n = null) && r(t.prototype, n), i && r(t, i), e
        }();
    s.initClass();
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(o, "$", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/util.js"), __REACT_HOT_LOADER__.register(a, "__extends", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/util.js"), __REACT_HOT_LOADER__.register(s, "Util", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/util.js"))
}, function(e, t, n) {
    "use strict";

    function r() {
        var e, t, n, r;
        for (t = 0, n = (r = ["log", "info", "warn", "error"]).length; t < n; t++) this[e = r[t]] = function(e) {
            return function() {
                var t;
                if (t = 1 <= arguments.length ? [].slice.call(arguments, 0) : [], Caman.DEBUG) try {
                    return console[e].apply(console, t)
                } catch (n) {
                    return n, console[e](t)
                }
            }
        }(e);
        this.debug = this.log
    }
    n.d(t, "a", function() {
        return i
    });
    var i = new r;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(r, "Logger", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/logger.js"), __REACT_HOT_LOADER__.register(i, "Log", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/logger.js"))
}, function(e, t, n) {
    "use strict";
    ! function e() {
        if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
        } catch (e) {
            console.error(e)
        }
    }(), e.exports = n(18)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, i;
        return t = e, i = [{
            key: "initClass",
            value: function() {
                this.items = {}
            }
        }, {
            key: "has",
            value: function(e) {
                return null != this.items[e]
            }
        }, {
            key: "get",
            value: function(e) {
                return this.items[e]
            }
        }, {
            key: "put",
            value: function(e, t) {
                return this.items[e] = t
            }
        }, {
            key: "execute",
            value: function(e, t) {
                var n = this;
                return setTimeout(function() {
                    return t.call(n.get(e), n.get(e))
                }, 0), this.get(e)
            }
        }, {
            key: "flush",
            value: function(e) {
                return null == e && (e = !1), e ? delete this.items[e] : this.items = {}
            }
        }], (n = null) && r(t.prototype, n), i && r(t, i), e
    }();
    i.initClass();
    var o = i;
    t.a = o;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(i, "Store", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/store.js"), __REACT_HOT_LOADER__.register(o, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/store.js"))
}, function(e, t, n) {
    e.exports = function e(t) {
        "use strict";
        var n = /^\0+/g,
            r = /[\0\r\f]/g,
            i = /: */g,
            o = /zoo|gra/,
            a = /([,: ])(transform)/g,
            s = /,+\s*(?![^(]*[)])/g,
            l = / +\s*(?![^(]*[)])/g,
            c = / *[\0] */g,
            u = /,\r+?/g,
            f = /([\t\r\n ])*\f?&/g,
            p = /:global\(((?:[^\(\)\[\]]*|\[.*\]|\([^\(\)]*\))*)\)/g,
            d = /\W+/g,
            h = /@(k\w+)\s*(\S*)\s*/,
            m = /::(place)/g,
            g = /:(read-only)/g,
            b = /\s+(?=[{\];=:>])/g,
            y = /([[}=:>])\s+/g,
            v = /(\{[^{]+?);(?=\})/g,
            _ = /\s{2,}/g,
            w = /([^\(])(:+) */g,
            x = /[svh]\w+-[tblr]{2}/,
            C = /\(\s*(.*)\s*\)/g,
            k = /([\s\S]*?);/g,
            E = /-self|flex-/g,
            T = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            O = /stretch|:\s*\w+\-(?:conte|avail)/,
            S = /([^-])(image-set\()/,
            A = "-webkit-",
            R = "-moz-",
            j = "-ms-",
            P = 59,
            D = 125,
            M = 123,
            L = 40,
            I = 41,
            U = 91,
            B = 93,
            z = 10,
            H = 13,
            N = 9,
            F = 64,
            W = 32,
            Y = 38,
            q = 45,
            $ = 95,
            V = 42,
            X = 44,
            K = 58,
            G = 39,
            Q = 34,
            J = 47,
            Z = 62,
            ee = 43,
            te = 126,
            ne = 0,
            re = 12,
            ie = 11,
            oe = 107,
            ae = 109,
            se = 115,
            le = 112,
            ce = 111,
            ue = 105,
            fe = 99,
            pe = 100,
            de = 112,
            he = 1,
            me = 1,
            ge = 0,
            be = 1,
            ye = 1,
            ve = 1,
            _e = 0,
            we = 0,
            xe = 0,
            Ce = [],
            ke = [],
            Ee = 0,
            Te = null,
            Oe = -2,
            Se = -1,
            Ae = 0,
            Re = 1,
            je = 2,
            Pe = 3,
            De = 0,
            Me = 1,
            Le = "",
            Ie = "",
            Ue = "";

        function Be(e, t, i, o, a) {
            for (var s, l, u = 0, f = 0, p = 0, d = 0, b = 0, y = 0, v = 0, _ = 0, x = 0, k = 0, E = 0, T = 0, O = 0, S = 0, $ = 0, _e = 0, ke = 0, Te = 0, Oe = 0, Se = i.length, He = Se - 1, $e = "", Ve = "", Xe = "", Ke = "", Ge = "", Qe = ""; $ < Se;) {
                if (v = i.charCodeAt($), $ === He && f + d + p + u !== 0 && (0 !== f && (v = f === J ? z : J), d = p = u = 0, Se++, He++), f + d + p + u === 0) {
                    if ($ === He && (_e > 0 && (Ve = Ve.replace(r, "")), Ve.trim().length > 0)) {
                        switch (v) {
                            case W:
                            case N:
                            case P:
                            case H:
                            case z:
                                break;
                            default:
                                Ve += i.charAt($)
                        }
                        v = P
                    }
                    if (1 === ke) switch (v) {
                        case M:
                        case D:
                        case P:
                        case Q:
                        case G:
                        case L:
                        case I:
                        case X:
                            ke = 0;
                        case N:
                        case H:
                        case z:
                        case W:
                            break;
                        default:
                            for (ke = 0, Oe = $, b = v, $--, v = P; Oe < Se;) switch (i.charCodeAt(Oe++)) {
                                case z:
                                case H:
                                case P:
                                    ++$, v = b, Oe = Se;
                                    break;
                                case K:
                                    _e > 0 && (++$, v = b);
                                case M:
                                    Oe = Se
                            }
                    }
                    switch (v) {
                        case M:
                            for (b = (Ve = Ve.trim()).charCodeAt(0), E = 1, Oe = ++$; $ < Se;) {
                                switch (v = i.charCodeAt($)) {
                                    case M:
                                        E++;
                                        break;
                                    case D:
                                        E--;
                                        break;
                                    case J:
                                        switch (y = i.charCodeAt($ + 1)) {
                                            case V:
                                            case J:
                                                $ = qe(y, $, He, i)
                                        }
                                        break;
                                    case U:
                                        v++;
                                    case L:
                                        v++;
                                    case Q:
                                    case G:
                                        for (; $++ < He && i.charCodeAt($) !== v;);
                                }
                                if (0 === E) break;
                                $++
                            }
                            switch (Xe = i.substring(Oe, $), b === ne && (b = (Ve = Ve.replace(n, "").trim()).charCodeAt(0)), b) {
                                case F:
                                    switch (_e > 0 && (Ve = Ve.replace(r, "")), y = Ve.charCodeAt(1)) {
                                        case pe:
                                        case ae:
                                        case se:
                                        case q:
                                            s = t;
                                            break;
                                        default:
                                            s = Ce
                                    }
                                    if (Oe = (Xe = Be(t, s, Xe, y, a + 1)).length, xe > 0 && 0 === Oe && (Oe = Ve.length), Ee > 0 && (s = ze(Ce, Ve, Te), l = Ye(Pe, Xe, s, t, me, he, Oe, y, a, o), Ve = s.join(""), void 0 !== l && 0 === (Oe = (Xe = l.trim()).length) && (y = 0, Xe = "")), Oe > 0) switch (y) {
                                        case se:
                                            Ve = Ve.replace(C, We);
                                        case pe:
                                        case ae:
                                        case q:
                                            Xe = Ve + "{" + Xe + "}";
                                            break;
                                        case oe:
                                            Xe = (Ve = Ve.replace(h, "$1 $2" + (Me > 0 ? Le : ""))) + "{" + Xe + "}", Xe = 1 === ye || 2 === ye && Fe("@" + Xe, 3) ? "@" + A + Xe + "@" + Xe : "@" + Xe;
                                            break;
                                        default:
                                            Xe = Ve + Xe, o === de && (Ke += Xe, Xe = "")
                                    } else Xe = "";
                                    break;
                                default:
                                    Xe = Be(t, ze(t, Ve, Te), Xe, o, a + 1)
                            }
                            Ge += Xe, T = 0, ke = 0, S = 0, _e = 0, Te = 0, O = 0, Ve = "", Xe = "", v = i.charCodeAt(++$);
                            break;
                        case D:
                        case P:
                            if ((Oe = (Ve = (_e > 0 ? Ve.replace(r, "") : Ve).trim()).length) > 1) switch (0 === S && ((b = Ve.charCodeAt(0)) === q || b > 96 && b < 123) && (Oe = (Ve = Ve.replace(" ", ":")).length), Ee > 0 && void 0 !== (l = Ye(Re, Ve, t, e, me, he, Ke.length, o, a, o)) && 0 === (Oe = (Ve = l.trim()).length) && (Ve = "\0\0"), b = Ve.charCodeAt(0), y = Ve.charCodeAt(1), b) {
                                case ne:
                                    break;
                                case F:
                                    if (y === ue || y === fe) {
                                        Qe += Ve + i.charAt($);
                                        break
                                    }
                                default:
                                    if (Ve.charCodeAt(Oe - 1) === K) break;
                                    Ke += Ne(Ve, b, y, Ve.charCodeAt(2))
                            }
                            T = 0, ke = 0, S = 0, _e = 0, Te = 0, Ve = "", v = i.charCodeAt(++$)
                    }
                }
                switch (v) {
                    case H:
                    case z:
                        if (f + d + p + u + we === 0) switch (k) {
                            case I:
                            case G:
                            case Q:
                            case F:
                            case te:
                            case Z:
                            case V:
                            case ee:
                            case J:
                            case q:
                            case K:
                            case X:
                            case P:
                            case M:
                            case D:
                                break;
                            default:
                                S > 0 && (ke = 1)
                        }
                        f === J ? f = 0 : be + T === 0 && o !== oe && Ve.length > 0 && (_e = 1, Ve += "\0"), Ee * De > 0 && Ye(Ae, Ve, t, e, me, he, Ke.length, o, a, o), he = 1, me++;
                        break;
                    case P:
                    case D:
                        if (f + d + p + u === 0) {
                            he++;
                            break
                        }
                    default:
                        switch (he++, $e = i.charAt($), v) {
                            case N:
                            case W:
                                if (d + u + f === 0) switch (_) {
                                    case X:
                                    case K:
                                    case N:
                                    case W:
                                        $e = "";
                                        break;
                                    default:
                                        v !== W && ($e = " ")
                                }
                                break;
                            case ne:
                                $e = "\\0";
                                break;
                            case re:
                                $e = "\\f";
                                break;
                            case ie:
                                $e = "\\v";
                                break;
                            case Y:
                                d + f + u === 0 && be > 0 && (Te = 1, _e = 1, $e = "\f" + $e);
                                break;
                            case 108:
                                if (d + f + u + ge === 0 && S > 0) switch ($ - S) {
                                    case 2:
                                        _ === le && i.charCodeAt($ - 3) === K && (ge = _);
                                    case 8:
                                        x === ce && (ge = x)
                                }
                                break;
                            case K:
                                d + f + u === 0 && (S = $);
                                break;
                            case X:
                                f + p + d + u === 0 && (_e = 1, $e += "\r");
                                break;
                            case Q:
                            case G:
                                0 === f && (d = d === v ? 0 : 0 === d ? v : d);
                                break;
                            case U:
                                d + f + p === 0 && u++;
                                break;
                            case B:
                                d + f + p === 0 && u--;
                                break;
                            case I:
                                d + f + u === 0 && p--;
                                break;
                            case L:
                                if (d + f + u === 0) {
                                    if (0 === T) switch (2 * _ + 3 * x) {
                                        case 533:
                                            break;
                                        default:
                                            E = 0, T = 1
                                    }
                                    p++
                                }
                                break;
                            case F:
                                f + p + d + u + S + O === 0 && (O = 1);
                                break;
                            case V:
                            case J:
                                if (d + u + p > 0) break;
                                switch (f) {
                                    case 0:
                                        switch (2 * v + 3 * i.charCodeAt($ + 1)) {
                                            case 235:
                                                f = J;
                                                break;
                                            case 220:
                                                Oe = $, f = V
                                        }
                                        break;
                                    case V:
                                        v === J && _ === V && Oe + 2 !== $ && (33 === i.charCodeAt(Oe + 2) && (Ke += i.substring(Oe, $ + 1)), $e = "", f = 0)
                                }
                        }
                        if (0 === f) {
                            if (be + d + u + O === 0 && o !== oe && v !== P) switch (v) {
                                case X:
                                case te:
                                case Z:
                                case ee:
                                case I:
                                case L:
                                    if (0 === T) {
                                        switch (_) {
                                            case N:
                                            case W:
                                            case z:
                                            case H:
                                                $e += "\0";
                                                break;
                                            default:
                                                $e = "\0" + $e + (v === X ? "" : "\0")
                                        }
                                        _e = 1
                                    } else switch (v) {
                                        case L:
                                            S + 7 === $ && 108 === _ && (S = 0), T = ++E;
                                            break;
                                        case I:
                                            0 == (T = --E) && (_e = 1, $e += "\0")
                                    }
                                    break;
                                case N:
                                case W:
                                    switch (_) {
                                        case ne:
                                        case M:
                                        case D:
                                        case P:
                                        case X:
                                        case re:
                                        case N:
                                        case W:
                                        case z:
                                        case H:
                                            break;
                                        default:
                                            0 === T && (_e = 1, $e += "\0")
                                    }
                            }
                            Ve += $e, v !== W && v !== N && (k = v)
                        }
                }
                x = _, _ = v, $++
            }
            if (Oe = Ke.length, xe > 0 && 0 === Oe && 0 === Ge.length && 0 === t[0].length == 0 && (o !== ae || 1 === t.length && (be > 0 ? Ie : Ue) === t[0]) && (Oe = t.join(",").length + 2), Oe > 0) {
                if (s = 0 === be && o !== oe ? function(e) {
                        for (var t, n, i = 0, o = e.length, a = Array(o); i < o; ++i) {
                            for (var s = e[i].split(c), l = "", u = 0, f = 0, p = 0, d = 0, h = s.length; u < h; ++u)
                                if (!(0 === (f = (n = s[u]).length) && h > 1)) {
                                    if (p = l.charCodeAt(l.length - 1), d = n.charCodeAt(0), t = "", 0 !== u) switch (p) {
                                        case V:
                                        case te:
                                        case Z:
                                        case ee:
                                        case W:
                                        case L:
                                            break;
                                        default:
                                            t = " "
                                    }
                                    switch (d) {
                                        case Y:
                                            n = t + Ie;
                                        case te:
                                        case Z:
                                        case ee:
                                        case W:
                                        case I:
                                        case L:
                                            break;
                                        case U:
                                            n = t + n + Ie;
                                            break;
                                        case K:
                                            switch (2 * n.charCodeAt(1) + 3 * n.charCodeAt(2)) {
                                                case 530:
                                                    if (ve > 0) {
                                                        n = t + n.substring(8, f - 1);
                                                        break
                                                    }
                                                default:
                                                    (u < 1 || s[u - 1].length < 1) && (n = t + Ie + n)
                                            }
                                            break;
                                        case X:
                                            t = "";
                                        default:
                                            n = f > 1 && n.indexOf(":") > 0 ? t + n.replace(w, "$1" + Ie + "$2") : t + n + Ie
                                    }
                                    l += n
                                }
                            a[i] = l.replace(r, "").trim()
                        }
                        return a
                    }(t) : t, Ee > 0 && void 0 !== (l = Ye(je, Ke, s, e, me, he, Oe, o, a, o)) && 0 === (Ke = l).length) return Qe + Ke + Ge;
                if (Ke = s.join(",") + "{" + Ke + "}", ye * ge != 0) {
                    switch (2 !== ye || Fe(Ke, 2) || (ge = 0), ge) {
                        case ce:
                            Ke = Ke.replace(g, ":" + R + "$1") + Ke;
                            break;
                        case le:
                            Ke = Ke.replace(m, "::" + A + "input-$1") + Ke.replace(m, "::" + R + "$1") + Ke.replace(m, ":" + j + "input-$1") + Ke
                    }
                    ge = 0
                }
            }
            return Qe + Ke + Ge
        }

        function ze(e, t, n) {
            var r = t.trim().split(u),
                i = r,
                o = r.length,
                a = e.length;
            switch (a) {
                case 0:
                case 1:
                    for (var s = 0, l = 0 === a ? "" : e[0] + " "; s < o; ++s) i[s] = He(l, i[s], n, a).trim();
                    break;
                default:
                    s = 0;
                    var c = 0;
                    for (i = []; s < o; ++s)
                        for (var f = 0; f < a; ++f) i[c++] = He(e[f] + " ", r[s], n, a).trim()
            }
            return i
        }

        function He(e, t, n, r) {
            var i = t,
                o = i.charCodeAt(0);
            switch (o < 33 && (o = (i = i.trim()).charCodeAt(0)), o) {
                case Y:
                    switch (be + r) {
                        case 0:
                        case 1:
                            if (0 === e.trim().length) break;
                        default:
                            return i.replace(f, "$1" + e.trim())
                    }
                    break;
                case K:
                    switch (i.charCodeAt(1)) {
                        case 103:
                            if (ve > 0 && be > 0) return i.replace(p, "$1").replace(f, "$1" + Ue);
                            break;
                        default:
                            return e.trim() + i.replace(f, "$1" + e.trim())
                    }
                default:
                    if (n * be > 0 && i.indexOf("\f") > 0) return i.replace(f, (e.charCodeAt(0) === K ? "" : "$1") + e.trim())
            }
            return e + i
        }

        function Ne(e, t, n, r) {
            var c, u = 0,
                f = e + ";",
                p = 2 * t + 3 * n + 4 * r;
            if (944 === p) return function(e) {
                var t = e.length,
                    n = e.indexOf(":", 9) + 1,
                    r = e.substring(0, n).trim(),
                    i = e.substring(n, t - 1).trim();
                switch (e.charCodeAt(9) * Me) {
                    case 0:
                        break;
                    case q:
                        if (110 !== e.charCodeAt(10)) break;
                    default:
                        for (var o = i.split((i = "", s)), a = 0, n = 0, t = o.length; a < t; n = 0, ++a) {
                            for (var c = o[a], u = c.split(l); c = u[n];) {
                                var f = c.charCodeAt(0);
                                if (1 === Me && (f > F && f < 90 || f > 96 && f < 123 || f === $ || f === q && c.charCodeAt(1) !== q)) switch (isNaN(parseFloat(c)) + (-1 !== c.indexOf("("))) {
                                    case 1:
                                        switch (c) {
                                            case "infinite":
                                            case "alternate":
                                            case "backwards":
                                            case "running":
                                            case "normal":
                                            case "forwards":
                                            case "both":
                                            case "none":
                                            case "linear":
                                            case "ease":
                                            case "ease-in":
                                            case "ease-out":
                                            case "ease-in-out":
                                            case "paused":
                                            case "reverse":
                                            case "alternate-reverse":
                                            case "inherit":
                                            case "initial":
                                            case "unset":
                                            case "step-start":
                                            case "step-end":
                                                break;
                                            default:
                                                c += Le
                                        }
                                }
                                u[n++] = c
                            }
                            i += (0 === a ? "" : ",") + u.join(" ")
                        }
                }
                return i = r + i + ";", 1 === ye || 2 === ye && Fe(i, 1) ? A + i + i : i
            }(f);
            if (0 === ye || 2 === ye && !Fe(f, 1)) return f;
            switch (p) {
                case 1015:
                    return 97 === f.charCodeAt(10) ? A + f + f : f;
                case 951:
                    return 116 === f.charCodeAt(3) ? A + f + f : f;
                case 963:
                    return 110 === f.charCodeAt(5) ? A + f + f : f;
                case 1009:
                    if (100 !== f.charCodeAt(4)) break;
                case 969:
                case 942:
                    return A + f + f;
                case 978:
                    return A + f + R + f + f;
                case 1019:
                case 983:
                    return A + f + R + f + j + f + f;
                case 883:
                    return f.charCodeAt(8) === q ? A + f + f : f.indexOf("image-set(", 11) > 0 ? f.replace(S, "$1" + A + "$2") + f : f;
                case 932:
                    if (f.charCodeAt(4) === q) switch (f.charCodeAt(5)) {
                        case 103:
                            return A + "box-" + f.replace("-grow", "") + A + f + j + f.replace("grow", "positive") + f;
                        case 115:
                            return A + f + j + f.replace("shrink", "negative") + f;
                        case 98:
                            return A + f + j + f.replace("basis", "preferred-size") + f
                    }
                    return A + f + j + f + f;
                case 964:
                    return A + f + j + "flex-" + f + f;
                case 1023:
                    if (99 !== f.charCodeAt(8)) break;
                    return c = f.substring(f.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), A + "box-pack" + c + A + f + j + "flex-pack" + c + f;
                case 1005:
                    return o.test(f) ? f.replace(i, ":" + A) + f.replace(i, ":" + R) + f : f;
                case 1e3:
                    switch (u = (c = f.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(u)) {
                        case 226:
                            c = f.replace(x, "tb");
                            break;
                        case 232:
                            c = f.replace(x, "tb-rl");
                            break;
                        case 220:
                            c = f.replace(x, "lr");
                            break;
                        default:
                            return f
                    }
                    return A + f + j + c + f;
                case 1017:
                    if (-1 === f.indexOf("sticky", 9)) return f;
                case 975:
                    switch (u = (f = e).length - 10, p = (c = (33 === f.charCodeAt(u) ? f.substring(0, u) : f).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                        case 203:
                            if (c.charCodeAt(8) < 111) break;
                        case 115:
                            f = f.replace(c, A + c) + ";" + f;
                            break;
                        case 207:
                        case 102:
                            f = f.replace(c, A + (p > 102 ? "inline-" : "") + "box") + ";" + f.replace(c, A + c) + ";" + f.replace(c, j + c + "box") + ";" + f
                    }
                    return f + ";";
                case 938:
                    if (f.charCodeAt(5) === q) switch (f.charCodeAt(6)) {
                        case 105:
                            return c = f.replace("-items", ""), A + f + A + "box-" + c + j + "flex-" + c + f;
                        case 115:
                            return A + f + j + "flex-item-" + f.replace(E, "") + f;
                        default:
                            return A + f + j + "flex-line-pack" + f.replace("align-content", "").replace(E, "") + f
                    }
                    break;
                case 973:
                case 989:
                    if (f.charCodeAt(3) !== q || 122 === f.charCodeAt(4)) break;
                case 931:
                case 953:
                    if (!0 === O.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? Ne(e.replace("stretch", "fill-available"), t, n, r).replace(":fill-available", ":stretch") : f.replace(c, A + c) + f.replace(c, R + c.replace("fill-", "")) + f;
                    break;
                case 962:
                    if (f = A + f + (102 === f.charCodeAt(5) ? j + f : "") + f, n + r === 211 && 105 === f.charCodeAt(13) && f.indexOf("transform", 10) > 0) return f.substring(0, f.indexOf(";", 27) + 1).replace(a, "$1" + A + "$2") + f
            }
            return f
        }

        function Fe(e, t) {
            var n = e.indexOf(1 === t ? ":" : "{"),
                r = e.substring(0, 3 !== t ? n : 10),
                i = e.substring(n + 1, e.length - 1);
            return Te(2 !== t ? r : r.replace(T, "$1"), i, t)
        }

        function We(e, t) {
            var n = Ne(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return n !== t + ";" ? n.replace(k, " or ($1)").substring(4) : "(" + t + ")"
        }

        function Ye(e, t, n, r, i, o, a, s, l, c) {
            for (var u, f = 0, p = t; f < Ee; ++f) switch (u = ke[f].call(Ve, e, p, n, r, i, o, a, s, l, c)) {
                case void 0:
                case !1:
                case !0:
                case null:
                    break;
                default:
                    p = u
            }
            if (p !== t) return p
        }

        function qe(e, t, n, r) {
            for (var i = t + 1; i < n; ++i) switch (r.charCodeAt(i)) {
                case J:
                    if (e === V && r.charCodeAt(i - 1) === V && t + 2 !== i) return i + 1;
                    break;
                case z:
                    if (e === J) return i + 1
            }
            return i
        }

        function $e(e) {
            for (var t in e) {
                var n = e[t];
                switch (t) {
                    case "keyframe":
                        Me = 0 | n;
                        break;
                    case "global":
                        ve = 0 | n;
                        break;
                    case "cascade":
                        be = 0 | n;
                        break;
                    case "compress":
                        _e = 0 | n;
                        break;
                    case "semicolon":
                        we = 0 | n;
                        break;
                    case "preserve":
                        xe = 0 | n;
                        break;
                    case "prefix":
                        Te = null, n ? "function" != typeof n ? ye = 1 : (ye = 2, Te = n) : ye = 0
                }
            }
            return $e
        }

        function Ve(t, n) {
            if (void 0 !== this && this.constructor === Ve) return e(t);
            var i = t,
                o = i.charCodeAt(0);
            o < 33 && (o = (i = i.trim()).charCodeAt(0)), Me > 0 && (Le = i.replace(d, o === U ? "" : "-")), o = 1, 1 === be ? Ue = i : Ie = i;
            var a, s = [Ue];
            Ee > 0 && void 0 !== (a = Ye(Se, n, s, s, me, he, 0, 0, 0, 0)) && "string" == typeof a && (n = a);
            var l = Be(Ce, s, n, 0, 0);
            return Ee > 0 && void 0 !== (a = Ye(Oe, l, s, s, me, he, l.length, 0, 0, 0)) && "string" != typeof(l = a) && (o = 0), Le = "", Ue = "", Ie = "", ge = 0, me = 1, he = 1, _e * o == 0 ? l : l.replace(r, "").replace(b, "").replace(y, "$1").replace(v, "$1").replace(_, " ")
        }
        return Ve.use = function e(t) {
            switch (t) {
                case void 0:
                case null:
                    Ee = ke.length = 0;
                    break;
                default:
                    if ("function" == typeof t) ke[Ee++] = t;
                    else if ("object" == typeof t)
                        for (var n = 0, r = t.length; n < r; ++n) e(t[n]);
                    else De = 0 | !!t
            }
            return e
        }, Ve.set = $e, void 0 !== t && $e(t), Ve
    }(null)
}, function(e, t, n) {
    "use strict";
    e.exports = n(23)
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        if (e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++)
            if (e[n] !== t[n]) return !1;
        return !0
    }
    t.a = function(e, t) {
        var n;
        void 0 === t && (t = r);
        var i, o = [],
            a = !1;
        return function() {
            for (var r = arguments.length, s = new Array(r), l = 0; l < r; l++) s[l] = arguments[l];
            return a && n === this && t(s, o) ? i : (i = e.apply(this, s), a = !0, n = this, o = s, i)
        }
    }
}, function(e, t, n) {
    var r = n(27),
        i = n(28);
    e.exports = function(e, t, n) {
        var o = t && n || 0;
        "string" == typeof e && (t = "binary" === e ? new Array(16) : null, e = null);
        var a = (e = e || {}).random || (e.rng || r)();
        if (a[6] = 15 & a[6] | 64, a[8] = 63 & a[8] | 128, t)
            for (var s = 0; s < 16; ++s) t[o + s] = a[s];
        return t || i(a)
    }
}, function(e, t, n) {
    "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        i = Object.prototype.hasOwnProperty,
        o = Object.prototype.propertyIsEnumerable;
    e.exports = function() {
        try {
            if (!Object.assign) return !1;
            var e = new String("abc");
            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
            if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) {
                    return t[e]
                }).join("")) return !1;
            var r = {};
            return "abcdefghijklmnopqrst".split("").forEach(function(e) {
                r[e] = e
            }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
        } catch (e) {
            return !1
        }
    }() ? Object.assign : function(e, t) {
        for (var n, a, s = function(e) {
                if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }(e), l = 1; l < arguments.length; l++) {
            for (var c in n = Object(arguments[l])) i.call(n, c) && (s[c] = n[c]);
            if (r) {
                a = r(n);
                for (var u = 0; u < a.length; u++) o.call(n, a[u]) && (s[a[u]] = n[a[u]])
            }
        }
        return s
    }
}, function(e, t) {
    var n;
    n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function(e, t, n) {
    e.exports = function() {
        "use strict";
        return function(e) {
            function t(t) {
                if (t) try {
                    e(t + "}")
                } catch (e) {}
            }
            return function(n, r, i, o, a, s, l, c, u, f) {
                switch (n) {
                    case 1:
                        if (0 === u && 64 === r.charCodeAt(0)) return e(r + ";"), "";
                        break;
                    case 2:
                        if (0 === c) return r + "/*|*/";
                        break;
                    case 3:
                        switch (c) {
                            case 102:
                            case 112:
                                return e(i[0] + r), "";
                            default:
                                return r + (0 === f ? "/*|*/" : "")
                        }
                    case -2:
                        r.split("/*|*/}").forEach(t)
                }
            }
        }
    }()
}, function(e, t, n) {
    "use strict";
    t.a = {
        animationIterationCount: 1,
        borderImageOutset: 1,
        borderImageSlice: 1,
        borderImageWidth: 1,
        boxFlex: 1,
        boxFlexGroup: 1,
        boxOrdinalGroup: 1,
        columnCount: 1,
        columns: 1,
        flex: 1,
        flexGrow: 1,
        flexPositive: 1,
        flexShrink: 1,
        flexNegative: 1,
        flexOrder: 1,
        gridRow: 1,
        gridRowEnd: 1,
        gridRowSpan: 1,
        gridRowStart: 1,
        gridColumn: 1,
        gridColumnEnd: 1,
        gridColumnSpan: 1,
        gridColumnStart: 1,
        msGridRow: 1,
        msGridRowSpan: 1,
        msGridColumn: 1,
        msGridColumnSpan: 1,
        fontWeight: 1,
        lineHeight: 1,
        opacity: 1,
        order: 1,
        orphans: 1,
        tabSize: 1,
        widows: 1,
        zIndex: 1,
        zoom: 1,
        WebkitLineClamp: 1,
        fillOpacity: 1,
        floodOpacity: 1,
        stopOpacity: 1,
        strokeDasharray: 1,
        strokeDashoffset: 1,
        strokeMiterlimit: 1,
        strokeOpacity: 1,
        strokeWidth: 1
    }
}, function(e, t, n) {
    "use strict";
    const r = n(29),
        i = new Set(["jpg", "png", "gif", "webp", "flif", "cr2", "tif", "bmp", "jxr", "psd", "ico", "bpg", "jp2", "jpm", "jpx", "heic", "cur", "dcm"]),
        o = e => {
            const t = r(e);
            return i.has(t && t.ext) ? t : null
        };
    e.exports = o, e.exports.default = o, Object.defineProperty(o, "minimumBytes", {
        value: r.minimumBytes
    })
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = ["extended", "included"],
        o = function() {
            function e() {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e)
            }
            var t, n, o;
            return t = e, o = [{
                key: "extends",
                value: function(e) {
                    for (var t in e) {
                        var n = e[t];
                        Array.from(i).includes(t) || (this[t] = n)
                    }
                    return null != e.extended && e.extended.apply(this), this
                }
            }, {
                key: "includes",
                value: function(e) {
                    for (var t in e) {
                        var n = e[t];
                        Array.from(i).includes(t) || (this.prototype[t] = n)
                    }
                    return null != e.included && e.included.apply(this), this
                }
            }, {
                key: "delegate",
                value: function() {
                    for (var e = this, t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                    var i = n.pop();
                    return Array.from(n).map(function(t) {
                        return e.prototype[t] = i.prototype[t]
                    })
                }
            }, {
                key: "aliasFunction",
                value: function(e, t) {
                    var n = this;
                    return this.prototype[e] = function() {
                        for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                        return n.prototype[t].apply(n, r)
                    }
                }
            }, {
                key: "aliasProperty",
                value: function(e, t) {
                    return Object.defineProperty(this.prototype, e, {
                        get: function() {
                            return this[t]
                        },
                        set: function(e) {
                            return this[t] = e
                        }
                    })
                }
            }, {
                key: "included",
                value: function(e) {
                    return e.call(this, this.prototype)
                }
            }], (n = null) && r(t.prototype, n), o && r(t, o), e
        }(),
        a = o;
    t.a = a;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(i, "moduleKeywords", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/module.js"), __REACT_HOT_LOADER__.register(o, "Module", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/module.js"), __REACT_HOT_LOADER__.register(a, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/module.js"))
}, function(e, t, n) {
    "use strict";
    var r = n(2),
        i = n(3);

    function o(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function a(e, t, n) {
        return t && o(e.prototype, t), n && o(e, n), e
    }
    var s = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.processNext = this.processNext.bind(this), this.c = t, this.renderQueue = [], this.modPixelData = null
        }
        return a(e, null, [{
            key: "initClass",
            value: function() {
                this.Blocks = 4
            }
        }]), a(e, [{
            key: "add",
            value: function(e) {
                if (null != e) return this.renderQueue.push(e)
            }
        }, {
            key: "processNext",
            value: function() {
                if (0 === this.renderQueue.length) return Caman.Event.trigger(this, "renderFinished"), null != this.finishedFn && this.finishedFn.call(this.c), this;
                switch (this.currentJob = this.renderQueue.shift(), this.currentJob.type) {
                    case Caman.Filter.Type.LayerDequeue:
                        var e = this.c.canvasQueue.shift();
                        return this.c.executeLayer(e), this.processNext();
                    case Caman.Filter.Type.LayerFinished:
                        return this.c.applyCurrentLayer(), this.c.popContext(), this.processNext();
                    case Caman.Filter.Type.LoadOverlay:
                        return this.loadOverlay(this.currentJob.layer, this.currentJob.src);
                    case Caman.Filter.Type.LoadLayerMask:
                        return this.loadLayerMask(this.currentJob.layer, this.currentJob.src);
                    case Caman.Filter.Type.Plugin:
                        return this.executePlugin();
                    default:
                        return this.executeFilter()
                }
            }
        }, {
            key: "execute",
            value: function(e) {
                return this.finishedFn = e, this.modPixelData = r.b.dataArray(this.c.pixelData.length), this.processNext()
            }
        }, {
            key: "eachBlock",
            value: function(t) {
                var n = this;
                this.blocksDone = 0;
                var r = this.c.pixelData.length,
                    i = 4 * Math.floor(r / 4 / e.Blocks),
                    o = i + r / 4 % e.Blocks * 4;
                return function() {
                    for (var r = [], a = 0, s = e.Blocks, l = 0 <= s; l ? a < s : a > s; l ? a++ : a--) {
                        var c = a * i,
                            u = c + (a === e.Blocks - 1 ? o : i);
                        if (Caman.NodeJS) {
                            var f = Fiber(function() {
                                return t.call(n, a, c, u)
                            }).run();
                            r.push(n.blockFinished(f))
                        } else r.push(setTimeout(function(e, r, i) {
                            return function() {
                                return t.call(n, e, r, i)
                            }
                        }(a, c, u), 0))
                    }
                    return r
                }()
            }
        }, {
            key: "executeFilter",
            value: function() {
                return Caman.Event.trigger(this.c, "processStart", this.currentJob), this.currentJob.type === Caman.Filter.Type.Single ? this.eachBlock(this.renderBlock) : this.eachBlock(this.renderKernel)
            }
        }, {
            key: "executePlugin",
            value: function() {
                return i.a.debug("Executing plugin ".concat(this.currentJob.plugin)), Caman.Plugin.execute(this.c, this.currentJob.plugin, this.currentJob.args), i.a.debug("Plugin ".concat(this.currentJob.plugin, " finished!")), this.processNext()
            }
        }, {
            key: "renderBlock",
            value: function(t, n, o) {
                i.a.debug("Block #".concat(t, " - Filter: ").concat(this.currentJob.name, ", Start: ").concat(n, ", End: ").concat(o)), Caman.Event.trigger(this.c, "blockStarted", {
                    blockNum: t,
                    totalBlocks: e.Blocks,
                    startPixel: n,
                    endPixel: o
                });
                var a = new Caman.Pixel;
                a.setContext(this.c);
                for (var s = n, l = o; s < l; s += 4) a.loc = s, a.r = this.c.pixelData[s], a.g = this.c.pixelData[s + 1], a.b = this.c.pixelData[s + 2], a.a = this.c.pixelData[s + 3], this.currentJob.processFn(a), this.c.pixelData[s] = r.b.clampRGB(a.r), this.c.pixelData[s + 1] = r.b.clampRGB(a.g), this.c.pixelData[s + 2] = r.b.clampRGB(a.b), this.c.pixelData[s + 3] = r.b.clampRGB(a.a);
                return this.blockFinished(t)
            }
        }, {
            key: "renderKernel",
            value: function(e, t, n) {
                this.currentJob.name;
                var o = this.currentJob.bias,
                    a = this.currentJob.divisor,
                    s = this.c.pixelData.length,
                    l = this.currentJob.adjust,
                    c = Math.sqrt(l.length),
                    u = [];
                i.a.debug("Rendering kernel - Filter: ".concat(this.currentJob.name)), t = Math.max(t, 4 * this.c.dimensions.width * ((c - 1) / 2)), n = Math.min(n, s - 4 * this.c.dimensions.width * ((c - 1) / 2));
                var f = (c - 1) / 2,
                    p = new Caman.Pixel;
                p.setContext(this.c);
                for (var d = t, h = n; d < h; d += 4) {
                    p.loc = d;
                    for (var m = 0, g = -f, b = f, y = -f <= b; y ? g <= b : g >= b; y ? g++ : g--)
                        for (var v = f, _ = -f, w = f <= _; w ? v <= _ : v >= _; w ? v++ : v--) {
                            var x = p.getPixelRelative(g, v);
                            u[3 * m] = x.r, u[3 * m + 1] = x.g, u[3 * m + 2] = x.b, m++
                        }
                    var C = this.processKernel(l, u, a, o);
                    this.modPixelData[d] = r.b.clampRGB(C.r), this.modPixelData[d + 1] = r.b.clampRGB(C.g), this.modPixelData[d + 2] = r.b.clampRGB(C.b), this.modPixelData[d + 3] = this.c.pixelData[d + 3]
                }
                return this.blockFinished(e)
            }
        }, {
            key: "blockFinished",
            value: function(t) {
                if (t >= 0 && i.a.debug("Block #".concat(t, " finished! Filter: ").concat(this.currentJob.name)), this.blocksDone++, Caman.Event.trigger(this.c, "blockFinished", {
                        blockNum: t,
                        blocksFinished: this.blocksDone,
                        totalBlocks: e.Blocks
                    }), this.blocksDone === e.Blocks) {
                    if (this.currentJob.type === Caman.Filter.Type.Kernel)
                        for (var n = 0, r = this.c.pixelData.length, o = 0 <= r; o ? n < r : n > r; o ? n++ : n--) this.c.pixelData[n] = this.modPixelData[n];
                    return t >= 0 && i.a.debug("Filter ".concat(this.currentJob.name, " finished!")), Caman.Event.trigger(this.c, "processComplete", this.currentJob), this.processNext()
                }
            }
        }, {
            key: "processKernel",
            value: function(e, t, n, r) {
                for (var i = {
                        r: 0,
                        g: 0,
                        b: 0
                    }, o = 0, a = e.length, s = 0 <= a; s ? o < a : o > a; s ? o++ : o--) i.r += e[o] * t[3 * o], i.g += e[o] * t[3 * o + 1], i.b += e[o] * t[3 * o + 2];
                return i.r = i.r / n + r, i.g = i.g / n + r, i.b = i.b / n + r, i
            }
        }, {
            key: "loadOverlay",
            value: function(e, t) {
                var n = this,
                    r = new Image;
                r.onload = function() {
                    return e.context.drawImage(r, 0, 0, n.c.dimensions.width, n.c.dimensions.height), e.imageData = e.context.getImageData(0, 0, n.c.dimensions.width, n.c.dimensions.height), e.pixelData = e.imageData.data, n.c.pixelData = e.pixelData, n.processNext()
                };
                var i = Caman.IO.remoteCheck(t);
                return r.src = null != i ? i : t
            }
        }, {
            key: "loadLayerMask",
            value: function(e, t) {
                var n = this,
                    r = new Image;
                r.onload = function() {
                    var t = document.createElement("canvas");
                    t.width = n.c.dimensions.width, t.height = n.c.dimensions.height;
                    var i = t.getContext("2d");
                    i.drawImage(r, 0, 0, n.c.dimensions.width, n.c.dimensions.height);
                    var o = i.getImageData(0, 0, n.c.dimensions.width, n.c.dimensions.height);
                    return e.maskData = o.data, n.processNext()
                };
                var i = Caman.IO.remoteCheck(t);
                return r.src = null != i ? i : t
            }
        }]), e
    }();
    s.initClass();
    var l = s;
    t.a = l;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(s, "Renderer", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/renderer.js"), __REACT_HOT_LOADER__.register(l, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/renderer.js"))
}, function(e, t, n) {
    "use strict";
    var r = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|default|defer|dir|disabled|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|itemProp|itemScope|itemType|itemID|itemRef|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        i = function(e) {
            var t = {};
            return function(n) {
                return void 0 === t[n] && (t[n] = e(n)), t[n]
            }
        }(function(e) {
            return r.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        });
    t.a = i
}, function(e, t, n) {
    "use strict";
    /** @license React v16.8.3
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(0),
        i = n(10),
        o = n(20);

    function a(e) {
        for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        ! function(e, t, n, r, i, o, a, s) {
            if (!e) {
                if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, r, i, o, a, s],
                        c = 0;
                    (e = Error(t.replace(/%s/g, function() {
                        return l[c++]
                    }))).name = "Invariant Violation"
                }
                throw e.framesToPop = 1, e
            }
        }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }
    r || a("227");
    var s = !1,
        l = null,
        c = !1,
        u = null,
        f = {
            onError: function(e) {
                s = !0, l = e
            }
        };

    function p(e, t, n, r, i, o, a, c, u) {
        s = !1, l = null,
            function(e, t, n, r, i, o, a, s, l) {
                var c = Array.prototype.slice.call(arguments, 3);
                try {
                    t.apply(n, c)
                } catch (e) {
                    this.onError(e)
                }
            }.apply(f, arguments)
    }
    var d = null,
        h = {};

    function m() {
        if (d)
            for (var e in h) {
                var t = h[e],
                    n = d.indexOf(e);
                if (-1 < n || a("96", e), !b[n])
                    for (var r in t.extractEvents || a("97", e), b[n] = t, n = t.eventTypes) {
                        var i = void 0,
                            o = n[r],
                            s = t,
                            l = r;
                        y.hasOwnProperty(l) && a("99", l), y[l] = o;
                        var c = o.phasedRegistrationNames;
                        if (c) {
                            for (i in c) c.hasOwnProperty(i) && g(c[i], s, l);
                            i = !0
                        } else o.registrationName ? (g(o.registrationName, s, l), i = !0) : i = !1;
                        i || a("98", r, e)
                    }
            }
    }

    function g(e, t, n) {
        v[e] && a("100", e), v[e] = t, _[e] = t.eventTypes[n].dependencies
    }
    var b = [],
        y = {},
        v = {},
        _ = {},
        w = null,
        x = null,
        C = null;

    function k(e, t, n) {
        var r = e.type || "unknown-event";
        e.currentTarget = C(n),
            function(e, t, n, r, i, o, f, d, h) {
                if (p.apply(this, arguments), s) {
                    if (s) {
                        var m = l;
                        s = !1, l = null
                    } else a("198"), m = void 0;
                    c || (c = !0, u = m)
                }
            }(r, t, void 0, e), e.currentTarget = null
    }

    function E(e, t) {
        return null == t && a("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
    }

    function T(e, t, n) {
        Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
    }
    var O = null;

    function S(e) {
        if (e) {
            var t = e._dispatchListeners,
                n = e._dispatchInstances;
            if (Array.isArray(t))
                for (var r = 0; r < t.length && !e.isPropagationStopped(); r++) k(e, t[r], n[r]);
            else t && k(e, t, n);
            e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
        }
    }
    var A = {
        injectEventPluginOrder: function(e) {
            d && a("101"), d = Array.prototype.slice.call(e), m()
        },
        injectEventPluginsByName: function(e) {
            var t, n = !1;
            for (t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    h.hasOwnProperty(t) && h[t] === r || (h[t] && a("102", t), h[t] = r, n = !0)
                }
            n && m()
        }
    };

    function R(e, t) {
        var n = e.stateNode;
        if (!n) return null;
        var r = w(n);
        if (!r) return null;
        n = r[t];
        e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
                (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                break e;
            default:
                e = !1
        }
        return e ? null : (n && "function" != typeof n && a("231", t, typeof n), n)
    }

    function j(e) {
        if (null !== e && (O = E(O, e)), e = O, O = null, e && (T(e, S), O && a("95"), c)) throw e = u, c = !1, u = null, e
    }
    var P = Math.random().toString(36).slice(2),
        D = "__reactInternalInstance$" + P,
        M = "__reactEventHandlers$" + P;

    function L(e) {
        if (e[D]) return e[D];
        for (; !e[D];) {
            if (!e.parentNode) return null;
            e = e.parentNode
        }
        return 5 === (e = e[D]).tag || 6 === e.tag ? e : null
    }

    function I(e) {
        return !(e = e[D]) || 5 !== e.tag && 6 !== e.tag ? null : e
    }

    function U(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        a("33")
    }

    function B(e) {
        return e[M] || null
    }

    function z(e) {
        do {
            e = e.return
        } while (e && 5 !== e.tag);
        return e || null
    }

    function H(e, t, n) {
        (t = R(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = E(n._dispatchListeners, t), n._dispatchInstances = E(n._dispatchInstances, e))
    }

    function N(e) {
        if (e && e.dispatchConfig.phasedRegistrationNames) {
            for (var t = e._targetInst, n = []; t;) n.push(t), t = z(t);
            for (t = n.length; 0 < t--;) H(n[t], "captured", e);
            for (t = 0; t < n.length; t++) H(n[t], "bubbled", e)
        }
    }

    function F(e, t, n) {
        e && n && n.dispatchConfig.registrationName && (t = R(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = E(n._dispatchListeners, t), n._dispatchInstances = E(n._dispatchInstances, e))
    }

    function W(e) {
        e && e.dispatchConfig.registrationName && F(e._targetInst, null, e)
    }

    function Y(e) {
        T(e, N)
    }
    var q = !("undefined" == typeof window || !window.document || !window.document.createElement);

    function $(e, t) {
        var n = {};
        return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
    }
    var V = {
            animationend: $("Animation", "AnimationEnd"),
            animationiteration: $("Animation", "AnimationIteration"),
            animationstart: $("Animation", "AnimationStart"),
            transitionend: $("Transition", "TransitionEnd")
        },
        X = {},
        K = {};

    function G(e) {
        if (X[e]) return X[e];
        if (!V[e]) return e;
        var t, n = V[e];
        for (t in n)
            if (n.hasOwnProperty(t) && t in K) return X[e] = n[t];
        return e
    }
    q && (K = document.createElement("div").style, "AnimationEvent" in window || (delete V.animationend.animation, delete V.animationiteration.animation, delete V.animationstart.animation), "TransitionEvent" in window || delete V.transitionend.transition);
    var Q = G("animationend"),
        J = G("animationiteration"),
        Z = G("animationstart"),
        ee = G("transitionend"),
        te = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
        ne = null,
        re = null,
        ie = null;

    function oe() {
        if (ie) return ie;
        var e, t, n = re,
            r = n.length,
            i = "value" in ne ? ne.value : ne.textContent,
            o = i.length;
        for (e = 0; e < r && n[e] === i[e]; e++);
        var a = r - e;
        for (t = 1; t <= a && n[r - t] === i[o - t]; t++);
        return ie = i.slice(e, 1 < t ? 1 - t : void 0)
    }

    function ae() {
        return !0
    }

    function se() {
        return !1
    }

    function le(e, t, n, r) {
        for (var i in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(i) && ((t = e[i]) ? this[i] = t(n) : "target" === i ? this.target = r : this[i] = n[i]);
        return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? ae : se, this.isPropagationStopped = se, this
    }

    function ce(e, t, n, r) {
        if (this.eventPool.length) {
            var i = this.eventPool.pop();
            return this.call(i, e, t, n, r), i
        }
        return new this(e, t, n, r)
    }

    function ue(e) {
        e instanceof this || a("279"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
    }

    function fe(e) {
        e.eventPool = [], e.getPooled = ce, e.release = ue
    }
    i(le.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var e = this.nativeEvent;
            e && (e.preventDefault ? e.preventDefault() : "unknown" != typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ae)
        },
        stopPropagation: function() {
            var e = this.nativeEvent;
            e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ae)
        },
        persist: function() {
            this.isPersistent = ae
        },
        isPersistent: se,
        destructor: function() {
            var e, t = this.constructor.Interface;
            for (e in t) this[e] = null;
            this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = se, this._dispatchInstances = this._dispatchListeners = null
        }
    }), le.Interface = {
        type: null,
        target: null,
        currentTarget: function() {
            return null
        },
        eventPhase: null,
        bubbles: null,
        cancelable: null,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: null,
        isTrusted: null
    }, le.extend = function(e) {
        function t() {}

        function n() {
            return r.apply(this, arguments)
        }
        var r = this;
        t.prototype = r.prototype;
        var o = new t;
        return i(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = i({}, r.Interface, e), n.extend = r.extend, fe(n), n
    }, fe(le);
    var pe = le.extend({
            data: null
        }),
        de = le.extend({
            data: null
        }),
        he = [9, 13, 27, 32],
        me = q && "CompositionEvent" in window,
        ge = null;
    q && "documentMode" in document && (ge = document.documentMode);
    var be = q && "TextEvent" in window && !ge,
        ye = q && (!me || ge && 8 < ge && 11 >= ge),
        ve = String.fromCharCode(32),
        _e = {
            beforeInput: {
                phasedRegistrationNames: {
                    bubbled: "onBeforeInput",
                    captured: "onBeforeInputCapture"
                },
                dependencies: ["compositionend", "keypress", "textInput", "paste"]
            },
            compositionEnd: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionEnd",
                    captured: "onCompositionEndCapture"
                },
                dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
            },
            compositionStart: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionStart",
                    captured: "onCompositionStartCapture"
                },
                dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
            },
            compositionUpdate: {
                phasedRegistrationNames: {
                    bubbled: "onCompositionUpdate",
                    captured: "onCompositionUpdateCapture"
                },
                dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
            }
        },
        we = !1;

    function xe(e, t) {
        switch (e) {
            case "keyup":
                return -1 !== he.indexOf(t.keyCode);
            case "keydown":
                return 229 !== t.keyCode;
            case "keypress":
            case "mousedown":
            case "blur":
                return !0;
            default:
                return !1
        }
    }

    function Ce(e) {
        return "object" == typeof(e = e.detail) && "data" in e ? e.data : null
    }
    var ke = !1;
    var Ee = {
            eventTypes: _e,
            extractEvents: function(e, t, n, r) {
                var i = void 0,
                    o = void 0;
                if (me) e: {
                    switch (e) {
                        case "compositionstart":
                            i = _e.compositionStart;
                            break e;
                        case "compositionend":
                            i = _e.compositionEnd;
                            break e;
                        case "compositionupdate":
                            i = _e.compositionUpdate;
                            break e
                    }
                    i = void 0
                }
                else ke ? xe(e, n) && (i = _e.compositionEnd) : "keydown" === e && 229 === n.keyCode && (i = _e.compositionStart);
                return i ? (ye && "ko" !== n.locale && (ke || i !== _e.compositionStart ? i === _e.compositionEnd && ke && (o = oe()) : (re = "value" in (ne = r) ? ne.value : ne.textContent, ke = !0)), i = pe.getPooled(i, t, n, r), o ? i.data = o : null !== (o = Ce(n)) && (i.data = o), Y(i), o = i) : o = null, (e = be ? function(e, t) {
                    switch (e) {
                        case "compositionend":
                            return Ce(t);
                        case "keypress":
                            return 32 !== t.which ? null : (we = !0, ve);
                        case "textInput":
                            return (e = t.data) === ve && we ? null : e;
                        default:
                            return null
                    }
                }(e, n) : function(e, t) {
                    if (ke) return "compositionend" === e || !me && xe(e, t) ? (e = oe(), ie = re = ne = null, ke = !1, e) : null;
                    switch (e) {
                        case "paste":
                            return null;
                        case "keypress":
                            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                if (t.char && 1 < t.char.length) return t.char;
                                if (t.which) return String.fromCharCode(t.which)
                            }
                            return null;
                        case "compositionend":
                            return ye && "ko" !== t.locale ? null : t.data;
                        default:
                            return null
                    }
                }(e, n)) ? ((t = de.getPooled(_e.beforeInput, t, n, r)).data = e, Y(t)) : t = null, null === o ? t : null === t ? o : [o, t]
            }
        },
        Te = null,
        Oe = null,
        Se = null;

    function Ae(e) {
        if (e = x(e)) {
            "function" != typeof Te && a("280");
            var t = w(e.stateNode);
            Te(e.stateNode, e.type, t)
        }
    }

    function Re(e) {
        Oe ? Se ? Se.push(e) : Se = [e] : Oe = e
    }

    function je() {
        if (Oe) {
            var e = Oe,
                t = Se;
            if (Se = Oe = null, Ae(e), t)
                for (e = 0; e < t.length; e++) Ae(t[e])
        }
    }

    function Pe(e, t) {
        return e(t)
    }

    function De(e, t, n) {
        return e(t, n)
    }

    function Me() {}
    var Le = !1;

    function Ie(e, t) {
        if (Le) return e(t);
        Le = !0;
        try {
            return Pe(e, t)
        } finally {
            Le = !1, (null !== Oe || null !== Se) && (Me(), je())
        }
    }
    var Ue = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0
    };

    function Be(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Ue[e.type] : "textarea" === t
    }

    function ze(e) {
        return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
    }

    function He(e) {
        if (!q) return !1;
        var t = (e = "on" + e) in document;
        return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" == typeof t[e]), t
    }

    function Ne(e) {
        var t = e.type;
        return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
    }

    function Fe(e) {
        e._valueTracker || (e._valueTracker = function(e) {
            var t = Ne(e) ? "checked" : "value",
                n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                r = "" + e[t];
            if (!e.hasOwnProperty(t) && void 0 !== n && "function" == typeof n.get && "function" == typeof n.set) {
                var i = n.get,
                    o = n.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return i.call(this)
                    },
                    set: function(e) {
                        r = "" + e, o.call(this, e)
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: n.enumerable
                }), {
                    getValue: function() {
                        return r
                    },
                    setValue: function(e) {
                        r = "" + e
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t]
                    }
                }
            }
        }(e))
    }

    function We(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
            r = "";
        return e && (r = Ne(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
    }
    var Ye = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    Ye.hasOwnProperty("ReactCurrentDispatcher") || (Ye.ReactCurrentDispatcher = {
        current: null
    });
    var qe = /^(.*)[\\\/]/,
        $e = "function" == typeof Symbol && Symbol.for,
        Ve = $e ? Symbol.for("react.element") : 60103,
        Xe = $e ? Symbol.for("react.portal") : 60106,
        Ke = $e ? Symbol.for("react.fragment") : 60107,
        Ge = $e ? Symbol.for("react.strict_mode") : 60108,
        Qe = $e ? Symbol.for("react.profiler") : 60114,
        Je = $e ? Symbol.for("react.provider") : 60109,
        Ze = $e ? Symbol.for("react.context") : 60110,
        et = $e ? Symbol.for("react.concurrent_mode") : 60111,
        tt = $e ? Symbol.for("react.forward_ref") : 60112,
        nt = $e ? Symbol.for("react.suspense") : 60113,
        rt = $e ? Symbol.for("react.memo") : 60115,
        it = $e ? Symbol.for("react.lazy") : 60116,
        ot = "function" == typeof Symbol && Symbol.iterator;

    function at(e) {
        return null === e || "object" != typeof e ? null : "function" == typeof(e = ot && e[ot] || e["@@iterator"]) ? e : null
    }

    function st(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
            case et:
                return "ConcurrentMode";
            case Ke:
                return "Fragment";
            case Xe:
                return "Portal";
            case Qe:
                return "Profiler";
            case Ge:
                return "StrictMode";
            case nt:
                return "Suspense"
        }
        if ("object" == typeof e) switch (e.$$typeof) {
            case Ze:
                return "Context.Consumer";
            case Je:
                return "Context.Provider";
            case tt:
                var t = e.render;
                return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
            case rt:
                return st(e.type);
            case it:
                if (e = 1 === e._status ? e._result : null) return st(e)
        }
        return null
    }

    function lt(e) {
        var t = "";
        do {
            e: switch (e.tag) {
                case 3:
                case 4:
                case 6:
                case 7:
                case 10:
                case 9:
                    var n = "";
                    break e;
                default:
                    var r = e._debugOwner,
                        i = e._debugSource,
                        o = st(e.type);
                    n = null, r && (n = st(r.type)), r = o, o = "", i ? o = " (at " + i.fileName.replace(qe, "") + ":" + i.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (r || "Unknown") + o
            }
            t += n,
            e = e.return
        } while (e);
        return t
    }
    var ct = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        ut = Object.prototype.hasOwnProperty,
        ft = {},
        pt = {};

    function dt(e, t, n, r, i) {
        this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = t
    }
    var ht = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
        ht[e] = new dt(e, 0, !1, e, null)
    }), [
        ["acceptCharset", "accept-charset"],
        ["className", "class"],
        ["htmlFor", "for"],
        ["httpEquiv", "http-equiv"]
    ].forEach(function(e) {
        var t = e[0];
        ht[t] = new dt(t, 1, !1, e[1], null)
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
        ht[e] = new dt(e, 2, !1, e.toLowerCase(), null)
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
        ht[e] = new dt(e, 2, !1, e, null)
    }), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
        ht[e] = new dt(e, 3, !1, e.toLowerCase(), null)
    }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
        ht[e] = new dt(e, 3, !0, e, null)
    }), ["capture", "download"].forEach(function(e) {
        ht[e] = new dt(e, 4, !1, e, null)
    }), ["cols", "rows", "size", "span"].forEach(function(e) {
        ht[e] = new dt(e, 6, !1, e, null)
    }), ["rowSpan", "start"].forEach(function(e) {
        ht[e] = new dt(e, 5, !1, e.toLowerCase(), null)
    });
    var mt = /[\-:]([a-z])/g;

    function gt(e) {
        return e[1].toUpperCase()
    }

    function bt(e, t, n, r) {
        var i = ht.hasOwnProperty(t) ? ht[t] : null;
        (null !== i ? 0 === i.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
            if (null == t || function(e, t, n, r) {
                    if (null !== n && 0 === n.type) return !1;
                    switch (typeof t) {
                        case "function":
                        case "symbol":
                            return !0;
                        case "boolean":
                            return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                        default:
                            return !1
                    }
                }(e, t, n, r)) return !0;
            if (r) return !1;
            if (null !== n) switch (n.type) {
                case 3:
                    return !t;
                case 4:
                    return !1 === t;
                case 5:
                    return isNaN(t);
                case 6:
                    return isNaN(t) || 1 > t
            }
            return !1
        }(t, n, i, r) && (n = null), r || null === i ? function(e) {
            return !!ut.call(pt, e) || !ut.call(ft, e) && (ct.test(e) ? pt[e] = !0 : (ft[e] = !0, !1))
        }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = null === n ? 3 !== i.type && "" : n : (t = i.attributeName, r = i.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (i = i.type) || 4 === i && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }

    function yt(e) {
        switch (typeof e) {
            case "boolean":
            case "number":
            case "object":
            case "string":
            case "undefined":
                return e;
            default:
                return ""
        }
    }

    function vt(e, t) {
        var n = t.checked;
        return i({}, t, {
            defaultChecked: void 0,
            defaultValue: void 0,
            value: void 0,
            checked: null != n ? n : e._wrapperState.initialChecked
        })
    }

    function _t(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
            r = null != t.checked ? t.checked : t.defaultChecked;
        n = yt(null != t.value ? t.value : n), e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
        }
    }

    function wt(e, t) {
        null != (t = t.checked) && bt(e, "checked", t, !1)
    }

    function xt(e, t) {
        wt(e, t);
        var n = yt(t.value),
            r = t.type;
        if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
        t.hasOwnProperty("value") ? kt(e, t.type, n) : t.hasOwnProperty("defaultValue") && kt(e, t.type, yt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
    }

    function Ct(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
            var r = t.type;
            if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
            t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
        }
        "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
    }

    function kt(e, t, n) {
        "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
        var t = e.replace(mt, gt);
        ht[t] = new dt(t, 1, !1, e, null)
    }), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
        var t = e.replace(mt, gt);
        ht[t] = new dt(t, 1, !1, e, "http://www.w3.org/1999/xlink")
    }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
        var t = e.replace(mt, gt);
        ht[t] = new dt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace")
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
        ht[e] = new dt(e, 1, !1, e.toLowerCase(), null)
    });
    var Et = {
        change: {
            phasedRegistrationNames: {
                bubbled: "onChange",
                captured: "onChangeCapture"
            },
            dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
        }
    };

    function Tt(e, t, n) {
        return (e = le.getPooled(Et.change, e, t, n)).type = "change", Re(n), Y(e), e
    }
    var Ot = null,
        St = null;

    function At(e) {
        j(e)
    }

    function Rt(e) {
        if (We(U(e))) return e
    }

    function jt(e, t) {
        if ("change" === e) return t
    }
    var Pt = !1;

    function Dt() {
        Ot && (Ot.detachEvent("onpropertychange", Mt), St = Ot = null)
    }

    function Mt(e) {
        "value" === e.propertyName && Rt(St) && Ie(At, e = Tt(St, e, ze(e)))
    }

    function Lt(e, t, n) {
        "focus" === e ? (Dt(), St = n, (Ot = t).attachEvent("onpropertychange", Mt)) : "blur" === e && Dt()
    }

    function It(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Rt(St)
    }

    function Ut(e, t) {
        if ("click" === e) return Rt(t)
    }

    function Bt(e, t) {
        if ("input" === e || "change" === e) return Rt(t)
    }
    q && (Pt = He("input") && (!document.documentMode || 9 < document.documentMode));
    var zt = {
            eventTypes: Et,
            _isInputEventSupported: Pt,
            extractEvents: function(e, t, n, r) {
                var i = t ? U(t) : window,
                    o = void 0,
                    a = void 0,
                    s = i.nodeName && i.nodeName.toLowerCase();
                if ("select" === s || "input" === s && "file" === i.type ? o = jt : Be(i) ? Pt ? o = Bt : (o = It, a = Lt) : (s = i.nodeName) && "input" === s.toLowerCase() && ("checkbox" === i.type || "radio" === i.type) && (o = Ut), o && (o = o(e, t))) return Tt(o, n, r);
                a && a(e, i, t), "blur" === e && (e = i._wrapperState) && e.controlled && "number" === i.type && kt(i, "number", i.value)
            }
        },
        Ht = le.extend({
            view: null,
            detail: null
        }),
        Nt = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };

    function Ft(e) {
        var t = this.nativeEvent;
        return t.getModifierState ? t.getModifierState(e) : !!(e = Nt[e]) && !!t[e]
    }

    function Wt() {
        return Ft
    }
    var Yt = 0,
        qt = 0,
        $t = !1,
        Vt = !1,
        Xt = Ht.extend({
            screenX: null,
            screenY: null,
            clientX: null,
            clientY: null,
            pageX: null,
            pageY: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            getModifierState: Wt,
            button: null,
            buttons: null,
            relatedTarget: function(e) {
                return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
            },
            movementX: function(e) {
                if ("movementX" in e) return e.movementX;
                var t = Yt;
                return Yt = e.screenX, $t ? "mousemove" === e.type ? e.screenX - t : 0 : ($t = !0, 0)
            },
            movementY: function(e) {
                if ("movementY" in e) return e.movementY;
                var t = qt;
                return qt = e.screenY, Vt ? "mousemove" === e.type ? e.screenY - t : 0 : (Vt = !0, 0)
            }
        }),
        Kt = Xt.extend({
            pointerId: null,
            width: null,
            height: null,
            pressure: null,
            tangentialPressure: null,
            tiltX: null,
            tiltY: null,
            twist: null,
            pointerType: null,
            isPrimary: null
        }),
        Gt = {
            mouseEnter: {
                registrationName: "onMouseEnter",
                dependencies: ["mouseout", "mouseover"]
            },
            mouseLeave: {
                registrationName: "onMouseLeave",
                dependencies: ["mouseout", "mouseover"]
            },
            pointerEnter: {
                registrationName: "onPointerEnter",
                dependencies: ["pointerout", "pointerover"]
            },
            pointerLeave: {
                registrationName: "onPointerLeave",
                dependencies: ["pointerout", "pointerover"]
            }
        },
        Qt = {
            eventTypes: Gt,
            extractEvents: function(e, t, n, r) {
                var i = "mouseover" === e || "pointerover" === e,
                    o = "mouseout" === e || "pointerout" === e;
                if (i && (n.relatedTarget || n.fromElement) || !o && !i) return null;
                if (i = r.window === r ? r : (i = r.ownerDocument) ? i.defaultView || i.parentWindow : window, o ? (o = t, t = (t = n.relatedTarget || n.toElement) ? L(t) : null) : o = null, o === t) return null;
                var a = void 0,
                    s = void 0,
                    l = void 0,
                    c = void 0;
                "mouseout" === e || "mouseover" === e ? (a = Xt, s = Gt.mouseLeave, l = Gt.mouseEnter, c = "mouse") : "pointerout" !== e && "pointerover" !== e || (a = Kt, s = Gt.pointerLeave, l = Gt.pointerEnter, c = "pointer");
                var u = null == o ? i : U(o);
                if (i = null == t ? i : U(t), (e = a.getPooled(s, o, n, r)).type = c + "leave", e.target = u, e.relatedTarget = i, (n = a.getPooled(l, t, n, r)).type = c + "enter", n.target = i, n.relatedTarget = u, r = t, o && r) e: {
                    for (i = r, c = 0, a = t = o; a; a = z(a)) c++;
                    for (a = 0, l = i; l; l = z(l)) a++;
                    for (; 0 < c - a;) t = z(t),
                    c--;
                    for (; 0 < a - c;) i = z(i),
                    a--;
                    for (; c--;) {
                        if (t === i || t === i.alternate) break e;
                        t = z(t), i = z(i)
                    }
                    t = null
                }
                else t = null;
                for (i = t, t = []; o && o !== i && (null === (c = o.alternate) || c !== i);) t.push(o), o = z(o);
                for (o = []; r && r !== i && (null === (c = r.alternate) || c !== i);) o.push(r), r = z(r);
                for (r = 0; r < t.length; r++) F(t[r], "bubbled", e);
                for (r = o.length; 0 < r--;) F(o[r], "captured", n);
                return [e, n]
            }
        };

    function Jt(e, t) {
        return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
    }
    var Zt = Object.prototype.hasOwnProperty;

    function en(e, t) {
        if (Jt(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e),
            r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
            if (!Zt.call(t, n[r]) || !Jt(e[n[r]], t[n[r]])) return !1;
        return !0
    }

    function tn(e) {
        var t = e;
        if (e.alternate)
            for (; t.return;) t = t.return;
        else {
            if (0 != (2 & t.effectTag)) return 1;
            for (; t.return;)
                if (0 != (2 & (t = t.return).effectTag)) return 1
        }
        return 3 === t.tag ? 2 : 3
    }

    function nn(e) {
        2 !== tn(e) && a("188")
    }

    function rn(e) {
        if (!(e = function(e) {
                var t = e.alternate;
                if (!t) return 3 === (t = tn(e)) && a("188"), 1 === t ? null : e;
                for (var n = e, r = t;;) {
                    var i = n.return,
                        o = i ? i.alternate : null;
                    if (!i || !o) break;
                    if (i.child === o.child) {
                        for (var s = i.child; s;) {
                            if (s === n) return nn(i), e;
                            if (s === r) return nn(i), t;
                            s = s.sibling
                        }
                        a("188")
                    }
                    if (n.return !== r.return) n = i, r = o;
                    else {
                        s = !1;
                        for (var l = i.child; l;) {
                            if (l === n) {
                                s = !0, n = i, r = o;
                                break
                            }
                            if (l === r) {
                                s = !0, r = i, n = o;
                                break
                            }
                            l = l.sibling
                        }
                        if (!s) {
                            for (l = o.child; l;) {
                                if (l === n) {
                                    s = !0, n = o, r = i;
                                    break
                                }
                                if (l === r) {
                                    s = !0, r = o, n = i;
                                    break
                                }
                                l = l.sibling
                            }
                            s || a("189")
                        }
                    }
                    n.alternate !== r && a("190")
                }
                return 3 !== n.tag && a("188"), n.stateNode.current === n ? e : t
            }(e))) return null;
        for (var t = e;;) {
            if (5 === t.tag || 6 === t.tag) return t;
            if (t.child) t.child.return = t, t = t.child;
            else {
                if (t === e) break;
                for (; !t.sibling;) {
                    if (!t.return || t.return === e) return null;
                    t = t.return
                }
                t.sibling.return = t.return, t = t.sibling
            }
        }
        return null
    }
    var on = le.extend({
            animationName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        an = le.extend({
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData
            }
        }),
        sn = Ht.extend({
            relatedTarget: null
        });

    function ln(e) {
        var t = e.keyCode;
        return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
    }
    var cn = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        },
        un = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        },
        fn = Ht.extend({
            key: function(e) {
                if (e.key) {
                    var t = cn[e.key] || e.key;
                    if ("Unidentified" !== t) return t
                }
                return "keypress" === e.type ? 13 === (e = ln(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? un[e.keyCode] || "Unidentified" : ""
            },
            location: null,
            ctrlKey: null,
            shiftKey: null,
            altKey: null,
            metaKey: null,
            repeat: null,
            locale: null,
            getModifierState: Wt,
            charCode: function(e) {
                return "keypress" === e.type ? ln(e) : 0
            },
            keyCode: function(e) {
                return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            },
            which: function(e) {
                return "keypress" === e.type ? ln(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
            }
        }),
        pn = Xt.extend({
            dataTransfer: null
        }),
        dn = Ht.extend({
            touches: null,
            targetTouches: null,
            changedTouches: null,
            altKey: null,
            metaKey: null,
            ctrlKey: null,
            shiftKey: null,
            getModifierState: Wt
        }),
        hn = le.extend({
            propertyName: null,
            elapsedTime: null,
            pseudoElement: null
        }),
        mn = Xt.extend({
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
            },
            deltaZ: null,
            deltaMode: null
        }),
        gn = [
            ["abort", "abort"],
            [Q, "animationEnd"],
            [J, "animationIteration"],
            [Z, "animationStart"],
            ["canplay", "canPlay"],
            ["canplaythrough", "canPlayThrough"],
            ["drag", "drag"],
            ["dragenter", "dragEnter"],
            ["dragexit", "dragExit"],
            ["dragleave", "dragLeave"],
            ["dragover", "dragOver"],
            ["durationchange", "durationChange"],
            ["emptied", "emptied"],
            ["encrypted", "encrypted"],
            ["ended", "ended"],
            ["error", "error"],
            ["gotpointercapture", "gotPointerCapture"],
            ["load", "load"],
            ["loadeddata", "loadedData"],
            ["loadedmetadata", "loadedMetadata"],
            ["loadstart", "loadStart"],
            ["lostpointercapture", "lostPointerCapture"],
            ["mousemove", "mouseMove"],
            ["mouseout", "mouseOut"],
            ["mouseover", "mouseOver"],
            ["playing", "playing"],
            ["pointermove", "pointerMove"],
            ["pointerout", "pointerOut"],
            ["pointerover", "pointerOver"],
            ["progress", "progress"],
            ["scroll", "scroll"],
            ["seeking", "seeking"],
            ["stalled", "stalled"],
            ["suspend", "suspend"],
            ["timeupdate", "timeUpdate"],
            ["toggle", "toggle"],
            ["touchmove", "touchMove"],
            [ee, "transitionEnd"],
            ["waiting", "waiting"],
            ["wheel", "wheel"]
        ],
        bn = {},
        yn = {};

    function vn(e, t) {
        var n = e[0],
            r = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
        t = {
            phasedRegistrationNames: {
                bubbled: r,
                captured: r + "Capture"
            },
            dependencies: [n],
            isInteractive: t
        }, bn[e] = t, yn[n] = t
    }[
        ["blur", "blur"],
        ["cancel", "cancel"],
        ["click", "click"],
        ["close", "close"],
        ["contextmenu", "contextMenu"],
        ["copy", "copy"],
        ["cut", "cut"],
        ["auxclick", "auxClick"],
        ["dblclick", "doubleClick"],
        ["dragend", "dragEnd"],
        ["dragstart", "dragStart"],
        ["drop", "drop"],
        ["focus", "focus"],
        ["input", "input"],
        ["invalid", "invalid"],
        ["keydown", "keyDown"],
        ["keypress", "keyPress"],
        ["keyup", "keyUp"],
        ["mousedown", "mouseDown"],
        ["mouseup", "mouseUp"],
        ["paste", "paste"],
        ["pause", "pause"],
        ["play", "play"],
        ["pointercancel", "pointerCancel"],
        ["pointerdown", "pointerDown"],
        ["pointerup", "pointerUp"],
        ["ratechange", "rateChange"],
        ["reset", "reset"],
        ["seeked", "seeked"],
        ["submit", "submit"],
        ["touchcancel", "touchCancel"],
        ["touchend", "touchEnd"],
        ["touchstart", "touchStart"],
        ["volumechange", "volumeChange"]
    ].forEach(function(e) {
        vn(e, !0)
    }), gn.forEach(function(e) {
        vn(e, !1)
    });
    var _n = {
            eventTypes: bn,
            isInteractiveTopLevelEventType: function(e) {
                return void 0 !== (e = yn[e]) && !0 === e.isInteractive
            },
            extractEvents: function(e, t, n, r) {
                var i = yn[e];
                if (!i) return null;
                switch (e) {
                    case "keypress":
                        if (0 === ln(n)) return null;
                    case "keydown":
                    case "keyup":
                        e = fn;
                        break;
                    case "blur":
                    case "focus":
                        e = sn;
                        break;
                    case "click":
                        if (2 === n.button) return null;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        e = Xt;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        e = pn;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        e = dn;
                        break;
                    case Q:
                    case J:
                    case Z:
                        e = on;
                        break;
                    case ee:
                        e = hn;
                        break;
                    case "scroll":
                        e = Ht;
                        break;
                    case "wheel":
                        e = mn;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        e = an;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        e = Kt;
                        break;
                    default:
                        e = le
                }
                return Y(t = e.getPooled(i, t, n, r)), t
            }
        },
        wn = _n.isInteractiveTopLevelEventType,
        xn = [];

    function Cn(e) {
        var t = e.targetInst,
            n = t;
        do {
            if (!n) {
                e.ancestors.push(n);
                break
            }
            var r;
            for (r = n; r.return;) r = r.return;
            if (!(r = 3 !== r.tag ? null : r.stateNode.containerInfo)) break;
            e.ancestors.push(n), n = L(r)
        } while (n);
        for (n = 0; n < e.ancestors.length; n++) {
            t = e.ancestors[n];
            var i = ze(e.nativeEvent);
            r = e.topLevelType;
            for (var o = e.nativeEvent, a = null, s = 0; s < b.length; s++) {
                var l = b[s];
                l && (l = l.extractEvents(r, t, o, i)) && (a = E(a, l))
            }
            j(a)
        }
    }
    var kn = !0;

    function En(e, t) {
        if (!t) return null;
        var n = (wn(e) ? On : Sn).bind(null, e);
        t.addEventListener(e, n, !1)
    }

    function Tn(e, t) {
        if (!t) return null;
        var n = (wn(e) ? On : Sn).bind(null, e);
        t.addEventListener(e, n, !0)
    }

    function On(e, t) {
        De(Sn, e, t)
    }

    function Sn(e, t) {
        if (kn) {
            var n = ze(t);
            if (null === (n = L(n)) || "number" != typeof n.tag || 2 === tn(n) || (n = null), xn.length) {
                var r = xn.pop();
                r.topLevelType = e, r.nativeEvent = t, r.targetInst = n, e = r
            } else e = {
                topLevelType: e,
                nativeEvent: t,
                targetInst: n,
                ancestors: []
            };
            try {
                Ie(Cn, e)
            } finally {
                e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > xn.length && xn.push(e)
            }
        }
    }
    var An = {},
        Rn = 0,
        jn = "_reactListenersID" + ("" + Math.random()).slice(2);

    function Pn(e) {
        return Object.prototype.hasOwnProperty.call(e, jn) || (e[jn] = Rn++, An[e[jn]] = {}), An[e[jn]]
    }

    function Dn(e) {
        if (void 0 === (e = e || ("undefined" != typeof document ? document : void 0))) return null;
        try {
            return e.activeElement || e.body
        } catch (t) {
            return e.body
        }
    }

    function Mn(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e
    }

    function Ln(e, t) {
        var n, r = Mn(e);
        for (e = 0; r;) {
            if (3 === r.nodeType) {
                if (n = e + r.textContent.length, e <= t && n >= t) return {
                    node: r,
                    offset: t - e
                };
                e = n
            }
            e: {
                for (; r;) {
                    if (r.nextSibling) {
                        r = r.nextSibling;
                        break e
                    }
                    r = r.parentNode
                }
                r = void 0
            }
            r = Mn(r)
        }
    }

    function In() {
        for (var e = window, t = Dn(); t instanceof e.HTMLIFrameElement;) {
            try {
                e = t.contentDocument.defaultView
            } catch (e) {
                break
            }
            t = Dn(e.document)
        }
        return t
    }

    function Un(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
    }

    function Bn(e) {
        var t = In(),
            n = e.focusedElem,
            r = e.selectionRange;
        if (t !== n && n && n.ownerDocument && function e(t, n) {
                return !(!t || !n) && (t === n || (!t || 3 !== t.nodeType) && (n && 3 === n.nodeType ? e(t, n.parentNode) : "contains" in t ? t.contains(n) : !!t.compareDocumentPosition && !!(16 & t.compareDocumentPosition(n))))
            }(n.ownerDocument.documentElement, n)) {
            if (null !== r && Un(n))
                if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                e = e.getSelection();
                var i = n.textContent.length,
                    o = Math.min(r.start, i);
                r = void 0 === r.end ? o : Math.min(r.end, i), !e.extend && o > r && (i = r, r = o, o = i), i = Ln(n, o);
                var a = Ln(n, r);
                i && a && (1 !== e.rangeCount || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(i.node, i.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
            }
            for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
            for ("function" == typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
        }
    }
    var zn = q && "documentMode" in document && 11 >= document.documentMode,
        Hn = {
            select: {
                phasedRegistrationNames: {
                    bubbled: "onSelect",
                    captured: "onSelectCapture"
                },
                dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
            }
        },
        Nn = null,
        Fn = null,
        Wn = null,
        Yn = !1;

    function qn(e, t) {
        var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
        return Yn || null == Nn || Nn !== Dn(n) ? null : ("selectionStart" in (n = Nn) && Un(n) ? n = {
            start: n.selectionStart,
            end: n.selectionEnd
        } : n = {
            anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
            anchorOffset: n.anchorOffset,
            focusNode: n.focusNode,
            focusOffset: n.focusOffset
        }, Wn && en(Wn, n) ? null : (Wn = n, (e = le.getPooled(Hn.select, Fn, e, t)).type = "select", e.target = Nn, Y(e), e))
    }
    var $n = {
        eventTypes: Hn,
        extractEvents: function(e, t, n, r) {
            var i, o = r.window === r ? r.document : 9 === r.nodeType ? r : r.ownerDocument;
            if (!(i = !o)) {
                e: {
                    o = Pn(o),
                    i = _.onSelect;
                    for (var a = 0; a < i.length; a++) {
                        var s = i[a];
                        if (!o.hasOwnProperty(s) || !o[s]) {
                            o = !1;
                            break e
                        }
                    }
                    o = !0
                }
                i = !o
            }
            if (i) return null;
            switch (o = t ? U(t) : window, e) {
                case "focus":
                    (Be(o) || "true" === o.contentEditable) && (Nn = o, Fn = t, Wn = null);
                    break;
                case "blur":
                    Wn = Fn = Nn = null;
                    break;
                case "mousedown":
                    Yn = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    return Yn = !1, qn(n, r);
                case "selectionchange":
                    if (zn) break;
                case "keydown":
                case "keyup":
                    return qn(n, r)
            }
            return null
        }
    };

    function Vn(e, t) {
        return e = i({
            children: void 0
        }, t), (t = function(e) {
            var t = "";
            return r.Children.forEach(e, function(e) {
                null != e && (t += e)
            }), t
        }(t.children)) && (e.children = t), e
    }

    function Xn(e, t, n, r) {
        if (e = e.options, t) {
            t = {};
            for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
            for (n = 0; n < e.length; n++) i = t.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0)
        } else {
            for (n = "" + yt(n), t = null, i = 0; i < e.length; i++) {
                if (e[i].value === n) return e[i].selected = !0, void(r && (e[i].defaultSelected = !0));
                null !== t || e[i].disabled || (t = e[i])
            }
            null !== t && (t.selected = !0)
        }
    }

    function Kn(e, t) {
        return null != t.dangerouslySetInnerHTML && a("91"), i({}, t, {
            value: void 0,
            defaultValue: void 0,
            children: "" + e._wrapperState.initialValue
        })
    }

    function Gn(e, t) {
        var n = t.value;
        null == n && (n = t.defaultValue, null != (t = t.children) && (null != n && a("92"), Array.isArray(t) && (1 >= t.length || a("93"), t = t[0]), n = t), null == n && (n = "")), e._wrapperState = {
            initialValue: yt(n)
        }
    }

    function Qn(e, t) {
        var n = yt(t.value),
            r = yt(t.defaultValue);
        null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
    }

    function Jn(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue && (e.value = t)
    }
    A.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), w = B, x = I, C = U, A.injectEventPluginsByName({
        SimpleEventPlugin: _n,
        EnterLeaveEventPlugin: Qt,
        ChangeEventPlugin: zt,
        SelectEventPlugin: $n,
        BeforeInputEventPlugin: Ee
    });
    var Zn = {
        html: "http://www.w3.org/1999/xhtml",
        mathml: "http://www.w3.org/1998/Math/MathML",
        svg: "http://www.w3.org/2000/svg"
    };

    function er(e) {
        switch (e) {
            case "svg":
                return "http://www.w3.org/2000/svg";
            case "math":
                return "http://www.w3.org/1998/Math/MathML";
            default:
                return "http://www.w3.org/1999/xhtml"
        }
    }

    function tr(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e ? er(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
    }
    var nr, rr = void 0,
        ir = (nr = function(e, t) {
            if (e.namespaceURI !== Zn.svg || "innerHTML" in e) e.innerHTML = t;
            else {
                for ((rr = rr || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = rr.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                for (; t.firstChild;) e.appendChild(t.firstChild)
            }
        }, "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
            MSApp.execUnsafeLocalFunction(function() {
                return nr(e, t)
            })
        } : nr);

    function or(e, t) {
        if (t) {
            var n = e.firstChild;
            if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
        }
        e.textContent = t
    }
    var ar = {
            animationIterationCount: !0,
            borderImageOutset: !0,
            borderImageSlice: !0,
            borderImageWidth: !0,
            boxFlex: !0,
            boxFlexGroup: !0,
            boxOrdinalGroup: !0,
            columnCount: !0,
            columns: !0,
            flex: !0,
            flexGrow: !0,
            flexPositive: !0,
            flexShrink: !0,
            flexNegative: !0,
            flexOrder: !0,
            gridArea: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowSpan: !0,
            gridRowStart: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnSpan: !0,
            gridColumnStart: !0,
            fontWeight: !0,
            lineClamp: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            tabSize: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeDasharray: !0,
            strokeDashoffset: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0,
            strokeWidth: !0
        },
        sr = ["Webkit", "ms", "Moz", "O"];

    function lr(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t ? "" : n || "number" != typeof t || 0 === t || ar.hasOwnProperty(e) && ar[e] ? ("" + t).trim() : t + "px"
    }

    function cr(e, t) {
        for (var n in e = e.style, t)
            if (t.hasOwnProperty(n)) {
                var r = 0 === n.indexOf("--"),
                    i = lr(n, t[n], r);
                "float" === n && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i
            }
    }
    Object.keys(ar).forEach(function(e) {
        sr.forEach(function(t) {
            t = t + e.charAt(0).toUpperCase() + e.substring(1), ar[t] = ar[e]
        })
    });
    var ur = i({
        menuitem: !0
    }, {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    });

    function fr(e, t) {
        t && (ur[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && a("137", e, ""), null != t.dangerouslySetInnerHTML && (null != t.children && a("60"), "object" == typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML || a("61")), null != t.style && "object" != typeof t.style && a("62", ""))
    }

    function pr(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
        }
    }

    function dr(e, t) {
        var n = Pn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
        t = _[t];
        for (var r = 0; r < t.length; r++) {
            var i = t[r];
            if (!n.hasOwnProperty(i) || !n[i]) {
                switch (i) {
                    case "scroll":
                        Tn("scroll", e);
                        break;
                    case "focus":
                    case "blur":
                        Tn("focus", e), Tn("blur", e), n.blur = !0, n.focus = !0;
                        break;
                    case "cancel":
                    case "close":
                        He(i) && Tn(i, e);
                        break;
                    case "invalid":
                    case "submit":
                    case "reset":
                        break;
                    default:
                        -1 === te.indexOf(i) && En(i, e)
                }
                n[i] = !0
            }
        }
    }

    function hr() {}
    var mr = null,
        gr = null;

    function br(e, t) {
        switch (e) {
            case "button":
            case "input":
            case "select":
            case "textarea":
                return !!t.autoFocus
        }
        return !1
    }

    function yr(e, t) {
        return "textarea" === e || "option" === e || "noscript" === e || "string" == typeof t.children || "number" == typeof t.children || "object" == typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
    }
    var vr = "function" == typeof setTimeout ? setTimeout : void 0,
        _r = "function" == typeof clearTimeout ? clearTimeout : void 0,
        wr = o.unstable_scheduleCallback,
        xr = o.unstable_cancelCallback;

    function Cr(e) {
        for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
        return e
    }

    function kr(e) {
        for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
        return e
    }
    new Set;
    var Er = [],
        Tr = -1;

    function Or(e) {
        0 > Tr || (e.current = Er[Tr], Er[Tr] = null, Tr--)
    }

    function Sr(e, t) {
        Er[++Tr] = e.current, e.current = t
    }
    var Ar = {},
        Rr = {
            current: Ar
        },
        jr = {
            current: !1
        },
        Pr = Ar;

    function Dr(e, t) {
        var n = e.type.contextTypes;
        if (!n) return Ar;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
        var i, o = {};
        for (i in n) o[i] = t[i];
        return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
    }

    function Mr(e) {
        return null != (e = e.childContextTypes)
    }

    function Lr(e) {
        Or(jr), Or(Rr)
    }

    function Ir(e) {
        Or(jr), Or(Rr)
    }

    function Ur(e, t, n) {
        Rr.current !== Ar && a("168"), Sr(Rr, t), Sr(jr, n)
    }

    function Br(e, t, n) {
        var r = e.stateNode;
        if (e = t.childContextTypes, "function" != typeof r.getChildContext) return n;
        for (var o in r = r.getChildContext()) o in e || a("108", st(t) || "Unknown", o);
        return i({}, n, r)
    }

    function zr(e) {
        var t = e.stateNode;
        return t = t && t.__reactInternalMemoizedMergedChildContext || Ar, Pr = Rr.current, Sr(Rr, t), Sr(jr, jr.current), !0
    }

    function Hr(e, t, n) {
        var r = e.stateNode;
        r || a("169"), n ? (t = Br(e, t, Pr), r.__reactInternalMemoizedMergedChildContext = t, Or(jr), Or(Rr), Sr(Rr, t)) : Or(jr), Sr(jr, n)
    }
    var Nr = null,
        Fr = null;

    function Wr(e) {
        return function(t) {
            try {
                return e(t)
            } catch (e) {}
        }
    }

    function Yr(e, t, n, r) {
        this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
    }

    function qr(e, t, n, r) {
        return new Yr(e, t, n, r)
    }

    function $r(e) {
        return !(!(e = e.prototype) || !e.isReactComponent)
    }

    function Vr(e, t) {
        var n = e.alternate;
        return null === n ? ((n = qr(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.contextDependencies = e.contextDependencies, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
    }

    function Xr(e, t, n, r, i, o) {
        var s = 2;
        if (r = e, "function" == typeof e) $r(e) && (s = 1);
        else if ("string" == typeof e) s = 5;
        else e: switch (e) {
            case Ke:
                return Kr(n.children, i, o, t);
            case et:
                return Gr(n, 3 | i, o, t);
            case Ge:
                return Gr(n, 2 | i, o, t);
            case Qe:
                return (e = qr(12, n, t, 4 | i)).elementType = Qe, e.type = Qe, e.expirationTime = o, e;
            case nt:
                return (e = qr(13, n, t, i)).elementType = nt, e.type = nt, e.expirationTime = o, e;
            default:
                if ("object" == typeof e && null !== e) switch (e.$$typeof) {
                    case Je:
                        s = 10;
                        break e;
                    case Ze:
                        s = 9;
                        break e;
                    case tt:
                        s = 11;
                        break e;
                    case rt:
                        s = 14;
                        break e;
                    case it:
                        s = 16, r = null;
                        break e
                }
                a("130", null == e ? e : typeof e, "")
        }
        return (t = qr(s, n, t, i)).elementType = e, t.type = r, t.expirationTime = o, t
    }

    function Kr(e, t, n, r) {
        return (e = qr(7, e, r, t)).expirationTime = n, e
    }

    function Gr(e, t, n, r) {
        return e = qr(8, e, r, t), t = 0 == (1 & t) ? Ge : et, e.elementType = t, e.type = t, e.expirationTime = n, e
    }

    function Qr(e, t, n) {
        return (e = qr(6, e, null, t)).expirationTime = n, e
    }

    function Jr(e, t, n) {
        return (t = qr(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation
        }, t
    }

    function Zr(e, t) {
        e.didError = !1;
        var n = e.earliestPendingTime;
        0 === n ? e.earliestPendingTime = e.latestPendingTime = t : n < t ? e.earliestPendingTime = t : e.latestPendingTime > t && (e.latestPendingTime = t), ni(t, e)
    }

    function ei(e, t) {
        e.didError = !1, e.latestPingedTime >= t && (e.latestPingedTime = 0);
        var n = e.earliestPendingTime,
            r = e.latestPendingTime;
        n === t ? e.earliestPendingTime = r === t ? e.latestPendingTime = 0 : r : r === t && (e.latestPendingTime = n), n = e.earliestSuspendedTime, r = e.latestSuspendedTime, 0 === n ? e.earliestSuspendedTime = e.latestSuspendedTime = t : n < t ? e.earliestSuspendedTime = t : r > t && (e.latestSuspendedTime = t), ni(t, e)
    }

    function ti(e, t) {
        var n = e.earliestPendingTime;
        return n > t && (t = n), (e = e.earliestSuspendedTime) > t && (t = e), t
    }

    function ni(e, t) {
        var n = t.earliestSuspendedTime,
            r = t.latestSuspendedTime,
            i = t.earliestPendingTime,
            o = t.latestPingedTime;
        0 === (i = 0 !== i ? i : o) && (0 === e || r < e) && (i = r), 0 !== (e = i) && n > e && (e = n), t.nextExpirationTimeToWorkOn = i, t.expirationTime = e
    }

    function ri(e, t) {
        if (e && e.defaultProps)
            for (var n in t = i({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
        return t
    }
    var ii = (new r.Component).refs;

    function oi(e, t, n, r) {
        n = null == (n = n(r, t = e.memoizedState)) ? t : i({}, t, n), e.memoizedState = n, null !== (r = e.updateQueue) && 0 === e.expirationTime && (r.baseState = n)
    }
    var ai = {
        isMounted: function(e) {
            return !!(e = e._reactInternalFiber) && 2 === tn(e)
        },
        enqueueSetState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = xs(),
                i = Go(r = Ka(r, e));
            i.payload = t, null != n && (i.callback = n), Wa(), Jo(e, i), Ja(e, r)
        },
        enqueueReplaceState: function(e, t, n) {
            e = e._reactInternalFiber;
            var r = xs(),
                i = Go(r = Ka(r, e));
            i.tag = Yo, i.payload = t, null != n && (i.callback = n), Wa(), Jo(e, i), Ja(e, r)
        },
        enqueueForceUpdate: function(e, t) {
            e = e._reactInternalFiber;
            var n = xs(),
                r = Go(n = Ka(n, e));
            r.tag = qo, null != t && (r.callback = t), Wa(), Jo(e, r), Ja(e, n)
        }
    };

    function si(e, t, n, r, i, o, a) {
        return "function" == typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, o, a) : !t.prototype || !t.prototype.isPureReactComponent || (!en(n, r) || !en(i, o))
    }

    function li(e, t, n) {
        var r = !1,
            i = Ar,
            o = t.contextType;
        return "object" == typeof o && null !== o ? o = Fo(o) : (i = Mr(t) ? Pr : Rr.current, o = (r = null != (r = t.contextTypes)) ? Dr(e, i) : Ar), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ai, e.stateNode = t, t._reactInternalFiber = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = o), t
    }

    function ci(e, t, n, r) {
        e = t.state, "function" == typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" == typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ai.enqueueReplaceState(t, t.state, null)
    }

    function ui(e, t, n, r) {
        var i = e.stateNode;
        i.props = n, i.state = e.memoizedState, i.refs = ii;
        var o = t.contextType;
        "object" == typeof o && null !== o ? i.context = Fo(o) : (o = Mr(t) ? Pr : Rr.current, i.context = Dr(e, o)), null !== (o = e.updateQueue) && (na(e, o, n, i, r), i.state = e.memoizedState), "function" == typeof(o = t.getDerivedStateFromProps) && (oi(e, t, o, n), i.state = e.memoizedState), "function" == typeof t.getDerivedStateFromProps || "function" == typeof i.getSnapshotBeforeUpdate || "function" != typeof i.UNSAFE_componentWillMount && "function" != typeof i.componentWillMount || (t = i.state, "function" == typeof i.componentWillMount && i.componentWillMount(), "function" == typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount(), t !== i.state && ai.enqueueReplaceState(i, i.state, null), null !== (o = e.updateQueue) && (na(e, o, n, i, r), i.state = e.memoizedState)), "function" == typeof i.componentDidMount && (e.effectTag |= 4)
    }
    var fi = Array.isArray;

    function pi(e, t, n) {
        if (null !== (e = n.ref) && "function" != typeof e && "object" != typeof e) {
            if (n._owner) {
                n = n._owner;
                var r = void 0;
                n && (1 !== n.tag && a("309"), r = n.stateNode), r || a("147", e);
                var i = "" + e;
                return null !== t && null !== t.ref && "function" == typeof t.ref && t.ref._stringRef === i ? t.ref : ((t = function(e) {
                    var t = r.refs;
                    t === ii && (t = r.refs = {}), null === e ? delete t[i] : t[i] = e
                })._stringRef = i, t)
            }
            "string" != typeof e && a("284"), n._owner || a("290", e)
        }
        return e
    }

    function di(e, t) {
        "textarea" !== e.type && a("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
    }

    function hi(e) {
        function t(t, n) {
            if (e) {
                var r = t.lastEffect;
                null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
            }
        }

        function n(n, r) {
            if (!e) return null;
            for (; null !== r;) t(n, r), r = r.sibling;
            return null
        }

        function r(e, t) {
            for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
            return e
        }

        function i(e, t, n) {
            return (e = Vr(e, t)).index = 0, e.sibling = null, e
        }

        function o(t, n, r) {
            return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.effectTag = 2, n) : r : (t.effectTag = 2, n) : n
        }

        function s(t) {
            return e && null === t.alternate && (t.effectTag = 2), t
        }

        function l(e, t, n, r) {
            return null === t || 6 !== t.tag ? ((t = Qr(n, e.mode, r)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function c(e, t, n, r) {
            return null !== t && t.elementType === n.type ? ((r = i(t, n.props)).ref = pi(e, t, n), r.return = e, r) : ((r = Xr(n.type, n.key, n.props, null, e.mode, r)).ref = pi(e, t, n), r.return = e, r)
        }

        function u(e, t, n, r) {
            return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Jr(n, e.mode, r)).return = e, t) : ((t = i(t, n.children || [])).return = e, t)
        }

        function f(e, t, n, r, o) {
            return null === t || 7 !== t.tag ? ((t = Kr(n, e.mode, r, o)).return = e, t) : ((t = i(t, n)).return = e, t)
        }

        function p(e, t, n) {
            if ("string" == typeof t || "number" == typeof t) return (t = Qr("" + t, e.mode, n)).return = e, t;
            if ("object" == typeof t && null !== t) {
                switch (t.$$typeof) {
                    case Ve:
                        return (n = Xr(t.type, t.key, t.props, null, e.mode, n)).ref = pi(e, null, t), n.return = e, n;
                    case Xe:
                        return (t = Jr(t, e.mode, n)).return = e, t
                }
                if (fi(t) || at(t)) return (t = Kr(t, e.mode, n, null)).return = e, t;
                di(e, t)
            }
            return null
        }

        function d(e, t, n, r) {
            var i = null !== t ? t.key : null;
            if ("string" == typeof n || "number" == typeof n) return null !== i ? null : l(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
                switch (n.$$typeof) {
                    case Ve:
                        return n.key === i ? n.type === Ke ? f(e, t, n.props.children, r, i) : c(e, t, n, r) : null;
                    case Xe:
                        return n.key === i ? u(e, t, n, r) : null
                }
                if (fi(n) || at(n)) return null !== i ? null : f(e, t, n, r, null);
                di(e, n)
            }
            return null
        }

        function h(e, t, n, r, i) {
            if ("string" == typeof r || "number" == typeof r) return l(t, e = e.get(n) || null, "" + r, i);
            if ("object" == typeof r && null !== r) {
                switch (r.$$typeof) {
                    case Ve:
                        return e = e.get(null === r.key ? n : r.key) || null, r.type === Ke ? f(t, e, r.props.children, i, r.key) : c(t, e, r, i);
                    case Xe:
                        return u(t, e = e.get(null === r.key ? n : r.key) || null, r, i)
                }
                if (fi(r) || at(r)) return f(t, e = e.get(n) || null, r, i, null);
                di(t, r)
            }
            return null
        }

        function m(i, a, s, l) {
            for (var c = null, u = null, f = a, m = a = 0, g = null; null !== f && m < s.length; m++) {
                f.index > m ? (g = f, f = null) : g = f.sibling;
                var b = d(i, f, s[m], l);
                if (null === b) {
                    null === f && (f = g);
                    break
                }
                e && f && null === b.alternate && t(i, f), a = o(b, a, m), null === u ? c = b : u.sibling = b, u = b, f = g
            }
            if (m === s.length) return n(i, f), c;
            if (null === f) {
                for (; m < s.length; m++)(f = p(i, s[m], l)) && (a = o(f, a, m), null === u ? c = f : u.sibling = f, u = f);
                return c
            }
            for (f = r(i, f); m < s.length; m++)(g = h(f, i, m, s[m], l)) && (e && null !== g.alternate && f.delete(null === g.key ? m : g.key), a = o(g, a, m), null === u ? c = g : u.sibling = g, u = g);
            return e && f.forEach(function(e) {
                return t(i, e)
            }), c
        }

        function g(i, s, l, c) {
            var u = at(l);
            "function" != typeof u && a("150"), null == (l = u.call(l)) && a("151");
            for (var f = u = null, m = s, g = s = 0, b = null, y = l.next(); null !== m && !y.done; g++, y = l.next()) {
                m.index > g ? (b = m, m = null) : b = m.sibling;
                var v = d(i, m, y.value, c);
                if (null === v) {
                    m || (m = b);
                    break
                }
                e && m && null === v.alternate && t(i, m), s = o(v, s, g), null === f ? u = v : f.sibling = v, f = v, m = b
            }
            if (y.done) return n(i, m), u;
            if (null === m) {
                for (; !y.done; g++, y = l.next()) null !== (y = p(i, y.value, c)) && (s = o(y, s, g), null === f ? u = y : f.sibling = y, f = y);
                return u
            }
            for (m = r(i, m); !y.done; g++, y = l.next()) null !== (y = h(m, i, g, y.value, c)) && (e && null !== y.alternate && m.delete(null === y.key ? g : y.key), s = o(y, s, g), null === f ? u = y : f.sibling = y, f = y);
            return e && m.forEach(function(e) {
                return t(i, e)
            }), u
        }
        return function(e, r, o, l) {
            var c = "object" == typeof o && null !== o && o.type === Ke && null === o.key;
            c && (o = o.props.children);
            var u = "object" == typeof o && null !== o;
            if (u) switch (o.$$typeof) {
                case Ve:
                    e: {
                        for (u = o.key, c = r; null !== c;) {
                            if (c.key === u) {
                                if (7 === c.tag ? o.type === Ke : c.elementType === o.type) {
                                    n(e, c.sibling), (r = i(c, o.type === Ke ? o.props.children : o.props)).ref = pi(e, c, o), r.return = e, e = r;
                                    break e
                                }
                                n(e, c);
                                break
                            }
                            t(e, c), c = c.sibling
                        }
                        o.type === Ke ? ((r = Kr(o.props.children, e.mode, l, o.key)).return = e, e = r) : ((l = Xr(o.type, o.key, o.props, null, e.mode, l)).ref = pi(e, r, o), l.return = e, e = l)
                    }
                    return s(e);
                case Xe:
                    e: {
                        for (c = o.key; null !== r;) {
                            if (r.key === c) {
                                if (4 === r.tag && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                                    n(e, r.sibling), (r = i(r, o.children || [])).return = e, e = r;
                                    break e
                                }
                                n(e, r);
                                break
                            }
                            t(e, r), r = r.sibling
                        }(r = Jr(o, e.mode, l)).return = e,
                        e = r
                    }
                    return s(e)
            }
            if ("string" == typeof o || "number" == typeof o) return o = "" + o, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = i(r, o)).return = e, e = r) : (n(e, r), (r = Qr(o, e.mode, l)).return = e, e = r), s(e);
            if (fi(o)) return m(e, r, o, l);
            if (at(o)) return g(e, r, o, l);
            if (u && di(e, o), void 0 === o && !c) switch (e.tag) {
                case 1:
                case 0:
                    a("152", (l = e.type).displayName || l.name || "Component")
            }
            return n(e, r)
        }
    }
    var mi = hi(!0),
        gi = hi(!1),
        bi = {},
        yi = {
            current: bi
        },
        vi = {
            current: bi
        },
        _i = {
            current: bi
        };

    function wi(e) {
        return e === bi && a("174"), e
    }

    function xi(e, t) {
        Sr(_i, t), Sr(vi, e), Sr(yi, bi);
        var n = t.nodeType;
        switch (n) {
            case 9:
            case 11:
                t = (t = t.documentElement) ? t.namespaceURI : tr(null, "");
                break;
            default:
                t = tr(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
        }
        Or(yi), Sr(yi, t)
    }

    function Ci(e) {
        Or(yi), Or(vi), Or(_i)
    }

    function ki(e) {
        wi(_i.current);
        var t = wi(yi.current),
            n = tr(t, e.type);
        t !== n && (Sr(vi, e), Sr(yi, n))
    }

    function Ei(e) {
        vi.current === e && (Or(yi), Or(vi))
    }
    var Ti = 0,
        Oi = 2,
        Si = 4,
        Ai = 8,
        Ri = 16,
        ji = 32,
        Pi = 64,
        Di = 128,
        Mi = Ye.ReactCurrentDispatcher,
        Li = 0,
        Ii = null,
        Ui = null,
        Bi = null,
        zi = null,
        Hi = null,
        Ni = null,
        Fi = 0,
        Wi = null,
        Yi = 0,
        qi = !1,
        $i = null,
        Vi = 0;

    function Xi() {
        a("307")
    }

    function Ki(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
            if (!Jt(e[n], t[n])) return !1;
        return !0
    }

    function Gi(e, t, n, r, i, o) {
        if (Li = o, Ii = t, Bi = null !== e ? e.memoizedState : null, Mi.current = null === Bi ? co : uo, t = n(r, i), qi) {
            do {
                qi = !1, Vi += 1, Bi = null !== e ? e.memoizedState : null, Ni = zi, Wi = Hi = Ui = null, Mi.current = uo, t = n(r, i)
            } while (qi);
            $i = null, Vi = 0
        }
        return Mi.current = lo, (e = Ii).memoizedState = zi, e.expirationTime = Fi, e.updateQueue = Wi, e.effectTag |= Yi, e = null !== Ui && null !== Ui.next, Li = 0, Ni = Hi = zi = Bi = Ui = Ii = null, Fi = 0, Wi = null, Yi = 0, e && a("300"), t
    }

    function Qi() {
        Mi.current = lo, Li = 0, Ni = Hi = zi = Bi = Ui = Ii = null, Fi = 0, Wi = null, Yi = 0, qi = !1, $i = null, Vi = 0
    }

    function Ji() {
        var e = {
            memoizedState: null,
            baseState: null,
            queue: null,
            baseUpdate: null,
            next: null
        };
        return null === Hi ? zi = Hi = e : Hi = Hi.next = e, Hi
    }

    function Zi() {
        if (null !== Ni) Ni = (Hi = Ni).next, Bi = null !== (Ui = Bi) ? Ui.next : null;
        else {
            null === Bi && a("310");
            var e = {
                memoizedState: (Ui = Bi).memoizedState,
                baseState: Ui.baseState,
                queue: Ui.queue,
                baseUpdate: Ui.baseUpdate,
                next: null
            };
            Hi = null === Hi ? zi = e : Hi.next = e, Bi = Ui.next
        }
        return Hi
    }

    function eo(e, t) {
        return "function" == typeof t ? t(e) : t
    }

    function to(e) {
        var t = Zi(),
            n = t.queue;
        if (null === n && a("311"), 0 < Vi) {
            var r = n.dispatch;
            if (null !== $i) {
                var i = $i.get(n);
                if (void 0 !== i) {
                    $i.delete(n);
                    var o = t.memoizedState;
                    do {
                        o = e(o, i.action), i = i.next
                    } while (null !== i);
                    return Jt(o, t.memoizedState) || (xo = !0), t.memoizedState = o, t.baseUpdate === n.last && (t.baseState = o), n.eagerReducer = e, n.eagerState = o, [o, r]
                }
            }
            return [t.memoizedState, r]
        }
        r = n.last;
        var s = t.baseUpdate;
        if (o = t.baseState, null !== s ? (null !== r && (r.next = null), r = s.next) : r = null !== r ? r.next : null, null !== r) {
            var l = i = null,
                c = r,
                u = !1;
            do {
                var f = c.expirationTime;
                f < Li ? (u || (u = !0, l = s, i = o), f > Fi && (Fi = f)) : o = c.eagerReducer === e ? c.eagerState : e(o, c.action), s = c, c = c.next
            } while (null !== c && c !== r);
            u || (l = s, i = o), Jt(o, t.memoizedState) || (xo = !0), t.memoizedState = o, t.baseUpdate = l, t.baseState = i, n.eagerReducer = e, n.eagerState = o
        }
        return [t.memoizedState, n.dispatch]
    }

    function no(e, t, n, r) {
        return e = {
            tag: e,
            create: t,
            destroy: n,
            deps: r,
            next: null
        }, null === Wi ? (Wi = {
            lastEffect: null
        }).lastEffect = e.next = e : null === (t = Wi.lastEffect) ? Wi.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, Wi.lastEffect = e), e
    }

    function ro(e, t, n, r) {
        var i = Ji();
        Yi |= e, i.memoizedState = no(t, n, void 0, void 0 === r ? null : r)
    }

    function io(e, t, n, r) {
        var i = Zi();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== Ui) {
            var a = Ui.memoizedState;
            if (o = a.destroy, null !== r && Ki(r, a.deps)) return void no(Ti, n, o, r)
        }
        Yi |= e, i.memoizedState = no(t, n, o, r)
    }

    function oo(e, t) {
        return "function" == typeof t ? (e = e(), t(e), function() {
            t(null)
        }) : null != t ? (e = e(), t.current = e, function() {
            t.current = null
        }) : void 0
    }

    function ao() {}

    function so(e, t, n) {
        25 > Vi || a("301");
        var r = e.alternate;
        if (e === Ii || null !== r && r === Ii)
            if (qi = !0, e = {
                    expirationTime: Li,
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                }, null === $i && ($i = new Map), void 0 === (n = $i.get(t))) $i.set(t, e);
            else {
                for (t = n; null !== t.next;) t = t.next;
                t.next = e
            }
        else {
            Wa();
            var i = xs(),
                o = {
                    expirationTime: i = Ka(i, e),
                    action: n,
                    eagerReducer: null,
                    eagerState: null,
                    next: null
                },
                s = t.last;
            if (null === s) o.next = o;
            else {
                var l = s.next;
                null !== l && (o.next = l), s.next = o
            }
            if (t.last = o, 0 === e.expirationTime && (null === r || 0 === r.expirationTime) && null !== (r = t.eagerReducer)) try {
                var c = t.eagerState,
                    u = r(c, n);
                if (o.eagerReducer = r, o.eagerState = u, Jt(u, c)) return
            } catch (e) {}
            Ja(e, i)
        }
    }
    var lo = {
            readContext: Fo,
            useCallback: Xi,
            useContext: Xi,
            useEffect: Xi,
            useImperativeHandle: Xi,
            useLayoutEffect: Xi,
            useMemo: Xi,
            useReducer: Xi,
            useRef: Xi,
            useState: Xi,
            useDebugValue: Xi
        },
        co = {
            readContext: Fo,
            useCallback: function(e, t) {
                return Ji().memoizedState = [e, void 0 === t ? null : t], e
            },
            useContext: Fo,
            useEffect: function(e, t) {
                return ro(516, Di | Pi, e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, ro(4, Si | ji, oo.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return ro(4, Si | ji, e, t)
            },
            useMemo: function(e, t) {
                var n = Ji();
                return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
            },
            useReducer: function(e, t, n) {
                var r = Ji();
                return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                    last: null,
                    dispatch: null,
                    eagerReducer: e,
                    eagerState: t
                }).dispatch = so.bind(null, Ii, e), [r.memoizedState, e]
            },
            useRef: function(e) {
                return e = {
                    current: e
                }, Ji().memoizedState = e
            },
            useState: function(e) {
                var t = Ji();
                return "function" == typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                    last: null,
                    dispatch: null,
                    eagerReducer: eo,
                    eagerState: e
                }).dispatch = so.bind(null, Ii, e), [t.memoizedState, e]
            },
            useDebugValue: ao
        },
        uo = {
            readContext: Fo,
            useCallback: function(e, t) {
                var n = Zi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Ki(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
            },
            useContext: Fo,
            useEffect: function(e, t) {
                return io(516, Di | Pi, e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return n = null != n ? n.concat([e]) : null, io(4, Si | ji, oo.bind(null, t, e), n)
            },
            useLayoutEffect: function(e, t) {
                return io(4, Si | ji, e, t)
            },
            useMemo: function(e, t) {
                var n = Zi();
                t = void 0 === t ? null : t;
                var r = n.memoizedState;
                return null !== r && null !== t && Ki(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
            },
            useReducer: to,
            useRef: function() {
                return Zi().memoizedState
            },
            useState: function(e) {
                return to(eo)
            },
            useDebugValue: ao
        },
        fo = null,
        po = null,
        ho = !1;

    function mo(e, t) {
        var n = qr(5, null, null, 0);
        n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
    }

    function go(e, t) {
        switch (e.tag) {
            case 5:
                var n = e.type;
                return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
            case 6:
                return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
            case 13:
            default:
                return !1
        }
    }

    function bo(e) {
        if (ho) {
            var t = po;
            if (t) {
                var n = t;
                if (!go(e, t)) {
                    if (!(t = Cr(n)) || !go(e, t)) return e.effectTag |= 2, ho = !1, void(fo = e);
                    mo(fo, n)
                }
                fo = e, po = kr(t)
            } else e.effectTag |= 2, ho = !1, fo = e
        }
    }

    function yo(e) {
        for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;) e = e.return;
        fo = e
    }

    function vo(e) {
        if (e !== fo) return !1;
        if (!ho) return yo(e), ho = !0, !1;
        var t = e.type;
        if (5 !== e.tag || "head" !== t && "body" !== t && !yr(t, e.memoizedProps))
            for (t = po; t;) mo(e, t), t = Cr(t);
        return yo(e), po = fo ? Cr(e.stateNode) : null, !0
    }

    function _o() {
        po = fo = null, ho = !1
    }
    var wo = Ye.ReactCurrentOwner,
        xo = !1;

    function Co(e, t, n, r) {
        t.child = null === e ? gi(t, null, n, r) : mi(t, e.child, n, r)
    }

    function ko(e, t, n, r, i) {
        n = n.render;
        var o = t.ref;
        return No(t, i), r = Gi(e, t, n, r, o, i), null === e || xo ? (t.effectTag |= 1, Co(e, t, r, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Do(e, t, i))
    }

    function Eo(e, t, n, r, i, o) {
        if (null === e) {
            var a = n.type;
            return "function" != typeof a || $r(a) || void 0 !== a.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Xr(n.type, null, r, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = a, To(e, t, a, r, i, o))
        }
        return a = e.child, i < o && (i = a.memoizedProps, (n = null !== (n = n.compare) ? n : en)(i, r) && e.ref === t.ref) ? Do(e, t, o) : (t.effectTag |= 1, (e = Vr(a, r)).ref = t.ref, e.return = t, t.child = e)
    }

    function To(e, t, n, r, i, o) {
        return null !== e && en(e.memoizedProps, r) && e.ref === t.ref && (xo = !1, i < o) ? Do(e, t, o) : So(e, t, n, r, o)
    }

    function Oo(e, t) {
        var n = t.ref;
        (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
    }

    function So(e, t, n, r, i) {
        var o = Mr(n) ? Pr : Rr.current;
        return o = Dr(t, o), No(t, i), n = Gi(e, t, n, r, o, i), null === e || xo ? (t.effectTag |= 1, Co(e, t, n, i), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= i && (e.expirationTime = 0), Do(e, t, i))
    }

    function Ao(e, t, n, r, i) {
        if (Mr(n)) {
            var o = !0;
            zr(t)
        } else o = !1;
        if (No(t, i), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), li(t, n, r), ui(t, n, r, i), r = !0;
        else if (null === e) {
            var a = t.stateNode,
                s = t.memoizedProps;
            a.props = s;
            var l = a.context,
                c = n.contextType;
            "object" == typeof c && null !== c ? c = Fo(c) : c = Dr(t, c = Mr(n) ? Pr : Rr.current);
            var u = n.getDerivedStateFromProps,
                f = "function" == typeof u || "function" == typeof a.getSnapshotBeforeUpdate;
            f || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || l !== c) && ci(t, a, r, c), Vo = !1;
            var p = t.memoizedState;
            l = a.state = p;
            var d = t.updateQueue;
            null !== d && (na(t, d, r, a, i), l = t.memoizedState), s !== r || p !== l || jr.current || Vo ? ("function" == typeof u && (oi(t, n, u, r), l = t.memoizedState), (s = Vo || si(t, n, s, r, p, l, c)) ? (f || "function" != typeof a.UNSAFE_componentWillMount && "function" != typeof a.componentWillMount || ("function" == typeof a.componentWillMount && a.componentWillMount(), "function" == typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" == typeof a.componentDidMount && (t.effectTag |= 4)) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = c, r = s) : ("function" == typeof a.componentDidMount && (t.effectTag |= 4), r = !1)
        } else a = t.stateNode, s = t.memoizedProps, a.props = t.type === t.elementType ? s : ri(t.type, s), l = a.context, "object" == typeof(c = n.contextType) && null !== c ? c = Fo(c) : c = Dr(t, c = Mr(n) ? Pr : Rr.current), (f = "function" == typeof(u = n.getDerivedStateFromProps) || "function" == typeof a.getSnapshotBeforeUpdate) || "function" != typeof a.UNSAFE_componentWillReceiveProps && "function" != typeof a.componentWillReceiveProps || (s !== r || l !== c) && ci(t, a, r, c), Vo = !1, l = t.memoizedState, p = a.state = l, null !== (d = t.updateQueue) && (na(t, d, r, a, i), p = t.memoizedState), s !== r || l !== p || jr.current || Vo ? ("function" == typeof u && (oi(t, n, u, r), p = t.memoizedState), (u = Vo || si(t, n, s, r, l, p, c)) ? (f || "function" != typeof a.UNSAFE_componentWillUpdate && "function" != typeof a.componentWillUpdate || ("function" == typeof a.componentWillUpdate && a.componentWillUpdate(r, p, c), "function" == typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, c)), "function" == typeof a.componentDidUpdate && (t.effectTag |= 4), "function" == typeof a.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = c, r = u) : ("function" != typeof a.componentDidUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" != typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), r = !1);
        return Ro(e, t, n, r, o, i)
    }

    function Ro(e, t, n, r, i, o) {
        Oo(e, t);
        var a = 0 != (64 & t.effectTag);
        if (!r && !a) return i && Hr(t, n, !1), Do(e, t, o);
        r = t.stateNode, wo.current = t;
        var s = a && "function" != typeof n.getDerivedStateFromError ? null : r.render();
        return t.effectTag |= 1, null !== e && a ? (t.child = mi(t, e.child, null, o), t.child = mi(t, null, s, o)) : Co(e, t, s, o), t.memoizedState = r.state, i && Hr(t, n, !0), t.child
    }

    function jo(e) {
        var t = e.stateNode;
        t.pendingContext ? Ur(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ur(0, t.context, !1), xi(e, t.containerInfo)
    }

    function Po(e, t, n) {
        var r = t.mode,
            i = t.pendingProps,
            o = t.memoizedState;
        if (0 == (64 & t.effectTag)) {
            o = null;
            var a = !1
        } else o = {
            timedOutAt: null !== o ? o.timedOutAt : 0
        }, a = !0, t.effectTag &= -65;
        if (null === e)
            if (a) {
                var s = i.fallback;
                e = Kr(null, r, 0, null), 0 == (1 & t.mode) && (e.child = null !== t.memoizedState ? t.child.child : t.child), r = Kr(s, r, n, null), e.sibling = r, (n = e).return = r.return = t
            } else n = r = gi(t, null, i.children, n);
        else null !== e.memoizedState ? (s = (r = e.child).sibling, a ? (n = i.fallback, i = Vr(r, r.pendingProps), 0 == (1 & t.mode) && ((a = null !== t.memoizedState ? t.child.child : t.child) !== r.child && (i.child = a)), r = i.sibling = Vr(s, n, s.expirationTime), n = i, i.childExpirationTime = 0, n.return = r.return = t) : n = r = mi(t, r.child, i.children, n)) : (s = e.child, a ? (a = i.fallback, (i = Kr(null, r, 0, null)).child = s, 0 == (1 & t.mode) && (i.child = null !== t.memoizedState ? t.child.child : t.child), (r = i.sibling = Kr(a, r, n, null)).effectTag |= 2, n = i, i.childExpirationTime = 0, n.return = r.return = t) : r = n = mi(t, s, i.children, n)), t.stateNode = e.stateNode;
        return t.memoizedState = o, t.child = n, r
    }

    function Do(e, t, n) {
        if (null !== e && (t.contextDependencies = e.contextDependencies), t.childExpirationTime < n) return null;
        if (null !== e && t.child !== e.child && a("153"), null !== t.child) {
            for (n = Vr(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Vr(e, e.pendingProps, e.expirationTime)).return = t;
            n.sibling = null
        }
        return t.child
    }

    function Mo(e, t, n) {
        var r = t.expirationTime;
        if (null !== e) {
            if (e.memoizedProps !== t.pendingProps || jr.current) xo = !0;
            else if (r < n) {
                switch (xo = !1, t.tag) {
                    case 3:
                        jo(t), _o();
                        break;
                    case 5:
                        ki(t);
                        break;
                    case 1:
                        Mr(t.type) && zr(t);
                        break;
                    case 4:
                        xi(t, t.stateNode.containerInfo);
                        break;
                    case 10:
                        zo(t, t.memoizedProps.value);
                        break;
                    case 13:
                        if (null !== t.memoizedState) return 0 !== (r = t.child.childExpirationTime) && r >= n ? Po(e, t, n) : null !== (t = Do(e, t, n)) ? t.sibling : null
                }
                return Do(e, t, n)
            }
        } else xo = !1;
        switch (t.expirationTime = 0, t.tag) {
            case 2:
                r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps;
                var i = Dr(t, Rr.current);
                if (No(t, n), i = Gi(null, t, r, e, i, n), t.effectTag |= 1, "object" == typeof i && null !== i && "function" == typeof i.render && void 0 === i.$$typeof) {
                    if (t.tag = 1, Qi(), Mr(r)) {
                        var o = !0;
                        zr(t)
                    } else o = !1;
                    t.memoizedState = null !== i.state && void 0 !== i.state ? i.state : null;
                    var s = r.getDerivedStateFromProps;
                    "function" == typeof s && oi(t, r, s, e), i.updater = ai, t.stateNode = i, i._reactInternalFiber = t, ui(t, r, e, n), t = Ro(null, t, r, !0, o, n)
                } else t.tag = 0, Co(null, t, i, n), t = t.child;
                return t;
            case 16:
                switch (i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), o = t.pendingProps, e = function(e) {
                    var t = e._result;
                    switch (e._status) {
                        case 1:
                            return t;
                        case 2:
                        case 0:
                            throw t;
                        default:
                            switch (e._status = 0, (t = (t = e._ctor)()).then(function(t) {
                                0 === e._status && (t = t.default, e._status = 1, e._result = t)
                            }, function(t) {
                                0 === e._status && (e._status = 2, e._result = t)
                            }), e._status) {
                                case 1:
                                    return e._result;
                                case 2:
                                    throw e._result
                            }
                            throw e._result = t, t
                    }
                }(i), t.type = e, i = t.tag = function(e) {
                    if ("function" == typeof e) return $r(e) ? 1 : 0;
                    if (null != e) {
                        if ((e = e.$$typeof) === tt) return 11;
                        if (e === rt) return 14
                    }
                    return 2
                }(e), o = ri(e, o), s = void 0, i) {
                    case 0:
                        s = So(null, t, e, o, n);
                        break;
                    case 1:
                        s = Ao(null, t, e, o, n);
                        break;
                    case 11:
                        s = ko(null, t, e, o, n);
                        break;
                    case 14:
                        s = Eo(null, t, e, ri(e.type, o), r, n);
                        break;
                    default:
                        a("306", e, "")
                }
                return s;
            case 0:
                return r = t.type, i = t.pendingProps, So(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
            case 1:
                return r = t.type, i = t.pendingProps, Ao(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
            case 3:
                return jo(t), null === (r = t.updateQueue) && a("282"), i = null !== (i = t.memoizedState) ? i.element : null, na(t, r, t.pendingProps, null, n), (r = t.memoizedState.element) === i ? (_o(), t = Do(e, t, n)) : (i = t.stateNode, (i = (null === e || null === e.child) && i.hydrate) && (po = kr(t.stateNode.containerInfo), fo = t, i = ho = !0), i ? (t.effectTag |= 2, t.child = gi(t, null, r, n)) : (Co(e, t, r, n), _o()), t = t.child), t;
            case 5:
                return ki(t), null === e && bo(t), r = t.type, i = t.pendingProps, o = null !== e ? e.memoizedProps : null, s = i.children, yr(r, i) ? s = null : null !== o && yr(r, o) && (t.effectTag |= 16), Oo(e, t), 1 !== n && 1 & t.mode && i.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Co(e, t, s, n), t = t.child), t;
            case 6:
                return null === e && bo(t), null;
            case 13:
                return Po(e, t, n);
            case 4:
                return xi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = mi(t, null, r, n) : Co(e, t, r, n), t.child;
            case 11:
                return r = t.type, i = t.pendingProps, ko(e, t, r, i = t.elementType === r ? i : ri(r, i), n);
            case 7:
                return Co(e, t, t.pendingProps, n), t.child;
            case 8:
            case 12:
                return Co(e, t, t.pendingProps.children, n), t.child;
            case 10:
                e: {
                    if (r = t.type._context, i = t.pendingProps, s = t.memoizedProps, zo(t, o = i.value), null !== s) {
                        var l = s.value;
                        if (0 === (o = Jt(l, o) ? 0 : 0 | ("function" == typeof r._calculateChangedBits ? r._calculateChangedBits(l, o) : 1073741823))) {
                            if (s.children === i.children && !jr.current) {
                                t = Do(e, t, n);
                                break e
                            }
                        } else
                            for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                var c = l.contextDependencies;
                                if (null !== c) {
                                    s = l.child;
                                    for (var u = c.first; null !== u;) {
                                        if (u.context === r && 0 != (u.observedBits & o)) {
                                            1 === l.tag && ((u = Go(n)).tag = qo, Jo(l, u)), l.expirationTime < n && (l.expirationTime = n), null !== (u = l.alternate) && u.expirationTime < n && (u.expirationTime = n), u = n;
                                            for (var f = l.return; null !== f;) {
                                                var p = f.alternate;
                                                if (f.childExpirationTime < u) f.childExpirationTime = u, null !== p && p.childExpirationTime < u && (p.childExpirationTime = u);
                                                else {
                                                    if (!(null !== p && p.childExpirationTime < u)) break;
                                                    p.childExpirationTime = u
                                                }
                                                f = f.return
                                            }
                                            c.expirationTime < n && (c.expirationTime = n);
                                            break
                                        }
                                        u = u.next
                                    }
                                } else s = 10 === l.tag && l.type === t.type ? null : l.child;
                                if (null !== s) s.return = l;
                                else
                                    for (s = l; null !== s;) {
                                        if (s === t) {
                                            s = null;
                                            break
                                        }
                                        if (null !== (l = s.sibling)) {
                                            l.return = s.return, s = l;
                                            break
                                        }
                                        s = s.return
                                    }
                                l = s
                            }
                    }
                    Co(e, t, i.children, n),
                    t = t.child
                }
                return t;
            case 9:
                return i = t.type, r = (o = t.pendingProps).children, No(t, n), r = r(i = Fo(i, o.unstable_observedBits)), t.effectTag |= 1, Co(e, t, r, n), t.child;
            case 14:
                return o = ri(i = t.type, t.pendingProps), Eo(e, t, i, o = ri(i.type, o), r, n);
            case 15:
                return To(e, t, t.type, t.pendingProps, r, n);
            case 17:
                return r = t.type, i = t.pendingProps, i = t.elementType === r ? i : ri(r, i), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, Mr(r) ? (e = !0, zr(t)) : e = !1, No(t, n), li(t, r, i), ui(t, r, i, n), Ro(null, t, r, !0, e, n)
        }
        a("156")
    }
    var Lo = {
            current: null
        },
        Io = null,
        Uo = null,
        Bo = null;

    function zo(e, t) {
        var n = e.type._context;
        Sr(Lo, n._currentValue), n._currentValue = t
    }

    function Ho(e) {
        var t = Lo.current;
        Or(Lo), e.type._context._currentValue = t
    }

    function No(e, t) {
        Io = e, Bo = Uo = null;
        var n = e.contextDependencies;
        null !== n && n.expirationTime >= t && (xo = !0), e.contextDependencies = null
    }

    function Fo(e, t) {
        return Bo !== e && !1 !== t && 0 !== t && ("number" == typeof t && 1073741823 !== t || (Bo = e, t = 1073741823), t = {
            context: e,
            observedBits: t,
            next: null
        }, null === Uo ? (null === Io && a("308"), Uo = t, Io.contextDependencies = {
            first: t,
            expirationTime: 0
        }) : Uo = Uo.next = t), e._currentValue
    }
    var Wo = 0,
        Yo = 1,
        qo = 2,
        $o = 3,
        Vo = !1;

    function Xo(e) {
        return {
            baseState: e,
            firstUpdate: null,
            lastUpdate: null,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Ko(e) {
        return {
            baseState: e.baseState,
            firstUpdate: e.firstUpdate,
            lastUpdate: e.lastUpdate,
            firstCapturedUpdate: null,
            lastCapturedUpdate: null,
            firstEffect: null,
            lastEffect: null,
            firstCapturedEffect: null,
            lastCapturedEffect: null
        }
    }

    function Go(e) {
        return {
            expirationTime: e,
            tag: Wo,
            payload: null,
            callback: null,
            next: null,
            nextEffect: null
        }
    }

    function Qo(e, t) {
        null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
    }

    function Jo(e, t) {
        var n = e.alternate;
        if (null === n) {
            var r = e.updateQueue,
                i = null;
            null === r && (r = e.updateQueue = Xo(e.memoizedState))
        } else r = e.updateQueue, i = n.updateQueue, null === r ? null === i ? (r = e.updateQueue = Xo(e.memoizedState), i = n.updateQueue = Xo(n.memoizedState)) : r = e.updateQueue = Ko(i) : null === i && (i = n.updateQueue = Ko(r));
        null === i || r === i ? Qo(r, t) : null === r.lastUpdate || null === i.lastUpdate ? (Qo(r, t), Qo(i, t)) : (Qo(r, t), i.lastUpdate = t)
    }

    function Zo(e, t) {
        var n = e.updateQueue;
        null === (n = null === n ? e.updateQueue = Xo(e.memoizedState) : ea(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
    }

    function ea(e, t) {
        var n = e.alternate;
        return null !== n && t === n.updateQueue && (t = e.updateQueue = Ko(t)), t
    }

    function ta(e, t, n, r, o, a) {
        switch (n.tag) {
            case Yo:
                return "function" == typeof(e = n.payload) ? e.call(a, r, o) : e;
            case $o:
                e.effectTag = -2049 & e.effectTag | 64;
            case Wo:
                if (null == (o = "function" == typeof(e = n.payload) ? e.call(a, r, o) : e)) break;
                return i({}, r, o);
            case qo:
                Vo = !0
        }
        return r
    }

    function na(e, t, n, r, i) {
        Vo = !1;
        for (var o = (t = ea(e, t)).baseState, a = null, s = 0, l = t.firstUpdate, c = o; null !== l;) {
            var u = l.expirationTime;
            u < i ? (null === a && (a = l, o = c), s < u && (s = u)) : (c = ta(e, 0, l, c, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next
        }
        for (u = null, l = t.firstCapturedUpdate; null !== l;) {
            var f = l.expirationTime;
            f < i ? (null === u && (u = l, null === a && (o = c)), s < f && (s = f)) : (c = ta(e, 0, l, c, n, r), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next
        }
        null === a && (t.lastUpdate = null), null === u ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === a && null === u && (o = c), t.baseState = o, t.firstUpdate = a, t.firstCapturedUpdate = u, e.expirationTime = s, e.memoizedState = c
    }

    function ra(e, t, n) {
        null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), ia(t.firstEffect, n), t.firstEffect = t.lastEffect = null, ia(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
    }

    function ia(e, t) {
        for (; null !== e;) {
            var n = e.callback;
            if (null !== n) {
                e.callback = null;
                var r = t;
                "function" != typeof n && a("191", n), n.call(r)
            }
            e = e.nextEffect
        }
    }

    function oa(e, t) {
        return {
            value: e,
            source: t,
            stack: lt(t)
        }
    }

    function aa(e) {
        e.effectTag |= 4
    }
    var sa = void 0,
        la = void 0,
        ca = void 0,
        ua = void 0;
    sa = function(e, t) {
        for (var n = t.child; null !== n;) {
            if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
            else if (4 !== n.tag && null !== n.child) {
                n.child.return = n, n = n.child;
                continue
            }
            if (n === t) break;
            for (; null === n.sibling;) {
                if (null === n.return || n.return === t) return;
                n = n.return
            }
            n.sibling.return = n.return, n = n.sibling
        }
    }, la = function() {}, ca = function(e, t, n, r, o) {
        var a = e.memoizedProps;
        if (a !== r) {
            var s = t.stateNode;
            switch (wi(yi.current), e = null, n) {
                case "input":
                    a = vt(s, a), r = vt(s, r), e = [];
                    break;
                case "option":
                    a = Vn(s, a), r = Vn(s, r), e = [];
                    break;
                case "select":
                    a = i({}, a, {
                        value: void 0
                    }), r = i({}, r, {
                        value: void 0
                    }), e = [];
                    break;
                case "textarea":
                    a = Kn(s, a), r = Kn(s, r), e = [];
                    break;
                default:
                    "function" != typeof a.onClick && "function" == typeof r.onClick && (s.onclick = hr)
            }
            fr(n, r), s = n = void 0;
            var l = null;
            for (n in a)
                if (!r.hasOwnProperty(n) && a.hasOwnProperty(n) && null != a[n])
                    if ("style" === n) {
                        var c = a[n];
                        for (s in c) c.hasOwnProperty(s) && (l || (l = {}), l[s] = "")
                    } else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (v.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null));
            for (n in r) {
                var u = r[n];
                if (c = null != a ? a[n] : void 0, r.hasOwnProperty(n) && u !== c && (null != u || null != c))
                    if ("style" === n)
                        if (c) {
                            for (s in c) !c.hasOwnProperty(s) || u && u.hasOwnProperty(s) || (l || (l = {}), l[s] = "");
                            for (s in u) u.hasOwnProperty(s) && c[s] !== u[s] && (l || (l = {}), l[s] = u[s])
                        } else l || (e || (e = []), e.push(n, l)), l = u;
                else "dangerouslySetInnerHTML" === n ? (u = u ? u.__html : void 0, c = c ? c.__html : void 0, null != u && c !== u && (e = e || []).push(n, "" + u)) : "children" === n ? c === u || "string" != typeof u && "number" != typeof u || (e = e || []).push(n, "" + u) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (v.hasOwnProperty(n) ? (null != u && dr(o, n), e || c === u || (e = [])) : (e = e || []).push(n, u))
            }
            l && (e = e || []).push("style", l), o = e, (t.updateQueue = o) && aa(t)
        }
    }, ua = function(e, t, n, r) {
        n !== r && aa(t)
    };
    var fa = "function" == typeof WeakSet ? WeakSet : Set;

    function pa(e, t) {
        var n = t.source,
            r = t.stack;
        null === r && null !== n && (r = lt(n)), null !== n && st(n.type), t = t.value, null !== e && 1 === e.tag && st(e.type);
        try {
            console.error(t)
        } catch (e) {
            setTimeout(function() {
                throw e
            })
        }
    }

    function da(e) {
        var t = e.ref;
        if (null !== t)
            if ("function" == typeof t) try {
                t(null)
            } catch (t) {
                Xa(e, t)
            } else t.current = null
    }

    function ha(e, t, n) {
        if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
            var r = n = n.next;
            do {
                if ((r.tag & e) !== Ti) {
                    var i = r.destroy;
                    r.destroy = void 0, void 0 !== i && i()
                }(r.tag & t) !== Ti && (i = r.create, r.destroy = i()), r = r.next
            } while (r !== n)
        }
    }

    function ma(e) {
        switch ("function" == typeof Fr && Fr(e), e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                var t = e.updateQueue;
                if (null !== t && null !== (t = t.lastEffect)) {
                    var n = t = t.next;
                    do {
                        var r = n.destroy;
                        if (void 0 !== r) {
                            var i = e;
                            try {
                                r()
                            } catch (e) {
                                Xa(i, e)
                            }
                        }
                        n = n.next
                    } while (n !== t)
                }
                break;
            case 1:
                if (da(e), "function" == typeof(t = e.stateNode).componentWillUnmount) try {
                    t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                } catch (t) {
                    Xa(e, t)
                }
                break;
            case 5:
                da(e);
                break;
            case 4:
                ya(e)
        }
    }

    function ga(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }

    function ba(e) {
        e: {
            for (var t = e.return; null !== t;) {
                if (ga(t)) {
                    var n = t;
                    break e
                }
                t = t.return
            }
            a("160"),
            n = void 0
        }
        var r = t = void 0;
        switch (n.tag) {
            case 5:
                t = n.stateNode, r = !1;
                break;
            case 3:
            case 4:
                t = n.stateNode.containerInfo, r = !0;
                break;
            default:
                a("161")
        }
        16 & n.effectTag && (or(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
            for (; null === n.sibling;) {
                if (null === n.return || ga(n.return)) {
                    n = null;
                    break e
                }
                n = n.return
            }
            for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                if (2 & n.effectTag) continue t;
                if (null === n.child || 4 === n.tag) continue t;
                n.child.return = n, n = n.child
            }
            if (!(2 & n.effectTag)) {
                n = n.stateNode;
                break e
            }
        }
        for (var i = e;;) {
            if (5 === i.tag || 6 === i.tag)
                if (n)
                    if (r) {
                        var o = t,
                            s = i.stateNode,
                            l = n;
                        8 === o.nodeType ? o.parentNode.insertBefore(s, l) : o.insertBefore(s, l)
                    } else t.insertBefore(i.stateNode, n);
            else r ? (s = t, l = i.stateNode, 8 === s.nodeType ? (o = s.parentNode).insertBefore(l, s) : (o = s).appendChild(l), null != (s = s._reactRootContainer) || null !== o.onclick || (o.onclick = hr)) : t.appendChild(i.stateNode);
            else if (4 !== i.tag && null !== i.child) {
                i.child.return = i, i = i.child;
                continue
            }
            if (i === e) break;
            for (; null === i.sibling;) {
                if (null === i.return || i.return === e) return;
                i = i.return
            }
            i.sibling.return = i.return, i = i.sibling
        }
    }

    function ya(e) {
        for (var t = e, n = !1, r = void 0, i = void 0;;) {
            if (!n) {
                n = t.return;
                e: for (;;) {
                    switch (null === n && a("160"), n.tag) {
                        case 5:
                            r = n.stateNode, i = !1;
                            break e;
                        case 3:
                        case 4:
                            r = n.stateNode.containerInfo, i = !0;
                            break e
                    }
                    n = n.return
                }
                n = !0
            }
            if (5 === t.tag || 6 === t.tag) {
                e: for (var o = t, s = o;;)
                    if (ma(s), null !== s.child && 4 !== s.tag) s.child.return = s, s = s.child;
                    else {
                        if (s === o) break;
                        for (; null === s.sibling;) {
                            if (null === s.return || s.return === o) break e;
                            s = s.return
                        }
                        s.sibling.return = s.return, s = s.sibling
                    }i ? (o = r, s = t.stateNode, 8 === o.nodeType ? o.parentNode.removeChild(s) : o.removeChild(s)) : r.removeChild(t.stateNode)
            }
            else if (4 === t.tag) {
                if (null !== t.child) {
                    r = t.stateNode.containerInfo, i = !0, t.child.return = t, t = t.child;
                    continue
                }
            } else if (ma(t), null !== t.child) {
                t.child.return = t, t = t.child;
                continue
            }
            if (t === e) break;
            for (; null === t.sibling;) {
                if (null === t.return || t.return === e) return;
                4 === (t = t.return).tag && (n = !1)
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }

    function va(e, t) {
        switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                ha(Si, Ai, t);
                break;
            case 1:
                break;
            case 5:
                var n = t.stateNode;
                if (null != n) {
                    var r = t.memoizedProps;
                    e = null !== e ? e.memoizedProps : r;
                    var i = t.type,
                        o = t.updateQueue;
                    t.updateQueue = null, null !== o && function(e, t, n, r, i) {
                        e[M] = i, "input" === n && "radio" === i.type && null != i.name && wt(e, i), pr(n, r), r = pr(n, i);
                        for (var o = 0; o < t.length; o += 2) {
                            var a = t[o],
                                s = t[o + 1];
                            "style" === a ? cr(e, s) : "dangerouslySetInnerHTML" === a ? ir(e, s) : "children" === a ? or(e, s) : bt(e, a, s, r)
                        }
                        switch (n) {
                            case "input":
                                xt(e, i);
                                break;
                            case "textarea":
                                Qn(e, i);
                                break;
                            case "select":
                                t = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!i.multiple, null != (n = i.value) ? Xn(e, !!i.multiple, n, !1) : t !== !!i.multiple && (null != i.defaultValue ? Xn(e, !!i.multiple, i.defaultValue, !0) : Xn(e, !!i.multiple, i.multiple ? [] : "", !1))
                        }
                    }(n, o, i, e, r)
                }
                break;
            case 6:
                null === t.stateNode && a("162"), t.stateNode.nodeValue = t.memoizedProps;
                break;
            case 3:
            case 12:
                break;
            case 13:
                if (n = t.memoizedState, r = void 0, e = t, null === n ? r = !1 : (r = !0, e = t.child, 0 === n.timedOutAt && (n.timedOutAt = xs())), null !== e && function(e, t) {
                        for (var n = e;;) {
                            if (5 === n.tag) {
                                var r = n.stateNode;
                                if (t) r.style.display = "none";
                                else {
                                    r = n.stateNode;
                                    var i = n.memoizedProps.style;
                                    i = null != i && i.hasOwnProperty("display") ? i.display : null, r.style.display = lr("display", i)
                                }
                            } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                            else {
                                if (13 === n.tag && null !== n.memoizedState) {
                                    (r = n.child.sibling).return = n, n = r;
                                    continue
                                }
                                if (null !== n.child) {
                                    n.child.return = n, n = n.child;
                                    continue
                                }
                            }
                            if (n === e) break;
                            for (; null === n.sibling;) {
                                if (null === n.return || n.return === e) return;
                                n = n.return
                            }
                            n.sibling.return = n.return, n = n.sibling
                        }
                    }(e, r), null !== (n = t.updateQueue)) {
                    t.updateQueue = null;
                    var s = t.stateNode;
                    null === s && (s = t.stateNode = new fa), n.forEach(function(e) {
                        var n = function(e, t) {
                            var n = e.stateNode;
                            null !== n && n.delete(t), t = Ka(t = xs(), e), null !== (e = Qa(e, t)) && (Zr(e, t), 0 !== (t = e.expirationTime) && Cs(e, t))
                        }.bind(null, t, e);
                        s.has(e) || (s.add(e), e.then(n, n))
                    })
                }
                break;
            case 17:
                break;
            default:
                a("163")
        }
    }
    var _a = "function" == typeof WeakMap ? WeakMap : Map;

    function wa(e, t, n) {
        (n = Go(n)).tag = $o, n.payload = {
            element: null
        };
        var r = t.value;
        return n.callback = function() {
            Ps(r), pa(e, t)
        }, n
    }

    function xa(e, t, n) {
        (n = Go(n)).tag = $o;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
            var i = t.value;
            n.payload = function() {
                return r(i)
            }
        }
        var o = e.stateNode;
        return null !== o && "function" == typeof o.componentDidCatch && (n.callback = function() {
            "function" != typeof r && (null === Ba ? Ba = new Set([this]) : Ba.add(this));
            var n = t.value,
                i = t.stack;
            pa(e, t), this.componentDidCatch(n, {
                componentStack: null !== i ? i : ""
            })
        }), n
    }

    function Ca(e) {
        switch (e.tag) {
            case 1:
                Mr(e.type) && Lr();
                var t = e.effectTag;
                return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
            case 3:
                return Ci(), Ir(), 0 != (64 & (t = e.effectTag)) && a("285"), e.effectTag = -2049 & t | 64, e;
            case 5:
                return Ei(e), null;
            case 13:
                return 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64, e) : null;
            case 18:
                return null;
            case 4:
                return Ci(), null;
            case 10:
                return Ho(e), null;
            default:
                return null
        }
    }
    var ka = Ye.ReactCurrentDispatcher,
        Ea = Ye.ReactCurrentOwner,
        Ta = 1073741822,
        Oa = !1,
        Sa = null,
        Aa = null,
        Ra = 0,
        ja = -1,
        Pa = !1,
        Da = null,
        Ma = !1,
        La = null,
        Ia = null,
        Ua = null,
        Ba = null;

    function za() {
        if (null !== Sa)
            for (var e = Sa.return; null !== e;) {
                var t = e;
                switch (t.tag) {
                    case 1:
                        var n = t.type.childContextTypes;
                        null != n && Lr();
                        break;
                    case 3:
                        Ci(), Ir();
                        break;
                    case 5:
                        Ei(t);
                        break;
                    case 4:
                        Ci();
                        break;
                    case 10:
                        Ho(t)
                }
                e = e.return
            }
        Aa = null, Ra = 0, ja = -1, Pa = !1, Sa = null
    }

    function Ha() {
        for (; null !== Da;) {
            var e = Da.effectTag;
            if (16 & e && or(Da.stateNode, ""), 128 & e) {
                var t = Da.alternate;
                null !== t && (null !== (t = t.ref) && ("function" == typeof t ? t(null) : t.current = null))
            }
            switch (14 & e) {
                case 2:
                    ba(Da), Da.effectTag &= -3;
                    break;
                case 6:
                    ba(Da), Da.effectTag &= -3, va(Da.alternate, Da);
                    break;
                case 4:
                    va(Da.alternate, Da);
                    break;
                case 8:
                    ya(e = Da), e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, null !== (e = e.alternate) && (e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null)
            }
            Da = Da.nextEffect
        }
    }

    function Na() {
        for (; null !== Da;) {
            if (256 & Da.effectTag) e: {
                var e = Da.alternate,
                    t = Da;
                switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ha(Oi, Ti, t);
                        break e;
                    case 1:
                        if (256 & t.effectTag && null !== e) {
                            var n = e.memoizedProps,
                                r = e.memoizedState;
                            t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : ri(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                        }
                        break e;
                    case 3:
                    case 5:
                    case 6:
                    case 4:
                    case 17:
                        break e;
                    default:
                        a("163")
                }
            }
            Da = Da.nextEffect
        }
    }

    function Fa(e, t) {
        for (; null !== Da;) {
            var n = Da.effectTag;
            if (36 & n) {
                var r = Da.alternate,
                    i = Da,
                    o = t;
                switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ha(Ri, ji, i);
                        break;
                    case 1:
                        var s = i.stateNode;
                        if (4 & i.effectTag)
                            if (null === r) s.componentDidMount();
                            else {
                                var l = i.elementType === i.type ? r.memoizedProps : ri(i.type, r.memoizedProps);
                                s.componentDidUpdate(l, r.memoizedState, s.__reactInternalSnapshotBeforeUpdate)
                            }
                        null !== (r = i.updateQueue) && ra(0, r, s);
                        break;
                    case 3:
                        if (null !== (r = i.updateQueue)) {
                            if (s = null, null !== i.child) switch (i.child.tag) {
                                case 5:
                                    s = i.child.stateNode;
                                    break;
                                case 1:
                                    s = i.child.stateNode
                            }
                            ra(0, r, s)
                        }
                        break;
                    case 5:
                        o = i.stateNode, null === r && 4 & i.effectTag && br(i.type, i.memoizedProps) && o.focus();
                        break;
                    case 6:
                    case 4:
                    case 12:
                    case 13:
                    case 17:
                        break;
                    default:
                        a("163")
                }
            }
            128 & n && (null !== (i = Da.ref) && (o = Da.stateNode, "function" == typeof i ? i(o) : i.current = o)), 512 & n && (La = e), Da = Da.nextEffect
        }
    }

    function Wa() {
        null !== Ia && xr(Ia), null !== Ua && Ua()
    }

    function Ya(e, t) {
        Ma = Oa = !0, e.current === t && a("177");
        var n = e.pendingCommitExpirationTime;
        0 === n && a("261"), e.pendingCommitExpirationTime = 0;
        var r = t.expirationTime,
            i = t.childExpirationTime;
        for (function(e, t) {
                if (e.didError = !1, 0 === t) e.earliestPendingTime = 0, e.latestPendingTime = 0, e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0;
                else {
                    t < e.latestPingedTime && (e.latestPingedTime = 0);
                    var n = e.latestPendingTime;
                    0 !== n && (n > t ? e.earliestPendingTime = e.latestPendingTime = 0 : e.earliestPendingTime > t && (e.earliestPendingTime = e.latestPendingTime)), 0 === (n = e.earliestSuspendedTime) ? Zr(e, t) : t < e.latestSuspendedTime ? (e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0, Zr(e, t)) : t > n && Zr(e, t)
                }
                ni(0, e)
            }(e, i > r ? i : r), Ea.current = null, r = void 0, 1 < t.effectTag ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, r = t.firstEffect) : r = t : r = t.firstEffect, mr = kn, gr = function() {
                var e = In();
                if (Un(e)) {
                    if ("selectionStart" in e) var t = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                    else e: {
                        var n = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                        if (n && 0 !== n.rangeCount) {
                            t = n.anchorNode;
                            var r = n.anchorOffset,
                                i = n.focusNode;
                            n = n.focusOffset;
                            try {
                                t.nodeType, i.nodeType
                            } catch (e) {
                                t = null;
                                break e
                            }
                            var o = 0,
                                a = -1,
                                s = -1,
                                l = 0,
                                c = 0,
                                u = e,
                                f = null;
                            t: for (;;) {
                                for (var p; u !== t || 0 !== r && 3 !== u.nodeType || (a = o + r), u !== i || 0 !== n && 3 !== u.nodeType || (s = o + n), 3 === u.nodeType && (o += u.nodeValue.length), null !== (p = u.firstChild);) f = u, u = p;
                                for (;;) {
                                    if (u === e) break t;
                                    if (f === t && ++l === r && (a = o), f === i && ++c === n && (s = o), null !== (p = u.nextSibling)) break;
                                    f = (u = f).parentNode
                                }
                                u = p
                            }
                            t = -1 === a || -1 === s ? null : {
                                start: a,
                                end: s
                            }
                        } else t = null
                    }
                    t = t || {
                        start: 0,
                        end: 0
                    }
                } else t = null;
                return {
                    focusedElem: e,
                    selectionRange: t
                }
            }(), kn = !1, Da = r; null !== Da;) {
            i = !1;
            var s = void 0;
            try {
                Na()
            } catch (e) {
                i = !0, s = e
            }
            i && (null === Da && a("178"), Xa(Da, s), null !== Da && (Da = Da.nextEffect))
        }
        for (Da = r; null !== Da;) {
            i = !1, s = void 0;
            try {
                Ha()
            } catch (e) {
                i = !0, s = e
            }
            i && (null === Da && a("178"), Xa(Da, s), null !== Da && (Da = Da.nextEffect))
        }
        for (Bn(gr), gr = null, kn = !!mr, mr = null, e.current = t, Da = r; null !== Da;) {
            i = !1, s = void 0;
            try {
                Fa(e, n)
            } catch (e) {
                i = !0, s = e
            }
            i && (null === Da && a("178"), Xa(Da, s), null !== Da && (Da = Da.nextEffect))
        }
        if (null !== r && null !== La) {
            var l = function(e, t) {
                Ua = Ia = La = null;
                var n = is;
                is = !0;
                do {
                    if (512 & t.effectTag) {
                        var r = !1,
                            i = void 0;
                        try {
                            var o = t;
                            ha(Di, Ti, o), ha(Ti, Pi, o)
                        } catch (e) {
                            r = !0, i = e
                        }
                        r && Xa(t, i)
                    }
                    t = t.nextEffect
                } while (null !== t);
                is = n, 0 !== (n = e.expirationTime) && Cs(e, n), us || is || Ss(1073741823, !1)
            }.bind(null, e, r);
            Ia = o.unstable_runWithPriority(o.unstable_NormalPriority, function() {
                return wr(l)
            }), Ua = l
        }
        Oa = Ma = !1, "function" == typeof Nr && Nr(t.stateNode), n = t.expirationTime, 0 === (t = (t = t.childExpirationTime) > n ? t : n) && (Ba = null),
            function(e, t) {
                e.expirationTime = t, e.finishedWork = null
            }(e, t)
    }

    function qa(e) {
        for (;;) {
            var t = e.alternate,
                n = e.return,
                r = e.sibling;
            if (0 == (1024 & e.effectTag)) {
                Sa = e;
                e: {
                    var o = t,
                        s = Ra,
                        l = (t = e).pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                            break;
                        case 15:
                        case 0:
                            break;
                        case 1:
                            Mr(t.type) && Lr();
                            break;
                        case 3:
                            Ci(), Ir(), (l = t.stateNode).pendingContext && (l.context = l.pendingContext, l.pendingContext = null), null !== o && null !== o.child || (vo(t), t.effectTag &= -3), la(t);
                            break;
                        case 5:
                            Ei(t);
                            var c = wi(_i.current);
                            if (s = t.type, null !== o && null != t.stateNode) ca(o, t, s, l, c), o.ref !== t.ref && (t.effectTag |= 128);
                            else if (l) {
                                var u = wi(yi.current);
                                if (vo(t)) {
                                    o = (l = t).stateNode;
                                    var f = l.type,
                                        p = l.memoizedProps,
                                        d = c;
                                    switch (o[D] = l, o[M] = p, s = void 0, c = f) {
                                        case "iframe":
                                        case "object":
                                            En("load", o);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (f = 0; f < te.length; f++) En(te[f], o);
                                            break;
                                        case "source":
                                            En("error", o);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            En("error", o), En("load", o);
                                            break;
                                        case "form":
                                            En("reset", o), En("submit", o);
                                            break;
                                        case "details":
                                            En("toggle", o);
                                            break;
                                        case "input":
                                            _t(o, p), En("invalid", o), dr(d, "onChange");
                                            break;
                                        case "select":
                                            o._wrapperState = {
                                                wasMultiple: !!p.multiple
                                            }, En("invalid", o), dr(d, "onChange");
                                            break;
                                        case "textarea":
                                            Gn(o, p), En("invalid", o), dr(d, "onChange")
                                    }
                                    for (s in fr(c, p), f = null, p) p.hasOwnProperty(s) && (u = p[s], "children" === s ? "string" == typeof u ? o.textContent !== u && (f = ["children", u]) : "number" == typeof u && o.textContent !== "" + u && (f = ["children", "" + u]) : v.hasOwnProperty(s) && null != u && dr(d, s));
                                    switch (c) {
                                        case "input":
                                            Fe(o), Ct(o, p, !0);
                                            break;
                                        case "textarea":
                                            Fe(o), Jn(o);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" == typeof p.onClick && (o.onclick = hr)
                                    }
                                    s = f, l.updateQueue = s, (l = null !== s) && aa(t)
                                } else {
                                    p = t, o = s, d = l, f = 9 === c.nodeType ? c : c.ownerDocument, u === Zn.html && (u = er(o)), u === Zn.html ? "script" === o ? ((o = f.createElement("div")).innerHTML = "<script><\/script>", f = o.removeChild(o.firstChild)) : "string" == typeof d.is ? f = f.createElement(o, {
                                        is: d.is
                                    }) : (f = f.createElement(o), "select" === o && d.multiple && (f.multiple = !0)) : f = f.createElementNS(u, o), (o = f)[D] = p, o[M] = l, sa(o, t, !1, !1), d = o;
                                    var h = c,
                                        m = pr(f = s, p = l);
                                    switch (f) {
                                        case "iframe":
                                        case "object":
                                            En("load", d), c = p;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (c = 0; c < te.length; c++) En(te[c], d);
                                            c = p;
                                            break;
                                        case "source":
                                            En("error", d), c = p;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            En("error", d), En("load", d), c = p;
                                            break;
                                        case "form":
                                            En("reset", d), En("submit", d), c = p;
                                            break;
                                        case "details":
                                            En("toggle", d), c = p;
                                            break;
                                        case "input":
                                            _t(d, p), c = vt(d, p), En("invalid", d), dr(h, "onChange");
                                            break;
                                        case "option":
                                            c = Vn(d, p);
                                            break;
                                        case "select":
                                            d._wrapperState = {
                                                wasMultiple: !!p.multiple
                                            }, c = i({}, p, {
                                                value: void 0
                                            }), En("invalid", d), dr(h, "onChange");
                                            break;
                                        case "textarea":
                                            Gn(d, p), c = Kn(d, p), En("invalid", d), dr(h, "onChange");
                                            break;
                                        default:
                                            c = p
                                    }
                                    fr(f, c), u = void 0;
                                    var g = f,
                                        b = d,
                                        y = c;
                                    for (u in y)
                                        if (y.hasOwnProperty(u)) {
                                            var _ = y[u];
                                            "style" === u ? cr(b, _) : "dangerouslySetInnerHTML" === u ? null != (_ = _ ? _.__html : void 0) && ir(b, _) : "children" === u ? "string" == typeof _ ? ("textarea" !== g || "" !== _) && or(b, _) : "number" == typeof _ && or(b, "" + _) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (v.hasOwnProperty(u) ? null != _ && dr(h, u) : null != _ && bt(b, u, _, m))
                                        }
                                    switch (f) {
                                        case "input":
                                            Fe(d), Ct(d, p, !1);
                                            break;
                                        case "textarea":
                                            Fe(d), Jn(d);
                                            break;
                                        case "option":
                                            null != p.value && d.setAttribute("value", "" + yt(p.value));
                                            break;
                                        case "select":
                                            (c = d).multiple = !!p.multiple, null != (d = p.value) ? Xn(c, !!p.multiple, d, !1) : null != p.defaultValue && Xn(c, !!p.multiple, p.defaultValue, !0);
                                            break;
                                        default:
                                            "function" == typeof c.onClick && (d.onclick = hr)
                                    }(l = br(s, l)) && aa(t), t.stateNode = o
                                }
                                null !== t.ref && (t.effectTag |= 128)
                            } else null === t.stateNode && a("166");
                            break;
                        case 6:
                            o && null != t.stateNode ? ua(o, t, o.memoizedProps, l) : ("string" != typeof l && (null === t.stateNode && a("166")), o = wi(_i.current), wi(yi.current), vo(t) ? (s = (l = t).stateNode, o = l.memoizedProps, s[D] = l, (l = s.nodeValue !== o) && aa(t)) : (s = t, (l = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(l))[D] = t, s.stateNode = l));
                            break;
                        case 11:
                            break;
                        case 13:
                            if (l = t.memoizedState, 0 != (64 & t.effectTag)) {
                                t.expirationTime = s, Sa = t;
                                break e
                            }
                            l = null !== l, s = null !== o && null !== o.memoizedState, null !== o && !l && s && (null !== (o = o.child.sibling) && (null !== (c = t.firstEffect) ? (t.firstEffect = o, o.nextEffect = c) : (t.firstEffect = t.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), (l || s) && (t.effectTag |= 4);
                            break;
                        case 7:
                        case 8:
                        case 12:
                            break;
                        case 4:
                            Ci(), la(t);
                            break;
                        case 10:
                            Ho(t);
                            break;
                        case 9:
                        case 14:
                            break;
                        case 17:
                            Mr(t.type) && Lr();
                            break;
                        case 18:
                            break;
                        default:
                            a("156")
                    }
                    Sa = null
                }
                if (t = e, 1 === Ra || 1 !== t.childExpirationTime) {
                    for (l = 0, s = t.child; null !== s;)(o = s.expirationTime) > l && (l = o), (c = s.childExpirationTime) > l && (l = c), s = s.sibling;
                    t.childExpirationTime = l
                }
                if (null !== Sa) return Sa;
                null !== n && 0 == (1024 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e))
            } else {
                if (null !== (e = Ca(e))) return e.effectTag &= 1023, e;
                null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 1024)
            }
            if (null !== r) return r;
            if (null === n) break;
            e = n
        }
        return null
    }

    function $a(e) {
        var t = Mo(e.alternate, e, Ra);
        return e.memoizedProps = e.pendingProps, null === t && (t = qa(e)), Ea.current = null, t
    }

    function Va(e, t) {
        Oa && a("243"), Wa(), Oa = !0;
        var n = ka.current;
        ka.current = lo;
        var r = e.nextExpirationTimeToWorkOn;
        r === Ra && e === Aa && null !== Sa || (za(), Ra = r, Sa = Vr((Aa = e).current, null), e.pendingCommitExpirationTime = 0);
        for (var i = !1;;) {
            try {
                if (t)
                    for (; null !== Sa && !Ts();) Sa = $a(Sa);
                else
                    for (; null !== Sa;) Sa = $a(Sa)
            } catch (t) {
                if (Bo = Uo = Io = null, Qi(), null === Sa) i = !0, Ps(t);
                else {
                    null === Sa && a("271");
                    var o = Sa,
                        s = o.return;
                    if (null !== s) {
                        e: {
                            var l = e,
                                c = s,
                                u = o,
                                f = t;
                            if (s = Ra, u.effectTag |= 1024, u.firstEffect = u.lastEffect = null, null !== f && "object" == typeof f && "function" == typeof f.then) {
                                var p = f;
                                f = c;
                                var d = -1,
                                    h = -1;
                                do {
                                    if (13 === f.tag) {
                                        var m = f.alternate;
                                        if (null !== m && null !== (m = m.memoizedState)) {
                                            h = 10 * (1073741822 - m.timedOutAt);
                                            break
                                        }
                                        "number" == typeof(m = f.pendingProps.maxDuration) && (0 >= m ? d = 0 : (-1 === d || m < d) && (d = m))
                                    }
                                    f = f.return
                                } while (null !== f);
                                f = c;
                                do {
                                    if ((m = 13 === f.tag) && (m = void 0 !== f.memoizedProps.fallback && null === f.memoizedState), m) {
                                        if (null === (c = f.updateQueue) ? ((c = new Set).add(p), f.updateQueue = c) : c.add(p), 0 == (1 & f.mode)) {
                                            f.effectTag |= 64, u.effectTag &= -1957, 1 === u.tag && (null === u.alternate ? u.tag = 17 : ((s = Go(1073741823)).tag = qo, Jo(u, s))), u.expirationTime = 1073741823;
                                            break e
                                        }
                                        c = s;
                                        var g = (u = l).pingCache;
                                        null === g ? (g = u.pingCache = new _a, m = new Set, g.set(p, m)) : void 0 === (m = g.get(p)) && (m = new Set, g.set(p, m)), m.has(c) || (m.add(c), u = Ga.bind(null, u, p, c), p.then(u, u)), -1 === d ? l = 1073741823 : (-1 === h && (h = 10 * (1073741822 - ti(l, s)) - 5e3), l = h + d), 0 <= l && ja < l && (ja = l), f.effectTag |= 2048, f.expirationTime = s;
                                        break e
                                    }
                                    f = f.return
                                } while (null !== f);
                                f = Error((st(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + lt(u))
                            }
                            Pa = !0,
                            f = oa(f, u),
                            l = c;do {
                                switch (l.tag) {
                                    case 3:
                                        l.effectTag |= 2048, l.expirationTime = s, Zo(l, s = wa(l, f, s));
                                        break e;
                                    case 1:
                                        if (d = f, h = l.type, u = l.stateNode, 0 == (64 & l.effectTag) && ("function" == typeof h.getDerivedStateFromError || null !== u && "function" == typeof u.componentDidCatch && (null === Ba || !Ba.has(u)))) {
                                            l.effectTag |= 2048, l.expirationTime = s, Zo(l, s = xa(l, d, s));
                                            break e
                                        }
                                }
                                l = l.return
                            } while (null !== l)
                        }
                        Sa = qa(o);
                        continue
                    }
                    i = !0, Ps(t)
                }
            }
            break
        }
        if (Oa = !1, ka.current = n, Bo = Uo = Io = null, Qi(), i) Aa = null, e.finishedWork = null;
        else if (null !== Sa) e.finishedWork = null;
        else {
            if (null === (n = e.current.alternate) && a("281"), Aa = null, Pa) {
                if (i = e.latestPendingTime, o = e.latestSuspendedTime, s = e.latestPingedTime, 0 !== i && i < r || 0 !== o && o < r || 0 !== s && s < r) return ei(e, r), void ws(e, n, r, e.expirationTime, -1);
                if (!e.didError && t) return e.didError = !0, r = e.nextExpirationTimeToWorkOn = r, t = e.expirationTime = 1073741823, void ws(e, n, r, t, -1)
            }
            t && -1 !== ja ? (ei(e, r), (t = 10 * (1073741822 - ti(e, r))) < ja && (ja = t), t = 10 * (1073741822 - xs()), t = ja - t, ws(e, n, r, e.expirationTime, 0 > t ? 0 : t)) : (e.pendingCommitExpirationTime = r, e.finishedWork = n)
        }
    }

    function Xa(e, t) {
        for (var n = e.return; null !== n;) {
            switch (n.tag) {
                case 1:
                    var r = n.stateNode;
                    if ("function" == typeof n.type.getDerivedStateFromError || "function" == typeof r.componentDidCatch && (null === Ba || !Ba.has(r))) return Jo(n, e = xa(n, e = oa(t, e), 1073741823)), void Ja(n, 1073741823);
                    break;
                case 3:
                    return Jo(n, e = wa(n, e = oa(t, e), 1073741823)), void Ja(n, 1073741823)
            }
            n = n.return
        }
        3 === e.tag && (Jo(e, n = wa(e, n = oa(t, e), 1073741823)), Ja(e, 1073741823))
    }

    function Ka(e, t) {
        var n = o.unstable_getCurrentPriorityLevel(),
            r = void 0;
        if (0 == (1 & t.mode)) r = 1073741823;
        else if (Oa && !Ma) r = Ra;
        else {
            switch (n) {
                case o.unstable_ImmediatePriority:
                    r = 1073741823;
                    break;
                case o.unstable_UserBlockingPriority:
                    r = 1073741822 - 10 * (1 + ((1073741822 - e + 15) / 10 | 0));
                    break;
                case o.unstable_NormalPriority:
                    r = 1073741822 - 25 * (1 + ((1073741822 - e + 500) / 25 | 0));
                    break;
                case o.unstable_LowPriority:
                case o.unstable_IdlePriority:
                    r = 1;
                    break;
                default:
                    a("313")
            }
            null !== Aa && r === Ra && --r
        }
        return n === o.unstable_UserBlockingPriority && (0 === ss || r < ss) && (ss = r), r
    }

    function Ga(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t), null !== Aa && Ra === n ? Aa = null : (t = e.earliestSuspendedTime, r = e.latestSuspendedTime, 0 !== t && n <= t && n >= r && (e.didError = !1, (0 === (t = e.latestPingedTime) || t > n) && (e.latestPingedTime = n), ni(n, e), 0 !== (n = e.expirationTime) && Cs(e, n)))
    }

    function Qa(e, t) {
        e.expirationTime < t && (e.expirationTime = t);
        var n = e.alternate;
        null !== n && n.expirationTime < t && (n.expirationTime = t);
        var r = e.return,
            i = null;
        if (null === r && 3 === e.tag) i = e.stateNode;
        else
            for (; null !== r;) {
                if (n = r.alternate, r.childExpirationTime < t && (r.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === r.return && 3 === r.tag) {
                    i = r.stateNode;
                    break
                }
                r = r.return
            }
        return i
    }

    function Ja(e, t) {
        null !== (e = Qa(e, t)) && (!Oa && 0 !== Ra && t > Ra && za(), Zr(e, t), Oa && !Ma && Aa === e || Cs(e, e.expirationTime), bs > gs && (bs = 0, a("185")))
    }

    function Za(e, t, n, r, i) {
        return o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
            return e(t, n, r, i)
        })
    }
    var es = null,
        ts = null,
        ns = 0,
        rs = void 0,
        is = !1,
        os = null,
        as = 0,
        ss = 0,
        ls = !1,
        cs = null,
        us = !1,
        fs = !1,
        ps = null,
        ds = o.unstable_now(),
        hs = 1073741822 - (ds / 10 | 0),
        ms = hs,
        gs = 50,
        bs = 0,
        ys = null;

    function vs() {
        hs = 1073741822 - ((o.unstable_now() - ds) / 10 | 0)
    }

    function _s(e, t) {
        if (0 !== ns) {
            if (t < ns) return;
            null !== rs && o.unstable_cancelCallback(rs)
        }
        ns = t, e = o.unstable_now() - ds, rs = o.unstable_scheduleCallback(Os, {
            timeout: 10 * (1073741822 - t) - e
        })
    }

    function ws(e, t, n, r, i) {
        e.expirationTime = r, 0 !== i || Ts() ? 0 < i && (e.timeoutHandle = vr(function(e, t, n) {
            e.pendingCommitExpirationTime = n, e.finishedWork = t, vs(), ms = hs, As(e, n)
        }.bind(null, e, t, n), i)) : (e.pendingCommitExpirationTime = n, e.finishedWork = t)
    }

    function xs() {
        return is ? ms : (ks(), 0 !== as && 1 !== as || (vs(), ms = hs), ms)
    }

    function Cs(e, t) {
        null === e.nextScheduledRoot ? (e.expirationTime = t, null === ts ? (es = ts = e, e.nextScheduledRoot = e) : (ts = ts.nextScheduledRoot = e).nextScheduledRoot = es) : t > e.expirationTime && (e.expirationTime = t), is || (us ? fs && (os = e, as = 1073741823, Rs(e, 1073741823, !1)) : 1073741823 === t ? Ss(1073741823, !1) : _s(e, t))
    }

    function ks() {
        var e = 0,
            t = null;
        if (null !== ts)
            for (var n = ts, r = es; null !== r;) {
                var i = r.expirationTime;
                if (0 === i) {
                    if ((null === n || null === ts) && a("244"), r === r.nextScheduledRoot) {
                        es = ts = r.nextScheduledRoot = null;
                        break
                    }
                    if (r === es) es = i = r.nextScheduledRoot, ts.nextScheduledRoot = i, r.nextScheduledRoot = null;
                    else {
                        if (r === ts) {
                            (ts = n).nextScheduledRoot = es, r.nextScheduledRoot = null;
                            break
                        }
                        n.nextScheduledRoot = r.nextScheduledRoot, r.nextScheduledRoot = null
                    }
                    r = n.nextScheduledRoot
                } else {
                    if (i > e && (e = i, t = r), r === ts) break;
                    if (1073741823 === e) break;
                    n = r, r = r.nextScheduledRoot
                }
            }
        os = t, as = e
    }
    var Es = !1;

    function Ts() {
        return !!Es || !!o.unstable_shouldYield() && (Es = !0)
    }

    function Os() {
        try {
            if (!Ts() && null !== es) {
                vs();
                var e = es;
                do {
                    var t = e.expirationTime;
                    0 !== t && hs <= t && (e.nextExpirationTimeToWorkOn = hs), e = e.nextScheduledRoot
                } while (e !== es)
            }
            Ss(0, !0)
        } finally {
            Es = !1
        }
    }

    function Ss(e, t) {
        if (ks(), t)
            for (vs(), ms = hs; null !== os && 0 !== as && e <= as && !(Es && hs > as);) Rs(os, as, hs > as), ks(), vs(), ms = hs;
        else
            for (; null !== os && 0 !== as && e <= as;) Rs(os, as, !1), ks();
        if (t && (ns = 0, rs = null), 0 !== as && _s(os, as), bs = 0, ys = null, null !== ps)
            for (e = ps, ps = null, t = 0; t < e.length; t++) {
                var n = e[t];
                try {
                    n._onComplete()
                } catch (e) {
                    ls || (ls = !0, cs = e)
                }
            }
        if (ls) throw e = cs, cs = null, ls = !1, e
    }

    function As(e, t) {
        is && a("253"), os = e, as = t, Rs(e, t, !1), Ss(1073741823, !1)
    }

    function Rs(e, t, n) {
        if (is && a("245"), is = !0, n) {
            var r = e.finishedWork;
            null !== r ? js(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, _r(r)), Va(e, n), null !== (r = e.finishedWork) && (Ts() ? e.finishedWork = r : js(e, r, t)))
        } else null !== (r = e.finishedWork) ? js(e, r, t) : (e.finishedWork = null, -1 !== (r = e.timeoutHandle) && (e.timeoutHandle = -1, _r(r)), Va(e, n), null !== (r = e.finishedWork) && js(e, r, t));
        is = !1
    }

    function js(e, t, n) {
        var r = e.firstBatch;
        if (null !== r && r._expirationTime >= n && (null === ps ? ps = [r] : ps.push(r), r._defer)) return e.finishedWork = t, void(e.expirationTime = 0);
        e.finishedWork = null, e === ys ? bs++ : (ys = e, bs = 0), o.unstable_runWithPriority(o.unstable_ImmediatePriority, function() {
            Ya(e, t)
        })
    }

    function Ps(e) {
        null === os && a("246"), os.expirationTime = 0, ls || (ls = !0, cs = e)
    }

    function Ds(e, t) {
        var n = us;
        us = !0;
        try {
            return e(t)
        } finally {
            (us = n) || is || Ss(1073741823, !1)
        }
    }

    function Ms(e, t) {
        if (us && !fs) {
            fs = !0;
            try {
                return e(t)
            } finally {
                fs = !1
            }
        }
        return e(t)
    }

    function Ls(e, t, n) {
        us || is || 0 === ss || (Ss(ss, !1), ss = 0);
        var r = us;
        us = !0;
        try {
            return o.unstable_runWithPriority(o.unstable_UserBlockingPriority, function() {
                return e(t, n)
            })
        } finally {
            (us = r) || is || Ss(1073741823, !1)
        }
    }

    function Is(e, t, n, r, i) {
        var o = t.current;
        e: if (n) {
            t: {
                2 === tn(n = n._reactInternalFiber) && 1 === n.tag || a("170");
                var s = n;do {
                    switch (s.tag) {
                        case 3:
                            s = s.stateNode.context;
                            break t;
                        case 1:
                            if (Mr(s.type)) {
                                s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                                break t
                            }
                    }
                    s = s.return
                } while (null !== s);a("171"),
                s = void 0
            }
            if (1 === n.tag) {
                var l = n.type;
                if (Mr(l)) {
                    n = Br(n, l, s);
                    break e
                }
            }
            n = s
        }
        else n = Ar;
        return null === t.context ? t.context = n : t.pendingContext = n, t = i, (i = Go(r)).payload = {
            element: e
        }, null !== (t = void 0 === t ? null : t) && (i.callback = t), Wa(), Jo(o, i), Ja(o, r), r
    }

    function Us(e, t, n, r) {
        var i = t.current;
        return Is(e, t, n, i = Ka(xs(), i), r)
    }

    function Bs(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
            case 5:
            default:
                return e.child.stateNode
        }
    }

    function zs(e) {
        var t = 1073741822 - 25 * (1 + ((1073741822 - xs() + 500) / 25 | 0));
        t >= Ta && (t = Ta - 1), this._expirationTime = Ta = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
    }

    function Hs() {
        this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
    }

    function Ns(e, t, n) {
        e = {
            current: t = qr(3, null, null, t ? 3 : 0),
            containerInfo: e,
            pendingChildren: null,
            pingCache: null,
            earliestPendingTime: 0,
            latestPendingTime: 0,
            earliestSuspendedTime: 0,
            latestSuspendedTime: 0,
            latestPingedTime: 0,
            didError: !1,
            pendingCommitExpirationTime: 0,
            finishedWork: null,
            timeoutHandle: -1,
            context: null,
            pendingContext: null,
            hydrate: n,
            nextExpirationTimeToWorkOn: 0,
            expirationTime: 0,
            firstBatch: null,
            nextScheduledRoot: null
        }, this._internalRoot = t.stateNode = e
    }

    function Fs(e) {
        return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
    }

    function Ws(e, t, n, r, i) {
        var o = n._reactRootContainer;
        if (o) {
            if ("function" == typeof i) {
                var a = i;
                i = function() {
                    var e = Bs(o._internalRoot);
                    a.call(e)
                }
            }
            null != e ? o.legacy_renderSubtreeIntoContainer(e, t, i) : o.render(t, i)
        } else {
            if (o = n._reactRootContainer = function(e, t) {
                    if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                        for (var n; n = e.lastChild;) e.removeChild(n);
                    return new Ns(e, !1, t)
                }(n, r), "function" == typeof i) {
                var s = i;
                i = function() {
                    var e = Bs(o._internalRoot);
                    s.call(e)
                }
            }
            Ms(function() {
                null != e ? o.legacy_renderSubtreeIntoContainer(e, t, i) : o.render(t, i)
            })
        }
        return Bs(o._internalRoot)
    }

    function Ys(e, t) {
        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        return Fs(t) || a("200"),
            function(e, t, n) {
                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                return {
                    $$typeof: Xe,
                    key: null == r ? null : "" + r,
                    children: e,
                    containerInfo: t,
                    implementation: n
                }
            }(e, t, null, n)
    }
    Te = function(e, t, n) {
        switch (t) {
            case "input":
                if (xt(e, n), t = n.name, "radio" === n.type && null != t) {
                    for (n = e; n.parentNode;) n = n.parentNode;
                    for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                        var r = n[t];
                        if (r !== e && r.form === e.form) {
                            var i = B(r);
                            i || a("90"), We(r), xt(r, i)
                        }
                    }
                }
                break;
            case "textarea":
                Qn(e, n);
                break;
            case "select":
                null != (t = n.value) && Xn(e, !!n.multiple, t, !1)
        }
    }, zs.prototype.render = function(e) {
        this._defer || a("250"), this._hasChildren = !0, this._children = e;
        var t = this._root._internalRoot,
            n = this._expirationTime,
            r = new Hs;
        return Is(e, t, null, n, r._onCommit), r
    }, zs.prototype.then = function(e) {
        if (this._didComplete) e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, zs.prototype.commit = function() {
        var e = this._root._internalRoot,
            t = e.firstBatch;
        if (this._defer && null !== t || a("251"), this._hasChildren) {
            var n = this._expirationTime;
            if (t !== this) {
                this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                for (var r = null, i = t; i !== this;) r = i, i = i._next;
                null === r && a("251"), r._next = i._next, this._next = t, e.firstBatch = this
            }
            this._defer = !1, As(e, n), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
        } else this._next = null, this._defer = !1
    }, zs.prototype._onComplete = function() {
        if (!this._didComplete) {
            this._didComplete = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++)(0, e[t])()
        }
    }, Hs.prototype.then = function(e) {
        if (this._didCommit) e();
        else {
            var t = this._callbacks;
            null === t && (t = this._callbacks = []), t.push(e)
        }
    }, Hs.prototype._onCommit = function() {
        if (!this._didCommit) {
            this._didCommit = !0;
            var e = this._callbacks;
            if (null !== e)
                for (var t = 0; t < e.length; t++) {
                    var n = e[t];
                    "function" != typeof n && a("191", n), n()
                }
        }
    }, Ns.prototype.render = function(e, t) {
        var n = this._internalRoot,
            r = new Hs;
        return null !== (t = void 0 === t ? null : t) && r.then(t), Us(e, n, null, r._onCommit), r
    }, Ns.prototype.unmount = function(e) {
        var t = this._internalRoot,
            n = new Hs;
        return null !== (e = void 0 === e ? null : e) && n.then(e), Us(null, t, null, n._onCommit), n
    }, Ns.prototype.legacy_renderSubtreeIntoContainer = function(e, t, n) {
        var r = this._internalRoot,
            i = new Hs;
        return null !== (n = void 0 === n ? null : n) && i.then(n), Us(t, r, e, i._onCommit), i
    }, Ns.prototype.createBatch = function() {
        var e = new zs(this),
            t = e._expirationTime,
            n = this._internalRoot,
            r = n.firstBatch;
        if (null === r) n.firstBatch = e, e._next = null;
        else {
            for (n = null; null !== r && r._expirationTime >= t;) n = r, r = r._next;
            e._next = r, null !== n && (n._next = e)
        }
        return e
    }, Pe = Ds, De = Ls, Me = function() {
        is || 0 === ss || (Ss(ss, !1), ss = 0)
    };
    var qs = {
        createPortal: Ys,
        findDOMNode: function(e) {
            if (null == e) return null;
            if (1 === e.nodeType) return e;
            var t = e._reactInternalFiber;
            return void 0 === t && ("function" == typeof e.render ? a("188") : a("268", Object.keys(e))), e = null === (e = rn(t)) ? null : e.stateNode
        },
        hydrate: function(e, t, n) {
            return Fs(t) || a("200"), Ws(null, e, t, !0, n)
        },
        render: function(e, t, n) {
            return Fs(t) || a("200"), Ws(null, e, t, !1, n)
        },
        unstable_renderSubtreeIntoContainer: function(e, t, n, r) {
            return Fs(n) || a("200"), (null == e || void 0 === e._reactInternalFiber) && a("38"), Ws(e, t, n, !1, r)
        },
        unmountComponentAtNode: function(e) {
            return Fs(e) || a("40"), !!e._reactRootContainer && (Ms(function() {
                Ws(null, null, e, !1, function() {
                    e._reactRootContainer = null
                })
            }), !0)
        },
        unstable_createPortal: function() {
            return Ys.apply(void 0, arguments)
        },
        unstable_batchedUpdates: Ds,
        unstable_interactiveUpdates: Ls,
        flushSync: function(e, t) {
            is && a("187");
            var n = us;
            us = !0;
            try {
                return Za(e, t)
            } finally {
                us = n, Ss(1073741823, !1)
            }
        },
        unstable_createRoot: function(e, t) {
            return Fs(e) || a("299", "unstable_createRoot"), new Ns(e, !0, null != t && !0 === t.hydrate)
        },
        unstable_flushControlled: function(e) {
            var t = us;
            us = !0;
            try {
                Za(e)
            } finally {
                (us = t) || is || Ss(1073741823, !1)
            }
        },
        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
            Events: [I, U, B, A.injectEventPluginsByName, y, Y, function(e) {
                T(e, W)
            }, Re, je, Sn, j]
        }
    };
    ! function(e) {
        var t = e.findFiberByHostInstance;
        (function(e) {
            if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
            var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (t.isDisabled || !t.supportsFiber) return !0;
            try {
                var n = t.inject(e);
                Nr = Wr(function(e) {
                    return t.onCommitFiberRoot(n, e)
                }), Fr = Wr(function(e) {
                    return t.onCommitFiberUnmount(n, e)
                })
            } catch (e) {}
        })(i({}, e, {
            overrideProps: null,
            currentDispatcherRef: Ye.ReactCurrentDispatcher,
            findHostInstanceByFiber: function(e) {
                return null === (e = rn(e)) ? null : e.stateNode
            },
            findFiberByHostInstance: function(e) {
                return t ? t(e) : null
            }
        }))
    }({
        findFiberByHostInstance: L,
        bundleType: 0,
        version: "16.8.3",
        rendererPackageName: "react-dom"
    });
    var $s = {
            default: qs
        },
        Vs = $s && qs || $s;
    e.exports = Vs.default || Vs
}, function(e, t, n) {
    "use strict";
    /** @license React v16.8.3
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r = n(10),
        i = "function" == typeof Symbol && Symbol.for,
        o = i ? Symbol.for("react.element") : 60103,
        a = i ? Symbol.for("react.portal") : 60106,
        s = i ? Symbol.for("react.fragment") : 60107,
        l = i ? Symbol.for("react.strict_mode") : 60108,
        c = i ? Symbol.for("react.profiler") : 60114,
        u = i ? Symbol.for("react.provider") : 60109,
        f = i ? Symbol.for("react.context") : 60110,
        p = i ? Symbol.for("react.concurrent_mode") : 60111,
        d = i ? Symbol.for("react.forward_ref") : 60112,
        h = i ? Symbol.for("react.suspense") : 60113,
        m = i ? Symbol.for("react.memo") : 60115,
        g = i ? Symbol.for("react.lazy") : 60116,
        b = "function" == typeof Symbol && Symbol.iterator;

    function y(e) {
        for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, r = 0; r < t; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
        ! function(e, t, n, r, i, o, a, s) {
            if (!e) {
                if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var l = [n, r, i, o, a, s],
                        c = 0;
                    (e = Error(t.replace(/%s/g, function() {
                        return l[c++]
                    }))).name = "Invariant Violation"
                }
                throw e.framesToPop = 1, e
            }
        }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
    }
    var v = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        },
        _ = {};

    function w(e, t, n) {
        this.props = e, this.context = t, this.refs = _, this.updater = n || v
    }

    function x() {}

    function C(e, t, n) {
        this.props = e, this.context = t, this.refs = _, this.updater = n || v
    }
    w.prototype.isReactComponent = {}, w.prototype.setState = function(e, t) {
        "object" != typeof e && "function" != typeof e && null != e && y("85"), this.updater.enqueueSetState(this, e, t, "setState")
    }, w.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate")
    }, x.prototype = w.prototype;
    var k = C.prototype = new x;
    k.constructor = C, r(k, w.prototype), k.isPureReactComponent = !0;
    var E = {
            current: null
        },
        T = {
            current: null
        },
        O = Object.prototype.hasOwnProperty,
        S = {
            key: !0,
            ref: !0,
            __self: !0,
            __source: !0
        };

    function A(e, t, n) {
        var r = void 0,
            i = {},
            a = null,
            s = null;
        if (null != t)
            for (r in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) O.call(t, r) && !S.hasOwnProperty(r) && (i[r] = t[r]);
        var l = arguments.length - 2;
        if (1 === l) i.children = n;
        else if (1 < l) {
            for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
            i.children = c
        }
        if (e && e.defaultProps)
            for (r in l = e.defaultProps) void 0 === i[r] && (i[r] = l[r]);
        return {
            $$typeof: o,
            type: e,
            key: a,
            ref: s,
            props: i,
            _owner: T.current
        }
    }

    function R(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
    }
    var j = /\/+/g,
        P = [];

    function D(e, t, n, r) {
        if (P.length) {
            var i = P.pop();
            return i.result = e, i.keyPrefix = t, i.func = n, i.context = r, i.count = 0, i
        }
        return {
            result: e,
            keyPrefix: t,
            func: n,
            context: r,
            count: 0
        }
    }

    function M(e) {
        e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > P.length && P.push(e)
    }

    function L(e, t, n) {
        return null == e ? 0 : function e(t, n, r, i) {
            var s = typeof t;
            "undefined" !== s && "boolean" !== s || (t = null);
            var l = !1;
            if (null === t) l = !0;
            else switch (s) {
                case "string":
                case "number":
                    l = !0;
                    break;
                case "object":
                    switch (t.$$typeof) {
                        case o:
                        case a:
                            l = !0
                    }
            }
            if (l) return r(i, t, "" === n ? "." + I(t, 0) : n), 1;
            if (l = 0, n = "" === n ? "." : n + ":", Array.isArray(t))
                for (var c = 0; c < t.length; c++) {
                    var u = n + I(s = t[c], c);
                    l += e(s, u, r, i)
                } else if (u = null === t || "object" != typeof t ? null : "function" == typeof(u = b && t[b] || t["@@iterator"]) ? u : null, "function" == typeof u)
                    for (t = u.call(t), c = 0; !(s = t.next()).done;) l += e(s = s.value, u = n + I(s, c++), r, i);
                else "object" === s && y("31", "[object Object]" == (r = "" + t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : r, "");
            return l
        }(e, "", t, n)
    }

    function I(e, t) {
        return "object" == typeof e && null !== e && null != e.key ? function(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + ("" + e).replace(/[=:]/g, function(e) {
                return t[e]
            })
        }(e.key) : t.toString(36)
    }

    function U(e, t) {
        e.func.call(e.context, t, e.count++)
    }

    function B(e, t, n) {
        var r = e.result,
            i = e.keyPrefix;
        e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? z(e, r, n, function(e) {
            return e
        }) : null != e && (R(e) && (e = function(e, t) {
            return {
                $$typeof: o,
                type: e.type,
                key: t,
                ref: e.ref,
                props: e.props,
                _owner: e._owner
            }
        }(e, i + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(j, "$&/") + "/") + n)), r.push(e))
    }

    function z(e, t, n, r, i) {
        var o = "";
        null != n && (o = ("" + n).replace(j, "$&/") + "/"), L(e, B, t = D(t, o, r, i)), M(t)
    }

    function H() {
        var e = E.current;
        return null === e && y("307"), e
    }
    var N = {
            Children: {
                map: function(e, t, n) {
                    if (null == e) return e;
                    var r = [];
                    return z(e, r, null, t, n), r
                },
                forEach: function(e, t, n) {
                    if (null == e) return e;
                    L(e, U, t = D(null, null, t, n)), M(t)
                },
                count: function(e) {
                    return L(e, function() {
                        return null
                    }, null)
                },
                toArray: function(e) {
                    var t = [];
                    return z(e, t, null, function(e) {
                        return e
                    }), t
                },
                only: function(e) {
                    return R(e) || y("143"), e
                }
            },
            createRef: function() {
                return {
                    current: null
                }
            },
            Component: w,
            PureComponent: C,
            createContext: function(e, t) {
                return void 0 === t && (t = null), (e = {
                    $$typeof: f,
                    _calculateChangedBits: t,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null
                }).Provider = {
                    $$typeof: u,
                    _context: e
                }, e.Consumer = e
            },
            forwardRef: function(e) {
                return {
                    $$typeof: d,
                    render: e
                }
            },
            lazy: function(e) {
                return {
                    $$typeof: g,
                    _ctor: e,
                    _status: -1,
                    _result: null
                }
            },
            memo: function(e, t) {
                return {
                    $$typeof: m,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            },
            useCallback: function(e, t) {
                return H().useCallback(e, t)
            },
            useContext: function(e, t) {
                return H().useContext(e, t)
            },
            useEffect: function(e, t) {
                return H().useEffect(e, t)
            },
            useImperativeHandle: function(e, t, n) {
                return H().useImperativeHandle(e, t, n)
            },
            useDebugValue: function() {},
            useLayoutEffect: function(e, t) {
                return H().useLayoutEffect(e, t)
            },
            useMemo: function(e, t) {
                return H().useMemo(e, t)
            },
            useReducer: function(e, t, n) {
                return H().useReducer(e, t, n)
            },
            useRef: function(e) {
                return H().useRef(e)
            },
            useState: function(e) {
                return H().useState(e)
            },
            Fragment: s,
            StrictMode: l,
            Suspense: h,
            createElement: A,
            cloneElement: function(e, t, n) {
                null == e && y("267", e);
                var i = void 0,
                    a = r({}, e.props),
                    s = e.key,
                    l = e.ref,
                    c = e._owner;
                if (null != t) {
                    void 0 !== t.ref && (l = t.ref, c = T.current), void 0 !== t.key && (s = "" + t.key);
                    var u = void 0;
                    for (i in e.type && e.type.defaultProps && (u = e.type.defaultProps), t) O.call(t, i) && !S.hasOwnProperty(i) && (a[i] = void 0 === t[i] && void 0 !== u ? u[i] : t[i])
                }
                if (1 === (i = arguments.length - 2)) a.children = n;
                else if (1 < i) {
                    u = Array(i);
                    for (var f = 0; f < i; f++) u[f] = arguments[f + 2];
                    a.children = u
                }
                return {
                    $$typeof: o,
                    type: e.type,
                    key: s,
                    ref: l,
                    props: a,
                    _owner: c
                }
            },
            createFactory: function(e) {
                var t = A.bind(null, e);
                return t.type = e, t
            },
            isValidElement: R,
            version: "16.8.3",
            unstable_ConcurrentMode: p,
            unstable_Profiler: c,
            __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                ReactCurrentDispatcher: E,
                ReactCurrentOwner: T,
                assign: r
            }
        },
        F = {
            default: N
        },
        W = F && N || F;
    e.exports = W.default || W
}, function(e, t, n) {
    "use strict";
    e.exports = n(21)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        /** @license React v0.13.3
         * scheduler.production.min.js
         *
         * Copyright (c) Facebook, Inc. and its affiliates.
         *
         * This source code is licensed under the MIT license found in the
         * LICENSE file in the root directory of this source tree.
         */
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = null,
            r = !1,
            i = 3,
            o = -1,
            a = -1,
            s = !1,
            l = !1;

        function c() {
            if (!s) {
                var e = n.expirationTime;
                l ? C() : l = !0, x(p, e)
            }
        }

        function u() {
            var e = n,
                t = n.next;
            if (n === t) n = null;
            else {
                var r = n.previous;
                n = r.next = t, t.previous = r
            }
            e.next = e.previous = null, r = e.callback, t = e.expirationTime, e = e.priorityLevel;
            var o = i,
                s = a;
            i = e, a = t;
            try {
                var l = r()
            } finally {
                i = o, a = s
            }
            if ("function" == typeof l)
                if (l = {
                        callback: l,
                        priorityLevel: e,
                        expirationTime: t,
                        next: null,
                        previous: null
                    }, null === n) n = l.next = l.previous = l;
                else {
                    r = null, e = n;
                    do {
                        if (e.expirationTime >= t) {
                            r = e;
                            break
                        }
                        e = e.next
                    } while (e !== n);
                    null === r ? r = n : r === n && (n = l, c()), (t = r.previous).next = r.previous = l, l.next = r, l.previous = t
                }
        }

        function f() {
            if (-1 === o && null !== n && 1 === n.priorityLevel) {
                s = !0;
                try {
                    do {
                        u()
                    } while (null !== n && 1 === n.priorityLevel)
                } finally {
                    s = !1, null !== n ? c() : l = !1
                }
            }
        }

        function p(e) {
            s = !0;
            var i = r;
            r = e;
            try {
                if (e)
                    for (; null !== n;) {
                        var o = t.unstable_now();
                        if (!(n.expirationTime <= o)) break;
                        do {
                            u()
                        } while (null !== n && n.expirationTime <= o)
                    } else if (null !== n)
                        do {
                            u()
                        } while (null !== n && !k())
            } finally {
                s = !1, r = i, null !== n ? c() : l = !1, f()
            }
        }
        var d, h, m = Date,
            g = "function" == typeof setTimeout ? setTimeout : void 0,
            b = "function" == typeof clearTimeout ? clearTimeout : void 0,
            y = "function" == typeof requestAnimationFrame ? requestAnimationFrame : void 0,
            v = "function" == typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

        function _(e) {
            d = y(function(t) {
                b(h), e(t)
            }), h = g(function() {
                v(d), e(t.unstable_now())
            }, 100)
        }
        if ("object" == typeof performance && "function" == typeof performance.now) {
            var w = performance;
            t.unstable_now = function() {
                return w.now()
            }
        } else t.unstable_now = function() {
            return m.now()
        };
        var x, C, k, E = null;
        if ("undefined" != typeof window ? E = window : void 0 !== e && (E = e), E && E._schedMock) {
            var T = E._schedMock;
            x = T[0], C = T[1], k = T[2], t.unstable_now = T[3]
        } else if ("undefined" == typeof window || "function" != typeof MessageChannel) {
            var O = null,
                S = function(e) {
                    if (null !== O) try {
                        O(e)
                    } finally {
                        O = null
                    }
                };
            x = function(e) {
                null !== O ? setTimeout(x, 0, e) : (O = e, setTimeout(S, 0, !1))
            }, C = function() {
                O = null
            }, k = function() {
                return !1
            }
        } else {
            "undefined" != typeof console && ("function" != typeof y && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" != typeof v && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
            var A = null,
                R = !1,
                j = -1,
                P = !1,
                D = !1,
                M = 0,
                L = 33,
                I = 33;
            k = function() {
                return M <= t.unstable_now()
            };
            var U = new MessageChannel,
                B = U.port2;
            U.port1.onmessage = function() {
                R = !1;
                var e = A,
                    n = j;
                A = null, j = -1;
                var r = t.unstable_now(),
                    i = !1;
                if (0 >= M - r) {
                    if (!(-1 !== n && n <= r)) return P || (P = !0, _(z)), A = e, void(j = n);
                    i = !0
                }
                if (null !== e) {
                    D = !0;
                    try {
                        e(i)
                    } finally {
                        D = !1
                    }
                }
            };
            var z = function(e) {
                if (null !== A) {
                    _(z);
                    var t = e - M + I;
                    t < I && L < I ? (8 > t && (t = 8), I = t < L ? L : t) : L = t, M = e + I, R || (R = !0, B.postMessage(void 0))
                } else P = !1
            };
            x = function(e, t) {
                A = e, j = t, D || 0 > t ? B.postMessage(void 0) : P || (P = !0, _(z))
            }, C = function() {
                A = null, R = !1, j = -1
            }
        }
        t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, n) {
            switch (e) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    e = 3
            }
            var r = i,
                a = o;
            i = e, o = t.unstable_now();
            try {
                return n()
            } finally {
                i = r, o = a, f()
            }
        }, t.unstable_next = function(e) {
            switch (i) {
                case 1:
                case 2:
                case 3:
                    var n = 3;
                    break;
                default:
                    n = i
            }
            var r = i,
                a = o;
            i = n, o = t.unstable_now();
            try {
                return e()
            } finally {
                i = r, o = a, f()
            }
        }, t.unstable_scheduleCallback = function(e, r) {
            var a = -1 !== o ? o : t.unstable_now();
            if ("object" == typeof r && null !== r && "number" == typeof r.timeout) r = a + r.timeout;
            else switch (i) {
                case 1:
                    r = a + -1;
                    break;
                case 2:
                    r = a + 250;
                    break;
                case 5:
                    r = a + 1073741823;
                    break;
                case 4:
                    r = a + 1e4;
                    break;
                default:
                    r = a + 5e3
            }
            if (e = {
                    callback: e,
                    priorityLevel: i,
                    expirationTime: r,
                    next: null,
                    previous: null
                }, null === n) n = e.next = e.previous = e, c();
            else {
                a = null;
                var s = n;
                do {
                    if (s.expirationTime > r) {
                        a = s;
                        break
                    }
                    s = s.next
                } while (s !== n);
                null === a ? a = n : a === n && (n = e, c()), (r = a.previous).next = a.previous = e, e.next = a, e.previous = r
            }
            return e
        }, t.unstable_cancelCallback = function(e) {
            var t = e.next;
            if (null !== t) {
                if (t === e) n = null;
                else {
                    e === n && (n = t);
                    var r = e.previous;
                    r.next = t, t.previous = r
                }
                e.next = e.previous = null
            }
        }, t.unstable_wrapCallback = function(e) {
            var n = i;
            return function() {
                var r = i,
                    a = o;
                i = n, o = t.unstable_now();
                try {
                    return e.apply(this, arguments)
                } finally {
                    i = r, o = a, f()
                }
            }
        }, t.unstable_getCurrentPriorityLevel = function() {
            return i
        }, t.unstable_shouldYield = function() {
            return !r && (null !== n && n.expirationTime < a || k())
        }, t.unstable_continueExecution = function() {
            null !== n && c()
        }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
            return n
        }
    }).call(this, n(11))
}, function(e, t) {
    var n, r, i = e.exports = {};

    function o() {
        throw new Error("setTimeout has not been defined")
    }

    function a() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (n === setTimeout) return setTimeout(e, 0);
        if ((n === o || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
        try {
            return n(e, 0)
        } catch (t) {
            try {
                return n.call(null, e, 0)
            } catch (t) {
                return n.call(this, e, 0)
            }
        }
    }! function() {
        try {
            n = "function" == typeof setTimeout ? setTimeout : o
        } catch (e) {
            n = o
        }
        try {
            r = "function" == typeof clearTimeout ? clearTimeout : a
        } catch (e) {
            r = a
        }
    }();
    var l, c = [],
        u = !1,
        f = -1;

    function p() {
        u && l && (u = !1, l.length ? c = l.concat(c) : f = -1, c.length && d())
    }

    function d() {
        if (!u) {
            var e = s(p);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++f < t;) l && l[f].run();
                f = -1, t = c.length
            }
            l = null, u = !1,
                function(e) {
                    if (r === clearTimeout) return clearTimeout(e);
                    if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                    try {
                        r(e)
                    } catch (t) {
                        try {
                            return r.call(null, e)
                        } catch (t) {
                            return r.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function h(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    i.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        c.push(new h(e, t)), 1 !== c.length || u || s(d)
    }, h.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = m, i.addListener = m, i.once = m, i.off = m, i.removeListener = m, i.removeAllListeners = m, i.emit = m, i.prependListener = m, i.prependOnceListener = m, i.listeners = function(e) {
        return []
    }, i.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, i.cwd = function() {
        return "/"
    }, i.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, i.umask = function() {
        return 0
    }
}, function(e, t, n) {
    "use strict";
    /** @license React v16.8.6
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && Symbol.for,
        i = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        s = r ? Symbol.for("react.strict_mode") : 60108,
        l = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        f = r ? Symbol.for("react.async_mode") : 60111,
        p = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        m = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116;

    function b(e) {
        if ("object" == typeof e && null !== e) {
            var t = e.$$typeof;
            switch (t) {
                case i:
                    switch (e = e.type) {
                        case f:
                        case p:
                        case a:
                        case l:
                        case s:
                        case h:
                            return e;
                        default:
                            switch (e = e && e.$$typeof) {
                                case u:
                                case d:
                                case c:
                                    return e;
                                default:
                                    return t
                            }
                    }
                case g:
                case m:
                case o:
                    return t
            }
        }
    }

    function y(e) {
        return b(e) === p
    }
    t.typeOf = b, t.AsyncMode = f, t.ConcurrentMode = p, t.ContextConsumer = u, t.ContextProvider = c, t.Element = i, t.ForwardRef = d, t.Fragment = a, t.Lazy = g, t.Memo = m, t.Portal = o, t.Profiler = l, t.StrictMode = s, t.Suspense = h, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === p || e === l || e === s || e === h || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === d)
    }, t.isAsyncMode = function(e) {
        return y(e) || b(e) === f
    }, t.isConcurrentMode = y, t.isContextConsumer = function(e) {
        return b(e) === u
    }, t.isContextProvider = function(e) {
        return b(e) === c
    }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === i
    }, t.isForwardRef = function(e) {
        return b(e) === d
    }, t.isFragment = function(e) {
        return b(e) === a
    }, t.isLazy = function(e) {
        return b(e) === g
    }, t.isMemo = function(e) {
        return b(e) === m
    }, t.isPortal = function(e) {
        return b(e) === o
    }, t.isProfiler = function(e) {
        return b(e) === l
    }, t.isStrictMode = function(e) {
        return b(e) === s
    }, t.isSuspense = function(e) {
        return b(e) === h
    }
}, function(e, t, n) {
    e.exports = n(25)()
}, function(e, t, n) {
    "use strict";
    var r = n(26);

    function i() {}
    e.exports = function() {
        function e(e, t, n, i, o, a) {
            if (a !== r) {
                var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw s.name = "Invariant Violation", s
            }
        }

        function t() {
            return e
        }
        e.isRequired = e;
        var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t
        };
        return n.checkPropTypes = i, n.PropTypes = n, n
    }
}, function(e, t, n) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
}, function(e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
        var r = new Uint8Array(16);
        e.exports = function() {
            return n(r), r
        }
    } else {
        var i = new Array(16);
        e.exports = function() {
            for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), i[t] = e >>> ((3 & t) << 3) & 255;
            return i
        }
    }
}, function(e, t) {
    for (var n = [], r = 0; r < 256; ++r) n[r] = (r + 256).toString(16).substr(1);
    e.exports = function(e, t) {
        var r = t || 0,
            i = n;
        return [i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], "-", i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]], i[e[r++]]].join("")
    }
}, function(module, exports, __webpack_require__) {
    "use strict";
    (function(Buffer) {
        const toBytes = e => [...e].map(e => e.charCodeAt(0)),
            xpiZipFilename = toBytes("META-INF/mozilla.rsa"),
            oxmlContentTypes = toBytes("[Content_Types].xml"),
            oxmlRels = toBytes("_rels/.rels");

        function readUInt64LE(e, t = 0) {
            let n = e[t],
                r = 1,
                i = 0;
            for (; ++i < 8;) r *= 256, n += e[t + i] * r;
            return n
        }
        const fileType = e => {
            if (!(e instanceof Uint8Array || e instanceof ArrayBuffer || Buffer.isBuffer(e))) throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`Buffer\` or \`ArrayBuffer\`, got \`${typeof e}\``);
            const t = e instanceof Uint8Array ? e : new Uint8Array(e);
            if (!(t && t.length > 1)) return null;
            const n = (e, n) => {
                    n = Object.assign({
                        offset: 0
                    }, n);
                    for (let r = 0; r < e.length; r++)
                        if (n.mask) {
                            if (e[r] !== (n.mask[r] & t[r + n.offset])) return !1
                        } else if (e[r] !== t[r + n.offset]) return !1;
                    return !0
                },
                r = (e, t) => n(toBytes(e), t);
            if (n([255, 216, 255])) return {
                ext: "jpg",
                mime: "image/jpeg"
            };
            if (n([137, 80, 78, 71, 13, 10, 26, 10])) return {
                ext: "png",
                mime: "image/png"
            };
            if (n([71, 73, 70])) return {
                ext: "gif",
                mime: "image/gif"
            };
            if (n([87, 69, 66, 80], {
                    offset: 8
                })) return {
                ext: "webp",
                mime: "image/webp"
            };
            if (n([70, 76, 73, 70])) return {
                ext: "flif",
                mime: "image/flif"
            };
            if ((n([73, 73, 42, 0]) || n([77, 77, 0, 42])) && n([67, 82], {
                    offset: 8
                })) return {
                ext: "cr2",
                mime: "image/x-canon-cr2"
            };
            if (n([73, 73, 42, 0]) || n([77, 77, 0, 42])) return {
                ext: "tif",
                mime: "image/tiff"
            };
            if (n([66, 77])) return {
                ext: "bmp",
                mime: "image/bmp"
            };
            if (n([73, 73, 188])) return {
                ext: "jxr",
                mime: "image/vnd.ms-photo"
            };
            if (n([56, 66, 80, 83])) return {
                ext: "psd",
                mime: "image/vnd.adobe.photoshop"
            };
            if (n([80, 75, 3, 4])) {
                if (n([109, 105, 109, 101, 116, 121, 112, 101, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 101, 112, 117, 98, 43, 122, 105, 112], {
                        offset: 30
                    })) return {
                    ext: "epub",
                    mime: "application/epub+zip"
                };
                if (n(xpiZipFilename, {
                        offset: 30
                    })) return {
                    ext: "xpi",
                    mime: "application/x-xpinstall"
                };
                if (r("mimetypeapplication/vnd.oasis.opendocument.text", {
                        offset: 30
                    })) return {
                    ext: "odt",
                    mime: "application/vnd.oasis.opendocument.text"
                };
                if (r("mimetypeapplication/vnd.oasis.opendocument.spreadsheet", {
                        offset: 30
                    })) return {
                    ext: "ods",
                    mime: "application/vnd.oasis.opendocument.spreadsheet"
                };
                if (r("mimetypeapplication/vnd.oasis.opendocument.presentation", {
                        offset: 30
                    })) return {
                    ext: "odp",
                    mime: "application/vnd.oasis.opendocument.presentation"
                };
                const e = (e, t = 0) => e.findIndex((e, n, r) => n >= t && 80 === r[n] && 75 === r[n + 1] && 3 === r[n + 2] && 4 === r[n + 3]);
                let i = 0,
                    o = !1,
                    a = null;
                do {
                    const s = i + 30;
                    if (o || (o = n(oxmlContentTypes, {
                            offset: s
                        }) || n(oxmlRels, {
                            offset: s
                        })), a || (r("word/", {
                            offset: s
                        }) ? a = {
                            ext: "docx",
                            mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        } : r("ppt/", {
                            offset: s
                        }) ? a = {
                            ext: "pptx",
                            mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
                        } : r("xl/", {
                            offset: s
                        }) && (a = {
                            ext: "xlsx",
                            mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        })), o && a) return a;
                    i = e(t, s)
                } while (i >= 0);
                if (a) return a
            }
            if (n([80, 75]) && (3 === t[2] || 5 === t[2] || 7 === t[2]) && (4 === t[3] || 6 === t[3] || 8 === t[3])) return {
                ext: "zip",
                mime: "application/zip"
            };
            if (n([117, 115, 116, 97, 114], {
                    offset: 257
                })) return {
                ext: "tar",
                mime: "application/x-tar"
            };
            if (n([82, 97, 114, 33, 26, 7]) && (0 === t[6] || 1 === t[6])) return {
                ext: "rar",
                mime: "application/x-rar-compressed"
            };
            if (n([31, 139, 8])) return {
                ext: "gz",
                mime: "application/gzip"
            };
            if (n([66, 90, 104])) return {
                ext: "bz2",
                mime: "application/x-bzip2"
            };
            if (n([55, 122, 188, 175, 39, 28])) return {
                ext: "7z",
                mime: "application/x-7z-compressed"
            };
            if (n([120, 1])) return {
                ext: "dmg",
                mime: "application/x-apple-diskimage"
            };
            if (n([51, 103, 112, 53]) || n([0, 0, 0]) && n([102, 116, 121, 112], {
                    offset: 4
                }) && (n([109, 112, 52, 49], {
                    offset: 8
                }) || n([109, 112, 52, 50], {
                    offset: 8
                }) || n([105, 115, 111, 109], {
                    offset: 8
                }) || n([105, 115, 111, 50], {
                    offset: 8
                }) || n([109, 109, 112, 52], {
                    offset: 8
                }) || n([77, 52, 86], {
                    offset: 8
                }) || n([100, 97, 115, 104], {
                    offset: 8
                }))) return {
                ext: "mp4",
                mime: "video/mp4"
            };
            if (n([77, 84, 104, 100])) return {
                ext: "mid",
                mime: "audio/midi"
            };
            if (n([26, 69, 223, 163])) {
                const e = t.subarray(4, 4100),
                    n = e.findIndex((e, t, n) => 66 === n[t] && 130 === n[t + 1]);
                if (-1 !== n) {
                    const t = n + 3,
                        r = n => [...n].every((n, r) => e[t + r] === n.charCodeAt(0));
                    if (r("matroska")) return {
                        ext: "mkv",
                        mime: "video/x-matroska"
                    };
                    if (r("webm")) return {
                        ext: "webm",
                        mime: "video/webm"
                    }
                }
            }
            if (n([0, 0, 0, 20, 102, 116, 121, 112, 113, 116, 32, 32]) || n([102, 114, 101, 101], {
                    offset: 4
                }) || n([102, 116, 121, 112, 113, 116, 32, 32], {
                    offset: 4
                }) || n([109, 100, 97, 116], {
                    offset: 4
                }) || n([109, 111, 111, 118], {
                    offset: 4
                }) || n([119, 105, 100, 101], {
                    offset: 4
                })) return {
                ext: "mov",
                mime: "video/quicktime"
            };
            if (n([82, 73, 70, 70])) {
                if (n([65, 86, 73], {
                        offset: 8
                    })) return {
                    ext: "avi",
                    mime: "video/vnd.avi"
                };
                if (n([87, 65, 86, 69], {
                        offset: 8
                    })) return {
                    ext: "wav",
                    mime: "audio/vnd.wave"
                };
                if (n([81, 76, 67, 77], {
                        offset: 8
                    })) return {
                    ext: "qcp",
                    mime: "audio/qcelp"
                }
            }
            if (n([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
                let e = 30;
                do {
                    const r = readUInt64LE(t, e + 16);
                    if (n([145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101], {
                            offset: e
                        })) {
                        if (n([64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {
                                offset: e + 24
                            })) return {
                            ext: "wma",
                            mime: "audio/x-ms-wma"
                        };
                        if (n([192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43], {
                                offset: e + 24
                            })) return {
                            ext: "wmv",
                            mime: "video/x-ms-asf"
                        };
                        break
                    }
                    e += r
                } while (e + 24 <= t.length);
                return {
                    ext: "asf",
                    mime: "application/vnd.ms-asf"
                }
            }
            if (n([0, 0, 1, 186]) || n([0, 0, 1, 179])) return {
                ext: "mpg",
                mime: "video/mpeg"
            };
            if (n([102, 116, 121, 112, 51, 103], {
                    offset: 4
                })) return {
                ext: "3gp",
                mime: "video/3gpp"
            };
            for (let e = 0; e < 2 && e < t.length - 16; e++) {
                if (n([73, 68, 51], {
                        offset: e
                    }) || n([255, 226], {
                        offset: e,
                        mask: [255, 226]
                    })) return {
                    ext: "mp3",
                    mime: "audio/mpeg"
                };
                if (n([255, 228], {
                        offset: e,
                        mask: [255, 228]
                    })) return {
                    ext: "mp2",
                    mime: "audio/mpeg"
                };
                if (n([255, 248], {
                        offset: e,
                        mask: [255, 252]
                    })) return {
                    ext: "mp2",
                    mime: "audio/mpeg"
                };
                if (n([255, 240], {
                        offset: e,
                        mask: [255, 252]
                    })) return {
                    ext: "mp4",
                    mime: "audio/mpeg"
                }
            }
            if (n([102, 116, 121, 112, 77, 52, 65], {
                    offset: 4
                })) return {
                ext: "m4a",
                mime: "audio/mp4"
            };
            if (n([79, 112, 117, 115, 72, 101, 97, 100], {
                    offset: 28
                })) return {
                ext: "opus",
                mime: "audio/opus"
            };
            if (n([79, 103, 103, 83])) return n([128, 116, 104, 101, 111, 114, 97], {
                offset: 28
            }) ? {
                ext: "ogv",
                mime: "video/ogg"
            } : n([1, 118, 105, 100, 101, 111, 0], {
                offset: 28
            }) ? {
                ext: "ogm",
                mime: "video/ogg"
            } : n([127, 70, 76, 65, 67], {
                offset: 28
            }) ? {
                ext: "oga",
                mime: "audio/ogg"
            } : n([83, 112, 101, 101, 120, 32, 32], {
                offset: 28
            }) ? {
                ext: "spx",
                mime: "audio/ogg"
            } : n([1, 118, 111, 114, 98, 105, 115], {
                offset: 28
            }) ? {
                ext: "ogg",
                mime: "audio/ogg"
            } : {
                ext: "ogx",
                mime: "application/ogg"
            };
            if (n([102, 76, 97, 67])) return {
                ext: "flac",
                mime: "audio/x-flac"
            };
            if (n([77, 65, 67, 32])) return {
                ext: "ape",
                mime: "audio/ape"
            };
            if (n([119, 118, 112, 107])) return {
                ext: "wv",
                mime: "audio/wavpack"
            };
            if (n([35, 33, 65, 77, 82, 10])) return {
                ext: "amr",
                mime: "audio/amr"
            };
            if (n([37, 80, 68, 70])) return {
                ext: "pdf",
                mime: "application/pdf"
            };
            if (n([77, 90])) return {
                ext: "exe",
                mime: "application/x-msdownload"
            };
            if ((67 === t[0] || 70 === t[0]) && n([87, 83], {
                    offset: 1
                })) return {
                ext: "swf",
                mime: "application/x-shockwave-flash"
            };
            if (n([123, 92, 114, 116, 102])) return {
                ext: "rtf",
                mime: "application/rtf"
            };
            if (n([0, 97, 115, 109])) return {
                ext: "wasm",
                mime: "application/wasm"
            };
            if (n([119, 79, 70, 70]) && (n([0, 1, 0, 0], {
                    offset: 4
                }) || n([79, 84, 84, 79], {
                    offset: 4
                }))) return {
                ext: "woff",
                mime: "font/woff"
            };
            if (n([119, 79, 70, 50]) && (n([0, 1, 0, 0], {
                    offset: 4
                }) || n([79, 84, 84, 79], {
                    offset: 4
                }))) return {
                ext: "woff2",
                mime: "font/woff2"
            };
            if (n([76, 80], {
                    offset: 34
                }) && (n([0, 0, 1], {
                    offset: 8
                }) || n([1, 0, 2], {
                    offset: 8
                }) || n([2, 0, 2], {
                    offset: 8
                }))) return {
                ext: "eot",
                mime: "application/vnd.ms-fontobject"
            };
            if (n([0, 1, 0, 0, 0])) return {
                ext: "ttf",
                mime: "font/ttf"
            };
            if (n([79, 84, 84, 79, 0])) return {
                ext: "otf",
                mime: "font/otf"
            };
            if (n([0, 0, 1, 0])) return {
                ext: "ico",
                mime: "image/x-icon"
            };
            if (n([0, 0, 2, 0])) return {
                ext: "cur",
                mime: "image/x-icon"
            };
            if (n([70, 76, 86, 1])) return {
                ext: "flv",
                mime: "video/x-flv"
            };
            if (n([37, 33])) return {
                ext: "ps",
                mime: "application/postscript"
            };
            if (n([253, 55, 122, 88, 90, 0])) return {
                ext: "xz",
                mime: "application/x-xz"
            };
            if (n([83, 81, 76, 105])) return {
                ext: "sqlite",
                mime: "application/x-sqlite3"
            };
            if (n([78, 69, 83, 26])) return {
                ext: "nes",
                mime: "application/x-nintendo-nes-rom"
            };
            if (n([67, 114, 50, 52])) return {
                ext: "crx",
                mime: "application/x-google-chrome-extension"
            };
            if (n([77, 83, 67, 70]) || n([73, 83, 99, 40])) return {
                ext: "cab",
                mime: "application/vnd.ms-cab-compressed"
            };
            if (n([33, 60, 97, 114, 99, 104, 62, 10, 100, 101, 98, 105, 97, 110, 45, 98, 105, 110, 97, 114, 121])) return {
                ext: "deb",
                mime: "application/x-deb"
            };
            if (n([33, 60, 97, 114, 99, 104, 62])) return {
                ext: "ar",
                mime: "application/x-unix-archive"
            };
            if (n([237, 171, 238, 219])) return {
                ext: "rpm",
                mime: "application/x-rpm"
            };
            if (n([31, 160]) || n([31, 157])) return {
                ext: "Z",
                mime: "application/x-compress"
            };
            if (n([76, 90, 73, 80])) return {
                ext: "lz",
                mime: "application/x-lzip"
            };
            if (n([208, 207, 17, 224, 161, 177, 26, 225])) return {
                ext: "msi",
                mime: "application/x-msi"
            };
            if (n([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) return {
                ext: "mxf",
                mime: "application/mxf"
            };
            if (n([71], {
                    offset: 4
                }) && (n([71], {
                    offset: 192
                }) || n([71], {
                    offset: 196
                }))) return {
                ext: "mts",
                mime: "video/mp2t"
            };
            if (n([66, 76, 69, 78, 68, 69, 82])) return {
                ext: "blend",
                mime: "application/x-blender"
            };
            if (n([66, 80, 71, 251])) return {
                ext: "bpg",
                mime: "image/bpg"
            };
            if (n([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
                if (n([106, 112, 50, 32], {
                        offset: 20
                    })) return {
                    ext: "jp2",
                    mime: "image/jp2"
                };
                if (n([106, 112, 120, 32], {
                        offset: 20
                    })) return {
                    ext: "jpx",
                    mime: "image/jpx"
                };
                if (n([106, 112, 109, 32], {
                        offset: 20
                    })) return {
                    ext: "jpm",
                    mime: "image/jpm"
                };
                if (n([109, 106, 112, 50], {
                        offset: 20
                    })) return {
                    ext: "mj2",
                    mime: "image/mj2"
                }
            }
            if (n([70, 79, 82, 77])) return {
                ext: "aif",
                mime: "audio/aiff"
            };
            if (r("<?xml ")) return {
                ext: "xml",
                mime: "application/xml"
            };
            if (n([66, 79, 79, 75, 77, 79, 66, 73], {
                    offset: 60
                })) return {
                ext: "mobi",
                mime: "application/x-mobipocket-ebook"
            };
            if (n([102, 116, 121, 112], {
                    offset: 4
                })) {
                if (n([109, 105, 102, 49], {
                        offset: 8
                    })) return {
                    ext: "heic",
                    mime: "image/heif"
                };
                if (n([109, 115, 102, 49], {
                        offset: 8
                    })) return {
                    ext: "heic",
                    mime: "image/heif-sequence"
                };
                if (n([104, 101, 105, 99], {
                        offset: 8
                    }) || n([104, 101, 105, 120], {
                        offset: 8
                    })) return {
                    ext: "heic",
                    mime: "image/heic"
                };
                if (n([104, 101, 118, 99], {
                        offset: 8
                    }) || n([104, 101, 118, 120], {
                        offset: 8
                    })) return {
                    ext: "heic",
                    mime: "image/heic-sequence"
                }
            }
            return n([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10]) ? {
                ext: "ktx",
                mime: "image/ktx"
            } : n([68, 73, 67, 77], {
                offset: 128
            }) ? {
                ext: "dcm",
                mime: "application/dicom"
            } : n([77, 80, 43]) ? {
                ext: "mpc",
                mime: "audio/x-musepack"
            } : n([77, 80, 67, 75]) ? {
                ext: "mpc",
                mime: "audio/x-musepack"
            } : n([66, 69, 71, 73, 78, 58]) ? {
                ext: "ics",
                mime: "text/calendar"
            } : n([103, 108, 84, 70, 2, 0, 0, 0]) ? {
                ext: "glb",
                mime: "model/gltf-binary"
            } : n([212, 195, 178, 161]) || n([161, 178, 195, 212]) ? {
                ext: "pcap",
                mime: "application/vnd.tcpdump.pcap"
            } : null
        };
        module.exports = fileType, module.exports.default = fileType, Object.defineProperty(fileType, "minimumBytes", {
            value: 4100
        }), module.exports.stream = (readableStream => new Promise((resolve, reject) => {
            const stream = eval("require")("stream");
            readableStream.once("readable", () => {
                const e = new stream.PassThrough,
                    t = readableStream.read(module.exports.minimumBytes) || readableStream.read();
                try {
                    e.fileType = fileType(t)
                } catch (e) {
                    reject(e)
                }
                readableStream.unshift(t), stream.pipeline ? resolve(stream.pipeline(readableStream, e, () => {})) : resolve(readableStream.pipe(e))
            })
        }))
    }).call(this, __webpack_require__(30).Buffer)
}, function(e, t, n) {
    "use strict";
    (function(e) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
         * @license  MIT
         */
        var r = n(31),
            i = n(32),
            o = n(33);

        function a() {
            return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
        }

        function s(e, t) {
            if (a() < t) throw new RangeError("Invalid typed array length");
            return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
        }

        function l(e, t, n) {
            if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, n);
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                return f(this, e)
            }
            return c(this, e, t, n)
        }

        function c(e, t, n, r) {
            if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
            return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function(e, t, n, r) {
                if (t.byteLength, n < 0 || t.byteLength < n) throw new RangeError("'offset' is out of bounds");
                if (t.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, n) : new Uint8Array(t, n, r);
                l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = p(e, t);
                return e
            }(e, t, n, r) : "string" == typeof t ? function(e, t, n) {
                "string" == typeof n && "" !== n || (n = "utf8");
                if (!l.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                var r = 0 | h(t, n),
                    i = (e = s(e, r)).write(t, n);
                i !== r && (e = e.slice(0, i));
                return e
            }(e, t, n) : function(e, t) {
                if (l.isBuffer(t)) {
                    var n = 0 | d(t.length);
                    return 0 === (e = s(e, n)).length ? e : (t.copy(e, 0, 0, n), e)
                }
                if (t) {
                    if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (r = t.length) != r ? s(e, 0) : p(e, t);
                    if ("Buffer" === t.type && o(t.data)) return p(e, t.data)
                }
                var r;
                throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
            }(e, t)
        }

        function u(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
            if (e < 0) throw new RangeError('"size" argument must not be negative')
        }

        function f(e, t) {
            if (u(t), e = s(e, t < 0 ? 0 : 0 | d(t)), !l.TYPED_ARRAY_SUPPORT)
                for (var n = 0; n < t; ++n) e[n] = 0;
            return e
        }

        function p(e, t) {
            var n = t.length < 0 ? 0 : 0 | d(t.length);
            e = s(e, n);
            for (var r = 0; r < n; r += 1) e[r] = 255 & t[r];
            return e
        }

        function d(e) {
            if (e >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
            return 0 | e
        }

        function h(e, t) {
            if (l.isBuffer(e)) return e.length;
            if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
            "string" != typeof e && (e = "" + e);
            var n = e.length;
            if (0 === n) return 0;
            for (var r = !1;;) switch (t) {
                case "ascii":
                case "latin1":
                case "binary":
                    return n;
                case "utf8":
                case "utf-8":
                case void 0:
                    return H(e).length;
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return 2 * n;
                case "hex":
                    return n >>> 1;
                case "base64":
                    return N(e).length;
                default:
                    if (r) return H(e).length;
                    t = ("" + t).toLowerCase(), r = !0
            }
        }

        function m(e, t, n) {
            var r = e[t];
            e[t] = e[n], e[n] = r
        }

        function g(e, t, n, r, i) {
            if (0 === e.length) return -1;
            if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                if (i) return -1;
                n = e.length - 1
            } else if (n < 0) {
                if (!i) return -1;
                n = 0
            }
            if ("string" == typeof t && (t = l.from(t, r)), l.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, r, i);
            if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, r, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function b(e, t, n, r, i) {
            var o, a = 1,
                s = e.length,
                l = t.length;
            if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                if (e.length < 2 || t.length < 2) return -1;
                a = 2, s /= 2, l /= 2, n /= 2
            }

            function c(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }
            if (i) {
                var u = -1;
                for (o = n; o < s; o++)
                    if (c(e, o) === c(t, -1 === u ? 0 : o - u)) {
                        if (-1 === u && (u = o), o - u + 1 === l) return u * a
                    } else -1 !== u && (o -= o - u), u = -1
            } else
                for (n + l > s && (n = s - l), o = n; o >= 0; o--) {
                    for (var f = !0, p = 0; p < l; p++)
                        if (c(e, o + p) !== c(t, p)) {
                            f = !1;
                            break
                        }
                    if (f) return o
                }
            return -1
        }

        function y(e, t, n, r) {
            n = Number(n) || 0;
            var i = e.length - n;
            r ? (r = Number(r)) > i && (r = i) : r = i;
            var o = t.length;
            if (o % 2 != 0) throw new TypeError("Invalid hex string");
            r > o / 2 && (r = o / 2);
            for (var a = 0; a < r; ++a) {
                var s = parseInt(t.substr(2 * a, 2), 16);
                if (isNaN(s)) return a;
                e[n + a] = s
            }
            return a
        }

        function v(e, t, n, r) {
            return F(H(t, e.length - n), e, n, r)
        }

        function _(e, t, n, r) {
            return F(function(e) {
                for (var t = [], n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                return t
            }(t), e, n, r)
        }

        function w(e, t, n, r) {
            return _(e, t, n, r)
        }

        function x(e, t, n, r) {
            return F(N(t), e, n, r)
        }

        function C(e, t, n, r) {
            return F(function(e, t) {
                for (var n, r, i, o = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                return o
            }(t, e.length - n), e, n, r)
        }

        function k(e, t, n) {
            return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
        }

        function E(e, t, n) {
            n = Math.min(e.length, n);
            for (var r = [], i = t; i < n;) {
                var o, a, s, l, c = e[i],
                    u = null,
                    f = c > 239 ? 4 : c > 223 ? 3 : c > 191 ? 2 : 1;
                if (i + f <= n) switch (f) {
                    case 1:
                        c < 128 && (u = c);
                        break;
                    case 2:
                        128 == (192 & (o = e[i + 1])) && (l = (31 & c) << 6 | 63 & o) > 127 && (u = l);
                        break;
                    case 3:
                        o = e[i + 1], a = e[i + 2], 128 == (192 & o) && 128 == (192 & a) && (l = (15 & c) << 12 | (63 & o) << 6 | 63 & a) > 2047 && (l < 55296 || l > 57343) && (u = l);
                        break;
                    case 4:
                        o = e[i + 1], a = e[i + 2], s = e[i + 3], 128 == (192 & o) && 128 == (192 & a) && 128 == (192 & s) && (l = (15 & c) << 18 | (63 & o) << 12 | (63 & a) << 6 | 63 & s) > 65535 && l < 1114112 && (u = l)
                }
                null === u ? (u = 65533, f = 1) : u > 65535 && (u -= 65536, r.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), r.push(u), i += f
            }
            return function(e) {
                var t = e.length;
                if (t <= T) return String.fromCharCode.apply(String, e);
                var n = "",
                    r = 0;
                for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += T));
                return n
            }(r)
        }
        t.Buffer = l, t.SlowBuffer = function(e) {
            +e != e && (e = 0);
            return l.alloc(+e)
        }, t.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function() {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype,
                    foo: function() {
                        return 42
                    }
                }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
            } catch (e) {
                return !1
            }
        }(), t.kMaxLength = a(), l.poolSize = 8192, l._augment = function(e) {
            return e.__proto__ = l.prototype, e
        }, l.from = function(e, t, n) {
            return c(null, e, t, n)
        }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
            value: null,
            configurable: !0
        })), l.alloc = function(e, t, n) {
            return function(e, t, n, r) {
                return u(t), t <= 0 ? s(e, t) : void 0 !== n ? "string" == typeof r ? s(e, t).fill(n, r) : s(e, t).fill(n) : s(e, t)
            }(null, e, t, n)
        }, l.allocUnsafe = function(e) {
            return f(null, e)
        }, l.allocUnsafeSlow = function(e) {
            return f(null, e)
        }, l.isBuffer = function(e) {
            return !(null == e || !e._isBuffer)
        }, l.compare = function(e, t) {
            if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
            if (e === t) return 0;
            for (var n = e.length, r = t.length, i = 0, o = Math.min(n, r); i < o; ++i)
                if (e[i] !== t[i]) {
                    n = e[i], r = t[i];
                    break
                }
            return n < r ? -1 : r < n ? 1 : 0
        }, l.isEncoding = function(e) {
            switch (String(e).toLowerCase()) {
                case "hex":
                case "utf8":
                case "utf-8":
                case "ascii":
                case "latin1":
                case "binary":
                case "base64":
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function(e, t) {
            if (!o(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return l.alloc(0);
            var n;
            if (void 0 === t)
                for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
            var r = l.allocUnsafe(t),
                i = 0;
            for (n = 0; n < e.length; ++n) {
                var a = e[n];
                if (!l.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                a.copy(r, i), i += a.length
            }
            return r
        }, l.byteLength = h, l.prototype._isBuffer = !0, l.prototype.swap16 = function() {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) m(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function() {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) m(this, t, t + 3), m(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function() {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) m(this, t, t + 7), m(this, t + 1, t + 6), m(this, t + 2, t + 5), m(this, t + 3, t + 4);
            return this
        }, l.prototype.toString = function() {
            var e = 0 | this.length;
            return 0 === e ? "" : 0 === arguments.length ? E(this, 0, e) : function(e, t, n) {
                var r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return A(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return E(this, t, n);
                    case "ascii":
                        return O(this, t, n);
                    case "latin1":
                    case "binary":
                        return S(this, t, n);
                    case "base64":
                        return k(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return R(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }.apply(this, arguments)
        }, l.prototype.equals = function(e) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function() {
            var e = "",
                n = t.INSPECT_MAX_BYTES;
            return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (e += " ... ")), "<Buffer " + e + ">"
        }, l.prototype.compare = function(e, t, n, r, i) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
            if (r >= i && t >= n) return 0;
            if (r >= i) return -1;
            if (t >= n) return 1;
            if (this === e) return 0;
            for (var o = (i >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (t >>>= 0), s = Math.min(o, a), c = this.slice(r, i), u = e.slice(t, n), f = 0; f < s; ++f)
                if (c[f] !== u[f]) {
                    o = c[f], a = u[f];
                    break
                }
            return o < a ? -1 : a < o ? 1 : 0
        }, l.prototype.includes = function(e, t, n) {
            return -1 !== this.indexOf(e, t, n)
        }, l.prototype.indexOf = function(e, t, n) {
            return g(this, e, t, n, !0)
        }, l.prototype.lastIndexOf = function(e, t, n) {
            return g(this, e, t, n, !1)
        }, l.prototype.write = function(e, t, n, r) {
            if (void 0 === t) r = "utf8", n = this.length, t = 0;
            else if (void 0 === n && "string" == typeof t) r = t, n = this.length, t = 0;
            else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
            }
            var i = this.length - t;
            if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1;;) switch (r) {
                case "hex":
                    return y(this, e, t, n);
                case "utf8":
                case "utf-8":
                    return v(this, e, t, n);
                case "ascii":
                    return _(this, e, t, n);
                case "latin1":
                case "binary":
                    return w(this, e, t, n);
                case "base64":
                    return x(this, e, t, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                    return C(this, e, t, n);
                default:
                    if (o) throw new TypeError("Unknown encoding: " + r);
                    r = ("" + r).toLowerCase(), o = !0
            }
        }, l.prototype.toJSON = function() {
            return {
                type: "Buffer",
                data: Array.prototype.slice.call(this._arr || this, 0)
            }
        };
        var T = 4096;

        function O(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
            return r
        }

        function S(e, t, n) {
            var r = "";
            n = Math.min(e.length, n);
            for (var i = t; i < n; ++i) r += String.fromCharCode(e[i]);
            return r
        }

        function A(e, t, n) {
            var r = e.length;
            (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
            for (var i = "", o = t; o < n; ++o) i += z(e[o]);
            return i
        }

        function R(e, t, n) {
            for (var r = e.slice(t, n), i = "", o = 0; o < r.length; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
            return i
        }

        function j(e, t, n) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
        }

        function P(e, t, n, r, i, o) {
            if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
            if (n + r > e.length) throw new RangeError("Index out of range")
        }

        function D(e, t, n, r) {
            t < 0 && (t = 65535 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 2); i < o; ++i) e[n + i] = (t & 255 << 8 * (r ? i : 1 - i)) >>> 8 * (r ? i : 1 - i)
        }

        function M(e, t, n, r) {
            t < 0 && (t = 4294967295 + t + 1);
            for (var i = 0, o = Math.min(e.length - n, 4); i < o; ++i) e[n + i] = t >>> 8 * (r ? i : 3 - i) & 255
        }

        function L(e, t, n, r, i, o) {
            if (n + r > e.length) throw new RangeError("Index out of range");
            if (n < 0) throw new RangeError("Index out of range")
        }

        function I(e, t, n, r, o) {
            return o || L(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
        }

        function U(e, t, n, r, o) {
            return o || L(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
        }
        l.prototype.slice = function(e, t) {
            var n, r = this.length;
            if ((e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e), l.TYPED_ARRAY_SUPPORT)(n = this.subarray(e, t)).__proto__ = l.prototype;
            else {
                var i = t - e;
                n = new l(i, void 0);
                for (var o = 0; o < i; ++o) n[o] = this[o + e]
            }
            return n
        }, l.prototype.readUIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
            return r
        }, l.prototype.readUIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = this[e + --t], i = 1; t > 0 && (i *= 256);) r += this[e + --t] * i;
            return r
        }, l.prototype.readUInt8 = function(e, t) {
            return t || j(e, 1, this.length), this[e]
        }, l.prototype.readUInt16LE = function(e, t) {
            return t || j(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUInt16BE = function(e, t) {
            return t || j(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUInt32LE = function(e, t) {
            return t || j(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, l.prototype.readUInt32BE = function(e, t) {
            return t || j(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readIntLE = function(e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = this[e], i = 1, o = 0; ++o < t && (i *= 256);) r += this[e + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * t)), r
        }, l.prototype.readIntBE = function(e, t, n) {
            e |= 0, t |= 0, n || j(e, t, this.length);
            for (var r = t, i = 1, o = this[e + --r]; r > 0 && (i *= 256);) o += this[e + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * t)), o
        }, l.prototype.readInt8 = function(e, t) {
            return t || j(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, l.prototype.readInt16LE = function(e, t) {
            t || j(e, 2, this.length);
            var n = this[e] | this[e + 1] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt16BE = function(e, t) {
            t || j(e, 2, this.length);
            var n = this[e + 1] | this[e] << 8;
            return 32768 & n ? 4294901760 | n : n
        }, l.prototype.readInt32LE = function(e, t) {
            return t || j(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function(e, t) {
            return t || j(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readFloatLE = function(e, t) {
            return t || j(e, 4, this.length), i.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function(e, t) {
            return t || j(e, 4, this.length), i.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function(e, t) {
            return t || j(e, 8, this.length), i.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function(e, t) {
            return t || j(e, 8, this.length), i.read(this, e, !1, 52, 8)
        }, l.prototype.writeUIntLE = function(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
                o = 0;
            for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
            return t + n
        }, l.prototype.writeUIntBE = function(e, t, n, r) {
            (e = +e, t |= 0, n |= 0, r) || P(this, e, t, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
                o = 1;
            for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
            return t + n
        }, l.prototype.writeUInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
        }, l.prototype.writeUInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2
        }, l.prototype.writeUInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2
        }, l.prototype.writeUInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : M(this, e, t, !0), t + 4
        }, l.prototype.writeUInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
        }, l.prototype.writeIntLE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                P(this, e, t, n, i - 1, -i)
            }
            var o = 0,
                a = 1,
                s = 0;
            for (this[t] = 255 & e; ++o < n && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o - 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }, l.prototype.writeIntBE = function(e, t, n, r) {
            if (e = +e, t |= 0, !r) {
                var i = Math.pow(2, 8 * n - 1);
                P(this, e, t, n, i - 1, -i)
            }
            var o = n - 1,
                a = 1,
                s = 0;
            for (this[t + o] = 255 & e; --o >= 0 && (a *= 256);) e < 0 && 0 === s && 0 !== this[t + o + 1] && (s = 1), this[t + o] = (e / a >> 0) - s & 255;
            return t + n
        }, l.prototype.writeInt8 = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : D(this, e, t, !0), t + 2
        }, l.prototype.writeInt16BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : D(this, e, t, !1), t + 2
        }, l.prototype.writeInt32LE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : M(this, e, t, !0), t + 4
        }, l.prototype.writeInt32BE = function(e, t, n) {
            return e = +e, t |= 0, n || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : M(this, e, t, !1), t + 4
        }, l.prototype.writeFloatLE = function(e, t, n) {
            return I(this, e, t, !0, n)
        }, l.prototype.writeFloatBE = function(e, t, n) {
            return I(this, e, t, !1, n)
        }, l.prototype.writeDoubleLE = function(e, t, n) {
            return U(this, e, t, !0, n)
        }, l.prototype.writeDoubleBE = function(e, t, n) {
            return U(this, e, t, !1, n)
        }, l.prototype.copy = function(e, t, n, r) {
            if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
            var i, o = r - n;
            if (this === e && n < t && t < r)
                for (i = o - 1; i >= 0; --i) e[i + t] = this[i + n];
            else if (o < 1e3 || !l.TYPED_ARRAY_SUPPORT)
                for (i = 0; i < o; ++i) e[i + t] = this[i + n];
            else Uint8Array.prototype.set.call(e, this.subarray(n, n + o), t);
            return o
        }, l.prototype.fill = function(e, t, n, r) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (r = t, t = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === e.length) {
                    var i = e.charCodeAt(0);
                    i < 256 && (e = i)
                }
                if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                if ("string" == typeof r && !l.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
            if (n <= t) return this;
            var o;
            if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" == typeof e)
                for (o = t; o < n; ++o) this[o] = e;
            else {
                var a = l.isBuffer(e) ? e : H(new l(e, r).toString()),
                    s = a.length;
                for (o = 0; o < n - t; ++o) this[o + t] = a[o % s]
            }
            return this
        };
        var B = /[^+\/0-9A-Za-z-_]/g;

        function z(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function H(e, t) {
            var n;
            t = t || 1 / 0;
            for (var r = e.length, i = null, o = [], a = 0; a < r; ++a) {
                if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
                    if (!i) {
                        if (n > 56319) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === r) {
                            (t -= 3) > -1 && o.push(239, 191, 189);
                            continue
                        }
                        i = n;
                        continue
                    }
                    if (n < 56320) {
                        (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                        continue
                    }
                    n = 65536 + (i - 55296 << 10 | n - 56320)
                } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                if (i = null, n < 128) {
                    if ((t -= 1) < 0) break;
                    o.push(n)
                } else if (n < 2048) {
                    if ((t -= 2) < 0) break;
                    o.push(n >> 6 | 192, 63 & n | 128)
                } else if (n < 65536) {
                    if ((t -= 3) < 0) break;
                    o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                } else {
                    if (!(n < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                }
            }
            return o
        }

        function N(e) {
            return r.toByteArray(function(e) {
                if ((e = function(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                    }(e).replace(B, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function F(e, t, n, r) {
            for (var i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
            return i
        }
    }).call(this, n(11))
}, function(e, t, n) {
    "use strict";
    t.byteLength = function(e) {
        var t = c(e),
            n = t[0],
            r = t[1];
        return 3 * (n + r) / 4 - r
    }, t.toByteArray = function(e) {
        for (var t, n = c(e), r = n[0], a = n[1], s = new o(function(e, t, n) {
                return 3 * (t + n) / 4 - n
            }(0, r, a)), l = 0, u = a > 0 ? r - 4 : r, f = 0; f < u; f += 4) t = i[e.charCodeAt(f)] << 18 | i[e.charCodeAt(f + 1)] << 12 | i[e.charCodeAt(f + 2)] << 6 | i[e.charCodeAt(f + 3)], s[l++] = t >> 16 & 255, s[l++] = t >> 8 & 255, s[l++] = 255 & t;
        2 === a && (t = i[e.charCodeAt(f)] << 2 | i[e.charCodeAt(f + 1)] >> 4, s[l++] = 255 & t);
        1 === a && (t = i[e.charCodeAt(f)] << 10 | i[e.charCodeAt(f + 1)] << 4 | i[e.charCodeAt(f + 2)] >> 2, s[l++] = t >> 8 & 255, s[l++] = 255 & t);
        return s
    }, t.fromByteArray = function(e) {
        for (var t, n = e.length, i = n % 3, o = [], a = 0, s = n - i; a < s; a += 16383) o.push(u(e, a, a + 16383 > s ? s : a + 16383));
        1 === i ? (t = e[n - 1], o.push(r[t >> 2] + r[t << 4 & 63] + "==")) : 2 === i && (t = (e[n - 2] << 8) + e[n - 1], o.push(r[t >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="));
        return o.join("")
    };
    for (var r = [], i = [], o = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, l = a.length; s < l; ++s) r[s] = a[s], i[a.charCodeAt(s)] = s;

    function c(e) {
        var t = e.length;
        if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
        var n = e.indexOf("=");
        return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
    }

    function u(e, t, n) {
        for (var i, o, a = [], s = t; s < n; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(r[(o = i) >> 18 & 63] + r[o >> 12 & 63] + r[o >> 6 & 63] + r[63 & o]);
        return a.join("")
    }
    i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
}, function(e, t) {
    t.read = function(e, t, n, r, i) {
        var o, a, s = 8 * i - r - 1,
            l = (1 << s) - 1,
            c = l >> 1,
            u = -7,
            f = n ? i - 1 : 0,
            p = n ? -1 : 1,
            d = e[t + f];
        for (f += p, o = d & (1 << -u) - 1, d >>= -u, u += s; u > 0; o = 256 * o + e[t + f], f += p, u -= 8);
        for (a = o & (1 << -u) - 1, o >>= -u, u += r; u > 0; a = 256 * a + e[t + f], f += p, u -= 8);
        if (0 === o) o = 1 - c;
        else {
            if (o === l) return a ? NaN : 1 / 0 * (d ? -1 : 1);
            a += Math.pow(2, r), o -= c
        }
        return (d ? -1 : 1) * a * Math.pow(2, o - r)
    }, t.write = function(e, t, n, r, i, o) {
        var a, s, l, c = 8 * o - i - 1,
            u = (1 << c) - 1,
            f = u >> 1,
            p = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            d = r ? 0 : o - 1,
            h = r ? 1 : -1,
            m = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
        for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), (t += a + f >= 1 ? p / l : p * Math.pow(2, 1 - f)) * l >= 2 && (a++, l /= 2), a + f >= u ? (s = 0, a = u) : a + f >= 1 ? (s = (t * l - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + d] = 255 & s, d += h, s /= 256, i -= 8);
        for (a = a << i | s, c += i; c > 0; e[n + d] = 255 & a, d += h, a /= 256, c -= 8);
        e[n + d - h] |= 128 * m
    }
}, function(e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == n.call(e)
    }
}, function(module, __webpack_exports__, __webpack_require__) {
    "use strict";
    var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15),
        _core_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2),
        _logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3),
        _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5),
        _renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);

    function _typeof(e) {
        return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function _classCallCheck(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function _possibleConstructorReturn(e, t) {
        return !t || "object" !== _typeof(t) && "function" != typeof t ? _assertThisInitialized(e) : t
    }

    function _getPrototypeOf(e) {
        return (_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function _assertThisInitialized(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function _defineProperties(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function _createClass(e, t, n) {
        return t && _defineProperties(e.prototype, t), n && _defineProperties(e, n), e
    }

    function _inherits(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                writable: !0,
                configurable: !0
            }
        }), t && _setPrototypeOf(e, t)
    }

    function _setPrototypeOf(e, t) {
        return (_setPrototypeOf = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Caman = function(_Module) {
        function Caman() {
            var _this;
            _classCallCheck(this, Caman);
            var thisFn = function() {
                    return _assertThisInitialized(_this)
                }.toString(),
                thisName = thisFn.match(/return (?:_assertThisInitialized\()*(\w+)\)*;?/)[1];
            if (eval("".concat(thisName, " = this;")), 0 === arguments.length) throw "Invalid arguments";
            if (_assertThisInitialized(_this) instanceof Caman) {
                var id;
                _this.finishInit = _this.finishInit.bind(_assertThisInitialized(_this)), _this.imageLoaded = _this.imageLoaded.bind(_assertThisInitialized(_this));
                var args = Array.prototype.slice.call(arguments, 0);
                id = parseInt(Caman.getAttrId(args[0]), 10);
                var callback = "function" == typeof args[1] ? args[1] : "function" == typeof args[2] ? args[2] : function() {};
                return !isNaN(id) && _store__WEBPACK_IMPORTED_MODULE_3__.a.has(id) ? _possibleConstructorReturn(_this, _store__WEBPACK_IMPORTED_MODULE_3__.a.execute(id, callback)) : (_this.id = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.uniqid.get(), _this.initializedPixelData = _this.originalPixelData = null, _this.cropCoordinates = {
                    x: 0,
                    y: 0
                }, _this.cropped = !1, _this.resized = !1, _this.pixelStack = [], _this.layerStack = [], _this.canvasQueue = [], _this.currentLayer = null, _this.scaled = !1, _this.renderer = new _renderer__WEBPACK_IMPORTED_MODULE_4__.a(_assertThisInitialized(_this)), _this.domIsLoaded(function() {
                    return _this.parseArguments(args), _this.setup()
                }), _possibleConstructorReturn(_this, _assertThisInitialized(_this)))
            }
            return _possibleConstructorReturn(_this, new Caman(arguments))
        }
        return _inherits(Caman, _Module), _createClass(Caman, null, [{
            key: "initClass",
            value: function() {
                this.version = {
                    release: "4.1.2",
                    date: "7/27/2013"
                }, this.DEBUG = !1, this.allowRevert = !0, this.crossOrigin = "anonymous", this.remoteProxy = "", this.proxyParam = "camanProxyUrl", this.autoload = !0
            }
        }, {
            key: "toString",
            value: function() {
                return "Version ".concat(Caman.version.release, ", Released ").concat(Caman.version.date)
            }
        }, {
            key: "getAttrId",
            value: function(e) {
                return "string" == typeof e && (e = Object(_core_util__WEBPACK_IMPORTED_MODULE_1__.a)(e)), null == e || null == e.getAttribute ? null : e.getAttribute("data-caman-id")
            }
        }]), _createClass(Caman, [{
            key: "domIsLoaded",
            value: function(e) {
                var t = this;
                if ("complete" === document.readyState) return _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("DOM initialized"), setTimeout(function() {
                    return e.call(t)
                }, 0);
                return document.addEventListener("readystatechange", function() {
                    if ("complete" === document.readyState) return _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("DOM initialized"), e.call(t)
                }, !1)
            }
        }, {
            key: "parseArguments",
            value: function(e) {
                var t = this;
                if (0 === e.length) throw "Invalid arguments given";
                if (this.initObj = null, this.initType = null, this.imageUrl = null, this.callback = function() {}, this.setInitObject(e[0]), 1 !== e.length) {
                    switch (_typeof(e[1])) {
                        case "string":
                            this.imageUrl = e[1];
                            break;
                        case "function":
                            this.callback = e[1]
                    }
                    if (2 !== e.length) return this.callback = e[2], 4 === e.length ? function() {
                        for (var n = [], r = Object.keys(e[4] || {}), i = 0; i < r.length; i++) {
                            var o = r[i],
                                a = e[4][o];
                            n.push(t.options[o] = a)
                        }
                        return n
                    }() : void 0
                }
            }
        }, {
            key: "setInitObject",
            value: function(e) {
                if ("object" === _typeof(e) ? this.initObj = e : this.initObj = Object(_core_util__WEBPACK_IMPORTED_MODULE_1__.a)(e), null == this.initObj) throw "Could not find image or canvas for initialization.";
                return this.initType = this.initObj.nodeName.toLowerCase()
            }
        }, {
            key: "setup",
            value: function() {
                switch (this.initType) {
                    case "node":
                        return this.initNode();
                    case "img":
                        return this.initImage();
                    case "canvas":
                        return this.initCanvas()
                }
            }
        }, {
            key: "initImage",
            value: function() {
                return this.image = this.initObj, this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), _core_util__WEBPACK_IMPORTED_MODULE_1__.b.copyAttributes(this.image, this.canvas, {
                    except: ["src"]
                }), null != this.image.parentNode && this.image.parentNode.replaceChild(this.canvas, this.image), this.imageAdjustments(), this.waitForImageLoaded()
            }
        }, {
            key: "initCanvas",
            value: function() {
                return this.canvas = this.initObj, this.context = this.canvas.getContext("2d"), null != this.imageUrl ? (this.image = document.createElement("img"), this.image.src = this.imageUrl, this.imageAdjustments(), this.waitForImageLoaded()) : this.finishInit()
            }
        }, {
            key: "imageAdjustments",
            value: function() {
                if (this.needsHiDPISwap() && (_logger__WEBPACK_IMPORTED_MODULE_2__.a.debug(this.image.src, "->", this.hiDPIReplacement()), this.swapped = !0, this.image.src = this.hiDPIReplacement()), Caman.IO.isRemote(this.image)) return this.image.src = Caman.IO.proxyUrl(this.image.src), _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("Remote image detected, using URL = ".concat(this.image.src))
            }
        }, {
            key: "waitForImageLoaded",
            value: function() {
                return this.isImageLoaded() ? this.imageLoaded() : this.image.onload = this.imageLoaded
            }
        }, {
            key: "isImageLoaded",
            value: function() {
                return !!this.image.complete && (null == this.image.naturalWidth || 0 !== this.image.naturalWidth)
            }
        }, {
            key: "imageWidth",
            value: function() {
                return this.image.width || this.image.naturalWidth
            }
        }, {
            key: "imageHeight",
            value: function() {
                return this.image.height || this.image.naturalHeight
            }
        }, {
            key: "imageLoaded",
            value: function() {
                return _logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("Image loaded. Width = ".concat(this.imageWidth(), ", Height = ").concat(this.imageHeight())), this.swapped ? (this.canvas.width = this.imageWidth() / this.hiDPIRatio(), this.canvas.height = this.imageHeight() / this.hiDPIRatio()) : (this.canvas.width = this.imageWidth(), this.canvas.height = this.imageHeight()), this.finishInit()
            }
        }, {
            key: "finishInit",
            value: function() {
                if (null == this.context && (this.context = this.canvas.getContext("2d")), this.originalWidth = this.preScaledWidth = this.width = this.canvas.width, this.originalHeight = this.preScaledHeight = this.height = this.canvas.height, this.hiDPIAdjustments(), this.hasId() || this.assignId(), null != this.image && this.context.drawImage(this.image, 0, 0, this.imageWidth(), this.imageHeight(), 0, 0, this.preScaledWidth, this.preScaledHeight), this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height), this.pixelData = this.imageData.data, Caman.allowRevert) {
                    this.initializedPixelData = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.dataArray(this.pixelData.length), this.originalPixelData = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.dataArray(this.pixelData.length);
                    for (var e = 0; e < this.pixelData.length; e++) {
                        var t = this.pixelData[e];
                        this.initializedPixelData[e] = t, this.originalPixelData[e] = t
                    }
                }
                return this.dimensions = {
                    width: this.canvas.width,
                    height: this.canvas.height
                }, _store__WEBPACK_IMPORTED_MODULE_3__.a.put(this.id, this), this.callback.call(this, this), this.callback = function() {}
            }
        }, {
            key: "reloadCanvasData",
            value: function() {
                return this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height), this.pixelData = this.imageData.data
            }
        }, {
            key: "resetOriginalPixelData",
            value: function() {
                var e = this;
                if (!Caman.allowRevert) throw "Revert disabled";
                return this.originalPixelData = _core_util__WEBPACK_IMPORTED_MODULE_1__.b.dataArray(this.pixelData.length), Array.from(this.pixelData).map(function(t, n) {
                    return e.originalPixelData[n] = t
                })
            }
        }, {
            key: "hasId",
            value: function() {
                return null != Caman.getAttrId(this.canvas)
            }
        }, {
            key: "assignId",
            value: function() {
                if (!this.canvas.getAttribute("data-caman-id")) return this.canvas.setAttribute("data-caman-id", this.id)
            }
        }, {
            key: "hiDPIDisabled",
            value: function() {
                return null !== this.canvas.getAttribute("data-caman-hidpi-disabled")
            }
        }, {
            key: "hiDPIAdjustments",
            value: function() {
                if (this.needsHiDPISwap()) {
                    var e = this.hiDPIRatio();
                    return 1 !== e ? (_logger__WEBPACK_IMPORTED_MODULE_2__.a.debug("HiDPI ratio = ".concat(e)), this.scaled = !0, this.preScaledWidth = this.canvas.width, this.preScaledHeight = this.canvas.height, this.canvas.width = this.preScaledWidth * e, this.canvas.height = this.preScaledHeight * e, this.canvas.style.width = "".concat(this.preScaledWidth, "px"), this.canvas.style.height = "".concat(this.preScaledHeight, "px"), this.context.scale(e, e), this.width = this.originalWidth = this.canvas.width, this.height = this.originalHeight = this.canvas.height) : void 0
                }
            }
        }, {
            key: "hiDPIRatio",
            value: function() {
                return (window.devicePixelRatio || 1) / (this.context.webkitBackingStorePixelRatio || this.context.mozBackingStorePixelRatio || this.context.msBackingStorePixelRatio || this.context.oBackingStorePixelRatio || this.context.backingStorePixelRatio || 1)
            }
        }, {
            key: "hiDPICapable",
            value: function() {
                return null != window.devicePixelRatio && 1 !== window.devicePixelRatio
            }
        }, {
            key: "needsHiDPISwap",
            value: function() {
                return !(this.hiDPIDisabled() || !this.hiDPICapable()) && null !== this.hiDPIReplacement()
            }
        }, {
            key: "hiDPIReplacement",
            value: function() {
                return null == this.image ? null : this.image.getAttribute("data-caman-hidpi")
            }
        }, {
            key: "replaceCanvas",
            value: function(e) {
                var t = this.canvas;
                return this.canvas = e, this.context = this.canvas.getContext("2d"), t.parentNode.replaceChild(this.canvas, t), this.width = this.canvas.width, this.height = this.canvas.height, this.reloadCanvasData(), this.dimensions = {
                    width: this.canvas.width,
                    height: this.canvas.height
                }
            }
        }, {
            key: "render",
            value: function(e) {
                var t = this;
                return null == e && (e = function() {}), Caman.Event.trigger(this, "renderStart"), this.renderer.execute(function() {
                    return t.context.putImageData(t.imageData, 0, 0), e.call(t)
                })
            }
        }, {
            key: "revert",
            value: function(e) {
                if (null == e && (e = !0), !Caman.allowRevert) throw "Revert disabled";
                for (var t = this.originalVisiblePixels(), n = 0; n < t.length; n++) {
                    var r = t[n];
                    this.pixelData[n] = r
                }
                if (e) return this.context.putImageData(this.imageData, 0, 0)
            }
        }, {
            key: "reset",
            value: function() {
                var e = document.createElement("canvas");
                _core_util__WEBPACK_IMPORTED_MODULE_1__.b.copyAttributes(this.canvas, e), e.width = this.originalWidth, e.height = this.originalHeight;
                for (var t = e.getContext("2d"), n = t.getImageData(0, 0, e.width, e.height), r = n.data, i = 0; i < this.initializedPixelData.length; i++) {
                    var o = this.initializedPixelData[i];
                    r[i] = o
                }
                return t.putImageData(n, 0, 0), this.cropCoordinates = {
                    x: 0,
                    y: 0
                }, this.resized = !1, this.replaceCanvas(e)
            }
        }, {
            key: "originalVisiblePixels",
            value: function() {
                var e, t, n, r;
                if (!Caman.allowRevert) throw "Revert disabled";
                var i = [],
                    o = this.cropCoordinates.x,
                    a = o + this.width,
                    s = this.cropCoordinates.y,
                    l = s + this.height;
                if (this.resized) {
                    var c = document.createElement("canvas");
                    c.width = this.originalWidth, c.height = this.originalHeight;
                    var u = c.getContext("2d"),
                        f = u.getImageData(0, 0, c.width, c.height);
                    for (t = f.data, e = 0; e < this.originalPixelData.length; e++) {
                        var p = this.originalPixelData[e];
                        t[e] = p
                    }
                    u.putImageData(f, 0, 0);
                    var d = document.createElement("canvas");
                    d.width = this.width, d.height = this.height, (u = d.getContext("2d")).drawImage(c, 0, 0, this.originalWidth, this.originalHeight, 0, 0, this.width, this.height), t = u.getImageData(0, 0, this.width, this.height).data, n = this.width
                } else t = this.originalPixelData, n = this.originalWidth;
                for (e = 0, r = t.length; e < r; e += 4) {
                    var h = Caman.Pixel.locationToCoordinates(e, n);
                    o <= h.x && h.x < a && s <= h.y && h.y < l && i.push(t[e], t[e + 1], t[e + 2], t[e + 3])
                }
                return i
            }
        }, {
            key: "process",
            value: function(e, t) {
                return this.renderer.add({
                    type: Caman.Filter.Type.Single,
                    name: e,
                    processFn: t
                }), this
            }
        }, {
            key: "processKernel",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    r = arguments.length > 3 ? arguments[3] : void 0;
                if (null == r && (r = 0), null == n) {
                    n = 0;
                    for (var i = 0, o = t.length, a = 0 <= o; a ? i < o : i > o; a ? i++ : i--) n += t[i]
                }
                return this.renderer.add({
                    type: Caman.Filter.Type.Kernel,
                    name: e,
                    adjust: t,
                    divisor: n,
                    bias: r
                }), this
            }
        }, {
            key: "processPlugin",
            value: function(e, t) {
                return this.renderer.add({
                    type: Caman.Filter.Type.Plugin,
                    plugin: e,
                    args: t
                }), this
            }
        }, {
            key: "newLayer",
            value: function(e) {
                var t = new Caman.Layer(this);
                return this.canvasQueue.push(t), this.renderer.add({
                    type: Caman.Filter.Type.LayerDequeue
                }), e.call(t), this.renderer.add({
                    type: Caman.Filter.Type.LayerFinished
                }), this
            }
        }, {
            key: "executeLayer",
            value: function(e) {
                return this.pushContext(e)
            }
        }, {
            key: "pushContext",
            value: function(e) {
                return this.layerStack.push(this.currentLayer), this.pixelStack.push(this.pixelData), this.currentLayer = e, this.pixelData = e.pixelData
            }
        }, {
            key: "popContext",
            value: function() {
                return this.pixelData = this.pixelStack.pop(), this.currentLayer = this.layerStack.pop()
            }
        }, {
            key: "applyCurrentLayer",
            value: function() {
                return this.currentLayer.applyToParent()
            }
        }, {
            key: "save",
            value: function() {
                return this.browserSave.apply(this, arguments)
            }
        }, {
            key: "browserSave",
            value: function(e) {
                null == e && (e = "png"), e = e.toLowerCase();
                var t = this.toBase64(e).replace("image/".concat(e), "image/octet-stream");
                return document.location.href = t
            }
        }, {
            key: "toImage",
            value: function(e) {
                var t = new Image;
                return t.src = this.toBase64(e), t.width = this.dimensions.width, t.height = this.dimensions.height, window.devicePixelRatio && (t.width /= window.devicePixelRatio, t.height /= window.devicePixelRatio), t
            }
        }, {
            key: "toBase64",
            value: function(e) {
                return null == e && (e = "png"), e = e.toLowerCase(), this.canvas.toDataURL("image/".concat(e))
            }
        }]), Caman
    }(_module__WEBPACK_IMPORTED_MODULE_0__.a);
    Caman.initClass(), window.Caman = Caman;
    var _default = Caman,
        _unused_webpack_default_export = _default,
        _temp = void("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Caman, "Caman", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/index.js"), __REACT_HOT_LOADER__.register(_default, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/index.js")))
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var r = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, r, i;
        return t = e, i = [{
            key: "distance",
            value: function(e, t, n, r) {
                return Math.sqrt(Math.pow(n - e, 2) + Math.pow(r - t, 2))
            }
        }, {
            key: "randomRange",
            value: function(e, t, n) {
                null == n && (n = !1);
                var r = e + Math.random() * (t - e);
                return n ? r.toFixed(n) : Math.round(r)
            }
        }, {
            key: "luminance",
            value: function(e) {
                return .299 * e.r + .587 * e.g + .114 * e.b
            }
        }, {
            key: "bezier",
            value: function(e, t, n, r, i, o) {
                var a;
                if (null == i && (i = 0), null == o && (o = 255), e[0] instanceof Array ? (a = e, i = t, o = n) : a = [e, t, n, r], a.length < 2) throw "Invalid number of arguments to bezier";
                for (var s, l, c, u = {}, f = function(e, t, n) {
                        return e * (1 - n) + t * n
                    }, p = 0; p < 1e3; p++) {
                    for (var d = p / 1e3, h = a; h.length > 1;) {
                        for (var m = [], g = 0, b = h.length - 2, y = 0 <= b; y ? g <= b : g >= b; y ? g++ : g--) m.push([f(h[g][0], h[g + 1][0], d), f(h[g][1], h[g + 1][1], d)]);
                        h = m
                    }
                    u[Math.round(h[0][0])] = Math.round((s = h[0][1], l = i, c = o, Math.min(Math.max(s, l), c)))
                }
                var v = a[a.length - 1][0];
                return u = Caman.Calculate.missingValues(u, v), null == u[v] && (u[v] = u[v - 1]), u
            }
        }, {
            key: "hermite",
            value: function(e, t, n) {
                if (e.length < 2) throw "Invalid number of arguments to hermite";
                for (var r, i, o, a, s = {}, l = function(e, t) {
                        return [e[0] * t[0], e[1] * t[1]]
                    }, c = function(e, t) {
                        return [e[0] - t[0], e[1] - t[1]]
                    }, u = function(e, t, n) {
                        return Math.min(Math.max(e, t), n)
                    }, f = 0, p = e.length - 2, d = 0 <= p; d ? f <= p : f >= p; d ? f++ : f--) {
                    var h = e[f],
                        m = e[f + 1],
                        g = m[0] - h[0],
                        b = 1 / g;
                    f === e.length - 2 && (b = 1 / (g - 1));
                    for (var y = f > 0 ? e[f - 1] : h, v = l(c(m, y), [.5, .5]), _ = l(c(y = f < e.length - 2 ? e[f + 2] : m, h), [.5, .5]), w = 0, x = g, C = 0 <= x; C ? w <= x : w >= x; C ? w++ : w--) {
                        var k = w * b,
                            E = 2 * k * k * k - 3 * k * k + 1,
                            T = k * k * k - 2 * k * k + k,
                            O = -2 * k * k * k + 3 * k * k,
                            S = k * k * k - k * k,
                            A = (r = l(h, [E, E]), i = l(v, [T, T]), o = l(m, [O, O]), a = l(_, [S, S]), [r[0] + i[0] + o[0] + a[0], r[1] + i[1] + o[1] + a[1]]);
                        s[Math.round(A[0])] = Math.round(u(A[1], t, n)), 1
                    }
                }
                var R = e[e.length - 1][0];
                return s = Caman.Calculate.missingValues(s, R)
            }
        }, {
            key: "missingValues",
            value: function(e, t) {
                if (Object.keys(e).length < t + 1) {
                    for (var n = {}, r = 0, i = t, o = 0 <= i; o ? r <= i : r >= i; o ? r++ : r--)
                        if (null != e[r]) n[r] = e[r];
                        else {
                            for (var a, s = [r - 1, n[r - 1]], l = r, c = t, u = r <= c; u ? l <= c : l >= c; u ? l++ : l--)
                                if (null != e[l]) {
                                    a = [l, e[l]];
                                    break
                                }
                            n[r] = s[1] + (a[1] - s[1]) / (a[0] - s[0]) * (r - s[0])
                        }
                    return n
                }
                return e
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    Caman.Calculate = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Calculate", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/calculate.js")
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var i = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, i, o;
        return t = e, o = [{
            key: "hexToRGB",
            value: function(e) {
                return "#" === e.charAt(0) && (e = e.substr(1)), {
                    r: parseInt(e.substr(0, 2), 16),
                    g: parseInt(e.substr(2, 2), 16),
                    b: parseInt(e.substr(4, 2), 16)
                }
            }
        }, {
            key: "rgbToHSL",
            value: function(e, t, r) {
                var i, o;
                "object" === n(e) && (t = e.g, r = e.b, e = e.r);
                e /= 255, t /= 255, r /= 255;
                var a = Math.max(e, t, r),
                    s = Math.min(e, t, r),
                    l = (a + s) / 2;
                if (a === s) i = o = 0;
                else {
                    var c = a - s;
                    o = l > .5 ? c / (2 - a - s) : c / (a + s), i = function() {
                        switch (a) {
                            case e:
                                return (t - r) / c + (t < r ? 6 : 0);
                            case t:
                                return (r - e) / c + 2;
                            case r:
                                return (e - t) / c + 4
                        }
                    }(), i /= 6
                }
                return {
                    h: i,
                    s: o,
                    l: l
                }
            }
        }, {
            key: "hslToRGB",
            value: function(e, t, r) {
                var i, o, a;
                "object" === n(e) && (t = e.s, r = e.l, e = e.h);
                if (0 === t) a = o = i = r;
                else {
                    var s = r < .5 ? r * (1 + t) : r + t - r * t,
                        l = 2 * r - s;
                    a = this.hueToRGB(l, s, e + 1 / 3), o = this.hueToRGB(l, s, e), i = this.hueToRGB(l, s, e - 1 / 3)
                }
                return {
                    r: 255 * a,
                    g: 255 * o,
                    b: 255 * i
                }
            }
        }, {
            key: "hueToRGB",
            value: function(e, t, n) {
                return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
            }
        }, {
            key: "rgbToHSV",
            value: function(e, t, n) {
                var r;
                e /= 255, t /= 255, n /= 255;
                var i = Math.max(e, t, n),
                    o = Math.min(e, t, n),
                    a = i,
                    s = i - o,
                    l = 0 === i ? 0 : s / i;
                return i === o ? r = 0 : (r = function() {
                    switch (i) {
                        case e:
                            return (t - n) / s + (t < n ? 6 : 0);
                        case t:
                            return (n - e) / s + 2;
                        case n:
                            return (e - t) / s + 4
                    }
                }(), r /= 6), {
                    h: r,
                    s: l,
                    v: a
                }
            }
        }, {
            key: "hsvToRGB",
            value: function(e, t, n) {
                var r, i, o, a = Math.floor(6 * e),
                    s = 6 * e - a,
                    l = n * (1 - t),
                    c = n * (1 - s * t),
                    u = n * (1 - (1 - s) * t);
                switch (a % 6) {
                    case 0:
                        o = n, i = u, r = l;
                        break;
                    case 1:
                        o = c, i = n, r = l;
                        break;
                    case 2:
                        o = l, i = n, r = u;
                        break;
                    case 3:
                        o = l, i = c, r = n;
                        break;
                    case 4:
                        o = u, i = l, r = n;
                        break;
                    case 5:
                        o = n, i = l, r = c
                }
                return {
                    r: Math.floor(255 * o),
                    g: Math.floor(255 * i),
                    b: Math.floor(255 * r)
                }
            }
        }, {
            key: "rgbToXYZ",
            value: function(e, t, n) {
                return t /= 255, n /= 255, (e /= 255) > .04045 ? e = Math.pow((e + .055) / 1.055, 2.4) : e /= 12.92, t > .04045 ? t = Math.pow((t + .055) / 1.055, 2.4) : t /= 12.92, n > .04045 ? n = Math.pow((n + .055) / 1.055, 2.4) : n /= 12.92, {
                    x: 100 * (.4124 * e + .3576 * t + .1805 * n),
                    y: 100 * (.2126 * e + .7152 * t + .0722 * n),
                    z: 100 * (.0193 * e + .1192 * t + .9505 * n)
                }
            }
        }, {
            key: "xyzToRGB",
            value: function(e, t, n) {
                var r = 3.2406 * (e /= 100) + -1.5372 * (t /= 100) + -.4986 * (n /= 100),
                    i = -.9689 * e + 1.8758 * t + .0415 * n,
                    o = .0557 * e + -.204 * t + 1.057 * n;
                return r > .0031308 ? r = 1.055 * Math.pow(r, .4166666667) - .055 : r *= 12.92, i > .0031308 ? i = 1.055 * Math.pow(i, .4166666667) - .055 : i *= 12.92, o > .0031308 ? o = 1.055 * Math.pow(o, .4166666667) - .055 : o *= 12.92, {
                    r: 255 * r,
                    g: 255 * i,
                    b: 255 * o
                }
            }
        }, {
            key: "xyzToLab",
            value: function(e, t, r) {
                "object" === n(e) && (t = e.y, r = e.z, e = e.x);
                return t /= 100, r /= 108.883, e = (e /= 95.047) > .008856451679 ? Math.pow(e, .3333333333) : 7.787037037 * e + .1379310345, {
                    l: 116 * (t = t > .008856451679 ? Math.pow(t, .3333333333) : 7.787037037 * t + .1379310345) - 16,
                    a: 500 * (e - t),
                    b: 200 * (t - (r = r > .008856451679 ? Math.pow(r, .3333333333) : 7.787037037 * r + .1379310345))
                }
            }
        }, {
            key: "labToXYZ",
            value: function(e, t, r) {
                "object" === n(e) && (t = e.a, r = e.b, e = e.l);
                var i = (e + 16) / 116,
                    o = i + t / 500,
                    a = i - r / 200;
                return o > .2068965517 ? o *= o * o : o = .1284185493 * (o - .1379310345), i > .2068965517 ? i *= i * i : i = .1284185493 * (i - .1379310345), a > .2068965517 ? a *= a * a : a = .1284185493 * (a - .1379310345), {
                    x: 95.047 * o,
                    y: 100 * i,
                    z: 108.883 * a
                }
            }
        }, {
            key: "rgbToLab",
            value: function(e, t, r) {
                "object" === n(e) && (t = e.g, r = e.b, e = e.r);
                var i = this.rgbToXYZ(e, t, r);
                return this.xyzToLab(i)
            }
        }, {
            key: "labToRGB",
            value: function(e, t, n) {}
        }], (i = null) && r(t.prototype, i), o && r(t, o), e
    }();
    Caman.Convert = i;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(i, "Convert", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/convert.js")
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var r = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, r, i;
        return t = e, i = [{
            key: "initClass",
            value: function() {
                this.events = {}, this.types = ["processStart", "processComplete", "renderStart", "renderFinished", "blockStarted", "blockFinished"]
            }
        }, {
            key: "trigger",
            value: function(e, t) {
                var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (this.events[t] && this.events[t].length) return function() {
                    for (var i = [], o = Array.from(n.events[t]), a = 0; a < o.length; a++) {
                        var s = o[a];
                        null === s.target || e.id === s.target.id ? i.push(s.fn.call(e, r)) : i.push(void 0)
                    }
                    return i
                }()
            }
        }, {
            key: "listen",
            value: function(e, t, n) {
                if ("string" == typeof e) {
                    var r = e,
                        i = t;
                    e = null, t = r, n = i
                }
                return !!Array.from(this.types).includes(t) && (this.events[t] || (this.events[t] = []), this.events[t].push({
                    target: e,
                    fn: n
                }), !0)
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    r.initClass(), Caman.Event = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Event", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/event.js")
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var r = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, r, i;
        return t = e, i = [{
            key: "initClass",
            value: function() {
                this.Type = {
                    Single: 1,
                    Kernel: 2,
                    LayerDequeue: 3,
                    LayerFinished: 4,
                    LoadOverlay: 5,
                    LoadLayerMask: 7,
                    Plugin: 6
                }
            }
        }, {
            key: "register",
            value: function(e, t) {
                return window.Caman.prototype[e] = t
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    r.initClass(), Caman.Filter = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Filter", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/filter.js")
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function r(e, t, r) {
        return t && n(e.prototype, t), r && n(e, r), e
    }
    var i = function() {
        function e(t, n, r, i) {
            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), null == t && (t = 0), this.r = t, null == n && (n = 0), this.g = n, null == r && (r = 0), this.b = r, null == i && (i = 255), this.a = i, this.c = o, this.loc = 0
        }
        return r(e, null, [{
            key: "coordinatesToLocation",
            value: function(e, t, n) {
                return 4 * (t * n + e)
            }
        }, {
            key: "locationToCoordinates",
            value: function(e, t) {
                return {
                    x: e % (4 * t) / 4,
                    y: Math.floor(e / (4 * t))
                }
            }
        }]), r(e, [{
            key: "setContext",
            value: function(e) {
                return this.c = e
            }
        }, {
            key: "locationXY",
            value: function() {
                if (null == this.c) throw "Requires a CamanJS context";
                var e = this.c.dimensions.height - Math.floor(this.loc / (4 * this.c.dimensions.width));
                return {
                    x: this.loc % (4 * this.c.dimensions.width) / 4,
                    y: e
                }
            }
        }, {
            key: "pixelAtLocation",
            value: function(t) {
                if (null == this.c) throw "Requires a CamanJS context";
                return new e(this.c.pixelData[t], this.c.pixelData[t + 1], this.c.pixelData[t + 2], this.c.pixelData[t + 3], this.c)
            }
        }, {
            key: "getPixelRelative",
            value: function(t, n) {
                if (null == this.c) throw "Requires a CamanJS context";
                var r = this.loc + 4 * this.c.dimensions.width * (-1 * n) + 4 * t;
                return r > this.c.pixelData.length || r < 0 ? new e(0, 0, 0, 255, this.c) : this.pixelAtLocation(r)
            }
        }, {
            key: "putPixelRelative",
            value: function(e, t, n) {
                if (null == this.c) throw "Requires a CamanJS context";
                this.loc, this.c.dimensions.width;
                if (!(newLoc > this.c.pixelData.length || newLoc < 0)) return this.c.pixelData[newLoc] = n.r, this.c.pixelData[newLoc + 1] = n.g, this.c.pixelData[newLoc + 2] = n.b, this.c.pixelData[newLoc + 3] = n.a, !0
            }
        }, {
            key: "getPixel",
            value: function(e, t) {
                if (null == this.c) throw "Requires a CamanJS context";
                var n = this.coordinatesToLocation(e, t, this.width);
                return this.pixelAtLocation(n)
            }
        }, {
            key: "putPixel",
            value: function(e, t, n) {
                if (null == this.c) throw "Requires a CamanJS context";
                var r = this.coordinatesToLocation(e, t, this.width);
                return this.c.pixelData[r] = n.r, this.c.pixelData[r + 1] = n.g, this.c.pixelData[r + 2] = n.b, this.c.pixelData[r + 3] = n.a
            }
        }, {
            key: "toString",
            value: function() {
                return this.toKey()
            }
        }, {
            key: "toHex",
            value: function(e) {
                null == e && (e = !1);
                var t = "#" + this.r.toString(16) + this.g.toString(16) + this.b.toString(16);
                return e ? t + this.a.toString(16) : t
            }
        }]), e
    }();
    Caman.Pixel = i;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(i, "Pixel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/pixel.js")
}, function(e, t) {
    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var r = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, r, i;
        return t = e, i = [{
            key: "initClass",
            value: function() {
                this.plugins = {}
            }
        }, {
            key: "register",
            value: function(e, t) {
                return this.plugins[e] = t
            }
        }, {
            key: "execute",
            value: function(e, t, n) {
                return this.plugins[t].apply(e, n)
            }
        }], (r = null) && n(t.prototype, r), i && n(t, i), e
    }();
    r.initClass(), Caman.Plugin = r;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(r, "Plugin", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/plugin.js")
}, function(e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }
    Caman.Filter.register("fillColor", function() {
        var e;
        return e = 1 === arguments.length ? Caman.Convert.hexToRGB(arguments[0]) : {
            r: arguments[0],
            g: arguments[1],
            b: arguments[2]
        }, this.process("fillColor", function(t) {
            return t.r = e.r, t.g = e.g, t.b = e.b, t.a = 255, t
        })
    }), Caman.Filter.register("brightness", function(e) {
        return e = Math.floor(e / 100 * 255), this.process("brightness", function(t) {
            return t.r += e, t.g += e, t.b += e, t
        })
    }), Caman.Filter.register("saturation", function(e) {
        return e *= -.01, this.process("saturation", function(t) {
            var n;
            return n = Math.max(t.r, t.g, t.b), t.r !== n && (t.r += (n - t.r) * e), t.g !== n && (t.g += (n - t.g) * e), t.b !== n && (t.b += (n - t.b) * e), t
        })
    }), Caman.Filter.register("vibrance", function(e) {
        return e *= -1, this.process("vibrance", function(t) {
            var n, r, i;
            return i = Math.max(t.r, t.g, t.b), r = (t.r + t.g + t.b) / 3, n = 2 * Math.abs(i - r) / 255 * e / 100, t.r !== i && (t.r += (i - t.r) * n), t.g !== i && (t.g += (i - t.g) * n), t.b !== i && (t.b += (i - t.b) * n), t
        })
    }), Caman.Filter.register("greyscale", function(e) {
        return this.process("greyscale", function(e) {
            var t;
            return t = Caman.Calculate.luminance(e), e.r = t, e.g = t, e.b = t, e
        })
    }), Caman.Filter.register("contrast", function(e) {
        return e = Math.pow((e + 100) / 100, 2), this.process("contrast", function(t) {
            return t.r /= 255, t.r -= .5, t.r *= e, t.r += .5, t.r *= 255, t.g /= 255, t.g -= .5, t.g *= e, t.g += .5, t.g *= 255, t.b /= 255, t.b -= .5, t.b *= e, t.b += .5, t.b *= 255, t
        })
    }), Caman.Filter.register("hue", function(e) {
        return this.process("hue", function(t) {
            var n, r, i, o, a, s;
            return i = 100 * (o = Caman.Convert.rgbToHSV(t.r, t.g, t.b)).h, i += Math.abs(e), i %= 100, i /= 100, o.h = i, a = (s = Caman.Convert.hsvToRGB(o.h, o.s, o.v)).r, r = s.g, n = s.b, t.r = a, t.g = r, t.b = n, t
        })
    }), Caman.Filter.register("colorize", function() {
        var e, t;
        return 2 === arguments.length ? (t = Caman.Convert.hexToRGB(arguments[0]), e = arguments[1]) : 4 === arguments.length && (t = {
            r: arguments[0],
            g: arguments[1],
            b: arguments[2]
        }, e = arguments[3]), this.process("colorize", function(n) {
            return n.r -= (n.r - t.r) * (e / 100), n.g -= (n.g - t.g) * (e / 100), n.b -= (n.b - t.b) * (e / 100), n
        })
    }), Caman.Filter.register("invert", function() {
        return this.process("invert", function(e) {
            return e.r = 255 - e.r, e.g = 255 - e.g, e.b = 255 - e.b, e
        })
    }), Caman.Filter.register("sepia", function(e) {
        return null == e && (e = 100), e /= 100, this.process("sepia", function(t) {
            return t.r = Math.min(255, t.r * (1 - .607 * e) + t.g * (.769 * e) + t.b * (.189 * e)), t.g = Math.min(255, t.r * (.349 * e) + t.g * (1 - .314 * e) + t.b * (.168 * e)), t.b = Math.min(255, t.r * (.272 * e) + t.g * (.534 * e) + t.b * (1 - .869 * e)), t
        })
    }), Caman.Filter.register("gamma", function(e) {
        return this.process("gamma", function(t) {
            return t.r = 255 * Math.pow(t.r / 255, e), t.g = 255 * Math.pow(t.g / 255, e), t.b = 255 * Math.pow(t.b / 255, e), t
        })
    }), Caman.Filter.register("noise", function(e) {
        return e = 2.55 * Math.abs(e), this.process("noise", function(t) {
            var n;
            return n = Caman.Calculate.randomRange(-1 * e, e), t.r += n, t.g += n, t.b += n, t
        })
    }), Caman.Filter.register("clip", function(e) {
        return e = 2.55 * Math.abs(e), this.process("clip", function(t) {
            return t.r > 255 - e ? t.r = 255 : t.r < e && (t.r = 0), t.g > 255 - e ? t.g = 255 : t.g < e && (t.g = 0), t.b > 255 - e ? t.b = 255 : t.b < e && (t.b = 0), t
        })
    }), Caman.Filter.register("channels", function(e) {
        var t;
        if ("object" !== n(e)) return this;
        for (t in e)({}).hasOwnProperty.call(e, t) && (0 !== e[t] ? e[t] /= 100 : delete e[t]);
        return 0 === e.length ? this : this.process("channels", function(t) {
            return null != e.red && (e.red > 0 ? t.r += (255 - t.r) * e.red : t.r -= t.r * Math.abs(e.red)), null != e.green && (e.green > 0 ? t.g += (255 - t.g) * e.green : t.g -= t.g * Math.abs(e.green)), null != e.blue && (e.blue > 0 ? t.b += (255 - t.b) * e.blue : t.b -= t.b * Math.abs(e.blue)), t
        })
    }), Caman.Filter.register("curves", function() {
        var e, t, n, r, i, o, a, s, l, c, u, f;
        if (n = arguments[0], "function" == typeof(a = (r = 2 <= arguments.length ? [].slice.call(arguments, 1) : [])[r.length - 1]) ? (e = a, r.pop()) : "string" == typeof a ? (e = Caman.Calculate[a], r.pop()) : e = Caman.Calculate.bezier, "string" == typeof n && (n = n.split("")), "v" === n[0] && (n = ["r", "g", "b"]), r.length < 2) throw "Invalid number of arguments to curves filter";
        if (t = e(r, 0, 255), (s = r[0])[0] > 0)
            for (o = l = 0, u = s[0]; 0 <= u ? l < u : l > u; o = 0 <= u ? ++l : --l) t[o] = s[1];
        if ((i = r[r.length - 1])[0] < 255)
            for (o = c = f = i[0]; f <= 255 ? c <= 255 : c >= 255; o = f <= 255 ? ++c : --c) t[o] = i[1];
        return this.process("curves", function(e) {
            var r, i;
            for (o = r = 0, i = n.length; 0 <= i ? r < i : r > i; o = 0 <= i ? ++r : --r) e[n[o]] = t[e[n[o]]];
            return e
        })
    }), Caman.Filter.register("exposure", function(e) {
        var t, n, r;
        return t = [0, 255 * (r = Math.abs(e) / 100)], n = [255 - 255 * r, 255], e < 0 && (t = t.reverse(), n = n.reverse()), this.curves("rgb", [0, 0], t, n, [255, 255])
    })
}, function(e, t) {
    Caman.Filter.register("boxBlur", function() {
        return this.processKernel("Box Blur", [1, 1, 1, 1, 1, 1, 1, 1, 1])
    }), Caman.Filter.register("heavyRadialBlur", function() {
        return this.processKernel("Heavy Radial Blur", [0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0])
    }), Caman.Filter.register("gaussianBlur", function() {
        return this.processKernel("Gaussian Blur", [1, 4, 6, 4, 1, 4, 16, 24, 16, 4, 6, 24, 36, 24, 6, 4, 16, 24, 16, 4, 1, 4, 6, 4, 1])
    }), Caman.Filter.register("motionBlur", function(e) {
        var t;
        return t = 0 === e || 180 === e ? [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0] : e > 0 && e < 90 || e > 180 && e < 270 ? [0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0] : 90 === e || 270 === e ? [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] : [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1], this.processKernel("Motion Blur", t)
    }), Caman.Filter.register("sharpen", function(e) {
        return null == e && (e = 100), e /= 100, this.processKernel("Sharpen", [0, -e, 0, -e, 4 * e + 1, -e, 0, -e, 0])
    })
}, function(e, t) {
    Caman.Filter.register("vignette", function(e, t) {
        var n, r, i, o;
        return null == t && (t = 60), "string" == typeof e && "%" === e.substr(-1) && (e = this.dimensions.height > this.dimensions.width ? this.dimensions.width * (parseInt(e.substr(0, e.length - 1), 10) / 100) : this.dimensions.height * (parseInt(e.substr(0, e.length - 1), 10) / 100)), t /= 100, r = [this.dimensions.width / 2, this.dimensions.height / 2], o = Math.sqrt(Math.pow(r[0], 2) + Math.pow(r[1], 2)), i = o - e, n = Caman.Calculate.bezier([0, 1], [30, 30], [70, 60], [100, 80]), this.process("vignette", function(o) {
            var a, s, l;
            return l = o.locationXY(), (a = Caman.Calculate.distance(l.x, l.y, r[0], r[1])) > i && (s = Math.max(1, n[Math.round((a - i) / e * 100)] / 10 * t), o.r = 255 * Math.pow(o.r / 255, s), o.g = 255 * Math.pow(o.g / 255, s), o.b = 255 * Math.pow(o.b / 255, s)), o
        })
    })
}, function(e, t) {
    Caman.Filter.register("posterize", function(e) {
        var t, n;
        return t = 256 / e, n = 255 / (e - 1), this.process("posterize", function(e) {
            return e.r = Math.floor(Math.floor(e.r / t) * n), e.g = Math.floor(Math.floor(e.g / t) * n), e.b = Math.floor(Math.floor(e.b / t) * n), e
        })
    })
}, function(e, t) {
    Caman.Filter.register("edgeEnhance", function() {
        return this.processKernel("Edge Enhance", [0, 0, 0, -1, 1, 0, 0, 0, 0])
    }), Caman.Filter.register("edgeDetect", function() {
        return this.processKernel("Edge Detect", [-1, -1, -1, -1, 8, -1, -1, -1, -1])
    }), Caman.Filter.register("emboss", function() {
        return this.processKernel("Emboss", [-2, -1, 0, -1, 1, 1, 0, 1, 2])
    })
}, function(e, t) {
    Caman.Filter.register("grungy", function() {
        return this.gamma(1.5), this.clip(25), this.saturation(-60), this.contrast(5), this.noise(5), this.vignette("50%", 30)
    })
}, function(e, t) {
    Caman.Filter.register("hazyDays", function() {
        return this.gamma(1.2), this.newLayer(function() {
            return this.setBlendingMode("overlay"), this.opacity(60), this.copyParent(), this.filter.channels({
                red: 5
            }), this.filter.stackBlur(15)
        }), this.newLayer(function() {
            return this.setBlendingMode("addition"), this.opacity(40), this.fillColor("#6899ba")
        }), this.newLayer(function() {
            return this.setBlendingMode("multiply"), this.opacity(35), this.copyParent(), this.filter.brightness(40), this.filter.vibrance(40), this.filter.exposure(30), this.filter.contrast(15), this.filter.curves("r", [0, 40], [128, 128], [128, 128], [255, 215]), this.filter.curves("g", [0, 40], [128, 128], [128, 128], [255, 215]), this.filter.curves("b", [0, 40], [128, 128], [128, 128], [255, 215]), this.filter.stackBlur(5)
        }), this.curves("r", [20, 0], [128, 158], [128, 128], [235, 255]), this.curves("g", [20, 0], [128, 128], [128, 128], [235, 255]), this.curves("b", [20, 0], [128, 108], [128, 128], [235, 255]), this.vignette("45%", 20)
    })
}, function(e, t) {
    Caman.Filter.register("lomo", function(e) {
        return null == e && (e = !0), this.brightness(15), this.exposure(15), this.curves("rgb", [0, 0], [200, 0], [155, 255], [255, 255]), this.saturation(-20), this.gamma(1.8), e && this.vignette("50%", 60), this.brightness(5)
    })
}, function(e, t) {
    Caman.Filter.register("sinCity", function() {
        return this.contrast(100), this.brightness(15), this.exposure(10), this.posterize(80), this.clip(30), this.greyscale()
    })
}, function(e, t) {
    Caman.Filter.register("crossProcess", function() {
        return this.exposure(5), this.colorize("#e87b22", 4), this.sepia(20), this.channels({
            blue: 8,
            red: 3
        }), this.curves("b", [0, 0], [100, 150], [180, 180], [255, 255]), this.contrast(15), this.vibrance(75), this.gamma(1.6)
    })
}, function(e, t) {
    Caman.Filter.register("glowingSun", function(e) {
        if (null == e && (e = !0), this.brightness(10), this.newLayer(function() {
                return this.setBlendingMode("multiply"), this.opacity(80), this.copyParent(), this.filter.gamma(.8), this.filter.contrast(50), this.filter.exposure(10)
            }), this.newLayer(function() {
                return this.setBlendingMode("softLight"), this.opacity(80), this.fillColor("#f49600")
            }), this.exposure(20), this.gamma(.8), e) return this.vignette("45%", 20)
    })
}, function(e, t) {
    Caman.Filter.register("jarques", function() {
        return this.saturation(-35), this.curves("b", [20, 0], [90, 120], [186, 144], [255, 230]), this.curves("r", [0, 0], [144, 90], [138, 120], [255, 255]), this.curves("g", [10, 0], [115, 105], [148, 100], [255, 248]), this.curves("rgb", [0, 0], [120, 100], [128, 140], [255, 255]), this.sharpen(20)
    })
}, function(e, t) {
    Caman.Filter.register("love", function() {
        return this.brightness(5), this.exposure(8), this.contrast(4), this.colorize("#c42007", 30), this.vibrance(50), this.gamma(1.3)
    })
}, function(e, t) {
    Caman.Filter.register("oldBoot", function() {
        return this.saturation(-20), this.vibrance(-50), this.gamma(1.1), this.sepia(30), this.channels({
            red: -10,
            blue: 5
        }), this.curves("rgb", [0, 0], [80, 50], [128, 230], [255, 255]), this.vignette("60%", 30)
    })
}, function(e, t) {
    Caman.Filter.register("orangePeel", function() {
        return this.curves("rgb", [0, 0], [100, 50], [140, 200], [255, 255]), this.vibrance(-30), this.saturation(-30), this.colorize("#ff9000", 30), this.contrast(-5), this.gamma(1.4)
    })
}, function(e, t) {
    Caman.Filter.register("pinhole", function() {
        return this.greyscale(), this.sepia(10), this.exposure(10), this.contrast(15), this.vignette("60%", 35)
    })
}, function(e, t) {
    Caman.Filter.register("sunrise", function() {
        return this.exposure(3.5), this.saturation(-5), this.vibrance(50), this.sepia(60), this.colorize("#e87b22", 10), this.channels({
            red: 8,
            blue: 8
        }), this.contrast(5), this.gamma(1.2), this.vignette("55%", 25)
    })
}, function(e, t) {
    Caman.Filter.register("vintage", function(e) {
        if (null == e && (e = !0), this.greyscale(), this.contrast(5), this.noise(3), this.sepia(100), this.channels({
                red: 8,
                blue: 2,
                green: 4
            }), this.gamma(.87), e) return this.vignette("40%", 30)
    })
}, function(e, t) {
    var n, r, i;
    r = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], i = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24], n = function() {
        return this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }, Caman.Plugin.register("stackBlur", function(e) {
        var t, o, a, s, l, c, u, f, p, d, h, m, g, b, y, v, _, w, x, C, k, E, T, O, S, A, R, j, P, D, M, L, I, U, B, z, H, N, F, W, Y, q, $, V;
        if (!(isNaN(e) || e < 1)) {
            for (e |= 0, y = this.pixelData, s = e + e + 1, (P = this.dimensions.width) << 2, D = P - 1, p = (f = this.dimensions.height) - 1, j = (C = e + 1) * (C + 1) / 2, T = R = new n, d = z = 1; 1 <= s ? z < s : z > s; d = 1 <= s ? ++z : --z) T = T.next = new n, d === C && (O = T);
            for (T.next = R, S = null, A = null, B = I = 0, h = r[e], E = i[e], L = H = 0; 0 <= f ? H < f : H > f; L = 0 <= f ? ++H : --H) {
                for (_ = l = t = x = u = a = 0, w = C * (v = y[I]), c = C * (b = y[I + 1]), o = C * (g = y[I + 2]), x += j * v, u += j * b, a += j * g, T = R, d = N = 0; 0 <= C ? N < C : N > C; d = 0 <= C ? ++N : --N) T.r = v, T.g = b, T.b = g, T = T.next;
                for (d = F = 1; 1 <= C ? F < C : F > C; d = 1 <= C ? ++F : --F) m = I + ((D < d ? D : d) << 2), x += (T.r = v = y[m]) * (k = C - d), u += (T.g = b = y[m + 1]) * k, a += (T.b = g = y[m + 2]) * k, _ += v, l += b, t += g, T = T.next;
                for (S = R, A = O, M = W = 0; 0 <= P ? W < P : W > P; M = 0 <= P ? ++W : --W) y[I] = x * h >> E, y[I + 1] = u * h >> E, y[I + 2] = a * h >> E, x -= w, u -= c, a -= o, w -= S.r, c -= S.g, o -= S.b, m = B + ((m = M + e + 1) < D ? m : D) << 2, x += _ += S.r = y[m], u += l += S.g = y[m + 1], a += t += S.b = y[m + 2], S = S.next, w += v = A.r, c += b = A.g, o += g = A.b, _ -= v, l -= b, t -= g, A = A.next, I += 4;
                B += P
            }
            for (M = Y = 0; 0 <= P ? Y < P : Y > P; M = 0 <= P ? ++Y : --Y) {
                for (l = t = _ = u = a = x = 0, w = C * (v = y[I = M << 2]), c = C * (b = y[I + 1]), o = C * (g = y[I + 2]), x += j * v, u += j * b, a += j * g, T = R, d = q = 0; 0 <= C ? q < C : q > C; d = 0 <= C ? ++q : --q) T.r = v, T.g = b, T.b = g, T = T.next;
                for (U = P, d = $ = 1; 1 <= e ? $ <= e : $ >= e; d = 1 <= e ? ++$ : --$) I = U + M << 2, x += (T.r = v = y[I]) * (k = C - d), u += (T.g = b = y[I + 1]) * k, a += (T.b = g = y[I + 2]) * k, _ += v, l += b, t += g, T = T.next, d < p && (U += P);
                for (I = M, S = R, A = O, L = V = 0; 0 <= f ? V < f : V > f; L = 0 <= f ? ++V : --V) y[m = I << 2] = x * h >> E, y[m + 1] = u * h >> E, y[m + 2] = a * h >> E, x -= w, u -= c, a -= o, w -= S.r, c -= S.g, o -= S.b, m = M + ((m = L + C) < p ? m : p) * P << 2, x += _ += S.r = y[m], u += l += S.g = y[m + 1], a += t += S.b = y[m + 2], S = S.next, w += v = A.r, c += b = A.g, o += g = A.b, _ -= v, l -= b, t -= g, A = A.next, I += P
            }
            return this
        }
    }), Caman.Filter.register("stackBlur", function(e) {
        return this.processPlugin("stackBlur", [e])
    });
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(n, "BlurStack", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/plugins/stackBlur.js"), __REACT_HOT_LOADER__.register(r, "mul_table", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/plugins/stackBlur.js"), __REACT_HOT_LOADER__.register(i, "shg_table", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/plugins/stackBlur.js"))
}, function(e, t, n) {
    var r = n(61);
    "string" == typeof r && (r = [
        [e.i, r, ""]
    ]);
    var i = {
        hmr: !0,
        transform: void 0
    };
    n(63)(r, i);
    r.locals && (e.exports = r.locals)
}, function(e, t, n) {
    (e.exports = n(62)(void 0)).push([e.i, '@font-face {\n  font-family: \'filerobot-image-editor-font\';\n  src:  url(\'fonts/filerobot-image-editor-font.eot?ua0hzun\');\n  src:  url(\'fonts/filerobot-image-editor-font.eot?ua0hzun#iefix\') format(\'embedded-opentype\'),\n  url(\'fonts/filerobot-image-editor-font.ttf?ua0hzun\') format(\'truetype\'),\n  url(\'fonts/filerobot-image-editor-font.woff?ua0hzun\') format(\'woff\'),\n  url(\'fonts/filerobot-image-editor-font.svg?ua0hzun#filerobot-image-editor-font\') format(\'svg\');\n  font-weight: normal;\n  font-style: normal;\n}\n\n[class^="sf-i-"], [class*=" sf-i-"] {\n  /* use !important to prevent issues with browser extensions that change fonts */\n  font-family: \'filerobot-image-editor-font\' !important;\n  speak: none;\n  font-style: normal;\n  font-weight: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.sf-i-arrows-back:before {\n  content: "\\E905";\n}\n.sf-i-arrows-forward:before {\n  content: "\\E906";\n}\n.sf-i-filter:before {\n  content: "\\E904";\n}\n.sf-i-minus:before {\n  content: "\\E910";\n}\n.sf-i-plus:before {\n  content: "\\E911";\n}\n.sf-i-effects:before {\n  content: "\\E900";\n}\n.sf-i-crop:before {\n  content: "\\E901";\n}\n.sf-i-rotation_left:before {\n  content: "\\E902";\n}\n.sf-i-mirror_vertical:before {\n  content: "\\E903";\n}\n.sf-i-resize:before {\n  content: "\\E907";\n}\n.sf-i-rotation_right:before {\n  content: "\\E908";\n}\n.sf-i-mirrot_horizontal:before {\n  content: "\\E909";\n}\n.sf-i-adjust:before {\n  content: "\\E90A";\n}\n.sf-i-orientation:before {\n  content: "\\E90B";\n}\n.sf-i-cross:before {\n  content: "\\E90C";\n}\n.sf-i-point_orientation:before {\n  content: "\\E90D";\n}\n.sf-i-link:before {\n  content: "\\E90E";\n}\n.sf-i-without_link:before {\n  content: "\\E90F";\n}\n', ""])
}, function(e, t) {
    e.exports = function(e) {
        var t = [];
        return t.toString = function() {
            return this.map(function(t) {
                var n = function(e, t) {
                    var n = e[1] || "",
                        r = e[3];
                    if (!r) return n;
                    if (t && "function" == typeof btoa) {
                        var i = (a = r, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(a)))) + " */"),
                            o = r.sources.map(function(e) {
                                return "/*# sourceURL=" + r.sourceRoot + e + " */"
                            });
                        return [n].concat(o).concat([i]).join("\n")
                    }
                    var a;
                    return [n].join("\n")
                }(t, e);
                return t[2] ? "@media " + t[2] + "{" + n + "}" : n
            }).join("")
        }, t.i = function(e, n) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var r = {}, i = 0; i < this.length; i++) {
                var o = this[i][0];
                "number" == typeof o && (r[o] = !0)
            }
            for (i = 0; i < e.length; i++) {
                var a = e[i];
                "number" == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = "(" + a[2] + ") and (" + n + ")"), t.push(a))
            }
        }, t
    }
}, function(e, t, n) {
    var r, i, o = {},
        a = (r = function() {
            return window && document && document.all && !window.atob
        }, function() {
            return void 0 === i && (i = r.apply(this, arguments)), i
        }),
        s = function(e) {
            var t = {};
            return function(e) {
                if (void 0 === t[e]) {
                    var n = function(e) {
                        return document.querySelector(e)
                    }.call(this, e);
                    if (n instanceof window.HTMLIFrameElement) try {
                        n = n.contentDocument.head
                    } catch (e) {
                        n = null
                    }
                    t[e] = n
                }
                return t[e]
            }
        }(),
        l = null,
        c = 0,
        u = [],
        f = n(64);

    function p(e, t) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n],
                i = o[r.id];
            if (i) {
                i.refs++;
                for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
                for (; a < r.parts.length; a++) i.parts.push(y(r.parts[a], t))
            } else {
                var s = [];
                for (a = 0; a < r.parts.length; a++) s.push(y(r.parts[a], t));
                o[r.id] = {
                    id: r.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function d(e, t) {
        for (var n = [], r = {}, i = 0; i < e.length; i++) {
            var o = e[i],
                a = t.base ? o[0] + t.base : o[0],
                s = {
                    css: o[1],
                    media: o[2],
                    sourceMap: o[3]
                };
            r[a] ? r[a].parts.push(s) : n.push(r[a] = {
                id: a,
                parts: [s]
            })
        }
        return n
    }

    function h(e, t) {
        var n = s(e.insertInto);
        if (!n) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var r = u[u.length - 1];
        if ("top" === e.insertAt) r ? r.nextSibling ? n.insertBefore(t, r.nextSibling) : n.appendChild(t) : n.insertBefore(t, n.firstChild), u.push(t);
        else if ("bottom" === e.insertAt) n.appendChild(t);
        else {
            if ("object" != typeof e.insertAt || !e.insertAt.before) throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
            var i = s(e.insertInto + " " + e.insertAt.before);
            n.insertBefore(t, i)
        }
    }

    function m(e) {
        if (null === e.parentNode) return !1;
        e.parentNode.removeChild(e);
        var t = u.indexOf(e);
        t >= 0 && u.splice(t, 1)
    }

    function g(e) {
        var t = document.createElement("style");
        return e.attrs.type = "text/css", b(t, e.attrs), h(e, t), t
    }

    function b(e, t) {
        Object.keys(t).forEach(function(n) {
            e.setAttribute(n, t[n])
        })
    }

    function y(e, t) {
        var n, r, i, o;
        if (t.transform && e.css) {
            if (!(o = t.transform(e.css))) return function() {};
            e.css = o
        }
        if (t.singleton) {
            var a = c++;
            n = l || (l = g(t)), r = w.bind(null, n, a, !1), i = w.bind(null, n, a, !0)
        } else e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = function(e) {
            var t = document.createElement("link");
            return e.attrs.type = "text/css", e.attrs.rel = "stylesheet", b(t, e.attrs), h(e, t), t
        }(t), r = function(e, t, n) {
            var r = n.css,
                i = n.sourceMap,
                o = void 0 === t.convertToAbsoluteUrls && i;
            (t.convertToAbsoluteUrls || o) && (r = f(r));
            i && (r += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
            var a = new Blob([r], {
                    type: "text/css"
                }),
                s = e.href;
            e.href = URL.createObjectURL(a), s && URL.revokeObjectURL(s)
        }.bind(null, n, t), i = function() {
            m(n), n.href && URL.revokeObjectURL(n.href)
        }) : (n = g(t), r = function(e, t) {
            var n = t.css,
                r = t.media;
            r && e.setAttribute("media", r);
            if (e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }.bind(null, n), i = function() {
            m(n)
        });
        return r(e),
            function(t) {
                if (t) {
                    if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                    r(e = t)
                } else i()
            }
    }
    e.exports = function(e, t) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
        (t = t || {}).attrs = "object" == typeof t.attrs ? t.attrs : {}, t.singleton || (t.singleton = a()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
        var n = d(e, t);
        return p(n, t),
            function(e) {
                for (var r = [], i = 0; i < n.length; i++) {
                    var a = n[i];
                    (s = o[a.id]).refs--, r.push(s)
                }
                e && p(d(e, t), t);
                for (i = 0; i < r.length; i++) {
                    var s;
                    if (0 === (s = r[i]).refs) {
                        for (var l = 0; l < s.parts.length; l++) s.parts[l]();
                        delete o[s.id]
                    }
                }
            }
    };
    var v, _ = (v = [], function(e, t) {
        return v[e] = t, v.filter(Boolean).join("\n")
    });

    function w(e, t, n, r) {
        var i = n ? "" : r.css;
        if (e.styleSheet) e.styleSheet.cssText = _(t, i);
        else {
            var o = document.createTextNode(i),
                a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(o, a[t]) : e.appendChild(o)
        }
    }
}, function(e, t) {
    e.exports = function(e) {
        var t = "undefined" != typeof window && window.location;
        if (!t) throw new Error("fixUrls requires window.location");
        if (!e || "string" != typeof e) return e;
        var n = t.protocol + "//" + t.host,
            r = n + t.pathname.replace(/\/[^\/]*$/, "/");
        return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(e, t) {
            var i, o = t.trim().replace(/^"(.*)"$/, function(e, t) {
                return t
            }).replace(/^'(.*)'$/, function(e, t) {
                return t
            });
            return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")")
        })
    }
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n(4),
        i = n(0),
        o = n.n(i),
        a = n(1);

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                l(e, t, n[t])
            })
        }
        return e
    }

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = {
            textFontSize: "14px",
            colors: {
                success: "#5cb85c",
                warning: "#f0ad4e",
                error: "#d9534f",
                muted: "#636c72",
                base: "light",
                light: {
                    base: "#F9FAFB",
                    dark: "#F4F6F8",
                    darker: "#DFE4E8"
                },
                dark: {
                    base: "#1e262c",
                    light: "#454F5B",
                    lighter: "#637381"
                },
                primary: {
                    base: "#181830",
                    light: "#263138",
                    lighter: "#34444c",
                    dark: "#101021",
                    darker: "#090912",
                    text: "#F9FAFB"
                },
                secondary: {
                    base: "#00707c",
                    light: "#007E8A",
                    lighter: "#008D99",
                    dark: "#00616D",
                    darker: "#005662",
                    text: "#F9FAFB"
                },
                text: {
                    base: "#F9FAFB",
                    dark: "#F4F6F8",
                    mute: "#aaa",
                    light: "#fff"
                },
                background: {
                    base: "#f1f1f1"
                },
                border: {
                    base: "#ccc"
                },
                link: {
                    base: "#00707c",
                    over: "#00616D"
                },
                brand: {
                    success: "#5cb85c",
                    warning: "#f0ad4e",
                    error: "#d9534f",
                    muted: "#636c72"
                }
            },
            modal: {
                borderRadius: "4px",
                fluid: {
                    xs: "35%",
                    sm: "45%",
                    md: "60%",
                    lg: "80%",
                    xl: "90%"
                },
                fixed: {
                    xs: "200px",
                    sm: "300px",
                    md: "450px",
                    lg: "650px",
                    xl: "800px"
                }
            },
            button: {
                tt: "none"
            }
        },
        u = s({}, c, {
            radii: [0, "0.2rem", "0.25rem", ".3rem"],
            mainBackgroundColor: "#1e262c",
            mainBackgroundColorHover: "#263138",
            mainBackgroundColorActive: "#34444c",
            secondBackgroundColor: "#263138",
            textColor: "#e7f1f4",
            textColorHover: "#fff",
            textMuted: "#70777f",
            borderColor: "#70777f",
            borderDarkColor: "#161e23",
            fieldWidth: "120px",
            borderInputColor: "#3b4d54",
            borderInputColorHover: "#52686d",
            borderInputColorActive: "#52686d",
            inputBackgroundColor: "#34444c",
            inputBoxShadowColor: "#03a9bb",
            inputPlaceholderColor: "#888d94",
            mainThemeColor: "#00707c",
            mainThemeColorHover: "#00616D",
            mainThemeColorOpacity: "rgba(0, 112, 124, 0.5)",
            btnSaveColor: "#009345",
            btnSaveColorHover: "#00b549",
            btnThemeColor: "#34444c",
            btnPaddingSm: "2px 14px",
            btnFontSizeSm: "12px",
            btnBorderRadius: "2px",
            modalOverlayColor: "#484848",
            btnMainColor: function(e) {
                return "\n    color: #fff;\n    background-color: #00707c;\n    border-color: #00707c;\n    \n    :hover {\n      color: #fff;\n      background-color: #00616D;\n      border-color: #00616D;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(0, 112, 124, 0.5);\n              box-shadow: 0 0 0 2px rgba(0, 112, 124, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #00616D;\n      background-image: none;\n      border-color: #00616D;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: rgba(0, 112, 124, 0.5);\n      border-color: rgba(0, 112, 124, 0.5);\n    " : "", "\n    \n    ").concat(e.active ? "\n       color: #fff;\n      background-color: #00616D;\n      background-image: none;\n      border-color: #00616D;\n    " : "", "\n  ")
            },
            button: s({}, c.button, {
                sm: {
                    p: "4px 10px",
                    fz: "12px",
                    lh: "1.5",
                    br: "3px"
                },
                md: {
                    p: "6px 12px",
                    fz: "14px",
                    lh: "1.5",
                    br: "3px"
                },
                lg: {
                    p: "8px 14px",
                    fz: "16px",
                    lh: "1.5",
                    br: "5px"
                }
            }),
            modal: s({}, c.modal, {
                backgroundColor: "#1e262c",
                color: "#e7f1f4",
                colorMuted: "#70777f",
                colorMutedHover: "#e7f1f4"
            })
        });

    function f(e) {
        var t = e.exact,
            n = e.xl,
            r = e.lg,
            i = e.md,
            o = e.sm,
            a = e.xs,
            s = e.fluid,
            l = t ? "exact" : n ? "xl" : r ? "lg" : i ? "md" : o ? "sm" : a ? "xs" : "md";
        return "exact" === l ? t : u.modal[s ? "fluid" : "fixed"][l]
    }

    function p(e) {
        return e.dark ? "" : "\n    color: ".concat(_(e, "text"), ";\n    background-color: ").concat(_(e, "background"), ";\n    border: 1px solid ").concat(_(e, "border"), ";\n    \n    &::-webkit-input-placeholder {\n      color:  ").concat(_(e, "text", "muted"), ";\n    }\n    &::-moz-placeholder {\n      color:  ").concat(_(e, "text", "muted"), ";\n    }\n    &:-ms-input-placeholder {\n      color:  ").concat(_(e, "text", "muted"), ";\n    }\n    &::-ms-input-placeholder {\n      color:  ").concat(_(e, "text", "muted"), ";\n    }\n    &::placeholder {\n      color:  ").concat(_(e, "text", "muted"), ";\n    }\n    \n    &:focus {\n      color: ").concat(_(e, "text"), ";\n      background-color: ").concat(_(e, "background"), ";\n      border-color: ").concat(_(e, "link"), ";\n      outline: 0;\n    }\n    &:focus::-ms-value {\n      color: ").concat(_(e, "text"), ";\n      background-color: ").concat(_(e, "background"), ";\n      border-color: ").concat(_(e, "link"), ";\n      outline: 0;\n    }\n  ")
    }

    function d(e) {
        return "\n    font-family: 'filerobot-image-editor-font' !important;\n    color: ".concat(e.muted ? u.colors.text.mute : u.colors.text.base, ";\n    speak: none;\n    font-style: normal;\n    font-weight: normal;\n    font-variant: normal;\n    text-transform: none;\n    line-height: 1;\n  \n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    \n    :hover {\n      color: ").concat(e.muted ? u.colors.text.mute : u.colors.text.base, ";\n    }\n  ")
    }

    function h(e, t, n) {
        if ("number" != typeof e || e < -1 || e > 1 || "string" != typeof t || "r" != t[0] && "#" != t[0] || "string" != typeof n && void 0 !== n) return null;
        window.sbcRip || (window.sbcRip = function(e) {
            var t = e.length,
                n = new Object;
            if (t > 9) {
                if ((e = e.split(",")).length < 3 || e.length > 4) return null;
                n[0] = r(e[0].slice(4)), n[1] = r(e[1]), n[2] = r(e[2]), n[3] = e[3] ? parseFloat(e[3]) : -1
            } else {
                if (8 == t || 6 == t || t < 4) return null;
                t < 6 && (e = "#" + e[1] + e[1] + e[2] + e[2] + e[3] + e[3] + (t > 4 ? e[4] + "" + e[4] : "")), e = r(e.slice(1), 16), n[0] = e >> 16 & 255, n[1] = e >> 8 & 255, n[2] = 255 & e, n[3] = 9 == t || 5 == t ? i((e >> 24 & 255) / 255 * 1e4) / 1e4 : -1
            }
            return n
        });
        var r = parseInt,
            i = Math.round,
            o = t.length > 9,
            a = (o = "string" == typeof n ? n.length > 9 || "c" == n && !o : o, e < 0),
            s = (e = a ? -1 * e : e, n = n && "c" != n ? n : a ? "#000000" : "#FFFFFF", window.sbcRip(t)),
            l = window.sbcRip(n);
        return s && l ? o ? "rgb(" + i((l[0] - s[0]) * e + s[0]) + "," + i((l[1] - s[1]) * e + s[1]) + "," + i((l[2] - s[2]) * e + s[2]) + (s[3] < 0 && l[3] < 0 ? ")" : "," + (s[3] > -1 && l[3] > -1 ? i(1e4 * ((l[3] - s[3]) * e + s[3])) / 1e4 : l[3] < 0 ? s[3] : l[3]) + ")") : "#" + (4294967296 + 16777216 * (s[3] > -1 && l[3] > -1 ? i(255 * ((l[3] - s[3]) * e + s[3])) : l[3] > -1 ? i(255 * l[3]) : s[3] > -1 ? i(255 * s[3]) : 255) + 65536 * i((l[0] - s[0]) * e + s[0]) + 256 * i((l[1] - s[1]) * e + s[1]) + i((l[2] - s[2]) * e + s[2])).toString(16).slice(s[3] > -1 || l[3] > -1 ? 1 : 3) : null
    }

    function m(e) {
        return /^#?([a-f\d])([a-f\d])([a-f\d])$/i.test(e) || /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.test(e)
    }

    function g(e) {
        e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, n, r) {
            return t + t + n + n + r + r
        });
        var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
        return t ? {
            r: parseInt(t[1], 16),
            g: parseInt(t[2], 16),
            b: parseInt(t[3], 16)
        } : null
    }
    var b = function(e) {
            if (!e) return null;
            var t = h(-.1, e) || "";
            return t.toLowerCase() === e.toLowerCase() ? h(.25, e) : t
        },
        y = function(e, t) {
            if (!e) return null;
            var n = m(e) ? e : h(0, e, "c");
            if (!n) return null;
            var r = g(n);
            return r ? "rgba(".concat(r.r, ", ").concat(r.g, ", ").concat(r.b, ", ").concat(t, ")") : e
        },
        v = function(e, t, n) {
            var r = e.sm,
                i = e.lg,
                o = r ? "sm" : i ? "lg" : "md";
            return u[t] && u[t][o] && u[t][o][n]
        },
        _ = function(e, t) {
            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "base",
                r = arguments.length > 3 ? arguments[3] : void 0,
                i = arguments.length > 4 ? arguments[4] : void 0,
                o = r ? u.colors.base : null;
            return u.colors[t][o ? o + (i ? "er" : "") : n]
        };

    function w(e) {
        var t = "";
        switch (e) {
            case "cross":
                t = "\\e90c";
                break;
            case "effects":
                t = "\\e900";
                break;
            case "filters":
                t = "\\e904";
                break;
            case "adjust":
                t = "\\e90a";
                break;
            case "crop":
                t = "\\e901";
                break;
            case "resize":
                t = "\\e907";
                break;
            case "rotate":
                t = "\\e90b";
                break;
            case "previous":
                t = "\\e905";
                break;
            case "next":
                t = "\\e906";
                break;
            case "ratio":
                t = "\\e90e";
                break;
            case "no-ratio":
                t = "\\e90f";
                break;
            case "left-rotate":
                t = "\\e902";
                break;
            case "right-rotate":
                t = "\\e908";
                break;
            default:
                return
        }
        return "\n    :before {\n      content: '".concat(t, "'\n    }\n  ")
    }
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(c, "commonTheme", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(u, "variables", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(f, "getModalWidth", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(p, "getFieldColorStyles", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(d, "getIconStyles", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(h, "shadeBlendConvert", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(m, "isHex", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(g, "hexToRgb", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(b, "getHoverColor", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(y, "getWithOpacity", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(v, "getElementStylesBySize", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(_, "getColor", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"), __REACT_HOT_LOADER__.register(w, "getIconByName", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/styleUtils.js"));

    function x() {
        var e = R(["\n  text-transform: capitalize;\n  height: 20px;\n  line-height: 20px;\n"]);
        return x = function() {
            return e
        }, e
    }

    function C() {
        var e = R(["\n  background: url('", "') 50% 50% / cover no-repeat;\n  width: 55px;\n  height: 55px;\n  border-radius: 2px;\n  overflow: hidden;\n  display: inline-block;\n"]);
        return C = function() {
            return e
        }, e
    }

    function k() {
        var e = R(["\n  display: inline-block;\n  vertical-align: top;\n  padding: 10px;\n  text-align: center;\n  min-width: 90px;\n  height: 90px;\n  cursor: pointer;\n  color: ", ";\n  font-size: 12px;\n  \n  :hover {\n    background: ", ";\n  }\n"]);
        return k = function() {
            return e
        }, e
    }

    function E() {
        var e = R(["\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  ::-webkit-scrollbar {\n    height: 10px !important;\n  }\n   \n  ::-webkit-scrollbar-thumb {\n    background: #3b4d54;\n    border-radius: 5px;\n  }\n"]);
        return E = function() {
            return e
        }, e
    }

    function T() {
        var e = R(["\n  height: 20px;\n  line-height: 20px;\n"]);
        return T = function() {
            return e
        }, e
    }

    function O() {
        var e = R(["\n  height: 40px;\n  font-size: 40px;\n  \n  ", "\n  ", "\n"]);
        return O = function() {
            return e
        }, e
    }

    function S() {
        var e = R(["\n  padding: 20px 10px;\n  cursor: pointer;\n  display: inline-block;\n  min-width: 80px;\n  min-height: 100px;\n  text-align: center;\n  font-size: 12px;\n  color: ", ";\n  text-transform: ", ";\n  background: ", ";\n  \n  :hover {\n    color: ", ";\n    background: ", ";\n  }\n"]);
        return S = function() {
            return e
        }, e
    }

    function A() {
        var e = R(["\n  height: 100px;\n  width: calc(100% - 200px);\n  border-left: 1px solid ", ";\n  border-right: 1px solid ", ";\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  ::-webkit-scrollbar {\n    height: 10px !important;\n  }\n   \n  ::-webkit-scrollbar-thumb {\n    background: #3b4d54;\n    border-radius: 5px;\n  }\n"]);
        return A = function() {
            return e
        }, e
    }

    function R(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var j = a.b.div(A(), function(e) {
            return e.theme.colors.dark.base
        }, function(e) {
            return e.theme.colors.dark.base
        }),
        P = a.b.div(S(), function(e) {
            return e.theme.colors.text.base
        }, function(e) {
            return e.tt || "capitalize"
        }, function(e) {
            return e.active ? e.theme.colors.primary.lighter : "inherit"
        }, function(e) {
            return e.theme.colors.text.light
        }, function(e) {
            return e.theme.colors.primary.lighter
        }),
        D = a.b.div(O(), function(e) {
            return d(e)
        }, function(e) {
            return w(e.name)
        }),
        M = a.b.div(T()),
        L = a.b.div(E()),
        I = a.b.div(k(), function(e) {
            return e.theme.textColor
        }, function(e) {
            return e.theme.colors.primary.lighter
        }),
        U = a.b.div(C(), function(e) {
            return e.src
        }),
        B = a.b.div(x());
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(j, "Toolbar", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(P, "ToolWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(D, "ToolIcon", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(M, "ToolLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(L, "EffectsWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(I, "EffectWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(U, "EffectIcon", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"), __REACT_HOT_LOADER__.register(B, "EffectLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Toolbar.ui.js"));

    function z() {
        var e = N(["\n  position: relative;\n  background: ", ";\n  z-index: 1050;\n  width: 100%;\n  height: 100%;\n  min-height: 520px;\n  overflow-y: auto;\n  font-size: 12px;\n    \n  .cropper-container {\n    direction: ltr;\n    font-size: 0;\n    line-height: 0;\n    position: relative;\n    -ms-touch-action: none;\n    touch-action: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n  }\n  \n  .cropper-container img {/*Avoid margin top issue (Occur only when margin-top <= -height)*/\n    display: block;\n    height: 100%;\n    image-orientation: 0deg;\n    max-height: none !important;\n    max-width: none !important;\n    min-height: 0 !important;\n    min-width: 0 !important;\n    width: 100%;\n  }\n  \n  .cropper-wrap-box,\n  .cropper-canvas,\n  .cropper-drag-box,\n  .cropper-crop-box,\n  .cropper-modal {\n    bottom: 0;\n    left: 0;\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  \n  .cropper-wrap-box,\n  .cropper-canvas {\n    overflow: hidden;\n  }\n  \n  .cropper-drag-box {\n    background-color: #fff;\n    opacity: 0;\n  }\n  \n  .cropper-modal {\n    background-color: #000;\n    opacity: .5;\n  }\n  \n  .cropper-view-box {\n    display: block;\n    height: 100%;\n    outline-color: rgba(255, 255, 255, 0.75);\n    outline: 1px solid #fff;\n    overflow: hidden;\n    width: 100%;\n  }\n  \n  .cropper-dashed {\n    border: 0 dashed #eee;\n    display: block;\n    opacity: .5;\n    position: absolute;\n  }\n  \n  .cropper-dashed.dashed-h {\n    border-bottom-width: 1px;\n    border-top-width: 1px;\n    height: 33.33333%;\n    left: 0;\n    top: 33.33333%;\n    width: 100%;\n  }\n  \n  .cropper-dashed.dashed-v {\n    border-left-width: 1px;\n    border-right-width: 1px;\n    height: 100%;\n    left: 33.33333%;\n    top: 0;\n    width: 33.33333%;\n  }\n  \n  .cropper-center {\n    display: block;\n    height: 0;\n    left: 50%;\n    opacity: .75;\n    position: absolute;\n    top: 50%;\n    width: 0;\n  }\n  \n  .cropper-center:before,\n  .cropper-center:after {\n    background-color: #fff;\n    content: ' ';\n    display: block;\n    position: absolute;\n  }\n  \n  .cropper-center:before {\n    height: 1px;\n    left: -10px;\n    top: 0;\n    width: 20px;\n  }\n  \n  .cropper-center:after {\n    height: 20px;\n    left: 0;\n    top: -10px;\n    width: 1px;\n  }\n  \n  .cropper-face,\n  .cropper-line,\n  .cropper-point {\n    display: block;\n    height: 100%;\n    opacity: .1;\n    position: absolute;\n    width: 100%;\n  }\n  \n  .cropper-face {\n    background-color: #fff;\n    left: 0;\n    top: 0;\n  }\n  \n  .cropper-line {\n    background-color: #fff;\n  }\n  \n  .cropper-line.line-e {\n    cursor: ew-resize;\n    right: -3px;\n    top: 0;\n    width: 5px;\n  }\n  \n  .cropper-line.line-n {\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n    top: -3px;\n  }\n  \n  .cropper-line.line-w {\n    cursor: ew-resize;\n    left: -3px;\n    top: 0;\n    width: 5px;\n  }\n  \n  .cropper-line.line-s {\n    bottom: -3px;\n    cursor: ns-resize;\n    height: 5px;\n    left: 0;\n  }\n  \n  .cropper-point {\n    background-color: #fff;\n    height: 20px;\n    opacity: .90;\n    width: 20px;\n    border-radius: 50%;\n    \n    &:before {\n      content: '';\n      display: table;\n      width: 8px;\n      height: 8px;\n      border-radius: 50%;\n      background: black;\n      opacity: 0.8;\n      z-index: 11;\n      position: absolute;\n      top: calc(50% - 4px);\n      left: calc(50% - 4px);\n    }\n  }\n  \n  .cropper-point.point-e {\n    cursor: ew-resize;\n    margin-top: -10px;\n    right: -10px;\n    top: 50%;\n  }\n  \n  .cropper-point.point-n {\n    cursor: ns-resize;\n    left: 50%;\n    margin-left: -10px;\n    top: -10px;\n  }\n  \n  .cropper-point.point-w {\n    cursor: ew-resize;\n    left: -10px;\n    margin-top: -10px;\n    top: 50%;\n  }\n  \n  .cropper-point.point-s {\n    bottom: -10px;\n    cursor: s-resize;\n    left: 50%;\n    margin-left: -10px;\n  }\n  \n  .cropper-point.point-ne {\n    cursor: nesw-resize;\n    right: -10px;\n    top: -10px;\n  }\n  \n  .cropper-point.point-nw {\n    cursor: nwse-resize;\n    left: -10px;\n    top: -10px;\n  }\n  \n  .cropper-point.point-sw {\n    bottom: -10px;\n    cursor: nesw-resize;\n    left: -10px;\n  }\n  \n  .cropper-point.point-se {\n    bottom: -10px;\n    cursor: nwse-resize;\n    height: 20px;\n    right: -10px;\n    width: 20px;\n  }\n  \n  .cropper-point.point-se:before {\n    background-color: #fff;\n    bottom: -50%;\n    content: ' ';\n    display: block;\n    height: 200%;\n    opacity: 0;\n    position: absolute;\n    right: -50%;\n    width: 200%;\n  }\n  \n  .cropper-invisible {\n    opacity: 0;\n  }\n  \n  .cropper-bg {\n    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');\n  }\n  \n  .cropper-hide {\n    display: block;\n    height: 0;\n    position: absolute;\n    width: 0;\n  }\n  \n  .cropper-hidden {\n    display: none !important;\n  }\n  \n  .cropper-move {\n    cursor: move;\n  }\n  \n  .cropper-crop {\n    cursor: crosshair;\n  }\n  \n  .cropper-disabled .cropper-drag-box,\n  .cropper-disabled .cropper-face,\n  .cropper-disabled .cropper-line,\n  .cropper-disabled .cropper-point {\n    cursor: not-allowed;\n  }\n"]);
        return z = function() {
            return e
        }, e
    }

    function H() {
        var e = N(["\n  height: 100%;\n  overflow-y: auto;\n\n  *, *:after, *:before, *::after, *::before {\n    box-sizing: border-box;\n  }\n  *:after, *:before, *::after, *::before {\n    padding: 0;\n    margin: 0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  /* cyrillic-ext */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY_ZraR2Tg8w2lzm7kLNL0-w.woff2) format('woff2');\n    unicode-range: U+0460-052F, U+20B4, U+2DE0-2DFF, U+A640-A69F;\n  }\n  /* cyrillic */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY14sYYdJg5dU2qzJEVSuta0.woff2) format('woff2');\n    unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n  }\n  /* greek-ext */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY1BW26QxpSj-_ZKm_xT4hWw.woff2) format('woff2');\n    unicode-range: U+1F00-1FFF;\n  }\n  /* greek */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpYwt_Rm691LTebKfY2ZkKSmI.woff2) format('woff2');\n    unicode-range: U+0370-03FF;\n  }\n  /* vietnamese */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY9DiNsR5a-9Oe_Ivpu8XWlY.woff2) format('woff2');\n    unicode-range: U+0102-0103, U+1EA0-1EF9, U+20AB;\n  }\n  /* latin-ext */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY6E8kM4xWR1_1bYURRojRGc.woff2) format('woff2');\n    unicode-range: U+0100-024F, U+1E00-1EFF, U+20A0-20AB, U+20AD-20CF, U+2C60-2C7F, U+A720-A7FF;\n  }\n  /* latin */\n  @font-face {\n    font-family: 'Roboto Mono';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Roboto Mono'), local('RobotoMono-Regular'), url(https://fonts.gstatic.com/s/robotomono/v5/hMqPNLsu_dywMa4C_DEpY4gp9Q8gbYrhqGlRav_IXfk.woff2) format('woff2');\n    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2212, U+2215;\n  }\n"]);
        return H = function() {
            return e
        }, e
    }

    function N(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var F = a.b.div(H()),
        W = a.b.div(z(), function(e) {
            return e.theme.colors.dark.base
        });
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(F, "Container", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/ImageEditor.ui.js"), __REACT_HOT_LOADER__.register(W, "Wrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/ImageEditor.ui.js"));

    function Y(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function q() {
        var e = te(["\n  margin-left: 8px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #aaaaaa;\n  margin-bottom: 3px;\n  cursor: pointer;\n  cursor: pointer;\n"]);
        return q = function() {
            return e
        }, e
    }

    function $() {
        var e = te(["\n  display: inline-block;\n  vertical-align: middle;\n  margin-left: calc(100% - 280px);\n"]);
        return $ = function() {
            return e
        }, e
    }

    function V() {
        var e = te(["\n    display: block; \n    width: 10px;\n    height: 10px;\n    margin: 5.5px;\n    background: ", ";\n    position: absolute; top: 0; bottom: 0;\n    right:  ", ";\n    border: 2px solid #36464d; \n    border-radius: 12px;\n    transition: all 0.3s ease-in 0s;\n"]);
        return V = function() {
            return e
        }, e
    }

    function X() {
        var e = te(["\n  display: block; \n  width: 200%; \n  margin-left: ", ';\n  transition: margin 0.3s ease-in 0s;\n  \n  &:before, &:after {\n    display: block; float: left; width: 50%; height: 19px; padding: 0; line-height: 19px;\n    font-size: 10px; color: white; font-family: Trebuchet, Arial, sans-serif; font-weight: bold;\n    box-sizing: border-box;\n  }\n  \n  &:before {\n    content: "ON";\n    padding-left: 10px !important;\n    background-color: #01717d; \n    color: #FFFFFF;\n  }\n  \n  &:after {\n    content: "OFF";\n    padding-right: 10px !important;\n    background-color: #1e262c; \n    color: #aaaaaa;\n    text-align: right;\n  }\n']);
        return X = function() {
            return e
        }, e
    }

    function K() {
        var e = te(["\n  display: block; \n  overflow: hidden; \n  cursor: pointer;\n  border: 2px solid #36464d; \n  border-radius: 12px;\n  margin: 0;\n"]);
        return K = function() {
            return e
        }, e
    }

    function G() {
        var e = te(["\n  display: none;\n  \n  :checked + .onoffswitch-label .onoffswitch-inner {\n    margin-left: 0;\n}\n"]);
        return G = function() {
            return e
        }, e
    }

    function Q() {
        var e = te(["\n  position: relative; \n  display: inline-block;\n  vertical-align: middle;\n  width: 60px;\n  margin-bottom: 2px;\n  -webkit-user-select: none; \n  -moz-user-select: none; \n  -ms-user-select: none;\n"]);
        return Q = function() {
            return e
        }, e
    }

    function J() {
        var e = te(["\n  ", "\n  ", "\n  \n  ", "\n"]);
        return J = function() {
            return e
        }, e
    }

    function Z() {
        var e = te(["\n  ", "\n  ", "\n  \n  ", "\n"]);
        return Z = function() {
            return e
        }, e
    }

    function ee() {
        var e = te(["\n  background: ", ";\n  height: 34px;\n  position: relative;\n  z-index: 1;\n"]);
        return ee = function() {
            return e
        }, e
    }

    function te(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var ne = a.b.div(ee(), function(e) {
            return e.theme.colors.primary.light
        }),
        re = a.b.div(Z(), function(e) {
            return d(e)
        }, w("previous"), function(e) {
            return de(e)
        }),
        ie = a.b.div(J(), function(e) {
            return d(e)
        }, w("next"), function(e) {
            return de(e)
        }),
        oe = a.b.div(Q()),
        ae = a.b.input(G()),
        se = a.b.label(K()),
        le = a.b.span(X(), function(e) {
            return e.checked ? "0" : "-100%"
        }),
        ce = a.b.span(V(), function(e) {
            return e.checked, "#36464d"
        }, function(e) {
            return e.checked ? "0" : "37px"
        }),
        ue = a.b.div($()),
        fe = a.b.div(q()),
        pe = function(e) {
            var t = e.id,
                n = e.handleChange,
                r = e.text,
                i = e.checked;
            Y(e, ["id", "handleChange", "text", "checked"]);
            return o.a.createElement(ue, null, o.a.createElement(oe, null, o.a.createElement(ae, {
                type: "checkbox",
                name: t,
                id: t,
                onChange: function() {
                    n(!i)
                },
                checked: i
            }), o.a.createElement(se, {
                htmlFor: t
            }, o.a.createElement(le, {
                checked: i
            }), o.a.createElement(ce, {
                checked: i
            }))), r && o.a.createElement(fe, {
                onClick: function() {
                    n(!i)
                }
            }, r))
        };

    function de(e) {
        return "\n    display: inline-block;\n    height: 34px;\n    width: 34px;\n    cursor: ".concat(e.muted ? "not-allowed" : "pointer", ";\n    text-align: center;\n    line-height: 34px;\n    border-right: 1px solid ").concat(e.theme.borderDarkColor, ";\n    \n    :hover {\n      background: ").concat(e.muted ? "inherit" : e.theme.colors.primary.lighter, ";\n    }\n  ")
    }
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(ne, "Footer", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(re, "PreviousBtn", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ie, "NextBtn", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(oe, "SwitcherWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ae, "SwitcherInput", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(se, "SwitcherLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(le, "SwitcherInner", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ce, "SwitcherSwitch", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(ue, "SwitcherBlock", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(fe, "SwitcherText", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(pe, "Switcher", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"), __REACT_HOT_LOADER__.register(de, "getActionIconStyle", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Footer.ui.js"));

    function he() {
        var e = be(["\n  display: ", ";\n  max-height: 100%;\n  max-width: 100%;\n  vertical-align: middle;\n"]);
        return he = function() {
            return e
        }, e
    }

    function me() {
        var e = be(["\n  display: inline-block;\n  max-height: 100%;\n  max-width: 100%;\n  /*width: 100%;*/\n  height: 100%;\n  vertical-align: middle;\n  \n  ", "\n  \n  /* Limit image width to avoid overflow the container */\n  img {\n    max-width: 100% !important; /* This rule is very important, please do not ignore this! */\n  }\n  \n  #scaleflex-image-edit-box {\n    display: ", ";\n    max-height: 100%;\n    max-width: 100%;\n    vertical-align: middle;\n  }\n"]);
        return me = function() {
            return e
        }, e
    }

    function ge() {
        var e = be(["\n  height: calc(100% - 170px);\n  text-align: center;\n  line-height: calc(100% - 170px);\n  padding: 20px;\n  position: relative;\n  \n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }\n"]);
        return ge = function() {
            return e
        }, e
    }

    function be(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var ye = a.b.div(ge()),
        ve = a.b.div(me(), function(e) {
            return e.hideCanvas ? "\n  canvas {\n    position: relative;\n    left: -9999px;\n  }\n  " : "\n  :before {\n    content: '';\n    display: inline-block;\n    height: 100%;\n    vertical-align: middle;\n  }"
        }, function(e) {
            return e.hide ? "none" : "inline-block"
        }),
        _e = a.b.canvas.attrs(function() {
            return {
                id: "scaleflex-image-edit-box"
            }
        })(he(), function(e) {
            return e.hide ? "none" : "inline-block"
        });
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(ye, "PreviewWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"), __REACT_HOT_LOADER__.register(ve, "PreviewImgBox", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"), __REACT_HOT_LOADER__.register(_e, "Canvas", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Preview.ui.js"));

    function we() {
        var e = function(e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n  text-transform: ", ";\n  display: ", ";\n  padding: ", ";\n  font-size: ", ";\n  line-height:  ", ";\n  min-width: ", ";\n  font-weight: 400;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  touch-action: manipulation;\n  cursor: pointer;\n  user-select: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  border: 1px solid transparent;\n  -webkit-transition: all 0.2s ease-in-out;\n  -o-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  border-radius: ", ";\n  \n  :focus, :hover {\n    text-decoration: none;\n  }\n  \n  :focus {\n    outline: 0;\n    -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);\n            box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.25);\n  }\n  \n  ", "\n  \n  ", "\n"]);
        return we = function() {
            return e
        }, e
    }
    var xe = a.b.button(we(), function(e) {
        return e.tt || u.button && u.button.tt || "none"
    }, function(e) {
        return e.hide ? "none" : "inline-block"
    }, function(e) {
        return Ce(e, "button", "p")
    }, function(e) {
        return Ce(e, "button", "fz")
    }, function(e) {
        return Ce(e, "button", "lh")
    }, function(e) {
        return e.fullSize ? "100%" : "auto"
    }, function(e) {
        return Ce(e, "button", "br")
    }, function(e) {
        return ke(e)
    }, function(e) {
        return Ee(e)
    });

    function Ce(e, t, n) {
        var r = e.sm,
            i = e.lg,
            o = r ? "sm" : i ? "lg" : "md";
        return u[t] && u[t][o] && u[t][o][n]
    }

    function ke(e) {
        return e.disabled ? "\n    cursor: not-allowed;\n    opacity: .65;\n  " : ""
    }

    function Ee(e) {
        return e.success ? "\n    color: #fff;\n    background-color: #28a745;\n    border-color: ##28a745;\n    \n    :hover {\n      color: #fff;\n      background-color: #218838;\n      border-color: #1e7e34;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\n              box-shadow: 0 0 0 2px rgba(92, 184, 92, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #1e7e34;\n      background-image: none;\n      border-color: #1c7430;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #009345;\n      border-color: #009345;\n      \n      :hover {\n        background-color: #009345;\n        border-color: #009345;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #1e7e34;\n      background-image: none;\n      border-color: #1c7430;\n    " : "", "\n  ") : e.primary ? "\n    color: #fff;\n    background-color: #0275d8;\n    border-color: #0275d8;\n    \n    :hover {\n      color: #fff;\n      background-color: #025aa5;\n      border-color: #01549b;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\n              box-shadow: 0 0 0 2px rgba(2, 117, 216, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #025aa5;\n      background-image: none;\n      border-color: #01549b;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #0275d8;\n      border-color: #0275d8;\n      \n      :hover {\n        background-color: #0275d8;\n        border-color: #0275d8;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #025aa5;\n      background-image: none;\n      border-color: #01549b;\n    " : "", "\n  ") : e.info ? "\n    color: #fff;\n    background-color: #5bc0de;\n    border-color: #5bc0de;\n    \n    :hover {\n      color: #fff;\n      background-color: #31b0d5;\n      border-color: #2aabd2;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\n              box-shadow: 0 0 0 2px rgba(91, 192, 222, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #31b0d5;\n      background-image: none;\n      border-color: #2aabd2;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #5bc0de;\n      border-color: #5bc0de;\n      \n      :hover {\n        background-color: #5bc0de;\n        border-color: #5bc0de;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #31b0d5;\n      background-image: none;\n      border-color: #2aabd2;\n    " : "", "\n  ") : e.warning ? "\n    color: #fff;\n    background-color: #f0ad4e;\n    border-color: #f0ad4e;\n    \n    :hover {\n      color: #fff;\n      background-color: #ec971f;\n      border-color: #eb9316;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\n              box-shadow: 0 0 0 2px rgba(240, 173, 78, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #ec971f;\n      background-image: none;\n      border-color: #eb9316;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #f0ad4e;\n      border-color: #f0ad4e;\n      \n      :hover {\n        background-color: #f0ad4e;\n        border-color: #f0ad4e;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #ec971f;\n      background-image: none;\n      border-color: #eb9316;\n    " : "", "\n  ") : e.danger ? "\n    color: #fff;\n    background-color: #d9534f;\n    border-color: #d9534f;\n    \n    :hover {\n      color: #fff;\n      background-color: #c9302c;\n      border-color: #c12e2a;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\n              box-shadow: 0 0 0 2px rgba(217, 83, 79, 0.5);\n    }\n    \n    :active {\n      color: #fff;\n      background-color: #c9302c;\n      background-image: none;\n      border-color: #c12e2a;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #d9534f;\n      border-color: #d9534f;\n      \n      :hover {\n        background-color: #d9534f;\n        border-color: #d9534f;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #fff;\n      background-color: #c9302c;\n      background-image: none;\n      border-color: #c12e2a;\n    " : "", "\n  ") : e.link ? "\n    font-weight: normal;\n    color: ".concat(Oe(e), "; \n    border-radius: 0;\n    background-color: transparent;\n    outline: none;\n    box-shadow: none;\n    \n    :hover {\n      border-color: transparent;\n      color: ").concat(Oe(e, "over"), ";\n      background-color: transparent;\n      outline: none;\n      box-shadow: none;\n    }\n    \n    :focus {\n      border-color: transparent;\n      outline: none;\n      box-shadow: none;\n    }\n    \n    :active {\n      background-color: transparent;\n      outline: none;\n      box-shadow: none;\n    }\n    \n    ").concat(e.disabled ? "\n      color: ".concat(Oe(e, "over"), ";\n      background-color: transparent;\n      \n      :hover {\n        color: ").concat(Oe(e, "over"), ";\n        background-color: transparent;\n      }\n    ") : "", "\n    \n    ").concat(e.active ? "\n      background-color: transparent;\n      color: ".concat(Oe(e, "over"), ";\n    ") : "", "\n    \n    :disabled:focus, :disabled:hover {\n      text-decoration: none;\n      outline: none;\n      box-shadow: none;\n    }\n  ") : e.themeColor ? "\n    color: ".concat(Te(e, "secondary", "text"), ";\n    background-color: ").concat(Te(e, "secondary"), ";\n    border-color: ").concat(Te(e, "secondary", null, !0, !0), ";\n    \n    :hover {\n      color: ").concat(Te(e, "secondary", "text"), ";\n      background-color: ").concat(Te(e, "secondary", null, !0), ";\n      border-color: ").concat(Te(e, "secondary", null, !0, !0), ";\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px ").concat(y(Te(e, "secondary"), .5), ";\n              box-shadow: 0 0 0 2px ").concat(y(Te(e, "secondary"), .5), ";\n    }\n    \n    :active {\n      color: ").concat(Te(e, "secondary", "text"), ";\n      background-color: ").concat(Te(e, "secondary", null, !0), ";\n      background-image: none;\n      border-color: ").concat(Te(e, "secondary", null, !0, !0), ";\n    }\n    \n    ").concat(e.disabled ? "\n      background-color: ".concat(y(Te(e, "secondary"), .5), ";\n      border-color: ").concat(y(Te(e, "secondary"), .5), ";\n      \n      :hover {\n        background-color: ").concat(y(Te(e, "secondary"), .5), ";\n        border-color: ").concat(y(Te(e, "secondary"), .5), ";\n      }\n    ") : "", "\n    \n    ").concat(e.active ? "\n      color: ".concat(Te(e, "secondary", "text"), ";\n      background-color: ").concat(Te(e, "secondary", null, !0), ";\n      background-image: none;\n      border-color: ").concat(Te(e, "secondary", null, !0, !0), ";\n    ") : "", "\n  ") : "\n    background: #fff;\n    color: #1e262c;\n    border-color: #B0B0B0;\n    \n    :hover {\n      color: #1e262c;\n      background-color: #E1E2E3;\n      border-color: #B0B0B0;\n    }\n    \n    :focus {\n      -webkit-box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\n              box-shadow: 0 0 0 2px rgba(204, 204, 204, 0.5);\n    }\n    \n    :active {\n      color: #1e262c;\n      background-color: #E1E2E3;\n      border-color: #B0B0B0;\n    }\n    \n    ".concat(e.disabled ? "\n      background-color: #fff;\n      border-color: #1e262c;\n      opacity: 0.6;\n      \n      :hover {\n        background-color: #fff;\n        border-color: #1e262c;\n        opacity: 0.6;\n      }\n    " : "", "\n    \n    ").concat(e.active ? "\n      color: #1e262c;\n      background-color: #E1E2E3;\n      border-color: #B0B0B0;\n    " : "", "\n  ")
    }

    function Te(e, t) {
        var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "base",
            r = arguments.length > 3 ? arguments[3] : void 0,
            i = arguments.length > 4 ? arguments[4] : void 0,
            o = r ? u.colors.base : null;
        return u.colors[t][o ? o + (i ? "er" : "") : n]
    }

    function Oe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "base",
            n = e.light ? "light" : e.dark ? "dark" : null,
            r = "base" !== t,
            i = u.colors.base;
        return n ? u.colors[n][r ? i : "base"] : u.colors.link[t]
    }
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(xe, "Button", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(Ce, "getElementStylesBySize", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(ke, "isDisabled", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(Ee, "getButtonStyles", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(Te, "getColor", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"), __REACT_HOT_LOADER__.register(Oe, "getLinkColor", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Button.js"));

    function Se() {
        var e = Ie([""]);
        return Se = function() {
            return e
        }, e
    }

    function Ae() {
        var e = Ie(["\n  background: ", ";\n  border-color: ", ";\n  color: ", ";\n  text-transform: uppercase;\n  \n  :hover {\n    background: ", ";\n    border-color: ", ";\n    color: ", ";  \n  }\n"]);
        return Ae = function() {
            return e
        }, e
    }

    function Re() {
        var e = Ie(["\n  display: flex;\n  align-items: center;\n  height: 100px;\n  background: ", "\n"]);
        return Re = function() {
            return e
        }, e
    }

    function je() {
        var e = Ie(["\n  text-align: center;\n  width: 115px;\n  padding: 5px 10px;\n"]);
        return je = function() {
            return e
        }, e
    }

    function Pe() {
        var e = Ie(["\n  text-align: center;\n  width: 100px;\n  padding: 5px 10px;\n"]);
        return Pe = function() {
            return e
        }, e
    }

    function De() {
        var e = Ie(["\n  text-align: center;\n  text-transform: capitalize;\n  color: ", "\n"]);
        return De = function() {
            return e
        }, e
    }

    function Me() {
        var e = Ie(["\n  line-height: 35px;\n  border-bottom: 1px solid ", ";\n  background: ", ";\n"]);
        return Me = function() {
            return e
        }, e
    }

    function Le() {
        var e = Ie(["\n  background: ", ";\n"]);
        return Le = function() {
            return e
        }, e
    }

    function Ie(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var Ue = a.b.div(Le(), function(e) {
            return e.theme.colors.primary.light
        }),
        Be = a.b.div(Me(), function(e) {
            return e.theme.colors.dark.base
        }, function(e) {
            return e.theme.colors.dark.base
        }),
        ze = a.b.div(De(), function(e) {
            return e.theme.colors.text.base
        }),
        He = a.b.div(Pe()),
        Ne = a.b.div(je()),
        Fe = a.b.div(Re(), function(e) {
            return e.theme.colors.primary.light
        }),
        We = Object(a.b)(xe)(Ae(), function(e) {
            return e.theme.colors.dark.base
        }, function(e) {
            return e.theme.colors.dark.base
        }, function(e) {
            return e.theme.colors.text.base
        }, function(e) {
            return b(e.theme.colors.dark.base)
        }, function(e) {
            return e.theme.colors.dark.base
        }, function(e) {
            return e.theme.colors.text.base
        }),
        Ye = Object(a.b)(We)(Se());
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Ue, "HeaderWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Be, "HeaderTop", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(ze, "Title", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(He, "LeftActions", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Ne, "RightActions", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Fe, "ToolbarWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(We, "CancelBtn", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"), __REACT_HOT_LOADER__.register(Ye, "DarkBtn", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Header.ui.js"));

    function qe() {
        var e = rt(["\n  height: 20px;\n  line-height: 20px;\n"]);
        return qe = function() {
            return e
        }, e
    }

    function $e() {
        var e = rt(["\n  height: 50px;\n  border: 1px solid ", ";\n  width: ", "px;\n"]);
        return $e = function() {
            return e
        }, e
    }

    function Ve() {
        var e = rt(["\n  padding: 15px 0;\n  height: 90px;\n  line-height: 100px;\n"]);
        return Ve = function() {
            return e
        }, e
    }

    function Xe() {
        var e = rt(["\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  padding: 0 20px;\n  cursor: pointer;\n  background: ", "\n"]);
        return Xe = function() {
            return e
        }, e
    }

    function Ke() {
        var e = rt(["\n  cursor: pointer;\n  position: relative;\n  font-weight: bold;\n  font-size: ", ";\n\n  ", "\n  ", "\n  \n  color: ", "\n"]);
        return Ke = function() {
            return e
        }, e
    }

    function Ge() {
        var e = rt(["\n  padding: 0;\n  \n  > span {\n    color: ", " !important;\n   }\n"]);
        return Ge = function() {
            return e
        }, e
    }

    function Qe() {
        var e = rt(["\n  display: inline-block;\n  padding: 0 5px;\n"]);
        return Qe = function() {
            return e
        }, e
    }

    function Je() {
        var e = rt(["\n  display: inline-block;\n  width: ", ";\n  height: 30px;\n  padding: 6px 12px;\n  font-size: 12px;\n  line-height: 30px;\n  color: rgb(242, 242, 242);\n  background: ", ";\n  border-radius: 3px;\n  box-shadow: rgba(0, 0, 0, 0.5) 0px 1px 1px inset, rgba(82, 104, 109, 0.4) 0px 1px 0px;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  vertical-align: middle;\n  border: 0px solid transparent;\n  font-family: Roboto, sans-serif;\n  \n  :hover {\n    outline: none;\n  }\n  \n  :focus {\n    border: 1px solid ", ";\n    outline: none;\n    box-shadow: rgba(0, 112, 124, 0.5) 0px 1px 1px inset, rgba(0, 112, 124, 0.4) 0px 1px 0px;\n  }\n"]);
        return Je = function() {
            return e
        }, e
    }

    function Ze() {
        var e = rt(["\n  display: block;\n  margin-bottom: 5px;\n"]);
        return Ze = function() {
            return e
        }, e
    }

    function et() {
        var e = rt(["\n  display: inline-block;\n  width: 100px;\n  padding-top: 10px;\n  text-align: center;\n"]);
        return et = function() {
            return e
        }, e
    }

    function tt() {
        var e = rt(["\n  display: block;\n  color: ", ";\n  height: 30px;\n  line-height: 30px;\n"]);
        return tt = function() {
            return e
        }, e
    }

    function nt() {
        var e = rt(["\n  color: ", ";\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  \n  ::-webkit-scrollbar {\n    height: 10px !important;\n  }\n   \n  ::-webkit-scrollbar-thumb {\n    background: #3b4d54;\n    border-radius: 5px;\n  }\n"]);
        return nt = function() {
            return e
        }, e
    }

    function rt(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var it = a.b.div(nt(), function(e) {
            return e.theme.colors.text.base
        }),
        ot = a.b.div(tt(), function(e) {
            return e.theme.colors.text.base
        }),
        at = a.b.div(et()),
        st = a.b.label(Ze()),
        lt = a.b.input.attrs(function(e) {
            return {
                type: e.type ? e.type : "text"
            }
        })(Je(), function(e) {
            return e.fullSize ? "100%" : e.theme.fieldWidth
        }, function(e) {
            return e.dark ? e.theme.colors.dark.base : e.theme.colors.primary.lighter
        }, function(e) {
            return e.theme.colors.secondary.base
        }),
        ct = a.b.div(Qe()),
        ut = Object(a.b)(xe)(Ge(), function(e) {
            return e.active ? e.theme.colors.text.light : e.theme.colors.text.mute
        }),
        ft = a.b.span(Ke(), function(e) {
            return e.fz || "28px"
        }, function(e) {
            return d(e)
        }, function(e) {
            return w(e.active ? "ratio" : "no-ratio")
        }, function(e) {
            return e.theme.textMuted
        }),
        pt = a.b.div(Xe(), function(e) {
            return e.active ? e.theme.colors.primary.lighter : "transparent"
        }),
        dt = a.b.div(Ve()),
        ht = a.b.div($e(), function(e) {
            return e.theme.textColor
        }, function(e) {
            return 50 * e.ratio
        }),
        mt = a.b.div(qe());
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(it, "CropWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(ot, "CustomLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(at, "FieldSet", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(st, "FieldLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(lt, "FieldInput", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(ct, "BlockRatioWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(ut, "BlockRatioBtn", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(ft, "BlockRatioIcon", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(pt, "CropBox", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(dt, "CropBoxInner", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(ht, "CropShape", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"), __REACT_HOT_LOADER__.register(mt, "CropLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Crop.ui.js"));

    function gt() {
        var e = yt(["\n  display: inline-block;\n  width: 300px;\n  padding: 20px;\n  height: 100px;\n"]);
        return gt = function() {
            return e
        }, e
    }

    function bt() {
        var e = yt(["\n  color: ", ";\n  text-align: center;\n"]);
        return bt = function() {
            return e
        }, e
    }

    function yt(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var vt = a.b.div(bt(), function(e) {
            return e.theme.colors.text.base
        }),
        _t = a.b.div(gt());
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(vt, "ResizeWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"), __REACT_HOT_LOADER__.register(_t, "ResizeBox", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Resize.ui.js"));

    function wt() {
        var e = Tt(["\n  ", "\n  ", "\n  height: 14px;\n  font-size: 14px;\n  color: ", ";\n"]);
        return wt = function() {
            return e
        }, e
    }

    function xt() {
        var e = Tt(["\n  margin-top: 10px;\n  \n  button:focus,  button:active {\n    outline: none !important;\n    box-shadow: none !important;\n  }\n"]);
        return xt = function() {
            return e
        }, e
    }

    function Ct() {
        var e = Tt(["\n\n"]);
        return Ct = function() {
            return e
        }, e
    }

    function kt() {
        var e = Tt(["\n  display: inline-block;\n  padding: 20px;\n"]);
        return kt = function() {
            return e
        }, e
    }

    function Et() {
        var e = Tt(["\n  color: ", ";\n  text-align: center;\n"]);
        return Et = function() {
            return e
        }, e
    }

    function Tt(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var Ot = a.b.div(Et(), function(e) {
            return e.theme.colors.text.base
        }),
        St = a.b.div(kt()),
        At = a.b.div(Ct()),
        Rt = a.b.div(xt()),
        jt = a.b.span(wt(), function(e) {
            return d(e)
        }, function(e) {
            return w(e.name)
        }, function(e) {
            return e.theme.colors.text.base
        });
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Ot, "OrientationWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(St, "RotateWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(At, "RotateLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(Rt, "RotateButton", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"), __REACT_HOT_LOADER__.register(jt, "RotateIcon", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Orientation.ui.js"));

    function Pt() {
        var e = function(e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n  color: ", ";\n  text-align: center;\n"]);
        return Pt = function() {
            return e
        }, e
    }
    var Dt = a.b.div(Pt(), function(e) {
        return e.theme.colors.text.base
    });
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Dt, "AdjustWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Adjust.ui.js");

    function Mt() {
        var e = function(e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  cursor: wait;\n"]);
        return Mt = function() {
            return e
        }, e
    }
    var Lt = a.b.div(Mt());
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Lt, "NoClickOverlay", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Common.ui.js");

    function It() {
        var e = function(e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\e90c'\n    }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\\\e90c'\n    }\n"]);
        return It = function() {
            return e
        }, e
    }
    var Ut = a.b.span.attrs(function() {
        return {
            role: "button"
        }
    })(It(), function(e) {
        return e.t || "10px"
    }, function(e) {
        return e.r || "10px"
    }, function(e) {
        return e.l || "auto"
    }, function(e) {
        return e.b || "auto"
    }, function(e) {
        return e.fz || "18px"
    }, function(e) {
        return u.modal.colorMuted
    }, function(e) {
        return u.modal.colorMutedHover
    });
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ut, "CloseBtn", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/CloseBtn.js");

    function Bt() {
        return (Bt = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function zt() {
        var e = Wt(["\n  display: inline-block;\n  animation: ", " 2s infinite linear;\n"]);
        return zt = function() {
            return e
        }, e
    }

    function Ht() {
        var e = Wt(["\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n    100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n"]);
        return Ht = function() {
            return e
        }, e
    }

    function Nt() {
        var e = Wt(["\n  position: ", ";\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  font-size: 25px;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  text-indent: -9999em;\n  z-index: 1042;\n  -webkit-animation: scale-flex-loader", " 1.1s infinite ease;\n  animation: scale-flex-loader", " 1.1s infinite ease;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  \n  @-webkit-keyframes scale-flex-loader {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n  @keyframes scale-flex-loader {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #ffffff, 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.5), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.7), 1.8em -1.8em 0 0em #ffffff, 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.5), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.7), 2.5em 0em 0 0em #ffffff, 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.5), 2.5em 0em 0 0em rgba(255, 255, 255, 0.7), 1.75em 1.75em 0 0em #ffffff, 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.5), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.7), 0em 2.5em 0 0em #ffffff, -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.2), -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.5), 0em 2.5em 0 0em rgba(255, 255, 255, 0.7), -1.8em 1.8em 0 0em #ffffff, -2.6em 0em 0 0em rgba(255, 255, 255, 0.2), -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.5), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.7), -2.6em 0em 0 0em #ffffff, -1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(255, 255, 255, 0.2), 1.8em -1.8em 0 0em rgba(255, 255, 255, 0.2), 2.5em 0em 0 0em rgba(255, 255, 255, 0.2), 1.75em 1.75em 0 0em rgba(255, 255, 255, 0.2), 0em 2.5em 0 0em rgba(255, 255, 255, 0.2), -1.8em 1.8em 0 0em rgba(255, 255, 255, 0.5), -2.6em 0em 0 0em rgba(255, 255, 255, 0.7), -1.8em -1.8em 0 0em #ffffff;\n    }\n  }\n\n  @-webkit-keyframes scale-flex-loader-black {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.5), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.5), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5), 2.5em 0em 0 0em rgba(0, 0, 0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.5), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.5), 0em 2.5em 0 0em rgba(0, 0, 0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.5), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.5), -2.6em 0em 0 0em rgba(0, 0, 0, 0.7), -1.8em -1.8em 0 0em #000000;\n    }\n  }\n  @keyframes scale-flex-loader-black {\n    0%,\n    100% {\n      box-shadow: 0em -2.6em 0em 0em #000000, 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.5), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7);\n    }\n    12.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.7), 1.8em -1.8em 0 0em #000000, 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5);\n    }\n    25% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.5), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.7), 2.5em 0em 0 0em #000000, 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    37.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.5), 2.5em 0em 0 0em rgba(0, 0, 0, 0.7), 1.75em 1.75em 0 0em #000000, 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    50% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.5), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.7), 0em 2.5em 0 0em #000000, -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.2), -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    62.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.5), 0em 2.5em 0 0em rgba(0, 0, 0, 0.7), -1.8em 1.8em 0 0em #000000, -2.6em 0em 0 0em rgba(0, 0, 0, 0.2), -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    75% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.5), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.7), -2.6em 0em 0 0em #000000, -1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2);\n    }\n    87.5% {\n      box-shadow: 0em -2.6em 0em 0em rgba(0, 0, 0, 0.2), 1.8em -1.8em 0 0em rgba(0, 0, 0, 0.2), 2.5em 0em 0 0em rgba(0, 0, 0, 0.2), 1.75em 1.75em 0 0em rgba(0, 0, 0, 0.2), 0em 2.5em 0 0em rgba(0, 0, 0, 0.2), -1.8em 1.8em 0 0em rgba(0, 0, 0, 0.5), -2.6em 0em 0 0em rgba(0, 0, 0, 0.7), -1.8em -1.8em 0 0em #000000;\n    }\n  }\n\n"]);
        return Nt = function() {
            return e
        }, e
    }

    function Ft() {
        var e = Wt(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: ", ";\n  background: ", " !important;\n  //opacity: ", " !important;\n  z-index: 1042;\n"]);
        return Ft = function() {
            return e
        }, e
    }

    function Wt(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var Yt = a.b.div(Ft(), function(e) {
            return e.fullScreen ? "fixed" : "absolute"
        }, function(e) {
            return e.overlay ? "rgba(10,10,10,0.26)" : "transparent"
        }, function(e) {
            return e.overlay ? "0.25" : "0"
        }),
        qt = a.b.div(Nt(), function(e) {
            return e.fullScreen ? "fixed" : "absolute"
        }, function(e) {
            return e.black ? "-black" : ""
        }, function(e) {
            return e.black ? "-black" : ""
        }),
        $t = Object(a.c)(Ht()),
        Vt = a.b.span.attrs(function() {
            return {
                className: "fa fa-spinner"
            }
        })(zt(), $t),
        Xt = function(e) {
            return e.show ? o.a.createElement(i.Fragment, null, o.a.createElement(Yt, {
                fullScreen: e.fullScreen,
                overlay: e.overlay
            }), o.a.createElement(qt, Bt({
                fullScreen: e.fullScreen
            }, e), "Loading...")) : null
        };
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Yt, "SpinnerOverlay", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"), __REACT_HOT_LOADER__.register(qt, "SpinnerInner", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"), __REACT_HOT_LOADER__.register($t, "faSpin", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"), __REACT_HOT_LOADER__.register(Vt, "InlineSpinner", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"), __REACT_HOT_LOADER__.register(Xt, "Spinner", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/styledComponents/Spinner.js"));

    function Kt(e) {
        return (Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Gt(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Qt(e) {
        return (Qt = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Jt(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Zt(e, t) {
        return (Zt = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var en = function(e) {
            function t() {
                var e, n, r, i, o, a, s;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++) c[u] = arguments[u];
                return r = this, i = (e = Qt(t)).call.apply(e, [this].concat(c)), n = !i || "object" !== Kt(i) && "function" != typeof i ? Jt(r) : i, o = Jt(n), s = function(e) {
                    var t = n.props,
                        r = t.updateState,
                        i = (t.onRevert, t.forceApplyOperations);
                    r({
                        processWithCloudimage: e
                    }), e && (i([]), r({
                        operations: [],
                        activeTab: null
                    }))
                }, (a = "onChangeProcessWithCloudimageSwitcher") in o ? Object.defineProperty(o, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = s, n
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Zt(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.operations,
                        n = void 0 === t ? [] : t,
                        r = e.currentOperation,
                        i = void 0 === r ? null : r,
                        a = e.redoOperation,
                        s = e.processWithCloudimage,
                        l = e.config.hideCloudimageSwitcher,
                        c = n.findIndex(function(e) {
                            return e === i
                        }),
                        u = i && n[n.length - 1] === i,
                        f = n.length < 1 || -1 === c,
                        p = (n.length < 2 || n.length > 1 && u) && (-1 !== c || 1 !== n.length);
                    return o.a.createElement(ne, null, o.a.createElement(re, {
                        onClick: function() {
                            !f && a(c - 1)
                        },
                        muted: f
                    }), o.a.createElement(ie, {
                        onClick: function() {
                            !p && a(c + 1)
                        },
                        muted: p
                    }), !l && o.a.createElement(pe, {
                        id: "cloudimage-url-generator-switch",
                        checked: s,
                        handleChange: this.onChangeProcessWithCloudimageSwitcher,
                        text: "Process with cloudimage"
                    }))
                }
            }]) && Gt(n.prototype, r), a && Gt(n, a), t
        }(),
        tn = en,
        nn = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(en, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Footer/Footer.js"), function() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").replace(/_/g, " ")
        });

    function rn(e, t, n) {
        t = t || "", n = n || 512;
        for (var r = atob(e), i = [], o = 0; o < r.length; o += n) {
            for (var a = r.slice(o, o + n), s = new Array(a.length), l = 0; l < a.length; l++) s[l] = a.charCodeAt(l);
            var c = new Uint8Array(s);
            i.push(c)
        }
        return new Blob(i, {
            type: t
        })
    }

    function on(e) {
        switch (e) {
            case "colorize":
                return "img/colorize.jpg";
            case "contrast":
                return "img/contrast.png";
            case "cross_process":
                return "img/cross_process.png";
            case "glow_sun":
                return "img/glow_sun.png";
            case "hdr_effect":
                return "img/hdr_effect.png";
            case "jarques":
                return "img/jarques.png";
            case "love":
                return "img/love.png";
            case "old_boot":
                return "img/old_boot.png";
            case "orange_peel":
                return "img/orange_peel.png";
            case "pin_hole":
                return "img/pin_hole.png";
            case "pleasant":
                return "img/pleasant.png";
            case "sepia":
                return "img/sepia.png";
            case "sun_rise":
                return "img/sun_rise.png";
            case "vintage":
                return "img/vintage.png";
            case "clarity":
                return "img/clarity.png";
            case "edge_enhance":
                return "img/edge_enhance.png";
            case "emboss":
                return "img/emboss.png";
            case "grungy":
                return "img/grungy.png";
            case "hazy":
                return "img/hazy.png";
            case "lomo":
                return "img/lomo.png";
            case "noise":
                return "img/noise.png";
            case "old_paper":
                return "img/old_paper.png";
            case "posterize":
                return "img/posterize.png";
            case "radial_blur":
                return "img/radial_blur.png";
            case "sin_city":
                return "img/sin_city.png";
            case "tilt_shift":
                return "img/tilt_shift.png";
            default:
                return ""
        }
    }
    var an = function(e) {
            return e.replace(/\?/g, "%3F")
        },
        sn = ("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(nn, "getLabel", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js"), __REACT_HOT_LOADER__.register(rn, "b64toBlob", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js"), __REACT_HOT_LOADER__.register(on, "getIcon", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js"), __REACT_HOT_LOADER__.register(an, "encodePermalink", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/utils.js")), ["effects", "filters", "crop", "resize", "rotate"]),
        ln = ["edge_enhance", "emboss", "grungy", "hazy", "lomo", "radial_blur", "sin_city", "tilt_shift"],
        cn = ["cross_process", "glow_sun", "jarques", "love", "old_boot", "orange_peel", "pin_hole", "sepia", "sun_rise", "vintage"],
        un = ["crop", "resize", "rotate"],
        fn = {
            hideCloudimageSwitcher: !0,
            processWithCloudimage: !1,
            uploadWithCloudimageLink: !1,
            elementId: null
        },
        pn = ("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(sn, "TOOLS", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(ln, "EFFECTS", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(cn, "FILTERS", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(un, "CLOUDIMAGE_OPERATIONS", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js"), __REACT_HOT_LOADER__.register(fn, "UPLOADER", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/config.js")), "undefined" != typeof window),
        dn = pn ? window : {},
        hn = "cropper-hidden",
        mn = dn.PointerEvent ? "pointerdown" : "touchstart mousedown",
        gn = dn.PointerEvent ? "pointermove" : "touchmove mousemove",
        bn = dn.PointerEvent ? "pointerup pointercancel" : "touchend touchcancel mouseup",
        yn = /^(?:e|w|s|n|se|sw|ne|nw|all|crop|move|zoom)$/,
        vn = /^data:/,
        _n = /^data:image\/jpeg;base64,/,
        wn = /^(?:img|canvas)$/i,
        xn = {
            viewMode: 0,
            dragMode: "crop",
            initialAspectRatio: NaN,
            aspectRatio: NaN,
            data: null,
            preview: "",
            responsive: !0,
            restore: !0,
            checkCrossOrigin: !0,
            checkOrientation: !0,
            modal: !0,
            guides: !0,
            center: !0,
            highlight: !0,
            background: !0,
            autoCrop: !0,
            autoCropArea: .8,
            movable: !0,
            rotatable: !0,
            scalable: !0,
            zoomable: !0,
            zoomOnTouch: !0,
            zoomOnWheel: !0,
            wheelZoomRatio: .1,
            cropBoxMovable: !0,
            cropBoxResizable: !0,
            toggleDragModeOnDblclick: !0,
            minCanvasWidth: 0,
            minCanvasHeight: 0,
            minCropBoxWidth: 0,
            minCropBoxHeight: 0,
            minContainerWidth: 200,
            minContainerHeight: 100,
            ready: null,
            cropstart: null,
            cropmove: null,
            cropend: null,
            crop: null,
            zoom: null
        },
        Cn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        kn = function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        },
        En = function() {
            function e(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            return function(t, n, r) {
                return n && e(t.prototype, n), r && e(t, r), t
            }
        }(),
        Tn = function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
            return Array.from(e)
        },
        On = Number.isNaN || dn.isNaN;

    function Sn(e) {
        return "number" == typeof e && !On(e)
    }

    function An(e) {
        return void 0 === e
    }

    function Rn(e) {
        return "object" === (void 0 === e ? "undefined" : Cn(e)) && null !== e
    }
    var jn = Object.prototype.hasOwnProperty;

    function Pn(e) {
        if (!Rn(e)) return !1;
        try {
            var t = e.constructor,
                n = t.prototype;
            return t && n && jn.call(n, "isPrototypeOf")
        } catch (e) {
            return !1
        }
    }

    function Dn(e) {
        return "function" == typeof e
    }

    function Mn(e, t) {
        if (e && Dn(t))
            if (Array.isArray(e) || Sn(e.length)) {
                var n = e.length,
                    r = void 0;
                for (r = 0; r < n && !1 !== t.call(e, e[r], r, e); r += 1);
            } else Rn(e) && Object.keys(e).forEach(function(n) {
                t.call(e, e[n], n, e)
            });
        return e
    }
    var Ln = Object.assign || function(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return Rn(e) && n.length > 0 && n.forEach(function(t) {
                Rn(t) && Object.keys(t).forEach(function(n) {
                    e[n] = t[n]
                })
            }), e
        },
        In = /\.\d*(?:0|9){12}\d*$/i;

    function Un(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e11;
        return In.test(e) ? Math.round(e * t) / t : e
    }
    var Bn = /^(?:width|height|left|top|marginLeft|marginTop)$/;

    function zn(e, t) {
        var n = e.style;
        Mn(t, function(e, t) {
            Bn.test(t) && Sn(e) && (e += "px"), n[t] = e
        })
    }

    function Hn(e, t) {
        if (t)
            if (Sn(e.length)) Mn(e, function(e) {
                Hn(e, t)
            });
            else if (e.classList) e.classList.add(t);
        else {
            var n = e.className.trim();
            n ? n.indexOf(t) < 0 && (e.className = n + " " + t) : e.className = t
        }
    }

    function Nn(e, t) {
        t && (Sn(e.length) ? Mn(e, function(e) {
            Nn(e, t)
        }) : e.classList ? e.classList.remove(t) : e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, "")))
    }

    function Fn(e, t, n) {
        t && (Sn(e.length) ? Mn(e, function(e) {
            Fn(e, t, n)
        }) : n ? Hn(e, t) : Nn(e, t))
    }
    var Wn = /([a-z\d])([A-Z])/g;

    function Yn(e) {
        return e.replace(Wn, "$1-$2").toLowerCase()
    }

    function qn(e, t) {
        return Rn(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-" + Yn(t))
    }

    function $n(e, t, n) {
        Rn(n) ? e[t] = n : e.dataset ? e.dataset[t] = n : e.setAttribute("data-" + Yn(t), n)
    }

    function Vn(e, t) {
        if (Rn(e[t])) try {
            delete e[t]
        } catch (n) {
            e[t] = void 0
        } else if (e.dataset) try {
            delete e.dataset[t]
        } catch (n) {
            e.dataset[t] = void 0
        } else e.removeAttribute("data-" + Yn(t))
    }
    var Xn = /\s\s*/,
        Kn = function() {
            var e = !1;
            if (pn) {
                var t = !1,
                    n = function() {},
                    r = Object.defineProperty({}, "once", {
                        get: function() {
                            return e = !0, t
                        },
                        set: function(e) {
                            t = e
                        }
                    });
                dn.addEventListener("test", n, r), dn.removeEventListener("test", n, r)
            }
            return e
        }();

    function Gn(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = n;
        t.trim().split(Xn).forEach(function(t) {
            if (!Kn) {
                var o = e.listeners;
                o && o[t] && o[t][n] && (i = o[t][n], delete o[t][n], 0 === Object.keys(o[t]).length && delete o[t], 0 === Object.keys(o).length && delete e.listeners)
            }
            e.removeEventListener(t, i, r)
        })
    }

    function Qn(e, t, n) {
        var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            i = n;
        t.trim().split(Xn).forEach(function(t) {
            if (r.once && !Kn) {
                var o = e.listeners,
                    a = void 0 === o ? {} : o;
                i = function() {
                    for (var o = arguments.length, s = Array(o), l = 0; l < o; l++) s[l] = arguments[l];
                    delete a[t][n], e.removeEventListener(t, i, r), n.apply(e, s)
                }, a[t] || (a[t] = {}), a[t][n] && e.removeEventListener(t, a[t][n], r), a[t][n] = i, e.listeners = a
            }
            e.addEventListener(t, i, r)
        })
    }

    function Jn(e, t, n) {
        var r = void 0;
        return Dn(Event) && Dn(CustomEvent) ? r = new CustomEvent(t, {
            detail: n,
            bubbles: !0,
            cancelable: !0
        }) : (r = document.createEvent("CustomEvent")).initCustomEvent(t, !0, !0, n), e.dispatchEvent(r)
    }

    function Zn(e) {
        var t = e.getBoundingClientRect();
        return {
            left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
            top: t.top + (window.pageYOffset - document.documentElement.clientTop)
        }
    }
    var er = dn.location,
        tr = /^(https?:)\/\/([^:\/?#]+):?(\d*)/i;

    function nr(e) {
        var t = e.match(tr);
        return t && (t[1] !== er.protocol || t[2] !== er.hostname || t[3] !== er.port)
    }

    function rr(e) {
        var t = "timestamp=" + (new Date).getTime();
        return e + (-1 === e.indexOf("?") ? "?" : "&") + t
    }

    function ir(e) {
        var t = e.rotate,
            n = e.scaleX,
            r = e.scaleY,
            i = e.translateX,
            o = e.translateY,
            a = [];
        Sn(i) && 0 !== i && a.push("translateX(" + i + "px)"), Sn(o) && 0 !== o && a.push("translateY(" + o + "px)"), Sn(t) && 0 !== t && a.push("rotate(" + t + "deg)"), Sn(n) && 1 !== n && a.push("scaleX(" + n + ")"), Sn(r) && 1 !== r && a.push("scaleY(" + r + ")");
        var s = a.length ? a.join(" ") : "none";
        return {
            WebkitTransform: s,
            msTransform: s,
            transform: s
        }
    }

    function or(e, t) {
        var n = e.pageX,
            r = e.pageY,
            i = {
                endX: n,
                endY: r
            };
        return t ? i : Ln({
            startX: n,
            startY: r
        }, i)
    }
    var ar = Number.isFinite || dn.isFinite;

    function sr(e) {
        var t = e.aspectRatio,
            n = e.height,
            r = e.width,
            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "contain",
            o = function(e) {
                return ar(e) && e > 0
            };
        if (o(r) && o(n)) {
            var a = n * t;
            "contain" === i && a > r || "cover" === i && a < r ? n = r / t : r = n * t
        } else o(r) ? n = r / t : o(n) && (r = n * t);
        return {
            width: r,
            height: n
        }
    }
    var lr = String.fromCharCode;
    var cr = /^data:.*,/;

    function ur(e) {
        var t = new DataView(e),
            n = void 0,
            r = void 0,
            i = void 0,
            o = void 0;
        if (255 === t.getUint8(0) && 216 === t.getUint8(1))
            for (var a = t.byteLength, s = 2; s < a;) {
                if (255 === t.getUint8(s) && 225 === t.getUint8(s + 1)) {
                    i = s;
                    break
                }
                s += 1
            }
        if (i) {
            var l = i + 10;
            if ("Exif" === function(e, t, n) {
                    var r = "",
                        i = void 0;
                    for (n += t, i = t; i < n; i += 1) r += lr(e.getUint8(i));
                    return r
                }(t, i + 4, 4)) {
                var c = t.getUint16(l);
                if (((r = 18761 === c) || 19789 === c) && 42 === t.getUint16(l + 2, r)) {
                    var u = t.getUint32(l + 4, r);
                    u >= 8 && (o = l + u)
                }
            }
        }
        if (o) {
            var f = t.getUint16(o, r),
                p = void 0,
                d = void 0;
            for (d = 0; d < f; d += 1)
                if (p = o + 12 * d + 2, 274 === t.getUint16(p, r)) {
                    p += 8, n = t.getUint16(p, r), t.setUint16(p, 1, r);
                    break
                }
        }
        return n
    }
    var fr = {
            render: function() {
                this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox()
            },
            initContainer: function() {
                var e = this.element,
                    t = this.options,
                    n = this.container,
                    r = this.cropper;
                Hn(r, hn), Nn(e, hn);
                var i = {
                    width: Math.max(n.offsetWidth, Number(t.minContainerWidth) || 200),
                    height: Math.max(n.offsetHeight, Number(t.minContainerHeight) || 100)
                };
                this.containerData = i, zn(r, {
                    width: i.width,
                    height: i.height
                }), Hn(e, hn), Nn(r, hn)
            },
            initCanvas: function() {
                var e = this.containerData,
                    t = this.imageData,
                    n = this.options.viewMode,
                    r = Math.abs(t.rotate) % 180 == 90,
                    i = r ? t.naturalHeight : t.naturalWidth,
                    o = r ? t.naturalWidth : t.naturalHeight,
                    a = i / o,
                    s = e.width,
                    l = e.height;
                e.height * a > e.width ? 3 === n ? s = e.height * a : l = e.width / a : 3 === n ? l = e.width / a : s = e.height * a;
                var c = {
                    aspectRatio: a,
                    naturalWidth: i,
                    naturalHeight: o,
                    width: s,
                    height: l
                };
                c.left = (e.width - s) / 2, c.top = (e.height - l) / 2, c.oldLeft = c.left, c.oldTop = c.top, this.canvasData = c, this.limited = 1 === n || 2 === n, this.limitCanvas(!0, !0), this.initialImageData = Ln({}, t), this.initialCanvasData = Ln({}, c)
            },
            limitCanvas: function(e, t) {
                var n = this.options,
                    r = this.containerData,
                    i = this.canvasData,
                    o = this.cropBoxData,
                    a = n.viewMode,
                    s = i.aspectRatio,
                    l = this.cropped && o;
                if (e) {
                    var c = Number(n.minCanvasWidth) || 0,
                        u = Number(n.minCanvasHeight) || 0;
                    a > 1 ? (c = Math.max(c, r.width), u = Math.max(u, r.height), 3 === a && (u * s > c ? c = u * s : u = c / s)) : a > 0 && (c ? c = Math.max(c, l ? o.width : 0) : u ? u = Math.max(u, l ? o.height : 0) : l && (c = o.width, (u = o.height) * s > c ? c = u * s : u = c / s));
                    var f = sr({
                        aspectRatio: s,
                        width: c,
                        height: u
                    });
                    c = f.width, u = f.height, i.minWidth = c, i.minHeight = u, i.maxWidth = 1 / 0, i.maxHeight = 1 / 0
                }
                if (t)
                    if (a > (l ? 0 : 1)) {
                        var p = r.width - i.width,
                            d = r.height - i.height;
                        i.minLeft = Math.min(0, p), i.minTop = Math.min(0, d), i.maxLeft = Math.max(0, p), i.maxTop = Math.max(0, d), l && this.limited && (i.minLeft = Math.min(o.left, o.left + (o.width - i.width)), i.minTop = Math.min(o.top, o.top + (o.height - i.height)), i.maxLeft = o.left, i.maxTop = o.top, 2 === a && (i.width >= r.width && (i.minLeft = Math.min(0, p), i.maxLeft = Math.max(0, p)), i.height >= r.height && (i.minTop = Math.min(0, d), i.maxTop = Math.max(0, d))))
                    } else i.minLeft = -i.width, i.minTop = -i.height, i.maxLeft = r.width, i.maxTop = r.height
            },
            renderCanvas: function(e, t) {
                var n = this.canvasData,
                    r = this.imageData;
                if (t) {
                    var i = function(e) {
                            var t = e.width,
                                n = e.height,
                                r = e.degree;
                            if (90 == (r = Math.abs(r) % 180)) return {
                                width: n,
                                height: t
                            };
                            var i = r % 90 * Math.PI / 180,
                                o = Math.sin(i),
                                a = Math.cos(i),
                                s = t * a + n * o,
                                l = t * o + n * a;
                            return r > 90 ? {
                                width: l,
                                height: s
                            } : {
                                width: s,
                                height: l
                            }
                        }({
                            width: r.naturalWidth * Math.abs(r.scaleX || 1),
                            height: r.naturalHeight * Math.abs(r.scaleY || 1),
                            degree: r.rotate || 0
                        }),
                        o = i.width,
                        a = i.height,
                        s = n.width * (o / n.naturalWidth),
                        l = n.height * (a / n.naturalHeight);
                    n.left -= (s - n.width) / 2, n.top -= (l - n.height) / 2, n.width = s, n.height = l, n.aspectRatio = o / a, n.naturalWidth = o, n.naturalHeight = a, this.limitCanvas(!0, !1)
                }(n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCanvas(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, zn(this.canvas, Ln({
                    width: n.width,
                    height: n.height
                }, ir({
                    translateX: n.left,
                    translateY: n.top
                }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0)
            },
            renderImage: function(e) {
                var t = this.canvasData,
                    n = this.imageData,
                    r = n.naturalWidth * (t.width / t.naturalWidth),
                    i = n.naturalHeight * (t.height / t.naturalHeight);
                Ln(n, {
                    width: r,
                    height: i,
                    left: (t.width - r) / 2,
                    top: (t.height - i) / 2
                }), zn(this.image, Ln({
                    width: n.width,
                    height: n.height
                }, ir(Ln({
                    translateX: n.left,
                    translateY: n.top
                }, n)))), e && this.output()
            },
            initCropBox: function() {
                var e = this.options,
                    t = this.canvasData,
                    n = e.aspectRatio || e.initialAspectRatio,
                    r = Number(e.autoCropArea) || .8,
                    i = {
                        width: t.width,
                        height: t.height
                    };
                n && (t.height * n > t.width ? i.height = i.width / n : i.width = i.height * n), this.cropBoxData = i, this.limitCropBox(!0, !0), i.width = Math.min(Math.max(i.width, i.minWidth), i.maxWidth), i.height = Math.min(Math.max(i.height, i.minHeight), i.maxHeight), i.width = Math.max(i.minWidth, i.width * r), i.height = Math.max(i.minHeight, i.height * r), i.left = t.left + (t.width - i.width) / 2, i.top = t.top + (t.height - i.height) / 2, i.oldLeft = i.left, i.oldTop = i.top, this.initialCropBoxData = Ln({}, i)
            },
            limitCropBox: function(e, t) {
                var n = this.options,
                    r = this.containerData,
                    i = this.canvasData,
                    o = this.cropBoxData,
                    a = this.limited,
                    s = n.aspectRatio;
                if (e) {
                    var l = Number(n.minCropBoxWidth) || 0,
                        c = Number(n.minCropBoxHeight) || 0,
                        u = a ? Math.min(r.width, i.width, i.width + i.left, r.width - i.left) : r.width,
                        f = a ? Math.min(r.height, i.height, i.height + i.top, r.height - i.top) : r.height;
                    l = Math.min(l, r.width), c = Math.min(c, r.height), s && (l && c ? c * s > l ? c = l / s : l = c * s : l ? c = l / s : c && (l = c * s), f * s > u ? f = u / s : u = f * s), o.minWidth = Math.min(l, u), o.minHeight = Math.min(c, f), o.maxWidth = u, o.maxHeight = f
                }
                t && (a ? (o.minLeft = Math.max(0, i.left), o.minTop = Math.max(0, i.top), o.maxLeft = Math.min(r.width, i.left + i.width) - o.width, o.maxTop = Math.min(r.height, i.top + i.height) - o.height) : (o.minLeft = 0, o.minTop = 0, o.maxLeft = r.width - o.width, o.maxTop = r.height - o.height))
            },
            renderCropBox: function() {
                var e = this.options,
                    t = this.containerData,
                    n = this.cropBoxData;
                (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCropBox(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, e.movable && e.cropBoxMovable && $n(this.face, "cropperAction", n.width >= t.width && n.height >= t.height ? "move" : "all"), zn(this.cropBox, Ln({
                    width: n.width,
                    height: n.height
                }, ir({
                    translateX: n.left,
                    translateY: n.top
                }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output()
            },
            output: function() {
                this.preview(), Jn(this.element, "crop", this.getData())
            }
        },
        pr = {
            initPreview: function() {
                var e = this.crossOrigin,
                    t = this.options.preview,
                    n = e ? this.crossOriginUrl : this.url,
                    r = document.createElement("img");
                if (e && (r.crossOrigin = e), r.src = n, this.viewBox.appendChild(r), this.viewBoxImage = r, t) {
                    var i = t;
                    "string" == typeof t ? i = this.element.ownerDocument.querySelectorAll(t) : t.querySelector && (i = [t]), this.previews = i, Mn(i, function(t) {
                        var r = document.createElement("img");
                        $n(t, "cropperPreview", {
                            width: t.offsetWidth,
                            height: t.offsetHeight,
                            html: t.innerHTML
                        }), e && (r.crossOrigin = e), r.src = n, r.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', t.innerHTML = "", t.appendChild(r)
                    })
                }
            },
            resetPreview: function() {
                Mn(this.previews, function(e) {
                    var t = qn(e, "cropperPreview");
                    zn(e, {
                        width: t.width,
                        height: t.height
                    }), e.innerHTML = t.html, Vn(e, "cropperPreview")
                })
            },
            preview: function() {
                var e = this.imageData,
                    t = this.canvasData,
                    n = this.cropBoxData,
                    r = n.width,
                    i = n.height,
                    o = e.width,
                    a = e.height,
                    s = n.left - t.left - e.left,
                    l = n.top - t.top - e.top;
                this.cropped && !this.disabled && (zn(this.viewBoxImage, Ln({
                    width: o,
                    height: a
                }, ir(Ln({
                    translateX: -s,
                    translateY: -l
                }, e)))), Mn(this.previews, function(t) {
                    var n = qn(t, "cropperPreview"),
                        c = n.width,
                        u = n.height,
                        f = c,
                        p = u,
                        d = 1;
                    r && (p = i * (d = c / r)), i && p > u && (f = r * (d = u / i), p = u), zn(t, {
                        width: f,
                        height: p
                    }), zn(t.getElementsByTagName("img")[0], Ln({
                        width: o * d,
                        height: a * d
                    }, ir(Ln({
                        translateX: -s * d,
                        translateY: -l * d
                    }, e))))
                }))
            }
        },
        dr = {
            bind: function() {
                var e = this.element,
                    t = this.options,
                    n = this.cropper;
                Dn(t.cropstart) && Qn(e, "cropstart", t.cropstart), Dn(t.cropmove) && Qn(e, "cropmove", t.cropmove), Dn(t.cropend) && Qn(e, "cropend", t.cropend), Dn(t.crop) && Qn(e, "crop", t.crop), Dn(t.zoom) && Qn(e, "zoom", t.zoom), Qn(n, mn, this.onCropStart = this.cropStart.bind(this)), t.zoomable && t.zoomOnWheel && Qn(n, "wheel mousewheel DOMMouseScroll", this.onWheel = this.wheel.bind(this)), t.toggleDragModeOnDblclick && Qn(n, "dblclick", this.onDblclick = this.dblclick.bind(this)), Qn(e.ownerDocument, gn, this.onCropMove = this.cropMove.bind(this)), Qn(e.ownerDocument, bn, this.onCropEnd = this.cropEnd.bind(this)), t.responsive && Qn(window, "resize", this.onResize = this.resize.bind(this))
            },
            unbind: function() {
                var e = this.element,
                    t = this.options,
                    n = this.cropper;
                Dn(t.cropstart) && Gn(e, "cropstart", t.cropstart), Dn(t.cropmove) && Gn(e, "cropmove", t.cropmove), Dn(t.cropend) && Gn(e, "cropend", t.cropend), Dn(t.crop) && Gn(e, "crop", t.crop), Dn(t.zoom) && Gn(e, "zoom", t.zoom), Gn(n, mn, this.onCropStart), t.zoomable && t.zoomOnWheel && Gn(n, "wheel mousewheel DOMMouseScroll", this.onWheel), t.toggleDragModeOnDblclick && Gn(n, "dblclick", this.onDblclick), Gn(e.ownerDocument, gn, this.onCropMove), Gn(e.ownerDocument, bn, this.onCropEnd), t.responsive && Gn(window, "resize", this.onResize)
            }
        },
        hr = {
            resize: function() {
                var e = this.options,
                    t = this.container,
                    n = this.containerData,
                    r = Number(e.minContainerWidth) || 200,
                    i = Number(e.minContainerHeight) || 100;
                if (!(this.disabled || n.width <= r || n.height <= i)) {
                    var o = t.offsetWidth / n.width;
                    if (1 !== o || t.offsetHeight !== n.height) {
                        var a = void 0,
                            s = void 0;
                        e.restore && (a = this.getCanvasData(), s = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(Mn(a, function(e, t) {
                            a[t] = e * o
                        })), this.setCropBoxData(Mn(s, function(e, t) {
                            s[t] = e * o
                        })))
                    }
                }
            },
            dblclick: function() {
                var e, t;
                this.disabled || "none" === this.options.dragMode || this.setDragMode((e = this.dragBox, t = "cropper-crop", (e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1) ? "move" : "crop"))
            },
            wheel: function(e) {
                var t = this,
                    n = Number(this.options.wheelZoomRatio) || .1,
                    r = 1;
                this.disabled || (e.preventDefault(), this.wheeling || (this.wheeling = !0, setTimeout(function() {
                    t.wheeling = !1
                }, 50), e.deltaY ? r = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? r = -e.wheelDelta / 120 : e.detail && (r = e.detail > 0 ? 1 : -1), this.zoom(-r * n, e)))
            },
            cropStart: function(e) {
                if (!this.disabled) {
                    var t = this.options,
                        n = this.pointers,
                        r = void 0;
                    e.changedTouches ? Mn(e.changedTouches, function(e) {
                        n[e.identifier] = or(e)
                    }) : n[e.pointerId || 0] = or(e), r = Object.keys(n).length > 1 && t.zoomable && t.zoomOnTouch ? "zoom" : qn(e.target, "cropperAction"), yn.test(r) && !1 !== Jn(this.element, "cropstart", {
                        originalEvent: e,
                        action: r
                    }) && (e.preventDefault(), this.action = r, this.cropping = !1, "crop" === r && (this.cropping = !0, Hn(this.dragBox, "cropper-modal")))
                }
            },
            cropMove: function(e) {
                var t = this.action;
                if (!this.disabled && t) {
                    var n = this.pointers;
                    e.preventDefault(), !1 !== Jn(this.element, "cropmove", {
                        originalEvent: e,
                        action: t
                    }) && (e.changedTouches ? Mn(e.changedTouches, function(e) {
                        Ln(n[e.identifier], or(e, !0))
                    }) : Ln(n[e.pointerId || 0], or(e, !0)), this.change(e))
                }
            },
            cropEnd: function(e) {
                if (!this.disabled) {
                    var t = this.action,
                        n = this.pointers;
                    e.changedTouches ? Mn(e.changedTouches, function(e) {
                        delete n[e.identifier]
                    }) : delete n[e.pointerId || 0], t && (e.preventDefault(), Object.keys(n).length || (this.action = ""), this.cropping && (this.cropping = !1, Fn(this.dragBox, "cropper-modal", this.cropped && this.options.modal)), Jn(this.element, "cropend", {
                        originalEvent: e,
                        action: t
                    }))
                }
            }
        },
        mr = {
            change: function(e) {
                var t = this.options,
                    n = this.canvasData,
                    r = this.containerData,
                    i = this.cropBoxData,
                    o = this.pointers,
                    a = this.action,
                    s = t.aspectRatio,
                    l = i.left,
                    c = i.top,
                    u = i.width,
                    f = i.height,
                    p = l + u,
                    d = c + f,
                    h = 0,
                    m = 0,
                    g = r.width,
                    b = r.height,
                    y = !0,
                    v = void 0;
                !s && e.shiftKey && (s = u && f ? u / f : 1), this.limited && (h = i.minLeft, m = i.minTop, g = h + Math.min(r.width, n.width, n.left + n.width), b = m + Math.min(r.height, n.height, n.top + n.height));
                var _ = o[Object.keys(o)[0]],
                    w = {
                        x: _.endX - _.startX,
                        y: _.endY - _.startY
                    },
                    x = function(e) {
                        switch (e) {
                            case "e":
                                p + w.x > g && (w.x = g - p);
                                break;
                            case "w":
                                l + w.x < h && (w.x = h - l);
                                break;
                            case "n":
                                c + w.y < m && (w.y = m - c);
                                break;
                            case "s":
                                d + w.y > b && (w.y = b - d)
                        }
                    };
                switch (a) {
                    case "all":
                        l += w.x, c += w.y;
                        break;
                    case "e":
                        if (w.x >= 0 && (p >= g || s && (c <= m || d >= b))) {
                            y = !1;
                            break
                        }
                        x("e"), (u += w.x) < 0 && (a = "w", l -= u = -u), s && (f = u / s, c += (i.height - f) / 2);
                        break;
                    case "n":
                        if (w.y <= 0 && (c <= m || s && (l <= h || p >= g))) {
                            y = !1;
                            break
                        }
                        x("n"), f -= w.y, c += w.y, f < 0 && (a = "s", c -= f = -f), s && (u = f * s, l += (i.width - u) / 2);
                        break;
                    case "w":
                        if (w.x <= 0 && (l <= h || s && (c <= m || d >= b))) {
                            y = !1;
                            break
                        }
                        x("w"), u -= w.x, l += w.x, u < 0 && (a = "e", l -= u = -u), s && (f = u / s, c += (i.height - f) / 2);
                        break;
                    case "s":
                        if (w.y >= 0 && (d >= b || s && (l <= h || p >= g))) {
                            y = !1;
                            break
                        }
                        x("s"), (f += w.y) < 0 && (a = "n", c -= f = -f), s && (u = f * s, l += (i.width - u) / 2);
                        break;
                    case "ne":
                        if (s) {
                            if (w.y <= 0 && (c <= m || p >= g)) {
                                y = !1;
                                break
                            }
                            x("n"), f -= w.y, c += w.y, u = f * s
                        } else x("n"), x("e"), w.x >= 0 ? p < g ? u += w.x : w.y <= 0 && c <= m && (y = !1) : u += w.x, w.y <= 0 ? c > m && (f -= w.y, c += w.y) : (f -= w.y, c += w.y);
                        u < 0 && f < 0 ? (a = "sw", c -= f = -f, l -= u = -u) : u < 0 ? (a = "nw", l -= u = -u) : f < 0 && (a = "se", c -= f = -f);
                        break;
                    case "nw":
                        if (s) {
                            if (w.y <= 0 && (c <= m || l <= h)) {
                                y = !1;
                                break
                            }
                            x("n"), f -= w.y, c += w.y, u = f * s, l += i.width - u
                        } else x("n"), x("w"), w.x <= 0 ? l > h ? (u -= w.x, l += w.x) : w.y <= 0 && c <= m && (y = !1) : (u -= w.x, l += w.x), w.y <= 0 ? c > m && (f -= w.y, c += w.y) : (f -= w.y, c += w.y);
                        u < 0 && f < 0 ? (a = "se", c -= f = -f, l -= u = -u) : u < 0 ? (a = "ne", l -= u = -u) : f < 0 && (a = "sw", c -= f = -f);
                        break;
                    case "sw":
                        if (s) {
                            if (w.x <= 0 && (l <= h || d >= b)) {
                                y = !1;
                                break
                            }
                            x("w"), u -= w.x, l += w.x, f = u / s
                        } else x("s"), x("w"), w.x <= 0 ? l > h ? (u -= w.x, l += w.x) : w.y >= 0 && d >= b && (y = !1) : (u -= w.x, l += w.x), w.y >= 0 ? d < b && (f += w.y) : f += w.y;
                        u < 0 && f < 0 ? (a = "ne", c -= f = -f, l -= u = -u) : u < 0 ? (a = "se", l -= u = -u) : f < 0 && (a = "nw", c -= f = -f);
                        break;
                    case "se":
                        if (s) {
                            if (w.x >= 0 && (p >= g || d >= b)) {
                                y = !1;
                                break
                            }
                            x("e"), f = (u += w.x) / s
                        } else x("s"), x("e"), w.x >= 0 ? p < g ? u += w.x : w.y >= 0 && d >= b && (y = !1) : u += w.x, w.y >= 0 ? d < b && (f += w.y) : f += w.y;
                        u < 0 && f < 0 ? (a = "nw", c -= f = -f, l -= u = -u) : u < 0 ? (a = "sw", l -= u = -u) : f < 0 && (a = "ne", c -= f = -f);
                        break;
                    case "move":
                        this.move(w.x, w.y), y = !1;
                        break;
                    case "zoom":
                        this.zoom(function(e) {
                            var t = Ln({}, e),
                                n = [];
                            return Mn(e, function(e, r) {
                                delete t[r], Mn(t, function(t) {
                                    var r = Math.abs(e.startX - t.startX),
                                        i = Math.abs(e.startY - t.startY),
                                        o = Math.abs(e.endX - t.endX),
                                        a = Math.abs(e.endY - t.endY),
                                        s = Math.sqrt(r * r + i * i),
                                        l = (Math.sqrt(o * o + a * a) - s) / s;
                                    n.push(l)
                                })
                            }), n.sort(function(e, t) {
                                return Math.abs(e) < Math.abs(t)
                            }), n[0]
                        }(o), e), y = !1;
                        break;
                    case "crop":
                        if (!w.x || !w.y) {
                            y = !1;
                            break
                        }
                        v = Zn(this.cropper), l = _.startX - v.left, c = _.startY - v.top, u = i.minWidth, f = i.minHeight, w.x > 0 ? a = w.y > 0 ? "se" : "ne" : w.x < 0 && (l -= u, a = w.y > 0 ? "sw" : "nw"), w.y < 0 && (c -= f), this.cropped || (Nn(this.cropBox, hn), this.cropped = !0, this.limited && this.limitCropBox(!0, !0))
                }
                y && (i.width = u, i.height = f, i.left = l, i.top = c, this.action = a, this.renderCropBox()), Mn(o, function(e) {
                    e.startX = e.endX, e.startY = e.endY
                })
            }
        },
        gr = {
            crop: function() {
                return !this.ready || this.cropped || this.disabled || (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && Hn(this.dragBox, "cropper-modal"), Nn(this.cropBox, hn), this.setCropBoxData(this.initialCropBoxData)), this
            },
            reset: function() {
                return this.ready && !this.disabled && (this.imageData = Ln({}, this.initialImageData), this.canvasData = Ln({}, this.initialCanvasData), this.cropBoxData = Ln({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this
            },
            clear: function() {
                return this.cropped && !this.disabled && (Ln(this.cropBoxData, {
                    left: 0,
                    top: 0,
                    width: 0,
                    height: 0
                }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Nn(this.dragBox, "cropper-modal"), Hn(this.cropBox, hn)), this
            },
            replace: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return !this.disabled && e && (this.isImg && (this.element.src = e), t ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, Mn(this.previews, function(t) {
                    t.getElementsByTagName("img")[0].src = e
                }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this
            },
            enable: function() {
                return this.ready && this.disabled && (this.disabled = !1, Nn(this.cropper, "cropper-disabled")), this
            },
            disable: function() {
                return this.ready && !this.disabled && (this.disabled = !0, Hn(this.cropper, "cropper-disabled")), this
            },
            destroy: function() {
                var e = this.element;
                return qn(e, "cropper") ? (this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), Vn(e, "cropper"), this) : this
            },
            move: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                    n = this.canvasData,
                    r = n.left,
                    i = n.top;
                return this.moveTo(An(e) ? e : r + Number(e), An(t) ? t : i + Number(t))
            },
            moveTo: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                    n = this.canvasData,
                    r = !1;
                return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.movable && (Sn(e) && (n.left = e, r = !0), Sn(t) && (n.top = t, r = !0), r && this.renderCanvas(!0)), this
            },
            zoom: function(e, t) {
                var n = this.canvasData;
                return e = (e = Number(e)) < 0 ? 1 / (1 - e) : 1 + e, this.zoomTo(n.width * e / n.naturalWidth, null, t)
            },
            zoomTo: function(e, t, n) {
                var r = this.options,
                    i = this.canvasData,
                    o = i.width,
                    a = i.height,
                    s = i.naturalWidth,
                    l = i.naturalHeight;
                if ((e = Number(e)) >= 0 && this.ready && !this.disabled && r.zoomable) {
                    var c = s * e,
                        u = l * e;
                    if (!1 === Jn(this.element, "zoom", {
                            ratio: e,
                            oldRatio: o / s,
                            originalEvent: n
                        })) return this;
                    if (n) {
                        var f = this.pointers,
                            p = Zn(this.cropper),
                            d = f && Object.keys(f).length ? function(e) {
                                var t = 0,
                                    n = 0,
                                    r = 0;
                                return Mn(e, function(e) {
                                    var i = e.startX,
                                        o = e.startY;
                                    t += i, n += o, r += 1
                                }), {
                                    pageX: t /= r,
                                    pageY: n /= r
                                }
                            }(f) : {
                                pageX: n.pageX,
                                pageY: n.pageY
                            };
                        i.left -= (c - o) * ((d.pageX - p.left - i.left) / o), i.top -= (u - a) * ((d.pageY - p.top - i.top) / a)
                    } else Pn(t) && Sn(t.x) && Sn(t.y) ? (i.left -= (c - o) * ((t.x - i.left) / o), i.top -= (u - a) * ((t.y - i.top) / a)) : (i.left -= (c - o) / 2, i.top -= (u - a) / 2);
                    i.width = c, i.height = u, this.renderCanvas(!0)
                }
                return this
            },
            rotate: function(e) {
                return this.rotateTo((this.imageData.rotate || 0) + Number(e))
            },
            rotateTo: function(e) {
                return Sn(e = Number(e)) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this
            },
            scaleX: function(e) {
                var t = this.imageData.scaleY;
                return this.scale(e, Sn(t) ? t : 1)
            },
            scaleY: function(e) {
                var t = this.imageData.scaleX;
                return this.scale(Sn(t) ? t : 1, e)
            },
            scale: function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                    n = this.imageData,
                    r = !1;
                return e = Number(e), t = Number(t), this.ready && !this.disabled && this.options.scalable && (Sn(e) && (n.scaleX = e, r = !0), Sn(t) && (n.scaleY = t, r = !0), r && this.renderCanvas(!0, !0)), this
            },
            getData: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = this.options,
                    n = this.imageData,
                    r = this.canvasData,
                    i = this.cropBoxData,
                    o = void 0;
                if (this.ready && this.cropped) {
                    o = {
                        x: i.left - r.left,
                        y: i.top - r.top,
                        width: i.width,
                        height: i.height
                    };
                    var a = n.width / n.naturalWidth;
                    if (Mn(o, function(e, t) {
                            o[t] = e / a
                        }), e) {
                        var s = Math.round(o.y + o.height),
                            l = Math.round(o.x + o.width);
                        o.x = Math.round(o.x), o.y = Math.round(o.y), o.width = l - o.x, o.height = s - o.y
                    }
                } else o = {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                };
                return t.rotatable && (o.rotate = n.rotate || 0), t.scalable && (o.scaleX = n.scaleX || 1, o.scaleY = n.scaleY || 1), o
            },
            setData: function(e) {
                var t = this.options,
                    n = this.imageData,
                    r = this.canvasData,
                    i = {};
                if (this.ready && !this.disabled && Pn(e)) {
                    var o = !1;
                    t.rotatable && Sn(e.rotate) && e.rotate !== n.rotate && (n.rotate = e.rotate, o = !0), t.scalable && (Sn(e.scaleX) && e.scaleX !== n.scaleX && (n.scaleX = e.scaleX, o = !0), Sn(e.scaleY) && e.scaleY !== n.scaleY && (n.scaleY = e.scaleY, o = !0)), o && this.renderCanvas(!0, !0);
                    var a = n.width / n.naturalWidth;
                    Sn(e.x) && (i.left = e.x * a + r.left), Sn(e.y) && (i.top = e.y * a + r.top), Sn(e.width) && (i.width = e.width * a), Sn(e.height) && (i.height = e.height * a), this.setCropBoxData(i)
                }
                return this
            },
            getContainerData: function() {
                return this.ready ? Ln({}, this.containerData) : {}
            },
            getImageData: function() {
                return this.sized ? Ln({}, this.imageData) : {}
            },
            getCanvasData: function() {
                var e = this.canvasData,
                    t = {};
                return this.ready && Mn(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
                    t[n] = e[n]
                }), t
            },
            setCanvasData: function(e) {
                var t = this.canvasData,
                    n = t.aspectRatio;
                return this.ready && !this.disabled && Pn(e) && (Sn(e.left) && (t.left = e.left), Sn(e.top) && (t.top = e.top), Sn(e.width) ? (t.width = e.width, t.height = e.width / n) : Sn(e.height) && (t.height = e.height, t.width = e.height * n), this.renderCanvas(!0)), this
            },
            getCropBoxData: function() {
                var e = this.cropBoxData,
                    t = void 0;
                return this.ready && this.cropped && (t = {
                    left: e.left,
                    top: e.top,
                    width: e.width,
                    height: e.height
                }), t || {}
            },
            setCropBoxData: function(e) {
                var t = this.cropBoxData,
                    n = this.options.aspectRatio,
                    r = void 0,
                    i = void 0;
                return this.ready && this.cropped && !this.disabled && Pn(e) && (Sn(e.left) && (t.left = e.left), Sn(e.top) && (t.top = e.top), Sn(e.width) && e.width !== t.width && (r = !0, t.width = e.width), Sn(e.height) && e.height !== t.height && (i = !0, t.height = e.height), n && (r ? t.height = t.width / n : i && (t.width = t.height * n)), this.renderCropBox()), this
            },
            getCroppedCanvas: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (!this.ready || !window.HTMLCanvasElement) return null;
                var t = this.canvasData,
                    n = function(e, t, n, r) {
                        var i = t.aspectRatio,
                            o = t.naturalWidth,
                            a = t.naturalHeight,
                            s = t.rotate,
                            l = void 0 === s ? 0 : s,
                            c = t.scaleX,
                            u = void 0 === c ? 1 : c,
                            f = t.scaleY,
                            p = void 0 === f ? 1 : f,
                            d = n.aspectRatio,
                            h = n.naturalWidth,
                            m = n.naturalHeight,
                            g = r.fillColor,
                            b = void 0 === g ? "transparent" : g,
                            y = r.imageSmoothingEnabled,
                            v = void 0 === y || y,
                            _ = r.imageSmoothingQuality,
                            w = void 0 === _ ? "low" : _,
                            x = r.maxWidth,
                            C = void 0 === x ? 1 / 0 : x,
                            k = r.maxHeight,
                            E = void 0 === k ? 1 / 0 : k,
                            T = r.minWidth,
                            O = void 0 === T ? 0 : T,
                            S = r.minHeight,
                            A = void 0 === S ? 0 : S,
                            R = document.createElement("canvas"),
                            j = R.getContext("2d"),
                            P = sr({
                                aspectRatio: d,
                                width: C,
                                height: E
                            }),
                            D = sr({
                                aspectRatio: d,
                                width: O,
                                height: A
                            }, "cover"),
                            M = Math.min(P.width, Math.max(D.width, h)),
                            L = Math.min(P.height, Math.max(D.height, m)),
                            I = sr({
                                aspectRatio: i,
                                width: C,
                                height: E
                            }),
                            U = sr({
                                aspectRatio: i,
                                width: O,
                                height: A
                            }, "cover"),
                            B = Math.min(I.width, Math.max(U.width, o)),
                            z = Math.min(I.height, Math.max(U.height, a)),
                            H = [-B / 2, -z / 2, B, z];
                        return R.width = Un(M), R.height = Un(L), j.fillStyle = b, j.fillRect(0, 0, M, L), j.save(), j.translate(M / 2, L / 2), j.rotate(l * Math.PI / 180), j.scale(u, p), j.imageSmoothingEnabled = v, j.imageSmoothingQuality = w, j.drawImage.apply(j, [e].concat(Tn(H.map(function(e) {
                            return Math.floor(Un(e))
                        })))), j.restore(), R
                    }(this.image, this.imageData, t, e);
                if (!this.cropped) return n;
                var r = this.getData(),
                    i = r.x,
                    o = r.y,
                    a = r.width,
                    s = r.height,
                    l = n.width / Math.floor(t.naturalWidth);
                1 !== l && (i *= l, o *= l, a *= l, s *= l);
                var c = a / s,
                    u = sr({
                        aspectRatio: c,
                        width: e.maxWidth || 1 / 0,
                        height: e.maxHeight || 1 / 0
                    }),
                    f = sr({
                        aspectRatio: c,
                        width: e.minWidth || 0,
                        height: e.minHeight || 0
                    }, "cover"),
                    p = sr({
                        aspectRatio: c,
                        width: e.width || (1 !== l ? n.width : a),
                        height: e.height || (1 !== l ? n.height : s)
                    }),
                    d = p.width,
                    h = p.height;
                d = Math.min(u.width, Math.max(f.width, d)), h = Math.min(u.height, Math.max(f.height, h));
                var m = document.createElement("canvas"),
                    g = m.getContext("2d");
                m.width = Un(d), m.height = Un(h), g.fillStyle = e.fillColor || "transparent", g.fillRect(0, 0, d, h);
                var b = e.imageSmoothingEnabled,
                    y = void 0 === b || b,
                    v = e.imageSmoothingQuality;
                g.imageSmoothingEnabled = y, v && (g.imageSmoothingQuality = v);
                var _ = n.width,
                    w = n.height,
                    x = i,
                    C = o,
                    k = void 0,
                    E = void 0,
                    T = void 0,
                    O = void 0,
                    S = void 0,
                    A = void 0;
                x <= -a || x > _ ? (x = 0, k = 0, T = 0, S = 0) : x <= 0 ? (T = -x, x = 0, S = k = Math.min(_, a + x)) : x <= _ && (T = 0, S = k = Math.min(a, _ - x)), k <= 0 || C <= -s || C > w ? (C = 0, E = 0, O = 0, A = 0) : C <= 0 ? (O = -C, C = 0, A = E = Math.min(w, s + C)) : C <= w && (O = 0, A = E = Math.min(s, w - C));
                var R = [x, C, k, E];
                if (S > 0 && A > 0) {
                    var j = d / a;
                    R.push(T * j, O * j, S * j, A * j)
                }
                return g.drawImage.apply(g, [n].concat(Tn(R.map(function(e) {
                    return Math.floor(Un(e))
                })))), m
            },
            setAspectRatio: function(e) {
                var t = this.options;
                return this.disabled || An(e) || (t.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this
            },
            setDragMode: function(e) {
                var t = this.options,
                    n = this.dragBox,
                    r = this.face;
                if (this.ready && !this.disabled) {
                    var i = "crop" === e,
                        o = t.movable && "move" === e;
                    e = i || o ? e : "none", t.dragMode = e, $n(n, "cropperAction", e), Fn(n, "cropper-crop", i), Fn(n, "cropper-move", o), t.cropBoxMovable || ($n(r, "cropperAction", e), Fn(r, "cropper-crop", i), Fn(r, "cropper-move", o))
                }
                return this
            }
        },
        br = dn.Cropper,
        yr = function() {
            function e(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if (kn(this, e), !t || !wn.test(t.tagName)) throw new Error("The first argument is required and must be an <img> or <canvas> element.");
                this.element = t, this.options = Ln({}, xn, Pn(n) && n), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init()
            }
            return En(e, [{
                key: "init",
                value: function() {
                    var e = this.element,
                        t = e.tagName.toLowerCase(),
                        n = void 0;
                    if (!qn(e, "cropper")) {
                        if ($n(e, "cropper", this), "img" === t) {
                            if (this.isImg = !0, n = e.getAttribute("src") || "", this.originalUrl = n, !n) return;
                            n = e.src
                        } else "canvas" === t && window.HTMLCanvasElement && (n = e.toDataURL());
                        this.load(n)
                    }
                }
            }, {
                key: "load",
                value: function(e) {
                    var t = this;
                    if (e) {
                        this.url = e, this.imageData = {};
                        var n = this.element,
                            r = this.options;
                        if (r.rotatable || r.scalable || (r.checkOrientation = !1), r.checkOrientation && window.ArrayBuffer)
                            if (vn.test(e)) _n.test(e) ? this.read((i = e.replace(cr, ""), o = atob(i), a = new ArrayBuffer(o.length), Mn(s = new Uint8Array(a), function(e, t) {
                                s[t] = o.charCodeAt(t)
                            }), a)) : this.clone();
                            else {
                                var i, o, a, s, l = new XMLHttpRequest;
                                this.reloading = !0, this.xhr = l;
                                var c = function() {
                                    t.reloading = !1, t.xhr = null
                                };
                                l.ontimeout = c, l.onabort = c, l.onerror = function() {
                                    c(), t.clone()
                                }, l.onload = function() {
                                    c(), t.read(l.response)
                                }, r.checkCrossOrigin && nr(e) && n.crossOrigin && (e = rr(e)), l.open("get", e), l.responseType = "arraybuffer", l.withCredentials = "use-credentials" === n.crossOrigin, l.send()
                            }
                        else this.clone()
                    }
                }
            }, {
                key: "read",
                value: function(e) {
                    var t = this.options,
                        n = this.imageData,
                        r = ur(e),
                        i = 0,
                        o = 1,
                        a = 1;
                    if (r > 1) {
                        this.url = function(e, t) {
                            var n = new Uint8Array(e),
                                r = "";
                            return Dn(n.forEach) ? n.forEach(function(e) {
                                r += lr(e)
                            }) : Mn(n, function(e) {
                                r += lr(e)
                            }), "data:" + t + ";base64," + btoa(r)
                        }(e, "image/jpeg");
                        var s = function(e) {
                            var t = 0,
                                n = 1,
                                r = 1;
                            switch (e) {
                                case 2:
                                    n = -1;
                                    break;
                                case 3:
                                    t = -180;
                                    break;
                                case 4:
                                    r = -1;
                                    break;
                                case 5:
                                    t = 90, r = -1;
                                    break;
                                case 6:
                                    t = 90;
                                    break;
                                case 7:
                                    t = 90, n = -1;
                                    break;
                                case 8:
                                    t = -90
                            }
                            return {
                                rotate: t,
                                scaleX: n,
                                scaleY: r
                            }
                        }(r);
                        i = s.rotate, o = s.scaleX, a = s.scaleY
                    }
                    t.rotatable && (n.rotate = i), t.scalable && (n.scaleX = o, n.scaleY = a), this.clone()
                }
            }, {
                key: "clone",
                value: function() {
                    var e = this.element,
                        t = this.url,
                        n = void 0,
                        r = void 0;
                    this.options.checkCrossOrigin && nr(t) && ((n = e.crossOrigin) ? r = t : (n = "anonymous", r = rr(t))), this.crossOrigin = n, this.crossOriginUrl = r;
                    var i = document.createElement("img");
                    n && (i.crossOrigin = n), i.src = r || t, this.image = i, i.onload = this.start.bind(this), i.onerror = this.stop.bind(this), Hn(i, "cropper-hide"), e.parentNode.insertBefore(i, e.nextSibling)
                }
            }, {
                key: "start",
                value: function() {
                    var e = this,
                        t = this.isImg ? this.element : this.image;
                    t.onload = null, t.onerror = null, this.sizing = !0;
                    var n = dn.navigator && /(Macintosh|iPhone|iPod|iPad).*AppleWebKit/i.test(dn.navigator.userAgent),
                        r = function(t, n) {
                            Ln(e.imageData, {
                                naturalWidth: t,
                                naturalHeight: n,
                                aspectRatio: t / n
                            }), e.sizing = !1, e.sized = !0, e.build()
                        };
                    if (!t.naturalWidth || n) {
                        var i = document.createElement("img"),
                            o = document.body || document.documentElement;
                        this.sizingImage = i, i.onload = function() {
                            r(i.width, i.height), n || o.removeChild(i)
                        }, i.src = t.src, n || (i.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", o.appendChild(i))
                    } else r(t.naturalWidth, t.naturalHeight)
                }
            }, {
                key: "stop",
                value: function() {
                    var e = this.image;
                    e.onload = null, e.onerror = null, e.parentNode.removeChild(e), this.image = null
                }
            }, {
                key: "build",
                value: function() {
                    if (this.sized && !this.ready) {
                        var e = this.element,
                            t = this.options,
                            n = this.image,
                            r = e.parentNode,
                            i = document.createElement("div");
                        i.innerHTML = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>';
                        var o = i.querySelector(".cropper-container"),
                            a = o.querySelector(".cropper-canvas"),
                            s = o.querySelector(".cropper-drag-box"),
                            l = o.querySelector(".cropper-crop-box"),
                            c = l.querySelector(".cropper-face");
                        this.container = r, this.cropper = o, this.canvas = a, this.dragBox = s, this.cropBox = l, this.viewBox = o.querySelector(".cropper-view-box"), this.face = c, a.appendChild(n), Hn(e, hn), r.insertBefore(o, e.nextSibling), this.isImg || Nn(n, "cropper-hide"), this.initPreview(), this.bind(), t.initialAspectRatio = Math.max(0, t.initialAspectRatio) || NaN, t.aspectRatio = Math.max(0, t.aspectRatio) || NaN, t.viewMode = Math.max(0, Math.min(3, Math.round(t.viewMode))) || 0, Hn(l, hn), t.guides || Hn(l.getElementsByClassName("cropper-dashed"), hn), t.center || Hn(l.getElementsByClassName("cropper-center"), hn), t.background && Hn(o, "cropper-bg"), t.highlight || Hn(c, "cropper-invisible"), t.cropBoxMovable && (Hn(c, "cropper-move"), $n(c, "cropperAction", "all")), t.cropBoxResizable || (Hn(l.getElementsByClassName("cropper-line"), hn), Hn(l.getElementsByClassName("cropper-point"), hn)), this.render(), this.ready = !0, this.setDragMode(t.dragMode), t.autoCrop && this.crop(), this.setData(t.data), Dn(t.ready) && Qn(e, "ready", t.ready, {
                            once: !0
                        }), Jn(e, "ready")
                    }
                }
            }, {
                key: "unbuild",
                value: function() {
                    this.ready && (this.ready = !1, this.unbind(), this.resetPreview(), this.cropper.parentNode.removeChild(this.cropper), Nn(this.element, hn))
                }
            }, {
                key: "uncreate",
                value: function() {
                    this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? this.xhr.abort() : this.image && this.stop()
                }
            }], [{
                key: "noConflict",
                value: function() {
                    return window.Cropper = br, e
                }
            }, {
                key: "setDefaults",
                value: function(e) {
                    Ln(xn, Pn(e) && e)
                }
            }]), e
        }();
    Ln(yr.prototype, fr, pr, dr, hr, mr, gr);
    var vr = yr,
        _r = n(9),
        wr = n.n(_r);

    function xr(e) {
        return (xr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Cr(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                jr(e, t, n[t])
            })
        }
        return e
    }

    function kr(e) {
        return function(e) {
            if (Array.isArray(e)) {
                for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
                return n
            }
        }(e) || function(e) {
            if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
        }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance")
        }()
    }

    function Er() {
        return (Er = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function Tr(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = [],
                r = !0,
                i = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
            } catch (e) {
                i = !0, o = e
            } finally {
                try {
                    r || null == s.return || s.return()
                } finally {
                    if (i) throw o
                }
            }
            return n
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance")
        }()
    }

    function Or(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Sr(e) {
        return (Sr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ar(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Rr(e, t) {
        return (Rr = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function jr(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Pr = function(e) {
        function t(e) {
            var n, r, i;
            return function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, t), r = this, i = Sr(t).call(this), n = !i || "object" !== xr(i) && "function" != typeof i ? Ar(r) : i, jr(Ar(n), "saveImage", function() {
                var e = n.state.operations,
                    t = n.props,
                    r = t.onComplete,
                    i = t.onClose,
                    o = t.updateState,
                    a = t.closeOnLoad,
                    s = t.config,
                    l = t.processWithCloudimage,
                    c = t.uploadCloudimageImage,
                    u = t.imageMime,
                    f = s.filerobot,
                    p = void 0 === f ? {} : f,
                    d = n.state.src.split("?")[0],
                    h = n.getCanvasNode(),
                    m = "//".concat(p.container, ".api.airstore.io/v1/"),
                    g = (p.uploadParams || {}).dir || "image-editor",
                    b = Ar(n),
                    y = n.state.imageName;
                if (l) {
                    var v = e.filter(function(e) {
                            var t = e.stack;
                            return un.indexOf(t[0].name) > -1
                        }),
                        _ = n.generateCloudimageURL(v) + d.replace(/https?:\/\/scale###TSWD###flex.ultrafast.io\//, "");
                    if (c) {
                        var w = new XMLHttpRequest;
                        w.addEventListener("load", n.onFileLoad), w.open("POST", [m, "upload?dir=".concat(g)].join("")), w.setRequestHeader("X-Airstore-Secret-Key", p.uploadKey), w.setRequestHeader("Content-Type", "application/json"), w.send(JSON.stringify({
                            files_urls: [_]
                        }))
                    } else o({
                        isShowSpinner: !1,
                        isHideCanvas: !1
                    }), r(_, {
                        url_permalink: _,
                        url_public: _
                    }), a && i()
                } else new window.Caman(h, function() {
                    this.render(function() {
                        var e = rn(h.toDataURL(u).split(";")[1].split(",")[1], u, null),
                            t = y.replace(/-version-.{6}/g, "").split("."),
                            n = t.length,
                            r = "";
                        r = n <= 1 ? "".concat(t.join("."), "-version-").concat((wr()() || "").slice(0, 6)) : [t.slice(0, n - 1).join("."), "-version-", (wr()() || "").slice(0, 6), ".", t[n - 1]].join("");
                        var i = new FormData,
                            o = new XMLHttpRequest;
                        o.addEventListener("load", b.onFileLoad), i.append("files[]", e, r), o.open("POST", [m, "upload?dir=".concat(g)].join("")), o.setRequestHeader("X-Airstore-Secret-Key", p.uploadKey), o.send(i)
                    })
                })
            }), jr(Ar(n), "onFileLoad", function(e) {
                var t = n.props,
                    r = t.onComplete,
                    i = t.onClose,
                    o = t.updateState,
                    a = t.closeOnLoad,
                    s = e.srcElement,
                    l = (void 0 === s ? {} : s).response,
                    c = void 0 === l ? "{}" : l,
                    u = JSON.parse(c) || {};
                if ("success" === u.status) {
                    var f = u.file,
                        p = void 0 === f ? {} : f;
                    if (!p.url_public) return;
                    o({
                        isShowSpinner: !1,
                        isHideCanvas: !1
                    }), r(p.url_public, p), a && i()
                } else o({
                    isShowSpinner: !1,
                    isHideCanvas: !1
                }), alert(u), a && i()
            }), jr(Ar(n), "generateCloudimageURL", function(e) {
                var t = n.props.config.cloudimage,
                    r = (void 0 === t ? {} : t).token + ".cloudimg.io/",
                    i = n.isOperationExist(e, "crop"),
                    o = n.isOperationExist(e, "resize"),
                    a = n.isOperationExist(e, "rotate"),
                    s = n.getOperationQuery(i, o),
                    l = null,
                    c = null,
                    u = null;
                i && (l = n.getCropArguments(i));
                var f = Tr(l || [], 4),
                    p = f[0],
                    d = f[1],
                    h = f[2],
                    m = f[3];
                o && (c = n.getResizeArguments(o)), a && (u = n.getOrientationArguments(a));
                var g = Tr(c || [], 2),
                    b = g[0],
                    y = g[1],
                    v = i ? h + "," + m + "," + (h + p) + "," + (m + d) + "-" : "",
                    _ = b || p ? (b || p) + "x" + (y || d) : "",
                    w = v || _ ? v + _ : "n",
                    x = u || "",
                    C = x ? "r".concat(x) : "n";
                return "cdn" === s && "n" !== C && (s = "cdno"), "https://" + r + s + "/" + w + "/" + C + "/"
            }), jr(Ar(n), "isOperationExist", function(e, t) {
                return e.find(function(e) {
                    return e.stack[0].name === t
                })
            }), jr(Ar(n), "getOperationQuery", function(e, t) {
                return e ? "crop_px" : t ? "width" : "cdn"
            }), jr(Ar(n), "getCropArguments", function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).stack,
                    t = void 0 === e ? [] : e,
                    n = t[0] && t[0].arguments;
                return n = n.map(function(e) {
                    return parseInt(e)
                })
            }), jr(Ar(n), "getResizeArguments", function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).stack,
                    t = void 0 === e ? [] : e,
                    n = t[0] && t[0].arguments && t[0].arguments[0];
                return [parseInt(n.width), parseInt(n.height)]
            }), jr(Ar(n), "getOrientationArguments", function() {
                var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).stack,
                    t = void 0 === e ? [] : e,
                    n = t[0] && t[0].arguments && t[0].arguments[0] || 0;
                switch (n) {
                    case 90:
                        return 270;
                    case -90:
                        return 90;
                    default:
                        return n
                }
            }), jr(Ar(n), "cleanTemp", function() {
                var e = n.state,
                    t = e.operations,
                    r = e.currentOperation;
                n.revert(function() {
                    n.applyOperations(t, t.findIndex(function(e) {
                        return e === r
                    }), function() {
                        n.setState({
                            tempOperation: null
                        }), n.props.updateState({
                            isHideCanvas: !1,
                            isShowSpinner: !1
                        })
                    })
                })
            }), jr(Ar(n), "rotate", function(e, t) {
                var r = n.getCanvasNode(),
                    i = Ar(n);
                new window.Caman(r, function() {
                    this.rotate(e), this.render(function() {
                        i.setState({
                            rotate: t
                        })
                    })
                })
            }), jr(Ar(n), "adjust", function(e, t) {
                var r = n.state,
                    i = r.operations,
                    o = void 0 === i ? [] : i,
                    a = r.currentOperation,
                    s = r.adjust,
                    l = Ar(n);
                Er(s, jr({}, e, t)), n.setState(s), n.revert(function() {
                    n.applyOperations(o, o.findIndex(function(e) {
                        return e === a
                    }), function() {
                        var e = n.getCanvasNode();
                        new window.Caman(e, function() {
                            this.brightness(s.brightness), this.contrast(s.contrast), this.gamma(s.gamma), this.saturation(s.saturation), this.render(function() {
                                l.props.updateState({
                                    isHideCanvas: !1,
                                    isShowSpinner: !1
                                })
                            })
                        })
                    })
                })
            }), jr(Ar(n), "applyOrientation", function() {
                var e = n.state,
                    t = e.currentOperation,
                    r = e.operations,
                    i = {
                        stack: [{
                            name: "rotate",
                            arguments: [e.rotate],
                            queue: 0
                        }]
                    };
                n.pushOperation(r, i, t), n.setState({
                    rotate: null
                }), n.props.updateState({
                    isHideCanvas: !1,
                    activeTab: null,
                    operations: r,
                    currentOperation: i
                })
            }), jr(Ar(n), "addEffect", function(e) {
                var t = n.getEffectHandlerName(e),
                    r = n.state,
                    i = r.currentOperation,
                    o = r.operations,
                    a = Ar(n),
                    s = {
                        stack: [{
                            name: t,
                            arguments: [],
                            queue: 2
                        }]
                    };
                n.setState({
                    tempOperation: s
                }), n.revert(function() {
                    n.applyOperations(o, o.findIndex(function(e) {
                        return e === i
                    }), function() {
                        var e = n.getCanvasNode();
                        new window.Caman(e, function() {
                            this[t](), this.render(function() {
                                a.props.updateState({
                                    isHideCanvas: !1,
                                    isShowSpinner: !1
                                })
                            })
                        })
                    })
                })
            }), jr(Ar(n), "getCanvasNode", function() {
                return document.getElementById("scaleflex-image-edit-box")
            }), jr(Ar(n), "initEffects", function() {}), jr(Ar(n), "initFilters", function() {}), jr(Ar(n), "initAdjust", function() {}), jr(Ar(n), "initCrop", function() {
                var e = n.state.originalWidth,
                    t = n.getCanvasNode(),
                    r = e / t.getBoundingClientRect().width;
                n.cropper = new vr(t, {
                    viewMode: 1,
                    modal: !1,
                    background: !1,
                    rotatable: !1,
                    scalable: !1,
                    zoomable: !1,
                    movable: !1,
                    crop: function(e) {
                        n.setState({
                            cropDetails: e.detail
                        }), n.props.updateState({
                            cropDetails: e.detail
                        })
                    }
                }), window.scaleflexPlugins = window.scaleflexPlugins || {}, window.scaleflexPlugins.zoom = r, window.scaleflexPlugins.cropperjs = n.cropper
            }), jr(Ar(n), "initResize", function() {}), jr(Ar(n), "initOrientation", function() {}), jr(Ar(n), "destroyCrop", function() {
                n.cropper.destroy()
            }), jr(Ar(n), "destroyAll", function() {}), jr(Ar(n), "applyCanvasChanges", function() {}), jr(Ar(n), "applyCrop", function() {
                var e = n.state,
                    t = e.cropDetails,
                    r = e.currentOperation,
                    i = e.operations,
                    o = t.width,
                    a = t.height,
                    s = t.x,
                    l = t.y,
                    c = n.getCanvasNode(),
                    u = Ar(n),
                    f = {
                        stack: [{
                            name: "crop",
                            arguments: [o, a, s, l],
                            queue: 0
                        }]
                    };
                n.pushOperation(i, f, r), n.destroyCrop(), new window.Caman(c, function() {
                    this.crop(o, a, s, l), this.render(function() {
                        u.props.updateState({
                            isHideCanvas: !1,
                            activeTab: null,
                            operations: i,
                            currentOperation: f,
                            canvasDimensions: {
                                width: o,
                                height: a,
                                ratio: o / a
                            }
                        })
                    })
                })
            }), jr(Ar(n), "applyOperations", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    i = n.state.queue,
                    o = n.getCanvasNode(),
                    a = Ar(n);
                new window.Caman(o, function() {
                    var n = this,
                        o = this;
                    i.forEach(function(i) {
                        e.forEach(function(e, n) {
                            t < n || -1 === t || e.stack.forEach(function(e) {
                                e.queue === i && o[e.name].apply(o, kr(e.arguments))
                            })
                        }), t > -1 && n.render(function() {
                            a.props.updateState({
                                currentOperation: e[t]
                            }), r && r()
                        })
                    }), t > -1 || (a.props.updateState({
                        currentOperation: e[t]
                    }), setTimeout(function() {
                        r && r()
                    }))
                })
            }), jr(Ar(n), "applyFilters", function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    r = n.getCanvasNode();
                new window.Caman(r, function() {
                    var n = this;
                    e.forEach(function(e) {
                        e.stack.forEach(function(e) {
                            2 === e.queue && n[e.name].apply(n, kr(e.arguments))
                        })
                    }), this.render(function() {
                        t && t()
                    })
                })
            }), jr(Ar(n), "pushOperation", function(e, t, n) {
                var r = e.findIndex(function(e) {
                        return e === n
                    }),
                    i = e.length;
                i && r !== e[i] && e.splice(r + 1, i), e.push(t)
            }), jr(Ar(n), "applyResize", function() {
                var e = n.state,
                    t = e.currentOperation,
                    r = e.operations,
                    i = n.props.canvasDimensions,
                    o = i.width,
                    a = i.height,
                    s = n.getCanvasNode(),
                    l = Ar(n),
                    c = {
                        stack: [{
                            name: "resize",
                            arguments: [{
                                width: o,
                                height: a
                            }],
                            queue: 0
                        }]
                    };
                n.pushOperation(r, c, t), new window.Caman(s, function() {
                    this.resize({
                        width: o,
                        height: a
                    }), this.render(function() {
                        l.props.updateState({
                            isHideCanvas: !1,
                            activeTab: null,
                            operations: r,
                            currentOperation: c
                        })
                    })
                })
            }), jr(Ar(n), "applyEffects", function() {
                var e = n.state,
                    t = e.currentOperation,
                    r = e.operations,
                    i = e.tempOperation;
                n.pushOperation(r, i, t), n.props.updateState({
                    isHideCanvas: !1,
                    activeTab: null,
                    operations: r,
                    currentOperation: i
                })
            }), jr(Ar(n), "revert", function(e) {
                var t = document.getElementById("scaleflex-image-edit-box"),
                    r = t.parentElement;
                r.removeChild(t);
                var i = document.createElement("canvas");
                i.id = "scaleflex-image-edit-box";
                var o = i.getContext("2d"),
                    a = new Image;
                a.crossOrigin = "", a.src = n.state.src, a.onload = function() {
                    i.width = a.width, i.height = a.height, o.clearRect(0, 0, i.width, i.height), o.drawImage(a, 0, 0, a.width, a.height), n.props.updateState({
                        original: {
                            height: a.height,
                            width: a.width
                        },
                        canvasDimensions: {
                            height: a.height,
                            width: a.width,
                            ratio: a.width / a.height
                        }
                    }), n.setState({
                        originalWidth: a.width,
                        originalHeight: a.height,
                        originalImage: a
                    }), r.appendChild(i), e && setTimeout(function() {
                        e()
                    })
                }
            }), jr(Ar(n), "downloadImage", function() {
                var e, t = n.getCanvasNode(),
                    r = n.state.imageName,
                    i = n.props.imageMime,
                    o = document.createElement("a");

                   // console.log(r);
                   //TSWD -------------------naming
                    
// MODALLLLLL
    var xmodale = document.getElementById("toast")
    xmodale.className = "show";
    setTimeout(function(){ xmodale.className = xmodale.className.replace("show", ""); }, 5000);
  	//var nameModal = prompt("Nommer votre fichier", fileNoExtTom);
   // o.download =  nameModal + fileExtensionTom, 
  
    			//JUST NAME + EDIT
    			console.log(fileNameTom);
             	o.download = 'edit_' + fileNameTom, 
             	//ORIGINAL
                //o.download = r, 

                o.href = t.toDataURL(i, .8), document.createEvent ? ((e = document.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), o.dispatchEvent(e)) : o.fireEvent && o.fireEvent("onclick")
            }), jr(Ar(n), "applyChanges", function(e) {
                switch (e) {
                    case "effects":
                    case "filters":
                        n.applyEffects();
                        break;
                    case "adjust":
                        n.applyCanvasChanges();
                        break;
                    case "crop":
                        n.applyCrop();
                        break;
                    case "rotate":
                        n.applyOrientation();
                        break;
                    case "resize":
                        n.applyResize()
                }
            }), jr(Ar(n), "changeTab", function(e) {
                switch (e) {
                    case "effects":
                        n.initEffects();
                        break;
                    case "filters":
                        n.initFilters();
                        break;
                    case "adjust":
                        n.initAdjust();
                        break;
                    case "crop":
                        n.initCrop();
                        break;
                    case "resize":
                        n.initResize();
                        break;
                    case "rotate":
                        n.initOrientation();
                        break;
                    default:
                        n.destroyAll()
                }
            }), jr(Ar(n), "destroyMode", function(e) {
                switch (e) {
                    case "effects":
                    case "filters":
                    case "adjust":
                        break;
                    case "crop":
                        n.destroyCrop()
                }
            }), jr(Ar(n), "getEffectHandlerName", function(e) {
                switch (e) {
                    case "colorize":
                        return "colorize";
                    case "contrast":
                        return "contrast";
                    case "cross_process":
                        return "crossProcess";
                    case "glow_sun":
                        return "glowingSun";
                    case "hdr_effect":
                        return "hdr";
                    case "jarques":
                        return "jarques";
                    case "love":
                        return "love";
                    case "old_boot":
                        return "oldBoot";
                    case "orange_peel":
                        return "orangePeel";
                    case "pin_hole":
                        return "pinhole";
                    case "pleasant":
                        return "pleasant";
                    case "sepia":
                        return "sepia";
                    case "sun_rise":
                        return "sunrise";
                    case "vintage":
                        return "vintage";
                    case "clarity":
                        return "";
                    case "edge_enhance":
                        return "edgeEnhance";
                    case "emboss":
                        return "emboss";
                    case "grungy":
                        return "grungy";
                    case "hazy":
                        return "hazyDays";
                    case "lomo":
                        return "lomo";
                    case "noise":
                        return "noise";
                    case "old_paper":
                        return "oldPaper";
                    case "posterize":
                        return "posterize";
                    case "radial_blur":
                        return "radialBlur";
                    case "sin_city":
                        return "sinCity";
                    case "tilt_shift":
                        return "tiltShift";
                    default:
                        return null
                }
            }), n.state = Cr({}, e, {
                queue: Array.from(Array(3).keys()),
                tempOperation: null,
                canvas: null,
                adjust: {
                    brightness: 0,
                    contrast: 0,
                    gamma: 1,
                    saturation: 0
                }
            }), n
        }
        var n, r, a;
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
                constructor: {
                    value: e,
                    writable: !0,
                    configurable: !0
                }
            }), t && Rr(e, t)
        }(t, i["Component"]), n = t, (r = [{
            key: "shouldComponentUpdate",
            value: function() {
                return !1
            }
        }, {
            key: "componentWillReceiveProps",
            value: function(e) {
                e.activeTab !== this.state.activeTab && (this.state.activeTab && this.destroyMode(this.state.activeTab), this.changeTab(e.activeTab)), this.setState(Cr({}, e))
            }
        }, {
            key: "componentDidMount",
            value: function() {
                var e = this,
                    t = this.state.src,
                    n = t.split("/"),
                    r = n[n.length - 1];
                this.props.updateState({
                    isShowSpinner: !0,
                    applyChanges: this.applyChanges,
                    applyOperations: this.applyOperations,
                    saveImage: this.saveImage,
                    updateCropDetails: this.updateCropDetails,
                    resize: this.resize,
                    addEffect: this.addEffect,
                    cleanTemp: this.cleanTemp,
                    revert: this.revert,
                    rotate: this.rotate,
                    adjust: this.adjust,
                    downloadImage: this.downloadImage
                });
                var i = this.getCanvasNode(),
                    o = i.getContext("2d"),
                    a = new Image;
                a.crossOrigin = "", a.src = t, this.img = a, a.onload = function() {
                    i.width = a.width, i.height = a.height, o.drawImage(a, 0, 0, a.width, a.height), e.props.updateState({
                        isShowSpinner: !1,
                        original: {
                            height: a.height,
                            width: a.width
                        },
                        canvasDimensions: {
                            height: a.height,
                            width: a.width,
                            ratio: a.width / a.height
                        }
                    }), e.setState({
                        originalWidth: a.width,
                        originalHeight: a.height,
                        originalImage: a,
                        imageName: r.indexOf("?") > -1 ? r.slice(0, r.indexOf("?")) : r,
                        originalCanvas: i
                    })
                }
            }
        }, {
            key: "render",
            value: function() {
                return o.a.createElement(_e, {
                    id: "scaleflex-image-edit-box"
                })
            }
        }]) && Or(n.prototype, r), a && Or(n, a), t
    }();
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Pr, "ImageManipulator", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Preview/ImageManipulator.js");

    function Dr(e) {
        return (Dr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Mr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Lr(e, t) {
        return !t || "object" !== Dr(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Ir(e) {
        return (Ir = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Ur(e, t) {
        return (Ur = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Br = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Lr(this, Ir(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ur(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.isShowSpinner,
                        n = e.activeTab,
                        r = e.isHideCanvas;
                    return o.a.createElement(ye, null, o.a.createElement(ve, {
                        id: "preview-img-box",
                        hideCanvas: "crop" === n || r
                    }, o.a.createElement(Pr, this.props)), o.a.createElement(Xt, {
                        overlay: !0,
                        show: t
                    }))
                }
            }]) && Mr(n.prototype, r), a && Mr(n, a), t
        }(),
        zr = Br;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Br, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Preview/Preview.js");

    function Hr(e) {
        return (Hr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Nr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Fr(e, t) {
        return !t || "object" !== Hr(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Wr(e) {
        return (Wr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Yr(e, t) {
        return (Yr = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var qr = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Fr(this, Wr(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Yr(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.name,
                        n = e.activeTab,
                        r = "rotate" === t ? "orientation" : t;
                    return o.a.createElement(P, {
                        active: n === t,
                        onClick: this.props.updateState.bind(this, {
                            activeTab: t
                        })
                    }, o.a.createElement(D, {
                        name: t
                    }), o.a.createElement(M, null, r))
                }
            }]) && Nr(n.prototype, r), a && Nr(n, a), t
        }(),
        $r = qr;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(qr, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Tool.js");

    function Vr(e) {
        return (Vr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Xr(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Kr(e, t) {
        return !t || "object" !== Vr(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Gr(e) {
        return (Gr = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Qr(e, t) {
        return (Qr = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Jr = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Kr(this, Gr(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Qr(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.name,
                        n = e.onApplyEffects;
                    return o.a.createElement(I, {
                        onClick: n.bind(null, t)
                    }, o.a.createElement(U, {
                        src: on(t)
                    }), o.a.createElement(B, null, nn(t)))
                }
            }]) && Xr(n.prototype, r), a && Xr(n, a), t
        }(),
        Zr = Jr;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Jr, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Effect.js");

    function ei(e) {
        return (ei = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ti(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ni(e, t) {
        return !t || "object" !== ei(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ri(e) {
        return (ri = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ii(e, t) {
        return (ii = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var oi = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ni(this, ri(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ii(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props.onApplyEffects;
                    return o.a.createElement(L, null, ln.map(function(t) {
                        return o.a.createElement(Zr, {
                            key: t,
                            name: t,
                            onApplyEffects: e
                        })
                    }))
                }
            }]) && ti(n.prototype, r), a && ti(n, a), t
        }(),
        ai = oi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(oi, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Effects.js");

    function si(e) {
        return (si = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function li(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ci(e, t) {
        return !t || "object" !== si(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function ui(e) {
        return (ui = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function fi(e, t) {
        return (fi = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var pi = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ci(this, ui(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && fi(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.name,
                        n = e.onApplyEffects;
                    return o.a.createElement(I, {
                        onClick: n.bind(null, t)
                    }, o.a.createElement(U, {
                        src: on(t)
                    }), o.a.createElement(B, null, nn(t)))
                }
            }]) && li(n.prototype, r), a && li(n, a), t
        }(),
        di = pi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(pi, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Filter.js");

    function hi(e) {
        return (hi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function mi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function gi(e, t) {
        return !t || "object" !== hi(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function bi(e) {
        return (bi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function yi(e, t) {
        return (yi = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var vi = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), gi(this, bi(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && yi(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props.onApplyEffects;
                    return o.a.createElement(L, null, cn.map(function(t) {
                        return o.a.createElement(di, {
                            key: t,
                            name: t,
                            onApplyEffects: e
                        })
                    }))
                }
            }]) && mi(n.prototype, r), a && mi(n, a), t
        }(),
        _i = vi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(vi, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Filters.js");

    function wi(e) {
        return (wi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function xi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ci(e) {
        return (Ci = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ki(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Ei(e, t) {
        return (Ei = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ti(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Oi = [{
            name: "original",
            value: 0
        }, {
            name: "square",
            value: 1
        }, {
            name: "5 : 4",
            value: 1.25
        }, {
            name: "4 : 3",
            value: 1.33333
        }, {
            name: "6 : 4",
            value: 1.5
        }],
        Si = function(e) {
            function t() {
                var e, n, r, i;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                return r = this, i = (e = Ci(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== wi(i) && "function" != typeof i ? ki(r) : i, Ti(ki(n), "state", {
                    aspectRatio: NaN,
                    activeRatio: "custom"
                }), Ti(ki(n), "changeWidth", function(e) {
                    window.scaleflexPlugins.cropperjs.setCropBoxData({
                        width: +e.target.value / window.scaleflexPlugins.zoom
                    })
                }), Ti(ki(n), "changeHeight", function(e) {
                    window.scaleflexPlugins.cropperjs.setCropBoxData({
                        height: +e.target.value / window.scaleflexPlugins.zoom
                    })
                }), Ti(ki(n), "toggleRatio", function(e) {
                    e.preventDefault(), e.stopPropagation();
                    var t = n.props.cropDetails,
                        r = t.width,
                        i = t.height,
                        o = n.state.aspectRatio;
                    o = o ? NaN : r / i, window.scaleflexPlugins.cropperjs.setAspectRatio(o), window.scaleflexPlugins.cropperjs.setCropBoxData({
                        width: r / window.scaleflexPlugins.zoom,
                        height: i / window.scaleflexPlugins.zoom
                    }), n.setState({
                        aspectRatio: o
                    })
                }), Ti(ki(n), "getCanvasNode", function() {
                    return document.getElementById("preview-img-box")
                }), Ti(ki(n), "changeRatio", function(e) {
                    var t, r = n.state.aspectRatio,
                        i = n.props.original,
                        o = i.width,
                        a = void 0 === o ? 1 : o,
                        s = i.height,
                        l = void 0 === s ? 1 : s;
                    "custom" !== e.name || r ? (t = "original" === e.name ? a / l : e.value, window.scaleflexPlugins.cropperjs.setAspectRatio(t), n.setState({
                        activeRatio: e.name,
                        aspectRatio: t
                    })) : n.setState({
                        activeRatio: e.name
                    })
                }), n
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Ei(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.operations,
                        n = e.processWithCloudimage,
                        r = e.updateState,
                        i = e.forceApplyOperations,
                        o = t.findIndex(function(e) {
                            return "crop" === e.stack[0].name
                        });
                    o > -1 && n && (t.splice(o, 1), r({
                        operations: t
                    }), i(t, "crop"))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.state,
                        n = t.aspectRatio,
                        r = t.activeRatio,
                        i = this.props,
                        a = i.cropDetails,
                        s = i.original;
                    return o.a.createElement(it, null, o.a.createElement(pt, {
                        active: "custom" === r
                    }, o.a.createElement(at, null, o.a.createElement(st, null, "width"), o.a.createElement(lt, {
                        dark: "custom" === r,
                        fullSize: !0,
                        value: Math.round(a.width),
                        onChange: this.changeWidth
                    })), o.a.createElement(ct, null, o.a.createElement(ut, {
                        active: n,
                        link: !0,
                        onClick: this.toggleRatio
                    }, o.a.createElement(ft, {
                        active: n
                    }))), o.a.createElement(at, null, o.a.createElement(st, null, "height"), o.a.createElement(lt, {
                        dark: "custom" === r,
                        fullSize: !0,
                        value: Math.round(a.height),
                        onChange: this.changeHeight
                    })), o.a.createElement(ot, null, "Custom")), Oi.map(function(t) {
                        return o.a.createElement(pt, {
                            active: r === t.name,
                            onClick: e.changeRatio.bind(e, t),
                            key: t.name
                        }, o.a.createElement(dt, null, o.a.createElement(ht, {
                            ratio: t.value || s.width / s.height
                        }), o.a.createElement(mt, null, t.name)))
                    }))
                }
            }]) && xi(n.prototype, r), a && xi(n, a), t
        }(),
        Ai = Si;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Oi, "BOXES", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Crop.js"), __REACT_HOT_LOADER__.register(Si, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Crop.js"));

    function Ri(e) {
        return (Ri = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ji(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                Ii(e, t, n[t])
            })
        }
        return e
    }

    function Pi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Di(e) {
        return (Di = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Mi(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Li(e, t) {
        return (Li = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Ii(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Ui = function(e) {
            function t() {
                var e, n, r, i;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                return r = this, i = (e = Di(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== Ri(i) && "function" != typeof i ? Mi(r) : i, Ii(Mi(n), "state", {
                    isBlockRatio: !1
                }), Ii(Mi(n), "changeWidth", function(e) {
                    var t = n.state.isBlockRatio,
                        r = n.props.canvasDimensions,
                        i = e.target.value,
                        o = r.height;
                    t || (o = i && i / r.ratio || 1), n.props.updateState({
                        canvasDimensions: ji({}, r, {
                            width: i,
                            height: o
                        })
                    })
                }), Ii(Mi(n), "changeHeight", function(e) {
                    var t = n.state.isBlockRatio,
                        r = n.props.canvasDimensions,
                        i = e.target.value,
                        o = r.width;
                    t || (o = i && i * r.ratio || 1), n.props.updateState({
                        canvasDimensions: ji({}, r, {
                            width: o,
                            height: i
                        })
                    })
                }), Ii(Mi(n), "toggleRatio", function() {
                    n.setState({
                        isBlockRatio: !n.state.isBlockRatio
                    })
                }), n
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Li(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.operations,
                        n = e.processWithCloudimage,
                        r = e.updateState,
                        i = e.forceApplyOperations,
                        o = t.findIndex(function(e) {
                            return "resize" === e.stack[0].name
                        });
                    o > -1 && n && (t.splice(o, 1), r({
                        operations: t
                    }), i(t, "resize"))
                }
            }, {
                key: "render",
                value: function() {
                    var e = this,
                        t = this.state.isBlockRatio,
                        n = this.props,
                        r = n.canvasDimensions,
                        i = n.processWithCloudimage;
                    return o.a.createElement(vt, null, o.a.createElement(_t, null, o.a.createElement(at, null, o.a.createElement(st, null, "width"), o.a.createElement(lt, {
                        fullSize: !0,
                        value: parseInt(r.width, 10) || "",
                        onChange: this.changeWidth
                    })), o.a.createElement(ct, null, o.a.createElement(ut, {
                        active: !t,
                        style: i ? {
                            cursor: "not-allowed"
                        } : {},
                        link: !0,
                        onClick: function() {
                            !i && e.toggleRatio()
                        }
                    }, o.a.createElement(ft, {
                        active: !t,
                        style: i ? {
                            cursor: "not-allowed"
                        } : {}
                    }))), o.a.createElement(at, null, o.a.createElement(st, null, "height"), o.a.createElement(lt, {
                        fullSize: !0,
                        value: parseInt(r.height, 10) || "",
                        onChange: this.changeHeight
                    }))))
                }
            }]) && Pi(n.prototype, r), a && Pi(n, a), t
        }(),
        Bi = Ui;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ui, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Resize.js");

    function zi(e) {
        return (zi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Hi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ni(e) {
        return (Ni = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Fi(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Wi(e, t) {
        return (Wi = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Yi(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var qi = function(e) {
            function t() {
                var e, n, r, i;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                return r = this, i = (e = Ni(t)).call.apply(e, [this].concat(a)), n = !i || "object" !== zi(i) && "function" != typeof i ? Fi(r) : i, Yi(Fi(n), "state", {
                    rotate: 0
                }), Yi(Fi(n), "leftRotate", function() {
                    var e = n.props.onRotate,
                        t = n.state.rotate;
                    e(-90, t - 90), n.setState({
                        rotate: t - 90
                    })
                }), Yi(Fi(n), "rightRotate", function() {
                    var e = n.props.onRotate,
                        t = n.state.rotate;
                    e(90, t + 90), n.setState({
                        rotate: t + 90
                    })
                }), n
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Wi(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "componentDidMount",
                value: function() {
                    var e = this.props,
                        t = e.operations,
                        n = e.processWithCloudimage,
                        r = e.updateState,
                        i = e.forceApplyOperations,
                        o = t.findIndex(function(e) {
                            return "rotate" === e.stack[0].name
                        });
                    o > -1 && n && (t.splice(o, 1), r({
                        operations: t
                    }), i(t, "rotate"))
                }
            }, {
                key: "render",
                value: function() {
                    return o.a.createElement(Ot, null, o.a.createElement(St, null, o.a.createElement(At, null, "Rotate"), o.a.createElement(Rt, null, o.a.createElement(Ye, {
                        onClick: this.leftRotate
                    }, o.a.createElement(jt, {
                        name: "left-rotate"
                    })), o.a.createElement(Ye, {
                        onClick: this.rightRotate
                    }, o.a.createElement(jt, {
                        name: "right-rotate"
                    })))))
                }
            }]) && Hi(n.prototype, r), a && Hi(n, a), t
        }(),
        $i = qi;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(qi, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Orientation.js");

    function Vi(e) {
        return (Vi = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Xi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Ki(e, t) {
        return !t || "object" !== Vi(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function Gi(e) {
        return (Gi = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Qi(e, t) {
        return (Qi = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var Ji = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), Ki(this, Gi(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Qi(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this.props.onAdjust;
                    return o.a.createElement(Dt, null, o.a.createElement(xe, {
                        onClick: function() {
                            e("brightness", -30)
                        }
                    }, "Brightness"), o.a.createElement(xe, {
                        onClick: function() {
                            e("contrast", 30)
                        }
                    }, "Contrast"), o.a.createElement(xe, {
                        onClick: function() {
                            e("gamma", 5)
                        }
                    }, "Gamma"), o.a.createElement(xe, {
                        onClick: function() {
                            e("saturation", 30)
                        }
                    }, "Saturation"))
                }
            }]) && Xi(n.prototype, r), a && Xi(n, a), t
        }(),
        Zi = Ji;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Ji, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Adjust.js");

    function eo(e) {
        return (eo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function to() {
        return (to = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function no(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function ro(e, t) {
        return !t || "object" !== eo(t) && "function" != typeof t ? function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
        }(e) : t
    }

    function io(e) {
        return (io = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function oo(e, t) {
        return (oo = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ao = function(e) {
            function t() {
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), ro(this, io(t).apply(this, arguments))
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && oo(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.activeTab,
                        r = t.processWithCloudimage,
                        i = t.isShowSpinner,
                        a = t.operations.findIndex(function(e) {
                            return "resize" === e.stack[0].name
                        }),
                        s = sn;
                    return r && (s = sn.filter(function(e) {
                        return un.indexOf(e) > -1
                    })), r && a > -1 && (s = s.filter(function(e) {
                        return "crop" !== e
                    })), o.a.createElement(j, null, !n && s.map(function(t) {
                        return o.a.createElement($r, to({
                            name: t,
                            key: t
                        }, e.props))
                    }), "effects" === n && o.a.createElement(ai, this.props), "filters" === n && o.a.createElement(_i, this.props), "crop" === n && o.a.createElement(Ai, this.props), "resize" === n && o.a.createElement(Bi, this.props), "rotate" === n && o.a.createElement($i, this.props), "adjust" === n && o.a.createElement(Zi, this.props), i && o.a.createElement(Lt, null))
                }
            }]) && no(n.prototype, r), a && no(n, a), t
        }(),
        so = ao;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(ao, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Toolbar/Toolbar.js");

    function lo(e) {
        return (lo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function co(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function uo(e) {
        return (uo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function fo(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function po(e, t) {
        return (po = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }
    var ho = function(e) {
            function t() {
                var e, n, r, i, o, a, s;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++) c[u] = arguments[u];
                return r = this, i = (e = uo(t)).call.apply(e, [this].concat(c)), n = !i || "object" !== lo(i) && "function" != typeof i ? fo(r) : i, o = fo(n), s = function() {
                    var e = n.props,
                        t = e.onDownloadImage,
                        r = e.processWithFilerobot,
                        i = e.processWithCloudimage,
                        o = e.onSave;
                    r || i ? o() : t()
                }, (a = "handleSave") in o ? Object.defineProperty(o, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = s, n
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && po(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "render",
                value: function() {
                    var e = this,
                        t = this.props,
                        n = t.activeTab,
                        r = t.onRevert,
                        i = t.apply,
                        a = t.onClose,
                        s = t.showGoBackBtn,
                        l = t.operations,
                        c = t.processWithFilerobot,
                        u = t.processWithCloudimage,
                        f = "rotate" === n ? "orientation" : n,
                        p = !!l.length,
                        d = c || u ? "SAVE" : "DOWNLOAD";
                    return o.a.createElement(Ue, null, o.a.createElement(Be, null, o.a.createElement(ze, null, f || "Édition d'images"), o.a.createElement(Ut, {
                        onClick: a
                    })), o.a.createElement(Fe, null, o.a.createElement(He, null, o.a.createElement(We, {
                        hide: !n,
                        onClick: r,
                        sm: !0,
                        default: !0,
                        fullSize: !0
                    }, "Cancel"), s && o.a.createElement(We, {
                        hide: n,
                        onClick: a,
                        sm: !0,
                        default: !0,
                        fullSize: !0
                    }, "Go back")), o.a.createElement(so, this.props), o.a.createElement(Ne, null, o.a.createElement(xe, {
                        themeColor: !0,
                        sm: !0,
                        disabled: !p && !n,
                        success: !n,
                        themeBtn: n,
                        fullSize: !0,
                        onClick: function() {
                            n ? i() : e.handleSave()
                        }
                    }, n ? "APPLY" : d))))
                }
            }]) && co(n.prototype, r), a && co(n, a), t
        }(),
        mo = ho,
        go = ("undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(ho, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Header/Header.js"), n(14)),
        bo = n.n(go),
        yo = (n(34), n(35), n(36), n(37), n(38), n(2));

    function vo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var _o = function() {
        function e() {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e)
        }
        var t, n, r;
        return t = e, r = [{
            key: "initClass",
            value: function() {
                this.blenders = {}
            }
        }, {
            key: "register",
            value: function(e, t) {
                return this.blenders[e] = t
            }
        }, {
            key: "execute",
            value: function(e, t, n) {
                return this.blenders[e](t, n)
            }
        }], (n = null) && vo(t.prototype, n), r && vo(t, r), e
    }();
    _o.initClass();
    var wo = _o,
        xo = wo;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(_o, "Blender", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/blander.js"), __REACT_HOT_LOADER__.register(wo, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/blander.js"));

    function Co(e) {
        return (Co = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function ko(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var Eo = function() {
        function e(t) {
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), this.c = t, this.filter = this.c, this.options = {
                blendingMode: "normal",
                opacity: 1
            }, this.layerID = yo.b.uniqid.get(), this.canvas = document.createElement("canvas"), this.canvas.width = this.c.dimensions.width, this.canvas.height = this.c.dimensions.height, this.context = this.canvas.getContext("2d"), this.context.createImageData(this.canvas.width, this.canvas.height), this.imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height), this.pixelData = this.imageData.data
        }
        var t, n, r;
        return t = e, (n = [{
            key: "newLayer",
            value: function(e) {
                return this.c.newLayer.call(this.c, e)
            }
        }, {
            key: "setBlendingMode",
            value: function(e) {
                return this.options.blendingMode = e, this
            }
        }, {
            key: "opacity",
            value: function(e) {
                return this.options.opacity = e / 100, this
            }
        }, {
            key: "copyParent",
            value: function() {
                for (var e = this.c.pixelData, t = 0, n = this.c.pixelData.length; t < n; t += 4) this.pixelData[t] = e[t], this.pixelData[t + 1] = e[t + 1], this.pixelData[t + 2] = e[t + 2], this.pixelData[t + 3] = e[t + 3];
                return this
            }
        }, {
            key: "fillColor",
            value: function() {
                return this.c.fillColor.apply(this.c, arguments)
            }
        }, {
            key: "overlayImage",
            value: function(e) {
                return "object" === Co(e) ? e = e.src : "string" == typeof e && "#" === e[0] && (e = Object(yo.a)(e).src), e ? (this.c.renderer.renderQueue.push({
                    type: Caman.Filter.Type.LoadOverlay,
                    src: e,
                    layer: this
                }), this) : this
            }
        }, {
            key: "layerMask",
            value: function(e) {
                return "object" === Co(e) ? e = e.src : "string" == typeof e && "#" === e[0] && (e = Object(yo.a)(e).src), e ? (this.c.renderer.renderQueue.push({
                    type: Caman.Filter.Type.LoadLayerMask,
                    src: e,
                    layer: this
                }), this) : this
            }
        }, {
            key: "applyToParent",
            value: function() {
                var e = this,
                    t = this.c.pixelStack[this.c.pixelStack.length - 1],
                    n = this.c.pixelData,
                    r = this.options.opacity;
                return function() {
                    for (var i = [], o = 0, a = n.length; o < a; o += 4) {
                        var s = {
                                r: t[o],
                                g: t[o + 1],
                                b: t[o + 2],
                                a: t[o + 3]
                            },
                            l = {
                                r: n[o],
                                g: n[o + 1],
                                b: n[o + 2],
                                a: n[o + 3]
                            };
                        e.maskData && (r = e.maskData[o] / 255);
                        var c = xo.execute(e.options.blendingMode, l, s);
                        c.r = yo.b.clampRGB(c.r), c.g = yo.b.clampRGB(c.g), c.b = yo.b.clampRGB(c.b), null == c.a && (c.a = l.a), t[o] = s.r - (s.r - c.r) * (r * (c.a / 255)), t[o + 1] = s.g - (s.g - c.g) * (r * (c.a / 255)), i.push(t[o + 2] = s.b - (s.b - c.b) * (r * (c.a / 255)))
                    }
                    return i
                }()
            }
        }]) && ko(t.prototype, n), r && ko(t, r), e
    }();
    Caman.Layer = Eo;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Eo, "Layer", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/lib/caman/core/layer.js"), n(39), n(40);
    xo.register("normal", function(e, t) {
        return {
            r: e.r,
            g: e.g,
            b: e.b
        }
    }), xo.register("multiply", function(e, t) {
        return {
            r: e.r * t.r / 255,
            g: e.g * t.g / 255,
            b: e.b * t.b / 255
        }
    }), xo.register("screen", function(e, t) {
        return {
            r: 255 - (255 - e.r) * (255 - t.r) / 255,
            g: 255 - (255 - e.g) * (255 - t.g) / 255,
            b: 255 - (255 - e.b) * (255 - t.b) / 255
        }
    }), xo.register("overlay", function(e, t) {
        var n;
        return (n = {}).r = t.r > 128 ? 255 - 2 * (255 - e.r) * (255 - t.r) / 255 : t.r * e.r * 2 / 255, n.g = t.g > 128 ? 255 - 2 * (255 - e.g) * (255 - t.g) / 255 : t.g * e.g * 2 / 255, n.b = t.b > 128 ? 255 - 2 * (255 - e.b) * (255 - t.b) / 255 : t.b * e.b * 2 / 255, n
    }), xo.register("difference", function(e, t) {
        return {
            r: e.r - t.r,
            g: e.g - t.g,
            b: e.b - t.b
        }
    }), xo.register("addition", function(e, t) {
        return {
            r: t.r + e.r,
            g: t.g + e.g,
            b: t.b + e.b
        }
    }), xo.register("exclusion", function(e, t) {
        return {
            r: 128 - 2 * (t.r - 128) * (e.r - 128) / 255,
            g: 128 - 2 * (t.g - 128) * (e.g - 128) / 255,
            b: 128 - 2 * (t.b - 128) * (e.b - 128) / 255
        }
    }), xo.register("softLight", function(e, t) {
        var n;
        return (n = {}).r = t.r > 128 ? 255 - (255 - t.r) * (255 - (e.r - 128)) / 255 : t.r * (e.r + 128) / 255, n.g = t.g > 128 ? 255 - (255 - t.g) * (255 - (e.g - 128)) / 255 : t.g * (e.g + 128) / 255, n.b = t.b > 128 ? 255 - (255 - t.b) * (255 - (e.b - 128)) / 255 : t.b * (e.b + 128) / 255, n
    }), xo.register("lighten", function(e, t) {
        return {
            r: t.r > e.r ? t.r : e.r,
            g: t.g > e.g ? t.g : e.g,
            b: t.b > e.b ? t.b : e.b
        }
    }), xo.register("darken", function(e, t) {
        return {
            r: t.r > e.r ? e.r : t.r,
            g: t.g > e.g ? e.g : t.g,
            b: t.b > e.b ? e.b : t.b
        }
    });
    n(41);
    var To = n(3);
    Caman.Plugin.register("crop", function(e, t, n, r) {
        var i;
        return null == n && (n = 0), null == r && (r = 0), i = document.createElement("canvas"), yo.b.copyAttributes(this.canvas, i), i.width = e, i.height = t, i.getContext("2d").drawImage(this.canvas, n, r, e, t, 0, 0, e, t), this.cropCoordinates = {
            x: n,
            y: r
        }, this.cropped = !0, this.replaceCanvas(i)
    }), Caman.Plugin.register("resize", function(e) {
        var t;
        if (null == e && (e = null), null !== e && (null != e.width || null != e.height)) return null == e.width ? e.width = this.canvas.width * e.height / this.canvas.height : null == e.height && (e.height = this.canvas.height * e.width / this.canvas.width), t = document.createElement("canvas"), yo.b.copyAttributes(this.canvas, t), t.width = e.width, t.height = e.height, t.getContext("2d").drawImage(this.canvas, 0, 0, this.canvas.width, this.canvas.height, 0, 0, e.width, e.height), this.resized = !0, this.replaceCanvas(t);
        To.a.error("Invalid or missing dimensions given for resize")
    }), Caman.Filter.register("crop", function() {
        return this.processPlugin("crop", Array.prototype.slice.call(arguments, 0))
    }), Caman.Filter.register("resize", function() {
        return this.processPlugin("resize", Array.prototype.slice.call(arguments, 0))
    });
    var Oo, So, Ao;
    n(42), n(43), n(44), n(45), n(46), n(47), n(48);
    Oo = [512, 512, 456, 512, 328, 456, 335, 512, 405, 328, 271, 456, 388, 335, 292, 512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273, 512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265, 512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261, 512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259], So = [9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24], Ao = function() {
        return this.r = 0, this.g = 0, this.b = 0, this.a = 0, this.next = null
    }, Caman.Plugin.register("compoundBlur", function(e, t, n, r) {
        var i, o, a, s = this.dimensions.width,
            l = this.dimensions.height,
            c = this.pixelData,
            u = e.data,
            f = s * l,
            p = [];
        for (i = 0, o = 0 <= (a = f << 2); o ? i < a : i > a; o ? i++ : i--) p[i] = c[i];
        var d = 0,
            h = r;
        for (r -= 1; h-- >= 0;) {
            var m, g, b, y, v, _, w, x, C, k, E, T, O, S, A, R, j, P, D, M, L, I, U, B = t + .5 | 0;
            if (0 !== B) {
                B > 256 && (B = 256);
                var z = B + B + 1,
                    H = s - 1,
                    N = l - 1,
                    F = B + 1,
                    W = F * (F + 1) / 2,
                    Y = new Ao,
                    q = void 0,
                    $ = Y;
                for (i = 1, m = 1 <= (g = z); m ? i < g : i > g; m ? i++ : i--) $ = $.next = new Ao, i === F && (q = $);
                $.next = Y;
                var V = null,
                    X = null,
                    K = D = 0,
                    G = Oo[B],
                    Q = So[B];
                for (P = 0, M = 0 <= (L = l); M ? P < L : P > L; M ? P++ : P--) {
                    var J, Z, ee, te, ne, re;
                    for (O = _ = b = A = x = v = 0, S = F * (T = p[D]), w = F * (E = p[D + 1]), y = F * (k = p[D + 2]), A += W * T, x += W * E, v += W * k, $ = Y, i = 0, J = 0 <= (Z = F); J ? i < Z : i > Z; J ? i++ : i--) $.r = T, $.g = E, $.b = k, $ = $.next;
                    for (i = 1, ee = 1 <= (te = F); ee ? i < te : i > te; ee ? i++ : i--) C = D + ((H < i ? H : i) << 2), A += ($.r = T = p[C]) * (R = F - i), x += ($.g = E = p[C + 1]) * R, v += ($.b = k = p[C + 2]) * R, O += T, _ += E, b += k, $ = $.next;
                    for (V = Y, X = q, j = 0, ne = 0 <= (re = s); ne ? j < re : j > re; ne ? j++ : j--) p[D] = A * G >> Q, p[D + 1] = x * G >> Q, p[D + 2] = v * G >> Q, A -= S, x -= w, v -= y, S -= V.r, w -= V.g, y -= V.b, C = K + ((C = j + F) < H ? C : H) << 2, A += O += V.r = p[C], x += _ += V.g = p[C + 1], v += b += V.b = p[C + 2], V = V.next, S += T = X.r, w += E = X.g, y += k = X.b, O -= T, _ -= E, b -= k, X = X.next, D += 4;
                    K += s
                }
                for (j = 0, I = 0 <= (U = s); I ? j < U : j > U; I ? j++ : j--) {
                    var ie, oe, ae, se, le, ce;
                    for (_ = b = O = x = v = A = 0, S = F * (T = p[D = j << 2]), w = F * (E = p[D + 1]), y = F * (k = p[D + 2]), A += W * T, x += W * E, v += W * k, $ = Y, i = 0, ie = 0 <= (oe = F); ie ? i < oe : i > oe; ie ? i++ : i--) $.r = T, $.g = E, $.b = k, $ = $.next;
                    var ue = s;
                    for (i = 1, ae = 1 <= (se = F); ae ? i < se : i > se; ae ? i++ : i--) D = ue + j << 2, A += ($.r = T = p[D]) * (R = F - i), x += ($.g = E = p[D + 1]) * R, v += ($.b = k = p[D + 2]) * R, O += T, _ += E, b += k, $ = $.next, i < N && (ue += s);
                    for (D = j, V = Y, X = q, P = 0, le = 0 <= (ce = l); le ? P < ce : P > ce; le ? P++ : P--) p[C = D << 2] = A * G >> Q, p[C + 1] = x * G >> Q, p[C + 2] = v * G >> Q, A -= S, x -= w, v -= y, S -= V.r, w -= V.g, y -= V.b, C = j + ((C = P + F) < N ? C : N) * s << 2, A += O += V.r = p[C], x += _ += V.g = p[C + 1], v += b += V.b = p[C + 2], V = V.next, S += T = X.r, w += E = X.g, y += k = X.b, O -= T, _ -= E, b -= k, X = X.next, D += s
                }
                for (t *= n, i = f; --i > -1;) {
                    var fe = i << 2,
                        pe = (255 & u[fe + 2]) / 255 * r,
                        de = 0 | pe;
                    if (de === d) {
                        var he = 256 * (pe - (0 | pe)),
                            me = 256 - he;
                        c[fe] = c[fe] * me + p[fe] * he >> 8, c[fe + 1] = c[fe + 1] * me + p[fe + 1] * he >> 8, c[fe + 2] = c[fe + 2] * me + p[fe + 2] * he >> 8
                    } else de === d + 1 && (c[fe] = p[fe], c[fe + 1] = p[fe + 1], c[fe + 2] = p[fe + 2])
                }
                d++
            }
        }
        return this
    }), Caman.Filter.register("tiltShift", function(e) {
        var t = {
            center: {
                x: this.dimensions.width / 2,
                y: this.dimensions.height / 2
            },
            angle: 45,
            focusWidth: 200,
            startRadius: 3,
            radiusFactor: 1.5,
            steps: 3
        };
        (e = yo.b.extend(t, e)).angle *= Math.PI / 180;
        var n = function(e, t, n, r, i, o, a) {
            var s = document.createElement("canvas");
            s.width = e, s.height = t;
            var l = n + Math.cos(i) * o * .5,
                c = r + Math.sin(i) * o * .5,
                u = n - Math.cos(i) * o * .5,
                f = r - Math.sin(i) * o * .5,
                p = s.getContext("2d"),
                d = p.createLinearGradient(l, c, u, f);
            return a ? (d.addColorStop(0, "white"), d.addColorStop(.5, "black"), d.addColorStop(1, "white")) : (d.addColorStop(0, "white"), d.addColorStop(1, "black")), p.fillStyle = d, p.fillRect(0, 0, e, t), p.getImageData(0, 0, e, t)
        }(this.dimensions.width, this.dimensions.height, e.center.x, e.center.y, e.angle, e.focusWidth, !0);
        return this.processPlugin("compoundBlur", [n, e.startRadius, e.radiusFactor, e.steps])
    }), Caman.Filter.register("radialBlur", function(e) {
        var t = {
            size: 50,
            center: {
                x: this.dimensions.width / 2,
                y: this.dimensions.height / 2
            },
            startRadius: 3,
            radiusFactor: 1.5,
            steps: 3,
            radius: null
        };
        (e = yo.b.extend(t, e)).radius || (e.radius = this.dimensions.width < this.dimensions.height ? this.dimensions.height : this.dimensions.width);
        var n = e.radius / 2 - e.size,
            r = e.radius / 2,
            i = function(e, t, n, r, i, o) {
                var a = document.createElement("canvas");
                a.width = e, a.height = t;
                var s = a.getContext("2d"),
                    l = s.createRadialGradient(n, r, i, n, r, o);
                return l.addColorStop(1, "white"), l.addColorStop(0, "black"), s.fillStyle = l, s.fillRect(0, 0, e, t), s.getImageData(0, 0, e, t)
            }(this.dimensions.width, this.dimensions.height, e.center.x, e.center.y, n, r);
        return this.processPlugin("compoundBlur", [i, e.startRadius, e.radiusFactor, e.steps])
    });
    n(49), n(50), n(51), n(52), n(53), n(54), n(55), n(56), n(57), n(58);
    Caman.Plugin.register("rotate", function(e) {
        var t, n, r, i, o, a, s, l;
        return 0 === (t = e % 360) ? this.dimensions = {
            width: this.canvas.width,
            height: this.canvas.height
        } : (o = Math.PI / 180, n = document.createElement("canvas"), yo.b.copyAttributes(this.canvas, n), 90 === t || -270 === t || 270 === t || -90 === t ? (s = (a = this.canvas.height) / 2, l = (i = this.canvas.width) / 2) : 180 === t ? (s = (a = this.canvas.width) / 2, l = (i = this.canvas.height) / 2) : (i = a = Math.sqrt(Math.pow(this.originalWidth, 2) + Math.pow(this.originalHeight, 2)), s = this.canvas.height / 2, l = this.canvas.width / 2), n.width = a, n.height = i, (r = n.getContext("2d")).save(), r.translate(s, l), r.rotate(t * o), r.drawImage(this.canvas, -this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height), r.restore(), this.replaceCanvas(n))
    }), Caman.Filter.register("rotate", function() {
        return this.processPlugin("rotate", Array.prototype.slice.call(arguments, 0))
    });
    n(59);

    function Ro(e) {
        return (Ro = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function jo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Po(e) {
        return (Po = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function Do(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function Mo(e, t) {
        return (Mo = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Lo(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var Io = function(e) {
            function t(e) {
                var n, r, i;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, i = Po(t).call(this), n = !i || "object" !== Ro(i) && "function" != typeof i ? Do(r) : i, Lo(Do(n), "determineImageType", function() {
                    var e = new XMLHttpRequest;
                    e.open("GET", n.props.src), e.responseType = "arraybuffer", e.onload = function(e) {
                        var t = e.target;
                        n.setState({
                            imageMime: bo()(new Uint8Array(t.response)).mime
                        })
                    }, e.send()
                }), Lo(Do(n), "updateState", function(e) {
                    n.setState(e)
                }), Lo(Do(n), "onRevert", function(e) {
                    var t = n.state,
                        r = t.cleanTemp,
                        i = t.activeTab,
                        o = t.revert,
                        a = t.applyOperations,
                        s = t.operations,
                        l = e ? 0 : s.length - 1;
                    if ("effects" === i || "filters" === i) return n.setState({
                        activeTab: null,
                        isShowSpinner: !0,
                        isHideCanvas: !0
                    }), void r();
                    "rotate" === i && o(function() {
                        a(s, l, function() {
                            n.setState({
                                isHideCanvas: !1,
                                isShowSpinner: !1
                            })
                        })
                    }), n.setState({
                        activeTab: null,
                        isShowSpinner: !1,
                        isHideCanvas: !1
                    })
                }), Lo(Do(n), "forceApplyOperations", function(e, t) {
                    var r = n.state,
                        i = r.revert,
                        o = r.applyOperations;
                    n.setState({
                        activeTab: null,
                        isShowSpinner: !0,
                        isHideCanvas: !0
                    }), i(function() {
                        o(e, e.length, function() {
                            n.setState({
                                isHideCanvas: !1,
                                isShowSpinner: !1,
                                activeTab: t
                            })
                        })
                    })
                }), Lo(Do(n), "onAdjust", function(e, t) {
                    (0, n.state.adjust)(e, t)
                }), Lo(Do(n), "onRotate", function(e, t) {
                    (0, n.state.rotate)(e, t)
                }), Lo(Do(n), "onSave", function() {
                    var e = n.state.saveImage;
                    n.setState({
                        isShowSpinner: !0
                    }), e()
                }), Lo(Do(n), "onDownloadImage", function() {
                    (0, n.state.downloadImage)(), n.props.onComplete({
                        status: "success"
                    }), n.props.onClose()
                }), Lo(Do(n), "onResize", function(e) {
                    (0, n.state.resize)(e)
                }), Lo(Do(n), "onApplyEffects", function(e) {
                    var t = n.state.addEffect;
                    n.setState({
                        isHideCanvas: !0,
                        isShowSpinner: !0
                    }), t(e)
                }), Lo(Do(n), "apply", function() {
                    var e = n.state,
                        t = e.activeTab,
                        r = e.applyChanges;
                    n.setState({
                        isHideCanvas: !0
                    }), r(t)
                }), Lo(Do(n), "redoOperation", function(e) {
                    var t = n.state,
                        r = t.applyOperations,
                        i = t.operations,
                        o = t.revert;
                    n.setState({
                        activeTab: null,
                        isHideCanvas: !0,
                        isShowSpinner: !0
                    }), o(function() {
                        r(i, e, function() {
                            n.setState({
                                isHideCanvas: !1,
                                isShowSpinner: !1
                            })
                        })
                    })
                });
                var o = e.config,
                    a = o.processWithCloudimage,
                    s = o.processWithFilerobot,
                    l = o.uploadWithCloudimageLink;
                return n.state = {
                    isShowSpinner: !0,
                    isHideCanvas: !1,
                    activeTab: null,
                    operations: [],
                    currentOperation: null,
                    original: {
                        width: 300,
                        height: 200
                    },
                    cropDetails: {
                        width: 300,
                        height: 200
                    },
                    canvasDimensions: {
                        width: 300,
                        height: 200,
                        ratio: 1.5
                    },
                    processWithFilerobot: s,
                    processWithCloudimage: a,
                    uploadCloudimageImage: l
                }, n
            }
            var n, r, a;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && Mo(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "componentDidMount",
                value: function() {
                    this.determineImageType()
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state,
                        t = e.isShowSpinner,
                        n = e.activeTab,
                        r = e.operations,
                        i = e.currentOperation,
                        a = e.isHideCanvas,
                        s = e.cropDetails,
                        l = e.original,
                        c = e.canvasDimensions,
                        u = e.processWithCloudimage,
                        f = e.processWithFilerobot,
                        p = e.uploadCloudimageImage,
                        d = e.imageMime,
                        h = this.props,
                        m = h.src,
                        g = h.config,
                        b = h.onClose,
                        y = h.onComplete,
                        v = h.closeOnLoad,
                        _ = void 0 === v || v,
                        w = h.showGoBackBtn,
                        x = {
                            cropDetails: s,
                            original: l,
                            activeTab: n,
                            src: m,
                            onClose: b,
                            canvasDimensions: c,
                            processWithCloudimage: u,
                            processWithFilerobot: f,
                            operations: r,
                            isShowSpinner: t,
                            showGoBackBtn: void 0 !== w && w,
                            forceApplyOperations: this.forceApplyOperations,
                            updateState: this.updateState,
                            onRevert: this.onRevert,
                            apply: this.apply,
                            onSave: this.onSave,
                            onResize: this.onResize,
                            onApplyEffects: this.onApplyEffects,
                            onRotate: this.onRotate,
                            onAdjust: this.onAdjust,
                            onDownloadImage: this.onDownloadImage
                        },
                        C = {
                            activeTab: n,
                            isShowSpinner: t,
                            operations: r,
                            currentOperation: i,
                            isHideCanvas: a,
                            src: m,
                            imageMime: d,
                            onClose: b,
                            onComplete: y,
                            canvasDimensions: c,
                            closeOnLoad: _,
                            config: g,
                            processWithCloudimage: u,
                            uploadCloudimageImage: p,
                            updateState: this.updateState
                        },
                        k = {
                            operations: r,
                            currentOperation: i,
                            processWithCloudimage: u,
                            forceApplyOperations: this.forceApplyOperations,
                            updateState: this.updateState,
                            redoOperation: this.redoOperation,
                            config: g
                        };
                    return o.a.createElement(W, null, o.a.createElement(mo, x), o.a.createElement(zr, C), o.a.createElement(tn, k))
                }
            }]) && jo(n.prototype, r), a && jo(n, a), t
        }(),
        Uo = Io;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(Io, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/ImageEditor.js");

    function Bo() {
        var e = function(e, t) {
            t || (t = e.slice(0));
            return Object.freeze(Object.defineProperties(e, {
                raw: {
                    value: Object.freeze(t)
                }
            }))
        }(["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\e90c'\n    }\n"], ["\n  cursor: pointer;\n  position: absolute;\n  font-weight: normal;\n  top: ", ";\n  right: ", ";\n  left: ", ";\n  bottom: ", ";\n  font-size: ", ";\n  z-index: 10;\n  font-family: 'filerobot-image-editor-font' !important;\n  color: ", ";\n  speak: none;\n  font-style: normal;\n  font-variant: normal;\n  text-transform: none;\n  line-height: 1;\n\n  /* Better Font Rendering =========== */\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  \n  :hover {\n    color: ", ";\n  }\n  \n  :before {\n      content: '\\\\e90c'\n    }\n"]);
        return Bo = function() {
            return e
        }, e
    }
    var zo = a.b.span.attrs(function() {
        return {
            role: "button"
        }
    })(Bo(), function(e) {
        return e.t || "10px"
    }, function(e) {
        return e.r || "10px"
    }, function(e) {
        return e.l || "auto"
    }, function(e) {
        return e.b || "auto"
    }, function(e) {
        return e.fz || "18px"
    }, function() {
        return u.modal.colorMuted
    }, function(e) {
        return u.modal.colorMutedHover
    });
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(zo, "CloseBtn", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/CloseBtn.js");

    function Ho(e) {
        return (Ho = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function No() {
        return (No = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }).apply(this, arguments)
    }

    function Fo(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
                o = Object.keys(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
    }

    function Wo(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function Yo(e) {
        return (Yo = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function qo(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function $o(e, t) {
        return ($o = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function Vo() {
        var e = Go(["\n  azimuth: center;\n  border-collapse: separate;\n  border-spacing: 0;\n  caption-side: top;\n  cursor: auto;\n  direction: ltr;\n  elevation: level;\n  empty-cells: show;\n  font-size: medium;\n  font-style: medium;\n  font-variant: medium;\n  font-weight: medium;\n  letter-spacing: normal;\n  line-height: medium;\n  list-style-image: none;\n  list-style-position: outside;\n  list-style-type: disc;\n  list-style: disc outside none;\n  orphans: 2;\n  pitch-range: 50;\n  pitch: medium;\n  quotes: '\"' '\"';\n  richness: 50;\n  speak-header: once;\n  speak-numeral: continuous;\n  speak-punctuation: none;\n  speak: normal;\n  speech-rate: medium;\n  stress: 50;\n  text-align: left;\n  text-indent: 0;\n  text-transform: none;\n  visibility: visible;\n  voice-family: none;\n  volume: medium;\n  white-space: normal;\n  widows: 2;\n  word-spacing: 0;\n  position: fixed;\n  padding: ", ";\n  top: 5%;\n  left: 15%;\n  right: 15%;\n  bottom: 5%;\n  color: ", ";\n  overflow: hidden;\n  z-index: ", ";\n  display: block;\n  animation: scaleflexFadeInAnimation 350ms ease-in-out both;\n  font-family: 'Roboto', 'Arial', sans-serif;\n  \n  ", ";\n  \n  @keyframes scaleflexFadeInAnimation {\n    from {opacity: 0;}\n    to {opacity: 1;}\n  }\n  \n  @media (max-width: 1000px) {\n    top: 20px;\n    left: 20px;\n    bottom: 20px;\n    right: 20px;\n  }\n"]);
        return Vo = function() {
            return e
        }, e
    }

    function Xo() {
        var e = Go(["\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  -webkit-background-clip: padding-box;\n  background-clip: padding-box;\n  border: ", " solid ", ";\n  border-radius: ", ";\n  overflow: hidden;\n  outline: 0;\n  height: ", ";\n  background: ", ";\n  color: ", ";\n"]);
        return Xo = function() {
            return e
        }, e
    }

    function Ko() {
        var e = Go(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  position: fixed;\n  background: ", ";\n  opacity: .4;\n  z-index: 999999992;\n"]);
        return Ko = function() {
            return e
        }, e
    }

    function Go(e, t) {
        return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
            raw: {
                value: Object.freeze(t)
            }
        }))
    }
    var Qo = a.b.div(Ko(), function(e) {
            return u.colors.background.base || "#000"
        }),
        Jo = a.b.div(Xo(), function(e) {
            return e.noBorder ? 0 : "1px"
        }, function(e) {
            return e.noBorder ? "transparent" : u.colors.border.base || "#B0B0B0"
        }, function(e) {
            return e.noBorder ? 0 : u.radii[3]
        }, function(e) {
            return e.h || e.height || "auto"
        }, function(e) {
            return u.colors.background.base || "#fff"
        }, function(e) {
            return u.colors.text.base || "#3d3d3d"
        }),
        Zo = a.b.div(Vo(), function(e) {
            return e.p || e.padding || "0"
        }, function(e) {
            return u.colors.text.base || "#3d3d3d"
        }, function(e) {
            return e.zIndex || "999999995"
        }, function(e) {
            return e.isTooSmall ? "\n    top: 20% !important;\n    left: 15px !important;\n    right: 15px !important;\n    bottom: auto !important;\n    color: black !important;\n    text-align: center !important;\n    font-size: 18px;\n    \n    > div {\n      padding: 40px !important;\n    }\n    \n    * {\n      color: black !important;\n    }\n  " : ""
        });

    function ea() {
        return "\n    top: 20% !important;\n    left: 15px !important;\n    right: 15px !important;\n    bottom: auto !important;\n    color: black !important;\n    text-align: center !important;\n    font-size: 18px;\n    \n    > div {\n      padding: 40px !important;\n    }\n    \n    * {\n      color: black !important;\n    }\n  "
    }
    var ta = function(e) {
            function t() {
                var e, n, r, i, o, a, s;
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t);
                for (var l = arguments.length, c = new Array(l), u = 0; u < l; u++) c[u] = arguments[u];
                return r = this, i = (e = Yo(t)).call.apply(e, [this].concat(c)), n = !i || "object" !== Ho(i) && "function" != typeof i ? qo(r) : i, o = qo(n), s = function(e) {
                    var t = n.props.onClose,
                        r = void 0 === t ? function() {} : t;
                    27 === e.keyCode && (e.stopPropagation(), r())
                }, (a = "handleOutsideMouseClick") in o ? Object.defineProperty(o, a, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : o[a] = s, n
            }
            var n, a, s;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && $o(e, t)
            }(t, i["Component"]), n = t, (a = [{
                key: "componentWillMount",
                value: function() {
                    var e = this.props.closeOnOutsideClick,
                        t = void 0 === e || e;
                    this.root = document.createElement("div"), document.body.appendChild(this.root), t && document.addEventListener("keydown", this.handleOutsideMouseClick)
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    var e = this.props.closeOnOutsideClick,
                        t = void 0 === e || e;
                    document.body.removeChild(this.root), t && document.removeEventListener("keydown", this.handleOutsideMouseClick)
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.props,
                        t = e.onClose,
                        n = void 0 === t ? function() {} : t,
                        a = e.isHideCloseBtn,
                        s = Fo(e, ["onClose", "isHideCloseBtn"]);
                    return Object(r.createPortal)(o.a.createElement(i.Fragment, null, o.a.createElement(Qo, {
                        onClick: n
                    }), o.a.createElement(Zo, this.props, !a && o.a.createElement(zo, {
                        onClick: n
                    }), o.a.createElement(Jo, No({
                        h: "100%"
                    }, s), this.props.children))), this.root)
                }
            }]) && Wo(n.prototype, a), s && Wo(n, s), t
        }(),
        na = ("undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(Qo, "ModalOverlay", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(Jo, "ModalContent", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(Zo, "ModalFullScreen", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(ea, "getSmallModalStyle", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js"), __REACT_HOT_LOADER__.register(ta, "Modal", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/components/Modal.js")), {
            colors: {
                text: {
                    base: "#F9FAFB",
                    dark: "#F4F6F8",
                    mute: "#aaa",
                    light: "#fff"
                },
                dark: {
                    base: "#1e262c",
                    light: "#454F5B",
                    lighter: "#637381"
                },
                primary: {
                    base: "#181830",
                    light: "#263138",
                    lighter: "#34444c",
                    dark: "#101021",
                    darker: "#090912",
                    text: "#F9FAFB"
                },
                secondary: {
                    base: "#00707c",
                    light: "#007E8A",
                    lighter: "#008D99",
                    dark: "#00616D",
                    darker: "#005662",
                    text: "#F9FAFB"
                }
            },
            textFontSize: "14px",
            borderColor: "#70777f",
            borderDarkColor: "#161e23",
            textColor: "#e7f1f4",
            textColorHover: "#fff",
            textMuted: "#70777f",
            fieldWidth: "120px"
        }),
        ra = na,
        ia = {
            default: {
                mainBackground: "#f5f5f5",
                navBackground: "#181830",
                buttonBackground: "#00707C",
                hoverButtonBackground: "#096868",
                inputBackground: "#fff",
                inputOutlineColor: "#4d90fe",
                activeTabBackground: "#40545b",
                tagsBackground: "#28a745",
                tagsColor: "#fff",
                text: "#5d636b",
                title: "#1e262c",
                inputTextColor: "#555555",
                tabTextColor: "#c0c1c1",
                activeTabTextColor: "#fff",
                buttonTextColor: "#fff",
                border: "#d8d8d8"
            },
            test: {
                mainBackground: "",
                navBackground: "orange",
                buttonBackground: "green",
                hoverButtonBackground: "lightgreen",
                inputBackground: "yellow",
                inputOutlineColor: "black",
                activeTabBackground: "red",
                text: "pink",
                inputTextColor: "grey",
                tabTextColor: "green",
                activeTabTextColor: "yellow",
                buttonTextColor: "black"
            }
        };
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(ia, "colorSchemes", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/assets/styles/colorScheme.js"), __REACT_HOT_LOADER__.register(na, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/assets/styles/colorScheme.js")), n(60);

    function oa(e) {
        return (oa = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function aa(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                fa(e, t, n[t])
            })
        }
        return e
    }

    function sa(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }

    function la(e) {
        return (la = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function ca(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
    }

    function ua(e, t) {
        return (ua = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function fa(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var pa = function(e) {
            function t(e) {
                var n, r, i, o = e.show,
                    a = void 0 !== o && o,
                    s = e.src,
                    l = void 0 === s ? "" : s,
                    c = e.config,
                    u = void 0 === c ? {} : c;
                return function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, t), r = this, i = la(t).call(this), n = !i || "object" !== oa(i) && "function" != typeof i ? ca(r) : i, fa(ca(n), "processConfig", function(e) {
                    return aa({}, fn, {
                        processWithFilerobot: !!e.filerobot,
                        processWithCloudimage: !!e.cloudimage
                    }, e)
                }), fa(ca(n), "open", function(e) {
                    n.setState({
                        isVisible: !0,
                        src: e
                    })
                }), fa(ca(n), "close", function() {
                    var e = n.props.onClose;
                    n.setState({
                        isVisible: !1
                    }, function() {
                        e && e()
                    })
                }), n.state = {
                    isVisible: a,
                    src: l,
                    config: n.processConfig(u)
                }, n
            }
            var n, r, s;
            return function(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && ua(e, t)
            }(t, i["Component"]), n = t, (r = [{
                key: "componentDidUpdate",
                value: function(e) {
                    this.props.show !== e.show && (this.props.show ? this.open(this.props.src) : this.close())
                }
            }, {
                key: "render",
                value: function() {
                    var e = this.state,
                        t = e.isVisible,
                        n = e.src,
                        r = e.config,
                        i = this.props,
                        s = i.onComplete,
                        l = void 0 === s ? function() {} : s,
                        c = i.showGoBackBtn,
                        u = i.closeOnLoad,
                        f = i.showInModal,
                        p = void 0 === f || f,
                        d = ia.default;
                    if (!n || !t) return null;
                    var h = o.a.createElement(F, null, o.a.createElement(Uo, {
                        src: n,
                        config: r,
                        onComplete: l,
                        onClose: this.close,
                        showGoBackBtn: c,
                        closeOnLoad: u
                    }));
                    return o.a.createElement(a.a, {
                        theme: aa({}, ra, d)
                    }, p ? o.a.createElement(ta, {
                        noBorder: !0,
                        fullScreen: "lg",
                        isHideCloseBtn: !0,
                        style: {
                            borderRadius: 5
                        },
                        onClose: this.close
                    }, h) : h)
                }
            }]) && sa(n.prototype, r), s && sa(n, s), t
        }(),
        da = pa,
        ha = da;
    "undefined" != typeof __REACT_HOT_LOADER__ && (__REACT_HOT_LOADER__.register(pa, "ImageEditorWrapper", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/ImageEditorWrapper.js"), __REACT_HOT_LOADER__.register(da, "default", "/Users/dm#####itry/scaleflex/plugins/filerobot-image-editor/projects/react/ImageEditorWrapper.js"));

    function ma(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
    }
    var ga = function() {
        function e() {
            var t = this,
                n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    console.log(e)
                },
                a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            ! function(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e);
            var s = n.elementId || "filerobot-image-editor",
                l = document.getElementById(s);
            l || ((l = document.createElement("div")).id = s, document.body.appendChild(l));
            var c;
            this.component = (c = ha, Object(r.render)(o.a.createElement(c, {
                show: a,
                config: n,
                onComplete: i
            }), l)), this.open = this.component.open, this.close = this.component.close, this.unmount = function() {
                return t.__unmount__REACT_HOT_LOADER__.apply(t, arguments)
            }
        }
        var t, n, i;
        return t = e, (n = [{
            key: "__unmount__REACT_HOT_LOADER__",
            value: function() {
                return Object(r.unmountComponentAtNode)(container)
            }
        }]) && ma(t.prototype, n), i && ma(t, i), e
    }();
    window.FilerobotImageEditor = ga;
    "undefined" != typeof __REACT_HOT_LOADER__ && __REACT_HOT_LOADER__.register(ga, "FilerobotImageEditor", "")
}]);