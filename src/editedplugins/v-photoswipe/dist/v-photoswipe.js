!function (e, n) {
  "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define([], n) : "object" == typeof exports ? exports["v-photoswipe"] = n() : e["v-photoswipe"] = n()
}(window, function () {
  return function (e) {
    var n = {};

    function t(o) {
      if (n[o]) return n[o].exports;
      var i = n[o] = {i: o, l: !1, exports: {}};
      return e[o].call(i.exports, i, i.exports, t), i.l = !0, i.exports
    }

    return t.m = e, t.c = n, t.d = function (e, n, o) {
      t.o(e, n) || Object.defineProperty(e, n, {enumerable: !0, get: o})
    }, t.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
    }, t.t = function (e, n) {
      if (1 & n && (e = t(e)), 8 & n) return e;
      if (4 & n && "object" == typeof e && e && e.__esModule) return e;
      var o = Object.create(null);
      if (t.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e) for (var i in e) t.d(o, i, function (n) {
        return e[n]
      }.bind(null, i));
      return o
    }, t.n = function (e) {
      var n = e && e.__esModule ? function () {
        return e.default
      } : function () {
        return e
      };
      return t.d(n, "a", n), n
    }, t.o = function (e, n) {
      return Object.prototype.hasOwnProperty.call(e, n)
    }, t.p = "/dist/", t(t.s = 5)
  }([function (e, n, t) {
    "use strict";

    function o(e, n, t, o, i, a, r, s) {
      var l = typeof (e = e || {}).default;
      "object" !== l && "function" !== l || (e = e.default);
      var p, c = "function" == typeof e ? e.options : e;
      if (n && (c.render = n, c.staticRenderFns = t, c._compiled = !0), o && (c.functional = !0), a && (c._scopeId = a), r ? (p = function (e) {
        (e = e || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (e = __VUE_SSR_CONTEXT__), i && i.call(this, e), e && e._registeredComponents && e._registeredComponents.add(r)
      }, c._ssrRegister = p) : i && (p = s ? function () {
        i.call(this, this.$root.$options.shadowRoot)
      } : i), p) if (c.functional) {
        c._injectStyles = p;
        var u = c.render;
        c.render = function (e, n) {
          return p.call(n), u(e, n)
        }
      } else {
        var d = c.beforeCreate;
        c.beforeCreate = d ? [].concat(d, p) : [p]
      }
      return {exports: e, options: c}
    }

    t.d(n, "a", function () {
      return o
    })
  }, function (e, n) {
    e.exports = function (e) {
      var n = [];
      return n.toString = function () {
        return this.map(function (n) {
          var t = function (e, n) {
            var t = e[1] || "", o = e[3];
            if (!o) return t;
            if (n && "function" == typeof btoa) {
              var i = (r = o, "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */"),
                a = o.sources.map(function (e) {
                  return "/*# sourceURL=" + o.sourceRoot + e + " */"
                });
              return [t].concat(a).concat([i]).join("\n")
            }
            var r;
            return [t].join("\n")
          }(n, e);
          return n[2] ? "@media " + n[2] + "{" + t + "}" : t
        }).join("")
      }, n.i = function (e, t) {
        "string" == typeof e && (e = [[null, e, ""]]);
        for (var o = {}, i = 0; i < this.length; i++) {
          var a = this[i][0];
          "number" == typeof a && (o[a] = !0)
        }
        for (i = 0; i < e.length; i++) {
          var r = e[i];
          "number" == typeof r[0] && o[r[0]] || (t && !r[2] ? r[2] = t : t && (r[2] = "(" + r[2] + ") and (" + t + ")"), n.push(r))
        }
      }, n
    }
  }, function (e, n, t) {
    "use strict";

    function o(e, n) {
      for (var t = [], o = {}, i = 0; i < n.length; i++) {
        var a = n[i], r = a[0], s = {id: e + ":" + i, css: a[1], media: a[2], sourceMap: a[3]};
        o[r] ? o[r].parts.push(s) : t.push(o[r] = {id: r, parts: [s]})
      }
      return t
    }

    t.r(n), t.d(n, "default", function () {
      return f
    });
    var i = "undefined" != typeof document;
    if ("undefined" != typeof DEBUG && DEBUG && !i) throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
    var a = {}, r = i && (document.head || document.getElementsByTagName("head")[0]), s = null, l = 0, p = !1,
      c = function () {
      }, u = null, d = "data-vue-ssr-id",
      m = "undefined" != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function f(e, n, t, i) {
      p = t, u = i || {};
      var r = o(e, n);
      return h(r), function (n) {
        for (var t = [], i = 0; i < r.length; i++) {
          var s = r[i];
          (l = a[s.id]).refs--, t.push(l)
        }
        n ? h(r = o(e, n)) : r = [];
        for (i = 0; i < t.length; i++) {
          var l;
          if (0 === (l = t[i]).refs) {
            for (var p = 0; p < l.parts.length; p++) l.parts[p]();
            delete a[l.id]
          }
        }
      }
    }

    function h(e) {
      for (var n = 0; n < e.length; n++) {
        var t = e[n], o = a[t.id];
        if (o) {
          o.refs++;
          for (var i = 0; i < o.parts.length; i++) o.parts[i](t.parts[i]);
          for (; i < t.parts.length; i++) o.parts.push(g(t.parts[i]));
          o.parts.length > t.parts.length && (o.parts.length = t.parts.length)
        } else {
          var r = [];
          for (i = 0; i < t.parts.length; i++) r.push(g(t.parts[i]));
          a[t.id] = {id: t.id, refs: 1, parts: r}
        }
      }
    }

    function w() {
      var e = document.createElement("style");
      return e.type = "text/css", r.appendChild(e), e
    }

    function g(e) {
      var n, t, o = document.querySelector("style[" + d + '~="' + e.id + '"]');
      if (o) {
        if (p) return c;
        o.parentNode.removeChild(o)
      }
      if (m) {
        var i = l++;
        o = s || (s = w()), n = x.bind(null, o, i, !1), t = x.bind(null, o, i, !0)
      } else o = w(), n = function (e, n) {
        var t = n.css, o = n.media, i = n.sourceMap;
        o && e.setAttribute("media", o);
        u.ssrId && e.setAttribute(d, n.id);
        i && (t += "\n/*# sourceURL=" + i.sources[0] + " */", t += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + " */");
        if (e.styleSheet) e.styleSheet.cssText = t; else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t))
        }
      }.bind(null, o), t = function () {
        o.parentNode.removeChild(o)
      };
      return n(e), function (o) {
        if (o) {
          if (o.css === e.css && o.media === e.media && o.sourceMap === e.sourceMap) return;
          n(e = o)
        } else t()
      }
    }

    var b, v = (b = [], function (e, n) {
      return b[e] = n, b.filter(Boolean).join("\n")
    });

    function x(e, n, t, o) {
      var i = t ? "" : o.css;
      if (e.styleSheet) e.styleSheet.cssText = v(n, i); else {
        var a = document.createTextNode(i), r = e.childNodes;
        r[n] && e.removeChild(r[n]), r.length ? e.insertBefore(a, r[n]) : e.appendChild(a)
      }
    }
  }, function (e, n, t) {
    var o, i;
    /*! PhotoSwipe - v4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
    void 0 === (i = "function" == typeof (o = function () {
      "use strict";
      return function (e, n, t, o) {
        var i = {
          features: null, bind: function (e, n, t, o) {
            var i = (o ? "remove" : "add") + "EventListener";
            n = n.split(" ");
            for (var a = 0; a < n.length; a++) n[a] && e[i](n[a], t, !1)
          }, isArray: function (e) {
            return e instanceof Array
          }, createEl: function (e, n) {
            var t = document.createElement(n || "div");
            return e && (t.className = e), t
          }, getScrollY: function () {
            var e = window.pageYOffset;
            return void 0 !== e ? e : document.documentElement.scrollTop
          }, unbind: function (e, n, t) {
            i.bind(e, n, t, !0)
          }, removeClass: function (e, n) {
            var t = new RegExp("(\\s|^)" + n + "(\\s|$)");
            e.className = e.className.replace(t, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "")
          }, addClass: function (e, n) {
            i.hasClass(e, n) || (e.className += (e.className ? " " : "") + n)
          }, hasClass: function (e, n) {
            return e.className && new RegExp("(^|\\s)" + n + "(\\s|$)").test(e.className)
          }, getChildByClass: function (e, n) {
            for (var t = e.firstChild; t;) {
              if (i.hasClass(t, n)) return t;
              t = t.nextSibling
            }
          }, arraySearch: function (e, n, t) {
            for (var o = e.length; o--;) if (e[o][t] === n) return o;
            return -1
          }, extend: function (e, n, t) {
            for (var o in n) if (n.hasOwnProperty(o)) {
              if (t && e.hasOwnProperty(o)) continue;
              e[o] = n[o]
            }
          }, easing: {
            sine: {
              out: function (e) {
                return Math.sin(e * (Math.PI / 2))
              }, inOut: function (e) {
                return -(Math.cos(Math.PI * e) - 1) / 2
              }
            }, cubic: {
              out: function (e) {
                return --e * e * e + 1
              }
            }
          }, detectFeatures: function () {
            if (i.features) return i.features;
            var e = i.createEl(), n = e.style, t = "", o = {};
            if (o.oldIE = document.all && !document.addEventListener, o.touch = "ontouchstart" in window, window.requestAnimationFrame && (o.raf = window.requestAnimationFrame, o.caf = window.cancelAnimationFrame), o.pointerEvent = navigator.pointerEnabled || navigator.msPointerEnabled, !o.pointerEvent) {
              var a = navigator.userAgent;
              if (/iP(hone|od)/.test(navigator.platform)) {
                var r = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                r && r.length > 0 && (r = parseInt(r[1], 10)) >= 1 && r < 8 && (o.isOldIOSPhone = !0)
              }
              var s = a.match(/Android\s([0-9\.]*)/), l = s ? s[1] : 0;
              (l = parseFloat(l)) >= 1 && (l < 4.4 && (o.isOldAndroid = !0), o.androidVersion = l), o.isMobileOpera = /opera mini|opera mobi/i.test(a)
            }
            for (var p, c, u = ["transform", "perspective", "animationName"], d = ["", "webkit", "Moz", "ms", "O"], m = 0; m < 4; m++) {
              t = d[m];
              for (var f = 0; f < 3; f++) p = u[f], c = t + (t ? p.charAt(0).toUpperCase() + p.slice(1) : p), !o[p] && c in n && (o[p] = c);
              t && !o.raf && (t = t.toLowerCase(), o.raf = window[t + "RequestAnimationFrame"], o.raf && (o.caf = window[t + "CancelAnimationFrame"] || window[t + "CancelRequestAnimationFrame"]))
            }
            if (!o.raf) {
              var h = 0;
              o.raf = function (e) {
                var n = (new Date).getTime(), t = Math.max(0, 16 - (n - h)), o = window.setTimeout(function () {
                  e(n + t)
                }, t);
                return h = n + t, o
              }, o.caf = function (e) {
                clearTimeout(e)
              }
            }
            return o.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect, i.features = o, o
          }
        };
        i.detectFeatures(), i.features.oldIE && (i.bind = function (e, n, t, o) {
          n = n.split(" ");
          for (var i, a = (o ? "detach" : "attach") + "Event", r = function () {
            t.handleEvent.call(t)
          }, s = 0; s < n.length; s++) if (i = n[s]) if ("object" == typeof t && t.handleEvent) {
            if (o) {
              if (!t["oldIE" + i]) return !1
            } else t["oldIE" + i] = r;
            e[a]("on" + i, t["oldIE" + i])
          } else e[a]("on" + i, t)
        });
        var a = this, r = {
          allowPanToNext: !0,
          spacing: .12,
          bgOpacity: 1,
          mouseUsed: !1,
          loop: !0,
          pinchToClose: !0,
          closeOnScroll: !0,
          closeOnVerticalDrag: !0,
          verticalDragRange: .75,
          hideAnimationDuration: 333,
          showAnimationDuration: 333,
          showHideOpacity: !1,
          focus: !0,
          escKey: !0,
          arrowKeys: !0,
          mainScrollEndFriction: .35,
          panEndFriction: .35,
          isClickableElement: function (e) {
            return "A" === e.tagName
          },
          getDoubleTapZoom: function (e, n) {
            return e ? 1 : n.initialZoomLevel < .7 ? 1 : 1.33
          },
          maxSpreadZoom: 1.33,
          modal: !0,
          scaleMode: "fit"
        };
        i.extend(r, o);
        var s, l, p, c, u, d, m, f, h, w, g, b, v, x, _, y, A, I, C, k, M, T, S, D, E, L, N, z, F, Z, O, R, j, P, U, B,
          Y, H, G, J, W, K, V, Q, X, q, $, ee, ne, te, oe, ie, ae, re, se, le, pe = {x: 0, y: 0}, ce = {x: 0, y: 0},
          ue = {x: 0, y: 0}, de = {}, me = 0, fe = {}, he = {x: 0, y: 0}, we = 0, ge = !0, be = [], ve = {}, xe = !1,
          _e = function (e, n) {
            i.extend(a, n.publicMethods), be.push(e)
          }, ye = function (e) {
            var n = Bn();
            return e > n - 1 ? e - n : e < 0 ? n + e : e
          }, Ae = {}, Ie = function (e, n) {
            return Ae[e] || (Ae[e] = []), Ae[e].push(n)
          }, Ce = function (e) {
            var n = Ae[e];
            if (n) {
              var t = Array.prototype.slice.call(arguments);
              t.shift();
              for (var o = 0; o < n.length; o++) n[o].apply(a, t)
            }
          }, ke = function () {
            return (new Date).getTime()
          }, Me = function (e) {
            re = e, a.bg.style.opacity = e * r.bgOpacity
          }, Te = function (e, n, t, o, i) {
            (!xe || i && i !== a.currItem) && (o /= i ? i.fitRatio : a.currItem.fitRatio), e[T] = b + n + "px, " + t + "px" + v + " scale(" + o + ")"
          }, Se = function (e) {
            ne && (e && (w > a.currItem.fitRatio ? xe || (Xn(a.currItem, !1, !0), xe = !0) : xe && (Xn(a.currItem), xe = !1)), Te(ne, ue.x, ue.y, w))
          }, De = function (e) {
            e.container && Te(e.container.style, e.initialPosition.x, e.initialPosition.y, e.initialZoomLevel, e)
          }, Ee = function (e, n) {
            n[T] = b + e + "px, 0px" + v
          }, Le = function (e, n) {
            if (!r.loop && n) {
              var t = c + (he.x * me - e) / he.x, o = Math.round(e - un.x);
              (t < 0 && o > 0 || t >= Bn() - 1 && o < 0) && (e = un.x + o * r.mainScrollEndFriction)
            }
            un.x = e, Ee(e, u)
          }, Ne = function (e, n) {
            var t = dn[e] - fe[e];
            return ce[e] + pe[e] + t - t * (n / g)
          }, ze = function (e, n) {
            e.x = n.x, e.y = n.y, n.id && (e.id = n.id)
          }, Fe = function (e) {
            e.x = Math.round(e.x), e.y = Math.round(e.y)
          }, Ze = null, Oe = function () {
            Ze && (i.unbind(document, "mousemove", Oe), i.addClass(e, "pswp--has_mouse"), r.mouseUsed = !0, Ce("mouseUsed")), Ze = setTimeout(function () {
              Ze = null
            }, 100)
          }, Re = function (e, n) {
            var t = Wn(a.currItem, de, e);
            return n && (ee = t), t
          }, je = function (e) {
            return e || (e = a.currItem), e.initialZoomLevel
          }, Pe = function (e) {
            return e || (e = a.currItem), e.w > 0 ? r.maxSpreadZoom : 1
          }, Ue = function (e, n, t, o) {
            return o === a.currItem.initialZoomLevel ? (t[e] = a.currItem.initialPosition[e], !0) : (t[e] = Ne(e, o), t[e] > n.min[e] ? (t[e] = n.min[e], !0) : t[e] < n.max[e] && (t[e] = n.max[e], !0))
          }, Be = function (e) {
            var n = "";
            r.escKey && 27 === e.keyCode ? n = "close" : r.arrowKeys && (37 === e.keyCode ? n = "prev" : 39 === e.keyCode && (n = "next")), n && (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey || (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a[n]()))
          }, Ye = function (e) {
            e && (K || W || te || Y) && (e.preventDefault(), e.stopPropagation())
          }, He = function () {
            a.setScrollOffset(0, i.getScrollY())
          }, Ge = {}, Je = 0, We = function (e) {
            Ge[e] && (Ge[e].raf && L(Ge[e].raf), Je--, delete Ge[e])
          }, Ke = function (e) {
            Ge[e] && We(e), Ge[e] || (Je++, Ge[e] = {})
          }, Ve = function () {
            for (var e in Ge) Ge.hasOwnProperty(e) && We(e)
          }, Qe = function (e, n, t, o, i, a, r) {
            var s, l = ke();
            Ke(e);
            var p = function () {
              if (Ge[e]) {
                if ((s = ke() - l) >= o) return We(e), a(t), void (r && r());
                a((t - n) * i(s / o) + n), Ge[e].raf = E(p)
              }
            };
            p()
          }, Xe = {
            shout: Ce, listen: Ie, viewportSize: de, options: r, isMainScrollAnimating: function () {
              return te
            }, getZoomLevel: function () {
              return w
            }, getCurrentIndex: function () {
              return c
            }, isDragging: function () {
              return G
            }, isZooming: function () {
              return q
            }, setScrollOffset: function (e, n) {
              fe.x = e, Z = fe.y = n, Ce("updateScrollOffset", fe)
            }, applyZoomPan: function (e, n, t, o) {
              ue.x = n, ue.y = t, w = e, Se(o)
            }, init: function () {
              if (!s && !l) {
                var t;
                a.framework = i, a.template = e, a.bg = i.getChildByClass(e, "pswp__bg"), N = e.className, s = !0, O = i.detectFeatures(), E = O.raf, L = O.caf, T = O.transform, F = O.oldIE, a.scrollWrap = i.getChildByClass(e, "pswp__scroll-wrap"), a.container = i.getChildByClass(a.scrollWrap, "pswp__container"), u = a.container.style, a.itemHolders = y = [{
                  el: a.container.children[0],
                  wrap: 0,
                  index: -1
                }, {el: a.container.children[1], wrap: 0, index: -1}, {
                  el: a.container.children[2],
                  wrap: 0,
                  index: -1
                }], y[0].el.style.display = y[2].el.style.display = "none", function () {
                  if (T) {
                    var n = O.perspective && !D;
                    return b = "translate" + (n ? "3d(" : "("), void (v = O.perspective ? ", 0px)" : ")")
                  }
                  T = "left", i.addClass(e, "pswp--ie"), Ee = function (e, n) {
                    n.left = e + "px"
                  }, De = function (e) {
                    var n = e.fitRatio > 1 ? 1 : e.fitRatio, t = e.container.style, o = n * e.w, i = n * e.h;
                    t.width = o + "px", t.height = i + "px", t.left = e.initialPosition.x + "px", t.top = e.initialPosition.y + "px"
                  }, Se = function () {
                    if (ne) {
                      var e = ne, n = a.currItem, t = n.fitRatio > 1 ? 1 : n.fitRatio, o = t * n.w, i = t * n.h;
                      e.width = o + "px", e.height = i + "px", e.left = ue.x + "px", e.top = ue.y + "px"
                    }
                  }
                }(), h = {
                  resize: a.updateSize, orientationchange: function () {
                    clearTimeout(R), R = setTimeout(function () {
                      de.x !== a.scrollWrap.clientWidth && a.updateSize()
                    }, 500)
                  }, scroll: He, keydown: Be, click: Ye
                };
                var o = O.isOldIOSPhone || O.isOldAndroid || O.isMobileOpera;
                for (O.animationName && O.transform && !o || (r.showAnimationDuration = r.hideAnimationDuration = 0), t = 0; t < be.length; t++) a["init" + be[t]]();
                if (n) {
                  var p = a.ui = new n(a, i);
                  p.init()
                }
                Ce("firstUpdate"), c = c || r.index || 0, (isNaN(c) || c < 0 || c >= Bn()) && (c = 0), a.currItem = Un(c), (O.isOldIOSPhone || O.isOldAndroid) && (ge = !1), e.setAttribute("aria-hidden", "false"), r.modal && (ge ? e.style.position = "fixed" : (e.style.position = "absolute", e.style.top = i.getScrollY() + "px")), void 0 === Z && (Ce("initialLayout"), Z = z = i.getScrollY());
                var m = "pswp--open ";
                for (r.mainClass && (m += r.mainClass + " "), r.showHideOpacity && (m += "pswp--animate_opacity "), m += D ? "pswp--touch" : "pswp--notouch", m += O.animationName ? " pswp--css_animation" : "", m += O.svg ? " pswp--svg" : "", i.addClass(e, m), a.updateSize(), d = -1, we = null, t = 0; t < 3; t++) Ee((t + d) * he.x, y[t].el.style);
                F || i.bind(a.scrollWrap, f, a), Ie("initialZoomInEnd", function () {
                  a.setContent(y[0], c - 1), a.setContent(y[2], c + 1), y[0].el.style.display = y[2].el.style.display = "block", r.focus && e.focus(), i.bind(document, "keydown", a), O.transform && i.bind(a.scrollWrap, "click", a), r.mouseUsed || i.bind(document, "mousemove", Oe), i.bind(window, "resize scroll orientationchange", a), Ce("bindEvents")
                }), a.setContent(y[1], c), a.updateCurrItem(), Ce("afterInit"), ge || (x = setInterval(function () {
                  Je || G || q || w !== a.currItem.initialZoomLevel || a.updateSize()
                }, 1e3)), i.addClass(e, "pswp--visible")
              }
            }, close: function () {
              s && (s = !1, l = !0, Ce("close"), i.unbind(window, "resize scroll orientationchange", a), i.unbind(window, "scroll", h.scroll), i.unbind(document, "keydown", a), i.unbind(document, "mousemove", Oe), O.transform && i.unbind(a.scrollWrap, "click", a), G && i.unbind(window, m, a), clearTimeout(R), Ce("unbindEvents"), Yn(a.currItem, null, !0, a.destroy))
            }, destroy: function () {
              Ce("destroy"), On && clearTimeout(On), e.setAttribute("aria-hidden", "true"), e.className = N, x && clearInterval(x), i.unbind(a.scrollWrap, f, a), i.unbind(window, "scroll", a), hn(), Ve(), Ae = null
            }, panTo: function (e, n, t) {
              t || (e > ee.min.x ? e = ee.min.x : e < ee.max.x && (e = ee.max.x), n > ee.min.y ? n = ee.min.y : n < ee.max.y && (n = ee.max.y)), ue.x = e, ue.y = n, Se()
            }, handleEvent: function (e) {
              e = e || window.event, h[e.type] && h[e.type](e)
            }, goTo: function (e) {
              var n = (e = ye(e)) - c;
              we = n, c = e, a.currItem = Un(c), me -= n, Le(he.x * me), Ve(), te = !1, a.updateCurrItem()
            }, next: function () {
              a.goTo(c + 1)
            }, prev: function () {
              a.goTo(c - 1)
            }, updateCurrZoomItem: function (e) {
              if (e && Ce("beforeChange", 0), y[1].el.children.length) {
                var n = y[1].el.children[0];
                ne = i.hasClass(n, "pswp__zoom-wrap") ? n.style : null
              } else ne = null;
              ee = a.currItem.bounds, g = w = a.currItem.initialZoomLevel, ue.x = ee.center.x, ue.y = ee.center.y, e && Ce("afterChange")
            }, invalidateCurrItems: function () {
              _ = !0;
              for (var e = 0; e < 3; e++) y[e].item && (y[e].item.needsUpdate = !0)
            }, updateCurrItem: function (e) {
              if (0 !== we) {
                var n, t = Math.abs(we);
                if (!(e && t < 2)) {
                  a.currItem = Un(c), xe = !1, Ce("beforeChange", we), t >= 3 && (d += we + (we > 0 ? -3 : 3), t = 3);
                  for (var o = 0; o < t; o++) we > 0 ? (n = y.shift(), y[2] = n, Ee((++d + 2) * he.x, n.el.style), a.setContent(n, c - t + o + 1 + 1)) : (n = y.pop(), y.unshift(n), Ee(--d * he.x, n.el.style), a.setContent(n, c + t - o - 1 - 1));
                  if (ne && 1 === Math.abs(we)) {
                    var i = Un(A);
                    i.initialZoomLevel !== w && (Wn(i, de), Xn(i), De(i))
                  }
                  we = 0, a.updateCurrZoomItem(), A = c, Ce("afterChange")
                }
              }
            }, updateSize: function (n) {
              if (!ge && r.modal) {
                var t = i.getScrollY();
                if (Z !== t && (e.style.top = t + "px", Z = t), !n && ve.x === window.innerWidth && ve.y === window.innerHeight) return;
                ve.x = window.innerWidth, ve.y = window.innerHeight, e.style.height = ve.y + "px"
              }
              if (de.x = a.scrollWrap.clientWidth, de.y = a.scrollWrap.clientHeight, He(), he.x = de.x + Math.round(de.x * r.spacing), he.y = de.y, Le(he.x * me), Ce("beforeResize"), void 0 !== d) {
                for (var o, s, l, p = 0; p < 3; p++) o = y[p], Ee((p + d) * he.x, o.el.style), l = c + p - 1, r.loop && Bn() > 2 && (l = ye(l)), (s = Un(l)) && (_ || s.needsUpdate || !s.bounds) ? (a.cleanSlide(s), a.setContent(o, l), 1 === p && (a.currItem = s, a.updateCurrZoomItem(!0)), s.needsUpdate = !1) : -1 === o.index && l >= 0 && a.setContent(o, l), s && s.container && (Wn(s, de), Xn(s), De(s));
                _ = !1
              }
              g = w = a.currItem.initialZoomLevel, (ee = a.currItem.bounds) && (ue.x = ee.center.x, ue.y = ee.center.y, Se(!0)), Ce("resize")
            }, zoomTo: function (e, n, t, o, a) {
              n && (g = w, dn.x = Math.abs(n.x) - ue.x, dn.y = Math.abs(n.y) - ue.y, ze(ce, ue));
              var r = Re(e, !1), s = {};
              Ue("x", r, s, e), Ue("y", r, s, e);
              var l = w, p = {x: ue.x, y: ue.y};
              Fe(s);
              var c = function (n) {
                1 === n ? (w = e, ue.x = s.x, ue.y = s.y) : (w = (e - l) * n + l, ue.x = (s.x - p.x) * n + p.x, ue.y = (s.y - p.y) * n + p.y), a && a(n), Se(1 === n)
              };
              t ? Qe("customZoomTo", 0, 1, t, o || i.easing.sine.inOut, c) : c(1)
            }
          }, qe = {}, $e = {}, en = {}, nn = {}, tn = {}, on = [], an = {}, rn = [], sn = {}, ln = 0, pn = {x: 0, y: 0},
          cn = 0, un = {x: 0, y: 0}, dn = {x: 0, y: 0}, mn = {x: 0, y: 0}, fn = function (e, n) {
            return sn.x = Math.abs(e.x - n.x), sn.y = Math.abs(e.y - n.y), Math.sqrt(sn.x * sn.x + sn.y * sn.y)
          }, hn = function () {
            V && (L(V), V = null)
          }, wn = function () {
            G && (V = E(wn), Dn())
          }, gn = function (e, n) {
            return !(!e || e === document) && !(e.getAttribute("class") && e.getAttribute("class").indexOf("pswp__scroll-wrap") > -1) && (n(e) ? e : gn(e.parentNode, n))
          }, bn = {}, vn = function (e, n) {
            return bn.prevent = !gn(e.target, r.isClickableElement), Ce("preventDragEvent", e, n, bn), bn.prevent
          }, xn = function (e, n) {
            return n.x = e.pageX, n.y = e.pageY, n.id = e.identifier, n
          }, _n = function (e, n, t) {
            t.x = .5 * (e.x + n.x), t.y = .5 * (e.y + n.y)
          }, yn = function () {
            var e = ue.y - a.currItem.initialPosition.y;
            return 1 - Math.abs(e / (de.y / 2))
          }, An = {}, In = {}, Cn = [], kn = function (e) {
            for (; Cn.length > 0;) Cn.pop();
            return S ? (le = 0, on.forEach(function (e) {
              0 === le ? Cn[0] = e : 1 === le && (Cn[1] = e), le++
            })) : e.type.indexOf("touch") > -1 ? e.touches && e.touches.length > 0 && (Cn[0] = xn(e.touches[0], An), e.touches.length > 1 && (Cn[1] = xn(e.touches[1], In))) : (An.x = e.pageX, An.y = e.pageY, An.id = "", Cn[0] = An), Cn
          }, Mn = function (e, n) {
            var t, o, i, s, l = ue[e] + n[e], p = n[e] > 0, c = un.x + n.x, u = un.x - an.x;
            if (t = l > ee.min[e] || l < ee.max[e] ? r.panEndFriction : 1, l = ue[e] + n[e] * t, (r.allowPanToNext || w === a.currItem.initialZoomLevel) && (ne ? "h" !== oe || "x" !== e || W || (p ? (l > ee.min[e] && (t = r.panEndFriction, ee.min[e], o = ee.min[e] - ce[e]), (o <= 0 || u < 0) && Bn() > 1 ? (s = c, u < 0 && c > an.x && (s = an.x)) : ee.min.x !== ee.max.x && (i = l)) : (l < ee.max[e] && (t = r.panEndFriction, ee.max[e], o = ce[e] - ee.max[e]), (o <= 0 || u > 0) && Bn() > 1 ? (s = c, u > 0 && c < an.x && (s = an.x)) : ee.min.x !== ee.max.x && (i = l))) : s = c, "x" === e)) return void 0 !== s && (Le(s, !0), Q = s !== an.x), ee.min.x !== ee.max.x && (void 0 !== i ? ue.x = i : Q || (ue.x += n.x * t)), void 0 !== s;
            te || Q || w > a.currItem.fitRatio && (ue[e] += n[e] * t)
          }, Tn = function (e) {
            if (!("mousedown" === e.type && e.button > 0)) if (Pn) e.preventDefault(); else if (!H || "mousedown" !== e.type) {
              if (vn(e, !0) && e.preventDefault(), Ce("pointerDown"), S) {
                var n = i.arraySearch(on, e.pointerId, "id");
                n < 0 && (n = on.length), on[n] = {x: e.pageX, y: e.pageY, id: e.pointerId}
              }
              var t = kn(e), o = t.length;
              X = null, Ve(), G && 1 !== o || (G = ie = !0, i.bind(window, m, a), B = se = ae = Y = Q = K = J = W = !1, oe = null, Ce("firstTouchStart", t), ze(ce, ue), pe.x = pe.y = 0, ze(nn, t[0]), ze(tn, nn), an.x = he.x * me, rn = [{
                x: nn.x,
                y: nn.y
              }], P = j = ke(), Re(w, !0), hn(), wn()), !q && o > 1 && !te && !Q && (g = w, W = !1, q = J = !0, pe.y = pe.x = 0, ze(ce, ue), ze(qe, t[0]), ze($e, t[1]), _n(qe, $e, mn), dn.x = Math.abs(mn.x) - ue.x, dn.y = Math.abs(mn.y) - ue.y, $ = fn(qe, $e))
            }
          }, Sn = function (e) {
            if (e.preventDefault(), S) {
              var n = i.arraySearch(on, e.pointerId, "id");
              if (n > -1) {
                var t = on[n];
                t.x = e.pageX, t.y = e.pageY
              }
            }
            if (G) {
              var o = kn(e);
              if (oe || K || q) X = o; else if (un.x !== he.x * me) oe = "h"; else {
                var a = Math.abs(o[0].x - nn.x) - Math.abs(o[0].y - nn.y);
                Math.abs(a) >= 10 && (oe = a > 0 ? "h" : "v", X = o)
              }
            }
          }, Dn = function () {
            if (X) {
              var e = X.length;
              if (0 !== e) if (ze(qe, X[0]), en.x = qe.x - nn.x, en.y = qe.y - nn.y, q && e > 1) {
                if (nn.x = qe.x, nn.y = qe.y, !en.x && !en.y && function (e, n) {
                  return e.x === n.x && e.y === n.y
                }(X[1], $e)) return;
                ze($e, X[1]), W || (W = !0, Ce("zoomGestureStarted"));
                var n = fn(qe, $e), t = Fn(n);
                t > a.currItem.initialZoomLevel + a.currItem.initialZoomLevel / 15 && (se = !0);
                var o = 1, i = je(), s = Pe();
                if (t < i) if (r.pinchToClose && !se && g <= a.currItem.initialZoomLevel) {
                  var l = i - t, p = 1 - l / (i / 1.2);
                  Me(p), Ce("onPinchClose", p), ae = !0
                } else (o = (i - t) / i) > 1 && (o = 1), t = i - o * (i / 3); else t > s && ((o = (t - s) / (6 * i)) > 1 && (o = 1), t = s + o * i);
                o < 0 && (o = 0), _n(qe, $e, pn), pe.x += pn.x - mn.x, pe.y += pn.y - mn.y, ze(mn, pn), ue.x = Ne("x", t), ue.y = Ne("y", t), B = t > w, w = t, Se()
              } else {
                if (!oe) return;
                if (ie && (ie = !1, Math.abs(en.x) >= 10 && (en.x -= X[0].x - tn.x), Math.abs(en.y) >= 10 && (en.y -= X[0].y - tn.y)), nn.x = qe.x, nn.y = qe.y, 0 === en.x && 0 === en.y) return;
                if ("v" === oe && r.closeOnVerticalDrag && "fit" === r.scaleMode && w === a.currItem.initialZoomLevel) {
                  pe.y += en.y, ue.y += en.y;
                  var c = yn();
                  return Y = !0, Ce("onVerticalDrag", c), Me(c), void Se()
                }
                !function (e, n, t) {
                  if (e - P > 50) {
                    var o = rn.length > 2 ? rn.shift() : {};
                    o.x = n, o.y = t, rn.push(o), P = e
                  }
                }(ke(), qe.x, qe.y), K = !0, ee = a.currItem.bounds;
                var u = Mn("x", en);
                u || (Mn("y", en), Fe(ue), Se())
              }
            }
          }, En = function (e) {
            if (O.isOldAndroid) {
              if (H && "mouseup" === e.type) return;
              e.type.indexOf("touch") > -1 && (clearTimeout(H), H = setTimeout(function () {
                H = 0
              }, 600))
            }
            var n;
            if (Ce("pointerUp"), vn(e, !1) && e.preventDefault(), S) {
              var t = i.arraySearch(on, e.pointerId, "id");
              t > -1 && (n = on.splice(t, 1)[0], navigator.pointerEnabled ? n.type = e.pointerType || "mouse" : (n.type = {
                4: "mouse",
                2: "touch",
                3: "pen"
              }[e.pointerType], n.type || (n.type = e.pointerType || "mouse")))
            }
            var o, s = kn(e), l = s.length;
            if ("mouseup" === e.type && (l = 0), 2 === l) return X = null, !0;
            1 === l && ze(tn, s[0]), 0 !== l || oe || te || (n || ("mouseup" === e.type ? n = {
              x: e.pageX,
              y: e.pageY,
              type: "mouse"
            } : e.changedTouches && e.changedTouches[0] && (n = {
              x: e.changedTouches[0].pageX,
              y: e.changedTouches[0].pageY,
              type: "touch"
            })), Ce("touchRelease", e, n));
            var p = -1;
            if (0 === l && (G = !1, i.unbind(window, m, a), hn(), q ? p = 0 : -1 !== cn && (p = ke() - cn)), cn = 1 === l ? ke() : -1, o = -1 !== p && p < 150 ? "zoom" : "swipe", q && l < 2 && (q = !1, 1 === l && (o = "zoomPointerUp"), Ce("zoomGestureEnded")), X = null, K || W || te || Y) if (Ve(), U || (U = Ln()), U.calculateSwipeSpeed("x"), Y) {
              var c = yn();
              if (c < r.verticalDragRange) a.close(); else {
                var u = ue.y, d = re;
                Qe("verticalDrag", 0, 1, 300, i.easing.cubic.out, function (e) {
                  ue.y = (a.currItem.initialPosition.y - u) * e + u, Me((1 - d) * e + d), Se()
                }), Ce("onVerticalDrag", 1)
              }
            } else {
              if ((Q || te) && 0 === l) {
                var f = zn(o, U);
                if (f) return;
                o = "zoomPointerUp"
              }
              te || ("swipe" === o ? !Q && w > a.currItem.fitRatio && Nn(U) : Zn())
            }
          }, Ln = function () {
            var e, n, t = {
              lastFlickOffset: {},
              lastFlickDist: {},
              lastFlickSpeed: {},
              slowDownRatio: {},
              slowDownRatioReverse: {},
              speedDecelerationRatio: {},
              speedDecelerationRatioAbs: {},
              distanceOffset: {},
              backAnimDestination: {},
              backAnimStarted: {},
              calculateSwipeSpeed: function (o) {
                rn.length > 1 ? (e = ke() - P + 50, n = rn[rn.length - 2][o]) : (e = ke() - j, n = tn[o]), t.lastFlickOffset[o] = nn[o] - n, t.lastFlickDist[o] = Math.abs(t.lastFlickOffset[o]), t.lastFlickDist[o] > 20 ? t.lastFlickSpeed[o] = t.lastFlickOffset[o] / e : t.lastFlickSpeed[o] = 0, Math.abs(t.lastFlickSpeed[o]) < .1 && (t.lastFlickSpeed[o] = 0), t.slowDownRatio[o] = .95, t.slowDownRatioReverse[o] = 1 - t.slowDownRatio[o], t.speedDecelerationRatio[o] = 1
              },
              calculateOverBoundsAnimOffset: function (e, n) {
                t.backAnimStarted[e] || (ue[e] > ee.min[e] ? t.backAnimDestination[e] = ee.min[e] : ue[e] < ee.max[e] && (t.backAnimDestination[e] = ee.max[e]), void 0 !== t.backAnimDestination[e] && (t.slowDownRatio[e] = .7, t.slowDownRatioReverse[e] = 1 - t.slowDownRatio[e], t.speedDecelerationRatioAbs[e] < .05 && (t.lastFlickSpeed[e] = 0, t.backAnimStarted[e] = !0, Qe("bounceZoomPan" + e, ue[e], t.backAnimDestination[e], n || 300, i.easing.sine.out, function (n) {
                  ue[e] = n, Se()
                }))))
              },
              calculateAnimOffset: function (e) {
                t.backAnimStarted[e] || (t.speedDecelerationRatio[e] = t.speedDecelerationRatio[e] * (t.slowDownRatio[e] + t.slowDownRatioReverse[e] - t.slowDownRatioReverse[e] * t.timeDiff / 10), t.speedDecelerationRatioAbs[e] = Math.abs(t.lastFlickSpeed[e] * t.speedDecelerationRatio[e]), t.distanceOffset[e] = t.lastFlickSpeed[e] * t.speedDecelerationRatio[e] * t.timeDiff, ue[e] += t.distanceOffset[e])
              },
              panAnimLoop: function () {
                if (Ge.zoomPan && (Ge.zoomPan.raf = E(t.panAnimLoop), t.now = ke(), t.timeDiff = t.now - t.lastNow, t.lastNow = t.now, t.calculateAnimOffset("x"), t.calculateAnimOffset("y"), Se(), t.calculateOverBoundsAnimOffset("x"), t.calculateOverBoundsAnimOffset("y"), t.speedDecelerationRatioAbs.x < .05 && t.speedDecelerationRatioAbs.y < .05)) return ue.x = Math.round(ue.x), ue.y = Math.round(ue.y), Se(), void We("zoomPan")
              }
            };
            return t
          }, Nn = function (e) {
            if (e.calculateSwipeSpeed("y"), ee = a.currItem.bounds, e.backAnimDestination = {}, e.backAnimStarted = {}, Math.abs(e.lastFlickSpeed.x) <= .05 && Math.abs(e.lastFlickSpeed.y) <= .05) return e.speedDecelerationRatioAbs.x = e.speedDecelerationRatioAbs.y = 0, e.calculateOverBoundsAnimOffset("x"), e.calculateOverBoundsAnimOffset("y"), !0;
            Ke("zoomPan"), e.lastNow = ke(), e.panAnimLoop()
          }, zn = function (e, n) {
            var t, o, s;
            if (te || (ln = c), "swipe" === e) {
              var l = nn.x - tn.x, p = n.lastFlickDist.x < 10;
              l > 30 && (p || n.lastFlickOffset.x > 20) ? o = -1 : l < -30 && (p || n.lastFlickOffset.x < -20) && (o = 1)
            }
            o && ((c += o) < 0 ? (c = r.loop ? Bn() - 1 : 0, s = !0) : c >= Bn() && (c = r.loop ? 0 : Bn() - 1, s = !0), s && !r.loop || (we += o, me -= o, t = !0));
            var u, d = he.x * me, m = Math.abs(d - un.x);
            return t || d > un.x == n.lastFlickSpeed.x > 0 ? (u = Math.abs(n.lastFlickSpeed.x) > 0 ? m / Math.abs(n.lastFlickSpeed.x) : 333, u = Math.min(u, 400), u = Math.max(u, 250)) : u = 333, ln === c && (t = !1), te = !0, Ce("mainScrollAnimStart"), Qe("mainScroll", un.x, d, u, i.easing.cubic.out, Le, function () {
              Ve(), te = !1, ln = -1, (t || ln !== c) && a.updateCurrItem(), Ce("mainScrollAnimComplete")
            }), t && a.updateCurrItem(!0), t
          }, Fn = function (e) {
            return 1 / $ * e * g
          }, Zn = function () {
            var e = w, n = je(), t = Pe();
            w < n ? e = n : w > t && (e = t);
            var o, r = re;
            return ae && !B && !se && w < n ? (a.close(), !0) : (ae && (o = function (e) {
              Me((1 - r) * e + r)
            }), a.zoomTo(e, 0, 200, i.easing.cubic.out, o), !0)
          };
        _e("Gestures", {
          publicMethods: {
            initGestures: function () {
              var e = function (e, n, t, o, i) {
                I = e + n, C = e + t, k = e + o, M = i ? e + i : ""
              };
              (S = O.pointerEvent) && O.touch && (O.touch = !1), S ? navigator.pointerEnabled ? e("pointer", "down", "move", "up", "cancel") : e("MSPointer", "Down", "Move", "Up", "Cancel") : O.touch ? (e("touch", "start", "move", "end", "cancel"), D = !0) : e("mouse", "down", "move", "up"), m = C + " " + k + " " + M, f = I, S && !D && (D = navigator.maxTouchPoints > 1 || navigator.msMaxTouchPoints > 1), a.likelyTouchDevice = D, h[I] = Tn, h[C] = Sn, h[k] = En, M && (h[M] = h[k]), O.touch && (f += " mousedown", m += " mousemove mouseup", h.mousedown = h[I], h.mousemove = h[C], h.mouseup = h[k]), D || (r.allowPanToNext = !1)
            }
          }
        });
        var On, Rn, jn, Pn, Un, Bn, Yn = function (n, t, o, s) {
          var l;
          On && clearTimeout(On), Pn = !0, jn = !0, n.initialLayout ? (l = n.initialLayout, n.initialLayout = null) : l = r.getThumbBoundsFn && r.getThumbBoundsFn(c);
          var u, d, m = o ? r.hideAnimationDuration : r.showAnimationDuration, f = function () {
            We("initialZoom"), o ? (a.template.removeAttribute("style"), a.bg.removeAttribute("style")) : (Me(1), t && (t.style.display = "block"), i.addClass(e, "pswp--animated-in"), Ce("initialZoom" + (o ? "OutEnd" : "InEnd"))), s && s(), Pn = !1
          };
          if (!m || !l || void 0 === l.x) return Ce("initialZoom" + (o ? "Out" : "In")), w = n.initialZoomLevel, ze(ue, n.initialPosition), Se(), e.style.opacity = o ? 0 : 1, Me(1), void (m ? setTimeout(function () {
            f()
          }, m) : f());
          u = p, d = !a.currItem.src || a.currItem.loadError || r.showHideOpacity, n.miniImg && (n.miniImg.style.webkitBackfaceVisibility = "hidden"), o || (w = l.w / n.w, ue.x = l.x, ue.y = l.y - z, a[d ? "template" : "bg"].style.opacity = .001, Se()), Ke("initialZoom"), o && !u && i.removeClass(e, "pswp--animated-in"), d && (o ? i[(u ? "remove" : "add") + "Class"](e, "pswp--animate_opacity") : setTimeout(function () {
            i.addClass(e, "pswp--animate_opacity")
          }, 30)), On = setTimeout(function () {
            if (Ce("initialZoom" + (o ? "Out" : "In")), o) {
              var t = l.w / n.w, a = {x: ue.x, y: ue.y}, r = w, s = re, p = function (n) {
                1 === n ? (w = t, ue.x = l.x, ue.y = l.y - Z) : (w = (t - r) * n + r, ue.x = (l.x - a.x) * n + a.x, ue.y = (l.y - Z - a.y) * n + a.y), Se(), d ? e.style.opacity = 1 - n : Me(s - n * s)
              };
              u ? Qe("initialZoom", 0, 1, m, i.easing.cubic.out, p, f) : (p(1), On = setTimeout(f, m + 20))
            } else w = n.initialZoomLevel, ze(ue, n.initialPosition), Se(), Me(1), d ? e.style.opacity = 1 : Me(1), On = setTimeout(f, m + 20)
          }, o ? 25 : 90)
        }, Hn = {}, Gn = [], Jn = {
          index: 0,
          errorMsg: '<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',
          forceProgressiveLoading: !1,
          preload: [1, 1],
          getNumItemsFn: function () {
            return Rn.length
          }
        }, Wn = function (e, n, t) {
          if (e.src && !e.loadError) {
            var o = !t;
            if (o && (e.vGap || (e.vGap = {
              top: 0,
              bottom: 0
            }), Ce("parseVerticalMargin", e)), Hn.x = n.x, Hn.y = n.y - e.vGap.top - e.vGap.bottom, o) {
              var i = Hn.x / e.w, a = Hn.y / e.h;
              e.fitRatio = i < a ? i : a;
              var s = r.scaleMode;
              "orig" === s ? t = 1 : "fit" === s && (t = e.fitRatio), t > 1 && (t = 1), e.initialZoomLevel = t, e.bounds || (e.bounds = {
                center: {
                  x: 0,
                  y: 0
                }, max: {x: 0, y: 0}, min: {x: 0, y: 0}
              })
            }
            if (!t) return;
            return function (e, n, t) {
              var o = e.bounds;
              o.center.x = Math.round((Hn.x - n) / 2), o.center.y = Math.round((Hn.y - t) / 2) + e.vGap.top, o.max.x = n > Hn.x ? Math.round(Hn.x - n) : o.center.x, o.max.y = t > Hn.y ? Math.round(Hn.y - t) + e.vGap.top : o.center.y, o.min.x = n > Hn.x ? 0 : o.center.x, o.min.y = t > Hn.y ? e.vGap.top : o.center.y
            }(e, e.w * t, e.h * t), o && t === e.initialZoomLevel && (e.initialPosition = e.bounds.center), e.bounds
          }
          return e.w = e.h = 0, e.initialZoomLevel = e.fitRatio = 1, e.bounds = {
            center: {x: 0, y: 0},
            max: {x: 0, y: 0},
            min: {x: 0, y: 0}
          }, e.initialPosition = e.bounds.center, e.bounds
        }, Kn = function (e, n, t, o, i, r) {
          n.loadError || o && (n.imageAppended = !0, Xn(n, o, n === a.currItem && xe), t.appendChild(o), r && setTimeout(function () {
            n && n.loaded && n.placeholder && (n.placeholder.style.display = "none", n.placeholder = null)
          }, 500))
        }, Vn = function (e) {
          e.loading = !0, e.loaded = !1;
          var n = e.img = i.createEl("pswp__img", "img"), t = function () {
            e.loading = !1, e.loaded = !0, e.loadComplete ? e.loadComplete(e) : e.img = null, n.onload = n.onerror = null, n = null
          };
          return n.onload = t, n.onerror = function () {
            e.loadError = !0, t()
          }, n.src = e.src, n
        }, Qn = function (e, n) {
          if (e.src && e.loadError && e.container) return n && (e.container.innerHTML = ""), e.container.innerHTML = r.errorMsg.replace("%url%", e.src), !0
        }, Xn = function (e, n, t) {
          if (e.src) {
            n || (n = e.container.lastChild);
            var o = t ? e.w : Math.round(e.w * e.fitRatio), i = t ? e.h : Math.round(e.h * e.fitRatio);
            e.placeholder && !e.loaded && (e.placeholder.style.width = o + "px", e.placeholder.style.height = i + "px"), n.style.width = o + "px", n.style.height = i + "px"
          }
        }, qn = function () {
          if (Gn.length) {
            for (var e, n = 0; n < Gn.length; n++) (e = Gn[n]).holder.index === e.index && Kn(e.index, e.item, e.baseDiv, e.img, 0, e.clearPlaceholder);
            Gn = []
          }
        };
        _e("Controller", {
          publicMethods: {
            lazyLoadItem: function (e) {
              e = ye(e);
              var n = Un(e);
              n && (!n.loaded && !n.loading || _) && (Ce("gettingData", e, n), n.src && Vn(n))
            }, initController: function () {
              i.extend(r, Jn, !0), a.items = Rn = t, Un = a.getItemAt, Bn = r.getNumItemsFn, r.loop, Bn() < 3 && (r.loop = !1), Ie("beforeChange", function (e) {
                var n, t = r.preload, o = null === e || e >= 0, i = Math.min(t[0], Bn()), s = Math.min(t[1], Bn());
                for (n = 1; n <= (o ? s : i); n++) a.lazyLoadItem(c + n);
                for (n = 1; n <= (o ? i : s); n++) a.lazyLoadItem(c - n)
              }), Ie("initialLayout", function () {
                a.currItem.initialLayout = r.getThumbBoundsFn && r.getThumbBoundsFn(c)
              }), Ie("mainScrollAnimComplete", qn), Ie("initialZoomInEnd", qn), Ie("destroy", function () {
                for (var e, n = 0; n < Rn.length; n++) (e = Rn[n]).container && (e.container = null), e.placeholder && (e.placeholder = null), e.img && (e.img = null), e.preloader && (e.preloader = null), e.loadError && (e.loaded = e.loadError = !1);
                Gn = null
              })
            }, getItemAt: function (e) {
              return e >= 0 && void 0 !== Rn[e] && Rn[e]
            }, allowProgressiveImg: function () {
              return r.forceProgressiveLoading || !D || r.mouseUsed || screen.width > 1200
            }, setContent: function (e, n) {
              r.loop && (n = ye(n));
              var t = a.getItemAt(e.index);
              t && (t.container = null);
              var o, l = a.getItemAt(n);
              if (l) {
                Ce("gettingData", n, l), e.index = n, e.item = l;
                var p = l.container = i.createEl("pswp__zoom-wrap");
                if (!l.src && l.html && (l.html.tagName ? p.appendChild(l.html) : p.innerHTML = l.html), Qn(l), Wn(l, de), !l.src || l.loadError || l.loaded) l.src && !l.loadError && ((o = i.createEl("pswp__img", "img")).style.opacity = 1, o.src = l.src, Xn(l, o), Kn(0, l, p, o)); else {
                  if (l.loadComplete = function (t) {
                    if (s) {
                      if (e && e.index === n) {
                        if (Qn(t, !0)) return t.loadComplete = t.img = null, Wn(t, de), De(t), void (e.index === c && a.updateCurrZoomItem());
                        t.imageAppended ? !Pn && t.placeholder && (t.placeholder.style.display = "none", t.placeholder = null) : O.transform && (te || Pn) ? Gn.push({
                          item: t,
                          baseDiv: p,
                          img: t.img,
                          index: n,
                          holder: e,
                          clearPlaceholder: !0
                        }) : Kn(0, t, p, t.img, 0, !0)
                      }
                      t.loadComplete = null, t.img = null, Ce("imageLoadComplete", n, t)
                    }
                  }, i.features.transform) {
                    var u = "pswp__img pswp__img--placeholder";
                    u += l.msrc ? "" : " pswp__img--placeholder--blank";
                    var d = i.createEl(u, l.msrc ? "img" : "");
                    l.msrc && (d.src = l.msrc), Xn(l, d), p.appendChild(d), l.placeholder = d
                  }
                  l.loading || Vn(l), a.allowProgressiveImg() && (!jn && O.transform ? Gn.push({
                    item: l,
                    baseDiv: p,
                    img: l.img,
                    index: n,
                    holder: e
                  }) : Kn(0, l, p, l.img, 0, !0))
                }
                jn || n !== c ? De(l) : (ne = p.style, Yn(l, o || l.img)), e.el.innerHTML = "", e.el.appendChild(p)
              } else e.el.innerHTML = ""
            }, cleanSlide: function (e) {
              e.img && (e.img.onload = e.img.onerror = null), e.loaded = e.loading = e.img = e.imageAppended = !1
            }
          }
        });
        var $n, et, nt = {}, tt = function (e, n, t) {
          var o = document.createEvent("CustomEvent"),
            i = {origEvent: e, target: e.target, releasePoint: n, pointerType: t || "touch"};
          o.initCustomEvent("pswpTap", !0, !0, i), e.target.dispatchEvent(o)
        };
        _e("Tap", {
          publicMethods: {
            initTap: function () {
              Ie("firstTouchStart", a.onTapStart), Ie("touchRelease", a.onTapRelease), Ie("destroy", function () {
                nt = {}, $n = null
              })
            }, onTapStart: function (e) {
              e.length > 1 && (clearTimeout($n), $n = null)
            }, onTapRelease: function (e, n) {
              var t, o;
              if (n && !K && !J && !Je) {
                var a = n;
                if ($n && (clearTimeout($n), $n = null, t = a, o = nt, Math.abs(t.x - o.x) < 25 && Math.abs(t.y - o.y) < 25)) return void Ce("doubleTap", a);
                if ("mouse" === n.type) return void tt(e, n, "mouse");
                var r = e.target.tagName.toUpperCase();
                if ("BUTTON" === r || i.hasClass(e.target, "pswp__single-tap")) return void tt(e, n);
                ze(nt, a), $n = setTimeout(function () {
                  tt(e, n), $n = null
                }, 300)
              }
            }
          }
        }), _e("DesktopZoom", {
          publicMethods: {
            initDesktopZoom: function () {
              F || (D ? Ie("mouseUsed", function () {
                a.setupDesktopZoom()
              }) : a.setupDesktopZoom(!0))
            }, setupDesktopZoom: function (n) {
              et = {};
              var t = "wheel mousewheel DOMMouseScroll";
              Ie("bindEvents", function () {
                i.bind(e, t, a.handleMouseWheel)
              }), Ie("unbindEvents", function () {
                et && i.unbind(e, t, a.handleMouseWheel)
              }), a.mouseZoomedIn = !1;
              var o, r = function () {
                a.mouseZoomedIn && (i.removeClass(e, "pswp--zoomed-in"), a.mouseZoomedIn = !1), w < 1 ? i.addClass(e, "pswp--zoom-allowed") : i.removeClass(e, "pswp--zoom-allowed"), s()
              }, s = function () {
                o && (i.removeClass(e, "pswp--dragging"), o = !1)
              };
              Ie("resize", r), Ie("afterChange", r), Ie("pointerDown", function () {
                a.mouseZoomedIn && (o = !0, i.addClass(e, "pswp--dragging"))
              }), Ie("pointerUp", s), n || r()
            }, handleMouseWheel: function (e) {
              if (w <= a.currItem.fitRatio) return r.modal && (!r.closeOnScroll || Je || G ? e.preventDefault() : T && Math.abs(e.deltaY) > 2 && (p = !0, a.close())), !0;
              if (e.stopPropagation(), et.x = 0, "deltaX" in e) 1 === e.deltaMode ? (et.x = 18 * e.deltaX, et.y = 18 * e.deltaY) : (et.x = e.deltaX, et.y = e.deltaY); else if ("wheelDelta" in e) e.wheelDeltaX && (et.x = -.16 * e.wheelDeltaX), e.wheelDeltaY ? et.y = -.16 * e.wheelDeltaY : et.y = -.16 * e.wheelDelta; else {
                if (!("detail" in e)) return;
                et.y = e.detail
              }
              Re(w, !0);
              var n = ue.x - et.x, t = ue.y - et.y;
              (r.modal || n <= ee.min.x && n >= ee.max.x && t <= ee.min.y && t >= ee.max.y) && e.preventDefault(), a.panTo(n, t)
            }, toggleDesktopZoom: function (n) {
              n = n || {x: de.x / 2 + fe.x, y: de.y / 2 + fe.y};
              var t = r.getDoubleTapZoom(!0, a.currItem), o = w === t;
              a.mouseZoomedIn = !o, a.zoomTo(o ? a.currItem.initialZoomLevel : t, n, 333), i[(o ? "remove" : "add") + "Class"](e, "pswp--zoomed-in")
            }
          }
        });
        var ot, it, at, rt, st, lt, pt, ct, ut, dt, mt, ft, ht = {history: !0, galleryUID: 1}, wt = function () {
          return mt.hash.substring(1)
        }, gt = function () {
          ot && clearTimeout(ot), at && clearTimeout(at)
        }, bt = function () {
          var e = wt(), n = {};
          if (e.length < 5) return n;
          var t, o = e.split("&");
          for (t = 0; t < o.length; t++) if (o[t]) {
            var i = o[t].split("=");
            i.length < 2 || (n[i[0]] = i[1])
          }
          if (r.galleryPIDs) {
            var a = n.pid;
            for (n.pid = 0, t = 0; t < Rn.length; t++) if (Rn[t].pid === a) {
              n.pid = t;
              break
            }
          } else n.pid = parseInt(n.pid, 10) - 1;
          return n.pid < 0 && (n.pid = 0), n
        }, vt = function () {
          if (at && clearTimeout(at), Je || G) at = setTimeout(vt, 500); else {
            rt ? clearTimeout(it) : rt = !0;
            var e = c + 1, n = Un(c);
            n.hasOwnProperty("pid") && (e = n.pid);
            var t = pt + "&gid=" + r.galleryUID + "&pid=" + e;
            ct || -1 === mt.hash.indexOf(t) && (dt = !0);
            var o = mt.href.split("#")[0] + "#" + t;
            ft ? "#" + t !== window.location.hash && history[ct ? "replaceState" : "pushState"]("", document.title, o) : ct ? mt.replace(o) : mt.hash = t, ct = !0, it = setTimeout(function () {
              rt = !1
            }, 60)
          }
        };
        _e("History", {
          publicMethods: {
            initHistory: function () {
              if (i.extend(r, ht, !0), r.history) {
                mt = window.location, dt = !1, ut = !1, ct = !1, pt = wt(), ft = "pushState" in history, pt.indexOf("gid=") > -1 && (pt = (pt = pt.split("&gid=")[0]).split("?gid=")[0]), Ie("afterChange", a.updateURL), Ie("unbindEvents", function () {
                  i.unbind(window, "hashchange", a.onHashChange)
                });
                var e = function () {
                  lt = !0, ut || (dt ? history.back() : pt ? mt.hash = pt : ft ? history.pushState("", document.title, mt.pathname + mt.search) : mt.hash = ""), gt()
                };
                Ie("unbindEvents", function () {
                  p && e()
                }), Ie("destroy", function () {
                  lt || e()
                }), Ie("firstUpdate", function () {
                  c = bt().pid
                });
                var n = pt.indexOf("pid=");
                n > -1 && "&" === (pt = pt.substring(0, n)).slice(-1) && (pt = pt.slice(0, -1)), setTimeout(function () {
                  s && i.bind(window, "hashchange", a.onHashChange)
                }, 40)
              }
            }, onHashChange: function () {
              if (wt() === pt) return ut = !0, void a.close();
              rt || (st = !0, a.goTo(bt().pid), st = !1)
            }, updateURL: function () {
              gt(), st || (ct ? ot = setTimeout(vt, 800) : vt())
            }
          }
        }), i.extend(a, Xe)
      }
    }) ? o.call(n, t, n, e) : o) || (e.exports = i)
  }, function (e, n, t) {
    var o, i;
    /*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
    void 0 === (i = "function" == typeof (o = function () {
      "use strict";
      return function (e, n) {
        var t, o, i, a, r, s, l, p, c, u, d, m, f, h, w, g, b, v, x = this, _ = !1, y = !0, A = !0, I = {
          barsSize: {top: 44, bottom: "auto"},
          closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"],
          timeToIdle: 4e3,
          timeToIdleOutside: 1e3,
          loadingIndicatorDelay: 1e3,
          addCaptionHTMLFn: function (e, n) {
            return e.title ? (n.children[0].innerHTML = e.title, !0) : (n.children[0].innerHTML = "", !1)
          },
          closeEl: !0,
          captionEl: !0,
          fullscreenEl: !0,
          zoomEl: !0,
          shareEl: !0,
          counterEl: !0,
          arrowEl: !0,
          preloaderEl: !0,
          tapToClose: !1,
          tapToToggleControls: !0,
          clickToCloseNonZoomable: !0,
          shareButtons: [{
            id: "facebook",
            label: "Share on Facebook",
            url: "https://www.facebook.com/sharer/sharer.php?u={{url}}"
          }, {
            id: "twitter",
            label: "Tweet",
            url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}"
          }, {
            id: "pinterest",
            label: "Pin it",
            url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"
          }, {id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0}],
          getImageURLForShare: function () {
            return e.currItem.src || ""
          },
          getPageURLForShare: function () {
            return window.location.href
          },
          getTextForShare: function () {
            return e.currItem.title || ""
          },
          indexIndicatorSep: " / ",
          fitControlsWidth: 1200
        }, C = function (e) {
          if (g) return !0;
          e = e || window.event, w.timeToIdle && w.mouseUsed && !c && z();
          for (var t, o, i = e.target || e.srcElement, a = i.getAttribute("class") || "", r = 0; r < R.length; r++) (t = R[r]).onTap && a.indexOf("pswp__" + t.name) > -1 && (t.onTap(), o = !0);
          if (o) {
            e.stopPropagation && e.stopPropagation(), g = !0;
            var s = n.features.isOldAndroid ? 600 : 30;
            setTimeout(function () {
              g = !1
            }, s)
          }
        }, k = function (e, t, o) {
          n[(o ? "add" : "remove") + "Class"](e, "pswp__" + t)
        }, M = function () {
          var e = 1 === w.getNumItemsFn();
          e !== h && (k(o, "ui--one-slide", e), h = e)
        }, T = function () {
          k(l, "share-modal--hidden", A)
        }, S = function () {
          return (A = !A) ? (n.removeClass(l, "pswp__share-modal--fade-in"), setTimeout(function () {
            A && T()
          }, 300)) : (T(), setTimeout(function () {
            A || n.addClass(l, "pswp__share-modal--fade-in")
          }, 30)), A || E(), !1
        }, D = function (n) {
          var t = (n = n || window.event).target || n.srcElement;
          return e.shout("shareLinkClick", n, t), !(!t.href || !t.hasAttribute("download") && (window.open(t.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), A || S(), 1))
        }, E = function () {
          for (var e, n, t, o, i, a = "", r = 0; r < w.shareButtons.length; r++) e = w.shareButtons[r], t = w.getImageURLForShare(e), o = w.getPageURLForShare(e), i = w.getTextForShare(e), n = e.url.replace("{{url}}", encodeURIComponent(o)).replace("{{image_url}}", encodeURIComponent(t)).replace("{{raw_image_url}}", t).replace("{{text}}", encodeURIComponent(i)), a += '<a href="' + n + '" target="_blank" class="pswp__share--' + e.id + '"' + (e.download ? "download" : "") + ">" + e.label + "</a>", w.parseShareButtonOut && (a = w.parseShareButtonOut(e, a));
          l.children[0].innerHTML = a, l.children[0].onclick = D
        }, L = function (e) {
          for (var t = 0; t < w.closeElClasses.length; t++) if (n.hasClass(e, "pswp__" + w.closeElClasses[t])) return !0
        }, N = 0, z = function () {
          clearTimeout(v), N = 0, c && x.setIdle(!1)
        }, F = function (e) {
          var n = (e = e || window.event).relatedTarget || e.toElement;
          n && "HTML" !== n.nodeName || (clearTimeout(v), v = setTimeout(function () {
            x.setIdle(!0)
          }, w.timeToIdleOutside))
        }, Z = function (e) {
          m !== e && (k(d, "preloader--active", !e), m = e)
        }, O = function (t) {
          var r = t.vGap;
          if (!e.likelyTouchDevice || w.mouseUsed || screen.width > w.fitControlsWidth) {
            var s = w.barsSize;
            if (w.captionEl && "auto" === s.bottom) if (a || ((a = n.createEl("pswp__caption pswp__caption--fake")).appendChild(n.createEl("pswp__caption__center")), o.insertBefore(a, i), n.addClass(o, "pswp__ui--fit")), w.addCaptionHTMLFn(t, a, !0)) {
              var l = a.clientHeight;
              r.bottom = parseInt(l, 10) || 44
            } else r.bottom = s.top; else r.bottom = "auto" === s.bottom ? 0 : s.bottom;
            r.top = s.top
          } else r.top = r.bottom = 0
        }, R = [{
          name: "caption", option: "captionEl", onInit: function (e) {
            i = e
          }
        }, {
          name: "share-modal", option: "shareEl", onInit: function (e) {
            l = e
          }, onTap: function () {
            S()
          }
        }, {
          name: "button--share", option: "shareEl", onInit: function (e) {
            s = e
          }, onTap: function () {
            S()
          }
        }, {name: "button--zoom", option: "zoomEl", onTap: e.toggleDesktopZoom}, {
          name: "counter",
          option: "counterEl",
          onInit: function (e) {
            r = e
          }
        }, {name: "button--close", option: "closeEl", onTap: e.close}, {
          name: "button--arrow--left",
          option: "arrowEl",
          onTap: e.prev
        }, {name: "button--arrow--right", option: "arrowEl", onTap: e.next}, {
          name: "button--fs",
          option: "fullscreenEl",
          onTap: function () {
            t.isFullscreen() ? t.exit() : t.enter()
          }
        }, {
          name: "preloader", option: "preloaderEl", onInit: function (e) {
            d = e
          }
        }];
        x.init = function () {
          var r;
          n.extend(e.options, I, !0), w = e.options, o = n.getChildByClass(e.scrollWrap, "pswp__ui"), (u = e.listen)("onVerticalDrag", function (e) {
            y && e < .95 ? x.hideControls() : !y && e >= .95 && x.showControls()
          }), u("onPinchClose", function (e) {
            y && e < .9 ? (x.hideControls(), r = !0) : r && !y && e > .9 && x.showControls()
          }), u("zoomGestureEnded", function () {
            (r = !1) && !y && x.showControls()
          }), u("beforeChange", x.update), u("doubleTap", function (n) {
            var t = e.currItem.initialZoomLevel;
            e.getZoomLevel() !== t ? e.zoomTo(t, n, 333) : e.zoomTo(w.getDoubleTapZoom(!1, e.currItem), n, 333)
          }), u("preventDragEvent", function (e, n, t) {
            var o = e.target || e.srcElement;
            o && o.getAttribute("class") && e.type.indexOf("mouse") > -1 && (o.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(o.tagName)) && (t.prevent = !1)
          }), u("bindEvents", function () {
            n.bind(o, "pswpTap click", C), n.bind(e.scrollWrap, "pswpTap", x.onGlobalTap), e.likelyTouchDevice || n.bind(e.scrollWrap, "mouseover", x.onMouseOver)
          }), u("unbindEvents", function () {
            A || S(), b && clearInterval(b), n.unbind(document, "mouseout", F), n.unbind(document, "mousemove", z), n.unbind(o, "pswpTap click", C), n.unbind(e.scrollWrap, "pswpTap", x.onGlobalTap), n.unbind(e.scrollWrap, "mouseover", x.onMouseOver), t && (n.unbind(document, t.eventK, x.updateFullscreen), t.isFullscreen() && (w.hideAnimationDuration = 0, t.exit()), t = null)
          }), u("destroy", function () {
            w.captionEl && (a && o.removeChild(a), n.removeClass(i, "pswp__caption--empty")), l && (l.children[0].onclick = null), n.removeClass(o, "pswp__ui--over-close"), n.addClass(o, "pswp__ui--hidden"), x.setIdle(!1)
          }), w.showAnimationDuration || n.removeClass(o, "pswp__ui--hidden"), u("initialZoomIn", function () {
            w.showAnimationDuration && n.removeClass(o, "pswp__ui--hidden")
          }), u("initialZoomOut", function () {
            n.addClass(o, "pswp__ui--hidden")
          }), u("parseVerticalMargin", O), function () {
            var e, t, i, a = function (o) {
              if (o) for (var a = o.length, r = 0; r < a; r++) {
                e = o[r], t = e.className;
                for (var s = 0; s < R.length; s++) i = R[s], t.indexOf("pswp__" + i.name) > -1 && (w[i.option] ? (n.removeClass(e, "pswp__element--disabled"), i.onInit && i.onInit(e)) : n.addClass(e, "pswp__element--disabled"))
              }
            };
            a(o.children);
            var r = n.getChildByClass(o, "pswp__top-bar");
            r && a(r.children)
          }(), w.shareEl && s && l && (A = !0), M(), w.timeToIdle && u("mouseUsed", function () {
            n.bind(document, "mousemove", z), n.bind(document, "mouseout", F), b = setInterval(function () {
              2 == ++N && x.setIdle(!0)
            }, w.timeToIdle / 2)
          }), w.fullscreenEl && !n.features.isOldAndroid && (t || (t = x.getFullscreenAPI()), t ? (n.bind(document, t.eventK, x.updateFullscreen), x.updateFullscreen(), n.addClass(e.template, "pswp--supports-fs")) : n.removeClass(e.template, "pswp--supports-fs")), w.preloaderEl && (Z(!0), u("beforeChange", function () {
            clearTimeout(f), f = setTimeout(function () {
              e.currItem && e.currItem.loading ? (!e.allowProgressiveImg() || e.currItem.img && !e.currItem.img.naturalWidth) && Z(!1) : Z(!0)
            }, w.loadingIndicatorDelay)
          }), u("imageLoadComplete", function (n, t) {
            e.currItem === t && Z(!0)
          }))
        }, x.setIdle = function (e) {
          c = e, k(o, "ui--idle", e)
        }, x.update = function () {
          y && e.currItem ? (x.updateIndexIndicator(), w.captionEl && (w.addCaptionHTMLFn(e.currItem, i), k(i, "caption--empty", !e.currItem.title)), _ = !0) : _ = !1, A || S(), M()
        }, x.updateFullscreen = function (o) {
          o && setTimeout(function () {
            e.setScrollOffset(0, n.getScrollY())
          }, 50), n[(t.isFullscreen() ? "add" : "remove") + "Class"](e.template, "pswp--fs")
        }, x.updateIndexIndicator = function () {
          w.counterEl && (r.innerHTML = e.getCurrentIndex() + 1 + w.indexIndicatorSep + w.getNumItemsFn())
        }, x.onGlobalTap = function (t) {
          var o = (t = t || window.event).target || t.srcElement;
          if (!g) if (t.detail && "mouse" === t.detail.pointerType) {
            if (L(o)) return void e.close();
            n.hasClass(o, "pswp__img") && (1 === e.getZoomLevel() && e.getZoomLevel() <= e.currItem.fitRatio ? w.clickToCloseNonZoomable && e.close() : e.toggleDesktopZoom(t.detail.releasePoint))
          } else if (w.tapToToggleControls && (y ? x.hideControls() : x.showControls()), w.tapToClose && (n.hasClass(o, "pswp__img") || L(o))) return void e.close()
        }, x.onMouseOver = function (e) {
          var n = (e = e || window.event).target || e.srcElement;
          k(o, "ui--over-close", L(n))
        }, x.hideControls = function () {
          n.addClass(o, "pswp__ui--hidden"), y = !1
        }, x.showControls = function () {
          y = !0, _ || x.update(), n.removeClass(o, "pswp__ui--hidden")
        }, x.supportsFullscreen = function () {
          var e = document;
          return !!(e.exitFullscreen || e.mozCancelFullScreen || e.webkitExitFullscreen || e.msExitFullscreen)
        }, x.getFullscreenAPI = function () {
          var n, t = document.documentElement, o = "fullscreenchange";
          return t.requestFullscreen ? n = {
            enterK: "requestFullscreen",
            exitK: "exitFullscreen",
            elementK: "fullscreenElement",
            eventK: o
          } : t.mozRequestFullScreen ? n = {
            enterK: "mozRequestFullScreen",
            exitK: "mozCancelFullScreen",
            elementK: "mozFullScreenElement",
            eventK: "moz" + o
          } : t.webkitRequestFullscreen ? n = {
            enterK: "webkitRequestFullscreen",
            exitK: "webkitExitFullscreen",
            elementK: "webkitFullscreenElement",
            eventK: "webkit" + o
          } : t.msRequestFullscreen && (n = {
            enterK: "msRequestFullscreen",
            exitK: "msExitFullscreen",
            elementK: "msFullscreenElement",
            eventK: "MSFullscreenChange"
          }), n && (n.enter = function () {
            if (p = w.closeOnScroll, w.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK) return e.template[this.enterK]();
            e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)
          }, n.exit = function () {
            return w.closeOnScroll = p, document[this.exitK]()
          }, n.isFullscreen = function () {
            return document[this.elementK]
          }), n
        }
      }
    }) ? o.call(n, t, n, e) : o) || (e.exports = i)
  }, function (e, n, t) {
    "use strict";
    t.r(n);
    var o = ["beforeChange", "afterChange", "imageLoadComplete", "resize", "gettingData", "mouseUsed", "initialZoomIn", "initialZoomInEnd", "initialZoomOut", "initialZoomOutEnd", "parseVerticalMargin", "close", "unbindEvents", "destroy", "updateScrollOffset", "preventDragEvent", "shareLinkClick"],
      i = t(3), a = t.n(i), r = t(4), s = t.n(r), l = (t(6), t(8), {
        name: "v-photoswipe",
        props: {
          isOpen: {type: Boolean, default: !1},
          items: {type: Array, required: !0},
          options: {type: Object, default: {}}
        },
        watch: {
          items: {
            handler: function (e, n) {
              this.pswp && this.isOpen && (this.pswp.invalidateCurrItems(), this.pswp.updateSize(!0))
            }, deep: !0
          }, isOpen: function (e, n) {
            e ? this.openPhotoSwipe(this.items, this.options) : this.close()
          }
        },
        methods: {
          openPhotoSwipe: function (e, n) {
            var t = this, i = this.$el;
            this.pswp = new a.a(i, s.a, e, n), o.forEach(function (e) {
              t.pswp.listen(e, function () {
                for (var n = arguments.length, o = Array(n), i = 0; i < n; i++) o[i] = arguments[i];
                o.unshift(t), t.$emit(e, [].concat(o))
              })
            }), this.pswp.init()
          }, close: function () {
            this.pswp && this.pswp.close()
          }
        },
        mounted: function () {
          this.isOpen && this.openPhotoSwipe(this.items, this.options)
        },
        beforeDestroy: function () {
          this.close()
        }
      }), p = t(0), c = Object(p.a)(l, function () {
        this.$createElement;
        this._self._c;
        return this._m(0)
      }, [function () {
        var e = this, n = e.$createElement, t = e._self._c || n;
        return t("div", {
          staticClass: "pswp",
          attrs: {tabIndex: "-1", role: "dialog", "aria-hidden": "true"}
        }, [t("div", {staticClass: "pswp__bg"}), e._v(" "), t("div", {staticClass: "pswp__scroll-wrap"}, [t("div", {staticClass: "pswp__container"}, [t("div", {staticClass: "pswp__item"}), e._v(" "), t("div", {staticClass: "pswp__item"}), e._v(" "), t("div", {staticClass: "pswp__item"})]), e._v(" "), t("div", {staticClass: "pswp__ui pswp__ui--hidden"}, [t("div", {staticClass: "pswp__top-bar"}, [t("div", {staticClass: "pswp__counter"}), e._v(" "), t("button", {
          staticClass: "pswp__button pswp__button--close",
          attrs: {title: "关闭 (Esc)"}
        }), e._v(" "), t("button", {
          staticClass: "pswp__button pswp__button--share",
          attrs: {title: "分享"}
        }), e._v(" "), t("button", {
          staticClass: "pswp__button pswp__button--fs",
          attrs: {title: "全屏切换"}
        }), e._v(" "), t("button", {
          staticClass: "pswp__button pswp__button--zoom",
          attrs: {title: "放大/缩小"}
        }), e._v(" "), t("div", {staticClass: "pswp__preloader"}, [t("div", {staticClass: "pswp__preloader__icn"}, [t("div", {staticClass: "pswp__preloader__cut"}, [t("div", {staticClass: "pswp__preloader__donut"})])])])]), e._v(" "), t("div", {staticClass: "pswp__share-modal pswp__share-modal--hidden pswp__single-tap"}, [t("div", {staticClass: "pswp__share-tooltip"})]), e._v(" "), t("button", {
          staticClass: "pswp__button pswp__button--arrow--left",
          attrs: {title: "上一张 (arrow left)"}
        }), e._v(" "), t("button", {
          staticClass: "pswp__button pswp__button--arrow--right",
          attrs: {title: "下一张 (arrow right)"}
        }), e._v(" "), t("div", {staticClass: "pswp__caption"}, [t("div", {staticClass: "pswp__caption__center"})])])])])
      }], !1, null, null, null).exports, u = {
        name: "v-photoswipe-gallery",
        components: {"v-photoswipe": c},
        props: {
          items: {type: Array, required: !0},
          options: {type: Object, default: {}},
          isOpen: {type: Boolean, default: !1}
        },
        data: function () {
          return {opened: this.isOpen, opts: {}}
        },
        watch: {
          isOpen: function (e, n) {
            e !== this.opened && (this.opened = e)
          }
        },
        methods: {
          showPhotoSwipe: function (e, n) {
            e.preventDefault(), this.opts = Object.assign(this.options, {index: n}), this.opened = !0
          }, handleClose: function () {
            this.opened = !1
          }
        },
        mounted: function () {
          var e = this;
          o.forEach(function (n) {
            e.$refs.pswp.$on(n, function () {
              for (var t = arguments.length, o = Array(t), i = 0; i < t; i++) o[i] = arguments[i];
              o.unshift(e), e.$emit(n, [].concat(o))
            })
          })
        }
      };
    var d = function (e) {
      t(14)
    }, m = Object(p.a)(u, function () {
      var e = this, n = e.$createElement, t = e._self._c || n;
      return t("div", {
        staticClass: "{className}",
        attrs: {id: "{id}"}
      }, [t("div", {staticClass: "pswp-thumbnails"}, e._l(e.items, function (n, o) {
        return t("a", {
          key: o, staticClass: "pswp-thumbnail", attrs: {item: n}, on: {
            click: function (n) {
              e.showPhotoSwipe(n, o)
            }
          }
        }, [e._t("default", [t("img", {attrs: {src: n.src, alt: "picture"}})], {item: n})], 2)
      })), e._v(" "), t("v-photoswipe", {
        ref: "pswp",
        attrs: {isOpen: e.opened, items: e.items, options: e.options},
        on: {close: e.handleClose}
      })], 1)
    }, [], !1, d, null, null).exports;
    t.d(n, "PhotoSwipe", function () {
      return c
    }), t.d(n, "PhotoSwipeGallery", function () {
      return m
    })
  }, function (e, n, t) {
    var o = t(7);
    "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    (0, t(2).default)("210db660", o, !0, {})
  }, function (e, n, t) {
    (e.exports = t(1)(!1)).push([e.i, "/*! PhotoSwipe main CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\tStyles for basic PhotoSwipe functionality (sliding area, open/close transitions)\n*/\n/* pswp = photoswipe */\n.pswp {\n  display: none;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  overflow: hidden;\n  -ms-touch-action: none;\n  touch-action: none;\n  z-index: 1500;\n  -webkit-text-size-adjust: 100%;\n  /* create separate layer, to avoid paint on window.onscroll in webkit/blink */\n  -webkit-backface-visibility: hidden;\n  outline: none; }\n  .pswp * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box; }\n  .pswp img {\n    max-width: none; }\n\n/* style is added when JS option showHideOpacity is set to true */\n.pswp--animate_opacity {\n  /* 0.001, because opacity:0 doesn't trigger Paint action, which causes lag at start of transition */\n  opacity: 0.001;\n  will-change: opacity;\n  /* for open/close transition */\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp--open {\n  display: block; }\n\n.pswp--zoom-allowed .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-zoom-in;\n  cursor: -moz-zoom-in;\n  cursor: zoom-in; }\n\n.pswp--zoomed-in .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grab;\n  cursor: -moz-grab;\n  cursor: grab; }\n\n.pswp--dragging .pswp__img {\n  /* autoprefixer: off */\n  cursor: -webkit-grabbing;\n  cursor: -moz-grabbing;\n  cursor: grabbing; }\n\n/*\n\tBackground is added as a separate element.\n\tAs animating opacity is much faster than animating rgba() background-color.\n*/\n.pswp__bg {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background: #000;\n  opacity: 0;\n  -webkit-transform: translateZ(0);\n          transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n\n.pswp__scroll-wrap {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden; }\n\n.pswp__container,\n.pswp__zoom-wrap {\n  -ms-touch-action: none;\n  touch-action: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n/* Prevent selection and tap highlights */\n.pswp__container,\n.pswp__img {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-touch-callout: none; }\n\n.pswp__zoom-wrap {\n  position: absolute;\n  width: 100%;\n  -webkit-transform-origin: left top;\n  -ms-transform-origin: left top;\n  transform-origin: left top;\n  /* for open/close transition */\n  -webkit-transition: -webkit-transform 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: transform 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp__bg {\n  will-change: opacity;\n  /* for open/close transition */\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n.pswp--animated-in .pswp__bg,\n.pswp--animated-in .pswp__zoom-wrap {\n  -webkit-transition: none;\n  transition: none; }\n\n.pswp__container,\n.pswp__zoom-wrap {\n  -webkit-backface-visibility: hidden; }\n\n.pswp__item {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  overflow: hidden; }\n\n.pswp__img {\n  position: absolute;\n  width: auto;\n  height: auto;\n  top: 0;\n  left: 0; }\n\n/*\n\tstretched thumbnail or div placeholder element (see below)\n\tstyle is added to avoid flickering in webkit/blink when layers overlap\n*/\n.pswp__img--placeholder {\n  -webkit-backface-visibility: hidden; }\n\n/*\n\tdiv element that matches size of large image\n\tlarge image loads on top of it\n*/\n.pswp__img--placeholder--blank {\n  background: #222; }\n\n.pswp--ie .pswp__img {\n  width: 100% !important;\n  height: auto !important;\n  left: 0;\n  top: 0; }\n\n/*\n\tError message appears when image is not loaded\n\t(JS option errorMsg controls markup)\n*/\n.pswp__error-msg {\n  position: absolute;\n  left: 0;\n  top: 50%;\n  width: 100%;\n  text-align: center;\n  font-size: 14px;\n  line-height: 16px;\n  margin-top: -8px;\n  color: #CCC; }\n\n.pswp__error-msg a {\n  color: #CCC;\n  text-decoration: underline; }\n", ""])
  }, function (e, n, t) {
    var o = t(9);
    "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    (0, t(2).default)("67193bae", o, !0, {})
  }, function (e, n, t) {
    var o = t(10);
    (e.exports = t(1)(!1)).push([e.i, '/*! PhotoSwipe Default UI CSS by Dmitry Semenov | photoswipe.com | MIT license */\n/*\n\n\tContents:\n\n\t1. Buttons\n\t2. Share modal and links\n\t3. Index indicator ("1 of X" counter)\n\t4. Caption\n\t5. Loading indicator\n\t6. Additional styles (root element, top bar, idle state, hidden state, etc.)\n\n*/\n/*\n\t\n\t1. Buttons\n\n */\n/* <button> css reset */\n.pswp__button {\n  width: 44px;\n  height: 44px;\n  position: relative;\n  background: none;\n  cursor: pointer;\n  overflow: visible;\n  -webkit-appearance: none;\n  display: block;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  float: right;\n  opacity: 0.75;\n  -webkit-transition: opacity 0.2s;\n          transition: opacity 0.2s;\n  -webkit-box-shadow: none;\n          box-shadow: none; }\n  .pswp__button:focus, .pswp__button:hover {\n    opacity: 1; }\n  .pswp__button:active {\n    outline: none;\n    opacity: 0.9; }\n  .pswp__button::-moz-focus-inner {\n    padding: 0;\n    border: 0; }\n\n/* pswp__ui--over-close class it added when mouse is over element that should close gallery */\n.pswp__ui--over-close .pswp__button--close {\n  opacity: 1; }\n\n.pswp__button,\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  background: url(' + o(t(11)) + ") 0 0 no-repeat;\n  background-size: 264px 88px;\n  width: 44px;\n  height: 44px; }\n\n@media (-webkit-min-device-pixel-ratio: 1.1), (-webkit-min-device-pixel-ratio: 1.09375), (min-resolution: 105dpi), (min-resolution: 1.1dppx) {\n  /* Serve SVG sprite if browser supports SVG and resolution is more than 105dpi */\n  .pswp--svg .pswp__button,\n  .pswp--svg .pswp__button--arrow--left:before,\n  .pswp--svg .pswp__button--arrow--right:before {\n    background-image: url(" + o(t(12)) + "); }\n  .pswp--svg .pswp__button--arrow--left,\n  .pswp--svg .pswp__button--arrow--right {\n    background: none; } }\n\n.pswp__button--close {\n  background-position: 0 -44px; }\n\n.pswp__button--share {\n  background-position: -44px -44px; }\n\n.pswp__button--fs {\n  display: none; }\n\n.pswp--supports-fs .pswp__button--fs {\n  display: block; }\n\n.pswp--fs .pswp__button--fs {\n  background-position: -44px 0; }\n\n.pswp__button--zoom {\n  display: none;\n  background-position: -88px 0; }\n\n.pswp--zoom-allowed .pswp__button--zoom {\n  display: block; }\n\n.pswp--zoomed-in .pswp__button--zoom {\n  background-position: -132px 0; }\n\n/* no arrows on touch screens */\n.pswp--touch .pswp__button--arrow--left,\n.pswp--touch .pswp__button--arrow--right {\n  visibility: hidden; }\n\n/*\n\tArrow buttons hit area\n\t(icon is added to :before pseudo-element)\n*/\n.pswp__button--arrow--left,\n.pswp__button--arrow--right {\n  background: none;\n  top: 50%;\n  margin-top: -50px;\n  width: 70px;\n  height: 100px;\n  position: absolute; }\n\n.pswp__button--arrow--left {\n  left: 0; }\n\n.pswp__button--arrow--right {\n  right: 0; }\n\n.pswp__button--arrow--left:before,\n.pswp__button--arrow--right:before {\n  content: '';\n  top: 35px;\n  background-color: rgba(0, 0, 0, 0.3);\n  height: 30px;\n  width: 32px;\n  position: absolute; }\n\n.pswp__button--arrow--left:before {\n  left: 6px;\n  background-position: -138px -44px; }\n\n.pswp__button--arrow--right:before {\n  right: 6px;\n  background-position: -94px -44px; }\n\n/*\n\n\t2. Share modal/popup and links\n\n */\n.pswp__counter,\n.pswp__share-modal {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n      user-select: none; }\n\n.pswp__share-modal {\n  display: block;\n  background: rgba(0, 0, 0, 0.5);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  padding: 10px;\n  position: absolute;\n  z-index: 1600;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-out;\n          transition: opacity 0.25s ease-out;\n  -webkit-backface-visibility: hidden;\n  will-change: opacity; }\n\n.pswp__share-modal--hidden {\n  display: none; }\n\n.pswp__share-tooltip {\n  z-index: 1620;\n  position: absolute;\n  background: #FFF;\n  top: 56px;\n  border-radius: 2px;\n  display: block;\n  width: auto;\n  right: 44px;\n  -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25);\n  -webkit-transform: translateY(6px);\n      -ms-transform: translateY(6px);\n          transform: translateY(6px);\n  -webkit-transition: -webkit-transform 0.25s;\n          transition: transform 0.25s;\n  -webkit-backface-visibility: hidden;\n  will-change: transform; }\n  .pswp__share-tooltip a {\n    display: block;\n    padding: 8px 12px;\n    color: #000;\n    text-decoration: none;\n    font-size: 14px;\n    line-height: 18px; }\n    .pswp__share-tooltip a:hover {\n      text-decoration: none;\n      color: #000; }\n    .pswp__share-tooltip a:first-child {\n      /* round corners on the first/last list item */\n      border-radius: 2px 2px 0 0; }\n    .pswp__share-tooltip a:last-child {\n      border-radius: 0 0 2px 2px; }\n\n.pswp__share-modal--fade-in {\n  opacity: 1; }\n  .pswp__share-modal--fade-in .pswp__share-tooltip {\n    -webkit-transform: translateY(0);\n        -ms-transform: translateY(0);\n            transform: translateY(0); }\n\n/* increase size of share links on touch devices */\n.pswp--touch .pswp__share-tooltip a {\n  padding: 16px 12px; }\n\na.pswp__share--facebook:before {\n  content: '';\n  display: block;\n  width: 0;\n  height: 0;\n  position: absolute;\n  top: -12px;\n  right: 15px;\n  border: 6px solid transparent;\n  border-bottom-color: #FFF;\n  -webkit-pointer-events: none;\n  -moz-pointer-events: none;\n  pointer-events: none; }\n\na.pswp__share--facebook:hover {\n  background: #3E5C9A;\n  color: #FFF; }\n  a.pswp__share--facebook:hover:before {\n    border-bottom-color: #3E5C9A; }\n\na.pswp__share--twitter:hover {\n  background: #55ACEE;\n  color: #FFF; }\n\na.pswp__share--pinterest:hover {\n  background: #CCC;\n  color: #CE272D; }\n\na.pswp__share--download:hover {\n  background: #DDD; }\n\n/*\n\n\t3. Index indicator (\"1 of X\" counter)\n\n */\n.pswp__counter {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  font-size: 13px;\n  line-height: 44px;\n  color: #FFF;\n  opacity: 0.75;\n  padding: 0 10px; }\n\n/*\n\t\n\t4. Caption\n\n */\n.pswp__caption {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  min-height: 44px; }\n  .pswp__caption small {\n    font-size: 11px;\n    color: #BBB; }\n\n.pswp__caption__center {\n  text-align: left;\n  max-width: 420px;\n  margin: 0 auto;\n  font-size: 13px;\n  padding: 10px;\n  line-height: 20px;\n  color: #CCC; }\n\n.pswp__caption--empty {\n  display: none; }\n\n/* Fake caption element, used to calculate height of next/prev image */\n.pswp__caption--fake {\n  visibility: hidden; }\n\n/*\n\n\t5. Loading indicator (preloader)\n\n\tYou can play with it here - http://codepen.io/dimsemenov/pen/yyBWoR\n\n */\n.pswp__preloader {\n  width: 44px;\n  height: 44px;\n  position: absolute;\n  top: 0;\n  left: 50%;\n  margin-left: -22px;\n  opacity: 0;\n  -webkit-transition: opacity 0.25s ease-out;\n          transition: opacity 0.25s ease-out;\n  will-change: opacity;\n  direction: ltr; }\n\n.pswp__preloader__icn {\n  width: 20px;\n  height: 20px;\n  margin: 12px; }\n\n.pswp__preloader--active {\n  opacity: 1; }\n  .pswp__preloader--active .pswp__preloader__icn {\n    /* We use .gif in browsers that don't support CSS animation */\n    background: url(" + o(t(13)) + ') 0 0 no-repeat; }\n\n.pswp--css_animation .pswp__preloader--active {\n  opacity: 1; }\n  .pswp--css_animation .pswp__preloader--active .pswp__preloader__icn {\n    -webkit-animation: clockwise 500ms linear infinite;\n            animation: clockwise 500ms linear infinite; }\n  .pswp--css_animation .pswp__preloader--active .pswp__preloader__donut {\n    -webkit-animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite;\n            animation: donut-rotate 1000ms cubic-bezier(0.4, 0, 0.22, 1) infinite; }\n\n.pswp--css_animation .pswp__preloader__icn {\n  background: none;\n  opacity: 0.75;\n  width: 14px;\n  height: 14px;\n  position: absolute;\n  left: 15px;\n  top: 15px;\n  margin: 0; }\n\n.pswp--css_animation .pswp__preloader__cut {\n  /* \n\t\t\tThe idea of animating inner circle is based on Polymer ("material") loading indicator \n\t\t\t by Keanu Lee https://blog.keanulee.com/2014/10/20/the-tale-of-three-spinners.html\n\t\t*/\n  position: relative;\n  width: 7px;\n  height: 14px;\n  overflow: hidden; }\n\n.pswp--css_animation .pswp__preloader__donut {\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 14px;\n  height: 14px;\n  border: 2px solid #FFF;\n  border-radius: 50%;\n  border-left-color: transparent;\n  border-bottom-color: transparent;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: none;\n  margin: 0; }\n\n@media screen and (max-width: 1024px) {\n  .pswp__preloader {\n    position: relative;\n    left: auto;\n    top: auto;\n    margin: 0;\n    float: right; } }\n\n@-webkit-keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@keyframes clockwise {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n\n@-webkit-keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n\n@keyframes donut-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  50% {\n    -webkit-transform: rotate(-140deg);\n            transform: rotate(-140deg); }\n  100% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); } }\n\n/*\n\t\n\t6. Additional styles\n\n */\n/* root element of UI */\n.pswp__ui {\n  -webkit-font-smoothing: auto;\n  visibility: visible;\n  opacity: 1;\n  z-index: 1550; }\n\n/* top black bar with buttons and "1 of X" indicator */\n.pswp__top-bar {\n  position: absolute;\n  left: 0;\n  top: 0;\n  height: 44px;\n  width: 100%; }\n\n.pswp__caption,\n.pswp__top-bar,\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  -webkit-backface-visibility: hidden;\n  will-change: opacity;\n  -webkit-transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1);\n          transition: opacity 333ms cubic-bezier(0.4, 0, 0.22, 1); }\n\n/* pswp--has_mouse class is added only when two subsequent mousemove events occur */\n.pswp--has_mouse .pswp__button--arrow--left,\n.pswp--has_mouse .pswp__button--arrow--right {\n  visibility: visible; }\n\n.pswp__top-bar,\n.pswp__caption {\n  background-color: rgba(0, 0, 0, 0.5); }\n\n/* pswp__ui--fit class is added when main image "fits" between top bar and bottom bar (caption) */\n.pswp__ui--fit .pswp__top-bar,\n.pswp__ui--fit .pswp__caption {\n  background-color: rgba(0, 0, 0, 0.3); }\n\n/* pswp__ui--idle class is added when mouse isn\'t moving for several seconds (JS option timeToIdle) */\n.pswp__ui--idle .pswp__top-bar {\n  opacity: 0; }\n\n.pswp__ui--idle .pswp__button--arrow--left,\n.pswp__ui--idle .pswp__button--arrow--right {\n  opacity: 0; }\n\n/*\n\tpswp__ui--hidden class is added when controls are hidden\n\te.g. when user taps to toggle visibility of controls\n*/\n.pswp__ui--hidden .pswp__top-bar,\n.pswp__ui--hidden .pswp__caption,\n.pswp__ui--hidden .pswp__button--arrow--left,\n.pswp__ui--hidden .pswp__button--arrow--right {\n  /* Force paint & create composition layer for controls. */\n  opacity: 0.001; }\n\n/* pswp__ui--one-slide class is added when there is just one item in gallery */\n.pswp__ui--one-slide .pswp__button--arrow--left,\n.pswp__ui--one-slide .pswp__button--arrow--right,\n.pswp__ui--one-slide .pswp__counter {\n  display: none; }\n\n.pswp__element--disabled {\n  display: none !important; }\n\n.pswp--minimal--dark .pswp__top-bar {\n  background: none; }\n', ""])
  }, function (e, n) {
    e.exports = function (e) {
      return "string" != typeof e ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) ? '"' + e.replace(/"/g, '\\"').replace(/\n/g, "\\n") + '"' : e)
    }
  }, function (e, n) {
    e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQgAAABYCAQAAACjBqE3AAAB6klEQVR4Ae3bsWpUQRTG8YkkanwCa7GzVotsI/gEgk9h4Vu4ySLYmMYgbJrc3lrwZbJwC0FMt4j7F6Y4oIZrsXtgxvx/1c0ufEX4cnbmLCmSJEmSJEmSJEmSJP3XCBPvbJU+8doWmDFwyZpLBmYlNJebz0KwzykwsuSYJSNwykEJreV2BaBMaLIQZ2xYcFgqDlmw4ayE/FwL0dDk4Qh4W37DAjgqIT+3HRbigjH+iikVdxgZStgyN0Su2sXIeTwTT+esdpcbIlfNAuZ/TxresG4zV8kYWSZNiKUTokMMSWeIwTNEn4fK2TW3gRNgVkJLuVksROA9G+bEvoATNlBCa7nZXEwdxEZxzpKRKFh+bsv8LmPFmhX1OwfIz81jIRJQ5eeqG9B+riRJkiRJkiRJkiRJkiRJkiRJUkvA/8RQoEpKlJWINFkJ62AlrEP/mNBibnv2yz/A3t7Uq3LcpoxP8COjC1T5vxoAD5VdoEqdDrd5QuW1swtUSaueh3zkiuBiqgtA2OlkeMcP/uDqugsJdbjHF65VdPMKwS0+WQc/MgKvrIOHysB9vgPwk8+85hmPbnQdvHZyDMAFD7L3EOpgMcVdvnHFS0/vlatrXvCVx0U9gt3fxvnA0/hB4nmRJEmSJEmSJEmSJGmHfgFLaDPoMu5xWwAAAABJRU5ErkJggg=="
  }, function (e, n) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjY0IiBoZWlnaHQ9Ijg4IiB2aWV3Qm94PSIwIDAgMjY0IDg4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjx0aXRsZT5kZWZhdWx0LXNraW4gMjwvdGl0bGU+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Zz48cGF0aCBkPSJNNjcuMDAyIDU5LjV2My43NjhjLTYuMzA3Ljg0LTkuMTg0IDUuNzUtMTAuMDAyIDkuNzMyIDIuMjItMi44MyA1LjU2NC01LjA5OCAxMC4wMDItNS4wOThWNzEuNUw3MyA2NS41ODUgNjcuMDAyIDU5LjV6IiBpZD0iU2hhcGUiIGZpbGw9IiNmZmYiLz48ZyBmaWxsPSIjZmZmIj48cGF0aCBkPSJNMTMgMjl2LTVoMnYzaDN2MmgtNXpNMTMgMTVoNXYyaC0zdjNoLTJ2LTV6TTMxIDE1djVoLTJ2LTNoLTN2LTJoNXpNMzEgMjloLTV2LTJoM3YtM2gydjV6IiBpZD0iU2hhcGUiLz48L2c+PGcgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTYyIDI0djVoLTJ2LTNoLTN2LTJoNXpNNjIgMjBoLTV2LTJoM3YtM2gydjV6TTcwIDIwdi01aDJ2M2gzdjJoLTV6TTcwIDI0aDV2MmgtM3YzaC0ydi01eiIvPjwvZz48cGF0aCBkPSJNMjAuNTg2IDY2bC01LjY1Ni01LjY1NiAxLjQxNC0xLjQxNEwyMiA2NC41ODZsNS42NTYtNS42NTYgMS40MTQgMS40MTRMMjMuNDE0IDY2bDUuNjU2IDUuNjU2LTEuNDE0IDEuNDE0TDIyIDY3LjQxNGwtNS42NTYgNS42NTYtMS40MTQtMS40MTRMMjAuNTg2IDY2eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMTEuNzg1IDY1LjAzTDExMCA2My41bDMtMy41aC0xMHYtMmgxMGwtMy0zLjUgMS43ODUtMS40NjhMMTE3IDU5bC01LjIxNSA2LjAzeiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xNTIuMjE1IDY1LjAzTDE1NCA2My41bC0zLTMuNWgxMHYtMmgtMTBsMy0zLjUtMS43ODUtMS40NjhMMTQ3IDU5bDUuMjE1IDYuMDN6IiBmaWxsPSIjZmZmIi8+PGc+PHBhdGggaWQ9IlJlY3RhbmdsZS0xMSIgZmlsbD0iI2ZmZiIgZD0iTTE2MC45NTcgMjguNTQzbC0zLjI1LTMuMjUtMS40MTMgMS40MTQgMy4yNSAzLjI1eiIvPjxwYXRoIGQ9Ik0xNTIuNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIGlkPSJPdmFsLTEiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTUwIDIxaDV2MWgtNXoiLz48L2c+PGc+PHBhdGggZD0iTTExNi45NTcgMjguNTQzbC0xLjQxNCAxLjQxNC0zLjI1LTMuMjUgMS40MTQtMS40MTQgMy4yNSAzLjI1eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMDguNSAyN2MzLjAzOCAwIDUuNS0yLjQ2MiA1LjUtNS41cy0yLjQ2Mi01LjUtNS41LTUuNS01LjUgMi40NjItNS41IDUuNSAyLjQ2MiA1LjUgNS41IDUuNXoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA2IDIxaDV2MWgtNXoiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNMTA5LjA0MyAxOS4wMDhsLS4wODUgNS0xLS4wMTcuMDg1LTV6Ii8+PC9nPjwvZz48L2c+PC9zdmc+"
  }, function (e, n) {
    e.exports = "data:image/gif;base64,R0lGODlhFAAUAPMIAIeHhz8/P1dXVycnJ8/Pz7e3t5+fn29vb////wAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBwAIACwAAAAAFAAUAEAEUxDJSatFxtwaggWAdIyHJAhXoRYSQUhDPGx0TbmujahbXGWZWqdDAYEsp5NupLPkdDwE7oXwWVasimzWrAE1tKFHErQRK8eL8mMUlRBJVI307uoiACH5BAUHAAgALAEAAQASABIAAAROEMkpS6E4W5upMdUmEQT2feFIltMJYivbvhnZ3R0A4NMwIDodz+cL7nDEn5CH8DGZh8MtEMBEoxkqlXKVIgQCibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpjaE4W5spANUmFQX2feFIltMJYivbvhnZ3d1x4BNBIDodz+cL7nDEn5CH8DGZAsFtMMBEoxkqlXKVIgIBibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpAaA4W5vpOdUmGQb2feFIltMJYivbvhnZ3Z0g4FNRIDodz+cL7nDEn5CH8DGZgcCNQMBEoxkqlXKVIgYDibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpz6E4W5upENUmAQD2feFIltMJYivbvhnZ3V0Q4JNhIDodz+cL7nDEn5CH8DGZg8GtUMBEoxkqlXKVIggEibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkphaA4W5tpCNUmHQf2feFIltMJYivbvhnZ3d0w4BMAIDodz+cL7nDEn5CH8DGZBMLNYMBEoxkqlXKVIgoFibbK9YLBYvLtHH5K0J0IACH5BAUHAAgALAEAAQASABIAAAROEMkpQ6A4W5vpGNUmCQL2feFIltMJYivbvhnZ3R1B4NNxIDodz+cL7nDEn5CH8DGZhcINAMBEoxkqlXKVIgwGibbK9YLBYvLtHH5K0J0IACH5BAUHAAcALAEAAQASABIAAANCeLo6wzA6FxkhbaoQ4L3ZxnXLh0EjWZ4RV71VUcCLIByyTNt2PsO8m452sBGJBsNxkUwuD03lAQBASqnUJ7aq5UYSADs="
  }, function (e, n, t) {
    var o = t(15);
    "string" == typeof o && (o = [[e.i, o, ""]]), o.locals && (e.exports = o.locals);
    (0, t(2).default)("83e78ce4", o, !0, {})
  }, function (e, n, t) {
    (e.exports = t(1)(!1)).push([e.i, ".pswp-thumbnails .pswp-thumbnail{font-size:0;cursor:pointer}", ""])
  }])
});
//# sourceMappingURL=v-photoswipe.js.map
