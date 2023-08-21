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
exports.ListViewWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-list-view WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, ListViewWebElement.ts.
 */
var ListViewWebElementBase = /** @class */ (function (_super) {
    __extends(ListViewWebElementBase, _super);
    function ListViewWebElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the value of <code>currentItem</code> property.
     * The item that currently has keyboard focus
     * @return The value of <code>currentItem</code> property.
     *
     */
    ListViewWebElementBase.prototype.getCurrentItem = function () {
        return this.getProperty('currentItem');
    };
    /**
     * Gets the value of <code>gridlines</code> property.
     * Specifies whether the grid lines should be visible.
     * @return The value of <code>gridlines</code> property.
     *
     */
    ListViewWebElementBase.prototype.getGridlines = function () {
        return this.getProperty('gridlines');
    };
    /**
     * Gets the value of <code>scrollPolicyOptions</code> property.
     * Specifies fetch options for scrolling behaviors that trigger data fetches.
     * @return The value of <code>scrollPolicyOptions</code> property.
     *
     */
    ListViewWebElementBase.prototype.getScrollPolicyOptions = function () {
        return this.getProperty('scrollPolicyOptions');
    };
    /**
     * Sets the value of <code>selected</code> property.
     * The selected property
     * @param selected The value to set for <code>selected</code>
     *
     */
    ListViewWebElementBase.prototype.changeSelected = function (selected) {
        return this.setProperty('selected', selected);
    };
    /**
     * Gets the value of <code>selected</code> property.
     * The selected property
     * @return The value of <code>selected</code> property.
     *
     */
    ListViewWebElementBase.prototype.getSelected = function () {
        return this.getProperty('selected');
    };
    /**
     * Gets the value of <code>selectionMode</code> property.
     * Type of selection behavior for the ListView
     * @return The value of <code>selectionMode</code> property.
     *
     */
    ListViewWebElementBase.prototype.getSelectionMode = function () {
        return this.getProperty('selectionMode');
    };
    return ListViewWebElementBase;
}(elements_1.OjWebElement));
exports.ListViewWebElementBase = ListViewWebElementBase;
