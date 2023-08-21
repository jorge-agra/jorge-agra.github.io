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
exports.SelectorWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-selector WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, SelectorWebElement.ts.
 */
var SelectorWebElementBase = /** @class */ (function (_super) {
    __extends(SelectorWebElementBase, _super);
    function SelectorWebElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the value of <code>rowKey</code> property.
     * Specifies the row key of each selector.
     * @return The value of <code>rowKey</code> property.
     *
     */
    SelectorWebElementBase.prototype.getRowKey = function () {
        return this.getProperty('rowKey');
    };
    /**
     * Sets the value of <code>selectedKeys</code> property.
     * Specifies the selectedKeys, should be hooked into the collection component.
     * @param selectedKeys The value to set for <code>selectedKeys</code>
     *
     */
    SelectorWebElementBase.prototype.changeSelectedKeys = function (selectedKeys) {
        return this.setProperty('selectedKeys', selectedKeys);
    };
    /**
     * Gets the value of <code>selectedKeys</code> property.
     * Specifies the selectedKeys, should be hooked into the collection component.
     * @return The value of <code>selectedKeys</code> property.
     *
     */
    SelectorWebElementBase.prototype.getSelectedKeys = function () {
        return this.getProperty('selectedKeys');
    };
    /**
     * Gets the value of <code>indeterminate</code> property.
     * Visual only state to indicate partial selection
     * @return The value of <code>indeterminate</code> property.
     *
     */
    SelectorWebElementBase.prototype.getIndeterminate = function () {
        return this.getProperty('indeterminate');
    };
    /**
     * Gets the value of <code>selectionMode</code> property.
     * Specifies the selection mode.
     * @return The value of <code>selectionMode</code> property.
     *
     */
    SelectorWebElementBase.prototype.getSelectionMode = function () {
        return this.getProperty('selectionMode');
    };
    return SelectorWebElementBase;
}(elements_1.OjWebElement));
exports.SelectorWebElementBase = SelectorWebElementBase;
