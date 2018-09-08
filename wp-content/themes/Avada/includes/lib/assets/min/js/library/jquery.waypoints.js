(function() {
	var a = [].indexOf || function(a) {
			for (var b = 0, c = this.length; b < c; b++)
				if (b in this && this[b] === a) return b;
			return -1
		},
		b = [].slice;
	! function(a, b) {
		"function" == typeof define && define.amd ? define("waypoints", ["jquery"], function(c) {
			return b(c, a)
		}) : b(a.jQuery, a)
	}(this, function(c, d) {
		var e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t;
		return e = c(d), l = a.call(d, "ontouchstart") >= 0, h = {
			horizontal: {},
			vertical: {}
		}, i = 1, k = {}, j = "waypoints-context-id", o = "resize.waypoints", p = "scroll.waypoints", q = 1, r = "waypoints-waypoint-ids", s = "waypoint", t = "waypoints", f = function() {
			function a(a) {
				var b = this;
				this.$element = a, this.element = a[0], this.didResize = !1, this.didScroll = !1, this.id = "context" + i++, this.oldScroll = {
					x: a.scrollLeft(),
					y: a.scrollTop()
				}, this.waypoints = {
					horizontal: {},
					vertical: {}
				}, a.data(j, this.id), k[this.id] = this, a.bind(p, function() {
					var a;
					if (!b.didScroll && !l) return b.didScroll = !0, a = function() {
						return b.doScroll(), b.didScroll = !1
					}, d.setTimeout(a, c[t].settings.scrollThrottle)
				}), a.bind(o, function() {
					var a;
					if (!b.didResize) return b.didResize = !0, a = function() {
						return c[t]("refresh"), b.didResize = !1
					}, d.setTimeout(a, c[t].settings.resizeThrottle)
				})
			}
			return a.prototype.doScroll = function() {
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
				}, !l || a.vertical.oldScroll && a.vertical.newScroll || c[t]("refresh"), c.each(a, function(a, d) {
					var e, f, g;
					return g = [], f = d.newScroll > d.oldScroll, e = f ? d.forward : d.backward, c.each(b.waypoints[a], function(a, b) {
						var c, e;
						return d.oldScroll < (c = b.offset) && c <= d.newScroll ? g.push(b) : d.newScroll < (e = b.offset) && e <= d.oldScroll ? g.push(b) : void 0
					}), g.sort(function(a, b) {
						return a.offset - b.offset
					}), f || g.reverse(), c.each(g, function(a, b) {
						if (b.options.continuous || a === g.length - 1) return b.trigger([e])
					})
				}), this.oldScroll = {
					x: a.horizontal.newScroll,
					y: a.vertical.newScroll
				}
			}, a.prototype.refresh = function() {
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
				}, c.each(a, function(a, b) {
					return c.each(e.waypoints[a], function(a, d) {
						var e, f, g, h, i;
						if (e = d.options.offset, g = d.offset, f = c.isWindow(d.element) ? 0 : d.$element.offset()[b.offsetProp], c.isFunction(e) ? e = e.apply(d.element) : "string" == typeof e && (e = parseFloat(e), d.options.offset.indexOf("%") > -1 && (e = Math.ceil(b.contextDimension * e / 100))), d.offset = f - b.contextOffset + b.contextScroll - e, (!d.options.onlyOnScroll || null == g) && d.enabled) return null !== g && g < (h = b.oldScroll) && h <= d.offset ? d.trigger([b.backward]) : null !== g && g > (i = b.oldScroll) && i >= d.offset ? d.trigger([b.forward]) : null === g && b.oldScroll >= d.offset ? d.trigger([b.forward]) : void 0
					})
				})
			}, a.prototype.checkEmpty = function() {
				if (c.isEmptyObject(this.waypoints.horizontal) && c.isEmptyObject(this.waypoints.vertical)) return this.$element.unbind([o, p].join(" ")), delete k[this.id]
			}, a
		}(), g = function() {
			function a(a, b, d) {
				var e, f;
				d = c.extend({}, c.fn[s].defaults, d), "bottom-in-view" === d.offset && (d.offset = function() {
					var a;
					return a = c[t]("viewportHeight"), c.isWindow(b.element) || (a = b.$element.height()), a - c(this).outerHeight()
				}), this.$element = a, this.element = a[0], this.axis = d.horizontal ? "horizontal" : "vertical", this.callback = d.handler, this.context = b, this.enabled = d.enabled, this.id = "waypoints" + q++, this.offset = null, this.options = d, b.waypoints[this.axis][this.id] = this, h[this.axis][this.id] = this, e = null != (f = a.data(r)) ? f : [], e.push(this.id), a.data(r, e)
			}
			return a.prototype.trigger = function(a) {
				if (this.enabled) return null != this.callback && this.callback.apply(this.element, a), this.options.triggerOnce ? this.destroy() : void 0
			}, a.prototype.disable = function() {
				return this.enabled = !1
			}, a.prototype.enable = function() {
				return this.context.refresh(), this.enabled = !0
			}, a.prototype.destroy = function() {
				return delete h[this.axis][this.id], delete this.context.waypoints[this.axis][this.id], this.context.checkEmpty()
			}, a.getWaypointsByElement = function(a) {
				var b, d;
				return (d = c(a).data(r)) ? (b = c.extend({}, h.horizontal, h.vertical), c.map(d, function(a) {
					return b[a]
				})) : []
			}, a
		}(), n = {
			init: function(a, b) {
				return null == b && (b = {}), null == b.handler && (b.handler = a), this.each(function() {
					var a, d, e, h;
					return a = c(this), e = null != (h = b.context) ? h : c.fn[s].defaults.context, c.isWindow(e) || (e = a.closest(e)), e = c(e), d = k[e.data(j)], d || (d = new f(e)), new g(a, d, b)
				}), c[t]("refresh"), this
			},
			disable: function() {
				return n._invoke(this, "disable")
			},
			enable: function() {
				return n._invoke(this, "enable")
			},
			destroy: function() {
				return n._invoke(this, "destroy")
			},
			prev: function(a, b) {
				return n._traverse.call(this, a, b, function(a, b, c) {
					if (b > 0) return a.push(c[b - 1])
				})
			},
			next: function(a, b) {
				return n._traverse.call(this, a, b, function(a, b, c) {
					if (b < c.length - 1) return a.push(c[b + 1])
				})
			},
			_traverse: function(a, b, e) {
				var f, g;
				return null == a && (a = "vertical"), null == b && (b = d), g = m.aggregate(b), f = [], this.each(function() {
					var b;
					return b = c.inArray(this, g[a]), e(f, b, g[a])
				}), this.pushStack(f)
			},
			_invoke: function(a, b) {
				return a.each(function() {
					var a;
					return a = g.getWaypointsByElement(this), c.each(a, function(a, c) {
						return c[b](), !0
					})
				}), this
			}
		}, c.fn[s] = function() {
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
			refresh: function() {
				return c.each(k, function(a, b) {
					return b.refresh()
				})
			},
			viewportHeight: function() {
				var a;
				return null != (a = d.innerHeight) ? a : e.height()
			},
			aggregate: function(a) {
				var b, d, e;
				return b = h, a && (b = null != (e = k[c(a).data(j)]) ? e.waypoints : void 0), b ? (d = {
					horizontal: [],
					vertical: []
				}, c.each(d, function(a, e) {
					return c.each(b[a], function(a, b) {
						return e.push(b)
					}), e.sort(function(a, b) {
						return a.offset - b.offset
					}), d[a] = c.map(e, function(a) {
						return a.element
					}), d[a] = c.unique(d[a])
				}), d) : []
			},
			above: function(a) {
				return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
					return b.offset <= a.oldScroll.y
				})
			},
			below: function(a) {
				return null == a && (a = d), m._filter(a, "vertical", function(a, b) {
					return b.offset > a.oldScroll.y
				})
			},
			left: function(a) {
				return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
					return b.offset <= a.oldScroll.x
				})
			},
			right: function(a) {
				return null == a && (a = d), m._filter(a, "horizontal", function(a, b) {
					return b.offset > a.oldScroll.x
				})
			},
			enable: function() {
				return m._invoke("enable")
			},
			disable: function() {
				return m._invoke("disable")
			},
			destroy: function() {
				return m._invoke("destroy")
			},
			extendFn: function(a, b) {
				return n[a] = b
			},
			_invoke: function(a) {
				var b;
				return b = c.extend({}, h.vertical, h.horizontal), c.each(b, function(b, c) {
					return c[a](), !0
				})
			},
			_filter: function(a, b, d) {
				var e, f;
				return (e = k[c(a).data(j)]) ? (f = [], c.each(e.waypoints[b], function(a, b) {
					if (d(e, b)) return f.push(b)
				}), f.sort(function(a, b) {
					return a.offset - b.offset
				}), c.map(f, function(a) {
					return a.element
				})) : []
			}
		}, c[t] = function() {
			var a, c;
			return c = arguments[0], a = 2 <= arguments.length ? b.call(arguments, 1) : [], m[c] ? m[c].apply(null, a) : m.aggregate.call(null, c)
		}, c[t].settings = {
			resizeThrottle: 100,
			scrollThrottle: 30
		}, e.load(function() {
			return c[t]("refresh")
		})
	})
}).call(this);