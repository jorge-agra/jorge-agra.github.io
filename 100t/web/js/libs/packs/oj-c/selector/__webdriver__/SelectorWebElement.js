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
exports.SelectorWebElement = void 0;
var SelectorWebElementBase_1 = require("./SelectorWebElementBase");
/**
 * The component WebElement for [oj-c-selector](../../../oj-c/docs/oj.Selector.html).
 * Do not instantiate this class directly, instead, use
 * [findSelector](../modules.html#findSelector).
 */
var SelectorWebElement = /** @class */ (function (_super) {
    __extends(SelectorWebElement, _super);
    function SelectorWebElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SelectorWebElement;
}(SelectorWebElementBase_1.SelectorWebElementBase));
exports.SelectorWebElement = SelectorWebElement;
