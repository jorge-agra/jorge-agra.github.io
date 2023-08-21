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
exports.HighlightTextWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-highlight-text WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, HighlightTextWebElement.ts.
 */
var HighlightTextWebElementBase = /** @class */ (function (_super) {
    __extends(HighlightTextWebElementBase, _super);
    function HighlightTextWebElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the value of <code>matchText</code> property.
     * The text string to match.
     * @return The value of <code>matchText</code> property.
     *
     */
    HighlightTextWebElementBase.prototype.getMatchText = function () {
        return this.getProperty('matchText');
    };
    /**
     * Gets the value of <code>text</code> property.
     * The text string to apply highlighting to.
     * @return The value of <code>text</code> property.
     *
     */
    HighlightTextWebElementBase.prototype.getTextProperty = function () {
        return this.getProperty('text');
    };
    return HighlightTextWebElementBase;
}(elements_1.OjWebElement));
exports.HighlightTextWebElementBase = HighlightTextWebElementBase;
