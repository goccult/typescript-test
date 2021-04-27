"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Img = /** @class */ (function (_super) {
    __extends(Img, _super);
    function Img(canvasId, location) {
        var _this = _super.call(this, canvasId, location) // super()方法访问父类的构造函数
         || this;
        _this.appendElement();
        return _this;
    }
    Img.prototype.appendElement = function () {
        this.dom.style.position = 'absolute';
        this.dom.style.width = '80px';
        this.dom.style.height = '80px';
        var img = document.createElement('img');
        this.dom.style.top = this.location.y + "px";
        this.dom.style.left = this.location.x + "px";
        this.dom.style.cursor = 'move';
        img.src = 'https://store-tg1.cvte.com/easinote5_public/74e235aed00f44228f5e4a05617174f2';
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.userSelect = 'none';
        this.dom.appendChild(img);
        this.canvasDom.appendChild(this.dom);
    };
    return Img;
}(Shape));
