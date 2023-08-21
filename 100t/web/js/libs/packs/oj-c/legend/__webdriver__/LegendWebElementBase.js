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
exports.LegendWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-legend WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, LegendWebElement.ts.
 */
var LegendWebElementBase = /** @class */ (function (_super) {
    __extends(LegendWebElementBase, _super);
    function LegendWebElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the value of <code>data</code> property.
     * Specifies the DataProvider for the sections and items of the legend.
     * @return The value of <code>data</code> property.
     *
     */
    LegendWebElementBase.prototype.getData = function () {
        return this.getProperty('data');
    };
    /**
     * Gets the value of <code>drilling</code> property.
     * Specifies whether drilling is enabled.
     * @return The value of <code>drilling</code> property.
     *
     */
    LegendWebElementBase.prototype.getDrilling = function () {
        return this.getProperty('drilling');
    };
    /**
     * Gets the value of <code>halign</code> property.
     * Defines the horizontal alignment of the legend contents.
     * @return The value of <code>halign</code> property.
     *
     */
    LegendWebElementBase.prototype.getHalign = function () {
        return this.getProperty('halign');
    };
    /**
     * Sets the value of <code>hiddenCategories</code> property.
     * An array of categories that will be hidden.
     * @param hiddenCategories The value to set for <code>hiddenCategories</code>
     *
     */
    LegendWebElementBase.prototype.changeHiddenCategories = function (hiddenCategories) {
        return this.setProperty('hiddenCategories', hiddenCategories);
    };
    /**
     * Gets the value of <code>hiddenCategories</code> property.
     * An array of categories that will be hidden.
     * @return The value of <code>hiddenCategories</code> property.
     *
     */
    LegendWebElementBase.prototype.getHiddenCategories = function () {
        return this.getProperty('hiddenCategories');
    };
    /**
     * Gets the value of <code>hideAndShowBehavior</code> property.
     * Defines whether the legend can be used to initiate hide and show behavior on referenced data items.
     * @return The value of <code>hideAndShowBehavior</code> property.
     *
     */
    LegendWebElementBase.prototype.getHideAndShowBehavior = function () {
        return this.getProperty('hideAndShowBehavior');
    };
    /**
     * Sets the value of <code>highlightedCategories</code> property.
     * An array of categories that will be highlighted.
     * @param highlightedCategories The value to set for <code>highlightedCategories</code>
     *
     */
    LegendWebElementBase.prototype.changeHighlightedCategories = function (highlightedCategories) {
        return this.setProperty('highlightedCategories', highlightedCategories);
    };
    /**
     * Gets the value of <code>highlightedCategories</code> property.
     * An array of categories that will be highlighted.
     * @return The value of <code>highlightedCategories</code> property.
     *
     */
    LegendWebElementBase.prototype.getHighlightedCategories = function () {
        return this.getProperty('highlightedCategories');
    };
    /**
     * Gets the value of <code>hoverBehavior</code> property.
     * Defines the behavior applied when hovering over a legend item.
     * @return The value of <code>hoverBehavior</code> property.
     *
     */
    LegendWebElementBase.prototype.getHoverBehavior = function () {
        return this.getProperty('hoverBehavior');
    };
    /**
     * Gets the value of <code>orientation</code> property.
     * Defines the orientation of the legend, which determines the direction in which the legend items are laid out.
     * @return The value of <code>orientation</code> property.
     *
     */
    LegendWebElementBase.prototype.getOrientation = function () {
        return this.getProperty('orientation');
    };
    /**
     * Gets the value of <code>symbolHeight</code> property.
     * The height of the legend symbol in pixels.
     * @return The value of <code>symbolHeight</code> property.
     *
     */
    LegendWebElementBase.prototype.getSymbolHeight = function () {
        return this.getProperty('symbolHeight');
    };
    /**
     * Gets the value of <code>symbolWidth</code> property.
     * The width of the legend symbol in pixels.
     * @return The value of <code>symbolWidth</code> property.
     *
     */
    LegendWebElementBase.prototype.getSymbolWidth = function () {
        return this.getProperty('symbolWidth');
    };
    /**
     * Gets the value of <code>textStyle</code> property.
     * The CSS style object defining the style of the legend item text.
     * @return The value of <code>textStyle</code> property.
     *
     */
    LegendWebElementBase.prototype.getTextStyle = function () {
        return this.getProperty('textStyle');
    };
    /**
     * Gets the value of <code>valign</code> property.
     * Defines the vertical alignment of the legend contents.
     * @return The value of <code>valign</code> property.
     *
     */
    LegendWebElementBase.prototype.getValign = function () {
        return this.getProperty('valign');
    };
    /**
     * Gets the value of <code>sectionTitleStyle</code> property.
     * The CSS style object defining the style of the section titles' text.
     * @return The value of <code>sectionTitleStyle</code> property.
     *
     */
    LegendWebElementBase.prototype.getSectionTitleStyle = function () {
        return this.getProperty('sectionTitleStyle');
    };
    /**
     * Gets the value of <code>sectionTitleHalign</code> property.
     * The horizontal alignment of the section titles.
     * @return The value of <code>sectionTitleHalign</code> property.
     *
     */
    LegendWebElementBase.prototype.getSectionTitleHalign = function () {
        return this.getProperty('sectionTitleHalign');
    };
    return LegendWebElementBase;
}(elements_1.OjWebElement));
exports.LegendWebElementBase = LegendWebElementBase;
