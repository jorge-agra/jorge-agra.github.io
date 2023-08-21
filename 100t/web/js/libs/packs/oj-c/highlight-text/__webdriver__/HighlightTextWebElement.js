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
exports.HighlightTextWebElement = void 0;
var HighlightTextWebElementBase_1 = require("./HighlightTextWebElementBase");
/**
 * The component WebElement for [oj-c-highlight-text](../../../oj-c/docs/oj.HighlightText.html).
 * Do not instantiate this class directly, instead, use
 * [findHighlightText](../modules.html#findHighlightText).
 */
var HighlightTextWebElement = /** @class */ (function (_super) {
    __extends(HighlightTextWebElement, _super);
    function HighlightTextWebElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HighlightTextWebElement;
}(HighlightTextWebElementBase_1.HighlightTextWebElementBase));
exports.HighlightTextWebElement = HighlightTextWebElement;
