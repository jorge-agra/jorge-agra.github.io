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
exports.TagCloudWebElement = void 0;
var TagCloudWebElementBase_1 = require("./TagCloudWebElementBase");
/**
 * The component WebElement for [oj-c-tag-cloud](../../../oj-c/docs/oj.TagCloud.html).
 * Do not instantiate this class directly, instead, use
 * [findTagCloud](../modules.html#findTagCloud).
 */
var TagCloudWebElement = /** @class */ (function (_super) {
    __extends(TagCloudWebElement, _super);
    function TagCloudWebElement() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TagCloudWebElement;
}(TagCloudWebElementBase_1.TagCloudWebElementBase));
exports.TagCloudWebElement = TagCloudWebElement;
