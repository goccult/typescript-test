"use strict";
var Shape = /** @class */ (function () {
    function Shape(canvasId, location) {
        this.move = false; // 判断是否处于移动状态
        this.offsetY = 0; // 记录鼠标按下形状时鼠标在形状X轴方向的偏移量
        this.offsetX = 0; // 记录鼠标按下形状时鼠标在形状Y轴方向的偏移量
        this.canvasOffsetLeft = 0; // 记录画布相对于整个浏览器视口区域X轴方向的偏移量
        this.canvasOffsetTop = 0; // 记录画布相对于整个浏览器视口区域Y轴方向的偏移量
        this.location = location ? location : { x: 0, y: 0 };
        this.dom = document.createElement('div');
        this.canvasDom = document.querySelector(canvasId);
        this.addMoveFn(); // 构造函数中执行addMoveFn()方法让元素带有可拖动功能
    }
    Object.defineProperty(Shape.prototype, "Location", {
        get: function () {
            return this.location;
        },
        set: function (obj) {
            if (!obj.x || !obj.y) {
                throw new Error('Invalid location');
            }
            this.location = obj;
        },
        enumerable: false,
        configurable: true
    });
    Shape.prototype.addMoveFn = function () {
        var _this = this;
        var _a, _b, _c;
        this.dom.addEventListener('pointerdown', function (e) {
            _this.move = true;
            _this.offsetX = e.offsetX;
            _this.offsetY = e.offsetY;
            var _a = _this.canvasDom.getBoundingClientRect(), _b = _a.left, left = _b === void 0 ? 0 : _b, _c = _a.top, top = _c === void 0 ? 0 : _c;
            _this.canvasOffsetLeft = left;
            _this.canvasOffsetTop = top;
        });
        (_a = this.canvasDom) === null || _a === void 0 ? void 0 : _a.addEventListener('pointerup', function () {
            _this.move = false;
        });
        (_b = this.canvasDom) === null || _b === void 0 ? void 0 : _b.addEventListener('pointermove', function (e) {
            if (_this.move) {
                _this.dom.style.left = e.clientX - _this.offsetX - _this.canvasOffsetLeft + "px";
                _this.dom.style.top = e.clientY - _this.offsetY - _this.canvasOffsetTop + "px";
            }
        });
        (_c = this.canvasDom) === null || _c === void 0 ? void 0 : _c.addEventListener('mouseleave', function (e) {
            if (_this.move) {
                _this.move = false;
            }
        });
    };
    return Shape;
}());
