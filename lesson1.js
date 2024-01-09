"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Triangle = void 0;
var Triangle = /** @class */ (function () {
    function Triangle(ma, mb, mc) {
        if (this.isTrangle(ma, mb, mc)) { // neu la tam giac thi gan gia tri
            this.ma = ma;
            this.mb = mb;
            this.mc = mc;
        }
        else { // neu khong phai tam giac thi gan gia tri bang 0
            this.ma = 0;
            this.mb = 0;
            this.mc = 0;
        }
    }
    Triangle.prototype.getMa = function () {
        return this.ma;
    };
    Triangle.prototype.setMa = function (ma) {
        this.ma = ma;
    };
    Triangle.prototype.getMb = function () {
        return this.mb;
    };
    Triangle.prototype.setMb = function (mb) {
        this.mb = mb;
    };
    Triangle.prototype.getMc = function () {
        return this.mc;
    };
    Triangle.prototype.setMc = function (mc) {
        this.mc = mc;
    };
    // chu vi
    Triangle.prototype.perimeter = function () {
        return this.ma + this.mb + this.mc;
    };
    // dien tich
    Triangle.prototype.getArea = function () {
        var p = this.perimeter() / 2;
        return Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
    };
    // kiem tra tam giac
    Triangle.prototype.triangleType = function () {
        if (this.ma === 0 || this.mb === 0 || this.mc === 0) {
            return "khong phai tam giac";
        }
        if (this.ma === this.mb && this.mb === this.mc) {
            return "tam giac deu";
        }
        if (this.ma === this.mb || this.mb === this.mc || this.ma === this.mc) {
            return "tam giac can";
        }
        return "tam giac thuong";
    };
    // kiem tra co phai la tam giac
    Triangle.prototype.isTrangle = function (ma, mb, mc) {
        return ma > 0 && mb > 0 && mc > 0 && ma + mb > mc && ma + mc > mb && mb + mc > ma;
    };
    // this tham chiếu đến đối tượng hiện tại của lớp đó.
    Triangle.prototype.toString = function () {
        return "\n        Loai tam giac: ".concat(this.triangleType(), " \n\n        Chu vi: ").concat(this.perimeter(), " \n\n        Dien tich: ").concat(this.getArea(), " \n\n        3 canh cua tam giac: ").concat(this.ma, ", ").concat(this.mb, ", ").concat(this.mc, "\n        ");
    };
    return Triangle;
}());
exports.Triangle = Triangle;
