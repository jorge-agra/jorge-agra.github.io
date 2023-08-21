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
exports.SelectorAllWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-selector-all WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, SelectorAllWebElement.ts.
 */
var SelectorAllWebElementBase = /** @class */ (function (_super) {
    __extends(SelectorAllWebElementBase, _super);
    function SelectorAllWebElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Sets the value of <code>selectedKeys</code> property.
     * Specifies the selectedKeys, should be hooked into the collection component.
     * @param selectedKeys The value to set for <code>selectedKeys</code>
     *
     */
    SelectorAllWebElementBase.prototype.changeSelectedKeys = function (selectedKeys) {
        return this.setProperty('selectedKeys', selectedKeys);
    };
    /**
     * Gets the value of <code>selectedKeys</code> property.
     * Specifies the selectedKeys, should be hooked into the collection component.
     * @return The value of <code>selectedKeys</code> property.
     *
     */
    SelectorAllWebElementBase.prototype.getSelectedKeys = function () {
        return this.getProperty('selectedKeys');
    };
    return SelectorAllWebElementBase;
}(elements_1.OjWebElement));
exports.SelectorAllWebElementBase = SelectorAllWebElementBase;
