!function (n) {
	var e = false || document.getElementById("newBridge");
	!function (n) {
		function e(n, e) {return N(n, e)}

		function t(n, e, t) {
			if (null == t && (null == e ? (t = n, n = null) : (t = e, e = null, n instanceof Array && (e = n, n = null))), null != t) {
				var r = window.opera;
				if (!n && document.attachEvent && (!r || "[object Opera]" !== r.toString())) {
					var a = S();
					n     = a && a.getAttribute("data-require-id")
				}
				n ? (i(n, e, t), P && clearTimeout(P)) : C[0] = {deps: e, factory: t}
			}
		}

		function r() {
			var n = H.config[this.id];
			return n && "object" == typeof n ? n : {}
		}

		function i(n, e, t) {
			O[n] || (O[n] = {
				id     : n, depsDec: e, deps: e || ["require", "exports", "module"], factoryDeps: [], factory: t,
				exports: {}, config: r, state: B, require: q(n), depMs: [], depMkv: {}, depRs: [], depPMs: []
			})
		}

		function a(n) {
			var e = O[n];
			if (e && !f(n, F)) {
				var t = e.deps, r = e.factory, i = 0;
				"function" == typeof r && (i = Math.min(r.length, t.length), !e.depsDec && r.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, "").replace(/require\(\s*(['"'])([^'"]+)\1\s*\)/g, function (n, e, r) {t.push(r)}));
				var a = [];
				$(t, function (t, r) {
					var o, u, c = w(t), f = A(c.mod, n);
					f && !L[f] ? (c.res && (u = {
							id: t, mod: f, res: c.res
						}, j[f] = 1, e.depPMs.push(f), e.depRs.push(u)), o = e.depMkv[f], o || (o = {
							id: c.mod, absId: f, hard: i > r
						}, e.depMs.push(o), e.depMkv[f] = o, a.push(f))) : o = {absId: f}, i > r && e.factoryDeps.push(u || o)
				}), e.state = F, c(n), g(a)
			}
		}

		function o() {for (var n in j)u(n), s(n)}

		function u(n) {
			function e(n) {
				if (!f(n, F))return !1;
				if (f(n, T) || t[n])return !0;
				t[n]  = 1;
				var r = O[n], i = !0;
				return $(r.depMs, function (n) {return i = e(n.absId)}), i && $(r.depRs, function (n) {return i = !(!n.absId || !f(n.absId, z))}), i && (r.state = T), i
			}

			var t = {};
			e(n)
		}

		function c(e) {
			function t() {
				if (!r && i.state === T) {
					r     = 1;
					var t = 1, a = [];
					if ($(i.factoryDeps, function (n) {
							var e = n.absId;
							return L[e] || (s(e), f(e, z)) ? void a.push(e) : (t = 0, !1)
						}), t) {
						try {
							var o = l(a, {
								require: i.require, exports: i.exports, module: i
							}), u = i.factory, c = "function" == typeof u ? u.apply(n, o) : u;
							null != c && (i.exports = c), i.invokeFactory = null, delete j[e]
						} catch (n) {
							if (r = 0, /^\[MODULE_MISS\]"([^"]+)/.test(n.message)) {
								var d = i.depMkv[RegExp.$1];
								return void(d && (d.hard = 1))
							}
							throw n
						}
						p(e)
					}
				}
			}

			var r, i = O[e];
			i.invokeFactory = t, $(i.depPMs, function (n) {d(n, function () {$(i.depRs, function (t) {t.absId || t.mod !== n || (t.absId = A(t.id, e), g([t.absId], o))})})})
		}

		function f(n, e) {return O[n] && O[n].state >= e}

		function s(n) {
			var e = O[n];
			e && e.invokeFactory && e.invokeFactory()
		}

		function l(n, e) {
			var t = [];
			return $(n, function (n, r) {t[r] = e[n] || v(n)}), t
		}

		function d(n, e) {
			if (f(n, z))return void e();
			var t = _[n];
			t || (t = _[n] = []), t.push(e)
		}

		function p(n) {
			var e   = _[n] || [], t = O[n];
			t.state = z;
			for (var r = e.length; r--;)e[r]();
			e.length = 0, delete _[n]
		}

		function v(n) {return f(n, z) ? O[n].exports : null}

		function m(n) {$(C, function (e) {i(n, e.deps, e.factory)}), C.length = 0, a(n)}

		function g(e, t, r, i) {
			function u() {
				if (!c) {
					var r = 1;
					$(e, function (n) {return L[n] ? void 0 : r = !!f(n, z)}), r && (c = 1, "function" == typeof t && t.apply(n, l(e, L)))
				}
			}

			if ("string" == typeof e) {
				if (s(e), !f(e, z))throw new Error('[MODULE_MISS]"' + e + '" is not exists!');
				return v(e)
			}
			i     = i || {};
			var c = 0;
			e instanceof Array && (u(), c || ($(e, function (n) {L[n] || f(n, z) || (d(n, u), i[n] || (n.indexOf("!") > 0 ? y : h)(n, r), a(n))}), o()))
		}

		function h(n) {
			function e() {
				var e = t.readyState;
				if ("undefined" == typeof e || /^(loaded|complete)$/.test(e)) {
					t.onload = t.onreadystatechange = null, t = null, m(n);
					for (var r in j)a(r);
					o()
				}
			}

			if (!G[n] && !O[n]) {
				G[n]  = 1;
				var t = document.createElement("script");
				t.setAttribute("charset", "utf-8"), t.setAttribute("data-require-id", n), t.src = M(n + ".js"), t.async = !0, t.readyState ? t.onreadystatechange = e : t.onload = e, R(t)
			}
		}

		function y(n, e) {
			function t(e) {o.exports = e || !0, p(n)}

			function i(i) {
				var o = e ? O[e].require : N;
				i.load(a.res, o, t, r.call({id: n}))
			}

			if (!O[n]) {
				var a = w(n), o = {id: n, state: F};
				O[n] = o, t.fromText = function (n, e) {j[n] = 1, new Function(e)(), m(n)}, i(v(a.mod))
			}
		}

		function b(n, e) {
			var t = I(n, 1, e);
			return t.sort(D), t
		}

		function x() {
			H.baseUrl = H.baseUrl.replace(/\/$/, "") + "/", J = b(H.paths), Q = b(H.map, 1), $(Q, function (n) {n.v = b(n.v)}), K = [], $(H.packages, function (n) {
				var e = n;
				"string" == typeof n && (e = {
					name: n.split("/")[0], location: n, main: "main"
				}), e.location = e.location || e.name, e.main = (e.main || "main").replace(/\.js$/i, ""), e.reg = U(e.name), K.push(e)
			}), K.sort(D), V = b(H.urlArgs, 1), W = b(H.noRequests), $(W, function (n) {
				var e = n.v, t = {};
				n.v = t, e instanceof Array || (e = [e]), $(e, function (n) {t[n] = 1})
			})
		}

		function k(n, e, t) {$(e, function (e) {return e.reg.test(n) ? (t(e.v, e.k, e), !1) : void 0})}

		function M(n) {
			var e = /(\.[a-z0-9]+)$/i, t = /(\?[^#]*)$/, r = "", i = n, a = "";
			t.test(n) && (a = RegExp.$1, n = n.replace(t, "")), e.test(n) && (r = RegExp.$1, i = n.replace(e, ""));
			var o, u = i;
			return k(i, J, function (n, e) {u = u.replace(e, n), o = 1}), o || k(i, K, function (n, e, t) {u = u.replace(t.name, t.location)}), /^([a-z]{2,10}:\/)?\//i.test(u) || (u = H.baseUrl + u), u += r + a, k(i, V, function (n) {u += (u.indexOf("?") > 0 ? "&" : "?") + n}), u
		}

		function q(n) {
			function e(e, r) {
				if ("string" == typeof e)return t[e] || (t[e] = g(A(e, n))), t[e];
				if (e instanceof Array) {
					var i = [], a = [], o = [];
					$(e, function (e, t) {
						var r = w(e), u = A(r.mod, n);
						a.push(u), j[u] = 1, r.res ? (i.push(u), o[t] = null) : o[t] = u
					});
					var u = {};
					$(a, function (n) {
						var e;
						k(n, W, function (n) {e = n}), e && (e["*"] ? u[n] = 1 : $(a, function (t) {return e[t] ? (u[n] = 1, !1) : void 0}))
					}), g(a, function () {$(o, function (t, r) {null == t && (o[r] = A(e[r], n))}), g(o, r, n)}, n, u)
				}
			}

			var t = {};
			return e.toUrl = function (e) {return M(A(e, n))}, e
		}

		function A(n, e) {
			if (!n)return "";
			e     = e || "";
			var t = w(n);
			if (!t)return n;
			var r = t.res, i = E(t.mod, e);
			if ($(K, function (n) {
					var e = n.name;
					return e === i ? (i = e + "/" + n.main, !1) : void 0
				}), k(e, Q, function (n) {k(i, n, function (n, e) {i = i.replace(e, n)})}), r) {
				var a = v(i);
				r = a.normalize ? a.normalize(r, function (n) {return A(n, e)}) : A(r, e), i += "!" + r
			}
			return i
		}

		function E(n, e) {
			if (0 === n.indexOf(".")) {
				var t = e.split("/"), r = n.split("/"), i = t.length - 1, a = r.length, o = 0, u = 0;
				n:for (var c = 0; a > c; c++) {
					var f = r[c];
					switch (f) {
						case"..":
							if (!(i > o))break n;
							o++, u++;
							break;
						case".":
							u++;
							break;
						default:
							break n
					}
				}
				return t.length = i - o, r = r.slice(u), t.concat(r).join("/")
			}
			return n
		}

		function w(n) {
			var e = n.split("!");
			return e[0] ? {mod: e[0], res: e[1]} : null
		}

		function I(n, e, t) {
			var r = [];
			for (var i in n)if (n.hasOwnProperty(i)) {
				var a = {k: i, v: n[i]};
				r.push(a), e && (a.reg = "*" === i && t ? /^/ : U(i))
			}
			return r
		}

		function S() {
			if (X)return X;
			if (Y && "interactive" === Y.readyState)return Y;
			for (var n = document.getElementsByTagName("script"), e = n.length; e--;) {
				var t = n[e];
				if ("interactive" === t.readyState)return Y = t, t
			}
		}

		function R(n) {X = n, nn ? Z.insertBefore(n, nn) : Z.appendChild(n), X = null}

		function U(n) {return new RegExp("^" + n + "(/|$)")}

		function $(n, e) {if (n instanceof Array)for (var t = 0, r = n.length; r > t && e(n[t], t) !== !1; t++);}

		function D(n, e) {
			var t = n.k || n.name, r = e.k || e.name;
			return "*" === r ? -1 : "*" === t ? 1 : r.length - t.length
		}

		var O = {}, j = {}, B = 1, F = 2, T = 3, z = 4, N = q();
		e.version = "1.8.6", e.loader = "esl", e.toUrl = N.toUrl;
		var P;
		t.amd = {};
		var _ = {}, L = {require: e, exports: 1, module: 1}, C = [], G = {}, H = {
			baseUrl: "./", paths: {}, config: {}, map: {}, packages: [], noRequests: {}, urlArgs: {}
		};
		e.config = function (n) {
			function e(n) {i.push(n)}

			if (n) {
				for (var t in H) {
					var r = n[t], i = H[t];
					if (r)if ("urlArgs" === t && "string" == typeof r) H.urlArgs["*"] = r; else if (i instanceof Array) $(r, e); else if ("object" == typeof i)for (var t in r)i[t] = r[t]; else H[t] = r
				}
				x()
			}
		}, x();
		var J, K, Q, V, W, X, Y, Z = document.getElementsByTagName("head")[0], nn = document.getElementsByTagName("base")[0];
		nn && (Z = nn.parentNode), n.define || (n.define = t, n.require || (n.require = e), n.esl = e)
	}(e);
	var require = e.require, define = e.define;
	require.config({
		'baseUrl' : '//sgoutong.baidu.com/embed/1504252092/asset/', 'paths': {'cl': 'common/css'},
		'packages': [{'name': 'lib', 'location': 'common', 'main': 'lib'}, {
			'name': 'bull', 'location': '../dep/bull/asset', 'main': 'main'
		}, {'name': 'im-lib', 'location': '../dep/im-lib/0.1.0/asset/pc', 'main': 'main'}, {
			'name': 'im-core', 'location': '../dep/im-core/0.2.0/asset', 'main': 'main'
		}, {'name': 'im-editor', 'location': '../dep/im-editor/0.1.0/asset', 'main': 'main'}, {
			'name': 'im-filter', 'location': '../dep/im-filter/0.1.0/asset', 'main': 'main'
		}]
	}), define("bull/aop/JointPoint", ["require"], function (require) {
		function e(e, t, n, i, o, r) {this.thisp = e, this.args = t, this.modName = n, this.funcName = i, this.func = o, this.returnValue = r}

		return e.prototype = {
			constructor   : e, getThis: function () {return this.thisp}, getArgs: function () {return this.args},
			getModName    : function () {return this.modName}, getFuncName: function () {return this.funcName},
			getFunc       : function () {return this.func}, setReturnValue: function (e) {this.returnValue = e},
			getReturnValue: function () {return this.returnValue}
		}, e
	}), define("bull/aop/aopEmitter", ["require", "./main"], function (require) {
		function e(e, n, i) {
			var o = [], r = t;
			if (r = r[e] || {}, r = r[n] || {}, r = r[i] || [], "[object Array]" === {}.toString.call(r))for (var a = 0; a < r.length; a++)o.push(r[a]);
			return o
		}

		var exports = {}, t = {};
		return exports.on = function (e, n, i, o) {
			var r = t;
			r[e] = r[e] || {}, r = r[e], r[n] = r[n] || {}, r = r[n], r[i] = r[i] || [], r = r[i], r.push({
				func: o.func, funcName: o.funcName, modName: o.modName
			})
		}, exports.getBefore = function (t, n) {
			var i = require("./main"), o = i.TypeEnum.BEFORE;
			return e(o, t, n)
		}, exports.queryBefore = function (e, t) {
			var n = exports.getBefore();
			if (console.log("method before " + e + " -> " + t + ":"), !n.length)return void console.log("none");
			for (var i = 0; i < n.length; i++)console.log(n[i].modName + " -> " + n[i].funcName);
			console.log("-----------------------------------")
		}, exports.getAfter = function (t, n) {
			var i = require("./main"), o = i.TypeEnum.AFTER;
			return e(o, t, n)
		}, exports.queryAfter = function (e, t) {
			var n = exports.getAfter();
			if (!n.length)return void console.log("none");
			console.log("method after " + e + " -> " + t + ":");
			for (var i = 0; i < n.length; i++)console.log(n[i].modName + " -> " + n[i].funcName);
			console.log("-----------------------------------")
		}, exports.getRegisterAop = function (e) {
			var n = {}, i = [], o = t[e];
			for (var r in o)if (o.hasOwnProperty(r)) {
				var a = o[r];
				for (var s in a)if (a.hasOwnProperty(s)) {
					if (!n[s]) n[s] = !0, i.push({modName: r, funcName: s, from: a[s][0].modName})
				}
			}
			return i
		}, exports.emit = function (t, n, i, o) {for (var r = e(t, n, i), a = 0; a < r.length; a++)r[a].func(o)}, exports
	}), define("bull/microPromise/microPromise", ["require"], function (require) {
		function e() {
			for (var e = arguments.length, n = 0, i = t(), o = [], r = 0; r < e; r++) {
				var a = arguments[r];
				!function (t) {a.then(function (r) {if (n++, o[t] = r, n === e) i.resolve.apply(i, o)}, function () {i.reject()})}(r)
			}
			return i.promise()
		}

		var t = function () {
			function e() {for (var e = this, t = 0; t < o.length; t++)!function (t) {if (a && a[0] && a[0].then) a[0].then(function () {o[t].apply(e, arguments)}); else setTimeout(function () {o[t].apply(e, a)}, 0)}(t)}

			function n() {for (var e = this, t = 0; t < r.length; t++)!function (t) {setTimeout(function () {r[t].apply(e, a)}, 0)}(t)}

			function i(e, n) {
				var i = t();
				if (d === c.resolved) {
					var u = this;
					setTimeout(function () {e.apply(u, a)}, 0)
				} else if (d === c.reject) {
					var u = this;
					setTimeout(function () {n.call(u, s)}, 0)
				} else {
					if (e) o.push(function () {i.resolve(e.apply(u, arguments))});
					if (n) r.push(function (e) {n(e), i.reject()})
				}
				return i.promise()
			}

			if (!this instanceof t)return new t;
			var o = [], r = [], a = [], s = "", c = {
				pendding: 1, resolved: 2, rejected: 3
			}, d  = c.pendding, u = {
				resolve  : function () {
					var t = Array.prototype.slice.call(arguments, 0);
					if (d === c.pendding) a = t, d = c.resolved, e.call(this)
				}, reject: function (e) {if (d === c.pendding) s = e, d = c.rejected, n.call(this)}, then: i,
				promise  : function () {return {then: i}}
			};
			return u
		};
		return {Deferred: t, when: e}
	}), define("bull/aop/main", ["require", "./JointPoint", "./aopEmitter", "../loader", "../microPromise/microPromise"], function (require) {
		function e(e, t, n) {r.emit(a.BEFORE, e, t, n)}

		function t(e, t, n) {r.emit(a.AFTER, e, t, n)}

		function n(e) {return e = e || "", e.replace(/^\s|\s$/g, "")}

		function i(e) {
			e     = e || "";
			var t = e.split(","), i = n(t[0] || ""), o = n(t[1]), r = n(t[2]);
			t     = i.split(".");
			var a = t[0], s = t[1], c = t[2];
			return {packageName: a, modName: s, funcName: c, before: o, after: r}
		}

		var exports = {}, o = require("./JointPoint"), r = require("./aopEmitter"), a = exports.TypeEnum = {
			BEFORE: "type1", AFTER: "type2"
		};
		return exports.createAopProxy = function (n, i, r) {
			var a = require("../loader"), s = require("../microPromise/microPromise");
			return function () {
				var c = [], d = Array.prototype.slice.call(arguments, 0), u = new o(this, d, n, i, r), l = {
					jointPoint: u, microPromise: s
				};
				e(n, i, u);
				var f = a.getInjection(n) || {}, p = f[i] || [];
				if ("[object Array]" === {}.toString.call(p))for (var m = 0; m < p.length; m++) {
					var g = p[m];
					if (g in l) c.push(l[g]); else c.push(a.get(g))
				}
				c     = c.concat(d);
				var h = r.apply(this, c);
				if (h && h.then) h.then(function (e) {u.setReturnValue(e), t(n, i, u)}); else u.setReturnValue(h), t(n, i, u);
				return h
			}
		}, exports.aspectRegister = function (e, t, n) {
			var o = require("../loader");
			if (e.indexOf(".") === -1) e = t + "." + e;
			for (var s = 0; s < n.length; s++)!function (t) {
				t.before && r.on(a.BEFORE, t.packageName + "." + t.modName, t.funcName, {
					modName: e, funcName: t.before, func: function (n) {
						var i = o.get(e)[t.before];
						if (!i)throw'module "' + e + "\" don't have method " + t.before;
						i.apply(n.getThis(), n.getArgs())
					}
				}), t.after && r.on(a.AFTER, t.packageName + "." + t.modName, t.funcName, {
					modName: e, funcName: t.after, func: function (n) {
						var i = o.get(e)[t.after];
						if (!i)throw'module "' + e + "\" don't have method " + t.after;
						i.apply(n.getThis(), n.getArgs())
					}
				})
			}(i(n[s]))
		}, exports
	}), define("bull/loader", ["require", "./aop/main"], function (require) {
		function e(t, n) {
			var i;
			if ("function" == typeof n) {
				e(t, n.prototype);
				var o = c(t, r, n);
				return o.prototype = n.prototype, o
			} else {
				for (var r in n)if (n.hasOwnProperty(r)) {
					if (i = n[r], "function" == typeof i) n[r] = c(t, r, i)
				} else;
				return n
			}
		}

		function t(e) {
			e = e || [];
			for (var t = 0; t < e.length; t++)exports.init(e[t])
		}

		function n(t, n) {
			for (var i in t)if (t.hasOwnProperty(i)) {
				var o = t[i];
				if (i = n + "." + i, r.hasOwnProperty(i)) {
					if (o._belong && i !== o._belong)throw'module conflict: module "' + i + '" is already register to "' + o._belong + '"'
				} else {
					if (o._belong)throw'module "' + i + '" already register to "' + o._belong + '"';
					o._belong = i, r[i] = e(i, o)
				}
			} else;
		}

		function i(e, t) {
			e = e || [];
			for (var n = 0; n < e.length; n++) {
				var i   = e[n];
				a[i.id] = a[i.id] || {};
				var o   = a[i.id], r = i.method;
				for (var s in r)o[s] = r[s]
			}
		}

		function o(e, t) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n];
				d(i.id, t, i.pointCut)
			}
		}

		var exports = {}, r = {}, a = {}, s = require("./aop/main"), c = s.createAopProxy, d = s.aspectRegister;
		return exports.init = function (e) {
			if (!e._initialized) {
				e._initialized = !0;
				var r          = e.package;
				if (!r && (e.resource || e.aspect))throw"package name not found";
				t(e.importConfig), e.resource && n(e.resource, r), e.aspect && o(e.aspect, r), e.injection && i(e.injection, r)
			}
		}, exports.getInjection = function (e) {return a[e]}, exports.getDeps = function (e) {
			var t = a[e], n = {};
			for (var i in t)if (t.hasOwnProperty(i))for (var o = t[i], r = 0; r < o.length; r++)n[o[r]] = !0;
			delete n[e];
			var s = [];
			for (var i in n)if (i.indexOf(".") > -1) s.push(i);
			return s
		}, exports.queryDep = function (e) {
			var t = exports.getDeps(e);
			if (console.log("deps of " + e + " is:"), !t.length) console.log("none");
			for (var n = 0; n < t.length; n++)console.log(t[n]);
			console.log("-----------------------------------")
		}, exports.getModules = function (e) {
			e     = e || "";
			var t = [];
			for (var n in r)if (r.hasOwnProperty(n))if (e) {
				if (n.indexOf(e) > -1) t.push(n)
			} else t.push(n);
			return t
		}, exports.queryModule = function (e) {
			var t = exports.getModules(e);
			if (e) console.log('modules contains "' + e + '":'); else console.log("all modules:");
			for (var n = 0; n < t.length; n++)console.log(t[n]);
			console.log("-----------------------------------")
		}, exports.queryInvoke = function (e) {
			var t = [], n = {};
			for (var i in a)if (a.hasOwnProperty(i)) {
				var o = a[i];
				for (var r in o)if (o.hasOwnProperty(r))for (var s = o[r], c = 0; c < s.length; c++) {
					var d = s[c];
					if (d === e) {
						var u = i + d;
						if (u in n)continue; else n[u] = !0;
						t.push({modName: i, funcName: r})
					}
				}
			}
			if (t.length) {
				console.log("module " + e + " used by these method:");
				for (var c = 0; c < t.length; c++)console.log(t[c].modName + " -> " + r)
			} else console.log("module" + e + " used nowhere");
			console.log("-----------------------------------")
		}, exports.checkDep = function () {
			var e, t = 0;
			console.log("checking deps:");
			for (var n in r)if (r.hasOwnProperty(n)) {
				e = exports.getDeps(n);
				for (var i = 0; i < e.length; i++)if (!exports.has(e[i]))if (e[i].indexOf(".") > -1) t++, console.log(e[i] + " is required by " + n + " but now missing")
			}
			if (!t) console.log("all dependencies is ready");
			console.log("-----------------------------------")
		}, exports.has = function (e) {return e in r}, exports.get = function (e) {if (e in r)return r[e]; else throw'module "' + e + '" not found'}, exports
	}), define("bull/main", ["require", "./loader", "./aop/aopEmitter"], function (require) {
		function e() {
			var e = document.createElement("div"), t = e.style;
			t.position = "fixed", t.right = "20px", t.top = "20px", t.border = "solid 1px black", t.backgroundColor = "#eee", e.innerHTML = "\u70b9\u6b64\u67e5\u770b<br/>\u6a21\u5757\u5173\u7cfb";
			var n = !1;
			e.onclick = function () {if (!n) n = !0, require(["bull/debug"], function (e) {n = !1, e.entry()})}, document.body.insertBefore(e, document.body.firstChild)
		}

		function t() {
			var t = location.hash;
			if (t.indexOf("bullDebug") > -1) e()
		}

		var exports = {}, n = require("./loader"), i = require("./aop/aopEmitter");
		return exports.get = n.get, exports.queryBefore = i.queryBefore, exports.queryAfter = i.queryAfter, exports.queryInvoke = n.queryInvoke, exports.queryDep = n.queryDep, exports.checkDep = n.checkDep, exports.queryModule = n.queryModule, exports.init = function (e) {t(), n.init(e)}, exports
	}), define("bull", ["bull/main"], function (e) {return e}), define("embed/data/config", ["require"], function (require) {
		var exports = {};
		return exports.staticDomain = "//sgoutong.baidu.com", exports.getServer = function (e, t) {
			var n = e.getWrap();
			return n = {configBox: n.config, siteObj: n.siteConfig, startTime: n.startTime}, n[t] || n
		}, exports.isAutoInvite = function () {
			var e = exports.getServer("configBox");
			return !!(e.inviteBox.autoInvite - 0)
		}, exports
	}), define("embed/data/bullConfig", ["require", "./config"], function (require) {
		return {
			package: "data", resource: {config: require("./config")}, injection: [{
				id: "data.config", method: {getServer: ["common.view"]}
			}]
		}
	}), define("im-lib/lang/isObject", [], function () {return function (e) {return "[object Object]" == Object.prototype.toString.call(e)}}), define("im-lib/lang/isArray", [], function () {return function (e) {return "[object Array]" == Object.prototype.toString.call(e)}}), define("im-lib/lang/extend", [], function () {
		return function (e, t) {
			for (var n in t)if (t.hasOwnProperty(n)) e[n] = t[n];
			return e
		}
	}), define("im-lib/lang/each", ["require", "./isArray"], function (require) {
		return function (e, t, n) {
			if (require("./isArray")(e)) {
				for (var i = e.length, o = 0; o < i; o++)if ("function" == typeof t) t.call(n, e[o], o, e)
			} else for (var r in e)if (e.hasOwnProperty(r)) t.call(n, r, e[r], e)
		}
	}), define("im-lib/lang", ["require", "./lang/isObject", "./lang/isArray", "./lang/extend", "./lang/each"], function (require) {
		var exports = {};
		return exports.isObject = require("./lang/isObject"), exports.isArray = require("./lang/isArray"), exports.extend = require("./lang/extend"), exports.each = require("./lang/each"), exports
	}), define("im-lib/json", [], function () {
		function e(e) {
			if (/["\\\x00-\x1f]/.test(e)) e = e.replace(/["\\\x00-\x1f]/g, function (e) {
				var t = r[e];
				if (t)return t; else return t = e.charCodeAt(), "\\u00" + Math.floor(t / 16).toString(16) + (t % 16).toString(16)
			});
			return '"' + e + '"'
		}

		function t(e) {
			var t, n, i, r = ["["], a = e.length;
			for (n = 0; n < a; n++)switch (i = e[n], typeof i) {
				case"undefined":
				case"function":
				case"unknown":
					break;
				default:
					if (t) r.push(",");
					r.push(o(i)), t = 1
			}
			return r.push("]"), r.join("")
		}

		function n(e) {return e < 10 ? "0" + e : e}

		function i(e) {return '"' + e.getFullYear() + "-" + n(e.getMonth() + 1) + "-" + n(e.getDate()) + "T" + n(e.getHours()) + ":" + n(e.getMinutes()) + ":" + n(e.getSeconds()) + '"'}

		function o(n) {
			switch (typeof n) {
				case"undefined":
					return "undefined";
				case"number":
					return isFinite(n) ? String(n) : "null";
				case"string":
					return e(n);
				case"boolean":
					return String(n);
				default:
					if (null === n)return "null"; else if (n instanceof Array)return t(n); else if (n instanceof Date)return i(n); else {
						var r, a, s = ["{"], c = o;
						for (var d in n)if (Object.prototype.hasOwnProperty.call(n, d))switch (a = n[d], typeof a) {
							case"undefined":
							case"unknown":
							case"function":
								break;
							default:
								if (r) s.push(",");
								r = 1, s.push(c(d) + ":" + c(a))
						}
						return s.push("}"), s.join("")
					}
			}
		}

		var exports = {};
		exports.parse = function (e) {if (window.JSON && JSON.parse)return JSON.parse(e); else return new Function("return (" + e + ")")()}, exports.stringify = function (e) {if (window.JSON && JSON.stringify)return JSON.stringify(e); else return o(e)};
		var r = {"\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\"};
		return exports
	}), define("im-lib/net", [], function () {
		function e() {
			if (window.ActiveXObject)try {
				return new ActiveXObject("Msxml2.XMLHTTP")
			} catch (e) {
				try {
					return new ActiveXObject("Microsoft.XMLHTTP")
				} catch (e) {
				}
			}
			if (window.XMLHttpRequest)return new XMLHttpRequest
		}

		var exports = {};
		return exports.imgRequest = function (e) {
			var t = document.createElement("img");
			t.src = e
		}, exports.jsonp = function (e, t) {
			function n() {return (new Date).getTime()}

			function i() {return Math.random().toString().substr(2)}

			function o(e) {
				if (e) {
					var t = e.parentNode;
					if (t && 11 !== t.nodeType) t.removeChild(e)
				}
			}

			function r(e) {
				var t = "";
				if ("string" == typeof e) t = e; else if ("object" == typeof e)for (var i in e)if (e.hasOwnProperty(i)) t += "&" + i + "=" + encodeURIComponent(e[i]);
				return t += "&_time=" + n(), t = t.substr(1)
			}

			function a(e, a, s, c) {
				var d, u = (a.op, a.l);
				a = null, e = e + (e.indexOf("?") === -1 ? "?" : "&") + r(a);
				var l = /callback=(\w+)/.exec(e);
				if (l && l[1]) d = l[1]; else d = "jsonp_bridge_" + n() + "_" + i(), e = e.replace("?", "?" + t.key + "=" + d + "&");
				var f = document.createElement("script");
				f.type = "text/javascript", f.src = e, f.id = "id_" + d, f.charset = "utf-8";
				var p = !0, m = null;
				if (window[d] = function (e) {
						clearTimeout(m), window[d] = void 0;
						var t = document.getElementById("id_" + d);
						setTimeout(function () {o(t)}, 0), s(e), p = !1
					}, "onerror" in f) f.onerror = function () {c && c(), o(f)}, p = !1;
				var g = 1e4;
				if (1 === u) g += 2e4;
				m     = setTimeout(function () {if (p) c && c(), o(f)}, g);
				var h = document.getElementsByTagName("head")[0];
				if (h) setTimeout(function () {h.appendChild(f)}, 0)
			}

			a(e, t, t.success, t.failure)
		}, exports.request = function (t, n) {
			var i = e();
			return i.open(n.method || "GET", t), i.onreadystatechange = function () {
				if (4 === i.readyState)if (i.status >= 200 && i.status < 300 || 304 === i.status) {
					if (n.success) n.success(i.responseText)
				} else if (n.failure) n.failure()
			}, i.send(n.data), i
		}, exports.upload = function (e, t, n, i, o) {
			function r() {i(), l.onload = function () {}, l.parentNode.removeChild(l)}

			function a() {o(), l.onerror = function () {}, l.parentNode.removeChild(l)}

			if ("/" === e.charAt(0) && !/^\/\//.test(e)) e = location.protocol + "//" + location.host + e;
			if ("[object String]" === Object.prototype.toString.call(t)) {
				var s = t;
				clouda.device.fs.post(s, e, {
					onsuccess: function (e) {if (i) i(e)}, onfail: function () {if (o) o()}, uploadKey: n, param: {}
				})
			} else if (t.nodeName) {
				var c       = "upload_iframe" + parseInt(1e4 * Math.random(), 10), d = '<iframe id="' + c + '" name="' + c + '" width="0" height="0" border="0" style="width: 0; height: 0; border: none;">', u = document.createElement("div");
				u.innerHTML = d;
				var l       = u.getElementsByTagName("iframe")[0];
				if (document.body.appendChild(l), t.setAttribute("target", c), t.setAttribute("action", e), t.setAttribute("method", "post"), t.setAttribute("enctype", "multipart/form-data"), t.setAttribute("encoding", "multipart/form-data"), l.attachEvent) l.attachEvent("onload", r), l.attachEvent("onerror", a); else l.onload = r, l.onerror = a;
				t.submit()
			} else if (window.FormData) {
				var f = new FormData;
				f.append(n, t), exports.request(e, {success: i, failure: o, data: f, method: "post"})
			}
		}, exports
	}), define("im-lib/util", [], function () {
		var exports = {}, e = "0123456789ABCDEF";
		return exports.uuid = function () {
			for (var t = [], n = 0; n < 32; n++)t[n] = e.substr(Math.floor(16 * Math.random()), 1);
			t[12] = "4", t[16] = e.substr(3 & t[16] | 8, 1);
			var i = t.join("").toLowerCase();
			return i = i.toLowerCase(), i = i.replace(/^(\w{8})(\w{4})(\w{4})(\w{4})(\w{12})$/, "$1-$2-$3-$4-$5")
		}, exports.decodeHTML = function (e) {return e = e || "", e.replace("&lt;", "<").replace("&gt;", ">").replace("&amp;", "&").replace("&quot;", '"').replace("&nbsp;", " ")}, exports.encodeHTML = function (e) {return e = e || "", e.replace(/</g, "&lt").replace(/>/g, "&gt").replace(/&/g, "&amp").replace(/"/g, "&quot").replace(/ /g, "&nbsp")}, exports.getText = function (e) {
			var t = "";
			if (3 === e.nodeType || 4 === e.nodeType) t += exports.decodeHTML(e.nodeValue); else if ("IMG" === e.tagName)if (e.getAttribute("data-face-id"))return "[" + e.getAttribute("data-face-text") + "]"; else return "[\u56fe\u7247]"; else if (8 !== e.nodeType)for (var n = 0; n < e.childNodes.length; n++)t += exports.getText(e.childNodes[n]);
			return t
		}, exports
	}), define("im-lib/Emitter", [], function () {
		function e() {}

		var t = e.prototype;
		return t._getEvents = function () {
			if (!this._events) this._events = {};
			return this._events
		}, t._getMaxListeners = function () {
			if (isNaN(this.maxListeners)) this.maxListeners = 10;
			return this.maxListeners
		}, t.on = function (e, t) {
			var n = this._getEvents(), i = this._getMaxListeners();
			n[e]  = n[e] || [];
			var o = n[e].length;
			if (o >= i && 0 !== i)throw new RangeError("Warning: possible Emitter memory leak detected. " + o + " listeners added.");
			return n[e].push(t), this
		}, t.once = function (e, t) {
			function n() {i.off(e, n), t.apply(this, arguments)}

			var i = this;
			return n.listener = t, this.on(e, n), this
		}, t.off = function (e, t) {
			var n = this._getEvents();
			if (0 === arguments.length)return this._events = {}, this;
			var i = n[e];
			if (!i)return this;
			if (1 === arguments.length)return delete n[e], this;
			for (var o, r = 0; r < i.length; r++)if (o = i[r], o === t || o.listener === t) {
				i.splice(r, 1);
				break
			}
			return this
		}, t.emit = function (e) {
			var t = this._getEvents(), n = t[e], i = Array.prototype.slice.call(arguments, 1);
			if (n) {
				n = n.slice(0);
				for (var o = 0, r = n.length; o < r; o++)n[o].apply(this, i)
			}
			return this
		}, t.listeners = function (e) {
			var t = this._getEvents();
			return t[e] || []
		}, t.setMaxListeners = function (e) {return this.maxListeners = e, this}, e.mixin = function (t) {
			for (var n in e.prototype)t[n] = e.prototype[n];
			return t
		}, e
	}), define("im-lib/userData", [], function () {
		function e(e) {return e.replace(o, "___")}

		function t() {}

		function n() {
			if (!i)try {
				return i = document.createElement("input"), i.type = "hidden", i.addBehavior("#default#userData"), document.body.appendChild(i), !0
			} catch (e) {
				return i = {load: t, save: t, getAttribute: t, setAttribute: t, removeAttribute: t}, !1
			}
			return !0
		}

		var exports = {}, i = null, o = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"), r = 365, a = location.hostname + "_bridge_im";
		return exports.setItem = function (t, o) {
			if (n()) {
				t     = e(t);
				var s = new Date;
				s.setDate(s.getDate() + r), i.expires = s.toUTCString(), i.load(a), i.setAttribute(t, o), i.save(a)
			}
		}, exports.getItem = function (t) {if (!n())return ""; else return t = e(t), i.load(a), i.getAttribute(t)}, exports.removeItem = function () {if (n()) key = e(key), i.load(a), i.removeAttribute(key), i.save(a)}, exports.clear = function () {
			var e = new Date;
			e.setDate(e.getDate() - 1), i.expires = e.toUTCString()
		}, exports
	}), define("im-lib/localStorage", ["require", "./userData"], function (require) {
		var e, exports = {};
		try {
			e = window.localStorage || require("./userData")
		} catch (t) {
			e = require("./userData")
		}
		return exports.setItem = function (t, n) {
			try {
				e.setItem(t, n)
			} catch (e) {
			}
		}, exports.getItem = function (t) {return e.getItem(t)}, exports.removeItem = function (t) {e.removeItem(t)}, exports.clear = function () {e.clear()}, exports
	}), define("im-lib/main", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage"], function (require) {
		return {
			lang   : require("./lang"), json: require("./json"), net: require("./net"), util: require("./util"),
			Emitter: require("./Emitter"), localStorage: require("./localStorage")
		}
	}), define("im-lib", ["im-lib/main"], function (e) {return e}), define("im-core/main", ["require", "im-lib", "im-lib/Emitter", "bull", "./bullConfig"], function (require) {
		function e(module, e, t) {
			module.on(e, function () {
				var n = Array.prototype.slice.call(arguments);
				n.unshift(t || e), exports.emit.apply(exports, n)
			})
		}

		var t = require("im-lib"), n = require("im-lib/Emitter"), exports = {};
		return n.mixin(exports), exports.messageHandler = function (e, n) {
			var i = n.adata && t.json.parse(n.adata) || {}, o = i.nickname || e.sinfo.nickname || n.from, r = 1e3 * n.time;
			exports.decode(n, function (e) {exports.emit("message", e, o, r, n.msgHandlerType || "")})
		}, exports.decode = function (e, t) {}, exports.init = function (e) {
			var t = require("bull"), n = require("./bullConfig");
			t.init(n), exports.initCore(e)
		}, exports.initCore = function (t, n, i, o, r) {
			i.extend(exports, o), exports.addPlugin(), i.extend(n, r || {}), n.anonym = n.bid ? 0 : 1, t.on("message", exports.messageHandler);
			var a = ["error", "reconnect", "connected", "disconnect", "offline", "csoffline", "invitefail", "queueing", "otherwebimalive", "fetchhistorysuccess", "fetchhistoryfail", "fetchhistoryfinish", "visitorblock", "autoendtalk", "currentIR", "showMsgRemind", "csonline", "transferError", "fininshIR", "updateNewCSR", "visitorTransfer", "unknownMsg"];
			i.each(a, function (n) {e(t, n)})
		}, exports.addPlugin = function () {for (var e = 0; e < arguments.length; e++)exports.plugin(arguments[e])}, exports.connect = function (e, t, n, i, o) {
			function r(t) {
				if (t.invited) t.status = 3;
				switch (t.status) {
					case 0:
					case 1:
						e.connect(i, o);
						break;
					case 2:
						e.connect(i, o);
						break;
					case 3:
						if (o.invited || t.invited) t.invited = 1, t.from = o.from, e.connect(i, t); else t.reason = "talk to other", e.disconnect(t), e.setStopPick(!1), e.pick();
						break;
					case 4:
						e.connect(i, o);
						break;
					default:
						e.connect(i, o)
				}
			}

			if (exports.emit("startconnect"), n.isLogin()) r(t); else n.login(r, function () {exports.emit("error", {type: "init"})}, function () {exports.emit("visitorblock")})
		}, exports.auth = function (e, t, n) {if (e.isLogin()); else e.login(function () {exports.emit("connected")}, function () {exports.emit("error", {type: "init"})})}, exports.send = function (e, t, n, i) {
			function o() {exports.emit("sendfinish", n), exports.emit("sendsuccess", n)}

			function r() {exports.emit("sendfail", n)}

			if (exports.emit("trysendmsg"), !e.isConnected())return exports.emit("sendfail", n), !1; else return t.encode(n, function (t) {t.adata = i, e.send(t, o, r)}, r), !0
		}, exports.preSend = function (e, t, n) {
			if (!e.isConnected())return !1; else return void e.preSend({
				mtype: 0, content: n.text
			})
		}, exports.disconnect = function (e, t, n, i) {
			if (exports.emit("sessioncut"), i !== !1) e.disconnect();
			if (n !== !1) t.logout()
		}, exports.plugin = function (e, t) {
			if (t.encoder) e.addEncoder(t.encoder);
			if (t.decoder) e.addDecoder(t.decoder);
			if (t.emit) t.emit = function () {
				var e = Array.prototype.slice.call(arguments);
				exports.emit.apply(exports, e)
			}
		}, exports.get = function (e, t) {return e.get(t)}, exports.isConnected = function (e) {return e.isConnected()}, exports.sendOfflineMsg = function (e, t, n, i) {
			function o() {exports.emit("sendofflinemsgfinish", n), exports.emit("sendofflinemsgsuccess", n)}

			function r() {exports.emit("sendofflinemsgfail", n)}

			if (e.isConnected())return exports.emit("sendofflinemsgfail", n), !1; else return t.encode(n, function (t) {t.adata = i, e.send(t, o, r)}, r), !0
		}, exports.fetchHistory = function (e, t) {e.fetchHistory(t)}, exports
	}), define("im-core", ["im-core/main"], function (e) {return e}), define("im-core/plugin/fileTransfer", ["require", "../main"], function (require) {
		var e           = 1, exports = {};
		exports.encoder = {};
		var t           = exports.encoder;
		t.fileAccept = function (t, n) {
			n({
				mtype: e, content: {
					type: "file", data: {bcsName: t.bcsName, name: t.name, size: t.size, type: "accept"}
				}
			})
		}, t.fileVUpload = function (t, n) {
			n({
				mtype: e, content: {
					type: "file", msgInfo: t.msgInfo,
					data: {status: t.status, bcsName: t.bcsName, name: t.name, size: t.size, type: "vUpload"}
				}
			})
		}, t.fileVDownLoad = function (t, n) {
			n({
				mtype: e, content: {
					type: "file", data: {status: t.status, bcsName: t.bcsName, name: t.name, type: "vDownLoad"}
				}
			})
		}, t.fileVCancelSend = function (t, n) {
			n({
				mtype: e, content: {
					type: "file", data: {bcsName: t.bcsName, name: t.name, type: "vCancelSend"}
				}
			})
		}, exports.decoder = {};
		var n = require("../main");
		return exports.decoder.fileTransfer = function (e, t) {
			e     = e || {};
			var i = e.content || {}, o = i.data || {}, r = i.msgInfo || {}, a = {
				bcsName: o.bcsName, name: o.name
			}, s  = "";
			switch (o.type) {
				case"accept":
					s = "fileAccept", a.status = o.status;
					break;
				case"sDownLoad":
					s = "fileSDownLoad", a.status = o.status;
					break;
				case"sUpLoad":
					s = "fileSUpload", a.size = o.size;
					break;
				case"vCancelSend":
					s = "vCancelSend";
					break;
				case"vDownLoad":
					s = "vDownLoad", a.status = o.status;
					break;
				case"vUpload":
					s = "vUpload"
			}
			n.emit(s, a, r, e.msgHandlerType || "")
		}, exports
	}), define("im-core/const", [], function () {
		var exports = {};
		return exports.PLATFORM_PC = 0, exports.PLATFORM_MOBILE = 1, exports.SERVER_TIEXIN = 1, exports.SERVER_DUZHAN = 2, exports.SERVER_QIAO = 3, exports.AUTH_TYPE_LOCAL = 0, exports.AUTH_TYPE_QIAO = 4, exports.AUTH_TYPE_DUZHAN = 5, exports.CHAT_TYPE_USER = 0, exports.CHAT_TYPE_GROUP = 1, exports.CHAT_TYPE_IR = 4, exports.PUSH_TYPE_BYE = 2, exports.PUSH_TYPE_CHAT = 3, exports.PUSH_TYPE_OFFLINE = 4, exports.PUSH_TYPE_FETCH_HISTORY = 5, exports.PUSH_TYPE_PRE_SEND = 6, exports.PUSH_TYPE_FETCH_SESSION_MESSAGE = 7, exports.PUSH_TYPE_MSG_SYNC = 9, exports.CHART_START_TYPE = "vsturl:u", exports
	}), define("im-core/config", ["require", "./const"], function (require) {
		var e = require("./const");
		return {
			bid         : "", siteid: "", eid: "", crossDomain: !1, platform: e.PLATFORM_PC, server: e.SERVER_QIAO,
			authType    : e.AUTH_TYPE_QIAO, authToken: "bridge", urlRoot: "/", sid: "-100", tid: "-1", fromType: 1,
			ttype       : 1,
			reasons     : ["vstreq:u", "vstsys:u", "vstwtr:u", "vsturl:u", "vstwtr:f", "vstreq:f", "vstsys:f"],
			isPageOnload: !0, isSessionConnected: !1
		}
	}), define("im-core/plugin/unknownMsg", ["require", "im-lib", "../config", "im-core"], function (require) {
		function e(e, t) {
			t({
				content : {
					content: {
						data: e.content, msgInfo: e.msgInfo || {}, type: e.msgType || ""
					}, type: a
				}, mtype: r
			})
		}

		function t(e, t) {
			e     = e || {};
			var a = e.content || {}, s = a.content;
			if (a.mtype === o || a.mtype === r)try {
				s = n.json.parse(a.content), s.msgInfo = s.msgInfo || {};
				var d      = e.adata && n.json.parse(e.adata) || {};
				s.nickname = d.nickname || c
			} catch (e) {
				s = a.content
			}
			s.role = e.from === i.bid ? 0 : 1, require("im-core").emit("unknownMsg", s)
		}

		var exports = {}, n = require("im-lib"), i = require("../config"), o = 1, r = 4, a = "unable message", s = "unable message", c = "\u5bf9\u65b9";
		return exports.encoder = {}, exports.encoder[a] = e, exports.decoder = {}, exports.decoder[s] = t, exports
	}), define("im-core/net", ["require", "im-lib"], function (require) {
		function e() {}

		var exports = {}, t = require("im-lib").Emitter;
		t.mixin(exports);
		var n = "POST";
		return exports.jsonToQuery = function (e, t, n) {
			var i = [];
			return t.each(n, function (n, o) {
				if (t.isObject(o)) o = e.stringify(o);
				if ("number" != typeof o) o = encodeURIComponent(o);
				i.push(n + "=" + o)
			}), i.join("&")
		}, exports.request = function (t, i, o, r, a, s, c) {
			var d     = t.urlRoot + a;
			s         = s || {};
			var u     = s.failure || e, l = s.success || e;
			s.success = function (e) {
				try {
					if (Object.prototype.toString.call(e).indexOf("String") !== -1) e = r.parse(e)
				} catch (e) {
					return void u()
				}
				if (i.set("sn", e.n_sn), !e.status || 2 === e.status) exports.emit("response", a, e.body || e), l(e.body || e); else exports.emit("auth invalid"), u(e)
			};
			var f     = s.data || {};
			if (exports.emit("request", a, f), f.v = t.bid, f.s = t.siteid, f.e = t.eid, f.dev = t.platform, f.auth = i.get(), s.data = null, t.crossDomain) {
				if (d += d.indexOf("?") >= 0 ? "&" : "?", d += exports.jsonToQuery(f), s.type = f.type, s.key = "cb", s.op = f.op, s.l = f.l, 2 === f.type && "chat/push" === a && !l && !u || 3 === f.op && "site/auth" === a && !l && !u || 1 === f.op && "site/st" === a && !l && !u) {
					var p = document.createElement("img");
					return void(p.src = d)
				}
				if ("imgCross" === c) o.imgRequest(d); else o.jsonp(d, s)
			} else {
				if (s.method = s.method || "POST", s.method === n) s.data = r.stringify(f), d = d + "?v=" + f.v; else d += d.indexOf("?") >= 0 ? "&" : "?", d += exports.jsonToQuery(f), d += "&v=" + f.v;
				if (s.setCookie) d = d + "&s=" + f.s, d = d + "&t=" + s.setCookie;
				o.request(d, s)
			}
		}, exports.auth = function (e, t, n, i) {
			var o;
			if (0 === e.visitType) o = t ? 0 : 1; else o = t ? 2 : 3;
			var r, a = {success: n, failure: i, data: {op: o, dev: e.platform, ser: e.server}};
			if (!t) a.method = "GET", r = "imgCross";
			exports.request("site/auth", a, r)
		}, exports.poll = function (e, t, n) {
			var i = {success: t, failure: n, data: {l: e ? 1 : 0}};
			exports.request("site/poll", i)
		}, exports.site = function (e, t, n, i) {
			var o, r = {
				success: n, failure: i, data: {op: e ? 0 : 1, s_info: t, url: location.href}
			};
			if (!e) r.method = "GET", o = "imgCross";
			exports.request("site/st", r, o)
		}, exports.chat = function (e, t, n) {
			var i = {success: t, failure: n, data: e};
			exports.request("chat/st", i)
		}, exports.pick = function (e, t, n, i) {
			var o = {success: n, failure: i, data: {l: 1, sid: t || ""}};
			if (e.isPageOnload || !e.isSessionConnected) exports.request("chat/poll", o); else o.data.l = 0, setTimeout(function () {exports.request("chat/poll", o)}, 3e3)
		}, exports.push = function (e, t, n) {
			var i = {success: t, failure: n, data: e || {}};
			if (2 === e.type) i.method = "GET";
			exports.request("chat/push", i)
		}, exports.node = function (e, t, n) {
			var i = {success: t, failure: n, data: e || {}};
			exports.request("bookmanage/saveBook.action", i)
		}, exports.upload = function (e, t, n, i, o, r) {t.upload(e.urlRoot + n, i, "file", o, r)}, exports.getUploadUrl = function (e, t, n, i) {return i = i || t.uuid(), e.urlRoot + "wupload/" + i + "/" + n.get("sid")}, exports.getDownloadUrl = function (e, t, n, i, o) {return i = i || t.uuid(), o = o || i, e.urlRoot + "wdownload/" + i + "/" + n.get("sid") + "/" + i + "?response-content-disposition=attachment;filename=" + o}, exports.log = function (e, t, n) {
			var i = t + "/eye/log/js/stat.gif?";
			i += exports.jsonToQuery(n), e.imgRequest(i)
		}, exports
	}), define("im-core/chat", ["require", "im-lib", "./config", "./net"], function (require) {
		function e(e) {
			if (!e && h.connected) exports.emit("disconnect");
			h.stopPick = !0, h.connected = !1, h.sid = ""
		}

		function t() {if (!h.connected)if (h.csonline)if (!h.csonline || h.online) h.connected = !0, exports.emit("connected", {sid: h.sid}), p.each(h.msgPool, function (e) {exports.emit("message", e)}), h.msgPool = []}

		function n(t, n) {
			var i = {type: t};
			if (n) i.data = n;
			exports.emit("error", i), e()
		}

		function i(e, t) {
			if (!e.pickType) h.sid = e.sid, h.to = e.uid, h.authType = e.authtype, h.csonline = !0, h.ttype = e.ttype;
			if (t) m.sinfo = e.sinfo && l.json.parse(e.sinfo) || {}
		}

		function o() {I = {ifIR: !1, count: 0, id: null}}

		function r(e) {
			var t = {}, n = e.length - 1;
			return p.each(e, function (i, o) {
				var r = i.content.bcsName;
				if ("img" === i.content.type && !t[r]) {
					if (o >= n)return P.push(e[n]), e;
					p.each(e, function (n, i) {
						if ("string" == typeof n.content) {
							var a       = document.createElement("div");
							a.innerHTML = n.content;
							var s       = a.getElementsByTagName("img")[0];
							if (s && s.tagName && "IMG" === s.tagName.toUpperCase() && s.id === r) {
								var c = e.splice(o, 1);
								e.splice(i, 0, c[0]), t[r] = 1
							}
						}
					})
				}
			}), e
		}

		function a(e) {
			var t;
			if (e && 1 === e.status && "auth invalid" === e.errinfo) n("offline"), t = !0;
			return t
		}

		function s(e) {
			if (O = 0, A) A = !1, exports.emit("reconnect");
			if (exports.isConnected()) {
				var t = h.options.siteid;
				if (t) l.localStorage.setItem("ACTIVE_" + t, +new Date)
			}
			p.each(e, function (e) {
				var t = e.type, n = k[t];
				if (n) n(e.msg)
			}), d()
		}

		function c(e) {
			if (O++, O > L && !A) A = !0, exports.emit("offline");
			if (!a(e)) setTimeout(function () {d()}, 3e3)
		}

		function d() {if (!h.stopPick) setTimeout(function () {g.pick(h.sid, s, c)}, 0)}

		var u, l = require("im-lib"), f = l.Emitter, p = l.lang, m = require("./config"), g = require("./net"), h = {
			connected: !1, stopPick: !1, csonline: !1, msgPool: []
		}, v     = {INVITE: 18, ACCEPT: 20, BYE: 28}, b = {
			OVER: 4, TAKE_OVER: 3, TRANSFER: 6, RECEIVE: 2
		}, y     = "blocked", E = "auto", T = {SUCCESS: 0, FAILURE: 1}, w = {
			QUEUEING: 2, TALKING: 4
		}, S     = 10, I = {ifIR: !1, count: 1, id: null}, x = {CSR: 0, GROUP: 1, IR: 4}, C = {
			READY: 0, BUSY: 1, LEAVE: 2, UNLOGIN: 3
		}, _     = {TRANSFER: 0, CONVERSATION: 1}, N = {
			COUNT: 0, LIST: 1, MSG_SYNC: 0, END_TIME: 0, PAGE: 20, DEFAULT: 5, DELAY: 2e3
		}, P     = [], exports = {};
		f.mixin(exports), g.on("auth invalid", function () {h.stopPick = !0});
		var k = {};
		k[100] = function (e) {
			if (e.op === v.ACCEPT)if (e.st === T.SUCCESS) N.END_TIME = e.systime || 0, h.sid = e.sid, h.to = e.uid, h.authType = e.authtype, h.csonline = !0, h.online = !0, m.sinfo = e.sinfo && l.json.parse(e.sinfo) || {}, exports.fetchOfflineMsg(), N.MSG_SYNC = e.systime || 0; else exports.bye();
			if (e.op === v.BYE)if (e.st === T.SUCCESS) {
				var t = h.options || {};
				if ("talk to other" === e.reason) h.stopPick = !1, t.invited = 0, t.tid = m.tid, t.ttype = 1, t.sid = "", t.from = 5, exports.connect(t.ttype, t, !1)
			} else exports.emit("invitefail");
			if (e.op === v.INVITE) {
				if (N.END_TIME = e.systime || 0, "queue" === e.reason)return;
				if (e.ttype === x.IR) I.ifIR = !0, I.id = e.uid, exports.emit("currentIR");
				if ("re_invite" === e.reason && m.status === w.QUEUEING)return void exports.emit("queueing");
				if ("re_invite" === e.reason) {
					if (m.sinfo = e.sinfo && l.json.parse(e.sinfo) || {}, h.sid = e.sid, h.to = e.uid, h.authType = e.authtype, h.tid = m.tid || "", h.ttype = e.ttype, h.csonline = !0, h.online = !0, m.syncSessionHistory) exports.fetchSessionMessage();
					return void exports.fetchOfflineMsg()
				}
				if (e.st === T.SUCCESS) h.sid = e.sid, h.to = e.uid, h.authType = e.authtype, h.csonline = !0, h.ttype = e.ttype, m.sinfo = e.sinfo && l.json.parse(e.sinfo) || {}; else {
					var n = l.json.parse(e.adata || "{}");
					return h.to = n.uid || "-1", h.authType = e.authtype, h.csonline = !1, exports.emit("csoffline"), void exports.fetchOfflineMsg()
				}
				exports.fetchOfflineMsg()
			}
		}, k[101] = function (t) {
			if (t.msgHandlerType = t.msgHandlerType || "", t.opr === b.OVER)if (t.reason && t.reason.indexOf(y) !== -1) exports.emit("visitorblock", t), e(); else if (t.reason && t.reason.indexOf(E) !== -1) exports.emit("autoendtalk", t), e(); else n("forceover"); else if (t.opr === b.TAKE_OVER)if (i(t, !0), I.ifIR) o(), exports.emit("fininshIR", {type: "invite"}); else exports.emit("updateNewCSR", m.sinfo); else if (t.opr === b.TRANSFER)if (i(t, !0), I.ifIR) o(), exports.emit("fininshIR", {type: "online"}); else exports.emit("updateNewCSR", m.sinfo); else if (t.opr === b.RECEIVE) {
				var r = t.detail || {};
				if (r.join_action === _.TRANSFER) {
					var a = !1, s = t.adata && l.json.parse(t.adata) || {}, c = s.transfer || {}, d = t.sinfo && l.json.parse(t.sinfo) || {};
					if (c.status) a = !0, exports.emit("visitorTransfer", {nickname: d.nickname || ""}, t.msgHandlerType);
					i(t, a)
				}
			}
		}, k[103] = function (e) {
			if (h.connected) {
				if (exports.emit("message", e), I.ifIR && e.from === I.id && I.count)if (++I.count >= 5) exports.emit("showMsgRemind", I.count), I.count = 0
			} else h.msgPool.push(e)
		}, k[104] = function (e) {
			if (m.status = e.status, e.status === w.QUEUEING) h.sid = e.sid, h.queueing = !0, exports.emit("queueing");
			if (e.status === w.TALKING)if (h.queueing = !1, h.sid = e.sid, h.online = !0, t(), I.ifIR)if ("" !== e.reason) exports.emit("transferError", e)
		}, k[105] = function (e) {
			if (u) clearTimeout(u), u = null;
			var t = e.detail || [];
			if (e.type === N.COUNT) {
				var n = 0;
				if (p.each(t, function (e, t) {n += e.count}), n < N.DEFAULT) n = N.DEFAULT;
				if (n > N.PAGE) n = N.PAGE;
				exports.fetchHistory({count: n})
			} else if (e.type === N.LIST) {
				var i = t.length;
				if (t[0]) N.MSG_SYNC = t[0].systime || N.MSG_SYNC;
				if (t[i - 1]) N.END_TIME = t[i - 1].systime || N.END_TIME;
				t = P.concat(t), P = [], t = r(t), p.each(t, function (e, t) {e.msgHandlerType = "insertBefore", exports.emit("message", e)}), exports.fetchHisFinish(!0, e)
			}
		}, k[106] = function (e) {h.sid = e.sid, h.to = e.uid, h.authType = e.authtype, h.csonline = !0, m.sinfo = e.sinfo && l.json.parse(e.sinfo) || {}, exports.fetchOfflineMsg()}, k[107] = function (e) {
			if (e.webmsg) {
				var t = l.json.parse(e.webmsg);
				t.body.reverse(), p.each(t.body, function (e) {
					var t = e.msg;
					t.msgHandlerType = "insertBefore", t.time = parseInt(+t.time / 1e3, 10);
					var n = e.msg.content;
					if (l.lang.isArray(n)) p.each(n, function (e) {
						var n = e.pickType;
						if (n) {
							var i = k[n];
							if (e.msgHandlerType = "insertBefore", i) i(e)
						} else t.content = e.content || e, t.mtype = e.mtype || 0, exports.emit("message", t)
					})
				})
			}
		}, k[108] = function (e) {if (I.ifIR && e.status === C.READY) exports.emit("csonline", e, "IR"); else if (!h.connected && e.status === C.READY) exports.emit("csonline", e, "OFFLINE_MSG")}, exports.receiveOfflineMsg = function (e) {
			var t = {
				sid: "", tid: h.tid, type: e.PUSH_TYPE_MSG_SYNC, tid_authtype: m.authType, param: {systime: N.MSG_SYNC}
			};
			g.push(t, null, null)
		}, exports.fetchHisFinish = function (e, n) {
			if (n = n || {}, e) exports.receiveOfflineMsg(), exports.emit("fetchhistorysuccess"); else exports.emit("fetchhistoryfail");
			exports.emit("fetchhistoryfinish", n), t()
		}, exports.fetchHistory = function (e, t) {
			t     = t || {};
			var n = m.offlineMsgGetType || 0, i = n ? "" : h.sid, o = n ? "-1" : h.tid, r = n ? m.bid : h.to, a = {
				sid: i, tid: o, type: e.PUSH_TYPE_FETCH_HISTORY, tid_authtype: m.authType, param: {
					type   : 1, gettype: n, from: r, max_count: t.count || S, from_authtype: h.authType,
					endtime: N.END_TIME
				}
			};
			g.push(a, null, exports.fetchHisFinish)
		}, exports.fetchSessionMessage = function (e) {
			var t = h.tid || "", n = t, i = "";
			if (t.indexOf(":")) {
				var o = t.split(":");
				n = o[0], i = o[1] || ""
			}
			var r = l.json.stringify({tag: 1, type: 2, userId: n - 0, subId: i - 0, bid: m.bid}), a = {
				sid  : h.sid, tid: h.tid, type: e.PUSH_TYPE_FETCH_SESSION_MESSAGE, tid_authtype: m.authType,
				param: {webmsg: r}
			};
			g.push(a)
		}, exports.bye = function (e) {
			var t = {
				sid  : h.options.sid, tid: h.tid, type: e.PUSH_TYPE_BYE, tid_authtype: m.authType,
				param: {reason: "bye for invite error"}
			};
			g.push(t)
		};
		var O = 0, A = !1, L = 3;
		return exports.pick = d, exports.connect = function (e, t, i, o) {
			i = i || {}, h.tid = i.tid || "", h.options = i;
			var r = {
				op    : 0, sid: i.sid || "", tid: h.tid, tid_authtype: m.authType, invited: i.invited - 0 ? 1 : 0,
				rtype : i.route || 0, ttype: t, inviterefer: document.referrer, sp_refer: i.sp_refer || "",
				reason: m.reasons[i.from] || e.CHART_START_TYPE
			};
			g.chat(r, function () {if (o !== !1) h.stopPick = !1, d()}, function () {n("connect")})
		}, exports.talking = function (e, n) {
			if (n = n || {}, e = e || {}, m.sinfo = e.sinfo && l.json.parse(e.sinfo) || {}, h.sid = e.sid, h.to = n.tid, h.authType = e.authtype, h.csonline = !0, h.online = !0, h.tid = e.tid || "", h.options = n, h.stopPick = !1, m.syncSessionHistory) exports.fetchSessionMessage();
			t(), d()
		}, exports.queue = function (e, t) {t = t || {}, e = e || {}, m.sinfo = e.sinfo && l.json.parse(e.sinfo) || {}, h.sid = e.sid, h.to = e.uid, h.authType = e.authtype, h.csonline = !0, h.tid = e.tid || "", h.options = t, h.stopPick = !1, exports.emit("queueing"), d()}, exports.preSend = function (e, t) {
			if (t.content) {
				t.mtype = 0, t.to = h.to, t.time = (new Date).getTime(), t.rtype = h.ttype;
				var n = {sid: h.sid || "", tid: h.to, type: e.PUSH_TYPE_PRE_SEND, tid_authtype: h.authType, param: t};
				g.push(n)
			}
		}, exports.send = function (e, t, n, i) {
			t.from = m.bid, t.to = h.to, t.time = (new Date).getTime(), t.rtype = h.ttype;
			var o = {
				sid         : h.sid || "", tid: h.to, type: h.csonline ? e.PUSH_TYPE_CHAT : e.PUSH_TYPE_OFFLINE,
				tid_authtype: h.authType, param: t
			};
			if (void 0 !== t.adata) o.adata = t.adata, delete t.adata;
			g.push(o, n, function (e) {if (a(e), i) i()})
		}, exports.disconnect = function (t, n, i) {
			t     = t || {};
			var o = void 0 === t.tid_authtype ? h.authType : t.tid_authtype;
			o = o || 4, g.push({
				type: 2, sid: t.sid || h.sid, tid: t.tid || h.to || -1, reason: t.reason || "", tid_authtype: o
			}, n, i), e(!0)
		}, exports.isConnected = function () {return h.connected}, exports.get = function (e) {return h[e]}, exports.setStopPick = function (e) {h.stopPick = e}, exports.fetchOfflineMsg = function (e) {
			if (m.syncFetchOfflineMsg) {
				var n = {
					sid  : "", tid: "-1", type: e.PUSH_TYPE_FETCH_HISTORY, tid_authtype: m.authType,
					param: {type: N.COUNT, from: h.to, from_authtype: h.authType}
				};
				g.push(n, null, exports.fetchHisFinish), u = setTimeout(function () {t()}, N.DELAY)
			} else t()
		}, exports
	}), define("im-core/plugin/img", ["require", "im-lib", "../chat", "../net", "im-core/chat", "../main"], function (require) {
		function e(e) {return e = e.split(l ? "\\" : "/"), e.pop()}

		function t(e) {return "wupload/" + e + "/" + a.get("sid")}

		function n(e, t) {
			var n = require("im-core/chat");
			return t = t || "a.jpg", "wdownload/" + e + "/" + n.get("sid") + "/" + t
		}

		function i(n, i) {
			var o = (e(n.path), n.bcsName), r = t(o);
			c[r]  = {msg: n, done: i};
			var a = '<img id="' + o + '" data-uploaded="0" data-bcsName="' + o + '"/>', l = {
				mtype: 0, content: a
			};
			i(l);
			var f = {mtype: u, content: {type: d, bcsName: o}}, p = require("../main");
			s.upload(r, n.form || n.path, function () {
				f.content.status = 0, i(f), p.emit("imgsendsuccess", {
					bcsName: o, id: n.mid
				})
			}, function () {f.content.status = 1, i(f), p.emit("imgsendfail", {bcsName: o, id: n.id})})
		}

		function o(e, t) {
			var i = e.content, o = i.bcsName, r = n(o, "img");
			t({type: d, bcsName: o, bcsUrl: r, status: i.status})
		}

		var r = require("im-lib").Emitter, a = require("../chat"), s = require("../net"), c = {}, d = "img", u = 1, l = / window nt/i.test(navigator.userAgent), exports = {};
		return r.mixin(exports), exports.encoder = {}, exports.encoder[d] = i, exports.decoder = {}, exports.decoder[d] = o, exports
	}), define("im-core/plugin/shake", ["require", "../main"], function (require) {
		function e(e, t) {
			t({
				mtype: i, content: {type: n}
			})
		}

		function t(e, t) {
			var n = require("../main");
			n.emit("shake", e.msgHandlerType || ""), t()
		}

		var exports = {}, n = "shake", i = 4;
		return exports.encoder = {}, exports.encoder[n] = e, exports.decoder = {}, exports.decoder[n] = t, exports
	}), define("im-core/plugin/text", ["require", "../chat", "../config", "im-core/chat"], function (require) {
		function e(e, t) {
			var n       = document.createElement("div");
			n.innerHTML = e.text || "";
			for (var i = n.getElementsByTagName("img"), o = i.length; o; o--) {
				var r = i[o - 1];
				if (r.getAttribute("data-bcsName")) {
					var s = document.createElement("img");
					s.setAttribute("data-bcsName", r.getAttribute("data-bcsName")), s.setAttribute("data-uploaded", r.getAttribute("data-uploaded")), s.id = r.id, r.id = "";
					var c = r.parentNode;
					c.insertBefore(s, r), c.removeChild(r)
				}
			}
			t({mtype: a, content: n.innerHTML.replace(/\r|\n/gi, "") || ""})
		}

		function t(e, t) {
			var n = require("im-core/chat");
			return t = t || "a.jpg", o.urlRoot = o.urlRoot || "", o.urlRoot + "wdownload/" + e + "/" + n.get("sid") + "/" + t
		}

		function n(e) {
			var n       = document.createElement("div");
			n.innerHTML = e;
			for (var i = n.getElementsByTagName("img"), o = 0; o < i.length; o++) {
				var r = i[o], a = r.getAttribute("data-bcsName"), s = r.getAttribute("data-bcsUrl");
				if (a && !s) s = t(a, a), r.setAttribute("data-bcsUrl", s)
			}
			return n.innerHTML
		}

		function i(e, t) {
			var i = (require("../chat"), n(e.content)), a = e.from === o.bid ? 0 : 1;
			t({type: r, role: a, time: 1e3 * e.time, text: i || ""})
		}

		var o = (require("../chat"), require("../config")), r = "text", a = 0, exports = {};
		return exports.encoder = {}, exports.encoder[r] = e, exports.decoder = {}, exports.decoder[a] = i, exports
	}), define("im-core/plugin/transfer", [], function () {
		function e(e, t) {t({mtype: i, content: {type: n}})}

		function t(e, t) {t()}

		var exports = {}, n = "transfer", i = 4;
		return exports.encoder = {}, exports.encoder[n] = e, exports.decoder = {}, exports.decoder[i] = t, exports
	}), define("im-core/plugin/uploaded", [], function () {
		function e(e, t) {
			t({
				mtype: i, content: {
					type: n, bcsName: e.bcsName, status: 0
				}
			})
		}

		function t(e, t) {t()}

		var exports = {}, n = "img", i = 1;
		return exports.encoder = {}, exports.encoder.uploaded = e, exports.decoder = {}, exports.decoder.uploaded = t, exports
	}), define("im-core/plugin/voice", ["require", "../config"], function (require) {
		function e(e, t) {
			t({
				mtype: o, content: e
			})
		}

		function t(e, t) {
			var o = e.content, s = e.from === n.bid ? 0 : 1;
			t({
				type    : i, role: s, text: r + o.text, bcsName: o.bcsName,
				fetchURL: a.replace(/#{bcsName}/g, o.bcsName), duration: o.duration, token: o.token
			})
		}

		var n = require("../config"), i = "voice", o = 2, r = "\u8bed\u97f3\u8f6c\u8bd1\uff1a", a = '//p.qiao.baidu.com/cps/audio/getAudio?reqParam={"audioName": "#{bcsName}"}', exports = {};
		return exports.encoder = {}, exports.encoder[i] = e, exports.decoder = {}, exports.decoder[i] = t, exports
	}), define("im-core/plugin/location", ["require", "../config"], function (require) {
		function e(e, t) {
			t({
				mtype: o, content: e
			})
		}

		function t(e, t) {
			var o = e.from === n.bid ? 0 : 1;
			e.content.type = i, e.content.role = o, e.content.text = r, t(e.content)
		}

		var n = require("../config"), i = "location", o = 4, r = "[\u5730\u7406\u4f4d\u7f6e]", exports = {};
		return exports.encoder = {}, exports.encoder[i] = e, exports.decoder = {}, exports.decoder[i] = t, exports
	}), define("im-core/plugin/config", ["require", "./fileTransfer", "./unknownMsg", "./img", "./shake", "./text", "./transfer", "./uploaded", "./voice", "./location"], function (require) {
		return {
			package: "coreplugin", resource: {
				fileTransfer: require("./fileTransfer"), unknownMsg: require("./unknownMsg"), img: require("./img"),
				shake       : require("./shake"), text: require("./text"), transfer: require("./transfer"),
				uploaded    : require("./uploaded"), voice: require("./voice"), location: require("./location")
			}
		}
	}), define("im-lib/config", ["require", "./lang", "./json", "./net", "./util", "./Emitter", "./localStorage", "./main"], function (require) {
		return {
			package: "imLib", resource: {
				lang   : require("./lang"), json: require("./json"), net: require("./net"), util: require("./util"),
				Emitter: require("./Emitter"), localStorage: require("./localStorage"), main: require("./main")
			}
		}
	}), define("im-core/auth", ["require"], function (require) {
		var e = {}, exports = {};
		return exports.get = function (t, n) {
			var i = {
				anonym: t.anonym, key: e.key || "", sn: e.sn || "", id: t.bid || "", from: t.authType,
				token : t.authToken || ""
			};
			if (n)return i[n]; else return i
		}, exports.set = function (t, n) {e[t] = n}, exports
	}), define("im-core/message", ["require"], function (require) {
		function e() {}

		function t(t, n) {return t = t || e, n = n || e, function (e) {if (e === !1) n(); else if (e) t(e)}}

		var n = 1, i = 2, o = 4, r = {}, a = {}, exports = {};
		return exports.encode = function (e, n, i) {
			var o = r[e.type];
			if (!o)throw e.type + " message not supported";
			o(e, t(n, i))
		}, exports.decode = function (e, r, s) {
			var c = e.mtype;
			if (c === n || c === o || c === i)if (e.content && e.content.type)if (c = e.content.type, "file" === c) c = "fileTransfer";
			var d = a[c];
			if (d) d(e, t(r, s)); else if (s) s()
		}, exports.addEncoder = function (e, t) {e.each(t, function (e, t) {r[e] = t})}, exports.addDecoder = function (e, t) {e.each(t, function (e, t) {a[e] = t})}, exports
	}), define("im-core/site", ["require"], function (require) {
		var exports = {};
		return exports.init = function (e, t, n) {t.extend(e, n || {}), e.anonym = e.bid ? 0 : 1}, exports.enter = function (e, t, n) {if (t = t || function () {}, n = n || function () {}, e.isLogin()) t(); else e.login(t, n)}, exports.leave = function (e) {if (e.isLogin()) e.logout()}, exports
	}), define("im-core/user", ["require", "./net"], function (require) {
		function e() {clearTimeout(n), n = null, i = !1}

		var exports = {}, t = require("./net");
		t.on("auth invalid", function () {e()});
		var n, i, o       = {INVITE: 1, AUTH: 2}, r = "blocked";
		exports.heartBeat = function (e) {
			function t() {n = setTimeout(exports.heartBeat, 15e3)}

			e.poll(!1, t, t)
		};
		var a             = {};
		return exports.refresh = function (e, t, n) {
			function o() {
				t.poll(r, function (t) {
					e.each(t, function (e) {
						var t = a[e.type + ""];
						if (t) t(e.msg)
					}), exports.refresh()
				}, function () {setTimeout(exports.refresh, 3e3)})
			}

			if (i) {
				var r = Boolean(n.isPageOnload);
				if (r) o(); else setTimeout(o, 3e3)
			}
		}, exports.pickHandler1 = function (e, t, n, i) {if ("invite" === i.reason) n.sid = i.sid, n.tid = i.uid, n.fromType = 2, n.ttype = 0, e.emit("initiative", i); else if ("chat" === i.reason) n.sid = i.sid, n.tid = i.uid, n.ttype = i.ttype, n.invited = 1, n.sinfo = i.sinfo && t.parse(i.sinfo) || {}, e.emit("forcetalk", i)}, exports.pickHandler104 = function (e, t, n) {t.status = n.status, e.emit("watchStatus", n)}, a[1] = function (e) {exports.pickHandler1(e)}, a[104] = function (e) {exports.pickHandler104(e)}, exports.getInfo = function (e) {
			function t() {
				var e = (new Date).getTimezoneOffset(), t = parseInt(e / 60, 10), n = e % 60, i = "-";
				if (t < 0 || n < 0)if (i = "+", t = -t, n < 0) n = -n;
				return t += "", n += "", "UTC" + i + t + ":" + n
			}

			var n = window.navigator, i = window.screen, o = {
				lang    : n.language || n.systemLanguage, cbit: i.colorDepth, rsl: i.width + "*" + i.height, tz: t(),
				referrer: encodeURIComponent(document.referrer)
			};
			return o
		}, exports.enter = function (e, t, n) {e.site(!0, exports.getInfo(), function () {exports.getEnterResult(t, n)}, n)}, exports.checkEnterResult = function (e, t, n, o, r) {
			var a = !1;
			return e.each(n, function (n) {
				if (100 === n.type) {
					var s = n.msg || {};
					if (3 === s.status && 0 === t.visitType) {
						var c = t.tid || "", d = t.sid || "";
						e.extend(t, s), t.tid = c, t.sid = d
					} else e.extend(t, s);
					if (a = !0, i = !0, 0 === t.visitType) exports.heartBeat(); else exports.refresh();
					o(n.msg)
				} else r()
			}), a
		}, exports.checkAuthResult = function (e, t, n, i, a, s) {
			var c = !1;
			return e.each(n, function (e) {
				if (e.type === o.AUTH) {
					if (c = !0, e = e.msg || {}, e.reason && e.reason.indexOf(r) !== -1)return void(s && s());
					if (e.valid) t.bid = e.v, exports.enter(i, a); else a()
				}
			}), c
		}, exports.getEnterResult = function (e, t, n) {e.poll(!0, function (e) {if (!exports.checkEnterResult(e, t, n)) exports.getEnterResult(t, n)}, n)}, exports.getAuthResult = function (e, t, n, i) {e.poll(!0, function (e) {if (!exports.checkAuthResult(e, t, n, i)) exports.getAuthResult(t, n, i)}, n)}, exports.isLogin = function () {return !!n || i}, exports.login = function (e, t, n, i, o, r) {if (!exports.isLogin()) e.auth(!0, function (e) {t.set("key", e.key), n.bid = e.v, exports.getAuthResult(i, o, r)}, o); else i()}, exports.logout = function (t) {e(), t.site(!1), t.auth(!1)}, exports
	}), define("im-core/log", ["require"], function (require) {
		var exports = {};
		return exports.send = function () {}, exports
	}), define("im-core/bullConfig", ["require", "./plugin/config", "im-lib/config", "./main", "./auth", "./config", "./const", "./chat", "./message", "./site", "./user", "./net", "./log"], function (require) {
		return {
			package     : "core", importConfig: [require("./plugin/config"), require("im-lib/config")], resource: {
				main  : require("./main"), auth: require("./auth"), config: require("./config"),
				consts: require("./const"), chat: require("./chat"), message: require("./message"),
				site  : require("./site"), user: require("./user"), net: require("./net"), log: require("./log")
			}, injection: [{
				id: "core.main", method: {
					initCore      : ["core.chat", "core.config", "imLib.lang", "core.consts"],
					connect       : ["core.chat", "core.config", "core.user"], auth: ["core.user"],
					send          : ["core.chat", "core.message"],
					addPlugin     : ["coreplugin.fileTransfer", "coreplugin.img", "coreplugin.unknownMsg", "coreplugin.shake", "coreplugin.text", "coreplugin.transfer", "coreplugin.uploaded", "coreplugin.voice", "coreplugin.location"],
					preSend       : ["core.chat", "core.message"], plugin: ["core.message"],
					disconnect    : ["core.chat", "core.user"], messageHandler: ["core.config"], get: ["core.chat"],
					bindEvent     : ["core.main", "communicate.handler"], isConnected: ["core.chat"],
					sendOfflineMsg: ["core.chat", "core.message"], fetchHistory: ["core.chat"]
				}
			}, {id: "core.auth", method: {get: ["core.config"]}}, {
				id: "core.chat", method: {
					fetchHistory   : ["core.consts"], connect: ["core.consts"], fetchSessionMessage: ["core.consts"],
					bye            : ["core.consts"], preSend: ["core.consts"], send: ["core.consts"],
					fetchOfflineMsg: ["core.consts"], receiveOfflineMsg: ["core.consts"]
				}
			}, {id: "core.message", method: {addEncoder: ["imLib.lang"], addDecoder: ["imLib.lang"]}}, {
				id: "core.net", method: {
					jsonToQuery   : ["imLib.json", "imLib.lang"],
					getUploadUrl  : ["core.config", "imLib.util", "core.main"],
					getDownloadUrl: ["core.config", "imLib.util", "core.main"],
					request       : ["core.config", "core.auth", "imLib.net", "imLib.json"], auth: ["core.config"],
					authOut       : ["core.user"], upload: ["core.config", "imLib.net"],
					initLog       : ["core.config", "data.config"], log: ["imLib.net"], pick: ["core.config"]
				}
			}, {
				id    : "core.site",
				method: {init: ["core.config", "imLib.lang"], enter: ["core.user"], leave: ["core.user"]}
			}, {
				id: "core.user", method: {
					refresh         : ["imLib.lang", "core.net", "core.config"], getInfo: ["imLib.lang"],
					enter           : ["core.net"], checkEnterResult: ["imLib.lang", "core.config"],
					getAuthResult   : ["core.net"], login: ["core.net", "core.auth", "core.config"],
					logout          : ["core.net"], getEnterResult: ["core.net"],
					pickHandler1    : ["core.main", "imLib.json", "core.config"],
					pickHandler104  : ["core.main", "core.config"], heartBeat: ["core.net"],
					checkAuthResult : ["imLib.lang", "core.config"]
				}
			}], aspect  : [{
				id: "core.message", pointCut: ["core.main.decode, , decode"]
			}, {id: "core.net", pointCut: ["core.log.send, ,log"]}]
		}
	}), define("base/pc/lib", ["require"], function (require) {
		function e(e, t) {
			var n = "", i = e < 0, o = Math.abs(e) + "";
			if (o.length < t) n = new Array(t - o.length + 1).join("0");
			return (i ? "-" : "") + n + o
		}

		var exports = {}, t = /\{\s*\[(?:native code|function)\]\s*\}/i;
		return exports.isType = function (e, t) {return {}.toString.call(e).indexOf("[object " + t) >= 0}, exports.isNative = function (e) {return !(!e || !t.test(e))}, exports.instanceOf = function (e, t) {return e && e.hasOwnProperty && e instanceof t}, exports.extend = function (e, t) {
			for (var n in t)if (t.hasOwnProperty(n) && "_belong" !== n) e[n] = t[n];
			return e
		}, exports.getBid = function () {
			var e, t = (+new Date).toString(), n = Math.floor(1e5 * Math.random()).toString(), i = 5 - n.length;
			if (i > 0)for (e = 0; e < i; e++)n += "0";
			return t + n
		}, exports.uuid = function () {
			for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++)e[n] = t.substr(Math.floor(16 * Math.random()), 1);
			e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-";
			var i = e.join("");
			return i
		}, exports.parseTime = function (t, n) {
			function i(e, t) {n = n.replace(e, t)}

			if ("string" != typeof n)return t.toString();
			var o = t.getFullYear(), r = t.getMonth() + 1, a = t.getDate(), s = t.getHours(), c = t.getMinutes(), d = t.getSeconds();
			return i(/yyyy/g, e(o, 4)), i(/yy/g, e(parseInt(o.toString().slice(2), 10), 2)), i(/MM/g, e(r, 2)), i(/M/g, r), i(/dd/g, e(a, 2)), i(/d/g, a), i(/HH/g, e(s, 2)), i(/H/g, s), i(/hh/g, e(s % 12, 2)), i(/h/g, s % 12), i(/mm/g, e(c, 2)), i(/m/g, c), i(/ss/g, e(d, 2)), i(/s/g, d), n
		}, exports.trim = function (e) {
			var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
			return String(e).replace(t, "")
		}, exports.transferDate = function (e) {
			if (e = +e, isNaN(e))return e;
			var t = +new Date(e), n = ["\u4eca\u5929", "\u6628\u5929"], i = 864e5, o = new Date, r = parseInt((+o - 6e4 * o.getTimezoneOffset()) / i, 10), a = r - parseInt((t - 6e4 * o.getTimezoneOffset()) / i, 10);
			if (a = Math.abs(a), a < n.length)return n[a]; else return exports.parseTime(new Date(e), "yyyy-MM-dd")
		}, exports
	}), define("embed/log/main", ["require", "../../base/pc/lib"], function (require) {
		function e(e) {return !s[e] && (s[e] = "uuid_" + r.uuid()), s[e]}

		function t() {return !s.tabid && (s.tabid = "tabid_" + (new Date).getTime()), s.tabid}

		function n(e) {
			var t = (new Date).getTime() - a[e];
			return t
		}

		function i(e, t) {a[e] = t || +new Date}

		function o(e) {
			var t = 1, n = e.match(/(iPad).*OS\s([\d_]+)/), i = !n && e.match(/(iPhone\sOS)\s([\d_]+)/), o = e.match(/(Android);?[\s\/]+([\d.]+)?/);
			if (n || i) t = 3; else if (o) t = 2;
			return t
		}

		var r = require("../../base/pc/lib"), exports = {}, a = {}, s = {
			pushTotalMsg: 0, pushFailMsg: 0, pickMsg: 0, pushMsg: 0, ifLoopStart: !1
		}, c  = {};
		return exports.init = function (e) {
			var t = e.getServer(), n = t.siteObj;
			a.eid = n.eid, a.siteid = n.siteId, a.platform = n.platform, a.bid = n.bid, a.logRoot = e.staticDomain, a.startTime = t.startTime
		}, exports.addLightMsg = function (e) {
			var t = e.role ? "sub" : "custom";
			if ("sub" === t) s.pickMsg++; else s.pushMsg++, s.pushTotalMsg++
		}, exports.sendFailMsg = function () {s.pushFailMsg++}, exports.logQueue = function () {
			exports.sendLog(t(), {
				uuid: e("openUUID"), cncttype: "queue", brgeyemid: "m2007", winType: "webimLight",
				cost: c.render + n("m2013"), queueCost: n("m2013")
			})
		}, exports.logConnect = function () {
			if (exports.sendLog(t(), {
					uuid: e("openUUID"), cncttype: "connected", brgeyemid: "m2007", winType: "webimLight",
					cost: c.render + n("m2013"), transferCost: n("m2013")
				}), !s.ifLoopStart) exports.logPickMsg(), exports.logPushMsg(), s.ifLoopStart = !0
		}, exports.logTransferFail = function () {
			exports.sendLog(t(), {
				uuid: e("openUUID"), cncttype: "failed", brgeyemid: "m2007", winType: "webimLight",
				cost: c.render + n("m2013"), transferCost: n("m2013")
			})
		}, exports.logOpenWebim = function () {
			exports.sendLog(t(), {
				cncttype: "openWebim", uuid: e("openUUID"), brgeyemid: "m2006"
			})
		}, exports.logClickSeek = function (e, n) {
			var i = {brgeyemid: "m2005"};
			n && (i.type = n), exports.sendLog(t(), i)
		}, exports.logPickMsg = function () {
			var e = function () {
				var e = s.pickMsg;
				if (s.pickMsg = 0, e > 0) exports.sendLog(t(), {num: e, brgeyemid: "m2004"});
				setTimeout(arguments.callee, 5e3)
			};
			setTimeout(e, 5e3)
		}, exports.logPushMsg = function () {
			var e = function () {
				var e = s.pushMsg;
				if (s.pushMsg = 0, e > 0) exports.sendLog(t(), {num: e, brgeyemid: "m2003"});
				setTimeout(arguments.callee, 5e3)
			};
			setTimeout(e, 5e3)
		}, exports.logEndNb = function () {
			exports.sendLog(t(), {
				uuid: e("nbUUID"), brgeyemid: "m2002"
			})
		}, exports.logStartNb = function () {
			exports.sendLog(t(), {
				uuid: e("nbUUID"), brgeyemid: "m2001"
			})
		}, exports.logRenderStart = function () {
			i("m2008", a.startTime), exports.sendLog(t(), {
				uuid: e("renderUUID"), brgeyemid: "m2008"
			})
		}, exports.logRenderEnd = function () {
			c.render = n("m2008"), exports.sendLog(t(), {
				cncttype: "renderFinish", uuid: e("renderUUID"), brgeyemid: "m2009", cost: c.render
			})
		}, exports.logEnterStart = function () {
			i("m2010"), exports.sendLog(t(), {
				cncttype: "startSite", uuid: e("enterUUID"), brgeyemid: "m2010"
			})
		}, exports.logEnterEnd = function () {
			exports.sendLog(t(), {
				cncttype: "finishSite", uuid: e("enterUUID"), brgeyemid: "m2011", cost: n("m2008"), siteCost: n("m2010")
			})
		}, exports.logStartTransfer = function () {i("m2013")}, exports.leaveSite = function () {
			exports.sendLog(t(), {
				uuid: e("enterUUID"), brgeyemid: "m2012", totalMsgCount: s.pushTotalMsg, failMsgCount: s.pushFailMsg
			}), exports.sendLog(t(), {
				uuid: e("msgFailRate"), brgeyemid: "m2014", totalMsgCount: s.pushTotalMsg, failMsgCount: s.pushFailMsg
			})
		}, exports.sendLog = function (e, t, n, i, r) {
			var s = r || {};
			s.t = (new Date).getTime(), s.ip = "", s.dtype = o(navigator.userAgent), s.ucid = n.eid || a.eid, s.uid = t.get("to") || n.tid || "", s.siteid = n.siteid || a.siteid, s.tabid = i, s.bid = n.bid || a.bid, s.sessionid = t.get("sid") || n.sid || "", s.originType = 0, e.send(a.logRoot, s)
		}, exports
	}), define("embed/log/config", ["require", "./main"], function (require) {
		return {
			package   : "log", resource: {main: require("./main")}, injection: [{
				id: "log.main", method: {
					init        : ["data.config"], sendLog: ["core.log", "core.chat", "core.config"],
					logClickSeek: ["core.main"]
				}
			}], aspect: [{
				id      : "log.main",
				pointCut: ["messagecontainer.main.renderMessage,,addLightMsg", "communicate.handler.connected, ,logConnect", "communicate.handler.queueing, ,logQueue", "communicate.handler.transferError, ,logTransferFail", "communicate.handler.transferErrorLog, ,logTransferFail", "icon.handle.acceptClick, ,logClickSeek", "invite.operation.clickInvite, ,logClickSeek", "pmessage.main.init, logRenderStart, ", "pinvite.main.init, , logRenderEnd", "pchat.chat.builtComunicate, logEnterStart, ", "pchat.chat.enterSuccess, ,logEnterEnd", "pchat.chat.openWebimLight,logOpenWebim, ", "communicate.handler.sendfail, ,sendFailMsg", "communicate.handler.imgsendfail, ,sendFailMsg", "webimlight.entry.connect, logStartTransfer, ", "pchat.leave.pageLeave, , leaveSite", "picon.phandler.acceptClick, ,logClickSeek", "pinvite.phandler.clickInvite, ,logClickSeek"]
			}]
		}
	}), define("embed/icon/iconMain", ["require"], function (require) {
		var exports = {};
		return exports.renderHtml = function (e, t, n, i, o) {
			var r = e.getIconTplData(), a = n.template(t, r);
			i.appendHTML(a, o.getWrap())
		}, exports.init = function (e, t) {
			var n = t.getServer("configBox").seekIcon;
			if (0 !== +n.width) exports.renderHtml(), e.init()
		}, exports
	}), define("embed/icon/iconHandler", ["require"], function (require) {
		var exports = {};
		return exports.handleAccept = function (e, t) {e.clickIcon(t)}, exports.bindEvent = function (e, t) {e.domOn("nb_icon_wrap", "click", exports.handleAccept, !1), t.bindEvent()}, exports.init = function () {exports.bindEvent()}, exports
	}), define("embed/icon/iconData", ["require"], function (require) {
		var exports = {};
		return exports.getIconTplData = function (e, t) {
			var n = e.getServer("configBox").seekIcon, i = t.dataProcess(n);
			if (1 === +n.isCustomerStyle) i.backImg = "background-image: url(" + i.customerStyle.backImg + ");";
			return i
		}, exports
	}), define("embed/icon/pc/iconPc.tpl", [], function () {return '<!-- target: iconIcon --><% if (+data.isCustomerStyle === 1) { %><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%> nb-customer-icon-style" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } else { %><% if (+data.isCustomerStyle === 0) {%><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-<%skinIndex%> nb-icon-<%iconType%>" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } else { %><ins class="nb-icon-wrap nb-icon-base icon-<%position%> nb-icon-skin-xc-<%skinIndex%> nb-icon-<%iconType%>" id="nb_icon_wrap" style="<%bottomDistance%>;width:<%width%>px;"><% } %><% } %><ins class="nb-icon-inner-wrap" style="height:<%height%>px;width:<%width%>px;<%backImg%>;"><ins class="nb-icon-bridge0 nb-icon-bridge-base" data-type="iconInvite"></ins></ins><% if (data.iconType === \'group\') { %><% if (+data.isCustomerStyle === 1) {%><ins class="nb-icon-groups nb-show" style="background-color:<%groupStyle.bgColor%>;<%groupsMargin%>;" id="nb_icon_groups"><% } else { %><ins class="nb-icon-groups nb-show" style="<%groupsMargin%>;" id="nb_icon_groups"><% } %><% for(var i = 0, l = data.groups.length; i < l; i++) {data.group = data.groups[i]; %><% if(data.group.isSelected){ %><% if (+data.isCustomerStyle === 1) {%><ins class="nb-icon-groups-item nb-clearfix" data-id="<%group.groupId%>" style="background-color:<%groupStyle.buttonColor%>;"><ins class="nb-group-icon"></ins><ins class="nb-group-text" style="color:<%groupStyle.fontColor%>"><%group.groupName%></ins></ins><% } else { %><ins class="nb-icon-groups-item nb-clearfix" data-id="<%group.groupId%>"><ins class="nb-group-icon"></ins><ins class="nb-group-text"><%group.groupName%></ins></ins><% } %><% } else { %><ins class="nb-icon-groups-item icon-disable nb-clearfix" data-id=""><ins class="nb-group-icon"></ins><ins class="nb-group-text"><%group.groupName%></ins></ins><% } %><% } %><% } %></ins></ins><!-- end -->'}), define("embed/icon/pc/iconPHandler", ["require"], function (require) {
		var exports            = {};
		exports.getIconItemEle = function (e, t, n) {
			var i = e.g(t.PREFIXID + "groups");
			if (!e.contain(n, i))return n;
			var o = null;
			if (n.className.match(t.CLASSREG)) o = n; else o = exports.getIconItemEle(n.parentNode, e);
			return o
		};
		var e                  = !0;
		return exports.clickIcon = function (t, n, i, o, r) {
			var a = n.getServer("configBox").seekIcon, s = n.getServer("siteObj");
			if ("false" !== s.online) {
				if (!e)return;
				if (e = !1, a.iconType) {
					var c = t.getTarget(r);
					c     = exports.getIconItemEle(c, t);
					var d = c.className;
					if (d.indexOf("icon-disable") !== -1) i.showInCenter(); else if (o.CLASSREG.test(d)) exports.acceptClick(c.getAttribute("data-id"))
				} else exports.acceptClick(0)
			} else i.showInCenter();
			var u = setTimeout(function () {e = !0, clearTimeout(u)}, 300)
		}, exports.acceptClick = function (e, t, n) {e.accept(0, n), t.hide(["nb_invite_wrap"])}, exports.bindEvent = function () {}, exports
	}), define("embed/icon/pc/iconPData", ["require"], function (require) {
		var exports = {};
		return exports.dataProcess = function (e, t) {
			var n = e.extend({}, t);
			if (1 === +t.iconType) {
				if (n.isShowGroup = "nb-show", n.iconType = "group", 1 === +n.skinIndex && 0 === +n.isCustomerStyle) n.groupsMargin = "margin-left:19px"; else n.groupsMargin = "margin-left:0";
				var i = t.groups;
				if (i.length) {
					var o = 43 * i.length + 10 + 20;
					if ("right-center" === t.position || "left-center" === t.position) n.bottomDistance = "margin-top:-" + Math.ceil((o + t.height) / 2) + "px"
				}
			} else if (n.isShowGroup = "nb-hide", n.iconType = "icon", "left-center" === t.position || "right-center" === t.position) n.bottomDistance = "margin-top:-" + Math.ceil(t.height / 2) + "px";
			return n
		}, exports
	}), define("embed/icon/pc/iconConst", ["require"], function (require) {
		return {
			PREFIXID: "nb_icon_", CLASSREG: /icon-groups-item/
		}
	}), define("embed/icon/iconPConfig", ["require", "./iconMain", "./iconHandler", "./iconData", "./pc/iconPc.tpl", "./pc/iconPHandler", "./pc/iconPData", "./pc/iconConst"], function (require) {
		return {
			package     : "picon", resource: {
				main : require("./iconMain"), handler: require("./iconHandler"), data: require("./iconData"),
				tpl  : require("./pc/iconPc.tpl"), phandler: require("./pc/iconPHandler"),
				pdata: require("./pc/iconPData"), consts: require("./pc/iconConst")
			}, injection: [{
				id: "picon.phandler", method: {
					clickIcon     : ["pbase.dom", "data.config", "pmessage.pmain", "picon.consts"],
					acceptClick   : ["pchat.chat", "pbase.dom"], bindEvent: ["pbase.events"],
					getIconItemEle: ["pbase.dom", "picon.consts"]
				}
			}, {id: "picon.pdata", method: {dataProcess: ["pbase.lib"]}}, {
				id: "picon.main", method: {
					init      : ["picon.handler", "data.config"],
					renderHtml: ["picon.data", "picon.tpl", "common.util", "pbase.dom", "common.view"]
				}
			}, {id: "picon.data", method: {getIconTplData: ["data.config", "picon.pdata"]}}, {
				id: "picon.handler", method: {
					bindEvent: ["pbase.events", "picon.phandler"], handleAccept: ["picon.phandler"]
				}
			}], aspect  : [{
				id: "picon.main", pointCut: ["pmessage.main.init, , init"]
			}]
		}
	}), define("embed/invite/inviteMain", ["require"], function (require) {
		var exports = {};
		return exports.renderHtml = function (e, t, n, i, o, r) {
			var a = t.getWrap(), s = n.getInviteStyle(), c = i.template(o, s);
			e.appendHTML(c, a), r.process()
		}, exports.init = function (e) {exports.renderHtml(), e.init()}, exports
	}), define("embed/invite/inviteData", ["require"], function (require) {
		var exports = {};
		return exports.getInviteStyle = function (e, t) {
			var n = e.getServer("configBox").inviteBox, i = t.dataProcess(n);
			return i
		}, exports
	}), define("embed/invite/inviteHandler", ["require"], function (require) {
		var exports = {};
		return exports.bindEvent = function (e, t, n) {
			n.process();
			var i = n.getClickEle();
			e.domOn(i, "click", n.acceptInvite, !1), e.domOn([t.PREFIXID + "cancel", t.PREFIXID + "tool"], "click", n.refuseInvite, !1)
		}, exports.init = function () {exports.bindEvent()}, exports
	}), define("embed/invite/pc/invitePMain", ["require"], function (require) {
		var exports = {};
		return exports.inviteWindowGuard = function (e, t, n, i, o) {
			var r = e.getServer("configBox").inviteBox;
			if (e.isAutoInvite()) {
				if (+r.startPage === i.ALL_PAGE) exports.delayToShow(o);
				if (+r.startPage === i.ONLY_STARTPAGE) {
					var a = t.get(i.INVITE_START_PAGE_COOKIE);
					if (!a) exports.delayToShow(o); else if (a === location.href) exports.delayToShow(o); else if (document.referrer) {
						var s = n.getHost(document.referrer);
						if (s !== location.hostname) exports.delayToShow(o)
					} else {
						var c = t.get(i.INVITE_COOKIE_NAME);
						if (c) {
							if (c !== location.hostname) exports.delayToShow(o)
						} else exports.delayToShow(o)
					}
				}
			}
		}, exports.delayToShow = function (e, t, n, i) {
			var o = e.getServer("configBox").inviteBox, r = o.stayTime;
			if ("number" != typeof r || r < 0) r = 0; else r *= 1e3;
			t.set(n.INVITE_COOKIE_NAME, location.hostname, {path: "/"}), t.set(n.INVITE_START_PAGE_COOKIE, location.href, {path: "/"}), setTimeout(function () {exports.startCircleShow(i)}, r)
		}, exports.startCircleShow = function (e, t) {if (4 !== t.status) e.visibleControl(1); else e.clearTimer(), e.visibleControl(1)}, exports.setStyle = function (e, t, n, i) {
			if (e.ie && !(e.ie > 7)) {
				var o = t.g("nb_invite_welcome"), r = i || o.firstChild, a = r.childNodes;
				if (a.length)for (var s = 0, c = a.length; s < c; s++) {
					var d = a[s];
					if (3 !== +d.nodeType) {
						for (var u = r.currentStyle, l = n.PLAIN_STYLE_CONFIG, f = 0, p = l.length; f < p; f++) {
							var m = l[f];
							if (u[m] && !d.style[m]) d.style[m] = u[m]
						}
						if ("STRONG" === d.nodeName) d.style.fontWeight = "bold"; else if ("EM" === d.nodeName) d.style.fontStyle = "italic";
						if (d.childNodes.length) exports.setStyle(d)
					} else;
				}
			}
		}, exports.process = function (e, t, n, i) {
			exports.setStyle();
			var o = e.getServer("configBox").inviteBox;
			if (2 === +o.buttonType) t.init(i.g("nb_invite_input"));
			n.on("circleShowInvite", exports.inviteWindowGuard)
		}, exports
	}), define("embed/invite/pc/inviteHandler", ["require"], function (require) {
		var exports = {}, e = null, t = {};
		return exports.clearTimer = function () {clearTimeout(e)}, exports.countToShow = function (n) {
			clearTimeout(e);
			var i = +t.inviteInterval;
			if (t.reInvite === n.ALLOW_REINVITE && !isNaN(i) && +t.inviteInterval >= 0) e = setTimeout(function () {exports.visibleControl(1)}, 1e3 * i)
		}, exports.countToHide = function (n) {
			clearTimeout(e);
			var i = +t.closeTime;
			if (t.autoHide === n.ALLOW_AUTO_HIDE && !isNaN(i) && +t.closeTime >= 0) e = setTimeout(function () {exports.visibleControl(0)}, 1e3 * i)
		}, exports.visibleControl = function (e, n, i, o) {
			var r = e.g(i.INVITEID);
			if (1 === o) {
				if (e.show([r]), t.autoHide === i.ALLOW_AUTO_HIDE) exports.countToHide()
			} else if (0 === o)if (e.hide([r]), t.reInvite === i.ALLOW_REINVITE && t.autoInvite === i.ALLOW_AUTO_INVITE) exports.countToShow()
		}, exports.refuseInvite = function (e, t, n, i) {
			if (2 === e.fromType) t.refuse();
			exports.visibleControl(0), exports.clickInvite("reject"), n.domStop(i)
		}, exports.acceptInvite = function (e, n, i, o, r) {
			var a = o.getServer("siteObj");
			if ("false" === a.online) r.showInCenter(); else {
				if (2 === +t.buttonType) {
					var s = i.g("nb_invite_input").value;
					s = n.trim(s), t.inviteTxt = n.filterXSS(s)
				}
				e.accept()
			}
			exports.visibleControl(0), exports.clickInvite("accept")
		}, exports.getClickEle = function (e) {
			var n = "";
			if (0 === +t.buttonType) n = e.PREFIXID + "wrap"; else n = e.PREFIXID + "ok";
			return n
		}, exports.clickInvite = function (e) {}, exports.process = function (e) { t = e.getServer("configBox").inviteBox}, exports
	}), define("embed/invite/pc/invitePc.tpl", [], function () {return '<!-- target: invite --><ins class="nb-invite-wrap nb-invite-wrap-base nb-position-base nb-<%position%> <%customerStyleClass%> <%talkTypeStyle%>" id="nb_invite_wrap" style="width:<%width%>px;display:none;<%extraPostion%>;"><% if (+data.isCustomerStyle === 2) {%><ins class="nb-invite-body nb-invite-skin-xc-<%skinIndex%>" style="height:<%height%>px;"><% } else { %><ins class="nb-invite-body nb-invite-skin-<%skinIndex%>" style="height:<%height%>px;<%customerStyle.backImg%>"><% } %><ins class="nb-invite-tool nb-invite-tool-base" id="nb_invite_tool" style=""></ins><ins class="nb-invite-text nb-invite-text-base"><ins class="nb-invite-welcome nb-invite-welcome-base <%isShowText%>" id="nb_invite_welcome"><%welcome%></ins></ins><% if (data.buttonType === 1) { %><ins class="nb-invite-btn-base nb-invte-btns-<%skinIndex%>"><ins class="nb-invite-cancel nb-invite-cancel-base" id="nb_invite_cancel">\u7a0d\u540e\u518d\u8bf4</ins><%if (data.isCustomerStyle == 1) { %><ins class="nb-invite-ok nb-invite-ok-base" id="nb_invite_ok" style="<%customerStyle.acceptBgColor%>;<%customerStyle.acceptFontColor%>;">\u73b0\u5728\u54a8\u8be2</ins><% } else { %><ins class="nb-invite-ok nb-invite-ok-base" id="nb_invite_ok">\u73b0\u5728\u54a8\u8be2</ins><% } %></ins><% } %></ins><% if (data.buttonType == 2) { %><ins class="nb-invite-btn-skin-<%skinIndex%> nb-invte-btns-<%buttonType%>"><%if (data.isCustomerStyle == 1) { %><ins class="nb-invite-ok nb-invite-ok-base nb-direct-send-btn" id="nb_invite_ok" style="<%customerStyle.acceptBgColor%>;<%customerStyle.acceptFontColor%>;">\u53d1\u9001</ins><% } else { %><ins class="nb-invite-ok nb-invite-ok-base nb-direct-send-btn" id="nb_invite_ok">\u53d1\u9001</ins><% } %><ins class="nb-invite-input-wrap"><input type="text" class="nb-invite-input" id="nb_invite_input" maxlength="200" placeholder="\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u548c\u6211\u4eec\u8054\u7cfb" data-ph="\u60a8\u53ef\u4ee5\u76f4\u63a5\u5728\u8fd9\u91cc\u548c\u6211\u4eec\u8054\u7cfb"></ins></ins><% } %></ins><!-- end -->'}), define("embed/invite/pc/invitePcData", ["require"], function (require) {
		var exports = {};
		return exports.dataProcess = function (e, t, n) {
			var i = t.extend({}, n), o = "";
			if ("middle" === n.position) o = "margin-left: -" + Math.ceil(n.width / 2) + "px;margin-top: -" + Math.ceil(n.height / 2) + "px";
			if (i.extraPostion = o, i.isCustomerStyle) {
				i.customerStyleClass = "customer-invite-style";
				var r                = i.customerStyle;
				if (r.backImg = "background:url(" + r.backImg + ")", r.acceptBgColor = "background-color:" + n.customerStyle.acceptBgColor, r.acceptFontColor = "color:" + n.customerStyle.acceptFontColor, 2 === +n.buttonType) r.acceptBgColor = "background-color:" + n.sendButton.bgColor, r.acceptFontColor = "color:" + n.sendButton.fontColor
			}
			if (2 === +n.buttonType) {
				if (i.talkTypeStyle = "driect-talk-style", "right-bottom" === n.position || "left-bottom" === n.position) i.position = n.position + "-direct"
			} else if (0 === +n.buttonType) i.talkTypeStyle = "blank-talk-style";
			i.isShowText = ["nb-hide", "nb-show"][+n.isShowText];
			var a        = e.getServer("siteObj");
			if ("false" === a.online) i.isStop = !0;
			return i
		}, exports
	}), define("embed/invite/pc/inviteConsts", [], function () {
		return {
			INVITEID                : "nb_invite_wrap", WRAPID: "newBridge", PREFIXID: "nb_invite_", ALLOW_REINVITE: 1,
			DENY_REINVITE           : 0, ALLOW_AUTO_HIDE: 1, DENY_AUTO_HIDE: 0, ALLOW_AUTO_INVITE: 1, ONLY_STARTPAGE: 0,
			ALL_PAGE                : 1, INVITE_COOKIE_NAME: "nb-referrer-hostname",
			INVITE_START_PAGE_COOKIE: "nb-start-page-url",
			PLAIN_STYLE_CONFIG      : ["fontSize", "fontStyle", "fontWeight", "textDecoration", "fontFamily", "color"]
		}
	}), define("embed/invite/invitePConfig", ["require", "./inviteMain", "./inviteData", "./inviteHandler", "./pc/invitePMain", "./pc/inviteHandler", "./pc/invitePc.tpl", "./pc/invitePcData", "./pc/inviteConsts"], function (require) {
		return {
			package     : "pinvite", resource: {
				main  : require("./inviteMain"), data: require("./inviteData"), handler: require("./inviteHandler"),
				pmain : require("./pc/invitePMain"), phandler: require("./pc/inviteHandler"),
				tpl   : require("./pc/invitePc.tpl"), pdata: require("./pc/invitePcData"),
				consts: require("./pc/inviteConsts")
			}, injection: [{
				id: "pinvite.main", method: {
					init      : ["pinvite.handler"],
					renderHtml: ["pbase.dom", "common.view", "pinvite.data", "common.util", "pinvite.tpl", "pinvite.pmain"]
				}
			}, {id: "pinvite.data", method: {getInviteStyle: ["data.config", "pinvite.pdata"]}}, {
				id: "pinvite.handler", method: {bindEvent: ["pbase.events", "pinvite.consts", "pinvite.phandler"]}
			}, {
				id: "pinvite.pmain", method: {
					setStyle         : ["pbase.browser", "pbase.dom", "pinvite.consts"],
					inviteWindowGuard: ["data.config", "common.cookie", "common.util", "pinvite.consts"],
					delayToShow      : ["data.config", "common.cookie", "pinvite.consts"],
					startCircleShow  : ["pinvite.phandler"],
					process          : ["data.config", "common.placeHolder", "core.main", "pbase.dom"]
				}
			}, {id: "pinvite.pdata", method: {dataProcess: ["data.config", "pbase.lib"]}}, {
				id: "pinvite.phandler", method: {
					process       : ["data.config"],
					acceptInvite  : ["pchat.chat", "common.util", "pbase.dom", "data.config", "pmessage.pmain"],
					refuseInvite  : ["core.config", "pchat.chat", "pbase.events"],
					visibleControl: ["pbase.dom", "data.config", "pinvite.consts"], countToHide: ["pinvite.consts"],
					countToShow   : ["pinvite.consts"], getClickEle: ["pinvite.consts"]
				}
			}], aspect  : [{
				id: "pinvite.main", pointCut: ["picon.main.init, , init"]
			}]
		}
	}), define("embed/message/messageMain", ["require"], function (require) {
		var exports = {};
		return exports.renderHtml = function (e, t, n, i, o, r) {
			var a = t.getMessagetyle(), s = o.getWrap(), c = n.template(e, a);
			i.appendHTML(c, s), r.process(a)
		}, exports.init = function (e) {exports.renderHtml(), e.init()}, exports
	}), define("embed/message/messageData", ["require"], function (require) {
		var exports = {};
		return exports.getMessagetyle = function (e, t) {
			var n = e.getServer("configBox").noteBoard, i = t.dataProcess(n);
			return i
		}, exports
	}), define("embed/message/messageHandler", ["require"], function (require) {
		var exports = {};
		return exports.sendMessage = function (e) {e.sendMessage()}, exports.closeMessage = function (e) {e.closeMessage()}, exports.bindEvent = function (e, t, n) {e.domOn(t.PREFIXNODEID + "send", "click", exports.sendMessage, !0), e.domOn([t.PREFIXNODEID + "close", "sucess_close"], "click", exports.closeMessage, !0), n.process()}, exports.init = function () {exports.bindEvent()}, exports
	}), define("embed/message/pc/messagePMain", ["require"], function (require) {
		function e(e, t) {
			if (t)for (var n = 0, i = t.length; n < i; n++) {
				var o = [];
				if (t[n].subItems) {
					o     = o.concat(t[n].subItems);
					var r = new e;
					r.init({
						id      : "node_select_wrap_" + t[n].index, layerCont: "nb_nodeboard", name: t[n].name,
						content : o, readonly: "readonly", selectIndex: 0, zIndex: 99,
						style   : {width: 220, maxHeight: 300, zIndex: 99}
					})
				}
			}
		}

		var exports = {};
		return exports.showInCenter = function (e) {e.showInCenter()}, exports.hide = function (e) {e.hide(["nb-nodeboard"])}, exports.show = function (e) {e.show(["nb-nodeboard"])}, exports.process = function (t, n) {e(t, n.itemsExt)}, exports
	}), define("embed/message/pc/messagePData", ["require"], function (require) {
		var exports = {};
		return exports.getMsgText = function (e, t) {
			var n = e.MESSAGERESULTTIP;
			return n[t]
		}, exports.getNodeText = function (e, t) {
			var n = e.MESSAGWTIP;
			if (t) n = n[t];
			return n
		}, exports.dataProcess = function (e, t, n, i, o) {
			var r              = i.extend({}, o);
			r.nodeBtnSkinStyle = "nb-nodeboard-send-btn-" + o.skinIndex;
			for (var a = [].concat(r.items, r.itemsExt), s = 0, c = a.length; s < c; s++) {
				var d = a[s];
				if (d.index = c - s, d.required) d.requireTxt = "\uff08\u5fc5\u586b\uff09"
			}
			var u = e.getServer("siteObj"), l = u.online;
			if (1 === +o.isAlwaysDisplay) r.isShow = "nb-show"; else if (2 === +o.isAlwaysDisplay) r.isShow = "nb-hide"; else r.isShow = "true" === l ? "nb-hide" : "nb-show";
			if (r.companyStyle = 1 === o.displayCompany ? "block" : "none", r.cpyInfo = n.filterXSS(o.cpyInfo), r.cpyTel = n.filterXSS(o.cpyTel), t.ie < 10) {
				var f = this.getNodeText();
				r.content = f.content.text, r.name = f.visitorName.text, r.phone = f.visitorPhone.text, r.email = f.visitorEmail.text, r.address = f.visitorAddress.text
			}
			if (t.ie) r.color = "color: #ababab";
			return r.userId = u.userId, r.domain = u.webRoot, r
		}, exports
	}), define("embed/message/pc/messagePc.tpl", [], function () {return '<!-- target: nodeBoard --><ins class="nb-nodeboard-base nb-nodeboard-position-base nb-nodeboard-<%position%> <%isShow%>" id="nb_nodeboard"><ins class="nb-nodeboard-contain-base nb-nodeboard-contain"><ins class="nb-nodeboard-top nb-nodeboard-top-<%skinIndex%>"><ins class="nb-head-title">\u8bf7\u60a8\u7559\u8a00</ins><ins class="nb-nodeboard-close" id="nb_nodeboard_close" data-type="min"></ins></ins><% if (data.displayCompany == 1) { %><ins id="nb_nodeboard_text" class="nb-nodeboard-text"><p class="nb-nodeboard-company"><%cpyInfo%></p><p class="nb-nodeboard-link"><%cpyTel%></p></ins><% } %><form id="nb_nodeboard_form" autocomplete="off" class="nb-board-form" action="<%domain%>/bookmanage/saveBook.action?userId=<%userId%>" method="post" accept-charset="utf-8"><ins id="nb_nodeboard_set" class="nb-nodeboard-set"><ins class="nb-nodeboard-content"><textarea id="nb-nodeboard-set-content-js" name="content" data-ph="\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09" placeholder="\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09" class="nb-nodeboard-set-content"><%content%></textarea></ins><% for (var i = 0, l = data.items.length; i < l; i++) { %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorName\') { %><ins class="nb-nodeboard-name" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodeName"></ins><input id="nb_nodeboard_set_name" data-write="<%items[i].required%>" name="visitorName" maxlength="30" class="nb-nodeboard-input" type="text" data-ph="\u59d3\u540d<%items[i].requireTxt%>" placeholder="\u59d3\u540d<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorPhone\') { %><ins class="nb-nodeboard-name" id="nb_nodeboard_phone" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodePhone"></ins><input id="nb_nodeboard_set_phone" name="visitorPhone" maxlength="30" class="nb-nodeboard-input" data-write="<%items[i].required%>" type="text" data-ph="\u7535\u8bdd<%items[i].requireTxt%>" placeholder="\u7535\u8bdd<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorEmail\') { %><ins class="nb-nodeboard-name" id="nb_nodeboard_mail" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodeMail"></ins><input id="nb_nodeboard_set_email" name="visitorEmail" maxlength="50" class="nb-nodeboard-input" type="text" data-write="<%items[i].required%>" data-ph="\u90ae\u7bb1<%items[i].requireTxt%>" placeholder="\u90ae\u7bb1<%items[i].requireTxt%>"></ins><% } %><% if (data.items[i].isShow == 1 && data.items[i].name == \'visitorAddress\') { %><ins class="nb-nodeboard-name" style="z-index:<%items[i].index%>;"><ins class="nb-nodeboard-icon nodeAddress"></ins><input id="nb_nodeboard_set_address" name="visitorAddress" class="nb-nodeboard-input" maxlength="50" type="text" data-write="<%items[i].required%>" data-ph="\u5730\u5740<%items[i].requireTxt%>" placeholder="\u5730\u5740<%items[i].requireTxt%>"></ins><% } %><% } %><% for (var j = 0, h = data.itemsExt.length; j < h; j++) { %><% if (data.itemsExt[j].subItems && data.itemsExt[j].isShow) { %><ins class="nb-nodeboard-ext-select" style="z-index:<%itemsExt[j].index%>;"><ins class="nb-nodeboard-select-title"><%itemsExt[j].question%></ins><ins class="nb-nodeboard-select-wrap" id="node_select_wrap_<%itemsExt[j].index%>"></ins></ins><% } %><% if (!data.itemsExt[j].subItems && data.itemsExt[j].isShow) { %><ins class="nb-nodeboard-name nb-nodeboard-ext-input" style="z-index:<%itemsExt[j].index%>;"><ins class="nb-nodeboard-icon nodeExt"></ins><input id="nb_nodeboard_ext_<%itemsExt[j].index%>" name="<%itemsExt[j].name%>" class="nb-nodeboard-input" maxlength="50" type="text" data-write="<%itemsExt[j].required%>" data-ph="<%itemsExt[j].question%><%itemsExt[j].requireTxt%>" placeholder="<%itemsExt[j].question%><%itemsExt[j].requireTxt%>"></ins><% } %><% } %></ins></form><ins class="nb-nodeboard-success" id="nb_nodeboard_success"><ins class="nb-success-box"><ins class="nb-success-icon"></ins><ins class="nb-success-title" id="nb_node_messagetitle">\u611f\u8c22\u7559\u8a00</ins><ins class="nb-success-content" id="nb_node_messagecontent">\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb</ins><ins id="sucess_close" class="nb-sucess-close">\u5173\u95ed</ins></ins></ins><ins class="nb-nodeboard-send" id="nb_node_contain"><ins id="nb_nodeboard_send" class="nb-nodeboard-send-btn <%nodeBtnSkinStyle%>">\u53d1\u9001</ins></ins></ins></ins><!-- end -->'}), define("embed/message/pc/messagePHandler", ["require"], function (require) {
		function e(e, t) {
			if (n = {
					nodeContain   : e.g("nb_nodeboard"), tipsEle: e.g(t.PREFIXNODEID + "tips"),
					nodeTool      : e.g(t.PREFIXNODEID + "close"), nodeText: e.g(t.PREFIXNODEID + "text"),
					nodeSet       : e.g(t.PREFIXNODESET), nodeSend: e.g(t.PREFIIXNODE + "contain"),
					nodeSendBtn   : e.g(t.PREFIXNODEID + "send"), nodeSuccesss: e.g(t.PREFIXNODEID + "success"),
					messageTitle  : e.g(t.PREFIIXNODE + "messagetitle"),
					messageContent: e.g(t.PREFIIXNODE + "messagecontent")
				}, n.nodeContain.className.indexOf("left") >= 0) i = {left: "1px", right: "auto"}; else i = {
				left: "auto", right: "1px"
			}
		}

		function t(e, t) {if ("enable" === t) e.removeClass(n.nodeSendBtn, "message-disable"); else e.addClass(n.nodeSendBtn, "message-disable")}

		var exports = {}, n = {}, i = {};
		exports.hideMessage = function (e, t) {
			var i = n;
			i.nodeTool["data-type"] = "max", i.nodeTool.className = i.nodeTool.className + " " + t.PREFIXCLASS + "max", e.hide([i.nodeText, i.nodeSet, i.nodeSend])
		}, exports.showMessage = function (e, t, i) {
			var o = t.getServer("configBox").noteBoard, r = n;
			if (r.nodeTool["data-type"] = "min", r.nodeTool.className = r.nodeTool.className.replace(i.PREFIXCLASS + "max", ""), 1 === o.displayCompany) e.show([r.nodeText]);
			e.show([r.nodeSet, r.nodeSend])
		}, exports.closeMessage = function (e) {
			var t = n;
			if (e.hide([t.nodeSuccesss]), "min" === t.nodeTool["data-type"] || void 0 === t.nodeTool["data-type"]) exports.hideMessage(); else exports.showMessage();
			exports.resetPosition()
		}, exports.resetPosition = function (e, t) {
			e.setStyles(n.nodeContain, t.extend([{
				top: "auto", bottom: "1px", marginLeft: 0, marginTop: 0, height: "auto"
			}, i]))
		}, exports.getExtendNode = function (e, t, n) {
			var i = {
				bid     : e.bid, siteid: e.siteid, v: e.bid, s: e.siteid, e: e.eid, client: n.stringify(t.getInfo()),
				referrer: document.referrer, origin: document.title || document.URL
			};
			return i
		}, exports.sendMessage = function (e, i, o, r, a) {
			var s = e.validateForm(i.g(a.PREFIXNODEID + "form")), c = i.hasClass(n.nodeSendBtn, "message-disable");
			if (s && !c) {
				t(i, "disable");
				var d = exports.getExtendNode();
				o.postAjax(r.urlRoot + a.SAVEURL, d, a.PREFIXNODEID + "form", exports.sendSucess, !0)
			}
		}, exports.sendSucess = function (e, i, o) {
			var r = e.getMsgText("success");
			if (0 === o.status) i.show([n.nodeSuccesss]), n.messageTitle.innerHTML = r.title, n.messageContent.innerHTML = r.msg, i.hide([n.nodeSet, n.nodeSend]);
			t(i, "enable")
		};
		var o = {height: 0, width: 0};
		return exports.showInCenter = function (t, i) {
			var r = n;
			if (t.show([r.nodeContain]), !r.nodeTool) e(t, i);
			var a = r.nodeTool["data-type"];
			if ("max" === a) exports.showMessage();
			if (!o.width) o.width = r.nodeContain.offsetWidth / 2, o.height = r.nodeContain.offsetHeight / 2;
			t.setStyles(r.nodeContain, {
				top   : "50%", left: "50%", marginLeft: -o.width + "px", marginTop: -o.height + "px",
				height: 2 * o.height + "px"
			})
		}, exports.process = function (t, n, i, o) {e(t, i), o.registValidate(t.g(i.PREFIXNODEID + "form")), n.init(t.g(i.PREFIXNODEID + "form"))}, exports
	}), define("embed/message/pc/messagePConsts", [], function () {
		return {
			SAVEURL            : "bookmanage/saveBook.action", WRAPID: "newBridge", NODEID: "nb-nodeboard",
			PREFIIXNODE        : "nb_node_", PREFIXNODEID: "nb_nodeboard_", PREFIXCLASS: "nb-nodeboard-",
			ERROR_ID           : "nb-nodeboard-tips-js", PREFIX_NODEID: "nb-nodeboard-",
			PREFIXNODESET      : "nb_nodeboard_set", MESSAGWTIP: {
				content       : {
					text    : "\u8bf7\u5728\u6b64\u8f93\u5165\u7559\u8a00\u5185\u5bb9\uff0c\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002\uff08\u5fc5\u586b\uff09",
					errorTip: "\u7559\u8a00\u5185\u5bb9\u4e0d\u53ef\u4e3a\u7a7a"
				}, visitorName: {text: "\u59d3\u540d", errorTip: ""},
				visitorPhone  : {text: "\u7535\u8bdd", errorTip: "\u7535\u8bdd\u683c\u5f0f\u8f93\u5165\u6709\u8bef"},
				visitorEmail  : {text: "\u90ae\u7bb1", errorTip: "\u90ae\u7bb1\u683c\u5f0f\u8f93\u5165\u6709\u8bef"},
				visitorAddress: {text: "\u5730\u5740", errorTip: "\u5730\u5740\u6570\u636e\u8fc7\u957f"},
				overstep      : {text: "\u8d85\u6570", errorTip: "\u7559\u8a00\u5185\u5bb9\u8f93\u5165\u6709\u8bef"}
			}, MESSAGERESULTTIP: {
				success: {
					title: "\u611f\u8c22\u7559\u8a00", msg: "\u6211\u4eec\u4f1a\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb"
				}, fail: {title: "\u7559\u8a00\u63d0\u793a", msg: "\u7559\u8a00\u4fdd\u5b58\u5931\u8d25"}
			}
		}
	}), define("embed/message/pc/messageValidate", ["require"], function (require) {
		function e(e) {
			for (var t = !0, n = 0, i = e.length; n < i; n++)if (+e[n].getAttribute("data-write") && (/^[\s\uFEFF\xA0]*$/.test(e[n].value) || e[n].value === e[n].getAttribute("placeholder"))) {
				t     = !1;
				var o = e[n].getAttribute("data-ph").replace("\uff08\u5fc5\u586b\uff09", "");
				exports.showErrorTip(e[n], o + "\u4e0d\u80fd\u4e3a\u7a7a!");
				break
			}
			return t
		}

		var exports = {};
		return exports.baseRegex = {
			content     : /^[\s\S]*$/, visitorName: /^.{0,30}$/, visitorPhone: /^\d{5,19}$/,
			visitorEmail: /^(?!.{50,})(\w+([-.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/, visitorAddress: /^.{0,50}$/
		}, exports.showErrorTip = function (e, t, n, i) {
			var o = n.parentNode, r = document.createElement("ins");
			r.className = e.PREFIX_NODEID + "tips", r.id = e.PREFIX_NODEID + "tips-js", r.innerHTML = i, t.setStyle(r, "top", o.clientHeight + "px"), t.addClass(o, e.PREFIX_NODEID + "err"), o.appendChild(r)
		}, exports.removeErrorTip = function (e, t, n) {
			var i = e.g(t.ERROR_ID);
			if (i) {
				e.removeClass(i.parentNode, t.PREFIX_NODEID + "err"), i.parentNode.removeChild(i);
				for (var o, r = n.elements, a = 0; o = r[a]; a++)o.className = o.className.replace("error-tips", "")
			}
		}, exports.validateForm = function (t, n, i) {
			this.removeErrorTip(i);
			var o = !0;
			if (o = e(i)) {
				for (var r, a = i.elements, s = n.getNodeText(), c = 0; r = a[c]; c++) {
					var d = r.value, u = r.name;
					if ("content" === u && (d === r.getAttribute("data-ph") || "" === d)) {
						this.showErrorTip(r, s.content.errorTip), o = !1;
						break
					}
					if (d && !d.match(this.baseRegex[u]) && d !== r.getAttribute("data-ph")) {
						if ("content" === u) this.showErrorTip(r, s.overstep.errorTip); else this.showErrorTip(r, s[u].errorTip);
						r.className = r.className + " error-tips", o = !1;
						break
					}
				}
				return o
			}
		}, exports.registValidate = function (e, t) {
			for (var n, i = t.elements, o = 0; n = i[o]; o++) {
				n.name;
				e.domOn([n], "click", function () {exports.removeErrorTip(t)})
			}
		}, exports
	}), define("embed/message/messagePConfig", ["require", "./messageMain", "./messageData", "./messageHandler", "./pc/messagePMain", "./pc/messagePData", "./pc/messagePc.tpl", "./pc/messagePHandler", "./pc/messagePConsts", "./pc/messageValidate"], function (require) {
		return {
			package     : "pmessage", resource: {
				main  : require("./messageMain"), data: require("./messageData"), handler: require("./messageHandler"),
				pmain : require("./pc/messagePMain"), pdata: require("./pc/messagePData"),
				tpl   : require("./pc/messagePc.tpl"), phandler: require("./pc/messagePHandler"),
				consts: require("./pc/messagePConsts"), validate: require("./pc/messageValidate")
			}, injection: [{
				id: "pmessage.main", method: {
					init      : ["pmessage.handler"],
					renderHtml: ["pmessage.tpl", "pmessage.data", "common.util", "pbase.dom", "common.view", "pmessage.pmain"]
				}
			}, {id: "pmessage.data", method: {getMessagetyle: ["data.config", "pmessage.pdata"]}}, {
				id: "pmessage.handler", method: {
					bindEvent  : ["pbase.events", "pmessage.consts", "pmessage.phandler"],
					sendMessage: ["pmessage.phandler"], closeMessage: ["pmessage.phandler"]
				}
			}, {
				id: "pmessage.pmain", method: {
					process: ["common.CustomSelect"], showInCenter: ["pmessage.phandler"], hide: ["pbase.dom"],
					show   : ["pbase.dom"]
				}
			}, {
				id: "pmessage.pdata", method: {
					dataProcess: ["data.config", "pbase.browser", "common.util", "pbase.lib"],
					getNodeText: ["pmessage.consts"], getMsgText: ["pmessage.consts"]
				}
			}, {
				id: "pmessage.phandler", method: {
					process        : ["pbase.dom", "common.placeHolder", "pmessage.consts", "pmessage.validate"],
					showInCenter   : ["pbase.dom", "pmessage.consts"],
					sendMessage    : ["pmessage.validate", "pbase.dom", "pbase.post", "core.config", "pmessage.consts"],
					sendSucess     : ["pmessage.pdata", "pbase.dom"], sendFail: ["pmessage.pdata", "pbase.dom"],
					closeMessage   : ["pbase.dom"], getExtendNode: ["core.config", "pbase.client", "pbase.JSON"],
					hadnleColseNode: ["pbase.dom", "pmessage.consts"], resetPosition: ["pbase.dom", "common.util"],
					showMessage    : ["pbase.dom", "data.config", "pmessage.consts"],
					hideMessage    : ["pbase.dom", "pmessage.consts"]
				}
			}, {
				id: "pmessage.validate", method: {
					validateForm  : ["pbase.lib", "pmessage.pdata"], removeErrorTip: ["pbase.dom", "pmessage.consts"],
					registValidate: ["pbase.events"], showErrorTip: ["pmessage.consts", "pbase.dom"]
				}
			}], aspect  : [{
				id: "pmessage.main", pointCut: ["log.main.init, , init"]
			}]
		}
	}), define("embed/embedChat/bid", ["require"], function (require) {
		function e(e, t, n) {
			var i = n.OLDBIDKEY + e + "_BID", o = t.getItem(i);
			if (!o)return o; else return o = parseInt(o.substr(0, 13), 16).toString()
		}

		var exports = {};
		return exports.init = function (t, n, i, o, r, a, s) {
			if (n.isObject(s) && "undefined" != typeof a && "" !== a)return a;
			var c = o.BIDPRE + r;
			if (!a) a = t.getItem(c) || e(r, t, o) || i.getBid();
			return t.setItem(c, a), a
		}, exports
	}), define("embed/embedChat/pc/chat", ["require", "exports"], function (require, exports) {
		function e(e, t) {
			var n = window.screen.availWidth, i = window.screen.availHeight;
			return {left: Math.ceil((n - e) / 2), top: Math.ceil((i - t) / 2)}
		}

		function t(e) {}

		function n(e) {
			var t = e;
			if (/^https:/.test(e)) t = e.replace(/^https/, "http"); else if (/^\/\//.test(e)) t = "http:" + e;
			return t
		}

		function i(e) {}

		function o(e) {exports.openWebimLight(!0)}

		var r = null, a = null, s = {};
		exports.initSystemInvite = function (e) {e.sid = "-100", e.tid = "-1", e.fromType = 1, e.ttype = 1}, exports.refuseSuccess = function (e, t) {t.hide([a]), e.fromType = 1}, exports.sendInviteMessage = function (e, t, n, i, o) {
			var r = i.getServer("configBox").inviteBox;
			if (r.inviteTxt) {
				var a = new t({main: o.g("nbWebimLightEditor"), styles: {fontSize: "9pt"}});
				a.setContent(r.inviteTxt);
				var s = o.g("nbwlSendBtn");
				n.domTrigger(s, "click")
			}
		}, exports.openWebimLight = function (e, t, n, i) {
			var o = n.getServer("siteObj");
			if (!o.isWebim || i) {
				var r = (false || document.getElementById("newBridge")).require;
				r(["embed/webimlight/main"], function (e) {e.init()})
			}
		}, exports.autoOpenWebimLight = function (e, t) {
			var n = e.getServer("siteObj").siteId, i = "webimLightAlive" + n, o = t.localStorage.getItem(i) - 0;
			if (new Date - o < 2e3) exports.openWebimLight()
		}, exports.setVisitorFrom = function (e, t, n, i) {
			var o = t.getServer("siteObj");
			if (e.tid && "-1" !== e.tid && !i) o.from = 4; else if (0 === n) o.from = 5; else o.from = 6
		}, exports.openWebimWindow = function (t, i, o, a, c) {
			var d = o.getServer("siteObj"), u = o.getServer("configBox").inviteBox, l = {
				from: 0, sid: "-100", tid: c || "-1", ttype: 1, siteId: d.siteId, userId: d.userId
			};
			if (0 !== a) l = {
				from : t.fromType, sessionid: t.sid, siteId: d.siteId, tid: t.tid || "-1", userId: d.userId,
				ttype: t.ttype, messageText: u.inviteTxt
			}, exports.initSystemInvite();
			l.pageId = d.pageId, s.reqParam = l;
			var f = d.webRoot + "chatIndex";
			f     = n(f);
			var p = 590, m = 550, g = e(p, m), h = "left=" + g.left + ",top=" + g.top + ",resizable=1,width=" + p + ",height=" + m;
			if (!r && 4 !== t.siteStatus || 0 === t.siteStatus) {
				var v = "pcNBBridage" + (new Date).getTime();
				r     = window.open(f + "?" + i.jsonToQuery(s), v, h)
			} else if (!r || r.closed || !r.window) r = window.open(f + "?" + i.jsonToQuery(s), "pcNBBridage", h); else r.focus()
		}, exports.accept = function (e, t, n, i, o) {
			var r = n.getServer("siteObj");
			n.getServer("configBox").inviteBox;
			if (this.setVisitorFrom(i, o), !r.isWebim) {
				if (0 !== i) {
					if (r.invited = 0, 4 === r.from) r.invited = 1
				} else if (0 === i)if (e.gid = o || -1, e.invited = 0, e.tid = -1, o) e.tid = o;
				return void exports.openWebimLight()
			}
			this.openWebimWindow(i, o)
		}, exports.enterSuccess = function (e, t, n, i, o, r, s, c, d) {
			var u = o.getServer("siteObj");
			if (3 === d.status) c.show([a]), i.sid = d.sid, i.tid = d.tid, i.fromType = 2, i.ttype = 0; else if (4 === d.status) c.hide([a]), i.siteStatus = d.status;
			if (e.emit("circleShowInvite", d), exports.autoOpenWebimLight(), exports.initSystemInvite(), 4 !== d.status) n.localStorage.removeItem(r.TALKTYPEPRE + u.siteId);
			var l = s.getItem(r.TALKTYPEPRE + u.siteId);
			if (l && l.indexOf("webimlight") !== -1) exports.openWebimLight(!0);
			if (4 === d.status) {
				var f = d.sid, l = n.localStorage.getItem(r.TALKTYPEPRE + u.siteId) || "";
				if (!u.isWebim && !t.isConnected() && l.indexOf(f) !== -1) u.from = 5, exports.openWebimLight()
			} else n.localStorage.removeItem(r.TALKTYPEPRE + u.siteId);
			if (i.siteStatus = d.status, "3".indexOf(d.status) !== -1) c.show([a]); else {
				if (c.hide([a]), "iconBox" === u.clcikType && 0 !== d.status)return;
				exports.initSystemInvite()
			}
		}, exports.builtComunicate = function (e, t, n, r, s, c) {
			var d = e.getServer("siteObj");
			n.siteid = d.siteId, n.bid = r.init(d.siteId, d.bid || n.bid, d.session), n.eid = d.eid, n.urlRoot = d.webRoot, n.crossDomain = !0, n.syncSessionHistory = !0, n.visitType = 1, t.init(n), s.init(n), exports.pageOnload(), s.enter(exports.enterSuccess, i), t.on("initiative", exports.initiative), t.on("forcetalk", o), t.on("watchStatus", exports.watchStatus), t.on("csoffline", exports.csoffline), a = c.g("nb_invite_wrap")
		}, exports.initiative = function (e, t, n) {if (2 === e.fromType) t.show([a])}, exports.watchStatus = function (e, t, n, i, o, r, s) {
			var c = t.getServer("siteObj");
			if (a) {
				if (4 === s.status) {
					if (!c.isWebim && !n.isConnected()) exports.openWebimLight()
				} else o.removeItem(i.TALKTYPEPRE + c.siteId);
				if (e.siteStatus = s.status, "3".indexOf(s.status) !== -1) r.show([a]); else r.hide([a]), exports.initSystemInvite()
			}
		}, exports.csoffline = function (e) {e.showInCenter()}, exports.refuse = function (e, n, i) {
			var o = e.getServer("siteObj"), r = {
				v: o.userId, s: o.siteId, dev: "0", type: 1, sid: n.sid, tid: n.tid, tid_authtype: 4
			};
			i.push(r, exports.refuseSuccess, t)
		}, exports.pageOnload = function (e, t, n) {if (t.isPageOnload = !1, n.checkLoad()) t.isPageOnload = !0; else e.domOn(window, "load", function () {t.isPageOnload = !0})}
	}), define("embed/embedChat/pc/leave", ["require"], function (require) {
		var e, exports = {};
		return exports.pageLeave = function (t, n, i, o, r) {
			if (!e) {
				var a = i.getServer("siteObj"), s = 4 === +n.siteStatus, c = o.getItem(r.TALKTYPEPRE + n.siteid);
				if (!c) {
					if (s && 1 === a.isWebim) t.disconnect(); else t.disconnect(void 0, !1);
					e = !0
				}
			}
		}, exports.init = function (e) {e.domOn(window, "pagehide", exports.pagehideHandler), e.domOn(window, "unload", exports.unloadHandler)}, exports.pagehideHandler = function (e) {e.domOff(window, "unload", exports.unloadHandler), exports.pageLeave()}, exports.unloadHandler = function (e) {e.domOff(window, "pagehide", exports.pagehideHandler), exports.pageLeave()}, exports
	}), define("embed/embedChat/consts", [], function () {
		return {
			OLDBIDKEY: "QIAO_LS_", BIDPRE: "NEWBRIDGE_BID_", TALKTYPEPRE: "NEWBRIDGE_TALK_TYPE_",
			DOMAIN   : "//sgoutong.baidu.com"
		}
	}), define("embed/embedChat/config", ["require", "./bid", "./pc/chat", "./pc/leave", "./consts"], function (require) {
		return {
			package     : "pchat", resource: {
				bid   : require("./bid"), chat: require("./pc/chat"), leave: require("./pc/leave"),
				consts: require("./consts")
			}, injection: [{
				id: "pchat.chat", method: {
					setVisitorFrom    : ["core.config", "data.config"],
					openWebimWindow   : ["core.config", "core.net", "data.config"],
					accept            : ["core.config", "core.net", "data.config"],
					builtComunicate   : ["data.config", "core.main", "core.config", "pchat.bid", "core.site", "pbase.dom", "pchat.leave"],
					enterSuccess      : ["core.main", "core.chat", "imLib.main", "core.config", "data.config", "pchat.consts", "imLib.localStorage", "pbase.dom"],
					autoOpenWebimLight: ["data.config", "imLib.main"],
					openWebimLight    : ["pchat.consts", "imLib.localStorage", "data.config"],
					initSystemInvite  : ["core.config"],
					watchStatus       : ["core.config", "data.config", "core.chat", "pchat.consts", "imLib.localStorage", "pbase.dom"],
					refuse            : ["data.config", "core.config", "core.net"],
					initiative        : ["core.config", "pbase.dom"], refuseSuccess: ["core.config", "pbase.dom"],
					sendInviteMessage : ["common.util", "imEditor.main", "pbase.events", "data.config", "pbase.dom"],
					csoffline         : ["pmessage.pmain"], pageOnload: ["pbase.events", "core.config", "common.util"]
				}
			}, {
				id: "pchat.leave", method: {
					pageLeave: ["core.main", "core.config", "data.config", "imLib.localStorage", "pchat.consts"],
					init     : ["pbase.events"], pagehideHandler: ["pbase.events"], unloadHandler: ["pbase.events"]
				}
			}, {id: "pchat.bid", method: {init: ["imLib.localStorage", "imLib.lang", "pbase.lib", "pchat.consts"]}}],
			aspect      : [{
				id      : "pchat.chat",
				pointCut: ["pinvite.main.init, , builtComunicate", "toolbar.main.enableSendBtn, ,sendInviteMessage"]
			}, {id: "pchat.leave", pointCut: ["pchat.chat.builtComunicate, , init"]}]
		}
	}), define("lib/util", [], function () {
		function e(e, t) {
			for (var n, i = /<%([^%>]+)?%>/g, o = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g, r = "var r = [];\n", a = 0, s = function (e, t) {return t ? r += e.match(o) ? e + "\n" : "r.push(data." + e + ");\n" : r += "" !== e ? 'r.push("' + e.replace(/"/g, '\\"') + '");\n' : "", s}; n = i.exec(e);)s(e.slice(a, n.index))(n[1], !0), a = n.index + n[0].length;
			s(e.substr(a, e.length - a)), r += 'return r.join("");';
			var c = new Function("data", r.replace(/[\r\t\n]/g, ""));
			return c(t)
		}

		function t(e) {
			for (var t = {}, n = e.length; n--;) {
				var i = e[n];
				if (Object.prototype.toString.call(i).indexOf("Object") !== -1)for (var o in i)if (i.hasOwnProperty(o)) t[o] = i[o]
			}
			return t
		}

		function n(e, t) {
			if (e) {
				for (var n = "", i = e.split("<!-- end -->"), o = i.length; o--;) {
					var r = i[o];
					if (r) {
						if (1 === arguments.length) t = r.match(/\w{0,}( \-\->)/g)[0].match(/\w/g).join("");
						var a = "<!-- target: " + t + " -->";
						if (r.indexOf(a) !== -1) n = r
					} else;
				}
				return n
			}
			return ""
		}

		function i(e, t) {
			var n = {};
			n.phoneReg = /(^(\d{3,4}(-?))?\d{7,8})$|^((\+86)|(86))?(1[0-9][0-9]{9})/, n.emailReg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
			var i = t.match(n[e]);
			if (null != i)return !0; else return !1
		}

		function o(e) {if ("string" != typeof e)return e; else return e = e.replace(/</g, "&lt;"), e = e.replace(/>/g, "&gt;"), e = e.replace(/\"/g, "&quot;"), e = e.replace(/\'/g, "&apos;")}

		function r(e) {
			var t = {};
			if ("object" == typeof e)for (var n in e)if (e.hasOwnProperty && e.hasOwnProperty(n))if ("object" == typeof e[n]) t[n] = r(e[n]); else t[n] = e[n];
			return t
		}

		var a = function (e) {
			if ("string" != typeof e)return "";
			var t = document.createElement("a");
			return t.href = e, t.hostname
		}, s  = function (e) {return /\{\s*\[native code\]\s*\}/.test("" + e)}, c = function (e) {
			var t = new RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
			return String(e).replace(t, "")
		}, d  = function (e) {if (e = e || {}, !e.x || !e.y)return ""; else return "//map.baidu.com/mobile/webapp/place/marker/qt=inf&vt=map&act=read_share&code=/point=" + encodeURIComponent(e.x + "|" + e.y) + "&title=" + encodeURIComponent(e.name || "") + "&content=" + encodeURIComponent(e.alias || "")}, u = function (e) {
			if (e = e || {}, !e.x || !e.y)return "";
			var t = e.x, n = e.y, i = e.zoom || 15, o = e.width || 220, r = e.height || 110, a = e.style || "-1,//qiao.baidu.com/site/pinpc.png,-1";
			return "//api.map.baidu.com/staticimage?width=" + o + "&height=" + r + "&center=" + t + "," + n + "&markers=" + t + "," + n + "&zoom=" + i + "&markerStyles=" + a
		}, l  = function (e) {return "number" == typeof e && +e !== +e}, f = function () {
			var e = !1;
			if (e = "complete" === document.readyState, document.documentElement.doScroll)try {
				document.documentElement.doScroll("left"), e = !0
			} catch (t) {
				e = !1
			}
			return e
		};
		return {
			template: e, pickHtml: n, regext: i, filterXSS: o, extend: t, cloneObj: r, getHost: a, isNativeFun: s,
			trim    : c, getLocationUrl: d, getLocationImgUrl: u, isNaN: l, checkLoad: f
		}
	}), define("common/util", ["lib/util"], function (e) {return e}), define("lib/tpl", [], function () {
		var exports = {}, e = {};
		return exports.parse = function (t) {
			t     = t || "";
			var n = 0, i = "";
			t.replace(/<\!\-\-\s*target:\s*(\w+)\s*\-\->/g, function (o, r, a) {
				if (0 !== a) e[i] = t.substring(n, a);
				i = r, n = a
			}), e[i] = t.substring(n, t.length)
		}, exports.get = function (t) {return e[t] || ""}, exports
	}), define("common/tpl", ["lib/tpl"], function (e) {return e}), define("lib/pc/fixed_2", [], function () {
		function e() {for (var e = 0; e < t.length; e++)exports.setFixedPos(t[e])}

		var exports = {}, t = [];
		return exports.setFixedPos = function (e) {
			var t, n = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
			if (e.style.position = "absolute", void 0 === e.fixedTop) {
				if (t = e.style.top || e.currentStyle.top, !t || "auto" === t)if (t = e.style.bottom || e.currentStyle.bottom, t && t.indexOf("%") >= 0) t = n.clientHeight * (100 - parseInt(t, 10)) / 100 - e.offsetHeight; else if ("auto" === t) t = void 0; else if (t) t = n.clientHeight - e.offsetHeight - parseInt(t, 10);
				if (t) {
					if ("string" == typeof t && t.indexOf("%") >= 0) t = n.clientHeight * parseInt(t, 10) / 100; else t = parseInt(t, 10);
					e.fixedTop = t
				} else e.fixedTop = void 0
			}
			if (void 0 !== e.fixedTop) e.style.top = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + e.fixedTop + "px"
		}, exports.setFixed = function (n, i) {
			if (i)if (n.ie <= 6 || 7 === n.ie && !n.isStrict()) {
				if (i.fixedTop)return void exports.setFixedPos(i);
				if (!t.length) {
					var o = document.documentElement;
					o.style.backgroundImage = "url(about:blank)", o.style.backgroundAttachment = "fixed", document.execCommand("BackgroundImageCache", !1, !0), window.attachEvent("onscroll", e), window.attachEvent("onresize", e)
				}
				t.push(i), exports.setFixedPos(i)
			}
		}, exports
	}), define("common/pc/fixed_2", ["lib/pc/fixed_2"], function (e) {return e}), define("base/pc/brower", [], function () {
		var e, t = document, n = new RegExp("msie (\\d+\\.\\d+)|trident", "i");
		return {
			ie      : function () {return n.test(navigator.userAgent) ? t.documentMode || +RegExp.$1 : e}(),
			isBDBox : / baiduboxapp\//i.test(navigator.userAgent),
			opera   : /opera(\/| )(\d+(\.\d+)?)(.+?(version\/(\d+(\.\d+)?)))?/i.test(navigator.userAgent) ? +(RegExp.$6 || RegExp.$2) : void 0,
			isStrict: function () {return "CSS1Compat" === t.compatMode}, isMobile: function () {
				var e = navigator.userAgent;
				return !!e.match(/.*Mobile.*/) || "ontouchstart" in window
			}()
		}
	}), define("base/pc/dom", ["require"], function (require) {
		var exports = {};
		return exports.setStyles = function (e, t) {for (var n in t)if (t.hasOwnProperty(n)) this.setStyle(e, n, t[n])}, exports.setStyle = function (e, t, n) {e.style[t] = n}, exports.hide = function (e, t) {
			if (e.isType(t, "Array"))for (var n = t.length; n--;) {
				var i = t[n];
				if ("string" == typeof i) i = this.g(i);
				if (i) i.style.display = "none"; else;
			}
		}, exports.show = function (e, t) {
			if (e.isType(t, "Array"))for (var n = t.length; n--;) {
				var i = t[n];
				if ("string" == typeof i) i = this.g(i);
				i.style.display = "block";
			}
		}, exports.attributeName = function (e, t) {
			var n = e.ie, i = {};
			if (n < 8) i = {htmlFor: "htmlFor", className: "className"}; else i = {htmlFor: "for", className: "class"};
			return i[t] || t
		}, exports.createDom = function (e, t, n) {
			var i = document.createElement(e);
			for (var o in t)if (t.hasOwnProperty(o))if ("styles" === o) this.setStyles(i, t[o]); else i.setAttribute(this.attributeName(o), t[o]);
			if (n) n.appendChild(i);
			return i
		}, exports.hasClass = function (e, t) {
			for (var n = e.className.split(" "), i = 0; i < n.length; i++)if (t === n[i])return !0;
			return !1
		}, exports.modifyClass = function (e, t, n) {
			for (var i = e.className, o = i.split(/\s/), r = {}, a = 0; a < o.length; a++)r[o[a]] = !0;
			if (n) r[t] = !0; else delete r[t];
			o = [];
			for (var s in r)if (r.hasOwnProperty(s)) o.push(s);
			e.className = o.join(" ")
		}, exports.addClass = function (e, t) {this.modifyClass(e, t, !0)}, exports.removeClass = function (e, t) {this.modifyClass(e, t, !1)}, exports.appendHTML = function (e, t) {
			e     = e || "";
			var n = document.createElement("div");
			if (n.innerHTML = e, t)for (; n.firstChild;)t.appendChild(n.firstChild);
			return n.childNodes
		}, exports.appendNodes = function (e, t) {for (e = e || []; e[0];)t.appendChild(e[0])}, exports.createIframe = function (e, t, n, i) {
			var o = e.ie, r = o < 9 ? '<iframe name="' + n + '">' : "iframe", a = document.createElement(r);
			if (a.setAttribute("id", t), a.setAttribute("name", n), a.style.display = "none", a.setAttribute("src", "about:blank"), i) i.appendChild(a);
			return a
		}, exports.g = function (e, t) {
			var n = null;
			if ("string" == typeof t) n = document.getElementById(t); else if (e.isType(t, "HTML") || "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName) n = t; else if (t === window) n = t;
			return n
		}, exports.contain = function (e, t) {
			if (e === t)return !0;
			if (e === document.body)return !1;
			if (!e)return !1; else return this.contain(e.parentNode, t)
		}, exports.getTarget = function (e) {
			e     = e || window.event;
			var t = e.target || e.srcElement;
			return t
		}, exports.scrollToBottom = function (e) {e.scrollTop = e.scrollHeight - e.offsetHeight}, exports.prependNodes = function (e, t) {for (e = e || []; e[0];)t.insertBefore(e[0], t.firstChild || null)}, exports.prependHTML = function (e, t) {
			e     = e || "";
			var n = document.createElement("div");
			if (n.innerHTML = e, t)for (; n.firstChild;)t.insertBefore(n.firstChild, t.firstChild || null);
			return n.childNodes
		}, exports
	}), define("lib/pc/Fixed", ["require", "../../base/pc/brower", "../../base/pc/dom"], function (require) {
		function e() {if (6 === s.ie) u.execCommand("BackgroundImageCache", !1, !0)}

		function t() {return Math.max(u.documentElement.scrollTop, u.body.scrollTop)}

		function n() {
			var e = u.documentElement, t = u.body, n = d ? e : t;
			return n.clientHeight
		}

		function i() {return Math.max(u.documentElement.scrollLeft, u.body.scrollLeft)}

		function o() {
			var e = u.documentElement, t = u.body, n = d ? e : t;
			return n.clientWidth
		}

		function r(e, t) {
			if (e.indexOf("%") > -1) e = parseInt(e, 10) / 100, e *= t;
			return e = parseInt(e, 10)
		}

		function a(t, n) {
			var i = this;
			if (e(), !t.instanceOf(i, a)) i = new a(n); else i.init(n);
			return i
		}

		var s = require("../../base/pc/brower"), c = require("../../base/pc/dom"), d = s.isStrict(), u = document;
		return a.prototype = {
			constructor   : a, init: function (e) {
				if (!(s.ie <= 6 || 7 === s.ie && !s.isStrict()) || !e)return null;
				var t = this;
				return t.el = c.g(e), t.el.style.position = "absolute", t.set(), t
			}, set        : function () {
				var e = this;
				if (e.isReady())return e.getNodeRect(), e.analyze(), e.setHtml(), void e.bindEvent()
			}, bindEvent  : function () {
				var e = this;
				window.attachEvent("onscroll", function () {e.fix()}), window.attachEvent("onresize", function () {e.resizeFix()})
			}, resizeFix  : function () {
				var e = this;
				if (s.ie <= 6) e.getNodeRect(), e.analyze()
			}, analyzeTop : function () {
				var e, t = this, i = t.rect, o = n();
				if (!i.bottom || "auto" === i.bottom)return e = r(i.top, o), void(t.top = e);
				var a = r(i.bottom, o);
				e = o - a - t.el.offsetHeight, t.top = e
			}, analyzeLeft: function () {
				var e, t = this, n = t.rect, i = o();
				if (!n.right || "auto" === n.right)return e = r(n.left, i), void(t.left = e);
				var a = r(n.right, i);
				e = i - a - t.el.offsetWidth, t.left = e
			}, analyze    : function () {
				var e = this;
				if (e.isReady()) e.analyzeTop(), e.analyzeLeft(), e.fix()
			}, isReady    : function () {
				var e = this, t = e.el;
				if (t)return !0; else return !1
			}, setHtml    : function () {
				var e = u.documentElement;
				e.style.backgroundImage = "url(about:blank)", e.style.backgroundAttachment = "fixed"
			}, getNodeRect: function () {
				var e  = this, t = e.el, n = t.style, i = t.currentStyle;
				e.rect = {
					top: n.top || i.top, left: n.left || i.left, right: n.right || i.right, bottom: n.bottom || i.bottom
				}
			}, fix        : function () {
				var e = this, n = e.el;
				if (e.isReady()) {
					var o = t(), r = i();
					n.style.top = o + e.top + "px", n.style.left = r + e.left + "px", n.style.bottom = "auto", n.style.right = "auto"
				}
			}
		}, a
	}), define("common/pc/Fixed", ["lib/pc/Fixed"], function (e) {return e}), define("lib/view", ["require"], function (e) {
		var exports = {}, t = "newBridge";
		return exports.getWrap = function (e) {
			var n = e.g(t);
			return n
		}, exports
	}), define("common/view", ["lib/view"], function (e) {return e}), define("lib/pc/placeholder", ["require"], function (require) {
		var exports = {}, e = "placeholder" in document.createElement("input"), t = "data-ph", n = "mess-placeholder", i = "place-style";
		return exports.ctrlFocus = function (e, o) {
			var r = o || window.event, a = r.target || r.srcElement, s = a.getAttribute(t), c = e.trim(a.value);
			if (s === c) a.className = a.className.replace(n, i), a.value = ""
		}, exports.ctrlBlur = function (e, o) {
			var r = o || window.event, a = r.target || r.srcElement, s = a.getAttribute(t), c = e.trim(a.value);
			if ("" === c) a.className = a.className.replace(i, n), a.value = s
		}, exports.init = function (e, i, o, r) {
			if (e.ie && !(e.ie > 9))for (var a, s = r.elements || [r], c = 0; a = s[c]; c++)if ("INPUT" === a.tagName || "TEXTAREA" === a.tagName) {
				var d = a.getAttribute(t);
				if (!d)continue;
				o.domOn(a, "focus", exports.ctrlFocus), o.domOn(a, "blur", exports.ctrlBlur), a.className += " " + n, a.value = d
			}
		}, exports.getValue = function (n) {
			var i = n.value;
			if (!e && n.getAttribute(t) === i)return n.value = "", ""; else return i
		}, exports.getPh = function (e) {
			var n = e.getAttribute(t);
			return n
		}, exports
	}), define("common/pc/placeholder", ["lib/pc/placeholder"], function (e) {return e}), define("lib/cookie", [], function () {
		var exports = {};
		return exports.get = function (e) {
			var t = new RegExp("(^| )" + e + "=([^;]*)(;|$)"), n = t.exec(document.cookie);
			return n ? decodeURIComponent(n[2]) : null
		}, exports.set = function (e, t, n) {
			n = n || {};
			var i;
			if (n.expires)if (i = n.expires, "number" == typeof i) i = new Date, i.setTime(n.expires + i.getTime());
			document.cookie = e + "=" + encodeURIComponent(t) + (n.path ? "; path=" + n.path : "") + (n.expires ? "; expires=" + n.expires.toGMTString() : "") + (n.domain ? "; domain=" + n.domain : "") + (n.secure ? "; secure" : "")
		}, exports
	}), define("common/cookie", ["lib/cookie"], function (e) {return e}), define("lib/pc/CustomSelect", ["require"], function (require) {
		function e() {
			this.options = {
				selectIndex: 0, content: [], style: {}
			}
		}

		function t(e) {return document.createElement(e)}

		function n(e, n) {
			var i = t(e);
			return i.className = "custom-select-" + n, i
		}

		function i(e, t) {
			for (var n in t)if (t.hasOwnProperty(n)) e[n] = t[n];
			return e
		}

		function o(e) {for (; e.hasChildNodes();)e.removeChild(e.firstChild)}

		function r(e, t) {
			for (; e;) {
				if (e === t)return !0;
				e = e.parentNode
			}
			return !1
		}

		function a(e) {
			var t = e || window.event;
			return t.target || t.srcElement
		}

		function s(e, t, n) {if (e.addEventListener) e.addEventListener(t, n, !1); else if (e.attachEvent) e.attachEvent("on" + t, n); else e[t] = n}

		function c(e, t) {return e[t] ? e[t].split(":")[0] || "" : ""}

		function d(e, t) {return e[t] ? e[t].split(":")[1] || "" : ""}

		function u(e) {
			var t = a(e);
			if (!r(t, this.main)) this.hideLayer()
		}

		function l(e) {
			var t = this.body;
			if ("block" === t.style.display) this.hideLayer(); else this.showLayer(), m.apply(this)
		}

		function f(e) {
			var t = a(e);
			if (t.className.indexOf("custom-select-" + b) > -1) this.setProperties({selectIndex: t.index});
			this.hideLayer()
		}

		function p(e) {
			var t = this.container.offsetWidth;
			this.options.style.width = t, this.setProperties({style: this.options}), this.hideLayer()
		}

		function m() {
			var e = this.title.getBoundingClientRect(), t = this.body.offsetHeight, n = this.title.offsetHeight, i = document.documentElement.clientHeight, o = i - (e.top + n), r = h(this.title, v(this.options.layerCont));
			if (t >= o) g(this.body, {
				top: r.top - t + y + "px", left: r.left + "px"
			}); else g(this.body, {top: r.top + n - y + "px", left: r.left + "px"})
		}

		function g(e, t) {for (var n in t)if (t.hasOwnProperty(n)) e.style[n] = t[n]}

		function h(e, t) {
			for (var n = 0, i = 0; e;)if (e !== t) n += e.offsetTop, i += e.offsetLeft, e = e.offsetParent; else e = null;
			return {top: n, left: i}
		}

		function v(e) {if ("string" == typeof e)return document.getElementById(e); else return null}

		var b = "list-item", y = 1;
		return e.prototype.init = function (e) {
			var t = this.container = v(e.id);
			if (t) {
				if (e._self = this, this.options = i(this.options, e), !this.options.style.width) this.options.style.width = t.offsetWidth;
				this.initHtml(this.options), this.initEvent(), t.customSelect = this
			}
		}, e.prototype.initHtml = function (e) {
			if (this.container) {
				this.main = n("ins", "main"), this.title = n("ins", "title"), this.titleContent = n("ins", "title-content"), this.titleInput = n("input", "title-input"), this.body = n("ins", "body"), this.bodyContent = n("ins", "body-content"), this.bodyList = n("ins", "body-list"), this.title.appendChild(this.titleContent), this.title.appendChild(this.titleInput), this.bodyContent.appendChild(this.bodyList), this.body.appendChild(this.bodyContent), this.main.appendChild(this.title), g(this.titleInput, {display: "none"});
				var t = e.layerCont ? v(e.layerCont) : document.getElementsByTagName("body")[0];
				t.appendChild(this.body), this.setProperties(e), this.container.appendChild(this.main)
			}
		}, e.prototype.initEvent = function () {
			var e = this;
			s(this.main, "click", function (t) {l.call(e, t)}), s(this.body, "click", function (t) {f.call(e, t)}), s(document, "click", function (t) {u.call(e, t)}), s(window, "resize", function (t) {p.call(e, t)}), s(window, "scroll", function (t) {e.hideLayer()})
		}, e.prototype.showLayer = function () {this.body.style.display = "block"}, e.prototype.hideLayer = function () {this.body.style.display = "none"}, e.prototype.setProperties = function (e) {
			var t = [];
			for (var n in e)if (e.hasOwnProperty(n)) t.push(n);
			e = this.options = i(this.options, e);
			for (var o = 0, r = t.length; o < r; o++) {
				var a = t[o];
				if ("function" == typeof this.repaint[a]) this.repaint[a](e)
			}
		}, e.prototype.getSelectText = function () {return this.getText(this.options.selectIndex)}, e.prototype.getSelectValue = function () {return this.getValue(this.options.selectIndex)}, e.prototype.getText = function (e) {return this.options.content[e] ? this.options.content[e].split(":")[0] || "" : ""}, e.prototype.getValue = function (e) {return this.options.content[e] ? this.options.content[e].split(":")[1] || "" : ""}, e.prototype.repaint = {
			name          : function (e) {
				var t = e._self;
				t.titleInput.setAttribute("name", e.name)
			}, style      : function (e) {
				var t = e._self, n = e.style;
				for (var i in n)if (n.hasOwnProperty(i))switch (i) {
					case"width":
						var o = parseInt(n.width, 10);
						t.main.style.width = o + "px", t.title.style.width = o - 2 * y + "px", t.body.style.width = o - 2 * y + "px";
						break;
					case"maxHeight":
						t.bodyList.style.maxHeight = parseInt(n.maxHeight, 10) + "px";
						break;
					case"zIndex":
						t.body.style.zIndex = n.zIndex
				}
			}, title      : function (e) {
				var t = e._self, n = e.selectIndex, i = c(e.content, n);
				t.titleContent.innerHTML = i, t.titleInput.value = i;
				var o = t.bodyList.firstChild ? t.bodyList.firstChild.childNodes : [];
				if (o.length) {
					for (var r = 0, a = o.length; r < a; r++)o[r].className = "custom-select-list-item";
					o[n].className = "custom-select-list-item active"
				}
			}, content    : function (e) {
				for (var t = e._self, i = n("ins", "body-list-cont"), r = e.content || [], a = 0, s = r.length; a < s; a++) {
					var u = n("ins", b);
					u.innerHTML = c(r, a), u.setAttribute("value", d(r, a)), u.index = a, i.appendChild(u)
				}
				o(t.bodyList), t.bodyList.appendChild(i)
			}, selectIndex: function (e) {this.title(e)}
		}, e
	}), define("common/pc/CustomSelect", ["lib/pc/CustomSelect"], function (e) {return e}), define("lib/convert", [], function () {
		function e(e) {
			var t, r;
			e[0] = o(e[0], -180, 180), e[1] = i(e[1], -74, 74), t = e.slice(0);
			for (var s = 0; s < a.length; s++)if (t[1] >= a[s]) {
				r = c[s];
				break
			}
			if (!r)for (s = a.length - 1; s >= 0; s--)if (t[1] <= -a[s]) {
				r = c[s];
				break
			}
			var d = n(e, r);
			return e = [d[0].toFixed(2), d[1].toFixed(2)]
		}

		function t(e) {
			var t, i;
			t = [Math.abs(e[0]), Math.abs(e[1])];
			for (var o = 0; o < r.length; o++)if (t[1] >= r[o]) {
				i = s[o];
				break
			}
			var a = n(e, i);
			return e = [a[0].toFixed(6), a[1].toFixed(6)]
		}

		function n(e, t) {
			if (e && t) {
				var n = t[0] + t[1] * Math.abs(e[0]), i = Math.abs(e[1]) / t[9], o = t[2] + t[3] * i + t[4] * i * i + t[5] * i * i * i + t[6] * i * i * i * i + t[7] * i * i * i * i * i + t[8] * i * i * i * i * i * i;
				return n *= e[0] < 0 ? -1 : 1, o *= e[1] < 0 ? -1 : 1, [n, o]
			}
		}

		function i(e, t, n) {
			if (null != t) e = Math.max(e, t);
			if (null != n) e = Math.min(e, n);
			return e
		}

		function o(e, t, n) {
			for (; e > n;)e -= n - t;
			for (; e < t;)e += n - t;
			return e
		}

		var exports = {}, r = [12890594.86, 8362377.87, 5591021, 3481989.83, 1678043.12, 0], a = [75, 60, 45, 30, 15, 0], s = [[1.410526172116255e-8, 898305509648872e-20, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -.03801003308653, 17337981.2], [-7.435856389565537e-9, 8983055097726239e-21, -.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 10260144.86], [-3.030883460898826e-8, 898305509983578e-20, .30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, .32710905363475, 6856817.37], [-1.981981304930552e-8, 8983055099779535e-21, .03278182852591, 40.31678527705744, .65659298677277, -4.44255534477492, .85341911805263, .12923347998204, -.04625736007561, 4482777.06], [3.09191371068437e-9, 8983055096812155e-21, 6995724062e-14, 23.10934304144901, -.00023663490511, -.6321817810242, -.00663494467273, .03430082397953, -.00466043876332, 2555164.4], [2.890871144776878e-9, 8983055095805407e-21, -3.068298e-8, 7.47137025468032, -353937994e-14, -.02145144861037, -1234426596e-14, .00010322952773, -323890364e-14, 826088.5]], c = [[-.0015702102444, 111320.7020616939, 0x60e374c3105a3, -0x24bb4115e2e164, 0x5cc55543bb0ae8, -0x7ce070193f3784, 0x5e7ca61ddf8150, -0x261a578d8b24d0, 0x665d60f3742ca, 82.5], [.0008277824516172526, 111320.7020463578, 647795574.6671607, -4082003173.641316, 10774905663.51142, -15171875531.51559, 12053065338.62167, -5124939663.577472, 913311935.9512032, 67.5], [.00337398766765, 111320.7020202162, 4481351.045890365, -23393751.19931662, 79682215.47186455, -115964993.2797253, 97236711.15602145, -43661946.33752821, 8477230.501135234, 52.5], [.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5], [-.0003441963504368392, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5], [-.0003218135878613132, 111320.7020701615, .00369383431289, 823725.6402795718, .46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, .37238884252424, 7.45]];
		return exports.pixelToLngLat = function (e, n, i) {return t([e / Math.pow(2, i - 18), n / Math.pow(2, i - 18)])}, exports.lngLatToPixel = function (t, n, i) {
			var o = e([t, n]), r = o[0] * Math.pow(2, i - 18), a = o[1] * Math.pow(2, i - 18);
			return [Math.ceil(r), Math.ceil(a)]
		}, exports
	}), define("common/convert", ["lib/convert"], function (e) {return e}),define("lib/pcConfig", ["require", "./util", "./tpl", "./pc/fixed_2", "./pc/Fixed", "./view", "./pc/placeholder", "./cookie", "./pc/CustomSelect", "./convert"], function (require) {
		return {
			package     : "common", resource: {
				util  : require("./util"), tpl: require("./tpl"), fixed: require("./pc/fixed_2"),
				fix   : require("./pc/Fixed"), view: require("./view"), placeHolder: require("./pc/placeholder"),
				cookie: require("./cookie"), CustomSelect: require("./pc/CustomSelect"), convert: require("./convert")
			}, injection: [{
				id: "common.fixed", method: {Fixed: ["pbase.lib"], setFixed: ["pbase.browser"]}
			}, {id: "common.view", method: {getWrap: ["pbase.dom"]}}, {
				id: "common.placeHolder", method: {
					init    : ["pbase.browser", "pbase.lib", "pbase.events"], ctrlFocus: ["pbase.lib"],
					ctrlBlur: ["pbase.lib"]
				}
			}]
		}
	}),define("common/pcConfig", ["lib/pcConfig"], function (e) {return e}),define("base/pc/event", ["require"], function (require) {
		var exports = {}, e = {};
		return exports.on = function (t, n) {(e[t] = e[t] || []).push(n)}, exports.off = function (t, n) {
			var i = [].slice.call(arguments, 0).length;
			if (0 === i.length)return void(e = []);
			if (1 === i.length)return delete e[t], e; else return
		}, exports.trigger = function (t) {
			var n = [].slice.call(arguments, 1), i = e[t];
			if (i)for (var o = i.length; o--;)i[o].call(this, n)
		}, exports.domOn = function (e, t, n, i, o, r) {
			var a = [];
			if (t.isType(n, "Array"))for (var s = n.length; s--;)a.push(n[s]); else a.push(n);
			for (var c = a.length; c--;) {
				var d = e.g(a[c]) || a[c];
				if (d)if (d.addEventListener) d.addEventListener(i, o, !1); else if (d.attactEvent) d.attachEvent("on" + i, o); else d["on" + i] = o
			}
		}, exports.domTrigger = function (e, t) {
			var n, i = null;
			if (document.createEventObject) n = document.createEventObject(), i = e.fireEvent("on" + t, n); else n = document.createEvent("HTMLEvents"), n.initEvent(t, !0, !0), i = !e.dispatchEvent(n);
			return i
		}, exports.domOff = function (e, t, n, i) {
			var o = e.g(t);
			if (o)if (o.removeEventListener) o.removeEventListener(n, i, !1); else if (o.detactEvent) o.detachEvent("on" + n, i); else o["on" + n] = void 0
		}, exports.domStop = function (e) {if (e = e || window.event, e.stopPropagation) e.stopPropagation(); else e.cancelBubble = !0}, exports.domPrevent = function (e) {
			if (e = e || window.event, e.preventDefault) e.preventDefault();
			e.returnValue = !1
		}, exports
	}),define("base/pc/post", ["require"], function (require) {
		function e(e) {
			var t = {};
			if (t.status = 0, 0 === t.status) exports.sucess(t); else exports.fail(t);
			var n = e || window.event, i = n.target || n.srcElement;
			i.parentNode.removeChild(i), i.onreadystatechange = null, i.onload = null
		}

		function t() {}

		function n(e, t) {
			var n = document.getElementById(t);
			if (!n.hidden) {
				for (var i in e)if (e.hasOwnProperty(i)) {
					var o = document.createElement("input");
					o.type = "hidden", o.name = i, o.value = e[i], n.appendChild(o)
				}
				n.hidden = !0
			}
		}

		var exports = {};
		return exports.postAjax = function (i, o, r, a, s, c, d, u) {
			var l          = o.getWrap();
			exports.sucess = u || t;
			var f          = "nb-board-iframe-js", p = document.getElementById(f);
			if (!p) p = i.createIframe(f, f, l);
			var m;
			if ("object" == typeof p.onload || "object" == typeof p.onreadystatechange) p.onreadystatechange = function () {if (/^loaded|complete$/.test(this.readyState)) this.onreadystatechange = null, e.call(this)}, p.onload = e;
			if (r.ie) m = document.charset, document.charset = "utf-8";
			var g = document.getElementById(d);
			if (!g) g = i.createDom("form", {id: d, action: s, method: "post", "accept-charset": "utf-8"}, l);
			if (n(c, d), g.target = f, r.ie && r.ie < 10) g.onsubmit = function () {
				for (var e, t = g.elements, n = 0; e = t[n]; n++)e.value = a.getValue(e);
				for (g.submit(), n = 0; e = t[n]; n++)if ("" === e.value) e.value = a.getPh(e)
			}, g.onsubmit(); else g.submit();
			document.charset = m
		}, exports
	}),define("base/pc/client", ["require"], function (require) {
		var exports = {};
		return exports.getInfo = function () {
			function e() {
				var e = (new Date).getTimezoneOffset(), t = parseInt(e / 60, 10), n = e % 60, i = "-";
				if (t < 0 || n < 0)if (i = "+", t = -t, n < 0) n = -n;
				return t += "", n += "", "UTC" + i + t + ":" + n
			}

			var t = window.navigator, n = window.screen, i = {
				language: t.language || t.systemLanguage, color: n.colorDepth + "", ppi: n.width + "*" + n.height,
				timeZone: e()
			};
			return i
		}, exports
	}),define("base/pc/json", [], function () {
		function e(e) {
			var t = {}.toString.call(e);
			return t = t.substring(8, t.length - 1), t.toLowerCase()
		}

		function t(t) {
			var i = n[e(t)];
			return i ? i(t) : "" + t
		}

		var n = {};
		return n.array = function (e) {
			var n = [];
			n.push("[");
			for (var i = 0, o = e.length; i < o; i++)n.push(t(e[i])), n.push(",");
			return n.splice(n.length - 1, 1), n.push("]"), n.join("")
		}, n.object = function (e) {
			if (null === e)return "null";
			var n = [];
			n.push("{");
			for (var i in e)if (e.hasOwnProperty(i)) n = n.concat(['"' + i + '":', t(e[i]), ","]);
			return n.splice(n.length - 1, 1), n.push("}"), n.join("")
		}, n.string = function (e) {return '"' + e + '"'}, {
			parse       : function (e) {
				var t = null;
				try {
					if (window.JSON && window.JSON.parse) t = window.JSON.parse(e); else t = new Function("return (" + e + ");")()
				} catch (e) {
				}
				return t
			}, stringify: function (e) {
				var n;
				if (window.JSON && window.JSON.stringify) n = window.JSON.stringify(e); else n = t(e);
				return n
			}
		}
	}),define("base/basePcConfig", ["require", "./pc/brower", "./pc/dom", "./pc/lib", "./pc/event", "./pc/post", "./pc/client", "./pc/json"], function (require) {
		return {
			package     : "pbase", resource: {
				browser: require("./pc/brower"), dom: require("./pc/dom"), lib: require("./pc/lib"),
				events : require("./pc/event"), post: require("./pc/post"), client: require("./pc/client"),
				JSON   : require("./pc/json")
			}, injection: [{
				id    : "pbase.post",
				method: {postAjax: ["pbase.dom", "common.view", "pbase.browser", "common.placeHolder"]}
			}, {
				id: "pbase.dom", method: {
					hide         : ["pbase.lib"], show: ["pbase.lib"], g: ["pbase.lib"],
					attributeName: ["pbase.browser"], createIframe: ["pbase.browser"]
				}
			}, {id: "pbase.events", method: {domOn: ["pbase.dom", "pbase.lib"], domOff: ["pbase.dom"]}}]
		}
	}),define("embed/entry/pc/pcConfig", ["require", "../../data/bullConfig", "im-core/bullConfig", "im-lib/config", "../../log/config", "../../icon/iconPConfig", "../../invite/invitePConfig", "../../message/messagePConfig", "../../embedChat/config", "lib/pcConfig", "../../../common/pcConfig", "../../../base/basePcConfig"], function (require) {
		return {
			package     : "embed",
			importConfig: [require("../../data/bullConfig"), require("im-core/bullConfig"), require("im-lib/config"), require("../../log/config"), require("../../icon/iconPConfig"), require("../../invite/invitePConfig"), require("../../message/messagePConfig"), require("../../embedChat/config"), require("lib/pcConfig"), require("../../../common/pcConfig"), require("../../../base/basePcConfig")]
		}
	}),define("cl", ["require", "./base/pc/brower"], function (require) {
		var exports = {}, e = require("./base/pc/brower");
		return exports.load = function (t, n, i, o) {
			var r = document.createElement("link");
			if (r.setAttribute("rel", "stylesheet"), r.setAttribute("type", "text/css"), r.setAttribute("href", n.toUrl(t)), ("object" == typeof r.onload || "object" == typeof r.onreadystatechange) && !e.isBDBox) {
				var a = !1;
				r.onload = function () {r.onreadystatechange = null, r.onload = null, i(!0), a = !0}, r.onreadystatechange = function () {if (/^loaded|complete$/.test(this.readyState)) this.onreadystatechange = null, r.onload = null, i(!0), a = !0}, setTimeout(function () {if (!a) i(!0)}, 3e3)
			} else i(!0);
			var s = document.getElementsByTagName("head")[0] || document.body;
			s.appendChild(r)
		}, exports
	}),define("lib/css", ["cl"], function (e) {return e}),define("common/css", ["cl"], function (e) {return e}),define("embed/entry/pc/main", ["require", "bull", "./pcConfig", "cl!../../css/pc/main.css"], function (require) {
		var e = require("bull"), t = require("./pcConfig"), exports = {};
		return exports.init = function () {
			e.init(t), e.get("log.main").init(), e.get("log.main").logStartNb(), require("cl!../../css/pc/main.css");
			var n = e.get("data.config"), i = n.getServer("siteObj").isWebim;
			if (!i) {
				var o = (false || document.getElementById("newBridge")).require;
				o(["embed/webimlight/main"], function () {})
			}
			e.get("log.main").logEndNb()
		}, exports
	}),require(["embed/entry/pc/main"], function (n) {n.init()})
}(this);
