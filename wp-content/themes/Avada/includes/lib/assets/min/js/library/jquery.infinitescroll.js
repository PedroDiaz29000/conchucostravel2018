! function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
}(function(a, b) {
	"use strict";
	a.infinitescroll = function(b, c, d) {
		this.element = a(d), this._create(b, c) || (this.failed = !0)
	}, a.infinitescroll.defaults = {
		loading: {
			finished: b,
			finishedMsg: "<em>Congratulations, you've reached the end of the internet.</em>",
			img: "data:image/gif;base64,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",
			msg: null,
			msgText: "<em>Loading the next set of posts...</em>",
			selector: null,
			speed: "fast",
			start: b
		},
		state: {
			isDuringAjax: !1,
			isInvalidPage: !1,
			isDestroyed: !1,
			isDone: !1,
			isPaused: !1,
			isBeyondMaxPage: !1,
			currPage: 1
		},
		debug: !1,
		behavior: b,
		binder: a(window),
		nextSelector: "div.navigation a:first",
		navSelector: "div.navigation",
		contentSelector: null,
		extraScrollPx: 150,
		itemSelector: "div.post",
		animate: !1,
		pathParse: b,
		dataType: "html",
		appendCallback: !0,
		bufferPx: 40,
		errorCallback: function() {},
		infid: 0,
		pixelsFromNavToBottom: b,
		path: b,
		prefill: !1,
		maxPage: b
	}, a.infinitescroll.prototype = {
		_binding: function(a) {
			var c = this,
				d = c.options;
			return d.v = "2.0b2.120520", d.behavior && this["_binding_" + d.behavior] !== b ? void this["_binding_" + d.behavior].call(this) : "bind" !== a && "unbind" !== a ? (this._debug("Binding value  " + a + " not valid"), !1) : ("unbind" === a ? this.options.binder.unbind("smartscroll.infscr." + c.options.infid) : this.options.binder[a]("smartscroll.infscr." + c.options.infid, function() {
				c.scroll()
			}), void this._debug("Binding", a))
		},
		_create: function(c, d) {
			var e = a.extend(!0, {}, a.infinitescroll.defaults, c);
			this.options = e;
			var f = a(window);
			if (!this._validate(c)) return !1;
			var g = a(e.nextSelector).attr("href");
			if (!g) return this._debug("Navigation selector not found"), !1;
			e.path = e.path || this._determinepath(g), e.contentSelector = e.contentSelector || this.element, e.loading.selector = e.loading.selector || e.contentSelector, e.loading.msg = e.loading.msg || a('<div id="infscr-loading"><img alt="Loading..." src="' + e.loading.img + '" /><div>' + e.loading.msgText + "</div></div>"), (new Image).src = e.loading.img, e.pixelsFromNavToBottom === b && (e.pixelsFromNavToBottom = a(document).height() - a(e.navSelector).offset().top, this._debug("pixelsFromNavToBottom: " + e.pixelsFromNavToBottom));
			var h = this;
			return e.loading.start = e.loading.start || function() {
				a(e.navSelector).hide(), e.loading.msg.insertAfter(e.loading.selector).show(e.loading.speed, a.proxy(function() {
					this.beginAjax(e)
				}, h))
			}, e.loading.finished = e.loading.finished || function() {
				e.state.isBeyondMaxPage || e.loading.msg.fadeOut(e.loading.speed)
			}, e.callback = function(c, g, h) {
				e.behavior && c["_callback_" + e.behavior] !== b && c["_callback_" + e.behavior].call(a(e.contentSelector)[0], g, h), d && d.call(a(e.contentSelector)[0], g, e, h), e.prefill && f.bind("resize.infinite-scroll", c._prefill)
			}, c.debug && (!Function.prototype.bind || "object" != typeof console && "function" != typeof console || "object" != typeof console.log || ["log", "info", "warn", "error", "assert", "dir", "clear", "profile", "profileEnd"].forEach(function(a) {
				console[a] = this.call(console[a], console)
			}, Function.prototype.bind)), this._setup(), e.prefill && this._prefill(), !0
		},
		_prefill: function() {
			function b() {
				return a(c.options.contentSelector).height() <= d.height()
			}
			var c = this,
				d = a(window);
			this._prefill = function() {
				b() && c.scroll(), d.bind("resize.infinite-scroll", function() {
					b() && (d.unbind("resize.infinite-scroll"), c.scroll())
				})
			}, this._prefill()
		},
		_debug: function() {
			!0 === this.options.debug && ("undefined" != typeof console && "function" == typeof console.log ? 1 === Array.prototype.slice.call(arguments).length && Array.prototype.slice.call(arguments)[0] : Function.prototype.bind || "undefined" == typeof console || "object" != typeof console.log || Function.prototype.call.call(console.log, console, Array.prototype.slice.call(arguments)))
		},
		_determinepath: function(a) {
			var c = this.options;
			if (c.behavior && this["_determinepath_" + c.behavior] !== b) return this["_determinepath_" + c.behavior].call(this, a);
			if (c.pathParse) return this._debug("pathParse manual"), c.pathParse(a, this.options.state.currPage + 1);
			if (a.match(/^(.*2?)\b2\b(.*?$)/)) a = a.match(/^(.*2?)\b2\b(.*?$)/).slice(1);
			else if (a.match(/^(.*?)\b2\b(.*?$)/)) a = a.match(/^(.*?)\b2\b(.*?$)/).slice(1);
			else if (a.match(/^(.*?)2(.*?$)/)) {
				if (a.match(/^(.*?page=)2(\/.*|$)/)) return a = a.match(/^(.*?page=)2(\/.*|$)/).slice(1);
				a = a.match(/^(.*?)2(.*?$)/).slice(1)
			} else {
				if (a.match(/^(.*?page=)1(\/.*|$)/)) return a = a.match(/^(.*?page=)1(\/.*|$)/).slice(1);
				this._debug("Sorry, we couldn't parse your Next (Previous Posts) URL. Verify your the css selector points to the correct A tag. If you still get this error: yell, scream, and kindly ask for help at infinite-scroll.com."), c.state.isInvalidPage = !0
			}
			return this._debug("determinePath", a), a
		},
		_error: function(a) {
			var c = this.options;
			if (c.behavior && this["_error_" + c.behavior] !== b) return void this["_error_" + c.behavior].call(this, a);
			"destroy" !== a && "end" !== a && (a = "unknown"), this._debug("Error", a), ("end" === a || c.state.isBeyondMaxPage) && this._showdonemsg(), c.state.isDone = !0, c.state.currPage = 1, c.state.isPaused = !1, c.state.isBeyondMaxPage = !1, this._binding("unbind")
		},
		_loadcallback: function(c, d, e) {
			var f, g = this.options,
				h = this.options.callback,
				i = g.state.isDone ? "done" : g.appendCallback ? "append" : "no-append";
			if (g.behavior && this["_loadcallback_" + g.behavior] !== b) return void this["_loadcallback_" + g.behavior].call(this, c, d, e);
			switch (i) {
				case "done":
					return this._showdonemsg(), !1;
				case "no-append":
					if ("html" === g.dataType && (d = "<div>" + d + "</div>", d = a(d).find(g.itemSelector)), 0 === d.length) return this._error("end");
					break;
				case "append":
					var j = c.children();
					if (0 === j.length) return this._error("end");
					for (f = document.createDocumentFragment(); c[0].firstChild;) f.appendChild(c[0].firstChild);
					this._debug("contentSelector", a(g.contentSelector)[0]), a(g.contentSelector)[0].appendChild(f), d = j.get()
			}
			if (g.loading.finished.call(a(g.contentSelector)[0], g), g.animate) {
				var k = a(window).scrollTop() + a(g.loading.msg).height() + g.extraScrollPx + "px";
				a("html,body").animate({
					scrollTop: k
				}, 800, function() {
					g.state.isDuringAjax = !1
				})
			}
			g.animate || (g.state.isDuringAjax = !1), h(this, d, e), g.prefill && this._prefill()
		},
		_nearbottom: function() {
			var c = this.options,
				d = 0 + a(document).height() - c.binder.scrollTop() - a(window).height();
			return c.behavior && this["_nearbottom_" + c.behavior] !== b ? this["_nearbottom_" + c.behavior].call(this) : (this._debug("math:", d, c.pixelsFromNavToBottom), d - c.bufferPx < c.pixelsFromNavToBottom)
		},
		_pausing: function(a) {
			var c = this.options;
			if (c.behavior && this["_pausing_" + c.behavior] !== b) return void this["_pausing_" + c.behavior].call(this, a);
			switch ("pause" !== a && "resume" !== a && null !== a && this._debug("Invalid argument. Toggling pause value instead"), a = !a || "pause" !== a && "resume" !== a ? "toggle" : a) {
				case "pause":
					c.state.isPaused = !0;
					break;
				case "resume":
					c.state.isPaused = !1;
					break;
				case "toggle":
					c.state.isPaused = !c.state.isPaused
			}
			return this._debug("Paused", c.state.isPaused), !1
		},
		_setup: function() {
			var a = this.options;
			return a.behavior && this["_setup_" + a.behavior] !== b ? void this["_setup_" + a.behavior].call(this) : (this._binding("bind"), !1)
		},
		_showdonemsg: function() {
			var c = this.options;
			if (c.behavior && this["_showdonemsg_" + c.behavior] !== b) return void this["_showdonemsg_" + c.behavior].call(this);
			c.loading.msg.find(".fusion-loading-spinner").hide().parent().find(".fusion-loading-msg").html(c.loading.finishedMsg).animate({
				opacity: 1
			}, 2e3, function() {
				a(this).parent().fadeOut(c.loading.speed), a(this).parent().parent().find(".fusion-load-more-button").fadeOut(c.loading.speed)
			}), c.errorCallback.call(a(c.contentSelector)[0], "done")
		},
		_validate: function(b) {
			for (var c in b)
				if (c.indexOf && c.indexOf("Selector") > -1 && 0 === a(b[c]).length) return this._debug("Your " + c + " found no elements."), !1;
			return !0
		},
		bind: function() {
			this._binding("bind")
		},
		destroy: function() {
			return this.options.state.isDestroyed = !0, this.options.loading.finished(), this._error("destroy")
		},
		pause: function() {
			this._pausing("pause")
		},
		resume: function() {
			this._pausing("resume")
		},
		beginAjax: function(c) {
			var d, e, f, g, h = this,
				i = c.path;
			if (c.state.currPage++, c.maxPage !== b && c.state.currPage > c.maxPage) return c.state.isBeyondMaxPage = !0, void this.destroy();
			switch (d = a(a(c.contentSelector).is("table, tbody") ? "<tbody/>" : "<div/>"), e = "function" == typeof i ? i(c.state.currPage) : i.join(c.state.currPage), h._debug("heading into ajax", e), f = "html" === c.dataType || "json" === c.dataType ? c.dataType : "html+callback", c.appendCallback && "html" === c.dataType && (f += "+callback"), f) {
				case "html+callback":
					h._debug("Using HTML via .load() method"), d.load(e + " " + c.itemSelector, b, function(a) {
						h._loadcallback(d, a, e)
					});
					break;
				case "html":
					h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), a.ajax({
						url: e,
						dataType: c.dataType,
						complete: function(a, b) {
							g = void 0 !== a.isResolved ? a.isResolved() : "success" === b || "notmodified" === b, g ? h._loadcallback(d, a.responseText, e) : h._error("end")
						}
					});
					break;
				case "json":
					h._debug("Using " + f.toUpperCase() + " via $.ajax() method"), a.ajax({
						dataType: "json",
						type: "GET",
						url: e,
						success: function(a, f, i) {
							if (g = void 0 !== i.isResolved ? i.isResolved() : "success" === f || "notmodified" === f, c.appendCallback)
								if (c.template !== b) {
									var j = c.template(a);
									d.append(j), g ? h._loadcallback(d, j) : h._error("end")
								} else h._debug("template must be defined."), h._error("end");
							else g ? h._loadcallback(d, a, e) : h._error("end")
						},
						error: function() {
							h._debug("JSON ajax request failed."), h._error("end")
						}
					})
			}
		},
		retrieve: function(c) {
			c = c || null;
			var d = this,
				e = d.options;
			return e.behavior && this["retrieve_" + e.behavior] !== b ? void this["retrieve_" + e.behavior].call(this, c) : e.state.isDestroyed ? (this._debug("Instance is destroyed"), !1) : (e.state.isDuringAjax = !0, void e.loading.start.call(a(e.contentSelector)[0], e))
		},
		scroll: function() {
			var a = this.options,
				c = a.state;
			if (a.behavior && this["scroll_" + a.behavior] !== b) return void this["scroll_" + a.behavior].call(this);
			c.isDuringAjax || c.isInvalidPage || c.isDone || c.isDestroyed || c.isPaused || this._nearbottom() && this.retrieve()
		},
		toggle: function() {
			this._pausing()
		},
		unbind: function() {
			this._binding("unbind")
		},
		update: function(b) {
			a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b))
		}
	}, a.fn.infinitescroll = function(b, c) {
		switch (typeof b) {
			case "string":
				var d = Array.prototype.slice.call(arguments, 1);
				this.each(function() {
					var c = a.data(this, "infinitescroll");
					return !!c && !(!a.isFunction(c[b]) || "_" === b.charAt(0)) && void c[b].apply(c, d)
				});
				break;
			case "object":
				this.each(function() {
					var d = a.data(this, "infinitescroll");
					d ? d.update(b) : (d = new a.infinitescroll(b, c, this), d.failed || a.data(this, "infinitescroll", d))
				})
		}
		return this
	};
	var c, d = a.event;
	d.special.smartscroll = {
		setup: function() {
			a(this).bind("scroll", d.special.smartscroll.handler)
		},
		teardown: function() {
			a(this).unbind("scroll", d.special.smartscroll.handler)
		},
		handler: function(b, d) {
			var e = this,
				f = arguments;
			b.type = "smartscroll", c && clearTimeout(c), c = setTimeout(function() {
				a(e).trigger("smartscroll", f)
			}, "execAsap" === d ? 0 : 100)
		}
	}, a.fn.smartscroll = function(a) {
		return a ? this.bind("smartscroll", a) : this.trigger("smartscroll", ["execAsap"])
	}
});