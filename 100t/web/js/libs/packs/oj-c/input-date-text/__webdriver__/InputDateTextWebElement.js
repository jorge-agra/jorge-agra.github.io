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
exports.InputDateTextWebElement = void 0;
var InputDateTextWebElementBase_1 = require("./InputDateTextWebElementBase");
/**
 * The component WebElement for [oj-c-input-date-text](../../../oj-c/docs/oj.InputDateText.html).
 * Do not instantiate this class directly, instead, use
 * [findInputDateText](../modules.html#findInputDateText).
 */
var InputDateTextWebElement = /** @class */ (function (_super) {
    __extends(InputDateTextWebElement, _super);
    function InputDateTextWebElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return InputDateTextWebElement;
}(InputDateTextWebElementBase_1.InputDateTextWebElementBase));
exports.InputDateTextWebElement = InputDateTextWebElement;
