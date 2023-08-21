"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegendWebElement = void 0;
var LegendWebElementBase_1 = require("./LegendWebElementBase");
/**
 * The component WebElement for [oj-c-legend](../../../oj-c/docs/oj.Legend.html).
 * Do not instantiate this class directly, instead, use
 * [findLegend](../modules.html#findLegend).
 */
var LegendWebElement = /** @class */ (function (_super) {
    __extends(LegendWebElement, _super);
    function LegendWebElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LegendWebElement;
}(LegendWebElementBase_1.LegendWebElementBase));
exports.LegendWebElement = LegendWebElement;
