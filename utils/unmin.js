/* repo: symptomchecker/hotfix-PPE-19085-symptom-checker-app-newsletter@ - Package Version: 3.4.4 - 2015-08-27 - User: Mary Brewer */ ! function() {
    window.s_not_pageview = "y", window.webmd = window.webmd || {}, window.webmd.p = window.webmd.p || {}, window.webmd.p.symptomcheckerLibs = {
        FemaleBodyParts: {},
        MaleBodyParts: {}
    }, window.webmd.p.symptomcheckerFlashImages = {};
    var sl = window.sl || function(a, b, c) {
            var d = "string" == typeof a ? a : String(a.href);
            return wmdPageLink(c), window.open(d, "", "width=1000,height=600,left=25,top=25,scrollbars=1,toolbar=1,resizable=1,status=1,menubar=1"), !1
        },
        createjs = {};
    if (define("globals", function() {}), window.HTMLCanvasElement && (this.createjs = this.createjs || {}, function() {
            var a = function() {
                throw "UID cannot be instantiated"
            };
            a._nextID = 0, a.get = function() {
                return a._nextID++
            }, createjs.UID = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                throw "Ticker cannot be instantiated."
            };
            a.useRAF = null, a._listeners = null, a._pauseable = null, a._paused = !1, a._inited = !1, a._startTime = 0, a._pausedTime = 0, a._ticks = 0, a._pausedTicks = 0, a._interval = 50, a._lastTime = 0, a._times = null, a._tickTimes = null, a._rafActive = !1, a._timeoutID = null, a.addListener = function(b, c) {
                null != b && (a._inited || a.init(), a.removeListener(b), a._pauseable[a._listeners.length] = null == c ? !0 : c, a._listeners.push(b))
            }, a.init = function() {
                a._inited = !0, a._times = [], a._tickTimes = [], a._pauseable = [], a._listeners = [], a._times.push(a._lastTime = a._startTime = a._getTime()), a.setInterval(a._interval)
            }, a.removeListener = function(b) {
                var c = a._listeners;
                c && (b = c.indexOf(b), -1 != b && (c.splice(b, 1), a._pauseable.splice(b, 1)))
            }, a.removeAllListeners = function() {
                a._listeners = [], a._pauseable = []
            }, a.setInterval = function(b) {
                a._interval = b, a._inited && a._setupTick()
            }, a.getInterval = function() {
                return a._interval
            }, a.setFPS = function(b) {
                a.setInterval(1e3 / b)
            }, a.getFPS = function() {
                return 1e3 / a._interval
            }, a.getMeasuredFPS = function(b) {
                return a._times.length < 2 ? -1 : (null == b && (b = 0 | a.getFPS()), b = Math.min(a._times.length - 1, b), 1e3 / ((a._times[0] - a._times[b]) / b))
            }, a.setPaused = function(b) {
                a._paused = b
            }, a.getPaused = function() {
                return a._paused
            }, a.getTime = function(b) {
                return a._getTime() - a._startTime - (b ? a._pausedTime : 0)
            }, a.getTicks = function(b) {
                return a._ticks - (b ? a._pausedTicks : 0)
            }, a._handleAF = function() {
                a._rafActive = !1, a._setupTick(), a._getTime() - a._lastTime >= .97 * (a._interval - 1) && a._tick()
            }, a._handleTimeout = function() {
                a.timeoutID = null, a._setupTick(), a._tick()
            }, a._setupTick = function() {
                if (!a._rafActive && null == a.timeoutID) {
                    if (a.useRAF) {
                        var b = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
                        if (b) return b(a._handleAF), void(a._rafActive = !0)
                    }
                    a.timeoutID = setTimeout(a._handleTimeout, a._interval)
                }
            }, a._tick = function() {
                var b = a._getTime();
                a._ticks++;
                var c = b - a._lastTime,
                    d = a._paused;
                d && (a._pausedTicks++, a._pausedTime += c), a._lastTime = b;
                for (var e = a._pauseable, f = a._listeners.slice(), g = f ? f.length : 0, h = 0; g > h; h++) {
                    var i = f[h];
                    null == i || d && e[h] || (i.tick ? i.tick(c, d) : i instanceof Function && i(c, d))
                }
                for (a._tickTimes.unshift(a._getTime() - b); a._tickTimes.length > 100;) a._tickTimes.pop();
                for (a._times.unshift(b); a._times.length > 100;) a._times.pop()
            };
            var b = window.performance && (performance.now || performance.mozNow || performance.msNow || performance.oNow || performance.webkitNow);
            a._getTime = function() {
                return b && b.call(performance) || (new Date).getTime()
            }, createjs.Ticker = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a, b, c, d, e, f, g, h, i) {
                    this.initialize(a, b, c, d, e, f, g, h, i)
                },
                b = a.prototype;
            b.stageX = 0, b.stageY = 0, b.rawX = 0, b.rawY = 0, b.type = null, b.nativeEvent = null, b.onMouseMove = null, b.onMouseUp = null, b.target = null, b.pointerID = 0, b.primary = !1, b.initialize = function(a, b, c, d, e, f, g, h, i) {
                this.type = a, this.stageX = b, this.stageY = c, this.target = d, this.nativeEvent = e, this.pointerID = f, this.primary = g, this.rawX = null == h ? b : h, this.rawY = null == i ? c : i
            }, b.clone = function() {
                return new a(this.type, this.stageX, this.stageY, this.target, this.nativeEvent, this.pointerID, this.primary, this.rawX, this.rawY)
            }, b.toString = function() {
                return "[MouseEvent (type=" + this.type + " stageX=" + this.stageX + " stageY=" + this.stageY + ")]"
            }, createjs.MouseEvent = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a, b, c, d, e, f) {
                    this.initialize(a, b, c, d, e, f)
                },
                b = a.prototype;
            a.identity = null, a.DEG_TO_RAD = Math.PI / 180, b.a = 1, b.b = 0, b.c = 0, b.d = 1, b.tx = 0, b.ty = 0, b.alpha = 1, b.shadow = null, b.compositeOperation = null, b.initialize = function(a, b, c, d, e, f) {
                return null != a && (this.a = a), this.b = b || 0, this.c = c || 0, null != d && (this.d = d), this.tx = e || 0, this.ty = f || 0, this
            }, b.prepend = function(a, b, c, d, e, f) {
                var g = this.tx;
                if (1 != a || 0 != b || 0 != c || 1 != d) {
                    var h = this.a,
                        i = this.c;
                    this.a = h * a + this.b * c, this.b = h * b + this.b * d, this.c = i * a + this.d * c, this.d = i * b + this.d * d
                }
                return this.tx = g * a + this.ty * c + e, this.ty = g * b + this.ty * d + f, this
            }, b.append = function(a, b, c, d, e, f) {
                var g = this.a,
                    h = this.b,
                    i = this.c,
                    j = this.d;
                return this.a = a * g + b * i, this.b = a * h + b * j, this.c = c * g + d * i, this.d = c * h + d * j, this.tx = e * g + f * i + this.tx, this.ty = e * h + f * j + this.ty, this
            }, b.prependMatrix = function(a) {
                return this.prepend(a.a, a.b, a.c, a.d, a.tx, a.ty), this.prependProperties(a.alpha, a.shadow, a.compositeOperation), this
            }, b.appendMatrix = function(a) {
                return this.append(a.a, a.b, a.c, a.d, a.tx, a.ty), this.appendProperties(a.alpha, a.shadow, a.compositeOperation), this
            }, b.prependTransform = function(b, c, d, e, f, g, h, i, j) {
                if (f % 360) var k = f * a.DEG_TO_RAD,
                    f = Math.cos(k),
                    k = Math.sin(k);
                else f = 1, k = 0;
                return (i || j) && (this.tx -= i, this.ty -= j), g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.prepend(f * d, k * d, -k * e, f * e, 0, 0), this.prepend(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c)) : this.prepend(f * d, k * d, -k * e, f * e, b, c), this
            }, b.appendTransform = function(b, c, d, e, f, g, h, i, j) {
                if (f % 360) var k = f * a.DEG_TO_RAD,
                    f = Math.cos(k),
                    k = Math.sin(k);
                else f = 1, k = 0;
                return g || h ? (g *= a.DEG_TO_RAD, h *= a.DEG_TO_RAD, this.append(Math.cos(h), Math.sin(h), -Math.sin(g), Math.cos(g), b, c), this.append(f * d, k * d, -k * e, f * e, 0, 0)) : this.append(f * d, k * d, -k * e, f * e, b, c), (i || j) && (this.tx -= i * this.a + j * this.c, this.ty -= i * this.b + j * this.d), this
            }, b.rotate = function(a) {
                var b = Math.cos(a),
                    a = Math.sin(a),
                    c = this.a,
                    d = this.c,
                    e = this.tx;
                return this.a = c * b - this.b * a, this.b = c * a + this.b * b, this.c = d * b - this.d * a, this.d = d * a + this.d * b, this.tx = e * b - this.ty * a, this.ty = e * a + this.ty * b, this
            }, b.skew = function(b, c) {
                return b *= a.DEG_TO_RAD, c *= a.DEG_TO_RAD, this.append(Math.cos(c), Math.sin(c), -Math.sin(b), Math.cos(b), 0, 0), this
            }, b.scale = function(a, b) {
                return this.a *= a, this.d *= b, this.tx *= a, this.ty *= b, this
            }, b.translate = function(a, b) {
                return this.tx += a, this.ty += b, this
            }, b.identity = function() {
                return this.alpha = this.a = this.d = 1, this.b = this.c = this.tx = this.ty = 0, this.shadow = this.compositeOperation = null, this
            }, b.invert = function() {
                var a = this.a,
                    b = this.b,
                    c = this.c,
                    d = this.d,
                    e = this.tx,
                    f = a * d - b * c;
                return this.a = d / f, this.b = -b / f, this.c = -c / f, this.d = a / f, this.tx = (c * this.ty - d * e) / f, this.ty = -(a * this.ty - b * e) / f, this
            }, b.isIdentity = function() {
                return 0 == this.tx && 0 == this.ty && 1 == this.a && 0 == this.b && 0 == this.c && 1 == this.d
            }, b.decompose = function(b) {
                null == b && (b = {}), b.x = this.tx, b.y = this.ty, b.scaleX = Math.sqrt(this.a * this.a + this.b * this.b), b.scaleY = Math.sqrt(this.c * this.c + this.d * this.d);
                var c = Math.atan2(-this.c, this.d),
                    d = Math.atan2(this.b, this.a);
                return c == d ? (b.rotation = d / a.DEG_TO_RAD, this.a < 0 && this.d >= 0 && (b.rotation += b.rotation <= 0 ? 180 : -180), b.skewX = b.skewY = 0) : (b.skewX = c / a.DEG_TO_RAD, b.skewY = d / a.DEG_TO_RAD), b
            }, b.reinitialize = function(a, b, c, d, e, f, g, h, i) {
                return this.initialize(a, b, c, d, e, f), this.alpha = g || 1, this.shadow = h, this.compositeOperation = i, this
            }, b.appendProperties = function(a, b, c) {
                return this.alpha *= a, this.shadow = b || this.shadow, this.compositeOperation = c || this.compositeOperation, this
            }, b.prependProperties = function(a, b, c) {
                return this.alpha *= a, this.shadow = this.shadow || b, this.compositeOperation = this.compositeOperation || c, this
            }, b.clone = function() {
                var b = new a(this.a, this.b, this.c, this.d, this.tx, this.ty);
                return b.shadow = this.shadow, b.alpha = this.alpha, b.compositeOperation = this.compositeOperation, b
            }, b.toString = function() {
                return "[Matrix2D (a=" + this.a + " b=" + this.b + " c=" + this.c + " d=" + this.d + " tx=" + this.tx + " ty=" + this.ty + ")]"
            }, a.identity = new a(1, 0, 0, 1, 0, 0), createjs.Matrix2D = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a, b) {
                    this.initialize(a, b)
                },
                b = a.prototype;
            b.x = 0, b.y = 0, b.initialize = function(a, b) {
                this.x = null == a ? 0 : a, this.y = null == b ? 0 : b
            }, b.clone = function() {
                return new a(this.x, this.y)
            }, b.toString = function() {
                return "[Point (x=" + this.x + " y=" + this.y + ")]"
            }, createjs.Point = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a, b, c, d) {
                    this.initialize(a, b, c, d)
                },
                b = a.prototype;
            b.x = 0, b.y = 0, b.width = 0, b.height = 0, b.initialize = function(a, b, c, d) {
                this.x = null == a ? 0 : a, this.y = null == b ? 0 : b, this.width = null == c ? 0 : c, this.height = null == d ? 0 : d
            }, b.clone = function() {
                return new a(this.x, this.y, this.width, this.height)
            }, b.toString = function() {
                return "[Rectangle (x=" + this.x + " y=" + this.y + " width=" + this.width + " height=" + this.height + ")]"
            }, createjs.Rectangle = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a, b, c, d) {
                    this.initialize(a, b, c, d)
                },
                b = a.prototype;
            a.identity = null, b.color = null, b.offsetX = 0, b.offsetY = 0, b.blur = 0, b.initialize = function(a, b, c, d) {
                this.color = a, this.offsetX = b, this.offsetY = c, this.blur = d
            }, b.toString = function() {
                return "[Shadow]"
            }, b.clone = function() {
                return new a(this.color, this.offsetX, this.offsetY, this.blur)
            }, a.identity = new a("transparent", 0, 0, 0), createjs.Shadow = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a) {
                    this.initialize(a)
                },
                b = a.prototype;
            b.complete = !0, b.onComplete = null, b._animations = null, b._frames = null, b._images = null, b._data = null, b._loadCount = 0, b._frameHeight = 0, b._frameWidth = 0, b._numFrames = 0, b._regX = 0, b._regY = 0, b.initialize = function(a) {
                var b, c, d;
                if (null != a) {
                    if (a.images && (c = a.images.length) > 0)
                        for (d = this._images = [], b = 0; c > b; b++) {
                            var e = a.images[b];
                            if ("string" == typeof e) {
                                var f = e,
                                    e = new Image;
                                e.src = f
                            }
                            d.push(e), e.getContext || e.complete || (this._loadCount++, this.complete = !1, function(a) {
                                e.onload = function() {
                                    a._handleImageLoad()
                                }
                            }(this))
                        }
                    if (null != a.frames)
                        if (a.frames instanceof Array)
                            for (this._frames = [], d = a.frames, b = 0, c = d.length; c > b; b++) f = d[b], this._frames.push({
                                image: this._images[f[4] ? f[4] : 0],
                                rect: new createjs.Rectangle(f[0], f[1], f[2], f[3]),
                                regX: f[5] || 0,
                                regY: f[6] || 0
                            });
                        else c = a.frames, this._frameWidth = c.width, this._frameHeight = c.height, this._regX = c.regX || 0, this._regY = c.regY || 0, this._numFrames = c.count, 0 == this._loadCount && this._calculateFrames();
                    if (null != (c = a.animations)) {
                        this._animations = [], this._data = {};
                        for (var g in c) {
                            if (a = {
                                    name: g
                                }, f = c[g], isNaN(f))
                                if (f instanceof Array)
                                    for (a.frequency = f[3], a.next = f[2], d = a.frames = [], b = f[0]; b <= f[1]; b++) d.push(b);
                                else a.frequency = f.frequency, a.next = f.next, b = f.frames, d = a.frames = isNaN(b) ? b.slice(0) : [b];
                            else d = a.frames = [f];
                            a.next = d.length < 2 || 0 == a.next ? null : null == a.next || 1 == a.next ? g : a.next, a.frequency || (a.frequency = 1), this._animations.push(g), this._data[g] = a
                        }
                    }
                }
            }, b.getNumFrames = function(a) {
                return null == a ? this._frames ? this._frames.length : this._numFrames : (a = this._data[a], null == a ? 0 : a.frames.length)
            }, b.getAnimations = function() {
                return this._animations.slice(0)
            }, b.getAnimation = function(a) {
                return this._data[a]
            }, b.getFrame = function(a) {
                return this.complete && this._frames && (frame = this._frames[a]) ? frame : null
            }, b.toString = function() {
                return "[SpriteSheet]"
            }, b.clone = function() {
                var b = new a;
                return b.complete = this.complete, b._animations = this._animations, b._frames = this._frames, b._images = this._images, b._data = this._data, b._frameHeight = this._frameHeight, b._frameWidth = this._frameWidth, b._numFrames = this._numFrames, b._loadCount = this._loadCount, b
            }, b._handleImageLoad = function() {
                0 == --this._loadCount && (this._calculateFrames(), this.complete = !0, this.onComplete && this.onComplete())
            }, b._calculateFrames = function() {
                if (!this._frames && 0 != this._frameWidth) {
                    this._frames = [];
                    for (var a = 0, b = this._frameWidth, c = this._frameHeight, d = 0, e = this._images; d < e.length; d++) {
                        for (var f = e[d], g = (f.width + 1) / b | 0, h = (f.height + 1) / c | 0, h = this._numFrames > 0 ? Math.min(this._numFrames - a, g * h) : g * h, i = 0; h > i; i++) this._frames.push({
                            image: f,
                            rect: new createjs.Rectangle(i % g * b, (i / g | 0) * c, b, c),
                            regX: this._regX,
                            regY: this._regY
                        });
                        a += h
                    }
                    this._numFrames = a
                }
            }, createjs.SpriteSheet = a
        }(), this.createjs = this.createjs || {}, function() {
            function a(a, b, c) {
                this.f = a, this.params = b, this.path = null == c ? !0 : c
            }
            a.prototype.exec = function(a) {
                this.f.apply(a, this.params)
            };
            var b = function() {
                    this.initialize()
                },
                c = b.prototype;
            b.getRGB = function(a, b, c, d) {
                return null != a && null == c && (d = b, c = 255 & a, b = a >> 8 & 255, a = a >> 16 & 255), null == d ? "rgb(" + a + "," + b + "," + c + ")" : "rgba(" + a + "," + b + "," + c + "," + d + ")"
            }, b.getHSL = function(a, b, c, d) {
                return null == d ? "hsl(" + a % 360 + "," + b + "%," + c + "%)" : "hsla(" + a % 360 + "," + b + "%," + c + "%," + d + ")"
            }, b.BASE_64 = {
                A: 0,
                B: 1,
                C: 2,
                D: 3,
                E: 4,
                F: 5,
                G: 6,
                H: 7,
                I: 8,
                J: 9,
                K: 10,
                L: 11,
                M: 12,
                N: 13,
                O: 14,
                P: 15,
                Q: 16,
                R: 17,
                S: 18,
                T: 19,
                U: 20,
                V: 21,
                W: 22,
                X: 23,
                Y: 24,
                Z: 25,
                a: 26,
                b: 27,
                c: 28,
                d: 29,
                e: 30,
                f: 31,
                g: 32,
                h: 33,
                i: 34,
                j: 35,
                k: 36,
                l: 37,
                m: 38,
                n: 39,
                o: 40,
                p: 41,
                q: 42,
                r: 43,
                s: 44,
                t: 45,
                u: 46,
                v: 47,
                w: 48,
                x: 49,
                y: 50,
                z: 51,
                0: 52,
                1: 53,
                2: 54,
                3: 55,
                4: 56,
                5: 57,
                6: 58,
                7: 59,
                8: 60,
                9: 61,
                "+": 62,
                "/": 63
            }, b.STROKE_CAPS_MAP = ["butt", "round", "square"], b.STROKE_JOINTS_MAP = ["miter", "round", "bevel"], b._ctx = (createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).getContext("2d"), b.beginCmd = new a(b._ctx.beginPath, [], !1), b.fillCmd = new a(b._ctx.fill, [], !1), b.strokeCmd = new a(b._ctx.stroke, [], !1), c._strokeInstructions = null, c._strokeStyleInstructions = null, c._fillInstructions = null, c._instructions = null, c._oldInstructions = null, c._activeInstructions = null, c._active = !1, c._dirty = !1, c.initialize = function() {
                this.clear(), this._ctx = b._ctx
            }, c.draw = function(a) {
                this._dirty && this._updateInstructions();
                for (var b = this._instructions, c = 0, d = b.length; d > c; c++) b[c].exec(a)
            }, c.drawAsPath = function(a) {
                this._dirty && this._updateInstructions();
                for (var b, c = this._instructions, d = 0, e = c.length; e > d; d++)((b = c[d]).path || 0 == d) && b.exec(a)
            }, c.moveTo = function(b, c) {
                return this._activeInstructions.push(new a(this._ctx.moveTo, [b, c])), this
            }, c.lineTo = function(b, c) {
                return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.lineTo, [b, c])), this
            }, c.arcTo = function(b, c, d, e, f) {
                return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.arcTo, [b, c, d, e, f])), this
            }, c.arc = function(b, c, d, e, f, g) {
                return this._dirty = this._active = !0, null == g && (g = !1), this._activeInstructions.push(new a(this._ctx.arc, [b, c, d, e, f, g])), this
            }, c.quadraticCurveTo = function(b, c, d, e) {
                return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.quadraticCurveTo, [b, c, d, e])), this
            }, c.bezierCurveTo = function(b, c, d, e, f, g) {
                return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.bezierCurveTo, [b, c, d, e, f, g])), this
            }, c.rect = function(b, c, d, e) {
                return this._dirty = this._active = !0, this._activeInstructions.push(new a(this._ctx.rect, [b, c, d, e])), this
            }, c.closePath = function() {
                return this._active && (this._dirty = !0, this._activeInstructions.push(new a(this._ctx.closePath, []))), this
            }, c.clear = function() {
                return this._instructions = [], this._oldInstructions = [], this._activeInstructions = [], this._strokeStyleInstructions = this._strokeInstructions = this._fillInstructions = null, this._active = this._dirty = !1, this
            }, c.beginFill = function(b) {
                return this._active && this._newPath(), this._fillInstructions = b ? [new a(this._setProp, ["fillStyle", b], !1)] : null, this
            }, c.beginLinearGradientFill = function(b, c, d, e, f, g) {
                for (this._active && this._newPath(), d = this._ctx.createLinearGradient(d, e, f, g), e = 0, f = b.length; f > e; e++) d.addColorStop(c[e], b[e]);
                return this._fillInstructions = [new a(this._setProp, ["fillStyle", d], !1)], this
            }, c.beginRadialGradientFill = function(b, c, d, e, f, g, h, i) {
                for (this._active && this._newPath(), d = this._ctx.createRadialGradient(d, e, f, g, h, i), e = 0, f = b.length; f > e; e++) d.addColorStop(c[e], b[e]);
                return this._fillInstructions = [new a(this._setProp, ["fillStyle", d], !1)], this
            }, c.beginBitmapFill = function(b, c) {
                this._active && this._newPath();
                var d = this._ctx.createPattern(b, c || "");
                return this._fillInstructions = [new a(this._setProp, ["fillStyle", d], !1)], this
            }, c.endFill = function() {
                return this.beginFill()
            }, c.setStrokeStyle = function(c, d, e, f) {
                return this._active && this._newPath(), this._strokeStyleInstructions = [new a(this._setProp, ["lineWidth", null == c ? "1" : c], !1), new a(this._setProp, ["lineCap", null == d ? "butt" : isNaN(d) ? d : b.STROKE_CAPS_MAP[d]], !1), new a(this._setProp, ["lineJoin", null == e ? "miter" : isNaN(e) ? e : b.STROKE_JOINTS_MAP[e]], !1), new a(this._setProp, ["miterLimit", null == f ? "10" : f], !1)], this
            }, c.beginStroke = function(b) {
                return this._active && this._newPath(), this._strokeInstructions = b ? [new a(this._setProp, ["strokeStyle", b], !1)] : null, this
            }, c.beginLinearGradientStroke = function(b, c, d, e, f, g) {
                for (this._active && this._newPath(), d = this._ctx.createLinearGradient(d, e, f, g), e = 0, f = b.length; f > e; e++) d.addColorStop(c[e], b[e]);
                return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", d], !1)], this
            }, c.beginRadialGradientStroke = function(b, c, d, e, f, g, h, i) {
                for (this._active && this._newPath(), d = this._ctx.createRadialGradient(d, e, f, g, h, i), e = 0, f = b.length; f > e; e++) d.addColorStop(c[e], b[e]);
                return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", d], !1)], this
            }, c.beginBitmapStroke = function(b, c) {
                this._active && this._newPath();
                var d = this._ctx.createPattern(b, c || "");
                return this._strokeInstructions = [new a(this._setProp, ["strokeStyle", d], !1)], this
            }, c.endStroke = function() {
                return this.beginStroke(), this
            }, c.curveTo = c.quadraticCurveTo, c.drawRect = c.rect, c.drawRoundRect = function(a, b, c, d, e) {
                return this.drawRoundRectComplex(a, b, c, d, e, e, e, e), this
            }, c.drawRoundRectComplex = function(b, c, d, e, f, g, h, i) {
                var j = (e > d ? d : e) / 2,
                    k = 0,
                    l = 0,
                    m = 0,
                    n = 0;
                0 > f && (f *= k = -1), f > j && (f = j), 0 > g && (g *= l = -1), g > j && (g = j), 0 > h && (h *= m = -1), h > j && (h = j), 0 > i && (i *= n = -1), i > j && (i = j), this._dirty = this._active = !0;
                var j = this._ctx.arcTo,
                    o = this._ctx.lineTo;
                return this._activeInstructions.push(new a(this._ctx.moveTo, [b + d - g, c]), new a(j, [b + d + g * l, c - g * l, b + d, c + g, g]), new a(o, [b + d, c + e - h]), new a(j, [b + d + h * m, c + e + h * m, b + d - h, c + e, h]), new a(o, [b + i, c + e]), new a(j, [b - i * n, c + e + i * n, b, c + e - i, i]), new a(o, [b, c + f]), new a(j, [b - f * k, c - f * k, b + f, c, f]), new a(this._ctx.closePath)), this
            }, c.drawCircle = function(a, b, c) {
                return this.arc(a, b, c, 0, 2 * Math.PI), this
            }, c.drawEllipse = function(b, c, d, e) {
                this._dirty = this._active = !0;
                var f = d / 2 * .5522848,
                    g = e / 2 * .5522848,
                    h = b + d,
                    i = c + e,
                    d = b + d / 2,
                    e = c + e / 2;
                return this._activeInstructions.push(new a(this._ctx.moveTo, [b, e]), new a(this._ctx.bezierCurveTo, [b, e - g, d - f, c, d, c]), new a(this._ctx.bezierCurveTo, [d + f, c, h, e - g, h, e]), new a(this._ctx.bezierCurveTo, [h, e + g, d + f, i, d, i]), new a(this._ctx.bezierCurveTo, [d - f, i, b, e + g, b, e])), this
            }, c.drawPolyStar = function(b, c, d, e, f, g) {
                this._dirty = this._active = !0, null == f && (f = 0), f = 1 - f, null == g ? g = 0 : g /= 180 / Math.PI;
                var h = Math.PI / e;
                this._activeInstructions.push(new a(this._ctx.moveTo, [b + Math.cos(g) * d, c + Math.sin(g) * d]));
                for (var i = 0; e > i; i++) g += h, 1 != f && this._activeInstructions.push(new a(this._ctx.lineTo, [b + Math.cos(g) * d * f, c + Math.sin(g) * d * f])), g += h, this._activeInstructions.push(new a(this._ctx.lineTo, [b + Math.cos(g) * d, c + Math.sin(g) * d]));
                return this
            }, c.decodePath = function(a) {
                for (var c = [this.moveTo, this.lineTo, this.quadraticCurveTo, this.bezierCurveTo], d = [2, 2, 4, 6], e = 0, f = a.length, g = [], h = 0, i = 0, j = b.BASE_64; f > e;) {
                    var k = a.charAt(e),
                        l = j[k],
                        m = l >> 3,
                        n = c[m];
                    if (!n || 3 & l) throw "bad path data (@" + e + "): " + k;
                    for (k = d[m], m || (h = i = 0), g.length = 0, e++, l = (l >> 2 & 1) + 2, m = 0; k > m; m++) {
                        var o = j[a.charAt(e)],
                            p = o >> 5 ? -1 : 1,
                            o = (31 & o) << 6 | j[a.charAt(e + 1)];
                        3 == l && (o = o << 6 | j[a.charAt(e + 2)]), o = p * o / 10, m % 2 ? h = o += h : i = o += i, g[m] = o, e += l
                    }
                    n.apply(this, g)
                }
                return this
            }, c.clone = function() {
                var a = new b;
                return a._instructions = this._instructions.slice(), a._activeInstructions = this._activeInstructions.slice(), a._oldInstructions = this._oldInstructions.slice(), this._fillInstructions && (a._fillInstructions = this._fillInstructions.slice()), this._strokeInstructions && (a._strokeInstructions = this._strokeInstructions.slice()), this._strokeStyleInstructions && (a._strokeStyleInstructions = this._strokeStyleInstructions.slice()), a._active = this._active, a._dirty = this._dirty, a.drawAsPath = this.drawAsPath, a
            }, c.toString = function() {
                return "[Graphics]"
            }, c.mt = c.moveTo, c.lt = c.lineTo, c.at = c.arcTo, c.bt = c.bezierCurveTo, c.qt = c.quadraticCurveTo, c.a = c.arc, c.r = c.rect, c.cp = c.closePath, c.c = c.clear, c.f = c.beginFill, c.lf = c.beginLinearGradientFill, c.rf = c.beginRadialGradientFill, c.bf = c.beginBitmapFill, c.ef = c.endFill, c.ss = c.setStrokeStyle, c.s = c.beginStroke, c.ls = c.beginLinearGradientStroke, c.rs = c.beginRadialGradientStroke, c.bs = c.beginBitmapStroke, c.es = c.endStroke, c.dr = c.drawRect, c.rr = c.drawRoundRect, c.rc = c.drawRoundRectComplex, c.dc = c.drawCircle, c.de = c.drawEllipse, c.dp = c.drawPolyStar, c.p = c.decodePath, c._updateInstructions = function() {
                this._instructions = this._oldInstructions.slice(), this._instructions.push(b.beginCmd), this._fillInstructions && this._instructions.push.apply(this._instructions, this._fillInstructions), this._strokeInstructions && (this._instructions.push.apply(this._instructions, this._strokeInstructions), this._strokeStyleInstructions && this._instructions.push.apply(this._instructions, this._strokeStyleInstructions)), this._instructions.push.apply(this._instructions, this._activeInstructions), this._fillInstructions && this._instructions.push(b.fillCmd), this._strokeInstructions && this._instructions.push(b.strokeCmd)
            }, c._getEllipseArc = function(b, c, d, e) {
                var f = d / 2 * .5522848,
                    g = e / 2 * .5522848,
                    h = b + d,
                    i = c + e,
                    d = b + d / 2,
                    e = c + e / 2;
                return this._activeInstructions.push(new a(this._ctx.moveTo, [b, e]), new a(this._ctx.bezierCurveTo, [b, e - g, d - f, c, d, c]), new a(this._ctx.bezierCurveTo, [d + f, c, h, e - g, h, e]), new a(this._ctx.bezierCurveTo, [h, e + g, d + f, i, d, i]), new a(this._ctx.bezierCurveTo, [d - f, i, b, e + g, b, e])), this
            }, c._newPath = function() {
                this._dirty && this._updateInstructions(), this._oldInstructions = this._instructions, this._activeInstructions = [], this._active = this._dirty = !1
            }, c._setProp = function(a, b) {
                this[a] = b
            }, createjs.Graphics = b
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                    this.initialize()
                },
                b = a.prototype;
            a.suppressCrossDomainErrors = !1, a._hitTestCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), a._hitTestCanvas.width = a._hitTestCanvas.height = 1, a._hitTestContext = a._hitTestCanvas.getContext("2d"), a._nextCacheID = 1, b.alpha = 1, b.cacheCanvas = null, b.id = -1, b.mouseEnabled = !0, b.name = null, b.parent = null, b.regX = 0, b.regY = 0, b.rotation = 0, b.scaleX = 1, b.scaleY = 1, b.skewX = 0, b.skewY = 0, b.shadow = null, b.visible = !0, b.x = 0, b.y = 0, b.compositeOperation = null, b.snapToPixel = !1, b.onPress = null, b.onClick = null, b.onDoubleClick = null, b.onMouseOver = null, b.onMouseOut = null, b.onTick = null, b.filters = null, b.cacheID = 0, b.mask = null, b.hitArea = null, b._cacheOffsetX = 0, b._cacheOffsetY = 0, b._cacheScale = 1, b._cacheDataURLID = 0, b._cacheDataURL = null, b._matrix = null, b.initialize = function() {
                this.id = createjs.UID.get(), this._matrix = new createjs.Matrix2D
            }, b.isVisible = function() {
                return this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY
            }, b.draw = function(a, b) {
                var c = this.cacheCanvas;
                if (b || !c) return !1;
                var d = this._cacheScale;
                return a.drawImage(c, this._cacheOffsetX, this._cacheOffsetY, c.width / d, c.height / d), !0
            }, b.updateContext = function(a) {
                var b, c = this.mask;
                c && c.graphics && (b = c.getMatrix(c._matrix), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty), c.graphics.drawAsPath(a), a.clip(), b.invert(), a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty)), b = this._matrix.identity().appendTransform(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY), createjs.Stage._snapToPixelEnabled && this.snapToPixel ? a.transform(b.a, b.b, b.c, b.d, b.tx + .5 | 0, b.ty + .5 | 0) : a.transform(b.a, b.b, b.c, b.d, b.tx, b.ty), a.globalAlpha *= this.alpha, this.compositeOperation && (a.globalCompositeOperation = this.compositeOperation), this.shadow && this._applyShadow(a, this.shadow)
            }, b.cache = function(a, b, c, d, e) {
                e = e || 1, this.cacheCanvas || (this.cacheCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), this.cacheCanvas.width = Math.ceil(c * e), this.cacheCanvas.height = Math.ceil(d * e), this._cacheOffsetX = a, this._cacheOffsetY = b, this._cacheScale = e || 1, this.updateCache()
            }, b.updateCache = function(b) {
                var c = this.cacheCanvas,
                    d = this._cacheOffsetX,
                    e = this._cacheOffsetY,
                    f = this._cacheScale;
                if (!c) throw "cache() must be called before updateCache()";
                var g = c.getContext("2d");
                g.save(), b || g.clearRect(0, 0, c.width, c.height), g.globalCompositeOperation = b, g.setTransform(f, 0, 0, f, -d, -e), this.draw(g, !0), this._applyFilters(), g.restore(), this.cacheID = a._nextCacheID++
            }, b.uncache = function() {
                this._cacheDataURL = this.cacheCanvas = null, this.cacheID = this._cacheOffsetX = this._cacheOffsetY = 0, this._cacheScale = 1
            }, b.getCacheDataURL = function() {
                return this.cacheCanvas ? (this.cacheID != this._cacheDataURLID && (this._cacheDataURL = this.cacheCanvas.toDataURL()), this._cacheDataURL) : null
            }, b.getStage = function() {
                for (var a = this; a.parent;) a = a.parent;
                return a instanceof createjs.Stage ? a : null
            }, b.localToGlobal = function(a, b) {
                var c = this.getConcatenatedMatrix(this._matrix);
                return null == c ? null : (c.append(1, 0, 0, 1, a, b), new createjs.Point(c.tx, c.ty))
            }, b.globalToLocal = function(a, b) {
                var c = this.getConcatenatedMatrix(this._matrix);
                return null == c ? null : (c.invert(), c.append(1, 0, 0, 1, a, b), new createjs.Point(c.tx, c.ty))
            }, b.localToLocal = function(a, b, c) {
                return a = this.localToGlobal(a, b), c.globalToLocal(a.x, a.y)
            }, b.setTransform = function(a, b, c, d, e, f, g, h, i) {
                return this.x = a || 0, this.y = b || 0, this.scaleX = null == c ? 1 : c, this.scaleY = null == d ? 1 : d, this.rotation = e || 0, this.skewX = f || 0, this.skewY = g || 0, this.regX = h || 0, this.regY = i || 0, this
            }, b.getMatrix = function(a) {
                return (a ? a.identity() : new createjs.Matrix2D).appendTransform(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY, this.regX, this.regY).appendProperties(this.alpha, this.shadow, this.compositeOperation)
            }, b.getConcatenatedMatrix = function(a) {
                a ? a.identity() : a = new createjs.Matrix2D;
                for (var b = this; null != b;) a.prependTransform(b.x, b.y, b.scaleX, b.scaleY, b.rotation, b.skewX, b.skewY, b.regX, b.regY).prependProperties(b.alpha, b.shadow, b.compositeOperation), b = b.parent;
                return a
            }, b.hitTest = function(b, c) {
                var d = a._hitTestContext,
                    e = a._hitTestCanvas;
                return d.setTransform(1, 0, 0, 1, -b, -c), this.draw(d), d = this._testHit(d), e.width = 0, e.width = 1, d
            }, b.clone = function() {
                var b = new a;
                return this.cloneProps(b), b
            }, b.toString = function() {
                return "[DisplayObject (name=" + this.name + ")]"
            }, b.cloneProps = function(a) {
                a.alpha = this.alpha, a.name = this.name, a.regX = this.regX, a.regY = this.regY, a.rotation = this.rotation, a.scaleX = this.scaleX, a.scaleY = this.scaleY, a.shadow = this.shadow, a.skewX = this.skewX, a.skewY = this.skewY, a.visible = this.visible, a.x = this.x, a.y = this.y, a.mouseEnabled = this.mouseEnabled, a.compositeOperation = this.compositeOperation, this.cacheCanvas && (a.cacheCanvas = this.cacheCanvas.cloneNode(!0), a.cacheCanvas.getContext("2d").putImageData(this.cacheCanvas.getContext("2d").getImageData(0, 0, this.cacheCanvas.width, this.cacheCanvas.height), 0, 0))
            }, b._applyShadow = function(a, b) {
                b = b || Shadow.identity, a.shadowColor = b.color, a.shadowOffsetX = b.offsetX, a.shadowOffsetY = b.offsetY, a.shadowBlur = b.blur
            }, b._tick = function(a) {
                this.onTick && (a ? this.onTick.apply(this, a) : this.onTick())
            }, b._testHit = function(b) {
                try {
                    var c = b.getImageData(0, 0, 1, 1).data[3] > 1
                } catch (d) {
                    if (!a.suppressCrossDomainErrors) throw "An error has occurred. This is most likely due to security restrictions on reading canvas pixel data with local or cross-domain images."
                }
                return c
            }, b._applyFilters = function() {
                if (this.filters && 0 != this.filters.length && this.cacheCanvas)
                    for (var a = this.filters.length, b = this.cacheCanvas.getContext("2d"), c = this.cacheCanvas.width, d = this.cacheCanvas.height, e = 0; a > e; e++) this.filters[e].applyFilter(b, 0, 0, c, d)
            }, createjs.DisplayObject = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                    this.initialize()
                },
                b = a.prototype = new createjs.DisplayObject;
            b.children = null, b.DisplayObject_initialize = b.initialize, b.initialize = function() {
                this.DisplayObject_initialize(), this.children = []
            }, b.isVisible = function() {
                return this.visible && this.alpha > 0 && this.children.length && 0 != this.scaleX && 0 != this.scaleY
            }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
                if (this.DisplayObject_draw(a, b)) return !0;
                for (var c = this.children.slice(0), d = 0, e = c.length; e > d; d++) {
                    var f = c[d];
                    f.isVisible() && (a.save(), f.updateContext(a), f.draw(a), a.restore())
                }
                return !0
            }, b.addChild = function(a) {
                if (null == a) return a;
                var b = arguments.length;
                if (b > 1) {
                    for (var c = 0; b > c; c++) this.addChild(arguments[c]);
                    return arguments[b - 1]
                }
                return a.parent && a.parent.removeChild(a), a.parent = this, this.children.push(a), a
            }, b.addChildAt = function(a, b) {
                var c = arguments.length,
                    d = arguments[c - 1];
                if (0 > d || d > this.children.length) return arguments[c - 2];
                if (c > 2) {
                    for (var e = 0; c - 1 > e; e++) this.addChildAt(arguments[e], d + e);
                    return arguments[c - 2]
                }
                return a.parent && a.parent.removeChild(a), a.parent = this, this.children.splice(b, 0, a), a
            }, b.removeChild = function(a) {
                var b = arguments.length;
                if (b > 1) {
                    for (var c = !0, d = 0; b > d; d++) c = c && this.removeChild(arguments[d]);
                    return c
                }
                return this.removeChildAt(this.children.indexOf(a))
            }, b.removeChildAt = function(a) {
                var b = arguments.length;
                if (b > 1) {
                    for (var c = [], d = 0; b > d; d++) c[d] = arguments[d];
                    c.sort(function(a, b) {
                        return b - a
                    });
                    for (var e = !0, d = 0; b > d; d++) e = e && this.removeChildAt(c[d]);
                    return e
                }
                return 0 > a || a > this.children.length - 1 ? !1 : ((b = this.children[a]) && (b.parent = null), this.children.splice(a, 1), !0)
            }, b.removeAllChildren = function() {
                for (var a = this.children; a.length;) a.pop().parent = null
            }, b.getChildAt = function(a) {
                return this.children[a]
            }, b.sortChildren = function(a) {
                this.children.sort(a)
            }, b.getChildIndex = function(a) {
                return this.children.indexOf(a)
            }, b.getNumChildren = function() {
                return this.children.length
            }, b.swapChildrenAt = function(a, b) {
                var c = this.children,
                    d = c[a],
                    e = c[b];
                d && e && (c[a] = e, c[b] = d)
            }, b.swapChildren = function(a, b) {
                for (var c, d, e = this.children, f = 0, g = e.length; g > f && (e[f] == a && (c = f), e[f] == b && (d = f), null == c || null == d); f++);
                f != g && (e[c] = b, e[d] = a)
            }, b.setChildIndex = function(a, b) {
                var c = this.children,
                    d = c.length;
                if (!(a.parent != this || 0 > b || b >= d)) {
                    for (var e = 0; d > e && c[e] != a; e++);
                    e == d || e == b || (c.splice(e, 1), e > b && b--, c.splice(b, 0, a))
                }
            }, b.contains = function(a) {
                for (; a;) {
                    if (a == this) return !0;
                    a = a.parent
                }
                return !1
            }, b.hitTest = function(a, b) {
                return null != this.getObjectUnderPoint(a, b)
            }, b.getObjectsUnderPoint = function(a, b) {
                var c = [],
                    d = this.localToGlobal(a, b);
                return this._getObjectsUnderPoint(d.x, d.y, c), c
            }, b.getObjectUnderPoint = function(a, b) {
                var c = this.localToGlobal(a, b);
                return this._getObjectsUnderPoint(c.x, c.y)
            }, b.clone = function(b) {
                var c = new a;
                if (this.cloneProps(c), b)
                    for (var d = c.children = [], e = 0, f = this.children.length; f > e; e++) {
                        var g = this.children[e].clone(b);
                        g.parent = c, d.push(g)
                    }
                return c
            }, b.toString = function() {
                return "[Container (name=" + this.name + ")]"
            }, b.DisplayObject__tick = b._tick, b._tick = function(a) {
                for (var b = this.children.length - 1; b >= 0; b--) {
                    var c = this.children[b];
                    c._tick && c._tick(a)
                }
                this.DisplayObject__tick(a)
            }, b._getObjectsUnderPoint = function(b, c, d, e) {
                var f = createjs.DisplayObject._hitTestContext,
                    g = createjs.DisplayObject._hitTestCanvas,
                    h = this._matrix,
                    i = 1 & e && (this.onPress || this.onClick || this.onDoubleClick) || 2 & e && (this.onMouseOver || this.onMouseOut);
                if (this.cacheCanvas && i && (this.getConcatenatedMatrix(h), f.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c), f.globalAlpha = h.alpha, this.draw(f), this._testHit(f))) return g.width = 0, g.width = 1, this;
                for (var j = this.children.length - 1; j >= 0; j--) {
                    var k = this.children[j];
                    if (k.isVisible() && k.mouseEnabled)
                        if (k instanceof a) {
                            if (i) {
                                if (k = k._getObjectsUnderPoint(b, c)) return this
                            } else if (k = k._getObjectsUnderPoint(b, c, d, e), !d && k) return k
                        } else if (!e || i || 1 & e && (k.onPress || k.onClick || k.onDoubleClick) || 2 & e && (k.onMouseOver || k.onMouseOut)) {
                        var l = k.hitArea;
                        if (k.getConcatenatedMatrix(h), l && (h.appendTransform(l.x + k.regX, l.y + k.regY, l.scaleX, l.scaleY, l.rotation, l.skewX, l.skewY, l.regX, l.regY), h.alpha *= l.alpha / k.alpha), f.globalAlpha = h.alpha, f.setTransform(h.a, h.b, h.c, h.d, h.tx - b, h.ty - c), (l || k).draw(f), this._testHit(f)) {
                            if (g.width = 0, g.width = 1, i) return this;
                            if (!d) return k;
                            d.push(k)
                        }
                    }
                }
                return null
            }, createjs.Container = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a) {
                    this.initialize(a)
                },
                b = a.prototype = new createjs.Container;
            a._snapToPixelEnabled = !1, b.autoClear = !0, b.canvas = null, b.mouseX = 0, b.mouseY = 0, b.onMouseMove = null, b.onMouseUp = null, b.onMouseDown = null, b.snapToPixelEnabled = !1, b.mouseInBounds = !1, b.tickOnUpdate = !0, b.mouseMoveOutside = !1, b._pointerData = null, b._pointerCount = 0, b._primaryPointerID = null, b._mouseOverIntervalID = null, b.Container_initialize = b.initialize, b.initialize = function(a) {
                this.Container_initialize(), this.canvas = a instanceof HTMLCanvasElement ? a : document.getElementById(a), this._pointerData = {}, this._enableMouseEvents(!0)
            }, b.update = function() {
                if (this.canvas) {
                    this.autoClear && this.clear(), a._snapToPixelEnabled = this.snapToPixelEnabled, this.tickOnUpdate && this._tick(arguments.length ? arguments : null);
                    var b = this.canvas.getContext("2d");

                    b.save(), this.updateContext(b), this.draw(b, !1), b.restore()
                }
            }, b.tick = b.update, b.clear = function() {
                if (this.canvas) {
                    var a = this.canvas.getContext("2d");
                    a.setTransform(1, 0, 0, 1, 0, 0), a.clearRect(0, 0, this.canvas.width, this.canvas.height)
                }
            }, b.toDataURL = function(a, b) {
                b || (b = "image/png");
                var c, d = this.canvas.getContext("2d"),
                    e = this.canvas.width,
                    f = this.canvas.height;
                if (a) {
                    c = d.getImageData(0, 0, e, f);
                    var g = d.globalCompositeOperation;
                    d.globalCompositeOperation = "destination-over", d.fillStyle = a, d.fillRect(0, 0, e, f)
                }
                var h = this.canvas.toDataURL(b);
                return a && (d.clearRect(0, 0, e, f), d.putImageData(c, 0, 0), d.globalCompositeOperation = g), h
            }, b.enableMouseOver = function(a) {
                if (this._mouseOverIntervalID && (clearInterval(this._mouseOverIntervalID), this._mouseOverIntervalID = null), null == a) a = 20;
                else if (0 >= a) return;
                var b = this;
                this._mouseOverIntervalID = setInterval(function() {
                    b._testMouseOver()
                }, 1e3 / Math.min(50, a))
            }, b.clone = function() {
                var b = new a(null);
                return this.cloneProps(b), b
            }, b.toString = function() {
                return "[Stage (name=" + this.name + ")]"
            }, b._enableMouseEvents = function() {
                var a = this,
                    b = window.addEventListener ? window : document;
                b.addEventListener("mouseup", function(b) {
                    a._handleMouseUp(b)
                }, !1), b.addEventListener("mousemove", function(b) {
                    a._handleMouseMove(b)
                }, !1), b.addEventListener("dblclick", function(b) {
                    a._handleDoubleClick(b)
                }, !1), this.canvas && this.canvas.addEventListener("mousedown", function(b) {
                    a._handleMouseDown(b)
                }, !1)
            }, b._getPointerData = function(a) {
                var b = this._pointerData[a];
                return b || (b = this._pointerData[a] = {
                    x: 0,
                    y: 0
                }, null != this._primaryPointerID) || (this._primaryPointerID = a), b
            }, b._handleMouseMove = function(a) {
                a || (a = window.event), this._handlePointerMove(-1, a, a.pageX, a.pageY)
            }, b._handlePointerMove = function(a, b, c, d) {
                if (this.canvas) {
                    var e = this._getPointerData(a),
                        f = e.inBounds;
                    this._updatePointerPosition(a, c, d), (f || e.inBounds || this.mouseMoveOutside) && (a = new createjs.MouseEvent("onMouseMove", e.x, e.y, this, b, a, a == this._primaryPointerID, e.rawX, e.rawY), this.onMouseMove && this.onMouseMove(a), e.event && e.event.onMouseMove && (a = a.clone(), a.target = e.event.target, e.event.onMouseMove(a)))
                }
            }, b._updatePointerPosition = function(a, b, c) {
                var d = this._getElementRect(this.canvas);
                b -= d.left, c -= d.top;
                var e = this.canvas.width,
                    f = this.canvas.height;
                b /= (d.right - d.left) / e, c /= (d.bottom - d.top) / f, d = this._getPointerData(a), (d.inBounds = b >= 0 && c >= 0 && e - 1 >= b && f - 1 >= c) ? (d.x = b, d.y = c) : this.mouseMoveOutside && (d.x = 0 > b ? 0 : b > e - 1 ? e - 1 : b, d.y = 0 > c ? 0 : c > f - 1 ? f - 1 : c), d.rawX = b, d.rawY = c, a == this._primaryPointerID && (this.mouseX = d.x, this.mouseY = d.y, this.mouseInBounds = d.inBounds)
            }, b._getElementRect = function(a) {
                var b = a.getBoundingClientRect(),
                    c = (window.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || document.body.clientLeft || 0),
                    d = (window.pageYOffset || document.scrollTop || 0) - (document.clientTop || document.body.clientTop || 0),
                    e = window.getComputedStyle ? getComputedStyle(a) : a.currentStyle,
                    a = parseInt(e.paddingLeft) + parseInt(e.borderLeftWidth),
                    f = parseInt(e.paddingTop) + parseInt(e.borderTopWidth),
                    g = parseInt(e.paddingRight) + parseInt(e.borderRightWidth),
                    e = parseInt(e.paddingBottom) + parseInt(e.borderBottomWidth);
                return {
                    left: b.left + c + a,
                    right: b.right + c - g,
                    top: b.top + d + f,
                    bottom: b.bottom + d - e
                }
            }, b._handleMouseUp = function(a) {
                this._handlePointerUp(-1, a, !1)
            }, b._handlePointerUp = function(a, b, c) {
                var d = this._getPointerData(a),
                    e = new createjs.MouseEvent("onMouseUp", d.x, d.y, this, b, a, a == this._primaryPointerID, d.rawX, d.rawY);
                this.onMouseUp && this.onMouseUp(e), d.event && d.event.onMouseUp && (e = e.clone(), e.target = d.event.target, d.event.onMouseUp(e)), d.target && d.target.onClick && this._getObjectsUnderPoint(d.x, d.y, null, !0, this._mouseOverIntervalID ? 3 : 1) == d.target && d.target.onClick(new createjs.MouseEvent("onClick", d.x, d.y, d.target, b, a, a == this._primaryPointerID, d.rawX, d.rawY)), c ? (a == this._primaryPointerID && (this._primaryPointerID = null), delete this._pointerData[a]) : d.event = d.target = null
            }, b._handleMouseDown = function(a) {
                this._handlePointerDown(-1, a, !1)
            }, b._handlePointerDown = function(a, b, c, d) {
                var e = this._getPointerData(a);
                null != d && this._updatePointerPosition(a, c, d), this.onMouseDown && this.onMouseDown(new createjs.MouseEvent("onMouseDown", e.x, e.y, this, b, a, a == this._primaryPointerID, e.rawX, e.rawY)), (c = this._getObjectsUnderPoint(e.x, e.y, null, this._mouseOverIntervalID ? 3 : 1)) && (c.onPress && (a = new createjs.MouseEvent("onPress", e.x, e.y, c, b, a, a == this._primaryPointerID, e.rawX, e.rawY), c.onPress(a), a.onMouseMove || a.onMouseUp) && (e.event = a), e.target = c)
            }, b._testMouseOver = function() {
                if (-1 == this._primaryPointerID && (this.mouseX != this._mouseOverX || this.mouseY != this._mouseOverY || !this.mouseInBounds)) {
                    var a = null;
                    this.mouseInBounds && (a = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, 3), this._mouseOverX = this.mouseX, this._mouseOverY = this.mouseY), this._mouseOverTarget != a && (this._mouseOverTarget && this._mouseOverTarget.onMouseOut && this._mouseOverTarget.onMouseOut(new createjs.MouseEvent("onMouseOut", this.mouseX, this.mouseY, this._mouseOverTarget)), a && a.onMouseOver && a.onMouseOver(new createjs.MouseEvent("onMouseOver", this.mouseX, this.mouseY, a)), this._mouseOverTarget = a)
                }
            }, b._handleDoubleClick = function(a) {
                this.onDoubleClick && this.onDoubleClick(new createjs.MouseEvent("onDoubleClick", this.mouseX, this.mouseY, this, a, -1, !0));
                var b = this._getObjectsUnderPoint(this.mouseX, this.mouseY, null, this._mouseOverIntervalID ? 3 : 1);
                b && b.onDoubleClick && b.onDoubleClick(new createjs.MouseEvent("onDoubleClick", this.mouseX, this.mouseY, b, a, -1, !0))
            }, createjs.Stage = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a) {
                    this.initialize(a)
                },
                b = a.prototype = new createjs.DisplayObject;
            b.image = null, b.snapToPixel = !0, b.sourceRect = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
                this.DisplayObject_initialize(), "string" == typeof a ? (this.image = new Image, this.image.src = a) : this.image = a
            }, b.isVisible = function() {
                return this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && this.image && (this.image.complete || this.image.getContext || this.image.readyState >= 2)
            }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
                if (this.DisplayObject_draw(a, b)) return !0;
                var c = this.sourceRect;
                return c ? a.drawImage(this.image, c.x, c.y, c.width, c.height, 0, 0, c.width, c.height) : a.drawImage(this.image, 0, 0), !0
            }, b.clone = function() {
                var b = new a(this.image);
                return this.cloneProps(b), b
            }, b.toString = function() {
                return "[Bitmap (name=" + this.name + ")]"
            }, createjs.Bitmap = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a) {
                    this.initialize(a)
                },
                b = a.prototype = new createjs.DisplayObject;
            b.onAnimationEnd = null, b.currentFrame = -1, b.currentAnimation = null, b.paused = !0, b.spriteSheet = null, b.snapToPixel = !0, b.offset = 0, b.currentAnimationFrame = 0, b._advanceCount = 0, b._animation = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
                this.DisplayObject_initialize(), this.spriteSheet = a
            }, b.isVisible = function() {
                return this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && this.spriteSheet.complete && this.currentFrame >= 0
            }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
                if (this.DisplayObject_draw(a, b)) return !0;
                this._normalizeFrame();
                var c = this.spriteSheet.getFrame(this.currentFrame);
                if (null != c) {
                    var d = c.rect;
                    return a.drawImage(c.image, d.x, d.y, d.width, d.height, -c.regX, -c.regY, d.width, d.height), !0
                }
            }, b.play = function() {
                this.paused = !1
            }, b.stop = function() {
                this.paused = !0
            }, b.gotoAndPlay = function(a) {
                this.paused = !1, this._goto(a)
            }, b.gotoAndStop = function(a) {
                this.paused = !0, this._goto(a)
            }, b.advance = function() {
                this._animation ? this.currentAnimationFrame++ : this.currentFrame++, this._normalizeFrame()
            }, b.clone = function() {
                var b = new a(this.spriteSheet);
                return this.cloneProps(b), b
            }, b.toString = function() {
                return "[BitmapAnimation (name=" + this.name + ")]"
            }, b.DisplayObject__tick = b._tick, b._tick = function(a) {
                var b = this._animation ? this._animation.frequency : 1;
                !this.paused && (++this._advanceCount + this.offset) % b == 0 && this.advance(), this.DisplayObject__tick(a)
            }, b._normalizeFrame = function() {
                var a = this._animation;
                a ? this.currentAnimationFrame >= a.frames.length ? (a.next ? this._goto(a.next) : (this.paused = !0, this.currentAnimationFrame = a.frames.length - 1, this.currentFrame = a.frames[this.currentAnimationFrame]), this.onAnimationEnd && this.onAnimationEnd(this, a.name)) : this.currentFrame = a.frames[this.currentAnimationFrame] : this.currentFrame >= this.spriteSheet.getNumFrames() && (this.currentFrame = 0, this.onAnimationEnd) && this.onAnimationEnd(this, null)
            }, b.DisplayObject_cloneProps = b.cloneProps, b.cloneProps = function(a) {
                this.DisplayObject_cloneProps(a), a.onAnimationEnd = this.onAnimationEnd, a.currentFrame = this.currentFrame, a.currentAnimation = this.currentAnimation, a.paused = this.paused, a.offset = this.offset, a._animation = this._animation, a.currentAnimationFrame = this.currentAnimationFrame
            }, b._goto = function(a) {
                if (isNaN(a)) {
                    var b = this.spriteSheet.getAnimation(a);
                    b && (this.currentAnimationFrame = 0, this._animation = b, this.currentAnimation = a, this._normalizeFrame())
                } else this.currentAnimation = this._animation = null, this.currentFrame = a
            }, createjs.BitmapAnimation = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a) {
                    this.initialize(a)
                },
                b = a.prototype = new createjs.DisplayObject;
            b.graphics = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
                this.DisplayObject_initialize(), this.graphics = a ? a : new createjs.Graphics
            }, b.isVisible = function() {
                return Boolean(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && this.graphics)
            }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
                return this.DisplayObject_draw(a, b) ? !0 : (this.graphics.draw(a), !0)
            }, b.clone = function(b) {
                return b = new a(b && this.graphics ? this.graphics.clone() : this.graphics), this.cloneProps(b), b
            }, b.toString = function() {
                return "[Shape (name=" + this.name + ")]"
            }, createjs.Shape = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a, b, c) {
                    this.initialize(a, b, c)
                },
                b = a.prototype = new createjs.DisplayObject;
            a._workingContext = (createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")).getContext("2d"), b.text = "", b.font = null, b.color = "#000", b.textAlign = "left", b.textBaseline = "top", b.maxWidth = null, b.outline = !1, b.lineHeight = 0, b.lineWidth = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a, b, c) {
                this.DisplayObject_initialize(), this.text = a, this.font = b, this.color = c ? c : "#000"
            }, b.isVisible = function() {
                return Boolean(this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY && null != this.text && "" !== this.text)
            }, b.DisplayObject_draw = b.draw, b.draw = function(a, b) {
                return this.DisplayObject_draw(a, b) ? !0 : (this.outline ? a.strokeStyle = this.color : a.fillStyle = this.color, a.font = this.font, a.textAlign = this.textAlign || "start", a.textBaseline = this.textBaseline || "alphabetic", this._drawText(a), !0)
            }, b.getMeasuredWidth = function() {
                return this._getWorkingContext().measureText(this.text).width
            }, b.getMeasuredLineHeight = function() {
                return 1.2 * this._getWorkingContext().measureText("M").width
            }, b.getMeasuredHeight = function() {
                return this._drawText() * (this.lineHeight || this.getMeasuredLineHeight())
            }, b.clone = function() {
                var b = new a(this.text, this.font, this.color);
                return this.cloneProps(b), b
            }, b.toString = function() {
                return "[Text (text=" + (this.text.length > 20 ? this.text.substr(0, 17) + "..." : this.text) + ")]"
            }, b.DisplayObject_cloneProps = b.cloneProps, b.cloneProps = function(a) {
                this.DisplayObject_cloneProps(a), a.textAlign = this.textAlign, a.textBaseline = this.textBaseline, a.maxWidth = this.maxWidth, a.outline = this.outline, a.lineHeight = this.lineHeight, a.lineWidth = this.lineWidth
            }, b._getWorkingContext = function() {
                var b = a._workingContext;
                return b.font = this.font, b.textAlign = this.textAlign || "start", b.textBaseline = this.textBaseline || "alphabetic", b
            }, b._drawText = function(a) {
                var b = !!a;
                b || (a = this._getWorkingContext());
                for (var c = String(this.text).split(/(?:\r\n|\r|\n)/), d = this.lineHeight || this.getMeasuredLineHeight(), e = 0, f = 0, g = c.length; g > f; f++) {
                    var h = a.measureText(c[f]).width;
                    if (null == this.lineWidth || h < this.lineWidth) b && this._drawTextLine(a, c[f], e * d);
                    else {
                        for (var h = c[f].split(/(\s)/), i = h[0], j = 1, k = h.length; k > j; j += 2) a.measureText(i + h[j] + h[j + 1]).width > this.lineWidth ? (b && this._drawTextLine(a, i, e * d), e++, i = h[j + 1]) : i += h[j] + h[j + 1];
                        b && this._drawTextLine(a, i, e * d)
                    }
                    e++
                }
                return e
            }, b._drawTextLine = function(a, b, c) {
                this.outline ? a.strokeText(b, 0, c, this.maxWidth || 65535) : a.fillText(b, 0, c, this.maxWidth || 65535)
            }, createjs.Text = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                throw "SpriteSheetUtils cannot be instantiated"
            };
            a._workingCanvas = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas"), a._workingContext = a._workingCanvas.getContext("2d"), a.addFlippedFrames = function(b, c, d, e) {
                if (c || d || e) {
                    var f = 0;
                    c && a._flip(b, ++f, !0, !1), d && a._flip(b, ++f, !1, !0), e && a._flip(b, ++f, !0, !0)
                }
            }, a.extractFrame = function(b, c) {
                isNaN(c) && (c = b.getAnimation(c).frames[0]);
                var d = b.getFrame(c);
                if (!d) return null;
                var e = d.rect,
                    f = a._workingCanvas;
                return f.width = e.width, f.height = e.height, a._workingContext.drawImage(d.image, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), d = new Image, d.src = f.toDataURL("image/png"), d
            }, a.mergeAlpha = function(a, b, c) {
                c || (c = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas")), c.width = Math.max(b.width, a.width), c.height = Math.max(b.height, a.height);
                var d = c.getContext("2d");
                return d.save(), d.drawImage(a, 0, 0), d.globalCompositeOperation = "destination-in", d.drawImage(b, 0, 0), d.restore(), c
            }, a._flip = function(b, c, d, e) {
                for (var f = b._images, g = a._workingCanvas, h = a._workingContext, i = f.length / c, j = 0; i > j; j++) {
                    var k = f[j];
                    k.__tmp = j, g.width = 0, g.width = k.width, g.height = k.height, h.setTransform(d ? -1 : 1, 0, 0, e ? -1 : 1, d ? k.width : 0, e ? k.height : 0), h.drawImage(k, 0, 0);
                    var l = new Image;
                    l.src = g.toDataURL("image/png"), l.width = k.width, l.height = k.height, f.push(l)
                }
                for (h = b._frames, g = h.length / c, j = 0; g > j; j++) {
                    var k = h[j],
                        m = k.rect.clone(),
                        l = f[k.image.__tmp + i * c],
                        n = {
                            image: l,
                            rect: m,
                            regX: k.regX,
                            regY: k.regY
                        };
                    d && (m.x = l.width - m.x - m.width, n.regX = m.width - k.regX), e && (m.y = l.height - m.y - m.height, n.regY = m.height - k.regY), h.push(n)
                }
                for (d = "_" + (d ? "h" : "") + (e ? "v" : ""), e = b._animations, b = b._data, f = e.length / c, j = 0; f > j; j++) {
                    for (h = e[j], k = b[h], i = {
                            name: h + d,
                            frequency: k.frequency,
                            next: k.next,
                            frames: []
                        }, k.next && (i.next += d), h = k.frames, k = 0, l = h.length; l > k; k++) i.frames.push(h[k] + g * c);
                    b[i.name] = i, e.push(i.name)
                }
            }, createjs.SpriteSheetUtils = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                    this.initialize()
                },
                b = a.prototype;
            a.ERR_DIMENSIONS = "frame dimensions exceed max spritesheet dimensions", a.ERR_RUNNING = "a build is already running", b.maxWidth = 2048, b.maxHeight = 2048, b.spriteSheet = null, b.scale = 1, b.padding = 1, b._frames = null, b._animations = null, b._data = null, b._nextFrameIndex = 0, b._index = 0, b._callback = null, b._timeSlice = null, b._timerID = null, b._scale = 1, b.initialize = function() {
                this._frames = [], this._animations = {}
            }, b.addFrame = function(b, c, d, e, f, g) {
                if (this._data) throw a.ERR_RUNNING;
                return c = c || b.bounds || b.nominalBounds, !c && b.getBounds && (c = b.getBounds()), c ? (d = d || 1, this._frames.push({
                    source: b,
                    sourceRect: c,
                    scale: d,
                    funct: e,
                    params: f,
                    scope: g,
                    index: this._frames.length,
                    height: c.height * d
                }) - 1) : null
            }, b.addAnimation = function(b, c, d, e) {
                if (this._data) throw a.ERR_RUNNING;
                this._animations[b] = {
                    frames: c,
                    next: d,
                    frequency: e
                }
            }, b.addMovieClip = function(b, c, d) {
                if (this._data) throw a.ERR_RUNNING;
                var e = b.frameBounds,
                    f = c || b.bounds || b.nominalBounds;
                if (!f && b.getBounds && (f = b.getBounds()), !f && !e) return null;
                for (var c = b.timeline.duration, g = 0; c > g; g++) this.addFrame(b, e && e[g] ? e[g] : f, d, function(a) {
                    var b = this.actionsEnabled;
                    this.actionsEnabled = !1, this.gotoAndStop(a), this.actionsEnabled = b
                }, [g], b);
                var h, g = b.timeline._labels,
                    b = [];
                for (h in g) b.push({
                    index: g[h],
                    label: h
                });
                if (b.length)
                    for (b.sort(function(a, b) {
                            return a.index - b.index
                        }), g = 0, h = b.length; h > g; g++) {
                        for (var d = b[g].label, e = g == h - 1 ? c : b[g + 1].index, f = [], i = b[g].index; e > i; i++) f.push(i);
                        this.addAnimation(d, f, !0)
                    }
            }, b.build = function() {
                if (this._data) throw a.ERR_RUNNING;
                for (this._callback = null, this._startBuild(); this._drawNext(););
                return this._endBuild(), this.spriteSheet
            }, b.buildAsync = function(b, c) {
                if (this._data) throw a.ERR_RUNNING;
                this._callback = b, this._startBuild(), this._timeSlice = 50 * Math.max(.01, Math.min(.99, c || .3));
                var d = this;
                this._timerID = setTimeout(function() {
                    d._run()
                }, 50 - this._timeSlice)
            }, b.stopAsync = function() {
                clearTimeout(this._timerID), this._data = null
            }, b.clone = function() {
                throw "SpriteSheetBuilder cannot be cloned."
            }, b.toString = function() {
                return "[SpriteSheetBuilder]"
            }, b._startBuild = function() {
                var b = this.padding || 0;
                this.spriteSheet = null, this._index = 0, this._scale = this.scale;
                var c = [];
                this._data = {
                    images: [],
                    frames: c,
                    animations: this._animations
                };
                var d = this._frames.slice();
                if (d.sort(function(a, b) {
                        return a.height <= b.height ? -1 : 1
                    }), d[d.length - 1].height + 2 * b > this.maxHeight) throw a.ERR_DIMENSIONS;
                for (var e = 0, f = 0, g = 0; d.length;) {
                    var h = this._fillRow(d, e, g, c, b);
                    if (h.w > f && (f = h.w), e += h.h, !h.h || !d.length) {
                        var i = createjs.createCanvas ? createjs.createCanvas() : document.createElement("canvas");
                        i.width = this._getSize(f, this.maxWidth), i.height = this._getSize(e, this.maxHeight), this._data.images[g] = i, h.h || (f = e = 0, g++)
                    }
                }
            }, b._getSize = function(a, b) {
                for (var c = 4; Math.pow(2, ++c) < a;);
                return Math.min(b, Math.pow(2, c))
            }, b._fillRow = function(b, c, d, e, f) {
                var g = this.maxWidth,
                    h = this.maxHeight - c,
                    i = f;
                c += f;
                for (var j = 0, k = b.length - 1; k >= 0; k--) {
                    var l = b[k],
                        m = this._scale * l.scale,
                        n = l.sourceRect,
                        o = l.source,
                        p = Math.floor(m * n.x - f),
                        q = Math.floor(m * n.y - f),
                        r = Math.ceil(m * n.height + 2 * f),
                        n = Math.ceil(m * n.width + 2 * f);
                    if (n > g) throw a.ERR_DIMENSIONS;
                    r > h || i + n > g || (l.img = d, l.rect = new createjs.Rectangle(i, c, n, r), j = j || r, b.splice(k, 1), e[l.index] = [i, c, n, r, d, Math.round(-p + m * o.regX - f), Math.round(-q + m * o.regY - f)], i += n)
                }
                return {
                    w: i,
                    h: j
                }
            }, b._endBuild = function() {
                this.spriteSheet = new createjs.SpriteSheet(this._data), this._data = null, this._callback && this._callback(this)
            }, b._run = function() {
                for (var a = (new Date).getTime() + this._timeSlice, b = !1; a > (new Date).getTime();)
                    if (!this._drawNext()) {
                        b = !0;
                        break
                    }
                if (b) this._endBuild();
                else {
                    var c = this;
                    this._timerID = setTimeout(function() {
                        c._run()
                    }, 50 - this._timeSlice)
                }
            }, b._drawNext = function() {
                var a = this._frames[this._index],
                    b = a.scale * this._scale,
                    c = a.rect,
                    d = a.sourceRect,
                    e = this._data.images[a.img].getContext("2d");
                return a.funct && a.funct.apply(a.scope, a.params), e.save(), e.beginPath(), e.rect(c.x, c.y, c.width, c.height), e.clip(), e.translate(Math.ceil(c.x - d.x * b), Math.ceil(c.y - d.y * b)), e.scale(b, b), a.source.draw(e), e.restore(), ++this._index < this._frames.length
            }, createjs.SpriteSheetBuilder = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a) {
                    this.initialize(a)
                },
                b = a.prototype = new createjs.DisplayObject;
            b.htmlElement = null, b._style = null, b.DisplayObject_initialize = b.initialize, b.initialize = function(a) {
                "string" == typeof a && (a = document.getElementById(a)), this.DisplayObject_initialize(), this.mouseEnabled = !1, (this.htmlElement = a) && (this._style = a.style, this._style.position = "absolute", this._style.transformOrigin = this._style.WebkitTransformOrigin = this._style.msTransformOrigin = this._style.MozTransformOrigin = this._style.OTransformOrigin = "0% 0%")
            }, b.isVisible = function() {
                return null != this.htmlElement
            }, b.draw = function() {
                if (null != this.htmlElement) {
                    var a = this.getConcatenatedMatrix(this._matrix),
                        b = this.htmlElement;
                    return b.style.opacity = "" + a.alpha, b.style.visibility = this.visible ? "visible" : "hidden", b.style.transform = b.style.WebkitTransform = b.style.OTransform = b.style.msTransform = ["matrix(" + a.a, a.b, a.c, a.d, a.tx + .5 | 0, (a.ty + .5 | 0) + ")"].join(","), b.style.MozTransform = ["matrix(" + a.a, a.b, a.c, a.d, (a.tx + .5 | 0) + "px", (a.ty + .5 | 0) + "px)"].join(","), !0
                }
            }, b.cache = function() {}, b.uncache = function() {}, b.updateCache = function() {}, b.hitTest = function() {}, b.localToGlobal = function() {}, b.globalToLocal = function() {}, b.localToLocal = function() {}, b.clone = function() {
                var b = new a;
                return this.cloneProps(b), b
            }, b.toString = function() {
                return "[DOMElement (name=" + this.name + ")]"
            }, b._tick = function(a) {
                null != this.htmlElement && (this.htmlElement.style.visibility = "hidden", this.onTick) && this.onTick(a)
            }, createjs.DOMElement = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                    this.initialize()
                },
                b = a.prototype;
            b.initialize = function() {}, b.getBounds = function() {
                return new createjs.Rectangle(0, 0, 0, 0)
            }, b.applyFilter = function() {}, b.toString = function() {
                return "[Filter]"
            }, b.clone = function() {
                return new a
            }, createjs.Filter = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                throw "Touch cannot be instantiated"
            };
            a.isSupported = function() {
                return "ontouchstart" in window || window.navigator.msPointerEnabled
            }, a.enable = function(b, c, d) {
                return b && b.canvas && a.isSupported() ? (b.__touch = {
                    pointers: {},
                    multitouch: !c,
                    preventDefault: !d,
                    count: 0
                }, "ontouchstart" in window ? a._IOS_enable(b) : window.navigator.msPointerEnabled && a._IE_enable(b), !0) : !1
            }, a.disable = function(b) {
                b && ("ontouchstart" in window ? a._IOS_disable(b) : window.navigator.msPointerEnabled && a._IE_disable(b))
            }, a._IOS_enable = function(b) {
                var c = b.canvas,
                    d = b.__touch.f = function(c) {
                        a._IOS_handleEvent(b, c)
                    };
                c.addEventListener("touchstart", d, !1), c.addEventListener("touchmove", d, !1), c.addEventListener("touchend", d, !1), c.addEventListener("touchcancel", d, !1)
            }, a._IOS_disable = function(a) {
                var b = a.canvas;
                b && (a = a.__touch.f, b.removeEventListener("touchstart", a, !1), b.removeEventListener("touchmove", a, !1), b.removeEventListener("touchend", a, !1), b.removeEventListener("touchcancel", a, !1))
            }, a._IOS_handleEvent = function(a, b) {
                if (a) {
                    a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                    for (var c = b.changedTouches, d = b.type, e = 0, f = c.length; f > e; e++) {
                        var g = c[e],
                            h = g.identifier;
                        g.target == a.canvas && ("touchstart" == d ? this._handleStart(a, h, b, g.pageX, g.pageY) : "touchmove" == d ? this._handleMove(a, h, b, g.pageX, g.pageY) : ("touchend" == d || "touchcancel" == d) && this._handleEnd(a, h, b))
                    }
                }
            }, a._IE_enable = function(b) {
                var c = b.canvas,
                    d = b.__touch.f = function(c) {
                        a._IE_handleEvent(b, c)
                    };
                c.addEventListener("MSPointerDown", d, !1), window.addEventListener("MSPointerMove", d, !1), window.addEventListener("MSPointerUp", d, !1), window.addEventListener("MSPointerCancel", d, !1), b.__touch.preventDefault && (c.style.msTouchAction = "none"), b.__touch.activeIDs = {}
            }, a._IE_disable = function(a) {
                var b = a.__touch.f;
                window.removeEventListener("MSPointerMove", b, !1), window.removeEventListener("MSPointerUp", b, !1), window.removeEventListener("MSPointerCancel", b, !1), a.canvas && a.canvas.removeEventListener("MSPointerDown", b, !1)
            }, a._IE_handleEvent = function(a, b) {
                if (a) {
                    a.__touch.preventDefault && b.preventDefault && b.preventDefault();
                    var c = b.type,
                        d = b.pointerId,
                        e = a.__touch.activeIDs;
                    "MSPointerDown" == c ? b.srcElement == a.canvas && (e[d] = !0, this._handleStart(a, d, b, b.pageX, b.pageY)) : e[d] && ("MSPointerMove" == c ? this._handleMove(a, d, b, b.pageX, b.pageY) : ("MSPointerUp" == c || "MSPointerCancel" == c) && (delete e[d], this._handleEnd(a, d, b)))
                }
            }, a._handleStart = function(a, b, c, d, e) {
                var f = a.__touch;
                if (f.multitouch || !f.count) {
                    var g = f.pointers;
                    g[b] || (g[b] = !0, f.count++, a._handlePointerDown(b, c, d, e))
                }
            }, a._handleMove = function(a, b, c, d, e) {
                a.__touch.pointers[b] && a._handlePointerMove(b, c, d, e)
            }, a._handleEnd = function(a, b, c) {
                var d = a.__touch,
                    e = d.pointers;
                e[b] && (d.count--, a._handlePointerUp(b, c, !0), delete e[b])
            }, createjs.Touch = a
        }()), define("../../src/bodymap/build/libs/easeljs-0.5.0.min", function() {}), window.HTMLCanvasElement && (this.createjs = this.createjs || {}, function() {
            var a = function(a, b) {
                    this.initialize(a, b)
                },
                b = a.prototype;
            a.NONE = 0, a.LOOP = 1, a.REVERSE = 2, a.IGNORE = {}, a._tweens = [], a._plugins = {}, a.get = function(b, c, d) {
                return new a(b, c, d)
            }, a.tick = function(b, c) {
                for (var d = a._tweens.slice(), e = d.length - 1; e >= 0; e--) {
                    var f = d[e];
                    c && !f.ignoreGlobalPause || f._paused || f.tick(f._useTicks ? 1 : b)
                }
            }, createjs.Ticker && createjs.Ticker.addListener(a, !1), a.removeTweens = function(b) {
                if (b.tweenjs_count) {
                    for (var c = a._tweens, d = c.length - 1; d >= 0; d--) c[d]._target == b && (c[d]._paused = !0, c.splice(d, 1));
                    b.tweenjs_count = 0
                }
            }, a.hasActiveTweens = function(b) {
                return b ? b.tweenjs_count : a._tweens && a._tweens.length
            }, a.installPlugin = function(b, c) {
                var d = b.priority;
                null == d && (b.priority = d = 0);
                for (var e = 0, f = c.length, g = a._plugins; f > e; e++) {
                    var h = c[e];
                    if (g[h]) {
                        for (var i = g[h], j = 0, k = i.length; k > j && !(d < i[j].priority); j++);
                        g[h].splice(j, 0, b)
                    } else g[h] = [b]
                }
            }, a._register = function(b, c) {
                var d = b._target;
                c ? (d && (d.tweenjs_count = d.tweenjs_count ? d.tweenjs_count + 1 : 1), a._tweens.push(b)) : (d && d.tweenjs_count--, d = a._tweens.indexOf(b), -1 != d && a._tweens.splice(d, 1))
            }, b.ignoreGlobalPause = !1, b.loop = !1, b.duration = 0, b.pluginData = null, b.onChange = null, b.target = null, b.position = null, b._paused = !1, b._curQueueProps = null, b._initQueueProps = null, b._steps = null, b._actions = null, b._prevPosition = 0, b._stepPosition = 0, b._prevPos = -1, b._target = null, b._useTicks = !1, b.initialize = function(b, c, d) {
                this.target = this._target = b, c && (this._useTicks = c.useTicks, this.ignoreGlobalPause = c.ignoreGlobalPause, this.loop = c.loop, this.onChange = c.onChange, c.override && a.removeTweens(b)), this.pluginData = d || {}, this._curQueueProps = {}, this._initQueueProps = {}, this._steps = [], this._actions = [], c && c.paused ? this._paused = !0 : a._register(this, !0), c && null != c.position && this.setPosition(c.position, a.NONE)
            }, b.wait = function(a) {
                if (null == a || 0 >= a) return this;
                var b = this._cloneProps(this._curQueueProps);
                return this._addStep({
                    d: a,
                    p0: b,
                    e: this._linearEase,
                    p1: b
                })
            }, b.to = function(a, b, c) {
                return (isNaN(b) || 0 > b) && (b = 0), this._addStep({
                    d: b || 0,
                    p0: this._cloneProps(this._curQueueProps),
                    e: c,
                    p1: this._cloneProps(this._appendQueueProps(a))
                })
            }, b.call = function(a, b, c) {
                return this._addAction({
                    f: a,
                    p: b ? b : [this],
                    o: c ? c : this._target
                })
            }, b.set = function(a, b) {
                return this._addAction({
                    f: this._set,
                    o: this,
                    p: [a, b ? b : this._target]
                })
            }, b.play = function(a) {
                return this.call(a.setPaused, [!1], a)
            }, b.pause = function(a) {
                return a || (a = this), this.call(a.setPaused, [!0], a)
            }, b.setPosition = function(a, b) {
                0 > a && (a = 0), null == b && (b = 1);
                var c = a,
                    d = !1;
                if (c >= this.duration && (this.loop ? c %= this.duration : (c = this.duration, d = !0)), c == this._prevPos) return d;
                if (this._target)
                    if (d) this._updateTargetProps(null, 1);
                    else if (this._steps.length > 0) {
                    for (var e = 0, f = this._steps.length; f > e && !(this._steps[e].t > c); e++);
                    e = this._steps[e - 1], this._updateTargetProps(e, (this._stepPosition = c - e.t) / e.d, c)
                }
                return e = this._prevPos, this.position = this._prevPos = c, this._prevPosition = a, 0 != b && this._actions.length > 0 && (this._useTicks ? this._runActions(c, c) : 1 == b && e > c ? (e != this.duration && this._runActions(e, this.duration), this._runActions(0, c, !0)) : this._runActions(e, c)), d && this.setPaused(!0), this.onChange && this.onChange(this), d
            }, b.tick = function(a) {
                this._paused || this.setPosition(this._prevPosition + a)
            }, b.setPaused = function(b) {
                return this._paused = !!b, a._register(this, !b), this
            }, b.w = b.wait, b.t = b.to, b.c = b.call, b.s = b.set, b.toString = function() {
                return "[Tween]"
            }, b.clone = function() {
                throw "Tween can not be cloned."
            }, b._updateTargetProps = function(b, c, d) {
                var e, f, g, h;
                b || 1 != c ? (b.e && (c = b.e(c, 0, 1, 1)), e = b.p0, f = b.p1) : e = f = this._curQueueProps;
                for (n in this._initQueueProps) {
                    null == (g = e[n]) && (e[n] = g = this._initQueueProps[n]), null == (h = f[n]) && (f[n] = h = g), g = g == h || 0 == c || 1 == c || "number" != typeof g ? 1 == c ? h : g : g + (h - g) * c;
                    var i = !1;
                    if (h = a._plugins[n])
                        for (var j = 0, k = h.length; k > j; j++) {
                            var l = h[j].tween(this, n, g, e, f, c, d, !b);
                            l == a.IGNORE ? i = !0 : g = l
                        }
                    i || (this._target[n] = g)
                }
            }, b._runActions = function(a, b, c) {
                var d = a,
                    e = b,
                    f = -1,
                    g = this._actions.length,
                    h = 1;
                for (a > b && (d = b, e = a, f = g, g = h = -1);
                    (f += h) != g;) {
                    var b = this._actions[f],
                        i = b.t;
                    (i == e || i > d && e > i || c && i == a) && b.f.apply(b.o, b.p)
                }
            }, b._appendQueueProps = function(b) {
                var c, d, e, f;
                for (f in b) {
                    if (null == this._initQueueProps[f]) {
                        if (d = this._target[f], c = a._plugins[f])
                            for (var g = 0, h = c.length; h > g; g++) e = c[g].init(this, f, d), e != a.IGNORE && (d = e);
                        this._initQueueProps[f] = d
                    }
                    this._curQueueProps[f] = b[f]
                }
                return this._curQueueProps
            }, b._cloneProps = function(a) {
                var b, c = {};
                for (b in a) c[b] = a[b];
                return c
            }, b._addStep = function(a) {
                return a.d > 0 && (this._steps.push(a), a.t = this.duration, this.duration += a.d), this
            }, b._addAction = function(a) {
                return a.t = this.duration, this._actions.push(a), this
            }, b._set = function(a, b) {
                for (var c in a) b[c] = a[c]
            }, createjs.Tween = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function(a, b, c) {
                    this.initialize(a, b, c)
                },
                b = a.prototype;
            b.ignoreGlobalPause = !1, b.duration = 0, b.loop = !1, b.onChange = null, b.position = null, b._paused = !1, b._tweens = null, b._labels = null, b._prevPosition = 0, b._prevPos = -1, b._useTicks = !1, b.initialize = function(a, b, c) {
                this._tweens = [], c && (this._useTicks = c.useTicks, this.loop = c.loop, this.ignoreGlobalPause = c.ignoreGlobalPause, this.onChange = c.onChange), a && this.addTween.apply(this, a), this.setLabels(b), c && c.paused ? this._paused = !0 : createjs.Tween._register(this, !0), c && null != c.position && this.setPosition(c.position, createjs.Tween.NONE)
            }, b.addTween = function(a) {
                var b = arguments.length;
                if (b > 1) {
                    for (var c = 0; b > c; c++) this.addTween(arguments[c]);
                    return arguments[0]
                }
                return 0 == b ? null : (this.removeTween(a), this._tweens.push(a), a.setPaused(!0), a._paused = !1, a._useTicks = this._useTicks, a.duration > this.duration && (this.duration = a.duration), this._prevPos >= 0 && a.setPosition(this._prevPos, createjs.Tween.NONE), a)
            }, b.removeTween = function(a) {
                var b = arguments.length;
                if (b > 1) {
                    for (var c = !0, d = 0; b > d; d++) c = c && this.removeTween(arguments[d]);
                    return c
                }
                return 0 == b ? !1 : (b = this._tweens.indexOf(a), -1 != b ? (this._tweens.splice(b, 1), a.duration >= this.duration && this.updateDuration(), !0) : !1)
            }, b.addLabel = function(a, b) {
                this._labels[a] = b
            }, b.setLabels = function(a) {
                this._labels = a ? a : {}
            }, b.gotoAndPlay = function(a) {
                this.setPaused(!1), this._goto(a)
            }, b.gotoAndStop = function(a) {
                this.setPaused(!0), this._goto(a)
            }, b.setPosition = function(a, b) {
                0 > a && (a = 0);
                var c = this.loop ? a % this.duration : a,
                    d = !this.loop && a >= this.duration;
                if (c == this._prevPos) return d;
                this._prevPosition = a, this.position = this._prevPos = c;
                for (var e = 0, f = this._tweens.length; f > e; e++)
                    if (this._tweens[e].setPosition(c, b), c != this._prevPos) return !1;
                return d && this.setPaused(!0), this.onChange && this.onChange(this), d
            }, b.setPaused = function(a) {
                this._paused = !!a, createjs.Tween._register(this, !a)
            }, b.updateDuration = function() {
                for (var a = this.duration = 0, b = this._tweens.length; b > a; a++) tween = this._tweens[a], tween.duration > this.duration && (this.duration = tween.duration)
            }, b.tick = function(a) {
                this.setPosition(this._prevPosition + a)
            }, b.resolve = function(a) {
                var b = parseFloat(a);
                return isNaN(b) && (b = this._labels[a]), b
            }, b.toString = function() {
                return "[Timeline]"
            }, b.clone = function() {
                throw "Timeline can not be cloned."
            }, b._goto = function(a) {
                a = this.resolve(a), null != a && this.setPosition(a)
            }, createjs.Timeline = a
        }(), this.createjs = this.createjs || {}, function() {
            var a = function() {
                throw "Ease cannot be instantiated."
            };
            a.linear = function(a) {
                return a
            }, a.none = a.linear, a.get = function(a) {
                return -1 > a && (a = -1), a > 1 && (a = 1),
                    function(b) {
                        return 0 == a ? b : 0 > a ? b * (b * -a + 1 + a) : b * ((2 - b) * a + (1 - a))
                    }
            }, a.getPowIn = function(a) {
                return function(b) {
                    return Math.pow(b, a)
                }
            }, a.getPowOut = function(a) {
                return function(b) {
                    return 1 - Math.pow(1 - b, a)
                }
            }, a.getPowInOut = function(a) {
                return function(b) {
                    return (b *= 2) < 1 ? .5 * Math.pow(b, a) : 1 - .5 * Math.abs(Math.pow(2 - b, a))
                }
            }, a.quadIn = a.getPowIn(2), a.quadOut = a.getPowOut(2), a.quadInOut = a.getPowInOut(2), a.cubicIn = a.getPowIn(3), a.cubicOut = a.getPowOut(3), a.cubicInOut = a.getPowInOut(3), a.quartIn = a.getPowIn(4), a.quartOut = a.getPowOut(4), a.quartInOut = a.getPowInOut(4), a.quintIn = a.getPowIn(5), a.quintOut = a.getPowOut(5), a.quintInOut = a.getPowInOut(5), a.sineIn = function(a) {
                return 1 - Math.cos(a * Math.PI / 2)
            }, a.sineOut = function(a) {
                return Math.sin(a * Math.PI / 2)
            }, a.sineInOut = function(a) {
                return -.5 * (Math.cos(Math.PI * a) - 1)
            }, a.getBackIn = function(a) {
                return function(b) {
                    return b * b * ((a + 1) * b - a)
                }
            }, a.backIn = a.getBackIn(1.7), a.getBackOut = function(a) {
                return function(b) {
                    return --b * b * ((a + 1) * b + a) + 1
                }
            }, a.backOut = a.getBackOut(1.7), a.getBackInOut = function(a) {
                return a *= 1.525,
                    function(b) {
                        return (b *= 2) < 1 ? .5 * b * b * ((a + 1) * b - a) : .5 * ((b -= 2) * b * ((a + 1) * b + a) + 2)
                    }
            }, a.backInOut = a.getBackInOut(1.7), a.circIn = function(a) {
                return -(Math.sqrt(1 - a * a) - 1)
            }, a.circOut = function(a) {
                return Math.sqrt(1 - --a * a)
            }, a.circInOut = function(a) {
                return (a *= 2) < 1 ? -.5 * (Math.sqrt(1 - a * a) - 1) : .5 * (Math.sqrt(1 - (a -= 2) * a) + 1)
            }, a.bounceIn = function(b) {
                return 1 - a.bounceOut(1 - b)
            }, a.bounceOut = function(a) {
                return 1 / 2.75 > a ? 7.5625 * a * a : 2 / 2.75 > a ? 7.5625 * (a -= 1.5 / 2.75) * a + .75 : 2.5 / 2.75 > a ? 7.5625 * (a -= 2.25 / 2.75) * a + .9375 : 7.5625 * (a -= 2.625 / 2.75) * a + .984375
            }, a.bounceInOut = function(b) {
                return .5 > b ? .5 * a.bounceIn(2 * b) : .5 * a.bounceOut(2 * b - 1) + .5
            }, a.getElasticIn = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    if (0 == d || 1 == d) return d;
                    var e = b / c * Math.asin(1 / a);
                    return -(a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b))
                }
            }, a.elasticIn = a.getElasticIn(1, .3), a.getElasticOut = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    if (0 == d || 1 == d) return d;
                    var e = b / c * Math.asin(1 / a);
                    return a * Math.pow(2, -10 * d) * Math.sin((d - e) * c / b) + 1
                }
            }, a.elasticOut = a.getElasticOut(1, .3), a.getElasticInOut = function(a, b) {
                var c = 2 * Math.PI;
                return function(d) {
                    var e = b / c * Math.asin(1 / a);
                    return (d *= 2) < 1 ? -.5 * a * Math.pow(2, 10 * (d -= 1)) * Math.sin((d - e) * c / b) : a * Math.pow(2, -10 * (d -= 1)) * Math.sin((d - e) * c / b) * .5 + 1;

                }
            }, a.elasticInOut = a.getElasticInOut(1, .3 * 1.5), createjs.Ease = a
        }()), define("../../src/bodymap/build/libs/tweenjs-0.3.0.min", function() {}), window.HTMLCanvasElement && (this.createjs = this.createjs || {}, function() {
            var a = function(a, b, c, d) {
                    this.initialize(a, b, c, d)
                },
                b = a.prototype = new createjs.Container;
            a.INDEPENDENT = "independent", a.SINGLE_FRAME = "single", a.SYNCHED = "synched", b.startPosition = 0, b.loop = !0, b.timeline = null, b.paused = !1, b.actionsEnabled = !0, b._synchOffset = 0, b._prevPos = -1, b._prevPosition = 0, b.Container_initialize = b.initialize, b.initialize = function(b, c, d, e) {
                this.mode = b || a.INDEPENDENT, this.startPosition = c || 0, this.loop = d, props = {
                    paused: !0,
                    position: c,
                    useTicks: !0
                }, this.Container_initialize(), this.timeline = new createjs.Timeline(null, e, props), this._managed = {}
            }, b.isVisible = function() {
                return this.visible && this.alpha > 0 && 0 != this.scaleX && 0 != this.scaleY
            }, b.Container_draw = b.draw, b.draw = function(a, b, c) {
                return this.DisplayObject_draw(a, b) ? !0 : (this._updateTimeline(), void this.Container_draw(a, b, c))
            }, b.play = function() {
                this.paused = !1
            }, b.stop = function() {
                this.paused = !0
            }, b.gotoAndPlay = function(a) {
                this.paused = !1, this._goto(a)
            }, b.gotoAndStop = function(a) {
                this.paused = !0, this._goto(a)
            }, b.clone = function() {
                throw "MovieClip cannot be cloned."
            }, b.toString = function() {
                return "[MovieClip (name=" + this.name + ")]"
            }, b.Container__tick = b._tick, b._tick = function(b) {
                this.paused || this.mode != a.INDEPENDENT || (this._prevPosition = this._prevPos < 0 ? 0 : this._prevPosition + 1), this.Container__tick(b)
            }, b._goto = function(a) {
                a = this.timeline.resolve(a), null != a && (this._prevPosition = a, this._updateTimeline())
            }, b._reset = function() {
                this._prevPos = -1
            }, b._updateTimeline = function() {
                var b = this.timeline,
                    c = b._tweens,
                    d = this.children,
                    e = this.mode != a.INDEPENDENT;
                if (b.loop = null == this.loop ? !0 : this.loop, e ? b.setPosition(this.startPosition + (this.mode == a.SINGLE_FRAME ? 0 : this._synchOffset), createjs.Tween.NONE) : b.setPosition(this._prevPosition, this.actionsEnabled ? null : createjs.Tween.NONE), this._prevPosition = b._prevPosition, this._prevPos != b._prevPos) {
                    this._prevPos = b._prevPos;
                    for (var f in this._managed) this._managed[f] = 1;
                    for (b = c.length - 1; b >= 0; b--) f = c[b], e = f._target, e != this && (f = f._stepPosition, e instanceof createjs.DisplayObject ? this._addManagedChild(e, f) : this._setState(e.state, f));
                    for (b = d.length - 1; b >= 0; b--) c = d[b].id, 1 == this._managed[c] && (this.removeChildAt(b), delete this._managed[c])
                }
            }, b._setState = function(a, b) {
                if (a)
                    for (var c = 0, d = a.length; d > c; c++) {
                        var e, f = a[c],
                            g = f.t,
                            f = f.p;
                        for (e in f) g[e] = f[e];
                        this._addManagedChild(g, b)
                    }
            }, b._addManagedChild = function(b, c) {
                b._off || (this.addChild(b), b instanceof a && (b._synchOffset = c, b.mode == a.INDEPENDENT && (!this._managed[b.id] || 0 == this._prevPos) && b._reset()), this._managed[b.id] = 2)
            }, createjs.MovieClip = a;
            var c = function() {
                throw "MovieClipPlugin cannot be instantiated."
            };
            c.priority = 100, c.install = function() {
                createjs.Tween.installPlugin(c, ["startPosition"])
            }, c.init = function(a, b, c) {
                return "startPosition" != b && a._target instanceof createjs.MovieClip ? void 0 : c
            }, c.tween = function(a, b, c, d, e, f) {
                return a._target instanceof createjs.MovieClip ? 1 == f ? e[b] : d[b] : c
            }, c.install()
        }()), define("../../src/bodymap/build/libs/movieclip-0.5.0.min", function() {}), window.HTMLCanvasElement) {
        ! function(a, b, c) {
            var d;
            (a.ValueProp = function(b, d, e) {
                null == e && (e = !1), this.initialize(b, d, e, {}, !0), this.frame_344 = function() {
                    this.stop()
                }, this.timeline.addTween(c.Tween.get(this).wait(344).call(this.frame_344)), this.instance = new a.baloon_animation("synched", 6), this.instance.setTransform(14.1, 15), this.timeline.addTween(c.Tween.get(this.instance).to({
                    _off: !0
                }, 338).wait(7)), this.femalebody = new a.female, this.femalebody.setTransform(190, 262, 1, 1, 0, 0, 0, 190, 262), this.timeline.addTween(c.Tween.get(this.femalebody).wait(18).to({
                    y: 322
                }, 7).wait(40).to({
                    y: 362
                }, 6).wait(54).to({
                    y: 418
                }, 10).wait(49).to({
                    y: 442
                }, 5).wait(149).to({
                    y: 262
                }, 6).wait(1)), this.malebody = new a.male, this.malebody.setTransform(190, 262, 1, 1, 0, 0, 0, 190, 262), this.timeline.addTween(c.Tween.get(this.malebody).wait(18).to({
                    y: 322
                }, 7).wait(40).to({
                    y: 362
                }, 6).wait(54).to({
                    y: 418
                }, 10).wait(49).to({
                    y: 442
                }, 5).wait(149).to({
                    y: 262
                }, 6).wait(1))
            }).prototype = d = new c.MovieClip, d.nominalBounds = new c.Rectangle(0, 0, 380.1, 524), (a.baloon_down = function() {
                this.initialize(b.baloon_down)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 238, 39), (a.baloon_mid = function() {
                this.initialize(b.baloon_mid)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 238, 22), (a.baloon_shadow_all = function() {
                this.initialize(b.baloon_shadow_all)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 238, 84), (a.baloon_up = function() {
                this.initialize(b.baloon_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 238, 22), (a.landing_man = function() {
                this.initialize(b.landing_man)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 380, 524), (a.landing_woman = function() {
                this.initialize(b.landing_woman)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 380, 524), (a.male = function() {
                this.initialize(), this.instance = new a.landing_man, this.addChild(this.instance)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 380, 524), (a.female = function() {
                this.initialize(), this.instance_1 = new a.landing_woman, this.addChild(this.instance_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 380, 524), (a.baloon_upper = function() {
                this.initialize(), this.instance_2 = new a.baloon_up, this.addChild(this.instance_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 238, 22), (a.baloon_mid_1 = function() {
                this.initialize(), this.instance_3 = new a.baloon_mid, this.addChild(this.instance_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 238, 22), (a.baloon_lower = function() {
                this.initialize(), this.instance_4 = new a.baloon_down, this.addChild(this.instance_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 238, 39), (a.baloon_all = function() {
                this.initialize(), this.instance_5 = new a.baloon_shadow_all, this.instance_5.setTransform(-118.9, -41.9), this.addChild(this.instance_5)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-118.9, -41.9, 238, 84), (a.text_header = function() {
                this.initialize(), this.shape = new c.Shape, this.shape.graphics.f("#88A906").s().p("AP7h0IAAAxQAAAGgCAFQgCAFgEADQgEADgIAAQgIAAgEgEQgEgFAAgLIAAgzIgSAAIAAA1QAAAQAHAIQAIAJAQAAQAHgBAGgDQAHgEADgGIABAAIAAALIARAAIAAhTIgSAAAOmhYQACAHAAAHQAAAHgCAHQgDAGgFAFQgFAEgIAAQgIAAgGgEQgFgFgCgGQgDgHAAgHQAAgHADgHQACgHAFgEQAGgEAIAAQAIAAAFAEQAFAEADAHIAAAAAORh2QgOAAgJAGQgJAGgFAJQgFAKAAANQAAANAFAKQAFAJAJAGQAJAFAOABQANgBAJgFQAKgGAFgJQAEgKABgNQgBgNgEgKQgFgJgKgGQgJgGgNAAIAAAAANOh0IgVA+IgBAAIgVg+IgUAAIAfBSIgCAHQgBADgBADQgCADgCABQgDACgEAAQgCAAgCgBQgCAAgCAAIAAAPQADABADAAQADAAADAAQAKAAAFgEQAFgEADgGQAEgHACgIIAhhXIgTAAAK+h2QgFAAgFADQgFADgEAEQgEAEgBAEIAAAAIAAgQIgRAAIAABTIASAAIAAgnQAAgJADgHQADgGAFgDQAFgEAGAAQACAAACAAQACABACAAIAAgRQgBAAgBgBQgCAAgDAAIAAAAAJgh2QgNAAgIAGQgJAGgFAKQgFAKAAAMQAAANAFAKQAEAJAJAGQAJAFANABQAJAAAIgEQAIgDAFgHQAGgGACgJIgRAAQgDAHgFAEQgFADgIAAQgHAAgFgDQgFgEgCgFQgDgGAAgGIA9AAQABgKgCgIQgCgJgGgHQgFgHgIgEQgHgEgKAAIAAAAAJrhlQAEAEADAFQACAFABAGIgrAAQAAgHADgFQADgFAFgDQAEgCAHAAQAGAAAFACIAAAAALLghQAAAGgCADQgDAFgFACIAAAKQAKgCAFgHQAGgHABgKIAAgVIgXAAIAAAVIALAAAI1h0IgWAAIghAiIAAhBIgTAAIAAByIATAAIAAgdIAKgLIAaAoIAWAAIgjg1IAggeAGthlQAFgDAFABQAHAAAGAEQAFADABAIIASAAQgBgKgFgHQgFgGgJgEQgIgDgJAAQgOAAgJAGQgJAGgFAKQgEAKAAANQAAAMAEAKQAFAJAJAGQAJAFANABQAQgBAKgIQAJgJADgQIgSAAQgCAJgFAFQgFAFgIAAQgIAAgFgEQgFgEgCgHQgCgGAAgHQAAgNAEgGQAEgHAFgCIAAAAAE6hgQgFAKAAAMQAAANAFAKQAEAJAJAGQAJAFANABQAJAAAIgEQAIgDAFgHQAGgGACgJIgRAAQgDAHgFAEQgFADgIAAQgHAAgFgDQgFgEgCgFQgDgGAAgGIA9AAQABgKgCgIQgCgJgGgHQgFgHgIgEQgHgEgKAAQgNAAgIAGQgJAGgFAKIAAAAAFShlQAEgCAHAAQAGAAAFACQAEAEADAFQACAFABAGIgrAAQAAgHADgFQADgFAFgDIAAAAADdiTIAAByIASAAIAAgxQAAgGADgFQACgFAEgDQAFgCAGAAQAIAAAEAEQAEAFAAAJIAAA0IASAAIAAg5QAAgOgHgHQgIgHgOAAQgIAAgHAEQgGADgEAGIAAgqIgSAAADFiEQgGgJgLgFQgKgEgNAAQgNAAgKAFQgLAEgHAIQgHAJgDALQgEALAAAMQAAAMAEALQADALAHAIQAHAJALAEQAKAFANAAQAOAAAKgGQALgGAGgKQAGgLABgNIgTAAQgBAIgEAHQgDAHgGAEQgHAEgIAAQgKAAgGgEQgHgEgEgGQgEgGgCgIQgCgIAAgIQAAgIACgIQACgIAEgGQAEgGAHgEQAGgDAKAAQAMAAAHAGQAHAGACAKIAUAAQgBgMgHgJIAAAAAAOh2QgJAAgFAEQgFADgFAHQgDgHgGgDQgGgEgIAAQgKAAgGAEQgFADgEAHIgBAAIAAgMIgRAAIAABTIASAAIAAgxQAAgHADgFQACgEAEgDQAEgCAFAAQAIAAAEAEQADAFAAAIIAAA1IASAAIAAgwQAAgLAEgGQADgFAJAAQAHAAADACQADADABAFQABAFAAAHIAAAwIASAAIAAg5QAAgPgHgGQgIgHgNAAIAAAAAi4h0IgRAAIAAgZIgSAAIAAAZIgOAAIAAAOIAOAAIAAAxQAAAHACAFQACAEAEADQAFACAKAAQADAAADAAQADgBADAAIAAgOQgCABgCAAQgCAAgCAAQgEAAgCgCQgCgBAAgCQgBgDAAgEIAAgsIARAAIAAgOAiThjQAGgEAIAAQAIAAAFAEQAFAEADAHQACAHAAAHQAAAHgCAHQgDAGgFAFQgFAEgIAAQgIAAgGgEQgFgFgCgGQgDgHAAgHQAAgHADgHQACgHAFgEIAAAAAiFh2QgOAAgJAGQgJAGgFAJQgFAKAAANQAAANAFAKQAFAJAJAGQAJAFAOABQANgBAJgFQAKgGAFgJQAEgKABgNQgBgNgEgKQgFgJgKgGQgJgGgNAAIAAAAAkmhzQgHAEgEAHIAAgMIgRAAIAAByIASAAIAAgqQADAFAFADQAEACAFACQAGACAFAAQAMgBAIgGQAIgGAEgKQAEgJAAgMQAAgMgFgKQgEgKgIgGQgJgGgNAAQgIAAgHADIAAAAAkNhjQAFADADAIQADAGAAAIQAAAHgDAHQgCAHgFAEQgFAEgIAAQgIAAgFgEQgFgEgDgGQgDgHAAgIQAAgNAGgJQAGgHAMAAQAHAAAFAEIAAAAAmLhoQgDgHgGgDQgHgEgHAAQgKAAgGAEQgGADgEAHIAAAAIAAgMIgSAAIAABTIATAAIAAgxQAAgHACgFQADgEAEgDQAEgCAFAAQAIAAADAEQADAFAAAIIAAA1IASAAIAAgwQAAgLAFgGQAEgFAJAAQAHAAADACQAEADAAAFQABAFAAAHIAAAwIASAAIAAg5QAAgPgHgGQgHgHgNAAQgJAAgHAEQgGADgEAHIAAAAAnrh0IgVA+IAAAAIgWg+IgUAAIAgBSIgCAHQgCADgBADQgBADgDABQgCACgEAAQgCAAgDgBQgCAAgCAAIAAAPQADABADAAQADAAAEAAQAJAAAFgEQAGgEADgGQADgHADgIIAghXIgTAAApeiWQgIAAgIACQgHACgGAEQgGAEgEAGQgDAHAAAJQAAAFACAHQACAFAGAFQAFAEAKADQAMADAIACQAIACAGACQAEACADADQADACAAAHQAAAFgDAEQgCAEgFACQgGADgIAAQgJAAgGgDQgHgCgDgGQgEgFAAgJIgUAAQAAAOAGAJQAHAJAKAFQALAEANAAQAJAAAIgCQAIgCAGgFQAHgEAEgGQAEgHAAgKQAAgGgDgGQgCgFgFgFQgFgFgIgDQgCAAgFgBQgFgBgGgCQgFgBgEgBQgFgCgBAAQgGgCgDgDQgEgEAAgGQAAgFADgEQAEgDAEgCQAFAAAFAAQAKgBAHAFQAHAFAAALIAUAAQAAgNgGgHQgFgJgKgEQgKgEgMAAIAAAAAsRiTIAAByIATAAIAAgxQAAgGACgFQACgFAFgDQAEgCAHAAQAIAAAEAEQAEAFAAAJIAAA0IASAAIAAg5QAAgOgIgHQgIgHgNAAQgJAAgGAEQgHADgDAGIAAgqIgTAAAsuiNIgTAAIAAAZIgNAAIAAAOIANAAIAAAxQAAAHACAFQACAEAFADQAFACAJAAQADAAADAAQADgBADAAIAAgOQgCABgCAAQgCAAgCAAQgEAAgCgCQgBgBgBgCQgBgDABgEIAAgsIAQAAIAAgOIgQAAIAAgZAuLiTIgWBXIAAAAIgWhXIgVAAIgXBXIAAAAIgVhXIgUAAIAeByIAUAAIAYhYIAAAAIAXBYIAUAAIAghyIgUAAAtaiCIAAgRIgSAAIAAARIASAAAtsh0IAABTIASAAIAAhTIgSAAAs2BRQAEgDAHAAQAIAAAEAFQAEAEAAAKIAAA0IASAAIAAg5QAAgOgIgHQgIgHgNAAQgJAAgGAEQgHAEgEAGIAAgMIgSAAIAABTIATAAIAAgxQAAgGACgFQACgFAFgDIAAAAAuPBlQgIABgHACQgIACgEAFQgFAGAAAKQAAAIAEAFQAEAGAGACQAHADAHAAQAFAAAFgBQAGgBAEgCQAFgDAEgDQABAFAEADQADACAGAAQACAAAEgBQADAAACgBIAAgNQgBABgBAAQgBAAgBAAQgDAAgBgCQAAgBAAgEIAAgqQgBgJgEgFQgFgFgIgDQgHgCgIAAQgKAAgIACQgIADgGAGQgFAGgBAKIASAAQABgGAFgEQAFgDAHAAQAEAAAEABQAEABADACQACADAAAEQAAAGgDACQgDACgGAAQgGABgGABIAAAAAt4B5QAAAGgDADQgDAEgFABQgFACgEAAQgDAAgEgBQgEgBgDgDQgDgCAAgEQAAgIAFgCQAEgDAGgBQAGgBAGAAQAGgBAEgDIAAAOAvABNQgFgHgIgDQgIgDgKAAQgNAAgJAGQgKAGgEAKQgFAKAAAMQAAANAFAJQAFAKAJAFQAJAGANAAQAQAAAJgJQAKgIACgQIgSAAQgBAJgFAFQgFAFgIAAQgIgBgFgEQgFgEgCgGQgCgHAAgHQAAgMADgHQAEgGAFgDQAFgCAFAAQAIAAAFAEQAFAEABAIIASAAQgBgKgFgHIAAAAAreBZIAAgVIgWAAIAAAVIAWAAAreCVIAAgWIgWAAIAAAWIAWAA").cp(), this.shape.setTransform(101.9, 20.7), this.addChild(this.shape)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-1.8, 5.5, 207.6, 30.3), (a.text_1 = function() {
                this.initialize(), this.shape_1 = new c.Shape, this.shape_1.graphics.f("#88A906").s().p("AgJAiIgngnIgdAnIBNAuIBOiGIgjgZIg0Bx").cp(), this.shape_1.setTransform(7.8, -18.7), this.shape_2 = new c.Shape, this.shape_2.graphics.f("#333333").s().p("AstiYIAAAoQgDgFgFgCQgEgDgFgBQgEgBgEAAQgMAAgIAFQgIAGgEAJQgEAJAAALQAAALAEAKQAEAJAIAFQAIAGAMAAQAIAAAHgDQAGgDAEgGIAAAKIANAAIAAhrIgNAAArXhbIgsAAQAAgGADgFQADgFAEgDQAFgDAHAAQAGAAAFADQAFADADAFQADAFAAAGIAAAAArsh8QgLAAgIAFQgIAFgFAJQgFAJAAAMQABAMAEAJQAEAKAIAFQAIAFAMAAQANAAAJgHQAJgGACgNIgMAAQgCAHgFAEQgFAEgIAAQgJAAgFgEQgGgDgCgGQgDgGABgHIA6AAQAAgHgCgIQgBgHgEgHQgEgHgHgEQgHgEgKAAIAAAAAq8gtIANAAIAAgsQAAgHACgFQADgGAFgDQAFgDAIAAQAHAAAEAEQAEAFAAAHIAAA0IANAAIAAgzQAAgIgCgHQgDgGgGgDQgFgEgLAAQgIAAgGADQgHAEgEAHIAAAAIAAgMIgMAAIAABNAsvhiQACAHAAAIQAAAHgCAHQgCAGgGAEQgFAFgIAAQgJAAgFgEQgFgEgDgHQgCgGAAgIQAAgIACgGQACgHAFgEQAFgFAJAAQAJAAAFAEQAFAEADAHIAAAAAt6BCQAGgJAQAAIAAgNQgLAAgGAEQgHAFgFAJIAAAAIAAgQIgMAAIAABNIANAAIAAgiQAAgPAGgIIAAAAAthBUQAAAMAEAJQAEAKAIAFQAIAFANAAQANAAAJgHQAIgGADgNIgNAAQgBAHgGAEQgFAEgIAAQgIAAgGgEQgFgDgDgGQgCgGAAgHIA6AAQAAgHgBgIQgCgHgEgHQgEgHgHgEQgHgEgKAAQgLAAgIAFQgIAFgFAJQgEAJAAAMIAAAAAsnBNIgtAAQABgGACgFQADgFAFgDQAFgDAGAAQAHAAAFADQAFADACAFQADAFABAGIAAAAAsMAQIAABrIANAAIAAhrIgNAAAq+A8QADADAAAFQAAAFgEACQgDACgGAAQgGABgHABQgHACgGACQgGACgDAFQgEAFAAAIQAAAIADAFQAEAFAFACQAGACAHAAQAIAAAHgDQAHgDAGgGQAAAGACADQADADAFAAQADAAADgBQACAAABgBIAAgKQgBABgBAAQgBAAAAAAQgDAAgBgCQgBgCABgFIAAgoQgBgJgEgEQgEgFgHgCQgGgBgIAAQgIAAgHACQgIADgEAGQgFAFAAAKIAMAAQABgJAFgDQAFgDAJAAQAEAAAEABQAEABACADIAAAAAraBbQADgCAFgBQAGgBAHAAQAGgBAEgDIAAANQAAAEgDAEQgCAEgFADQgFADgJAAQgEAAgDgBQgEgBgCgDQgCgCAAgFQAAgEACgDQACgDAEgBIAAAAAt8gtIAAhrIgOAAIAABrIAOAAAn5iZQgCAAgCAAQgKAAgGAFQgFAFAAAJIAAAMIgNAAIAAALIANAAIAABCIAMAAIAAhCIAPAAIAAgLIgPAAIAAgLQAAgFADgCQACgCAFAAQACAAACAAQACABABAAIAAgLQgCAAgCgBIAAAAAo4iYIAAAQIAMAAIAAgQIgMAAApkiSIAAAYIgNAAIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCAAgEIAAgwIAQAAIAAgLIgQAAIAAgYIgNAAAo4h6IAABNIAMAAIAAhNIgMAAAqWAWIAAAYIgNAAIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCAAgEIAAgwIAQAAIAAgLIgQAAIAAgYIgNAAAprA/QgEAJAAAMQAAAMAEAJQAEAKAIAFQAIAFANAAQANAAAJgHQAIgGADgNIgNAAQgBAHgGAEQgFAEgIAAQgIAAgGgEQgFgDgDgGQgCgGAAgHIA6AAQAAgHgBgIQgCgHgEgHQgEgHgHgEQgHgEgKAAQgLAAgIAFQgIAFgFAJIAAAAApXA6QAFgDAGAAQAHAAAFADQAFADACAFQADAFABAGIgtAAQABgGACgFQADgFAFgDIAAAAAoRBVQAAgIACgGQACgHAFgEQAFgFAJAAQAJAAAFAEQAFAEADAHQACAHAAAIQAAAHgCAHQgCAGgGAEQgFAFgIAAQgJAAgFgEQgFgEgDgHQgCgGAAgIIAAAAAn7AsQgMAAgIAFQgIAGgEAJQgEAJAAALQAAALAEAKQAEAJAIAFQAIAGAMAAQAIAAAHgDQAGgDAEgGIAAAKIANAAIAAhrIgNAAIAAAoQgDgFgFgCQgEgDgFgBQgEgBgEAAIAAAAAlQh8QgJAAgGADQgHADgDAGIAAgKIgNAAIAABrIANAAIAAgoQADAEAEADQAEADAFABQAFABAEAAQAMAAAIgGQAHgFAEgJQAEgJAAgLQAAgLgEgKQgEgJgIgFQgHgGgMAAIAAAAAk6hUQAAAIgCAGQgDAHgFAEQgFAFgIAAQgJAAgGgEQgFgFgCgGQgDgHAAgIQAAgHACgHQADgGAFgFQAFgEAJAAQAIAAAFAEQAGAEACAHQADAGAAAIIAAAAAm4h6IgWA/IgXg/IgPAAIAfBNIgFANQgCADgCACQgDACgDAAQgCAAgCAAQgCgBgCgBIAAAMQACABACAAQADAAACAAQAFAAAEgCQAEgCADgEQADgFADgHIAihYIgNAAAmgAuIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAGAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCABgEIAAgwIAPAAIAAgLIgPAAIAAgYIgNAAIAAAYIgNAAAlpBAQgEAJAAAMQAAALAEAJQAFAJAIAGQAJAFAMAAQAMAAAJgFQAIgGAEgJQAEgJAAgLQAAgMgEgJQgEgJgIgGQgJgFgMAAQgMAAgJAFQgIAGgFAJIAAAAAlcBFQADgHAGgDQAFgEAHAAQAHAAAFAEQAFADAEAHQADAGAAAKQAAAJgDAGQgEAHgFADQgFAEgHAAQgHAAgFgEQgGgDgDgHQgDgGAAgJQAAgKADgGIAAAAAgQiYIAABrIANAAIAAgKQADAEADADQAEADAFABQAEABAEAAQAMAAAIgGQAIgFAEgJQAEgJAAgLQAAgLgEgKQgEgJgIgFQgIgGgMAAQgIAAgHADQgFADgDAGIAAgoIgNAAAgxiYIAAAQIANAAIAAgQIgNAAABIiYIAABrIAMAAIAAhrIgMAAAhwh6QgHACgEAFQgFAFAAAIQAAAHAEAFQADAEAGACQAGACAGACQAHABAGACQAFABAEADQAEACAAAFQAAAFgDADQgDACgFABQgEABgEAAQgFAAgFgCQgFgBgDgDQgDgDAAgGIgNAAQABAJAEAGQAFAGAHADQAHACAJAAQAIAAAIgCQAHgCAFgGQAFgFAAgJQAAgIgEgEQgDgEgGgDQgGgCgGgBQgGgCgGgBQgGgCgEgCQgDgDAAgEQAAgEACgCQADgCADgBQAEgBAEAAQAEAAAEABQAEACADACQADADAAAFIANAAQgBgJgEgGQgEgFgHgCQgHgCgJAAQgHAAgGACIAAAAAieh6QgHgCgJAAQgHAAgGACQgHACgEAFQgFAFAAAIQAAAHAEAFQADAEAGACQAGACAGACQAHABAGACQAFABAEADQAEACAAAFQAAAFgDADQgDACgFABQgEABgEAAQgFAAgFgCQgFgBgDgDQgDgDAAgGIgNAAQABAJAEAGQAFAGAHADQAHACAJAAQAIAAAIgCQAHgCAFgGQAFgFAAgJQAAgIgEgEQgDgEgGgDQgGgCgGgBQgGgCgGgBQgGgCgEgCQgDgDAAgEQAAgEACgCQADgCADgBQAEgBAEAAQAEAAAEABQAEACADACQADADAAAFIANAAQgBgJgEgGQgEgFgHgCIAAAAAjnhjQADAGAAAKQAAAJgDAGQgEAHgFADQgFAEgHAAQgHAAgFgEQgGgDgDgHQgDgGAAgJQAAgKADgGQADgHAGgDQAFgEAHAAQAHAAAFAEQAFADAEAHIAAAAAjnh3QgJgFgMAAQgMAAgJAFQgIAGgFAJQgEAJAAAMQAAALAEAJQAFAJAIAGQAJAFAMAAQAMAAAJgFQAIgGAEgJQAEgJAAgLQAAgMgEgJQgEgJgIgGIAAAAAjyAuIAfBNIgFANQgCADgCACQgDACgDAAQgCAAgCAAQgCgBgCgBIAAAMQACABACAAQADAAACAAQAFAAAEgCQAEgCADgEQADgFADgHIAihYIgNAAIgWA/IgXg/IgPAAAieBAQgEAJAAAMQAAALAEAJQAEAJAJAGQAIAFAMAAQANAAAIgFQAIgGAFgJQAEgJAAgLQAAgMgEgJQgFgJgIgGQgIgFgNAAQgMAAgIAFQgJAGgEAJIAAAAAiSBFQAEgHAFgDQAGgEAGAAQAHAAAGAEQAFADADAHQADAGAAAKQAAAJgDAGQgDAHgFADQgGAEgHAAQgGAAgGgEQgFgDgEgHQgDgGAAgJQAAgKADgGIAAAAABkhUQABAMAEAJQAEAKAIAFQAIAFAMAAQANAAAJgHQAJgGACgNIgMAAQgCAHgFAEQgFAEgIAAQgJAAgFgEQgGgDgCgGQgDgGABgHIA6AAQAAgHgCgIQgBgHgEgHQgEgHgHgEQgHgEgKAAQgLAAgIAFQgIAFgFAJQgFAJAAAMIAAAAAAohiQACAGAAAIQAAAIgCAGQgCAHgFAEQgFAFgJAAQgJAAgFgEQgFgFgBgGQgCgHAAgIQAAgHACgHQABgGAFgFQAFgEAIAAQAJAAAFAEQAFAEADAHIAAAAAgxgtIANAAIAAhNIgNAAIAABNAgVAuIAAArQAAAIgCAFQgDAGgFADQgFADgIAAQgHAAgEgEQgEgFAAgHIAAg0IgNAAIAAAzQAAAIACAGQADAHAGADQAFAEALAAQAIAAAGgDQAHgEAEgHIAAAAIAAAMIAMAAIAAhNIgNAAAAJAuIAABNIANAAIAAgiQAAgPAGgIQAGgJAQAAIAAgNQgLAAgGAEQgHAFgFAJIAAAAIAAgQIgMAAABlBOQAEAEAGACQAFACAHACQAGABAGACQAGABADADQAEACAAAFQAAAFgDADQgDACgEABQgEABgFAAQgFAAgEgCQgFgBgDgDQgDgDAAgGIgNAAQAAAJAFAGQAEAGAIADQAHACAJAAQAIAAAHgCQAIgCAFgGQAFgFAAgJQAAgIgEgEQgEgEgFgDQgGgCgHgBQgGgCgFgBQgGgCgEgCQgEgDAAgEQAAgEADgCQACgCAEgBQAEgBAEAAQAEAAAEABQAEACACACQADADABAFIAMAAQAAgJgFgGQgEgFgHgCQgHgCgJAAQgGAAgHACQgHACgEAFQgEAFAAAIQAAAHADAFIAAAAAEkhhQgBgKgEgGQgFgFgHgDQgHgDgJAAQgNAAgIAFQgIAGgEAJQgEAKAAALQAAAMAEAJQAEAJAJAFQAIAFALAAQAPAAAJgIQAIgIADgOIgNAAQgCAJgFAFQgFAFgKAAQgIAAgFgEQgFgEgCgHQgCgGAAgIQAAgIACgGQACgHAFgFQAGgEAJAAQAIAAAFAEQAEAEACAIIANAAAEzg/QAEAJAJAGQAIAFAMAAQANAAAIgFQAIgGAFgJQAEgJAAgLQAAgMgEgJQgFgJgIgGQgIgFgNAAQgMAAgIAFQgJAGgEAJQgEAJAAAMQAAALAEAJIAAAAAB8huQAFgDAHAAQAGAAAFADQAFADADAFQADAFAAAGIgsAAQAAgGADgFQADgFAEgDIAAAAACnAuIAfBNIgFANQgCADgCACQgDACgDAAQgCAAgCAAQgCgBgCgBIAAAMQACABACAAQADAAACAAQAFAAAEgCQAEgCADgEQADgFADgHIAihYIgNAAIgWA/IgXg/IgPAAAEgAsQgIAAgGADQgHAEgEAGIAAAAIAAgLIgMAAIAABNIANAAIAAgwQAAgCABgEQABgDACgDQADgDAEgDQAEgCAFAAQAJAAADAFQADAFAAAHIAAAzIANAAIAAgwQAAgJAFgFQAFgGAKAAQAGAAADACQAEADABAEQABAEAAAEIAAAzIANAAIAAg5QgBgMgHgFQgHgFgLAAQgIAAgGADQgHAEgEAGQgCgHgGgDQgGgDgHAAIAAAAAHoh3QgIAGgEAJQgEAJAAALQAAALAEAKQAEAJAIAFQAIAGAMAAQAIAAAHgDQAGgDAEgGIAAAKIANAAIAAhrIgNAAIAAAoQgDgFgFgCQgEgDgFgBQgEgBgEAAQgMAAgIAFIAAAAAHvhsQAFgFAJAAQAJAAAFAEQAFAEADAHQACAHAAAIQAAAHgCAHQgCAGgGAEQgFAFgIAAQgJAAgFgEQgFgEgDgHQgCgGAAgIQAAgIACgGQACgHAFgEIAAAAAGuh8QgIAAgGADQgHAEgEAHIAAAAIAAgMIgMAAIAABNIANAAIAAgsQAAgHACgFQADgGAFgDQAFgDAIAAQAHAAAEAEQAEAFAAAHIAAA0IANAAIAAgzQAAgIgCgHQgDgGgGgDQgFgEgLAAIAAAAAFphjQADAGAAAKQAAAJgDAGQgDAHgFADQgGAEgHAAQgGAAgGgEQgFgDgEgHQgDgGAAgJQAAgKADgGQAEgHAFgDQAGgEAGAAQAHAAAGAEQAFADADAHIAAAAAGIBUQAAgHACgHQACgGAGgFQAFgEAIAAQAJAAAFAEQAFAEADAHQACAGAAAIQAAAIgCAGQgCAHgFAEQgFAFgJAAQgJAAgFgEQgGgFgCgGQgCgHAAgIIAAAAAGIA4IAAgKIgNAAIAABrIANAAIAAgoQADAEAFADQAEADAFABQAEABAEAAQAMAAAIgGQAIgFAEgJQAEgJAAgLQAAgLgEgKQgEgJgIgFQgIgGgMAAQgIAAgHADQgGADgEAGIAAAAAHZAWIAAAYIgNAAIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAGAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCABgEIAAgwIAPAAIAAgLIgPAAIAAgYIgNAAAJciSIAAAYIgNAAIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAGAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCABgEIAAgwIAPAAIAAgLIgPAAIAAgYIgNAAAI2iYIAAAQIANAAIAAgQIgNAAAKHiYIAAAQIANAAIAAgQIgNAAAK1h3QgJAGgEAJQgEAJAAAMQAAALAEAJQAEAJAJAGQAIAFAMAAQANAAAIgFQAIgGAFgJQAEgJAAgLQAAgMgEgJQgFgJgIgGQgIgFgNAAQgMAAgIAFIAAAAAK9htQAGgEAGAAQAHAAAGAEQAFADADAHQADAGAAAKQAAAJgDAGQgDAHgFADQgGAEgHAAQgGAAgGgEQgFgDgEgHQgDgGAAgJQAAgKADgGQAEgHAFgDIAAAAAKHh6IAABNIANAAIAAhNIgNAAAI2h6IAABNIANAAIAAhNIgNAAAIQAxQgIAGgFAJQgEAJAAAMQAAALAEAJQAFAJAIAGQAJAFAMAAQAMAAAJgFQAIgGAEgJQAEgJAAgLQAAgMgEgJQgEgJgIgGQgJgFgMAAQgMAAgJAFIAAAAAIQBFQADgHAGgDQAFgEAHAAQAHAAAFAEQAFADAEAHQADAGAAAKQAAAJgDAGQgEAHgFADQgFAEgHAAQgHAAgFgEQgGgDgDgHQgDgGAAgJQAAgKADgGIAAAAAJZAuIAABNIANAAIAAgwQAAgCABgEQABgDADgDQACgDAEgDQAEgCAGAAQAIAAADAFQADAFAAAHIAAAzIANAAIAAgwQAAgJAGgFQAFgGAJAAQAGAAAEACQADADABAEQABAEAAAEIAAAzIANAAIAAg5QAAgMgHgFQgHgFgMAAQgHAAgHADQgGAEgEAGQgDgHgFgDQgGgDgHAAQgIAAgHADQgGAEgEAGIgBAAIAAgLIgMAAANrh8QgHAAgGACQgHACgEAFQgFAFAAAIQAAAHAEAFQADAEAGACQAGACAGACQAHABAGACQAFABAEADQAEACAAAFQAAAFgDADQgDACgFABQgEABgEAAQgFAAgFgCQgFgBgDgDQgDgDAAgGIgNAAQABAJAEAGQAFAGAHADQAHACAJAAQAIAAAIgCQAHgCAFgGQAFgFAAgJQAAgIgEgEQgDgEgGgDQgGgCgGgBQgGgCgGgBQgGgCgEgCQgDgDAAgEQAAgEACgCQADgCADgBQAEgBAEAAQAEAAAEABQAEACADACQADADAAAFIANAAQgBgJgEgGQgEgFgHgCQgHgCgJAAIAAAAAM8hvQgDgGgGgDQgFgEgLAAQgIAAgGADQgHAEgEAHIAAAAIAAgMIgMAAIAABNIANAAIAAgsQAAgHACgFQADgGAFgDQAFgDAIAAQAHAAAEAEQAEAFAAAHIAAA0IANAAIAAgzQAAgIgCgHIAAAAAL8A4QAEACADACQADADAAAFIANAAQgBgJgEgGQgEgFgHgCQgHgCgJAAQgHAAgGACQgHACgEAFQgFAFAAAIQAAAHAEAFQADAEAGACQAGACAGACQAHABAGACQAFABAEADQAEACAAAFQAAAFgDADQgDACgFABQgEABgEAAQgFAAgFgCQgFgBgDgDQgDgDAAgGIgNAAQABAJAEAGQAFAGAHADQAHACAJAAQAIAAAIgCQAHgCAFgGQAFgFAAgJQAAgIgEgEQgDgEgGgDQgGgCgGgBQgGgCgGgBQgGgCgEgCQgDgDAAgEQAAgEACgCQADgCADgBQAEgBAEAAQAEAAAEABIAAAA").cp(), this.shape_2.setTransform(110.6, -10), this.addChild(this.shape_2, this.shape_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, -26.7, 201.7, 32.2), (a.checkmark = function() {
                this.initialize(), this.shape_3 = new c.Shape, this.shape_3.graphics.f("#88A906").s().p("AhNAhIBNAvIBOiGIgjgZIg0BwIgngmIgdAm").cp(), this.shape_3.setTransform(7.8, 8.1), this.addChild(this.shape_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 15.6, 16.1), (a.text_3 = function() {
                this.initialize(), this.instance_6 = new a.checkmark, this.instance_6.setTransform(7.8, -14.6, 1, 1, 0, 0, 0, 7.8, 8.1), this.shape_4 = new c.Shape, this.shape_4.graphics.f("#333333").s().p("At3AmIAPAAIAAgqIAgAAQAQAAAJgIQAIgIAAgPQAAgPgIgIQgJgJgQAAIgvAAIAABpArYhDIgMAAIAAAQIAMAAIAAgQAsFgRQAGgJAQAAIAAgNQgLAAgGAEQgHAFgFAJIAAAAIAAgQIgMAAIAABLIANAAIAAgiQAAgNAGgIIAAAAArEglIAABLIANAAIAAgqQAAgHACgFQADgGAFgDQAFgDAIAAQAHAAAFAEQADAFAAAHIAAAyIANAAIAAgxQAAgIgCgHQgDgGgGgDQgFgEgKAAQgJAAgGADQgHAEgDAHIgBAAIAAgMIgMAAArkglIAABLIAMAAIAAhLIgMAAAtMg3QAMAAAFAFQAHAFAAAKQAAAJgHAFQgFAGgMgBIgcAAIAAgnIAcAAAocAAQAAALAEAJQAFAJAIAGQAJAFAMAAQANAAAIgFQAIgGAEgJQAFgJAAgLQAAgKgFgJQgEgJgIgGQgIgFgNAAQgMAAgJAFQgIAGgFAJQgEAJAAAKIAAAAAneAAQAAAJgDAGQgDAHgFADQgGAEgHAAQgHAAgFgEQgGgDgDgHQgDgGAAgJQAAgIADgGQADgHAGgDQAFgEAHAAQAHAAAGAEQAFADADAHQADAGAAAIIAAAAApsg9IAAAYIgNAAIAAALIANAAIAAAvQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCAAgEIAAguIAQAAIAAgLIgQAAIAAgYIgNAAAlpg9IAAAYIgNAAIAAALIANAAIAAAvQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgHAAQgFAAgDgBQgCgCABgEIAAguIAQAAIAAgLIgQAAIAAgYIgNAAAmOglIAAApQAAAIgDAFQgCAGgFADQgFADgIAAQgIAAgDgEQgFgFAAgHIAAgyIgMAAIAAAxQAAAIACAGQADAHAFADQAGAEALAAQAIAAAGgDQAGgEAFgHIAAAAIAAAMIAMAAIAAhLIgNAAAkVAfQADAFAFACQAHACAGAAQAJAAAGgDQAHgDAGgGQAAAGACADQAEADAFAAQADAAACgBQACAAABgBIAAgKQAAABgCAAQAAAAgBAAQgDAAgBgCQAAgCAAgFIAAgmQAAgJgFgEQgEgFgGgCQgHgBgIAAQgIAAgHACQgIADgEAGQgEAFgBAKIAMAAQACgJAFgDQAFgDAIAAQAEAAAEABQAEABADADQACADAAAFQAAAFgDACQgEACgGAAQgFABgIABQgHACgFACQgHAAgDAFQgEAFAAAIQAAAIAEAFIAAAAAh0hDIglAAIAABpIAlAAQAbAAAMgOQANgPAAgZQAAgagOgMQgNgNgZAAIAAAAAhPgOQAAAOgEAHQgEAJgGAEQgGAEgGABQgGABgEAAIgYAAIAAhRIAZAAQANAAAHAFQAIAFAEAJQADAJAAANIAAAAAj8ADQAGgBAHAAQAGgBAEgBIAAALQAAAEgCAEQgDAEgFADQgFADgIAAQgFAAgDgBQgEgBgCgDQgBgCAAgFQAAgEABgDQACgDAEgBQADgCAFgBIAAAAAA2gYQAFgEAJAAQAIAAAFAEQAFAEABAIIAOAAQgBgKgFgGQgEgFgIgDQgHgDgJAAQgMAAgIAFQgIAGgEAJQgEAKAAAJQAAAMAEAJQAEAJAIAFQAIAFAMAAQAPAAAIgIQAJgIACgOIgNAAQgBAJgGAFQgFAFgJAAQgIAAgFgEQgFgEgDgHQgCgGAAgIQAAgGACgGQADgHAFgFIAAAAABrglIAAALIANAAIAAAvQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgHAAQgFAAgCgBQgDgCABgEIAAguIAQAAIAAgLIgQAAIAAgYIgNAAIAAAYIgNAAAgxgTQgFAJAAAKQAAALAFAJQAEAJAJAGQAIAFAMAAQAMAAAHgFQAIgGAFgJQAEgJAAgLQAAgKgEgJQgFgJgIgGQgHgFgMAAQgMAAgIAFQgJAGgEAJIAAAAAgcgYQAGgEAGAAQAHAAAFAEQAEADADAHQADAGAAAIQAAAJgDAGQgDAHgEADQgFAEgHAAQgGAAgGgEQgGgDgDgHQgDgGAAgJQAAgIADgGQADgHAGgDIAAAAAE+hDIgQAAIAAARIAJAAQAAADgBAEQgBADgCACQgCACgDAAIAAAIQAGAAADgDQAEgDACgFQABgFAAgGIAAgRAELgRQAGgJAQAAIAAgNQgLAAgGAEQgHAFgEAJIgBAAIAAgQIgMAAIAABLIANAAIAAgiQAAgNAGgIIAAAAAFGgRQAAAHAEAFQADAEAGABQAGABAGACQAHABAFACQAGABAEADQAEACAAAFQAAAFgEADQgCACgFABQgEABgEAAQgFAAgFgCQgFgBgDgDQgDgDAAgGIgNAAQABAJAEAGQAEAGAIADQAHACAJAAQAIAAAIgCQAHgCAFgGQAFgFAAgJQAAgIgEgEQgDgEgGgBQgGgCgGgBQgHgCgFgBQgGgCgEgCQgDgDAAgEQAAgEACgCQADgCADgBQAEgBAEAAQAEAAAEABQAEACADACQACADABAFIANAAQgBgJgEgGQgEgFgHgCQgIgCgIAAQgHAAgGACQgHACgEAFQgFAFAAAIIAAAAACvgOQAEgHAFgDQAGgEAGAAQAHAAAFAEQAFADAEAHQADAGAAAIQAAAJgDAGQgEAHgFADQgFAEgHAAQgGAAgGgEQgFgDgEgHQgDgGAAgJQAAgIADgGIAAAAACigTQgDAJAAAKQAAALADAJQAFAJAJAGQAIAFAMAAQAMAAAJgFQAIgGAFgJQADgJAAgLQAAgKgDgJQgFgJgIgGQgJgFgMAAQgMAAgIAFQgJAGgFAJIAAAAAIAgyQAFAFAAAIQAAAIgEAEQgDAEgGACQgGACgGgBIgeAAIAAglIAkAAQAKAAAEAFIAAAAAHyhDIgyAAIAABpIAOAAIAAgsIAjAAQAGABAEACQAEADACACQABAFABAFQABAFAAAFQAAAGAAAEQABAEABACIARAAQgDgDgBgFQgCgFAAgGQgBgFAAgFQAAgGgBgDQgCgEgDgDQgEgDgGgBIAAgBQAKgDAEgHQAFgHAAgKQAAgNgJgHQgJgIgPAAIAAAAAKMgYQAFgEAJAAQAIAAAFAEQAGAEACAHQADAGAAAHQAAAHgCAGQgDAHgFAEQgFAFgIAAQgJAAgGgEQgFgFgCgGQgDgHAAgHQAAgGACgHQADgGAFgFIAAAAAKDgbIAAgKIgNAAIAABpIANAAIAAgoQADAEAEADQAEADAFABQAEABAFAAQAMAAAIgGQAHgFAEgJQAEgJAAgLQAAgJgEgKQgEgJgIgFQgHgGgMAAQgJAAgGADQgHADgDAGIAAAAALbgOQADgHAGgDQAFgEAHAAQAGAAAGAEQAFADAEAHQADAGAAAIQAAAJgDAGQgEAHgFADQgGAEgGAAQgHAAgFgEQgGgDgDgHQgDgGAAgJQAAgIADgGIAAAAALOgTQgEAJAAAKQAAALAEAJQAFAJAIAGQAJAFAMAAQAMAAAJgFQAIgGAEgJQAEgJAAgLQAAgKgEgJQgEgJgIgGQgJgFgMAAQgMAAgJAFQgIAGgFAJIAAAAAIlgUQgEAJAAALQAAALAEAJQAEAKAIAFQAIAFANAAQANAAAIgHQAJgGADgNIgNAAQgBAHgGAEQgFAEgIAAQgJAAgFgEQgFgDgDgGQgCgGAAgHIA6AAQAAgFgBgIQgCgHgEgHQgEgHgHgEQgHgEgKAAQgLAAgIAFQgIAFgFAJIAAAAAI4gZQAFgDAHAAQAHAAAFADQAFADACAFQADAFABAGIgtAAQAAgGADgFQADgFAEgDIAAAAANbg9IAAAYIgNAAIAAALIANAAIAAAvQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgGAAQgGAAgDgBQgBgCAAgEIAAguIAQAAIAAgLIgQAAIAAgYIgNAAANNgnQgLAAgGAEQgHAFgFAJIAAAAIAAgQIgNAAIAABLIAOAAIAAgiQAAgNAGgIQAGgJAQAAIAAgN").cp(), this.shape_4.setTransform(108.6, -13.5), this.addChild(this.shape_4, this.instance_6)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, -22.7, 197.4, 16.1), (a.text_2 = function() {
                this.initialize(), this.instance_7 = new a.checkmark, this.instance_7.setTransform(7.8, -22.6, 1, 1, 0, 0, 0, 7.8, 8.1), this.shape_5 = new c.Shape, this.shape_5.graphics.f("#333333").s().p("AtAjQIAABNIANAAIAAgsQAAgHADgFQACgGAFgDQAFgDAIAAQAHAAAFAEQAEAFAAAHIAAA0IANAAIAAgzQAAgIgDgHQgCgGgGgDQgGgEgKAAQgJAAgGADQgGAEgEAHIgBAAIAAgMIgMAAArTjSQgGAAgHACQgHACgEAFQgEAFAAAIQAAAHADAFQAEAEAGACQAFACAHACQAGABAGACQAGABADADQAEACAAAFQAAAFgDADQgDACgEABQgEABgFAAQgFAAgEgCQgFgBgDgDQgDgDAAgGIgNAAQAAAJAFAGQAEAGAIADQAHACAJAAQAIAAAHgCQAIgCAFgGQAFgFAAgJQAAgIgEgEQgEgEgFgDQgGgCgHgBQgGgCgFgBQgGgCgEgCQgEgDAAgEQAAgEADgCQACgCAEgBQAEgBAEAAQAEAAAEABQAEACACACQADADABAFIAMAAQAAgJgFgGQgEgFgHgCQgHgCgJAAIAAAAAqpjQIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAGAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCABgEIAAgwIAPAAIAAgLIgPAAIAAgYIgNAAIAAAYIgNAAAtmAmIANAAIAAhMIgNAAIAABMAtmg0IANAAIAAgQIgNAAIAAAQAsWgYQAEAEAAAHIAAAzIANAAIAAgxQAAgJgCgHQgDgGgGgDQgFgEgLAAQgIAAgGADQgHAEgEAHIAAAAIAAgMIgMAAIAABMIANAAIAAgqQAAgHACgGQADgGAFgDQAFgDAIAAQAHAAAEAFIAAAAAq4gjQgJAGgEAJQgEAJAAALQAAALAEAJQAEAJAJAFQAIAFAMABQANgBAIgFQAIgFAFgJQAEgJAAgLQAAgLgEgJQgFgJgIgGQgIgFgNAAQgMAAgIAFIAAAAAqkgdQAHAAAGAEQAFADADAHQADAGAAAJQAAAIgDAHQgDAGgFAEQgGADgHAAQgGAAgGgDQgFgEgEgGQgDgHAAgIQAAgJADgGQAEgHAFgDQAGgEAGAAIAAAAArdg3QACgDAFAAQACAAACAAQACABABAAIAAgLQgCAAgCgBQgCAAgCAAQgKAAgGAFQgFAFAAAJIAAAMIgNAAIAAALIANAAIAABBIAMAAIAAhBIAPAAIAAgLIgPAAIAAgLQAAgFADgBIAAAAAtWiDIAAhrIgOAAIAABrIAOAAAnJjQIgNAAIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCAAgEIAAgwIAQAAIAAgLIgQAAIAAgYIgNAAIAAAYAmdjuIAABrIAMAAIAAhrIgMAAAmFjQIAfBNIgGAOQgBACgDACQgCACgEAAQgCAAgCAAQgCgBgCgBIAAAMQADABACAAQACAAACAAQAGAAAEgCQAEgCADgEQADgFADgHIAihYIgOAAIgWA/IgXg/IgOAAApEjRQgHgBgHAAQgJAAgHACQgHADgFAGQgEAFgBAKIANAAQABgJAFgDQAFgDAIAAQAEAAAEABQAEABADADQACADAAAFQAAAFgDACQgEACgGAAQgFABgIABQgGACgGACQgGACgEAFQgEAFAAAIQAAAIAEAFQADAFAGACQAGACAHAAQAIAAAHgDQAHgDAFgGQAAAGADADQADADAFAAQADAAACgBQACAAACgBIAAgKQgBABgBAAQgBAAgBAAQgDAAAAgCQgBgCAAgFIAAgoQAAgJgEgEQgFgFgGgCIAAAAAn8jSQgIAAgGADQgHAEgEAHIAAAAIAAgMIgMAAIAABNIANAAIAAgsQAAgHACgFQADgGAFgDQAFgDAIAAQAHAAAEAEQAEAFAAAHIAAA0IANAAIAAgzQAAgIgCgHQgDgGgGgDQgFgEgLAAIAAAAApMinQAGgBAEgDIAAANQAAAEgCAEQgDAEgFADQgFADgIAAQgEAAgEgBQgDgBgCgDQgCgCAAgFQAAgEACgDQACgDADgBQAEgCAEgBQAHgBAGAAIAAAAApHgbIAAgNQgKAAgHAFQgHAEgEAJIgBAAIAAgQIgMAAIAABMIANAAIAAgjQAAgNAGgIQAHgJAPAAIAAAAAo9gmIAABMIANAAIAAgvQAAgCABgDQABgEACgDQADgDAEgDQAEgCAFAAQAJAAADAFQADAFAAAIIAAAxIANAAIAAgvQAAgJAFgFQAFgGAKAAQAGAAADACQAEADABAEQABAEAAAFIAAAxIANAAIAAg4QgBgLgHgGQgHgFgLAAQgIAAgGADQgHAEgEAGQgCgHgGgDQgGgDgHAAQgIAAgGADQgHAEgEAGIAAAAIAAgLIgMAAAkJiKQAEAFAFACQAGACAHAAQAIAAAHgDQAHgDAGgGQAAAGACADQADADAFAAQADAAADgBQACAAABgBIAAgKQgBABgBAAQgBAAAAAAQgDAAgBgCQgBgCABgFIAAgoQgBgJgEgEQgEgFgHgCQgGgBgIAAQgIAAgHACQgIADgEAGQgFAFAAAKIAMAAQABgJAFgDQAFgDAJAAQAEAAAEABQAEABACADQADADAAAFQAAAFgEACQgDACgGAAQgGABgHABQgHACgGACQgGACgDAFQgEAFAAAIQAAAIADAFIAAAAAmNgQQAAAFgEACQgDACgGABQgGAAgHACQgHABgGACQgGABgDAEQgEAFAAAJQAAAIADAEQAEAFAFACQAGADAHAAQAIAAAHgDQAHgDAGgGQAAAGACADQADADAFAAQADAAADgBQACgBABgBIAAgJQgBAAgBAAQgBAAAAAAQgDAAgBgCQgBgCABgEIAAgnQgBgJgEgEQgEgFgHgCQgGgBgIAAQgIAAgHACQgIADgEAGQgFAFAAAKIAMAAQABgJAFgDQAFgDAJAAQAEAAAEABQAEABACADQADADAAAFIAAAAAl1gbIANAAIAAAwQAAAHACAEQACADAEACQAEABAHAAIAKAAIAAgMIgGAAQgGABgCgCQgCgBAAgEIAAgvIAQAAIAAgLIgQAAIAAgYIgNAAIAAAYIgNAAIAAALAmkACQAGAAAHgBQAGgBAEgBIAAAMQAAADgDAEQgCAEgFADQgFADgJAAQgEAAgDgBQgEgBgCgCQgCgDAAgEQAAgFACgDQACgCAEgCQADgBAFgCIAAAAAkwhEIgMAAIAAAQIAMAAIAAgQAkcgUQgEAJAAALQAAALAEAJQAFAJAIAFQAJAFAMABQAMgBAJgFQAIgFAEgJQAEgJAAgLQAAgLgEgJQgEgJgIgGQgJgFgMAAQgMAAgJAFQgIAGgFAJIAAAAAkPgPQADgHAGgDQAFgEAHAAQAHAAAFAEQAFADAEAHQADAGAAAJQAAAIgDAHQgEAGgFAEQgFADgHAAQgHAAgFgDQgGgEgDgGQgDgHAAgIQAAgJADgGIAAAAAkwAmIAAhMIgMAAIAABMIAMAAAAIjSQgJAAgIAFQgIAFgFAJQgFAJAAAMQABAMAEAJQAEAKAIAFQAIAFAKAAQANAAAJgHQAJgGACgNIgMAAQgCAHgFAEQgFAEgIAAQgJAAgDgEQgGgDgCgGQgDgGABgHIA4AAQAAgHgCgIQgBgHgEgHQgEgHgHgEQgHgEgKAAIAAAAABRjSQgGAAgHACQgHACgEAFQgEAFAAAIQAAAHADAFQAEAEAGACQAFACAHACQAGABAGACQAGABADADQAEACAAAFQAAAFgDADQgDACgEABQgEABgFAAQgFAAgEgCQgFgBgDgDQgDgDAAgGIgNAAQAAAJAFAGQAEAGAIADQAHACAJAAQAIAAAHgCQAIgCAFgGQAFgFAAgJQAAgIgEgEQgEgEgFgDQgGgCgHgBQgGgCgFgBQgGgCgEgCQgEgDAAgEQAAgEADgCQACgCAEgBQAEgBAEAAQAEAAAEABQAEACACACQADADABAFIAMAAQAAgJgFgGQgEgFgHgCQgHgCgJAAIAAAAAisjNQgIAGgEAJQgEAKAAALQAAAMAEAJQAEAJAJAFQAIAFALAAQAPAAAJgIQAIgIADgOIgNAAQgCAJgFAFQgFAFgKAAQgIAAgFgEQgFgEgCgHQgCgGAAgIQAAgIACgGQACgHAFgFQAGgEAJAAQAIAAAFAEQAEAEACAIIANAAQgBgKgEgGQgFgFgHgDQgHgDgJAAQgNAAgIAFIAAAAAhbjNQgIAGgEAJQgEAKAAALQAAAMAEAJQAEAJAIAFQAIAFAMAAQAPAAAIgIQAJgIACgOIgNAAQgBAJgGAFQgFAFgJAAQgIAAgFgEQgFgEgDgHQgCgGAAgIQAAgIACgGQADgHAFgFQAFgEAJAAQAIAAAFAEQAFAEACAIIANAAQgBgKgFgGQgEgFgIgDQgHgDgJAAQgMAAgIAFIAAAAAj3ijQADgCAFgBQAGgBAHAAQAGgBAEgDIAAANQAAAEgDAEQgCAEgFADQgFADgJAAQgEAAgDgBQgEgBgCgDQgCgCAAgFQAAgEACgDQACgDAEgBIAAAAAi6gmIgMAAIAABMIANAAIAAgqQAAgHADgGQACgGAFgDQAFgDAIAAQAHAAAFAFQAEAEAAAHIAAAzIANAAIAAgxQAAgJgDgHQgCgGgGgDQgGgEgKAAQgJAAgGADQgGAEgEAHIgBAAIAAgMAhIhEIAABqIANAAIAAgLQADAFAEADQAEACAFABQAFACAEAAQAMgBAIgFQAHgFAEgKQADgJAAgKQAAgKgDgJQgEgKgIgFQgHgGgMAAQgJAAgGADQgHADgDAGIAAgoIgNAAAg6gOQADgGAFgEQAFgFAJAAQAIAAAFAFQAGADACAHQADAGAAAIQAAAGgCAGQgDAIgFAEQgFAEgIAAQgJAAgGgEQgFgEgCgHQgDgGAAgHQAAgHACgHIAAAAACDiwQAEAEAGACQAFACAHACQAGABAGACQAGABADADQAEACAAAFQAAAFgDADQgDACgEABQgEABgFAAQgFAAgEgCQgFgBgDgDQgDgDAAgGIgNAAQAAAJAFAGQAEAGAIADQAHACAJAAQAIAAAHgCQAIgCAFgGQAFgFAAgJQAAgIgEgEQgEgEgFgDQgGgCgHgBQgGgCgFgBQgGgCgEgCQgEgDAAgEQAAgEADgCQACgCAEgBQAEgBAEAAQAEAAAEABQAEACACACQADADABAFIAMAAQAAgJgFgGQgEgFgHgCQgHgCgJAAQgGAAgHACQgHACgEAFQgEAFAAAIQAAAHADAFIAAAAAAdixIgqAAQAAgGADgFQADgFAEgDQADgDAHAAQAGAAAFADQAFADADAFQADAFAAAGIAAAAAASgdQgEAFgBAKIANAAQABgJAFgDQAFgDAIAAQAEAAAEABQAEABADADQACADAAAFQAAAFgDACQgEACgGABQgFAAgIACQgGABgGACQgGABgEAEQgEAFAAAJQAAAIAEAEQADAFAGACQAGADAHAAQAIAAAHgDQAHgDAFgGQAAAGADADQADADAFAAQADAAACgBQACgBACgBIAAgJQgBAAgBAAQgBAAgBAAQgDAAAAgCQgBgCAAgEIAAgnQAAgJgEgEQgFgFgGgCQgHgBgHAAQgJAAgHACQgHADgFAGIAAAAAAfAFQAEgBAEgCQAHAAAGgBQAGgBAEgBIAAAMQAAADgCAEQgDAEgFADQgFADgIAAQgEAAgEgBQgDgBgCgCQgCgDAAgEQAAgFACgDQACgCADgCIAAAAABrgmQgHADgEAEQgEAFAAAIQAAAHADAFQAEAEAGACQAFAAAHACQAGACAGABQAGACADACQAEADAAAFQAAAFgDACQgDADgEAAQgEABgFAAQgFAAgEgBQgFgBgDgEQgDgDAAgGIgNAAQAAAKAFAGQAEAFAIADQAHADAJAAQAIAAAHgDQAIgCAFgFQAFgGAAgJQAAgIgEgEQgEgDgFgBQgGgDgHgBQgGgBgFgCQgGgBgEgDQgEgCAAgFQAAgEADgBQACgDAEgBQAEgBAEAAQAEAAAEABQAEACACACQADADABAFIAMAAQAAgJgFgGQgEgEgHgDQgHgCgJAAQgGAAgHACIAAAAAFrjSQgLAAgIAFQgIAFgFAJQgEAJAAAMQAAAMAEAJQAEAKAIAFQAIAFANAAQANAAAJgHQAIgGADgNIgNAAQgBAHgGAEQgFAEgIAAQgIAAgGgEQgFgDgDgGQgCgGAAgHIA6AAQAAgHgBgIQgCgHgEgHQgEgHgHgEQgHgEgKAAIAAAAAGrjQQgHADgFAGQgEAFgBAKIANAAQABgJAFgDQAFgDAIAAQAEAAAEABQAEABADADQACADAAAFQAAAFgDACQgEACgGAAQgFABgIABQgGACgGACQgGACgEAFQgEAFAAAIQAAAIAEAFQADAFAGACQAGACAHAAQAIAAAHgDQAHgDAFgGQAAAGADADQADADAFAAQADAAACgBQACAAACgBIAAgKQgBABgBAAQgBAAgBAAQgDAAAAgCQgBgCAAgFIAAgoQAAgJgEgEQgFgFgGgCQgHgBgHAAQgJAAgHACIAAAAAHtjuIAABrIAMAAIAAhrIgMAAAIFjQIAAALIANAAIAAAxQAAAHACAEQACAEAEABQAEABAHAAIAKAAIAAgLIgGAAQgGAAgCgBQgCgCAAgEIAAgwIAQAAIAAgLIgQAAIAAgYIgNAAIAAAYIgNAAAEdjSQgFAAgFABQgFACgDACQgEADgDAFIAAgpIgNAAIAABrIANAAIAAgsQAAgHADgFQACgGAFgDQAFgDAIAAQAHAAAFAEQAEAFAAAHIAAA0IANAAIAAgzQAAgIgDgHQgCgGgGgDQgGgEgKAAIAAAAAFXi8QADgFAFgDQAFgDAGAAQAHAAAFADQAFADACAFQADAFABAGIgtAAQABgGACgFIAAAAADKgoQgLAAgIAFQgIAGgFAIQgEAKAAALQAAALAEAJQAEAJAIAFQAIAGANAAQANAAAJgHQAIgHADgNIgNAAQgBAIgGADQgFAEgIAAQgIAAgGgDQgFgEgDgGQgCgFAAgIIA6AAQAAgFgBgIQgCgHgEgGQgEgIgHgDQgHgFgKAAIAAAAADcgSQADAFABAHIgtAAQABgHACgFQADgFAFgDQAFgDAGAAQAHAAAFADQAFADACAFIAAAAAEzhEIAAAoQgDgFgFgCQgEgDgFgBQgEgBgEAAQgMAAgIAFQgIAGgEAKQgEAIAAALQAAAKAEAJQAEAJAIAGQAIAFAMABQAIAAAHgDQAGgDAEgHIAAALIANAAIAAhqIgNAAAEpgYQAFADADAHQACAHAAAHQAAAGgCAHQgCAHgGAEQgFAEgIAAQgJAAgFgEQgFgEgDgGQgCgHAAgHQAAgGACgHQACgHAFgEQAFgFAJAAQAJAAAFAFIAAAAAHJiWQgDAEgFADQgFADgIAAQgEAAgEgBQgDgBgCgDQgCgCAAgFQAAgEACgDQACgDADgBQAEgCAEgBQAHgBAGAAQAGgBAEgDIAAANQAAAEgCAEIAAAAAGzgjQgIgFgNAAQgMAAgIAFQgJAGgEAJQgEAJAAALQAAALAEAJQAEAJAJAFQAIAFAMABQANgBAIgFQAIgFAFgJQAEgJAAgLQAAgLgEgJQgFgJgIgGIAAAAAGrgZQAFADADAHQADAGAAAJQAAAIgDAHQgDAGgFAEQgGADgHAAQgGAAgGgDQgFgEgEgGQgDgHAAgIQAAgJADgGQAEgHAFgDQAGgEAGAAQAHAAAGAEIAAAAAH4goQgIAAgGADQgHAEgEAHIAAAAIAAgMIgMAAIAABMIANAAIAAgqQAAgHACgGQADgGAFgDQAFgDAIAAQAHAAAEAFQAEAEAAAHIAAAzIANAAIAAgxQAAgJgCgHQgDgGgGgDQgFgEgLAAIAAAAAI9juIAABrIANAAIAAgsQAAgHACgFQADgGAFgDQAFgDAIAAQAHAAAEAEQAEAFAAAHIAAA0IANAAIAAgzQAAgIgCgHQgDgGgGgDQgFgEgLAAQgEAAgFABQgFACgEACQgEADgCAFIAAgpIgNAAAJtAYIgXg+IgPAAIAfBLIgFAOQgCADgCACQgDACgDAAQgCAAgCgBQgCgBgCAAIAAALQACABACABQADAAACAAQAFAAAEgCQAEgCADgFQADgEADgIIAihWIgNAAIgWA+ALRgjQgIgFgNAAQgMAAgIAFQgJAGgEAJQgEAJAAALQAAALAEAJQAEAJAJAFQAIAFAMABQANgBAIgFQAIgFAFgJQAEgJAAgLQAAgLgEgJQgFgJgIgGIAAAAAK8gdQAHAAAGAEQAFADADAHQADAGAAAJQAAAIgDAHQgDAGgFAEQgGADgHAAQgGAAgGgDQgFgEgEgGQgDgHAAgIQAAgJADgGQAEgHAFgDQAGgEAGAAIAAAAALxALQAAAJACAGQADAGAGAEQAFAEALAAQAIAAAGgEQAHgDAEgIIAAAAIAAANIAMAAIAAhMIgNAAIAAAqQAAAHgCAGQgDAFgFADQgFADgIAAQgHAAgEgEQgEgEAAgIIAAgyIgNAAIAAAxANQgWIAAgQIgMAAIAABMIANAAIAAgjQAAgNAGgIQAGgJAQAAIAAgNQgLAAgGAFQgHAEgFAJIAAAAAjmCDQgHACgEAFQgEAFAAAHQAAAIADAEQAEAEAGADQAFACAHABQAGACAGABQAGACADACQAEADAAAFQAAAFgDACQgDADgEAAQgEABgFAAQgFAAgEgBQgFgBgDgEQgDgDAAgGIgNAAQAAAKAFAGQAEAFAIADQAHADAJAAQAIAAAHgDQAIgCAFgFQAFgGAAgJQAAgHgEgFQgEgEgFgCQgGgDgHgBQgGgBgFgCQgGgBgEgDQgEgCAAgEQAAgEADgCQACgDAEgBQAEAAAEAAQAEAAAEABQAEABACADQADADABAFIAMAAQAAgKgFgFQgEgFgHgDQgHgCgJAAQgGAAgHADIAAAAAlbCEQgHADgEAHIAAAAIAAgMIgMAAIAABOIANAAIAAgxQAAgCABgDQABgDACgEQADgDAEgCQAEgCAFAAQAJAAADAEQADAFAAAIIAAAzIANAAIAAgxQAAgJAFgFQAFgFAKAAQAGAAADACQAEACABAEQABAEAAAFIAAAzIANAAIAAg5QgBgMgHgFQgHgGgLAAQgIAAgGAEQgHADgEAHQgCgHgGgEQgGgDgHAAQgIAAgGAEIAAAAAm7CGQgJAFgEAJQgEAKAAALQAAAMAEAJQAEAJAJAFQAIAFAMABQANgBAIgFQAIgFAFgJQAEgJAAgMQAAgLgEgKQgFgJgIgFQgIgFgNgBQgMABgIAFIAAAAAmnCMQAHAAAGADQAFADADAHQADAHAAAJQAAAJgDAHQgDAGgFAEQgGADgHAAQgGAAgGgDQgFgEgEgGQgDgHAAgJQAAgJADgHQAEgHAFgDQAGgDAGAAIAAAAAoXCGQgHgFgMgBQgJAAgGADQgHADgDAHIAAgLIgNAAIAABrIANAAIAAgoQADAFAEADQAEACAFABQAFACAEAAQAMgBAIgFQAHgFAEgKQAEgJAAgLQAAgLgEgJQgEgJgIgGIAAAAAofCQQAGAEACAGQADAHAAAHQAAAIgCAHQgDAHgFAEQgFAEgIAAQgJAAgGgEQgFgEgCgHQgDgGAAgIQAAgIACgGQADgHAFgEQAFgEAJAAQAIAAAFAEIAAAAAoACNIANAAIAAAyQAAAHACAEQACADAEACQAEABAHAAIAKAAIAAgMIgGAAQgGABgCgCQgCgBAAgEIAAgxIAQAAIAAgLIgQAAIAAgXIgNAAIAAAXIgNAAIAAALAqOCRQAFgFAJAAQAGAAAEACQADACABAEQABAEAAAFIAAAzIANAAIAAg5QAAgMgHgFQgHgGgMAAQgHAAgHAEQgGADgEAHQgDgHgFgEQgGgDgHAAQgIAAgHAEQgGADgEAHIgBAAIAAgMIgMAAIAABOIANAAIAAgxQAAgCABgDQABgDADgEQACgDAEgCQAEgCAGAAQAIAAADAEQADAFAAAIIAAAzIANAAIAAgxQAAgJAGgFIAAAAArpCCIgWBAIgXhAIgOAAIAfBNIgGAOQgBADgDACQgCACgEAAQgCAAgCgBQgCgBgCAAIAAALQADABACABQACAAACAAQAGAAAEgCQAEgCADgFQADgEADgIIAihYIgOAAAtaCDQgHACgEAFQgFAFAAAHQAAAIAEAEQADAEAGADQAGACAGABQAHACAGABQAFACAEACQAEADAAAFQAAAFgDACQgDADgFAAQgEABgEAAQgFAAgFgBQgFgBgDgEQgDgDAAgGIgNAAQABAKAEAGQAFAFAHADQAHADAJAAQAIAAAIgDQAHgCAFgFQAFgGAAgJQAAgHgEgFQgDgEgGgCQgGgDgGgBQgGgBgGgCQgGgBgEgDQgDgCAAgEQAAgEACgCQADgDADgBQAEAAAEAAQAEAAAEABQAEABADADQADADAAAFIANAAQgBgKgEgFQgEgFgHgDQgHgCgJAAQgHAAgGADIAAAA").cp(),
                    this.shape_5.setTransform(106.8, -4.4), this.addChild(this.shape_5, this.instance_7)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, -30.8, 194.5, 50.3), (a.baloon_animation = function(b, d, e) {
                this.initialize(b, d, e, {}, !0), this.frame_342 = function() {
                    this.stop()
                }, this.timeline.addTween(c.Tween.get(this).wait(342).call(this.frame_342)), this.instance_8 = new a.text_header, this.instance_8.setTransform(110, 43.1, 1.1, 1.1, 0, 0, 0, 97, 33.1), this.instance_8.alpha = 0, this.instance_8._off = !0, this.timeline.addTween(c.Tween.get(this.instance_8).wait(33).to({
                    _off: !1
                }, 0).to({
                    regY: 33.3,
                    scaleX: 1,
                    scaleY: 1,
                    y: 43.3,
                    alpha: 1
                }, 6, c.Ease.get(1)).wait(291).to({
                    x: 100.5,
                    alpha: 0
                }, 6, c.Ease.get(-.99)).to({
                    _off: !0
                }, 1).wait(6)), this.instance_9 = new a.text_1, this.instance_9.setTransform(115.7, 129.4, 1, 1, 0, 0, 0, 105.3, 29.4), this.instance_9.alpha = 0, this.instance_9._off = !0, this.timeline.addTween(c.Tween.get(this.instance_9).wait(77).to({
                    _off: !1
                }, 0).to({
                    y: 119.4,
                    alpha: 1
                }, 5, c.Ease.get(1)).wait(245).to({
                    x: 105,
                    alpha: 0
                }, 6, c.Ease.get(-.99)).to({
                    _off: !0
                }, 1).wait(9)), this.text_2 = new a.text_2, this.text_2.setTransform(123.1, 125.9, 1, 1, 0, 0, 0, 113, -15.2), this.text_2.alpha = 0, this.text_2._off = !0, this.timeline.addTween(c.Tween.get(this.text_2).wait(141).to({
                    _off: !1
                }, 0).to({
                    y: 115.7,
                    alpha: 1
                }, 5).wait(177).to({
                    x: 112.6,
                    alpha: 0
                }, 6).to({
                    _off: !0
                }, 1).wait(2)), this.text_3 = new a.text_3, this.text_3.setTransform(115.7, 185.1, 1, 1, 0, 0, 0, 105.3, -6.2), this.text_3.alpha = 0, this.text_3._off = !0, this.timeline.addTween(c.Tween.get(this.text_3).wait(200).to({
                    _off: !1
                }, 0).to({
                    y: 175.8,
                    alpha: 1
                }, 5).wait(114).to({
                    x: 104.9,
                    alpha: 0
                }, 6).to({
                    _off: !0
                }, 1).wait(6)), this.instance_10 = new a.baloon_upper, this.instance_10.setTransform(113, 4.5, 1, 1, 0, 0, 0, 119, 11), this.instance_10._off = !0, this.timeline.addTween(c.Tween.get(this.instance_10).wait(32).to({
                    _off: !1
                }, 0).wait(304).to({
                    alpha: 0
                }, 6).wait(1)), this.instance_11 = new a.baloon_mid_1, this.instance_11.setTransform(113, 26.5, 1, 1, 0, 0, 0, 119, 11), this.instance_11._off = !0, this.timeline.addTween(c.Tween.get(this.instance_11).wait(32).to({
                    _off: !1
                }, 0).to({
                    scaleY: 1.62,
                    y: 33.4
                }, 2).wait(37).to({
                    scaleY: 3.66,
                    y: 55.8
                }, 6).wait(54).to({
                    scaleY: 6.03,
                    y: 81.8
                }, 9).wait(50).to({
                    scaleY: 7.16,
                    y: 94.3
                }, 10).wait(136).to({
                    alpha: 0
                }, 6).wait(1)), this.instance_12 = new a.baloon_lower, this.instance_12.setTransform(113, 57, 1, 1, 0, 0, 0, 119, 19.5), this.instance_12._off = !0, this.timeline.addTween(c.Tween.get(this.instance_12).wait(32).to({
                    _off: !1
                }, 0).to({
                    y: 70.7
                }, 2).wait(37).to({
                    y: 115.5
                }, 6).wait(54).to({
                    y: 167.5
                }, 9).wait(50).to({
                    y: 192.7
                }, 10).wait(136).to({
                    alpha: 0
                }, 6).wait(1)), this.instance_13 = new a.baloon_all, this.instance_13.setTransform(113.3, 34.6, .65, .65), this.instance_13._off = !0, this.timeline.addTween(c.Tween.get(this.instance_13).wait(22).to({
                    _off: !1
                }, 0).to({
                    scaleX: 1.07,
                    scaleY: 1.07
                }, 5).to({
                    scaleX: 1,
                    scaleY: 1
                }, 4).to({
                    _off: !0
                }, 1).wait(311))
            }).prototype = d = new c.MovieClip, d.nominalBounds = new c.Rectangle(0, 0, 0, 0)
        }(lib = lib || {}, webmd.p.symptomcheckerFlashImages, createjs = createjs || {});
        var lib, createjs
    }
    if (define("../easeljs/value_prop", function() {}), window.HTMLCanvasElement) {
        ! function(a, b, c) {
            var d;
            (webmd.p.symptomcheckerLibs.FemaleBodyParts.SCBodyMap = function(a, b, d) {
                null == d && (d = !1), this.initialize(a, b, d, {
                    all: 1,
                    abdomen: 2,
                    head: 14,
                    neck: 26,
                    chest: 38,
                    pelvis: 50,
                    legs: 62,
                    arms: 74
                }, !0), this.frame_0 = function() {
                    this.stop()
                }, this.frame_1 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(1)
                }, this.frame_7 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(2)
                }, this.frame_13 = function() {
                    this.gotoAndStop("all")
                }, this.frame_19 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(3)
                }, this.frame_25 = function() {
                    this.gotoAndStop("all")
                }, this.frame_31 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(4)
                }, this.frame_37 = function() {
                    this.gotoAndStop("all")
                }, this.frame_43 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(5)
                }, this.frame_49 = function() {
                    this.gotoAndStop("all")
                }, this.frame_55 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(6)
                }, this.frame_61 = function() {
                    this.gotoAndStop("all")
                }, this.frame_67 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(7)
                }, this.frame_73 = function() {
                    this.gotoAndStop("all")
                }, this.frame_79 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(8)
                }, this.frame_85 = function() {
                    this.gotoAndStop("all")
                }, this.timeline.addTween(c.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(6).call(this.frame_13).wait(6).call(this.frame_19).wait(6).call(this.frame_25).wait(6).call(this.frame_31).wait(6).call(this.frame_37).wait(6).call(this.frame_43).wait(6).call(this.frame_49).wait(6).call(this.frame_55).wait(6).call(this.frame_61).wait(6).call(this.frame_67).wait(6).call(this.frame_73).wait(6).call(this.frame_79).wait(6).call(this.frame_85)), this.shape = new c.Shape, this.shape.graphics.f("#DBEDF7").s().p("Axk4mMAjJAAAMAAAAxNMgjJAAAMAAAgxN").cp(), this.shape.setTransform(112.5, 157.5), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.shape
                    }]
                }).to({
                    state: []
                }, 1).wait(85)), this.shape_1 = new c.Shape, this.shape_1.graphics.f("#000000").s().p("AD4gTQAFAAAEADQADACABAFQABAEAAAFQAAABAAADQgBAEgCADQgBADgDACQgCACgEAAQgGAAgDgDQgDgDgCgEQgBgEAAgEQAAgEABgFQABgEADgDQADgDAGAAIAAAAAD0ggQgEACgCACQgCADgCACIAAAAIAAgJIgQAAIAABXIARAAIAAghQABABACADQACACADACQAEABAGAAQAHAAAFgCQAFgDADgFQAEgFABgGQACgGAAgFQAAgLgEgHQgEgIgGgDQgGgEgHAAQgFAAgEACIAAAAADCgeQgEgCgEgBQgFgBgDAAQgHAAgGACQgGABgEAFQgFAFgBAKIAQAAQABgCAAgCQABgDACgBQADgBAEAAQACAAADAAQACAAACACQACACAAADQAAADgCABQgCABgCAAIgPACQgGABgEADQgEACgCACQgDAFAAAGQAAAGADAFQADAEAEACQAFABAFAAQAFAAAEgBQAEgCADgCQACgCACgCQABADAAABQAAACABACIASAAIAAgDQgBAAgBgBQgBgBAAgCQgBgCAAgEIAAggQAAgGgCgEQgDgEgEgBIAAAAAC3AAQADAAABAAIAAAHQAAAEgCADQgDACgDACQgDABgEAAQgCAAgCAAQgBgBgCgCQgBgBAAgDQAAgEACgCQABgCADAAQACgBADgBQAGgBACgBIAAAAABFgoIAQBGIARAAIARhGIAABGIARAAIAAhUIgbAAIgPBCIAAAAIgQhCIgaAAIAABUIARAAIAAhGIAAAAAgUANIgBAAIgNgtIgTAAIAXBAQAAAFgCACQgBACgCAAQgCABgEAAQgBAAAAAAQgBAAgBAAIAAANQACAAACAAQACAAACAAQAFAAAEAAQADgBADgDQACgDACgFQADgGACgIIAUg9IgPAAIgNAtAhOg2IAAAeIgBAAQgBgCgCgCQgDgDgDgBQgEgCgFAAQgHAAgGAEQgGADgEAIQgEAHAAALQAAAFACAGQABAGAEAFQADAFAFADQAFACAHAAQAGABAFgDQAFgCADgFIAAAIIAQAAIAAhUIgQAAAjYgvQgDgDgFgCQgFgCgIAAIgqAAIAABUIAlAAQAJAAAFgBQAFgBADgCQADgCACgCQAEgDACgFQABgFABgFQAAgEgCgCQgBgEgDgDQgDgEgFgCQACgBADgBQACgCACgEQACgDAAgGQAAgEgBgDQgCgEgDgEIAAAAAilgiQgIAAgIAEQgHADgFAIQgEAHAAAMQAAAJAEAIQAFAHAHAEQAIADAIAAQAJAAAIgDQAHgEAEgHQAFgIAAgJQAAgMgFgHQgEgIgHgDQgIgEgJAAIAAAAAibgQQAEADABAEQABAFAAAEQAAACgBAEQgBAFgEADQgDADgHAAQgGAAgDgDQgEgDgBgFQgBgEAAgCQAAgEABgFQABgEAEgDQADgEAGAAQAHAAADAEIAAAAAjngXQgEACgFAAIgVAAIAAgSIAUAAQAGgBAEACQADACAAAGQAAAFgDACIAAAAAjvAPIgWAAIAAgVIAXAAQADAAADABQADABACACQABACABACQgBAHgDADQgEADgGAAIAAAAAhPgJQABAFAAAEQAAAEgBAEQgCAEgDADQgDADgGAAQgEAAgCgCQgDgCgBgDQgCgDgBgEQAAgDAAgBQAAgFABgEQABgFADgCQAEgDAFAAQAGAAADADQADADABAEIAAAA").cp(), this.shape_1.setTransform(44.7, 16.3), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.shape_1
                    }]
                }).wait(86)), this.btn_frontview = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_frontview, this.btn_frontview.setTransform(26.4, 291.1, 1, 1, 0, 0, 0, 17.4, 41.1), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.btn_frontview
                    }]
                }).wait(86)), this.btn_backview = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_backview, this.btn_backview.setTransform(26.4, 277.7, 1, 1, 0, 0, 0, 17.4, 27.7), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.btn_backview
                    }]
                }).wait(86)), this.btn_zoomout = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_zoomout, this.btn_zoomout.setTransform(193.4, 279.1, 1, 1, 0, 0, 0, 18.4, 27.1), this.btn_zoomout._off = !0, this.timeline.addTween(c.Tween.get(this.btn_zoomout).wait(2).to({
                    _off: !1
                }, 0).wait(84)), this.btn_selectskin = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_skin, this.btn_selectskin.setTransform(195.5, 277.9, 1, 1, 0, 0, 0, 20.5, 27.9), this.btn_selectskin._off = !0, this.timeline.addTween(c.Tween.get(this.btn_selectskin).wait(1).to({
                    _off: !1
                }, 0).to({
                    _off: !0
                }, 1).wait(84)), this.btn_selectentire_abdomen = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_abdomen, this.btn_selectentire_abdomen.setTransform(112.5, 277.8, 1, 1, 0, 0, 0, 48.6, 27.6), this.btn_selectentire_leg = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_leg, this.btn_selectentire_leg.setTransform(111, 277.8, 1, 1, 0, 0, 0, 31.9, 27.6), this.btn_selectentire_arm = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_arm, this.btn_selectentire_arm.setTransform(77.5, 98.5, 1, 1, 0, 0, 0, 33.5, 27.5), this.timeline.addTween(c.Tween.get({}).to({
                    state: []
                }).to({
                    state: [{
                        t: this.btn_selectentire_abdomen
                    }]
                }, 7).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.btn_selectentire_leg
                    }]
                }, 59).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.btn_selectentire_arm
                    }]
                }, 11).to({
                    state: []
                }, 1).wait(6)), this.btn_selectskin_1 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_skin, this.btn_selectskin_1.setTransform(195.5, 277.9, 1, 1, 0, 0, 0, 20.5, 27.9), this.btn_selectskin_1._off = !0, this.timeline.addTween(c.Tween.get(this.btn_selectskin_1).wait(1).to({
                    _off: !1
                }, 0).to({
                    _off: !0
                }, 1).wait(84)), this.back_top_all = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_all, this.back_top_all.setTransform(110, 150.3, .21, .21, 0, 0, 0, 326.9, 565.3), this.back_top_back = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_back, this.back_top_back.setTransform(117.1, 155.9, 1, 1, 0, 0, 0, 95.5, 128), this.back_top_head = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_head, this.back_top_head.setTransform(109.5, 128.8, 1.4, 1.4, 0, 0, 0, 54.2, 72.9), this.back_top_neck = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_neck_1, this.back_top_neck.setTransform(109.8, 133, 1, 1, 0, 0, 0, 94.3, 40.6), this.back_top_buttock = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_buttock, this.back_top_buttock.setTransform(109.9, 160, .85, .85, 0, 0, 0, 107.8, 71), this.back_top_leg = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_leg, this.back_top_leg.setTransform(117.1, 125.9, .37, .37, 0, 0, 0, 169, 310.4), this.back_top_arm = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_arm, this.back_top_arm.setTransform(112.3, 137.5, .58, .58, 0, 0, 0, 133.2, 206.8), this.timeline.addTween(c.Tween.get({}).to({
                    state: []
                }).to({
                    state: [{
                        t: this.back_top_all
                    }]
                }, 1).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_back
                    }]
                }, 5).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_head
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_neck
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_back
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_buttock
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_leg
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_arm
                    }]
                }, 11).to({
                    state: []
                }, 1).wait(6)), this.back_image_F = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_image, this.back_image_F.setTransform(111, 156, .21, .21), this.timeline.addTween(c.Tween.get(this.back_image_F).wait(1).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 428
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: 1.4,
                    scaleY: 1.4,
                    y: 852
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: 1.4,
                    scaleY: 1.4,
                    y: 714
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 428
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: .85,
                    scaleY: .85,
                    y: 220.3
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: .37,
                    scaleY: .37,
                    y: 21
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: .58,
                    scaleY: .58,
                    x: 226.6,
                    y: 254
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    x: 111,
                    y: 156
                }, 6).wait(1)), this.front_top_all = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_all, this.front_top_all.setTransform(113.9, 149.4, .21, .21, 0, 0, 0, 307.4, 557.1), this.front_top_abdomen = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_abdomen, this.front_top_abdomen.setTransform(104.5, 159.5, 1, 1, 0, 0, 0, 81.3, 96.2), this.front_top_head = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_head, this.front_top_head.setTransform(103.5, 130.4, 1.4, 1.4, 0, 0, 0, 50.5, 73.6), this.front_top_neck = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_neck_1, this.front_top_neck.setTransform(110.5, 141.1, 1.4, 1.4, 0, 0, 0, 54, 41.9), this.front_top_chest = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_chest, this.front_top_chest.setTransform(121.5, 175.5, 1, 1, 0, 0, 0, 97.3, 67.7), this.front_top_pelvis = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_pelvis, this.front_top_pelvis.setTransform(100.2, 250.3, .85, .85, 0, 0, 0, 94.8, 54.5), this.front_top_leg = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_leg, this.front_top_leg.setTransform(119, 110.4, .37, .37, 0, 0, 0, 170.7, 325.9), this.front_top_arm = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_arm, this.front_top_arm.setTransform(120.3, 129.8, .58, .58, 0, 0, 0, 112.8, 190.8), this.timeline.addTween(c.Tween.get({}).to({
                    state: []
                }).to({
                    state: [{
                        t: this.front_top_all
                    }]
                }, 1).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_abdomen
                    }]
                }, 5).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_head
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_neck
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_chest
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_pelvis
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_leg
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_arm
                    }]
                }, 11).to({
                    state: []
                }, 1).wait(6)), this.front_image_F = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_image, this.front_image_F.setTransform(111, 156, .21, .21), this.timeline.addTween(c.Tween.get(this.front_image_F).wait(1).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 317
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: 1.4,
                    scaleY: 1.4,
                    y: 848
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: 1.4,
                    scaleY: 1.4,
                    y: 727
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 470
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: .85,
                    scaleY: .85,
                    y: 212
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: .37,
                    scaleY: .37,
                    y: 21
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    y: 156
                }, 6).to({
                    scaleX: .58,
                    scaleY: .58,
                    x: 225.5,
                    y: 243
                }, 6).to({
                    scaleX: .21,
                    scaleY: .21,
                    x: 111,
                    y: 156
                }, 6).wait(1)), this.instance = new webmd.p.symptomcheckerLibs.FemaleBodyParts.bodyArea_background, this.instance.setTransform(114, 158, 1, 1, 0, 0, 0, 114, 158), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.instance
                    }]
                }).wait(86))
            }).prototype = d = new c.MovieClip, d.nominalBounds = new c.Rectangle(0, 0, 228, 316), (webmd.p.symptomcheckerLibs.FemaleBodyParts.Back_Large_F = function() {
                this.initialize(b.Back_Large_F)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 768, 1382), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_view_over = function() {
                this.initialize(b.back_view_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_view_up = function() {
                this.initialize(b.back_view_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.body_bkd_shadow = function() {
                this.initialize(b.body_bkd_shadow)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 15, 316), (webmd.p.symptomcheckerLibs.FemaleBodyParts.Front_Large_F = function() {
                this.initialize(b.Front_Large_F)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 768, 1382), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_view_over = function() {
                this.initialize(b.front_view_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_view_up = function() {
                this.initialize(b.front_view_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_abdomen_over = function() {
                this.initialize(b.select_entire_abdomen_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_abdomen_up = function() {
                this.initialize(b.select_entire_abdomen_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_arm_over = function() {
                this.initialize(b.select_entire_arm_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_arm_up = function() {
                this.initialize(b.select_entire_arm_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_leg_over = function() {
                this.initialize(b.select_entire_leg_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_leg_up = function() {
                this.initialize(b.select_entire_leg_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_skin_over = function() {
                this.initialize(b.select_skin_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.FemaleBodyParts.select_skin_up = function() {
                this.initialize(b.select_skin_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.FemaleBodyParts.zoom_out_over = function() {
                this.initialize(b.zoom_out_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.FemaleBodyParts.zoom_out_up = function() {
                this.initialize(b.zoom_out_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_pelvis = function() {
                this.initialize(), this.shape = new c.Shape, this.shape.graphics.f("rgba(243,119,37,0.498)").s().p("AIOjSQgQgXgOgOQiWBHh0AgQh7AihwAAQiGAAhugbQiEggh/hMQgWAhgcA8QBmAvBzCbQBQBtApBZIG2AAQBEiaBZhnQBQheBog9QgJgLgYgjIAAAA").cp(), this.shape.setTransform(55.9, 24.9), this.addChild(this.shape)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 111.8, 49.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_hips = function() {
                this.initialize(), this.shape_1 = new c.Shape, this.shape_1.graphics.f("rgba(243,119,37,0.498)").s().p("AN8niIAcgMIA6C8QA8DSAHBvQAKC0AUEsQhTgKhShEQiliHAAkeQAAkfBXiCQAcgpAggUIAAAAAt7niQAgAUAcApQBXCCAAEfQAAEeilCHQhSBEhTAKQAUksAKi0QAHhvA8jSIA6i8IAcAM").cp(), this.shape_1.setTransform(107.5, 49.5), this.addChild(this.shape_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 215, 99), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_groin = function() {
                this.initialize(), this.shape_2 = new c.Shape, this.shape_2.graphics.f("rgba(243,119,37,0.498)").s().p("AGoD5QhhBHhzArIhgAdQAti1Bki9QDIl4ETglQgDGdk1DjIAAAAAjTFrQhzgrhhhHQk1jjgDmdQETAlDIF4QBkC9AtC1Ihggd").cp(), this.shape_2.setTransform(73.6, 39.3), this.addChild(this.shape_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 147.3, 78.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_genitals = function() {
                this.initialize(), this.shape_3 = new c.Shape, this.shape_3.graphics.f("rgba(243,119,37,0.498)").s().p("ACyhNQAWg0AQghImvgBQATApAXA3QAvBsASBKQAHAcArAMQAdAJAoAAQAoAAATgHQAegKAJgeQAahdArhlIAAAA").cp(), this.shape_3.setTransform(21.7, 16.4), this.addChild(this.shape_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 43.4, 32.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_neck_2 = function() {
                this.initialize(), this.shape_4 = new c.Shape, this.shape_4.graphics.f("rgba(243,119,37,0.498)").s().p("AFwiUQgEAdgeBmQgcBfAAAHQAAAaAPAdQAaAzBDA0QBCA0A8AcQpXC/ngi/QAZgLAfgTQBAgpAngtQAtg0Aeg6QgYhAgVhYQgri3APiIQgbgMgIgPQgBgEgDgNQCBB5C+BaQBiAwBVgwQCehICfhzQgMAJAAADQgBAFgIBgQgIBlgFAgIAAAA").cp(), this.shape_4.setTransform(54.1, 41.9), this.addChild(this.shape_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 108.1, 83.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_toes = function() {
                this.initialize(), this.shape_5 = new c.Shape, this.shape_5.graphics.f("rgba(243,119,37,0.498)").s().p("AXDi2QAFBMAAATQAAAkggAGQgNACgKgEIgJgDIAEAiQADAjgCAHQgDAJgUAHQgWAHgNgFIABASQAAAUgIAMQgJANgRAEQgJABgVgBIgCAHQgCAIgBAKQgCAQgHALQgKARgQABQgRABgUgQQgSgOgCgJQgBgGgEgJIgCgHIgDAJQgCAKAAAIQAAANgPATQgTAYgbAAQggAAgcgaQgegbgUg0QgTgsgGgaQgFgWgCgJQgCgEACgXQACgRgMgTQgWgjgHhnIIMAAQACAKAAALIAAAAAv0BOQgUBOgqAgQgpAfgqgeQgVgOgSgbQgDgFAAgHIAAgGIgYAgQgdAegRgHQgRgGgIglIgFglQgRAKgUgCQgOgCgNgeQgNgdAFgHQACgDgSgCQgWgCgFgFQgGgGgGgkIgFgkQgXAFgMgKQgJgHgCgbQgCgRAAg0QAAgZACgZIILAAQAAAQAAARQAAAngTAoQgVAtgCASQgIBJgIAhIAAAA").cp(), this.shape_5.setTransform(148, 20.5), this.addChild(this.shape_5)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 296, 41), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_thighs = function() {
                this.initialize(), this.shape_6 = new c.Shape, this.shape_6.graphics.f("rgba(243,119,37,0.498)").s().p("AQky8QAJBdgBC5QAACWAMAvQARA/AVD2QAVDpAABaQAACLgGDSQgHEmgOCgQgIBagdD4QgVCyAABMQAAA4AAAsQAAA9AAAnQAAAbAAARQgGgIgTgPQgegZgpgYQhyhDhhAAQhiABhjBTQgmAfgXAgQgWAdADAMQgThAgFgdQgDgTgCgSQgDgggDgfQg2o8gMhdQgJhAgyjRQgoilgih8QgThHgqjVQgwj5gDgPQgOg/gGhRQgFhFACg8QACgkAFgdQJBjnEqp0QAHAXAHAaQAzDCAMB/IAAAAAhbprQgBBdgPBHQheHVgLBFQgFAkg9DkQg8DggGAxQgWCfgcEPIgPCrQgJBpgGBAQgFAwgDAZQgBAMgDAPQgFAfgMAqQgEgMgOgSQgYgggmgdQhkhRhlAEQhlAEhtBKQgpAcgcAdQgbAcAAAMQgDg0gDgcQAAgCgBgDQgFghgBg+QgBgtACg8QAChBgBgfQgCgngJgqQgWhtgclLQglnGARlRQAQkxAjj0QAcjEgBgeQgEhRAZjaQAUitAZh/QETI2JhDDQgCALAHAHQAKAKgCBZIAAAA").cp(), this.shape_6.setTransform(113.9, 158.4), this.addChild(this.shape_6)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 227.8, 316.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_shins = function() {
                this.initialize(), this.shape_7 = new c.Shape, this.shape_7.graphics.f("rgba(243,119,37,0.498)").s().p("ATAn5QA0EIgKCUQgJCXgUCkQgKBYgQB3QgGA2gNDAQgJCMgEBDIl0AAQgWhgggiIQhgmKgPhAQgsi6gTh1QgnjpAPiTQAFg0ALhpQAKhZAFgoQABANAaAXQAeAaAtAXQB0A9BjgPQBXgNBKhVQBEhPgRgmQgCgGgDgGQACgEABgEQA8BzAzEFIAAAAAotoKQAIDEgFBuQgEBrhVFTQgsC1hFEIQgTBOgbCBIlzAAQgQkIgRjBQgVi0gMhvQgXjNADhhQADhsAljNQAqjrAvhuQACACACACQgCAEgCAFQgDAHARAdQAUAhAeAeQBVBXBigEQBmgFBqhOQApgeAcgfQAYgcACgNQAAAAABAAQAOBXAIDPIAAAA").cp(), this.shape_7.setTransform(126.1, 88.3), this.addChild(this.shape_7)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 252.1, 176.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_knees = function() {
                this.initialize(), this.shape_8 = new c.Shape, this.shape_8.graphics.f("rgba(243,119,37,0.498)").s().p("AQqAMQAFANAvBnQARAmhFBPQhKBVhXANQhjAPh0g9QgsgXgegaQgdgZACgOQAGhEgIgSQgthmgCgEQgrhmgYhUQgDgMAWgeQAXggAmgfQBjhTBiAAQBhgBByBDQApAYAeAaQAcAWAAAHQAADRAGAPIAAAAAnygeQgbBGgVAuQgVAugCAoQgBANgaAdQgcAfgoAeQhrBOhlAFQhjAEhVhXQgegegUghQgRgdADgHQAjhPAOgdQAVgxAEgTQAEgTADg4QACg3AAg1QAAgMAbgbQAcgdApgcQBthKBlgEQBlgEBkBQQAmAeAYAfQAWAegDALQgTBEgeBRIAAAA").cp(), this.shape_8.setTransform(112.2, 35.9), this.addChild(this.shape_8)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 224.4, 71.7), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_feet = function() {
                this.initialize(), this.shape_9 = new c.Shape, this.shape_9.graphics.f("rgba(243,119,37,0.498)").s().p("AWpCJQASArADAXQACAXAEA5IoNAAQgBgKAAgKQgCgdAOhEQAPhEgCgeQgCgggLhRQgLhXgBgXQgBgSgChbQAAgKgBgIIFTAAQARA0AKAZQBZDzAQAfQAZA2AHAOIAAAAAu/giQgIBQAFArQAKBHAAB7IoLAAQAFhCAThCQAIgfBCiLQBCiPAUhBQAIgdAIgaIFGAAQgGBTADAtQACAhgJBXIAAAA").cp(), this.shape_9.setTransform(147.6, 28.4), this.addChild(this.shape_9)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 295.2, 56.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_ankles = function() {
                this.initialize(), this.shape_10 = new c.Shape, this.shape_10.graphics.f("rgba(243,119,37,0.498)").s().p("ASOm9QgFA6gPClQgCAXgBAVQgIBqABAeQAGBuAiA+QANAWAPAaQAJASADAWQADAPgDAmQgDAfAFAIQADAFAUA9QAZBPAQAsIlVAAQgBgPABgiQABgegBgKQgBgjgDgJQgCgMgTgOQgTgPgIgYQgFgSgDgoQgCgbAIgeQAKgnABgLQACgYgVieQgJhCgKhCQgHg2gJg1QgGgsgnipIFzAAQgCAmgCAPIAAAAAtliyQgXB1gIAwQgKA+AFA1QADAeAKAtQAUBTgPAlQgGARgWARQgUAQgCANQgDAOgFAmQgFAvgCAoIlJAAQASg9AUg5QARgvAEgHQACgDAAgtQAAgxADgNQACgLAfhAQAfhAADgVQAFgYgJiwQgBgSgBgRQgKixgEg9QgCgqgCgoIFzAAQgQBKgSBbQgSBYgOBDIAAAA").cp(), this.shape_10.setTransform(128.2, 50), this.addChild(this.shape_10)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 256.4, 100), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_nose = function() {
                this.initialize(), this.shape_11 = new c.Shape, this.shape_11.graphics.f("rgba(243,119,37,0.498)").s().p("ABbCAQgnA1gzADQg1gBglg1Qgcg3AKhLQAGhNAmg2QAZg2AnACQAlABAdA3QAjA1AHBKQAGBKgYA2IAAAA").cp(), this.shape_11.setTransform(11.1, 18.4), this.addChild(this.shape_11)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 22.2, 36.9), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_mouth = function() {
                this.initialize(), this.shape_12 = new c.Shape, this.shape_12.graphics.f("rgba(243,119,37,0.498)").s().p("AiaA3QhBgXAAggQAAgfBBgYQBAgXBaAAQBbAABAAXQBBAYAAAfQAAAghBAXQhAAYhbAAQhaAAhAgYIAAAA").cp(), this.shape_12.setTransform(22, 7.9), this.addChild(this.shape_12)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 44, 15.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_jaw = function() {
                this.initialize(), this.shape_13 = new c.Shape, this.shape_13.graphics.f("rgba(243,119,37,0.498)").s().p("AGfAjIgBAAQiiB3iiBKQhXAxhggxQi+haiBh4QgDgRgDgcQgDgVgBgNQgBgHgBgEQgKiPAfgHQB+A6BeC7QAgA5AsgMQCHg1BdAxQAugNAagrIC7j6QAvglgHBvQARA2gWCVIAAAA").cp(), this.shape_13.setTransform(42.8, 25.3), this.addChild(this.shape_13)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 85.6, 50.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_head = function() {
                this.initialize(), this.shape_14 = new c.Shape, this.shape_14.graphics.f("rgba(243,119,37,0.498)").s().p("AGSiqQAQAbAbBNQAWBBAMB0QAJBbAABOQAAAxgBAoQgLAggugiQgliViIiBQklhuj3B9QhhBXg2C1QgkASgRgVQACgoAChOQAEjAAEguQAJhXAvhYQA8hvBggxQBYguBegQQAvgIAdABQBUAABZAgQBgAiA7A7QA6A6AVAiIAAAA").cp(), this.shape_14.setTransform(48.8, 38.9), this.addChild(this.shape_14)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 97.7, 77.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_face = function() {
                this.initialize(), this.shape_15 = new c.Shape, this.shape_15.graphics.f("rgba(243,119,37,0.498)").s().p("AGEiaQA+DMiwBtQg2AOglg6Qgsgzg2hWIABiKQCXBHCXhBIAAAAAi2BzQglA6g2gOQiwhtA9jMQCXBBCYhHIABCKQg2BWgsAzIAAAA").cp(), this.shape_15.setTransform(40.5, 16.2), this.addChild(this.shape_15)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 80.9, 32.4), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_eyes = function() {
                this.initialize(), this.shape_16 = new c.Shape, this.shape_16.graphics.f("rgba(243,119,37,0.498)").s().p("ADZhqQBDAHAtAkQArAlgEArQgFAsgyAbQg0AahCgHQhEgHgsgkQgrglAFgqQAEgtAzgbQAzgaBCAHIAAAAAhjhXQAzAbAEAtQAFAqgsAlQgsAkhDAHQhDAHgzgaQgygbgFgsQgEgrArglQAsgkBDgHQBDgHAzAaIAAAA").cp(), this.shape_16.setTransform(36.9, 10.9), this.addChild(this.shape_16)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 73.7, 21.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_ears = function() {
                this.initialize(), this.shape_17 = new c.Shape, this.shape_17.graphics.f("rgba(243,119,37,0.498)").s().p("AHsixIANgIQARgHANAIQASANAHA7QAIBBgUAzQgQArgdAnQgcAlgEANQgHAXgMAPQgKAMgHABQgBAAgBADQghhUAfiJIAAgEQAShcArgyIAAAAAnKgmIgCgDQArB7gNBSQgCAAgGADQgJAFgHgNQg5hngXghQgRgXgIg9QgHg6AJgYQASgsATACQAOAAAEABQAHABAEADQAGBJAbBFIAAAA").cp(), this.shape_17.setTransform(56.3, 19), this.addChild(this.shape_17)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 112.6, 38), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_sternum = function() {
                this.initialize(), this.shape_18 = new c.Shape, this.shape_18.graphics.f("rgba(243,119,37,0.498)").s().p("ABomBQhbA6htg6QBXHAh8EfIAAAkQCFhQCGBQIAAgaQhclBA8maQAAgHACgHIAAAA").cp(), this.shape_18.setTransform(13.5, 38.7), this.addChild(this.shape_18)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 27, 77.3), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_chest_side = function() {
                this.initialize(), this.shape_19 = new c.Shape, this.shape_19.graphics.f("rgba(243,119,37,0.498)").s().p("AMTD1QsflGsIFGQgzkNgDhDQAAgEgBgDQD4GxHZo/IAAAkQCFhQCGBQIAAgaQFxHdFKkuQgEAcgCAcQgCAjgcB1QgMA3gJAlIAAAA").cp(), this.shape_19.setTransform(84.4, 24.5), this.addChild(this.shape_19)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 168.8, 49), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_chest = function() {
                this.initialize(), this.shape_20 = new c.Shape, this.shape_20.graphics.f("rgba(243,119,37,0.498)").s().p("ANTFTIgCgDIgEAfQgBAKgBALQlKEwlwneQhck/A8mcQHlAhECEFQgaBdAGBzQA0DAglCiIAAAAAs4ALQAOhwguiDQFfkeGkgNQBVHCh6EcQnZJBj4mzQgBgDgBgBQgBgBgBAAQguiMBFi9IAAAA").cp(), this.shape_20.setTransform(86.7, 53.3), this.addChild(this.shape_20)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 173.4, 106.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_wrist = function() {
                this.initialize(), this.shape_21 = new c.Shape, this.shape_21.graphics.f("rgba(243,119,37,0.498)").s().p("AEgjHQhwh8jUAsQg0CEhIB/QgvBQgrA7QgLAQgaAPQDgANBtCAQAAgigCgVQgEgYAUglQAnhBAjhAQAaguCAjHIAAAA").cp(), this.shape_21.setTransform(28.8, 29.2), this.addChild(this.shape_21)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 57.6, 58.4), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_tricep = function() {
                this.initialize(), this.shape_22 = new c.Shape, this.shape_22.graphics.f("rgba(243,119,37,0.498)").s().p("ADmkFQgKAXhxCYQh6CmgkA8QglA+gqBTQgaAygUAkQgHhdg/g1IGRpTQAkAxA4AkQgGgBgLAZIAAAA").cp(), this.shape_22.setTransform(24.7, 37.2), this.addChild(this.shape_22)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 49.5, 74.3), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_shoulder = function() {
                this.initialize(), this.shape_23 = new c.Shape, this.shape_23.graphics.f("rgba(243,119,37,0.498)").s().p("AD5lxQAwgRAhgCQhJE0i/C7QABABABACQlGFjhFhhQgDg1ACglQAEg0ARhEQAeh1AuhmQBDiaBGgrQBHgrBJgVQAugNBBgIQAYgDBAgXIAAAA").cp(), this.shape_23.setTransform(33.1, 38.9), this.addChild(this.shape_23)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.1, 0, 66.1, 77.9), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_palm = function() {
                this.initialize(), this.shape_24 = new c.Shape, this.shape_24.graphics.f("rgba(243,119,37,0.498)").s().p("AEEATQgQAogOA+QgQBFgBAEQgEAMgJAXQgGAOgBAJQAAABAAABQgzgdglBDQgGgFgMAAQgRAAgHAMQgCADgBACQgygpgvA4QgBgCAAgBQgEgMgNgFQgPgFgNAIQgDACgCABQgVg6g7ATQACgRgYgKQgEgBgEgBQABg2hagcQABgCABgBQAGgMAMg1QAKgqAOgIQARgKgHgcQgFgVgJgMQBahIgciXQAbgPAXgHQA5gTAhgUQDeANBvCBQgBAZgCAjQgGBcgTArIAAAA").cp(), this.shape_24.setTransform(28.8, 31.9), this.addChild(this.shape_24)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 57.7, 63.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_forearm = function() {
                this.initialize(), this.shape_25 = new c.Shape, this.shape_25.graphics.f("rgba(243,119,37,0.498)").s().p("AF2kRQgCAkhBCHQgjBGhbCsQgrBSieD6QgXAjgUAfQhvh8jWAsQAIgXAIgXQBxk7BwkqQBIi/BghqQATgUAQgTQArEQEihKQgOAfgBAjIAAAA").cp(), this.shape_25.setTransform(39, 53.8), this.addChild(this.shape_25)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 78, 107.7), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_fingers = function() {
                this.initialize(), this.shape_26 = new c.Shape, this.shape_26.graphics.f("rgba(243,119,37,0.498)").s().p("AGgEVQAIA1gMASQgNAVgMACQgNABgOgWQgMgRgEgiQgGglgDgHQgHgOgEgXQgEgVACgMQACgKgNgzQgLgugFgNQgBgDgCgCQAlhBAzAbQgCAOAHA7QAHBBAIAhQANA7ADAZIAAAAAiDmdQAEgIAWgNQAXgOAQgCQAKgBAjgXQAMgHAJgHQAcCXhYBIQgDgDgDgCQgKgJgXADQgRACglALQgbAIgRAIQgOAHgFACQgkATgbAIQg/ATgfgVQgfgUgKgWIgEgSQAtgPAogCQAZgCAngTQAPgJAhgUQARgLAigaQAkgdADgHIAAAAAhkhLQBaAcgBA0QgHgCgDAAQgLABgLALQgFAFgiA1QgfAwgSAMQgRALgSAhQgUAkgHAHQgKAKgfAwQgfAsgaAGQgcAGgFgEQgCgKgCgKQgFgRAMgjQANgoAWgUQARgPAfg7QAeg3AMgJQARgMAjgxQAcgrAQgfIAAAAAgmC0QAWgxAfhYQABgEABgEQA7gTAVA6QgJAHgDAMQgHAXgOAnQgUAzgJAMQgIAJgPApQgPAugKAQIgPAzQgTA2gTAPQgVASgZAEQgXADgGgMQgEgJAQgsQAahMAHgaQAOgwAQgdQAagvACgEIAAAAAD0BQQgJAXAAAgQAAAMgOAvQgNAsACAMQABAPgKAvQgJAogKAcQgBAFgDArQgCAegTAPQgXARgMgCQgLgBgGgRQgFgLADgfQAEgsAAgGQAAgPAIgvQAHgwAAgSQAAgVAMg5QAMg3ABgJQACgNgBgIQAxg4AyAqQgBADgCAEIAAAA").cp(), this.shape_26.setTransform(42, 48.9), this.addChild(this.shape_26)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 84, 97.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_elbow = function() {
                this.initialize(), this.shape_27 = new c.Shape, this.shape_27.graphics.f("rgba(243,119,37,0.498)").s().p("AB9CqQgCACgBADQkgBLgrkOQBZhmAehEQEcAIAQDMQgOAagLASQg1BZgHAPIAAAA").cp(), this.shape_27.setTransform(21, 19.2), this.addChild(this.shape_27)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 42, 38.4), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_bicep = function() {
                this.initialize(), this.shape_28 = new c.Shape, this.shape_28.graphics.f("rgba(243,119,37,0.498)").s().p("AD9j4QAQBsAwBBImRJSQhMg/icgFQAFgLAEgKQAWhCAyh9QA8iXAphOQAmhKAjhYQAziBAAg8QAgAvCMhrQBGg2A/g/Qg/B/AVCPIAAAA").cp(),
                    this.shape_28.setTransform(31.7, 52), this.addChild(this.shape_28)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 63.4, 104), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_armpit = function() {
                this.initialize(), this.shape_29 = new c.Shape, this.shape_29.graphics.f("rgba(243,119,37,0.498)").s().p("AgKkxQBuBoAhCUQA1D9ivBqQiihoAKjZQgWigCZiCIAAAA").cp(), this.shape_29.setTransform(14.5, 30.7), this.addChild(this.shape_29)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 29.1, 61.4), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_pelvis_1 = function() {
                this.initialize(), this.shape_30 = new c.Shape, this.shape_30.graphics.f("rgba(243,119,37,0.498)").s().p("APakUQkqJypBDoQABgGABgFIAGgYQgFAFgPAGQgeAKgygBQgwgCglgJIgcgJIgGANQAAABgBACQphjDkTo0QAJgvAKgpQAdh5AziJQAHgUAHgTQNLNdOYtdQAmB6AGARQAYBEAbBiIAAAA").cp(), this.shape_30.setTransform(98.7, 58.2), this.addChild(this.shape_30)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 197.4, 116.4), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_neck = function() {
                this.initialize(), this.shape_31 = new c.Shape, this.shape_31.graphics.f("rgba(243,119,37,0.498)").s().p("AFwiUQgEAdgeBmQgcBfAAAHQAAAaAPAdQAaAzBDA0QBCA0A8AcQpXC/ngi/QAZgLAfgTQBAgpAngtQAtg0Aeg6QgYhAgVhYQgri3APiIQgbgMgIgPQgBgEgDgNQCBB5C+BaQBiAwBVgwQCehICfhzQgMAJAAADQgBAFgIBgQgIBlgFAgIAAAA").cp(), this.shape_31.setTransform(54.1, 41.9), this.addChild(this.shape_31)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 108.1, 83.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_legs = function() {
                this.initialize(), this.shape_32 = new c.Shape, this.shape_32.graphics.f("rgba(243,119,37,0.498)").s().p("EAQggyWQAJBdgBC5QAACWAMAvQARA/AVD2QAVDpAABZQAACNgGDSQgHEmgOCgQgIBagdD5QgVCyAABLQAAEKAAALQABC0AFAPQAFAMAoBXQAqBhAUA+QAnCAAZCJQAnDTgKCeQgJCZgUCkQgKBYgQB3QgGA2gNDAQgODagDAqQgFA7gPClQgMCPACAlQAGBwAiA9QAMAXAPAaQAKASADAVQACAQgDAlQgCAfAEAIQAFAJAeBWQArB8AQArQBYD1ARAfQAaA2AGAOQATArACAXQACAbAFBKQAFBMAAATQAAAlggAFQgNACgKgDIgJgEIAEAjQADAkgCAHQgDAKgUAGQgWAIgNgFIABARQAAAUgIANQgJANgRADQgJACgVgCIgCAHQgCAJgBAJQgCAQgHAMQgKAQgQABQgRACgUgQQgSgOgCgKQgBgGgEgIIgCgIIgDAJQgCALAAAHQAAAOgPATQgTAYgbAAQggAAgcgaQgegcgUgzQgTgtgGgZQgFgXgCgLQgCgEACgXQACgQgMgUQgXgmgHh4QgCgdAOhEQAPhEgCgeQgCgggLhTQgLhXgBgXQgCgSgBhbQgChNgDgaQgCgigCgKQgDgMgSgOQgUgPgHgYQgGgRgCgpQgCgbAHgeQAKgnABgKQADgYgWigQgQh5gSh3QgKhEhal5QhgmKgPhAQgsi6gTh3QgnjpAPiTQAXjJAHg9QALhkgJgVQhDicgDgIQg9idgJhjQg8p2gMhhQgJhBgyjQQgpimghh8QgThHgqjXQgwj4gDgQQgPg+gFhRQgFhGACg7QACglAFgcQJBjnEqp1QAHAYAHAZQAzDCAMCAIAAAAEgBfgpLQgCBdgOBHQhfHYgKBEQgFAkg9DkQg8DggHAyQgVCegdEQIgPCqQgPC3gHA7QgHBAgsCBQgkBqghBKQgYA0AAAtQgBAYAMBIQAKA7AECfQAECjgFB+QgFBrhUFVQgtC1hFEIQgdB7gzD5QgzD2gLBKQgKBBAEA0QADAfAKAtQAUBSgPAmQgGAQgWASQgTAQgDAMQgFAagGBXQgHBkADAyQACAhgJBXQgIBSAFArQAKBQAACTQAAAngTApQgVAsgCATQgIBKgIAiQgUBNgqAgQgpAggqgeQgVgPgSgbQgDgEAAgHIAAgGIgYAfQgdAegRgGQgRgGgIgmIgFgkQgRAKgUgDQgOgBgNgfQgNgcAFgHQACgEgSgCQgWgCgFgFQgGgGgGglIgFglQgXAFgMgKQgJgHgCgaQgCgRAAg0QAAhcAZhbQAJgfBCiNQBCiPAThBQA9jRAJgNQADgEAAgtQAAgxACgMQACgLAfhBQAfhAAEgUQAFgYgKiyQgLjPgEhCQgSk9gUjfQgUi0gNhvQgWjPADhhQAEh5AkjKQAkjLAihSQASguArhfQAehBAEgWQAGgfAChiQAChlgFggQgKg5AFiPQAChCgCgeQgBgngJgrQgXhsgblMQgmnGASlSQAQkyAjj0QAcjDgCgeQgEhSAZjaQAUitAZh+QEUI1JhDDQgCAMAGAHQAKAKgBBYIAAAA").cp(), this.shape_32.setTransform(148, 359.4), this.addChild(this.shape_32)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 296, 718.9), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_head_1 = function() {
                this.initialize(), this.shape_33 = new c.Shape, this.shape_33.graphics.f("rgba(243,119,37,0.498)").s().p("AGWoLQAQAbAbBNQAWBAAMB3QAJBbAABOQAABMgCA1IAPgJQARgHANAIQASANAHA7QAIBBgUA1QgQArgdAnQgcAlgEANQgHAXgMAPQgKAMgHABQgEAAgDAkQgEApgBAFQgCAHgLAJQiiB3iiBKQhWAwhhgwQi+haiBh5QgDgQgDgeQgHg4AAgBQgBgCgIAFQgJAFgHgNQg5hngXghQgRgZgIg9QgHg6AJgYQASgsATACQAOAAAEABQAJACAGAFQAEAEAEiiQAEjAAEgtQAJhZAvhZQA8hvBggxQBYgtBegQQAvgJAdABQBUAABZAgQBgAjA7A6QA6A7AVAiIAAAA").cp(), this.shape_33.setTransform(56.3, 74.2), this.addChild(this.shape_33)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 112.6, 148.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_chest_1 = function() {
                this.initialize(), this.shape_34 = new c.Shape, this.shape_34.graphics.f("rgba(243,119,37,0.498)").s().p("ANGAfQA0DCglCiIgCgDIgEAfQgEAngDAoQgDAjgbB1QgNA3gIAlQsflHsIFHQgzkPgDhDQAAgIgDgDQgBgBgBAAQguiMBFi9QAQiDhAiaQC/i9BJk0QAGAAAFAAQAaABAjgPQHhC/JWi/QAGADAFACQAwAVBHAQQAFABAEABQgFE9DAChQgoBsAHCKIAAAA").cp(), this.shape_34.setTransform(87.2, 73.8), this.addChild(this.shape_34)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 174.4, 147.7), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_arms = function() {
                this.initialize(), this.shape_35 = new c.Shape, this.shape_35.graphics.f("rgba(243,119,37,0.498)").s().p("ASO7oQApBWAaBeQAIAeAOBAQACAMACA+QACBPACAVQAFBIAtBsQAXA5ByD1QAVAuAfBQQAjBdAEAIQAvByAkApQCOCjAeAsQAQAYAoBeQAXA3AzB5QANAgCGFoQB1E9AXAnQAHALBFB8QAyBYAMAMQAQAOAQAJQAOAIAYAHQAVAHAhARQAQAIAyAcQAsAYAqAOQAJAEAQARQAUAVAJAHQAZAUAkAYQAvAfAWAIQATAGAlAFQAqAGADAAIAeAGQAKACACABQAGADgCAIQgCANgPAHQgGAQgQAOQghAcg1gFQg1gGgdgVIgTgVQgpgKgbgKQgrgQgPAHQgMAGgEAFQgHAIgBAQQgDAYACANQACAUANAUQAVAhAQAwQAIAYABACQAFALAJAOQANAVAWAfQAaAmAGAGQATATAOAfQAGAOAiAvQAnA3ABACQAKAQAJAbQALAggEALQgFANgVAEQgWADgNgKQgVgQg/hjQghgygogsQgPgQglg8QgLgTgEgIQgIgNgFAAQgPAAgDABQgNABgGAIQgHAJgCAIQgBAHACAKQAOAqAOAgQAFAMAPAdQANAZACAFQADAIATBDQAFAPAGALQAHALABADIAXBBQADAKAJARQAIAPABAFQADAXgCAJQgGAWgegEQgfgEgMgXQgLgegHgQQgag8gTgdQgLgRgPgjQgQgngGgNQgGgPgOglQgOgqgDgHQgHgSgDgFQgEgIgGgCQgJgCgMAGQgOAHAAALQgCAPADAlQADArAGAQQAFAPADAYQABAOACAbQABANAHAlQAGAjABAGQADAaAAAgQABAxgIAIQgKAKgRgFQgTgGgKgUQgJgQgFgsQgHgvgDgJQgGgRgHgjQgHgegBgMQgHhLgGgOQgEgLgDgaQgEgXAAgKQAAgIgLgLQgLgLgOgFQgNgEgGAFQgEAEgFANQgCAHgIAzQgIAzgDAHQgUA3gBAWQgCAcgNAiQgIAUgJAHQgJAJgPgDQgPgCgEgiQgEgeAGgPQAEgHAEgsQAEgrADgGQAEgGADggQAEglADgLQAHgZADgKQAEgSgDgGQgFgOgLgoQgOgxAAgLQAAgNgIgdQgJghgLgXQgKgVgJguQgHgrgCgFQgCgIgEgnQgEgpgCgdQgBgigCgPQgCgYgMgdQgKgciUjxQijkHgjg7QkNnBgYhrQgThRgFgPQgIgXgjhBQiOkPgNgZQgEgHhLhWQhPhbgjg3Qgmg7gzhaIgrhKQAliig0jCQgHiMAohsQjAihAFk9QBqAXAKACQAMACBYAMQBbARAnAjQAyArAWAfQAaAlAwBjIAAAAEgJoggzQhJE0i/C9QBACagQCFQhFC9AuCMQgGgBgLAaQgKAXhxCYQh8CngkA8QglA+gqBTQgsBVgbAtQg0BZgHAPQgRAigBAlQgCAkhBCFQgjBHhbCtQgrBTigD5QimECgfA3QgjBAgmBBQgUAlADAYQAFAmgFBNQgGBdgTAtQgQAogOA9QgQBFgBAFQgEALgJAXQgGAPgBAIQgCAMAHA/QAHBBAIAhQANA7ADAZQAIA1gMASQgNAVgMACQgNABgOgWQgMgRgEgiQgGglgDgHQgHgOgEgXQgEgVACgMQACgKgNgzQgLgugFgNQgEgKgRAAQgRAAgHANQgPAaAAApQAAAMgOAvQgNAsACAMQABAPgKAvQgJAogKAcQgBAFgDArQgCAegTAPQgXARgMgCQgLgBgGgRQgFgLADgfQAEgsAAgGQAAgPAIgvQAHgwAAgSQAAgVAMg5QAMg3ABgJQADgQgDgIQgEgLgNgFQgPgGgNAJQgNAIgEAOQgHAXgOAnQgUAzgJAMQgIAJgPApQgRAugKAQIgPAzQgTA2gTAPQgVASgZAEQgXADgGgMQgEgJAQgsQAahMAHgaQAOgwAQgdQAagvACgEQAWgxAhhYQAJgYgdgLQgNgFgFAAQgLABgLALQgFAFgiA1QgfAwgSAMQgRALgSAhQgUAkgHAHQgKAKgfAwQgfAsgaAGQgcAGgFgEQgCgKgCgKQgFgRAMgjQANgoAWgUQARgPAfg7QAeg3AMgJQARgMAjgzQAegtAQggQAGgLAMg2QAKgpAOgJQARgKgHgdQgGgbgOgLQgKgJgXADQgRACglALQgbAIgRAIQgOAHgFACQgkATgbAIQg/ATgfgVQgfgUgKgWIgEgSQAtgPAogCQAZgCAngTQAPgJAhgUQARgLAigaQAkgdADgHQAEgIAWgNQAXgOAQgCQAKgBAjgXQAogZAhgLQBlgiAagkQArg7AvhSQBViVA3ibQBxk7BwkqQBIjABihqQCGiRAdhVQAWhCAyh9QA8iWAohPQCDkAgGhZQgEg9ADgpQAEg0ARhEQAeh1AuhoQBDiaBGgrQBHgrBLgVQAugNBBgIQAYgDBAgXQAwgRAhgCIAAAA").cp(), this.shape_35.setTransform(295.9, 210), this.addChild(this.shape_35)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 591.8, 420.1), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_abdomen = function() {
                this.initialize(), this.shape_36 = new c.Shape, this.shape_36.graphics.f("rgba(243,119,37,0.498)").s().p("AMDqwQgUCGgDA+QgGBagfDZQgLBNgCApQgCAyAIAeQAHAYAoBcQAxBvAOAmQATAyAqCHQAEAMADALQuYNftLtfQAohuAKgpQAThHAihRQAqhlANglQAXhEgEhWQgCgpgUiRQgFgngMh6QgHhSgVhpQgLg6gKg0QMIlHMgFHQgLAxgCAQIAAAA").cp(), this.shape_36.setTransform(88.3, 91.8), this.addChild(this.shape_36)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 176.5, 183.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_abdomen_upper = function() {
                this.initialize(), this.shape_37 = new c.Shape, this.shape_37.graphics.f("rgba(243,119,37,0.498)").s().p("AMHmnQgUCGgEA+QgFBagfDXQgLBNgCApQgCAyAIAgQAHAYAoBcQAUAtAOAgQtBFqrjlqQAEgLAFgMQAqhlANglQAXhGgEhWQgCgpgUiPQgFgngMh6QgHhSgVhpQgLg6gKg0QMIlHMfFHQgKAxgCAQIAAAA").cp(), this.shape_37.setTransform(78.9, 65.3), this.addChild(this.shape_37)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 157.8, 130.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_abdomen_lower = function() {
                this.initialize(), this.shape_38 = new c.Shape, this.shape_38.graphics.f("rgba(243,119,37,0.498)").s().p("AMukbQATAzAqCHQAEAMADALQuYNctLtcQAohvAKgoQAQg9AchEQLjFoNBloQAVAxAIAWIAAAA").cp(), this.shape_38.setTransform(88.3, 35.6), this.addChild(this.shape_38)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 176.5, 71.1), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_neck_2 = function() {
                this.initialize(), this.shape_39 = new c.Shape, this.shape_39.graphics.f("rgba(246,108,19,0.498)").s().p("AFDirQATA9A1AdIFVC8Qh2BYi5A5QjGA9jNAEQjZAEjehCQjNg8h5hbIFJi0QA0gfASg7QALglAJhxIJyAAQAABiANAvIAAAA").cp(), this.shape_39.setTransform(73.7, 31.7), this.addChild(this.shape_39)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 147.3, 63.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_toes = function() {
                this.initialize(), this.shape_40 = new c.Shape, this.shape_40.graphics.f("rgba(246,108,19,0.498)").s().p("AXIAjQAAAXgMALQgTATgkgBIgGATQgIAVgRAGQgbAJgVgMIgHAOQgKAQgRABQgbAEgJgIIgMAMQgNALgUgBQgUgDgQgPQgNgPACgIQAAgEgRAdQgZAdgdAAQhKAAgSgwIgTg4QgggrgGgrQgKg9AIgrQAEgaAOgvQBUAiBAAGQBaAHA0gHQAygIAtgNQAbgIA7gZIAwCGQAKAmgMASIgIANIADAVAu3ACQgFArghArIgTA4QgSAwhKAAQgcAAgZgdQgSgdAAAEQACAIgOAPQgPAPgUADQgUABgNgLIgMgMQgJAIgbgEQgRgBgKgQIgHgOQgWAMgagJQgRgGgIgVIgFgTQglABgTgTQgMgLAAgXIADgVIgIgNQgMgSAKgmIAtiIIBZAjQAuANAxAIQA0AHBZgHQBBgGBVgiQANAvAEAaQAIArgKA9IAAAA").cp(), this.shape_40.setTransform(149.2, 19.2), this.addChild(this.shape_40)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 298.4, 38.4), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_knees = function() {
                this.initialize(), this.shape_41 = new c.Shape, this.shape_41.graphics.f("rgba(246,108,19,0.498)").s().p("AQ6ifQACAdAAAnQAAAZAABNQAAC3gNAaQgdA7hTAgQhGAbhRAAQhZAAgogJQg/gPgnguQhbhvgNiMQgGgxgJgtQgKgoAAgTQgDhHBshEQBshFB1gBQBfgBBkA7QBnA9AGBDIAAAAAmviMQACAkgXBCQgYBMgCATQgKBEgMAiQgTA4gtAtQgwAwg4AVQg0AThJAAQhDAAhSgrQhKgmg2g2QgOgOABgrQAFhAAAgwQAAgTgDhnQgBg8AEgXQAMhEBjg6QBfg5BigDQBfgDB5BGQB+BIABBEIAAAA").cp(), this.shape_41.setTransform(108.4, 34.8), this.addChild(this.shape_41)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 216.9, 69.7), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_hamstring = function() {
                this.initialize(), this.shape_42 = new c.Shape, this.shape_42.graphics.f("rgba(246,108,19,0.498)").s().p("AQ3wJIAEAzQA9HsgLI/QgIG+g5JgQgTgfgbgcQhthviVAAQiZAAhrBvQgoAngZAwQgKAOAAALIgxp4Qhgk4hlpkQg0k0ggj1QAEg7APhhICRBbQCuBbCKgGQCNgGC+iQQBfhJBDhHIAJCgIACgCAiGwnQARBXAEA7QACgCAEAAQg7LjjkLkIgmJ4QgLgNgKgMQgZgwgognQhrhviZAAQiVAAhtBvQgbAcgTAfQhgv/BRxKQACgaACgZIACACIANieQBFBHBhBFQC/COCGACQB6ACCyhPQBagnA/gqIAAAA").cp(), this.shape_42.setTransform(113.6, 119.3), this.addChild(this.shape_42)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 227.1, 238.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_feet = function() {
                this.initialize(), this.shape_43 = new c.Shape, this.shape_43.graphics.f("rgba(246,108,19,0.498)").s().p("AUJkLQgGAUgOAfQgHAPAFAQQAEAPAVA1QAWA5ANA3QAcBqAiBpQAMAgAsBqQgoARgyAQQhmAhg0gBQhLgBhWgZIhHgZQAKh7gEhZQgGiMAKhJQALhdgTguQgEgKgZgnQgRgbgCgUQgCgVAPgsIAOgpIE/ACQAnBAgTBLIAAAAAummYQARBKgNAgIgpBgQgUAuAMBdQAKBJgGCMQgEBZALCHIhIAQQhXAQhLACQg0ABhkgeQgygPgogQQArhqAMggQAihpAchqQANg3AVg5QAWg1ADgPQAGgSgCgNQgHgXgGgcQgIggAMg5IALgyIFIgC").cp(), this.shape_43.setTransform(144.6, 40.9), this.addChild(this.shape_43)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 289.2, 81.9), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_calfs = function() {
                this.initialize(), this.shape_44 = new c.Shape, this.shape_44.graphics.f("rgba(246,108,19,0.498)").s().p("ARsrRQCNEaA0GPQAfDqgREeQgEBOgZDYQgKBQgCBPIoKgCQijongNiRQghliATjMQAOiPAEg8QAChJgKg1QgMhFg0iIQAdA1BPAmQBGAjBAAEQCPAIB6h2QAdghAOg+QALA+AIAmQAPBOAQAhIAAAAAsZrVQA+AABNgpQBOgoAyg4QhLDDgCAOQgQBRAZD3QAUDMghFiQgOCRiVIpIoKAAQgEhbgMhDQgThxgKiwQgRkRAXjYQAjlLCdmDQAkhbAShEIAjAvQByBuCPAAIAAAA").cp(), this.shape_44.setTransform(134.6, 93.4), this.addChild(this.shape_44)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 269.2, 186.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_ankles = function() {
                this.initialize(), this.shape_45 = new c.Shape, this.shape_45.graphics.f("rgba(246,108,19,0.498)").s().p("AT0loQgHA+gCBYIgmG4QgJBzAEAeQAFAuAoBNIABAAQAAAEAAAEIk3AAQhHqahllZIH+AAQgKBEgLBNIAAAAAzzloQgLhNgKhEIH+AAQhlFZhHKaIk3AAQAAgEAAgEIABAAQAohNAFguQAEgegJhzIgmm4QgChYgHg+IAAAA").cp(), this.shape_45.setTransform(128.9, 50.6), this.addChild(this.shape_45)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 257.8, 101.3), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_skull = function() {
                this.initialize(), this.shape_46 = new c.Shape, this.shape_46.graphics.f("rgba(246,108,19,0.498)").s().p("AGrnCQgagzgtgoQgegbgxgkQgxgjgMgLQgUgRgegQQgRgIgpgSQgbgLghgFIgbgCQg+AAg+ASQgxANg4AfQg6AggsAnQAAAAgiApQgkAsgMARQgYAigJASQgPAcgIAgIgkDHQgGApgBBRQAABQAFAqIAOAwQAQAyAJAzQAFAdAMAuQAKAjAGARQACAFAJAnQAJAkAHAPIAOAVQAQAZAFAOQAFANAaBCQAYBEACAlQAAALABALQABAOAAAOIJKAAQAAgFAAgFQABgJAAgJQAFhIASg9QAUhFAXgjQAXgfAKgTQAPgbAZhbQAWhRAKg2QAPhHAFgdQAIgwgCgnQgDhIgDgtQgFhUgKhMQgMhWgfg8IAAAA").cp(), this.shape_46.setTransform(44.6, 79.7), this.addChild(this.shape_46)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-4.6, 6.9, 98.5, 145.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_ears = function() {
                this.initialize(), this.shape_47 = new c.Shape, this.shape_47.graphics.f("rgba(246,108,19,0.498)").s().p("AoZinQADgLAKgDQAKgDAMAHQAKAFANAOIAMAMIAIAlQACAJAMA5QAFAaAQA3QADAKAIAkQAEANAHARQAIAQABAEIAEAQQABAFAEAGIAIAMIgBADQgDACgHADQgJADgKgEQgLgFgIgLQgMgOgKgtQgJgdgFgOQgIgXgIgMQgGgLgPggQgTgogJgRQgMgYgCggQgCgYAFgOIAAAAAIainQAFAOgCAYQgCAggMAYQgJARgTAoQgQAggFALQgIAMgIAXQgFAOgJAdQgKAtgMAOQgIALgLAFQgKAEgJgDQgHgDgDgCIgBgDIAIgMQAEgGABgFIAEgQQABgEAIgQQAHgRAEgNQAIgkADgKQAQg3AFgaQAMg5ACgJIAIglIAMgMQANgOAKgFQAMgHAKADQAKADADALIAAAA").cp(), this.shape_47.setTransform(58.7, 13), this.addChild(this.shape_47)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(4.5, -5.3, 108.4, 36.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_hip = function() {
                this.initialize(), this.shape_48 = new c.Shape, this.shape_48.graphics.f("rgba(246,108,19,0.498)").s().p("AKlldQAOiFArhtIBPgCQBOCiAqBrQA/ChAcCGQAXBvAOCRQAJBsAICoIhqBPQhniRhBiRQgOgdg5iWQgohogRisQgJhYAKhiIAAAAAqmlcQANBtgIBVQgGA6gRBPQgJAsgUBXQgtC7jIEmIhrhNQAOk1BHkiQBDkWBxjrIBLAFQArBoAQCJIAAAA").cp(), this.shape_48.setTransform(107.9, 59.6), this.addChild(this.shape_48)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 215.7, 119.1), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_buttock = function() {
                this.initialize(), this.shape_49 = new c.Shape, this.shape_49.graphics.f("rgba(246,108,19,0.498)").s().p("ALzqOQnYgvj8gHQicgElKAdQilAOiGAPQBhESg6EmQg5EljTEqQG5GoIknnQJMH0GGm1QjWlAg6kmQg6kmBlj7IAAAA").cp(), this.shape_49.setTransform(98.4, 71), this.addChild(this.shape_49)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 196.9, 141.9), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_upper_spine = function() {
                this.initialize(), this.shape_50 = new c.Shape, this.shape_50.graphics.f("rgba(246,108,19,0.498)").s().p("AhdpnQAbABA+AAQABgBADAAQACAAADABQA8AAAbgBQAcgCAZgEQgwHhgEB7QgFB6gIDEIAFFBIixAAQAHkZAAgoQAAgXgGhpQgIiUgCgqQgEh7gnnhQAXAEAcACIAAAA").cp(), this.shape_50.setTransform(14.6, 62.2), this.addChild(this.shape_50)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 29.1, 124.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_lower_spine = function() {
                this.initialize(), this.shape_51 = new c.Shape, this.shape_51.graphics.f("rgba(246,108,19,0.498)").s().p("AB6mrQAOGbAwE2QABAEgCACQADAfAHA4QAFApgBAAImJAAQAPicASi5QAil0AFiOID2AA").cp(), this.shape_51.setTransform(19.7, 42.8), this.addChild(this.shape_51)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 39.5, 85.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_back = function() {
                this.initialize(), this.shape_52 = new c.Shape, this.shape_52.graphics.f("rgba(246,108,19,0.498)").s().p("ANEpTQAAABAAABIAhBdQAEAGABAIIgHAuQgLBOAAAxQAAA4gYCeQgYCVgSBIQgRBEgUBlQgUBngGA3QgIBKgbDiQgJBUgBARQgCA4AMAuQAGATALAiIAAABIBuE8Ig9ABQgEAAgDAAQgPAAgRAAIoCAAQgHgSAAgIQAAgOgKg4QgLhFgFgzQgWi2AAgeQgZmMgDhUQgEg9gBipQgCinACg4QAAhQAGiWQAHi5AGhBQAelwAGgxIAdkmQDYgcCphBQAaC9AiBcQAbBMA8CPQA9CWAUAmQAKARAMAWIAAAAAp7wRQASg0ARhtQAJg4AHhAQCjA+DpAfIA5LHQAGBEAIC2QAHCgABBGQACA4gCCnQgCCpgDA9QgCBEgLCtQgJC1gHA6QgCAXgWC9QgQCSgCAsIAAAaIoMAAQgRAAgOAAQgEAAgFAAIg8gBIBuk8IAAgBQAMgiAFgTQANgugDg4QAAgRgKhUQgbjigIhKQgFg3gUhnQgVhlgQhEQgShIgZiVQgXieAAg4QAAgkgLg6QgNg9gEgVQAGgKACgFIA5iCQAWgmA/iWQA+iTAahIIAAAA").cp(), this.shape_52.setTransform(87.5, 132.3), this.addChild(this.shape_52)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 174.9, 264.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_wrist = function() {
                this.initialize(), this.shape_53 = new c.Shape, this.shape_53.graphics.f("rgba(246,108,19,0.498)").s().p("AEnhwIlZiNQg/CDgoBEQgpBChkBvQCBBGA7AYQA7AXAwAOQBtimA5hFQA5hCBHhBIAAAA").cp(), this.shape_53.setTransform(29.5, 25.4), this.addChild(this.shape_53)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 59.1, 50.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_upper_arm = function() {
                this.initialize(), this.shape_54 = new c.Shape, this.shape_54.graphics.f("rgba(246,108,19,0.498)").s().p("AG5m9QhZgph3AIQh6AKhkAnQgwATgbASIhDBvQhJB3gaAmQgqA9ibDjQgbAjg0A3QAmgQAygHQBmgMBBA2QBCA2ASBSQAIApgEAeQAcgjApgtQBThbA/g1QBGg7BNhVQA9hGAxhCQApg4A2hmQA0hjAOgsQALgjAOgYQAHgMAFgFQgVgXgtgVIAAAA").cp(), this.shape_54.setTransform(50.8, 48.1), this.addChild(this.shape_54)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 101.5, 96.1), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_shoulder = function() {
                this.initialize(), this.shape_55 = new c.Shape, this.shape_55.graphics.f("rgba(246,108,19,0.498)").s().p("AGkmHQgNgFgcgPQgagOgWgHQgSgGgpAKQgWAFgoAJQgVAEhmASQhkAZg5A1QhiBdhGCNQg2BngaBoQgGAUgPBHQgRBFgOAhQgVA2geA+QAigUA0gTQBngnBWACQBWABBrAiQA2ARAmARQC7mQAhheQAZhKAVhgQAWhxgHgrIAAAA").cp(), this.shape_55.setTransform(42.2, 43.6), this.addChild(this.shape_55)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 84.5, 87.2), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_hand = function() {
                this.initialize(), this.shape_56 = new c.Shape, this.shape_56.graphics.f("rgba(246,108,19,0.498)").s().p("AD9BFIAbibQAGghANgPIkmiJIgcgKQgLAbgQAhQghBBgYAdQgoAwg6A1IhdCfQAQASAeAYQA8AvBFAZQBJAdBeAEQBIAFAggHQARgDAjhLQAqhgALgjIAAAA").cp(), this.shape_56.setTransform(30, 28.3), this.addChild(this.shape_56)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 60, 56.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_forearm = function() {
                this.initialize(), this.shape_57 = new c.Shape, this.shape_57.graphics.f("rgba(246,108,19,0.498)").s().p("ACqjiQBRAoBegHQAugCAfgLQiLD1hIBlQhIBkjaEVIlWiNIC7mGQAwhnAjhFQBAh+AvhAQBJhmA5gmQgMA5AFBAQAICCBPAnIAAAA").cp(), this.shape_57.setTransform(42.3, 51.8), this.addChild(this.shape_57)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 84.6, 103.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_fingers = function() {
                this.initialize(), this.shape_58 = new c.Shape, this.shape_58.graphics.f("rgba(246,108,19,0.498)").s().p("ACroFQAEgOgTADQhWAAgvARQgXAJgdARQgXANgHABQgRADgogCQgsgCgSgGQgngNgKAEQgLACgLAbQgBAQAHASQAMAlAhAOQAcAOAjgBQAhgDARABQABAAABAAQAZACAWAPQAUAPAGAOIAFAkQBKg4AbguQBAhuALgZIAAAAAiOhDQgoA2gPAVQgRAbhOBbIgfAmQggArAAAVQgBAbAaAIQAaAJAXgZQACAAAAgBQB3iNATgZIBKhKQAagGAMAHQALAGgBAWQgDAUgNAbQgPAhhwDXIgdA2QgVA3AZAQQABAAABABQAeAMAvg/QAOgUAZgtIAWgnQATglAOgdIA5hlQARgpATAEQAIACgBAfQgBAegKAgIg4DzIgGAtQAEAuAbACQAKAGARgSQAggiAYhwQAYhuATg6QAOgjADgJQAJgYAOACIAJAGQAIAMAAAZQAAAwATC2QACAsAKATQAJATAUgBQAngDAAh4QAHjwAAgaIAXhFQiRAJhXgcQh4gkgugjQgbgVgjgoQAAgBgmA1IAAAA").cp(), this.shape_58.setTransform(35.6, 53), this.addChild(this.shape_58)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 71.3, 106), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_elbow = function() {
                this.initialize(), this.shape_59 = new c.Shape, this.shape_59.graphics.f("rgba(246,108,19,0.498)").s().p("ADogIQAChahChDQhBhChdAAQhZAAhABCQgXAWgjAYQgaAWgCAlQgPCrBIA9QBCA4BYAEQAtACBKgQQAbguAfg6QAIgPAogsQAbgdgCgiIAAAA").cp(), this.shape_59.setTransform(23.3, 23.2), this.addChild(this.shape_59)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 46.6, 46.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_neck = function() {
                this.initialize(), this.shape_60 = new c.Shape, this.shape_60.graphics.f("rgba(246,108,19,0.498)").s().p("AEqieQARA5AxAaIE7CuQhuBRiqA0Qi3A5i9ADQjHAEjNg9Qi9g3hwhUIEwimQAvgdARg2QAKgiAIhoIJCAAQAABaAMArIAAAA").cp(), this.shape_60.setTransform(67.9, 29.2), this.addChild(this.shape_60)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 135.9, 58.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_legs = function() {
                this.initialize(), this.shape_61 = new c.Shape, this.shape_61.graphics.f("rgba(246,108,19,0.498)").s().p("EAQygz1IAJCcIACgCIAEAxQA9HegLIwQgHGwg5JOQACAGAAAHQACAYAACxQAABzgFA1QABgDAAgDQALA/AHAmQARBNAPAgQCLEYA1GJQAeDpgSEdQgEBMgZDXQgJBMgCBMIAKAAQgKBFgLBOQgIBAgCBaIgmHEQgKB2AEAeQAGAwAoBPIADAAQAAADAAAEIgCAAQAkA+gSBKQgHASgMAfQgIARAFAPQAEAPAVAzQAWA6AMA2QAcBsAjBnQALAgAqBgQACgBABAAIAvCGQAKAngLATIgJANIADAVQAAAYgMALQgUATgkgBIgFARQgIAXgRAGQgbAJgVgNIgHAOQgKAPgSAEQgaACgKgHIgMALQgMANgUgDQgWgBgPgPQgMgQABgIQAAgFgRAeQgaAdgbAAQhMAAgRgxIgTg3QghgsgGgrQgKg+AJgsQAEgZAMgwIACABQAJh0gChVQgHiLAJhLQANhbgUgwQgEgJgZglQgRgcgCgTQgBgVAPgsIAMgoIACAAQhJqlhnlgIgGAAQiiohgMiRQghlgATjHQAOiOACg8QADhJgJgzQgMhFg0iHQAIAOALAOQhHhogRicQgFg0gKguQgKgoAAgTQgBgNAEgMQgGAIAAAIIgxpkQhhkwhlpUQg0ksggjtQADg6APheICSBYQCuBZCKgGQCPgFC+iNQBfhHBEhFIAAAAEgB+gx4QAQBUAEA6QADgCADAAQg7LNjkLSIglJeQAAAFAAAGQABAjgWBEQgZBPgDATQgLBQgJAjQgOAygaAlQhFCzgDAMQgPBSAYD1QAUDHghFhQgNCQiSIhQhoFghHKnIACAAQARBJgOAgIgoBdQgTAwAMBbQAKBLgHCLQgDBUAPB0QAOAwAEAZQAHAsgJA+QgGArggAsIgTA3QgSAxhKAAQgdAAgZgdQgRgeAAAFQACAIgOAQQgPAPgVABQgTADgOgNIgLgLQgKAHgagCQgSgEgKgPIgHgOQgWANgagJQgSgGgHgXIgFgRQgmABgTgTQgLgLAAgYIABgVIgHgNQgMgTAKgnIAviHIABABIAzh/QAjhnAbhsQANg2AWg6QAUgzAFgPQAFgSgDgOQgHgWgFgbQgIghAMg4IALgxIADAAQAAgEAAgBIABAAQAohPAGgwQAEgegKh2IgmnEQgChagHhAQgMhOgKhFIADAAQgEhYgLhBQgUhwgJiuQgSkPAXjYQAjlHCal/QAmhaAQhEIADADQgDgUACgbQAChYAAgxQAAgLgBiAQgBhNACgYQAAgDACgBQhhviBSwrQABgYADgZIABACIAOiaQBFBFBiBDQC+CLCIACQB6ACCyhOQBaglBAgpIAAAAALMy9QhhAMhNA+QAAAAAAgBQBVg7BZgOIAAAAEgS2AuwQAmAAAxgEQAggDAngKQhPAPhPACIAAAA").cp(), this.shape_61.setTransform(149.7, 331.8), this.addChild(this.shape_61)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 299.4, 663.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_head = function() {
                this.initialize(), this.shape_62 = new c.Shape, this.shape_62.graphics.f("rgba(246,108,19,0.498)").s().p("AGgm7QAdBFANBZQAKBKAEBTQADAsADBGQACAngIAuQgBAJgCAMIALgMQANgNAKgFQAMgHAJAEQAKACADALQAFAOgCAYQgCAegMAYQgJARgSAnQgPAhgGALQgIAMgIAXQgEANgJAcQgLAtgLAOQgIALgKAEQgLAEgIgDQgDgBgCgBQgBACgCACQgKAUgXAdQgWAjgUBDQgSA9gEBGQAAAJgBAJQAAAFAAAFIo+AAQgBgOAAgOQgBgKgBgMQgCgkgXhCQgahBgEgNQgGgOgPgYIgOgVQgDgIgFgOQgHACgKgEQgKgEgJgLQgLgOgKgtQgJgcgEgNQgJgXgHgMQgGgLgPghQgSgngJgRQgMgYgCgeQgCgYAEgOQAEgLAJgCQAKgEAMAHQAKAFANANIACACIgDgIQgFgpABhOQAAhQAGgnIAjjdQAShEAlg2QAdgoA0gwQAqgmA6gfQA2gfAwgNQA9gSA9AAIAbACQAgAEAaAMQAoARASAJQAdAPATARQANALAvAgQAxAiAdAaQAoAlAeBDIAAAA").cp(), this.shape_62.setTransform(54.1, 72.7), this.addChild(this.shape_62)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 108.3, 145.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_buttock_1 = function() {
                this.initialize(), this.shape_63 = new c.Shape, this.shape_63.graphics.f("rgba(246,108,19,0.498)").s().p("AMwqGIhHADQAAgCABgBQnTgvj5gHQiagElHAcQijAPiEAPIhIgFQhsDjhBEOQhFEXgOErIBmBLQAAAAgBABQG0GjIeniQJEHuGCmtIAAAAIBohOQgHijgKhpQgNiOgXhtQgbiDg+idQgqhohLifIAAAA").cp(), this.shape_63.setTransform(107.5, 70.2), this.addChild(this.shape_63)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 215, 140.4), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_back_1 = function() {
                this.initialize(), this.shape_64 = new c.Shape, this.shape_64.graphics.f("rgba(246,108,19,0.498)").s().p("ANEpVIAiBdQADAHADAIIgJAtQgLBQAAAwQAAA6gYCeQgYCXgSBIQgRBFgUBmQgUBngGA3QgIBLgbDkQgKBVgBAQQgCA6ANAtQAFAUAMAiIAAAAIBvE+Ig9ACQgEAAgFAAQgOAAgRAAIoHAAQAAgCAAgBQAAADgBAAIuNAAQgQAAgPAAQgEAAgEAAIg+gCIBvk+IAAAAQAMgiAGgUQANgtgCg6QgCgQgJhVQgcjkgHhLQgGg3gUhnQgUhmgRhFQgThIgXiXQgZieAAg6QAAgjgLg6QgNg/gEgUQAGgKACgFIA7iDQAUgmBAiYQA+iUAbhIQATg1AQhuQAJg4AHhBQCkA/DpAfQAAAAAAgBQAfAFAkADQAlACBSgBQABgBADAAQAFAAADABQBQABAjgCQAmgDAhgFQAAAGAAAIIAAgNQDZgcCrhCQAaC/AiBdQAcBMA8CQQA+CYAUAmQAKARALAWQAAABAAABIAAAA").cp(), this.shape_64.setTransform(87.6, 133.3), this.addChild(this.shape_64)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 175.3, 266.7), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_arms = function() {
                this.initialize(), this.shape_65 = new c.Shape, this.shape_65.graphics.f("rgba(246,108,19,0.498)").s().p("EAzBAZEQAfAqAAAVQABAbgaAIQgZAIgXgYQgBAAAAgCQh1iKgTgYIhJhJQgZgGgMAIQgKAFABAWQACAUANAZQAPAhBuDSIAcA2QAVA2gYAPQgCAAAAACQgeALgug+QgOgTgYgsIgWgmQgSgkgPgdIg4hkQgSgngSADQgIADABAeQABAeAJAeIA4DvIAFAsQgDAtgbACQgKAGgQgRQgfgigZhuQgXhsgTg4QgNgjgCgIQgKgZgOADIgIAFQgIAMAAAaQAAAugTCyQgCArgJATQgJATgUgBQgngDAAh1QgGjrAAgbIgWhDQADAAACAAQgQgGgihHQgphfgLgkIgcibQgFgggNgPIABgBIAAAAQhtimg5hEQg3hChFg/IgDAAQjekVhHhlQhIhliMj1QAEABAEACQgbgtgcg4QgIgPgogrQgVgXgEgbQAAAHABAHQhqiGhmhSQhGg6hKhSQhBhHgtg+Qgrg9g2hcQg6hkgNgnQgSg1gSgUQi/mYgjhjQgZhLgVhjQgXhzAIgsQANgFAcgPQAbgPAWgHQATgGAqAKQAXAFAoAKQAWAEBoARQBpAaA6A3QBlBfBHCQQA2BrAcBrQAFAUAQBJQASBHANAhQAXA4AeA+QgjgTg2gUQhLgchBgIQBRANBHAcQAxASAZASIBBBrQBHByAaAmQAnA7CXDeQAaAhAyA2QgHgDgIgDQAcAPAZAZQAWAWAjAYQAZAVADAmQAFA/gGAxQACgOABgQQAFhBgLg5QA4AnBLBmQAwBABAB+QAiBDAxBoIC6GGIAFgCQA+CCApBFQAoBDBfBqIAdgFQABACACADQACgGAMADQBVAAAtAQQAZAJAcARQAYANAHAAQAQADAmgBQAsgCARgHQAngNAKAEQAKADALAaQABAPgHATQgMAjggAPQgcANghAAQghgEgQABQgBAAgBAAQgZADgVAPQgUANgGAOIgFAjQgBgBAAAAQADACACADIBbCeQABgCACgCQAAAAAkAzQAoA2AOAVQARAbBLBaIAgAkAehhNQgHAHgHAHQgIAHgJAGQASgLANgQIAAAAEAu8AVcQgQAMgPALQAJgFAHgGQAHgFAIgHIAAAAEgucAVrQgPgLgQgMQAIAHAHAFQAHAGAJAFIAAAAA+fhVQANAQARALQgJgGgIgHQgHgHgGgHIAAAAAqi+nQAVAHAbAPQAdAPANAFQAIAsgYBzQgUBjgaBLQgjBji+GYQgTAUgRA1QgNAng6BkQg3BcgrA9QgtA+hBBHQhKBShGA6QhlBShqCGQABgHAAgHQgFAbgUAXQgoArgIAPQgdA4gaAtQADgCAFgBQiMD1hIBlQhIBljeEVIgDAAQhEA/g3BCQg6BEhsCmIgBAAIACABQgOAPgFAgIgcCbQgLAkgpBfQgiBHgQAGQADAAADAAIgXBDQAAAbgGDrQAAB1gnADQgUABgJgTQgIgTgDgrQgTiyAAguQAAgagIgMIgIgFQgOgDgKAZQgBAIgOAjQgSA4gXBsQgZBuggAiQgPARgLgGQgbgCgDgtIAGgsIA3jvQAJgeABgeQACgegJgDQgSgDgSAnIg4BkQgOAdgTAkIgVAmQgZAsgOATQguA+gegLQAAgCgCAAQgXgPAUg2IAcg2QBujSAPghQANgZACgUQABgWgKgFQgMgIgZAGIhJBJQgTAYh1CKQAAACAAAAQgXAYgagIQgagIABgbQAAgVAfgqIAggkQBLhaASgbQANgVAog2QAlgzAAAAQABACABACIBbieQACgDADgCQAAAAgBABIgFgjQgGgOgUgNQgVgPgZgDQAAAAgCAAQgQgBggAEQgiAAgcgNQgggPgMgjQgHgTABgPQALgaAKgDQALgEAmANQARAHAtACQAmABAPgDQAHAAAYgNQAdgRAYgJQAtgQBVAAQAMgDACAGQACgDABgCIAdAFQBfhqAohDQAphFA+iCIAFACIC6mGQAxhoAjhDQA/h+AwhAQBLhmA4gnQgKA5AEBBQABAQADAOQgHgxAGg/QACgmAZgVQAjgYAWgWQAZgZAdgPQgJADgHADQAzg2AZghQCXjeAng7QAagmBHhyIBBhrQAagSAwgSQBHgcBRgNQhBAIhLAcQg1AUgjATQAeg+AWg4QANghAShHQAQhJAGgUQAbhrA2hrQBIiQBkhfQA7g3BogaQBpgRAVgEQApgKAXgFQApgKAUAGIAAAA").cp(), this.shape_65.setTransform(329.7, 196.3), this.addChild(this.shape_65)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 659.3, 392.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.txtBubble_bodyAreas = function() {
                this.initialize(), this.shape_66 = new c.Shape, this.shape_66.graphics.f("#FFFFFF").s().p("AhJBFIgFiJICdAAIiYCJ").cp(), this.shape_66.setTransform(19.7, 33.1), this.shape_67 = new c.Shape, this.shape_67.graphics.f("#FFFFFF").s().rr(-29.9, -13.05, 59.8, 26.1, 3), this.shape_67.setTransform(29.9, 13.1), this.addChild(this.shape_67, this.shape_66)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 59.8, 40.1), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_leg_up = function() {
                this.initialize(), this.instance = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_leg_up, this.addChild(this.instance)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_leg_over = function() {
                this.initialize(), this.instance_1 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_leg_over, this.addChild(this.instance_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_arm_up = function() {
                this.initialize(), this.instance_2 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_arm_up, this.addChild(this.instance_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_arm_over = function() {
                this.initialize(), this.instance_3 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_arm_over, this.addChild(this.instance_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_abdomen_up = function() {
                this.initialize(), this.instance_4 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_abdomen_up, this.addChild(this.instance_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_abdomen_over = function() {
                this.initialize(), this.instance_5 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_entire_abdomen_over, this.addChild(this.instance_5)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_zoomout_up = function() {
                this.initialize(), this.instance_6 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.zoom_out_up, this.addChild(this.instance_6)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_zoomout_over = function() {
                this.initialize(), this.instance_7 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.zoom_out_over, this.addChild(this.instance_7)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_selectEntire_on = function() {
                this.initialize(), this.instance_8 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_skin_up, this.addChild(this.instance_8)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_skin_over = function() {
                this.initialize(), this.instance_9 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.select_skin_over, this.addChild(this.instance_9)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_frontview_up = function() {
                this.initialize(), this.instance_10 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_view_up, this.addChild(this.instance_10)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_frontview_over = function() {
                this.initialize(), this.instance_11 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_view_over, this.addChild(this.instance_11)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_backview_up = function() {
                this.initialize(), this.instance_12 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_view_up, this.addChild(this.instance_12)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_backview_over = function() {
                this.initialize(), this.instance_13 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_view_over, this.addChild(this.instance_13)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.bodyArea_background = function() {
                this.initialize(), this.shape_68 = new c.Shape, this.shape_68.graphics.f("#DCEDF7").s().p("AR04rMAAAAxXMgjnAAAMAAAgxXMAjnAAA").cp(),
                    this.shape_68.setTransform(114, 158), this.addChild(this.shape_68)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 228, 316), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_image = function() {
                this.initialize(), this.instance_14 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.Front_Large_F, this.instance_14.setTransform(-383.9, -690.9), this.addChild(this.instance_14)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-383.9, -690.9, 768, 1382), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_image = function() {
                this.initialize(), this.instance_15 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.Back_Large_F, this.instance_15.setTransform(-383.9, -690.9), this.addChild(this.instance_15)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-383.9, -690.9, 768, 1382), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_pelvis = function() {
                this.initialize(), this.front_btn_hip_53 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_hips, this.front_btn_hip_53.setTransform(107.5, -41.4, 1, 1, 0, 0, 0, 107.5, 49.5), this.front_btn_pelvis_32 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_pelvis, this.front_btn_pelvis_32.setTransform(107.7, -49.7, 1, 1, 0, 0, 0, 55.9, 24.9), this.front_btn_groin_34 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_groin, this.front_btn_groin_34.setTransform(107.4, -30.3, 1, 1, 0, 0, 0, 73.6, 39.3), this.front_btn_genitals_35 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_genitals, this.front_btn_genitals_35.setTransform(107.2, -6.7, 1, 1, 0, 0, 0, 21.7, 16.4), this.addChild(this.front_btn_genitals_35, this.front_btn_groin_34, this.front_btn_pelvis_32, this.front_btn_hip_53)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, -90.9, 215, 100.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_neck_1 = function() {
                this.initialize(), this.front_btn_neck_10 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_neck_2, this.front_btn_neck_10.setTransform(54.1, 41.9, 1, 1, 0, 0, 0, 54.1, 41.9), this.addChild(this.front_btn_neck_10)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 108.1, 83.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_leg = function() {
                this.initialize(), this.front_btn_thighs_54 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_thighs, this.front_btn_thighs_54.setTransform(147.8, 158.3, 1, 1, 0, 0, 0, 113.9, 158.3), this.front_btn_knees_56 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_knees, this.front_btn_knees_56.setTransform(147.4, 334.2, 1, 1, 0, 0, 0, 112.2, 35.9), this.front_btn_shins_58 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_shins, this.front_btn_shins_58.setTransform(148.8, 434.1, 1, 1, 0, 0, 0, 126.1, 88.3), this.front_btn_ankles_60 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_ankles, this.front_btn_ankles_60.setTransform(148.5, 572.4, 1, 1, 0, 0, 0, 128.2, 50), this.front_btn_feet_62 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_feet, this.front_btn_feet_62.setTransform(147.6, 650.8, 1, 1, 0, 0, 0, 147.6, 28.4), this.front_btn_toes_64 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_toes, this.front_btn_toes_64.setTransform(148.1, 699, 1, 1, 0, 0, 0, 148, 20.4), this.addChild(this.front_btn_toes_64, this.front_btn_feet_62, this.front_btn_ankles_60, this.front_btn_shins_58, this.front_btn_knees_56, this.front_btn_thighs_54)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 296.1, 719.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_head = function() {
                this.initialize(), this.front_btn_skull_2 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_head, this.front_btn_skull_2.setTransform(56.7, 38.9, 1, 1, 0, 0, 0, 48.8, 38.9), this.front_btn_eyes_3 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_eyes, this.front_btn_eyes_3.setTransform(56.7, 75.6, 1, 1, 0, 0, 0, 36.9, 10.9), this.front_btn_nose_6 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_nose, this.front_btn_nose_6.setTransform(56.3, 90.7, 1, 1, 0, 0, 0, 11.1, 18.4), this.front_btn_face_5 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_face, this.front_btn_face_5.setTransform(57, 98.8, 1, 1, 0, 0, 0, 40.5, 16.2), this.front_btn_ears_4 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_ears, this.front_btn_ears_4.setTransform(56.3, 98.3, 1, 1, 0, 0, 0, 56.3, 19), this.front_btn_mouth_7 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_mouth, this.front_btn_mouth_7.setTransform(56.8, 120.1, 1, 1, 0, 0, 0, 22, 7.9), this.front_btn_jaw_8 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_jaw, this.front_btn_jaw_8.setTransform(56, 123.2, 1, 1, 0, 0, 0, 42.8, 25.3), this.addChild(this.front_btn_jaw_8, this.front_btn_mouth_7, this.front_btn_ears_4, this.front_btn_face_5, this.front_btn_nose_6, this.front_btn_eyes_3, this.front_btn_skull_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 112.6, 148.5), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_chest = function() {
                this.initialize(), this.front_btn_sternum_15 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_sternum, this.front_btn_sternum_15.setTransform(87.9, 38.6, 1, 1, 0, 0, 0, 13.5, 38.6), this.front_btn_chest_14 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_chest, this.front_btn_chest_14.setTransform(86.7, 53.3, 1, 1, 0, 0, 0, 86.7, 53.3), this.front_btn_chest_side_18 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_chest_side, this.front_btn_chest_side_18.setTransform(86.7, 97.8, 1, 1, 0, 0, 0, 84.4, 24.5), this.addChild(this.front_btn_chest_side_18, this.front_btn_chest_14, this.front_btn_sternum_15)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 173.4, 122.3), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_arm = function() {
                this.initialize(), this.front_btn_shoulder_41 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_shoulder, this.front_btn_shoulder_41.setTransform(201, 38.9, 1, 1, 0, 0, 0, 33, 38.9), this.front_btn_armpit_16 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_armpit, this.front_btn_armpit_16.setTransform(209.2, 80.7, 1, 1, 0, 0, 0, 14.6, 30.7), this.front_btn_tricep_43 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_tricep, this.front_btn_tricep_43.setTransform(185.5, 139.9, 1, 1, 0, 0, 0, 24.7, 37.1), this.front_btn_bicep_42 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_bicep, this.front_btn_bicep_42.setTransform(169.4, 110.5, 1, 1, 0, 0, 0, 31.7, 52), this.front_btn_elbow_44 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_elbow, this.front_btn_elbow_44.setTransform(146.8, 174.9, 1, 1, 0, 0, 0, 21, 19.2), this.front_btn_forearm_45 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_forearm, this.front_btn_forearm_45.setTransform(120.1, 226.5, 1, 1, 0, 0, 0, 39, 53.8), this.front_btn_wrist_47 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_wrist, this.front_btn_wrist_47.setTransform(84.9, 300.4, 1, 1, 0, 0, 0, 28.8, 29.2), this.front_btn_palm_49 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_palm, this.front_btn_palm_49.setTransform(60.7, 347.3, 1, 1, 0, 0, 0, 28.8, 31.9), this.front_btn_fingers_50 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_fingers, this.front_btn_fingers_50.setTransform(42, 370.4, 1, 1, 0, 0, 0, 42, 48.9), this.addChild(this.front_btn_fingers_50, this.front_btn_palm_49, this.front_btn_wrist_47, this.front_btn_forearm_45, this.front_btn_elbow_44, this.front_btn_bicep_42, this.front_btn_tricep_43, this.front_btn_armpit_16, this.front_btn_shoulder_41)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 234.2, 419.3), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_all = function() {
                this.initialize(), this.front_btn_head = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_head_1, this.front_btn_head.setTransform(295.3, 74.2, 1, 1, 0, 0, 0, 56.3, 74.2), this.front_btn_neck = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_neck, this.front_btn_neck.setTransform(295.5, 166.9, 1, 1, 0, 0, 0, 54.1, 41.9), this.front_btn_arms = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_arms, this.front_btn_arms.setTransform(295.9, 410.7, 1, 1, 0, 0, 0, 295.9, 210), this.front_btn_chest = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_chest_1, this.front_btn_chest.setTransform(294.9, 273.1, 1, 1, 0, 0, 0, 87.2, 73.8), this.front_btn_abdomen = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_abdomen, this.front_btn_abdomen.setTransform(295.5, 422.4, 1, 1, 0, 0, 0, 88.3, 91.8), this.front_btn_pelvis = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_pelvis_1, this.front_btn_pelvis.setTransform(294.6, 529.2, 1, 1, 0, 0, 0, 98.7, 58.2), this.front_btn_legs = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_legs, this.front_btn_legs.setTransform(295.3, 860.9, 1, 1, 0, 0, 0, 148, 359.4), this.addChild(this.front_btn_legs, this.front_btn_pelvis, this.front_btn_abdomen, this.front_btn_chest, this.front_btn_arms, this.front_btn_neck, this.front_btn_head)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 591.8, 1220.3), (webmd.p.symptomcheckerLibs.FemaleBodyParts.front_top_abdomen = function() {
                this.initialize(), this.front_btn_abdomen_upper_22 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_abdomen_upper, this.front_btn_abdomen_upper_22.setTransform(87.9, 65.3, 1, 1, 0, 0, 0, 78.9, 65.3), this.front_btn_abdomen_lower_24 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.front_btn_abdomen_lower, this.front_btn_abdomen_lower_24.setTransform(88.3, 148.1, 1, 1, 0, 0, 0, 88.3, 35.6), this.addChild(this.front_btn_abdomen_lower_24, this.front_btn_abdomen_upper_22)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 176.5, 183.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_neck_1 = function() {
                this.initialize(), this.back_btn_neck_12 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_neck_2, this.back_btn_neck_12.setTransform(94.4, 40.6, 1.28, 1.28, 0, 0, 0, 73.7, 31.7), this.addChild(this.back_btn_neck_12)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 188.6, 81.2), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_leg = function() {
                this.initialize(), this.back_btn_toes_64 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_toes, this.back_btn_toes_64.setTransform(149.2, 644.4, 1, 1, 0, 0, 0, 149.2, 19.2), this.back_btn_toes_64.alpha = .93, this.back_btn_feet_63 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_feet, this.back_btn_feet_63.setTransform(149.3, 590.8, 1, 1, 0, 0, 0, 144.6, 40.9), this.back_btn_ankles_60 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_ankles, this.back_btn_ankles_60.setTransform(149.6, 499.4, 1, 1, 0, 0, 0, 128.9, 50.6), this.back_btn_ankles_60.alpha = .949, this.back_btn_calfs_59 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_calfs, this.back_btn_calfs_59.setTransform(150.7, 356.5, 1, 1, 0, 0, 0, 134.6, 93.4), this.back_btn_knees_57 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_knees, this.back_btn_knees_57.setTransform(148.7, 250.4, 1, 1, 0, 0, 0, 108.5, 34.8), this.back_btn_hamstring_55 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_hamstring, this.back_btn_hamstring_55.setTransform(151, 119.5, 1, 1, 0, 0, 0, 113.6, 119.3), this.addChild(this.back_btn_hamstring_55, this.back_btn_knees_57, this.back_btn_calfs_59, this.back_btn_ankles_60, this.back_btn_feet_63, this.back_btn_toes_64)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, .2, 298.4, 663.3), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_head = function() {
                this.initialize(), this.back_btn_ear_4 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_ears, this.back_btn_ear_4.setTransform(46.8, 107.3, 1, 1, 0, 0, 0, 51.3, 19.9), this.back_btn_skull_2 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_skull, this.back_btn_skull_2.setTransform(53.6, 48.7, 1, 1, 0, 0, 0, 44.3, 55.5), this.addChild(this.back_btn_skull_2, this.back_btn_ear_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 108.4, 145.8), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_buttock = function() {
                this.initialize(), this.back_btn_hip_53 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_hip, this.back_btn_hip_53.setTransform(81, 43.7, 1, 1, 0, 0, 0, 81, 39.2), this.back_btn_buttock_37 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_buttock, this.back_btn_buttock_37.setTransform(92, 48.6, 1, 1, 0, 0, 0, 82, 48.6), this.addChild(this.back_btn_buttock_37, this.back_btn_hip_53)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 215.7, 141.9), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_back = function() {
                this.initialize(), this.back_btn_lower_spine_30 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_lower_spine, this.back_btn_lower_spine_30.setTransform(88.1, 221.6, 1, 1, 0, 0, 0, 19.7, 42.8), this.back_btn_upper_spine_27 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_upper_spine, this.back_btn_upper_spine_27.setTransform(88.5, 94.2, 1.361, 1.361, 0, 0, 0, 14.7, 62.3), this.back_btn_back_26 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_back, this.back_btn_back_26.setTransform(87.5, 132.3, 1, 1, 0, 0, 0, 87.5, 132.3), this.addChild(this.back_btn_back_26, this.back_btn_upper_spine_27, this.back_btn_lower_spine_30)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 174.9, 264.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_arm = function() {
                this.initialize(), this.back_btn_fingers_50 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_fingers, this.back_btn_fingers_50.setTransform(36.4, 342.3, 1, 1, 0, 0, 0, 36.4, 53.7), this.back_btn_hand_48 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_hand, this.back_btn_hand_48.setTransform(55.5, 316.8, 1, 1, 0, 0, 0, 30, 28.3), this.back_btn_wrist_47 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_wrist, this.back_btn_wrist_47.setTransform(84.9, 277.5, 1, 1, 0, 0, 0, 29.6, 25.4), this.back_btn_forearm_46 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_forearm, this.back_btn_forearm_46.setTransform(124.7, 215.6, 1, 1, 0, 0, 0, 44.8, 52.4), this.back_btn_elbow_44 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_elbow, this.back_btn_elbow_44.setTransform(152.4, 173.3, 1, 1, 0, 0, 0, 23.3, 23.3), this.back_btn_tricep_43 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_upper_arm, this.back_btn_tricep_43.setTransform(192, 127.3, 1, 1, 0, 0, 0, 50.8, 48.1), this.back_btn_shoulder_41 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_shoulder, this.back_btn_shoulder_41.setTransform(228.5, 43.6, 1, 1, 0, 0, 0, 42.3, 43.6), this.addChild(this.back_btn_shoulder_41, this.back_btn_tricep_43, this.back_btn_elbow_44, this.back_btn_forearm_46, this.back_btn_wrist_47, this.back_btn_hand_48, this.back_btn_fingers_50)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 270.6, 394.6), (webmd.p.symptomcheckerLibs.FemaleBodyParts.back_top_all = function() {
                this.initialize(), this.back_btn_head = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_head, this.back_btn_head.setTransform(330, 74.9, 1, 1, 0, 0, 0, 54.1, 72.7), this.back_btn_neck = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_neck, this.back_btn_neck.setTransform(330.5, 174.6, 1, 1, 0, 0, 0, 68, 29.2), this.back_btn_back = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_back_1, this.back_btn_back.setTransform(329.1, 325, 1, 1, 0, 0, 0, 87.6, 133.3), this.back_btn_arms = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_arms, this.back_btn_arms.setTransform(329.7, 379, 1, 1, 0, 0, 0, 329.7, 196.3), this.back_btn_buttock = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_buttock_1, this.back_btn_buttock.setTransform(331.2, 523.7, 1, 1, 0, 0, 0, 108.4, 72.3), this.back_btn_legs = new webmd.p.symptomcheckerLibs.FemaleBodyParts.back_btn_legs, this.back_btn_legs.setTransform(331.1, 894.1, 1, 1, 0, 0, 0, 149.7, 331.8), this.addChild(this.back_btn_legs, this.back_btn_buttock, this.back_btn_arms, this.back_btn_back, this.back_btn_neck, this.back_btn_head)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 2.2, 659.3, 1223.7), (webmd.p.symptomcheckerLibs.FemaleBodyParts.BodySelectorTooltip = function() {
                this.initialize(), this._bg = new webmd.p.symptomcheckerLibs.FemaleBodyParts.txtBubble_bodyAreas, this._bg.setTransform(29.9, 20, 1, 1, 0, 0, 0, 29.9, 20), this.addChild(this._bg)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 59.8, 40.1), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_leg = function() {
                this.initialize(), this._over = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_leg_over, this._over.setTransform(31.8, 27.6, 1, 1, 0, 0, 0, 31.8, 27.6), this._up = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_leg_up, this._up.setTransform(32.8, 27.6, 1, 1, 0, 0, 0, 32.8, 27.6), this.addChild(this._up, this._over)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_arm = function() {
                this.initialize(), this._over_1 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_arm_over, this._over_1.setTransform(32.5, 27.5, 1, 1, 0, 0, 0, 32.5, 27.5), this._up_1 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_arm_up, this._up_1.setTransform(32.8, 27.9, 1, 1, 0, 0, 0, 32.8, 27.9), this.addChild(this._up_1, this._over_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_abdomen = function() {
                this.initialize(), this._over_2 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_abdomen_over, this._over_2.setTransform(48.5, 27.6, 1, 1, 0, 0, 0, 48.5, 27.6), this._up_2 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_entire_abdomen_up, this._up_2.setTransform(48.5, 27.6, 1, 1, 0, 0, 0, 48.5, 27.6), this.addChild(this._up_2, this._over_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_zoomout = function() {
                this.initialize(), this._over_3 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_zoomout_over, this._over_3.setTransform(18.5, 27, 1, 1, 0, 0, 0, 18.5, 27), this._up_3 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_zoomout_up, this._up_3.setTransform(18.5, 27, 1, 1, 0, 0, 0, 18.5, 27), this.addChild(this._up_3, this._over_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_skin = function() {
                this.initialize(), this._over_4 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_select_skin_over, this._over_4.setTransform(21.3, 28.4, 1, 1, 0, 0, 0, 21.3, 28.4), this._up_4 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_selectEntire_on, this._up_4.setTransform(26.5, 27.9, 1, 1, 0, 0, 0, 26.5, 27.9), this.addChild(this._up_4, this._over_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_frontview = function() {
                this.initialize(), this._over_5 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_frontview_over, this._over_5.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this._up_5 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_frontview_up, this._up_5.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this.addChild(this._up_5, this._over_5)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_backview = function() {
                this.initialize(), this._over_6 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_backview_over, this._over_6.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this._up_6 = new webmd.p.symptomcheckerLibs.FemaleBodyParts.btn_backview_up, this._up_6.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this.addChild(this._up_6, this._over_6)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 33, 55)
        }(lib = lib || {}, webmd.p.symptomcheckerFlashImages, createjs = createjs || {});
        var lib, createjs
    }
    if (define("../easeljs/FemaleBodyParts", function() {}), window.HTMLCanvasElement) {
        ! function(a, b, c) {
            var d;
            (webmd.p.symptomcheckerLibs.MaleBodyParts.SCBodyMap = function(a, b, d) {
                null == d && (d = !1), this.initialize(a, b, d, {
                    all: 1,
                    abdomen: 2,
                    head: 14,
                    neck: 26,
                    chest: 38,
                    pelvis: 50,
                    legs: 62,
                    arms: 74
                }, !0), this.frame_0 = function() {
                    this.stop()
                }, this.frame_1 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(1)
                }, this.frame_7 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(2)
                }, this.frame_13 = function() {
                    this.gotoAndStop("all")
                }, this.frame_19 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(3)
                }, this.frame_25 = function() {
                    this.gotoAndStop("all")
                }, this.frame_31 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(4)
                }, this.frame_37 = function() {
                    this.gotoAndStop("all")
                }, this.frame_43 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(5)
                }, this.frame_49 = function() {
                    this.gotoAndStop("all")
                }, this.frame_55 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(6)
                }, this.frame_61 = function() {
                    this.gotoAndStop("all")
                }, this.frame_67 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(7)
                }, this.frame_73 = function() {
                    this.gotoAndStop("all")
                }, this.frame_79 = function() {
                    this.stop(), this.animationComplete && this.animationComplete(8)
                }, this.frame_85 = function() {
                    this.gotoAndStop("all")
                }, this.timeline.addTween(c.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(6).call(this.frame_7).wait(6).call(this.frame_13).wait(6).call(this.frame_19).wait(6).call(this.frame_25).wait(6).call(this.frame_31).wait(6).call(this.frame_37).wait(6).call(this.frame_43).wait(6).call(this.frame_49).wait(6).call(this.frame_55).wait(6).call(this.frame_61).wait(6).call(this.frame_67).wait(6).call(this.frame_73).wait(6).call(this.frame_79).wait(6).call(this.frame_85)), this.shape = new c.Shape, this.shape.graphics.f("#DBEDF7").s().p("Axk4mMAjJAAAMAAAAxNMgjJAAAMAAAgxN").cp(), this.shape.setTransform(112.5, 157.5), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.shape
                    }]
                }).to({
                    state: []
                }, 1).wait(85)), this.shape_1 = new c.Shape, this.shape_1.graphics.f("#000000").s().p("ADugcQgCADgCACIAAAAIAAgJIgQAAIAABXIARAAIAAghQABABACADQACACADACQAEABAGAAQAHAAAFgCQAFgDADgFQAEgFABgGQACgGAAgFQAAgLgEgHQgEgIgGgDQgGgEgHAAQgFAAgEACQgEACgCACIAAAAAD4gTQAFAAAEADQADACABAFQABAEAAAFQAAABAAADQgBAEgCADQgBADgDACQgCACgEAAQgGAAgDgDQgDgDgCgEQgBgEAAgEQAAgEABgFQABgEADgDQADgDAGAAIAAAAADCgeQgEgCgEgBQgFgBgDAAQgHAAgGACQgGABgEAFQgFAFgBAKIAQAAQABgCAAgCQABgDACgBQADgBAEAAQACAAADAAQACAAACACQACACAAADQAAADgCABQgCABgCAAIgPACQgGABgEADQgEACgCACQgDAFAAAGQAAAGADAFQADAEAEACQAFABAFAAQAFAAAEgBQAEgCADgCQACgCACgCQABADAAABQAAACABACIASAAIAAgDQgBAAgBgBQgBgBAAgCQgBgCAAgEIAAggQAAgGgCgEQgDgEgEgBIAAAAAC3AAQADAAABAAIAAAHQAAAEgCADQgDACgDACQgDABgEAAQgCAAgCAAQgBgBgCgCQgBgBAAgDQAAgEACgCQABgCADAAQACgBADgBQAGgBACgBIAAAAABFgoIAQBGIARAAIARhGIAABGIARAAIAAhUIgbAAIgPBCIAAAAIgQhCIgaAAIAABUIARAAIAAhGIAAAAAgUANIgBAAIgNgtIgTAAIAXBAQAAAFgCACQgBACgCAAQgCABgEAAQgBAAAAAAQgBAAgBAAIAAANQACAAACAAQACAAACAAQAFAAAEAAQADgBADgDQACgDACgFQADgGACgIIAUg9IgPAAIgNAtAhOg2IAAAeIgBAAQgBgCgCgCQgDgDgDgBQgEgCgFAAQgHAAgGAEQgGADgEAIQgEAHAAALQAAAFACAGQABAGAEAFQADAFAFADQAFACAHAAQAGABAFgDQAFgCADgFIAAAIIAQAAIAAhUIgQAAAjYgvQgDgDgFgCQgFgCgIAAIgqAAIAABUIAlAAQAJAAAFgBQAFgBADgCQADgCACgCQAEgDACgFQABgFABgFQAAgEgCgCQgBgEgDgDQgDgEgFgCQACgBADgBQACgCACgEQACgDAAgGQAAgEgBgDQgCgEgDgEIAAAAAibgQQAEADABAEQABAFAAAEQAAACgBAEQgBAFgEADQgDADgHAAQgGAAgDgDQgEgDgBgFQgBgEAAgCQAAgEABgFQABgEAEgDQADgEAGAAQAHAAADAEIAAAAAilgiQgIAAgIAEQgHADgFAIQgEAHAAAMQAAAJAEAIQAFAHAHAEQAIADAIAAQAJAAAIgDQAHgEAEgHQAFgIAAgJQAAgMgFgHQgEgIgHgDQgIgEgJAAIAAAAAjngXQgEACgFAAIgVAAIAAgSIAUAAQAGgBAEACQADACAAAGQAAAFgDACIAAAAAjvAPIgWAAIAAgVIAXAAQADAAADABQADABACACQABACABACQgBAHgDADQgEADgGAAIAAAAAhPgJQABAFAAAEQAAAEgBAEQgCAEgDADQgDADgGAAQgEAAgCgCQgDgCgBgDQgCgDgBgEQAAgDAAgBQAAgFABgEQABgFADgCQAEgDAFAAQAGAAADADQADADABAEIAAAA").cp(), this.shape_1.setTransform(44.7, 16.3), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.shape_1
                    }]
                }).wait(86)), this.btn_frontview = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_frontview, this.btn_frontview.setTransform(26.4, 291.1, 1, 1, 0, 0, 0, 17.4, 41.1), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.btn_frontview
                    }]
                }).wait(86)), this.btn_backview = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_backview, this.btn_backview.setTransform(26.4, 277.7, 1, 1, 0, 0, 0, 17.4, 27.7), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.btn_backview
                    }]
                }).wait(86)), this.btn_selectentire_abdomen = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_abdomen, this.btn_selectentire_abdomen.setTransform(112.5, 277.8, 1, 1, 0, 0, 0, 48.6, 27.6), this.btn_selectentire_leg = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_leg, this.btn_selectentire_leg.setTransform(111, 277.8, 1, 1, 0, 0, 0, 31.9, 27.6), this.btn_selectentire_arm = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_arm, this.btn_selectentire_arm.setTransform(77.5, 98.5, 1, 1, 0, 0, 0, 33.5, 27.5), this.timeline.addTween(c.Tween.get({}).to({
                    state: []
                }).to({
                    state: [{
                        t: this.btn_selectentire_abdomen
                    }]
                }, 7).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.btn_selectentire_leg
                    }]
                }, 59).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.btn_selectentire_arm
                    }]
                }, 11).to({
                    state: []
                }, 1).wait(6)), this.btn_selectskin = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_skin, this.btn_selectskin.setTransform(195.5, 277.9, 1, 1, 0, 0, 0, 20.5, 27.9), this.btn_selectskin._off = !0, this.timeline.addTween(c.Tween.get(this.btn_selectskin).wait(1).to({
                    _off: !1
                }, 0).to({
                    _off: !0
                }, 1).wait(84)), this.btn_zoomout = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_zoomout, this.btn_zoomout.setTransform(193.4, 279.1, 1, 1, 0, 0, 0, 18.4, 27.1), this.btn_zoomout._off = !0, this.timeline.addTween(c.Tween.get(this.btn_zoomout).wait(2).to({
                    _off: !1
                }, 0).wait(84)), this.back_top_all = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_all, this.back_top_all.setTransform(110.3, 160, .25, .25, 0, 0, 0, 326.8, 565.2), this.back_top_back = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_back, this.back_top_back.setTransform(114.1, 155.9, 1, 1, 0, 0, 0, 95.5, 128), this.back_top_head = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_head, this.back_top_head.setTransform(111.4, 109.2, 1.5, 1.5, 0, 0, 0, 51.8, 56.5), this.back_top_neck = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_neck_1, this.back_top_neck.setTransform(109.3, 139.5, 1, 1, 0, 0, 0, 102.3, 34.1), this.back_top_buttock = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_buttock, this.back_top_buttock.setTransform(106.1, 194.4, 1, 1, 0, 0, 0, 94.5, 118.9), this.back_top_leg = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_leg, this.back_top_leg.setTransform(111.1, 145.4, .4, .4, 0, 0, 0, 168.9, 310.4), this.back_top_arm = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_arm, this.back_top_arm.setTransform(119.8, 142, .65, .65, 0, 0, 0, 133.3, 206.7), this.timeline.addTween(c.Tween.get({}).to({
                    state: []
                }).to({
                    state: [{
                        t: this.back_top_all
                    }]
                }, 1).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_back
                    }]
                }, 5).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_head
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_neck
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_back
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_buttock
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_leg
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.back_top_arm
                    }]
                }, 11).to({
                    state: []
                }, 1).wait(6)), this.back_image_M = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_image, this.back_image_M.setTransform(111, 156, .25, .25), this.timeline.addTween(c.Tween.get(this.back_image_M).wait(1).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 428
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1.5,
                    scaleY: 1.5,
                    y: 850
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1.4,
                    scaleY: 1.4,
                    y: 721
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 428
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 219
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: .4,
                    scaleY: .4,
                    y: 37
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: .65,
                    scaleY: .65,
                    x: 245.6,
                    y: 267
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    x: 111,
                    y: 156
                }, 6).wait(1)), this.front_top_all = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_all, this.front_top_all.setTransform(110.9, 157.4, .25, .25, 0, 0, 0, 307.4, 557.4), this.front_top_abdomen = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_abdomen, this.front_top_abdomen.setTransform(112.5, 144.5, 1, 1, 0, 0, 0, 81.3, 96.2), this.front_top_head = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_head, this.front_top_head.setTransform(111, 134.6, 1.5, 1.5, 0, 0, 0, 50.5, 73.6), this.front_top_neck = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_neck_1, this.front_top_neck.setTransform(110.8, 179.1, 1.4, 1.4, 0, 0, 0, 71.6, 36.6), this.front_top_chest = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_chest, this.front_top_chest.setTransform(111.5, 178, 1, 1, 0, 0, 0, 97.3, 67.7), this.front_top_pelvis = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_pelvis, this.front_top_pelvis.setTransform(112.5, 143, 1, 1, 0, 0, 0, 94.9, 54.5), this.front_top_leg = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_leg, this.front_top_leg.setTransform(111.6, 138.4, .4, .4, 0, 0, 0, 170.7, 325.8), this.front_top_arm = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_arm, this.front_top_arm.setTransform(114.8, 139.8, .65, .65, 0, 0, 0, 112.8, 190.8), this.timeline.addTween(c.Tween.get({}).to({
                    state: []
                }).to({
                    state: [{
                        t: this.front_top_all
                    }]
                }, 1).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_abdomen
                    }]
                }, 5).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_head
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_neck
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_chest
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_pelvis
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_leg
                    }]
                }, 11).to({
                    state: []
                }, 1).to({
                    state: [{
                        t: this.front_top_arm
                    }]
                }, 11).to({
                    state: []
                }, 1).wait(6)), this.front_image_M = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_image, this.front_image_M.setTransform(111, 156, .25, .25), this.timeline.addTween(c.Tween.get(this.front_image_M).wait(1).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 317
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1.5,
                    scaleY: 1.5,
                    y: 848
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1.4,
                    scaleY: 1.4,
                    y: 716
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 470
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: 1,
                    scaleY: 1,
                    y: 212
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: .4,
                    scaleY: .4,
                    y: 43
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    y: 156
                }, 6).to({
                    scaleX: .65,
                    scaleY: .65,
                    x: 241.5,
                    y: 247
                }, 6).to({
                    scaleX: .25,
                    scaleY: .25,
                    x: 111,
                    y: 156
                }, 6).wait(1)), this.background = new webmd.p.symptomcheckerLibs.MaleBodyParts.bodyArea_background, this.background.setTransform(114, 158, 1, 1, 0, 0, 0, 114, 158), this.timeline.addTween(c.Tween.get({}).to({
                    state: [{
                        t: this.background
                    }]
                }).wait(86))
            }).prototype = d = new c.MovieClip, d.nominalBounds = new c.Rectangle(0, -16.7, 228, 345.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.Back_Large_M = function() {
                this.initialize(b.Back_Large_M)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 768, 1382), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_view_over = function() {
                this.initialize(b.back_view_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_view_up = function() {
                this.initialize(b.back_view_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.body_bkd_shadow = function() {
                this.initialize(b.body_bkd_shadow)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 15, 316), (webmd.p.symptomcheckerLibs.MaleBodyParts.Front_Large_M = function() {
                this.initialize(b.Front_Large_M)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 768, 1382), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_view_over = function() {
                this.initialize(b.front_view_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_view_up = function() {
                this.initialize(b.front_view_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_abdomen_over = function() {
                this.initialize(b.select_entire_abdomen_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_abdomen_up = function() {
                this.initialize(b.select_entire_abdomen_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_arm_over = function() {
                this.initialize(b.select_entire_arm_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_arm_up = function() {
                this.initialize(b.select_entire_arm_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_leg_over = function() {
                this.initialize(b.select_entire_leg_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_leg_up = function() {
                this.initialize(b.select_entire_leg_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_skin_over = function() {
                this.initialize(b.select_skin_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.MaleBodyParts.select_skin_up = function() {
                this.initialize(b.select_skin_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.MaleBodyParts.zoom_out_over = function() {
                this.initialize(b.zoom_out_over)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.MaleBodyParts.zoom_out_up = function() {
                this.initialize(b.zoom_out_up)
            }).prototype = new c.Bitmap, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_pelvis = function() {
                this.initialize(), this.shape = new c.Shape, this.shape.graphics.f("rgba(246,108,19,0.498)").s().p("AE4iUQihBTicgBQiXgCibhMQgxgXgrgdIghgXQgpA1gSAcQgHAIACABQBNAuA3A4QBaBdBTCnIF6AAQBAh8Aug/QBYh1B4hCIg8hfQgxAqhQAqIAAAA").cp(), this.shape.setTransform(50.2, 23.3), this.addChild(this.shape)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 100.4, 46.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_hips = function() {
                this.initialize(), this.shape_1 = new c.Shape, this.shape_1.graphics.f("rgba(243,119,37,0.498)").s().p("AMUmnIAYgLIAzClQA1C5AGBgQAJCfAREIQhIgKhJg6QiRh3AAj7QAAj9BNhyQAYgkAdgRIAAAAAuZAMQAGhgA1i5IAzilIAYALQAdARAYAkQBNByAAD9QAAD7iRB3QhJA6hIAKQARkIAJifIAAAA").cp(), this.shape_1.setTransform(94.9, 43.5), this.addChild(this.shape_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 189.8, 87), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_groin = function() {
                this.initialize(), this.shape_2 = new c.Shape, this.shape_2.graphics.f("rgba(243,119,37,0.498)").s().p("AFpDaQhVA+hlAmIhUAZQAoieBXimQCvlIDxghQgDFqkODGIAAAAAiuE+QhlgmhVg+QkOjGgDlqQDxAhCvFIQBXCmAoCeIhUgZ").cp(), this.shape_2.setTransform(63.4, 34.4), this.addChild(this.shape_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 126.9, 68.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_genitals = function() {
                this.initialize(), this.shape_3 = new c.Shape, this.shape_3.graphics.f("rgba(246,108,19,0.498)").s().p("AiziLQBECcARBIQANAnAfAKQAMAFAkAAQAeAAATgHQAggKAKgcQAOhDAohcIAlhRIlnAD").cp(), this.shape_3.setTransform(18.5, 14), this.addChild(this.shape_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.4, -.3, 36.2, 28.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_toes = function() {
                this.initialize(), this.shape_4 = new c.Shape, this.shape_4.graphics.f("rgba(246,108,19,0.498)").s().p("AaQhjQAlB/gYAlQgXArgYgdQgEAlgEAEQgnAPgTgGQgNgGAAAZQAAAcgJAHQgRAKglgKQgaAggKAEIgJAEQhAABgHgYQgNh/gGgIQgEgHgYAEQACALAUBjQgcA2g2gDQgjgCgvgtQgpgmgCgQIgEhLQhLhSgBgtQALhWADg4IIkAAQAAAFACAEIAoByAw8jeQAEA4ANBWQgEAthNBSIgEBLQgBAQgqAmQgsAtgkACQg0ADgeg2QgLgVAjhZQACgGgNACQgRACgEAFQgFAIgMB/QgHAYhAgBIgJgEQgagpgIAFQgpAIgPgIQgJgHACgcQAAgZgPAGQgVAGgngPIgHgpQgXAdgYgrQgcg7AhhyQAXhjAEgPII8AA").cp(), this.shape_4.setTransform(170.2, 22.4), this.addChild(this.shape_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 340.5, 44.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_thighs = function() {
                this.initialize(), this.shape_5 = new c.Shape, this.shape_5.graphics.f("rgba(246,108,19,0.498)").s().p("Ai7vpQAfAcAOATQAIARAhAqQAYAfAFAIQAJABACgBQgIAEgIAPQgHAPgHAZQgeBkAKDRQAFBmi5IgQhdEThoEiQgOA1gaCAQgWBogoCAQgpCBgmBWQgWAxgUBJQgDALgTAlQgTAkgHAbQgFizhJhaQg9hLhjgFQhTgFhMApQhJAogEArQgBg4AFhcQAEhcAFghQAFgiAjiRQAjiOACAAQAFAAgChhQgEhdgBhmQgBhQgBgJQgekbBxqFQA4lDA+kKQAIglAHg4QAHg+ACg3QACg6AHhKQAIhLAIgcQDlCJBdA/QBCAtCACAQB2B2BDBSQAEAEAFAFIAAAAABQtOQgEgBgBgDQAAgCAAgEQAAgFAxgxQATgUARgOQEdlYHwjgQADBSAHBwQAPDiAaCaQANBRBJFZQA6EVAEBVQABAogBGaQgBFcAMA3QALAxAhCaQAcCGAFAgQALBNgIDsQgKhAhQgvQhQguhcADQhmADg/BDQhJBPACCYQgFgwgjhfQgwh9gdhMQguh4gnixQgXhjgNhSQgHgmgQgsQgSgvgHgTQkHr1gmiOQgBgGgWkAQgUjkgYgSQAAAAABgBIAAAA").cp(), this.shape_5.setTransform(123.4, 158.4), this.addChild(this.shape_5)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 246.9, 316.9), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_shins = function() {
                this.initialize(), this.shape_6 = new c.Shape, this.shape_6.graphics.f("rgba(246,108,19,0.498)").s().p("AMHrlQAtAtBHAYQBAAWBIAAQCMAABehbQAgggAIg3QAEgfAEhDQAwBvAmCAQA2C3ADB/QADCxgEEhQgEDkgEB2QgDA+gPDnQgPDjgBAAQAAAElmgFQgSiFgYiZQgvk0gbhpQg0ivgbhXQgvihgDhRQgChJgQjdQgOjHABABIAAAAAxwrQQA0AUBFAAQB/AABphoQAIDYgFA/QgCAagJCaQgGBsgIBJQgHBLgsBoQhUDMgDAJQgkBkg1E8QgaCdgTCKQlNAFAAgEQgBAAgLjbQgLjYgDhGQgJi0gEiUQgIkYAOiuQAKh3AzjUQAwjGAihQQAJBDAHAXQANAsAiAhQAxAwA0AVIAAAA").cp(), this.shape_6.setTransform(145.3, 95.8), this.addChild(this.shape_6)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 290.7, 191.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_knees = function() {
                this.initialize(), this.shape_7 = new c.Shape, this.shape_7.graphics.f("rgba(246,108,19,0.498)").s().p("APbkkQBtgCBQBOQAjAjAcAtQAHAUATAgQAUAiAJAXQAeBJgbBZQgeBkhYAfQhWAdhUgCQiEgDhrhSQgJgtgThUQgQhIgGgiQgQhdBehgQBPhOBuACIAAAAAzAjTQBFhOB4ACQBtgCBQBOQAkAlAXBjQAUBYgGA9QgFA8hEAwQhIAzhuALQiBAOhjhyQgpgugOgxQgOgxAUgbQAXggAYhHQAWhEAMgNIAAAA").cp(), this.shape_7.setTransform(131, 29.4), this.addChild(this.shape_7)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 262.1, 58.8), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_feet = function() {
                this.initialize(), this.shape_8 = new c.Shape, this.shape_8.graphics.f("rgba(246,108,19,0.498)").s().p("AW0jyIALAeIA4DUQBkDRASA2IoeAAQACg3gCgYQgei4ACgSQAEioAChMIF/AAQgCAJgCALIAAAAA2bjyQgCgLgCgJIF/AAQAEBMAECoQAAASggC4QgCAYAEA3Io2AAQBxjgASgnIBOjy").cp(), this.shape_8.setTransform(164.6, 26.4), this.addChild(this.shape_8)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 329.2, 52.8), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_ankles = function() {
                this.initialize(), this.shape_9 = new c.Shape, this.shape_9.graphics.f("rgba(246,108,19,0.498)").s().p("AWqBTQAqBmg0BbQhzAGh5gBQgkgBhrgDQgIg7gEgfQgGgzAAgrQAGhxADg9QAFhugKhMQCTgDAwAEQAeADCEgCIgGA+QgGBHAAAxQABAmAUAuQAMAbAZA3IAAAAAw4kXQgKA9ASB6QAUCRABAhQAAAegLA5QgLA8gBAxQgWAAiAABQiKAAhigDQgOhwAKg9QALg/A1hqIgNjSQElgHAoAEIAAAA").cp(), this.shape_9.setTransform(147, 28.2), this.addChild(this.shape_9)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 294, 56.4), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_nose = function() {
                this.initialize(), this.shape_10 = new c.Shape, this.shape_10.graphics.f("rgba(246,108,19,0.498)").s().p("AAwiNQAVAgAOA3QABAMAEANQABARABATQADAmAMAlQAFBZhqAHQhvAEADhiQAag8gCg7QACgTAEgPQAMg5AVgdQAQgbAdAHQAZACATAgIAAAA").cp(), this.shape_10.setTransform(10.5, 17.8), this.addChild(this.shape_10)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 21.1, 35.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_mouth = function() {
                this.initialize(), this.shape_11 = new c.Shape, this.shape_11.graphics.f("rgba(246,108,19,0.498)").s().p("AiaBBQg2gbADgmQADglAygbQAzgbBlAAQBoAAAvAbQAwAbAHAlQAHAmg3AbQg2AbhnAAQhlAAg2gbIAAAA").cp(), this.shape_11.setTransform(20.7, 9.3), this.addChild(this.shape_11)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.1, 0, 41.4, 18.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_jaw = function() {
                this.initialize(), this.shape_12 = new c.Shape, this.shape_12.graphics.f("rgba(246,108,19,0.498)").s().p("AFfgVQgJAjgVAgQhhBoh9AnQiVAjhVglQiUhDg4hdQgSgjgJgiQgHgfgGgnIgBgGQAAgCAAgCIgBgJQADg+AqAbQBVA6AjBdQAUAqAmgCQAkAGAjguQAPgXA2ACQBRgGANAbQBHA7AigRQAkgKAPg5QAchXBEhAQAvglAHBAQAAADgBADIgBAAIgKA1QgMA6gHAaIAAAA").cp(), this.shape_12.setTransform(38.3, 20.6), this.addChild(this.shape_12)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, .1, 76.6, 41.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_head = function() {
                this.initialize(), this.shape_13 = new c.Shape, this.shape_13.graphics.f("rgba(246,108,19,0.498)").s().p("AGNhkQA9CNAGC5QACBOgGA5Qgzh8hag4Qk/iokZCKQiOBEgoCOQgCjDAFhDQAHhjAVhBQAoh8BfhHIBTgxQBogyBngBQBmgBBgAtQCNBCBBCWIAAAA").cp(), this.shape_13.setTransform(46.5, 36.2), this.addChild(this.shape_13)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.1, 0, 92.9, 72.4), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_face = function() {
                this.initialize(), this.shape_14 = new c.Shape, this.shape_14.graphics.f("rgba(246,108,19,0.498)").s().p("AGKh8QAQCsh/BxQh9AMACgtQAQgwgRg4Qgehig8hYQB8AtBxgMQBPgYAJAdIAAAAAmJh8QAJgdBPAYQBxAMB8gtQg8BYgeBiQgRA4AQAwQACAsh9gMQh/hwAQisIAAAA").cp(), this.shape_14.setTransform(39.7, 16.4), this.addChild(this.shape_14)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.1, 0, 79.3, 32.8), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_eyes = function() {
                this.initialize(), this.shape_15 = new c.Shape, this.shape_15.graphics.f("rgba(246,108,19,0.498)").s().p("AFzAMQAAAogyAcQgzAchIAAQg/AAgvgWQgGgDgGgDIAAAAQgzgcAAgoQAAgQALgQQAEgGAGgGQAMgMAggiQAhgjBIAHQBJAHAzAlQA0AkAAAmIAAAAAlyAMQAAgmA0gkQAzgkBJgIQBIgHAhAjQAgAiAMAMQAVAUAAAYQAAAogzAcQgGADgGADQgvAWg/AAQhIAAgzgcQgygcAAgoIAAAA").cp(), this.shape_15.setTransform(37.2, 10.8), this.addChild(this.shape_15)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 74.4, 21.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_ears = function() {
                this.initialize(), this.shape_16 = new c.Shape, this.shape_16.graphics.f("rgba(246,108,19,0.498)").s().p("AHzAVQABAegSAxQgTAygTASQgQAPgWgBIgSgEQAZh7ACiEQACgHACgHQAQg4AdgjIALgCQAQACAIASQAIASgDBIQgCAmgDA5IAAAAAmUg/QABAEACAFQABB3AVBuQgKAFgMACQgZAGgHgKQgGgJgSghQgWgqgBgCQgGgKgCgNQgDgdgDgOQgKgvAAhAQAAgkABgLQADgZAJgIQAMgKARgCQAiAuAYBEIAAAA").cp(), this.shape_16.setTransform(50.5, 18.5), this.addChild(this.shape_16)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 101.1, 37), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_sternum = function() {
                this.initialize(), this.shape_17 = new c.Shape, this.shape_17.graphics.f("rgba(246,108,19,0.498)").s().p("AA8lvQAcgKAigJQh9HsB/EZQgKgEgJgEQhsg3h3AlQBUlKhUl5QBjAZBTguIAAAA").cp(), this.shape_17.setTransform(12.4, 38.8), this.addChild(this.shape_17)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 24.8, 77.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_chest_side = function() {
                this.initialize(), this.shape_18 = new c.Shape, this.shape_18.graphics.f("rgba(246,108,19,0.498)").s().p("AMsEgQlHlPk7hJQh9gdh5AMQlmAklXGBQgKgmgJgXQgRgrgNgqIgKgjIgEAGQhGjFgijHQFDDsH6izQAUgJATgGQB2glBtA4QAKAEAJADQGmCqFhjuQgbDbguCtIAAAAQgHADgGAWQgFASgmB9QgCAIgCAHIAAAA").cp(), this.shape_18.setTransform(94.5, 28.8), this.addChild(this.shape_18)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 189.1, 57.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_chest = function() {
                this.initialize(), this.shape_19 = new c.Shape, this.shape_19.graphics.f("rgba(246,108,19,0.498)").s().p("AMym+IATACQB6DqAND5QgJCUgRCEQlhDumliqQiBkZB/nsQDCgzFrgUQAKADAMACQAmAHAfgBIAAAAAq/nCQDagHF+BnQAPAFAOADQBTF5hTFKQgUAGgUAJQn6CzlDjsQgVh6gHh6QAEkbCfjfQAdgBATgCQAfgFAagLIAAAA").cp(), this.shape_19.setTransform(97.3, 45.8), this.addChild(this.shape_19)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 194.6, 91.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_wrist = function() {
                this.initialize(), this.shape_20 = new c.Shape, this.shape_20.graphics.f("rgba(246,108,19,0.498)").s().p("ABmCIIl9hJQAXgYAbgfQApgvAOgSQANgTAgggQANgNAOgOIF+A5Qg5A9g+BMQgoAygTAbIAAAA").cp(), this.shape_20.setTransform(28, 13.6), this.addChild(this.shape_20)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 56.1, 27.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_tricep = function() {
                this.initialize(), this.shape_21 = new c.Shape, this.shape_21.graphics.f("rgba(246,108,19,0.498)").s().p("ACThXIAlg6QgWhKgQg3Qg8Bbg0gNIjZFfQAsA1AYBDQCCikAog7QArg+AxhNIAAAA").cp(), this.shape_21.setTransform(18.5, 27.6), this.addChild(this.shape_21)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 36.9, 55.2), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_shoulder = function() {
                this.initialize(), this.shape_22 = new c.Shape, this.shape_22.graphics.f("rgba(246,108,19,0.498)").s().p("ADolKQATAAAQgBQiRDLgQD8QiYCtjcAjQAFgcgCgtQgCg9AHg2QAIg2AchLQAbhJBfhtQBehuBMgbQBOgaBUAAIAAAA").cp(), this.shape_22.setTransform(26.7, 33.2), this.addChild(this.shape_22)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 53.4, 66.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_palm = function() {
                this.initialize(), this.shape_23 = new c.Shape, this.shape_23.graphics.f("rgba(246,108,19,0.498)").s().p("Ag1kmQgkArgfAQQggANgVAOQAKAwgXA6QgPAlgPAUQgMAOgPAOQABADABACIgHANQgCADgBAEQgIAMgHAIQgJAKgTAnQgTAngCADQgCABgEAHQBSAQABBCQADgEABAAQAFABAIAHQAFAEACACQBcAHAKAwQADgBAEgBQAHgCAIAFQABAAALAIQACABAAACQBGgZAgAiQAGgGAFAAQAIgBADAAQADABACAEQAngaAwAMQAegfAPgpIAKgmQAOgbAyhcQAdg0ARhoQAJg1AIhAQhCgSiGgYQiKgXglgGIAAAA").cp(), this.shape_23.setTransform(32.2, 29.6), this.addChild(this.shape_23)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 64.4, 59.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_forearm = function() {
                this.initialize(), this.shape_24 = new c.Shape, this.shape_24.graphics.f("rgba(246,108,19,0.498)").s().p("AHhiPQghBJgLARQgzBPhzBwQg3A0i+CyQh6B1g3A6QgKAKgJALIicgXIKrtgQBQAVB3gVQgSAggRAqQgTAugVA8IAAAAAC9ozQAMDICcAoIqsNgIjkgiQAUgUAWgVQAkglB8iwQAyhHBAhoQBAhnBOiaQBOibAsg2QAug1BHhKQAbgcAUgUIAAAA").cp(), this.shape_24.setTransform(55.6, 56.5), this.addChild(this.shape_24)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 111.3, 113), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_fingers = function() {
                this.initialize(), this.shape_25 = new c.Shape, this.shape_25.graphics.f("rgba(246,108,19,0.498)").s().p("AFSAYIgCAhQgEAlgEAUQgDAUgEANQgCAHgDAHQgBACgBAjQAAAjgEAIQgCAIgGAYQgFAYgDAJQgGAPgLARQgNAUgJAEQgJADgJgIQgHgHAAgEQAChKABgVQAIhmgCgRQgBgKAHgTQAHgVAAgKQABgLAEgNQACgKgBgEQgBgBAAgBQAogZAvALQgDADgDADIAAAAABTARQgGAEgFAJIg5B4QgGAMgcA3QgcAxgGAPQgFAOgPAtQgOAsgEAJQgGAQgOASQgSAVgPAFQgQAGgMgNQgKgLAAgNQAAgsAFgRQAGgSAWgyQAWgxANgvQANgwAHgRQAHgSAPgfQAOgfAVgfQAVgeAFgNQAEgOAAgBQgBAAgBgCQBaAHAKAtQgFACgDACIAAAAAAPnNQAHgDAHgDQAWBnhaBXQgGgMgEgFQgMgMgQAGQgTAHgVAOQgWAPgPARQgrAwguAKQgYAFgMgBQgHgBgKgGQgHgEACgLQABgIAEgGQAngsASgZQAJgMAMgWQAJgSAHgEQAigYAfgUQAegUAwgUQAwgTAagMIAAAAAizgiQANgUAagoQAQgaAIgLQBRAPACBCQgLALgqAyIhJBfQgGAIgSAYQgPAVgKAKQgGAIgTAbQgQAXgKAKQgjAhgbgCQgPgBgFgKQgDgGABgMQAAgHARgeQAQgdAHgMQAGgMAeguQAegvAWgkQAWgiAOgUIAAAAAA6C3QACgGARgrQAihWAIgKQAGgGABgCQACgDgBgCQBGgZAhAjQgCACgCACQgKALgEALQgEAPgXA0QgZA5gKARQgJAQgNAgQgHARgLAdQgEAJgQAsQgOAogGALQgMAYgOASQgWAbgRgBQgdgDAPg+QADgQAKgfQANgjACgHQAZhKAFgaQAEgTAFgMIAAAA").cp(), this.shape_25.setTransform(34.5, 46.9), this.addChild(this.shape_25)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 69, 93.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_elbow = function() {
                this.initialize(), this.shape_26 = new c.Shape, this.shape_26.graphics.f("rgba(246,108,19,0.498)").s().p("AitirQADgVANgmQFDARBZD0QgtA4g9BLQgTAYgTAiQlbA/gSktQAfghAMgPQAGgFAMgUQAMgUAIg8IAAAA").cp(), this.shape_26.setTransform(25.6, 23.2), this.addChild(this.shape_26)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 51.2, 46.4), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_bicep = function() {
                this.initialize(), this.shape_27 = new c.Shape, this.shape_27.graphics.f("rgba(246,108,19,0.498)").s().p("AEenRQkbERETFKIjbFgQgigngrgdQhohCijgJQAZhMBCiUQAYhPAXguQAWgwgEgkQgFglAVg8QAWg9AKgeQADgIACgKQBHgMBtg4QB+hAA3hBQAAALABANIAAAA").cp(), this.shape_27.setTransform(28.7, 49.1), this.addChild(this.shape_27)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 57.4, 98.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_armpit = function() {
                this.initialize(), this.shape_28 = new c.Shape, this.shape_28.graphics.f("rgba(246,108,19,0.498)").s().p("Ai6jOQACFiELC7QDipMkLhPQiYgWhMCUIAAAA").cp(), this.shape_28.setTransform(15.4, 29.1, .992, .875, 15), this.addChild(this.shape_28)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 36.7, 59.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_pelvis_1 = function() {
                this.initialize(), this.shape_29 = new c.Shape, this.shape_29.graphics.f("rgba(246,108,19,0.498)").s().p("AOYhlQAAAJABANQkKBpj5DUIAAAAQitCTi3C3QgIgDgHAEQgKAGgXgBQgagBgXgGQinisioidQjrjbkvipQAKgoAhiEQAwi7AQgcQADgFABgEQMwQYMTwzQgBASAGAWQADAJA6CtQA5C2ADBEIAAAA").cp(), this.shape_29.setTransform(92.1, 57.5), this.addChild(this.shape_29)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 184.2, 115), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_neck = function() {
                this.initialize(), this.shape_30 = new c.Shape, this.shape_30.graphics.f("rgba(246,108,19,0.498)").s().p("AE+lZQgDAEgCADIABCMQACCOADAOQADAOAOAQQAJAKAUAOQAQANCQBlQCTBmAOAIQALAFATAFQmpAWjCBDQhhA1hygoQl/hnjaAIQADgCADgBQA1gYCqh4QAsgfA1guQBEgxAAg3QAAg3AChkQAChjgCAAQgFAAgRghQgBgBAAgCQA3BeCUBDQBVAkCWgjQB8gnBihnIAAAA").cp(), this.shape_30.setTransform(71.6, 36.6), this.addChild(this.shape_30)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 143.2, 73.2), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_legs = function() {
                this.initialize(), this.shape_31 = new c.Shape, this.shape_31.graphics.f("rgba(246,108,19,0.498)").s().p("EAPGgrVIASBvQAUB3ALAlQAUBEAtDaQA1D+AGBaQANDRAEFnIgDB7QgECDgDAlQgCAnAFAWQABAGALAfQAOAlARBMQAYBqAFBYQACAfAHCbQAEBdAHAiIBKCrQBNC5AVBQQAXBcAMBuQALBigBBUQgBAwgKEMQgJEAAAAsQAAA+gKC2QgJC0gGBCQgFAsgLBpQgHBXAKAUIAKBaQAHA9ApA2QAMAQAHAWQAIAYgCAWQgCARgIAfQgKAkgCAOQgDAVAJAsQAEAaANA2QAJAoAhBbQAiBeAYAuQAQAgALAZQAGANANAPQAsAzABAjIAAAhQACAjAMANQANAPADAkQADAdgEAdQgDAbgFAMQgFARgNAHQgTAKgSgEIgEAGQgEAKgEAPQgFATgRAGQgQAGgWgHIgEAWQgHAXgOAFQgOAEgZgEIgVgGIgEAUQgKAUgiACQgiACgRgPQgCgBgNgUQgCgDAAgHQAAgFgFACQgEABgDAHQgCAIgIAEQgOAPgOAHQgaAOgngUQhbgwgEhSQgCgmgBgEQgEgCgGgEQgOgHgZgqQggg0gBgvQgBghAOhOQANhGgGggQgPhPgEgUQgKg+gBgxQgBgmAIheQAHhUgDgSQgahvgCg3QAAgXALhoQAKhdgDgWQgJhugPiNQggkZgmiZQgsjDgPg7QgWhWgnhVQgnhVgOioQgIijgCgYQgEhSgCg9QgGh3gIgsQgGghgNg7QgJgmABgJQABgJgIgYQgMgigEgTQgEgRgNgsQgKggAAgLQAAgJghhEQgnhRgLggQgNgjgIg1QgJg4gHgWQgLgigiiLQgchygRhLQgOg7gOgpQgQgwgcg0QgXgthNjnQhPjygOgqQgph4gIgcQgehmgJhdQgHhEgHiSQgFhwgGgNQgJgXgEgIQAAgBgBgBQGVniHBi2QAEBBAJCVQAKCqABAeIAAAAEgBAgnZQgWAcgFAXQgEARgICnQgICrgHAoQgHAqhXEAQheEXgMAtQgTBEg0B3QgbA/goBaQgbBBhVGcQgHAlgIAaQgMAugZA9QgOAkgoBUQgeBBgMAoQgTA8gmCeQgHAegEAlQgEAuAFAlQAFAngICwQgICtgJBNQgHA3gzCCQg6CUgJAjQgUBRguDQQgyDhgJA5QgQBjgKBaQgPCCAIAXQAKAfAPBPQAQBYgBAjQgBAdgHAjQgHAjAAANIgEA4QgDBEAFA9QAGBDgHBKQgGA+gNA0QgWBZATBCQAOAyACARQAFAmgKAmQgMAvgUAjQgXAngZALIAEAnQgDAsgdAZQgtAngUAKQghARgigLQgfgKgMgTIgHgRIgEANQgIAPgOAKQgUANgfgCQgigCgJgVIgGgNQgJAHgrgMQgSgDgGgTQgDgUgDgFQgDgEgRADQgUAEgIgEQgKgFgHgYQgHgXgBAAQgKAEgIAAQgQABgKgRQgIgPgBghQgCgmgCgJQgHgbAZg1QAKgRAFgKQAIgRgBgMQgCgUAEgQQAHgaAVghQAUgfAdhBIAag6QAdg1AVg0QAZg7ADgdQADgZAOgwQAOguADgLQAEgTgBgNQgBgSgLgWQgMgaAAgmQAAgsATgoQAUgrARg6QAQg7AAgcQAAgTgNhaQgPhlgDgvQgGhEgDlgQgDlhADhrQADhIgEiBQgDh1ADgtQAEg+AmiqQAiiYAdhhQARg+AqhMQAlhDAEgbQADgUAHiNQAHiJAJg+QAKhDAchnQAchfADgNQAEgTgBhxQgBhhgEh0QgEhsAKjjQAMjyATioQANh4BMkiQBFkKAAg9QAAhMAFhXQAHhdADgqQADg3AXhjQABgCADgPQIKEnE+GyIgGAH").cp(), this.shape_31.setTransform(170.6, 325.9), this.addChild(this.shape_31)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 341.3, 651.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_head_1 = function() {
                this.initialize(), this.shape_32 = new c.Shape, this.shape_32.graphics.f("rgba(246,108,19,0.498)").s().p("AGQnaQA+CPAFC5QADBdgJA9IAOgCQAQACAIASQAIASgDBIQgCAmgDA7QABAegSAxQgTAygTASQgQAPgWgBIgTgFIgKA1QgMA7gHAaQgKAlgUAgQhhBnh9AnQiVAjhVgkQiUhDg4heQgSgkgJgjQgIgigGguIgFgmQgLAEgMADQgZAGgHgKQgGgJgSghQgWgqgBgCQgGgKgCgNQgDgdgDgOQgKgxAAhAQAAgkABgLQADgZAJgIQANgLATgBQgCjWAFhIQAHhkAVhCQAoh8BehHIBUgxQBogyBmgBQBngBBfAtQCOBCBACWIAAAA").cp(), this.shape_32.setTransform(50.5, 73.6), this.addChild(this.shape_32)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 101.1, 147.2), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_chest_1 = function() {
                this.initialize(), this.shape_33 = new c.Shape, this.shape_33.graphics.f("rgba(246,108,19,0.498)").s().p("AMyqZIATACQB6DrAND6QgaGGhIEaIgBAAQgGADgHAWQgFARgmB+QgCAHgCAIQtAtar1NWQgKgmgJgXQgQgrgOgrIgKgiIgEAGQhwlBgUk/QAEkdCfjfQAdgBATgCQAfgFAagLQDagHF+BnQByAoBhg1QDChDGpgXQAKADAMACQAmAHAfgBIAAAA").cp(), this.shape_33.setTransform(97.3, 67.7), this.addChild(this.shape_33)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 194.6, 135.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_arms = function() {
                this.initialize(), this.shape_34 = new c.Shape, this.shape_34.graphics.f("rgba(246,108,19,0.498)").s().p("ARN8rQBRA6A3BaQBKB5AKAZQAWA7AJCXIAIA6QAJA/AMAaQAMAYAHBNQAHBWABAEQADAKA8COQA/CTAPAxQAOArATBKQASA7AbAeQBbBlAyA8QB2CRA7BuQBOCQBrCxQB4DGA5BFQAsA1BKBPQBHBLAXAdQAaAgAvBAQAwA2BGAaQDIBLAiAwQASAcAqA0QApA2AIAFQAKAGgiAIQgkAHgegKQgagJgjglQglgngOgFQgwgSgJAFQgFADgCAIQAAAEAAADIAQAoQASAqAHANQAFAJARAUQANAPgBAFQAAAHAPAfQAPAfAKAMQAGAIAYAnQAaAqANARQAuBAADAHQAEAHAXAkQAWAjACAQQAEAcAAAEQgCAOgOAEQgQAFgbgTQgYgSgSgYQgKgOgPgcQgLgWgHgFQgIgGgdgiQgagggJgOQg7hPgMgUQgMgTAAAAQgEgFgHADQgWAHAKAQQAFAJAZA2QAXA0AJAVQAGANAEASQAFAZAFAQQAGATAVAvQAUAuAEAPQAFAQAPAtQAOAoAAAOQAAATgNANQgNANgRgEQgPgEgWgjQgSgegJgbQgDgIgKgjQgHgYgFgIQgHgMgXgtQgXgvgIgTQgKgZgghAQgDgHgJgfQgHgVgHgCQgLgEgLACQgNADgCALQgDATATAjQAIAPAMAbQAMAbAEALQACAHAGAfQAHAfADAKQAGASATA6QAFAUAeBeQADAOgFANQgGAQgRAAQgSAAgZgiQgWgegJgdQgDgHgMgpQgIgbgGgIQgKgPgQggQgTgmgDgPQgDgUgCgIQgDgNgHgLQgHgLgPgnQgNghgDgPQgDgKgDgDQgEgDgNgBQgSgBAAAWQAAAuAGAVQAEARACBEQAAAKAGAeQAFAeABAIQABAIAGAgQADAdgNAGQgRAJgRgPQgRgRgPgsQgNgngHgkQgFghgCgIQgDgOgCgYQgCgbAAgQQACgWAAgKQAAgQgFgHQgOgVgdgrQgRgagEgNQgGgTAAgBQgXgngTgkQgkhIgHgrQgJhJgEggQgIg3gFgPQgFgSgGgLQgFgIgKgLQgrg2gxg6Qhgh0g8g5QhXhTizi0QjFjFggglQgggmgRgjQgMgZgVg+QgPgjgVgsQgqhXgggqQhih1hPhkQiZjBg8iAQgCgDgCABQBJkZAamJQgOj6h6jrIA1ADQBOAHAgAKQA5ATA2AnIAAAAAtV9rQATAAAQAAQifDfgEEdQAUFBBwFBIglA6QgxBNgrA/QgrBAhiB6Qg0BChSBkQgmAugjBXQgTAtgVA6QghBKgLAQQgzBShzBvQg3A1i+CyQh8B1g3A5QhBBFhJBcQhDBSgIATQgFALgGBXQgLBfgeA3QgyBcgNAcIgKAmQgRAsgjAhIgCAhQgEAlgEAUQgDAUgEANQgCAHgDAHQgBACgBAjQAAAjgEAIQgCAIgGAYQgFAYgDAJQgGAPgLARQgNAUgJAEQgJADgJgIQgHgHAAgEQAChKABgVQAIhmgCgRQgBgKAHgTQAHgVAAgKQABgLAEgNQACgKgBgEQgCgFgEgBQgCgBgIABQgHABgJAKQgKALgEALQgEAPgXA0QgZA5gKARQgJAQgNAgQgHARgLAdQgEAJgQAsQgOAogGALQgMAYgOASQgWAbgRgBQgfgDAPg+QADgQAMgfQANgjACgHQAZhKAFgaQAEgTAFgMQACgGARgrQAihWAIgKQAGgGABgCQADgEgEgDQgMgIAAAAQgIgFgIABQgJACgFAEQgGAEgFAJIg5B4QgGAMgeA3QgcAxgGAPQgFAOgPAtQgOAsgEAJQgGAQgOASQgSAVgPAFQgQAGgMgNQgKgLAAgNQAAgsAFgRQAGgSAWgyQAWgxANgvQANgwAHgRQAHgSAPgfQAOgfAVgfQAVggAFgNQAEgOAAgBQgBgBgIgHQgIgHgFgBQgEAAg1BCIhJBfQgGAIgSAYQgPAVgKAKQgGAIgTAbQgQAXgKAKQgjAhgbgCQgPgBgFgKQgDgGABgMQAAgHARgeQAQgdAHgMQAGgMAeguQAegvAWgkQAWgkAOgUQANgUAagoQAZgpAEgEQADgDATgnQATgnAIgKQAJgKAJgRIAHgPQgHgQgFgGQgMgMgQAGQgTAHgVAOQgWAPgPARQgrAwguAKQgYAFgMgBQgHgBgKgGQgHgEACgLQABgIAEgGQAngsASgZQAJgMAMgWQAJgSAHgEQAigYAfgUQAegUAwgUQAwgTAcgMQAcgMAZgNQAagNAfgfQAegfAqgwQAqgxANgTQANgTAggfQAgggAlglQAkgkB8iwQAyhHBAhpQBAhoBOibQBOiZAug1QAug2BHhJQBHhKATgXQAGgFAMgUQAMgUAIg8QAIg9BjjeQAYhPAXgwQAWgxgEgkQgFgkAVg8QAWg9AKgeQAKgfgDg9QgCg9AHg2QAIg2AchKQAbhLBfhuQBehuBOgaQBOgbBUAAIAAAA").cp(), this.shape_34.setTransform(307.5, 191.4), this.addChild(this.shape_34)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 615, 382.9), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_abdomen = function() {
                this.initialize(), this.shape_35 = new c.Shape, this.shape_35.graphics.f("rgba(246,108,19,0.498)").s().p("AL5AeQAOBDASBxQAaCggIAQQgHANgBAQQsSQ2swwaQADgHABgEQABgKgJgNQgKgOABgkQABgcALhXQABgOAkjFQAbiRgChFQgDhTgciOQgPhNgOgyQL1tYNANbQgjB+gNBcQgIBZAKB9QAHBSAJAuIAAAA").cp(), this.shape_35.setTransform(81.3, 96.2), this.addChild(this.shape_35)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, .1, 162.7, 192.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_abdomen_upper = function() {
                this.initialize(), this.shape_36 = new c.Shape, this.shape_36.graphics.f("rgba(246,108,19,0.498)").s().p("AL6FOQAOBDASBxQAFAgAEAbQsuCosXioQABgMACgNQABgOAkjFQAbiTgChFQgDhTgciMQgPhMgNgzQL0tYNANcQgjB+gNBbQgIBXAKB9QAHBSAJAwIAAAA").cp(), this.shape_36.setTransform(80.4, 65.8), this.addChild(this.shape_36)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, .1, 160.8, 131.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_abdomen_lower = function() {
                this.initialize(), this.shape_37 = new c.Shape, this.shape_37.graphics.f("rgba(246,108,19,0.498)").s().p("AsjlZQMXCoMuioQAPBogGANQgHAOgBAQQsSQ0swwYQADgHABgEQABgKgJgOQgKgOABgjQABgYAIhDIAAAA").cp(), this.shape_37.setTransform(81.3, 34.6), this.addChild(this.shape_37)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 162.7, 69.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_toes = function() {
                this.initialize(), this.shape_38 = new c.Shape, this.shape_38.graphics.f("rgba(246,108,19,0.498)").s().p("AVyhaQB1ADA2gYQA6gaAhgsQAcBFAEAkQAEAqgIAiQgDAIABAjQgEAigUANQgjAUgagNIgNAYQgPAXgNAAQgYAAgLgJIgLAQQgOARgQAEQgbAFgYgYIgMATQgRASgTAAQgfAAgggrIgaAXQggAUgagBQhZgIgHguQgEgVACgWIACgTQg6gwACgtQACgyAJg9IANhBIBOAyQBiA0BwAEIAAAAA4vCBIgMgYQgbANgjgVQgUgNgEghQACgkgEgIQgHgiADgpQAEglAYg5QAlAXA6AbQBJAhBigEQA4gBDohpIAOBBQABAJAEBqQACAtg0AtIACASQABAWgDAVQgIAvhZAHQgaACgggVIgZgWQggArggAAQgSAAgRgTIgNgSQgYAYgagGQgRgEgNgQIgLgRQgLAJgZAAQgNAAgPgWIAAAA").cp(), this.shape_38.setTransform(168.9, 19.8), this.addChild(this.shape_38)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 337.9, 39.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_knees = function() {
                this.initialize(), this.shape_39 = new c.Shape, this.shape_39.graphics.f("rgba(246,108,19,0.498)").s().p("AM6ieQBjhuCOgEQBLgDBKAhQA+AbAGAUQAJAcAhBBQAgBAAKAgQAIAXgjBCQgnBNg6ArQgpAeg/AUQg+ATg3AAQg3AAhRgnQhRgngCgbQgDglgFgQQgJgdgFgZQgHgigIgXQgJgVgCgKQgDgNASglQAVgqAigmIAAAAAzHjtQBSglBMADQCOAEBjBuQAiAmAVAqQASAlgDANQgCAKgJAVQgIAXgHAiQgFAZgJAdQgFAQgDAlQgCAbhRAnQhRAng3AAQg3AAg+gTQg/gUgpgeQg7gsgohMQgkhFALgUQAfg6ANgdQAXgxACgrQABgUBJghIAAAA").cp(), this.shape_39.setTransform(137, 27.4), this.addChild(this.shape_39)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 274.1, 54.8), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_hamstring = function() {
                this.initialize(), this.shape_40 = new c.Shape, this.shape_40.graphics.f("rgba(246,108,19,0.498)").s().p("APZ0zICGKoQAhC6ALBtQAHBCACChQADDSAAAGQADA5gIBVQgJBmAAAHQgBAjAJAsQAIAnAEAAQADAAAgCPQAiCXAMBMQASB3ALDaIAAAWQg1gng3gRQg1gQg/ACQhCACg2AZQg1AZgyAyQgkAlgRAcQgTAfgJArQgGgOg0hhQguhWgNgzQhglFgdiOQgOhGgRhxQgQhbgYg8QgBgEhAiaQgrhsgehZQgYhMhJjSQg/i9gKhVQgKhXgJhnQgFg3gFhHQgDg1gWi3QArAXBMAQQCaAgCughQCsggCchcQBOguAsgnIAAAAAhryIIgMDsQgBBOgCA+QgCB6gKBTQgKBRhCCrQhcDvgIAZQg1CihODLQgZBDgWBWQgNA3gaCDQgWBtgpCEQgqCIgoBaQgXA0gVBNQgMArgUBLQgJgrgTghQgRgbgkgmQhlhiiNAAQh8AAheBQIgBgSQAEhcAChDQAFh7AMhGQALhLAiiEQAgh7AEAAQAGAAgEhiQgKj7ACgkQAPmQAIhDQALhtAii6ICFrAQA9BABFAwQCCBZCrAcQC0AeCagdQBNgPAqgUIAAAA").cp(), this.shape_40.setTransform(129.2, 135.7), this.addChild(this.shape_40)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 258.3, 271.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_feet = function() {
                this.initialize(), this.shape_41 = new c.Shape, this.shape_41.graphics.f("rgba(246,108,19,0.498)").s().p("AUOmBQjFAAgVAAIAAAbIAGA+QAIBfAAAfQAAB7gFAqQgIA3AJB1QgBAmAXBiIA5AoQBIArBJANQBMAOBIgDQBSgEAvgaQAhgSAWgWQALgLAEgIIhBjNQAGhigOgwQgIgfgZguIgWgoQAJhOAEgZQAFgegSgzQgFgNgGgVIgFgTQhtgBhuAAIAAAAA4Xi3QAAAbgOAaQgiBCgGCDQgDBXgVBDIgTBzIAOANQATARAYANQBPAqBrgDQBqgEBvg0IBbg0QALjMgIg6QgWioAHhHQAKg+AGgpQAMhMABgnImxgIIgbBGQgZBMAFAdQAHAzACAIIAAAA").cp(), this.shape_41.setTransform(165.8, 41.8), this.addChild(this.shape_41)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 331.5, 83.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_calfs = function() {
                this.initialize(), this.shape_42 = new c.Shape, this.shape_42.graphics.f("rgba(246,108,19,0.498)").s().p("AMmoGQADAEACACQBgBgCIAAQCJAABihgQBMhMAOhmQAgBLAgBuQAgBwAYB6QAwDzAEAdQALBWgQBtQgJA8gXB1QgRBPgCA7QgCA2ACAtIABAgQAAAEnYAtQgHgxgPhDQgdiHgphdQhmjsgGjGQgCg0AEiLQADh1gFg2IgHhFA2cn5QAghlAjhUQANBfBTBTQBiBgCIAAQCIAABhhgQABgCAEgEIgHBFQgEAsgFB/QgEB7gHBEQgXDkhMDQQgkBkgbB+QgOA/gHArQnTgoAAgEQgBAAABgeQAAgsgCg0QgCg7gQhPQgYh1gJg8QgSh2AHhNQAGhEAojMQAWhyAmh4IAAAA").cp(), this.shape_42.setTransform(154.5, 69.1), this.addChild(this.shape_42)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 309.1, 138.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_ankles = function() {
                this.initialize(), this.shape_43 = new c.Shape, this.shape_43.graphics.f("rgba(246,108,19,0.498)").s().p("AXMoIIndAuQAYByAUBiQAmDFACAiQAFCggLBAQgCAMgMC2QgEAzAPBZIGygBQgUgwgSg/Qgmh+AEhUQAdlDABhkIAKkuAv2ngInWguQAHDrAJByQACAUAUCjQAPBvgIAgQgLA5gMBrIg1C1IGrAIQARhkgMhhQgHhEAEiCQACh1AJhgQALhyAykEIAAAA").cp(), this.shape_43.setTransform(151.7, 52.8), this.addChild(this.shape_43)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 303.4, 105.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_skull = function() {
                this.initialize(), this.shape_44 = new c.Shape, this.shape_44.graphics.f("rgba(246,108,19,0.498)").s().p("AGEltQh3ixkKgWQiOAKhsBFQhkBAg5BrQgwBZgQBjQgRBsARCKIBkG4ILdAFIBkmpQAulDh7i2IAAAA").cp(), this.shape_44.setTransform(47.8, 56.5), this.addChild(this.shape_44)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 95.7, 113), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_ears = function() {
                this.initialize(), this.shape_45 = new c.Shape, this.shape_45.graphics.f("rgba(246,108,19,0.498)").s().p("AHjCOQgiBMhBggIBRldQAegmAOAgQAJAUAAAiQgBC0giBNIAAAAAlyC2Qg9AigfhHQgcg9gZjDQgFgoAJgaQANgjAhAlIBfFl").cp(), this.shape_45.setTransform(51.8, 19.6), this.addChild(this.shape_45)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 103.7, 39.2), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_hip = function() {
                this.initialize(), this.shape_46 = new c.Shape, this.shape_46.graphics.f("rgba(246,108,19,0.498)").s().p("Ar+oVQAFAIAFAHQABACABADQACADABACQABAGADAEQACADAJAUQAMAdAIAJQAJAUACAGQABACAGAQQADAHADADIAAACQAAAAAAABQABADABACQAAAAAAAAIAAABQAAACAIAOQADAEACADQADAKAEALQAFANALAbQACAEAFATQACADABADIAAAAQAAABAEAJQAWBXgCB7QgCAEgBAFQgBAKgBAPQAAAFgDAQQgBAKgBAGQAAABAAABQgDAFgBAJQAAAMAAACQgDAJgDATQgIAWAAAGIAAABQgCADgBADIgCAIQgBACgDALQgBAFgBAFQgfBRg5BRQgFADgEAEQgDAEgEAHQgNAPgYAZIgmAqQgHAJgFAFQAAABgBAAIgIAHQgIAFgHAHIgYAZQgFAGgLANQgNAKgVASQgIgGgRgQIgPgOQAYl/ARh/QAKhJA5i/QAriRAjhkIAkAAAOxAGQASCBAaFzQgaAZgOAKQhehGhhiIQh4iogQiJQgajiBajCQAshiAyg0QAlBpAnB5QBPDyAKBOIAAAA").cp(), this.shape_46.setTransform(98.9, 54.1), this.addChild(this.shape_46)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 197.8, 108.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_buttock = function() {
                this.initialize(), this.shape_47 = new c.Shape, this.shape_47.graphics.f("rgba(246,108,19,0.498)").s().p("Ar9p2QCBEEAJBVQAKBjgMBjQgQB+gzBhQghA9hMBTQgtAwhgBgQCgCmEaAjQEgAjDdiCQDOCNEIghQDygfDmimQiBhzh7i9QgshFgUh8QgUh9APhwQAJhFAmhdQArhnA2hIItFgNIq6AN").cp(), this.shape_47.setTransform(94.8, 64.5), this.addChild(this.shape_47)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 189.6, 129), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_upper_spine = function() {
                this.initialize(), this.shape_48 = new c.Shape, this.shape_48.graphics.f("rgba(246,108,19,0.498)").s().p("ABJM8IAAjzQgHqgBjrjQAEgBlNAAQBoMMgIJ4IAADzICNAA").cp(), this.shape_48.setTransform(16.6, 82.8), this.addChild(this.shape_48)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 33.1, 165.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_lower_spine = function() {
                this.initialize(), this.shape_49 = new c.Shape, this.shape_49.graphics.f("rgba(246,108,19,0.498)").s().p("ABJmqQANG5A4GaQhDABg1ABQgDgBgDABQgSAAgTAAIAAgBQg2AAhCgBQA4maANm5ICRAA").cp(), this.shape_49.setTransform(14.3, 42.7), this.addChild(this.shape_49)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 28.6, 85.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_back = function() {
                this.initialize(), this.shape_50 = new c.Shape, this.shape_50.graphics.f("rgba(246,108,19,0.498)").s().p("AKiz/IA0BHQBeC8AQAsQBACuAbEKQAQCdg0EJQghCpg3C/QgTA/gQCDQgRCLgHCXQgCAvALBQQAMBbABAhQACAkgCBfQgCBNAFAjQACASAMApIqSgKQhMouAGp8QAFp9BaqlQCRgDCqgQQCHgNBKgMIAAAAAhOBPQAIKBhNIpIqRAKQAMgpACgSQAFgjgChNQgChfACgkQABghAMhbQALhQgCgvQgHiXgRiLQgQiDgTg/Qg0iugdjbQgRh9gGh4QgHiPANhPQAlkFA1iJQAEgLBdi5IAxhKQD8ApEAAGQBbKrAJJ3IAAAA").cp(), this.shape_50.setTransform(93.2, 128.4), this.addChild(this.shape_50)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 186.4, 256.8), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_wrist = function() {
                this.initialize(), this.shape_51 = new c.Shape, this.shape_51.graphics.f("rgba(246,108,19,0.498)").s().p("ABYieQAzBBAJAPQAWAfAeA3QAVAiAgAyQAKASAnA8Il9BNIhSimQgJgVggguQglg0gEgFQgIgOgagfIgYgbIFYiDIAtBY").cp(), this.shape_51.setTransform(30.2, 24.7, 1, 1, 0, 0, 180), this.addChild(this.shape_51)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 60.5, 49.4), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_upper_arm = function() {
                this.initialize(), this.shape_52 = new c.Shape, this.shape_52.graphics.f("rgba(246,108,19,0.498)").s().p("ABVj7QAMAsAQAaQAuBIAlBLQAKATAUAyQATAsAFAIQAaAnAgAgQBKBKADAEIBWBpIgSANQhehXg/AAQg0AAg5AaQg/AdgbAsQgjA2ABBeQgLgTghgxQgkg2gYgdQh0iEgxg9QhGhSgpg2QgjgqgMgQQgSgYgMgaQgMgZghg3IgfgyIAChxQABhSALhyQCWA7AnAWQBJAoEPBnIAIAm").cp(), this.shape_52.setTransform(57.5, 62.8, 1.22, 1.22, 0, 0, 180), this.addChild(this.shape_52)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 115.1, 125.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_shoulder = function() {
                this.initialize(), this.shape_53 = new c.Shape, this.shape_53.graphics.f("rgba(246,108,19,0.498)").s().p("Am1noIB+A0QA0ARBbApQCKA+BOAxQAwAeAdAdQAkAkAkBBQAgA3AOArQAWA/AFALQAcBAAbAwQADAIAbAuQAbAxAPAdQAOAhAIAZQAEAQAIAkQAKAqgFAcQkXhehEgnQgqgYh9g3Ih1gwQgmkzg0iHQgziGgvhBIg2hM").cp(), this.shape_53.setTransform(43.8, 48.9, 1, 1, 0, 0, 180), this.addChild(this.shape_53)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 87.7, 97.9), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_hand = function() {
                this.initialize(), this.shape_54 = new c.Shape, this.shape_54.graphics.f("rgba(246,108,19,0.498)").s().p("AE6BVQjTBgguAPQgtAQiVA5IhJh7Qgfg0gGgOQgYgwgMgvQgThLgLhjIF4hPIArAxQANAMAlA3QAWAeAkA2QAfArA4BWIANAY").cp(), this.shape_54.setTransform(31.5, 26.9, 1, 1, 0, 0, 180), this.addChild(this.shape_54)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 63, 53.9), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_forearm = function() {
                this.initialize(), this.shape_55 = new c.Shape, this.shape_55.graphics.f("rgba(246,108,19,0.498)").s().p("AgOotQALgJAKgCQBrC6A0B4QAwBwAyCUQAxCSANAfQAmBXBaCyIlcCBQisjlhShmQhEhVhUh1QhZh9gTgnQgGgLgPgvQgRg1gHgOIAyA5QBGA9BpAAQA5AAA3gaQAygYAngpQBAhEgKhwQgGhOgjhJIAAAA").cp(), this.shape_55.setTransform(45.4, 57, 1, 1, 0, 0, 180), this.addChild(this.shape_55)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 90.8, 114), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_fingers = function() {
                this.initialize(), this.shape_56 = new c.Shape, this.shape_56.graphics.f("rgba(246,108,19,0.498)").s().p("AFqAJIhKChQAABjgmBTQgYAqgUgEQgMgJAAgQQAAgHARk1IgQADQhECDgFAUIhqEIQgNALgZgEQgZgGgFgHQgKgTAlh4IBhkdQgCgMgDgGQgCgFAAADQh/EAgGAeQgUBjgrAuQgKADgTAAQgVgCgBgHQAHhSAAgEQArihAchjIA8ieIhOBpQhMBshMBMQggAaggAJQgXAEAAgXQAAgCByjMQACgEAzhCQBChYAng1QASAJAxAWQBMAiBCAdIDyBZAiNk7QAfgqAMgJQAtghAngRIB9g6Ih7CyQgQAEgeAcQgPAOgSASQgUAOggAIQgeAIgUgFQgRgDAAgSQABgLALgJQAlgmAUgdIAAAA").cp(), this.shape_56.setTransform(36.2, 47.6), this.addChild(this.shape_56)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 72.4, 95.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_elbow = function() {
                this.initialize(), this.shape_57 = new c.Shape, this.shape_57.graphics.f("rgba(246,108,19,0.498)").s().p("AAJkIQA+AAAuAZQAjASAsAsQAjAjAOAvQAKAiAEA9QAIBwhKBIQglAmg1AVQg0AWgzAAQg4AAgygVQg1gVgigoQgigogQgtQgQgsAAg2QAAg0AUgwQAUgxAmgiQAkgiBBgZQA6gWAfAAIAAAA").cp(), this.shape_57.setTransform(26, 26.5), this.addChild(this.shape_57)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 52.1, 53.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_neck = function() {
                this.initialize(), this.shape_58 = new c.Shape, this.shape_58.graphics.f("rgba(246,108,19,0.498)").s().p("AFyiEQgDBiARARQAUAUA4AnQA3AmAhARQArAWBaA2Qg8AQhsAOQjWAcjmgEQhhgDgXAAQjlAFjfgbQhwgOhBgPICVhMQAjgRBBgtQBDgtAUgUQARgSgFhbQgCgtgFgqILLAAQgFAtgBAxIAAAA").cp(), this.shape_58.setTransform(68.2, 22.8), this.addChild(this.shape_58)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 136.4, 45.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_legs = function() {
                this.initialize(), this.shape_59 = new c.Shape, this.shape_59.graphics.f("#F79E26").s().p("AWUC7IAMgSQAMAMAMAFQgTAAgRABIAAAAAVKC9QgdACgbAAQgBAAgBAAQADgDAEgCIAbgXQALAQANAKIAAAAAR8CHQgagYgJg9QAMATAYAUIgCATQgBANACAOIAAAAAZuB0QgvAwhdASQAIgHAGgIIAMgRQALAKAYAAQANAAAPgXIANgYQAQAJAWgGIAAAAARViBQABgcADgdQABACABABQAEAEAEADIgFgDIAAABIgJAxA5tiQQAAgEACgDQABABAAABQAEAFADAFQgFgCgDgDIgCAAA1zhGQAfgBAcgEQgfAHgPACQgmABgigEQAcAAAfgBIAAAAAxjCEQAAgJgBgIIgBgSQAZgWANgVQgMA3gYAXIAAAAA2OC2QACgDADgCIAEAGQgGgBgDAAIAAAAA0mC7QAGgIAGgJIAMALQAAAAABABIAFAFQgPAAgPAAIAAAAA5FB+QALAAAKgFIANAYQABADADACQgWgKgQgOIAAAAA34ClQANgBAHgGIALAQQgRgEgOgFIAAAAAw5hrIgOhCQgFADgFACQgGADgFACQAOgNAPgMQAAgBAAgBQAEAtACAmIAAAA").cp(), this.shape_59.setTransform(167.8, 596.4), this.shape_60 = new c.Shape, this.shape_60.graphics.f("rgba(246,108,19,0.498)").s().p("EARKAq4IAJgxIAAgBIAFADQgEgDgEgEIAFhqQgJhxAHg3QAGgpAAh3QAAgegNhcIgOhVIACAAQgQhbAEgyQANi6ADgMQAKhBgFilQgCgkgnjJQgUhhgXhxIgEAAQgcipg4ilQhVj+gUjFQgIhFgEh9QgFiBgEgtIgHhFQAEADACACIABAAQgGgRgCgjQgIhXgEgYQgEgTgeg8QgbgtAEgXQg8iZgahpQhek/gciMQggihhBimQhRjVguiJQg5ilgdhVQg3ibgJhSQgLhUgGiHQgHhGAChFQAChEgthqICqA1QCqAQCmgfQCnggBqhMQBphMAcghIBxJcQAhC3AMBrQAHBCAOGLQADAjgKD3QgDBgAFAAQAEAAAgB5QAhCCALBKQALBFAGB5QABBAAEBbQAAAHAAAKQAGAvAcBCQATAnAhBOQATAwACAcQAOAeAOAhQBIC+AhCnQApDQAFBJQAHBNgSB5QgKA+gYB5QgQBOgCA/QgDBaABAeIgBAAQAHDNgCBkQgCBngdFLQgEBVAnCBQATBAAUAxIAOA0QAOAhgIAsIgNBZIAWAsQAYAzAIAdQANAxgGBfIA4CuQACAAAAgBQAaBEAEAmQAEApgIAjQgCAJABAkQgEAhgUANQgMAGgLAEQgWAGgQgJIgNAYQgPAXgNAAQgYAAgLgKIgMARQgGAIgIAHQgHAEgIABQgOAEgNgFQgMgFgMgMIgMASQgRATgTAAQgTAAgTgRQgNgKgLgQIgbAXQgEACgDADQgcAPgWgBQhZgIgIgvQgBgIAAgHQgCgOABgNIACgTQgYgUgMgTQgVgcACgcQABgyAKg9IAEgOEgWZAvxQgWASgXgFQgQgEgOgRIgLgQQgHAGgNABQgHACgIAAQgMAAgMgRQgDgCgBgDIgNgYQgKAFgLAAQgTAAgWgNQgUgMgEgjQACgigDgKQgIgiAEgqQAEglAYg5QABABABABIACAAQADADAFACQgDgFgEgFIAXhYQAVhAADhUQAGiCAhg/QANgZAAgbQgBgIgIgxQgEgcAYhJQAMgjAMggIgBAAIA2i4QAOhsAKg5QAHghgOhwQgVingCgVQgIhygIjuIA/AHIg+gIQADgegEhaQgDg/gQhOQgYh5gJg+QgTh5AHhNQAGhJApjQQAhinBJi+QAPglAOggQAAABABABQAAgBAAgBQBejRAIhYQAAgEABgCQAAgIAAgGQAEhbABhAQAHh5AKhFQALhKAiiCQAfh5AEAAQAGAAgEhgQgKj3ADgjQAPmLAGhCQAMhrAii3IBepeQAwAuB7BRQB6BRCkARQClAQBpgTQBpgUBwgpQg6BKAHBmQgEBXgFBGQgICHgLBUQgJBSg3CbQgdBVg5ClQgtCJhSDVQhBCmggChQgcCMheE/QgaBrg9CbQgDgMgEgMQACAKgCAKQgCAKgFAKQgFAIAAAwQAAAvgXBNQgYBYgEAhQAAAEgBACIgFAvQgEAtgFCBQgEB9gIBFQgUDFhVD+Qg4ClgcCpIgBAAQgyEFgLBzQgKBggCB5QgDCEAHBEQAMBjgRBjIgBAAQgSA6gTCZQgEAtAMBOQAFAqALBFQAIA2gFCgQAAABAAABQgPAMgOANQAFgCAGgDQAFgCAFgDIAOBCIABALQACAZACBOQABAYgMAZQgNAVgZAWIABASQABAIAAAJQAAANgCANQgIAvhZAGQgaADgggVIgNgLQgBgBgBgBIgLgKQgGAJgGAIQgaAbgZAAQgSAAgSgTIgIgMIgEgGQgDACgCADIAAAAEgV+ArzQgfABgcAAQAiAEAmgBQAPgCAfgHQgcAEgfABIAAAA").cp(), this.shape_60.setTransform(168.9, 308.9), this.addChild(this.shape_60, this.shape_59)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 337.8, 617.8), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_head = function() {
                this.initialize(), this.shape_61 = new c.Shape, this.shape_61.graphics.f("rgba(246,108,19,0.498)").s().p("AHZGyQghBKg/geIgRBKIrNgFIgPhFQg0AWgbg+Qgbg8gZjBQgFgmAJgbQAMgiAhAkIAJAkIgJgpQgRiHARhqQAQhgAuhXQA4hoBig/QBphDCLgKQEEAVB1CuQB3CvgsE3QAbgfAMAdQAJAUAAAhQAACyghBLIAAAA").cp(), this.shape_61.setTransform(50.6, 55.2), this.addChild(this.shape_61)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 101.3, 110.4), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_buttock_1 = function() {
                this.initialize(), this.shape_62 = new c.Shape, this.shape_62.graphics.f("rgba(246,108,19,0.498)").s().p("AsPqHILMgRINUAWQAAgBABgBQAAABAAABIAGAAQgCACgCADQAlBpAnB3QBQD3ALBSQASCDAaF6QgPAUgNAKQABAAABABQjsCrj4AgQkPAhjUiQQjiCEkogjQkegkilioQAAAAgBAAQgOgHgQgNQAbl2ASiDQALhSBQj5QAnh9AnhtQABADACADQgBgCgBgCIAAAA").cp(), this.shape_62.setTransform(100, 66.5), this.addChild(this.shape_62)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 200, 133.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_back_1 = function() {
                this.initialize(), this.shape_63 = new c.Shape, this.shape_63.graphics.f("rgba(246,108,19,0.498)").s().p("AivzGQEkAAAhABQAAgCAAgBQCPgECpgPQCFgNBKgMIAzBGQBeC7AQAsQA/CsAbEIQAQCcg0EGQggCpg4C8QgSA+gQCDQgRCJgHCXQgCAuALBPQAMBbAAAgQADAkgDBeQgCBMAGAjQACASALAoIqKgJIAAABQhAABg0ABQgDgBgCABQgTAAgRAAIAAgBQg0AAhAgBIAAgBIqKAJQAMgoACgSQAFgjgChMQgCheACgkQABggAMhbQAKhPgCguQgGiXgRiJQgQiDgTg+QgzisgdjZQgRh8gGh4QgHiOANhOQAlkDA0iHQAEgLBci4IAwhJQD7AoD+AHQAAABABABIAAAA").cp(), this.shape_63.setTransform(92.4, 127.3), this.addChild(this.shape_63)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 184.8, 254.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_arms = function() {
                this.initialize(), this.shape_64 = new c.Shape, this.shape_64.graphics.f("rgba(246,108,19,0.498)").s().p("EAysAdcQgggJgfgbQhMhKhQhyIhOhsIA8CjIBIEHIAIBXQgCAIgVACQgUAAgKgDQgsgwgUhjQgFgaiDkIQAAgIgGAbIBiEiQAnB4gLAUQgEAIgaAHQgcADgMgLIhrkMQgFgRhFiIIgSgCQATEkAAAcQAAAPgOAKQgTADgYgpQgMgYgIgZQgTg/AAhJIhGibQgBAAgCAAIhJh8Qggg2gGgOQgagwgLgzQgThMgNhmIADAAIhRimQgKgUggguQglg1gDgFQgIgOgbggIgXgaIAAgBQitjihQhkQhDhUhUh0QhYh+gSgmQgFgLgRgwQgQg0gGgMIAEAFQglg2gGhDQAAAIAAAJQgMgYgpg7QgvhDgdgiQiOihg7hLQhWhjgyhCQgrg2gOgTQgXgegNgfQgPgegohEIgmg9IABiKQAChhANiHQgok/g1iLQg2iLgvhDIg4hOICCA2QA1ARBeAqQCPBABSAzQAyAfAeAeQAmAmAlBCQAhA5APAsQAWBEAFAKQAcBDAeAyQACAIAcAwQAdAyAOAeQAQAiAIAaQADARAIAlQALArgFAdIgBAAIAJAsQAPA2AUAgQA4BXAsBcQANAXAZA+QAWA2AIALQAeAvAoAnQBZBaAFAFIBpB/IgCABQBpC3A0B3QAvBtAyCSQAxCSAMAeQAlBXBYCuIACgBIAuBXQAzBBAJAPQAVAfAfA5QAUAiAhAzQAKAQAkA5IAEgBIAoAvIB+A4QAoARAuAiQAMAJAgAsQAVAeAnAmQALALACAMQAAARgTAEQgUAFghgJQgfgIgVgPQgSgTgQgOQgZgagQgFQAdApArBGIAMAVQAUAaASAcQA4BLA9BQQB0DNAAAGQAAAWgYgDIAAAAAfpkkQgCgGgEgGIAAABQgDgCgCgDQAGAIAFAIIAAAAAZ9BDQgQgLgPgOIADADQANAMAPAKIAAAAA5gAtIADgDQgQAOgPALQAPgKANgMIAAAAA/okkQAFgIAGgIQgCADgDACIAAgBQgEAGgCAGIAAAAArJ/lQgvBDg2CLQg1CLgoE/QAMCHACBhIACCKIgmA9QgpBEgOAeQgOAfgXAeQgOATgrA2QgxBChWBjQg7BLiOChQgdAigvBDQgpA7gMAYQAAgJAAgIQgGBDglA2IAEgFQgGAMgRA0QgQAwgFALQgSAmhZB+QhTB0hDBUQhRBkisDiIAAABIgXAaQgbAggIAOQgDAFgmA1QgfAugKAUIhRCmIADAAQgNBmgTBMQgLAzgaAwQgGAOggA2IhKB8QgBAAgBAAIhGCbQAABJgTA/QgJAZgLAYQgYApgUgDQgNgKAAgPQAAgcATkkIgSACQhFCIgFARIhsEMQgLALgcgDQgagHgFgIQgLgUAoh4IBikiQgGgbAAAIQiEEIgFAaQgTBjgsAwQgKADgVAAQgUgCgCgIIAHhXIBJkHIA8ijIhOBsQhRByhLBKQgfAbghAJQgXADAAgWQAAgGB0jNQA9hQA3hLQATgcAUgaIALgVQAshGAdgpQgQAFgaAaQgQAOgRATQgVAPggAIQggAJgUgFQgTgEAAgRQABgMAMgLQAmgmAWgeQAggsAMgJQAugiAogRIB+g4IAogvIAEABQAkg5AKgQQAhgzATgiQAgg5AVgfQAJgPAzhBIAuhXIABABQBZiuAkhXQANgeAxiSQAyiSAvhtQAzh3Bpi3IgBgBIBph/QAFgFBZhaQAognAegvQAIgLAWg2QAZg+AMgXQAthcA4hXQAUggAOg2IAKgsIgBAAQgFgdALgrQAIglADgRQAIgaAQgiQAOgeAdgyQAbgwADgIQAdgyAdhDQAEgKAXhEQAPgsAgg5QAmhCAmgmQAdgeAzgfQBRgzCQhAQBdgqA2gRICCg2Ig4BO").cp(), this.shape_64.setTransform(326.8, 210), this.addChild(this.shape_64)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 653.6, 420.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.txtBubble_bodyAreas = function() {
                this.initialize(), this.shape_65 = new c.Shape, this.shape_65.graphics.f("#FFFFFF").s().p("AhJBFIgFiJICdAAIiYCJ").cp(), this.shape_65.setTransform(19.7, 33.1), this.shape_66 = new c.Shape, this.shape_66.graphics.f("#FFFFFF").s().rr(-29.9, -13.05, 59.8, 26.1, 3), this.shape_66.setTransform(29.9, 13.1), this.addChild(this.shape_66, this.shape_65)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 59.8, 40.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_leg_up = function() {
                this.initialize(), this.instance = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_leg_up, this.addChild(this.instance)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_leg_over = function() {
                this.initialize(), this.instance_1 = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_leg_over, this.addChild(this.instance_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_arm_up = function() {
                this.initialize(), this.instance_2 = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_arm_up, this.addChild(this.instance_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_arm_over = function() {
                this.initialize(), this.instance_3 = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_arm_over, this.addChild(this.instance_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_abdomen_up = function() {
                this.initialize(), this.instance_4 = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_abdomen_up, this.addChild(this.instance_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_abdomen_over = function() {
                this.initialize(), this.instance_5 = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_entire_abdomen_over, this.addChild(this.instance_5)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_zoomout_up = function() {
                this.initialize(), this.instance_6 = new webmd.p.symptomcheckerLibs.MaleBodyParts.zoom_out_up, this.addChild(this.instance_6)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_zoomout_over = function() {
                this.initialize(), this.instance_7 = new webmd.p.symptomcheckerLibs.MaleBodyParts.zoom_out_over, this.addChild(this.instance_7)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_selectEntire_on = function() {
                this.initialize(), this.instance_8 = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_skin_up, this.addChild(this.instance_8)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_skin_over = function() {
                this.initialize(), this.instance_9 = new webmd.p.symptomcheckerLibs.MaleBodyParts.select_skin_over, this.addChild(this.instance_9)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_frontview_up = function() {
                this.initialize(), this.instance_10 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_view_up, this.addChild(this.instance_10)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_frontview_over = function() {
                this.initialize(), this.instance_11 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_view_over, this.addChild(this.instance_11)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_backview_up = function() {
                this.initialize(), this.instance_12 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_view_up, this.addChild(this.instance_12)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_backview_over = function() {
                this.initialize(), this.instance_13 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_view_over, this.addChild(this.instance_13)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 33, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.bodyArea_background = function() {
                this.initialize(), this.shape_67 = new c.Shape, this.shape_67.graphics.f("#DCEDF7").s().p("AR04rMAAAAxXMgjnAAAMAAAgxXMAjnAAA").cp(), this.shape_67.setTransform(114, 158), this.addChild(this.shape_67)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 228, 316), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_image = function() {
                this.initialize(), this.instance_14 = new webmd.p.symptomcheckerLibs.MaleBodyParts.Front_Large_M, this.instance_14.setTransform(-383.9, -690.9), this.addChild(this.instance_14)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-383.9, -690.9, 768, 1382), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_image = function() {
                this.initialize(), this.instance_15 = new webmd.p.symptomcheckerLibs.MaleBodyParts.Back_Large_M, this.instance_15.setTransform(-383.9, -690.9), this.addChild(this.instance_15)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-383.9, -690.9, 768, 1382), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_pelvis = function() {
                this.initialize(), this.front_btn_hip_53 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_hips, this.front_btn_hip_53.setTransform(94.9, 43.5, 1, 1, 0, 0, 0, 94.9, 43.5), this.front_btn_pelvis_32 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_pelvis, this.front_btn_pelvis_32.setTransform(95.1, 56.2, 1, 1, 0, 0, 0, 50.1, 23.3), this.front_btn_groin_34 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_groin, this.front_btn_groin_34.setTransform(94.7, 73.4, 1, 1, 0, 0, 0, 63.4, 34.4), this.front_btn_genitals_35 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_genitals, this.front_btn_genitals_35.setTransform(94.6, 95.1, 1, 1, 0, 0, 0, 18.3, 14.3), this.addChild(this.front_btn_genitals_35, this.front_btn_groin_34, this.front_btn_pelvis_32, this.front_btn_hip_53)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 189.8, 109), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_neck_1 = function() {
                this.initialize(), this.front_btn_neck_10 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_neck, this.front_btn_neck_10.setTransform(71.6, 36.6, 1, 1, 0, 0, 0, 71.6, 36.6), this.addChild(this.front_btn_neck_10)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 143.2, 73.2), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_leg = function() {
                this.initialize(), this.front_btn_thighs_54 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_thighs, this.front_btn_thighs_54.setTransform(170.6, 158.2, 1, 1, 0, 0, 0, 123.5, 158.4), this.front_btn_knees_56 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_knees, this.front_btn_knees_56.setTransform(170.7, 309, 1, 1, 0, 0, 0, 131.5, 28.2), this.front_btn_shins_58 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_shins, this.front_btn_shins_58.setTransform(170.8, 404.8, 1, 1, 0, 0, 0, 145.3, 95.8), this.front_btn_ankles_60 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_ankles, this.front_btn_ankles_60.setTransform(171.4, 526.6, 1, 1, 0, 0, 0, 147, 28.2), this.front_btn_feet_62 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_feet, this.front_btn_feet_62.setTransform(171.6, 581.1, 1, 1, 0, 0, 0, 166.8, 26.9), this.front_btn_toes_64 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_toes, this.front_btn_toes_64.setTransform(170.5, 629.1, 1, 1, 0, 0, 0, 170.3, 22.4), this.addChild(this.front_btn_toes_64, this.front_btn_feet_62, this.front_btn_ankles_60, this.front_btn_shins_58, this.front_btn_knees_56, this.front_btn_thighs_54)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.2, -.1, 340.5, 651.6), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_head = function() {
                this.initialize(), this.front_btn_skull_2 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_head, this.front_btn_skull_2.setTransform(50.9, 36.1, 1, 1, 0, 0, 0, 46.5, 36.1), this.front_btn_eyes_3 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_eyes, this.front_btn_eyes_3.setTransform(50.4, 71.6, 1, 1, 0, 0, 0, 37.1, 10.8), this.front_btn_nose_6 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_nose, this.front_btn_nose_6.setTransform(49.7, 84.4, 1, 1, 0, 0, 0, 10.5, 17.8), this.front_btn_face_5 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_face, this.front_btn_face_5.setTransform(50.4, 93.5, 1, 1, 0, 0, 0, 39.6, 16.4), this.front_btn_ears_4 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_ears, this.front_btn_ears_4.setTransform(50.5, 92.8, 1, 1, 0, 0, 0, 50.5, 18.5), this.front_btn_mouth_7 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_mouth, this.front_btn_mouth_7.setTransform(51, 115.3, 1, 1, 0, 0, 0, 20.7, 9.3), this.front_btn_jaw_8 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_jaw, this.front_btn_jaw_8.setTransform(51.3, 126.6, 1, 1, 0, 0, 0, 38.3, 20.7), this.addChild(this.front_btn_jaw_8, this.front_btn_mouth_7, this.front_btn_ears_4, this.front_btn_face_5, this.front_btn_nose_6, this.front_btn_eyes_3, this.front_btn_skull_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 101.1, 147.2), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_chest = function() {
                this.initialize(), this.front_btn_sternum_15 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_sternum, this.front_btn_sternum_15.setTransform(102.1, 45.9, 1, 1, 0, 0, 0, 12.4, 38.8), this.front_btn_chest_14 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_chest, this.front_btn_chest_14.setTransform(97.3, 45.8, 1, 1, 0, 0, 0, 97.3, 45.8), this.front_btn_chest_side_18 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_chest_side, this.front_btn_chest_side_18.setTransform(97.4, 106.7, 1, 1, 0, 0, 0, 94.5, 28.9), this.addChild(this.front_btn_chest_side_18, this.front_btn_chest_14, this.front_btn_sternum_15)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 194.6, 135.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_arm = function() {
                this.initialize(), this.front_btn_shoulder_41 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_shoulder, this.front_btn_shoulder_41.setTransform(198.8, 33.3, 1, 1, 0, 0, 0, 26.7, 33.3), this.front_btn_armpit_16 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_armpit, this.front_btn_armpit_16.setTransform(216.3, 83.1, 1, 1, 0, 0, 0, 21.7, 30.1), this.front_btn_tricep_43 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_tricep, this.front_btn_tricep_43.setTransform(205.4, 133, 1, 1, 0, 0, 0, 19.6, 30.7), this.front_btn_bicep_42 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_bicep, this.front_btn_bicep_42.setTransform(185.1, 96.1, 1, 1, 0, 0, 0, 33.9, 49.3), this.front_btn_elbow_44 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_elbow, this.front_btn_elbow_44.setTransform(167.1, 153.8, 1, 1, 0, 0, 0, 25.6, 23.2), this.front_btn_forearm_45 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_forearm, this.front_btn_forearm_45.setTransform(122.6, 208.4, 1, 1, 0, 0, 0, 55.6, 56.5), this.front_btn_wrist_47 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_wrist, this.front_btn_wrist_47.setTransform(77.4, 272.8, 1, 1, 0, 0, 0, 28, 13.7), this.front_btn_palm_49 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_palm, this.front_btn_palm_49.setTransform(54.9, 309, 1, 1, 0, 0, 0, 32.2, 29.6), this.front_btn_fingers_50 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_fingers, this.front_btn_fingers_50.setTransform(34.5, 334.7, 1, 1, 0, 0, 0, 34.5, 46.9), this.addChild(this.front_btn_fingers_50, this.front_btn_palm_49, this.front_btn_wrist_47, this.front_btn_forearm_45, this.front_btn_elbow_44, this.front_btn_bicep_42, this.front_btn_tricep_43, this.front_btn_armpit_16, this.front_btn_shoulder_41)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 231.2, 381.5), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_all = function() {
                this.initialize(), this.front_btn_head = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_head_1, this.front_btn_head.setTransform(306.6, 73.6, 1, 1, 0, 0, 0, 50.5, 73.6), this.front_btn_neck = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_neck, this.front_btn_neck.setTransform(307.7, 165.9, 1, 1, 0, 0, 0, 71.6, 36.6), this.front_btn_arms = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_arms, this.front_btn_arms.setTransform(307.5, 383.2, 1, 1, 0, 0, 0, 307.5, 191.4), this.front_btn_chest = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_chest_1, this.front_btn_chest.setTransform(306.5, 258.2, 1, 1, 0, 0, 0, 97.3, 67.7), this.front_btn_abdomen = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_abdomen, this.front_btn_abdomen.setTransform(308.7, 379.1, 1, 1, 0, 0, 0, 81.3, 96.2), this.front_btn_pelvis = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_pelvis_1, this.front_btn_pelvis.setTransform(309.7, 478.6, 1, 1, 0, 0, 0, 92.1, 57.9), this.front_btn_legs = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_legs, this.front_btn_legs.setTransform(307.5, 788.9, 1, 1, 0, 0, 0, 170.7, 325.9), this.addChild(this.front_btn_legs, this.front_btn_pelvis, this.front_btn_abdomen, this.front_btn_chest, this.front_btn_arms, this.front_btn_neck, this.front_btn_head)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 615, 1114.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.front_top_abdomen = function() {
                this.initialize(), this.front_btn_abdomen_upper_22 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_abdomen_upper, this.front_btn_abdomen_upper_22.setTransform(81.3, 65.8, 1, 1, 0, 0, 0, 80.4, 65.8), this.front_btn_abdomen_lower_24 = new webmd.p.symptomcheckerLibs.MaleBodyParts.front_btn_abdomen_lower, this.front_btn_abdomen_lower_24.setTransform(81.3, 157.7, 1, 1, 0, 0, 0, 81.3, 34.6), this.addChild(this.front_btn_abdomen_lower_24, this.front_btn_abdomen_upper_22)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 162.7, 192.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_neck_1 = function() {
                this.initialize(), this.back_btn_neck_12 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_neck, this.back_btn_neck_12.setTransform(102.3, 34.2, 1.5, 1.5, 0, 0, 0, 68.2, 22.8), this.addChild(this.back_btn_neck_12)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 204.5, 68.3), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_leg = function() {
                this.initialize(), this.back_btn_toes_64 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_toes, this.back_btn_toes_64.setTransform(169.9, 601.1, 1, 1, 0, 0, 0, 169, 19.8), this.back_btn_feet_63 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_feet, this.back_btn_feet_63.setTransform(169.4, 551.5, 1, 1, 0, 0, 0, 165.8, 41.9), this.back_btn_ankles_60 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_ankles, this.back_btn_ankles_60.setTransform(169.2, 460.2, 1, 1, 0, 0, 0, 151.7, 52.8), this.back_btn_calfs_59 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_calfs, this.back_btn_calfs_59.setTransform(168.4, 343.7, 1, 1, 0, 0, 0, 154.5, 69.1), this.back_btn_knees_57 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_knees, this.back_btn_knees_57.setTransform(168, 274.4, 1, 1, 0, 0, 0, 137, 27.4), this.back_btn_hamstring_55 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_hamstring, this.back_btn_hamstring_55.setTransform(168.5, 135.7, 1, 1, 0, 0, 0, 129.2, 135.7), this.addChild(this.back_btn_hamstring_55, this.back_btn_knees_57, this.back_btn_calfs_59, this.back_btn_ankles_60, this.back_btn_feet_63, this.back_btn_toes_64)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.9, 0, 337.9, 620.9), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_head = function() {
                this.initialize(), this.back_btn_ear_4 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_ears, this.back_btn_ear_4.setTransform(51.3, 87.2, 1, 1, 0, 0, 0, 51.3, 19.9), this.back_btn_skull_2 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_skull, this.back_btn_skull_2.setTransform(51.8, 56.5, 1, 1, 0, 0, 0, 47.8, 56.5), this.addChild(this.back_btn_skull_2, this.back_btn_ear_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 103.7, 113), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_buttock = function() {
                this.initialize(), this.back_btn_hip_53 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_hip, this.back_btn_hip_53.setTransform(98.9, 54.9, 1, 1, 0, 0, 0, 98.9, 54.1), this.back_btn_buttock_37 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_buttock, this.back_btn_buttock_37.setTransform(98.7, 64.5, 1, 1, 0, 0, 0, 94.8, 64.5), this.addChild(this.back_btn_buttock_37, this.back_btn_hip_53)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 197.8, 129), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_back = function() {
                this.initialize(), this.back_btn_lower_spine_30 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_lower_spine, this.back_btn_lower_spine_30.setTransform(92.4, 212.9, 1, 1, 0, 0, 0, 14.3, 42.7), this.back_btn_upper_spine_27 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_upper_spine, this.back_btn_upper_spine_27.setTransform(91.9, 88.8, 1, 1, 0, 0, 0, 16.6, 82.8), this.back_btn_back_26 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_back, this.back_btn_back_26.setTransform(96.7, 126.6, 1, 1, 0, 0, 0, 96.9, 125.9), this.addChild(this.back_btn_back_26, this.back_btn_upper_spine_27, this.back_btn_lower_spine_30)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(-.2, .7, 186.4, 256.8), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_arm = function() {
                this.initialize(), this.back_btn_fingers_50 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_fingers, this.back_btn_fingers_50.setTransform(37.9, 370.9, 1, 1, 0, 0, 0, 37.4, 47.6), this.back_btn_hand_48 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_hand, this.back_btn_hand_48.setTransform(58.5, 344.7, 1, 1, 0, 0, 0, 31.4, 26.9), this.back_btn_wrist_47 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_wrist, this.back_btn_wrist_47.setTransform(82.6, 300.2, 1, 1, 0, 0, 0, 30.2, 23.9), this.back_btn_forearm_46 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_forearm, this.back_btn_forearm_46.setTransform(124.2, 232.7, 1, 1, 0, 0, 0, 46.4, 57), this.back_btn_elbow_44 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_elbow, this.back_btn_elbow_44.setTransform(146.4, 192.7, 1, 1, 0, 0, 0, 26.1, 26.5), this.back_btn_tricep_43 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_upper_arm, this.back_btn_tricep_43.setTransform(182, 132.3, 1, 1, 0, 0, 0, 58.8, 61.7), this.back_btn_shoulder_41 = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_shoulder, this.back_btn_shoulder_41.setTransform(216.8, 48.6, 1, 1, 0, 0, 0, 45.3, 48.8), this.addChild(this.back_btn_shoulder_41, this.back_btn_tricep_43, this.back_btn_elbow_44, this.back_btn_forearm_46, this.back_btn_wrist_47, this.back_btn_hand_48, this.back_btn_fingers_50)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(.5, -.2, 258.7, 418.7), (webmd.p.symptomcheckerLibs.MaleBodyParts.back_top_all = function() {
                this.initialize(), this.back_btn_head = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_head, this.back_btn_head.setTransform(330.5, 55.3, 1.002, 1, 0, 0, 0, 51.9, 55.2), this.back_btn_neck = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_neck, this.back_btn_neck.setTransform(327, 133.2, 1, 1, 0, 0, 0, 68.2, 22.8), this.back_btn_arms = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_arms, this.back_btn_arms.setTransform(326.8, 358.9, 1, 1, 0, 0, 0, 326.8, 210), this.back_btn_back = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_back_1, this.back_btn_back.setTransform(328, 278, 1, 1, 0, 0, 0, 92.4, 127.3), this.back_btn_buttock = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_buttock_1, this.back_btn_buttock.setTransform(327.3, 470.6, 1, 1, 0, 0, 0, 100, 66.5), this.back_btn_legs = new webmd.p.symptomcheckerLibs.MaleBodyParts.back_btn_legs, this.back_btn_legs.setTransform(327.9, 821.6, 1, 1, 0, 0, 0, 168.8, 308.9), this.addChild(this.back_btn_legs, this.back_btn_buttock, this.back_btn_back, this.back_btn_arms, this.back_btn_neck, this.back_btn_head)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, .1, 653.6, 1130.4), (webmd.p.symptomcheckerLibs.MaleBodyParts.BodySelectorTooltip = function() {
                this.initialize(), this._bg = new webmd.p.symptomcheckerLibs.MaleBodyParts.txtBubble_bodyAreas, this._bg.setTransform(29.9, 20, 1, 1, 0, 0, 0, 29.9, 20), this.addChild(this._bg)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 59.8, 40.1), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_leg = function() {
                this.initialize(), this._over = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_leg_over, this._over.setTransform(31.8, 27.6, 1, 1, 0, 0, 0, 31.8, 27.6), this._up = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_leg_up, this._up.setTransform(32.8, 27.6, 1, 1, 0, 0, 0, 32.8, 27.6), this.addChild(this._up, this._over)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 64, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_arm = function() {
                this.initialize(), this._over_1 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_arm_over, this._over_1.setTransform(32.5, 27.5, 1, 1, 0, 0, 0, 32.5, 27.5), this._up_1 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_arm_up, this._up_1.setTransform(32.8, 27.9, 1, 1, 0, 0, 0, 32.8, 27.9), this.addChild(this._up_1, this._over_1)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 66, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_abdomen = function() {
                this.initialize(), this._over_2 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_abdomen_over, this._over_2.setTransform(48.5, 27.6, 1, 1, 0, 0, 0, 48.5, 27.6), this._up_2 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_entire_abdomen_up,
                    this._up_2.setTransform(48.5, 27.6, 1, 1, 0, 0, 0, 48.5, 27.6), this.addChild(this._up_2, this._over_2)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 97, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_zoomout = function() {
                this.initialize(), this._over_3 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_zoomout_over, this._over_3.setTransform(18.5, 27, 1, 1, 0, 0, 0, 18.5, 27), this._up_3 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_zoomout_up, this._up_3.setTransform(18.5, 27, 1, 1, 0, 0, 0, 18.5, 27), this.addChild(this._up_3, this._over_3)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 37, 54), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_skin = function() {
                this.initialize(), this._over_4 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_select_skin_over, this._over_4.setTransform(21.3, 28.4, 1, 1, 0, 0, 0, 21.3, 28.4), this._up_4 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_selectEntire_on, this._up_4.setTransform(26.5, 27.9, 1, 1, 0, 0, 0, 26.5, 27.9), this.addChild(this._up_4, this._over_4)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 41, 56), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_frontview = function() {
                this.initialize(), this._over_5 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_frontview_over, this._over_5.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this._up_5 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_frontview_up, this._up_5.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this.addChild(this._up_5, this._over_5)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 35, 55), (webmd.p.symptomcheckerLibs.MaleBodyParts.btn_backview = function() {
                this.initialize(), this._over_6 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_backview_over, this._over_6.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this._up_6 = new webmd.p.symptomcheckerLibs.MaleBodyParts.btn_backview_up, this._up_6.setTransform(24.6, 31.8, 1, 1, 0, 0, 0, 24.6, 31.8), this.addChild(this._up_6, this._over_6)
            }).prototype = d = new c.Container, d.nominalBounds = new c.Rectangle(0, 0, 33, 55)
        }(lib = lib || {}, webmd.p.symptomcheckerFlashImages, createjs = createjs || {});
        var lib, createjs
    }
    define("../easeljs/MaleBodyParts", function() {}),
        function() {
            var a = this,
                b = a._,
                c = {},
                d = Array.prototype,
                e = Object.prototype,
                f = Function.prototype,
                g = d.push,
                h = d.slice,
                i = d.concat,
                j = e.toString,
                k = e.hasOwnProperty,
                l = d.forEach,
                m = d.map,
                n = d.reduce,
                o = d.reduceRight,
                p = d.filter,
                q = d.every,
                r = d.some,
                s = d.indexOf,
                t = d.lastIndexOf,
                u = Array.isArray,
                v = Object.keys,
                w = f.bind,
                x = function(a) {
                    return a instanceof x ? a : this instanceof x ? void(this._wrapped = a) : new x(a)
                };
            "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = x), exports._ = x) : a._ = x, x.VERSION = "1.4.4";
            var y = x.each = x.forEach = function(a, b, d) {
                if (null != a)
                    if (l && a.forEach === l) a.forEach(b, d);
                    else if (a.length === +a.length) {
                    for (var e = 0, f = a.length; f > e; e++)
                        if (b.call(d, a[e], e, a) === c) return
                } else
                    for (var g in a)
                        if (x.has(a, g) && b.call(d, a[g], g, a) === c) return
            };
            x.map = x.collect = function(a, b, c) {
                var d = [];
                return null == a ? d : m && a.map === m ? a.map(b, c) : (y(a, function(a, e, f) {
                    d[d.length] = b.call(c, a, e, f)
                }), d)
            };
            var z = "Reduce of empty array with no initial value";
            x.reduce = x.foldl = x.inject = function(a, b, c, d) {
                var e = arguments.length > 2;
                if (null == a && (a = []), n && a.reduce === n) return d && (b = x.bind(b, d)), e ? a.reduce(b, c) : a.reduce(b);
                if (y(a, function(a, f, g) {
                        e ? c = b.call(d, c, a, f, g) : (c = a, e = !0)
                    }), !e) throw new TypeError(z);
                return c
            }, x.reduceRight = x.foldr = function(a, b, c, d) {
                var e = arguments.length > 2;
                if (null == a && (a = []), o && a.reduceRight === o) return d && (b = x.bind(b, d)), e ? a.reduceRight(b, c) : a.reduceRight(b);
                var f = a.length;
                if (f !== +f) {
                    var g = x.keys(a);
                    f = g.length
                }
                if (y(a, function(h, i, j) {
                        i = g ? g[--f] : --f, e ? c = b.call(d, c, a[i], i, j) : (c = a[i], e = !0)
                    }), !e) throw new TypeError(z);
                return c
            }, x.find = x.detect = function(a, b, c) {
                var d;
                return A(a, function(a, e, f) {
                    return b.call(c, a, e, f) ? (d = a, !0) : void 0
                }), d
            }, x.filter = x.select = function(a, b, c) {
                var d = [];
                return null == a ? d : p && a.filter === p ? a.filter(b, c) : (y(a, function(a, e, f) {
                    b.call(c, a, e, f) && (d[d.length] = a)
                }), d)
            }, x.reject = function(a, b, c) {
                return x.filter(a, function(a, d, e) {
                    return !b.call(c, a, d, e)
                }, c)
            }, x.every = x.all = function(a, b, d) {
                b || (b = x.identity);
                var e = !0;
                return null == a ? e : q && a.every === q ? a.every(b, d) : (y(a, function(a, f, g) {
                    return (e = e && b.call(d, a, f, g)) ? void 0 : c
                }), !!e)
            };
            var A = x.some = x.any = function(a, b, d) {
                b || (b = x.identity);
                var e = !1;
                return null == a ? e : r && a.some === r ? a.some(b, d) : (y(a, function(a, f, g) {
                    return e || (e = b.call(d, a, f, g)) ? c : void 0
                }), !!e)
            };
            x.contains = x.include = function(a, b) {
                return null == a ? !1 : s && a.indexOf === s ? -1 != a.indexOf(b) : A(a, function(a) {
                    return a === b
                })
            }, x.invoke = function(a, b) {
                var c = h.call(arguments, 2),
                    d = x.isFunction(b);
                return x.map(a, function(a) {
                    return (d ? b : a[b]).apply(a, c)
                })
            }, x.pluck = function(a, b) {
                return x.map(a, function(a) {
                    return a[b]
                })
            }, x.where = function(a, b, c) {
                return x.isEmpty(b) ? c ? null : [] : x[c ? "find" : "filter"](a, function(a) {
                    for (var c in b)
                        if (b[c] !== a[c]) return !1;
                    return !0
                })
            }, x.findWhere = function(a, b) {
                return x.where(a, b, !0)
            }, x.max = function(a, b, c) {
                if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.max.apply(Math, a);
                if (!b && x.isEmpty(a)) return -(1 / 0);
                var d = {
                    computed: -(1 / 0),
                    value: -(1 / 0)
                };
                return y(a, function(a, e, f) {
                    var g = b ? b.call(c, a, e, f) : a;
                    g >= d.computed && (d = {
                        value: a,
                        computed: g
                    })
                }), d.value
            }, x.min = function(a, b, c) {
                if (!b && x.isArray(a) && a[0] === +a[0] && a.length < 65535) return Math.min.apply(Math, a);
                if (!b && x.isEmpty(a)) return 1 / 0;
                var d = {
                    computed: 1 / 0,
                    value: 1 / 0
                };
                return y(a, function(a, e, f) {
                    var g = b ? b.call(c, a, e, f) : a;
                    g < d.computed && (d = {
                        value: a,
                        computed: g
                    })
                }), d.value
            }, x.shuffle = function(a) {
                var b, c = 0,
                    d = [];
                return y(a, function(a) {
                    b = x.random(c++), d[c - 1] = d[b], d[b] = a
                }), d
            };
            var B = function(a) {
                return x.isFunction(a) ? a : function(b) {
                    return b[a]
                }
            };
            x.sortBy = function(a, b, c) {
                var d = B(b);
                return x.pluck(x.map(a, function(a, b, e) {
                    return {
                        value: a,
                        index: b,
                        criteria: d.call(c, a, b, e)
                    }
                }).sort(function(a, b) {
                    var c = a.criteria,
                        d = b.criteria;
                    if (c !== d) {
                        if (c > d || void 0 === c) return 1;
                        if (d > c || void 0 === d) return -1
                    }
                    return a.index < b.index ? -1 : 1
                }), "value")
            };
            var C = function(a, b, c, d) {
                var e = {},
                    f = B(b || x.identity);
                return y(a, function(b, g) {
                    var h = f.call(c, b, g, a);
                    d(e, h, b)
                }), e
            };
            x.groupBy = function(a, b, c) {
                return C(a, b, c, function(a, b, c) {
                    (x.has(a, b) ? a[b] : a[b] = []).push(c)
                })
            }, x.countBy = function(a, b, c) {
                return C(a, b, c, function(a, b) {
                    x.has(a, b) || (a[b] = 0), a[b]++
                })
            }, x.sortedIndex = function(a, b, c, d) {
                c = null == c ? x.identity : B(c);
                for (var e = c.call(d, b), f = 0, g = a.length; g > f;) {
                    var h = f + g >>> 1;
                    c.call(d, a[h]) < e ? f = h + 1 : g = h
                }
                return f
            }, x.toArray = function(a) {
                return a ? x.isArray(a) ? h.call(a) : a.length === +a.length ? x.map(a, x.identity) : x.values(a) : []
            }, x.size = function(a) {
                return null == a ? 0 : a.length === +a.length ? a.length : x.keys(a).length
            }, x.first = x.head = x.take = function(a, b, c) {
                return null == a ? void 0 : null == b || c ? a[0] : h.call(a, 0, b)
            }, x.initial = function(a, b, c) {
                return h.call(a, 0, a.length - (null == b || c ? 1 : b))
            }, x.last = function(a, b, c) {
                return null == a ? void 0 : null == b || c ? a[a.length - 1] : h.call(a, Math.max(a.length - b, 0))
            }, x.rest = x.tail = x.drop = function(a, b, c) {
                return h.call(a, null == b || c ? 1 : b)
            }, x.compact = function(a) {
                return x.filter(a, x.identity)
            };
            var D = function(a, b, c) {
                return y(a, function(a) {
                    x.isArray(a) ? b ? g.apply(c, a) : D(a, b, c) : c.push(a)
                }), c
            };
            x.flatten = function(a, b) {
                return D(a, b, [])
            }, x.without = function(a) {
                return x.difference(a, h.call(arguments, 1))
            }, x.uniq = x.unique = function(a, b, c, d) {
                x.isFunction(b) && (d = c, c = b, b = !1);
                var e = c ? x.map(a, c, d) : a,
                    f = [],
                    g = [];
                return y(e, function(c, d) {
                    (b ? d && g[g.length - 1] === c : x.contains(g, c)) || (g.push(c), f.push(a[d]))
                }), f
            }, x.union = function() {
                return x.uniq(i.apply(d, arguments))
            }, x.intersection = function(a) {
                var b = h.call(arguments, 1);
                return x.filter(x.uniq(a), function(a) {
                    return x.every(b, function(b) {
                        return x.indexOf(b, a) >= 0
                    })
                })
            }, x.difference = function(a) {
                var b = i.apply(d, h.call(arguments, 1));
                return x.filter(a, function(a) {
                    return !x.contains(b, a)
                })
            }, x.zip = function() {
                for (var a = h.call(arguments), b = x.max(x.pluck(a, "length")), c = new Array(b), d = 0; b > d; d++) c[d] = x.pluck(a, "" + d);
                return c
            }, x.object = function(a, b) {
                if (null == a) return {};
                for (var c = {}, d = 0, e = a.length; e > d; d++) b ? c[a[d]] = b[d] : c[a[d][0]] = a[d][1];
                return c
            }, x.indexOf = function(a, b, c) {
                if (null == a) return -1;
                var d = 0,
                    e = a.length;
                if (c) {
                    if ("number" != typeof c) return d = x.sortedIndex(a, b), a[d] === b ? d : -1;
                    d = 0 > c ? Math.max(0, e + c) : c
                }
                if (s && a.indexOf === s) return a.indexOf(b, c);
                for (; e > d; d++)
                    if (a[d] === b) return d;
                return -1
            }, x.lastIndexOf = function(a, b, c) {
                if (null == a) return -1;
                var d = null != c;
                if (t && a.lastIndexOf === t) return d ? a.lastIndexOf(b, c) : a.lastIndexOf(b);
                for (var e = d ? c : a.length; e--;)
                    if (a[e] === b) return e;
                return -1
            }, x.range = function(a, b, c) {
                arguments.length <= 1 && (b = a || 0, a = 0), c = arguments[2] || 1;
                for (var d = Math.max(Math.ceil((b - a) / c), 0), e = 0, f = new Array(d); d > e;) f[e++] = a, a += c;
                return f
            }, x.bind = function(a, b) {
                if (a.bind === w && w) return w.apply(a, h.call(arguments, 1));
                var c = h.call(arguments, 2);
                return function() {
                    return a.apply(b, c.concat(h.call(arguments)))
                }
            }, x.partial = function(a) {
                var b = h.call(arguments, 1);
                return function() {
                    return a.apply(this, b.concat(h.call(arguments)))
                }
            }, x.bindAll = function(a) {
                var b = h.call(arguments, 1);
                return 0 === b.length && (b = x.functions(a)), y(b, function(b) {
                    a[b] = x.bind(a[b], a)
                }), a
            }, x.memoize = function(a, b) {
                var c = {};
                return b || (b = x.identity),
                    function() {
                        var d = b.apply(this, arguments);
                        return x.has(c, d) ? c[d] : c[d] = a.apply(this, arguments)
                    }
            }, x.delay = function(a, b) {
                var c = h.call(arguments, 2);
                return setTimeout(function() {
                    return a.apply(null, c)
                }, b)
            }, x.defer = function(a) {
                return x.delay.apply(x, [a, 1].concat(h.call(arguments, 1)))
            }, x.throttle = function(a, b) {
                var c, d, e, f, g = 0,
                    h = function() {
                        g = new Date, e = null, f = a.apply(c, d)
                    };
                return function() {
                    var i = new Date,
                        j = b - (i - g);
                    return c = this, d = arguments, 0 >= j ? (clearTimeout(e), e = null, g = i, f = a.apply(c, d)) : e || (e = setTimeout(h, j)), f
                }
            }, x.debounce = function(a, b, c) {
                var d, e;
                return function() {
                    var f = this,
                        g = arguments,
                        h = function() {
                            d = null, c || (e = a.apply(f, g))
                        },
                        i = c && !d;
                    return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                }
            }, x.once = function(a) {
                var b, c = !1;
                return function() {
                    return c ? b : (c = !0, b = a.apply(this, arguments), a = null, b)
                }
            }, x.wrap = function(a, b) {
                return function() {
                    var c = [a];
                    return g.apply(c, arguments), b.apply(this, c)
                }
            }, x.compose = function() {
                var a = arguments;
                return function() {
                    for (var b = arguments, c = a.length - 1; c >= 0; c--) b = [a[c].apply(this, b)];
                    return b[0]
                }
            }, x.after = function(a, b) {
                return 0 >= a ? b() : function() {
                    return --a < 1 ? b.apply(this, arguments) : void 0
                }
            }, x.keys = v || function(a) {
                if (a !== Object(a)) throw new TypeError("Invalid object");
                var b = [];
                for (var c in a) x.has(a, c) && (b[b.length] = c);
                return b
            }, x.values = function(a) {
                var b = [];
                for (var c in a) x.has(a, c) && b.push(a[c]);
                return b
            }, x.pairs = function(a) {
                var b = [];
                for (var c in a) x.has(a, c) && b.push([c, a[c]]);
                return b
            }, x.invert = function(a) {
                var b = {};
                for (var c in a) x.has(a, c) && (b[a[c]] = c);
                return b
            }, x.functions = x.methods = function(a) {
                var b = [];
                for (var c in a) x.isFunction(a[c]) && b.push(c);
                return b.sort()
            }, x.extend = function(a) {
                return y(h.call(arguments, 1), function(b) {
                    if (b)
                        for (var c in b) a[c] = b[c]
                }), a
            }, x.pick = function(a) {
                var b = {},
                    c = i.apply(d, h.call(arguments, 1));
                return y(c, function(c) {
                    c in a && (b[c] = a[c])
                }), b
            }, x.omit = function(a) {
                var b = {},
                    c = i.apply(d, h.call(arguments, 1));
                for (var e in a) x.contains(c, e) || (b[e] = a[e]);
                return b
            }, x.defaults = function(a) {
                return y(h.call(arguments, 1), function(b) {
                    if (b)
                        for (var c in b) null == a[c] && (a[c] = b[c])
                }), a
            }, x.clone = function(a) {
                return x.isObject(a) ? x.isArray(a) ? a.slice() : x.extend({}, a) : a
            }, x.tap = function(a, b) {
                return b(a), a
            };
            var E = function(a, b, c, d) {
                if (a === b) return 0 !== a || 1 / a == 1 / b;
                if (null == a || null == b) return a === b;
                a instanceof x && (a = a._wrapped), b instanceof x && (b = b._wrapped);
                var e = j.call(a);
                if (e != j.call(b)) return !1;
                switch (e) {
                    case "[object String]":
                        return a == String(b);
                    case "[object Number]":
                        return a != +a ? b != +b : 0 == a ? 1 / a == 1 / b : a == +b;
                    case "[object Date]":
                    case "[object Boolean]":
                        return +a == +b;
                    case "[object RegExp]":
                        return a.source == b.source && a.global == b.global && a.multiline == b.multiline && a.ignoreCase == b.ignoreCase
                }
                if ("object" != typeof a || "object" != typeof b) return !1;
                for (var f = c.length; f--;)
                    if (c[f] == a) return d[f] == b;
                c.push(a), d.push(b);
                var g = 0,
                    h = !0;
                if ("[object Array]" == e) {
                    if (g = a.length, h = g == b.length)
                        for (; g-- && (h = E(a[g], b[g], c, d)););
                } else {
                    var i = a.constructor,
                        k = b.constructor;
                    if (i !== k && !(x.isFunction(i) && i instanceof i && x.isFunction(k) && k instanceof k)) return !1;
                    for (var l in a)
                        if (x.has(a, l) && (g++, !(h = x.has(b, l) && E(a[l], b[l], c, d)))) break;
                    if (h) {
                        for (l in b)
                            if (x.has(b, l) && !g--) break;
                        h = !g
                    }
                }
                return c.pop(), d.pop(), h
            };
            x.isEqual = function(a, b) {
                return E(a, b, [], [])
            }, x.isEmpty = function(a) {
                if (null == a) return !0;
                if (x.isArray(a) || x.isString(a)) return 0 === a.length;
                for (var b in a)
                    if (x.has(a, b)) return !1;
                return !0
            }, x.isElement = function(a) {
                return !(!a || 1 !== a.nodeType)
            }, x.isArray = u || function(a) {
                return "[object Array]" == j.call(a)
            }, x.isObject = function(a) {
                return a === Object(a)
            }, y(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(a) {
                x["is" + a] = function(b) {
                    return j.call(b) == "[object " + a + "]"
                }
            }), x.isArguments(arguments) || (x.isArguments = function(a) {
                return !(!a || !x.has(a, "callee"))
            }), "function" != typeof /./ && (x.isFunction = function(a) {
                return "function" == typeof a
            }), x.isFinite = function(a) {
                return isFinite(a) && !isNaN(parseFloat(a))
            }, x.isNaN = function(a) {
                return x.isNumber(a) && a != +a
            }, x.isBoolean = function(a) {
                return a === !0 || a === !1 || "[object Boolean]" == j.call(a)
            }, x.isNull = function(a) {
                return null === a
            }, x.isUndefined = function(a) {
                return void 0 === a
            }, x.has = function(a, b) {
                return k.call(a, b)
            }, x.noConflict = function() {
                return a._ = b, this
            }, x.identity = function(a) {
                return a
            }, x.times = function(a, b, c) {
                for (var d = Array(a), e = 0; a > e; e++) d[e] = b.call(c, e);
                return d
            }, x.random = function(a, b) {
                return null == b && (b = a, a = 0), a + Math.floor(Math.random() * (b - a + 1))
            };
            var F = {
                escape: {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "/": "&#x2F;"
                }
            };
            F.unescape = x.invert(F.escape);
            var G = {
                escape: new RegExp("[" + x.keys(F.escape).join("") + "]", "g"),
                unescape: new RegExp("(" + x.keys(F.unescape).join("|") + ")", "g")
            };
            x.each(["escape", "unescape"], function(a) {
                x[a] = function(b) {
                    return null == b ? "" : ("" + b).replace(G[a], function(b) {
                        return F[a][b]
                    })
                }
            }), x.result = function(a, b) {
                if (null == a) return null;
                var c = a[b];
                return x.isFunction(c) ? c.call(a) : c
            }, x.mixin = function(a) {
                y(x.functions(a), function(b) {
                    var c = x[b] = a[b];
                    x.prototype[b] = function() {
                        var a = [this._wrapped];
                        return g.apply(a, arguments), L.call(this, c.apply(x, a))
                    }
                })
            };
            var H = 0;
            x.uniqueId = function(a) {
                var b = ++H + "";
                return a ? a + b : b
            }, x.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var I = /(.)^/,
                J = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "	": "t",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                },
                K = /\\|'|\r|\n|\t|\u2028|\u2029/g;
            x.template = function(a, b, c) {
                var d;
                c = x.defaults({}, c, x.templateSettings);
                var e = new RegExp([(c.escape || I).source, (c.interpolate || I).source, (c.evaluate || I).source].join("|") + "|$", "g"),
                    f = 0,
                    g = "__p+='";
                a.replace(e, function(b, c, d, e, h) {
                    return g += a.slice(f, h).replace(K, function(a) {
                        return "\\" + J[a]
                    }), c && (g += "'+\n((__t=(" + c + "))==null?'':_.escape(__t))+\n'"), d && (g += "'+\n((__t=(" + d + "))==null?'':__t)+\n'"), e && (g += "';\n" + e + "\n__p+='"), f = h + b.length, b
                }), g += "';\n", c.variable || (g = "with(obj||{}){\n" + g + "}\n"), g = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + g + "return __p;\n";
                try {
                    d = new Function(c.variable || "obj", "_", g)
                } catch (h) {
                    throw h.source = g, h
                }
                if (b) return d(b, x);
                var i = function(a) {
                    return d.call(this, a, x)
                };
                return i.source = "function(" + (c.variable || "obj") + "){\n" + g + "}", i
            }, x.chain = function(a) {
                return x(a).chain()
            };
            var L = function(a) {
                return this._chain ? x(a).chain() : a
            };
            x.mixin(x), y(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(a) {
                var b = d[a];
                x.prototype[a] = function() {
                    var c = this._wrapped;
                    return b.apply(c, arguments), "shift" != a && "splice" != a || 0 !== c.length || delete c[0], L.call(this, c)
                }
            }), y(["concat", "join", "slice"], function(a) {
                var b = d[a];
                x.prototype[a] = function() {
                    return L.call(this, b.apply(this._wrapped, arguments))
                }
            }), x.extend(x.prototype, {
                chain: function() {
                    return this._chain = !0, this
                },
                value: function() {
                    return this._wrapped
                }
            }), "function" == typeof define && define.amd && define("underscore", [], function() {
                return x
            })
        }.call(this), define("jquery", [], function() {
            return window.jQuery
        }),
        function(a, b) {
            "undefined" != typeof exports ? b(a, exports, require("underscore")) : "function" == typeof define && define.amd ? define("backbone", ["underscore", "jquery", "exports"], function(c, d, e) {
                a.Backbone = b(a, e, c, d)
            }) : a.Backbone = b(a, {}, a._, a.jQuery || a.Zepto || a.ender)
        }(this, function(a, b, c, d) {
            var e = a.Backbone,
                f = [],
                g = f.push,
                h = f.slice,
                i = f.splice;
            b.VERSION = "0.9.10", b.$ = d, b.noConflict = function() {
                return a.Backbone = e, this
            }, b.emulateHTTP = !1, b.emulateJSON = !1;
            var j = /\s+/,
                k = function(a, b, c, d) {
                    if (!c) return !0;
                    if ("object" == typeof c)
                        for (var e in c) a[b].apply(a, [e, c[e]].concat(d));
                    else {
                        if (!j.test(c)) return !0;
                        for (var f = c.split(j), g = 0, h = f.length; h > g; g++) a[b].apply(a, [f[g]].concat(d))
                    }
                },
                l = function(a, b) {
                    var c, d = -1,
                        e = a.length;
                    switch (b.length) {
                        case 0:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx);
                            return;
                        case 1:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, b[0]);
                            return;
                        case 2:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, b[0], b[1]);
                            return;
                        case 3:
                            for (; ++d < e;)(c = a[d]).callback.call(c.ctx, b[0], b[1], b[2]);
                            return;
                        default:
                            for (; ++d < e;)(c = a[d]).callback.apply(c.ctx, b)
                    }
                },
                m = b.Events = {
                    on: function(a, b, c) {
                        if (!k(this, "on", a, [b, c]) || !b) return this;
                        this._events || (this._events = {});
                        var d = this._events[a] || (this._events[a] = []);
                        return d.push({
                            callback: b,
                            context: c,
                            ctx: c || this
                        }), this
                    },
                    once: function(a, b, d) {
                        if (!k(this, "once", a, [b, d]) || !b) return this;
                        var e = this,
                            f = c.once(function() {
                                e.off(a, f), b.apply(this, arguments)
                            });
                        return f._callback = b, this.on(a, f, d), this
                    },
                    off: function(a, b, d) {
                        var e, f, g, h, i, j, l, m;
                        if (!this._events || !k(this, "off", a, [b, d])) return this;
                        if (!a && !b && !d) return this._events = {}, this;
                        for (h = a ? [a] : c.keys(this._events), i = 0, j = h.length; j > i; i++)
                            if (a = h[i], e = this._events[a]) {
                                if (g = [], b || d)
                                    for (l = 0, m = e.length; m > l; l++) f = e[l], (b && b !== f.callback && b !== f.callback._callback || d && d !== f.context) && g.push(f);
                                this._events[a] = g
                            }
                        return this
                    },
                    trigger: function(a) {
                        if (!this._events) return this;
                        var b = h.call(arguments, 1);
                        if (!k(this, "trigger", a, b)) return this;
                        var c = this._events[a],
                            d = this._events.all;
                        return c && l(c, b), d && l(d, arguments), this
                    },
                    listenTo: function(a, b, d) {
                        var e = this._listeners || (this._listeners = {}),
                            f = a._listenerId || (a._listenerId = c.uniqueId("l"));
                        return e[f] = a, a.on(b, "object" == typeof b ? this : d, this), this
                    },
                    stopListening: function(a, b, c) {
                        var d = this._listeners;
                        if (d) {
                            if (a) a.off(b, "object" == typeof b ? this : c, this), b || c || delete d[a._listenerId];
                            else {
                                "object" == typeof b && (c = this);
                                for (var e in d) d[e].off(b, c, this);
                                this._listeners = {}
                            }
                            return this
                        }
                    }
                };
            m.bind = m.on, m.unbind = m.off, c.extend(b, m);
            var n = b.Model = function(a, b) {
                var d, e = a || {};
                this.cid = c.uniqueId("c"), this.attributes = {}, b && b.collection && (this.collection = b.collection), b && b.parse && (e = this.parse(e, b) || {}), (d = c.result(this, "defaults")) && (e = c.defaults({}, e, d)), this.set(e, b), this.changed = {}, this.initialize.apply(this, arguments)
            };
            c.extend(n.prototype, m, {
                changed: null,
                idAttribute: "id",
                initialize: function() {},
                toJSON: function() {
                    return c.clone(this.attributes)
                },
                sync: function() {
                    return b.sync.apply(this, arguments)
                },
                get: function(a) {
                    return this.attributes[a]
                },
                escape: function(a) {
                    return c.escape(this.get(a))
                },
                has: function(a) {
                    return null != this.get(a)
                },
                set: function(a, b, d) {
                    var e, f, g, h, i, j, k, l;
                    if (null == a) return this;
                    if ("object" == typeof a ? (f = a, d = b) : (f = {})[a] = b, d || (d = {}), !this._validate(f, d)) return !1;
                    g = d.unset, i = d.silent, h = [], j = this._changing, this._changing = !0, j || (this._previousAttributes = c.clone(this.attributes), this.changed = {}), l = this.attributes, k = this._previousAttributes, this.idAttribute in f && (this.id = f[this.idAttribute]);
                    for (e in f) b = f[e], c.isEqual(l[e], b) || h.push(e), c.isEqual(k[e], b) ? delete this.changed[e] : this.changed[e] = b, g ? delete l[e] : l[e] = b;
                    if (!i) {
                        h.length && (this._pending = !0);
                        for (var m = 0, n = h.length; n > m; m++) this.trigger("change:" + h[m], this, l[h[m]], d)
                    }
                    if (j) return this;
                    if (!i)
                        for (; this._pending;) this._pending = !1, this.trigger("change", this, d);
                    return this._pending = !1, this._changing = !1, this
                },
                unset: function(a, b) {
                    return this.set(a, void 0, c.extend({}, b, {
                        unset: !0
                    }))
                },
                clear: function(a) {
                    var b = {};
                    for (var d in this.attributes) b[d] = void 0;
                    return this.set(b, c.extend({}, a, {
                        unset: !0
                    }))
                },
                hasChanged: function(a) {
                    return null == a ? !c.isEmpty(this.changed) : c.has(this.changed, a)
                },
                changedAttributes: function(a) {
                    if (!a) return this.hasChanged() ? c.clone(this.changed) : !1;
                    var b, d = !1,
                        e = this._changing ? this._previousAttributes : this.attributes;
                    for (var f in a) c.isEqual(e[f], b = a[f]) || ((d || (d = {}))[f] = b);
                    return d
                },
                previous: function(a) {
                    return null != a && this._previousAttributes ? this._previousAttributes[a] : null
                },
                previousAttributes: function() {
                    return c.clone(this._previousAttributes)
                },
                fetch: function(a) {
                    a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                    var b = a.success;
                    return a.success = function(a, c, d) {
                        return a.set(a.parse(c, d), d) ? void(b && b(a, c, d)) : !1
                    }, this.sync("read", this, a)
                },
                save: function(a, b, d) {
                    var e, f, g, h, i = this.attributes;
                    return null == a || "object" == typeof a ? (e = a, d = b) : (e = {})[a] = b, !e || d && d.wait || this.set(e, d) ? (d = c.extend({
                        validate: !0
                    }, d), this._validate(e, d) ? (e && d.wait && (this.attributes = c.extend({}, i, e)), void 0 === d.parse && (d.parse = !0), f = d.success, d.success = function(a, b, d) {
                        a.attributes = i;
                        var g = a.parse(b, d);
                        return d.wait && (g = c.extend(e || {}, g)), c.isObject(g) && !a.set(g, d) ? !1 : void(f && f(a, b, d))
                    }, g = this.isNew() ? "create" : d.patch ? "patch" : "update", "patch" === g && (d.attrs = e), h = this.sync(g, this, d), e && d.wait && (this.attributes = i), h) : !1) : !1
                },
                destroy: function(a) {
                    a = a ? c.clone(a) : {};
                    var b = this,
                        d = a.success,
                        e = function() {
                            b.trigger("destroy", b, b.collection, a)
                        };
                    if (a.success = function(a, b, c) {
                            (c.wait || a.isNew()) && e(), d && d(a, b, c)
                        }, this.isNew()) return a.success(this, null, a), !1;
                    var f = this.sync("delete", this, a);
                    return a.wait || e(), f
                },
                url: function() {
                    var a = c.result(this, "urlRoot") || c.result(this.collection, "url") || G();
                    return this.isNew() ? a : a + ("/" === a.charAt(a.length - 1) ? "" : "/") + encodeURIComponent(this.id)
                },
                parse: function(a) {
                    return a
                },
                clone: function() {
                    return new this.constructor(this.attributes)
                },
                isNew: function() {
                    return null == this.id
                },
                isValid: function(a) {
                    return !this.validate || !this.validate(this.attributes, a)
                },
                _validate: function(a, b) {
                    if (!b.validate || !this.validate) return !0;
                    a = c.extend({}, this.attributes, a);
                    var d = this.validationError = this.validate(a, b) || null;
                    return d ? (this.trigger("invalid", this, d, b || {}), !1) : !0
                }
            });
            var o = b.Collection = function(a, b) {
                b || (b = {}), b.model && (this.model = b.model), void 0 !== b.comparator && (this.comparator = b.comparator), this.models = [], this._reset(), this.initialize.apply(this, arguments), a && this.reset(a, c.extend({
                    silent: !0
                }, b))
            };
            c.extend(o.prototype, m, {
                model: n,
                initialize: function() {},
                toJSON: function(a) {
                    return this.map(function(b) {
                        return b.toJSON(a)
                    })
                },
                sync: function() {
                    return b.sync.apply(this, arguments)
                },
                add: function(a, b) {
                    a = c.isArray(a) ? a.slice() : [a], b || (b = {});
                    var d, e, f, h, j, k, l, m, n, o;
                    for (l = [], m = b.at, n = this.comparator && null == m && 0 != b.sort, o = c.isString(this.comparator) ? this.comparator : null, d = 0, e = a.length; e > d; d++)(f = this._prepareModel(h = a[d], b)) ? (j = this.get(f)) ? b.merge && (j.set(h === f ? f.attributes : h, b), n && !k && j.hasChanged(o) && (k = !0)) : (l.push(f), f.on("all", this._onModelEvent, this), this._byId[f.cid] = f, null != f.id && (this._byId[f.id] = f)) : this.trigger("invalid", this, h, b);
                    if (l.length && (n && (k = !0), this.length += l.length, null != m ? i.apply(this.models, [m, 0].concat(l)) : g.apply(this.models, l)), k && this.sort({
                            silent: !0
                        }), b.silent) return this;
                    for (d = 0, e = l.length; e > d; d++)(f = l[d]).trigger("add", f, this, b);
                    return k && this.trigger("sort", this, b), this
                },
                remove: function(a, b) {
                    a = c.isArray(a) ? a.slice() : [a], b || (b = {});
                    var d, e, f, g;
                    for (d = 0, e = a.length; e > d; d++) g = this.get(a[d]), g && (delete this._byId[g.id], delete this._byId[g.cid], f = this.indexOf(g), this.models.splice(f, 1), this.length--, b.silent || (b.index = f, g.trigger("remove", g, this, b)), this._removeReference(g));
                    return this
                },
                push: function(a, b) {
                    return a = this._prepareModel(a, b), this.add(a, c.extend({
                        at: this.length
                    }, b)), a
                },
                pop: function(a) {
                    var b = this.at(this.length - 1);
                    return this.remove(b, a), b
                },
                unshift: function(a, b) {
                    return a = this._prepareModel(a, b), this.add(a, c.extend({
                        at: 0
                    }, b)), a
                },
                shift: function(a) {
                    var b = this.at(0);
                    return this.remove(b, a), b
                },
                slice: function(a, b) {
                    return this.models.slice(a, b)
                },
                get: function(a) {
                    return null == a ? void 0 : (this._idAttr || (this._idAttr = this.model.prototype.idAttribute), this._byId[a.id || a.cid || a[this._idAttr] || a])
                },
                at: function(a) {
                    return this.models[a]
                },
                where: function(a) {
                    return c.isEmpty(a) ? [] : this.filter(function(b) {
                        for (var c in a)
                            if (a[c] !== b.get(c)) return !1;
                        return !0
                    })
                },
                sort: function(a) {
                    if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
                    return a || (a = {}), c.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(c.bind(this.comparator, this)), a.silent || this.trigger("sort", this, a), this
                },
                pluck: function(a) {
                    return c.invoke(this.models, "get", a)
                },
                update: function(a, b) {
                    b = c.extend({
                        add: !0,
                        merge: !0,
                        remove: !0
                    }, b), b.parse && (a = this.parse(a, b));
                    var d, e, f, g, h = [],
                        i = [],
                        j = {};
                    if (c.isArray(a) || (a = a ? [a] : []), b.add && !b.remove) return this.add(a, b);
                    for (e = 0, f = a.length; f > e; e++) d = a[e], g = this.get(d), b.remove && g && (j[g.cid] = !0), (b.add && !g || b.merge && g) && h.push(d);
                    if (b.remove)
                        for (e = 0, f = this.models.length; f > e; e++) d = this.models[e], j[d.cid] || i.push(d);
                    return i.length && this.remove(i, b), h.length && this.add(h, b), this
                },
                reset: function(a, b) {
                    b || (b = {}), b.parse && (a = this.parse(a, b));
                    for (var d = 0, e = this.models.length; e > d; d++) this._removeReference(this.models[d]);
                    return b.previousModels = this.models.slice(), this._reset(), a && this.add(a, c.extend({
                        silent: !0
                    }, b)), b.silent || this.trigger("reset", this, b), this
                },
                fetch: function(a) {
                    a = a ? c.clone(a) : {}, void 0 === a.parse && (a.parse = !0);
                    var b = a.success;
                    return a.success = function(a, c, d) {
                        var e = d.update ? "update" : "reset";
                        a[e](c, d), b && b(a, c, d)
                    }, this.sync("read", this, a)
                },
                create: function(a, b) {
                    if (b = b ? c.clone(b) : {}, !(a = this._prepareModel(a, b))) return !1;
                    b.wait || this.add(a, b);
                    var d = this,
                        e = b.success;
                    return b.success = function(a, b, c) {
                        c.wait && d.add(a, c), e && e(a, b, c)
                    }, a.save(null, b), a
                },
                parse: function(a) {
                    return a
                },
                clone: function() {
                    return new this.constructor(this.models)
                },
                _reset: function() {
                    this.length = 0, this.models.length = 0, this._byId = {}
                },
                _prepareModel: function(a, b) {
                    if (a instanceof n) return a.collection || (a.collection = this), a;
                    b || (b = {}), b.collection = this;
                    var c = new this.model(a, b);
                    return c._validate(a, b) ? c : !1
                },
                _removeReference: function(a) {
                    this === a.collection && delete a.collection, a.off("all", this._onModelEvent, this)
                },
                _onModelEvent: function(a, b, c, d) {
                    ("add" !== a && "remove" !== a || c === this) && ("destroy" === a && this.remove(b, d), b && a === "change:" + b.idAttribute && (delete this._byId[b.previous(b.idAttribute)], null != b.id && (this._byId[b.id] = b)), this.trigger.apply(this, arguments))
                },
                sortedIndex: function(a, b, d) {
                    b || (b = this.comparator);
                    var e = c.isFunction(b) ? b : function(a) {
                        return a.get(b)
                    };
                    return c.sortedIndex(this.models, a, e, d)
                }
            });
            var p = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"];
            c.each(p, function(a) {
                o.prototype[a] = function() {
                    var b = h.call(arguments);
                    return b.unshift(this.models), c[a].apply(c, b)
                }
            });
            var q = ["groupBy", "countBy", "sortBy"];
            c.each(q, function(a) {
                o.prototype[a] = function(b, d) {
                    var e = c.isFunction(b) ? b : function(a) {
                        return a.get(b)
                    };
                    return c[a](this.models, e, d)
                }
            });
            var r = b.Router = function(a) {
                    a || (a = {}), a.routes && (this.routes = a.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
                },
                s = /\((.*?)\)/g,
                t = /(\(\?)?:\w+/g,
                u = /\*\w+/g,
                v = /[\-{}\[\]+?.,\\\^$|#\s]/g;
            c.extend(r.prototype, m, {
                initialize: function() {},
                route: function(a, d, e) {
                    return c.isRegExp(a) || (a = this._routeToRegExp(a)), e || (e = this[d]), b.history.route(a, c.bind(function(c) {
                        var f = this._extractParameters(a, c);
                        e && e.apply(this, f), this.trigger.apply(this, ["route:" + d].concat(f)), this.trigger("route", d, f), b.history.trigger("route", this, d, f)
                    }, this)), this
                },
                navigate: function(a, c) {
                    return b.history.navigate(a, c), this
                },
                _bindRoutes: function() {
                    if (this.routes)
                        for (var a, b = c.keys(this.routes); null != (a = b.pop());) this.route(a, this.routes[a])
                },
                _routeToRegExp: function(a) {
                    return a = a.replace(v, "\\$&").replace(s, "(?:$1)?").replace(t, function(a, b) {
                        return b ? a : "([^/]+)"
                    }).replace(u, "(.*?)"), new RegExp("^" + a + "$")
                },
                _extractParameters: function(a, b) {
                    return a.exec(b).slice(1)
                }
            });
            var w = b.History = function() {
                    this.handlers = [], c.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
                },
                x = /^[#\/]|\s+$/g,
                y = /^\/+|\/+$/g,
                z = /msie [\w.]+/,
                A = /\/$/;
            w.started = !1, c.extend(w.prototype, m, {
                interval: 50,
                getHash: function(a) {
                    var b = (a || this).location.href.match(/#(.*)$/);
                    return b ? b[1] : ""
                },
                getFragment: function(a, b) {
                    if (null == a)
                        if (this._hasPushState || !this._wantsHashChange || b) {
                            a = this.location.pathname;
                            var c = this.root.replace(A, "");
                            a.indexOf(c) || (a = a.substr(c.length))
                        } else a = this.getHash();
                    return a.replace(x, "")
                },
                start: function(a) {
                    if (w.started) throw new Error("Backbone.history has already been started");
                    w.started = !0, this.options = c.extend({}, {
                        root: "/"
                    }, this.options, a), this.root = this.options.root, this._wantsHashChange = this.options.hashChange !== !1, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
                    var d = this.getFragment(),
                        e = document.documentMode,
                        f = z.exec(navigator.userAgent.toLowerCase()) && (!e || 7 >= e);
                    this.root = ("/" + this.root + "/").replace(y, "/"), f && this._wantsHashChange && (this.iframe = b.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(d)), this._hasPushState ? b.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !f ? b.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = d;
                    var g = this.location,
                        h = g.pathname.replace(/[^\/]$/, "$&/") === this.root;
                    return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !h ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && h && g.hash && (this.fragment = this.getHash().replace(x, ""), this.history.replaceState({}, document.title, this.root + this.fragment + g.search)), this.options.silent ? void 0 : this.loadUrl())
                },
                stop: function() {
                    b.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), w.started = !1
                },
                route: function(a, b) {
                    this.handlers.unshift({
                        route: a,
                        callback: b
                    })
                },
                checkUrl: function() {
                    var a = this.getFragment();
                    return a === this.fragment && this.iframe && (a = this.getFragment(this.getHash(this.iframe))), a === this.fragment ? !1 : (this.iframe && this.navigate(a), void(this.loadUrl() || this.loadUrl(this.getHash())))
                },
                loadUrl: function(a) {
                    var b = this.fragment = this.getFragment(a),
                        d = c.any(this.handlers, function(a) {
                            return a.route.test(b) ? (a.callback(b), !0) : void 0
                        });
                    return d
                },
                navigate: function(a, b) {
                    if (!w.started) return !1;
                    if (b && b !== !0 || (b = {
                            trigger: b
                        }), a = this.getFragment(a || ""), this.fragment !== a) {
                        this.fragment = a;
                        var c = this.root + a;
                        if (this._hasPushState) this.history[b.replace ? "replaceState" : "pushState"]({}, document.title, c);
                        else {
                            if (!this._wantsHashChange) return this.location.assign(c);
                            this._updateHash(this.location, a, b.replace), this.iframe && a !== this.getFragment(this.getHash(this.iframe)) && (b.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, a, b.replace))
                        }
                        b.trigger && this.loadUrl(a)
                    }
                },
                _updateHash: function(a, b, c) {
                    if (c) {
                        var d = a.href.replace(/(javascript:|#).*$/, "");
                        a.replace(d + "#" + b)
                    } else a.hash = "#" + b
                }
            }), b.history = new w;
            var B = b.View = function(a) {
                    this.cid = c.uniqueId("view"), this._configure(a || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
                },
                C = /^(\S+)\s*(.*)$/,
                D = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
            c.extend(B.prototype, m, {
                tagName: "div",
                $: function(a) {
                    return this.$el.find(a)
                },
                initialize: function() {},
                render: function() {
                    return this
                },
                remove: function() {
                    return this.$el.remove(), this.stopListening(), this
                },
                setElement: function(a, c) {
                    return this.$el && this.undelegateEvents(), this.$el = a instanceof b.$ ? a : b.$(a), this.el = this.$el[0], c !== !1 && this.delegateEvents(), this
                },
                delegateEvents: function(a) {
                    if (a || (a = c.result(this, "events"))) {
                        this.undelegateEvents();
                        for (var b in a) {
                            var d = a[b];
                            if (c.isFunction(d) || (d = this[a[b]]), !d) throw new Error('Method "' + a[b] + '" does not exist');
                            var e = b.match(C),
                                f = e[1],
                                g = e[2];
                            d = c.bind(d, this), f += ".delegateEvents" + this.cid,
                                "" === g ? this.$el.on(f, d) : this.$el.on(f, g, d)
                        }
                    }
                },
                undelegateEvents: function() {
                    this.$el.off(".delegateEvents" + this.cid)
                },
                _configure: function(a) {
                    this.options && (a = c.extend({}, c.result(this, "options"), a)), c.extend(this, c.pick(a, D)), this.options = a
                },
                _ensureElement: function() {
                    if (this.el) this.setElement(c.result(this, "el"), !1);
                    else {
                        var a = c.extend({}, c.result(this, "attributes"));
                        this.id && (a.id = c.result(this, "id")), this.className && (a["class"] = c.result(this, "className"));
                        var d = b.$("<" + c.result(this, "tagName") + ">").attr(a);
                        this.setElement(d, !1)
                    }
                }
            });
            var E = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            };
            b.sync = function(a, d, e) {
                var f = E[a];
                c.defaults(e || (e = {}), {
                    emulateHTTP: b.emulateHTTP,
                    emulateJSON: b.emulateJSON
                });
                var g = {
                    type: f,
                    dataType: "json"
                };
                if (e.url || (g.url = c.result(d, "url") || G()), null != e.data || !d || "create" !== a && "update" !== a && "patch" !== a || (g.contentType = "application/json", g.data = JSON.stringify(e.attrs || d.toJSON(e))), e.emulateJSON && (g.contentType = "application/x-www-form-urlencoded", g.data = g.data ? {
                        model: g.data
                    } : {}), e.emulateHTTP && ("PUT" === f || "DELETE" === f || "PATCH" === f)) {
                    g.type = "POST", e.emulateJSON && (g.data._method = f);
                    var h = e.beforeSend;
                    e.beforeSend = function(a) {
                        return a.setRequestHeader("X-HTTP-Method-Override", f), h ? h.apply(this, arguments) : void 0
                    }
                }
                "GET" === g.type || e.emulateJSON || (g.processData = !1);
                var i = e.success;
                e.success = function(a) {
                    i && i(d, a, e), d.trigger("sync", d, a, e)
                };
                var j = e.error;
                e.error = function(a) {
                    j && j(d, a, e), d.trigger("error", d, a, e)
                };
                var k = e.xhr = b.ajax(c.extend(g, e));
                return d.trigger("request", d, k, e), k
            }, b.ajax = function() {
                return b.$.ajax.apply(b.$, arguments)
            };
            var F = function(a, b) {
                var d, e = this;
                d = a && c.has(a, "constructor") ? a.constructor : function() {
                    return e.apply(this, arguments)
                }, c.extend(d, e, b);
                var f = function() {
                    this.constructor = d
                };
                return f.prototype = e.prototype, d.prototype = new f, a && c.extend(d.prototype, a), d.__super__ = e.prototype, d
            };
            n.extend = o.extend = r.extend = B.extend = w.extend = F;
            var G = function() {
                throw new Error('A "url" property or function must be specified')
            };
            return b
        }), define("util", ["underscore", "backbone", "module"], function(a, b, c) {
            "use strict";

            function d(a) {
                return a = String(a), a.length < 2 ? "0" + a : a
            }
            var e = {};
            return e.COOKIE_VISITORID = "VisitorId", e.DEFAULT_TIMEOUT = 15e3, e.REGISTRATION_APPID = 22, e.MINIMUM_USER_AGE = 13, e.capitalize = function(a) {
                return a.charAt(0).toUpperCase() + a.slice(1)
            }, e.formatDate = function(a) {
                var b = a.getDate(),
                    c = a.getMonth(),
                    e = a.getFullYear();
                return d(c + 1) + "/" + d(b) + "/" + e
            }, e.getAge = function(a) {
                var b = new Date,
                    c = b.getFullYear() - a.getFullYear(),
                    d = b.getMonth() - a.getMonth();
                return (0 > d || 0 === d && b.getDate() < a.getDate()) && c--, c
            }, e.isIE8NoFlash = function() {
                var a = !1,
                    b = $("html");
                if (b.hasClass("browserIE_8") || b.hasClass("IEDocMode_8")) {
                    var c = null;
                    try {
                        c = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")
                    } catch (d) {}
                    if (null == c) a = !0;
                    else {
                        var e, f, g, h;
                        try {
                            e = c.GetVariable("$version")
                        } catch (i) {
                            return !1
                        }
                        f = e.replace(/^.*?([0-9]+,[0-9]+).*$/, "$1").split(","), g = parseInt(f[0], 10), h = parseInt(f[1], 10), 11 >= g && 11 == g && 2 > h && (a = !0)
                    }
                }
                return a
            }, e.IE8NoFlashWarning = function() {
                $(function() {
                    var a = '<div class="no-flash">The WebMD Symptom Checker requires Flash 11.2 or higher in order to run.<br />Please <a onclick="{clickevent}" href="{href}" target="_blank">download Adobe Flash Player</a> to continue.</div>',
                        b = window.location.href,
                        c = {
                            clickevent: "",
                            href: "http://get.adobe.com/flashplayer/"
                        };
                    b.indexOf("webmd.com") > -1 ? (c.href = "/click?url=http%3A%2F%2Fget.adobe.com%2Fflashplayer%2F", c.clickevent = "return sl( this, 'nw', 'sc-flashdwnld');") : (b.indexOf("medicinenet.com") > -1 || b.indexOf("rxlist.com") > -1) && (c.clickevent = "wmdPageLink('sc-flashdwnld'); popupWarning();"), $("#sc_fmt").html(webmd.substitute(a, c))
                })
            }, e.ellipsis = function(a, b) {
                return b = b || 10, a.length > b && (a = a.slice(0, b - 1) + "â€¦"), a
            }, e.isLoggedIn = function() {
                return b.app.isLoggedIn()
            }, e.xdmDomain = function() {
                var a, b = "https://www.webmd.com",
                    c = /webmd\.com$/.test(document.location.hostname);
                return a = c ? webmd.url.addLifecycleAndEnv(b) : b
            }, e.getScappUrlRoot = function() {
                var a, b = "webmd.com" === webmd.url.getSLD();
                return a = b ? "" : "https://www" + e.getLifecycle() + e.getEnv() + ".webmd.com"
            }, e.getEnv = function() {
                return "webmd.com" === webmd.url.getSLD() ? webmd.url.getEnv() : webmd.url.getEnv(c.config().image_server_url)
            }, e.getLifecycle = function() {
                return "webmd.com" === webmd.url.getSLD() ? webmd.url.getLifecycle() : webmd.url.getLifecycle(c.config().image_server_url)
            }, e.metrics = {
                productIdentifier: "sc",
                click: function(b, c, d) {
                    var e, f;
                    e = ["reg-success", "nl-sc"], f = b, -1 === a.indexOf(e, b) && (f = this.productIdentifier + "-" + f), c && (f += "_" + c), d ? wmdTrack(f) : wmdPageLink(f)
                },
                page: function(a) {
                    var c, d = window.s_pagename || "",
                        e = b.history.fragment.replace("View", "");
                    d.indexOf("/") > -1 && (d = d.slice(0, d.lastIndexOf("/"))), d += a ? "/" + a : "", window.opener || (c = webmd.p.symptomchecker.sponsor ? d.slice(d.indexOf("/") + 1) : null, window.s_md.prop45 = window.s_sponsored_uri = window.s_sponUri = c), webmd.object.exists("metrics.createPageviewId", webmd) && "condition" !== e && webmd.metrics.createPageviewId(), wmdPageview(d), window.s_pagename = d
                }
            }, e.bodyParts = {
                1: "Head",
                2: "Scalp",
                3: "Eye",
                4: "Ear",
                5: "Face",
                6: "Nose",
                7: "Mouth",
                8: "Jaw",
                10: "Neck (front)",
                12: "Neck (back)",
                14: "Chest",
                15: "Sternum",
                16: "Armpit",
                18: "Lateral Chest",
                20: "Abdomen",
                22: "Upper Abdomen",
                24: "Lower Abdomen",
                26: "Back",
                27: "Upper Spine",
                30: "Lower Spine",
                32: "Pelvis",
                34: "Groin",
                35: "Genitals",
                37: "Buttock",
                40: "Arm",
                41: "Shoulder",
                42: "Upper Arm (bicep)",
                43: "Upper Arm (tricep)",
                44: "Elbow",
                45: "Forearm (flexor)",
                46: "Forearm",
                47: "Wrist",
                48: "Hand",
                49: "Palm",
                50: "Fingers",
                52: "Legs",
                53: "Hip",
                54: "Thigh",
                55: "Hamstring",
                56: "Knee",
                57: "Back of Knee",
                58: "Shin",
                59: "Calf",
                60: "Ankle",
                61: "Achilles",
                62: "Foot",
                63: "Sole",
                64: "Toes",
                65: "Great toe",
                66: "General",
                68: "Skin",
                71: "Everywhere"
            }, e.conditionViewTitles = {
                condition_description: "{Name} Overview",
                what_to_expect: "What to Expect",
                made_worse_by: "Made Worse By",
                how_its_diagnosed: "Diagnosed By",
                how_common: "How Common",
                questions_to_ask_your_dr: "Questions to Ask Your Doctor",
                treatment: "Treatment",
                self_care: "Self Care",
                risk_factors: "Risk Factors",
                when_to_see_a_doctor: "When to See Your Doctor",
                emergency: "Emergency",
                prevention: "Prevention",
                resources: "Resources"
            }, e.conditionViewModuleDisplayOrder = {
                chronic: ["symptoms", "condition_description", "what_to_expect", "how_common", "risk_factors", "treatment", "self_care", "when_to_see_a_doctor", "questions_to_ask_your_dr", "how_its_diagnosed", "made_worse_by", "webmd_answers", "community", "emergency"],
                "urgent emergency": ["symptoms", "condition_description", "emergency", "what_to_expect", "made_worse_by", "treatment", "self_care", "when_to_see_a_doctor", "questions_to_ask_your_dr", "how_its_diagnosed", "webmd_answers", "community", "how_common", "risk_factors"],
                contagious: ["symptoms", "condition_description", "what_to_expect", "risk_factors", "how_common", "prevention", "treatment", "self_care", "when_to_see_a_doctor", "questions_to_ask_your_dr", "how_its_diagnosed", "made_worse_by", "webmd_answers", "community", "emergency"],
                common: ["symptoms", "condition_description", "what_to_expect", "how_common", "treatment", "self_care", "made_worse_by", "when_to_see_a_doctor", "questions_to_ask_your_dr", "how_its_diagnosed", "risk_factors", "community", "webmd_answers", "emergency"],
                rare: ["symptoms", "condition_description", "what_to_expect", "how_common", "risk_factors", "treatment", "self_care", "made_worse_by", "when_to_see_a_doctor", "questions_to_ask_your_dr", "how_its_diagnosed", "resources", "community", "webmd_answers", "emergency"]
            }, e.slugify = function(a) {
                return a = a.toLowerCase(), a.replace(/[^\w\s]/gi, "").replace(/\s+/g, "-")
            }, e.generateUUID = function(a, b) {
                for (b = a = ""; a++ < 36; b += 51 * a & 52 ? (15 ^ a ? 8 ^ Math.random() * (20 ^ a ? 16 : 4) : 4).toString(16) : "-");
                return b
            }, e.getVisitorId = function() {
                var a = this.COOKIE_VISITORID,
                    b = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                return webmd.cookie.exists(a) || (b = e.generateUUID(b), webmd.cookie.set(a, b)), webmd.cookie.get(a)
            }, e.generateRandom = function() {
                return (new Date).getTime()
            }, e.scrollToElement = function(a) {
                var b = {
                        animation: {
                            easing: "swing",
                            duration: "500"
                        },
                        extraSpace: 0,
                        scrollSelector: "html, body"
                    },
                    c = $.extend(!0, {}, b, a);
                c.targetSelector && (c.verticalPosition = $(c.targetSelector).outerHeight() + c.extraSpace, $(c.scrollSelector).animate({
                    scrollTop: c.verticalPosition
                }, c.animation))
            }, e
        }), define("router", ["backbone", "util"], function(a, b) {
            "use strict";
            return a.Router.extend({
                routes: {
                    introView: "intro",
                    symptomsView: "symptoms",
                    conditionView: "condition"
                },
                initialize: function() {
                    a.on("startOver", function() {
                        this.navigate("/introView", !0), b.scrollToElement({
                            targetSelector: "#header_ctr",
                            extraSpace: 10
                        })
                    }, this)
                },
                intro: function() {
                    b.metrics.page("default.htm")
                },
                symptoms: function() {
                    b.metrics.page("choose-symptoms")
                },
                condition: function() {}
            })
        }),
        function(a) {
            var b = function(a, b) {
                "use strict";
                var c = function(a, c) {
                        this.version = "0.4.1a", c = b.extend({
                            ignore: []
                        }, c);
                        var d = new e(a, c),
                            g = new f(a, c),
                            h = function(a, b) {
                                a && d.deserialize(a, b)
                            };
                        this.store = function() {
                            var a = d.serialize();
                            g.push(a)
                        }, this.restore = function(a) {
                            var b = g.pop();
                            h(b, a)
                        }, this.restart = function(a) {
                            var b = g.rewind();
                            h(b, a)
                        }
                    },
                    d = function(b) {
                        b instanceof a.Model ? (this.removeAttr = function(a) {
                            b.unset(a)
                        }, this.restore = function(a) {
                            b.set(a)
                        }) : (this.removeAttr = function(a) {
                            b.remove(a)
                        }, this.restore = function(a) {
                            b.reset(a)
                        })
                    },
                    e = function(a, c) {
                        function e(a, c) {
                            if (a = b.clone(a), c.hasOwnProperty("ignore") && c.ignore.length > 0)
                                for (var d in c.ignore) {
                                    var e = c.ignore[d];
                                    delete a[e]
                                }
                            return a
                        }

                        function f(a, b) {
                            var c = [];
                            if (!a || !b) return c;
                            for (var d in b) b.hasOwnProperty(d) && (a.hasOwnProperty(d) || c.push(d));
                            return c
                        }

                        function g(a, b) {
                            for (var c in b) {
                                var d = b[c];
                                i.removeAttr(d)
                            }
                        }

                        function h(b, c) {
                            var d = e(b, c),
                                h = a.toJSON();
                            h = e(h, c);
                            var j = f(d, h);
                            g(a, j), i.restore(d)
                        }
                        var i = new d(a);
                        this.serialize = function() {
                            var b = a.toJSON();
                            return b = e(b, c)
                        }, this.deserialize = function(a, d) {
                            d = b.extend({}, c, d), h(a, d)
                        }
                    },
                    f = function() {
                        function a() {
                            b = []
                        }
                        var b;
                        this.push = function(a) {
                            b.push(a)
                        }, this.pop = function() {
                            var a = b.pop();
                            return a
                        }, this.rewind = function() {
                            var c = b[0];
                            return a(), c
                        }, a()
                    };
                return c
            };
            "function" == typeof define && define.amd ? define("backbone.memento", ["backbone", "underscore"], function(a, c) {
                return b(a, c)
            }) : (a.Backbone = Backbone || {}, a.Backbone.Memento = b(Backbone, _))
        }(this), define("text", {}), define("jst", {
            load: function(a) {
                throw new Error("Dynamic load not allowed: " + a)
            }
        }), define("jst!templates/errors/newsletter.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="sc-overlay">\r\n	<div class="sc-nl-error">We apologize, but we were unable to process your subscription request.  Please try again later.</div>\r\n</div>';
                return __p
            }
        }), define("models/person", ["require", "underscore", "backbone", "util", "backbone.memento", "jst!templates/errors/newsletter.jst", "newsletter/1/service"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("backbone.memento"),
                f = a("jst!templates/errors/newsletter.jst");
            return c.Model.extend({
                defaults: {
                    id: null,
                    firstName: null,
                    middleName: null,
                    lastName: null,
                    address: {
                        city: "",
                        country: 1,
                        state: null,
                        streetAddress1: "",
                        streetAddress2: "",
                        zip: ""
                    },
                    emailAddress: null,
                    emailAddressStatus: null,
                    oldEmailAddress: null,
                    gender: null,
                    relationship: 0,
                    permissionToMarket: 0,
                    status: !0,
                    photo: null,
                    prefix: "",
                    suffix: "",
                    updatedBy: null,
                    updatedDate: null,
                    mOB: null,
                    dOB: null,
                    yOB: null,
                    extraDetails: null,
                    deleted: !1
                },
                urlRoot: function() {
                    var a = d.xdmDomain() + "/api/Reg/RegAPI.svc/json2";
                    return a
                },
                initialize: function() {
                    b.extend(this, new e(this)), this.on("change:id", this.onCreate, this)
                },
                meta: function() {
                    return c.app.meta.findByPersonId(this.id)
                },
                isActive: function() {
                    return this.meta() && "active" === this.meta().get("instanceId")
                },
                isVisible: function() {
                    return this.id === this.constructor.ANONYMOUS.id || this.id === this.constructor.ME.id || this.isActive()
                },
                isAnonymous: function() {
                    return this.id === this.constructor.ANONYMOUS.id
                },
                isRegistered: function() {
                    return c.app.isLoggedIn() && !this.isAnonymous()
                },
                onCreate: function() {
                    var a = this;
                    c.app.meta.deferred.done(function() {
                        if (a.meta()) throw new Error('Person "' + a.get("firstName") + '" already has a meta record.');
                        c.app.meta.create({
                            personId: a.id
                        })
                    })
                },
                getDisplayName: function() {
                    var a;
                    switch (this.get("relationship")) {
                        case this.constructor.RELATION_NONE:
                            a = c.app.isLoggedIn() ? "Anonymous" : "Someone Else";
                            break;
                        case this.constructor.RELATION_SELF:
                            a = "Me";
                            break;
                        default:
                            a = this.get("firstName")
                    }
                    return a
                },
                getBirthdate: function() {
                    return new Date(Number(this.get("yOB")), Number(this.get("mOB")) - 1, Number(this.get("dOB")))
                },
                getAge: function() {
                    return d.getAge(this.getBirthdate())
                },
                hasAge: function() {
                    return this.has("yOB")
                },
                getNormalizedAge: function() {
                    return this.constructor.normalizeAge(this.getAge())
                },
                setAge: function(a) {
                    var b = new Date,
                        c = b.getMonth(),
                        d = b.getDate(),
                        e = b.getFullYear() - Number(a);
                    return this.set({
                        mOB: c,
                        dOB: d,
                        yOB: e
                    })
                },
                parse: function(a) {
                    if ("fail" === a.stat) throw new Error(a.data.msg);
                    return a.data && (a.id = a.data.personas[0].personIdField, a.address = {
                        zip: c.app.people.self().get("address").zip
                    }), delete a.code, delete a.stat, delete a.data, a
                },
                validate: function(a) {
                    if (a.relationship) {
                        var c = b(this.constructor.relationships).chain().keys().map(function(a) {
                            return Number(a)
                        }).value();
                        if (-1 === b.indexOf(c, a.relationship)) return "Relation is not valid"
                    }
                },
                unparse: function() {
                    var a = c.Model.prototype.toJSON.call(this);
                    return a.id && (a.personId = a.id), b.each(["id", "deleted"], function(b) {
                        delete a[b]
                    }), a.address = null, a = this._fixFieldNames(a)
                },
                _fixFieldNames: function(a) {
                    var c, d, e = {};
                    for (c in a) d = c + "Field", e[d] = b.isObject(a[c]) ? this._fixFieldNames(a[c]) : a[c];
                    return e
                },
                sync: function(a, e, f) {
                    var g, h;
                    if (b.defaults(f, {
                            type: "POST",
                            dataType: "json",
                            contentType: "application/json"
                        }), g = b.result(e, "urlRoot"), !f.url) switch (a) {
                        case "create":
                            f.url = g + "/adddep";
                            break;
                        case "update":
                            f.url = g + "/updatedep";
                            break;
                        case "delete":
                            f.url = g + "/deletedep";
                            break;
                        default:
                            throw new Error("Fetching single person data is not supported")
                    }
                    return !f.data && e && ("create" === a ? h = [e.unparse()] : "update" === a ? h = [{
                        personIdField: e.id,
                        personDataField: e.unparse()
                    }] : "delete" === a && (h = [e.id]), f.url = webmd.url.addParam("random", d.generateRandom(), f.url), f.data = JSON.stringify(h)), "GET" === f.type || c.emulateJSON || (f.processData = !1), c.sync(a, e, f)
                },
                destroy: function(a) {
                    return this.trigger("before:destroy", this, this.collection, a), c.Model.prototype.destroy.call(this, a)
                },
                registerForNewsletter: function(d) {
                    var e, g = a("newsletter/1/service"),
                        h = this;
                    return b.indexOf(c.app.emailAddressesRegistered, this.get("emailAddress")) > -1 ? !1 : g.subscribe({
                        email: this.get("emailAddress"),
                        id: d,
                        privacy: "on" === this.get("privacy") ? 1 : ""
                    }).done(function() {
                        c.app.emailAddressesRegistered.push(h.get("emailAddress"))
                    }).fail(function(a, b) {
                        "timeout" === b && (e = f(), webmd.overlay.open({
                            html: e,
                            height: "100px",
                            width: "600px",
                            scrolling: !1
                        }))
                    })
                },
                onSymptomSetCreateSuccess: function() {
                    -1 === b.indexOf(c.app.meta.pluck("itemState"), !0) && $.ajax({
                        url: "/api/reg/myappsapi.svc/json/registerapp",
                        type: "POST",
                        contentType: "application/json; charset=utf-8",
                        data: JSON.stringify({
                            appId: 1
                        })
                    });
                    var a = this.meta();
                    a.get("itemState") === !1 && a.save({
                        itemState: !0
                    })
                }
            }, {
                ME: {
                    id: "1",
                    firstName: "Me",
                    gender: 1,
                    relationship: 12
                },
                SOMEONE_ELSE: {
                    id: "0",
                    firstName: "Someone Else",
                    gender: 1,
                    relationship: 0
                },
                ANONYMOUS: {
                    id: "0",
                    firstName: "Anonymous",
                    gender: 1,
                    relationship: 0
                },
                GENDER_MALE: 1,
                GENDER_FEMALE: 2,
                genders: {
                    1: "Male",
                    2: "Female"
                },
                relationships: {
                    0: "None",
                    1: "Spouse",
                    2: "Son",
                    3: "Daughter",
                    4: "Mother",
                    5: "Father",
                    6: "Grandmother",
                    7: "Grandfather",
                    8: "Relative",
                    9: "Friend",
                    10: "Patient",
                    11: "Other",
                    12: "Self"
                },
                RELATION_NONE: 0,
                RELATION_SELF: 12,
                agesMap: [{
                    min: 0,
                    max: 2,
                    key: 1,
                    label: "Check for Someone 0-2 years"
                }, {
                    min: 3,
                    max: 6,
                    key: 4,
                    label: "Check for Someone 3-6 years"
                }, {
                    min: 7,
                    max: 12,
                    key: 8,
                    label: "Check for Someone 7-12 years"
                }, {
                    min: 13,
                    max: 17,
                    key: 14,
                    label: "13-17 years"
                }, {
                    min: 18,
                    max: 24,
                    key: 20,
                    label: "18-24 years"
                }, {
                    min: 25,
                    max: 34,
                    key: 30,
                    label: "25-34 years"
                }, {
                    min: 35,
                    max: 44,
                    key: 40,
                    label: "35-44 years"
                }, {
                    min: 45,
                    max: 54,
                    key: 50,
                    label: "45-54 years"
                }, {
                    min: 55,
                    max: 64,
                    key: 60,
                    label: "55-64 years"
                }, {
                    min: 65,
                    max: 200,
                    key: 65,
                    label: "Over 65"
                }],
                ageRange: function(a) {
                    var c = this.normalizeAge(Number(a)),
                        d = b.find(this.agesMap, function(a) {
                            return Number(a.key) === Number(c)
                        });
                    return d.label
                },
                normalizeAge: function(a) {
                    var a, c;
                    return a = Number(a), c = b.find(this.agesMap, function(b) {
                        return a >= Number(b.min) && a <= Number(b.max)
                    }), Number(c.key)
                },
                editableRelationships: function() {
                    var a = {};
                    return b.each(this.relationships, function(b, c) {
                        return "Self" === b || "None" === b ? !0 : void(a[c] = b)
                    }), a
                },
                months: function() {
                    var a = {};
                    return b.each(b.range(1, 13), function(b) {
                        a[b] = 10 > b ? "0" + b : "" + b
                    }), a
                },
                days: function() {
                    var a = {};
                    return b.each(b.range(1, 32), function(b) {
                        a[b] = 10 > b ? "0" + b : "" + b
                    }), a
                },
                years: function() {
                    var a = [],
                        c = (new Date).getFullYear();
                    return b.each(b.range(c, c - 101, -1), function(b) {
                        a.push(b)
                    }), a
                }
            })
        }), define("collections/people", ["underscore", "backbone", "util", "models/person"], function(a, b, c, d) {
            "use strict";
            return b.Collection.extend({
                url: function() {
                    var a = c.xdmDomain() + "/api/Reg/RegAPI.svc/json2/dependant";
                    return a = webmd.url.addParam("random", c.generateRandom(), a)
                },
                model: d,
                deferred: null,
                initialize: function() {
                    this.deferred = new $.Deferred
                },
                comparator: function(a) {
                    return a.get("relationship") === this.model.RELATION_SELF ? -1 : a.get("relationship") === this.model.RELATION_NONE ? 1 / 0 : a.id
                },
                load: function() {
                    var a, b = this;
                    return c.isLoggedIn() ? (a = new b.model(b.model.ANONYMOUS), this.fetch({
                        success: function() {
                            a.get("address").zip = b.self().get("address").zip, b.add(a), b.deferred.resolve()
                        }
                    })) : (this.add([this.model.ME, this.model.SOMEONE_ELSE]), b.deferred.resolve()), b
                },
                self: function() {
                    return this.where({
                        relationship: this.model.RELATION_SELF
                    })[0]
                },
                registered: function() {
                    return this.filter(function(a) {
                        return a.isRegistered()
                    })
                },
                active: function() {
                    return this.filter(function(a) {
                        return a.isActive()
                    })
                },
                editable: function() {
                    var b = this;
                    return a.reject(b.active(), function(a) {
                        return a.get("relationship") === b.model.RELATION_SELF
                    })
                },
                visible: function() {
                    var a = new b.Collection;
                    return this.each(function(b) {
                        b.isVisible() && a.add(b)
                    }), a
                },
                dependants: function() {
                    var a = this;
                    return this.filter(function(b) {
                        return b.get("relationship") !== a.model.RELATION_SELF && b.id !== a.model.ANONYMOUS.id
                    })
                },
                fetch: function(d) {
                    var e = {
                        timeout: c.DEFAULT_TIMEOUT,
                        error: function(a, c) {
                            b.trigger("ajaxerror", a, c)
                        }
                    };
                    return a.defaults(d, e), b.Collection.prototype.fetch.apply(this, arguments)
                },
                parse: function(b) {
                    var c, d, e = this,
                        f = [];
                    return a.each(b.data.persons, function(a) {
                        c = e._fixFields(a), c.id = c.personId, delete c.personId, f.push(c)
                    }), d = a.findWhere(f, {
                        relationship: e.model.RELATION_SELF
                    }), a.map(f, function(a) {
                        a.address.zip = d.address.zip
                    }), f
                },
                _fixFields: function(b) {
                    var c, d, e, f = {};
                    for (e in b) c = e.replace("Field", ""), d = "" === b[e] ? null : b[e], f[c] = a.isObject(b[e]) ? this._fixFields(b[e]) : d;
                    return f
                }
            })
        }), define("models/meta", ["underscore", "backbone"], function(a, b) {
            "use strict";
            return b.Model.extend({
                defaults: {
                    personId: "",
                    instanceId: "active",
                    itemState: !1,
                    entrydate: new Date,
                    updateddate: new Date
                },
                person: function() {
                    return b.app.people.get(this.get("personId"))
                },
                parse: function(b) {
                    return b.instanceid && (b.id = b.instanceid, delete b.instanceid), a.each(["Data", "StatusCode", "ErrorMessage"], function(a) {
                        delete b[a]
                    }), b
                },
                sync: function(b, c, d) {
                    var e, f, g;
                    if (f = d.success, d.success = function(a) {
                            f && f(c, a, d), c.trigger("sync", c, a, d)
                        }, g = d.error, d.error = function(a) {
                            g && g(c, a, d), c.trigger("error", c, a, d)
                        }, "create" === b) return e = {
                        app: "symchecker",
                        data: {
                            datagroup: "meta",
                            session_name: c.get("itemState"),
                            session_data: c.get("instanceId"),
                            targetobjid: c.get("personId")
                        }
                    }, a.extend(d, e), webmd.papi.add(d);
                    if ("delete" === b) return e = {
                        app: "symchecker",
                        ids: c.id
                    }, a.extend(d, e), webmd.papi.deleteEntry(d);
                    if ("update" === b) return e = {
                        app: "symchecker",
                        id: c.id,
                        data: {
                            datagroup: "meta",
                            session_name: c.get("itemState"),
                            session_data: c.get("instanceId"),
                            targetobjid: c.get("personId")
                        }
                    }, a.extend(d, e), webmd.papi.update(d);
                    throw new Error("Sync method " + b + " not implemented")
                }
            })
        }), define("collections/meta", ["underscore", "backbone", "models/meta", "models/person"], function(a, b, c, d) {
            "use strict";
            return b.Collection.extend({
                model: c,
                deferred: null,
                initialize: function() {
                    this.deferred = new $.Deferred, b.app.people.on("remove", this.reconcileRecords, this)
                },
                load: function() {
                    var a = this;
                    return b.app.isLoggedIn() ? a.fetch({
                        success: function() {
                            a.reconcileRecords({
                                success: function() {
                                    a.deferred.resolve()
                                }
                            })
                        },
                        error: function(a, c) {
                            b.trigger("ajaxerror", a, c)
                        }
                    }) : a.deferred.resolve(), a
                },
                findByPersonId: function(a) {
                    return this.find(function(b) {
                        return b.get("personId") === a
                    })
                },
                orphaned: function() {
                    return this.filter(function(a) {
                        return void 0 === a.person()
                    })
                },
                pending: function() {
                    var a = [];
                    return b.app.people.each(function(b) {
                        b.id !== d.ANONYMOUS.id && void 0 === b.meta() && a.push({
                            personId: b.id
                        })
                    }), a
                },
                reconcileRecords: function(c) {
                    var d, e, f, g = this,
                        h = {};
                    f = c.success || function() {}, c.success = function() {
                        g.ensureOneIsActive({
                            success: f
                        })
                    }, $.when(b.app.people.deferred).done(function() {
                        d = g.orphaned(), e = g.pending(), a.each(d, function(a) {
                            h[a.id] = new $.Deferred, a.destroy({
                                success: function() {
                                    h[a.id].resolve()
                                }
                            })
                        }), a.each(e, function(a) {
                            h[a.personId] = new $.Deferred, g.create(a, {
                                success: function() {
                                    h[a.personId].resolve()
                                }
                            })
                        }), $.when.apply($, a.toArray(h)).done(c.success)
                    })
                },
                ensureOneIsActive: function(c) {
                    var d, e = a.uniq(this.pluck("instanceId"));
                    1 === e.length && "hidden" === e[0] ? (d = b.app.people.self(), d.meta().set({
                        instanceId: "active"
                    }).save({
                        success: c.success
                    })) : c.success()
                },
                parse: function(b) {
                    delete b.appid;
                    var c = [];
                    return a.each(b, function(a, b) {
                        c.push({
                            id: b,
                            entrydate: a.entrydate,
                            updateddate: a.updateddate,
                            instanceId: a.session_data,
                            itemState: "true" === a.session_name,
                            personId: a.targetobjid.toString()
                        })
                    }), c
                },
                sync: function(b, c, d) {
                    var e, f;
                    if ("read" === b) return f = {
                        app: "symchecker",
                        group: "meta"
                    }, e = d.success, d.success = function(a) {
                        e && e(c, a, d), c.trigger("sync", c, a, d)
                    }, a.extend(d, f), webmd.papi.get(d);
                    throw new Error("Sync method " + b + " not implemented")
                }
            })
        }), define("models/symptom", ["underscore", "backbone", "util"], function(a, b, c) {
            "use strict";
            return b.Model.extend({
                findQualifierClassByID: function(b) {
                    return a.findWhere(this.get("qualifierclasses"), {
                        id: Number(b)
                    })
                },
                findQualByID: function(b) {
                    b = Number(b);
                    var c = a.pluck(this.get("qualifierclasses"), "quals"),
                        d = [];
                    return a.each(c, function(a) {
                        d = d.concat(a)
                    }), a.findWhere(d, {
                        id: b
                    })
                },
                getDisplayName: function() {
                    var a = this.collection.where({
                            sid: this.get("sid")
                        }),
                        b = this.get("name");
                    return (a.length > 1 || this.collection.sourceType && "bodypart" !== this.collection.sourceType) && (b += " (" + c.bodyParts[this.get("bodyPartID")] + ")"), b
                },
                resetQualifiers: function() {
                    var b = a.pluck(this.get("qualifierclasses"), "quals");
                    a.each(b, function(b) {
                        a.each(b, function(a) {
                            a.selected = !1
                        })
                    })
                },
                parse: function(a) {
                    return a.bodyPartID && (a.bodyPartID = Number(a.bodyPartID)), a
                }
            })
        }), define("collections/symptoms", ["require", "underscore", "backbone", "backbone.memento", "models/symptom", "util"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("backbone.memento"),
                e = a("models/symptom"),
                f = a("util");
            return c.Collection.extend({
                model: e,
                url: function() {
                    var a = f.getScappUrlRoot() + "/scapp/SymptomCheckerAPI.svc/";
                    return a
                },
                sourceType: null,
                sourceValue: null,
                initialize: function() {
                    b.extend(this, new d(this))
                },
                parse: function(a) {
                    var c = this,
                        d = [];
                    return b.each(a.data.symptoms, function(a) {
                        var e = {
                            sid: a.id,
                            name: a.nm,
                            CommonSymptomRank: a.rk,
                            SeverityText: a.txt,
                            qualifierclasses: [],
                            sourceType: c.sourceType,
                            sourceValue: c.sourceValue
                        };
                        e.bodyPartID = "search" === c.sourceType ? a.locs[0].id : String(c.sourceValue), e.id = e.bodyPartID + "-" + e.sid, b.each(a.qclss, function(a) {
                            var c = {
                                id: a.id,
                                type: a.ty,
                                name: a.nm,
                                question: a.q,
                                mediaClass: a.mcl,
                                mediaLocation: a.mloc,
                                quals: []
                            };
                            b.each(a.quals, function(a) {
                                c.quals.push({
                                    id: a.id,
                                    value: a.vl,
                                    mediaClass: a.mcl,
                                    mediaLocation: a.mloc,
                                    OverRideQuestionClassIdsAttName: a.ovrids || [],
                                    SeverityText: a.txt,
                                    selected: !1
                                })
                            }), c.quals.push({
                                id: 0,
                                value: "None of the above",
                                mediaClass: "",
                                mediaLocation: "",
                                OverRideQuestionClassIdsAttName: [],
                                SeverityText: "",
                                selected: !1
                            }), e.qualifierclasses.push(c)
                        }), d.push(e)
                    }), d
                },
                fetch: function(a) {
                    return a.bodypartid ? (this.sourceType = "bodypart", this.sourceValue = Number(a.bodypartid)) : a.search_term && (this.sourceType = "search", this.sourceValue = a.search_term), b.extend(a, {
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        data: this._buildBodyForRequestOptions(a)
                    }), a.url || (a.url = this._getURLForRequestOptions(a)), c.Collection.prototype.fetch.call(this, a)
                },
                _getURLForRequestOptions: function(a) {
                    var c = b.result(this, "url");
                    return a.bodypartid ? c += "symptoms" : a.search_term && (c += "symptomsearch"), c
                },
                _buildBodyForRequestOptions: function(a) {
                    var b, d = a.person || c.app.session.get("person"),
                        e = f.getVisitorId();
                    if (b = {
                            request: {
                                user: {
                                    age: d.getAge(),
                                    gender: 1 === d.get("gender") ? "M" : "F",
                                    zip: d.get("address").zip,
                                    vid: e
                                },
                                locale: c.app.options.locale
                            }
                        }, a.bodypartid) b.request.bodypartid = a.bodypartid;
                    else {
                        if (!a.search_term) throw new Error("No bodypartid or search_term provided");
                        b.request.searchterm = a.search_term
                    }
                    return JSON.stringify(b)
                },
                getBodyPartIDs: function() {
                    return b.uniq(this.pluck("bodyPartID"))
                }
            })
        }), define("jst!templates/symptomsets/save-confirmation.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay_save_symptoms_conf" class="sc-overlay">\r\n	<h1>Confirmation</h1>\r\n    <h2>You&#8217;ve saved ' + (null == (__t = setName) ? "" : _.escape(__t)) + " for " + (null == (__t = personName) ? "" : _.escape(__t)) + ".</h2>\r\n    <p>You can access your saved symptoms from your personal homepage and manage them in your account.</p>\r\n    <form>\r\n        <button type='submit' class='webmd-btn webmd-btn-pr webmd-btn-xs'>OK</button>\r\n    </form>\r\n</div>\r\n";
                return __p
            }
        }), define("views/symptomsets/save-confirmation", ["require", "underscore", "backbone", "jst!templates/symptomsets/save-confirmation.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("jst!templates/symptomsets/save-confirmation.jst");
            return c.View.extend({
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                okay: function() {
                    return this.remove(), !1
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    var a = d({
                        setName: this.model.get("session_name"),
                        personName: this.model.person().getDisplayName()
                    });
                    return webmd.overlay.open({
                        html: a,
                        scrolling: !1
                    }), this.setElement($("#overlay_save_symptoms_conf")), this.$("form").live("submit", this.okay), this
                }
            })
        }), define("models/symptomset", ["require", "underscore", "backbone", "collections/symptoms", "views/symptomsets/save-confirmation"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("collections/symptoms"),
                e = a("views/symptomsets/save-confirmation");
            return c.Model.extend({
                defaults: function() {
                    return {
                        entrydate: new Date,
                        updateddate: new Date,
                        targetobjid: "",
                        targetobjtype: "",
                        datagroup: "",
                        session_name: "",
                        session_data: [],
                        symptoms: new d
                    }
                },
                isClone: !1,
                initialize: function() {
                    this.on("change:id", this.onSave, this), this.listenTo(this.get("symptoms"), "all", this.onSymptomsChange)
                },
                canBeSaved: function() {
                    return this.isNew() && !this.isClone && !c.app.offlineMode && this.get("symptoms").length
                },
                onSave: function() {
                    new e({
                        model: this
                    }), this.person().onSymptomSetCreateSuccess()
                },
                onSymptomsChange: function() {
                    this.isClone = !1
                },
                parse: function(a) {
                    return a.instanceid && (a.id = a.instanceid, delete a.instanceid), a.session_data && "string" == typeof a.session_data && (a.session_data = JSON.parse(a.session_data)), b.each(["Data", "StatusCode", "ErrorMessage"], function(b) {
                        delete a[b]
                    }), a
                },
                sync: function(a, c, d) {
                    var e, f, g;
                    if (f = d.success, d.success = function(a) {
                            f && f(c, a, d), c.trigger("sync", c, a, d)
                        }, g = d.error, d.error = function(a) {
                            g && g(c, a, d), c.trigger("error", c, a, d)
                        }, "create" === a) return e = {
                        app: "symchecker",
                        data: c.toPAPI()
                    }, b.extend(d, e), webmd.papi.add(d);
                    if ("delete" === a) return e = {
                        app: "symchecker",
                        ids: c.id
                    }, b.extend(d, e), webmd.papi.deleteEntry(d);
                    throw new Error("Sync method " + a + " not implemented")
                },
                toJSON: function() {
                    var a = c.Model.prototype.toJSON.call(this);
                    return a.symptoms = a.symptoms.toJSON(), a
                },
                toPAPI: function() {
                    var a = this.toJSON();
                    return b.each(a.symptoms, function(a) {
                        a.bpid = a.bodyPartID, a.qq = [], b.each(a.qualifierclasses, function(c) {
                            b.each(c.quals, function(b) {
                                b.selected && "0" !== b.id && a.qq.push({
                                    qid: b.id
                                })
                            })
                        }), b.each(b.keys(a), function(c) {
                            -1 === b.indexOf(["sid", "bpid", "qq"], c) && delete a[c]
                        })
                    }), a.session_data = JSON.stringify(a.symptoms), b.each(["person", "symptoms"], function(b) {
                        delete a[b]
                    }), a
                },
                person: function() {
                    return c.app.people.get(this.get("datagroup"))
                },
                isPersonValid: function(a, c) {
                    var e, f, g, h = this,
                        i = this.get("symptoms").length ? "symptoms" : "session_data",
                        j = {},
                        k = [],
                        l = !0;
                    h.get("symptoms").store(), f = "symptoms" === i ? this.get("symptoms").pluck("bodyPartID") : b.pluck(this.get("session_data"), "bpid"), f = b.uniq(f), b.each(f, function(b) {
                        j[b] = new $.Deferred, e = new d, e.fetch({
                            bodypartid: b,
                            person: a,
                            async: !1,
                            success: function() {
                                j[b].resolve()
                            },
                            error: function() {
                                j[b].reject()
                            }
                        }), k.push(e)
                    }), $.when.apply($, b.toArray(j)).done(function() {
                        var e = new d;
                        b.each(k, function(a) {
                            e.add(a.models)
                        }), "symptoms" === i ? h.get("symptoms").each(function(a) {
                            void 0 === e.get(a.id) && (l = !1)
                        }) : b.each(h.get("session_data"), function(a) {
                            g = e.where({
                                sid: a.sid,
                                bodyPartID: a.bpid
                            }), 0 === g.length && (l = !1)
                        }), h.get("symptoms").restore(), c.success(l, a)
                    })
                },
                isHydrated: function() {
                    return this.get("symptoms").length > 0
                },
                hydrate: function(a) {
                    var e, f, g, h = this,
                        i = {},
                        j = [],
                        k = new c.Collection,
                        l = [],
                        m = [];
                    return this.isHydrated() ? a.success() : (b.each(this.get("session_data"), function(a) {
                        l.push({
                            id: a.bpid + "-" + a.sid,
                            sid: a.sid,
                            bodyPartID: a.bpid
                        })
                    }), e = b.uniq(b.pluck(l, "bodyPartID")), b.each(e, function(a) {
                        i[a] = new $.Deferred, f = new d, f.fetch({
                            bodypartid: a,
                            person: h.person(),
                            async: !1,
                            success: function() {
                                i[a].resolve()
                            },
                            error: function() {
                                i[a].reject()
                            }
                        }), j.push(f)
                    }), void $.when.apply($, b.toArray(i)).done(function() {
                        var c = new d;
                        b.each(j, function(a) {
                            c.add(a.models), a.reset()
                        }), b.each(l, function(a) {
                            k.add(c.get(a.id))
                        }), b.each(h.get("session_data"), function(a) {
                            m = [], a.qq.length && (b.each(a.qq, function(a) {
                                m.push(a.qid)
                            }), g = k.get(a.bpid + "-" + a.sid), b.each(g.get("qualifierclasses"), function(a) {
                                b.each(a.quals, function(a) {
                                    b.indexOf(m, a.id) > -1 && (a.selected = !0)
                                })
                            }))
                        }), h.get("symptoms").reset(k.models), a.success()
                    }))
                }
            })
        }), define("collections/symptomsets", ["underscore", "backbone", "models/symptomset"], function(a, b, c) {
            "use strict";
            return b.Collection.extend({
                model: c,
                deferred: null,
                initialize: function() {
                    this.deferred = new $.Deferred, b.app.people.on("remove", this.deleteOrphans, this)
                },
                load: function() {
                    var a = this;
                    return b.app.isLoggedIn() ? a.fetch({
                        success: function() {
                            a.deleteOrphans({
                                success: function() {
                                    a.deferred.resolve()
                                }
                            })
                        },
                        error: function(a, c) {
                            b.trigger("ajaxerror", a, c)
                        }
                    }) : a.deferred.resolve(), a
                },
                comparator: function(a) {
                    return -a.get("entrydate")
                },
                parse: function(b) {
                    delete b.appid;
                    var c = [];
                    return a.each(b, function(a, b) {
                        return "meta" === a.datagroup ? !0 : (a.id = b, void c.push(a))
                    }), c
                },
                sync: function(b, c, d) {
                    var e, f;
                    if ("read" === b) return f = {
                        app: "symchecker"
                    }, e = d.success, d.success = function(a) {
                        e && e(c, a, d), c.trigger("sync", c, a, d)
                    }, a.extend(d, f), webmd.papi.get(d);
                    throw new Error("Sync method " + b + " not implemented")
                },
                deleteOrphans: function(c) {
                    var d, e = this,
                        f = {};
                    c.success = c.success || function() {}, $.when(b.app.people.deferred).done(function() {
                        d = e.orphans(), a.each(d, function(a) {
                            f[a.id] = new $.Deferred, a.destroy({
                                success: function() {
                                    f[a.id].resolve()
                                }
                            })
                        }), $.when.apply($, a.toArray(f)).done(c.success)
                    })
                },
                orphans: function() {
                    var a = [];
                    return this.each(function(b) {
                        b.person() || a.push(b)
                    }), a
                }
            })
        }), define("collections/availablesymptoms", ["underscore", "backbone", "collections/symptoms"], function(a, b, c) {
            "use strict";
            return c.extend({
                initialize: function() {
                    b.on("startOver", this.reset, this)
                },
                comparator: function(a) {
                    return a.getDisplayName()
                },
                matchesModelSource: function(a) {
                    return a.get("sourceType") === this.sourceType && a.get("sourceValue") === this.sourceValue
                },
                parse: function(d) {
                    d = c.prototype.parse.call(this, d);
                    var e = [];
                    return a.each(d, function(a) {
                        b.app.session.get("symptomSet").get("symptoms").get(a.id) || e.push(a)
                    }), e
                }
            })
        }), define("collections/scapp/conditionsymptoms", ["underscore", "backbone", "util"], function(a, b, c) {
            "use strict";
            return b.Collection.extend({
                url: function() {
                    var a = c.getScappUrlRoot() + "/scapp/SymptomCheckerAPI.svc/symptomsbycondition";
                    return a
                },
                initialize: function() {
                    this.deferred = new $.Deferred
                },
                fetch: function(c) {
                    c = c || {};
                    var d = this,
                        e = c.success;
                    return c.success = function(a, b, c) {
                        e && e(a, b, c), d.deferred.resolve()
                    }, a.extend(c, {
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        data: this._buildRequestBody(c)
                    }), b.Collection.prototype.fetch.call(this, c)
                },
                _buildRequestBody: function(a) {
                    var d, e = b.app.session.get("person"),
                        f = c.getVisitorId();
                    return d = {
                        request: {
                            locale: b.app.options.locale,
                            conditionid: a.id,
                            user: {
                                age: e.getAge(),
                                gender: 1 === e.get("gender") ? "M" : "F",
                                zip: e.get("address").zip,
                                vid: f
                            }
                        }
                    }, JSON.stringify(d)
                },
                parse: function(b) {
                    var c = [];
                    return a.each(b.data.symptoms, function(b) {
                        var d = {
                            id: b.id,
                            name: b.nm,
                            bodyparts: []
                        };
                        a.each(b.bps, function(a) {
                            d.bodyparts.push({
                                id: a.id,
                                name: a.nm
                            })
                        }), c.push(d)
                    }), c
                }
            })
        }), define("models/scapp/condition", ["backbone", "collections/scapp/conditionsymptoms"], function(a, b) {
            "use strict";
            return a.Model.extend({
                defaults: {
                    chronic_id: null,
                    condition_chronic_id: null,
                    contentCUI: null,
                    contenturl: "",
                    level: "",
                    name: "",
                    severity: "0",
                    topicID: null,
                    weight: "1"
                },
                initialize: function() {
                    this.symptoms = new b
                },
                fetchSymptoms: function() {
                    this.symptoms.fetch({
                        id: this.id
                    })
                }
            })
        }), define("collections/scapp/conditions", ["require", "underscore", "backbone", "models/scapp/condition", "util"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("models/scapp/condition"),
                e = a("util");
            return c.Collection.extend({
                model: d,
                url: function() {
                    var a = e.getScappUrlRoot() + "/scapp/SymptomCheckerAPI.svc/conditions";
                    return a
                },
                initialize: function() {
                    c.app.session.on("change:symptomSet", this.bindSymptomsEvents, this), c.on("startOver", this.reset, this), this.bindSymptomsEvents()
                },
                bindSymptomsEvents: function() {
                    this.symptoms = c.app.session.get("symptomSet").get("symptoms"), this.stopListening(null, null, this.onSymptomsEvent), this.listenTo(this.symptoms, "add remove change:qualifierclasses", this.onSymptomsEvent)
                },
                onSymptomsEvent: function() {
                    this.symptoms.length ? this.fetch() : this.reset()
                },
                parse: function(a) {
                    var c = b.map(a.data.conditions, function(a) {
                        return {
                            id: a.id,
                            name: a.name,
                            severity: a.sev,
                            weight: a.weight,
                            contenturl: a.curl,
                            contentCUI: a.ccui,
                            topicID: a.tid,
                            chronic_id: a.chronid,
                            condition_chronic_id: a.conchronid,
                            level: a.lev
                        }
                    });
                    return c
                },
                fetch: function(a) {
                    return a || (a = {}), b.extend(a, {
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json; charset=utf-8",
                        data: this._buildRequestBody()
                    }), c.Collection.prototype.fetch.call(this, a)
                },
                _buildRequestBody: function() {
                    var a, d = c.app.session.get("person"),
                        f = e.getVisitorId();
                    return a = {
                        request: {
                            user: {
                                age: d.getAge(),
                                gender: 1 === d.get("gender") ? "M" : "F",
                                zip: d.get("address").zip,
                                vid: f
                            },
                            locale: c.app.options.locale,
                            maxconditions: 200,
                            bodyparts: []
                        }
                    }, b.each(c.app.session.get("symptomSet").get("symptoms").getBodyPartIDs(), function(d) {
                        var e = {
                            id: d,
                            symptoms: []
                        };
                        b.each(c.app.session.get("symptomSet").get("symptoms").where({
                            bodyPartID: d
                        }), function(a) {
                            var c = {
                                id: a.get("sid"),
                                qclss: []
                            };
                            b.each(a.get("qualifierclasses"), function(a) {
                                var d = {
                                    quals: []
                                };
                                b.each(a.quals, function(a) {
                                    a.selected && 0 !== a.id && d.quals.push({
                                        id: a.id
                                    })
                                }), c.qclss.push(d)
                            }), e.symptoms.push(c)
                        }), a.request.bodyparts.push(e)
                    }), JSON.stringify(a)
                },
                after: function(a) {
                    var b = this.indexOf(a) + 1;
                    return this.at(b)
                },
                before: function(a) {
                    var b = this.indexOf(a) - 1;
                    return this.at(b)
                }
            })
        }), define("preloader", ["require", "underscore"], function(a, b) {
            "use strict";
            var c = function(a) {
                this.options = a || {}
            };
            return c.prototype.loadManifest = function(a) {
                this.manifest = this._transformManifest(a), this.load()
            }, c.prototype.addEventListener = function(a, b) {
                this.options.success = b
            }, c.prototype._getUrlRoot = function() {
                return image_server_url + "/webmd/PageBuilder_Assets/JS_static/tools/symptom_checker/images/"
            }, c.prototype._transformManifest = function(a) {
                var c = this._getUrlRoot();
                return b.map(a, function(a) {
                    return {
                        id: a.id,
                        src: c + a.src + ".js"
                    }
                })
            }, c.prototype.load = function() {
                var c = this,
                    d = b.pluck(this.manifest, "src");
                a(d, function() {
                    var a = b.toArray(arguments);
                    c._onComplete(a)
                })
            }, c.prototype._onComplete = function(a) {
                var c = this;
                webmd.p.symptomcheckerFlashImages = webmd.p.symptomcheckerFlashImages || {}, b.each(a, function(a, b) {
                    var d = new Image;
                    d.src = a, webmd.p.symptomcheckerFlashImages[c.manifest[b].id] = d
                }), this.options.success && this.options.success()
            }, c
        }), define("views/createjs", ["underscore", "backbone", "preloader"], function(a, b, c) {
            "use strict";
            return b.View.extend({
                exportRoot: null,
                stage: null,
                canvas: null,
                manifest: {},
                initialize: function() {
                    if (!this.isCanvas) return this.render();
                    var a = new c;
                    a.addEventListener("complete", this.render), a.loadManifest(this.manifest)
                }
            })
        }), define("views/valueprop", ["underscore", "backbone", "views/createjs", "models/person", "swfobject"], function(a, b, c, d, e) {
            "use strict";
            return c.extend({
                manifest: [{
                    src: "baloon_up.png",
                    id: "baloon_up"
                }, {
                    src: "baloon_mid_1.png",
                    id: "baloon_mid"
                }, {
                    src: "baloon_down.png",
                    id: "baloon_down"
                }, {
                    src: "baloon_shadow_all.png",
                    id: "baloon_shadow_all"
                }, {
                    src: "landing_woman.png",
                    id: "landing_woman"
                }, {
                    src: "landing_man.png",
                    id: "landing_man"
                }],
                initialize: function(b) {
                    a.bindAll(this);
                    var d = !!window.HTMLCanvasElement;
                    return this.isCanvas = d, this.canvas = document.getElementById("value-prop"), c.prototype.initialize.call(this, b)
                },
                render: function() {
                    var a = image_server_url + "/webmd/consumer_assets/site_images/symptom_checker/images/landing_man.png",
                        c = image_server_url + "/webmd/consumer_assets/site_images/symptom_checker/swf/valueprop.swf";
                    if (this.isCanvas) this.exportRoot = new lib.ValueProp, this.stage = new createjs.Stage(this.canvas), this.stage.addChild(this.exportRoot), this.setGender(b.app.session.get("person").get("gender")), this.stage.update(), createjs.Ticker.setFPS(24), createjs.Ticker.addListener(this.stage);
                    else {
                        $(this.canvas).replaceWith('<div id="value-prop-flash"><img alt="" src="' + a + '" /></div>');
                        var d = new e(c, "value-prop-flash-obj", "248", "524", "11.2", "#ffffff");
                        d.addParam("allowScriptAccess", "always"), d.addParam("wmode", "transparent"), d.addVariable("gender", b.app.session.get("person").get("gender")), d.write("value-prop-flash"), this.flash = document.getElementById("value-prop-flash-obj")
                    }
                },
                setGender: function(a) {
                    this.exportRoot && (this.exportRoot.femalebody.visible = a === d.GENDER_FEMALE, this.exportRoot.malebody.visible = a === d.GENDER_MALE), this.flash && 100 == this.flash.PercentLoaded() && this.flash.setGender(a)
                }
            })
        }), define("jst!templates/symptomsets/delete-confirmation.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay-symptomset-deleteconfirmation" class="sc-overlay">\r\n	<h1>\r\n		Are you sure you want to delete the selected from your Saved\r\n		Symptoms History?\r\n	</h1>\r\n	<p>\r\n		Select <b>Confirm</b> to delete from your Saved Symptom(s) List, or\r\n		<b>Cancel</b> to go to Symptom Checker without deleting.\r\n	</p>\r\n	<form>\r\n		<button class=\'webmd-btn webmd-btn-pr webmd-btn-s\' type="submit">Confirm</button>\r\n		<a href="#" class="cancel">Cancel</a>\r\n	</form>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/errors/generic.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="sc-errors-generic" class="sc-overlay">\r\n	<h1>Oops!</h1>\r\n    <p>There was a problem completing your request. Please try again.</p>\r\n    <button class=\'webmd-btn webmd-btn-pr webmd-btn-xs\'>OK</button>\r\n</div>\r\n';
                return __p
            }
        }), define("views/errors/generic", ["require", "backbone", "jst!templates/errors/generic.jst"], function(a) {
            "use strict";
            var b = a("backbone"),
                c = a("jst!templates/errors/generic.jst");
            return b.View.extend({
                events: {
                    "click button": "okay"
                },
                initialize: function() {
                    this.render(), this.setElement($("#sc-errors-generic"))
                },
                render: function() {
                    var a = this;
                    return webmd.overlay.open({
                        html: c(),
                        scrolling: !1,
                        onClosed: function() {
                            a.remove()
                        }
                    }), this
                },
                okay: function() {
                    return webmd.overlay.close(), !1
                },
                remove: function() {
                    return this.$el.undelegate(), this
                }
            })
        }), define("views/symptomsets/delete-confirmation", ["require", "underscore", "backbone", "jst!templates/symptomsets/delete-confirmation.jst", "views/errors/generic"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("jst!templates/symptomsets/delete-confirmation.jst"),
                e = a("views/errors/generic");
            return c.View.extend({
                events: {
                    "click .cancel": "cancel"
                },
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                submit: function() {
                    return this.model.destroy({
                        error: function() {
                            new e
                        }
                    }), this.remove(), !1
                },
                cancel: function() {
                    return this.remove(), !1
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    var a = d();
                    return webmd.overlay.open({
                        html: a,
                        width: "464px",
                        scrolling: !1
                    }), this.setElement($("#overlay-symptomset-deleteconfirmation")), this.$("form").live("submit", this.submit), this
                }
            })
        }), define("jst!templates/intro/symptomset.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<td class="date">' + (null == (__t = date) ? "" : _.escape(__t)) + '</td>\r\n<td class="name"><a href="#">' + (null == (__t = name) ? "" : _.escape(__t)) + '</a></td>\r\n<td class="person">' + (null == (__t = personName) ? "" : _.escape(__t)) + '</td>\r\n<td><a href="#" class="delete">X</a></td>\r\n';
                return __p
            }
        }), define("views/symptomsets/single", ["require", "underscore", "backbone", "util", "views/symptomsets/delete-confirmation", "jst!templates/intro/symptomset.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("views/symptomsets/delete-confirmation"),
                f = a("jst!templates/intro/symptomset.jst");
            return c.View.extend({
                events: {
                    "click a:not(.delete)": "load",
                    "click .delete": "deleteModel"
                },
                template: "intro/symptomset",
                tagName: "tr",
                initialize: function() {
                    b.bindAll(this), this.model.on("destroy", this.remove), this.model.person().on("change:firstName", this.render), this.render()
                },
                load: function() {
                    var a = this;
                    return d.metrics.click("svdsympt", "sym", !0), this.model.hydrate({
                        success: function() {
                            c.app.session.set({
                                symptomSet: a.model,
                                person: a.model.person()
                            }).load()
                        }
                    }), !1
                },
                deleteModel: function() {
                    return d.metrics.click("svdsympt_del"), new e({
                        model: this.model
                    }), !1
                },
                render: function() {
                    var a, b = this.model.person().getDisplayName();
                    "browserIE" === webmd.useragent.ua.browser && (b = d.ellipsis(b, 10)), a = f({
                        name: this.model.get("session_name"),
                        personName: b,
                        date: d.formatDate(this.model.get("entrydate"))
                    }), this.$el.html(a)
                }
            })
        }), define("jst!templates/symptomsets/index/pagination.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) {
                    __p += '<div class="sc-pagination">\r\n	', __p += 1 !== currentPage ? '\r\n		<a href="#" rel="prev">Previous</a>\r\n	' : '\r\n		<span class="prev">Previous</span>\r\n	', __p += "\r\n\r\n	";
                    for (var i = 1; i <= totalPages; i++) __p += "\r\n		", __p += i === currentPage ? "\r\n			<strong>" + (null == (__t = i) ? "" : _.escape(__t)) + "</strong>\r\n		" : '\r\n			<a href="#">' + (null == (__t = i) ? "" : _.escape(__t)) + "</a>\r\n		", __p += "\r\n	";
                    __p += "\r\n\r\n	", __p += currentPage !== totalPages ? '\r\n		<a href="#" rel="next">Next</a>\r\n	' : '\r\n		<span class="next">Next</span>\r\n	', __p += "\r\n</div>\r\n"
                }
                return __p
            }
        }), define("views/symptomsets/index", ["underscore", "backbone", "views/symptomsets/single", "util", "jst!templates/symptomsets/index/pagination.jst"], function(a, b, c, d, e) {
            "use strict";
            return b.View.extend({
                events: {
                    "click .toggle": "toggle",
                    "click .sc-pagination a": "paginate"
                },
                initialize: function() {
                    a.bindAll(this), this._cacheElements(), this.currentPage = 1, this.collection.on("add", this.addOne).on("remove", this.removeOne), b.app.meta.on("change:instanceId", this.render), b.on("startOver", this.reset), $.when(b.app.people.deferred, b.app.meta.deferred, b.app.symptomSets.deferred).done(this.render)
                },
                _cacheElements: function() {
                    this.$symptoms = this.$("tbody"), this.$pagination = this.$("tfoot td"), this.$toggle = this.$(".toggle")
                },
                toggle: function() {
                    var a = this.$symptoms.is(":visible");
                    return a ? this.$toggle.text("Expand") : (d.metrics.click("svdsympt_more"), this.$toggle.text("Hide")), this.$toggle.toggleClass("show", a), this.$symptoms.toggle(), this.$pagination.toggle(), !1
                },
                visibleSymptomSets: function() {
                    var a = new b.Collection;
                    return this.collection.each(function(b) {
                        b.person() && b.person().isVisible() && a.add(b)
                    }), a
                },
                addOne: function(a) {
                    var b, d, e, f = this.visibleSymptomSets();
                    f.include(a) && (b = new c({
                        model: a
                    }).$el, d = f.indexOf(a), e = this.$symptoms.find("tr"), e.length ? 0 === d ? this.$symptoms.prepend(b) : e.eq(d - 1).after(b) : this.$symptoms.append(b), this.displayPage(this.currentPage))
                },
                removeOne: function() {
                    this.displayPage(this.currentPage)
                },
                addAll: function() {
                    this.$symptoms.empty(), this.$toggle.hide(), this.collection.each(this.addOne)
                },
                render: function() {
                    this.addAll(), this.renderPagination()
                },
                renderPagination: function() {
                    var a;
                    a = {
                        currentPage: this.currentPage,
                        totalPages: Math.ceil(this.visibleSymptomSets().length / 10)
                    }, a.totalPages > 1 ? this.$pagination.html(e(a)) : this.$pagination.empty()
                },
                paginate: function(a) {
                    var b = $(a.target).text();
                    return d.metrics.click("svdsympt_pnav"), "Previous" === b && (b = this.currentPage - 1), "Next" === b && (b = this.currentPage + 1), this.displayPage(b), !1
                },
                displayPage: function(a) {
                    a = Number(a), this.$("tr").length < 10 * (a - 1) && (a = 1);
                    var b = 10 * (a - 1),
                        c = b + 10,
                        d = this.$symptoms.find("tr"),
                        e = d.slice(b, c);
                    d.not(e).hide(), e.css({
                        display: ""
                    }), this.currentPage = a, this.renderPagination(), this.$toggle.toggle(d.length > 0)
                },
                reset: function() {
                    this.displayPage(1)
                }
            })
        }), define("views/people/single", ["underscore", "backbone"], function(a, b) {
            "use strict";
            return b.View.extend({
                tagName: "option",
                template: a.template("<%- displayName %>"),
                attributes: function() {
                    return {
                        value: this.model.id,
                        "data-hidden": this.model.isVisible() ? "false" : "true"
                    }
                },
                initialize: function() {
                    a.bindAll(this), this.model.on("change:firstName change:yOB change:mOB change:dOB", this.onAttributeChange).on("destroy", this.remove), this.model.isRegistered() && this.model.meta().on("change:instanceId", this.toggle), this.render()
                },
                toggle: function(a, b) {
                    this.$el.data("hidden", ("hidden" === b).toString()), "active" === b ? this.$el.showOption() : this.$el.hideOption()
                },
                render: function() {
                    var a = this.template({
                        displayName: this.model.getDisplayName()
                    });
                    return this.$el.html(a)
                },
                onAttributeChange: function() {
                    this.render(), this.$el.is(":selected") && this.$el.parents("select").change()
                }
            })
        }), define("jst!templates/intro/newsletters/mens-health.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += 'Stay informed with the latest health news and features from WebMD. Get our\r\n<a class="nl" href="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/newsletters/mens_health_newsletter.jpg" target="_blank">\r\n	Men\'s Health Newsletter\r\n</a>\r\ndelivered right to your inbox.\r\n';
                return __p
            }
        }), define("jst!templates/intro/newsletters/parenting.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += 'Stay informed with the latest health news and features from WebMD. Get our\r\n<a class="nl" href="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/newsletters/parenting_newsletter.jpg" target="_blank">\r\n	Parenting &amp; Children\'s Health Newsletter\r\n</a>\r\ndelivered right to your inbox.\r\n';
                return __p
            }
        }), define("jst!templates/intro/privacy-policy.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += 'By clicking Submit, you agree to the <a href="http://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use">WebMD Terms &amp; Conditions</a> &amp; <a class="privacy-policy" href="http://www.webmd.com/about-webmd-policies/about-privacy-policy">Privacy Policy</a> and understand that you may opt out of WebMD subscriptions at any time.\r\n';
                return __p
            }
        }), define("jst!templates/intro/newsletters/womens-health.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += 'Stay informed with the latest health news and features from WebMD. Get our\r\n<a class="nl" href="http://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/newsletters/womens_health_newsletter.jpg" target="_blank">\r\n	Women\'s Health Newsletter\r\n</a>\r\ndelivered right to your inbox.\r\n';
                return __p
            }
        }), define("jst!templates/login/promo.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="signin_promo_rdr">\r\n	<h2 class="signin_promo_header">WebMD Symptom Checker</h2>\r\n	<div class="signin_promo_left">\r\n	<img src="' + (null == (__t = window.image_server_url) ? "" : __t) + '/webmd/consumer_assets/site_images/registration/images/symptom_mgr_promo_bg.gif"></div>\r\n	<div class="signin_promo_right">\r\n		<ul>\r\n			<li>Create and save a <strong>Symptom History</strong> for you and your loved ones.</li>\r\n			<li>Print out a <strong>Symptom Report</strong> to share with your doctor.</li>\r\n			<li>View new <strong>customized health information</strong> organized by the conditions most likely related to your symptoms.</li>\r\n		</ul>\r\n	</div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/login/header.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<p>Please Log In to save this set of symptoms.</p>\r\n";
                return __p
            }
        }), define("views/login", ["require", "backbone", "util", "jst!templates/login/promo.jst", "jst!templates/login/header.jst"], function(a) {
            "use strict";
            var b = a("backbone"),
                c = a("util"),
                d = a("jst!templates/login/promo.jst"),
                e = a("jst!templates/login/header.jst");
            return b.View.extend({
                initialize: function() {
                    this.render()
                },
                render: function() {
                    var a = {
                        appid: c.REGISTRATION_APPID,
                        returl: this.returnURL(),
                        promo: d(),
                        productIdentifier: "sc",
                        onClosed: function() {
                            b.app.session.set({
                                isSavingSymptoms: !1
                            })
                        }
                    };
                    return webmd.p.registration.loginOverlay.show(a), $(e()).insertBefore(".sign_in_form"), this
                },
                returnURL: function() {
                    var a = window.location.protocol + "//" + window.location.host + window.location.pathname;
                    return a + $.query.load(a).set("loadSession", "true")
                }
            })
        }), define("jst!templates/people/delete-confirmation.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay-users-delete-confirmation" class="sc-overlay">\r\n	<h1>Are you sure you want to delete ' + (null == (__t = name) ? "" : __t) + " from your list?</h1>\r\n\r\n	<p>Once you delete " + (null == (__t = name) ? "" : __t) + " from your list, you will no longer have access\r\n	to any data you saved for " + (null == (__t = pronoun) ? "" : __t) + ' on your WebMD account.</p>\r\n\r\n	<form>\r\n		<button class="webmd-btn webmd-btn-pr webmd-btn-s" type="submit">Yes</button>\r\n		<a href="#" class="cancel">Cancel</a>\r\n	</form>\r\n</div>\r\n';
                return __p
            }
        }), define("views/people/delete-confirmation", ["require", "underscore", "backbone", "models/person", "jst!templates/people/delete-confirmation.jst", "views/people/edit"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("models/person"),
                e = a("jst!templates/people/delete-confirmation.jst");
            return c.View.extend({
                events: {
                    "click .cancel": "cancel"
                },
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                remove: function() {
                    var b = a("views/people/edit");
                    return this.$el.undelegate().remove(), new b, this
                },
                submit: function() {
                    return this.model.set({
                        deleted: !0
                    }), webmd.overlay.close(), !1
                },
                cancel: function() {
                    return webmd.overlay.close(), !1
                },
                render: function() {
                    var a, b = this;
                    return a = e({
                        name: this.model.get("firstName"),
                        pronoun: this.model.get("gender") === d.GENDER_MALE ? "him" : "her"
                    }), webmd.overlay.open({
                        html: a,
                        width: "300px",
                        scrolling: !1,
                        onClosed: function() {
                            b.remove()
                        }
                    }), this.setElement($("#overlay-users-delete-confirmation")), this.$("form").submit(this.submit), this
                }
            })
        }), define("jst!templates/people/edit.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay_editusers" class="sc-overlay">\r\n	<h1>Edit</h1>\r\n\r\n	<form>\r\n		<table>\r\n			<thead>\r\n				<tr>\r\n					<th>Relationship</th>\r\n					<th>Name</th>\r\n					<th>Gender</th>\r\n					<th>Date of Birth</th>\r\n					<th>Delete</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				' + (null == (__t = rows) ? "" : __t) + '\r\n			</tbody>\r\n		</table>\r\n\r\n		<div id="inputs">\r\n			<button type="submit" class="webmd-btn webmd-btn-pr webmd-btn-s">Save</button>\r\n			<a href="#" class="cancel">Cancel</a>\r\n		</div>\r\n	</form>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/people/add-edit-row.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<tr ", "undefined" != typeof person && (__p += 'data-id="' + (null == (__t = person.id) ? "" : __t) + '"'), __p += "\r\n	", "undefined" != typeof person && person.get("deleted") && (__p += 'class="disabled"'), __p += '>\r\n	<td>\r\n		<select name="relation[' + (null == (__t = index) ? "" : __t) + ']" required\r\n		', "undefined" != typeof person && person.get("deleted") && (__p += 'disabled="disabled"'), __p += '>\r\n			<option value="">Select</option>\r\n			', _.each(relationships, function(a, b) {
                    __p += '\r\n			<option value="' + (null == (__t = b) ? "" : __t) + '" ', "undefined" != typeof person && person.get("relationship") === Number(b) && (__p += 'selected="selected"'), __p += ">\r\n				" + (null == (__t = a) ? "" : __t) + "\r\n			</option>\r\n			"
                }), __p += '\r\n		</select>\r\n	</td>\r\n	<td>\r\n		<input type="text" class="validate-person-name"\r\n			name="name[' + (null == (__t = index) ? "" : __t) + ']"\r\n			maxlength="50"\r\n			value="', "undefined" != typeof person && (__p += "" + (null == (__t = person.get("firstName")) ? "" : __t)), __p += '"\r\n			', "undefined" != typeof person && person.get("deleted") && (__p += 'disabled="disabled"'), __p += ' />\r\n	</td>\r\n	<td>\r\n		<select name="gender[' + (null == (__t = index) ? "" : __t) + ']" required\r\n		', "undefined" != typeof person && person.get("deleted") && (__p += 'disabled="disabled"'), __p += '>\r\n			<option value="">Choose</option>\r\n			', _.each(genders, function(a, b) {
                    __p += '\r\n			<option value="' + (null == (__t = b) ? "" : __t) + '" ', "undefined" != typeof person && person.get("gender") === Number(b) && (__p += 'selected="selected"'), __p += ">\r\n				" + (null == (__t = a) ? "" : __t) + "\r\n			</option>\r\n			"
                }), __p += '\r\n		</select>\r\n	</td>\r\n	<td>\r\n		<select name="month[' + (null == (__t = index) ? "" : __t) + ']" required class="validate-future-date"\r\n		', "undefined" != typeof person && person.get("deleted") && (__p += 'disabled="disabled"'), __p += '>\r\n			<option value="">Month</option>\r\n			', _.each(months, function(a, b) {
                    __p += '\r\n			<option value="' + (null == (__t = b) ? "" : __t) + '" ', "undefined" != typeof person && Number(person.get("mOB")) === Number(b) && (__p += 'selected="selected"'), __p += ">\r\n				" + (null == (__t = a) ? "" : __t) + "\r\n			</option>\r\n			"
                }), __p += '\r\n		</select>\r\n		<select name="day[' + (null == (__t = index) ? "" : __t) + ']" required class="validate-future-date"\r\n		', "undefined" != typeof person && person.get("deleted") && (__p += 'disabled="disabled"'), __p += '>\r\n			<option value="">Day</option>\r\n			', _.each(days, function(a, b) {
                    __p += '\r\n			<option value="' + (null == (__t = b) ? "" : __t) + '" ', "undefined" != typeof person && Number(person.get("dOB")) === Number(b) && (__p += 'selected="selected"'), __p += ">\r\n				" + (null == (__t = a) ? "" : __t) + "\r\n			</option>\r\n			"
                }), __p += '\r\n		</select>\r\n		<select name="year[' + (null == (__t = index) ? "" : __t) + ']" required class="validate-future-date"\r\n		', "undefined" != typeof person && person.get("deleted") && (__p += 'disabled="disabled"'), __p += '>\r\n			<option value="">Year</option>\r\n			', _.each(years, function(a) {
                    __p += '\r\n			<option value="' + (null == (__t = a) ? "" : __t) + '" ', "undefined" != typeof person && Number(person.get("yOB")) === Number(a) && (__p += 'selected="selected"'), __p += ">\r\n				" + (null == (__t = a) ? "" : __t) + "\r\n			</option>\r\n			"
                }), __p += '\r\n		</select>\r\n	</td>\r\n	<td>\r\n		<a href="#" class="remove">', "undefined" != typeof person && person.get("deleted") && (__p += "Undo"), __p += "</a>\r\n	</td>\r\n</tr>\r\n";
                return __p
            }
        }), define("views/people/edit", ["require", "underscore", "backbone", "collections/people", "views/people/delete-confirmation", "models/person", "jst!templates/people/edit.jst", "jst!templates/people/add-edit-row.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("collections/people"),
                e = a("views/people/delete-confirmation"),
                f = a("models/person"),
                g = a("jst!templates/people/edit.jst"),
                h = a("jst!templates/people/add-edit-row.jst");
            return c.View.extend({
                events: {
                    "click .cancel": "cancel",
                    "click .remove": "toggleRow"
                },
                initialize: function() {
                    b.bindAll(this), this.collection = new d(c.app.people.editable()), this.render()
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), this.options.callback && this.options.callback(), this
                },
                save: function() {
                    var a, c;
                    return this.setValues(), a = this.collection.where({
                        deleted: !0
                    }), c = this.collection.filter(function(a) {
                        return !a.get("deleted") && a.hasChanged()
                    }), b.each(a, function(a) {
                        a.destroy()
                    }), b.each(c, function(a) {
                        a.save()
                    }), webmd.overlay.close(), !1
                },
                setValues: function() {
                    var a, b, c, d = this;
                    this.$("tbody tr").each(function() {
                        a = $(this), b = a.data("id"), c = a.hasClass("disabled"), d.collection.get(b).set({
                            firstName: a.find("input[name^=name]").val(),
                            relationship: Number(a.find("select[name^=relation]").val()),
                            gender: Number(a.find("select[name^=gender]").val()),
                            mOB: a.find("select[name^=month]").val(),
                            dOB: a.find("select[name^=day]").val(),
                            yOB: a.find("select[name^=year]").val(),
                            deleted: c
                        }, {
                            silent: c
                        })
                    })
                },
                toggleRow: function(a) {
                    var b = $(a.target).parents("tr");
                    return b.hasClass("disabled") ? (b.removeClass("disabled").find("input, select").attr("disabled", !1), b.find("a").text("")) : (this.collection.each(function(a) {
                        a.store()
                    }), this.setValues(), new e({
                        model: c.app.people.get(b.data("id"))
                    })), !1
                },
                cancel: function() {
                    return this.collection.each(function(a) {
                        a.restart()
                    }), webmd.overlay.close(), !1
                },
                render: function() {
                    var a, b = this,
                        c = [];
                    return this.collection.each(function(a, d) {
                        c.push(b.renderRow(a, d - 1))
                    }), a = g({
                        rows: c.join(" ")
                    }), webmd.overlay.open({
                        html: a,
                        width: "650px",
                        scrolling: !1,
                        onClosed: function() {
                            b.remove()
                        }
                    }), this.setElement($("#overlay_editusers")), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !1,
                        onfocusout: function(a) {
                            $(a).siblings(".errorWrap").remove(), $(a).valid()
                        },
                        submitHandler: function() {
                            b.save()
                        },
                        errorPlacement: function(a, b) {
                            var c = $(a).text(),
                                d = $(b).position();
                            $('<div class="errorWrap" />').attr({
                                generated: !0
                            }).append(c).append('<span class="indicator"><span></span></span>').insertAfter($(b)).css({
                                top: d.top,
                                left: d.left,
                                marginLeft: $(b).width() + 20 + "px"
                            }), $(b).bind({
                                focus: function() {
                                    $(this).next(".errorWrap").show()
                                },
                                blur: function() {
                                    $(this).next(".errorWrap").hide()
                                }
                            })
                        },
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), this
                },
                renderRow: function(a, b) {
                    return h({
                        relationships: f.editableRelationships(),
                        genders: f.genders,
                        days: f.days(),
                        months: f.months(),
                        years: f.years(),
                        person: a,
                        index: b
                    })
                }
            })
        }), define("jst!templates/people/add.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id='overlay_addusers' class=\"sc-overlay\">\r\n	<h1>Add</h1>\r\n\r\n	<form>\r\n\r\n		<table>\r\n			<thead>\r\n				<tr>\r\n					<th>Relationship</th>\r\n					<th>Name</th>\r\n					<th>Gender</th>\r\n					<th>Date of Birth</th>\r\n					<th>Remove</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				" + (null == (__t = rows) ? "" : __t) + '\r\n			</tbody>\r\n		</table>\r\n\r\n		<div class="add-row-container">\r\n			<a href="#" class="add-row">Add</a>\r\n		</div>\r\n\r\n		<div id=\'inputs\'>\r\n			<button type=\'submit\' class=\'webmd-btn webmd-btn-pr webmd-btn-s\'>Save</button>\r\n			<a href="#" class="cancel">Cancel</a>\r\n		</div>\r\n	</form>\r\n</div>\r\n';
                return __p
            }
        }), define("views/people/add", ["require", "underscore", "backbone", "collections/people", "models/person", "jst!templates/people/add.jst", "jst!templates/people/add-edit-row.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("collections/people"),
                e = a("models/person"),
                f = a("jst!templates/people/add.jst"),
                g = a("jst!templates/people/add-edit-row.jst");
            return c.View.extend({
                events: {
                    "click .cancel": "cancel",
                    "click .add-row": "addRow",
                    "click tr a": "removeRow"
                },
                formDisabled: !1,
                initialize: function() {
                    b.bindAll(this), this.collection = new d, this.render()
                },
                save: function() {
                    var a, b = this,
                        d = 0;
                    return b.$("p.error").remove(), b.disableForm(), a = function(a) {
                        c.app.people.add(a), d += 1, b.options.callback && d === b.$("tbody tr").length && b.remove()
                    }, b.$("tbody tr").each(function() {
                        b.collection.create({
                            firstName: $(this).find("input[name^=name]").val(),
                            relationship: Number($(this).find("select[name^=relation]").val()),
                            gender: Number($(this).find("select[name^=gender]").val()),
                            mOB: $(this).find("select[name^=month]").val(),
                            dOB: $(this).find("select[name^=day]").val(),
                            yOB: $(this).find("select[name^=year]").val()
                        }, {
                            success: a,
                            error: b.onSaveError
                        })
                    }), void 0 === b.options.callback && webmd.overlay.close(), !1
                },
                onSaveError: function() {
                    return this.$("h1").after('<p class="error">There was a problem saving your dependents. Please try again.</p>'), webmd.overlay.resize(), this.enableForm(), this
                },
                cancel: function() {
                    return this.formDisabled ? !1 : (webmd.overlay.close(), !1)
                },
                addRow: function() {
                    if (this.formDisabled) return !1;
                    var a, b = this.renderRow();
                    return a = $("#webmdHoverContent").height() + 35, webmd.overlay.resize({
                        height: a + "px"
                    }), this.$("tbody").append(b), !1
                },
                removeRow: function(a) {
                    return this.formDisabled ? !1 : ($(a.target).parents("tr").remove(), webmd.overlay.resize(), !1)
                },
                remove: function() {
                    var a = this;
                    return a.$("form").die("submit"), $(a.el).undelegate().remove(), a.options.callback && a.options.callback({
                        collection: a.collection,
                        name: a.options.name
                    }), this
                },
                renderRow: function() {
                    var a, b;
                    return a = this.$("form table tbody tr").length, b = g({
                        relationships: e.editableRelationships(),
                        genders: e.genders,
                        days: e.days(),
                        months: e.months(),
                        years: e.years(),
                        index: a
                    })
                },
                render: function() {
                    var a, b = this;
                    return a = f({
                        rows: this.renderRow()
                    }), webmd.overlay.open({
                        html: a,
                        width: "650px",
                        scrolling: !1,
                        onClosed: function() {
                            b.remove()
                        }
                    }), this.setElement($("#overlay_addusers")), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !1,
                        onfocusout: function(a) {
                            $(a).siblings(".errorWrap").remove(), $(a).valid()
                        },
                        submitHandler: function() {
                            b.save()
                        },
                        errorPlacement: function(a, b) {
                            var c = $(a).text(),
                                d = $(b).position();
                            $('<div class="errorWrap" />').attr({
                                generated: !0
                            }).append(c).append('<span class="indicator"><span></span></span>').insertAfter($(b)).css({
                                top: d.top,
                                left: d.left,
                                marginLeft: $(b).width() + 20 + "px"
                            }), $(b).bind({
                                focus: function() {
                                    $(this).next(".errorWrap").show()
                                },
                                blur: function() {
                                    $(this).next(".errorWrap").hide()
                                }
                            })
                        },
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), this
                },
                disableForm: function() {
                    this.$("input[type=text],select").attr("disabled", "disabled"), this.$("button[type=submit]").bind("click", !1), this.formDisabled = !0
                },
                enableForm: function() {
                    this.$("input[type=text],select").removeAttr("disabled"), this.$("button[type=submit]").unbind("click", !1), this.formDisabled = !1
                }
            })
        }), define("jst!templates/people/hide-all-error.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id='overlay_hidealluserserror' class=\"sc-overlay\">\r\n	<h1>Oops!</h1>\r\n	<p>You must leave at least one person active.</p>\r\n	<button class='webmd-btn webmd-btn-pr webmd-btn-xs'>OK</button>\r\n</div>\r\n";
                return __p
            }
        }), define("views/people/hide-all-error", ["require", "underscore", "backbone", "collections/people", "jst!templates/people/hide-all-error.jst", "views/people/show-hide"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("collections/people"),
                e = a("jst!templates/people/hide-all-error.jst");
            return c.View.extend({
                events: {
                    "click button": "okay"
                },
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                okay: function() {
                    return this.remove(), !1
                },
                remove: function() {
                    return this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                onClosed: function() {
                    var b = a("views/people/show-hide");
                    new b({
                        collection: new d(c.app.people.registered()),
                        checkAll: !0
                    })
                },
                render: function() {
                    var a = e();
                    return webmd.overlay.open({
                        html: a,
                        width: "400px",
                        scrolling: !1,
                        onClosed: this.onClosed
                    }), this.setElement($("#overlay_hidealluserserror")), this
                }
            })
        }), define("jst!templates/people/show-hide.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id='overlay_showhideusers' class=\"sc-overlay\">\r\n	<h1>Hide or Show</h1>\r\n\r\n	<p>You can select the people that you want to track in the Symptom Checker.\r\n	Simply click the checkbox in the \"hide\" column for people you do not want\r\n	to appear in your list. You can always add them back to your list in the\r\n	future.</p>\r\n\r\n	<form action='#' method='post'>\r\n		<table>\r\n			<thead>\r\n				<tr>\r\n					<th>Relationship</th>\r\n					<th>Name</th>\r\n					<th>Gender</th>\r\n					<th>Date of Birth</th>\r\n					<th>Hide</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				",
                    _.each(users, function(a) {
                        __p += "\r\n				<tr>\r\n					<td>" + (null == (__t = a.relationship) ? "" : __t) + '</td>\r\n					<td class="name">' + (null == (__t = a.name) ? "" : __t) + "</td>\r\n					<td>" + (null == (__t = a.gender) ? "" : __t) + "</td>\r\n					<td>" + (null == (__t = a.birthdate) ? "" : __t) + '</td>\r\n					<td>\r\n						<input type="checkbox" value="' + (null == (__t = a.id) ? "" : __t) + '" name="hide[]" ', a.show === !1 && (__p += 'checked="checked"'), __p += " />\r\n					</td>\r\n				</tr>\r\n				"
                    }), __p += "\r\n			</tbody>\r\n		</table>\r\n\r\n		<div id='inputs'>\r\n			<button type='submit' class='webmd-btn webmd-btn-pr webmd-btn-s'>Save</button>\r\n			<a href=\"#\" class=\"cancel\">Cancel</a>\r\n		</div>\r\n	</form>\r\n</div>\r\n";
                return __p
            }
        }), define("views/people/show-hide", ["require", "underscore", "backbone", "models/person", "views/people/hide-all-error", "util", "jst!templates/people/show-hide.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("models/person"),
                e = a("views/people/hide-all-error"),
                f = a("util"),
                g = a("jst!templates/people/show-hide.jst");
            return c.View.extend({
                events: {
                    "click .cancel": "cancel"
                },
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), this
                },
                save: function() {
                    if (this.$("tbody tr").length === this.$("input[type=checkbox]:checked").length) return webmd.overlay.close(), new e, !1;
                    var a;
                    return this.$("input[type=checkbox]").each(function() {
                        if (a = c.app.meta.findByPersonId($(this).val()), !a) throw new Error("Could not find meta entry for person = " + $(this).val());
                        var b = $(this).is(":checked") ? "hidden" : "active";
                        a.get("instanceId") !== b && a.save("instanceId", b)
                    }), webmd.overlay.close(), !1
                },
                cancel: function() {
                    return webmd.overlay.close(), !1
                },
                render: function() {
                    var a, b, c = this;
                    return a = this.collection.map(function(a) {
                        var b = {
                            id: a.id,
                            name: a.get("firstName"),
                            relationship: d.relationships[a.get("relationship")],
                            gender: d.genders[a.get("gender")],
                            birthdate: f.formatDate(a.getBirthdate()),
                            show: c.options.checkAll ? !1 : a.isVisible()
                        };
                        return b
                    }), b = g({
                        users: a
                    }), webmd.overlay.open({
                        html: b,
                        width: "500px",
                        scrolling: !1,
                        onClosed: function() {
                            c.remove()
                        }
                    }), this.setElement($("#overlay_showhideusers")), this.$("form").live("submit", this.save), this
                }
            })
        }),
        function(a, b, c) {
            function d(a) {
                var b = {},
                    d = /^jQuery\d+$/;
                return c.each(a.attributes, function(a, c) {
                    c.specified && !d.test(c.name) && (b[c.name] = c.value)
                }), b
            }

            function e(a, d) {
                var e = this,
                    f = c(e);
                if (e.value == f.attr("placeholder") && f.hasClass("placeholder"))
                    if (f.data("placeholder-password")) {
                        if (f = f.hide().next().show().attr("id", f.removeAttr("id").data("placeholder-id")), a === !0) return f[0].value = d;
                        f.focus()
                    } else e.value = "", f.removeClass("placeholder"), e == b.activeElement && e.select()
            }

            function f() {
                var a, b = this,
                    f = c(b),
                    g = this.id;
                if ("" == b.value) {
                    if ("password" == b.type) {
                        if (!f.data("placeholder-textinput")) {
                            try {
                                a = f.clone().attr({
                                    type: "text"
                                })
                            } catch (h) {
                                a = c("<input>").attr(c.extend(d(this), {
                                    type: "text"
                                }))
                            }
                            a.removeAttr("name").data({
                                "placeholder-password": !0,
                                "placeholder-id": g
                            }).bind("focus.placeholder", e), f.data({
                                "placeholder-textinput": a,
                                "placeholder-id": g
                            }).before(a)
                        }
                        f = f.removeAttr("id").hide().prev().attr("id", g).show()
                    }
                    f.addClass("placeholder"), f[0].value = f.attr("placeholder")
                } else f.removeClass("placeholder")
            }
            var g, h, i = "placeholder" in b.createElement("input"),
                j = "placeholder" in b.createElement("textarea"),
                k = c.fn,
                l = c.valHooks;
            i && j ? (h = k.placeholder = function() {
                return this
            }, h.input = h.textarea = !0) : (h = k.placeholder = function() {
                var a = this;
                return a.filter((i ? "textarea" : ":input") + "[placeholder]").not(".placeholder").bind({
                    "focus.placeholder": e,
                    "blur.placeholder": f
                }).data("placeholder-enabled", !0).trigger("blur.placeholder"), a
            }, h.input = i, h.textarea = j, g = {
                get: function(a) {
                    var b = c(a);
                    return b.data("placeholder-enabled") && b.hasClass("placeholder") ? "" : a.value
                },
                set: function(a, d) {
                    var g = c(a);
                    return g.data("placeholder-enabled") ? ("" == d ? (a.value = d, a != b.activeElement && f.call(a)) : g.hasClass("placeholder") ? e.call(a, !0, d) || (a.value = d) : a.value = d, g) : a.value = d
                }
            }, i || (l.input = g), j || (l.textarea = g), c(function() {
                c(b).delegate("form", "submit.placeholder", function() {
                    var a = c(".placeholder", this).each(e);
                    setTimeout(function() {
                        a.each(f)
                    }, 10)
                })
            }), c(a).bind("beforeunload.placeholder", function() {
                c(".placeholder").each(function() {
                    this.value = ""
                })
            }))
        }(this, document, jQuery), define("jquery.placeholder", function() {}),
        function(a) {
            a.extend(a.fn, {
                validate: function(b) {
                    if (this.length) {
                        var c = a.data(this[0], "validator");
                        return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (b = this.find("input, button"), b.filter(".cancel").click(function() {
                            c.cancelSubmit = !0
                        }), c.settings.submitHandler && b.filter(":submit").click(function() {
                            c.submitButton = this
                        }), this.submit(function(b) {
                            function d() {
                                if (c.settings.submitHandler) {
                                    if (c.submitButton) var b = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(c.submitButton.value).appendTo(c.currentForm);
                                    return c.settings.submitHandler.call(c, c.currentForm), c.submitButton && b.remove(), !1
                                }
                                return !0
                            }
                            return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
                        })), c)
                    }
                    b && b.debug && window.console && console.warn("nothing selected, can't validate, returning nothing")
                },
                valid: function() {
                    if (a(this[0]).is("form")) return this.validate().form();
                    var b = !0,
                        c = a(this[0].form).validate();
                    return this.each(function() {
                        b &= c.element(this)
                    }), b
                },
                removeAttrs: function(b) {
                    var c = {},
                        d = this;
                    return a.each(b.split(/\s/), function(a, b) {
                        c[b] = d.attr(b), d.removeAttr(b)
                    }), c
                },
                rules: function(b, c) {
                    var d = this[0];
                    if (b) {
                        var e = a.data(d.form, "validator").settings,
                            f = e.rules,
                            g = a.validator.staticRules(d);
                        switch (b) {
                            case "add":
                                a.extend(g, a.validator.normalizeRule(c)), f[d.name] = g, c.messages && (e.messages[d.name] = a.extend(e.messages[d.name], c.messages));
                                break;
                            case "remove":
                                if (!c) return delete f[d.name], g;
                                var h = {};
                                return a.each(c.split(/\s/), function(a, b) {
                                    h[b] = g[b], delete g[b]
                                }), h
                        }
                    }
                    return d = a.validator.normalizeRules(a.extend({}, a.validator.metadataRules(d), a.validator.classRules(d), a.validator.attributeRules(d), a.validator.staticRules(d)), d), d.required && (e = d.required, delete d.required, d = a.extend({
                        required: e
                    }, d)), d
                }
            }), a.extend(a.expr[":"], {
                blank: function(b) {
                    return !a.trim("" + b.value)
                },
                filled: function(b) {
                    return !!a.trim("" + b.value)
                },
                unchecked: function(a) {
                    return !a.checked
                }
            }), a.validator = function(b, c) {
                this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
            }, a.validator.format = function(b, c) {
                return 1 == arguments.length ? function() {
                    var c = a.makeArray(arguments);
                    return c.unshift(b), a.validator.format.apply(this, c)
                } : (arguments.length > 2 && c.constructor != Array && (c = a.makeArray(arguments).slice(1)), c.constructor != Array && (c = [c]), a.each(c, function(a, c) {
                    b = b.replace(RegExp("\\{" + a + "\\}", "g"), c)
                }), b)
            }, a.extend(a.validator, {
                defaults: {
                    messages: {},
                    groups: {},
                    rules: {},
                    errorClass: "error",
                    validClass: "valid",
                    errorElement: "label",
                    focusInvalid: !0,
                    errorContainer: a([]),
                    errorLabelContainer: a([]),
                    onsubmit: !0,
                    ignore: ":hidden",
                    ignoreTitle: !1,
                    onfocusin: function(a) {
                        this.lastActive = a, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(a)).hide())
                    },
                    onfocusout: function(a) {
                        this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
                    },
                    onkeyup: function(a) {
                        (a.name in this.submitted || a == this.lastElement) && this.element(a)
                    },
                    onclick: function(a) {
                        a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
                    },
                    highlight: function(b, c, d) {
                        "radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
                    },
                    unhighlight: function(b, c, d) {
                        "radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
                    }
                },
                setDefaults: function(b) {
                    a.extend(a.validator.defaults, b)
                },
                messages: {
                    required: "This field is required.",
                    remote: "Please fix this field.",
                    email: "Please enter a valid email address.",
                    url: "Please enter a valid URL.",
                    date: "Please enter a valid date.",
                    dateISO: "Please enter a valid date (ISO).",
                    number: "Please enter a valid number.",
                    digits: "Please enter only digits.",
                    creditcard: "Please enter a valid credit card number.",
                    equalTo: "Please enter the same value again.",
                    accept: "Please enter a value with a valid extension.",
                    maxlength: a.validator.format("Please enter no more than {0} characters."),
                    minlength: a.validator.format("Please enter at least {0} characters."),
                    rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
                    range: a.validator.format("Please enter a value between {0} and {1}."),
                    max: a.validator.format("Please enter a value less than or equal to {0}."),
                    min: a.validator.format("Please enter a value greater than or equal to {0}.")
                },
                autoCreateRanges: !1,
                prototype: {
                    init: function() {
                        function b(b) {
                            var c = a.data(this[0].form, "validator"),
                                d = "on" + b.type.replace(/^validate/, "");
                            c.settings[d] && c.settings[d].call(c, this[0], b)
                        }
                        this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                        var c = this.groups = {};
                        a.each(this.settings.groups, function(b, d) {
                            a.each(d.split(/\s/), function(a, d) {
                                c[d] = b
                            })
                        });
                        var d = this.settings.rules;
                        a.each(d, function(b, c) {
                            d[b] = a.validator.normalizeRule(c)
                        }), a(this.currentForm).validateDelegate("[type='text'], [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", b).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", b), this.settings.invalidHandler && a(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
                    },
                    form: function() {
                        return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                    },
                    checkForm: function() {
                        this.prepareForm();
                        for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
                        return this.valid()
                    },
                    element: function(b) {
                        this.lastElement = b = this.validationTargetFor(this.clean(b)), this.prepareElement(b), this.currentElements = a(b);
                        var c = this.check(b);
                        return c ? delete this.invalid[b.name] : this.invalid[b.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), c
                    },
                    showErrors: function(b) {
                        if (b) {
                            a.extend(this.errorMap, b), this.errorList = [];
                            for (var c in b) this.errorList.push({
                                message: b[c],
                                element: this.findByName(c)[0]
                            });
                            this.successList = a.grep(this.successList, function(a) {
                                return !(a.name in b)
                            })
                        }
                        this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                    },
                    resetForm: function() {
                        a.fn.resetForm && a(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass)
                    },
                    numberOfInvalids: function() {
                        return this.objectLength(this.invalid)
                    },
                    objectLength: function(a) {
                        var b, c = 0;
                        for (b in a) c++;
                        return c
                    },
                    hideErrors: function() {
                        this.addWrapper(this.toHide).hide()
                    },
                    valid: function() {
                        return 0 == this.size()
                    },
                    size: function() {
                        return this.errorList.length
                    },
                    focusInvalid: function() {
                        if (this.settings.focusInvalid) try {
                            a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                        } catch (b) {}
                    },
                    findLastActive: function() {
                        var b = this.lastActive;
                        return b && 1 == a.grep(this.errorList, function(a) {
                            return a.element.name == b.name
                        }).length && b
                    },
                    elements: function() {
                        var b = this,
                            c = {};
                        return a(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function() {
                            return !this.name && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in c || !b.objectLength(a(this).rules()) ? !1 : c[this.name] = !0
                        })
                    },
                    clean: function(b) {
                        return a(b)[0]
                    },
                    errors: function() {
                        return a(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext)
                    },
                    reset: function() {
                        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([]), this.currentElements = a([])
                    },
                    prepareForm: function() {
                        this.reset(), this.toHide = this.errors().add(this.containers)
                    },
                    prepareElement: function(a) {
                        this.reset(), this.toHide = this.errorsFor(a)
                    },
                    check: function(b) {
                        b = this.validationTargetFor(this.clean(b));
                        var c, d = a(b).rules(),
                            e = !1;
                        for (c in d) {
                            var f = {
                                method: c,
                                parameters: d[c]
                            };
                            try {
                                var g = a.validator.methods[c].call(this, b.value.replace(/\r/g, ""), b, f.parameters);
                                if ("dependency-mismatch" == g) e = !0;
                                else {
                                    if (e = !1, "pending" == g) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
                                    if (!g) return this.formatAndAdd(b, f), !1
                                }
                            } catch (h) {
                                throw this.settings.debug && window.console && console.log("exception occured when checking element " + b.id + ", check the '" + f.method + "' method", h), h
                            }
                        }
                        return e ? void 0 : (this.objectLength(d) && this.successList.push(b), !0)
                    },
                    customMetaMessage: function(b, c) {
                        if (a.metadata) {
                            var d = this.settings.meta ? a(b).metadata()[this.settings.meta] : a(b).metadata();
                            return d && d.messages && d.messages[c]
                        }
                    },
                    customMessage: function(a, b) {
                        var c = this.settings.messages[a];
                        return c && (c.constructor == String ? c : c[b])
                    },
                    findDefined: function() {
                        for (var a = 0; a < arguments.length; a++)
                            if (void 0 !== arguments[a]) return arguments[a]
                    },
                    defaultMessage: function(b, c) {
                        return this.findDefined(this.customMessage(b.name, c), this.customMetaMessage(b, c), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c], "<strong>Warning: No message defined for " + b.name + "</strong>")
                    },
                    formatAndAdd: function(a, b) {
                        var c = this.defaultMessage(a, b.method),
                            d = /\$?\{(\d+)\}/g;
                        "function" == typeof c ? c = c.call(this, b.parameters, a) : d.test(c) && (c = jQuery.format(c.replace(d, "{$1}"), b.parameters)), this.errorList.push({
                            message: c,
                            element: a
                        }), this.errorMap[a.name] = c, this.submitted[a.name] = c
                    },
                    addWrapper: function(a) {
                        return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
                    },
                    defaultShowErrors: function() {
                        for (var a = 0; this.errorList[a]; a++) {
                            var b = this.errorList[a];
                            this.settings.highlight && this.settings.highlight.call(this, b.element, this.settings.errorClass, this.settings.validClass), this.showLabel(b.element, b.message)
                        }
                        if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                            for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
                        if (this.settings.unhighlight)
                            for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
                        this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
                    },
                    validElements: function() {
                        return this.currentElements.not(this.invalidElements())
                    },
                    invalidElements: function() {
                        return a(this.errorList).map(function() {
                            return this.element
                        })
                    },
                    showLabel: function(b, c) {
                        var d = this.errorsFor(b);
                        d.length ? (d.removeClass(this.settings.validClass).addClass(this.settings.errorClass), d.attr("generated") && d.html(c)) : (d = a("<" + this.settings.errorElement + "/>").attr({
                            "for": this.idOrName(b),
                            generated: !0
                        }).addClass(this.settings.errorClass).html(c || ""), this.settings.wrapper && (d = d.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(d).length || (this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b))), !c && this.settings.success && (d.text(""), "string" == typeof this.settings.success ? d.addClass(this.settings.success) : this.settings.success(d)), this.toShow = this.toShow.add(d)
                    },
                    errorsFor: function(b) {
                        var c = this.idOrName(b);
                        return this.errors().filter(function() {
                            return a(this).attr("for") == c
                        })
                    },
                    idOrName: function(a) {
                        return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
                    },
                    validationTargetFor: function(a) {
                        return this.checkable(a) && (a = this.findByName(a.name).not(this.settings.ignore)[0]), a
                    },
                    checkable: function(a) {
                        return /radio|checkbox/i.test(a.type)
                    },
                    findByName: function(b) {
                        var c = this.currentForm;
                        return a(document.getElementsByName(b)).map(function(a, d) {
                            return d.form == c && d.name == b && d || null
                        })
                    },
                    getLength: function(b, c) {
                        switch (c.nodeName.toLowerCase()) {
                            case "select":
                                return a("option:selected", c).length;
                            case "input":
                                if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
                        }
                        return b.length
                    },
                    depend: function(a, b) {
                        return this.dependTypes[typeof a] ? this.dependTypes[typeof a](a, b) : !0
                    },
                    dependTypes: {
                        "boolean": function(a) {
                            return a
                        },
                        string: function(b, c) {
                            return !!a(b, c.form).length
                        },
                        "function": function(a, b) {
                            return a(b)
                        }
                    },
                    optional: function(b) {
                        return !a.validator.methods.required.call(this, a.trim(b.value), b) && "dependency-mismatch"
                    },
                    startRequest: function(a) {
                        this.pending[a.name] || (this.pendingRequest++, this.pending[a.name] = !0)
                    },
                    stopRequest: function(b, c) {
                        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], c && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 == this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                    },
                    previousValue: function(b) {
                        return a.data(b, "previousValue") || a.data(b, "previousValue", {
                            old: null,
                            valid: !0,
                            message: this.defaultMessage(b, "remote")
                        })
                    }
                },
                classRuleSettings: {
                    required: {
                        required: !0
                    },
                    email: {
                        email: !0
                    },
                    url: {
                        url: !0
                    },
                    date: {
                        date: !0
                    },
                    dateISO: {
                        dateISO: !0
                    },
                    dateDE: {
                        dateDE: !0
                    },
                    number: {
                        number: !0
                    },
                    numberDE: {
                        numberDE: !0
                    },
                    digits: {
                        digits: !0
                    },
                    creditcard: {
                        creditcard: !0
                    }
                },
                addClassRules: function(b, c) {
                    b.constructor == String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
                },
                classRules: function(b) {
                    var c = {};
                    return (b = a(b).attr("class")) && a.each(b.split(" "), function() {
                        this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
                    }), c
                },
                attributeRules: function(b) {
                    var c = {};
                    b = a(b);
                    for (var d in a.validator.methods) {
                        var e;
                        (e = "required" === d && "function" == typeof a.fn.prop ? b.prop(d) : b.attr(d)) ? c[d] = e: b[0].getAttribute("type") === d && (c[d] = !0)
                    }
                    return c.maxlength && /-1|2147483647|524288/.test(c.maxlength) && delete c.maxlength, c
                },
                metadataRules: function(b) {
                    if (!a.metadata) return {};
                    var c = a.data(b.form, "validator").settings.meta;
                    return c ? a(b).metadata()[c] : a(b).metadata()
                },
                staticRules: function(b) {
                    var c = {},
                        d = a.data(b.form, "validator");
                    return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
                },
                normalizeRules: function(b, c) {
                    return a.each(b, function(d, e) {
                        if (e === !1) delete b[d];
                        else if (e.param || e.depends) {
                            var f = !0;
                            switch (typeof e.depends) {
                                case "string":
                                    f = !!a(e.depends, c.form).length;
                                    break;
                                case "function":
                                    f = e.depends.call(c, c)
                            }
                            f ? b[d] = void 0 !== e.param ? e.param : !0 : delete b[d]
                        }
                    }), a.each(b, function(d, e) {
                        b[d] = a.isFunction(e) ? e(c) : e
                    }), a.each(["minlength", "maxlength", "min", "max"], function() {
                        b[this] && (b[this] = Number(b[this]))
                    }), a.each(["rangelength", "range"], function() {
                        b[this] && (b[this] = [Number(b[this][0]), Number(b[this][1])])
                    }), a.validator.autoCreateRanges && (b.min && b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), b.minlength && b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b.messages && delete b.messages, b
                },
                normalizeRule: function(b) {
                    if ("string" == typeof b) {
                        var c = {};
                        a.each(b.split(/\s/), function() {
                            c[this] = !0
                        }), b = c
                    }
                    return b
                },
                addMethod: function(b, c, d) {
                    a.validator.methods[b] = c, a.validator.messages[b] = void 0 != d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
                },
                methods: {
                    required: function(b, c, d) {
                        if (!this.depend(d, c)) return "dependency-mismatch";
                        switch (c.nodeName.toLowerCase()) {
                            case "select":
                                return (b = a(c).val()) && b.length > 0;
                            case "input":
                                if (this.checkable(c)) return this.getLength(b, c) > 0;
                            default:
                                return a.trim(b).length > 0
                        }
                    },
                    remote: function(b, c, d) {
                        if (this.optional(c)) return "dependency-mismatch";
                        var e = this.previousValue(c);
                        if (this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), e.originalMessage = this.settings.messages[c.name].remote, this.settings.messages[c.name].remote = e.message, d = "string" == typeof d && {
                                url: d
                            } || d, this.pending[c.name]) return "pending";
                        if (e.old === b) return e.valid;
                        e.old = b;
                        var f = this;
                        this.startRequest(c);
                        var g = {};
                        return g[c.name] = b, a.ajax(a.extend(!0, {
                            url: d,
                            mode: "abort",
                            port: "validate" + c.name,
                            dataType: "json",
                            data: g,
                            success: function(d) {
                                f.settings.messages[c.name].remote = e.originalMessage;
                                var g = d === !0;
                                if (g) {
                                    var h = f.formSubmitted;
                                    f.prepareElement(c), f.formSubmitted = h, f.successList.push(c), f.showErrors()
                                } else h = {}, d = d || f.defaultMessage(c, "remote"), h[c.name] = e.message = a.isFunction(d) ? d(b) : d, f.showErrors(h);
                                e.valid = g, f.stopRequest(c, g)
                            }
                        }, d)), "pending"
                    },
                    minlength: function(b, c, d) {
                        return this.optional(c) || this.getLength(a.trim(b), c) >= d
                    },
                    maxlength: function(b, c, d) {
                        return this.optional(c) || this.getLength(a.trim(b), c) <= d
                    },
                    rangelength: function(b, c, d) {
                        return b = this.getLength(a.trim(b), c), this.optional(c) || b >= d[0] && b <= d[1]
                    },
                    min: function(a, b, c) {
                        return this.optional(b) || a >= c
                    },
                    max: function(a, b, c) {
                        return this.optional(b) || c >= a
                    },
                    range: function(a, b, c) {
                        return this.optional(b) || a >= c[0] && a <= c[1]
                    },
                    email: function(a, b) {
                        return this.optional(b) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(a)
                    },
                    url: function(a, b) {
                        return this.optional(b) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(a)
                    },
                    date: function(a, b) {
                        return this.optional(b) || !/Invalid|NaN/.test(new Date(a))
                    },
                    dateISO: function(a, b) {
                        return this.optional(b) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(a)
                    },
                    number: function(a, b) {
                        return this.optional(b) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(a)
                    },
                    digits: function(a, b) {
                        return this.optional(b) || /^\d+$/.test(a)
                    },
                    creditcard: function(a, b) {
                        if (this.optional(b)) return "dependency-mismatch";
                        if (/[^0-9 -]+/.test(a)) return !1;
                        var c = 0,
                            d = 0,
                            e = !1;
                        a = a.replace(/\D/g, "");
                        for (var f = a.length - 1; f >= 0; f--) d = a.charAt(f), d = parseInt(d, 10), e && (d *= 2) > 9 && (d -= 9), c += d, e = !e;
                        return c % 10 == 0
                    },
                    accept: function(a, b, c) {
                        return c = "string" == typeof c ? c.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(b) || a.match(RegExp(".(" + c + ")$", "i"))
                    },
                    equalTo: function(b, c, d) {
                        return d = a(d).unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                            a(c).valid()
                        }), b == d.val()
                    }
                }
            }), a.format = a.validator.format
        }(jQuery),
        function(a) {
            var b = {};
            if (a.ajaxPrefilter) a.ajaxPrefilter(function(a, c, d) {
                c = a.port, "abort" == a.mode && (b[c] && b[c].abort(), b[c] = d)
            });
            else {
                var c = a.ajax;
                a.ajax = function(d) {
                    var e = ("port" in d ? d : a.ajaxSettings).port;
                    return "abort" == ("mode" in d ? d : a.ajaxSettings).mode ? (b[e] && b[e].abort(), b[e] = c.apply(this, arguments)) : c.apply(this, arguments)
                }
            }
        }(jQuery),
        function(a) {
            !jQuery.event.special.focusin && !jQuery.event.special.focusout && document.addEventListener && a.each({
                focus: "focusin",
                blur: "focusout"
            }, function(b, c) {
                function d(b) {
                    return b = a.event.fix(b), b.type = c, a.event.handle.call(this, b)
                }
                a.event.special[c] = {
                    setup: function() {
                        this.addEventListener(b, d, !0)
                    },
                    teardown: function() {
                        this.removeEventListener(b, d, !0)
                    },
                    handler: function(b) {
                        return arguments[0] = a.event.fix(b), arguments[0].type = c, a.event.handle.apply(this, arguments)
                    }
                }
            }), a.extend(a.fn, {
                validateDelegate: function(b, c, d) {
                    return this.bind(c, function(c) {
                        var e = a(c.target);
                        return e.is(b) ? d.apply(e, arguments) : void 0
                    })
                }
            })
        }(jQuery), define("jquery.validate", function() {}), define("jquery.validate-rules", ["require", "jquery", "underscore", "backbone"], function(a) {
            "use strict";
            var b = a("jquery"),
                c = a("underscore"),
                d = a("backbone");
            b.validator.messages.email = "The email address you entered is not valid.";
            var e = b.validator.methods.email;
            b.validator.methods.email = function(a, c) {
                return a === b(c).attr("placeholder") && b.browser.msie ? !0 : e.call(this, a, c)
            }, b.validator.addMethod("scNameChars", function(a, b) {
                return this.optional(b) || /^([a-zA-Z]+)([a-zA-Z\s\'\-]*)$/.test(a)
            }, "We're sorry, but your first name contains one or more characters that aren't permitted. Your first name may only contain letters, an apostrophe and/or a hyphen, and a space."), b.validator.addMethod("scNameUnique", function(a, e) {
                var f = Number(b(e).parents("tr").data("id")),
                    g = b.trim(a.toLowerCase()),
                    h = [],
                    i = !0;
                return b(e).parents("tr").data("id") ? (b("#webmdHoverContent").find("input[name^=name]").each(function(a, c) {
                    h.push({
                        id: Number(b(c).parents("tr").data("id")) || 0,
                        value: b.trim(b(c).val().toLowerCase())
                    })
                }), c.each(h, function(a) {
                    a.value === g && a.id !== f && (i = !1)
                })) : (c.each(d.app.people.pluck("firstName"), function(a) {
                    "string" == typeof a && h.push(b.trim(a.toLowerCase()))
                }), b("#webmdHoverContent").find("input[name^=name]").each(function(a, d) {
                    var e = b.trim(b(d).val().toLowerCase()); - 1 !== c.indexOf(h, e) && (i = !1)
                })), i
            }, "The Name entered already exists in your list. Please enter another Name."), b.validator.addMethod("scSymptomSetUnique", function() {
                var a = [],
                    e = !0;
                return c.each(d.app.symptomSets.pluck("session_name"), function(c) {
                    a.push(b.trim(c.toLowerCase()))
                }), b("#webmdHoverContent").find("input[name^=set]").each(function(d, f) {
                    var g = b.trim(b(f).val().toLowerCase()); - 1 !== c.indexOf(a, g) && (e = !1)
                }), e
            }, "The Symptom Name entered already exists in your list. Please enter another Symptom Name."), b.validator.addMethod("scFutureDate", function(a, c) {
                var d = !0,
                    e = b(c).parent(),
                    f = new Date(e.find("select[name^=year]").val(), e.find("select[name^=month]").val() - 1, e.find("select[name^=day]").val()),
                    g = new Date;
                return "" != e.find("select[name^=year]").val() && "" != e.find("select[name^=month]").val() && "" != e.find("select[name^=day]").val() && (f.getMonth() != e.find("select[name^=month]").val() - 1 && (d = !1), f > g && (d = !1)), d
            }, "This is not a valid date.  Please select a valid date."), b.validator.addClassRules({
                "validate-person-name": {
                    required: !0,
                    maxlength: 50,
                    scNameChars: !0,
                    scNameUnique: !0
                },
                "validate-symptom-name": {
                    required: !0,
                    maxlength: 24,
                    scSymptomSetUnique: !0
                },
                "validate-future-date": {
                    required: !0,
                    scFutureDate: !0
                }
            })
        }),
        function(a) {
            "use strict";
            a.fn.hideOption = function() {
                this.each(function() {
                    a(this).is("option") && !a(this).parent().is("span") && a(this).wrap("<span>").hide()
                })
            }, a.fn.showOption = function() {
                this.each(function() {
                    if ("option" === this.nodeName.toLowerCase()) {
                        var b = a(this).parent();
                        b.is("span") && (a(this).show(), b.replaceWith(this))
                    }
                })
            }
        }(jQuery), define("jquery.hideoption", function() {}), define("views/intro", ["require", "underscore", "backbone", "views/valueprop", "views/symptomsets/index", "collections/people", "models/person", "views/people/single", "jst!templates/intro/newsletters/mens-health.jst", "jst!templates/intro/newsletters/parenting.jst", "jst!templates/intro/privacy-policy.jst", "jst!templates/intro/newsletters/womens-health.jst", "views/login", "views/people/edit", "views/people/add", "views/people/show-hide", "util", "jquery.placeholder", "jquery.validate", "jquery.validate-rules", "jquery.hideoption"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("views/valueprop"),
                e = a("views/symptomsets/index"),
                f = a("collections/people"),
                g = a("models/person"),
                h = a("views/people/single"),
                i = a("jst!templates/intro/newsletters/mens-health.jst"),
                j = a("jst!templates/intro/newsletters/parenting.jst"),
                k = a("jst!templates/intro/privacy-policy.jst"),
                l = a("jst!templates/intro/newsletters/womens-health.jst"),
                m = a("views/login"),
                n = a("views/people/edit"),
                o = a("views/people/add"),
                p = a("views/people/show-hide"),
                q = a("util");
            return a("jquery.placeholder"), a("jquery.validate"), a("jquery.validate-rules"), a("jquery.hideoption"), c.View.extend({
                valueprop: {},
                events: function() {
                    var a = {
                        "click .add": "addPerson",
                        "click .edit": "editPeople",
                        "click .hide": "hidePeople",
                        "click .email-promo a.nl": "onClickedNewsletterLink",
                        "click .sign-in": "onClickedSignInLink",
                        "click #privacy": "checkPrivacy",
                        "blur #person-email": "blurEmail",
                        "change input[type=radio]": "onAttributeChange",
                        "change select[name=age]": "onAgeChange",
                        "click .email-promo a.privacy-policy": "onClickedPrivacyPolicy"
                    };
                    return c.app.isLoggedIn() && b.extend(a, {
                        "change select[name=person]": "updateFields"
                    }), a
                },
                initialize: function() {
                    b.bindAll(this);
                    var a = this;
                    this._cacheElements(), this.valueprop = new d({
                        el: this.$(".value-prop")
                    }), new e({
                        el: this.$(".saved-symptoms"),
                        collection: c.app.symptomSets
                    }), this.$("input[placeholder]").placeholder(), this.collection.on("add", this.addOnePerson), c.app.session.on("change:person", this.setPerson), c.app.meta.on("all", this.renderHiddenCount).on("all", this.toggleEditHideLinks).on("all", this.reselectPerson), b.defer(function() {
                        a.render()
                    })
                },
                _cacheElements: function() {
                    this.$person = this.$("select[name=person]"), this.$age = this.$("select[name=age]"), this.$zip = this.$("input[name=zip]"), this.$emailAddress = this.$("[name=emailAddress]")
                },
                render: function() {
                    var a = this;
                    b.each(g.agesMap, function(b) {
                        a.$age.append('<option value="' + b.key + '">' + b.label + "</option>")
                    }), this.renderHiddenCount(), this.toggleEditHideLinks(), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !1,
                        invalidHandler: function(a, b) {
                            var c = b.numberOfInvalids();
                            c && ($(".errorWrap").remove(), $.each(b.errorList, function(a) {
                                if ("checkbox" === b.errorList[a].element.type) 0 === $(".privacy_error").length && $(b.errorList[a].element).parent().before('<div class="privacy_error">Please acknowledge your agreement.</div>');
                                else {
                                    var c = $('<div class="errorWrap" />').append(b.errorList[a].message).append('<span class="indicator"><span></span></span>'),
                                        d = $(b.errorList[a].element).position();
                                    c.insertAfter($(b.errorList[a].element)).css({
                                        top: d.top,
                                        left: d.left,
                                        marginLeft: $(b.errorList[a].element).width() + 20 + "px"
                                    }), $(b.errorList[a].element).bind({
                                        focus: function() {
                                            $(this).hasClass("error") && $(this).next(".errorWrap").show()
                                        },
                                        blur: function() {
                                            $(this).next(".errorWrap").hide()
                                        }
                                    })
                                }
                            }))
                        },
                        submitHandler: function() {
                            a.submit()
                        },
                        errorPlacement: function() {},
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), this.addAllPeople(), this.renderNewsletterPromo()
                },
                renderHiddenCount: function() {
                    var a = "Hide",
                        b = c.app.meta.where({
                            instanceId: "hidden"
                        }).length;
                    b && (a += " (" + b + ")"), this.$(".modify-persons .hide").text(a)
                },
                toggleEditHideLinks: function() {
                    var a = this.collection.dependants().length > 0;
                    this.$(".edit").parent().toggle(a), this.$(".hide").parent().toggle(a)
                },
                addOnePerson: function(a) {
                    var b = new h({
                            model: a
                        }).$el,
                        d = c.app.people.indexOf(a),
                        e = this.$person.find("option");
                    e.length ? e.eq(d - 1).after(b) : this.$person.append(b)
                },
                addAllPeople: function() {
                    this.$person.empty(), this.collection.each(this.addOnePerson), this.$person.find("[data-hidden=true]").hideOption(), this.setPerson()
                },
                setPerson: function() {
                    this.$person.val(c.app.session.get("person").id), this.updateFields()
                },
                reselectPerson: function() {
                    var a = this.values();
                    c.app.people.get(a.id).isVisible() || this.setPerson()
                },
                values: function() {
                    var a = {
                        id: this.$person.find(":selected").val(),
                        age: this.$age.val(),
                        gender: Number(this.$("input[name=gender]:checked").val()),
                        zip: this.$zip.val(),
                        emailAddress: this.$emailAddress.val() || null,
                        privacy: "on"
                    };
                    return a.zip === this.$zip.attr("placeholder") && (a.zip = ""), a.emailAddress === this.$emailAddress.attr("placeholder") && (a.emailAddress = null), a
                },
                getNewsletterId: function() {
                    var a, b = this.values();
                    return a = "" !== b.age && b.age < 18 ? 28 : b.gender === g.GENDER_MALE ? 26 : 35
                },
                renderNewsletterPromo: function() {
                    if (webmd.status && webmd.status.reg === !1 && !webmd.cookie.exists("ignoremaint")) this.$(".email-container").hide(), this.$(".privacy_label").hide();
                    else {
                        var a = {
                                26: i,
                                28: j,
                                35: l
                            },
                            b = this.getNewsletterId(),
                            c = a[b];
                        this.$(".email-promo").html(c() + " " + k())
                    }
                },
                submit: function() {
                    var a, d = this,
                        e = this.values(),
                        f = this.collection.get(e.id);
                    return c.app.isLoggedIn() && f.id !== g.ANONYMOUS.id || (f.setAge(e.age).set({
                        gender: e.gender,
                        emailAddress: e.emailAddress,
                        privacy: e.privacy
                    }), f.get("address").zip = e.zip), !c.app.isLoggedIn() && e.emailAddress && (-1 === b.indexOf(c.app.emailAddressesRegistered, e.emailAddress) && q.metrics.click("nl-sc", d.getNewsletterId()), b.defer(function() {
                        f.registerForNewsletter(d.getNewsletterId())
                    })), c.app.session.get("person") !== f && c.app.session.set("person", f), a = f.id === g.ANONYMOUS.id ? "anmon" : f.get("relationship") === g.RELATION_SELF ? "me" : "ausr", c.app.session.setProp40(), q.metrics.click("start", a, !0), c.app.router.navigate("/symptomsView", !0), q.scrollToElement({
                        targetSelector: "#header_ctr",
                        extraSpace: 10
                    }), !1
                },
                addPerson: function() {
                    return new o, !1
                },
                editPeople: function() {
                    return new n, !1
                },
                hidePeople: function() {
                    return new p({
                        collection: new f(this.collection.registered())
                    }), !1
                },
                updateFields: function() {
                    var a, b, c, d = this.values().id,
                        e = this.collection.get(d);
                    e && (a = e.get("gender"), c = e.get("address").zip, b = e.get("yOB") ? e.getNormalizedAge() : null, this.$("input[name=gender][value=" + a + "]").attr("checked", !0), this.$age.val(b), this.$zip.val(c), this.valueprop.setGender(a))
                },
                onAttributeChange: function() {
                    this.valueprop.setGender(this.values().gender), c.app.isLoggedIn() ? this.$person.val(g.ANONYMOUS.id) : this.renderNewsletterPromo()
                },
                onAgeChange: function() {
                    var a = this.values();
                    this.onAttributeChange(), a.age < q.MINIMUM_USER_AGE && a.id === g.ME.id && this.$person.val(g.ANONYMOUS.id)
                },
                onClickedNewsletterLink: function() {
                    q.metrics.click("info", "vs")
                },
                onClickedSignInLink: function() {
                    return q.metrics.click("signin"), new m, !1
                },
                onClickedPrivacyPolicy: function() {
                    q.metrics.click("info_pp", "", !0)
                },
                checkPrivacy: function() {
                    $("#privacy").is(":checked") ? ($("#view-intro .privacy_error").hide(), $("#privacy").removeClass("error")) : ($("#view-intro .privacy_error").show(), $("#privacy").addClass("error"))
                },
                blurEmail: function() {
                    var a = "" === this.$emailAddress.val();
                    $("#privacy").toggleClass("required", !a)
                }
            })
        }), define("jst!templates/videoapi.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="v' + (null == (__t = chronicleID) ? "" : _.escape(__t)) + ' video_wrap">\r\n\r\n	<div id="video_' + (null == (__t = chronicleID) ? "" : _.escape(__t)) + '" class="video_container">\r\n		<video id="html5_video">\r\n			<source src="" type="video/mp4"></source>\r\n			<source src="" type="video/webm"></source>\r\n		</video>\r\n	</div>\r\n\r\n	<div class="video_caption video_caption_off">\r\n		<span>Closed Caption is not available for this video</span>\r\n	</div>\r\n\r\n	<div class="video_bandwidth_overlay">\r\n		<h3>For a better viewing experience you may wish to adjust the size and quality of your video stream:</h3>\r\n		<ul>\r\n			<li>\r\n				<input type="radio" name="bandwidth" value="high" id="bandwidth_high" checked="true">\r\n				<label for="bandwidth_high">High</label>\r\n			</li>\r\n			<li>\r\n				<input type="radio" name="bandwidth" value="med" id="bandwidth_med">\r\n				<label for="bandwidth_med">Medium</label>\r\n			</li>\r\n			<li>\r\n				<input type="radio" name="bandwidth" value="low" id="bandwidth_low">\r\n				<label for="bandwidth_low">Low</label>\r\n			</li>\r\n		</ul>\r\n\r\n		<div class="video_bandwidth_overlay_apply" onclick="return sl(this,\'\',\'video-ctl_bw_chg\');">Apply</div> or <a class="video_bandwidth_overlay_close" onclick="return sl(this,\'\',\'video-ctl_bw_cancel\');">close</a>\r\n	 </div>\r\n\r\n	<div class="video_controls">\r\n		<a class="video_play_pause video_pause" hover="pause">||</a>\r\n\r\n		<div class="video_timeline">\r\n		</div>\r\n\r\n		<div class="video_time_tracker">\r\n			<span class="video_current">00:00</span>/<span class="video_total">00:00</span>\r\n		</div>\r\n\r\n		<div class="video_volume">\r\n			<a class="mute" hover="sound&amp;nbsp;off">mute</a>\r\n			<div class="video_volume_bar" hover="adjust&amp;nbsp;volume"></div>\r\n		</div>\r\n\r\n		<a class="video_cc_button video_cc_off" hover="closed&amp;nbsp;captioning">CC</a>\r\n\r\n		<a class="video_light" hover="dim&amp;nbsp;the&amp;nbsp;lights">light</a>\r\n\r\n		<a class="video_bandwidth_button rightHover" hover="change&amp;nbsp;connection&amp;nbsp;settings">band</a>\r\n\r\n		<div class="clearing"></div> <br>\r\n	</div>\r\n\r\n	<div class="video_hover">\r\n		<div class="video_hover_left">\r\n		</div>\r\n		<div class="video_hover_content">\r\n			<span></span>\r\n			<div class="video_hover_bottom"></div>\r\n		</div>\r\n		<div class="video_hover_right"></div>\r\n	</div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/symptomsets/asset.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay_displayasset" class="sc-overlay ' + (null == (__t = type) ? "" : __t) + '">\r\n', header && (__p += "\r\n	", __p += "video" === type ? "\r\n	<h1>" + (null == (__t = header) ? "" : __t) + "</h1>\r\n	" : "\r\n	<p>" + (null == (__t = header) ? "" : __t) + "</p>\r\n	", __p += "\r\n"), __p += '\r\n	<div id="overlay-content">' + (null == (__t = content) ? "" : __t) + '</div>\r\n	<button class="webmd-btn webmd-btn-pr webmd-btn-xs">OK</button>\r\n</div>\r\n';
                return __p
            }
        }),
        function(a, b) {
            "use strict";
            var c = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
            a.fn.imagesLoaded = function(d) {
                function e() {
                    var b = a(m),
                        c = a(n);
                    i && (n.length ? i.reject(k, b, c) : i.resolve(k)), a.isFunction(d) && d.call(h, k, b, c)
                }

                function f(a) {
                    g(a.target, "error" === a.type)
                }

                function g(b, d) {
                    b.src !== c && -1 === a.inArray(b, l) && (l.push(b), d ? n.push(b) : m.push(b), a.data(b, "imagesLoaded", {
                        isBroken: d,
                        src: b.src
                    }), j && i.notifyWith(a(b), [d, k, a(m), a(n)]), k.length === l.length && (setTimeout(e), k.unbind(".imagesLoaded", f)))
                }
                var h = this,
                    i = a.isFunction(a.Deferred) ? a.Deferred() : 0,
                    j = a.isFunction(i.notify),
                    k = h.find("img").add(h.filter("img")),
                    l = [],
                    m = [],
                    n = [];
                return a.isPlainObject(d) && a.each(d, function(a, b) {
                    "callback" === a ? d = b : i && i[a](b)
                }), k.length ? k.bind("load.imagesLoaded error.imagesLoaded", f).each(function(d, e) {
                    var f = e.src,
                        h = a.data(e, "imagesLoaded");
                    return h && h.src === f ? void g(e, h.isBroken) : e.complete && e.naturalWidth !== b ? void g(e, 0 === e.naturalWidth || 0 === e.naturalHeight) : void((e.readyState || e.complete) && (e.src = c, e.src = f))
                }) : e(), i ? i.promise(h) : h
            }
        }(jQuery), define("jquery.imagesloaded", function() {}), define("views/display-assets", ["require", "underscore", "backbone", "jst!templates/videoapi.jst", "jst!templates/symptomsets/asset.jst", "util", "jquery.imagesloaded"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("jst!templates/videoapi.jst"),
                e = a("jst!templates/symptomsets/asset.jst"),
                f = a("util");
            return a("jquery.imagesloaded"), c.View.extend({
                events: {
                    "click button": "close"
                },
                locations: {
                    images: image_server_url + "/webmd/consumer_assets/site_images/symptom_checker/assets/images/",
                    audio: image_server_url + "/webmd/consumer_assets/site_images/symptom_checker/assets/audio/",
                    video: "/media/cons_video_assets/editorial"
                },
                videos: {
                    "Loreal-HC-Skin-Sleep_": "/skin-and-beauty/beauty/wrinkles-skin-healthcheck/video/center-well/hc-skin-sleep",
                    HC_diabetic_retinopathy: "/diabetes/diabetes-health-check/video/center-well/hc-diabetic-retinopathy"
                },
                initialize: function(a) {
                    b.bindAll(this);
                    var c;
                    a.qualID ? (c = this.model.findQualByID(a.qualID), a.title = c.value) : (c = this.model.findQualifierClassByID(a.qualifierClassID), a.title = c.question), a.mediaClass = c.mediaClass, a.mediaLocation = c.mediaLocation, this.render()
                },
                resize: function() {
                    var a = this.$("img")[0].width + Number(this.$el.css("margin-left").replace("px", "")) + Number(this.$el.css("margin-right").replace("px", ""));
                    webmd.overlay.resize({
                        innerWidth: a + "px"
                    })
                },
                getAudioSource: function() {
                    return this.locations.audio + this.options.mediaLocation
                },
                getVideoLocation: function() {
                    return this.locations.video + this.videos[this.options.mediaLocation]
                },
                close: function() {
                    webmd.overlay.close()
                },
                onCleanup: function() {
                    return this.$el.undelegate(), this
                },
                getTitle: function() {
                    var a = f.capitalize(this.options.title);
                    return "?" === a.charAt(a.length - 1) && (a = null), a
                },
                render: function() {
                    var a, c = this,
                        f = c.options.mediaClass.toLowerCase(),
                        g = !1,
                        h = !1,
                        i = {
                            type: f,
                            header: c.getTitle(),
                            content: null
                        };
                    return "image" === f ? (a = c.locations.images + c.options.mediaLocation, i.content = '<img src="' + a + '" />') : "video" === f ? (i.content = d({
                        chronicleID: c.options.mediaLocation
                    }), $("html").hasClass("ua_device_ipad") && (h = "526px", g = "700px")) : "audio" === f && (g = "290px", i.content = b.template('<audio src="<%- source %>" autoplay controls />', {
                        source: c.getAudioSource()
                    })), webmd.overlay.open({
                        html: e(i),
                        scrolling: !1,
                        width: g,
                        height: h,
                        onCleanup: function() {
                            c.onCleanup(), "audio" === f && c.mediaElement.pause()
                        },
                        onComplete: function() {
                            if (c.setElement($("#overlay_displayasset")), "video" === f) webmd.load({
                                js: [image_server_url + "/webmd/PageBuilder_Assets/JS_static/tools/video/webmd.m.videoapi.build.min.js", image_server_url + "/webmd/PageBuilder_Assets/JS_static/jquery-ui.js"],
                                load: function() {
                                    webmd.m.video["v" + c.options.mediaLocation] = {
                                        caption: {
                                            cc: !1
                                        },
                                        file: {
                                            url: c.getVideoLocation(),
                                            height: 360,
                                            width: 640
                                        },
                                        vidWindowLogo: null
                                    }, webmd.object(webmd.m.videoapi).init({
                                        chronicleID: c.options.mediaLocation
                                    })
                                }
                            });
                            else if ("audio" === f) {
                                var a = image_server_url + "/webmd/PageBuilder_Assets/JS_static/tools/symptom_checker/mediaelement";
                                webmd.load({
                                    css: a + "/mediaelementplayer.min.css",
                                    js: a + "/mediaelement-and-player.min.js",
                                    load: function() {
                                        c.mediaElementPlayer = c.$("audio").mediaelementplayer({
                                            defaultAudioWidth: 230,
                                            success: function(a) {
                                                c.mediaElement = a
                                            }
                                        })
                                    }
                                })
                            } else $(c.el).imagesLoaded(function() {
                                c.resize()
                            })
                        }
                    }), this
                }
            })
        }), define("jst!templates/symptomsets/severity-warning.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay-symptomseveritywarning" class="sc-overlay">\r\n	<p>' + (null == (__t = content) ? "" : __t) + "</p>\r\n</div>\r\n";
                return __p
            }
        }), define("views/scapp/symptom/severity-warning", ["backbone", "jst!templates/symptomsets/severity-warning.jst"], function(a, b) {
            "use strict";
            return a.View.extend({
                initialize: function() {
                    this.render()
                },
                render: function() {
                    var a, c = this;
                    return a = b({
                        content: $.trim(this.options.text)
                    }), webmd.overlay.open({
                        html: a,
                        width: "462px",
                        overlayClose: !1,
                        scrolling: !1,
                        onOpen: function() {
                            $("#colorbox").css({
                                border: "3px solid #ff0000",
                                "-moz-box-sizing": "content-box",
                                "-webkit-box-sizing": "content-box",
                                "box-sizing": "content-box"
                            })
                        },
                        onClosed: function() {
                            c.remove()
                        }
                    }), this
                }
            })
        }), define("jst!templates/scapp/symptom/qualifyingquestion.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="header">\r\n	<h3>Refine Your Symptoms</h3>\r\n	<button class="close"></button>\r\n</div>\r\n\r\n', _.each(model.qualifierclasses, function(a, b) {
                    __p += '\r\n<div class="page"\r\n	class="', isPageEnabled(b) || (__p += "disabled"), __p += '"\r\n	style="display: ', __p += isPageInitiallyVisible(b) ? "block" : "none", __p += '"\r\n	data-id="' + (null == (__t = a.id) ? "" : _.escape(__t)) + '">\r\n\r\n	' + (null == (__t = pagination({
                        totalPages: totalPages,
                        currentPage: b
                    })) ? "" : __t) + '\r\n\r\n	<h4 class="question">\r\n		<div class="left">Q:</div>\r\n		<div class="right">\r\n			' + (null == (__t = a.question) ? "" : __t) + "\r\n			", a.mediaClass && (__p += '\r\n				<button class="sc-question-media ' + (null == (__t = a.mediaClass.toLowerCase()) ? "" : _.escape(__t)) + '" data-id="' + (null == (__t = a.id) ? "" : _.escape(__t)) + '" />\r\n			'), __p += '\r\n		</div>\r\n	</h4>\r\n\r\n	<div class="content">\r\n		<div class="left">\r\n			<h4 class="answer">A:</h4>\r\n		</div>\r\n		<div class="right">\r\n			<ul class="' + (null == (__t = a.name.toLowerCase()) ? "" : _.escape(__t)) + '">\r\n			', _.each(a.quals, function(b) {
                        __p += "\r\n				<li>\r\n					<label>\r\n					", "Image" === a.name && (__p += '\r\n						<img src="' + (null == (__t = image_server_url + "/webmd/consumer_assets/site_images/symptom_checker/assets/images/" + (b.mediaLocation || "qq_none_of_these.gif")) ? "" : _.escape(__t)) + '"\r\n							alt="' + (null == (__t = b.value) ? "" : _.escape(__t)) + '"	height="79" width="79" />\r\n					'), __p += "\r\n\r\n					", "Check" === a.type ? (__p += '\r\n						<input type="checkbox"\r\n							name="qualifierclasses[' + (null == (__t = a.id) ? "" : _.escape(__t)) + ']"\r\n							value="' + (null == (__t = b.id) ? "" : _.escape(__t)) + '"\r\n							', b.selected && (__p += 'checked="checked"'), __p += "/>\r\n					") : "Radio" === a.type && (__p += '\r\n						<input type="radio"\r\n							name="qualifierclasses[' + (null == (__t = a.id) ? "" : _.escape(__t)) + ']"\r\n							value="' + (null == (__t = b.id) ? "" : _.escape(__t)) + '"\r\n							', b.selected && (__p += 'checked="checked"'), __p += "/>\r\n					"), __p += "\r\n\r\n					", "Image" !== a.name && (__p += "\r\n						" + (null == (__t = b.value) ? "" : _.escape(__t)) + "\r\n\r\n						", b.mediaClass && (__p += '\r\n							<button class="sc-qual-media ' + (null == (__t = b.mediaClass.toLowerCase()) ? "" : _.escape(__t)) + '" data-id="' + (null == (__t = b.id) ? "" : _.escape(__t)) + '" />\r\n						'), __p += "\r\n					"), __p += "\r\n					</label>\r\n				</li>\r\n			"
                    }), __p += "\r\n			</ul>\r\n		</div>\r\n	</div>\r\n\r\n	" + (null == (__t = pagination({
                        totalPages: totalPages,
                        currentPage: b
                    })) ? "" : __t) + "\r\n</div>\r\n"
                }), __p += "\r\n";
                return __p
            }
        }), define("jst!templates/scapp/symptom/qualifyingquestion/pagination.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="sc-pagination">\r\n	<div class="info">\r\n	', totalPages > 1 && (__p += "\r\n		<b>" + (null == (__t = currentPage + 1) ? "" : _.escape(__t)) + "</b> of <b>" + (null == (__t = totalPages) ? "" : _.escape(__t)) + "</b>\r\n	"), __p += '\r\n	</div>\r\n\r\n	<div class="buttons">\r\n		<div class="left">\r\n		', totalPages > 1 && currentPage >= 1 && (__p += '\r\n			<a href="#" class="previous">Previous</a>\r\n		'), __p += '\r\n		</div>\r\n\r\n		<div class="right">\r\n		', totalPages > 1 && currentPage < totalPages - 1 && (__p += '\r\n			<a href="#" class="webmd-btn webmd-btn-sc webmd-btn-l skip">Skip Questions</a>\r\n			<a href="#" class="webmd-btn webmd-btn-pr webmd-btn-xs next">Next</a>\r\n		'), __p += "\r\n\r\n		", currentPage === totalPages - 1 && (__p += '\r\n			<a href="#" class="webmd-btn webmd-btn-pr webmd-btn-s finish">Finish</a>\r\n		'), __p += "\r\n		</div>\r\n	</div>\r\n</div>\r\n";
                return __p
            }
        }), define("views/scapp/symptom/qualifyingquestion", ["require", "underscore", "backbone", "views/display-assets", "views/scapp/symptom/severity-warning", "util", "jst!templates/scapp/symptom/qualifyingquestion.jst", "jst!templates/scapp/symptom/qualifyingquestion/pagination.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("views/display-assets"),
                e = a("views/scapp/symptom/severity-warning"),
                f = a("util"),
                g = a("jst!templates/scapp/symptom/qualifyingquestion.jst"),
                h = a("jst!templates/scapp/symptom/qualifyingquestion/pagination.jst");
            return c.View.extend({
                id: "qualifying-questions",
                events: {
                    "click .previous": "previous",
                    "click .skip": "onClickSkipButton",
                    "click .close": "removeAndSelectSymptom",
                    "click .finish": "onClickFinishButton",
                    "click .next": "next",
                    "click .sc-question-media": "displayQuestionMediaOverlay",
                    "click .sc-qual-media": "displayQualifierMediaOverlay",
                    "change input": "onInputChange"
                },
                initialize: function() {
                    b.bindAll(this), c.app.router.on("all", this.remove), this.render()
                },
                getTotalPages: function() {
                    return this.getEnabledQualifierClassIDs().length
                },
                getEnabledQualifierClassIDs: function() {
                    var a = b.pluck(this.model.get("qualifierclasses"), "id");
                    return b.each(this.model.get("qualifierclasses"), function(c) {
                        b.each(c.quals, function(c) {
                            c.selected && c.OverRideQuestionClassIdsAttName && (a = b.difference(a, c.OverRideQuestionClassIdsAttName))
                        })
                    }), a
                },
                isPageEnabled: function(a) {
                    var c = this.getEnabledQualifierClassIDs(),
                        d = this.model.get("qualifierclasses")[a];
                    return b.indexOf(c, d.id) > -1
                },
                isPageInitiallyVisible: function(a) {
                    var c = b.pluck(this.model.get("qualifierclasses"), "id"),
                        d = this.getEnabledQualifierClassIDs()[0],
                        e = b.indexOf(c, d);
                    return a === e
                },
                render: function() {
                    var a;
                    a = g({
                        model: this.model.attributes,
                        pagination: function(a) {
                            return h(a)
                        },
                        totalPages: this.getTotalPages(),
                        isPageInitiallyVisible: this.isPageInitiallyVisible,
                        isPageEnabled: this.isPageEnabled
                    }), this.$el.html(a), this.position(), $("body").append(this.$el)
                },
                renderPagination: function() {
                    var a, b = this.$(".page:not(.disabled)").length;
                    this.$(".page:not(.disabled)").each(function(c) {
                        a = h({
                            totalPages: b,
                            currentPage: c
                        }), $(this).find(".sc-pagination").replaceWith(a)
                    })
                },
                getCurrentQualifierClassID: function() {
                    return this.$(".page:visible").data("id")
                },
                previous: function() {
                    return f.metrics.click("aq-" + this.model.id, this.getCurrentQualifierClassID()), this.$(".page:visible").hide().prev(":not(.disabled)").show(), !1
                },
                next: function() {
                    return f.metrics.click("aq-" + this.model.id, this.getCurrentQualifierClassID()), this.$(".page:visible").hide().next(":not(.disabled)").show(), !1
                },
                onClickFinishButton: function() {
                    return f.metrics.click("aq-" + this.model.id, this.getCurrentQualifierClassID()), this.removeAndSelectSymptom(), !1
                },
                onClickSkipButton: function() {
                    return f.metrics.click("aq-" + this.model.id, this.getCurrentQualifierClassID()), this.removeAndSelectSymptom(), !1
                },
                removeAndSelectSymptom: function() {
                    return this.setValues(), void 0 === c.app.session.get("symptomSet").get("symptoms").get(this.model.id) && (c.app.availableSymptoms.remove(this.model), c.app.session.get("symptomSet").get("symptoms").add(this.model)), c.View.prototype.remove.call(this), !1
                },
                disableQualifierClasses: function(a) {
                    var c, d = this;
                    b.each(this.model.get("qualifierclasses"), function(e, f) {
                        b.indexOf(a, e.id) > -1 && (c = d.$(".page").eq(f), c.addClass("disabled"), c.find("input").attr("checked", !1))
                    })
                },
                enableQualifierClasses: function(a) {
                    var c = this;
                    b.each(this.model.get("qualifierclasses"), function(d, e) {
                        b.indexOf(a, d.id) > -1 && c.$(".page").eq(e).removeClass("disabled")
                    })
                },
                setValues: function() {
                    var a, c = this,
                        d = !1;
                    b.each(this.model.get("qualifierclasses"), function(e) {
                        b.each(e.quals, function(b) {
                            a = c.$("input[name='qualifierclasses[" + e.id + "]'][value=" + b.id + "]").is(":checked"), b.selected !== a && (d = !0, b.selected = a)
                        })
                    }), d && this.model.trigger("change:qualifierclasses")
                },
                onInputChange: function(a) {
                    var c, d, f, g, h, i = $(a.target);
                    return "checkbox" === i.attr("type") && this.onCheckboxChange(a), c = Number(i.attr("name").match(/qualifierclasses\[(.*)\]/)[1]), f = b.findWhere(this.model.get("qualifierclasses"), {
                        id: c
                    }), i.is(":checked") && (h = b.findWhere(f.quals, {
                        id: Number(i.val())
                    }), h.SeverityText && new e({
                        text: h.SeverityText
                    })), d = f.quals[0].OverRideQuestionClassIdsAttName, d.length && (g = this.$('input[name="qualifierclasses[' + c + ']"]:checked').val(), "0" === g || void 0 === g ? this.enableQualifierClasses(d) : this.disableQualifierClasses(d), this.renderPagination()), !1
                },
                onCheckboxChange: function(a) {
                    var b = $(a.target),
                        c = '[name="' + b.attr("name") + '"]';
                    return b.is(":checked") && (c += "0" === b.val() ? "[value!=0]" : "[value=0]", this.$(c).attr("checked", !1)), !1
                },
                position: function() {
                    var a = $("#choose-symptoms").offset(),
                        b = a.left + 15,
                        c = a.top + 6;
                    this.$el.css({
                        left: b + "px",
                        top: c + "px"
                    })
                },
                displayQuestionMediaOverlay: function(a) {
                    var b = $(a.target),
                        c = b.parents(".page").data("id");
                    return this.triggerMediaMetrics(b), new d({
                        model: this.model,
                        qualifierClassID: String(c)
                    }), !1
                },
                displayQualifierMediaOverlay: function(a) {
                    var b = $(a.target),
                        c = b.data("id");
                    return this.triggerMediaMetrics(b), new d({
                        model: this.model,
                        qualID: String(c)
                    }), !1
                },
                triggerMediaMetrics: function(a) {
                    var b;
                    a.hasClass("audio") ? b = "aud" : a.hasClass("video") ? b = "vid" : a.hasClass("image") && (b = "img"), f.metrics.click("addl-qtn-vd", b)
                }
            })
        }), define("views/availablesymptom", ["require", "underscore", "backbone", "util", "views/scapp/symptom/qualifyingquestion", "views/scapp/symptom/severity-warning"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("views/scapp/symptom/qualifyingquestion"),
                f = a("views/scapp/symptom/severity-warning");
            return c.View.extend({
                tagName: "li",
                events: {
                    click: "onClick"
                },
                template: b.template('<div class="container"><div class="name"><%- name %></div><div class="add"/></div>'),
                render: function() {
                    return this.$el.html(this.template({
                        name: this.model.getDisplayName()
                    })), this
                },
                onClick: function() {
                    this.$el.unbind("click"), d.metrics.click("list-sym", this.model.id), this.model.get("qualifierclasses").length ? new e({
                        model: this.model
                    }) : (c.app.availableSymptoms.remove(this.model), c.app.session.get("symptomSet").get("symptoms").add(this.model)), this.model.get("SeverityText") && new f({
                        text: this.model.get("SeverityText")
                    })
                },
                remove: function() {
                    var a = this;
                    this.$el.html("&nbsp;").slideUp(function() {
                        c.View.prototype.remove.call(a)
                    })
                }
            })
        }), ! function(a, b, c) {
            function d(a, c) {
                var d, e = b.createElement(a || "div");
                for (d in c) e[d] = c[d];
                return e
            }

            function e(a) {
                for (var b = 1, c = arguments.length; c > b; b++) a.appendChild(arguments[b]);
                return a
            }

            function f(a, b, c, d) {
                var e = ["opacity", b, ~~(100 * a), c, d].join("-"),
                    f = .01 + c / d * 100,
                    g = Math.max(1 - (1 - a) / b * (100 - f), a),
                    h = l.substring(0, l.indexOf("Animation")).toLowerCase(),
                    i = h && "-" + h + "-" || "";
                return n[e] || (o.insertRule("@" + i + "keyframes " + e + "{0%{opacity:" + g + "}" + f + "%{opacity:" + a + "}" + (f + .01) + "%{opacity:1}" + (f + b) % 100 + "%{opacity:" + a + "}100%{opacity:" + g + "}}", o.cssRules.length), n[e] = 1), e
            }

            function g(a, b) {
                var d, e, f = a.style;
                if (f[b] !== c) return b;
                for (b = b.charAt(0).toUpperCase() + b.slice(1), e = 0; e < m.length; e++)
                    if (d = m[e] + b, f[d] !== c) return d
            }

            function h(a, b) {
                for (var c in b) a.style[g(a, c) || c] = b[c];
                return a
            }

            function i(a) {
                for (var b = 1; b < arguments.length; b++) {
                    var d = arguments[b];
                    for (var e in d) a[e] === c && (a[e] = d[e])
                }
                return a
            }

            function j(a) {
                for (var b = {
                        x: a.offsetLeft,
                        y: a.offsetTop
                    }; a = a.offsetParent;) b.x += a.offsetLeft, b.y += a.offsetTop;
                return b
            }

            function k(a) {
                return this.spin ? void(this.opts = i(a || {}, k.defaults, p)) : new k(a)
            }
            var l, m = ["webkit", "Moz", "ms", "O"],
                n = {},
                o = function() {
                    var a = d("style", {
                        type: "text/css"
                    });
                    return e(b.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
                }(),
                p = {
                    lines: 12,
                    length: 7,
                    width: 5,
                    radius: 10,
                    rotate: 0,
                    corners: 1,
                    color: "#000",
                    speed: 1,
                    trail: 100,
                    opacity: .25,
                    fps: 20,
                    zIndex: 2e9,
                    className: "spinner",
                    top: "auto",
                    left: "auto",
                    position: "relative"
                };
            k.defaults = {}, i(k.prototype, {
                    spin: function(a) {
                        this.stop();
                        var b, c, e = this,
                            f = e.opts,
                            g = e.el = h(d(0, {
                                className: f.className
                            }), {
                                position: f.position,
                                width: 0,
                                zIndex: f.zIndex
                            }),
                            i = f.radius + f.length + f.width;
                        if (a && (a.insertBefore(g, a.firstChild || null), c = j(a), b = j(g), h(g, {
                                left: ("auto" == f.left ? c.x - b.x + (a.offsetWidth >> 1) : parseInt(f.left, 10) + i) + "px",
                                top: ("auto" == f.top ? c.y - b.y + (a.offsetHeight >> 1) : parseInt(f.top, 10) + i) + "px"
                            })), g.setAttribute("aria-role", "progressbar"), e.lines(g, e.opts), !l) {
                            var k = 0,
                                m = f.fps,
                                n = m / f.speed,
                                o = (1 - f.opacity) / (n * f.trail / 100),
                                p = n / f.lines;
                            ! function q() {
                                k++;
                                for (var a = f.lines; a; a--) {
                                    var b = Math.max(1 - (k + a * p) % n * o, f.opacity);
                                    e.opacity(g, f.lines - a, b, f)
                                }
                                e.timeout = e.el && setTimeout(q, ~~(1e3 / m))
                            }()
                        }
                        return e
                    },
                    stop: function() {
                        var a = this.el;
                        return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = c), this
                    },
                    lines: function(a, b) {
                        function c(a, c) {
                            return h(d(), {
                                position: "absolute",
                                width: b.length + b.width + "px",
                                height: b.width + "px",
                                background: a,
                                boxShadow: c,
                                transformOrigin: "left",
                                transform: "rotate(" + ~~(360 / b.lines * i + b.rotate) + "deg) translate(" + b.radius + "px,0)",
                                borderRadius: (b.corners * b.width >> 1) + "px"
                            })
                        }
                        for (var g, i = 0; i < b.lines; i++) g = h(d(), {
                            position: "absolute",
                            top: 1 + ~(b.width / 2) + "px",
                            transform: b.hwaccel ? "translate3d(0,0,0)" : "",
                            opacity: b.opacity,
                            animation: l && f(b.opacity, b.trail, i, b.lines) + " " + 1 / b.speed + "s linear infinite"
                        }), b.shadow && e(g, h(c("#000", "0 0 4px #000"), {
                            top: "2px"
                        })), e(a, e(g, c(b.color, "0 0 1px rgba(0,0,0,.1)")));
                        return a
                    },
                    opacity: function(a, b, c) {
                        b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
                    }
                }),
                function() {
                    function a(a, b) {
                        return d("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', b)
                    }
                    var b = h(d("group"), {
                        behavior: "url(#default#VML)"
                    });
                    !g(b, "transform") && b.adj ? (o.addRule(".spin-vml", "behavior:url(#default#VML)"), k.prototype.lines = function(b, c) {
                        function d() {
                            return h(a("group", {
                                coordsize: j + " " + j,
                                coordorigin: -i + " " + -i
                            }), {
                                width: j,
                                height: j
                            })
                        }

                        function f(b, f, g) {
                            e(l, e(h(d(), {
                                rotation: 360 / c.lines * b + "deg",
                                left: ~~f
                            }), e(h(a("roundrect", {
                                arcsize: c.corners
                            }), {
                                width: i,
                                height: c.width,
                                left: c.radius,
                                top: -c.width >> 1,
                                filter: g
                            }), a("fill", {
                                color: c.color,
                                opacity: c.opacity
                            }), a("stroke", {
                                opacity: 0
                            }))))
                        }
                        var g, i = c.length + c.width,
                            j = 2 * i,
                            k = 2 * -(c.width + c.length) + "px",
                            l = h(d(), {
                                position: "absolute",
                                top: k,
                                left: k
                            });
                        if (c.shadow)
                            for (g = 1; g <= c.lines; g++) f(g, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
                        for (g = 1; g <= c.lines; g++) f(g);
                        return e(b, l)
                    }, k.prototype.opacity = function(a, b, c, d) {
                        var e = a.firstChild;
                        d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
                    }) : l = g(b, "animation")
                }(), "function" == typeof define && define.amd ? define("spinner", [], function() {
                    return k
                }) : a.Spinner = k
        }(window, document), define("jquery.spin", ["jquery", "spinner"], function(a, b) {
            "use strict";
            a.fn.spin = function(c) {
                var d = {
                    lines: 13,
                    length: 6,
                    width: 2,
                    radius: 7,
                    rotate: 0,
                    color: "#666",
                    speed: 1,
                    trail: 60,
                    shadow: !1,
                    hwaccel: !1,
                    className: "spinner",
                    zIndex: 2e9,
                    top: "auto",
                    left: "auto"
                };
                return c = c || {}, a.extend(c, d), this.each(function() {
                    var d = a(this),
                        e = d.data();
                    e.spinner && (e.spinner.stop(), delete e.spinner), c !== !1 && (e.spinner = new b(a.extend({
                        color: d.css("color")
                    }, c)).spin(this))
                }), this
            }
        }), define("views/availablesymptoms", ["require", "underscore", "backbone", "views/availablesymptom", "util", "jquery.spin"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("views/availablesymptom"),
                e = a("util");
            return a("jquery.spin"), c.View.extend({
                initialize: function() {
                    b.bindAll(this), this.collection.on({
                        request: this.onRequest,
                        error: this.onError,
                        add: this.addOneSymptom,
                        reset: this.addAllSymptoms,
                        remove: this.removeOneSymptom
                    }), c.on("startOver", this.reset), c.on("clickBodyPart", this.displayBodyPartName), this.$loading = this.$(".loading"), this.$noResults = this.$(".no-results"), this.$error = this.$(".error"), this.$list = this.$("ul"), this.$name = this.$(".body-part-name")
                },
                displayBodyPartName: function(a) {
                    this.$name.text(e.bodyParts[a] + " Symptoms:")
                },
                reset: function() {
                    this.$name.empty(), this.$noResults.hide(), this.$error.hide()
                },
                onRequest: function() {
                    this.$loading.show().spin()
                },
                onError: function() {
                    this.$loading.hide(), this.$error.show()
                },
                removeOneSymptom: function(a) {
                    a.view.remove()
                },
                addAllSymptoms: function(a) {
                    this.$loading.hide(), this.$error.hide(), this.$list.empty(), this.$noResults.toggle(0 === a.length), a.each(this.addOneSymptom)
                },
                addOneSymptom: function(a) {
                    var b, c, e, f;
                    b = new d({
                        model: a
                    }), a.view = b, c = this.collection.indexOf(a), e = this.$("li"), f = b.render().el, e.length ? 0 === c ? this.$list.prepend(f) : e.eq(c - 1).after(f) : this.$list.append(f)
                }
            })
        }), define("views/selectedsymptom", ["require", "underscore", "backbone", "util", "views/scapp/symptom/qualifyingquestion"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("views/scapp/symptom/qualifyingquestion");
            return c.View.extend({
                tagName: "li",
                events: {
                    "click .edit": "edit",
                    "click .remove": "deselect"
                },
                template: b.template('<div class="container <% if (hasQualifierClasses) { %>hasQualifierClasses<% } %>"><div class="name"><%- name %></div><div><% if (hasQualifierClasses) { %><div class="edit"/><% } %><div class="remove"/></div></div>'),
                initialize: function() {
                    b.bindAll(this), this.collection = c.app.session.get("symptomSet").get("symptoms"), this.collection.on("add", this.rerender, this)
                },
                render: function() {
                    return this.$el.html(this.template({
                        name: this.model.getDisplayName(),
                        hasQualifierClasses: this.model.get("qualifierclasses").length > 0
                    })), this
                },
                rerender: function() {
                    this.model.getDisplayName() !== this.model.get("name") && this.render()
                },
                deselect: function() {
                    return this.isDisabled() ? !1 : (d.metrics.click("list-choice_del"), this.$el.unbind("click"), this.collection.remove(this.model), void(c.app.availableSymptoms.matchesModelSource(this.model) && (this.model.resetQualifiers(), c.app.availableSymptoms.add(this.model))))
                },
                remove: function() {
                    var a = this;
                    a.collection.off(null, null, a), this.$el.html("&nbsp;").slideUp(function() {
                        c.View.prototype.remove.call(a)
                    })
                },
                edit: function() {
                    return this.isDisabled() ? !1 : (d.metrics.click("list-choice", "pen"), new e({
                        model: this.model
                    }), !1)
                },
                isDisabled: function() {
                    return c.app.session.get("symptomSetLocked") || $("#qualifying-questions").length
                }
            })
        }), define("views/selectedsymptoms", ["require", "underscore", "backbone", "views/selectedsymptom"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("views/selectedsymptom");
            return c.View.extend({
                initialize: function() {
                    b.bindAll(this), this.$counter = this.$(".count"), this.$list = this.$("ul"), c.app.session.on("change:symptomSet", this.onSymptomSetChange), this.onSymptomSetChange()
                },
                onSymptomSetChange: function() {
                    this.collection && this.collection.off(null, null, this), this.collection = c.app.session.get("symptomSet").get("symptoms"), this.collection.on({
                        add: this.addOneSymptom,
                        all: this.updateCount,
                        reset: this.addAllSymptoms,
                        remove: this.removeOneSymptom
                    }), this.addAllSymptoms(), this.updateCount()
                },
                updateCount: function() {
                    var a = b.min([this.collection.length, 99]);
                    this.$counter.text(a)
                },
                removeOneSymptom: function(a) {
                    a.view && a.view.remove()
                },
                addAllSymptoms: function() {
                    this.$list.empty(), this.collection.each(this.addOneSymptom)
                },
                addOneSymptom: function(a) {
                    var b = new d({
                        model: a
                    });
                    a.view = b, this.$list.append(b.render().el)
                }
            })
        }), define("models/condition", ["underscore", "backbone", "util"], function(a, b, c) {
            "use strict";
            return b.Model.extend({
                url: function() {
                    var a = c.getScappUrlRoot() + "/scapp/SymptomCheckerArticle.svc/article/" + this.id;
                    return b.app.options.clientid && (a += "/" + b.app.options.clientid), a
                },
                getSCAPPModel: function() {
                    return b.app.conditions.where({
                        condition_chronic_id: this.id
                    })[0]
                },
                parse: function(a) {
                    var b, c, d, e = this,
                        f = $.extend(!0, {}, a),
                        g = a.webmd_rendition.content.wbmd_asset.content_section.cons_symptom_checker;
                    b = {
                        DCTM_links: a.webmd_rendition.referenced_objects ? e._parseReferencedObjects(a.webmd_rendition.referenced_objects.object) : null,
                        original: f
                    };
                    for (c in g) "questions_to_ask_your_doctor_link" === c && (g.questions_to_ask_your_dr_link = g[c], c = "questions_to_ask_your_dr_link"), "health_center_article_link" === c && (g.condition_description_link = g[c], c = "condition_description_link"), c.indexOf("resources_") > -1 && g[c] ? ("undefined" == typeof b.resources && (b.resources = ""), b.resources += "undefined" != typeof g[c]["#cdata-section"] ? g[c]["#cdata-section"] : g[c]) : c.indexOf("_link") > -1 ? (d = "undefined" != typeof g[c] && g[c] && g[c]["#cdata-section"] ? g[c]["#cdata-section"] : "undefined" != typeof g[c] && g[c] ? g[c] : "", d && "community_link" !== c && "webmd_answers_link" !== c ? (c = c.replace("_link", ""), b[c] += d) : d && (b[c] = d)) : (d = "undefined" != typeof g[c] && g[c] && g[c]["#cdata-section"] ? g[c]["#cdata-section"] : "undefined" != typeof g[c] && g[c] ? g[c] : "", d && (b[c] = d));
                    try {
                        b.condition_id = parseInt(a.webmd_rendition.content.wbmd_asset.metadata_section.wbmd_ext_id)
                    } catch (h) {
                        webmd.debug("Unable to set condition ID, message: ", h)
                    }
                    return b
                },
                _parseReferencedObjects: function(b) {
                    var c, d = this,
                        e = {};
                    return c = function(a) {
                        e[a["@chronic_id"]] = d._generateLinkFromReferencedObject(a)
                    }, a.isArray(b) ? a.each(b, c) : c(b), e
                },
                _generateLinkFromReferencedObject: function(b) {
                    var c, d, e = "3";
                    return b.target && (d = a.isArray(b.target) ? a.findWhere(b.target, {
                        "@siteid": e
                    }) : b.target, c = "http://www.webmd.com/" + d["@prefix"] + d["@friendlyurl"]), c
                },
                getReviewerName: function() {
                    var a = this.get("original").webmd_rendition.content.wbmd_asset.metadata_section.wbmd_prim_med_revr,
                        b = "";

                    return null === a ? !1 : (b += a.wbmd_first_nm, a.wbmd_middle_name && (b += " " + a.wbmd_middle_name), b += " " + a.wbmd_lst_nm + ", " + a.wbmd_person_suffix_group.wbmd_person_suffix["@wbmd_disp_nm"])
                },
                getReviewDate: function() {
                    return new Date(this.get("original").webmd_rendition.content.wbmd_asset.metadata_section.wbmd_prim_revw_dt)
                },
                getCopyright: function() {
                    return this.get("original").webmd_rendition.content.wbmd_asset.metadata_section.wbmd_cpyrt.wbmd_copyright.wbmd_copyright_statement
                },
                getSources: function() {
                    var a = this.get("original").webmd_rendition.content.wbmd_asset.content_section.cons_symptom_checker.source;
                    return null === a ? !1 : a["#cdata-section"]
                },
                getName: function() {
                    return this.get("original").webmd_rendition.content.wbmd_asset.content_section.cons_symptom_checker.condition_name
                },
                getAliases: function() {
                    var a = this.get("original").webmd_rendition.content.wbmd_asset.content_section.cons_symptom_checker;
                    return a.also_known_as || ""
                },
                getMetaDescription: function() {
                    return this.get("original").webmd_rendition.content.wbmd_asset.metadata_section.wbmd_desc_meta
                }
            })
        }), define("views/possiblecondition", ["underscore", "backbone", "models/condition", "util"], function(a, b, c, d) {
            "use strict";
            return b.View.extend({
                tagName: "li",
                events: {
                    click: "onClick"
                },
                template: a.template('<div class="container"><div class="name"><%- name %></div><div class="relevance"><span class="progress" style="width:<%- level %>%"></div></div>'),
                initialize: function() {
                    a.bindAll(this), b.app.router.on("route:intro route:symptoms", this.deselect), b.app.session.on("change:condition", this.onSelectedConditionChange)
                },
                render: function() {
                    var a = this.template({
                        name: this.model.get("name"),
                        level: this._calculateProgressFill()
                    });
                    return this.$el.html(a), this
                },
                _calculateProgressFill: function() {
                    var a = 20 * this.model.get("level");
                    return 100 === a && (a = 90), a
                },
                onClick: function() {
                    var a;
                    return this.isDisabled() ? !1 : (a = "symptomsView" === b.history.fragment ? "list-cond" : "list-cond2", d.metrics.click(a, this.model.get("condition_chronic_id"), !0), void this.load())
                },
                load: function() {
                    var a, e = this.model.get("condition_chronic_id");
                    a = new c({
                        id: e
                    }), b.app.session.set("condition", a), b.app.router.navigate("/conditionView", !0), d.scrollToElement({
                        targetSelector: "#header_ctr",
                        extraSpace: 10
                    })
                },
                onSelectedConditionChange: function(a) {
                    this.model.get("condition_chronic_id") === a.get("condition").id ? this.select() : this.deselect()
                },
                select: function() {
                    this.$el.addClass("selected")
                },
                isDisabled: function() {
                    return this.$el.hasClass("selected") || $("#qualifying-questions").length
                },
                deselect: function() {
                    this.$el.removeAttr("style").removeClass("selected")
                }
            })
        }), define("views/possibleconditions", ["underscore", "backbone", "views/possiblecondition"], function(a, b, c) {
            "use strict";
            return b.View.extend({
                initialize: function() {
                    a.bindAll(this), this.collection.on({
                        request: this.onRequest,
                        all: this.updateCount,
                        add: this.addOneCondition,
                        reset: this.addAllConditions,
                        remove: this.removeOneCondition
                    }), this.$counter = this.$(".count"), this.$list = this.$("ul"), this.$loading = this.$(".loading")
                },
                onRequest: function() {
                    this.$loading.show().spin()
                },
                updateCount: function() {
                    var b = a.min([this.collection.length, 99]);
                    this.$counter.text(b)
                },
                removeOneCondition: function(a) {
                    a.view.remove()
                },
                addAllConditions: function(a) {
                    this.$loading.hide(), this.$list.empty(), a.each(this.addOneCondition)
                },
                addOneCondition: function(a) {
                    var b = new c({
                        model: a
                    });
                    a.view = b, this.$list.append(b.render().el)
                }
            })
        }), define("jst!templates/conditions/find-out-why-different.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay-findoutwhydifferentconditions" class="sc-overlay">\r\n	<p>We regularly update our Symptom Checker Symptoms and Possible Conditions\r\n	to ensure that we provide you with the most up-to-date health information.\r\n	As a result, this may impact your previously saved sessions and reports.</p>\r\n\r\n	<button class="webmd-btn webmd-btn-pr webmd-btn-s">OK</button>\r\n</div>\r\n';
                return __p
            }
        }), define("views/conditions/find-out-why-different", ["require", "underscore", "backbone", "jst!templates/conditions/find-out-why-different.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("jst!templates/conditions/find-out-why-different.jst");
            return c.View.extend({
                events: {
                    "click button": "remove"
                },
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                remove: function() {
                    return this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    return webmd.overlay.open({
                        html: d(),
                        scrolling: !1,
                        width: "462px"
                    }), this.setElement($("#overlay-findoutwhydifferentconditions")), this
                }
            })
        }), define("views/symptoms/locked", ["underscore", "backbone", "views/conditions/find-out-why-different"], function(a, b, c) {
            "use strict";
            return b.View.extend({
                events: {
                    "click button": "onConfirm",
                    "click a": "onWhyDifferent"
                },
                initialize: function() {
                    a.bindAll(this), this.model.on("change:symptomSetLocked", this.toggle)
                },
                toggle: function(a, b) {
                    this.$el.toggle(b)
                },
                onConfirm: function() {
                    this.model.unlockSymptomSet()
                },
                onWhyDifferent: function() {
                    return new c, !1
                }
            })
        }), define("views/bodymap", ["require", "underscore", "backbone", "views/createjs", "models/person", "util"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("views/createjs"),
                e = a("models/person"),
                f = a("util");
            return d.extend({
                bodyPartRegionIDs: {
                    front_btn_head: 1,
                    back_btn_head: 1,
                    front_btn_neck: 10,
                    back_btn_neck: 10,
                    front_btn_chest: 14,
                    front_btn_abdomen: 20,
                    back_btn_back: 26,
                    front_btn_pelvis: 32,
                    back_btn_buttock: 37,
                    front_btn_arms: 40,
                    back_btn_arms: 40,
                    front_btn_legs: 52,
                    back_btn_legs: 52
                },
                flashMovie: null,
                initalAnimation: "all",
                animationStarted: !1,
                currentView: "front",
                selectedBodyPart: null,
                selectEntireRegion: null,
                selectEntireRegionAlpha: .7,
                bodyPartNames: {},
                currentID: null,
                setupComplete: !1,
                manifest: [{
                    src: "select_entire_abdomen_over.png",
                    id: "select_entire_abdomen_over"
                }, {
                    src: "select_entire_abdomen_up.png",
                    id: "select_entire_abdomen_up"
                }, {
                    src: "select_entire_leg_over.png",
                    id: "select_entire_leg_over"
                }, {
                    src: "select_entire_leg_up.png",
                    id: "select_entire_leg_up"
                }, {
                    src: "select_entire_arm_over.png",
                    id: "select_entire_arm_over"
                }, {
                    src: "select_entire_arm_up.png",
                    id: "select_entire_arm_up"
                }, {
                    src: "zoom_out_over.png",
                    id: "zoom_out_over"
                }, {
                    src: "zoom_out_up.png",
                    id: "zoom_out_up"
                }, {
                    src: "select_skin_over.png",
                    id: "select_skin_over"
                }, {
                    src: "select_skin_up.png",
                    id: "select_skin_up"
                }, {
                    src: "front_view_over.png",
                    id: "front_view_over"
                }, {
                    src: "front_view_up.png",
                    id: "front_view_up"
                }, {
                    src: "back_view_over.png",
                    id: "back_view_over"
                }, {
                    src: "back_view_up.png",
                    id: "back_view_up"
                }, {
                    src: "Back_Large_M.jpg",
                    id: "Back_Large_M"
                }, {
                    src: "Front_Large_M.jpg",
                    id: "Front_Large_M"
                }, {
                    src: "Back_Large_F.jpg",
                    id: "Back_Large_F"
                }, {
                    src: "Front_Large_F.jpg",
                    id: "Front_Large_F"
                }],
                initialize: function(a) {
                    var e, f, g = 1 === Number(this.options.gender) ? "male" : "female";
                    return b.bindAll(this), e = !!window.HTMLCanvasElement, this.isCanvas = e && "y" !== webmd.url.getParam("flash"), this.isCanvas || (f = $('<div style="width:225px;height:315px"><div id="' + this.$el.attr("id") + '"></div></div>'), this.$el.replaceWith(f), this.setElement(f)), webmd.p.symptomchecker["trigger" + g] = this.handleFlashEvent, webmd.p.symptomchecker["getBodyPartTooltipLabel" + g] = this.getBodyPartTooltipLabel, c.app.router.on("route:symptoms", this.startAnimation), c.app.session.on("change:person", this.onPersonChange), c.on("clickBodyPart", this.onClickBodyPart), c.on("startOver", this.reset), this.onPersonChange(), "undefined" != typeof createjs && "undefined" != typeof createjs.DisplayObject && (createjs.DisplayObject.suppressCrossDomainErrors = !0), this.$tooltip = $("#bodymap-tooltip"), d.prototype.initialize.call(this, a)
                },
                handleFlashEvent: function(a) {
                    return this[a].apply(this, b.toArray(arguments).slice(1)), !0
                },
                render: function() {
                    var a;
                    c.app.session.has("selectedBodyPart") && (a = c.app.session.get("selectedBodyPart")), this.isCanvas ? this._renderCanvas(a) : this._renderFlash(a)
                },
                _renderCanvas: function(a) {
                    var c, d = this;
                    this.exportRoot = new this.options.lib, this.stage = new createjs.Stage(this.$el.get(0)), this.stage.addChild(this.exportRoot), this.stage.enableMouseOver(), this.stage.update(), this.stage.onMouseMove = this.onMouseMove, createjs.Ticker.setFPS(24), createjs.Ticker.addListener(this.stage), this.exportRoot.animationComplete = this.onAnimationComplete, b.each(this.exportRoot, function(e, f) {
                        -1 !== f.indexOf("_top_") && (e.visible = !1, b.each(e, function(b, e) {
                            -1 !== e.indexOf("_btn_") && (b.alpha = .03, b.onClick = d.handleMouseClick, b.onMouseOver = d.handleMouseOver, b.onMouseOut = d.handleMouseOut, d.bodyPartNames[b.id] = e, c = e.split("_").pop(), a && a.toString() === c && (d.initalAnimation = f.split("_").pop(), d.currentView = e.split("_")[0], d.selectedBodyPart = b))
                        }))
                    }), d.setViewToggleButtons(), d.setUIButtons(), d.toggle(), d.setupComplete = !0
                },
                _renderFlash: function(b) {
                    var c, d, f, g, h, i = this;
                    c = this.$("div").attr("id"), d = {
                        gender: this.options.gender === e.GENDER_MALE ? "male" : "female",
                        selectEntireRegionAlpha: this.selectEntireRegionAlpha
                    }, b && (d.bpSelectedID = b), f = image_server_url + "/webmd/consumer_assets/site_images/symptom_checker/swf/" + d.gender + "_bodyparts.swf", g = {
                        allowscriptaccess: "always",
                        wmode: "transparent",
                        flashvars: d
                    }, h = {
                        width: "225",
                        height: "315",
                        data: f
                    }, $("html").hasClass("browserIE") && (h.data = f + "?" + Math.floor(89999 * Math.random() + 1e4)), a(["//ajax.googleapis.com/ajax/libs/swfobject/2.2/swfobject_src.js"], function() {
                        i.flashMovie = swfobject.createSWF(h, g, c)
                    })
                },
                toggle: function() {
                    this.$el.toggle(this.isCurrentGender())
                },
                isCurrentGender: function() {
                    return this.options.gender === this.model.get("gender")
                },
                setViewToggleButtons: function() {
                    var a = this.options.gender === e.GENDER_MALE ? "_M" : "_F",
                        b = "front" === this.currentView;
                    this.exportRoot["front_image" + a].visible = b, this.exportRoot["back_image" + a].visible = !b, this.exportRoot.btn_backview.visible = b, this.exportRoot.btn_frontview.visible = !b
                },
                setUIButtons: function() {
                    var a, b = this;
                    for (a in this.exportRoot) a.indexOf("btn_", a) > -1 && (b._getButtonState(b.exportRoot[a], "over").visible = !1, b.exportRoot[a].onMouseOver = b.guiOnMouseOverHandler, b.exportRoot[a].onMouseOut = b.guiOnMouseOutHandler);
                    b.exportRoot.btn_zoomout.onClick = b.zoomOutHandler, b.exportRoot.btn_backview.onClick = b.exportRoot.btn_frontview.onClick = b.toggleView, b.exportRoot.btn_selectskin.onClick = b.onSelectSkinClick, b.exportRoot.btn_selectentire_arm.onClick = b.onSelectEntireArmClick, b.exportRoot.btn_selectentire_leg.onClick = b.onSelectEntireLegClick, b.exportRoot.btn_selectentire_abdomen.onClick = b.onSelectEntireAbdomenClick, b.exportRoot.gotoAndPlay("back" === b.initalAnimation ? "abdomen" : b.initalAnimation)
                },
                onSelectSkinClick: function(a) {
                    return 1 !== a.nativeEvent.which ? !1 : (this.bodyPartClicked("front_btn_skin"), !1)
                },
                onSelectEntireArmClick: function(a) {
                    return 1 !== a.nativeEvent.which ? !1 : (this.selectEntireRegion !== a.target && (this.selectEntireRegion = a.target, this.bodyPartClicked("front_btn_entirearm_40"), this.hiliteEntireRegion(!0)), !1)
                },
                onSelectEntireLegClick: function(a) {
                    return 1 !== a.nativeEvent.which ? !1 : (this.selectEntireRegion !== a.target && (this.selectEntireRegion = a.target, this.bodyPartClicked("front_btn_entireleg_52"), this.hiliteEntireRegion(!0)), !1)
                },
                onSelectEntireAbdomenClick: function(a) {
                    return 1 !== a.nativeEvent.which ? !1 : (this.selectEntireRegion !== a.target && (this.selectEntireRegion = a.target, this.bodyPartClicked("front_btn_entireabdomen_20"), this.hiliteEntireRegion(!0)), !1)
                },
                onAnimationComplete: function(a) {
                    this.animationCompleteValue = a, this.setCurrentID()
                },
                setCurrentID: function() {
                    var a = "",
                        b = "front" === this.currentView;
                    switch (webmd.debug("setCurrentID animationCompleteValue: " + this.animationCompleteValue), this.animationCompleteValue) {
                        case 1:
                            a = "all", this.isCanvas && this.setViewToggleButtons();
                            break;
                        case 2:
                            a = b ? "abdomen" : "back";
                            break;
                        case 3:
                            a = "head";
                            break;
                        case 4:
                            a = "neck";
                            break;
                        case 5:
                            a = b ? "chest" : "back";
                            break;
                        case 6:
                            a = b ? "pelvis" : "buttock";
                            break;
                        case 7:
                            a = "leg";
                            break;
                        case 8:
                            a = "arm"
                    }
                    this.currentID = this.currentView + "_top_" + a, webmd.debug("setCurrentID currentID: " + this.currentID), this.isCanvas ? (this.exportRoot.btn_selectentire_abdomen.visible = "abdomen" === a, this.exportRoot.btn_zoomout.visible = "all" !== a, this.animationStarted && this.animateActiveIDs()) : (this.flashMovie.SetGUIButtons(a), this.flashMovie.animateActiveIDs(this.currentID))
                },
                animateActiveIDs: function() {
                    var a, b, c = this,
                        d = c.exportRoot[c.currentID],
                        e = c.currentID.split("_").pop(),
                        f = 0;
                    d.visible = !0;
                    for (a in d) a.indexOf("btn_", a) > -1 && (b = "all" !== e && c.selectedBodyPart && d[a].id === c.selectedBodyPart.id ? 1 : .03, c.selectEntireRegion && "back" !== e && (b = c.selectEntireRegionAlpha), createjs.Tween.get(d[a]).wait(100 * f).to({
                        alpha: 1
                    }, 200).wait(100 * f).to({
                        alpha: b
                    }, 200), f++)
                },
                hiliteEntireRegion: function(a) {
                    var b, c, d = this.exportRoot[this.currentID],
                        e = a ? this.selectEntireRegionAlpha : .03;
                    a ? (this.deselectBodyPart(), this.selectedBodyPart = this.selectEntireRegion) : this.selectedBodyPart = this.selectEntireRegion = null;
                    for (b in d) b.indexOf("btn_", b) > -1 && (c = d[b], createjs.Tween.get(c, {
                        override: !0
                    }).to({
                        alpha: e
                    }))
                },
                handleMouseClick: function(a) {
                    if (1 !== a.nativeEvent.which) return !1;
                    var b = a.target;
                    return this.selectEntireRegion && this.hiliteEntireRegion(!1), this.selectedBodyPart && this.deselectBodyPart(), this.setSelectedBodyPart(b), !1
                },
                setSelectedBodyPart: function(a) {
                    var b = this.bodyPartNames[a.id];
                    a.mouseEnabled = !1, createjs.Tween.get(a, {
                        override: !0
                    }).to({
                        alpha: 1
                    }), this.selectedBodyPart = a, this.bodyPartClicked(b)
                },
                deselectBodyPart: function() {
                    this.selectEntireRegion !== this.selectedBodyPart && this.deselectSelected()
                },
                deselectSelected: function() {
                    this.selectedBodyPart && (this.selectedBodyPart.mouseEnabled = !0, this.selectedBodyPart.alpha = .03)
                },
                handleMouseOver: function(a) {
                    var b, c;
                    this.isSelected(a.target.id) || (this.$el.css("cursor", "pointer"), c = this.bodyPartNames[a.target.id], b = this.exportRoot[this.currentID][c], b && createjs.Tween.get(b, {
                        override: !0
                    }).to({
                        alpha: 1
                    }, 200))
                },
                handleMouseOut: function(a) {
                    var b, c, d;
                    this.isSelected(a.target.id) || (this.$el.css("cursor", "auto"), c = this.bodyPartNames[a.target.id], d = this.selectEntireRegion ? this.selectEntireRegionAlpha : .03, b = this.exportRoot[this.currentID][c], b && createjs.Tween.get(b, {
                        override: !0
                    }).to({
                        alpha: d
                    }, 200))
                },
                onMouseMove: function(a) {
                    var b, c, d = a.target._mouseOverTarget;
                    d && this.isBodyPart(d) && (b = this.getBodyPartIDByName(this.bodyPartNames[d.id]), c = f.bodyParts[b]), c && this.stage.mouseInBounds ? this.$tooltip.css({
                        display: "block",
                        left: a.nativeEvent.clientX + -8 + "px",
                        top: a.nativeEvent.clientY - 38 + "px"
                    }).text(c) : this.$tooltip.hide()
                },
                isSelected: function(a) {
                    return !("all" === this.currentID.split("_")[2] || this.selectedBodyPart && this.selectedBodyPart.id !== a)
                },
                guiOnMouseOverHandler: function(a) {
                    this.$el.css("cursor", "pointer");
                    var b = a.target;
                    this._getButtonState(b, "over").visible = !0, this._getButtonState(b, "up").visible = !1
                },
                _getButtonState: function(a, c) {
                    var d = b.filter(b.keys(a), function(a) {
                        return "over" === c ? /^_over/.test(a) : "up" === c ? /^_up/.test(a) : void 0
                    });
                    return a[d[0]]
                },
                guiOnMouseOutHandler: function(a) {
                    this.$el.css("cursor", "auto");
                    var b = a.target;
                    this._getButtonState(b, "over").visible = !1, this._getButtonState(b, "up").visible = !0
                },
                zoomOutHandler: function(a) {
                    return 1 !== a.nativeEvent.which ? !1 : (f.metrics.click("body-vw", "zm"), a.target.visible = !1, this.exportRoot[this.currentID].visible = !1, this.selectEntireRegion && this.hiliteEntireRegion(!1), void this.exportRoot.play())
                },
                triggerClickMetric: function(a, b) {
                    f.metrics.click(a, b)
                },
                isBodyPart: function(a) {
                    return void 0 !== this.bodyPartNames[a.id]
                },
                getBodyPartIDByName: function(a) {
                    var c = a.split("_").pop(),
                        d = Number(c);
                    return b.isNaN(d) && (d = this.bodyPartRegionIDs[a]), d
                },
                getBodyPartRegionID: function(a) {
                    return webmd.debug("getBodyPartRegionID bpname:" + a), this.bodyPartRegionIDs[a]
                },
                getBodyPartTooltipLabel: function(a) {
                    var b = this.getBodyPartIDByName(a);
                    return f.bodyParts[b]
                },
                bodyPartClicked: function(a) {
                    if (a) {
                        var b, d = a.split("_").pop(),
                            g = "body-" + (this.options.gender === e.GENDER_MALE ? "ma" : "fa");
                        switch (d) {
                            case "abdomen":
                            case "back":
                                b = "abdomen";
                                break;
                            case "head":
                                b = "head";
                                break;
                            case "neck":
                                b = "neck";
                                break;
                            case "chest":
                                b = "chest";
                                break;
                            case "pelvis":
                            case "buttock":
                                b = "pelvis";
                                break;
                            case "legs":
                                b = "legs";
                                break;
                            case "arms":
                                b = "arms";
                                break;
                            case "skin":
                                d = 68
                        }
                        b ? (f.metrics.click(g, "0"), this.isCanvas ? (this.deselectBodyPart(), this.exportRoot[this.currentID].visible = !1, this.exportRoot.gotoAndPlay(b)) : (this.flashMovie.deselectBodyPart(), this.flashMovie.onBodyPartClick(b)), c.trigger("clickBodyPartRegion")) : (f.metrics.click(g, d), c.trigger("clickBodyPart", Number(d)))
                    }
                },
                toggleView: function(a) {
                    return a && 1 !== a.nativeEvent.which ? !1 : (this.currentView = "front" === this.currentView ? "back" : "front", a && f.metrics.click("body-vw", "front" === this.currentView ? "frt" : "bck"), this.exportRoot[this.currentID].visible = !1, this.setViewToggleButtons(), void this.setCurrentID())
                },
                flashToggleView: function() {
                    this.currentView = "front" === this.currentView ? "back" : "front", this.setCurrentID()
                },
                onPersonChange: function() {
                    this.setupComplete && this.reset(), this.model = c.app.session.get("person"), this.stopListening(null, null, this.toggle), this.listenTo(this.model, "change:gender", this.toggle), this.toggle()
                },
                startAnimation: function() {
                    this.setupComplete && !this.animationStarted && this.isCurrentGender() && this.currentID && this.animateActiveIDs(), this.animationStarted = !0
                },
                onClickBodyPart: function(a) {
                    return this.isCurrentGender() && (c.app.session.set("selectedBodyPart", a), this.loadBodyPartSymptoms(a)), !1
                },
                loadBodyPartSymptoms: function(a) {
                    c.app.availableSymptoms.fetch({
                        bodypartid: a
                    })
                },
                reset: function() {
                    this.isCanvas ? (this.currentID && (this.deselectSelected(), this.exportRoot[this.currentID].visible = !1), this.exportRoot.gotoAndStop("all"), this.animationStarted = !1, this.selectEntireRegion = this.selectedBodyPart = null, "back" === this.currentView && this.toggleView()) : this.flashMovie.resetBP()
                }
            })
        }), define("jst!templates/conditions/help.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay_possible_conditions_help" class="sc-overlay">\r\n	<h1>Matches for Possible Conditions</h1>\r\n\r\n	<p>Based on the symptoms you entered, we have calculated matches for possible conditions.\r\n	The conditions are listed in order of how closely your symptoms match those conditions.\r\n	This information is meant to be informational, and is not intended as medical advice or a\r\n	diagnosis. Information you read on WebMD should not replace the advice of your healthcare\r\n	provider. You should always seek the advice of a qualified healthcare provider about any\r\n	questions you may have about a medical condition. As always, if you think you have a\r\n	medical emergency you should call your doctor or dial "911" immediately.</p>\r\n\r\n	<button class=\'webmd-btn webmd-btn-pr webmd-btn-xs\'>OK</button>\r\n</div>\r\n';
                return __p
            }
        }), define("views/conditions/help", ["require", "underscore", "backbone", "jst!templates/conditions/help.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("jst!templates/conditions/help.jst");
            return c.View.extend({
                events: {
                    "click button": "remove"
                },
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                remove: function() {
                    return this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    var a = d();
                    return webmd.overlay.open({
                        html: a,
                        width: "642px",
                        scrolling: !1
                    }), this.setElement($("#overlay_possible_conditions_help")), this
                }
            })
        }),
        function(a, b) {
            function c(a, b, c) {
                var d = l[b.type] || {};
                return null == a ? c || !b.def ? null : b.def : (a = d.floor ? ~~a : parseFloat(a), isNaN(a) ? b.def : d.mod ? (a + d.mod) % d.mod : 0 > a ? 0 : d.max < a ? d.max : a)
            }

            function d(b) {
                var c = j(),
                    d = c._rgba = [];
                return b = b.toLowerCase(), o(i, function(a, e) {
                    var f, g = e.re.exec(b),
                        h = g && e.parse(g),
                        i = e.space || "rgba";
                    return h ? (f = c[i](h), c[k[i].cache] = f[k[i].cache], d = c._rgba = f._rgba, !1) : void 0
                }), d.length ? ("0,0,0,0" === d.join() && a.extend(d, f.transparent), c) : f[b]
            }

            function e(a, b, c) {
                return c = (c + 1) % 1, 1 > 6 * c ? a + (b - a) * c * 6 : 1 > 2 * c ? b : 2 > 3 * c ? a + (b - a) * (2 / 3 - c) * 6 : a
            }
            var f, g = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
                h = /^([\-+])=\s*(\d+\.?\d*)/,
                i = [{
                    re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [a[1], a[2], a[3], a[4]]
                    }
                }, {
                    re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    parse: function(a) {
                        return [2.55 * a[1], 2.55 * a[2], 2.55 * a[3], a[4]]
                    }
                }, {
                    re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                    parse: function(a) {
                        return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)]
                    }
                }, {
                    re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                    parse: function(a) {
                        return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)]
                    }
                }, {
                    re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                    space: "hsla",
                    parse: function(a) {
                        return [a[1], a[2] / 100, a[3] / 100, a[4]]
                    }
                }],
                j = a.Color = function(b, c, d, e) {
                    return new a.Color.fn.parse(b, c, d, e)
                },
                k = {
                    rgba: {
                        props: {
                            red: {
                                idx: 0,
                                type: "byte"
                            },
                            green: {
                                idx: 1,
                                type: "byte"
                            },
                            blue: {
                                idx: 2,
                                type: "byte"
                            }
                        }
                    },
                    hsla: {
                        props: {
                            hue: {
                                idx: 0,
                                type: "degrees"
                            },
                            saturation: {
                                idx: 1,
                                type: "percent"
                            },
                            lightness: {
                                idx: 2,
                                type: "percent"
                            }
                        }
                    }
                },
                l = {
                    "byte": {
                        floor: !0,
                        max: 255
                    },
                    percent: {
                        max: 1
                    },
                    degrees: {
                        mod: 360,
                        floor: !0
                    }
                },
                m = j.support = {},
                n = a("<p>")[0],
                o = a.each;
            n.style.cssText = "background-color:rgba(1,1,1,.5)", m.rgba = n.style.backgroundColor.indexOf("rgba") > -1, o(k, function(a, b) {
                b.cache = "_" + a, b.props.alpha = {
                    idx: 3,
                    type: "percent",
                    def: 1
                }
            }), j.fn = a.extend(j.prototype, {
                parse: function(e, g, h, i) {
                    if (e === b) return this._rgba = [null, null, null, null], this;
                    (e.jquery || e.nodeType) && (e = a(e).css(g), g = b);
                    var l = this,
                        m = a.type(e),
                        n = this._rgba = [];
                    return g !== b && (e = [e, g, h, i], m = "array"), "string" === m ? this.parse(d(e) || f._default) : "array" === m ? (o(k.rgba.props, function(a, b) {
                        n[b.idx] = c(e[b.idx], b)
                    }), this) : "object" === m ? (e instanceof j ? o(k, function(a, b) {
                        e[b.cache] && (l[b.cache] = e[b.cache].slice())
                    }) : o(k, function(b, d) {
                        var f = d.cache;
                        o(d.props, function(a, b) {
                            if (!l[f] && d.to) {
                                if ("alpha" === a || null == e[a]) return;
                                l[f] = d.to(l._rgba)
                            }
                            l[f][b.idx] = c(e[a], b, !0)
                        }), l[f] && a.inArray(null, l[f].slice(0, 3)) < 0 && (l[f][3] = 1, d.from && (l._rgba = d.from(l[f])))
                    }), this) : void 0
                },
                is: function(a) {
                    var b = j(a),
                        c = !0,
                        d = this;
                    return o(k, function(a, e) {
                        var f, g = b[e.cache];
                        return g && (f = d[e.cache] || e.to && e.to(d._rgba) || [], o(e.props, function(a, b) {
                            return null != g[b.idx] ? c = g[b.idx] === f[b.idx] : void 0
                        })), c
                    }), c
                },
                _space: function() {
                    var a = [],
                        b = this;
                    return o(k, function(c, d) {
                        b[d.cache] && a.push(c)
                    }), a.pop()
                },
                transition: function(a, b) {
                    var d = j(a),
                        e = d._space(),
                        f = k[e],
                        g = 0 === this.alpha() ? j("transparent") : this,
                        h = g[f.cache] || f.to(g._rgba),
                        i = h.slice();
                    return d = d[f.cache], o(f.props, function(a, e) {
                        var f = e.idx,
                            g = h[f],
                            j = d[f],
                            k = l[e.type] || {};
                        null !== j && (null === g ? i[f] = j : (k.mod && (j - g > k.mod / 2 ? g += k.mod : g - j > k.mod / 2 && (g -= k.mod)), i[f] = c((j - g) * b + g, e)))
                    }), this[e](i)
                },
                blend: function(b) {
                    if (1 === this._rgba[3]) return this;
                    var c = this._rgba.slice(),
                        d = c.pop(),
                        e = j(b)._rgba;
                    return j(a.map(c, function(a, b) {
                        return (1 - d) * e[b] + d * a
                    }))
                },
                toRgbaString: function() {
                    var b = "rgba(",
                        c = a.map(this._rgba, function(a, b) {
                            return null == a ? b > 2 ? 1 : 0 : a
                        });
                    return 1 === c[3] && (c.pop(), b = "rgb("), b + c.join() + ")"
                },
                toHslaString: function() {
                    var b = "hsla(",
                        c = a.map(this.hsla(), function(a, b) {
                            return null == a && (a = b > 2 ? 1 : 0), b && 3 > b && (a = Math.round(100 * a) + "%"), a
                        });
                    return 1 === c[3] && (c.pop(), b = "hsl("), b + c.join() + ")"
                },
                toHexString: function(b) {
                    var c = this._rgba.slice(),
                        d = c.pop();
                    return b && c.push(~~(255 * d)), "#" + a.map(c, function(a) {
                        return a = (a || 0).toString(16), 1 === a.length ? "0" + a : a
                    }).join("")
                },
                toString: function() {
                    return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
                }
            }), j.fn.parse.prototype = j.fn, k.hsla.to = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b, c, d = a[0] / 255,
                    e = a[1] / 255,
                    f = a[2] / 255,
                    g = a[3],
                    h = Math.max(d, e, f),
                    i = Math.min(d, e, f),
                    j = h - i,
                    k = h + i,
                    l = .5 * k;
                return b = i === h ? 0 : d === h ? 60 * (e - f) / j + 360 : e === h ? 60 * (f - d) / j + 120 : 60 * (d - e) / j + 240, c = 0 === j ? 0 : .5 >= l ? j / k : j / (2 - k), [Math.round(b) % 360, c, l, null == g ? 1 : g]
            }, k.hsla.from = function(a) {
                if (null == a[0] || null == a[1] || null == a[2]) return [null, null, null, a[3]];
                var b = a[0] / 360,
                    c = a[1],
                    d = a[2],
                    f = a[3],
                    g = .5 >= d ? d * (1 + c) : d + c - d * c,
                    h = 2 * d - g;
                return [Math.round(255 * e(h, g, b + 1 / 3)), Math.round(255 * e(h, g, b)), Math.round(255 * e(h, g, b - 1 / 3)), f]
            }, o(k, function(d, e) {
                var f = e.props,
                    g = e.cache,
                    i = e.to,
                    k = e.from;
                j.fn[d] = function(d) {
                    if (i && !this[g] && (this[g] = i(this._rgba)), d === b) return this[g].slice();
                    var e, h = a.type(d),
                        l = "array" === h || "object" === h ? d : arguments,
                        m = this[g].slice();
                    return o(f, function(a, b) {
                        var d = l["object" === h ? a : b.idx];
                        null == d && (d = m[b.idx]), m[b.idx] = c(d, b)
                    }), k ? (e = j(k(m)), e[g] = m, e) : j(m)
                }, o(f, function(b, c) {
                    j.fn[b] || (j.fn[b] = function(e) {
                        var f, g = a.type(e),
                            i = "alpha" === b ? this._hsla ? "hsla" : "rgba" : d,
                            j = this[i](),
                            k = j[c.idx];
                        return "undefined" === g ? k : ("function" === g && (e = e.call(this, k), g = a.type(e)), null == e && c.empty ? this : ("string" === g && (f = h.exec(e), f && (e = k + parseFloat(f[2]) * ("+" === f[1] ? 1 : -1))), j[c.idx] = e, this[i](j)))
                    })
                })
            }), j.hook = function(b) {
                var c = b.split(" ");
                o(c, function(b, c) {
                    a.cssHooks[c] = {
                        set: function(b, e) {
                            var f, g, h = "";
                            if ("string" !== a.type(e) || (f = d(e))) {
                                if (e = j(f || e), !m.rgba && 1 !== e._rgba[3]) {
                                    for (g = "backgroundColor" === c ? b.parentNode : b;
                                        ("" === h || "transparent" === h) && g && g.style;) try {
                                        h = a.css(g, "backgroundColor"), g = g.parentNode
                                    } catch (i) {}
                                    e = e.blend(h && "transparent" !== h ? h : "_default")
                                }
                                e = e.toRgbaString()
                            }
                            try {
                                b.style[c] = e
                            } catch (i) {}
                        }
                    }, a.fx.step[c] = function(b) {
                        b.colorInit || (b.start = j(b.elem, c), b.end = j(b.end), b.colorInit = !0), a.cssHooks[c].set(b.elem, b.start.transition(b.end, b.pos))
                    }
                })
            }, j.hook(g), a.cssHooks.borderColor = {
                expand: function(a) {
                    var b = {};
                    return o(["Top", "Right", "Bottom", "Left"], function(c, d) {
                        b["border" + d + "Color"] = a
                    }), b
                }
            }, f = a.Color.names = {
                aqua: "#00ffff",
                black: "#000000",
                blue: "#0000ff",
                fuchsia: "#ff00ff",
                gray: "#808080",
                green: "#008000",
                lime: "#00ff00",
                maroon: "#800000",
                navy: "#000080",
                olive: "#808000",
                purple: "#800080",
                red: "#ff0000",
                silver: "#c0c0c0",
                teal: "#008080",
                white: "#ffffff",
                yellow: "#ffff00",
                transparent: [null, null, null, 0],
                _default: "#ffffff"
            }
        }(jQuery), define("jquery.color", function() {}), define("views/symptoms", ["require", "underscore", "backbone", "views/availablesymptoms", "views/selectedsymptoms", "views/possibleconditions", "views/symptoms/locked", "views/bodymap", "models/person", "views/conditions/help", "util", "jquery.color"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("views/availablesymptoms"),
                e = a("views/selectedsymptoms"),
                f = a("views/possibleconditions"),
                g = a("views/symptoms/locked"),
                h = a("views/bodymap"),
                i = a("models/person"),
                j = a("views/conditions/help"),
                k = a("util");
            return a("jquery.color"), c.View.extend({
                events: {
                    "submit form": "search",
                    "mouseenter li": "highlight",
                    "mouseleave li": "unhighlight",
                    "mouseup button[type=submit]": "onClickSubmitButton",
                    "click #edit-symptoms": "editSymptoms",
                    "click #possible-conditions .help": "possibleConditionsHelpLinkClicked",
                    "click .step-help button": "hideHelpOverlays",
                    "click .see-more": "onClickSeeMore"
                },
                views: {},
                initialize: function() {
                    b.bindAll(this), this._cacheElements(), this.$("input[placeholder]").placeholder(), this.views.availableSymptoms = new d({
                        el: this.$("#choose-symptoms .symptoms"),
                        collection: c.app.availableSymptoms
                    }), this.views.selectedSymptoms = new e({
                        el: this.$("#your-choices"),
                        collection: c.app.session.get("symptomSet").get("symptoms")
                    }), this.views.possibleConditions = new f({
                        el: this.$("#possible-conditions"),
                        collection: c.app.conditions
                    }), this.views.locked = new g({
                        el: this.$(".symptoms-locked"),
                        model: c.app.session
                    }), c.on("clickBodyPartRegion", this.onClickBodyPart).on("clickBodyPart", this.onClickBodyPart), c.app.router.on("route:symptoms", this.displayHelpOverlays), this.views.bodyMapMale = new h({
                        el: this.$("#bodymap-male"),
                        model: c.app.session.get("person"),
                        gender: i.GENDER_MALE,
                        lib: webmd.p.symptomcheckerLibs.MaleBodyParts.SCBodyMap
                    }), this.views.bodyMapFemale = new h({
                        el: this.$("#bodymap-female"),
                        model: c.app.session.get("person"),
                        gender: i.GENDER_FEMALE,
                        lib: webmd.p.symptomcheckerLibs.FemaleBodyParts.SCBodyMap
                    })
                },
                _cacheElements: function() {
                    this.$symptoms = this.$("#symptoms"), this.$bodyPartName = this.$(".body-part-name"), this.$searchTerm = this.$("input[type=text]"), this.$helpOverlays = this.$(".step-help")
                },
                displayHelpOverlays: function() {
                    c.app.session.get("haveShownHelp") || (this.$helpOverlays.show(), c.app.session.set("haveShownHelp", !0))
                },
                hideHelpOverlays: function() {
                    return this.$helpOverlays.hide(), this
                },
                onClickSubmitButton: function(a) {
                    1 === a.which && k.metrics.click("srch", "sub")
                },
                search: function() {
                    return this.hideHelpOverlays(), this.$searchTerm.val() && this.$searchTerm.val() !== this.$searchTerm.attr("placeholder") ? (this.$bodyPartName.text("Search:"), c.app.availableSymptoms.fetch({
                        search_term: this.$searchTerm.val()
                    }), !1) : (this.views.availableSymptoms.$noResults.show(), !1)
                },
                onClickBodyPart: function() {
                    return this.hideHelpOverlays(), !1
                },
                highlight: function(a) {
                    var b = $(a.target);
                    return b.is("li") || (b = b.closest("ul.selectable li")), b.hasClass("selected") || $("#qualifying-questions").length ? !1 : void b.animate({
                        backgroundColor: "#e1f0f7"
                    }, 100)
                },
                unhighlight: function(a) {
                    var b = $(a.target);
                    return b.is("li") || (b = b.closest("ul.selectable li")), b.hasClass("selected") ? !1 : void b.animate({
                        backgroundColor: "#FFF"
                    }, 100)
                },
                editSymptoms: function() {
                    return k.metrics.click("sym", "edt", !0), c.app.router.navigate("/symptomsView", !0), k.scrollToElement({
                        targetSelector: "#header_ctr",
                        extraSpace: 10
                    }), !1
                },
                possibleConditionsHelpLinkClicked: function() {
                    return new j, !1
                },
                onClickSeeMore: function() {
                    return k.metrics.click("seemore"), c.trigger("clickBodyPart", 66), !1
                }
            })
        }), define("jst!templates/promo.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="sc-promo" class="sc-overlay">\r\n	<h1>Symptom Checker Tour</h1>\r\n	' + (null == (__t = content) ? "" : __t) + '\r\n	<button class="webmd-btn webmd-btn-pr webmd-btn-xs">OK</button>\r\n</div>\r\n';
                return __p
            }
        }), define("views/promo", ["underscore", "backbone", "jst!templates/promo.jst", "jst!templates/videoapi.jst"], function(a, b, c, d) {
            "use strict";
            return b.View.extend({
                events: {
                    "click button": "close"
                },
                video: {
                    chronicleID: "091e9c5e809687aa",
                    location: "/media/cons_video_assets/corporate/symptom-checker/take-a-tour-symptom-checker/video/two-column/take-a-tour-symptom-checker"
                },
                initialize: function() {
                    a.bindAll(this), this.render(), this.setElement("#sc-promo")
                },
                close: function() {
                    webmd.overlay.close()
                },
                onCleanup: function() {
                    return this.$el.undelegate(), this
                },
                onComplete: function() {
                    var a = this;
                    webmd.load({
                        js: [image_server_url + "/webmd/PageBuilder_Assets/JS_static/tools/video/webmd.m.videoapi.build.min.js", image_server_url + "/webmd/PageBuilder_Assets/JS_static/jquery-ui.js"],
                        load: function() {
                            webmd.m.video["v" + a.video.chronicleID] = {
                                caption: {
                                    cc: !1
                                },
                                file: {
                                    url: a.video.location,
                                    height: 360,
                                    width: 640
                                },
                                vidWindowLogo: null
                            }, webmd.object(webmd.m.videoapi).init({
                                chronicleID: a.video.chronicleID
                            })
                        }
                    })
                },
                render: function() {
                    var a, b = this;
                    return a = {
                        html: c({
                            content: d({
                                chronicleID: b.video.chronicleID
                            })
                        }),
                        transition: "none",
                        scrolling: !1,
                        width: "700px",
                        onCleanup: b.onCleanup,
                        onComplete: b.onComplete
                    }, $("html").hasClass("ua_device_ipad") && (a.height = "526px"), webmd.overlay.open(a), b
                }
            })
        }), define("views/flashrightrail", ["underscore", "backbone", "views/promo", "util"], function(a, b, c, d) {
            "use strict";
            return b.View.extend({
                events: {
                    "click .take-tour": "onClickedTakeTourLink"
                },
                initialize: function() {
                    this.$el.append($("#aw_container"))
                },
                onClickedTakeTourLink: function() {
                    return d.metrics.click("help", "", !1), new c, !1
                }
            })
        }), define("jst!templates/symptomsets/save-signedin-anonymous.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id='overlay_savesymptoms_signedin_anonymous' class=\"sc-overlay\">\r\n	<h1>Save Symptoms</h1>\r\n\r\n	<form>\r\n\r\n		<div id='labels'>\r\n			<label for='set'>Name this Symptom(s) List</label>\r\n			<label for='for'>For</label>\r\n		</div>\r\n\r\n		<div id='inputs'>\r\n			<input type='text' class='validate-symptom-name set'\r\n				maxlength='24' name='set' value=\"" + (null == (__t = name) ? "" : __t) + '" />\r\n			<br />\r\n			<select class=\'for\' name=\'for\' required>\r\n				<option value="">Select</option>\r\n			</select>\r\n			<br />\r\n			<a href="#" class="add">Add</a>\r\n		</div>\r\n\r\n		<div class="row buttons">\r\n			<button type=\'submit\' class=\'webmd-btn webmd-btn-pr webmd-btn-s\' onclick=\'return sl(this, "", "sc-sym-name");\'>Save</button>\r\n			<a href="#" class="cancel">Cancel</a>\r\n		</div>\r\n\r\n	</form>\r\n</div>\r\n';
                return __p
            }
        }), define("views/symptomsets/save-signed-in-anonymous", ["require", "underscore", "backbone", "views/people/add", "util", "jst!templates/symptomsets/save-signedin-anonymous.jst"], function(a) {
            "use strict";

            var b, c = a("underscore"),
                d = a("backbone"),
                e = a("views/people/add"),
                f = a("util"),
                g = a("jst!templates/symptomsets/save-signedin-anonymous.jst");
            return b = d.View.extend({
                events: {
                    "click .cancel": "cancel",
                    "click .add": "add",
                    "change select[name=for]": "clearAgeGenderValidationMessage"
                },
                initialize: function() {
                    c.bindAll(this), this.model = d.app.session.get("symptomSet"), this.collection && 1 === this.collection.length && (this.selectedPerson = this.collection.at(0), this.selectedPerson.on("change:id", this.renderForSelect)), this.render()
                },
                save: function() {
                    var a = d.app.people.get(this.$("select[name=for]").val());
                    return this.model.set({
                        session_name: this.$("input[name=set]").val(),
                        datagroup: a.id,
                        person: a
                    }), d.app.symptomSets.create(this.model), f.metrics.click("sym-name"), this.remove(), !1
                },
                cancel: function() {
                    return this.remove(), !1
                },
                add: function() {
                    return this.remove(), new e({
                        name: this.$("input[name=set]").val(),
                        callback: function(a) {
                            new b(a)
                        }
                    }), !1
                },
                remove: function() {
                    return this.selectedPerson && this.selectedPerson.off("change:id", this.renderForSelect), this.$("form").die("submit"), this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                errorPlacement: function(a, b) {
                    var c = $(a).text(),
                        d = $(b).position();
                    $(b).next(".errorWrap").remove(), $('<div class="errorWrap" />').attr({
                        generated: !0
                    }).append(c).append('<span class="indicator"><span></span></span>').insertAfter($(b)).css({
                        top: d.top,
                        left: d.left,
                        marginLeft: $(b).width() + 20 + "px"
                    }), $(b).bind({
                        focus: function() {
                            $(this).next(".errorWrap").show()
                        },
                        blur: function() {
                            $(this).next(".errorWrap").hide()
                        }
                    })
                },
                triggerAgeGenderValidationMessage: function() {
                    var a, b = "The selected person's age and gender do not match the age and gender that you earlier provided. To save, please select another person or start your search over again with the person's correct age and gender.",
                        c = this.$("select[name=for]");
                    a = $("<span>").append(b), this.errorPlacement(a, c), c.addClass("error").focus()
                },
                clearAgeGenderValidationMessage: function() {
                    this.$("select[name=for]").removeClass("error").next(".errorWrap").remove()
                },
                submitHandler: function() {
                    var a = this,
                        b = d.app.people.get(a.$("select[name=for]").val());
                    return this.model.isPersonValid(b, {
                        success: a.onPersonValidationComplete
                    }), !1
                },
                render: function() {
                    var a = this,
                        b = {
                            name: ""
                        };
                    return this.options.name && (b.name = this.options.name), webmd.overlay.open({
                        html: g(b),
                        scrolling: !1,
                        onComplete: function() {
                            f.metrics.page("sym-name")
                        },
                        onClosed: function() {
                            a.remove()
                        }
                    }), this.setElement($("#overlay_savesymptoms_signedin_anonymous")), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !1,
                        onfocusout: function(a) {
                            $(a).next(".errorWrap").remove(), $(a).valid()
                        },
                        submitHandler: a.submitHandler,
                        errorPlacement: a.errorPlacement,
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), a.renderForSelect(), this
                },
                onPersonValidationComplete: function(a) {
                    a ? this.save() : this.triggerAgeGenderValidationMessage()
                },
                renderForSelect: function() {
                    var a = this,
                        b = this.$("select[name=for]");
                    b.find('option[value!=""]').remove(), c.each(d.app.people.active(), function(c) {
                        var d = {
                            value: c.id
                        };
                        a.selectedPerson && a.selectedPerson === c && (d.selected = "selected"), b.append($("<option>", d).text(c.getDisplayName()))
                    })
                }
            })
        }), define("jst!templates/symptomsets/save-signedin-identified.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id='overlay_savesymptoms_signedin_identified' class=\"sc-overlay\">\r\n	<h1>Save Symptoms</h1>\r\n\r\n	<form>\r\n		<div id='labels'>\r\n			<label for='set'>Name this Symptom(s) List</label>\r\n		</div>\r\n\r\n		<div id='inputs'>\r\n			<input type='text' class='validate-symptom-name set' maxlength='24' name='set' />\r\n		</div>\r\n\r\n		<div class=\"row buttons\">\r\n			<button type='submit' class='webmd-btn webmd-btn-pr webmd-btn-s' onclick='return sl(this, \"\", \"sc-sym-name\");'>Save</button>\r\n			<a href=\"#\" class=\"cancel\">Cancel</a>\r\n		</div>\r\n	</form>\r\n</div>\r\n";
                return __p
            }
        }), define("views/symptomsets/save-signed-in-identified", ["require", "underscore", "backbone", "util", "jst!templates/symptomsets/save-signedin-identified.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("jst!templates/symptomsets/save-signedin-identified.jst");
            return c.View.extend({
                events: {
                    "click a.cancel": "cancel"
                },
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                save: function() {
                    var a = c.app.session.get("symptomSet");
                    return a.set({
                        session_name: this.$("input[name=set]").val(),
                        datagroup: c.app.session.get("person").id
                    }), c.app.symptomSets.create(a), d.metrics.click("sym-name"), this.remove(), !1
                },
                cancel: function() {
                    return this.remove(), !1
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    var a = this;
                    return webmd.overlay.open({
                        html: e(),
                        scrolling: !1,
                        onComplete: function() {
                            d.metrics.page("sym-name")
                        }
                    }), this.setElement($("#overlay_savesymptoms_signedin_identified")), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !0,
                        onfocusout: function(a) {
                            $(a).siblings(".errorWrap").remove(), $(a).valid()
                        },
                        submitHandler: function() {
                            a.save()
                        },
                        errorPlacement: function(a, b) {
                            var c = $(a).text(),
                                d = $(b).position();
                            $(b).siblings(".errorWrap").remove(), $('<div class="errorWrap" />').attr({
                                generated: !0
                            }).append(c).append('<span class="indicator"><span></span></span>').insertAfter($(b)).css({
                                top: d.top,
                                left: d.left,
                                marginLeft: $(b).width() + 20 + "px"
                            }), $(b).bind({
                                focus: function() {
                                    $(this).next(".errorWrap").show()
                                },
                                blur: function() {
                                    $(this).next(".errorWrap").hide()
                                }
                            })
                        },
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), this
                }
            })
        }), define("views/infobar", ["require", "underscore", "backbone", "models/person", "util", "views/promo", "views/login", "views/symptomsets/save-signed-in-anonymous", "views/symptomsets/save-signed-in-identified"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("models/person"),
                e = a("util"),
                f = a("views/promo"),
                g = a("views/login"),
                h = a("views/symptomsets/save-signed-in-anonymous"),
                i = a("views/symptomsets/save-signed-in-identified");
            return c.View.extend({
                events: {
                    "click #startover": "startOver",
                    "click #print_doctor_rpt": "printDoctorReport",
                    "click #print_symptom_rpt": "printPatientReport",
                    "click #savesymptoms": "saveSymptoms",
                    "click #take_tour": "takeTour",
                    "click .edit-symptoms a": "editSymptoms"
                },
                enter: null,
                leave: null,
                initialize: function() {
                    var a = this;
                    b.bindAll(this), c.app.router.on("route:symptoms route:condition", this.render), c.app.session.on("change:symptomSet", this.bindModelEvents), $("#print_main").bind("click", function(a) {
                        a.preventDefault()
                    }).bind("mouseover", function() {
                        var b, c = this;
                        return $(c).hasClass("disabled") ? !1 : (b = $("#sc_print_menu"), clearTimeout(a.leave), void($(c).hasClass("active") === !1 && (a.enter = setTimeout(function() {
                            $(c).addClass("active"), b.slideDown(600)
                        }, 200))))
                    }).bind("mouseleave", function() {
                        var b = this;
                        clearTimeout(a.enter), a.leave = setTimeout(function() {
                            $(b).removeClass("active"), $("#sc_print_menu").hide()
                        }, 600)
                    }), $("#sc_print_menu").bind("mouseleave", function() {
                        clearTimeout(a.enter), a.leave = setTimeout(function() {
                            $("#print_main").removeClass("active"), $("#sc_print_menu").hide()
                        }, 600)
                    }).unbind("mouseenter").bind("mouseenter", function() {
                        clearTimeout(a.leave)
                    }), this.bindModelEvents()
                },
                bindModelEvents: function() {
                    this.stopListening(null, null, this.toggleButtons), this.model = c.app.session.get("symptomSet"), this.listenTo(this.model, "change:id", this.toggleButtons), this.listenTo(this.model.get("symptoms"), "all", this.toggleButtons), this.toggleButtons()
                },
                render: function() {
                    var a = c.app.session.get("person");
                    return this.$(".person .name span").text(this._formatName(a)), this.$(".person .sex span").text(this._formatGender(a)), this.$(".person .age span").text(this._formatAge(a)), ("tablet" === webmd.useragent.ua.type || "mobile" === webmd.useragent.ua.type) && this.$(".print,#print_main,#sc_print_menu").remove(), this
                },
                _formatAge: function(a) {
                    var b = d.ageRange(a.getAge());
                    return b.replace("Check for Someone ", "")
                },
                _formatGender: function(a) {
                    return d.genders[a.get("gender")]
                },
                _formatName: function(a) {
                    var b = a.getDisplayName();
                    return a.getAge() < 13 && "Me" === b && (b = "Someone Else"), b.length > 13 && (b = b.slice(0, 12) + "â€¦"), b
                },
                toggleButtons: function() {
                    var a = this.model.get("symptoms").length > 0;
                    return this.$("a#print_main").toggleClass("disabled", !a), this.$("a#savesymptoms").toggleClass("disabled", !this.model.canBeSaved()), this
                },
                startOver: function() {
                    return e.metrics.click("startover", "", !0), c.trigger("startOver"), !1
                },
                printDoctorReport: function() {
                    return e.metrics.click("print", "", !0), c.trigger("printReportRequested", "doctor"), $("#sc_print_menu").hide(), $("#print_main").removeClass("active"), !1
                },
                printPatientReport: function() {
                    return e.metrics.click("print", "", !0), c.trigger("printReportRequested", "patient"), $("#sc_print_menu").hide(), $("#print_main").removeClass("active"), !1
                },
                saveSymptoms: function() {
                    return this.$("a#savesymptoms").hasClass("disabled") ? !1 : (e.metrics.click("save", "", !0), webmd.cookie.exists("WBMD_AUTH") ? c.app.session.get("person").isAnonymous() ? new h : new i : (c.app.session.set({
                        isSavingSymptoms: !0
                    }), new g), !1)
                },
                editSymptoms: function() {
                    return e.metrics.click("sym", "edt", !0), c.app.router.navigate("/symptomsView", !0), e.scrollToElement({
                        targetSelector: "#header_ctr",
                        extraSpace: 10
                    }), !1
                },
                takeTour: function() {
                    return e.metrics.click("help", "", !1), new f, !1
                }
            })
        }), define("jst!templates/ad/default.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="' + (null == (__t = location) ? "" : _.escape(__t)) + 'Ad">\r\n	<div id="' + (null == (__t = location) ? "" : _.escape(__t)) + 'Ad_rdr">\r\n		<div class="' + (null == (__t = location) ? "" : _.escape(__t)) + 'Ad_top_fmt"></div>\r\n		<div id="' + (null == (__t = location) ? "" : _.escape(__t)) + 'Ad_fmt" class="' + (null == (__t = location) ? "" : _.escape(__t)) + 'Ad_BG_fmt">\r\n			<script>\r\n				webmd.ads.refresh.defaults.src.' + (null == (__t = location) ? "" : _.escape(__t)) + "Ad_fmt = document.createElement('iframe');\r\n				$(webmd.ads.refresh.defaults.src." + (null == (__t = location) ? "" : _.escape(__t)) + "Ad_fmt).attr({\r\n					src:          '" + (null == (__t = url) ? "" : __t) + "',\r\n					width:        '" + (null == (__t = width) ? "" : _.escape(__t)) + "',\r\n					height:       '" + (null == (__t = height) ? "" : _.escape(__t)) + "',\r\n					id:           '" + (null == (__t = location) ? "" : _.escape(__t)) + "Ad_Iframe',\r\n					title:        '" + (null == (__t = title) ? "" : _.escape(__t)) + "',\r\n					marginwidth:  0,\r\n					marginheight: 0,\r\n					style:        'margin:0;',\r\n					frameborder:  0,\r\n					scrolling:    'no'\r\n				});\r\n			</script>\r\n			<div class=\"ad_placeholder\" style=\"height:" + (null == (__t = height) ? "" : _.escape(__t)) + 'px"></div>\r\n		</div>\r\n		<div class="' + (null == (__t = location) ? "" : _.escape(__t)) + 'Ad_bottom_fmt"></div>\r\n	</div>\r\n	<div class="moduleSpacer_rdr"></div>\r\n	<script>\r\n		var priTopId = \'' + (null == (__t = xpg) ? "" : _.escape(__t)) + "';\r\n		var secTopId = '" + (null == (__t = sec) ? "" : _.escape(__t)) + "';\r\n	</script>\r\n</div>\r\n";
                return __p
            }
        }), define("views/ad", ["require", "underscore", "backbone", "jst!templates/ad/default.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("jst!templates/ad/default.jst");
            return c.View.extend({
                titles: {
                    banner: "Top Advertisement Frame",
                    left: "",
                    right: ""
                },
                locations: {
                    101: "banner",
                    102: "banner",
                    111: "left",
                    112: "left",
                    113: "left",
                    121: "right",
                    131: "right",
                    132: "right",
                    133: "right"
                },
                sizes: {
                    101: {
                        height: 90,
                        width: 728
                    },
                    102: {
                        height: 90,
                        width: 728
                    },
                    111: {
                        height: 240,
                        width: 120
                    },
                    112: {
                        height: 600,
                        width: 120
                    },
                    113: {
                        height: 600,
                        width: 160
                    },
                    121: {
                        height: 250,
                        width: 300
                    },
                    131: {
                        height: 600,
                        width: 300
                    },
                    132: {
                        height: 600,
                        width: 300
                    },
                    133: {
                        height: 600,
                        width: 300
                    },
                    404: {
                        height: 250,
                        width: 300
                    },
                    700: {
                        height: 198,
                        width: 300
                    },
                    701: {
                        height: 199,
                        width: 145
                    },
                    901: {
                        height: 1,
                        width: 1
                    },
                    5e3: {
                        height: 1,
                        width: 494
                    },
                    5001: {
                        height: 1,
                        width: 494
                    },
                    5002: {
                        height: 1,
                        width: 308
                    },
                    5003: {
                        height: 1,
                        width: 308
                    }
                },
                initialize: function() {
                    var a, d, e = {},
                        f = $("script[src]").filter(function(a, b) {
                            return /\/\/as.webmd.com\/js\.ng\//.test(b.src)
                        });
                    window.webmd.p.symptomchecker.ads = {
                        top: {},
                        left: {},
                        right: {}
                    }, c.app.router.on("route:intro", this.renderIntro, this).on("route:symptoms", this.renderSymptoms, this), c.on("view:condition:rendered", this.renderCondition, this).on("view:ad:refresh", this.refresh, this).on("view:ad:reset", this.resetVars, this), b.isEmpty(webmd.ads.params) && f.length > 0 && (a = f.get(0).src, d = /.*\/(.*)/.exec(a), b.each(d[1].split("&"), function(a) {
                        var b, c, d = a.split("=");
                        b = decodeURIComponent(d[0]), c = decodeURIComponent(d[1]), e[b] = c
                    }), webmd.ads.params = e)
                },
                renderIntro: function() {
                    if (webmd.debug("===== Render Intro"), webmd.ads2 && webmd.ads2.isInitialized()) $("#rightAd_rdr").length < 1 && ($("#flash-right-rail").append('<div id="rightAd_rdr"><div class="rightAd_top_fmt"></div><div id="rightAd_fmt" class="rightAd_BG_fmt loaded"><div id="ads2-pos-121" class="ad_placeholder"></div></div><div class="rightAd_bottom_fmt"></div></div><div class="moduleSpacer_rdr"></div>'), webmd.ads2Consumer.defineAd({
                        id: "ads2-pos-121",
                        pos: "121",
                        sizes: [
                            [300, 250],
                            [300, 600]
                        ]
                    })), $("#flash-right-rail").append($("#rightAd_rdr")), this.refresh();
                    else {
                        this.remove();
                        var a = this.renderAd(121);
                        $("#flash-right-rail").append(a)
                    }
                },
                renderSymptoms: function() {
                    if (webmd.debug("===== Render Symptoms"), webmd.ads2 && webmd.ads2.isInitialized()) $("#flash-right-rail").append($("#rightAd_rdr")), this.refresh();
                    else {
                        this.remove();
                        var a = this.renderAd(121);
                        $("#flash-right-rail").append(a)
                    }
                },
                renderCondition: function() {
                    webmd.debug("===== Render Condition");
                    var a, b, c, d = this;
                    webmd.ads2 && webmd.ads2.isInitialized() ? (0 === $("#leftAd").length && (webmd.debug("Add left ad"), a = '<div id="leftAd">	<div id="leftAd_rdr">		<div class="leftAd_top_fmt"></div>		<div id="leftAd_fmt" class="leftAd_BG_fmt">			<div id="ads2-pos-113"></div>		</div>		<div class="leftAd_bottom_fmt"></div>	</div></div>', $("#l_col").append($(a)), webmd.ads2.defineAd({
                        id: "ads2-pos-113",
                        pos: "113",
                        sizes: [d.sizes[113].width, d.sizes[113].height]
                    })), $("#l_col").append($("#leftAd")), $("#sc_container #r_col #fact").length ? $("#sc_container #r_col #fact").after($("#rightAd_rdr")) : $("#sc_container #r_col .r_mod:nth-child(2)").after($("#rightAd_rdr")), d.refresh()) : (d.remove(), a = d.renderAd(113), $("#l_col").append(a), c = webmd.object.get("webmd.p.symptomchecker.ads.right.pos") || 131, b = d.renderAd(c), $("#sc_container #r_col #fact").after(b))
                },
                renderAd: function(a) {
                    var b, c, e = this.locations[a];
                    return b = {
                        url: this.url({
                            pos: a
                        }),
                        title: this.titles[e],
                        location: e,
                        height: this.sizes[a].height,
                        width: this.sizes[a].width,
                        xpg: 4117,
                        sec: "",
                        pos: a
                    }, webmd.debug(b), c = d(b)
                },
                url: function(a) {
                    var c = b.extend({}, webmd.ads.params, a);
                    return "//as.webmd.com/html.ng/" + $.param(c)
                },
                remove: function() {
                    $("#rightAd, #leftAd, #righticm").remove()
                },
                refreshes: 0,
                getTransactionParams: function() {
                    var a, c;
                    return this.refreshes++ ? (a = Math.round(99999999 * Math.random()), c = {
                        transactionID: a,
                        tile: a
                    }) : c = b.pick(webmd.ads.params, ["transactionID", "tile"]), c
                },
                refresh: function() {
                    var a, d = c.history.fragment.replace("View", ""),
                        e = c.app.session,
                        f = {};
                    webmd.ads2 && !webmd.ads2.isInitialized() && (f = c.app.transTileId ? {
                        transactionID: c.app.transTileId,
                        tile: c.app.transTileId
                    } : this.getTransactionParams()), a = {
                        params: f,
                        selector: webmd.ads.refresh.defaults.selector + ", #rightICM_fmt"
                    }, e.get("person") && webmd.ads2 && !webmd.ads2.isInitialized() && b.extend(a.params, {
                        au1: e.get("person").getAge(),
                        au2: e.get("person").get("gender")
                    }), "condition" === d && (a.params.sc = e.get("condition").getSCAPPModel().id), webmd.ads.refresh(a), c.app.transTileId = null, window.webmd.p.symptomchecker.ads = {
                        top: {},
                        left: {},
                        right: {}
                    }
                },
                resetVars: function() {
                    b.each(c.app.ads, function(a, b, c) {
                        c[b] = {}
                    })
                }
            })
        }), define("jst!templates/conditions/header.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="prevnext">\r\n	<a href="#" class="prev ', prevDisabled && (__p += "disabled"), __p += '"><span></span>Previous</a>\r\n	<a href="#" class="next ', nextDisabled && (__p += "disabled"), __p += '">Next Condition<span></span></a>\r\n</div>\r\n\r\n<h2>' + (null == (__t = name) ? "" : _.escape(__t)) + "</h2>\r\n", aliases && (__p += '\r\n<h3 class="subtitle">' + (null == (__t = aliases) ? "" : _.escape(__t)) + "</h3>\r\n"), __p += '\r\n\r\n<ul class="actions">\r\n	<li class="save">\r\n		<a href="#" class="', saveDisabled && (__p += "disabled"), __p += '">Save Symptoms</a>\r\n	</li>\r\n	<li class="print">\r\n		<a href="#">Print</a>\r\n		<ul class="print-menu">\r\n			<li class="doctor-report">\r\n				<a href="#" title="A summary of your symptoms to share with your doctor.">Print Doctor\'s Report</a>\r\n			</li>\r\n			<li class="symptom-report">\r\n				<a href="#" title="Your personal summary with symptom and condition information.">Print Your Symptom Report</a>\r\n			</li>\r\n		</ul>\r\n	</li>\r\n</ul>\r\n';
                return __p
            }
        }), define("jst!templates/conditions/community.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="c_mod" id="community">\r\n	<div class="c_top community">Community</div>\r\n	<div class="c_mid">\r\n		<p>Be the first to start talking about ' + (null == (__t = condition_name) ? "" : __t) + ' in the WebMD Community.</p>\r\n		<p class="line">In a few easy steps, you can create a public or private Health Community focused on what matters most to you.</p>\r\n		' + (null == (__t = community_link) ? "" : __t) + '\r\n	</div>\r\n	<div class="c_bot"></div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/conditions/answers.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="c_mod" id="webmd_answers">\r\n	<div class="c_top webmd_answers">Have Questions?</div>\r\n	<div class="c_mid">\r\n		<p>Have specific questions about your ' + (null == (__t = condition_name) ? "" : __t) + "?</p>\r\n		" + (null == (__t = answers_link) ? "" : __t) + '\r\n	</div>\r\n	<div class="c_bot"></div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/conditions/emergency.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="c_mod" id="emergency">\r\n	<div class="c_top">\r\n		<h3>' + (null == (__t = title) ? "" : __t) + '</h3>\r\n	</div>\r\n	<div class="c_mid">' + (null == (__t = content) ? "" : __t) + '</div>\r\n	<div class="c_bot"></div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/conditions/symptoms.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="symptoms" class="c_mod">\r\n	<h3>' + (null == (__t = name) ? "" : _.escape(__t)) + ' Symptoms</h3>\r\n	<p class="check">Symptoms you chose</p>\r\n	<div class="content-container">\r\n		Loading&hellip;\r\n	</div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/conditions/fact.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="r_mod" id="fact">\r\n	<div class="r_top_blue">Fact</div>\r\n	<div class="r_mid">\r\n		<div>' + (null == (__t = fact) ? "" : __t) + '</div>\r\n	</div>\r\n	<div class="r_bot"></div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/conditions/did-you-know.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="r_mod" id="know">\r\n	<div class="r_top_blue">Did you know?</div>\r\n	<div class="r_mid">\r\n		<div>' + (null == (__t = did_you_know) ? "" : __t) + '</div>\r\n	</div>\r\n	<div class="r_bot"></div>\r\n</div>\r\n';
                return __p
            }
        }),
        function(a) {
            "use strict";
            a.fn.outerHTML = function() {
                var b, c = a(this)[0];
                return b = "outerHTML" in c ? c.outerHTML : a("<p>").append(a(c).clone()).html()
            }
        }(jQuery), define("jquery.outerhtml", function() {}), define("views/condition", ["require", "underscore", "backbone", "util", "models/condition", "views/login", "models/person", "views/symptomsets/save-signed-in-anonymous", "views/symptomsets/save-signed-in-identified", "jst!templates/conditions/header.jst", "jst!templates/conditions/community.jst", "jst!templates/conditions/answers.jst", "jst!templates/conditions/emergency.jst", "jst!templates/conditions/symptoms.jst", "jst!templates/conditions/fact.jst", "jst!templates/conditions/did-you-know.jst", "jquery.outerhtml"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("models/condition"),
                f = a("views/login"),
                g = a("models/person"),
                h = a("views/symptomsets/save-signed-in-anonymous"),
                i = a("views/symptomsets/save-signed-in-identified"),
                j = a("jst!templates/conditions/header.jst"),
                k = a("jst!templates/conditions/community.jst"),
                l = a("jst!templates/conditions/answers.jst"),
                m = a("jst!templates/conditions/emergency.jst"),
                n = a("jst!templates/conditions/symptoms.jst"),
                o = a("jst!templates/conditions/fact.jst"),
                p = a("jst!templates/conditions/did-you-know.jst");
            return a("jquery.outerhtml"), c.View.extend({
                events: {
                    "click #prevnext .prev": "previous",
                    "click #prevnext .next": "next",
                    "click #edit-symptoms": "editSymptoms",
                    "click .actions .print a": "onClickPrintLink",
                    "click .actions .save a": "saveSymptoms",
                    "click .doctor-report a": "printDoctorReport",
                    "click .symptom-report a": "printPatientReport",
                    "click .toggleSymptoms": "toggleSymptoms",
                    "mouseover .actions .print a": "showPrintMenu",
                    "mouseleave .actions .print a": "hidePrintMenu",
                    "mouseleave .print-menu": "hidePrintMenu",
                    "mouseenter .print-menu": "onMouseenterPrintMenu"
                },
                sp: ["fact", "did_you_know", "community_link", "webmd_answers_link"],
                titles: d.conditionViewTitles,
                modids: {
                    condition_description: "desc",
                    symptoms: "symp",
                    what_to_expect: "wtex",
                    made_worse_by: "wors",
                    how_its_diagnosed: "diag",
                    questions_to_ask_your_dr: "ques",
                    treatment: "tmnt",
                    self_care: "self",
                    risk_factors: "risk",
                    when_to_see_a_doctor: "doct",
                    emergency: "emer",
                    prevention: "prev",
                    community: "comm",
                    how_common: "howc",
                    webmd_answers: "have"
                },
                dis: d.conditionViewModuleDisplayOrder,
                initialize: function() {
                    b.bindAll(this), c.app.session.on("change:condition", this.onModelChange).on("change:symptomSet", this.onSymptomSetChange), c.app.router.on("route:condition", this.show).on("route:intro route:symptoms", this.hide)
                },
                onModelChange: function() {
                    this.model && this.model.off(null, this.render), this.model = c.app.session.get("condition"), this.model.on("change", this.render)
                },
                onSymptomSetChange: function(a, b) {
                    b.canBeSaved() || this.disableSaveButton()
                },
                onClickPrintLink: function() {
                    return !1
                },
                showPrintMenu: function() {
                    var a = this;
                    clearTimeout(this.leave), this.$printLink.hasClass("active") || (this.enter = setTimeout(function() {
                        a.$printLink.addClass("active"), a.$printMenu.slideDown(200)
                    }, 200))
                },
                hidePrintMenu: function() {
                    var a = this;
                    clearTimeout(this.enter), this.leave = setTimeout(function() {
                        a.$printLink.removeClass("active"), a.$printMenu.hide()
                    }, 600)
                },
                onMouseenterPrintMenu: function() {
                    clearTimeout(this.leave)
                },
                saveSymptoms: function(a) {
                    return $(a.target).hasClass("disabled") ? !1 : (d.metrics.click("save", "", !0), c.app.isLoggedIn() ? c.app.session.get("person").id === g.ANONYMOUS.id ? new h : new i : (c.app.session.set({
                        isSavingSymptoms: !0
                    }), new f), !1)
                },
                printDoctorReport: function() {
                    return d.metrics.click("print", "", !0), c.trigger("printReportRequested", "doctor"), !1
                },
                printPatientReport: function() {
                    return d.metrics.click("print", "", !0), c.trigger("printReportRequested", "patient"), !1
                },
                render: function() {
                    this.reset(), this.model.getSCAPPModel().fetchSymptoms(), this.renderCenterWell().renderRightRail().convertDCTMLinks();
                    var a = $("html");
                    if (a.hasClass("browserIE_8") || a.hasClass("IEDocMode_8")) {
                        var b = {};
                        $("div.c_mod a.more,div.c_mod a.doc_disc_guide").each(function() {
                            var a = $(this).attr("href");
                            b[a] ? $(this).remove() : b[a] = !0
                        })
                    }
                    return c.trigger("view:condition:rendered"), ("tablet" === webmd.useragent.ua.type || "mobile" === webmd.useragent.ua.type) && this.$(".print,#print_main,#sc_print_menu").remove(), d.scrollToElement({
                        targetSelector: "#header_ctr",
                        extraSpace: 10
                    }), this
                },
                renderCenterWell: function() {
                    var a, d, e = this,
                        f = this.$("#c_col"),
                        g = this.model.toJSON(),
                        h = c.app.session.get("symptomSet");
                    return a = j({
                        name: e.model.getName(),
                        aliases: e.model.getAliases(),
                        prevDisabled: void 0 === c.app.conditions.before(e.model.getSCAPPModel()),
                        nextDisabled: void 0 === c.app.conditions.after(e.model.getSCAPPModel()),
                        saveDisabled: !h.canBeSaved()
                    }), f.append(a), this.$printLink = this.$(".actions .print a"), this.$printMenu = this.$(".print-menu"), d = e.dis[g.type_of_disease.toLowerCase()] ? g.type_of_disease.toLowerCase() : "common", b.each(e.dis[d], function(a) {
                        if (!g[a] && "community" !== a && "webmd_answers" !== a) return !0;
                        var b;
                        "community" === a && g.community_link ? b = k({
                            condition_name: e.model.getName(),
                            community_link: g.community_link
                        }) : "webmd_answers" === a && g.webmd_answers_link ? b = l({
                            condition_name: e.model.getName(),
                            answers_link: g.webmd_answers_link
                        }) : "emergency" === a ? b = m({
                            title: e.titles[a],
                            content: g[a]
                        }) : "symptoms" === a ? b = n({
                            name: e.model.getName()
                        }) : g[a] && (b = '<div id="' + a + '" class="c_mod">' + (e.titles[a] ? "<h3>" + e.titles[a].replace("{Name}", e.model.getName()) + "</h3>" : "") + g[a] + "</div>"), f.append(b), "symptoms" === a && $.when(e.model.getSCAPPModel().symptoms.deferred).done(e.renderSymptoms)
                    }), e.$("#c_col .c_mod a").addClass("more"), e.$("#questions_to_ask_your_dr a").removeClass("more").addClass("doc_disc_guide").bind("click", function() {
                        return sl(this, "nw", "sc-cond-sctn_" + e.modids.questions_to_ask_your_dr + "-1")
                    }), b.each(b.keys(e.modids), function(a) {
                        e.$("#" + a + " a.more").each(function(b) {
                            $(this).click(function() {
                                var c = "sc-cond-sctn_" + e.modids[a] + "-" + (b + 1);
                                return sl(this, "nw", c)
                            })
                        })
                    }), this
                },
                renderRightRail: function() {
                    var b, c, d = this,
                        e = this.$("#r_col"),
                        f = this.model.toJSON();
                    return e.append('<div id="pd-search-ed" class="r_mod pd-search"></div>'), a(["pdmodules/1/search"], function(a) {
                        a.init({
                            condition: d.model.getSCAPPModel().id
                        })
                    }), f.fact && (b = o({
                        fact: f.fact
                    }), e.append(b)), f.did_you_know && (c = p({
                        did_you_know: f.did_you_know
                    }), e.append(c)), $("#newsletter-mapping-center").remove(), e.append('<div id="newsletter-mapping-center" class="nls-module"></div>'), a(["newsletter/1/symptom-checker"], function(a) {
                        a.init({
                            template: {
                                content: '<div class="newsletterFmt"></div>\n<div class="wrapper">\n<div class="nls-header">{header}</div>\n{preContent}<div class="nls-content">\n{preForm}<form class="nls-form" action="#" novalidate="novalidate">\n<div class="validationWrapper"><div class="checkbox-container clearfix">{inputs}</div></div>\n<div class="privacy-disclaimer"><em>By clicking Submit, you agree to the <a href="http://www.webmd.com/about-webmd-policies/about-terms-and-conditions-of-use">WebMD Terms &amp; Conditions</a> &amp; <a class="privacy-policy" href="http://www.webmd.com/about-webmd-policies/about-privacy-policy">Privacy Policy</a> and understand that you may opt out of WebMD subscriptions at any time.</em></div><div class="input-container">\n<div class="email-container validationWrapper">\n<input type="email" class="nls-email" name="email" autocapitalize="off" autocorrect="off" placeholder="Enter email address" /> <button name="nl-submit" formnovalidate class="off {submitClass}" type="submit"><span>Submit</span></button>\n<div class="clearfix"></div></div>\n</div>\n</form>\n<a class="nl-link" href="https://member.webmd.com/newsletters/newsletters.aspx" onclick="return sl(this,"nw","nl-multie_s")">Sign up for more topics!</a>{postForm}</div>\n{postContent}</div>',
                                submitClass: "webmd-btn webmd-btn-pr webmd-btn-s",
                                successHeader: "<h2>Thank You For Signing Up.</h2>",
                                promo: '<div class="promo"><div class="promo-content clearfix"><img src="{image}" alt="WebMD App" /><div class="promo-description"><p>{text}</p><p class="promoLink"><a href="{url}" class="webmd-btn webmd-btn-pr webmd-btn-m" onclick="wmdPageLink(\'nlupgrd_sub\')">{button}</a></p><div class="clearfix"></div></div></div></div>'
                            },
                            condition: d.model.getSCAPPModel().id,
                            selector: "#newsletter-mapping-center"
                        })
                    }), e.append($("#mobile_hp")), this.$("#know a").addClass("more").click(function() {
                        return sl(this, "nw", "sc-dyn_1")
                    }), this
                },
                formatSymptoms: function() {
                    var a, d, e, f = c.app.session.get("symptomSet").get("symptoms").pluck("sid"),
                        g = [],
                        h = [],
                        i = $("<ul>"),
                        j = $("<ul>"),
                        k = !1;
                    return this.model.getSCAPPModel().symptoms.each(function(c) {
                        a = $("<li>").text(c.get("name")), k = b.indexOf(f, c.id) > -1, k && a.addClass("check"), (k ? g : h).push(a)
                    }), d = g.concat(h), b.each(d, function(a, b) {
                        (b % 2 ? j : i).append(a)
                    }), e = '<div class="content">' + i.outerHTML() + j.outerHTML() + "</div>", d.length > 6 && (e += '<button class="toggleSymptoms less">Less <span>â–²</span></button>'), e
                },
                renderSymptoms: function() {
                    this.$("#symptoms .content-container").html(this.formatSymptoms()), this.toggleSymptoms()
                },
                convertDCTMLinks: function() {
                    var a = this.model.get("DCTM_links");
                    return this.$("a[chronic_id]").each(function() {
                        a && "undefined" != typeof a[$(this).attr("chronic_id")] ? (this.href = a[$(this).attr("chronic_id")], $(this).removeAttr("directive chronic_id path object_type")) : "" !== $(this).attr("chronic_id") && "" !== $(this).attr("object_type") && $(this).remove()
                    }), this
                },
                previous: function(a) {
                    if ($(a.target).hasClass("disabled")) return !1;
                    d.metrics.click("cond", "prev", !0);
                    var b = c.app.conditions.before(this.model.getSCAPPModel()),
                        f = b.get("condition_chronic_id"),
                        g = new e({
                            id: f
                        });
                    return c.app.session.set({
                        condition: g
                    }), !1
                },
                next: function(a) {
                    if ($(a.target).hasClass("disabled")) return !1;
                    d.metrics.click("cond", "next", !0);
                    var b = c.app.conditions.after(this.model.getSCAPPModel()),
                        f = b.get("condition_chronic_id"),
                        g = new e({
                            id: f
                        });
                    return c.app.session.set({
                        condition: g
                    }), !1
                },
                disableSaveButton: function() {
                    return this.$("li.save a").addClass("disabled"), this
                },
                editSymptoms: function() {
                    return d.metrics.click("sym", "edt", !0), c.app.router.navigate("/symptomsView", !0), d.scrollToElement({
                        targetSelector: "#header_ctr",
                        extraSpace: 10
                    }), !1
                },
                toggleSymptoms: function() {
                    var a, c = this.$("#symptoms .content"),
                        d = this.$("#symptoms button"),
                        e = [];
                    return d.hasClass("less") ? (b.each(c.find("ul"), function(a, c) {
                        e[c] = b.reduce($(a).find("li").slice(0, 3), function(a, b) {
                            return a + $(b).outerHeight()
                        }, 0)
                    }), a = b.max(e), c.height(a), d.html("More <span>â–¼</span>").removeClass("less")) : (c.css("height", "auto"), d.html("Less <span>â–²</span>").addClass("less")), !1
                },
                reset: function() {
                    return this.$("#c_col").empty(), this.$(".r_mod, .newsletterThurii_rdr").remove(), this
                },
                hide: function() {
                    this.$el.hide()
                },
                show: function() {
                    this.$el.show()
                }
            })
        }), define("jst!templates/sponsorship/attribution.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="attrib_right_fmt">\r\n	<div class="attrib_right_top_fmt"></div>\r\n	<div class="attrib_content">\r\n		<div class="link_fmt">\r\n			<a href="/www/' + (null == (__t = type) ? "" : _.escape(__t)) + "\" onclick=\"return sl(this,'sp','attribution');\">\r\n				" + (null == (__t = formattedType) ? "" : _.escape(__t)) + '\r\n			</a>\r\n		</div>\r\n		<img src="' + (null == (__t = logo) ? "" : __t) + '" alt="' + (null == (__t = displayName) ? "" : _.escape(__t)) + '" border="0">\r\n		<div class="clearboth_fmt"></div>\r\n	</div>\r\n	<div class="attrib_right_bottom_fmt"></div>\r\n</div>\r\n';
                return __p
            }
        }), define("jst!templates/sponsorship/disclaimer.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div class="ed_disclaimer">\r\n	This content is selected and controlled by WebMD\'s editorial staff and is <a href="/www/' + (null == (__t = type) ? "" : _.escape(__t)) + "\" onclick=\"return sl(this, 'sp', 'disclaimer');\">" + (null == (__t = formattedType) ? "" : _.escape(__t)) + "</a> " + (null == (__t = displayName) ? "" : __t) + ".\r\n</div>\r\n";
                return __p
            }
        }), define("jst!templates/sponsorship/right-icm.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="righticm">\r\n	<div id="rr-icm">\r\n		<div id="rightICM_fmt">\r\n			<script type="text/javascript">\r\n				webmd.ads.refresh.defaults.src.rightICM_fmt = document.createElement("iframe");\r\n				$(webmd.ads.refresh.defaults.src.rightICM_fmt).attr({src:"' + (null == (__t = src) ? "" : __t) + '",width:"300",id:"rightICM_Iframe",title:"Right ICM Frame",marginwidth:0,marginheight:0,style:"margin:0;",frameborder:0,scrolling:"no"});\r\n			</script>\r\n			<div class="ad_placeholder"></div>\r\n		</div>\r\n	</div>\r\n	<div class="moduleSpacer_rdr"></div>\r\n	<script type="text/javascript">\r\n		var priTopId = "4117";\r\n		var secTopId = "";\r\n	</script>\r\n</div>\r\n';
                return __p
            }
        }), define("views/sponsorship", ["require", "underscore", "backbone", "util", "jst!templates/sponsorship/attribution.jst", "jst!templates/sponsorship/disclaimer.jst", "jst!templates/sponsorship/right-icm.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("jst!templates/sponsorship/attribution.jst"),
                f = a("jst!templates/sponsorship/disclaimer.jst"),
                g = a("jst!templates/sponsorship/right-icm.jst");
            return c.View.extend({
                initialize: function() {
                    this.originalProps = b.pick(window.s_md, ["prop4", "prop28", "prop29", "eVar30", "prop30"]), this.hsfooter = '<div id="sp_ft_rdr">' + $("#sp_ft_rdr").html() + "</div>", c.trigger("view:ad:reset"), c.app.router.on("all", this.toggle, this), c.app.session.on("change:condition", this.reset), c.on("view:condition:rendered", this.toggle, this), webmd.p.symptomchecker.sponsorCallback = this.sponsorCallback, webmd.p.symptomchecker.sponsorObject = this
                },
                toggle: function(a) {
                    webmd.p.symptomchecker.sponsor = null, c.trigger("view:ad:reset"), "route:intro" === a || "route:symptoms" === a ? this.reset(a.split(":")[1]) : "undefined" == typeof a && "conditionView" === c.history.fragment || "route:condition" === a && this.skipped ? (this.fetch("condition"), this.skipped = !1) : "undefined" == typeof a && (this.skipped = !0)
                },
                fetch: function(a) {
                    var b, d = this,
                        e = c.app.session.get("condition").getSCAPPModel().id;
                    webmd.p.symptomchecker.sponsorObject.route = a, webmd.p.symptomchecker.sponsorObject.conditionID = e, c.app.transTileId = Math.round(99999999 * Math.random()), webmd.ads2 && webmd.ads2.isInitialized() ? (webmd.metrics.createPageviewId(), 0 === $("#sponsorshipAd").length ? ($("#l_col").append($('<div id="sponsorshipAd"><div id="ads2-pos-5100"></div></div>')), webmd.ads2.defineAd({
                        id: "ads2-pos-5100",
                        pos: "5100",
                        sizes: [1, 3],
                        immediate: !0,
                        refresh: !1
                    })) : webmd.ads2.refresh({
                        id: "ads2-pos-5100"
                    })) : (b = d.url({
                        pos: 5100,
                        sc: e
                    }), $.getScript(b, function() {
                        webmd.debug("SCRIPT!!!"), d.sponsorCallback()
                    }))
                },
                sponsorCallback: function(a) {
                    webmd.debug("========== >>> CALLBACK", a);
                    var b = webmd.p.symptomchecker.sponsorObject;
                    a && (webmd.p.symptomchecker.sponsor = a), webmd.p.sponsorProgramName || (webmd.p.sponsorProgramName = {}), webmd.p.symptomchecker.sponsor && webmd.p.sponsorProgramName[webmd.p.symptomchecker.sponsor] ? b.render(webmd.p.symptomchecker.sponsor, b.conditionID) : b.reset(b.route)
                },
                render: function(a, c) {
                    var d, e, f;
                    window.s_sponsor_program = webmd.p.sponsorProgramName[a], window.s_sponsor_brand = s_sponsor_program.slice(0, webmd.p.sponsorProgramName[a].lastIndexOf("_")), window.s_campaign = s_sponsor_program.split("_")[2], f = {
                        prop28: window.s_sponsor_brand.toLowerCase(),
                        prop29: window.s_sponsor_program.toLowerCase(),
                        eVar30: window.s_package_type.replace("nosp", "sp"),
                        prop30: window.s_package_type.replace("nosp", "sp")
                    }, b.extend(window.s_md, f), $(".ed_disclaimer, .attrib_right_fmt").remove(), webmd.p.sponsorProgramItems[a] && webmd.p.sponsorProgramItems[a].type && webmd.p.sponsorProgramItems[a].displayName && webmd.p.sponsorProgramItems[a].logo && (webmd.p.sponsorProgramItems[a].logo && (d = this.renderAttribution(a), $("#r_col").prepend(d)), e = this.renderDisclaimer(a), $("#sc_hdr").after(e)), $("#righticm").remove(), this.addICM(c), $("#sp_ft_rdr").remove(), this.show()
                },
                renderAttribution: function(a) {
                    var b = {
                        type: webmd.p.sponsorProgramItems[a].type,
                        formattedType: d.capitalize(webmd.p.sponsorProgramItems[a].type.replace(/-/g, " ")),
                        logo: webmd.p.sponsorProgramItems[a].logo,
                        displayName: webmd.p.sponsorProgramItems[a].displayName
                    };
                    return e(b)
                },
                renderDisclaimer: function(a) {
                    var b = {
                        displayName: webmd.p.sponsorProgramItems[a].displayName,
                        formattedType: webmd.p.sponsorProgramItems[a].type.replace(/-/g, " "),
                        type: webmd.p.sponsorProgramItems[a].type
                    };
                    return f(b)
                },
                reset: function(a) {
                    b.extend(window.s_md, this.originalProps), window.s_sponsor_program = "", window.s_sponsor_brand = "", window.s_campaign = null, $(".ed_disclaimer, .attrib_right_fmt, #sp_ft_rdr, #righticm").remove(), $("#ContentPane23").prepend(this.hsfooter), "condition" === a && this.triggerPageView()
                },
                show: function() {
                    $(".ed_disclaimer, .attrib_right_fmt").show(), this.triggerPageView(), c.trigger("view:sponsorship:rendered")
                },
                triggerAds: function() {
                    c.trigger("view:ad:refresh")
                },
                triggerPageView: function() {
                    var a = c.app.session.get("condition"),
                        e = a.getName(),
                        f = a.getSCAPPModel().get("topicID"),
                        g = "condition-" + d.slugify(e);
                    window.s_md.prop4 = f, d.metrics.page(g), b.extend(window.s_md, this.originalProps)
                },
                url: function(a) {
                    var d = {
                        transactionId: c.app.transTileId,
                        tile: c.app.transTileId,
                        tug: null,
                        pug: "__",
                        site: 2,
                        affiliate: 20,
                        hcent: null,
                        scent: null,
                        pos: null,
                        xpg: 4117,
                        sec: null,
                        au1: c.app.session.get("person").getAge(),
                        au2: c.app.session.get("person").get("gender"),
                        uri: "/symptoms/coresc/landing",
                        artid: "091e9c5e807e79f9",
                        inst: 0,
                        leaf: 12540,
                        segm: 0,
                        cc: 93,
                        tmg: null,
                        sc: null,
                        env: webmd.url.getLifecycle() ? 1 : null
                    };
                    return d = b.defaults(a, d), "//as.webmd.com/html.ng/" + $.param(d)
                },
                addICM: function(a) {
                    var b, c;
                    webmd.ads2 && webmd.ads2.isInitialized() ? 0 === $("#righticm").length && (c = '<div id="righticm">	<div id="rr-icm">		<div id="rightICM_fmt">			<div id="ads2-pos-5002"></div>		</div>	</div></div><div class="moduleSpacer_rdr"></div>', $("#know").after($(c)), webmd.ads2.defineAd({
                        id: "ads2-pos-5002",
                        pos: "5002",
                        sizes: [1, 2]
                    })) : (b = {
                        src: this.url({
                            pos: 5002,
                            sc: a
                        })
                    }, c = g(b), $("#righticm").remove(), $("#know").after(c))
                }
            })
        }), define("views/footer", ["underscore", "backbone"], function(a, b) {
            "use strict";
            return b.View.extend({
                el: "#symchk_ftr",
                events: {
                    "click a.toggle": "toggleSources"
                },
                initialize: function() {
                    a.bindAll(this), b.app.session.on("change:condition", this.onModelChange), b.app.router.on("all", this.reset)
                },
                onModelChange: function() {
                    this.model = b.app.session.get("condition"), this.model.on("change", this.render)
                },
                render: function() {
                    var a, b, c, d, e, f;
                    return this.model.isNew() ? this.reset() : (a = this.model.getReviewerName(), b = this.model.getReviewDate(), c = this.model.getCopyright(), d = this.model.getSources(), a && (this.$(".dr_link span").text(a), this.$(".dr_link").show()), b && (e = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], f = e[b.getMonth()] + " " + (b.getDate() < 10 ? "0" + b.getDate() : b.getDate()) + ", " + b.getFullYear(), this.$(".rev_date span").text(f), this.$(".rev_date").show()), this.$(".reviewed").show(), c && this.$(".copyright").text(c), d && (this.$(".sources .sourceText").html(d), this.$(".sources").show()), this)
                },
                reset: function(a) {
                    return "route:condition" !== a && this.$(".sources, .reviewed").hide(), this
                },
                toggleSources: function() {
                    return this.$("a").hasClass("closed") ? (this.$("a").removeClass("closed"), this.$(".sourceText").slideDown()) : (this.$("a").addClass("closed"), this.$(".sourceText").slideUp()), !1
                }
            })
        }), define("views/conditions/loading", ["underscore", "backbone"], function(a, b) {
            "use strict";
            return b.View.extend({
                el: ".loading_large",
                initialize: function() {
                    a.bindAll(this), b.app.session.on("change:condition", this.onModelChange), b.app.router.on("route:intro route:symptoms", this.hide)
                },
                onModelChange: function() {
                    b.app.session.get("condition").on("request", this.render).on("all", this.hide)
                },
                render: function() {
                    return this.$el.show(), this
                },
                hide: function(a) {
                    "request" !== a && this.$el.hide()
                }
            })
        }), define("views/conditions/loading-error", ["underscore", "backbone"], function(a, b) {
            "use strict";
            return b.View.extend({
                el: ".condition_error",
                initialize: function() {
                    a.bindAll(this), b.app.session.on("change:condition", this.onModelChange), b.app.router.on("route:intro route:symptoms", this.hide)
                },
                onModelChange: function() {
                    b.app.session.get("condition").on("error", this.render).on("request", this.hide)
                },
                render: function() {
                    return this.$el.show(), this
                },
                hide: function() {
                    return this.$el.hide(), this
                }
            })
        }), define("jst!templates/symptomsets/update-disclaimer.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="overlay-symptomsets-update-disclaimer" class="sc-overlay">\r\n	<p>Some of your previous symptoms and/or possible conditions may have been\r\n	updated in this view based on a change in your current age or the age of\r\n	the person you are viewing.</p>\r\n\r\n	<button class="webmd-btn webmd-btn-pr webmd-btn-xs">OK</button>\r\n</div>\r\n';
                return __p
            }
        }), define("views/symptomsets/update-disclaimer", ["underscore", "backbone", "jst!templates/symptomsets/update-disclaimer.jst"], function(a, b, c) {
            "use strict";
            return b.View.extend({
                events: {
                    "click button": "okay"
                },
                initialize: function() {
                    a.bindAll(this), this.render(), this.setElement($("#overlay-symptomsets-update-disclaimer"))
                },
                okay: function() {
                    return this.remove(), !1
                },
                remove: function() {
                    return this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    return webmd.overlay.open({
                        html: c(),
                        scrolling: !1,
                        width: "450px"
                    }), this
                }
            })
        }), define("jst!templates/print/reported-symptoms.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<tr>\r\n	<td>" + (null == (__t = symptomName) ? "" : __t) + "</td>\r\n	<td>" + (null == (__t = bodyPartName) ? "" : __t) + "</td>\r\n	<td>\r\n		<ol>\r\n			", _.each(questions, function(a) {
                    __p += "\r\n				<li>" + (null == (__t = a.text) ? "" : __t) + "\r\n					<ul>\r\n						", _.each(a.answers, function(a) {
                        __p += "\r\n							<li>" + (null == (__t = a) ? "" : __t) + "</li>\r\n						"
                    }), __p += "\r\n					</ul>\r\n				</li>\r\n			"
                }), __p += "\r\n		</ol>\r\n	</td>\r\n</tr>\r\n";
                return __p
            }
        }), define("jst!templates/print/condition.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<tr>\r\n	<td>" + (null == (__t = name) ? "" : _.escape(__t)) + "</td>\r\n	<td>" + (null == (__t = description) ? "" : _.escape(__t)) + "</td>\r\n</tr>\r\n";
                return __p
            }
        }), define("views/report", ["require", "underscore", "backbone", "util", "models/person", "models/condition", "jst!templates/print/reported-symptoms.jst", "jst!templates/print/condition.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("models/person"),
                f = a("models/condition"),
                g = a("jst!templates/print/reported-symptoms.jst"),
                h = a("jst!templates/print/condition.jst");
            return c.View.extend({
                el: "body",
                events: {
                    "click #close": "close",
                    "click #print": "print"
                },
                initialize: function(a) {
                    d.metrics.page("sc-print"), "undefined" != typeof a && a.inline || b.extend(this.options, {
                        type: "doctor" === webmd.url.getParam("type") ? "doctor" : "patient",
                        app: window.opener.Backbone.app
                    }), this.$symptoms = this.$("#reported-symptoms tbody"), this.$conditions = this.$("#conditions tbody"), this.render()
                },
                render: function() {
                    var a = "type-";
                    return this.$el.removeClass(a + "patient " + a + "doctor").addClass(a + this.options.type), "doctor" === this.options.type ? this.$(".doctor-only").show() : (this.$(".patient-only").show(), this.$(".patient-funded").hide()), this.renderUserProfile().renderReportedSymptoms().renderConditions()
                },
                renderUserProfile: function() {
                    var a, b, c = this.options.app.session.get("person"),
                        f = this.options.app.session.get("symptomSet"),
                        g = e.genders[c.get("gender")];
                    return this.$(".anonymous").val(c.getDisplayName()).show(), c.isRegistered() ? (b = c.get("mOB") + "/" + c.get("dOB") + "/" + c.get("yOB") + " (" + c.getAge() + " Years)", a = "Date of Birth:") : (b = e.ageRange(c.getAge()).replace("Check for Someone ", ""), a = "Age Range:"), this.$("#user-age-label").text(a), this.$("#user-age").text(b), this.$("#user-gender").text(g), this.$("#date-reported-symptoms").text(d.formatDate(f.get("entrydate"))), this
                },
                renderReportedSymptoms: function() {
                    var a = this,
                        c = {};
                    return a.$symptoms.empty(), a.options.app.session.get("symptomSet").get("symptoms").each(function(e) {
                        c = {
                            symptomName: e.getDisplayName(),
                            bodyPartName: d.bodyParts[e.get("bodyPartID")],
                            questions: {}
                        }, b.each(e.get("qualifierclasses"), function(a) {
                            b.each(a.quals, function(b) {
                                return "0" === b.id ? !0 : b.selected ? (c.questions.hasOwnProperty(a.id) || (c.questions[a.id] = {
                                    text: a.question,
                                    answers: []
                                }), void c.questions[a.id].answers.push(b.value)) : !0
                            })
                        }), a.$symptoms.append(g(c))
                    }), this
                },
                renderConditions: function() {
                    var a = this;
                    return this.$conditions.empty(), this.options.app.conditions.each(function(b) {
                        new f({
                            id: b.get("condition_chronic_id")
                        }).fetch({
                            success: function(b) {
                                a.renderCondition(b)
                            }
                        })
                    }), this
                },
                renderCondition: function(a) {
                    var b = h({
                        name: a.getName(),
                        description: a.getMetaDescription()
                    });
                    this.$conditions.append(b)
                },
                close: function() {
                    return window.close(), !1
                },
                print: function() {
                    return window.print(), !1
                }
            })
        }), define("views/application", ["require", "underscore", "backbone", "util", "models/person", "views/intro", "views/symptoms", "views/flashrightrail", "views/infobar", "views/ad", "views/condition", "views/sponsorship", "views/footer", "views/conditions/loading", "views/conditions/loading-error", "views/symptomsets/update-disclaimer", "views/report"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("util"),
                e = a("models/person"),
                f = a("views/intro"),
                g = a("views/symptoms"),
                h = a("views/flashrightrail"),
                i = a("views/infobar"),
                j = a("views/ad"),
                k = a("views/condition"),
                l = a("views/sponsorship"),
                m = a("views/footer"),
                n = a("views/conditions/loading"),
                o = a("views/conditions/loading-error"),
                p = a("views/symptomsets/update-disclaimer"),
                q = a("views/report");
            return c.View.extend({
                Subviews: {},
                initialize: function() {
                    b.bindAll(this), this.$el.toggleClass("logged-in", d.isLoggedIn()), c.app.options.isWidget && this.$el.addClass("type-widget"), c.app.router.on("route", this.setContainerClass), c.on("unlockSymptomSet", this.onEditingSymptomSet), c.on("printReportRequested", this.onPrintReportRequested), this.render()
                },
                render: function() {
                    this.Subviews.intro = new f({
                        el: this.$("#view-intro"),
                        collection: c.app.people
                    }), this.Subviews.symptoms = new g({
                        el: this.$("#view-symptoms")
                    }), new h({
                        el: this.$("#flash-right-rail")
                    }), new i({
                        el: this.$("#sc_hdr"),
                        model: c.app.session.get("symptomSet")
                    }), new j, new k({
                        el: this.$("#view-condition")
                    }), new l, new m, new n, new o
                },
                setContainerClass: function(a) {
                    this.$el.removeClass(function(a, b) {
                        return (b.match(/\broute-.*\S+/g) || []).join(" ")
                    }).addClass("route-" + a)
                },
                onEditingSymptomSet: function(a) {
                    var b, c, d = a.person();
                    b = (a.get("entrydate") - d.getBirthdate()) / 31536e6, c = e.normalizeAge(Math.floor(b)), c !== d.getNormalizedAge() && new p
                },
                onPrintReportRequested: function(a) {
                    c.app.options.isWidget ? new q({
                        el: this.$("#sc2_print_fmt"),
                        type: a,
                        app: c.app,
                        inline: !0
                    }) : webmd.openWindow("sc-print?print=true&type=" + a, {
                        left: (screen.availWidth - 600) / 2,
                        top: (screen.availHeight - 800) / 2,
                        width: 600,
                        height: 800,
                        scrollbars: 1
                    })
                }
            })
        }), define("jst!templates/loader.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="sc-loader-overlay" class="sc-overlay">\r\n	<h1>Oops!</h1>\r\n\r\n	<p>\r\n		There was a problem loading your account data. Please try again later,\r\n		or <a href="#" class="start">start in offline mode</a>. If you start in\r\n		offline mode, saving will be disabled.\r\n	</p>\r\n\r\n	', (webmd.url.getEnv() || webmd.debug.active) && (__p += '\r\n		<div class="debug">\r\n			<h4>Debug Info</h4>\r\n			<p>\r\n				<b>Note to QA</b>: This information only appears in non-\r\n				production environments or if the page is loaded with query\r\n				string: <b>webmddebug=1</b>\r\n			</p>\r\n			<ul>\r\n				', _.each(failedCalls, function(a) {
                    __p += "\r\n				<li>\r\n					Failed loading " + (null == (__t = a.friendlyName) ? "" : _.escape(__t)) + ". " + (null == (__t = a.retryLink) ? "" : __t) + "\r\n				</li>\r\n				"
                }), __p += "\r\n			</ul>\r\n		</div>\r\n	"), __p += "\r\n</div>\r\n";
                return __p
            }
        }), define("views/loader", ["underscore", "backbone", "collections/symptomsets", "collections/meta", "collections/people", "jst!templates/loader.jst"], function(a, b, c, d, e, f) {
            "use strict";
            return b.View.extend({
                events: {
                    "click .start": "start",
                    "click .retry": "retry"
                },
                ajaxErrors: {},
                friendlyObjectNames: {
                    symptomSets: "saved symptoms",
                    meta: "settings",
                    people: "dependants"
                },
                elementID: "sc-loader-overlay",
                initialize: function() {
                    var c = this;
                    a.bindAll(c), a.each(this.friendlyObjectNames, function(a, d) {
                        $.when(b.app[d].deferred).done(function() {
                            c.removeAJAXError(d)
                        })
                    }), b.on("ajaxerror", this.addAJAXError)
                },
                templateData: function() {
                    var b = this,
                        c = {},
                        d = [];
                    return a.keys(this.ajaxErrors).length && a.each(this.ajaxErrors, function(a, c) {
                        d.push({
                            friendlyName: b.friendlyObjectNames[c],
                            retryLink: '<a href="#" class="retry" data-collection="' + c + '">(retry)</a>'
                        })
                    }), c.failedCalls = d, c
                },
                addAJAXError: function(a, b) {
                    var f;
                    a instanceof c ? f = "symptomSets" : a instanceof d ? f = "meta" : a instanceof e && (f = "people"), this.ajaxErrors[f] = b, this.render()
                },
                removeAJAXError: function(a) {
                    delete this.ajaxErrors[a], $("#" + this.elementID).length && this.render()
                },
                start: function() {
                    return b.app.offlineMode = !0, a.each(a.keys(this.friendlyObjectNames), function(a) {
                        b.app[a].load()
                    }), this.remove(), !1
                },
                retry: function(a) {
                    var c = $(a.target),
                        d = c.data("collection");
                    return b.app[d].load(), !1
                },
                remove: function() {
                    return webmd.overlay.close(), b.View.prototype.remove.call(this), this
                },
                onCleanup: function() {
                    return this.$el.undelegate(), this
                },
                render: function() {
                    var a = f(this.templateData());
                    return webmd.overlay.open({
                        html: a,
                        onCleanup: this.onCleanup,
                        width: "500px"
                    }), this.setElement("#" + this.elementID), this
                }
            })
        }), new function(a) {
            var b = a.separator || "&",
                c = a.spaces === !1 ? !1 : !0,
                d = (a.suffix === !1 ? "" : "[]", a.prefix === !1 ? !1 : !0),
                e = d ? a.hash === !0 ? "#" : "?" : "",
                f = a.numbers === !1 ? !1 : !0;
            jQuery.query = new function() {
                var a = function(a, b) {
                        return void 0 != a && null !== a && (b ? a.constructor == b : !0)
                    },
                    d = function(a) {
                        for (var b, c = /\[([^[]*)\]/g, d = /^([^[]+)(\[.*\])?$/.exec(a), e = d[1], f = []; b = c.exec(d[2]);) f.push(b[1]);
                        return [e, f]
                    },
                    g = function(b, c, d) {
                        var e = c.shift();
                        if ("object" != typeof b && (b = null), "" === e)
                            if (b || (b = []), a(b, Array)) b.push(0 == c.length ? d : g(null, c.slice(0), d));
                            else if (a(b, Object)) {
                            for (var f = 0; null != b[f++];);
                            b[--f] = 0 == c.length ? d : g(b[f], c.slice(0), d)
                        } else b = [], b.push(0 == c.length ? d : g(null, c.slice(0), d));
                        else if (e && e.match(/^\s*[0-9]+\s*$/)) {
                            var h = parseInt(e, 10);
                            b || (b = []), b[h] = 0 == c.length ? d : g(b[h], c.slice(0), d)
                        } else {
                            if (!e) return d;
                            var h = e.replace(/^\s*|\s*$/g, "");
                            if (b || (b = {}), a(b, Array)) {
                                for (var i = {}, f = 0; f < b.length; ++f) i[f] = b[f];
                                b = i
                            }
                            b[h] = 0 == c.length ? d : g(b[h], c.slice(0), d)
                        }
                        return b
                    },
                    h = function(a) {
                        var b = this;
                        return b.keys = {}, a.queryObject ? jQuery.each(a.get(), function(a, c) {
                            b.SET(a, c)
                        }) : jQuery.each(arguments, function() {
                            var a = "" + this;
                            a = a.replace(/^[?#]/, ""), a = a.replace(/[;&]$/, ""), c && (a = a.replace(/[+]/g, " ")), jQuery.each(a.split(/[&;]/), function() {
                                var a = decodeURIComponent(this.split("=")[0] || ""),
                                    c = decodeURIComponent(this.split("=")[1] || "");
                                a && (f && (/^[+-]?[0-9]+\.[0-9]*$/.test(c) ? c = parseFloat(c) : /^[+-]?[0-9]+$/.test(c) && (c = parseInt(c, 10))), c = c || 0 === c ? c : !0, c !== !1 && c !== !0 && "number" != typeof c && (c = c), b.SET(a, c))
                            })
                        }), b
                    };
                return h.prototype = {
                    queryObject: !0,
                    has: function(b, c) {
                        var d = this.get(b);
                        return a(d, c)
                    },
                    GET: function(b) {
                        if (!a(b)) return this.keys;
                        for (var c = d(b), e = c[0], f = c[1], g = this.keys[e]; null != g && 0 != f.length;) g = g[f.shift()];
                        return "number" == typeof g ? g : g || ""
                    },
                    get: function(b) {
                        var c = this.GET(b);
                        return a(c, Object) ? jQuery.extend(!0, {}, c) : a(c, Array) ? c.slice(0) : c
                    },
                    SET: function(b, c) {
                        var e = a(c) ? c : null,
                            f = d(b),
                            h = f[0],
                            i = f[1],
                            j = this.keys[h];
                        return this.keys[h] = g(j, i.slice(0), e), this
                    },
                    set: function(a, b) {
                        return this.copy().SET(a, b)
                    },
                    REMOVE: function(a) {
                        return this.SET(a, null).COMPACT()
                    },
                    remove: function(a) {
                        return this.copy().REMOVE(a)
                    },
                    EMPTY: function() {
                        var a = this;
                        return jQuery.each(a.keys, function(b) {
                            delete a.keys[b]
                        }), a
                    },
                    load: function(a) {
                        var b = a.replace(/^.*?[#](.+?)(?:\?.+)?$/, "$1"),
                            c = a.replace(/^.*?[?](.+?)(?:#.+)?$/, "$1");
                        return new h(a.length == c.length ? "" : c, a.length == b.length ? "" : b)
                    },
                    empty: function() {
                        return this.copy().EMPTY()
                    },
                    copy: function() {
                        return new h(this)
                    },
                    COMPACT: function() {
                        function b(c) {
                            function d(b, c, d) {
                                a(b, Array) ? b.push(d) : b[c] = d
                            }
                            var e = "object" == typeof c ? a(c, Array) ? [] : {} : c;
                            return "object" == typeof c && jQuery.each(c, function(c, f) {
                                return a(f) ? void d(e, c, b(f)) : !0
                            }), e
                        }
                        return this.keys = b(this.keys), this
                    },
                    compact: function() {
                        return this.copy().COMPACT()
                    },
                    toString: function() {
                        var d = [],
                            f = [],
                            g = function(a) {
                                return a += "", c && (a = a.replace(/ /g, "+")), encodeURIComponent(a)
                            },
                            h = function(b, c, d) {
                                if (a(d) && d !== !1) {
                                    var e = [g(c)];
                                    d !== !0 && (e.push("="), e.push(g(d))), b.push(e.join(""))
                                }
                            },
                            i = function(a, b) {
                                var c = function(a) {
                                    return b && "" != b ? [b, "[", a, "]"].join("") : [a].join("")
                                };
                                jQuery.each(a, function(a, b) {
                                    "object" == typeof b ? i(b, c(a)) : h(f, c(a), b)
                                })
                            };
                        return i(this.keys), f.length > 0 && d.push(e), d.push(f.join(b)), d.join("")
                    }
                }, new h(location.search, location.hash)
            }
        }(jQuery.query || {}), define("jquery.query", function() {}), define("models/sessionloader", ["require", "jquery", "underscore", "backbone", "models/person", "models/symptomset", "models/condition", "jquery.query"], function(a) {
            "use strict";
            var b = a("jquery"),
                c = a("underscore"),
                d = a("backbone"),
                e = a("models/person"),
                f = a("models/symptomset"),
                g = a("models/condition");
            return a("jquery.query"), d.Model.extend({
                COOKIE: "WBMD_SC",
                SOURCE_SEO_PAGE: "seoPage",
                SOURCE_EXTERNAL_MODULE: "externalModule",
                SOURCE_COOKIE: "cookie",
                source: null,
                initialize: function() {
                    this.source = this.getSessionSource()
                },
                getSessionSource: function() {
                    var a, c = !1;
                    return b.query.get("bpid") ? c = this.SOURCE_SEO_PAGE : "" !== b.query.get("gender") && "" !== b.query.get("age") ? (a = {
                        age: b.query.get("age"),
                        gender: b.query.get("gender")
                    }, b.query.get("zip") && (a.zip = b.query.get("zip")), void 0 === this.validateExternalModulePerson(a) && (c = this.SOURCE_EXTERNAL_MODULE)) : !d.app.options.isWidget && webmd.cookie.exists(this.COOKIE) && (c = this.SOURCE_COOKIE), c
                },
                isReturningFromLogin: function() {
                    return d.app.isLoggedIn() && (void 0 !== webmd.url.getParam("loadSession") || void 0 !== webmd.url.getParam("login"))
                },
                fetch: function(a) {
                    switch (this.source) {
                        case this.SOURCE_SEO_PAGE:
                            return this.fetchFromQueryString({
                                success: a.success
                            });
                        case this.SOURCE_EXTERNAL_MODULE:
                            return this.fetchFromExternalModuleQueryString({
                                success: a.success
                            });
                        case this.SOURCE_COOKIE:
                            return this.fetchFromCookie({
                                success: a.success
                            });
                        default:
                            return a.success()
                    }
                },
                getCookie: function() {
                    return webmd.cookie.getJson(this.COOKIE, {
                        scramble: !0
                    })
                },
                fetchFromCookie: function(a) {
                    var b, h, i, j = this.getCookie();
                    i = j.symptoms && j.symptoms.length, this.isReturningFromLogin() && i || (delete j.selectedBodyPart, delete j.symptoms, delete j.conditionId), d.app.isLoggedIn() && !i ? delete j.person : (h = d.app.isLoggedIn() ? e.ANONYMOUS : j.person.relationship === e.RELATION_SELF ? e.ME : e.SOMEONE_ELSE, h = c.clone(h), delete h.gender, c.extend(j.person, h), b = d.app.people.get(j.person.id), b.set(j.person), j.person = b), this.isReturningFromLogin() && i ? (j.conditionId && (j.condition = new g({
                        id: j.conditionId
                    })), j.symptomSet = new f({
                        session_data: j.symptoms,
                        datagroup: j.person.id
                    }), j.symptomSet.hydrate({
                        success: function() {
                            a.success(j)
                        }
                    })) : a.success(j)
                },
                fetchFromQueryString: function(a) {
                    var d, h = b.query.get("bpid"),
                        i = b.query.get("sid"),
                        j = {
                            symptomSet: new f,
                            referrer: document.referrer
                        },
                        k = this;
                    "" !== b.query.get("condition") && (j.condition = new g({
                        id: b.query.get("condition")
                    })), c.each(i, function(a, b) {
                        j.symptomSet.get("session_data").push({
                            sid: a,
                            bpid: h[b],
                            qq: []
                        })
                    }), k.doesCookieSymptomSetEqualSymptomSet(j.symptomSet) && (d = k.getCookie().person, j.person = k.defaults().person.set(d)), j.person ? j.symptomSet.set("person", j.person).hydrate({
                        success: function() {
                            a.success(j)
                        }
                    }) : (j.person = new e, a.success(j))
                },
                fetchFromExternalModuleQueryString: function(a) {
                    var c = d.app.isLoggedIn() ? e.ANONYMOUS : e.SOMEONE_ELSE,
                        f = new e(c);
                    f.set("gender", b.query.get("gender")), f.setAge(b.query.get("age")), b.query.get("zip") && (f.get("address").zip = b.query.get("zip")), a.success({
                        person: f
                    })
                },
                doesCookieSymptomSetEqualSymptomSet: function(a) {
                    var b, d = this.getCookie(),
                        e = !0;
                    return c.has(d, "symptomSet") && c.has(d.symptomSet, "symptoms") ? (b = d.symptomSet.symptoms, b.length !== a.get("session_data").length ? !1 : (c.each(b, function(b) {
                        void 0 === c.find(a.get("session_data"), function(a) {
                            return a.sid === Number(b.sid) && a.bpid === Number(b.bpid)
                        }) && (e = !1)
                    }), e)) : !1
                },
                validateExternalModulePerson: function(a) {
                    if (a.hasOwnProperty("age")) {
                        if (!c.isNumber(a.age)) return "Age must be a number";
                        if (a.age < 0 || a.age > 150) return "Age must be between 0 and 150"
                    }
                    return a.hasOwnProperty("gender") && "undefined" == typeof e.genders[a.gender] ? "Gender is not valid" : a.hasOwnProperty("zip") && !/^[a-zA-Z\d\-\s]{5,10}$/i.test(a.zip) ? "Zip is not valid" : void 0
                }
            })
        }), define("jst!templates/session/load-error.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="sc-session-load-error" class="sc-overlay">\r\n	<h1>Oops!</h1>\r\n\r\n	<p>It looks like we\'re having trouble loading your results. Would you like\r\n	to continue to the Symptom Checker without loading your results', hasReferrer && (__p += " or return to the previous page"), __p += "?</p>\r\n\r\n	<div class='row buttons'>\r\n		<button class='webmd-btn webmd-btn-pr webmd-btn-s continue'>Continue</button>\r\n		", hasReferrer && (__p += '\r\n		<a href="#" class="exit">Go Back</a>\r\n		'), __p += "\r\n	</div>\r\n</div>\r\n";
                return __p
            }
        }), define("views/session/load-error", ["require", "underscore", "backbone", "jst!templates/session/load-error.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("jst!templates/session/load-error.jst");
            return c.View.extend({
                events: {
                    "click .exit": "exit",
                    "click .continue": "continueToApp"
                },
                initialize: function() {
                    b.bindAll(this), this.render(), this.setElement($("#sc-session-load-error"))
                },
                remove: function() {
                    return this.$el.undelegate(), webmd.overlay.close(), this
                },
                render: function() {
                    var a = this,
                        e = d({
                            hasReferrer: !b.isEmpty(c.app.session.get("referrer"))
                        });
                    return webmd.overlay.open({
                        html: e,
                        width: "464px",
                        scrolling: !1,
                        onClosed: function() {
                            a.continueToApp()
                        }
                    }), this
                },
                exit: function() {
                    return c.app.exit(), !1
                },
                continueToApp: function() {
                    return this.remove(), c.app.router.navigate("/introView", !0), !1
                }
            })
        }), define("jst!templates/session/load-person-not-matched.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id='overlay-session-load-person-not-matched' class=\"sc-overlay\">\r\n	<h1>\r\n		", __p += webmd.cookie.exists("WBMD_AUTH") ? "\r\n		Please enter a different person\r\n		" : "\r\n		Please provide a new age and gender\r\n		", __p += "\r\n	</h1>\r\n\r\n	<p>The age and/or gender of the person you entered is not applicable to some\r\n	of the symptoms and conditions in your search.</p>\r\n\r\n	<form>\r\n		<div id='namerow' class='row'>\r\n			<label for='name'>For</label>\r\n\r\n			<select name='id' required></select>\r\n\r\n		", webmd.cookie.exists("WBMD_AUTH") && (__p += '\r\n			<br />\r\n			<a href="#" class="add">Add</a>\r\n		'), __p += "\r\n		</div>\r\n\r\n		<fieldset class='row radio-container'>\r\n			<legend>Gender</legend>\r\n			<div>\r\n				<label>\r\n					<input type=\"radio\" name=\"gender\" value=\"1\" checked=\"checked\"> Male\r\n				</label>\r\n				<label>\r\n					<input type=\"radio\" name=\"gender\" value=\"2\"> Female\r\n				</label>\r\n			</div>\r\n		</fieldset>\r\n\r\n		<div id='agerow' class='row'>\r\n			<label for='age'>Age</label>\r\n			<select name='age' required>\r\n				<option value='' selected='selected'>Choose One</option>\r\n				<option value='0'>Check for Someone 0-2 years</option>\r\n				<option value='3'>Check for Someone 3-6 years</option>\r\n				<option value='7'>Check for Someone 7-12 years</option>\r\n				<option value='13'>13-17 years</option>\r\n				<option value='18'>18-24 years</option>\r\n				<option value='25'>25-34 years</option>\r\n				<option value='35'>35-44 years</option>\r\n				<option value='45'>45-54 years</option>\r\n				<option value='55'>55-64 years</option>\r\n				<option value='65'>Over 65</option>\r\n			</select>\r\n		</div>\r\n\r\n		<div class='row buttons'>\r\n			<button type='submit' class='webmd-btn webmd-btn-pr webmd-btn-s'>Submit</button>\r\n			<a href=\"#\" class=\"cancel\">Cancel</a>\r\n		</div>\r\n	</form>\r\n</div>\r\n";
                return __p
            }
        }), define("views/session/load-person-not-matched", ["require", "underscore", "backbone", "models/person", "views/people/add", "util", "jst!templates/session/load-person-not-matched.jst"], function(a) {
            "use strict";
            var b, c = a("underscore"),
                d = a("backbone"),
                e = a("models/person"),
                f = a("views/people/add"),
                g = a("util"),
                h = a("jst!templates/session/load-person-not-matched.jst");
            return b = d.View.extend({
                events: function() {
                    var a = {
                        "click .cancel": "cancel",
                        "click .add": "add",
                        "change select[name=age]": "onAgeOrGenderChange"
                    };
                    return webmd.cookie.exists("WBMD_AUTH") && c.extend(a, {
                        "change select[name=id]": "updateFields",
                        "change input[type=radio]": "onAgeOrGenderChange"
                    }), a
                },
                submitted: !1,
                initialize: function() {
                    c.bindAll(this), this.render()
                },
                submit: function() {
                    this.submitted = !0;
                    var a = this.values(),
                        b = new e(a),
                        c = b.id === e.ME.id ? "me" : "anmon";
                    return g.metrics.click("start2", c, !0), d.app.session.get("symptomSet").isPersonValid(b, {
                        success: this.onValidationSuccess
                    }), !1
                },
                onValidationSuccess: function(a) {
                    if (a) {
                        var b = this.values(),
                            c = d.app.people.get(b.id);
                        c.setAge(b.age).set({
                            gender: b.gender
                        }), d.app.session.set({
                            person: c
                        }), d.app.session.get("symptomSet").set({
                            person: c
                        })
                    }
                    this.remove(), d.app.session.load()
                },
                cancel: function() {
                    return webmd.overlay.close(), !1
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                add: function() {
                    new f({
                        callback: function() {
                            new b({
                                model: d.app.session
                            })
                        }
                    })
                },
                values: function() {
                    return {
                        id: this.$("select[name=id]").val(),
                        gender: Number(this.$("input[name=gender]:checked").val()),
                        age: this.$("select[name=age]").val()
                    }
                },
                updateFields: function() {
                    var a, b, c, e = this.$("select[name=id]").val();
                    "0" === e || "" === e ? a = b = "" : (c = d.app.people.get(e), b = c.getNormalizedAge(), a = c.get("gender")), this.$("input[name=gender][value=" + a + "]").attr("checked", !0), this.$("select[name=age]").val(b)
                },
                render: function() {
                    var a = this,
                        b = h();
                    return webmd.overlay.open({
                        html: b,
                        width: "464px",
                        scrolling: !1,
                        onClosed: function() {
                            a.submitted || d.app.exit(), a.remove()
                        }
                    }), this.setElement($("#overlay-session-load-person-not-matched")), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !1,
                        invalidHandler: function(a, b) {
                            var c = b.numberOfInvalids();
                            c && ($(".errorWrap").remove(), $.each(b.errorList, function(a) {
                                var c, d;
                                c = $('<div class="errorWrap" />').append(b.errorList[a].message).append('<span class="indicator"><span></span></span>'), d = $(b.errorList[a].element).position(), c.insertAfter($(b.errorList[a].element)).css({
                                    top: d.top,
                                    left: d.left,
                                    marginLeft: $(b.errorList[a].element).width() + 20 + "px"
                                }), $(b.errorList[a].element).bind({
                                    focus: function() {
                                        $(this).hasClass("error") && $(this).next(".errorWrap").show()
                                    },
                                    blur: function() {
                                        $(this).next(".errorWrap").hide()
                                    }
                                })
                            }))
                        },
                        submitHandler: function() {
                            a.submit()
                        },
                        errorPlacement: function() {},
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), this.renderUserSelect(), this
                },
                onAgeOrGenderChange: function() {
                    var a, b = g.isLoggedIn();
                    (b || this.values().age < g.MINIMUM_USER_AGE) && (a = b ? e.ANONYMOUS.id : e.SOMEONE_ELSE.id, this.$("select[name=id]").val(a))
                },
                renderUserSelect: function() {
                    var a = this.$("select[name=id]"),
                        b = d.app.people.active();
                    webmd.cookie.exists("WBMD_AUTH") ? b.push(new e(e.ANONYMOUS)) : b.push(new e(e.ME), new e(e.SOMEONE_ELSE)), a.find("option").remove(), c.each(b, function(b) {
                        a.append($("<option>", {
                            value: b.id
                        }).text(b.getDisplayName()))
                    }), a.trigger("change")
                }
            })
        }), define("jst!templates/session/load-signed-in.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id='overlay-session-loadsignedin' class=\"sc-overlay\">\r\n	<h1>Let&#8217;s get started using the Symptom Checker!</h1>\r\n	<p>Please enter the person you are searching for.</p>\r\n\r\n	<form>\r\n		<div id='namerow' class='row'>\r\n			<label for='name'>For</label>\r\n			<select name='id' required></select>\r\n			<br />\r\n			<a href=\"#\" class=\"add\">Add</a>\r\n		</div>\r\n\r\n		<fieldset class='row radio-container'>\r\n			<legend>Gender</legend>\r\n			<div>\r\n				<label>\r\n					<input type=\"radio\" name=\"gender\" value=\"1\" checked=\"checked\"> Male\r\n				</label>\r\n				<label>\r\n					<input type=\"radio\" name=\"gender\" value=\"2\"> Female\r\n				</label>\r\n			</div>\r\n		</fieldset>\r\n\r\n		<div id='agerow' class='row'>\r\n			<label for='age'>Age</label>\r\n			<select name='age' required>\r\n				<option value='' selected='selected'>Choose One</option>\r\n				<option value='0'>Check for Someone 0-2 years</option>\r\n				<option value='3'>Check for Someone 3-6 years</option>\r\n				<option value='7'>Check for Someone 7-12 years</option>\r\n				<option value='13'>13-17 years</option>\r\n				<option value='18'>18-24 years</option>\r\n				<option value='25'>25-34 years</option>\r\n				<option value='35'>35-44 years</option>\r\n				<option value='45'>45-54 years</option>\r\n				<option value='55'>55-64 years</option>\r\n				<option value='65'>Over 65</option>\r\n			</select>\r\n		</div>\r\n\r\n		<div class='row buttons'>\r\n			<button type='submit' class='webmd-btn webmd-btn-pr webmd-btn-s'>Submit</button>\r\n			<a href=\"#\" class=\"cancel\">Cancel</a>\r\n		</div>\r\n	</form>\r\n</div>\r\n";

                return __p
            }
        }), define("views/session/load-signed-in", ["require", "underscore", "backbone", "models/person", "util", "jst!templates/session/load-signed-in.jst", "views/people/add"], function(a) {
            "use strict";
            var b, c = a("underscore"),
                d = a("backbone"),
                e = a("models/person"),
                f = a("util"),
                g = a("jst!templates/session/load-signed-in.jst"),
                h = a("views/people/add");
            return b = d.View.extend({
                events: {
                    "click .cancel": "cancel",
                    "click .add": "add",
                    "change select[name=id]": "updateFields",
                    "change input[type=radio]": "resetPersonSelect",
                    "change select[name=age]": "resetPersonSelect"
                },
                submitted: !1,
                initialize: function() {
                    c.bindAll(this), this.render()
                },
                submit: function() {
                    this.submitted = !0;
                    var a, b = this.values(),
                        c = d.app.people.get(b.id);
                    return c.isAnonymous() ? (a = "anmon", c = new e({
                        gender: b.gender
                    }), c.setAge(b.age)) : a = c.get("relationship") === e.RELATION_SELF ? "me" : "ausr", f.metrics.click("start2", a, !0), d.app.session.get("symptomSet").isPersonValid(c, {
                        success: this.onValidationSuccess
                    }), !1
                },
                onValidationSuccess: function(a) {
                    var b, c;
                    a && (b = this.values(), c = d.app.people.get(b.id), c.isAnonymous() && c.setAge(b.age).set({
                        gender: b.gender
                    }), this.model.set({
                        person: c
                    }), this.remove(), this.model.get("symptomSet").set({
                        person: c
                    })), d.app.session.load()
                },
                values: function() {
                    return {
                        id: this.$("select[name=id]").val(),
                        gender: Number(this.$("input[name=gender]:checked").val()),
                        age: this.$("select[name=age]").val()
                    }
                },
                cancel: function() {
                    return this.remove(), !1
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    var a = this,
                        b = g();
                    return webmd.overlay.open({
                        html: b,
                        width: "464px",
                        scrolling: !1,
                        onClosed: function() {
                            a.submitted || d.app.exit()
                        }
                    }), this.setElement($("#overlay-session-loadsignedin")), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !1,
                        invalidHandler: function(a, b) {
                            var c = b.numberOfInvalids();
                            c && ($(".errorWrap").remove(), $.each(b.errorList, function(a) {
                                var c, d;
                                c = $('<div class="errorWrap" />').append(b.errorList[a].message).append('<span class="indicator"><span></span></span>'), d = $(b.errorList[a].element).position(), c.insertAfter($(b.errorList[a].element)).css({
                                    top: d.top,
                                    left: d.left,
                                    marginLeft: $(b.errorList[a].element).width() + 20 + "px"
                                }), $(b.errorList[a].element).bind({
                                    focus: function() {
                                        $(this).hasClass("error") && $(this).next(".errorWrap").show()
                                    },
                                    blur: function() {
                                        $(this).next(".errorWrap").hide()
                                    }
                                })
                            }))
                        },
                        submitHandler: function() {
                            a.submit()
                        },
                        errorPlacement: function() {},
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), this.renderUserSelect(), this
                },
                renderUserSelect: function() {
                    var a, b, f;
                    a = this.$("select[name=id]"), b = d.app.people.active(), b.push(new e(e.ANONYMOUS)), this.collection && 1 === this.collection.length && (f = this.collection.at(0).getDisplayName()), a.find("option").remove(), c.each(b, function(b) {
                        var c = {
                            value: b.id
                        };
                        f === b.getDisplayName() && (c.selected = "selected"), a.append($("<option>", c).text(b.getDisplayName()))
                    }), a.trigger("change")
                },
                add: function() {
                    new h({
                        callback: function(a) {
                            a = a || {}, a.model = d.app.session, new b(a)
                        }
                    })
                },
                resetPersonSelect: function() {
                    this.$("select[name=id]").val(e.ANONYMOUS.id)
                },
                updateFields: function() {
                    var a, b, c, f = this.$("select[name=id]").val();
                    f === e.ANONYMOUS.id || "" === f ? a = b = "" : (c = d.app.people.get(f), b = c.getNormalizedAge(), a = c.get("gender")), this.$("input[name=gender][value=" + a + "]").attr("checked", !0), this.$("select[name=age]").val(b)
                }
            })
        }), define("jst!templates/session/load-not-signed-in.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += "<div id=\"overlay-session-loadnotsignedin\" class=\"sc-overlay\">\r\n	<h1>Let&#8217;s get started using the Symptom Checker!</h1>\r\n	<p>Please provide an age &amp; gender</p>\r\n\r\n	<form>\r\n		<div id='namerow' class='row'>\r\n			<label for='name'>For</label>\r\n			<select required name='id'>\r\n				<option value=\"\" selected='selected'>Select</option>\r\n				<option value=\"1\">Me</option>\r\n				<option value=\"0\">Someone Else</option>\r\n			</select>\r\n		</div>\r\n\r\n		<fieldset class='row radio-container'>\r\n			<legend>Gender</legend>\r\n			<div>\r\n				<label>\r\n					<input type=\"radio\" name=\"gender\" value=\"1\" checked=\"checked\"> Male\r\n				</label>\r\n				<label>\r\n					<input type=\"radio\" name=\"gender\" value=\"2\"> Female\r\n				</label>\r\n			</div>\r\n		</fieldset>\r\n\r\n		<div id='agerow' class='row'>\r\n			<label for='age'>Age</label>\r\n			<select name='age' required>\r\n				<option value='' selected='selected'>Choose One</option>\r\n				<option value='0'>Check for Someone 0-2 years</option>\r\n				<option value='3'>Check for Someone 3-6 years</option>\r\n				<option value='7'>Check for Someone 7-12 years</option>\r\n				<option value='13'>13-17 years</option>\r\n				<option value='18'>18-24 years</option>\r\n				<option value='25'>25-34 years</option>\r\n				<option value='35'>35-44 years</option>\r\n				<option value='45'>45-54 years</option>\r\n				<option value='55'>55-64 years</option>\r\n				<option value='65'>Over 65</option>\r\n			</select>\r\n		</div>\r\n\r\n		<div class='row buttons'>\r\n			<button type='submit' class='webmd-btn webmd-btn-pr webmd-btn-s'>Submit</button>\r\n			<a href=\"#\" class=\"cancel\">Cancel</a>\r\n		</div>\r\n	</form>\r\n</div>\r\n";
                return __p
            }
        }), define("views/session/load-not-signed-in", ["require", "underscore", "backbone", "models/person", "util", "jst!templates/session/load-not-signed-in.jst"], function(a) {
            "use strict";
            var b = a("underscore"),
                c = a("backbone"),
                d = a("models/person"),
                e = a("util"),
                f = a("jst!templates/session/load-not-signed-in.jst");
            return c.View.extend({
                events: {
                    "click .cancel": "cancel",
                    "change select[name=id]": "onIdChange",
                    "change select[name=age]": "onAgeChange"
                },
                submitted: !1,
                initialize: function() {
                    b.bindAll(this), this.render()
                },
                values: function() {
                    return {
                        id: this.$("select[name=id]").val(),
                        gender: Number(this.$("input[name=gender]:checked").val()),
                        age: this.$("select[name=age]").val()
                    }
                },
                submit: function() {
                    this.submitted = !0;
                    var a = this.values(),
                        b = new d,
                        f = a.id === d.ME.id ? "me" : "anmon";
                    return b.setAge(a.age).set({
                        gender: a.gender
                    }), e.metrics.click("start2", f, !0), c.app.session.get("symptomSet").isPersonValid(b, {
                        success: this.onValidationSuccess
                    }), !1
                },
                onValidationSuccess: function(a) {
                    if (a) {
                        var b = this.values(),
                            d = c.app.people.get(b.id);
                        d.setAge(b.age).set({
                            gender: b.gender
                        }), c.app.session.set({
                            person: d
                        }), c.app.session.get("symptomSet").set({
                            person: d
                        })
                    }
                    this.remove(), c.app.session.load()
                },
                cancel: function() {
                    return this.remove(), !1
                },
                remove: function() {
                    return this.$("form").die("submit"), this.$el.undelegate().remove(), webmd.overlay.close(), this
                },
                render: function() {
                    var a = this,
                        b = f();
                    return webmd.overlay.open({
                        html: b,
                        width: "464px",
                        scrolling: !1,
                        onClosed: function() {
                            a.submitted || c.app.exit()
                        }
                    }), this.setElement($("#overlay-session-loadnotsignedin")), this.$("form").validate({
                        errorElement: "span",
                        focusInvalid: !1,
                        invalidHandler: function(a, b) {
                            var c = b.numberOfInvalids();
                            c && ($(".errorWrap").remove(), $.each(b.errorList, function(a) {
                                var c = $('<div class="errorWrap" />').append(b.errorList[a].message).append('<span class="indicator"><span></span></span>'),
                                    d = $(b.errorList[a].element).position();
                                c.insertAfter($(b.errorList[a].element)).css({
                                    top: d.top,
                                    left: d.left,
                                    marginLeft: $(b.errorList[a].element).width() + 20 + "px"
                                }), $(b.errorList[a].element).bind({
                                    focus: function() {
                                        $(this).hasClass("error") && $(this).next(".errorWrap").show()
                                    },
                                    blur: function() {
                                        $(this).next(".errorWrap").hide()
                                    }
                                })
                            }))
                        },
                        submitHandler: function() {
                            a.submit()
                        },
                        errorPlacement: function() {},
                        unhighlight: function(a, b, c) {
                            $(a).removeClass(b).addClass(c).next(".errorWrap").hide(), $(a.form).find("label[for=" + a.id + "]").removeClass(b)
                        }
                    }), this
                },
                onIdChange: function() {
                    this.values().age < e.MINIMUM_USER_AGE && this.$("select[name=age]").val("")
                },
                onAgeChange: function() {
                    this.values().age < e.MINIMUM_USER_AGE && this.$("select[name=id]").val(d.SOMEONE_ELSE.id)
                }
            })
        }), define("models/session", ["require", "underscore", "backbone", "models/condition", "models/symptomset", "models/person", "collections/symptoms", "views/session/load-error", "views/session/load-person-not-matched", "views/session/load-signed-in", "views/session/load-not-signed-in", "views/symptomsets/save-signed-in-anonymous", "util"], function(a) {
            "use strict"; {
                var b = a("underscore"),
                    c = a("backbone"),
                    d = a("models/condition"),
                    e = a("models/symptomset"),
                    f = a("models/person"),
                    g = a("collections/symptoms"),
                    h = a("views/session/load-error"),
                    i = a("views/session/load-person-not-matched"),
                    j = a("views/session/load-signed-in"),
                    k = a("views/session/load-not-signed-in"),
                    l = a("views/symptomsets/save-signed-in-anonymous");
                a("util")
            }
            return c.Model.extend({
                cookie: "WBMD_SC",
                defaults: function() {
                    var a, b;
                    return a = c.app.people.find(function(a) {
                        return a.isVisible()
                    }), b = {
                        condition: new d,
                        symptomSet: new e,
                        person: a,
                        isSavingSymptoms: !1,
                        referrer: null,
                        symptomSetLocked: !1,
                        haveShownHelp: !1,
                        selectedBodyPart: null
                    }
                },
                loadAttempts: 0,
                MAX_LOAD_ATTEMPTS: 2,
                initialize: function() {
                    b.bindAll(this), this.on("update:person", this.onPersonUpdate).on("change:symptomSet", this.onSymptomSetChange).on("change:symptomSet change:isSavingSymptoms change:condition change:haveShownHelp", this.save).on("change:condition", this.fetchCondition).on("change:condition", this.submitConditionToLotame), this.on("change:symptomSet", this._bindSymptomEvents), this.onPersonUpdate(), this._bindSymptomEvents(), c.on("startOver", this.onStartOver), c.app.router.on("route:intro route:symptoms", this.unsetCondition), c.app.people.on("before:destroy", this.onBeforePersonDestroy), c.app.meta.on("change:instanceId", this.onMetaInstanceIdChange)
                },
                onPersonUpdate: function() {
                    var a = this.get("person");
                    this.stopListening(null, null, this.onPersonChange), this.listenTo(a, "change", this.onPersonChange), this.onPersonChange(a)
                },
                onPersonChange: function(a) {
                    this.setProp40(), this.submitPersonToLotame(a), this.save()
                },
                _bindSymptomEvents: function() {
                    var a = this.get("symptomSet"),
                        b = a.get("symptoms");
                    this.stopListening(null, null, this.unlockSymptomSet), this.listenTo(a, "change:id", this.unlockSymptomSet), this.stopListening(null, null, this.onSymptomsAll), this.stopListening(null, null, this.submitSymptomToLotame), this.listenTo(b, "all", this.onSymptomsAll), this.listenTo(b, "add", this.submitSymptomToLotame)
                },
                onSymptomsAll: function() {
                    this.save()
                },
                onStartOver: function() {
                    var a = this.defaults();
                    return delete a.person, delete a.haveShownHelp, this.set(a)
                },
                onSymptomSetChange: function() {
                    this.set({
                        symptomSetLocked: !this.get("symptomSet").isNew()
                    })
                },
                unlockSymptomSet: function() {
                    var a, b = this.get("symptomSet"),
                        d = b.person(),
                        f = b.get("symptoms").toJSON();
                    c.trigger("unlockSymptomSet", b), a = new e({
                        datagroup: d.id,
                        person: d,
                        symptoms: new g(f)
                    }), a.isClone = !0, this.set({
                        symptomSet: a
                    })
                },
                unsetCondition: function() {
                    return this.set({
                        condition: this.defaults().condition
                    })
                },
                onBeforePersonDestroy: function(a) {
                    this.get("person") === a && this.set("person", c.app.people.self())
                },
                onMetaInstanceIdChange: function() {
                    this.get("person").isVisible() || this.set("person", this.defaults().person)
                },
                fetchCondition: function() {
                    var a = this;
                    this.get("condition").isNew() || b.defer(function() {
                        a.get("condition").fetch()
                    })
                },
                save: function() {
                    return c.app.options.isWidget ? void 0 : webmd.cookie.setJson(this.cookie, this.toJSON(), {
                        scramble: !0,
                        expires: 30
                    })
                },
                destroy: function() {
                    return webmd.cookie.deleteCookie(this.cookie)
                },
                load: function() {
                    var a = this,
                        b = this.get("person"),
                        d = !this.get("condition").isNew(),
                        e = this.get("symptomSet").get("session_data").length || this.get("symptomSet").get("symptoms").length > 0,
                        f = b.has("gender") && b.hasAge();
                    if (!c.app.loader.source) return void c.app.router.navigate("/introView", !0);
                    if (d || e) {
                        if (d || e) {
                            if (a.set("haveShownHelp", !0), !f) return a.loadAttempts++, a.loadAttempts > a.MAX_LOAD_ATTEMPTS ? new h : a.loadAttempts > 1 ? new i({
                                model: a
                            }) : c.app.isLoggedIn() ? new j({
                                model: a
                            }) : new k({
                                model: a
                            });
                            if (!this.get("symptomSet").isHydrated()) return this.get("symptomSet").hydrate({
                                success: a.load
                            });
                            this.has("selectedBodyPart") && (c.app.view.Subviews.symptoms.views.availableSymptoms.displayBodyPartName(this.get("selectedBodyPart")), c.app.availableSymptoms.fetch({
                                bodypartid: this.get("selectedBodyPart")
                            })), d ? c.app.conditions.fetch({
                                success: function() {
                                    c.app.conditions.where({
                                        condition_chronic_id: a.get("condition").id
                                    })[0].view.load()
                                }
                            }) : (a.trigger("update:symptomSet", a, a.get("symptomSet")), c.app.conditions.fetch(), c.app.router.navigate("/symptomsView", !0)), this.get("isSavingSymptoms") && (new l, a.set({
                                isSavingSymptoms: !1
                            }).destroy())
                        }
                    } else c.app.loader.source === c.app.loader.SOURCE_EXTERNAL_MODULE ? c.app.router.navigate("/symptomsView", !0) : c.app.router.navigate("/introView", !0)
                },
                toJSON: function() {
                    var a = c.Model.prototype.toJSON.call(this);
                    return b.each(["condition", "person", "symptomSet"], function(b) {
                        a[b] = a[b].toJSON()
                    }), b.each(a.symptomSet, function(c, d) {
                        b.contains(["id", "symptoms"], d) || delete a.symptomSet[d]
                    }), b.each(a.symptomSet.symptoms, function(a) {
                        a.bpid = a.bodyPartID, a.qq = [], b.each(a.qualifierclasses, function(c) {
                            b.each(c.quals, function(b) {
                                b.selected && "0" !== b.id && a.qq.push({
                                    qid: b.id
                                })
                            })
                        }), b.each(b.keys(a), function(c) {
                            -1 === b.indexOf(["sid", "bpid", "qq"], c) && delete a[c]
                        })
                    }), a.symptoms = $.extend(!0, [], a.symptomSet.symptoms), b.each(b.keys(a.person), function(c) {
                        -1 === b.indexOf(["id", "firstName", "gender", "relationship", "dOB", "mOB", "yOB"], c) && delete a.person[c]
                    }), a.condition && a.condition.id && (a.conditionId = a.condition.id), b.each(["condition", "referrer", "symptomSet", "symptomSetLocked"], function(b) {
                        delete a[b]
                    }), a
                },
                setProp40: function() {
                    if (!this.get("person").hasAge()) return !1;
                    var a = this.getProp40Value();
                    window.s_md.prop40 = a
                },
                getProp40Value: function() {
                    var a = /webmd\.com$/.test(document.location.hostname),
                        b = 1 === Number(this.get("person").get("gender")) ? "m" : "f",
                        c = f.ageRange(this.get("person").getAge()),
                        d = "coresc";
                    return a || (d = "oosc"), c = c.replace("Check for Someone ", "").replace(" years", ""), "seg_sc-" + d + "_" + b + "-" + c
                },
                submitPersonToLotame: function(a) {
                    var c, d;
                    if (!a.hasAge()) return !1;
                    if (d = new RegExp(/(\d+-\d+)/), c = d.exec(f.ageRange(a.getAge())), b.isArray(c) && (c = c[0]), !c) {
                        if (isNaN(a.getAge())) return !1;
                        c = a.getAge()
                    }
                    65 == c && (c += "+");
                    var e = {
                        age: c,
                        gender: a.get("gender") === f.GENDER_MALE ? "Male" : "Female",
                        caregiver: "Me" === a.get("firstName") ? "Me" : "Someone Else"
                    };
                    this.submitToLotame(e)
                },
                submitSymptomToLotame: function(a) {
                    var b = parseInt(a.id.replace(/^\d+-/, ""));
                    this.submitToLotame({
                        symptom: b
                    })
                },
                submitConditionToLotame: function(a, b) {
                    var c, d = 0,
                        e = this;
                    return b.isNew() ? !1 : void(c = setInterval(function() {
                        b.get("condition_id") && (e.submitToLotame({
                            condition: b.get("condition_id")
                        }), clearInterval(c)), 20 == d && clearInterval(c), d++
                    }, 200))
                },
                submitToLotame: function(a) {
                    "object" == typeof LOTCC && "object" == typeof webmd.personal ? (webmd.debug("Lotame global object found, calling SC/models/session/submitToLotame. Submitting the following data: ", a), webmd.personal.push(a), webmd.personal.submit()) : webmd.debug("%c WARNING: SC/models/session/submitToLotame called, but Lotame global object not found. This is expected on first call, should not happen on subsequent calls.", "color: red")
                }
            })
        }), define("lib/backbone.xdm", ["underscore", "backbone", "util", "easyXDM"], function(a, b, c, d) {
            "use strict";
            var e, f, g, h = b.sync;
            e = {
                create: "POST",
                update: "PUT",
                patch: "PATCH",
                "delete": "DELETE",
                read: "GET"
            }, f = function() {
                throw new Error('A "url" property or function must be specified')
            }, g = function(a) {
                var b = document.createElement("a");
                return b.href = a, b.host !== document.location.host || b.protocol !== document.location.protocol
            }, b.sync = function(b, i, j) {
                var k, l, m;
                return j.url || (j.url = a.result(i, "url") || f()), g(j.url) ? (j.method = j.type || e[b], j.contentType && (j.headers = {
                    "Content-Type": j.contentType
                }, /^application\/json/.test(j.contentType) && (j.headers.Accept = "application/json")), k = new d.Rpc({
                    remote: "https://www" + c.getLifecycle() + c.getEnv() + ".webmd.com/xdm"
                }, {
                    remote: {
                        request: {}
                    }
                }), l = j.success, j.success = function(a) {
                    var b;
                    b = j.dataType && "text" === j.dataType ? String(a.data) : /^text\/xml/.test(a.headers["Content-Type"]) ? $.parseXML(a.data) : $.parseJSON(a.data), l && l(i, b, j), i.trigger("sync", i, b, j)
                }, m = j.error, j.error = function() {
                    m && m(i, k, j), i.trigger("error", i, k, j)
                }, k.request(j, j.success, j.error), i.trigger("request", i, k, j), k) : h(b, i, j)
            }
        }), define("application", ["require", "jquery", "underscore", "backbone", "router", "collections/people", "collections/meta", "collections/symptomsets", "collections/availablesymptoms", "collections/scapp/conditions", "views/application", "views/loader", "models/sessionloader", "models/session", "models/person", "util", "views/report", "lib/backbone.xdm", "webmd.papi", "swfobject"], function(a) {
            "use strict";
            var b, c = a("jquery"),
                d = a("underscore"),
                e = a("backbone"),
                f = a("router"),
                g = a("collections/people"),
                h = a("collections/meta"),
                i = a("collections/symptomsets"),
                j = a("collections/availablesymptoms"),
                k = a("collections/scapp/conditions"),
                l = a("views/application"),
                m = a("views/loader"),
                n = a("models/sessionloader"),
                o = a("models/session"),
                p = a("models/person"),
                q = a("util"),
                r = a("views/report");
            return a("lib/backbone.xdm"), a("webmd.papi"), a("swfobject"), b = function(a) {
                var b, s = this;
                return e.app = this, d.defaults(a || (a = {}), this.defaults), a.initialgender = "M" === a.initialgender ? p.GENDER_MALE : p.GENDER_FEMALE, p.ME.gender = a.initialgender, s.options = a, -1 !== window.location.pathname.indexOf("/sc-print") ? c(function() {
                    new r
                }) : (window.location.hash && (window.location.hash = "/"), webmd.papi.timeout = q.DEFAULT_TIMEOUT, b = null !== navigator.userAgent.match(/iPad/i), b && (c.colorbox.settings.transition = "none"), s.flashImages = {}, s.router = new f, s.offlineMode = !1, s.emailAddressesRegistered = [], e.history.start({
                    silent: !0
                }), s.people = (new g).load(), s.meta = (new h).load(), s.symptomSets = (new i).load(), s.availableSymptoms = new j, s.loaderView = new m, s.loader = new n, void c.when(s.people.deferred, s.meta.deferred, s.symptomSets.deferred).done(function() {
                    s.loader.fetch({
                        success: function(a) {
                            c(function() {
                                s.session = new o(a), s.conditions = new k, s.loaderView.remove(), s.view = new l({
                                    el: "#sc_fmt"
                                }), s.session.load()
                            })
                        }
                    })
                }))
            }, b.prototype.defaults = {
                el: "#sc_fmt",
                clientid: null,
                locale: "us",
                initialgender: "M"
            }, b.prototype.isLoggedIn = function() {
                return !this.options.isWidget && !this.offlineMode && webmd.cookie.exists("WBMD_AUTH")
            }, b.prototype.exit = function() {
                var a = this.session.get("referrer");
                return a ? (this.session.clear(), void(window.location.href = a)) : !1
            }, b
        }), define("jst!templates/app.jst", ["underscore"], function(_) {
            return function(obj) {
                {
                    var __t, __p = "";
                    Array.prototype.join
                }
                with(obj || {}) __p += '<div id="sc_fmt" class="cf">\r\n	<div id="sc_hdr">\r\n		<h1><span>WebMD Symptom Checker</span></h1>\r\n		<ul class="person">\r\n			<li class="name"><strong>Name:</strong> <span></span></li>\r\n			<li class="sex"><strong>Gender:</strong> <span></span></li>\r\n			<li class="age"><strong>Age:</strong> <span></span></li>\r\n		</ul>\r\n		<ul class="sc_sub_menu">\r\n			<li class="take_tour"><a href="#" id="take_tour">Take the Tour</a></li>\r\n			<li class="save"><a href="#" id="savesymptoms" class="disabled">Save Symptoms</a></li>\r\n			<li class="print"><a href="#" id="print_main" class="disabled">Print</a></li>\r\n			<li class="startover"><a href="#" id="startover">Start Over</a></li>\r\n			<li class="edit-symptoms"><a href="#">Edit Symptoms</a></li>\r\n		</ul>\r\n		<ul id="sc_print_menu">\r\n			<li class="print_doctor_rpt"><a href="#" id="print_doctor_rpt" title="A summary of your symptoms to share with your doctor.">Print Doctor\'s Report</a></li>\r\n			<li class="print_symptom_rpt"><a href="#" id="print_symptom_rpt" title="Your personal summary with symptom and condition information.">Print Your Symptom Report</a></li>\r\n		</ul>\r\n	</div>\r\n	<div id="sc_container">\r\n\r\n		<div id="sc-loader">\r\n			<div class="loading_large"></div>\r\n		</div>\r\n\r\n		<div id="view-intro" class="page">\r\n\r\n			<div class="value-prop">\r\n				<canvas id="value-prop" width="380" height="524"></canvas>\r\n			</div>\r\n\r\n			<div class="content">\r\n\r\n				<div class="form column">\r\n					<h2 class="ir sprite">WebMD Symptom Checker</h2>\r\n\r\n					<p class="promo">Take the first step and see what could be causing your symptoms.\r\n					Then learn about possible next steps.</p>\r\n\r\n					<form action="#/symptomsView">\r\n						<div class="row">\r\n							<label for="person-id" class="row-label">For</label>\r\n							<select id="person-id" name="person"></select>\r\n						</div>\r\n\r\n						<ul class="modify-persons">\r\n							<li>\r\n								<a href="#" class="add">Add</a>\r\n							</li>\r\n							<li>\r\n								<a href="#" class="edit">Edit</a>\r\n							</li>\r\n							<li>\r\n								<a href="#" class="hide">Hide</a>\r\n							</li>\r\n						</ul>\r\n\r\n						<div class="row row-gender">\r\n							<fieldset>\r\n								<legend class="row-label">Gender</legend>\r\n								<label>\r\n									<input type="radio" name="gender" value="1" checked="checked" /> Male\r\n								</label>\r\n								<label>\r\n									<input type="radio" name="gender" value="2" /> Female\r\n								</label>\r\n							</fieldset>\r\n						</div>\r\n\r\n						<div class="row">\r\n							<label for="person-age" class="row-label">Age</label>\r\n							<select id="person-age" name="age" required>\r\n								<option value="">Choose one</option>\r\n							</select>\r\n						</div>\r\n\r\n						<div class="row">\r\n							<label for="person-zip" class="row-label">Zip code</label>\r\n							<input id="person-zip" type="text" name="zip" maxlength="10" placeholder="Optional" />\r\n						</div>\r\n\r\n						<div class="row email-container">\r\n							<label for="person-email" class="row-label">Email</label>\r\n							<input id="person-email" type="email" name="emailAddress" placeholder="Optional" />\r\n						</div>\r\n\r\n						<p class="email-promo"></p>\r\n\r\n						<button type="submit" class="webmd-btn webmd-btn-pr webmd-btn-m">Submit</button>\r\n					</form>\r\n\r\n					<p class="call-to-login logged-out-only">If you are a WebMD member, <a href="#" class="sign-in">sign in</a> to save your Symptom Checker history.</p>\r\n\r\n				</div><!-- /.form -->\r\n\r\n				<div class="saved-symptoms">\r\n\r\n					<table>\r\n						<caption>Saved Symptom(s) History <a href="#" class="toggle">Hide</a></caption>\r\n						<thead>\r\n							<tr>\r\n								<th>Date</th>\r\n								<th>Previous Symptom(s) List</th>\r\n								<th>Name</th>\r\n								<th></th>\r\n							</tr>\r\n						</thead>\r\n						<tbody></tbody>\r\n						<tfoot>\r\n							<tr>\r\n								<td colspan="4"></td>\r\n							</tr>\r\n						</tfoot>\r\n					</table>\r\n\r\n				</div><!-- /.saved-symptoms -->\r\n\r\n			</div><!-- /.content -->\r\n\r\n		</div><!-- /#view-intro -->\r\n\r\n		<div id="view-symptoms" class="page">\r\n\r\n			<div id="choose-symptoms" class="column">\r\n\r\n				<div class="header">\r\n					<h3 data-index="1">Choose Symptom(s)</h3>\r\n				</div>\r\n\r\n				<div class="content">\r\n					<div class="body-map-container">\r\n\r\n						<canvas id="bodymap-male" class="bodymap" width="228" height="315"></canvas>\r\n						<canvas id="bodymap-female" class="bodymap" width="228" height="315"></canvas>\r\n\r\n						<div class="search-and-more">\r\n\r\n							<div class="other-symptoms">\r\n								<h4>Don\'t know where to point?</h4>\r\n								<p><a href="#" class="see-more">More symptoms here</a></p>\r\n								<button class="general-symptoms see-more ir">More symptoms here</button>\r\n							</div>\r\n							<div class="other-symptoms-arrow"></div>\r\n\r\n							<form>\r\n								<input type="text" placeholder="Search Symptoms" />\r\n								<button type="submit" class="ir sprite">Submit</button>\r\n							</form>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="symptoms">\r\n						<h3 class="body-part-name"></h3>\r\n						<ul class="selectable"></ul>\r\n						<div class="loading"></div>\r\n						<div class="message-container no-results">\r\n							<p>There are no symptoms that match your search.\r\n							Please search again or try locating your symptoms\r\n							using the body image.</p>\r\n						</div>\r\n						<div class="message-container error">\r\n							<p>Unable to load symptoms. Please try again.</p>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="symptoms-locked">\r\n						<div class="content">\r\n							<p>You are viewing your previous symptoms.*</p>\r\n							<p>Would you like to add more symptoms?</p>\r\n\r\n							<button class="webmd-btn webmd-btn-pr webmd-btn-s">Yes</button>\r\n\r\n							<a href="#">*Find out why your possible conditions may be different.</a>\r\n						</div>\r\n					</div>\r\n				</div><!-- /.content -->\r\n\r\n				<div class="step-help">\r\n					<h4>Step 1</h4>\r\n					<button></button>\r\n					<p>Click on the body to find and choose symptoms, or select from any of the categories below.</p>\r\n				</div>\r\n\r\n			</div>\r\n\r\n			<div id="your-choices" class="column">\r\n\r\n				<div class="header">\r\n					<h3 data-index="2">Your Choices</h3>\r\n					<span class="count">0</span>\r\n				</div>\r\n\r\n				<ul class="selectable"></ul>\r\n\r\n				<div class="step-help">\r\n					<h4>Step 2</h4>\r\n					<p>Review your symptom choices.</p>\r\n				</div>\r\n\r\n			</div>\r\n\r\n			<div class="column" id="possible-conditions">\r\n\r\n				<div class="header">\r\n					<h3 data-index="3">Possible Conditions</h3>\r\n					<span class="count">0</span>\r\n					<button class="help">?</button>\r\n				</div>\r\n\r\n				<ul class="selectable"></ul>\r\n				<div class="loading"></div>\r\n\r\n				<div id="l_col">\r\n					<p><a href="#" id="edit-symptoms">Edit Symptoms</a></p>\r\n				</div>\r\n\r\n				<div class="step-help">\r\n					<h4>Step 3</h4>\r\n					<p>Select from the list of possible conditions to learn more.</p>\r\n				</div>\r\n\r\n			</div>\r\n\r\n		</div><!-- /#view-symptoms -->\r\n\r\n		<div id="view-condition" class="page">\r\n			<div class="loading_large"></div>\r\n			<div class="condition_error">\r\n				<h3>Error</h3>\r\n				<h4>We\'re sorry, there has been an internal error.</h4>\r\n				<p>If the error persists, please <a href="/www/about-webmd-policies/about-contact-us" target="_blank">contact us</a>.</p>\r\n			</div>\r\n			<div id="c_col"></div>\r\n			<div id="r_col"></div>\r\n		</div><!-- /#view-condition -->\r\n\r\n		<div id="flash-right-rail">\r\n			<a href="#" class="take-tour">Take the Tour</a>\r\n		</div>\r\n	</div>\r\n\r\n	<div id="bodymap-tooltip"></div>\r\n\r\n	<div id="sc2_print_fmt">\r\n		<div id="hdr">\r\n			<h1>WebMD Symptom Checker</h1>\r\n			<div id="logo" class=""> <a href="' + (null == (__t = BASE_URL) ? "" : __t) + "/symptoms/coresc/landing\" onclick=\"sl(this,'','logo');\"> <img src=\"" + (null == (__t = IMAGE_SERVER_URL) ? "" : __t) + '/webmd/consumer_assets/site_images/symptom_checker/images/printer_friendly_hdr.gif" alt="WebMD: Better Information. Better Health." width="304" height="28" border="0" class="logo_symptom_rdr"/> </a> </div>\r\n\r\n			<p class="patient-only patient-funded">This content is selected and controlled by WebMD\'s editorial staff and is funded by Curezol</p>\r\n			<div id="doctor-intro" class="doctor-only">\r\n				<h2>Dear Doctor,</h2>\r\n				<p>Your patient completed an online symptom interview at WebMD.com. This tool is designed to help your patients efficiently communicate relevant health information related to you. For your convenience, a transcript of their session is provided below.</p>\r\n			</div>\r\n			<h2 class="patient-only">Patient Report</h2>\r\n		</div>\r\n		<div class="clearer">&nbsp;</div>\r\n\r\n		<div id="c_col">\r\n			<div id="user-profile">\r\n				<div id="user-name-container">\r\n					<label>Name:</label>\r\n					<span class="not-anonymous" id="user-name"></span>\r\n					<input type=\'text\' class="anonymous" maxlength="24" size="30" />\r\n				</div>\r\n				<div id="user-age-container">\r\n					<label id="user-age-label"></label>\r\n					<span id="user-age"></span>\r\n				</div>\r\n				<div id="user-gender-container">\r\n					<label>Gender:</label>\r\n					<span id="user-gender"></span>\r\n				</div>\r\n				<div id="date-reported-symptoms-container">\r\n					<label>Date of Reported Symptoms:</label>\r\n					<span id="date-reported-symptoms"></span>\r\n				</div>\r\n			</div>\r\n\r\n			<div class="c_mod" id="reported-symptoms">\r\n				<h3>Reported Symptoms</h3>\r\n				<table cellpadding="0" cellspacing="0" border="0">\r\n					<thead>\r\n						<tr>\r\n							<th>Symptoms</th>\r\n							<th>Location</th>\r\n							<th>Questions</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody>\r\n					</tbody>\r\n				</table>\r\n			</div>\r\n\r\n			<div class="c_mod patient-only" id="conditions">\r\n				<h3>Possible Conditions</h3>\r\n				<table cellpadding="0" cellspacing="0" border="0">\r\n					<thead>\r\n						<tr>\r\n							<th>Condition</th>\r\n							<th>Description</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody>\r\n					</tbody>\r\n				</table>\r\n			</div>\r\n\r\n			<div id="ftr">\r\n				<p>WebMD does not endorse any specific product, service or treatment.<br />\r\n					&copy;2013 WebMD, LLC. All rights reserved.</p>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n';
                return __p
            }
        });
    var image_server_url, scripts = document.getElementsByTagName("script"),
        index = _.indexOf(scripts, _.find(scripts, function(a) {
            var b = /symptomchecker(\.min\d*)?\.js/;
            return b.test(a.src) === !0
        }));
    if (webmd.ads2 && webmd.ads2.isInitialized() && webmd.ads2.disableInitialLoad(), void 0 !== index && index >= 0) var self = scripts[index],
        image_server_url = new RegExp(/\/\/(img|js)\.?([a-z0-9]+)?\.?([a-z0-9]+)?\.webmd\.com\/dtmcms\/(live|preview|staging)/g).exec(self.src)[0];
    require.config({
        config: {
            util: {
                image_server_url: image_server_url
            }
        },
        paths: {
            easyXDM: image_server_url + "/webmd/PageBuilder_Assets/JS_static/api/xdm/easyXDM",
            "newsletter/1/service": image_server_url + "/webmd/consumer_assets/site_images/amd_modules/newsletter/1/service",
            swfobject: image_server_url + "/webmd/PageBuilder_Assets/JS_static/swfobject",
            "webmd.papi": image_server_url + "/webmd/PageBuilder_Assets/JS_static/api/webmd.papi"
        },
        shim: {
            easyXDM: {
                exports: "easyXDM"
            },
            swfobject: {
                exports: "SWFObject"
            },
            "webmd.papi": {
                exports: "webmd.papi"
            }
        }
    }), require(["underscore", "application", "jst!templates/app.jst", "util"], function(a, b, c, d) {
        "use strict";
        var e, f, g = $(self).data(),
            h = webmd.substitute("http://symptoms{env}.webmd.com", {
                env: d.getEnv()
            });
        if (a.isEmpty(g)) $(function() {
            $("#sc_fmt").html(c({
                BASE_URL: h,
                IMAGE_SERVER_URL: image_server_url
            }))
        });
        else {
            b.define = define, f = image_server_url + "/webmd/PageBuilder_Assets/CSS_static/Atlanta/tools/symptomchecker/widget/1/symptomchecker.css", e = $("<link>", {
                rel: "stylesheet",
                type: "text/css",
                href: f
            });
            var i = document.getElementsByTagName("head")[0],
                j = document.createElement("link");
            j.setAttribute("href", f), j.setAttribute("rel", "stylesheet"), i.appendChild(j), e.appendTo("head"), $(g.el).html(c({
                BASE_URL: h,
                IMAGE_SERVER_URL: image_server_url
            })), window.s_md && (window.s_md.prop20 = ""), g.isWidget = !0
        }
        window.webmd.p.symptomchecker = b, d.isIE8NoFlash() ? d.IE8NoFlashWarning() : new webmd.p.symptomchecker(g)
    }), define("main", function() {}), define("webmd.p.symptomchecker", function() {})
}();
