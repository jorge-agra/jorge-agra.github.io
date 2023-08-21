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
exports.TagCloudWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-tag-cloud WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, TagCloudWebElement.ts.
 */
var TagCloudWebElementBase = /** @class */ (function (_super) {
    __extends(TagCloudWebElementBase, _super);
    function TagCloudWebElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the value of <code>data</code> property.
     * Specifies the DataProvider for the sections and items of the tag-cloud
     * @return The value of <code>data</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getData = function () {
        return this.getProperty('data');
    };
    /**
     * Gets the value of <code>datatip</code> property.
     *
     * @return The value of <code>datatip</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getDatatip = function () {
        return this.getProperty('datatip');
    };
    /**
     * Sets the value of <code>hiddenCategories</code> property.
     * An array of categories that will be hidden.
     * @param hiddenCategories The value to set for <code>hiddenCategories</code>
     *
     */
    TagCloudWebElementBase.prototype.changeHiddenCategories = function (hiddenCategories) {
        return this.setProperty('hiddenCategories', hiddenCategories);
    };
    /**
     * Gets the value of <code>hiddenCategories</code> property.
     * An array of categories that will be hidden.
     * @return The value of <code>hiddenCategories</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getHiddenCategories = function () {
        return this.getProperty('hiddenCategories');
    };
    /**
     * Gets the value of <code>touchResponse</code> property.
     * Data visualizations require a press and hold delay before triggering tooltips and rollover effects on mobile devices to avoid interfering with page panning, but these hold delays can make applications seem slower and less responsive. For a better user experience, the application can remove the touch and hold delay when data visualizations are used within a non scrolling container or if there is sufficient space outside of the visualization for panning. If touchResponse is touchStart the element will instantly trigger the touch gesture and consume the page pan events. If touchResponse is auto, the element will behave like touchStart if it determines that it is not rendered within scrolling content and if element panning is not available for those elements that support the feature.
     * @return The value of <code>touchResponse</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getTouchResponse = function () {
        return this.getProperty('touchResponse');
    };
    /**
     * Gets the value of <code>highlightMatch</code> property.
     * The matching condition for the highlightedCategories option. By default, highlightMatch is 'all' and only items whose categories match all of the values specified in the highlightedCategories array will be highlighted. If highlightMatch is 'any', then items that match at least one of the highlightedCategories values will be highlighted.
     * @return The value of <code>highlightMatch</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getHighlightMatch = function () {
        return this.getProperty('highlightMatch');
    };
    /**
     * Sets the value of <code>highlightedCategories</code> property.
     * An array of categories that will be highlighted.
     * @param highlightedCategories The value to set for <code>highlightedCategories</code>
     *
     */
    TagCloudWebElementBase.prototype.changeHighlightedCategories = function (highlightedCategories) {
        return this.setProperty('highlightedCategories', highlightedCategories);
    };
    /**
     * Gets the value of <code>highlightedCategories</code> property.
     * An array of categories that will be highlighted.
     * @return The value of <code>highlightedCategories</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getHighlightedCategories = function () {
        return this.getProperty('highlightedCategories');
    };
    /**
     * Gets the value of <code>hoverBehavior</code> property.
     * Defines the behavior applied when hovering over data items.
     * @return The value of <code>hoverBehavior</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getHoverBehavior = function () {
        return this.getProperty('hoverBehavior');
    };
    /**
     * Gets the value of <code>layout</code> property.
     * The layout to use for tag display.
     * @return The value of <code>layout</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getLayout = function () {
        return this.getProperty('layout');
    };
    /**
     * Gets the value of <code>selectionMode</code> property.
     * Specifies the selection mode.
     * @return The value of <code>selectionMode</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getSelectionMode = function () {
        return this.getProperty('selectionMode');
    };
    /**
     * Sets the value of <code>selection</code> property.
     * An array containing the ids of the initially selected data items.
     * @param selection The value to set for <code>selection</code>
     *
     */
    TagCloudWebElementBase.prototype.changeSelection = function (selection) {
        return this.setProperty('selection', selection);
    };
    /**
     * Gets the value of <code>selection</code> property.
     * An array containing the ids of the initially selected data items.
     * @return The value of <code>selection</code> property.
     *
     */
    TagCloudWebElementBase.prototype.getSelection = function () {
        return this.getProperty('selection');
    };
    return TagCloudWebElementBase;
}(elements_1.OjWebElement));
exports.TagCloudWebElementBase = TagCloudWebElementBase;
