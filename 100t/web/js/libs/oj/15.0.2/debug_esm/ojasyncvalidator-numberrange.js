/**
 * @license
 * Copyright (c) 2014, 2023, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
import SyncValidatorAdapter from 'ojs/ojasyncvalidator-adapter';

/**
 * @preserve Copyright 2013 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

/* jslint browser: true,devel:true*/
/**
 * @since 8.0.0
 * @export
 * @class AsyncNumberRangeValidator
 * @final
 * @implements AsyncValidator
 * @classdesc Constructs an AsyncNumberRangeValidator that ensures the value provided is within a given range.
 * @param {Object=} options an object literal used to provide the following properties
 * @ojtsmodule
 * @ojtsimport {module: "ojvalidator-async", type: "AMD", importName: "AsyncValidator"}
 * @ojtsimport {module: "ojvalidator-numberrange", type: "AMD", importName: "NumberRangeValidator"}
 * @ojsignature [{target: "Type",
 *                value: "class AsyncNumberRangeValidator<V> implements AsyncValidator<V>"},
 *               {target: "Type",
 *                value: "NumberRangeValidator.ValidatorOptions",
 *                for: "options", jsdocOverride: true}
 *              ]
 * @see oj.NumberRangeValidator
 */

/**
 * Validates the minimum + maximum conditions. Returns a
 * Promise which resolves when valid and rejects which invalid.
 *
 * @param {string} value that is being validated
 * @returns {Promise.<void>}
 * @ojsignature {target: "Type",
 *               value: "(value: V): Promise<void>"}
 * @memberof AsyncNumberRangeValidator
 * @instance
 * @export
 * @method validate
 */

/**
 * A hint message or null if no hint is available in the options.
 * A hint message may be like "Enter a value between {min} and {max}"
 * or "Enter a number greater than or equal to {min}"
 *
 * @memberof AsyncNumberRangeValidator
 * @instance
 * @export
 * @name hint
 * @type {Promise.<string|null>}
 */

// end of jsdoc

class AsyncNumberRangeValidator extends SyncValidatorAdapter {
    constructor(options) {
        super(options);
        this.options = options;
    }
    get hint() {
        return super._GetHint();
    }
    _InitLoadingPromise() {
        if (!this._loadingPromise) {
            this._loadingPromise = import('ojs/ojvalidator-numberrange');
        }
    }
}

export default AsyncNumberRangeValidator;
