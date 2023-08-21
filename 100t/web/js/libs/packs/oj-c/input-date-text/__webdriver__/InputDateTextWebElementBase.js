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
exports.InputDateTextWebElementBase = void 0;
var elements_1 = require("@oracle/oraclejet-webdriver/elements");
/**
 * This is the base class for oj-c-input-date-text WebElement, and is generated from the
 * component's metadata. Do not modify these contents since they'll be replaced
 * during the next generation.
 * Put overrides into the WebElements's subclass, InputDateTextWebElement.ts.
 */
var InputDateTextWebElementBase = /** @class */ (function (_super) {
    __extends(InputDateTextWebElementBase, _super);
    function InputDateTextWebElementBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Gets the value of <code>autocomplete</code> property.
     * Dictates component's autocomplete state
     * @return The value of <code>autocomplete</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getAutocomplete = function () {
        return this.getProperty('autocomplete');
    };
    /**
     * Gets the value of <code>containerReadonly</code> property.
     * Specifies whether an ancestor container, like oj-form-layout, is readonly.
     * @return The value of <code>containerReadonly</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getContainerReadonly = function () {
        return this.getProperty('containerReadonly');
    };
    /**
     * Gets the value of <code>dateRangeOverflowMessageDetail</code> property.
     * Overrides the default validator's rangeOverflow message detail.
     * @return The value of <code>dateRangeOverflowMessageDetail</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getDateRangeOverflowMessageDetail = function () {
        return this.getProperty('dateRangeOverflowMessageDetail');
    };
    /**
     * Gets the value of <code>dateRangeUnderflowMessageDetail</code> property.
     * Overrides the default validator's rangeUnderflow message detail.
     * @return The value of <code>dateRangeUnderflowMessageDetail</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getDateRangeUnderflowMessageDetail = function () {
        return this.getProperty('dateRangeUnderflowMessageDetail');
    };
    /**
     * Gets the value of <code>disabled</code> property.
     * Specifies whether the component is disabled.
     * @return The value of <code>disabled</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getDisabled = function () {
        return this.getProperty('disabled');
    };
    /**
     * Gets the value of <code>displayOptions</code> property.
     * Display options for auxiliary content that determines whether or not it should be displayed.
     * @return The value of <code>displayOptions</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getDisplayOptions = function () {
        return this.getProperty('displayOptions');
    };
    /**
     * Gets the value of <code>help</code> property.
     * Form component help information.
     * @return The value of <code>help</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getHelp = function () {
        return this.getProperty('help');
    };
    /**
     * Gets the value of <code>helpHints</code> property.
     * The helpHints object contains a definition property and a source property.
     * @return The value of <code>helpHints</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getHelpHints = function () {
        return this.getProperty('helpHints');
    };
    /**
     * Gets the value of <code>labelEdge</code> property.
     * Specifies how the label is positioned for the component
     * @return The value of <code>labelEdge</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getLabelEdge = function () {
        return this.getProperty('labelEdge');
    };
    /**
     * Gets the value of <code>labelHint</code> property.
     * Represents a hint for rendering a label on the component.
     * @return The value of <code>labelHint</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getLabelHint = function () {
        return this.getProperty('labelHint');
    };
    /**
     * Gets the value of <code>labelStartWidth</code> property.
     * The width of the label when labelEdge is 'start'.
     * @return The value of <code>labelStartWidth</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getLabelStartWidth = function () {
        return this.getProperty('labelStartWidth');
    };
    /**
     * Gets the value of <code>labelWrapping</code> property.
     * Should the labels wrap or truncate when there is not enough available space.
     * @return The value of <code>labelWrapping</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getLabelWrapping = function () {
        return this.getProperty('labelWrapping');
    };
    /**
     * Gets the value of <code>max</code> property.
     * The maximum selectable date, in ISO string format
     * @return The value of <code>max</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getMax = function () {
        return this.getProperty('max');
    };
    /**
     * Sets the value of <code>messagesCustom</code> property.
     * List of custom component messages
     * @param messagesCustom The value to set for <code>messagesCustom</code>
     *
     */
    InputDateTextWebElementBase.prototype.changeMessagesCustom = function (messagesCustom) {
        return this.setProperty('messagesCustom', messagesCustom);
    };
    /**
     * Gets the value of <code>messagesCustom</code> property.
     * List of custom component messages
     * @return The value of <code>messagesCustom</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getMessagesCustom = function () {
        return this.getProperty('messagesCustom');
    };
    /**
     * Gets the value of <code>min</code> property.
     * The minimum selectable date, in ISO string format
     * @return The value of <code>min</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getMin = function () {
        return this.getProperty('min');
    };
    /**
     * Gets the value of <code>readonly</code> property.
     * Whether the component is readonly
     * @return The value of <code>readonly</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getReadonly = function () {
        return this.getProperty('readonly');
    };
    /**
     * Gets the value of <code>required</code> property.
     * Specifies whether or not the component is required.
     * @return The value of <code>required</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getRequired = function () {
        return this.getProperty('required');
    };
    /**
     * Gets the value of <code>requiredMessageDetail</code> property.
     * Overrides the default Required error message.
     * @return The value of <code>requiredMessageDetail</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getRequiredMessageDetail = function () {
        return this.getProperty('requiredMessageDetail');
    };
    /**
     * Gets the value of <code>textAlign</code> property.
     * Specifies how the text is aligned within the text field
     * @return The value of <code>textAlign</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getTextAlign = function () {
        return this.getProperty('textAlign');
    };
    /**
     * Gets the value of <code>unsafe_labelledBy</code> property.
     *
     * @return The value of <code>unsafe_labelledBy</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getUnsafeLabelledBy = function () {
        return this.getProperty('unsafe_labelledBy');
    };
    /**
     * Gets the value of <code>userAssistanceDensity</code> property.
     * Specifies the density of the form component's user assistance presentation.
     * @return The value of <code>userAssistanceDensity</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getUserAssistanceDensity = function () {
        return this.getProperty('userAssistanceDensity');
    };
    /**
     * Gets the value of <code>validators</code> property.
     * Specifies the validators for the component.
     * @return The value of <code>validators</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getValidators = function () {
        return this.getProperty('validators');
    };
    /**
     * Sets the value of <code>value</code> property.
     * The value of the component.
     * @param value The value to set for <code>value</code>
     *
     */
    InputDateTextWebElementBase.prototype.changeValue = function (value) {
        return this.setProperty('value', value);
    };
    /**
     * Gets the value of <code>value</code> property.
     * The value of the component.
     * @return The value of <code>value</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getValue = function () {
        return this.getProperty('value');
    };
    /**
     * Gets the value of <code>rawValue</code> property.
     * Specifies how the raw value of the component
     * @return The value of <code>rawValue</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getRawValue = function () {
        return this.getProperty('rawValue');
    };
    /**
     * Gets the value of <code>valid</code> property.
     * Specifies how the valid state of the component
     * @return The value of <code>valid</code> property.
     *
     */
    InputDateTextWebElementBase.prototype.getValid = function () {
        return this.getProperty('valid');
    };
    return InputDateTextWebElementBase;
}(elements_1.OjWebElement));
exports.InputDateTextWebElementBase = InputDateTextWebElementBase;
