var __reflect = this && this.__reflect || function(e, t, r) {
        e.__class__ = t, r ? r.push(t) : r = [t], e.__types__ = e.__types__ ? r.concat(e.__types__) : r
    },
    __extends = this && this.__extends || function(e, t) {
        function r() {
            this.constructor = e
        }
        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
        e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
    },
    egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function t(e) {
                this.defaultVertexSrc = "attribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute vec2 aColor;\nuniform vec2 projectionVector;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nconst vec2 center = vec2(-1.0, 1.0);\nvoid main(void) {\n   gl_Position = vec4( (aVertexPosition / projectionVector) + center , 0.0, 1.0);\n   vTextureCoord = aTextureCoord;\n   vColor = vec4(aColor.x, aColor.x, aColor.x, aColor.x);\n}", this.fragmentSrc = "", this.gl = null, this.program = null, this.uniforms = {
                    projectionVector: {
                        type: "2f",
                        value: {
                            x: 0,
                            y: 0
                        },
                        dirty: !0
                    }
                }, this.gl = e
            }
            return t.prototype.init = function() {
                var t = this.gl,
                    r = e.WebGLUtils.compileProgram(t, this.defaultVertexSrc, this.fragmentSrc);
                t.useProgram(r), this.aVertexPosition = t.getAttribLocation(r, "aVertexPosition"), this.aTextureCoord = t.getAttribLocation(r, "aTextureCoord"), this.colorAttribute = t.getAttribLocation(r, "aColor"), -1 === this.colorAttribute && (this.colorAttribute = 2), this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];
                for (var i in this.uniforms) this.uniforms[i].uniformLocation = t.getUniformLocation(r, i);
                this.initUniforms(), this.program = r
            }, t.prototype.initUniforms = function() {
                if (this.uniforms) {
                    var e, t = this.gl;
                    for (var r in this.uniforms) {
                        e = this.uniforms[r], e.dirty = !0;
                        var i = e.type;
                        "mat2" === i || "mat3" === i || "mat4" === i ? (e.glMatrix = !0, e.glValueLength = 1, "mat2" === i ? e.glFunc = t.uniformMatrix2fv : "mat3" === i ? e.glFunc = t.uniformMatrix3fv : "mat4" === i && (e.glFunc = t.uniformMatrix4fv)) : (e.glFunc = t["uniform" + i], "2f" === i || "2i" === i ? e.glValueLength = 2 : "3f" === i || "3i" === i ? e.glValueLength = 3 : "4f" === i || "4i" === i ? e.glValueLength = 4 : e.glValueLength = 1)
                    }
                }
            }, t.prototype.syncUniforms = function() {
                if (this.uniforms) {
                    var e, t = this.gl;
                    for (var r in this.uniforms) e = this.uniforms[r], e.dirty && (1 === e.glValueLength ? e.glMatrix === !0 ? e.glFunc.call(t, e.uniformLocation, e.transpose, e.value) : e.glFunc.call(t, e.uniformLocation, e.value) : 2 === e.glValueLength ? e.glFunc.call(t, e.uniformLocation, e.value.x, e.value.y) : 3 === e.glValueLength ? e.glFunc.call(t, e.uniformLocation, e.value.x, e.value.y, e.value.z) : 4 === e.glValueLength && e.glFunc.call(t, e.uniformLocation, e.value.x, e.value.y, e.value.z, e.value.w), e.dirty = !1)
                }
            }, t.prototype.setProjection = function(e, t) {
                var r = this.uniforms.projectionVector;
                (r.value.x != e || r.value.y != t) && (r.value.x = e, r.value.y = t, r.dirty = !0)
            }, t.prototype.setAttribPointer = function(e) {
                var t = this.gl;
                t.vertexAttribPointer(this.aVertexPosition, 2, t.FLOAT, !1, e, 0), t.vertexAttribPointer(this.aTextureCoord, 2, t.FLOAT, !1, e, 8), t.vertexAttribPointer(this.colorAttribute, 1, t.FLOAT, !1, e, 16)
            }, t
        }();
        t.EgretShader = r, __reflect(r.prototype, "egret.web.EgretShader")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = "egret.BitmapData";
        e.registerClass(HTMLImageElement, r), e.registerClass(HTMLCanvasElement, r), e.registerClass(HTMLVideoElement, r)
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})),
function(e) {
    function t(t) {
        return t.hashCode = t.$hashCode = e.$hashCount++, t
    }
    e.$toBitmapData = t
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform sampler2D uSampler;\nvoid main(void) {\ngl_FragColor = texture2D(uSampler, vTextureCoord) * vColor;\n}", t
            }
            return __extends(t, e), t
        }(e.EgretShader);
        e.TextureShader = t, __reflect(t.prototype, "egret.web.TextureShader")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i() {
                var e = r.call(this) || this;
                return e.loaded = !1, e
            }
            return __extends(i, r), Object.defineProperty(i.prototype, "length", {
                get: function() {
                    if (this.originAudio) return this.originAudio.duration;
                    throw new Error("sound not loaded!")
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.load = function(t) {
                function r() {
                    o(), l.indexOf("firefox") >= 0 && (s.pause(), s.muted = !1), a.loaded = !0, a.dispatchEventWith(e.Event.COMPLETE)
                }

                function n() {
                    o(), a.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }

                function o() {
                    s.removeEventListener("canplaythrough", r), s.removeEventListener("error", n)
                }
                var a = this;
                this.url = t;
                var s = new Audio(t);
                s.addEventListener("canplaythrough", r), s.addEventListener("error", n);
                var l = navigator.userAgent.toLowerCase();
                l.indexOf("firefox") >= 0 && (s.autoplay = !0, s.muted = !0), s.load(), this.originAudio = s, i.$recycle(this.url, s)
            }, i.prototype.play = function(r, n) {
                r = +r || 0, n = +n || 0;
                var o = i.$pop(this.url);
                null == o && (o = this.originAudio.cloneNode()), o.autoplay = !0;
                var a = new t.HtmlSoundChannel(o);
                return a.$url = this.url, a.$loops = n, a.$startTime = r, a.$play(), e.sys.$pushSoundChannel(a), a
            }, i.prototype.close = function() {
                0 == this.loaded && this.originAudio && (this.originAudio.src = ""), this.originAudio && (this.originAudio = null), i.$clear(this.url)
            }, i.$clear = function(e) {
                var t = i.audios[e];
                t && (t.length = 0)
            }, i.$pop = function(e) {
                var t = i.audios[e];
                return t && t.length > 0 ? t.pop() : null
            }, i.$recycle = function(e, t) {
                var r = i.audios[e];
                null == i.audios[e] && (r = i.audios[e] = []), r.push(t)
            }, i
        }(e.EventDispatcher);
        r.MUSIC = "music", r.EFFECT = "effect", r.audios = {}, t.HtmlSound = r, __reflect(r.prototype, "egret.web.HtmlSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i(t) {
                var i = r.call(this) || this;
                return i.$startTime = 0, i.audio = null, i.isStopped = !1, i.canPlay = function() {
                    i.audio.removeEventListener("canplay", i.canPlay);
                    try {
                        i.audio.currentTime = i.$startTime
                    } catch (e) {} finally {
                        i.audio.play()
                    }
                }, i.onPlayEnd = function() {
                    return 1 == i.$loops ? (i.stop(), void i.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (i.$loops > 0 && i.$loops--, void i.$play())
                }, i._volume = 1, t.addEventListener("ended", i.onPlayEnd), i.audio = t, i
            }
            return __extends(i, r), i.prototype.$play = function() {
                if (this.isStopped) return void e.$error(1036);
                try {
                    this.audio.volume = this._volume, this.audio.currentTime = this.$startTime
                } catch (t) {
                    return void this.audio.addEventListener("canplay", this.canPlay)
                }
                this.audio.play()
            }, i.prototype.stop = function() {
                if (this.audio) {
                    this.isStopped || e.sys.$popSoundChannel(this), this.isStopped = !0;
                    var r = this.audio;
                    r.removeEventListener("ended", this.onPlayEnd), r.volume = 0, this._volume = 0, this.audio = null;
                    var i = this.$url;
                    window.setTimeout(function() {
                        r.pause(), t.HtmlSound.$recycle(i, r)
                    }, 200)
                }
            }, Object.defineProperty(i.prototype, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(t) {
                    return this.isStopped ? void e.$error(1036) : (this._volume = t, void(this.audio && (this.audio.volume = t)))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "position", {
                get: function() {
                    return this.audio ? this.audio.currentTime : 0
                },
                enumerable: !0,
                configurable: !0
            }), i
        }(e.EventDispatcher);
        t.HtmlSoundChannel = r, __reflect(r.prototype, "egret.web.HtmlSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i() {
                var e = r.call(this) || this;
                return e.loaded = !1, e
            }
            return __extends(i, r), i.prototype.load = function(r) {
                var i = this;
                this.url = r, QZAppExternal.preloadSound(function(t) {
                    0 == t.code ? (i.loaded = !0, i.dispatchEventWith(e.Event.COMPLETE)) : i.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }, {
                    bid: -1,
                    url: t.Html5Capatibility._QQRootPath + r,
                    refresh: 1
                })
            }, Object.defineProperty(i.prototype, "length", {
                get: function() {
                    throw new Error("qq sound not supported!")
                },
                enumerable: !0,
                configurable: !0
            }), i.prototype.play = function(r, i) {
                r = +r || 0, i = +i || 0;
                var n = new t.QQSoundChannel;
                return n.$url = this.url, n.$loops = i, n.$type = this.type, n.$startTime = r, n.$play(), e.sys.$pushSoundChannel(n), n
            }, i.prototype.close = function() {}, i
        }(e.EventDispatcher);
        r.MUSIC = "music", r.EFFECT = "effect", t.QQSound = r, __reflect(r.prototype, "egret.web.QQSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var r = t.call(this) || this;
                return r.$startTime = 0, r.isStopped = !1, r.onPlayEnd = function() {
                    return 1 == r.$loops ? (r.stop(), void r.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (r.$loops > 0 && r.$loops--, void r.$play())
                }, r._startTime = 0, r
            }
            return __extends(r, t), r.prototype.$play = function() {
                if (this.isStopped) return void e.$error(1036);
                var t = this;
                this._startTime = Date.now();
                var r = 0;
                r = t.$loops > 0 ? t.$loops - 1 : -1, this.$type == e.Sound.EFFECT ? QZAppExternal.playLocalSound(function(e) {}, {
                    bid: -1,
                    url: t.$url,
                    loop: r
                }) : QZAppExternal.playLocalBackSound(function(e) {}, {
                    bid: -1,
                    url: t.$url,
                    loop: r
                })
            }, r.prototype.stop = function() {
                this.$type == e.Sound.EFFECT ? QZAppExternal.stopSound() : QZAppExternal.stopBackSound(), this.isStopped || e.sys.$popSoundChannel(this), this.isStopped = !0
            }, Object.defineProperty(r.prototype, "volume", {
                get: function() {
                    return 1
                },
                set: function(t) {
                    return this.isStopped ? void e.$error(1036) : void 0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "position", {
                get: function() {
                    return (Date.now() - this._startTime) / 1e3
                },
                enumerable: !0,
                configurable: !0
            }), r
        }(e.EventDispatcher);
        t.QQSoundChannel = r, __reflect(r.prototype, "egret.web.QQSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function e() {}
            return e.decodeAudios = function() {
                if (!(e.decodeArr.length <= 0 || e.isDecoding)) {
                    e.isDecoding = !0;
                    var t = e.decodeArr.shift();
                    e.ctx.decodeAudioData(t.buffer, function(r) {
                        t.self.audioBuffer = r, t.success && t.success(), e.isDecoding = !1, e.decodeAudios()
                    }, function() {
                        alert("sound decode error: " + t.url + "！\nsee http://edn.egret.com/cn/docs/page/156"), t.fail && t.fail(), e.isDecoding = !1, e.decodeAudios()
                    })
                }
            }, e
        }();
        r.canUseWebAudio = window.AudioContext || window.webkitAudioContext || window.mozAudioContext, r.ctx = r.canUseWebAudio ? new(window.AudioContext || window.webkitAudioContext || window.mozAudioContext) : void 0, r.decodeArr = [], r.isDecoding = !1, t.WebAudioDecode = r, __reflect(r.prototype, "egret.web.WebAudioDecode");
        var i = function(i) {
            function n() {
                var e = i.call(this) || this;
                return e.loaded = !1, e
            }
            return __extends(n, i), Object.defineProperty(n.prototype, "length", {
                get: function() {
                    if (this.audioBuffer) return this.audioBuffer.duration;
                    throw new Error("sound not loaded!")
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.load = function(t) {
                function i() {
                    o.loaded = !0, o.dispatchEventWith(e.Event.COMPLETE)
                }

                function n() {
                    o.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                }
                var o = this;
                this.url = t;
                var a = new XMLHttpRequest;
                a.open("GET", t, !0), a.responseType = "arraybuffer", a.onload = function() {
                    r.decodeArr.push({
                        buffer: a.response,
                        success: i,
                        fail: n,
                        self: o,
                        url: o.url
                    }), r.decodeAudios()
                }, a.send()
            }, n.prototype.play = function(r, i) {
                r = +r || 0, i = +i || 0;
                var n = new t.WebAudioSoundChannel;
                return n.$url = this.url, n.$loops = i, n.$audioBuffer = this.audioBuffer, n.$startTime = r, n.$play(), e.sys.$pushSoundChannel(n), n
            }, n.prototype.close = function() {}, n
        }(e.EventDispatcher);
        i.MUSIC = "music", i.EFFECT = "effect", t.WebAudioSound = i, __reflect(i.prototype, "egret.web.WebAudioSound", ["egret.Sound"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i() {
                var i = r.call(this) || this;
                return i.$startTime = 0, i.bufferSource = null, i.context = t.WebAudioDecode.ctx, i.isStopped = !1, i._currentTime = 0, i._volume = 1, i.onPlayEnd = function() {
                    return 1 == i.$loops ? (i.stop(), void i.dispatchEventWith(e.Event.SOUND_COMPLETE)) : (i.$loops > 0 && i.$loops--, void i.$play())
                }, i._startTime = 0, i.context.createGain ? i.gain = i.context.createGain() : i.gain = i.context.createGainNode(), i
            }
            return __extends(i, r), i.prototype.$play = function() {
                if (this.isStopped) return void e.$error(1036);
                this.bufferSource && (this.bufferSource.onended = null, this.bufferSource = null);
                var t = this.context,
                    r = this.gain,
                    i = t.createBufferSource();
                this.bufferSource = i, i.buffer = this.$audioBuffer, i.connect(r), r.connect(t.destination), i.onended = this.onPlayEnd, this._startTime = Date.now(), this.gain.gain.value = this._volume, i.start(0, this.$startTime), this._currentTime = 0
            }, i.prototype.stop = function() {
                if (this.bufferSource) {
                    var t = this.bufferSource;
                    t.stop ? t.stop(0) : t.noteOff(0), t.onended = null, t.disconnect(), this.bufferSource = null, this.$audioBuffer = null
                }
                this.isStopped || e.sys.$popSoundChannel(this), this.isStopped = !0
            }, Object.defineProperty(i.prototype, "volume", {
                get: function() {
                    return this._volume
                },
                set: function(t) {
                    return this.isStopped ? void e.$error(1036) : (this._volume = t, void(this.gain.gain.value = t))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(i.prototype, "position", {
                get: function() {
                    return this.bufferSource ? (Date.now() - this._startTime) / 1e3 + this.$startTime : 0
                },
                enumerable: !0,
                configurable: !0
            }), i
        }(e.EventDispatcher);
        t.WebAudioSoundChannel = r, __reflect(r.prototype, "egret.web.WebAudioSoundChannel", ["egret.SoundChannel", "egret.IEventDispatcher"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(r, i) {
                void 0 === i && (i = !0);
                var n = t.call(this) || this;
                return n.loaded = !1, n.closed = !1, n.heightSet = 0 / 0, n.widthSet = 0 / 0, n.isPlayed = !1, n.screenChanged = function(t) {
                    var r = !!n.video.webkitDisplayingFullscreen;
                    r || (n.checkFullScreen(!1), e.Capabilities.isMobile || (n._fullscreen = r))
                }, n._fullscreen = !0, n.onVideoLoaded = function() {
                    n.video.removeEventListener("canplay", n.onVideoLoaded);
                    var t = n.video;
                    n.loaded = !0, n.posterData && (n.posterData.width = n.getPlayWidth(), n.posterData.height = n.getPlayHeight()), t.width = t.videoWidth, t.height = t.videoHeight, n.$invalidateContentBounds(), window.setTimeout(function() {
                        n.dispatchEventWith(e.Event.COMPLETE)
                    }, 200)
                }, n.$renderNode = new e.sys.BitmapNode, n.src = r, n.once(e.Event.ADDED_TO_STAGE, n.loadPoster, n), r && n.load(), n
            }
            return __extends(r, t), r.prototype.load = function(t, r) {
                var i = this;
                if (void 0 === r && (r = !0), t = t || this.src, this.src = t, !this.video || this.video.src != t) {
                    var n;
                    !this.video || e.Capabilities.isMobile ? (n = document.createElement("video"), this.video = n, n.controls = null) : n = this.video, n.src = t, n.setAttribute("autoplay", "autoplay"), n.setAttribute("webkit-playsinline", "true"), n.addEventListener("canplay", this.onVideoLoaded), n.addEventListener("error", function() {
                        return i.onVideoError()
                    }), n.addEventListener("ended", function() {
                        return i.onVideoEnded()
                    }), n.load(), n.play(), n.style.position = "absolute", n.style.top = "0px", n.style.zIndex = "-88888", n.style.left = "0px", n.height = 1, n.width = 1, window.setTimeout(function() {
                        return n.pause()
                    }, 170)
                }
            }, r.prototype.play = function(t, r) {
                var i = this;
                if (void 0 === r && (r = !1), 0 == this.loaded) return this.load(this.src), void this.once(e.Event.COMPLETE, function(e) {
                    return i.play(t, r)
                }, this);
                this.isPlayed = !0;
                var n = this.video;
                void 0 != t && (n.currentTime = +t || 0), n.loop = !!r, e.Capabilities.isMobile ? n.style.zIndex = "-88888" : n.style.zIndex = "9999", n.style.position = "absolute", n.style.top = "0px", n.style.left = "0px", n.height = n.videoHeight, n.width = n.videoWidth, "Windows PC" != e.Capabilities.os && "Mac OS" != e.Capabilities.os && window.setTimeout(function() {
                    n.width = 0
                }, 1e3), this.checkFullScreen(this._fullscreen)
            }, r.prototype.checkFullScreen = function(t) {
                var r = this.video;
                if (t) null == r.parentElement && (r.removeAttribute("webkit-playsinline"), document.body.appendChild(r)), e.stopTick(this.markDirty, this), this.goFullscreen();
                else if (null != r.parentElement && r.parentElement.removeChild(r), r.setAttribute("webkit-playsinline", "true"), this.setFullScreenMonitor(!1), e.startTick(this.markDirty, this), e.Capabilities.isMobile) return this.video.currentTime = 0, void this.onVideoEnded();
                r.play()
            }, r.prototype.goFullscreen = function() {
                var t, r = this.video;
                return t = e.web.getPrefixStyleName("requestFullscreen", r), r[t] || (t = e.web.getPrefixStyleName("requestFullScreen", r), r[t]) ? (r.removeAttribute("webkit-playsinline"), r[t](), this.setFullScreenMonitor(!0), !0) : !0
            }, r.prototype.setFullScreenMonitor = function(e) {
                var t = this.video;
                e ? (t.addEventListener("mozfullscreenchange", this.screenChanged), t.addEventListener("webkitfullscreenchange", this.screenChanged), t.addEventListener("mozfullscreenerror", this.screenError), t.addEventListener("webkitfullscreenerror", this.screenError)) : (t.removeEventListener("mozfullscreenchange", this.screenChanged), t.removeEventListener("webkitfullscreenchange", this.screenChanged), t.removeEventListener("mozfullscreenerror", this.screenError), t.removeEventListener("webkitfullscreenerror", this.screenError))
            }, r.prototype.screenError = function() {
                e.$error(3014)
            }, r.prototype.exitFullscreen = function() {
                document.exitFullscreen ? document.exitFullscreen() : document.msExitFullscreen ? document.msExitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.oCancelFullScreen ? document.oCancelFullScreen() : document.webkitExitFullscreen && document.webkitExitFullscreen()
            }, r.prototype.onVideoEnded = function() {
                this.pause(), this.isPlayed = !1, this.$invalidateContentBounds(), this.dispatchEventWith(e.Event.ENDED)
            }, r.prototype.onVideoError = function() {
                this.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
            }, r.prototype.close = function() {
                var e = this;
                this.closed = !0, this.video.removeEventListener("canplay", this.onVideoLoaded), this.video.removeEventListener("error", function() {
                    return e.onVideoError()
                }), this.video.removeEventListener("ended", function() {
                    return e.onVideoEnded()
                }), this.pause(), 0 == this.loaded && this.video && (this.video.src = ""), this.video && this.video.parentElement && (this.video.parentElement.removeChild(this.video), this.video = null), this.loaded = !1
            }, r.prototype.pause = function() {
                this.video && this.video.pause(), e.stopTick(this.markDirty, this), this.$invalidate()
            }, Object.defineProperty(r.prototype, "volume", {
                get: function() {
                    return this.video ? this.video.volume : 1
                },
                set: function(e) {
                    this.video && (this.video.volume = e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "position", {
                get: function() {
                    return this.video ? this.video.currentTime : 0
                },
                set: function(e) {
                    this.video && (this.video.currentTime = e)
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "fullscreen", {
                get: function() {
                    return this._fullscreen
                },
                set: function(t) {
                    e.Capabilities.isMobile || (this._fullscreen = !!t, this.video && 0 == this.video.paused && this.checkFullScreen(this._fullscreen))
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "bitmapData", {
                get: function() {
                    return this.video && this.loaded ? (this._bitmapData || (this.video.width = this.video.videoWidth, this.video.height = this.video.videoHeight, this._bitmapData = new e.BitmapData(this.video), this._bitmapData.$deleteSource = !1), this._bitmapData) : null
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.loadPoster = function() {
                var t = this,
                    r = this.poster;
                if (r) {
                    var i = new e.ImageLoader;
                    i.once(e.Event.COMPLETE, function(e) {
                        i.data;
                        t.posterData = i.data, t.posterData.width = t.getPlayWidth(), t.posterData.height = t.getPlayHeight(), t.$invalidateContentBounds()
                    }, this), i.load(r)
                }
            }, r.prototype.$measureContentBounds = function(e) {
                var t = this.bitmapData,
                    r = this.posterData;
                t ? e.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight()) : r ? e.setTo(0, 0, this.getPlayWidth(), this.getPlayHeight()) : e.setEmpty()
            }, r.prototype.getPlayWidth = function() {
                return isNaN(this.widthSet) ? this.bitmapData ? this.bitmapData.width : this.posterData ? this.posterData.width : 0 / 0 : this.widthSet
            }, r.prototype.getPlayHeight = function() {
                return isNaN(this.heightSet) ? this.bitmapData ? this.bitmapData.height : this.posterData ? this.posterData.height : 0 / 0 : this.heightSet
            }, r.prototype.$render = function() {
                var t = this.$renderNode,
                    r = this.bitmapData,
                    i = this.posterData,
                    n = this.getPlayWidth(),
                    o = this.getPlayHeight();
                this.isPlayed && !e.Capabilities.isMobile || !i ? this.isPlayed && r && (t.image = r, t.imageWidth = r.width, t.imageHeight = r.height, e.WebGLUtils.deleteWebGLTexture(r.webGLTexture), r.webGLTexture = null, t.drawImage(0, 0, r.width, r.height, 0, 0, n, o)) : (t.image = i, t.imageWidth = n, t.imageHeight = o, t.drawImage(0, 0, i.width, i.height, 0, 0, n, o))
            }, r.prototype.markDirty = function() {
                return this.$invalidate(), !0
            }, r.prototype.$setHeight = function(e) {
                return this.heightSet = +e || 0, this.$invalidate(), this.$invalidateContentBounds(), t.prototype.$setHeight.call(this, e)
            }, r.prototype.$setWidth = function(e) {
                return this.widthSet = +e || 0, this.$invalidate(), this.$invalidateContentBounds(), t.prototype.$setWidth.call(this, e)
            }, Object.defineProperty(r.prototype, "paused", {
                get: function() {
                    return this.video ? this.video.paused : !0
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "length", {
                get: function() {
                    if (this.video) return this.video.duration;
                    throw new Error("Video not loaded!")
                },
                enumerable: !0,
                configurable: !0
            }), r
        }(e.DisplayObject);
        t.WebVideo = r, __reflect(r.prototype, "egret.web.WebVideo", ["egret.Video", "egret.DisplayObject"]), e.Video = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var e = t.call(this) || this;
                return e._url = "", e._method = "", e
            }
            return __extends(r, t), Object.defineProperty(r.prototype, "response", {
                get: function() {
                    if (!this._xhr) return null;
                    if (void 0 != this._xhr.response) return this._xhr.response;
                    if ("text" == this._responseType) return this._xhr.responseText;
                    if ("arraybuffer" == this._responseType && /msie 9.0/i.test(navigator.userAgent)) {
                        var e = window;
                        return e.convertResponseBodyToText(this._xhr.responseBody)
                    }
                    return "document" == this._responseType ? this._xhr.responseXML : null
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "responseType", {
                get: function() {
                    return this._responseType
                },
                set: function(e) {
                    this._responseType = e
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(r.prototype, "withCredentials", {
                get: function() {
                    return this._withCredentials
                },
                set: function(e) {
                    this._withCredentials = e
                },
                enumerable: !0,
                configurable: !0
            }), r.prototype.getXHR = function() {
                return window.XMLHttpRequest ? new window.XMLHttpRequest : new ActiveXObject("MSXML2.XMLHTTP")
            }, r.prototype.open = function(e, t) {
                void 0 === t && (t = "GET"), this._url = e, this._method = t, this._xhr && (this._xhr.abort(), this._xhr = null), this._xhr = this.getXHR(), this._xhr.onreadystatechange = this.onReadyStateChange.bind(this), this._xhr.onprogress = this.updateProgress.bind(this), this._xhr.open(this._method, this._url, !0)
            }, r.prototype.send = function(e) {
                if (null != this._responseType && (this._xhr.responseType = this._responseType), null != this._withCredentials && (this._xhr.withCredentials = this._withCredentials), this.headerObj)
                    for (var t in this.headerObj) this._xhr.setRequestHeader(t, this.headerObj[t]);
                this._xhr.send(e)
            }, r.prototype.abort = function() {
                this._xhr && this._xhr.abort()
            }, r.prototype.getAllResponseHeaders = function() {
                if (!this._xhr) return null;
                var e = this._xhr.getAllResponseHeaders();
                return e ? e : ""
            }, r.prototype.setRequestHeader = function(e, t) {
                this.headerObj || (this.headerObj = {}), this.headerObj[e] = t
            }, r.prototype.getResponseHeader = function(e) {
                if (!this._xhr) return null;
                var t = this._xhr.getResponseHeader(e);
                return t ? t : ""
            }, r.prototype.onReadyStateChange = function() {
                var t = this._xhr;
                if (4 == t.readyState) {
                    var r = t.status >= 400 || 0 == t.status,
                        i = (this._url, this);
                    window.setTimeout(function() {
                        r ? i.dispatchEventWith(e.IOErrorEvent.IO_ERROR) : i.dispatchEventWith(e.Event.COMPLETE)
                    }, 0)
                }
            }, r.prototype.updateProgress = function(t) {
                t.lengthComputable && e.ProgressEvent.dispatchProgressEvent(this, e.ProgressEvent.PROGRESS, t.loaded, t.total)
            }, r
        }(e.EventDispatcher);
        t.WebHttpRequest = r, __reflect(r.prototype, "egret.web.WebHttpRequest", ["egret.HttpRequest"]), e.HttpRequest = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = window.URL || window.webkitURL,
            i = function(i) {
                function n() {
                    var e = null !== i && i.apply(this, arguments) || this;
                    return e.data = null, e._crossOrigin = null, e._hasCrossOriginSet = !1, e.currentImage = null, e.request = null, e
                }
                return __extends(n, i), Object.defineProperty(n.prototype, "crossOrigin", {
                    get: function() {
                        return this._crossOrigin
                    },
                    set: function(e) {
                        this._hasCrossOriginSet = !0, this._crossOrigin = e
                    },
                    enumerable: !0,
                    configurable: !0
                }), n.prototype.load = function(r) {
                    if (t.Html5Capatibility._canUseBlob && 0 != r.indexOf("wxLocalResource:") && 0 != r.indexOf("data:") && 0 != r.indexOf("http:") && 0 != r.indexOf("https:")) {
                        var i = this.request;
                        i || (i = this.request = new e.web.WebHttpRequest, i.addEventListener(e.Event.COMPLETE, this.onBlobLoaded, this), i.addEventListener(e.IOErrorEvent.IO_ERROR, this.onBlobError, this), i.responseType = "blob"), i.open(r), i.send()
                    } else this.loadImage(r)
                }, n.prototype.onBlobLoaded = function(e) {
                    var t = this.request.response;
                    this.loadImage(r.createObjectURL(t))
                }, n.prototype.onBlobError = function(e) {
                    this.dispatchIOError(this.currentURL)
                }, n.prototype.loadImage = function(e) {
                    var t = new Image;
                    this.data = null, this.currentImage = t, this._hasCrossOriginSet ? this._crossOrigin && (t.crossOrigin = this._crossOrigin) : n.crossOrigin && (t.crossOrigin = n.crossOrigin), t.onload = this.onImageComplete.bind(this), t.onerror = this.onLoadError.bind(this), t.src = e
                }, n.prototype.onImageComplete = function(t) {
                    var r = this.getImage(t);
                    if (r) {
                        this.data = new e.BitmapData(r);
                        var i = this;
                        window.setTimeout(function() {
                            i.dispatchEventWith(e.Event.COMPLETE)
                        }, 0)
                    }
                }, n.prototype.onLoadError = function(e) {
                    var t = this.getImage(e);
                    t && this.dispatchIOError(t.src)
                }, n.prototype.dispatchIOError = function(t) {
                    var r = this;
                    window.setTimeout(function() {
                        r.dispatchEventWith(e.IOErrorEvent.IO_ERROR)
                    }, 0)
                }, n.prototype.getImage = function(t) {
                    var i = t.target,
                        n = i.src;
                    if (0 == n.indexOf("blob:")) try {
                        r.revokeObjectURL(i.src)
                    } catch (o) {
                        e.$warn(1037)
                    }
                    return i.onerror = null, i.onload = null, this.currentImage !== i ? null : (this.currentImage = null, i)
                }, n
            }(e.EventDispatcher);
        i.crossOrigin = null, t.WebImageLoader = i, __reflect(i.prototype, "egret.web.WebImageLoader", ["egret.ImageLoader"]), e.ImageLoader = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i() {
                var e = r.call(this) || this;
                return e._isNeedShow = !1, e.inputElement = null, e.inputDiv = null, e._gscaleX = 0, e._gscaleY = 0, e._isNeesHide = !1, e.textValue = "", e.colorValue = 16777215, e._styleInfoes = {}, e
            }
            return __extends(i, r), i.prototype.$setTextField = function(e) {
                return this.$textfield = e, !0
            }, i.prototype.$addToStage = function() {
                this.htmlInput = e.web.$getTextAdapter(this.$textfield)
            }, i.prototype._initElement = function() {
                var t = this.$textfield.localToGlobal(0, 0),
                    r = t.x,
                    i = t.y,
                    n = this.htmlInput.$scaleX,
                    o = this.htmlInput.$scaleY;
                this.inputDiv.style.left = r * n + "px", this.inputDiv.style.top = i * o + "px", this.$textfield.multiline && this.$textfield.height > this.$textfield.size ? (this.inputDiv.style.top = i * o + "px", this.inputElement.style.top = -this.$textfield.lineSpacing / 2 * o + "px") : (this.inputDiv.style.top = i * o + "px", this.inputElement.style.top = "0px");
                for (var a = this.$textfield, s = 1, l = 1, h = 0; a.parent;) s *= a.scaleX, l *= a.scaleY, h += a.rotation, a = a.parent;
                var u = e.web.getPrefixStyleName("transform");
                this.inputDiv.style[u] = "rotate(" + h + "deg)", this._gscaleX = n * s, this._gscaleY = o * l
            }, i.prototype.$show = function() {
                this.htmlInput.isCurrentStageText(this) ? this.inputElement.onblur = null : (this.inputElement = this.htmlInput.getInputElement(this), this.$textfield.multiline ? this.inputElement.type = "text" : this.inputElement.type = this.$textfield.inputType, this.inputDiv = this.htmlInput._inputDIV), this.htmlInput._needShow = !0, this._isNeedShow = !0, this._initElement()
            }, i.prototype.onBlurHandler = function() {
                this.htmlInput.clearInputElement(), window.scrollTo(0, 0)
            }, i.prototype.executeShow = function() {
                this.inputElement.value = this.$getText(), null == this.inputElement.onblur && (this.inputElement.onblur = this.onBlurHandler.bind(this)), this.$resetStageText(), this.$textfield.maxChars > 0 ? this.inputElement.setAttribute("maxlength", this.$textfield.maxChars) : this.inputElement.removeAttribute("maxlength"), this.inputElement.selectionStart = this.inputElement.value.length, this.inputElement.selectionEnd = this.inputElement.value.length, this.inputElement.focus()
            }, i.prototype.$hide = function() {
                this._isNeesHide = !0, this.htmlInput && e.web.Html5Capatibility._System_OS == e.web.SystemOSType.IOS && this.htmlInput.disconnectStageText(this)
            }, i.prototype.$getText = function() {
                return this.textValue || (this.textValue = ""), this.textValue
            }, i.prototype.$setText = function(e) {
                return this.textValue = e, this.resetText(), !0
            }, i.prototype.resetText = function() {
                this.inputElement && (this.inputElement.value = this.textValue)
            }, i.prototype.$setColor = function(e) {
                return this.colorValue = e, this.resetColor(), !0
            }, i.prototype.resetColor = function() {
                this.inputElement && this.setElementStyle("color", e.toColorString(this.colorValue))
            }, i.prototype.$onBlur = function() {
                t.Html5Capatibility._System_OS == t.SystemOSType.WPHONE && e.Event.dispatchEvent(this, "updateText", !1)
            }, i.prototype._onInput = function() {
                var r = this;
                if (t.Html5Capatibility._System_OS == t.SystemOSType.WPHONE) {
                    var i = this.$textfield.$TextField;
                    null == i[35] && null == i[36] ? (r.textValue = r.inputElement.value, e.Event.dispatchEvent(r, "updateText", !1)) : window.setTimeout(function() {
                        r.inputElement && r.inputElement.selectionStart && r.inputElement.selectionEnd && r.inputElement.selectionStart == r.inputElement.selectionEnd && (r.textValue = r.inputElement.value, e.Event.dispatchEvent(r, "updateText", !1))
                    }, 0)
                } else window.setTimeout(function() {
                    r.inputElement && r.inputElement.selectionStart == r.inputElement.selectionEnd && (r.textValue = r.inputElement.value, e.Event.dispatchEvent(r, "updateText", !1))
                }, 0)
            }, i.prototype.setAreaHeight = function() {
                var t = this.$textfield;
                if (t.multiline) {
                    var r = e.TextFieldUtils.$getTextHeight(t);
                    if (t.height <= t.size) this.setElementStyle("height", t.size * this._gscaleY + "px"), this.setElementStyle("padding", "0px"), this.setElementStyle("lineHeight", t.size * this._gscaleY + "px");
                    else if (t.height < r) this.setElementStyle("height", t.height * this._gscaleY + "px"), this.setElementStyle("padding", "0px"), this.setElementStyle("lineHeight", (t.size + t.lineSpacing) * this._gscaleY + "px");
                    else {
                        this.setElementStyle("height", (r + t.lineSpacing) * this._gscaleY + "px");
                        var i = (t.height - r) * this._gscaleY,
                            n = e.TextFieldUtils.$getValign(t),
                            o = i * n,
                            a = i - o;
                        this.setElementStyle("padding", o + "px 0px " + a + "px 0px"), this.setElementStyle("lineHeight", (t.size + t.lineSpacing) * this._gscaleY + "px")
                    }
                }
            }, i.prototype._onClickHandler = function(t) {
                this._isNeedShow && (t.stopImmediatePropagation(), this._isNeedShow = !1, this.executeShow(), this.dispatchEvent(new e.Event("focus")))
            }, i.prototype._onDisconnect = function() {
                this.inputElement = null, this.dispatchEvent(new e.Event("blur"))
            }, i.prototype.setElementStyle = function(e, t) {
                this.inputElement && this._styleInfoes[e] != t && (this.inputElement.style[e] = t)
            }, i.prototype.$removeFromStage = function() {
                this.inputElement && this.htmlInput.disconnectStageText(this)
            }, i.prototype.$resetStageText = function() {
                if (this.inputElement) {
                    var t = this.$textfield;
                    this.setElementStyle("fontFamily", t.fontFamily), this.setElementStyle("fontStyle", t.italic ? "italic" : "normal"), this.setElementStyle("fontWeight", t.bold ? "bold" : "normal"), this.setElementStyle("textAlign", t.textAlign), this.setElementStyle("fontSize", t.size * this._gscaleY + "px"), this.setElementStyle("color", e.toColorString(t.textColor));
                    var r = void 0;
                    if (t.stage ? (r = t.localToGlobal(0, 0).x, r = Math.min(t.width, t.stage.stageWidth - r)) : r = t.width, this.setElementStyle("width", r * this._gscaleX + "px"), this.setElementStyle("verticalAlign", t.verticalAlign), t.multiline) this.setAreaHeight();
                    else if (this.setElementStyle("lineHeight", t.size * this._gscaleY + "px"), t.height < t.size) {
                        this.setElementStyle("height", t.size * this._gscaleY + "px");
                        var i = t.size / 2 * this._gscaleY;
                        this.setElementStyle("padding", "0px 0px " + i + "px 0px")
                    } else {
                        this.setElementStyle("height", t.size * this._gscaleY + "px");
                        var n = (t.height - t.size) * this._gscaleY,
                            o = e.TextFieldUtils.$getValign(t),
                            a = n * o,
                            i = n - a;
                        i < t.size / 2 * this._gscaleY && (i = t.size / 2 * this._gscaleY), this.setElementStyle("padding", a + "px 0px " + i + "px 0px")
                    }
                    this.inputDiv.style.clip = "rect(0px " + t.width * this._gscaleX + "px " + t.height * this._gscaleY + "px 0px)", this.inputDiv.style.height = t.height * this._gscaleY + "px", this.inputDiv.style.width = r * this._gscaleX + "px"
                }
            }, i
        }(e.EventDispatcher);
        t.HTML5StageText = r, __reflect(r.prototype, "egret.web.HTML5StageText", ["egret.StageText"]), e.StageText = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})),
function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function t() {
                this._needShow = !1, this.$scaleX = 1, this.$scaleY = 1
            }
            return t.prototype.isInputOn = function() {
                return null != this._stageText
            }, t.prototype.isCurrentStageText = function(e) {
                return this._stageText == e
            }, t.prototype.initValue = function(e) {
                e.style.position = "absolute", e.style.left = "0px", e.style.top = "0px", e.style.border = "none", e.style.padding = "0"
            }, t.prototype.$updateSize = function() {
                if (this.canvas) {
                    var t = this.canvas.width,
                        r = this.canvas.height,
                        i = this.canvas.style.width.split("px")[0],
                        n = this.canvas.style.height.split("px")[0];
                    this.$scaleX = i / t, this.$scaleY = n / r, this.StageDelegateDiv.style.left = this.canvas.style.left, this.StageDelegateDiv.style.top = this.canvas.style.top;
                    var o = e.web.getPrefixStyleName("transform");
                    this.StageDelegateDiv.style[o] = this.canvas.style[o], this.StageDelegateDiv.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px"
                }
            }, t.prototype._initStageDelegateDiv = function(t, r) {
                this.canvas = r;
                var i, n = this;
                i || (i = document.createElement("div"), this.StageDelegateDiv = i, i.id = "StageDelegateDiv", t.appendChild(i), n.initValue(i), n._inputDIV = document.createElement("div"), n.initValue(n._inputDIV), n._inputDIV.style.width = "0px", n._inputDIV.style.height = "0px", n._inputDIV.style.left = "0px", n._inputDIV.style.top = "-100px", n._inputDIV.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px", i.appendChild(n._inputDIV), this.canvas.addEventListener("click", function(e) {
                    n._needShow ? (n._needShow = !1, n._stageText._onClickHandler(e), n.show()) : n._inputElement && (n.clearInputElement(), n._inputElement.blur(), n._inputElement = null)
                }), n.initInputElement(!0), n.initInputElement(!1))
            }, t.prototype.initInputElement = function(e) {
                var t, r = this;
                e ? (t = document.createElement("textarea"), t.style.resize = "none", r._multiElement = t, t.id = "egretTextarea") : (t = document.createElement("input"), r._simpleElement = t, t.id = "egretInput"), t.type = "text", r._inputDIV.appendChild(t), t.setAttribute("tabindex", "-1"), t.style.width = "1px", t.style.height = "12px", r.initValue(t), t.style.outline = "thin", t.style.background = "none", t.style.overflow = "hidden", t.style.wordBreak = "break-all", t.style.opacity = 0, t.oninput = function() {
                    r._stageText && r._stageText._onInput()
                }
            }, t.prototype.show = function() {
                var t = this,
                    r = t._inputElement;
                e.$callAsync(function() {
                    r.style.opacity = 1
                }, t)
            }, t.prototype.disconnectStageText = function(e) {
                (null == this._stageText || this._stageText == e) && (this.clearInputElement(), this._inputElement && this._inputElement.blur())
            }, t.prototype.clearInputElement = function() {
                var e = this;
                if (e._inputElement) {
                    e._inputElement.value = "", e._inputElement.onblur = null, e._inputElement.style.width = "1px", e._inputElement.style.height = "12px", e._inputElement.style.left = "0px", e._inputElement.style.top = "0px", e._inputElement.style.opacity = 0;
                    var t = void 0;
                    t = e._simpleElement == e._inputElement ? e._multiElement : e._simpleElement, t.style.display = "block", e._inputDIV.style.left = "0px", e._inputDIV.style.top = "-100px", e._inputDIV.style.height = "0px", e._inputDIV.style.width = "0px"
                }
                e._stageText && (e._stageText._onDisconnect(), e._stageText = null, this.canvas.userTyping = !1)
            }, t.prototype.getInputElement = function(e) {
                var t = this;
                t.clearInputElement(), t._stageText = e, this.canvas.userTyping = !0, t._stageText.$textfield.multiline ? t._inputElement = t._multiElement : t._inputElement = t._simpleElement;
                var r;
                return r = t._simpleElement == t._inputElement ? t._multiElement : t._simpleElement, r.style.display = "none", t._inputElement
            }, t
        }();
        t.HTMLInput = r, __reflect(r.prototype, "egret.web.HTMLInput")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})),
function(e) {
    var t;
    ! function(e) {
        function t(e) {
            var t = e.stage ? e.stage.$hashCode : 0,
                r = i[t],
                a = n[t],
                s = o[t];
            return a && s && (delete n[t], delete o[t]), r
        }

        function r(e, t, r, a) {
            e._initStageDelegateDiv(r, a), i[t.$hashCode] = e, n[t.$hashCode] = a, o[t.$hashCode] = r
        }
        var i = {},
            n = {},
            o = {};
        e.$getTextAdapter = t, e.$cacheTextAdapter = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e, t, r, o, a) {
            n || i();
            var s = "";
            return a && (s += "italic "), o && (s += "bold "), s += (r || 12) + "px ", s += t || "Arial", n.font = s, n.measureText(e).width
        }

        function i() {
            n = e.sys.canvasHitTestBuffer.context, n.textAlign = "left", n.textBaseline = "middle"
        }
        var n = null;
        e.sys.measureText = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        function t(e, t) {
            var r = document.createElement("canvas");
            isNaN(e) || isNaN(t) || (r.width = e, r.height = t);
            var i = r.getContext("2d");
            if (void 0 === i.imageSmoothingEnabled) {
                for (var n, o = ["webkitImageSmoothingEnabled", "mozImageSmoothingEnabled", "msImageSmoothingEnabled"], a = o.length - 1; a >= 0 && (n = o[a], void 0 === i[n]); a--);
                try {
                    Object.defineProperty(i, "imageSmoothingEnabled", {
                        get: function() {
                            return this[n]
                        },
                        set: function(e) {
                            this[n] = e
                        }
                    })
                } catch (s) {
                    i.imageSmoothingEnabled = i[n]
                }
            }
            return r
        }
        var r, i = function() {
            function e(e, r, i) {
                this.surface = t(e, r), this.context = this.surface.getContext("2d")
            }
            return Object.defineProperty(e.prototype, "width", {
                get: function() {
                    return this.surface.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(e.prototype, "height", {
                get: function() {
                    return this.surface.height
                },
                enumerable: !0,
                configurable: !0
            }), e.prototype.resize = function(e, t, r) {
                var i = this.surface;
                if (r) {
                    var n = !1;
                    i.width < e && (i.width = e, n = !0), i.height < t && (i.height = t, n = !0), n || (this.context.globalCompositeOperation = "source-over", this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.globalAlpha = 1)
                } else i.width != e && (i.width = e), i.height != t && (i.height = t);
                this.clear()
            }, e.prototype.resizeTo = function(e, i, n, o) {
                r || (r = t());
                var a = (this.context, this.surface),
                    s = r,
                    l = s.getContext("2d");
                r = a, this.context = l, this.surface = s, s.width = Math.max(e, 257), s.height = Math.max(i, 257), l.setTransform(1, 0, 0, 1, 0, 0), l.drawImage(a, n, o), a.height = 1, a.width = 1
            }, e.prototype.setDirtyRegionPolicy = function(e) {}, e.prototype.beginClip = function(e, t, r) {
                t = +t || 0, r = +r || 0;
                var i = this.context;
                i.save(), i.beginPath(), i.setTransform(1, 0, 0, 1, t, r);
                for (var n = e.length, o = 0; n > o; o++) {
                    var a = e[o];
                    i.clearRect(a.minX, a.minY, a.width, a.height), i.rect(a.minX, a.minY, a.width, a.height)
                }
                i.clip()
            }, e.prototype.endClip = function() {
                this.context.restore()
            }, e.prototype.getPixels = function(e, t, r, i) {
                return void 0 === r && (r = 1), void 0 === i && (i = 1), this.context.getImageData(e, t, r, i).data
            }, e.prototype.toDataURL = function(e, t) {
                return this.surface.toDataURL(e, t)
            }, e.prototype.clear = function() {
                this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.surface.width, this.surface.height)
            }, e.prototype.destroy = function() {
                this.surface.width = this.surface.height = 0
            }, e
        }();
        e.CanvasRenderBuffer = i, __reflect(i.prototype, "egret.web.CanvasRenderBuffer", ["egret.sys.RenderBuffer"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(r, i) {
                var n = t.call(this) || this;
                return n.onTouchBegin = function(e) {
                    var t = n.getLocation(e);
                    n.touch.onTouchBegin(t.x, t.y, e.identifier)
                }, n.onTouchMove = function(e) {
                    var t = n.getLocation(e);
                    n.touch.onTouchMove(t.x, t.y, e.identifier)
                }, n.onTouchEnd = function(e) {
                    var t = n.getLocation(e);
                    n.touch.onTouchEnd(t.x, t.y, e.identifier)
                }, n.scaleX = 1, n.scaleY = 1, n.rotation = 0, n.canvas = i, n.touch = new e.sys.TouchHandler(r), n.addListeners(), n
            }
            return __extends(r, t), r.prototype.addListeners = function() {
                var t = this;
                window.navigator.msPointerEnabled ? (this.canvas.addEventListener("MSPointerDown", function(e) {
                    e.identifier = e.pointerId, t.onTouchBegin(e), t.prevent(e)
                }, !1), this.canvas.addEventListener("MSPointerMove", function(e) {
                    e.identifier = e.pointerId, t.onTouchMove(e), t.prevent(e)
                }, !1), this.canvas.addEventListener("MSPointerUp", function(e) {
                    e.identifier = e.pointerId, t.onTouchEnd(e), t.prevent(e)
                }, !1)) : (e.Capabilities.$isMobile || this.addMouseListener(), this.addTouchListener())
            }, r.prototype.addMouseListener = function() {
                this.canvas.addEventListener("mousedown", this.onTouchBegin), this.canvas.addEventListener("mousemove", this.onTouchMove), this.canvas.addEventListener("mouseup", this.onTouchEnd)
            }, r.prototype.addTouchListener = function() {
                var e = this;
                this.canvas.addEventListener("touchstart", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchBegin(t.changedTouches[i]);
                    e.prevent(t)
                }, !1), this.canvas.addEventListener("touchmove", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchMove(t.changedTouches[i]);
                    e.prevent(t)
                }, !1), this.canvas.addEventListener("touchend", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchEnd(t.changedTouches[i]);
                    e.prevent(t)
                }, !1), this.canvas.addEventListener("touchcancel", function(t) {
                    for (var r = t.changedTouches.length, i = 0; r > i; i++) e.onTouchEnd(t.changedTouches[i]);
                    e.prevent(t)
                }, !1)
            }, r.prototype.prevent = function(e) {
                e.stopPropagation(), 1 == e.isScroll || this.canvas.userTyping || e.preventDefault()
            }, r.prototype.getLocation = function(t) {
                t.identifier = +t.identifier || 0;
                var r = document.documentElement,
                    i = this.canvas.getBoundingClientRect(),
                    n = i.left + window.pageXOffset - r.clientLeft,
                    o = i.top + window.pageYOffset - r.clientTop,
                    a = t.pageX - n,
                    s = a,
                    l = t.pageY - o,
                    h = l;
                return 90 == this.rotation ? (s = l, h = i.width - a) : -90 == this.rotation && (s = i.height - l, h = a), s /= this.scaleX, h /= this.scaleY, e.$TempPoint.setTo(Math.round(s), Math.round(h))
            }, r.prototype.updateScaleMode = function(e, t, r) {
                this.scaleX = e, this.scaleY = t, this.rotation = r
            }, r.prototype.$updateMaxTouches = function() {
                this.touch.$initMaxTouches()
            }, r
        }(e.HashObject);
        t.WebTouchHandler = r, __reflect(r.prototype, "egret.web.WebTouchHandler")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(e) {
                var r = t.call(this) || this;
                return r.isActivate = !0, r.stage = e, r.registerListener(), r
            }
            return __extends(r, t), r.prototype.registerListener = function() {
                var t = this,
                    r = function() {
                        t.isActivate && (t.isActivate = !1, t.stage.dispatchEvent(new e.Event(e.Event.DEACTIVATE)))
                    },
                    i = function() {
                        t.isActivate || (t.isActivate = !0, t.stage.dispatchEvent(new e.Event(e.Event.ACTIVATE)))
                    },
                    n = function() {
                        document[o] ? r() : i()
                    };
                window.addEventListener("focus", i, !1), window.addEventListener("blur", r, !1);
                var o, a;
                "undefined" != typeof document.hidden ? (o = "hidden", a = "visibilitychange") : "undefined" != typeof document.mozHidden ? (o = "mozHidden", a = "mozvisibilitychange") : "undefined" != typeof document.msHidden ? (o = "msHidden", a = "msvisibilitychange") : "undefined" != typeof document.webkitHidden ? (o = "webkitHidden", a = "webkitvisibilitychange") : "undefined" != typeof document.oHidden && (o = "oHidden", a = "ovisibilitychange"), "onpageshow" in window && "onpagehide" in window && (window.addEventListener("pageshow", i, !1), window.addEventListener("pagehide", r, !1)), o && a && document.addEventListener(a, n, !1);
                var s = navigator.userAgent,
                    l = /micromessenger/gi.test(s),
                    h = /mqq/gi.test(s),
                    u = /mobile.*qq/gi.test(s);
                if ((u || l) && (h = !1), h) {
                    var c = window.browser || {};
                    c.execWebFn = c.execWebFn || {}, c.execWebFn.postX5GamePlayerMessage = function(e) {
                        var t = e.type;
                        "app_enter_background" == t ? r() : "app_enter_foreground" == t && i()
                    }, window.browser = c
                }
            }, r
        }(e.HashObject);
        t.WebHideHandler = r, __reflect(r.prototype, "egret.web.WebHideHandler")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e, t) {
            var r = "";
            if (null != t) r = i(e, t);
            else {
                if (null == s) {
                    var n = document.createElement("div").style;
                    s = i("transform", n)
                }
                r = s
            }
            return "" == r ? e : r + e.charAt(0).toUpperCase() + e.substring(1, e.length)
        }

        function i(e, t) {
            if (e in t) return "";
            e = e.charAt(0).toUpperCase() + e.substring(1, e.length);
            for (var r = ["webkit", "ms", "Moz", "O"], i = 0; i < r.length; i++) {
                var n = r[i] + e;
                if (n in t) return r[i]
            }
            return ""
        }
        var n = function() {
            function e() {}
            return e
        }();
        n.QQ_AUDIO = 1, n.WEB_AUDIO = 2, n.HTML5_AUDIO = 3, t.AudioType = n, __reflect(n.prototype, "egret.web.AudioType");
        var o = function() {
            function e() {}
            return e
        }();
        o.WPHONE = 1, o.IOS = 2, o.ADNROID = 3, t.SystemOSType = o, __reflect(o.prototype, "egret.web.SystemOSType");
        var a = function(t) {
            function r() {
                return t.call(this) || this
            }
            return __extends(r, t), r.$init = function() {
                var t = navigator.userAgent.toLowerCase();
                r.ua = t, e.Capabilities.$isMobile = -1 != t.indexOf("mobile") || -1 != t.indexOf("android"), r._canUseBlob = !1;
                var i, a = r._audioType,
                    s = window.AudioContext || window.webkitAudioContext || window.mozAudioContext;
                if (1 == a || 2 == a || 3 == a ? (i = !1, r.setAudioType(a)) : (i = !0, r.setAudioType(n.HTML5_AUDIO)), t.indexOf("windows phone") >= 0) r._System_OS = o.WPHONE, e.Capabilities.$os = "Windows Phone";
                else if (t.indexOf("android") >= 0) {
                    if (e.Capabilities.$os = "Android", r._System_OS = o.ADNROID, i && (s ? r.setAudioType(n.WEB_AUDIO) : r.setAudioType(n.HTML5_AUDIO)), window.hasOwnProperty("QZAppExternal") && t.indexOf("qzone") >= 0) {
                        i && r.setAudioType(n.QQ_AUDIO);
                        var l = document.getElementsByTagName("base");
                        if (l && l.length > 0) r._QQRootPath = l[0].baseURI;
                        else {
                            var h = window.location.href.indexOf("?"); - 1 == h && (h = window.location.href.length);
                            var u = window.location.href.substring(0, h);
                            u = u.substring(0, u.lastIndexOf("/")), r._QQRootPath = u + "/"
                        }
                    }
                } else t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 || t.indexOf("ipod") >= 0 ? (e.Capabilities.$os = "iOS", r._System_OS = o.IOS, r.getIOSVersion() >= 7 && (r._canUseBlob = !0, i && r.setAudioType(n.WEB_AUDIO))) : -1 != t.indexOf("windows nt") ? e.Capabilities.$os = "Windows PC" : -1 != t.indexOf("mac os") && (e.Capabilities.$os = "Mac OS");
                var c = window.URL || window.webkitURL;
                c || (r._canUseBlob = !1), e.Sound = r._AudioClass
            }, r.setAudioType = function(t) {
                switch (r._audioType = t, t) {
                    case n.QQ_AUDIO:
                        r._AudioClass = e.web.QQSound;
                        break;
                    case n.WEB_AUDIO:
                        r._AudioClass = e.web.WebAudioSound;
                        break;
                    case n.HTML5_AUDIO:
                        r._AudioClass = e.web.HtmlSound
                }
            }, r.getIOSVersion = function() {
                var e = r.ua.toLowerCase().match(/cpu [^\d]*\d.*like mac os x/)[0];
                return parseInt(e.match(/\d+(_\d)*/)[0]) || 0
            }, r.checkHtml5Support = function() {
                var t = (navigator.language || navigator.browserLanguage).toLowerCase(),
                    r = t.split("-");
                r.length > 1 && (r[1] = r[1].toUpperCase()), e.Capabilities.$language = r.join("-")
            }, r
        }(e.HashObject);
        a._canUseBlob = !1, a._audioType = 0, a._QQRootPath = "", a._System_OS = 0, a.ua = "", t.Html5Capatibility = a, __reflect(a.prototype, "egret.web.Html5Capatibility");
        var s = null;
        t.getPrefixStyleName = r, t.getPrefix = i
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e) {
            e.onStart(h), l = e
        }

        function i() {
            if (u)
                for (var e = document.querySelectorAll(".egret-player"), t = e.length, r = 0; t > r; r++) {
                    var i = e[r],
                        n = i["egret-player"];
                    n.updateScreenSize()
                }
        }

        function n(r) {
            if (!u) {
                if (u = !0, r || (r = {}), t.Html5Capatibility._audioType = r.audioType, t.Html5Capatibility.$init(), "webgl" == r.renderMode) {
                    var i = r.antialias;
                    t.WebGLRenderContext.antialias = !!i
                }
                e.sys.CanvasRenderBuffer = t.CanvasRenderBuffer, o(r.renderMode);
                var n = e.sys.$ticker;
                a(n), r.screenAdapter ? e.sys.screenAdapter = r.screenAdapter : e.sys.screenAdapter || (e.sys.screenAdapter = new e.sys.DefaultScreenAdapter);
                for (var s = document.querySelectorAll(".egret-player"), l = s.length, h = 0; l > h; h++) {
                    var c = s[h],
                        d = new t.WebPlayer(c, r);
                    c["egret-player"] = d, "webgl" == e.Capabilities.$renderMode && (d.stage.dirtyRegionPolicy = e.DirtyRegionPolicy.OFF)
                }
                "webgl" == e.Capabilities.$renderMode && (e.sys.DisplayList.prototype.setDirtyRegionPolicy = function() {})
            }
        }

        function o(r) {
            "webgl" == r && e.WebGLUtils.checkCanUseWebGL() ? (e.sys.RenderBuffer = t.WebGLRenderBuffer, e.sys.systemRenderer = new t.WebGLRenderer, e.sys.canvasRenderer = new e.CanvasRenderer, e.sys.customHitTestBuffer = new t.WebGLRenderBuffer(3, 3), e.sys.canvasHitTestBuffer = new t.CanvasRenderBuffer(3, 3), e.Capabilities.$renderMode = "webgl") : (e.sys.RenderBuffer = t.CanvasRenderBuffer, e.sys.systemRenderer = new e.CanvasRenderer, e.sys.canvasRenderer = e.sys.systemRenderer, e.sys.customHitTestBuffer = new t.CanvasRenderBuffer(3, 3), e.sys.canvasHitTestBuffer = e.sys.customHitTestBuffer, e.Capabilities.$renderMode = "canvas")
        }

        function a(e) {
            function t() {
                l && l.onRender(h), e.update(), r.call(window, t)
            }
            var r = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
            r || (r = function(e) {
                return window.setTimeout(e, 1e3 / 60)
            }), r.call(window, t)
        }

        function s() {
            c = 0 / 0, e.updateAllScreens(), l && l.onResize(h)
        }
        var l, h = {
            setAutoClear: function(e) {
                t.WebGLRenderBuffer.autoClear = e
            },
            save: function() {},
            restore: function() {
                var e = t.WebGLRenderContext.getInstance(0, 0),
                    r = e.context;
                r.bindBuffer(r.ARRAY_BUFFER, e.vertexBuffer), r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.indexBuffer), r.activeTexture(r.TEXTURE0), e.shaderManager.currentShader = null, e.bindIndices = !1;
                var i = e.$bufferStack[1];
                e.activateBuffer(i), r.enable(r.BLEND), e.setBlendMode("source-over")
            }
        };
        e.setRendererContext = r;
        var u = !1;
        window.isNaN = function(e) {
            return e = +e, e !== e
        }, e.runEgret = n, e.updateAllScreens = i;
        var c = 0 / 0;
        window.addEventListener("resize", function() {
            isNaN(c) && (c = window.setTimeout(s, 300))
        })
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var language, egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function t() {}
            return t.detect = function() {
                var r = e.Capabilities,
                    i = navigator.userAgent.toLowerCase();
                r.$isMobile = -1 != i.indexOf("mobile") || -1 != i.indexOf("android"), r.$isMobile ? i.indexOf("windows") < 0 && (-1 != i.indexOf("iphone") || -1 != i.indexOf("ipad") || -1 != i.indexOf("ipod")) ? r.$os = "iOS" : -1 != i.indexOf("android") && -1 != i.indexOf("linux") ? r.$os = "Android" : -1 != i.indexOf("windows") && (r.$os = "Windows Phone") : -1 != i.indexOf("windows nt") ? r.$os = "Windows PC" : -1 != i.indexOf("mac os") && (r.$os = "Mac OS");
                var n = (navigator.language || navigator.browserLanguage).toLowerCase(),
                    o = n.split("-");
                o.length > 1 && (o[1] = o[1].toUpperCase()), r.$language = o.join("-"), t.injectUIntFixOnIE9()
            }, t.injectUIntFixOnIE9 = function() {
                if (/msie 9.0/i.test(navigator.userAgent) && !/opera/i.test(navigator.userAgent)) {
                    var e = "<!-- IEBinaryToArray_ByteStr -->\r\n<script type='text/vbscript' language='VBScript'>\r\nFunction IEBinaryToArray_ByteStr(Binary)\r\n   IEBinaryToArray_ByteStr = CStr(Binary)\r\nEnd Function\r\nFunction IEBinaryToArray_ByteStr_Last(Binary)\r\n   Dim lastIndex\r\n   lastIndex = LenB(Binary)\r\n   if lastIndex mod 2 Then\r\n       IEBinaryToArray_ByteStr_Last = Chr( AscB( MidB( Binary, lastIndex, 1 ) ) )\r\n   Else\r\n       IEBinaryToArray_ByteStr_Last = \"\"\r\n   End If\r\nEnd Function\r\n</script>\r\n<!-- convertResponseBodyToText -->\r\n<script>\r\nlet convertResponseBodyToText = function (binary) {\r\n   let byteMapping = {};\r\n   for ( let i = 0; i < 256; i++ ) {\r\n       for ( let j = 0; j < 256; j++ ) {\r\n           byteMapping[ String.fromCharCode( i + j * 256 ) ] =\r\n           String.fromCharCode(i) + String.fromCharCode(j);\r\n       }\r\n   }\r\n   let rawBytes = IEBinaryToArray_ByteStr(binary);\r\n   let lastChr = IEBinaryToArray_ByteStr_Last(binary);\r\n   return rawBytes.replace(/[\\s\\S]/g,                           function( match ) { return byteMapping[match]; }) + lastChr;\r\n};\r\n</script>\r\n";
                    document.write(e)
                }
            }, t
        }();
        t.WebCapability = r, __reflect(r.prototype, "egret.web.WebCapability"), r.detect()
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(r, i, n, o, a) {
                var s = t.call(this) || this;
                if (s.showPanle = !0, s.fpsHeight = 0, s.WIDTH = 101, s.HEIGHT = 20, s.bgCanvasColor = "#18304b", s.fpsFrontColor = "#18fefe", s.WIDTH_COST = 33, s.cost1Color = "#18fefe", s.cost2Color = "#ffff00", s.cost3Color = "#ff0000", s.arrFps = [], s.arrCost = [], s.arrLog = [], i || n) {
                    "canvas" == e.Capabilities.renderMode ? s.renderMode = "Canvas" : s.renderMode = "WebGL", s.panelX = void 0 === a.x ? 0 : parseInt(a.x), s.panelY = void 0 === a.y ? 0 : parseInt(a.y), s.fontColor = void 0 === a.textColor ? "#ffffff" : a.textColor.replace("0x", "#"), s.fontSize = void 0 === a.size ? 12 : parseInt(a.size), e.Capabilities.isMobile && (s.fontSize -= 2);
                    var l = document.createElement("div");
                    l.style.position = "absolute", l.style.background = "rgba(0,0,0," + a.bgAlpha + ")", l.style.left = s.panelX + "px", l.style.top = s.panelY + "px", l.style.pointerEvents = "none", document.body.appendChild(l);
                    var h = document.createElement("div");
                    h.style.color = s.fontColor, h.style.fontSize = s.fontSize + "px", h.style.lineHeight = s.fontSize + "px", h.style.margin = "4px 4px 4px 4px", s.container = h, l.appendChild(h), i && s.addFps(), n && s.addLog()
                }
                return s
            }
            return __extends(r, t), r.prototype.addFps = function() {
                var e = document.createElement("div");
                e.style.display = "inline-block", this.containerFps = e, this.container.appendChild(e);
                var t = document.createElement("div");
                t.style.paddingBottom = "2px", this.fps = t, this.containerFps.appendChild(t), t.innerHTML = "0 FPS " + this.renderMode + "<br/>min0 max0 avg0";
                var r = document.createElement("canvas");
                this.containerFps.appendChild(r), r.width = this.WIDTH, r.height = this.HEIGHT, this.canvasFps = r;
                var i = r.getContext("2d");
                this.contextFps = i, i.fillStyle = this.bgCanvasColor, i.fillRect(0, 0, this.WIDTH, this.HEIGHT);
                var n = document.createElement("div");
                this.divDatas = n, this.containerFps.appendChild(n);
                var o = document.createElement("div");
                o.style["float"] = "left", o.innerHTML = "Draw<br/>Dirty<br/>Cost", n.appendChild(o);
                var a = document.createElement("div");
                a.style.paddingLeft = o.offsetWidth + 20 + "px", n.appendChild(a);
                var s = document.createElement("div");
                this.divDraw = s, s.innerHTML = "0<br/>0<br/>", a.appendChild(s);
                var l = document.createElement("div");
                this.divCost = l, l.innerHTML = '<font  style="color:' + this.cost1Color + '">0<font/> <font  style="color:' + this.cost2Color + '">0<font/> <font  style="color:' + this.cost3Color + '">0<font/>', a.appendChild(l), r = document.createElement("canvas"), this.canvasCost = r, this.containerFps.appendChild(r), r.width = this.WIDTH, r.height = this.HEIGHT, i = r.getContext("2d"), this.contextCost = i, i.fillStyle = this.bgCanvasColor, i.fillRect(0, 0, this.WIDTH, this.HEIGHT), i.fillStyle = "#000000", i.fillRect(this.WIDTH_COST, 0, 1, this.HEIGHT), i.fillRect(2 * this.WIDTH_COST + 1, 0, 1, this.HEIGHT), this.fpsHeight = this.container.offsetHeight
            }, r.prototype.addLog = function() {
                var e = document.createElement("div");
                e.style.maxWidth = document.body.clientWidth - 8 - this.panelX + "px", e.style.wordWrap = "break-word", this.log = e, this.container.appendChild(e)
            }, r.prototype.update = function(e, t) {
                void 0 === t && (t = !1);
                var r, i, n, o;
                t ? (r = this.arrFps[this.arrFps.length - 1], i = this.arrCost[this.arrCost.length - 1][0], n = this.arrCost[this.arrCost.length - 1][1], o = this.arrCost[this.arrCost.length - 1][2]) : (r = e.fps, i = e.costTicker, n = e.costDirty, o = e.costRender, this.lastNumDraw = e.draw, this.lastNumDirty = e.dirty, this.arrFps.push(r), this.arrCost.push([i, n, o]));
                var a = 0,
                    s = this.arrFps.length;
                s > 101 && (s = 101, this.arrFps.shift());
                for (var l = this.arrFps[0], h = this.arrFps[0], u = 0; s > u; u++) {
                    var c = this.arrFps[u];
                    a += c, l > c ? l = c : c > h && (h = c)
                }
                var d = this.WIDTH,
                    p = this.HEIGHT,
                    f = this.contextFps;
                f.drawImage(this.canvasFps, 1, 0, d - 1, p, 0, 0, d - 1, p), f.fillStyle = this.bgCanvasColor, f.fillRect(d - 1, 0, 1, p);
                var v = Math.floor(r / 60 * 20);
                1 > v && (v = 1), f.fillStyle = this.fpsFrontColor, f.fillRect(d - 1, 20 - v, 1, v);
                var g = this.WIDTH_COST;
                f = this.contextCost, f.drawImage(this.canvasCost, 1, 0, g - 1, p, 0, 0, g - 1, p), f.drawImage(this.canvasCost, g + 2, 0, g - 1, p, g + 1, 0, g - 1, p), f.drawImage(this.canvasCost, 2 * g + 3, 0, g - 1, p, 2 * g + 2, 0, g - 1, p);
                var y = Math.floor(i / 2);
                1 > y ? y = 1 : y > 20 && (y = 20);
                var m = Math.floor(n / 2);
                1 > m ? m = 1 : m > 20 && (m = 20);
                var x = Math.floor(o / 2);
                1 > x ? x = 1 : x > 20 && (x = 20), f.fillStyle = this.bgCanvasColor, f.fillRect(g - 1, 0, 1, p), f.fillRect(2 * g, 0, 1, p), f.fillRect(3 * g + 1, 0, 1, p), f.fillStyle = this.cost1Color, f.fillRect(g - 1, 20 - y, 1, y), f.fillStyle = this.cost2Color, f.fillRect(2 * g, 20 - m, 1, m), f.fillStyle = this.cost3Color, f.fillRect(3 * g + 1, 20 - x, 1, x);
                var b = Math.floor(a / s),
                    w = r + " FPS " + this.renderMode;
                this.showPanle && (w += "<br/>min" + l + " max" + h + " avg" + b, this.divDraw.innerHTML = this.lastNumDraw + "<br/>" + this.lastNumDirty + "%<br/>", this.divCost.innerHTML = '<font  style="color:#18fefe">' + i + '<font/> <font  style="color:#ffff00">' + n + '<font/> <font  style="color:#ff0000">' + o + "<font/>"), this.fps.innerHTML = w
            }, r.prototype.updateInfo = function(e) {
                for (this.arrLog.push(e), this.log.innerHTML = this.arrLog.join("<br/>"); document.body.clientHeight < this.log.offsetHeight + this.fpsHeight + this.panelY + 2 * this.fontSize;) this.arrLog.shift(), this.log.innerHTML = this.arrLog.join("<br/>")
            }, r
        }(e.DisplayObject);
        t.WebFps = r, __reflect(r.prototype, "egret.web.WebFps", ["egret.FPSDisplay", "egret.DisplayObject"]), e.FPSDisplay = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function() {
            function e() {}
            return e.call = function(e, t) {}, e.addCallback = function(e, t) {}, e
        }();
        t.WebExternalInterface = r, __reflect(r.prototype, "egret.web.WebExternalInterface", ["egret.ExternalInterface"]), e.ExternalInterface = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function i(e, t) {
                var i = r.call(this) || this;
                return i.init(e, t), i.initOrientation(), i
            }
            return __extends(i, r), i.prototype.init = function(r, i) {
                var n = this.readOption(r, i),
                    o = new e.Stage;
                o.$screen = this, o.$scaleMode = n.scaleMode, o.$orientation = n.orientation, o.$maxTouches = n.maxTouches, o.frameRate = n.frameRate, o.textureScaleFactor = n.textureScaleFactor;
                var a = new e.sys.RenderBuffer(void 0, void 0, !0),
                    s = a.surface;
                this.attachCanvas(r, s);
                var l = new t.WebTouchHandler(o, s),
                    h = new e.sys.Player(a, o, n.entryClassName),
                    u = new e.web.WebHideHandler(o),
                    c = new t.HTMLInput;
                h.showPaintRect(n.showPaintRect), (n.showFPS || n.showLog) && h.displayFPS(n.showFPS, n.showLog, n.logFilter, n.fpsStyles), this.playerOption = n, this.container = r, this.canvas = s, this.stage = o, this.player = h, this.webTouchHandler = l, this.webInput = c, this.webHide = u, e.web.$cacheTextAdapter(c, o, r, s), this.updateScreenSize(), this.updateMaxTouches(), h.start()
            }, i.prototype.initOrientation = function() {
                var t = this;
                window.addEventListener("orientationchange", function() {
                    window.setTimeout(function() {
                        e.StageOrientationEvent.dispatchStageOrientationEvent(t.stage, e.StageOrientationEvent.ORIENTATION_CHANGE)
                    }, 350)
                })
            }, i.prototype.readOption = function(t, r) {
                var i = {};
                i.entryClassName = t.getAttribute("data-entry-class"), i.scaleMode = t.getAttribute("data-scale-mode") || e.StageScaleMode.NO_SCALE, i.frameRate = +t.getAttribute("data-frame-rate") || 30, i.contentWidth = +t.getAttribute("data-content-width") || 480, i.contentHeight = +t.getAttribute("data-content-height") || 800, i.orientation = t.getAttribute("data-orientation") || e.OrientationMode.AUTO, i.maxTouches = +t.getAttribute("data-multi-fingered") || 2, i.textureScaleFactor = +t.getAttribute("texture-scale-factor") || 1, "webgl" == r.renderMode ? i.showPaintRect = !1 : i.showPaintRect = "true" == t.getAttribute("data-show-paint-rect"), i.showFPS = "true" == t.getAttribute("data-show-fps");
                for (var n = t.getAttribute("data-show-fps-style") || "", o = n.split(","), a = {}, s = 0; s < o.length; s++) {
                    var l = o[s].split(":");
                    a[l[0]] = l[1]
                }
                return i.fpsStyles = a, i.showLog = "true" == t.getAttribute("data-show-log"), i.logFilter = t.getAttribute("data-log-filter"), i
            }, i.prototype.attachCanvas = function(e, t) {
                var r = t.style;
                r.cursor = "inherit", r.position = "absolute", r.top = "0", r.bottom = "0", r.left = "0", r.right = "0", e.appendChild(t), r = e.style, r.overflow = "hidden", r.position = "relative", r.webkitTransform = "translateZ(0)"
            }, i.prototype.updateScreenSize = function() {
                var t = this.canvas;
                if (!t.userTyping) {
                    var r = this.playerOption,
                        i = this.container.getBoundingClientRect(),
                        n = !1,
                        o = this.stage.$orientation;
                    o != e.OrientationMode.AUTO && (n = o != e.OrientationMode.PORTRAIT && i.height > i.width || o == e.OrientationMode.PORTRAIT && i.width > i.height);
                    var a = n ? i.height : i.width,
                        s = n ? i.width : i.height;
                    e.Capabilities.$boundingClientWidth = a, e.Capabilities.$boundingClientHeight = s;
                    var l = e.sys.screenAdapter.calculateStageSize(this.stage.$scaleMode, a, s, r.contentWidth, r.contentHeight),
                        h = l.stageWidth,
                        u = l.stageHeight,
                        c = l.displayWidth,
                        d = l.displayHeight;
                    t.width !== h && (t.width = h), t.height !== u && (t.height = u), t.style[e.web.getPrefixStyleName("transformOrigin")] = "0% 0% 0px", t.style.width = c + "px", t.style.height = d + "px";
                    var p = 0;
                    n ? o == e.OrientationMode.LANDSCAPE ? (p = 90, t.style.top = (i.height - c) / 2 + "px", t.style.left = (i.width + d) / 2 + "px") : (p = -90, t.style.top = (i.height + c) / 2 + "px", t.style.left = (i.width - d) / 2 + "px") : (t.style.top = (i.height - d) / 2 + "px", t.style.left = (i.width - c) / 2 + "px");
                    var f = "rotate(" + p + "deg)";
                    t.style[e.web.getPrefixStyleName("transform")] = f;
                    var v = c / h,
                        g = d / u;
                    this.webTouchHandler.updateScaleMode(v, g, p), this.webInput.$updateSize(), this.player.updateStageSize(h, u)
                }
            }, i.prototype.setContentSize = function(e, t) {
                var r = this.playerOption;
                r.contentWidth = e, r.contentHeight = t, this.updateScreenSize()
            }, i.prototype.updateMaxTouches = function() {
                this.webTouchHandler.$updateMaxTouches()
            }, i
        }(e.HashObject);
        t.WebPlayer = r, __reflect(r.prototype, "egret.web.WebPlayer", ["egret.sys.Screen"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(t, r) {
            s || (s = document.createElement("canvas"), l = s.getContext("2d"));
            var i = t.$getTextureWidth(),
                n = t.$getTextureHeight();
            null == r && (r = e.$TempRectangle, r.x = 0, r.y = 0, r.width = i, r.height = n), r.x = Math.min(r.x, i - 1), r.y = Math.min(r.y, n - 1), r.width = Math.min(r.width, i - r.x), r.height = Math.min(r.height, n - r.y);
            var o = r.width,
                a = r.height,
                h = s;
            if (h.style.width = o + "px", h.style.height = a + "px", s.width = o, s.height = a, "webgl" == e.Capabilities.$renderMode) {
                var u = void 0;
                t.$renderBuffer ? u = t : (u = new e.RenderTexture, u.drawToTexture(new e.Bitmap(t)));
                for (var c = u.$renderBuffer.getPixels(r.x, r.y, o, a), d = new ImageData(o, a), p = 0; p < c.length; p++) d.data[p] = c[p];
                return l.putImageData(d, 0, 0), t.$renderBuffer || u.dispose(), h
            }
            var f = t,
                v = Math.round(f._offsetX),
                g = Math.round(f._offsetY),
                y = f._bitmapWidth,
                m = f._bitmapHeight;
            return l.drawImage(f._bitmapData.source, f._bitmapX + r.x / e.$TextureScaleFactor, f._bitmapY + r.y / e.$TextureScaleFactor, y * r.width / i, m * r.height / n, v, g, r.width, r.height), h
        }

        function i(t, i) {
            try {
                var n = r(this, i),
                    o = n.toDataURL(t);
                return o
            } catch (a) {
                e.$error(1033)
            }
            return null
        }

        function n(e, t, r) {
            var n = i.call(this, e, r);
            if (null != n) {
                var o = n.replace(/^data:image[^;]*/, "data:image/octet-stream"),
                    a = document.createElement("a");
                a.download = t, a.href = o;
                var s = document.createEvent("MouseEvents");
                s.initMouseEvent("click", !0, !1, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), a.dispatchEvent(s)
            }
        }

        function o(t, r) {
            return e.$warn(1041, "getPixel32", "getPixels"), this.getPixels(t, r)
        }

        function a(t, i, n, o) {
            void 0 === n && (n = 1), void 0 === o && (o = 1);
            try {
                var a = (r(this), l.getImageData(t, i, n, o).data);
                return a
            } catch (s) {
                e.$error(1039)
            }
        }
        var s, l;
        e.Texture.prototype.toDataURL = i, e.Texture.prototype.saveToFile = n, e.Texture.prototype.getPixel32 = o, e.Texture.prototype.getPixels = a
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e) {
            for (var t = s.parseFromString(e, "text/xml"), r = t.childNodes.length, n = 0; r > n; n++) {
                var o = t.childNodes[n];
                if (1 == o.nodeType) return i(o, null)
            }
            return null
        }

        function i(e, t) {
            if ("parsererror" == e.localName) throw new Error(e.textContent);
            for (var r = new o(e.localName, t, e.prefix, e.namespaceURI, e.nodeName), n = e.attributes, s = r.attributes, l = n.length, h = 0; l > h; h++) {
                var u = n[h],
                    c = u.name;
                0 != c.indexOf("xmlns:") && (s[c] = u.value, r["$" + c] = u.value)
            }
            var d = e.childNodes;
            l = d.length;
            for (var p = r.children, h = 0; l > h; h++) {
                var f = d[h],
                    v = f.nodeType,
                    g = null;
                if (1 == v) g = i(f, r);
                else if (3 == v) {
                    var y = f.textContent.trim();
                    y && (g = new a(y, r))
                }
                g && p.push(g)
            }
            return r
        }
        var n = function() {
            function e(e, t) {
                this.nodeType = e, this.parent = t
            }
            return e
        }();
        t.XMLNode = n, __reflect(n.prototype, "egret.web.XMLNode");
        var o = function(e) {
            function t(t, r, i, n, o) {
                var a = e.call(this, 1, r) || this;
                return a.attributes = {}, a.children = [], a.localName = t, a.prefix = i, a.namespace = n, a.name = o, a
            }
            return __extends(t, e), t
        }(n);
        t.XML = o, __reflect(o.prototype, "egret.web.XML");
        var a = function(e) {
            function t(t, r) {
                var i = e.call(this, 3, r) || this;
                return i.text = t, i
            }
            return __extends(t, e), t
        }(n);
        t.XMLText = a, __reflect(a.prototype, "egret.web.XMLText");
        var s = new DOMParser;
        e.XML = {
            parse: r
        }
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var r = null !== t && t.apply(this, arguments) || this;
                return r.onChange = function(t) {
                    var i = new e.OrientationEvent(e.Event.CHANGE);
                    i.beta = t.beta, i.gamma = t.gamma, i.alpha = t.alpha, r.dispatchEvent(i)
                }, r
            }
            return __extends(r, t), r.prototype.start = function() {
                window.addEventListener("deviceorientation", this.onChange)
            }, r.prototype.stop = function() {
                window.removeEventListener("deviceorientation", this.onChange)
            }, r
        }(e.EventDispatcher);
        t.WebDeviceOrientation = r, __reflect(r.prototype, "egret.web.WebDeviceOrientation", ["egret.DeviceOrientation"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {})), egret.DeviceOrientation = egret.web.WebDeviceOrientation;
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r(r) {
                var i = t.call(this) || this;
                return i.onUpdate = function(t) {
                    var r = new e.GeolocationEvent(e.Event.CHANGE),
                        n = t.coords;
                    r.altitude = n.altitude, r.heading = n.heading, r.accuracy = n.accuracy, r.latitude = n.latitude, r.longitude = n.longitude, r.speed = n.speed, r.altitudeAccuracy = n.altitudeAccuracy, i.dispatchEvent(r)
                }, i.onError = function(t) {
                    var r = e.GeolocationEvent.UNAVAILABLE;
                    t.code == t.PERMISSION_DENIED && (r = e.GeolocationEvent.PERMISSION_DENIED);
                    var n = new e.GeolocationEvent(e.IOErrorEvent.IO_ERROR);
                    n.errorType = r, n.errorMessage = t.message, i.dispatchEvent(n)
                }, i.geolocation = navigator.geolocation, i
            }
            return __extends(r, t), r.prototype.start = function() {
                var t = this.geolocation;
                t ? this.watchId = t.watchPosition(this.onUpdate, this.onError) : this.onError({
                    code: 2,
                    message: e.sys.tr(3004),
                    PERMISSION_DENIED: 1,
                    POSITION_UNAVAILABLE: 2
                })
            }, r.prototype.stop = function() {
                var e = this.geolocation;
                e.clearWatch(this.watchId)
            }, r
        }(e.EventDispatcher);
        t.WebGeolocation = r, __reflect(r.prototype, "egret.web.WebGeolocation", ["egret.Geolocation"]), e.Geolocation = e.web.WebGeolocation
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(t) {
            function r() {
                var r = null !== t && t.apply(this, arguments) || this;
                return r.onChange = function(t) {
                    var i = new e.MotionEvent(e.Event.CHANGE),
                        n = {
                            x: t.acceleration.x,
                            y: t.acceleration.y,
                            z: t.acceleration.z
                        },
                        o = {
                            x: t.accelerationIncludingGravity.x,
                            y: t.accelerationIncludingGravity.y,
                            z: t.accelerationIncludingGravity.z
                        },
                        a = {
                            alpha: t.rotationRate.alpha,
                            beta: t.rotationRate.beta,
                            gamma: t.rotationRate.gamma
                        };
                    i.acceleration = n, i.accelerationIncludingGravity = o, i.rotationRate = a, r.dispatchEvent(i)
                }, r
            }
            return __extends(r, t), r.prototype.start = function() {
                window.addEventListener("devicemotion", this.onChange)
            }, r.prototype.stop = function() {
                window.removeEventListener("devicemotion", this.onChange)
            }, r
        }(e.EventDispatcher);
        t.WebMotion = r, __reflect(r.prototype, "egret.web.WebMotion", ["egret.Motion"]), e.Motion = e.web.WebMotion
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {}(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = ["source-over", "lighter", "destination-out"],
            i = "source-over",
            n = [],
            o = function() {
                function o() {
                    this.nestLevel = 0
                }
                return o.prototype.render = function(e, t, r, i, o) {
                    this.nestLevel++;
                    var a = t,
                        s = a.context,
                        l = o ? e : null;
                    s.pushBuffer(a), this.drawDisplayObject(e, a, i, r, null, null, l), s.$drawWebGL();
                    var h = a.$drawCalls;
                    if (a.onRenderFinish(), s.popBuffer(), this.nestLevel--, 0 === this.nestLevel) {
                        n.length > 6 && (n.length = 6);
                        for (var u = n.length, c = 0; u > c; c++) n[c].resize(0, 0)
                    }
                    return h
                }, o.prototype.drawDisplayObject = function(t, r, i, n, o, a, s) {
                    var l, h = 0;
                    if (o && !s ? (o.isDirty && (h += o.drawToSurface()), l = o.$renderNode) : l = t.$getRenderNode(), l) {
                        if (i) {
                            var u = l.renderRegion;
                            if (a && !a.intersects(u)) l.needRedraw = !1;
                            else if (!l.needRedraw)
                                for (var c = i.length, d = 0; c > d; d++)
                                    if (u.intersects(i[d])) {
                                        l.needRedraw = !0;
                                        break
                                    }
                        } else l.needRedraw = !0;
                        if (l.needRedraw) {
                            h++;
                            var p = void 0,
                                f = void 0;
                            s ? (p = t.$getConcatenatedAlphaAt(s, t.$getConcatenatedAlpha()), f = e.Matrix.create().copyFrom(t.$getConcatenatedMatrix()), t.$getConcatenatedMatrixAt(s, f), n.$preMultiplyInto(f, f), r.setTransform(f.a, f.b, f.c, f.d, f.tx, f.ty), e.Matrix.release(f)) : (p = l.renderAlpha, f = l.renderMatrix, r.setTransform(f.a, f.b, f.c, f.d, f.tx + n.tx, f.ty + n.ty)), r.globalAlpha = p, this.renderNode(l, r), l.needRedraw = !1
                        }
                    }
                    if (o && !s) return h;
                    var v = t.$children;
                    if (v)
                        for (var g = v.length, y = 0; g > y; y++) {
                            var m = v[y];
                            if (!(!m.$visible || m.$alpha <= 0 || m.$maskedObject)) {
                                var x = m.$getFilters();
                                x && x.length > 0 ? h += this.drawWithFilter(m, r, i, n, a, s) : 0 !== m.$blendMode || m.$mask && (m.$mask.$parentDisplayList || s) ? h += this.drawWithClip(m, r, i, n, a, s) : m.$scrollRect || m.$maskRect ? h += this.drawWithScrollRect(m, r, i, n, a, s) : m.isFPS ? (r.context.$drawWebGL(), r.$computeDrawCall = !1, this.drawDisplayObject(m, r, i, n, m.$displayList, a, s), r.context.$drawWebGL(), r.$computeDrawCall = !0) : h += this.drawDisplayObject(m, r, i, n, m.$displayList, a, s)
                            }
                        }
                    return h
                }, o.prototype.drawWithFilter = function(t, o, a, s, l, h) {
                    var u, c = 0,
                        d = t.$getFilters(),
                        p = 0 !== t.$blendMode;
                    if (p && (u = r[t.$blendMode], u || (u = i)), 1 == d.length && "colorTransform" == d[0].type && !t.$children) return p && o.context.setGlobalCompositeOperation(u), o.context.$filter = d[0], c += t.$mask && (t.$mask.$parentDisplayList || h) ? this.drawWithClip(t, o, a, s, l, h) : t.$scrollRect || t.$maskRect ? this.drawWithScrollRect(t, o, a, s, l, h) : this.drawDisplayObject(t, o, a, s, t.$displayList, l, h), o.context.$filter = null, p && o.context.setGlobalCompositeOperation(i), c;
                    var f = e.Matrix.create();
                    f.copyFrom(t.$getConcatenatedMatrix()), h && t.$getConcatenatedMatrixAt(h, f);
                    var v;
                    v = e.sys.Region.create();
                    var g = t.$getOriginalBounds();
                    v.updateRegion(g, f);
                    var y = this.createRenderBuffer(v.width, v.height);
                    y.context.pushBuffer(y), y.setTransform(1, 0, 0, 1, -v.minX, -v.minY);
                    var m = e.Matrix.create().setTo(1, 0, 0, 1, -v.minX, -v.minY);
                    return c += t.$mask && (t.$mask.$parentDisplayList || h) ? this.drawWithClip(t, y, a, m, v, h) : t.$scrollRect || t.$maskRect ? this.drawWithScrollRect(t, y, a, m, v, h) : this.drawDisplayObject(t, y, a, m, t.$displayList, v, h), e.Matrix.release(m), y.context.popBuffer(), c > 0 && (p && o.context.setGlobalCompositeOperation(u), c++, o.globalAlpha = 1, o.setTransform(1, 0, 0, 1, v.minX + s.tx, v.minY + s.ty), o.context.drawTargetWidthFilters(d, y), p && o.context.setGlobalCompositeOperation(i)), n.push(y), e.sys.Region.release(v), e.Matrix.release(f), c
                }, o.prototype.drawWithClip = function(t, o, a, s, l, h) {
                    var u, c = 0,
                        d = 0 !== t.$blendMode;
                    d && (u = r[t.$blendMode], u || (u = i));
                    var p = t.$scrollRect ? t.$scrollRect : t.$maskRect,
                        f = t.$mask;
                    if (f) {
                        var v = f.$getRenderNode();
                        if (v) {
                            var g = v.renderMatrix;
                            if (0 == g.a && 0 == g.b || 0 == g.c && 0 == g.d) return c
                        }
                    }
                    var y, m = e.Matrix.create();
                    if (m.copyFrom(t.$getConcatenatedMatrix()), t.$parentDisplayList) {
                        var x = t.$parentDisplayList.root;
                        x !== t.$stage && t.$getConcatenatedMatrixAt(x, m)
                    }
                    var b;
                    if (f) {
                        b = f.$getOriginalBounds(), y = e.sys.Region.create();
                        var w = e.Matrix.create();
                        w.copyFrom(f.$getConcatenatedMatrix()), y.updateRegion(b, w), e.Matrix.release(w)
                    }
                    var T;
                    if (p && (T = e.sys.Region.create(), T.updateRegion(p, m)), T && y ? (T.intersect(y), e.sys.Region.release(y)) : !T && y && (T = y), T) {
                        if (T.isEmpty() || l && !l.intersects(T)) return e.sys.Region.release(T), e.Matrix.release(m), c
                    } else T = e.sys.Region.create(), b = t.$getOriginalBounds(), T.updateRegion(b, m);
                    var E = !1;
                    if (a) {
                        for (var S = a.length, _ = 0; S > _; _++)
                            if (T.intersects(a[_])) {
                                E = !0;
                                break
                            }
                    } else E = !0;
                    if (!E) return e.sys.Region.release(T), e.Matrix.release(m), c;
                    if (f || t.$children && 0 != t.$children.length) {
                        var C = this.createRenderBuffer(T.width, T.height);
                        C.context.pushBuffer(C), C.setTransform(1, 0, 0, 1, -T.minX, -T.minY);
                        var R = e.Matrix.create().setTo(1, 0, 0, 1, -T.minX, -T.minY);
                        if (c += this.drawDisplayObject(t, C, a, R, t.$displayList, T, h), f) {
                            var L = this.createRenderBuffer(T.width, T.height);
                            L.context.pushBuffer(L), L.setTransform(1, 0, 0, 1, -T.minX, -T.minY), R = e.Matrix.create().setTo(1, 0, 0, 1, -T.minX, -T.minY), c += this.drawDisplayObject(f, L, a, R, f.$displayList, T, h), L.context.popBuffer(), C.context.setGlobalCompositeOperation("destination-in"), C.setTransform(1, 0, 0, -1, 0, L.height), C.globalAlpha = 1;
                            var D = L.rootRenderTarget.width,
                                A = L.rootRenderTarget.height;
                            C.context.drawTexture(L.rootRenderTarget.texture, 0, 0, D, A, 0, 0, D, A, D, A), C.context.setGlobalCompositeOperation("source-over"), n.push(L)
                        }
                        if (e.Matrix.release(R), C.context.setGlobalCompositeOperation(i), C.context.popBuffer(), c > 0) {
                            if (c++, d && o.context.setGlobalCompositeOperation(u), p) {
                                var w = m;
                                C.setTransform(w.a, w.b, w.c, w.d, w.tx - T.minX, w.ty - T.minY), C.context.pushMask(p)
                            }
                            o.globalAlpha = 1, o.setTransform(1, 0, 0, -1, T.minX + s.tx, T.minY + s.ty + C.height);
                            var M = C.rootRenderTarget.width,
                                $ = C.rootRenderTarget.height;
                            o.context.drawTexture(C.rootRenderTarget.texture, 0, 0, M, $, 0, 0, M, $, M, $), p && C.context.popMask(), d && o.context.setGlobalCompositeOperation(i)
                        }
                        return n.push(C), e.sys.Region.release(T), e.Matrix.release(m), c
                    }
                    if (p) {
                        var w = m;
                        o.setTransform(w.a, w.b, w.c, w.d, w.tx - T.minX, w.ty - T.minY), o.context.pushMask(p)
                    }
                    return d && o.context.setGlobalCompositeOperation(u), c += this.drawDisplayObject(t, o, a, s, t.$displayList, l, h), d && o.context.setGlobalCompositeOperation(i), p && o.context.popMask(), e.sys.Region.release(T), e.Matrix.release(m), c
                }, o.prototype.drawWithScrollRect = function(t, r, i, n, o, a) {
                    var s = 0,
                        l = t.$scrollRect ? t.$scrollRect : t.$maskRect;
                    if (l.isEmpty()) return s;
                    var h = e.Matrix.create();
                    if (h.copyFrom(t.$getConcatenatedMatrix()), a) t.$getConcatenatedMatrixAt(a, h);
                    else if (t.$parentDisplayList) {
                        var u = t.$parentDisplayList.root;
                        u !== t.$stage && t.$getConcatenatedMatrixAt(u, h)
                    }
                    var c = e.sys.Region.create();
                    if (c.updateRegion(l, h), c.isEmpty() || o && !o.intersects(c)) return e.sys.Region.release(c), e.Matrix.release(h), s;
                    var d = !1;
                    if (i) {
                        for (var p = i.length, f = 0; p > f; f++)
                            if (c.intersects(i[f])) {
                                d = !0;
                                break
                            }
                    } else d = !0;
                    if (!d) return e.sys.Region.release(c), e.Matrix.release(h), s;
                    r.setTransform(h.a, h.b, h.c, h.d, h.tx + n.tx, h.ty + n.ty);
                    var v = r.context,
                        g = !1;
                    if (r.$hasScissor || 0 != h.b || 0 != h.c) v.pushMask(l);
                    else {
                        var y = h.a,
                            m = h.d,
                            x = h.tx,
                            b = h.ty,
                            w = l.x,
                            T = l.y,
                            E = w + l.width,
                            S = T + l.height,
                            _ = void 0,
                            C = void 0,
                            R = void 0,
                            L = void 0;
                        if (1 == y && 1 == m) _ = w + x, C = T + b, R = E + x, L = S + b;
                        else {
                            var D = y * w + x,
                                A = m * T + b,
                                M = y * E + x,
                                $ = m * T + b,
                                I = y * E + x,
                                B = m * S + b,
                                O = y * w + x,
                                P = m * S + b,
                                F = 0;
                            D > M && (F = D, D = M, M = F), I > O && (F = I, I = O, O = F), _ = I > D ? D : I, R = M > O ? M : O, A > $ && (F = A, A = $, $ = F), B > P && (F = B, B = P, P = F), C = B > A ? A : B, L = $ > P ? $ : P
                        }
                        v.enableScissor(_ + n.tx, -n.ty - L + r.height, R - _, L - C), g = !0
                    }
                    return s += this.drawDisplayObject(t, r, i, n, t.$displayList, c, a), r.setTransform(h.a, h.b, h.c, h.d, h.tx + n.tx, h.ty + n.ty), g ? v.disableScissor() : v.popMask(), e.sys.Region.release(c), e.Matrix.release(h), s
                }, o.prototype.drawNodeToBuffer = function(e, t, r, i) {
                    var n = t;
                    n.context.pushBuffer(n), n.setTransform(r.a, r.b, r.c, r.d, r.tx, r.ty), this.renderNode(e, t, i), n.context.$drawWebGL(), n.onRenderFinish(), n.context.popBuffer()
                }, o.prototype.renderNode = function(e, t, r) {
                    switch (e.type) {
                        case 1:
                            this.renderBitmap(e, t);
                            break;
                        case 2:
                            this.renderText(e, t);
                            break;
                        case 3:
                            this.renderGraphics(e, t, r);
                            break;
                        case 4:
                            this.renderGroup(e, t);
                            break;
                        case 6:
                            t.globalAlpha = e.drawData[0];
                            break;
                        case 7:
                            this.renderMesh(e, t)
                    }
                }, o.prototype.renderBitmap = function(e, t) {
                    var n = e.image;
                    if (n) {
                        var o = e.drawData,
                            a = o.length,
                            s = 0,
                            l = e.matrix,
                            h = e.blendMode,
                            u = e.alpha;
                        l && (t.saveTransform(), t.transform(l.a, l.b, l.c, l.d, l.tx, l.ty)), h && t.context.setGlobalCompositeOperation(r[h]);
                        var c;
                        if (u == u && (c = t.globalAlpha, t.globalAlpha *= u), e.filter) {
                            for (t.context.$filter = e.filter; a > s;) t.context.drawImage(n, o[s++], o[s++], o[s++], o[s++], o[s++], o[s++], o[s++], o[s++], e.imageWidth, e.imageHeight);
                            t.context.$filter = null
                        } else
                            for (; a > s;) t.context.drawImage(n, o[s++], o[s++], o[s++], o[s++], o[s++], o[s++], o[s++], o[s++], e.imageWidth, e.imageHeight);
                        h && t.context.setGlobalCompositeOperation(i), u == u && (t.globalAlpha = c), l && t.restoreTransform()
                    }
                }, o.prototype.renderMesh = function(e, t) {
                    var r = e.image,
                        i = e.drawData,
                        n = i.length,
                        o = 0,
                        a = e.matrix;
                    for (a && (t.saveTransform(), t.transform(a.a, a.b, a.c, a.d, a.tx, a.ty)); n > o;) t.context.drawMesh(r, i[o++], i[o++], i[o++], i[o++], i[o++], i[o++], i[o++], i[o++], e.imageWidth, e.imageHeight, e.uvs, e.vertices, e.indices, e.bounds);
                    a && t.restoreTransform()
                }, o.prototype.renderText = function(r, i) {
                    var n = r.width - r.x,
                        o = r.height - r.y;
                    if (0 != r.drawData.length && (this.canvasRenderBuffer && this.canvasRenderBuffer.context ? r.dirtyRender && this.canvasRenderBuffer.resize(n, o) : (this.canvasRenderer = new e.CanvasRenderer, this.canvasRenderBuffer = new t.CanvasRenderBuffer(n, o)), this.canvasRenderBuffer.context)) {
                        if ((r.x || r.y) && (r.dirtyRender && this.canvasRenderBuffer.context.translate(-r.x, -r.y), i.transform(1, 0, 0, 1, r.x, r.y)), r.dirtyRender) {
                            var a = this.canvasRenderBuffer.surface;
                            this.canvasRenderer.renderText(r, this.canvasRenderBuffer.context);
                            var s = r.$texture;
                            s ? i.context.updateTexture(s, a) : (s = i.context.createTexture(a), r.$texture = s), r.$textureWidth = a.width, r.$textureHeight = a.height
                        }
                        var l = r.$textureWidth,
                            h = r.$textureHeight;
                        i.context.drawTexture(r.$texture, 0, 0, l, h, 0, 0, l, h, l, h), (r.x || r.y) && (r.dirtyRender && this.canvasRenderBuffer.context.translate(r.x, r.y), i.transform(1, 0, 0, 1, -r.x, -r.y)), r.dirtyRender = !1
                    }
                }, o.prototype.renderGraphics = function(r, i, n) {
                    var o = r.width,
                        a = r.height;
                    if (!(0 >= o || 0 >= a) && o && a && 0 != r.drawData.length && (this.canvasRenderBuffer && this.canvasRenderBuffer.context ? (r.dirtyRender || n) && this.canvasRenderBuffer.resize(o, a) : (this.canvasRenderer = new e.CanvasRenderer, this.canvasRenderBuffer = new t.CanvasRenderBuffer(o, a)), this.canvasRenderBuffer.context)) {
                        (r.x || r.y) && ((r.dirtyRender || n) && this.canvasRenderBuffer.context.translate(-r.x, -r.y), i.transform(1, 0, 0, 1, r.x, r.y));
                        var s = this.canvasRenderBuffer.surface;
                        if (n) {
                            this.canvasRenderer.renderGraphics(r, this.canvasRenderBuffer.context, !0), e.WebGLUtils.deleteWebGLTexture(s);
                            var l = i.context.getWebGLTexture(s);
                            i.context.drawTexture(l, 0, 0, o, a, 0, 0, o, a, s.width, s.height)
                        } else {
                            if (r.dirtyRender) {
                                this.canvasRenderer.renderGraphics(r, this.canvasRenderBuffer.context);
                                var l = r.$texture;
                                l ? i.context.updateTexture(l, s) : (l = i.context.createTexture(s), r.$texture = l), r.$textureWidth = s.width, r.$textureHeight = s.height
                            }
                            var h = r.$textureWidth,
                                u = r.$textureHeight;
                            i.context.drawTexture(r.$texture, 0, 0, h, u, 0, 0, h, u, h, u)
                        }(r.x || r.y) && ((r.dirtyRender || n) && this.canvasRenderBuffer.context.translate(r.x, r.y), i.transform(1, 0, 0, 1, -r.x, -r.y)), n || (r.dirtyRender = !1)
                    }
                }, o.prototype.renderGroup = function(e, t) {
                    var r = e.matrix;
                    r && (t.saveTransform(), t.transform(r.a, r.b, r.c, r.d, r.tx, r.ty));
                    for (var i = e.drawData, n = i.length, o = 0; n > o; o++) {
                        var a = i[o];
                        this.renderNode(a, t)
                    }
                    r && t.restoreTransform()
                }, o.prototype.createRenderBuffer = function(e, r) {
                    var i = n.pop();
                    return i ? i.resize(e, r) : (i = new t.WebGLRenderBuffer(e, r), i.$computeDrawCall = !1), i
                }, o
            }();
        t.WebGLRenderer = o, __reflect(o.prototype, "egret.web.WebGLRenderer", ["egret.sys.SystemRenderer"])
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r;
        ! function(r) {
            function i(e) {
                return window.localStorage.getItem(e)
            }

            function n(t, r) {
                try {
                    return window.localStorage.setItem(t, r), !0
                } catch (i) {
                    return e.$warn(1047, t, r), !1
                }
            }

            function o(e) {
                window.localStorage.removeItem(e)
            }

            function a() {
                window.localStorage.clear()
            }
            t.getItem = i, t.setItem = n, t.removeItem = o, t.clear = a
        }(r = t.web || (t.web = {}))
    }(t = e.localStorage || (e.localStorage = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fragmentSrc = "precision lowp float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nvoid main(void) {\ngl_FragColor = vColor;\n}", t
            }
            return __extends(t, e), t
        }(e.EgretShader);
        e.PrimitiveShader = t, __reflect(t.prototype, "egret.web.PrimitiveShader")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fragmentSrc = "precision mediump float;uniform vec2 blur;uniform sampler2D uSampler;varying vec2 vTextureCoord;uniform vec2 uTextureSize;void main(){const int sampleRadius = 5;const int samples = sampleRadius * 2 + 1;vec2 blurUv = blur / uTextureSize;vec4 color = vec4(0, 0, 0, 0);vec2 uv = vec2(0.0, 0.0);blurUv /= float(sampleRadius);for (int i = -sampleRadius; i <= sampleRadius; i++) {uv.x = vTextureCoord.x + float(i) * blurUv.x;uv.y = vTextureCoord.y + float(i) * blurUv.y;color += texture2D(uSampler, uv);}color /= float(samples);gl_FragColor = color;}", t.uniforms = {
                    projectionVector: {
                        type: "2f",
                        value: {
                            x: 0,
                            y: 0
                        },
                        dirty: !0
                    },
                    blur: {
                        type: "2f",
                        value: {
                            x: 2,
                            y: 2
                        },
                        dirty: !0
                    },
                    uTextureSize: {
                        type: "2f",
                        value: {
                            x: 100,
                            y: 100
                        },
                        dirty: !0
                    }
                }, t
            }
            return __extends(t, e), t.prototype.setBlur = function(e, t) {
                var r = this.uniforms.blur;
                (r.value.x != e || r.value.y != t) && (r.value.x = e, r.value.y = t, r.dirty = !0)
            }, t.prototype.setTextureSize = function(e, t) {
                var r = this.uniforms.uTextureSize;
                (e != r.value.x || t != r.value.y) && (r.value.x = e, r.value.y = t, r.dirty = !0)
            }, t
        }(e.TextureShader);
        e.BlurShader = t, __reflect(t.prototype, "egret.web.BlurShader")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fragmentSrc = "precision mediump float;\nvarying vec2 vTextureCoord;\nvarying vec4 vColor;\nuniform mat4 matrix;\nuniform vec4 colorAdd;\nuniform sampler2D uSampler;\nvoid main(void) {\nvec4 texColor = texture2D(uSampler, vTextureCoord);\nif(texColor.a > 0.) {texColor = vec4(texColor.rgb / texColor.a, texColor.a);\n}vec4 locColor = clamp(texColor * matrix + colorAdd, 0., 1.);\ngl_FragColor = vColor * vec4(locColor.rgb * locColor.a, locColor.a);\n}", t.uniforms = {
                    projectionVector: {
                        type: "2f",
                        value: {
                            x: 0,
                            y: 0
                        },
                        dirty: !0
                    },
                    matrix: {
                        type: "mat4",
                        value: [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
                        dirty: !0
                    },
                    colorAdd: {
                        type: "4f",
                        value: {
                            x: 0,
                            y: 0,
                            z: 0,
                            w: 0
                        },
                        dirty: !0
                    }
                }, t
            }
            return __extends(t, e), t.prototype.setMatrix = function(e) {
                var t = this.uniforms.matrix;
                (t.value[0] != e[0] || t.value[0] != e[0] || t.value[1] != e[1] || t.value[2] != e[2] || t.value[3] != e[3] || t.value[4] != e[5] || t.value[5] != e[6] || t.value[6] != e[7] || t.value[7] != e[8] || t.value[8] != e[10] || t.value[9] != e[11] || t.value[10] != e[12] || t.value[11] != e[13] || t.value[12] != e[15] || t.value[13] != e[16] || t.value[14] != e[17] || t.value[15] != e[18]) && (t.value[0] = e[0], t.value[1] = e[1], t.value[2] = e[2], t.value[3] = e[3], t.value[4] = e[5], t.value[5] = e[6], t.value[6] = e[7], t.value[7] = e[8], t.value[8] = e[10], t.value[9] = e[11], t.value[10] = e[12], t.value[11] = e[13], t.value[12] = e[15], t.value[13] = e[16], t.value[14] = e[17], t.value[15] = e[18], t.dirty = !0);
                var r = this.uniforms.colorAdd;
                (r.value.x != e[4] / 255 || r.value.y != e[9] / 255 || r.value.z != e[14] / 255 || r.value.w != e[19] / 255) && (r.value.x = e[4] / 255, r.value.y = e[9] / 255, r.value.z = e[14] / 255, r.value.w = e[19] / 255, r.dirty = !0)
            }, t
        }(e.TextureShader);
        e.ColorTransformShader = t, __reflect(t.prototype, "egret.web.ColorTransformShader")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.fragmentSrc = ["precision mediump float;", "varying vec2 vTextureCoord;", "uniform sampler2D uSampler;", "uniform float distance;", "uniform float angle;", "uniform vec4 color;", "uniform float alpha;", "uniform float blurX;", "uniform float blurY;", "uniform float strength;", "uniform float inner;", "uniform float knockout;", "uniform float hideObject;", "uniform vec2 uTextureSize;vec2 px = vec2(1.0 / uTextureSize.x, 1.0 / uTextureSize.y);", "float random(vec3 scale, float seed)", "{", "return fract(sin(dot(gl_FragCoord.xyz + seed, scale)) * 43758.5453 + seed);", "}", "void main(void) {", "const float linearSamplingTimes = 7.0;", "const float circleSamplingTimes = 12.0;", "vec4 ownColor = texture2D(uSampler, vTextureCoord);", "vec4 curColor;", "float totalAlpha = 0.0;", "float maxTotalAlpha = 0.0;", "float curDistanceX = 0.0;", "float curDistanceY = 0.0;", "float offsetX = distance * cos(angle) * px.x;", "float offsetY = distance * sin(angle) * px.y;", "const float PI = 3.14159265358979323846264;", "float cosAngle;", "float sinAngle;", "float offset = PI * 2.0 / circleSamplingTimes * random(vec3(12.9898, 78.233, 151.7182), 0.0);", "float stepX = blurX * px.x / linearSamplingTimes;", "float stepY = blurY * px.y / linearSamplingTimes;", "for (float a = 0.0; a <= PI * 2.0; a += PI * 2.0 / circleSamplingTimes) {", "cosAngle = cos(a + offset);", "sinAngle = sin(a + offset);", "for (float i = 1.0; i <= linearSamplingTimes; i++) {", "curDistanceX = i * stepX * cosAngle;", "curDistanceY = i * stepY * sinAngle;", "curColor = texture2D(uSampler, vec2(vTextureCoord.x + curDistanceX - offsetX, vTextureCoord.y + curDistanceY + offsetY));", "totalAlpha += (linearSamplingTimes - i) * curColor.a;", "maxTotalAlpha += (linearSamplingTimes - i);", "}", "}", "ownColor.a = max(ownColor.a, 0.0001);", "ownColor.rgb = ownColor.rgb / ownColor.a;", "float outerGlowAlpha = (totalAlpha / maxTotalAlpha) * strength * alpha * (1. - inner) * max(min(hideObject, knockout), 1. - ownColor.a);", "float innerGlowAlpha = ((maxTotalAlpha - totalAlpha) / maxTotalAlpha) * strength * alpha * inner * ownColor.a;", "ownColor.a = max(ownColor.a * knockout * (1. - hideObject), 0.0001);", "vec3 mix1 = mix(ownColor.rgb, color.rgb, innerGlowAlpha / (innerGlowAlpha + ownColor.a));", "vec3 mix2 = mix(mix1, color.rgb, outerGlowAlpha / (innerGlowAlpha + ownColor.a + outerGlowAlpha));", "float resultAlpha = min(ownColor.a + outerGlowAlpha + innerGlowAlpha, 1.);", "gl_FragColor = vec4(mix2 * resultAlpha, resultAlpha);", "}"].join("\n"), t.uniforms = {
                    projectionVector: {
                        type: "2f",
                        value: {
                            x: 0,
                            y: 0
                        },
                        dirty: !0
                    },
                    distance: {
                        type: "1f",
                        value: 15,
                        dirty: !0
                    },
                    angle: {
                        type: "1f",
                        value: 1,
                        dirty: !0
                    },
                    color: {
                        type: "4f",
                        value: {
                            x: 1,
                            y: 0,
                            z: 0,
                            w: 0
                        },
                        dirty: !0
                    },
                    alpha: {
                        type: "1f",
                        value: 1,
                        dirty: !0
                    },
                    blurX: {
                        type: "1f",
                        value: 1,
                        dirty: !0
                    },
                    blurY: {
                        type: "1f",
                        value: 1,
                        dirty: !0
                    },
                    strength: {
                        type: "1f",
                        value: 1,
                        dirty: !0
                    },
                    inner: {
                        type: "1f",
                        value: 1,
                        dirty: !0
                    },
                    knockout: {
                        type: "1f",
                        value: 1,
                        dirty: !0
                    },
                    hideObject: {
                        type: "1f",
                        value: 0,
                        dirty: !0
                    },
                    uTextureSize: {
                        type: "2f",
                        value: {
                            x: 100,
                            y: 100
                        },
                        dirty: !0
                    }
                }, t
            }
            return __extends(t, e), t.prototype.setDistance = function(e) {
                var t = this.uniforms.distance;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setAngle = function(e) {
                var t = this.uniforms.angle;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setColor = function(e, t, r) {
                var i = this.uniforms.color;
                (i.value.x != e || i.value.y != t || i.value.z != r) && (i.value.x = e, i.value.y = t, i.value.z = r, i.dirty = !0)
            }, t.prototype.setAlpha = function(e) {
                var t = this.uniforms.alpha;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setBlurX = function(e) {
                var t = this.uniforms.blurX;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setBlurY = function(e) {
                var t = this.uniforms.blurY;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setStrength = function(e) {
                var t = this.uniforms.strength;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setInner = function(e) {
                var t = this.uniforms.inner;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setKnockout = function(e) {
                var t = this.uniforms.knockout;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setHideObject = function(e) {
                var t = this.uniforms.hideObject;
                t.value != e && (t.value = e, t.dirty = !0)
            }, t.prototype.setTextureSize = function(e, t) {
                var r = this.uniforms.uTextureSize;
                (e != r.value.x || t != r.value.y) && (r.value.x = e, r.value.y = t, r.dirty = !0)
            }, t
        }(e.TextureShader);
        e.GlowShader = t, __reflect(t.prototype, "egret.web.GlowShader")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function t(e) {
                this.gl = null, this.maxAttibs = 10, this.attribState = [], this.tempAttribState = [], this.currentShader = null, this.defaultShader = null, this.primitiveShader = null, this.colorTransformShader = null, this.blurShader = null, this.glowShader = null;
                for (var t = 0; t < this.maxAttibs; t++) this.attribState[t] = !1;
                this.setContext(e)
            }
            return t.prototype.setContext = function(t) {
                this.gl = t, this.primitiveShader = new e.PrimitiveShader(t), this.defaultShader = new e.TextureShader(t), this.colorTransformShader = new e.ColorTransformShader(t), this.glowShader = new e.GlowShader(t), this.blurShader = new e.BlurShader(t), this.primitiveShader.init(), this.defaultShader.init(), this.colorTransformShader.init(), this.blurShader.init(), this.glowShader.init()
            }, t.prototype.activateShader = function(e, t) {
                this.currentShader != e && (this.gl.useProgram(e.program), this.setAttribs(e.attributes), e.setAttribPointer(t), this.currentShader = e)
            }, t.prototype.setAttribs = function(e) {
                var t, r;
                for (r = this.tempAttribState.length, t = 0; r > t; t++) this.tempAttribState[t] = !1;
                for (r = e.length, t = 0; r > t; t++) {
                    var i = e[t];
                    this.tempAttribState[i] = !0
                }
                var n = this.gl;
                for (r = this.attribState.length, t = 0; r > t; t++) this.attribState[t] !== this.tempAttribState[t] && (this.attribState[t] = this.tempAttribState[t], this.tempAttribState[t] ? n.enableVertexAttribArray(t) : n.disableVertexAttribArray(t))
            }, t
        }();
        e.WebGLShaderManager = t, __reflect(t.prototype, "egret.web.WebGLShaderManager")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {
                this.drawData = [], this.drawDataLen = 0
            }
            return e.prototype.pushDrawRect = function() {
                if (0 == this.drawDataLen || 1 != this.drawData[this.drawDataLen - 1].type) {
                    var e = this.drawData[this.drawDataLen] || {};
                    e.type = 1, e.count = 0, this.drawData[this.drawDataLen] = e, this.drawDataLen++
                }
                this.drawData[this.drawDataLen - 1].count += 2
            }, e.prototype.pushDrawTexture = function(e, t, r, i, n) {
                if (void 0 === t && (t = 2), r) {
                    var o = this.drawData[this.drawDataLen] || {};
                    o.type = 0, o.texture = e, o.filter = r, o.count = t, o.textureWidth = i, o.textureHeight = n, this.drawData[this.drawDataLen] = o, this.drawDataLen++
                } else {
                    if (0 == this.drawDataLen || 0 != this.drawData[this.drawDataLen - 1].type || e != this.drawData[this.drawDataLen - 1].texture || this.drawData[this.drawDataLen - 1].filter) {
                        var o = this.drawData[this.drawDataLen] || {};
                        o.type = 0, o.texture = e, o.count = 0, this.drawData[this.drawDataLen] = o, this.drawDataLen++
                    }
                    this.drawData[this.drawDataLen - 1].count += t
                }
            }, e.prototype.pushPushMask = function(e) {
                void 0 === e && (e = 1);
                var t = this.drawData[this.drawDataLen] || {};
                t.type = 2, t.count = 2 * e, this.drawData[this.drawDataLen] = t, this.drawDataLen++
            }, e.prototype.pushPopMask = function(e) {
                void 0 === e && (e = 1);
                var t = this.drawData[this.drawDataLen] || {};
                t.type = 3, t.count = 2 * e, this.drawData[this.drawDataLen] = t, this.drawDataLen++
            }, e.prototype.pushSetBlend = function(e) {
                for (var t = this.drawDataLen, r = !1, i = t - 1; i >= 0; i--) {
                    var n = this.drawData[i];
                    if (n) {
                        if ((0 == n.type || 1 == n.type) && (r = !0), !r && 4 == n.type) {
                            this.drawData.splice(i, 1), this.drawDataLen--;
                            continue
                        }
                        if (4 == n.type) {
                            if (n.value == e) return;
                            break
                        }
                    }
                }
                var o = this.drawData[this.drawDataLen] || {};
                o.type = 4, o.value = e, this.drawData[this.drawDataLen] = o, this.drawDataLen++
            }, e.prototype.pushResize = function(e, t, r) {
                var i = this.drawData[this.drawDataLen] || {};
                i.type = 5, i.buffer = e, i.width = t, i.height = r, this.drawData[this.drawDataLen] = i, this.drawDataLen++
            }, e.prototype.pushClearColor = function() {
                var e = this.drawData[this.drawDataLen] || {};
                e.type = 6, this.drawData[this.drawDataLen] = e, this.drawDataLen++
            }, e.prototype.pushActivateBuffer = function(e) {
                for (var t = this.drawDataLen, r = !1, i = t - 1; i >= 0; i--) {
                    var n = this.drawData[i];
                    !n || (4 != n.type && 7 != n.type && (r = !0), r || 7 != n.type) || (this.drawData.splice(i, 1), this.drawDataLen--)
                }
                var o = this.drawData[this.drawDataLen] || {};
                o.type = 7, o.buffer = e, o.width = e.rootRenderTarget.width, o.height = e.rootRenderTarget.height, this.drawData[this.drawDataLen] = o, this.drawDataLen++
            }, e.prototype.pushEnableScissor = function(e, t, r, i) {
                var n = this.drawData[this.drawDataLen] || {};
                n.type = 8, n.x = e, n.y = t, n.width = r, n.height = i, this.drawData[this.drawDataLen] = n, this.drawDataLen++
            }, e.prototype.pushDisableScissor = function() {
                var e = this.drawData[this.drawDataLen] || {};
                e.type = 9, this.drawData[this.drawDataLen] = e, this.drawDataLen++
            }, e.prototype.clear = function() {
                for (var e = 0; e < this.drawDataLen; e++) {
                    var t = this.drawData[e];
                    t.type = 0, t.count = 0, t.texture = null, t.filter = null, t.uv = null, t.value = "", t.buffer = null, t.width = 0, t.height = 0
                }
                this.drawDataLen = 0
            }, e
        }();
        e.WebGLDrawCmdManager = t, __reflect(t.prototype, "egret.web.WebGLDrawCmdManager")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(e) {
        var t = function() {
            function e() {
                this.size = 2e3, this.vertexMaxSize = 4 * this.size, this.indicesMaxSize = 6 * this.size, this.vertSize = 5, this.vertices = null, this.indices = null, this.indicesForMesh = null, this.vertexIndex = 0, this.indexIndex = 0, this.hasMesh = !1;
                var e = this.vertexMaxSize * this.vertSize,
                    t = this.indicesMaxSize;
                this.vertices = new Float32Array(e), this.indices = new Uint16Array(t), this.indicesForMesh = new Uint16Array(t);
                for (var r = 0, i = 0; t > r; r += 6, i += 4) this.indices[r + 0] = i + 0, this.indices[r + 1] = i + 1, this.indices[r + 2] = i + 2, this.indices[r + 3] = i + 0, this.indices[r + 4] = i + 2, this.indices[r + 5] = i + 3
            }
            return e.prototype.reachMaxSize = function(e, t) {
                return void 0 === e && (e = 4), void 0 === t && (t = 6), this.vertexIndex > this.vertexMaxSize - e || this.indexIndex > this.indicesMaxSize - t
            }, e.prototype.getVertices = function() {
                var e = this.vertices.subarray(0, this.vertexIndex * this.vertSize);
                return e
            }, e.prototype.getIndices = function() {
                return this.indices
            }, e.prototype.getMeshIndices = function() {
                return this.indicesForMesh
            }, e.prototype.changeToMeshIndices = function() {
                if (!this.hasMesh) {
                    for (var e = 0, t = this.indexIndex; t > e; ++e) this.indicesForMesh[e] = this.indices[e];
                    this.hasMesh = !0
                }
            }, e.prototype.isMesh = function() {
                return this.hasMesh
            }, e.prototype.cacheArrays = function(e, t, r, i, n, o, a, s, l, h, u, c, d, p, f) {
                var v = e,
                    g = v.a,
                    y = v.b,
                    m = v.c,
                    x = v.d,
                    b = v.tx,
                    w = v.ty;
                (0 != a || 0 != s) && v.append(1, 0, 0, 1, a, s), (n / l != 1 || o / h != 1) && v.append(l / n, 0, 0, h / o, 0, 0);
                var T = v.a,
                    E = v.b,
                    S = v.c,
                    _ = v.d,
                    C = v.tx,
                    R = v.ty;
                if (v.a = g, v.b = y, v.c = m, v.d = x, v.tx = b, v.ty = w, p) {
                    var L = this.vertices,
                        D = this.vertexIndex * this.vertSize,
                        A = 0,
                        M = 0,
                        $ = 0,
                        I = 0,
                        B = 0,
                        O = 0,
                        P = 0;
                    for (A = 0, $ = d.length; $ > A; A += 2) M = 5 * A / 2, O = p[A], P = p[A + 1], I = d[A], B = d[A + 1], L[D + M + 0] = T * O + S * P + C, L[D + M + 1] = E * O + _ * P + R, L[D + M + 2] = (r + I * n) / u, L[D + M + 3] = (i + B * o) / c, L[D + M + 4] = t;
                    if (this.hasMesh)
                        for (var F = 0, W = f.length; W > F; ++F) this.indicesForMesh[this.indexIndex + F] = f[F] + this.vertexIndex;
                    this.vertexIndex += d.length / 2, this.indexIndex += f.length
                } else {
                    var H = u,
                        G = c,
                        k = n,
                        U = o;
                    r /= H, i /= G, n /= H, o /= G;
                    var L = this.vertices,
                        D = this.vertexIndex * this.vertSize;
                    if (L[D++] = C, L[D++] = R, L[D++] = r, L[D++] = i, L[D++] = t, L[D++] = T * k + C, L[D++] = E * k + R, L[D++] = n + r, L[D++] = i, L[D++] = t, L[D++] = T * k + S * U + C, L[D++] = _ * U + E * k + R, L[D++] = n + r, L[D++] = o + i, L[D++] = t, L[D++] = S * U + C, L[D++] = _ * U + R, L[D++] = r, L[D++] = o + i, L[D++] = t, this.hasMesh) {
                        var N = this.indicesForMesh;
                        N[this.indexIndex + 0] = 0 + this.vertexIndex, N[this.indexIndex + 1] = 1 + this.vertexIndex, N[this.indexIndex + 2] = 2 + this.vertexIndex, N[this.indexIndex + 3] = 0 + this.vertexIndex, N[this.indexIndex + 4] = 2 + this.vertexIndex, N[this.indexIndex + 5] = 3 + this.vertexIndex
                    }
                    this.vertexIndex += 4, this.indexIndex += 6
                }
            }, e.prototype.clear = function() {
                this.hasMesh = !1, this.vertexIndex = 0, this.indexIndex = 0
            }, e
        }();
        e.WebGLVertexArrayObject = t, __reflect(t.prototype, "egret.web.WebGLVertexArrayObject")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(e) {
            function t(t, r, i) {
                var n = e.call(this) || this;
                return n.clearColor = [0, 0, 0, 0], n.useFrameBuffer = !0, n.gl = t, n.width = r || 1, n.height = i || 1, n.texture = n.createTexture(), n.frameBuffer = t.createFramebuffer(), t.bindFramebuffer(t.FRAMEBUFFER, n.frameBuffer), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, n.texture, 0), n.stencilBuffer = t.createRenderbuffer(), t.bindRenderbuffer(t.RENDERBUFFER, n.stencilBuffer), t.renderbufferStorage(t.RENDERBUFFER, t.DEPTH_STENCIL, n.width, n.height), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.DEPTH_STENCIL_ATTACHMENT, t.RENDERBUFFER, n.stencilBuffer), n
            }
            return __extends(t, e), t.prototype.resize = function(e, t) {
                var r = this.gl;
                r.bindTexture(r.TEXTURE_2D, this.texture), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, e, t, 0, r.RGBA, r.UNSIGNED_BYTE, null), r.bindFramebuffer(r.FRAMEBUFFER, this.frameBuffer), r.deleteRenderbuffer(this.stencilBuffer), this.stencilBuffer = r.createRenderbuffer(), r.bindRenderbuffer(r.RENDERBUFFER, this.stencilBuffer), r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, e, t), this.width = e, this.height = t
            }, t.prototype.activate = function() {
                var e = this.gl;
                e.bindFramebuffer(e.FRAMEBUFFER, this.getFrameBuffer())
            }, t.prototype.getFrameBuffer = function() {
                return this.useFrameBuffer ? this.frameBuffer : null
            }, t.prototype.createTexture = function() {
                var e = this.gl,
                    t = e.createTexture();
                return e.bindTexture(e.TEXTURE_2D, t), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, this.width, this.height, 0, e.RGBA, e.UNSIGNED_BYTE, null), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), t
            }, t.prototype.clear = function(e) {
                var t = this.gl;
                e && this.activate(), t.colorMask(!0, !0, !0, !0), t.clearColor(this.clearColor[0], this.clearColor[1], this.clearColor[2], this.clearColor[3]), t.clear(t.COLOR_BUFFER_BIT)
            }, t
        }(e.HashObject);
        t.WebGLRenderTarget = r, __reflect(r.prototype, "egret.web.WebGLRenderTarget")
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e, t) {
            var r = document.createElement("canvas");
            return isNaN(e) || isNaN(t) || (r.width = e, r.height = t), r
        }
        var i = function() {
            function i(e, i) {
                this.glID = null, this.projectionX = 0 / 0, this.projectionY = 0 / 0, this.shaderManager = null, this.contextLost = !1, this.$scissorState = !1, this.vertSize = 5, this.blurFilter = null, this.surface = r(e, i), this.initWebGL(), this.$bufferStack = [];
                var n = this.context;
                this.vertexBuffer = n.createBuffer(), this.indexBuffer = n.createBuffer(), n.bindBuffer(n.ARRAY_BUFFER, this.vertexBuffer), n.bindBuffer(n.ELEMENT_ARRAY_BUFFER, this.indexBuffer), this.drawCmdManager = new t.WebGLDrawCmdManager, this.vao = new t.WebGLVertexArrayObject, this.setGlobalCompositeOperation("source-over")
            }
            return i.getInstance = function(e, t) {
                return this.instance ? this.instance : (this.instance = new i(e, t), this.instance)
            }, i.prototype.pushBuffer = function(e) {
                this.$bufferStack.push(e), e != this.currentBuffer && (this.currentBuffer, this.drawCmdManager.pushActivateBuffer(e)), this.currentBuffer = e
            }, i.prototype.popBuffer = function() {
                if (!(this.$bufferStack.length <= 1)) {
                    var e = this.$bufferStack.pop(),
                        t = this.$bufferStack[this.$bufferStack.length - 1];
                    e != t && this.drawCmdManager.pushActivateBuffer(t), this.currentBuffer = t
                }
            }, i.prototype.activateBuffer = function(e) {
                e.rootRenderTarget.activate(), this.bindIndices || (this.uploadIndicesArray(this.vao.getIndices()), this.bindIndices = !0), e.restoreStencil(), e.restoreScissor(), this.onResize(e.width, e.height)
            }, i.prototype.uploadVerticesArray = function(e) {
                var t = this.context;
                t.bufferData(t.ARRAY_BUFFER, e, t.STREAM_DRAW)
            }, i.prototype.uploadIndicesArray = function(e) {
                var t = this.context;
                t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.STATIC_DRAW)
            }, i.prototype.destroy = function() {
                this.surface.width = this.surface.height = 0
            }, i.prototype.onResize = function(e, t) {
                e = e || this.surface.width, t = t || this.surface.height, this.projectionX = e / 2, this.projectionY = -t / 2, this.context && this.context.viewport(0, 0, e, t)
            }, i.prototype.resize = function(e, t, r) {
                var i = this.surface;
                r ? (i.width < e && (i.width = e), i.height < t && (i.height = t)) : (i.width != e && (i.width = e), i.height != t && (i.height = t)), this.onResize()
            }, i.prototype.initWebGL = function() {
                this.onResize(), this.surface.addEventListener("webglcontextlost", this.handleContextLost.bind(this), !1), this.surface.addEventListener("webglcontextrestored", this.handleContextRestored.bind(this), !1), this.getWebGLContext(), this.shaderManager = new t.WebGLShaderManager(this.context)
            }, i.prototype.handleContextLost = function() {
                this.contextLost = !0
            }, i.prototype.handleContextRestored = function() {
                this.initWebGL(), this.contextLost = !1
            }, i.prototype.getWebGLContext = function() {
                for (var t, r = {
                        antialias: i.antialias,
                        stencil: !0
                    }, n = ["webgl", "experimental-webgl"], o = 0; o < n.length; o++) {
                    try {
                        t = this.surface.getContext(n[o], r)
                    } catch (a) {}
                    if (t) break
                }
                t || e.$error(1021), this.setContext(t)
            }, i.prototype.setContext = function(e) {
                this.context = e, e.id = i.glContextId++, this.glID = e.id, e.disable(e.DEPTH_TEST), e.disable(e.CULL_FACE), e.enable(e.BLEND), e.colorMask(!0, !0, !0, !0), e.activeTexture(e.TEXTURE0)
            }, i.prototype.enableStencilTest = function() {
                var e = this.context;
                e.enable(e.STENCIL_TEST)
            }, i.prototype.disableStencilTest = function() {
                var e = this.context;
                e.disable(e.STENCIL_TEST)
            }, i.prototype.enableScissorTest = function(e) {
                var t = this.context;
                t.enable(t.SCISSOR_TEST), t.scissor(e.x, e.y, e.width, e.height)
            }, i.prototype.disableScissorTest = function() {
                var e = this.context;
                e.disable(e.SCISSOR_TEST)
            }, i.prototype.getPixels = function(e, t, r, i, n) {
                var o = this.context;
                o.readPixels(e, t, r, i, o.RGBA, o.UNSIGNED_BYTE, n)
            }, i.prototype.createTexture = function(e) {
                var t = this.context,
                    r = t.createTexture();
                return r ? (r.glContext = t, t.bindTexture(t.TEXTURE_2D, r), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), r) : void(this.contextLost = !0)
            }, i.prototype.createTextureFromCompressedData = function(e, t, r, i, n) {
                return null
            }, i.prototype.updateTexture = function(e, t) {
                var r = this.context;
                r.bindTexture(r.TEXTURE_2D, e), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t)
            }, i.prototype.getWebGLTexture = function(e) {
                return e.webGLTexture || ("image" == e.format ? e.webGLTexture = this.createTexture(e.source) : "pvr" == e.format && (e.webGLTexture = this.createTextureFromCompressedData(e.source.pvrtcData, e.width, e.height, e.source.mipmapsCount, e.source.format)), e.$deleteSource && e.webGLTexture && (e.source = null)), e.webGLTexture
            }, i.prototype.clearRect = function(e, t, r, i) {
                if (0 != e || 0 != t || r != this.surface.width || i != this.surface.height) {
                    var n = this.currentBuffer;
                    if (n.$hasScissor) this.setGlobalCompositeOperation("destination-out"), this.drawRect(e, t, r, i), this.setGlobalCompositeOperation("source-over");
                    else {
                        var o = n.globalMatrix;
                        0 == o.b && 0 == o.c ? (e = e * o.a + o.tx, t = t * o.d + o.ty, r *= o.a, i *= o.d, this.enableScissor(e, -t - i + n.height, r, i), this.clear(), this.disableScissor()) : (this.setGlobalCompositeOperation("destination-out"), this.drawRect(e, t, r, i), this.setGlobalCompositeOperation("source-over"))
                    }
                } else this.clear()
            }, i.prototype.setGlobalCompositeOperation = function(e) {
                this.drawCmdManager.pushSetBlend(e)
            }, i.prototype.drawImage = function(e, t, r, i, n, o, a, s, l, h, u) {
                var c = this.currentBuffer;
                if (!this.contextLost && e && c) {
                    var d;
                    if (e.texture || e.source && e.source.texture) d = e.texture || e.source.texture, c.saveTransform(), c.transform(1, 0, 0, -1, 0, l + 2 * a);
                    else {
                        if (!e.source && !e.webGLTexture) return;
                        d = this.getWebGLTexture(e)
                    }
                    d && (this.drawTexture(d, t, r, i, n, o, a, s, l, h, u), e.source && e.source.texture && c.restoreTransform())
                }
            }, i.prototype.drawMesh = function(e, t, r, i, n, o, a, s, l, h, u, c, d, p, f) {
                var v = this.currentBuffer;
                if (!this.contextLost && e && v) {
                    var g;
                    if (e.texture || e.source && e.source.texture) g = e.texture || e.source.texture, v.saveTransform(), v.transform(1, 0, 0, -1, 0, l + 2 * a);
                    else {
                        if (!e.source && !e.webGLTexture) return;
                        g = this.getWebGLTexture(e)
                    }
                    g && this.drawTexture(g, t, r, i, n, o, a, s, l, h, u, c, d, p, f)
                }
            }, i.prototype.drawTexture = function(e, t, r, i, n, o, a, s, l, h, u, c, d, p, f) {
                var v = this.currentBuffer;
                if (!this.contextLost && e && v) {
                    d && p ? this.vao.reachMaxSize(d.length / 2, p.length) && this.$drawWebGL() : this.vao.reachMaxSize() && this.$drawWebGL(), c && this.vao.changeToMeshIndices();
                    var g = v.globalMatrix,
                        y = v.globalAlpha,
                        m = p ? p.length / 3 : 2;
                    this.drawCmdManager.pushDrawTexture(e, m, this.$filter), this.vao.cacheArrays(g, y, t, r, i, n, o, a, s, l, h, u, c, d, p)
                }
            }, i.prototype.drawRect = function(e, t, r, i) {
                var n = this.currentBuffer;
                !this.contextLost && n && (this.vao.reachMaxSize() && this.$drawWebGL(), this.drawCmdManager.pushDrawRect(), this.vao.cacheArrays(n.globalMatrix, n.globalAlpha, 0, 0, r, i, e, t, r, i, r, i))
            }, i.prototype.pushMask = function(e) {
                var t = this.currentBuffer;
                if (!this.contextLost && t) {
                    t.$stencilList.push(e), this.vao.reachMaxSize() && this.$drawWebGL();
                    var r = e.length;
                    if (r) {
                        this.drawCmdManager.pushPushMask(r);
                        for (var i = 0; r > i; i++) {
                            var n = e[i];
                            this.vao.cacheArrays(t.globalMatrix, t.globalAlpha, 0, 0, n.width, n.height, n.minX, n.minY, n.width, n.height, n.width, n.height)
                        }
                    } else this.drawCmdManager.pushPushMask(), this.vao.cacheArrays(t.globalMatrix, t.globalAlpha, 0, 0, e.width, e.height, e.x, e.y, e.width, e.height, e.width, e.height)
                }
            }, i.prototype.popMask = function() {
                var e = this.currentBuffer;
                if (!this.contextLost && e) {
                    var t = e.$stencilList.pop();
                    this.vao.reachMaxSize() && this.$drawWebGL();
                    var r = t.length;
                    if (r) {
                        this.drawCmdManager.pushPopMask(r);
                        for (var i = 0; r > i; i++) {
                            var n = t[i];
                            this.vao.cacheArrays(e.globalMatrix, e.globalAlpha, 0, 0, n.width, n.height, n.minX, n.minY, n.width, n.height, n.width, n.height)
                        }
                    } else this.drawCmdManager.pushPopMask(), this.vao.cacheArrays(e.globalMatrix, e.globalAlpha, 0, 0, t.width, t.height, t.x, t.y, t.width, t.height, t.width, t.height)
                }
            }, i.prototype.clear = function() {
                this.drawCmdManager.pushClearColor()
            }, i.prototype.enableScissor = function(e, t, r, i) {
                var n = this.currentBuffer;
                this.drawCmdManager.pushEnableScissor(e, t, r, i), n.$hasScissor = !0
            }, i.prototype.disableScissor = function() {
                var e = this.currentBuffer;
                this.drawCmdManager.pushDisableScissor(), e.$hasScissor = !1
            }, i.prototype.$drawWebGL = function() {
                if (0 != this.drawCmdManager.drawDataLen && !this.contextLost) {
                    this.uploadVerticesArray(this.vao.getVertices()), this.vao.isMesh() && this.uploadIndicesArray(this.vao.getMeshIndices());
                    for (var e = this.drawCmdManager.drawDataLen, t = 0, r = 0; e > r; r++) {
                        var i = this.drawCmdManager.drawData[r];
                        t = this.drawData(i, t), 7 == i.type && (this.activatedBuffer = i.buffer), (0 == i.type || 1 == i.type || 2 == i.type || 3 == i.type) && this.activatedBuffer && this.activatedBuffer.$computeDrawCall && this.activatedBuffer.$drawCalls++
                    }
                    this.vao.isMesh() && this.uploadIndicesArray(this.vao.getIndices()), this.drawCmdManager.clear(), this.vao.clear()
                }
            }, i.prototype.drawData = function(e, t) {
                if (e) {
                    var r;
                    switch (e.type) {
                        case 0:
                            var i = e.filter;
                            i ? "colorTransform" == i.type ? (r = this.shaderManager.colorTransformShader, r.setMatrix(i.$matrix)) : "blur" == i.type ? (r = this.shaderManager.blurShader, r.setBlur(i.$blurX, i.$blurY), r.setTextureSize(e.textureWidth, e.textureHeight)) : "glow" == i.type && (r = this.shaderManager.glowShader, r.setDistance(i.$distance || 0), r.setAngle(i.$angle ? i.$angle / 180 * Math.PI : 0), r.setColor(i.$red / 255, i.$green / 255, i.$blue / 255), r.setAlpha(i.$alpha), r.setBlurX(i.$blurX), r.setBlurY(i.$blurY), r.setStrength(i.$strength), r.setInner(i.$inner ? 1 : 0), r.setKnockout(i.$knockout ? 0 : 1), r.setHideObject(i.$hideObject ? 1 : 0), r.setTextureSize(e.textureWidth, e.textureHeight)) : r = this.shaderManager.defaultShader, r.setProjection(this.projectionX, this.projectionY), this.shaderManager.activateShader(r, 4 * this.vertSize), r.syncUniforms(), t += this.drawTextureElements(e, t);
                            break;
                        case 1:
                            r = this.shaderManager.primitiveShader, r.setProjection(this.projectionX, this.projectionY), this.shaderManager.activateShader(r, 4 * this.vertSize), r.syncUniforms(), t += this.drawRectElements(e, t);
                            break;
                        case 2:
                            r = this.shaderManager.primitiveShader, r.setProjection(this.projectionX, this.projectionY), this.shaderManager.activateShader(r, 4 * this.vertSize), r.syncUniforms(), t += this.drawPushMaskElements(e, t);
                            break;
                        case 3:
                            r = this.shaderManager.primitiveShader, r.setProjection(this.projectionX, this.projectionY), this.shaderManager.activateShader(r, 4 * this.vertSize), r.syncUniforms(), t += this.drawPopMaskElements(e, t);
                            break;
                        case 4:
                            this.setBlendMode(e.value);
                            break;
                        case 5:
                            e.buffer.rootRenderTarget.resize(e.width, e.height), this.onResize(e.width, e.height);
                            break;
                        case 6:
                            if (this.activatedBuffer) {
                                var n = this.activatedBuffer.rootRenderTarget;
                                (0 != n.width || 0 != n.height) && n.clear()
                            }
                            break;
                        case 7:
                            this.activateBuffer(e.buffer);
                            break;
                        case 8:
                            var o = this.activatedBuffer;
                            o && o.enableScissor(e.x, e.y, e.width, e.height);
                            break;
                        case 9:
                            o = this.activatedBuffer, o && o.disableScissor()
                    }
                    return t
                }
            }, i.prototype.drawTextureElements = function(e, t) {
                var r = this.context;
                r.bindTexture(r.TEXTURE_2D, e.texture);
                var i = 3 * e.count;
                return r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), i
            }, i.prototype.drawRectElements = function(e, t) {
                var r = this.context,
                    i = 3 * e.count;
                return r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), i
            }, i.prototype.drawPushMaskElements = function(e, t) {
                var r = this.context,
                    i = 3 * e.count,
                    n = this.activatedBuffer;
                if (n) {
                    0 == n.stencilHandleCount && (n.enableStencil(), r.clear(r.STENCIL_BUFFER_BIT));
                    var o = n.stencilHandleCount;
                    n.stencilHandleCount++, r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, o, 255), r.stencilOp(r.KEEP, r.KEEP, r.INCR), r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), r.stencilFunc(r.EQUAL, o + 1, 255), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
                }
                return i
            }, i.prototype.drawPopMaskElements = function(e, t) {
                var r = this.context,
                    i = 3 * e.count,
                    n = this.activatedBuffer;
                if (n)
                    if (n.stencilHandleCount--, 0 == n.stencilHandleCount) n.disableStencil();
                    else {
                        var o = n.stencilHandleCount;
                        r.colorMask(!1, !1, !1, !1), r.stencilFunc(r.EQUAL, o + 1, 255), r.stencilOp(r.KEEP, r.KEEP, r.DECR), r.drawElements(r.TRIANGLES, i, r.UNSIGNED_SHORT, 2 * t), r.stencilFunc(r.EQUAL, o, 255), r.colorMask(!0, !0, !0, !0), r.stencilOp(r.KEEP, r.KEEP, r.KEEP)
                    }
                return i
            }, i.prototype.setBlendMode = function(e) {
                var t = this.context,
                    r = i.blendModesForGL[e];
                r && t.blendFunc(r[0], r[1])
            }, i.prototype.drawTargetWidthFilters = function(e, r) {
                var i, n = r,
                    o = e.length;
                if (o > 1)
                    for (var a = 0; o - 1 > a; a++) {
                        var s = e[a],
                            l = r.rootRenderTarget.width,
                            h = r.rootRenderTarget.height;
                        i = t.WebGLRenderBuffer.create(l, h), i.setTransform(1, 0, 0, 1, 0, 0), i.globalAlpha = 1, this.drawToRenderTarget(s, r, i), r != n && t.WebGLRenderBuffer.release(r), r = i
                    }
                var u = e[o - 1];
                this.drawToRenderTarget(u, r, this.currentBuffer), r != n && t.WebGLRenderBuffer.release(r)
            }, i.prototype.drawToRenderTarget = function(r, i, n) {
                if (!this.contextLost) {
                    this.vao.reachMaxSize() && this.$drawWebGL(), this.pushBuffer(n);
                    var o, a = i,
                        s = i.rootRenderTarget.width,
                        l = i.rootRenderTarget.height;
                    "blur" == r.type && (this.blurFilter || (this.blurFilter = new e.BlurFilter(2, 2)), 0 != r.blurX && 0 != r.blurY ? (this.blurFilter.blurX = r.blurX, this.blurFilter.blurY = 0, o = t.WebGLRenderBuffer.create(s, l), o.setTransform(1, 0, 0, 1, 0, 0), o.globalAlpha = 1, this.drawToRenderTarget(this.blurFilter, i, o), i != a && t.WebGLRenderBuffer.release(i), i = o, this.blurFilter.blurX = 0, this.blurFilter.blurY = r.blurY) : (this.blurFilter.blurX = r.blurX, this.blurFilter.blurY = r.blurY), r = this.blurFilter), n.saveTransform(), n.transform(1, 0, 0, -1, 0, l), this.vao.cacheArrays(n.globalMatrix, n.globalAlpha, 0, 0, s, l, 0, 0, s, l, s, l), n.restoreTransform();
                    var h;
                    h = "blur" == r.type ? {
                        type: "blur",
                        $blurX: r.$blurX,
                        $blurY: r.$blurY
                    } : r, this.drawCmdManager.pushDrawTexture(i.rootRenderTarget.texture, 2, h, s, l), i != a && t.WebGLRenderBuffer.release(i), this.popBuffer()
                }
            }, i.initBlendMode = function() {
                i.blendModesForGL = {}, i.blendModesForGL["source-over"] = [1, 771], i.blendModesForGL.lighter = [1, 1], i.blendModesForGL["lighter-in"] = [770, 771], i.blendModesForGL["destination-out"] = [0, 771], i.blendModesForGL["destination-in"] = [0, 770]
            }, i
        }();
        i.glContextId = 0, i.blendModesForGL = null, t.WebGLRenderContext = i, __reflect(i.prototype, "egret.web.WebGLRenderContext"), i.initBlendMode()
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        var r = function(r) {
            function n(i, n, o) {
                var a = r.call(this) || this;
                if (a.globalAlpha = 1, a.stencilState = !1, a.$stencilList = [], a.stencilHandleCount = 0, a.$scissorState = !1, a.scissorRect = new e.Rectangle, a.$hasScissor = !1, a.dirtyRegionPolicy = !0, a._dirtyRegionPolicy = !0, a.$drawCalls = 0, a.$computeDrawCall = !1, a.globalMatrix = new e.Matrix, a.savedGlobalMatrix = new e.Matrix, a.context = t.WebGLRenderContext.getInstance(i, n), a.rootRenderTarget = new t.WebGLRenderTarget(a.context.context, 3, 3), i && n && a.resize(i, n), a.root = o, a.root) a.context.pushBuffer(a), a.surface = a.context.surface;
                else {
                    var s = a.context.activatedBuffer;
                    s && s.rootRenderTarget.activate(), a.surface = a.rootRenderTarget
                }
                return a
            }
            return __extends(n, r), n.prototype.enableStencil = function() {
                this.stencilState || (this.context.enableStencilTest(), this.stencilState = !0)
            }, n.prototype.disableStencil = function() {
                this.stencilState && (this.context.disableStencilTest(), this.stencilState = !1)
            }, n.prototype.restoreStencil = function() {
                this.stencilState ? this.context.enableStencilTest() : this.context.disableStencilTest()
            }, n.prototype.enableScissor = function(e, t, r, i) {
                this.$scissorState || (this.$scissorState = !0, this.scissorRect.setTo(e, t, r, i), this.context.enableScissorTest(this.scissorRect))
            }, n.prototype.disableScissor = function() {
                this.$scissorState && (this.$scissorState = !1, this.scissorRect.setEmpty(), this.context.disableScissorTest())
            }, n.prototype.restoreScissor = function() {
                this.$scissorState ? this.context.enableScissorTest(this.scissorRect) : this.context.disableScissorTest()
            }, Object.defineProperty(n.prototype, "width", {
                get: function() {
                    return this.rootRenderTarget.width
                },
                enumerable: !0,
                configurable: !0
            }), Object.defineProperty(n.prototype, "height", {
                get: function() {
                    return this.rootRenderTarget.height
                },
                enumerable: !0,
                configurable: !0
            }), n.prototype.resize = function(e, t, r) {
                this.context.pushBuffer(this), e = e || 1, t = t || 1, (e != this.rootRenderTarget.width || t != this.rootRenderTarget.height) && (this.context.drawCmdManager.pushResize(this, e, t), this.rootRenderTarget.width = e, this.rootRenderTarget.height = t), this.root && this.context.resize(e, t, r), this.context.clear(), this.context.popBuffer()
            }, n.prototype.resizeTo = function(e, t, r, i) {
                this.context.pushBuffer(this);
                var o = this.rootRenderTarget.width,
                    a = this.rootRenderTarget.height,
                    s = n.create(o, a);
                this.context.pushBuffer(s), this.context.drawImage(this.rootRenderTarget, 0, 0, o, a, 0, 0, o, a, o, a), this.context.popBuffer(), this.resize(e, t), this.setTransform(1, 0, 0, 1, 0, 0), this.context.drawImage(s.rootRenderTarget, 0, 0, o, a, r, i, o, a, o, a), n.release(s), this.context.popBuffer()
            }, n.prototype.setDirtyRegionPolicy = function(e) {
                this.dirtyRegionPolicy = "on" == e
            }, n.prototype.beginClip = function(e, t, r) {
                this.context.pushBuffer(this), this.root && (this._dirtyRegionPolicy ? (this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate()) : (this.rootRenderTarget.useFrameBuffer = !1, this.rootRenderTarget.activate(), n.autoClear && this.context.clear())), t = +t || 0, r = +r || 0, this.setTransform(1, 0, 0, 1, t, r);
                var i = e.length;
                if (1 == i && 0 == e[0].minX && 0 == e[0].minY && e[0].width == this.rootRenderTarget.width && e[0].height == this.rootRenderTarget.height) return this.maskPushed = !1, this.rootRenderTarget.useFrameBuffer && this.context.clear(), void this.context.popBuffer();
                for (var o = 0; i > o; o++) {
                    var a = e[o];
                    this.context.clearRect(a.minX, a.minY, a.width, a.height)
                }
                if (i > 0) {
                    if (this.$hasScissor || 1 != i) this.scissorEnabled = !1;
                    else {
                        var a = e[0];
                        e = e.slice(1);
                        var s = a.minX + t,
                            l = a.minY + r,
                            h = a.width,
                            u = a.height;
                        this.context.enableScissor(s, -l - u + this.height, h, u), this.scissorEnabled = !0
                    }
                    e.length > 0 ? (this.context.pushMask(e), this.maskPushed = !0) : this.maskPushed = !1, this.offsetX = t, this.offsetY = r
                } else this.maskPushed = !1;
                this.context.popBuffer()
            }, n.prototype.endClip = function() {
                (this.maskPushed || this.scissorEnabled) && (this.context.pushBuffer(this), this.maskPushed && (this.setTransform(1, 0, 0, 1, this.offsetX, this.offsetY), this.context.popMask()), this.scissorEnabled && this.context.disableScissor(), this.context.popBuffer())
            }, n.prototype.getPixels = function(e, t, r, i) {
                void 0 === r && (r = 1), void 0 === i && (i = 1);
                var n = new Uint8Array(4 * r * i),
                    o = this.rootRenderTarget.useFrameBuffer;
                this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.context.getPixels(e, t, r, i, n), this.rootRenderTarget.useFrameBuffer = o, this.rootRenderTarget.activate();
                for (var a = new Uint8Array(4 * r * i), s = 0; i > s; s++)
                    for (var l = 0; r > l; l++) a[4 * (r * (i - s - 1) + l)] = n[4 * (r * s + l)], a[4 * (r * (i - s - 1) + l) + 1] = n[4 * (r * s + l) + 1], a[4 * (r * (i - s - 1) + l) + 2] = n[4 * (r * s + l) + 2], a[4 * (r * (i - s - 1) + l) + 3] = n[4 * (r * s + l) + 3];
                return a
            }, n.prototype.toDataURL = function(e, t) {
                return this.context.surface.toDataURL(e, t)
            }, n.prototype.destroy = function() {
                this.context.destroy()
            }, n.prototype.onRenderFinish = function() {
                this.$drawCalls = 0, this.root && (!this._dirtyRegionPolicy && this.dirtyRegionPolicy && this.drawSurfaceToFrameBuffer(0, 0, this.rootRenderTarget.width, this.rootRenderTarget.height, 0, 0, this.rootRenderTarget.width, this.rootRenderTarget.height, !0), this._dirtyRegionPolicy && this.drawFrameBufferToSurface(0, 0, this.rootRenderTarget.width, this.rootRenderTarget.height, 0, 0, this.rootRenderTarget.width, this.rootRenderTarget.height), this._dirtyRegionPolicy = this.dirtyRegionPolicy)
            }, n.prototype.drawFrameBufferToSurface = function(e, t, r, i, n, o, a, s, l) {
                void 0 === l && (l = !1), this.rootRenderTarget.useFrameBuffer = !1, this.rootRenderTarget.activate(), this.context.disableStencilTest(), this.context.disableScissorTest(), this.setTransform(1, 0, 0, 1, 0, 0), this.globalAlpha = 1, this.context.setGlobalCompositeOperation("source-over"), l && this.context.clear(), this.context.drawImage(this.rootRenderTarget, e, t, r, i, n, o, a, s, r, i), this.context.$drawWebGL(), this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.restoreStencil(), this.restoreScissor()
            }, n.prototype.drawSurfaceToFrameBuffer = function(e, t, r, i, n, o, a, s, l) {
                void 0 === l && (l = !1), this.rootRenderTarget.useFrameBuffer = !0, this.rootRenderTarget.activate(), this.context.disableStencilTest(), this.context.disableScissorTest(), this.setTransform(1, 0, 0, 1, 0, 0), this.globalAlpha = 1, this.context.setGlobalCompositeOperation("source-over"), l && this.context.clear(), this.context.drawImage(this.context.surface, e, t, r, i, n, o, a, s, r, i), this.context.$drawWebGL(), this.rootRenderTarget.useFrameBuffer = !1, this.rootRenderTarget.activate(), this.restoreStencil(), this.restoreScissor()
            }, n.prototype.clear = function() {
                this.context.clear()
            }, n.prototype.setTransform = function(e, t, r, i, n, o) {
                var a = this.globalMatrix;
                a.a = e, a.b = t, a.c = r, a.d = i, a.tx = n, a.ty = o
            }, n.prototype.transform = function(e, t, r, i, n, o) {
                var a = this.globalMatrix,
                    s = a.a,
                    l = a.b,
                    h = a.c,
                    u = a.d;
                (1 != e || 0 != t || 0 != r || 1 != i) && (a.a = e * s + t * h, a.b = e * l + t * u, a.c = r * s + i * h, a.d = r * l + i * u), a.tx = n * s + o * h + a.tx, a.ty = n * l + o * u + a.ty
            }, n.prototype.translate = function(e, t) {
                var r = this.globalMatrix;
                r.tx += e, r.ty += t
            }, n.prototype.saveTransform = function() {
                var e = this.globalMatrix,
                    t = this.savedGlobalMatrix;
                t.a = e.a, t.b = e.b, t.c = e.c, t.d = e.d, t.tx = e.tx, t.ty = e.ty
            }, n.prototype.restoreTransform = function() {
                var e = this.globalMatrix,
                    t = this.savedGlobalMatrix;
                e.a = t.a, e.b = t.b, e.c = t.c, e.d = t.d, e.tx = t.tx, e.ty = t.ty
            }, n.create = function(e, t) {
                var r = i.pop();
                if (r) {
                    r.resize(e, t);
                    var o = r.globalMatrix;
                    o.a = 1, o.b = 0, o.c = 0, o.d = 1, o.tx = 0, o.ty = 0
                } else r = new n(e, t), r.$computeDrawCall = !1;
                return r
            }, n.release = function(e) {
                i.push(e)
            }, n
        }(e.HashObject);
        r.autoClear = !0, t.WebGLRenderBuffer = r, __reflect(r.prototype, "egret.web.WebGLRenderBuffer", ["egret.sys.RenderBuffer"]);
        var i = []
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));
var egret;
! function(e) {
    var t;
    ! function(t) {
        function r(e) {
            if (window.location) {
                var t = location.search;
                if ("" == t) return "";
                t = t.slice(1);
                for (var r = t.split("&"), i = r.length, n = 0; i > n; n++) {
                    var o = r[n],
                        a = o.split("=");
                    if (a[0] == e) return a[1]
                }
            }
            return ""
        }
        t.getOption = r, e.getOption = r
    }(t = e.web || (e.web = {}))
}(egret || (egret = {}));