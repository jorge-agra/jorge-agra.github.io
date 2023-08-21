define(["require", "exports", "oj-c/editable-value/UNSAFE_useEditableValue/useEditableValue", "oj-c/editable-value/UNSAFE_useValidators/useValidators", "./useImplicitNumberConverter", "./useImplicitNumberRangeValidator", "preact/hooks", "oj-c/editable-value/utils/utils", "./stepBasisUtils"], function (require, exports, useEditableValue_1, useValidators_1, useImplicitNumberConverter_1, useImplicitNumberRangeValidator_1, hooks_1, utils_1, stepBasisUtils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.useNumberInputTextPreact = void 0;
    function useNumberInputTextPreact({ autocomplete = 'on', autofocus, converter: propConverter, disabled, displayOptions, inputPrefix, inputSuffix, labelEdge, labelHint, labelStartWidth, max, messagesCustom, min, numberRangeExactMessageDetail, numberRangeOverflowMessageDetail, numberRangeUnderflowMessageDetail, placeholder, readonly, required, requiredMessageDetail, step, textAlign, userAssistanceDensity, validators, value: propValue, virtualKeyboard, onMessagesCustomChanged, onRawValueChanged, onTransientValueChanged, onValidChanged, onValueChanged, ...otherProps }, addBusyState) {
        const minTreatNull = (0, utils_1.treatNull)(min);
        const maxTreatNull = (0, utils_1.treatNull)(max);
        const converter = (0, useImplicitNumberConverter_1.useImplicitNumberConverter)({
            converter: propConverter
        });
        const implicitComponentValidator = (0, useImplicitNumberRangeValidator_1.useImplicitNumberRangeValidator)({
            converter,
            max: maxTreatNull,
            min: minTreatNull,
            numberRangeExactMessageDetail,
            numberRangeOverflowMessageDetail,
            numberRangeUnderflowMessageDetail
        });
        const { onCommitValue, format, normalizeAndParseValue, methods, textFieldProps, value, setValue, displayValue, setDisplayValue, setTransientValue } = (0, useEditableValue_1.useEditableValue)({
            ariaDescribedBy: otherProps['aria-describedby'],
            converter,
            disabled,
            displayOptions,
            implicitComponentValidator,
            messagesCustom,
            readonly,
            required,
            requiredMessageDetail,
            validators,
            value: propValue,
            addBusyState,
            onMessagesCustomChanged,
            onRawValueChanged,
            onTransientValueChanged,
            onValidChanged,
            onValueChanged
        });
        const hasMin = minTreatNull !== undefined;
        const hasMax = maxTreatNull !== undefined;
        const initialValue = (0, hooks_1.useRef)((0, utils_1.treatNull)(propValue));
        if (propValue !== value) {
            initialValue.current = (0, utils_1.treatNull)(propValue);
        }
        const [valueNow, setValueNow] = (0, hooks_1.useState)((0, utils_1.treatNull)(value) || undefined);
        (0, hooks_1.useEffect)(() => {
            setValueNow((0, utils_1.treatNull)(value));
            setTransientValue(value);
        }, [value]);
        const [valueText, setValueText] = (0, hooks_1.useState)(displayValue || undefined);
        (0, hooks_1.useEffect)(() => {
            if (value === null) {
                setValueText(undefined);
            }
            else {
                const formattedValue = format(value);
                setValueText(formattedValue);
            }
        }, [value, converter]);
        const onCommit = (0, hooks_1.useCallback)(async ({ value }) => {
            const parsedValueOrSymbol = normalizeAndParseValue(value);
            const parsedValue = parsedValueOrSymbol;
            if (typeof parsedValueOrSymbol === 'symbol') {
                setValueNow(undefined);
                setValueText(value);
                return;
            }
            const validationResult = await onCommitValue(parsedValue);
            if (validationResult === useValidators_1.ValidationResult.VALID) {
                const formattedValue = format(parsedValue);
                setDisplayValue(formattedValue);
            }
            else {
                setValueNow(parsedValue);
                setValueText(value);
            }
        }, [format, normalizeAndParseValue, onCommitValue]);
        const textFieldPropsWithOverride = { ...textFieldProps, onCommit };
        const doStep = (0, hooks_1.useCallback)(async (direction, doCommit) => {
            if (step === undefined) {
                return;
            }
            const displayValueToStep = displayValue || '0';
            const parsedValueOrSymbol = normalizeAndParseValue(displayValueToStep);
            if (typeof parsedValueOrSymbol === 'symbol') {
                return;
            }
            const parsedValue = parsedValueOrSymbol;
            let newSteppedValue;
            if (direction !== undefined) {
                const stepValue = direction === 'increase' ? step : -1 * step;
                newSteppedValue = (0, stepBasisUtils_1.determineSteppedValue)(stepValue, step, parsedValue, initialValue.current, maxTreatNull, minTreatNull);
            }
            else {
                newSteppedValue = parsedValue;
            }
            const validationResult = await onCommitValue(newSteppedValue, doCommit);
            if (validationResult === useValidators_1.ValidationResult.VALID) {
                setTransientValue(newSteppedValue);
            }
            const formattedValue = format(newSteppedValue);
            setDisplayValue(formattedValue);
            setValueText(formattedValue);
            setValueNow(newSteppedValue);
        }, [value, displayValue, format, normalizeAndParseValue, onCommitValue]);
        const handleStep = (0, hooks_1.useCallback)(async ({ direction }) => {
            const doCommit = true;
            doStep(direction, doCommit);
        }, [doStep]);
        const handleSpin = (0, hooks_1.useCallback)(async ({ direction }) => {
            const doCommit = false;
            doStep(direction, doCommit);
        }, [doStep]);
        const handleSpinComplete = (0, hooks_1.useCallback)(async () => {
            const doCommit = true;
            doStep(undefined, doCommit);
        }, [displayValue, normalizeAndParseValue, onCommitValue]);
        return {
            value,
            setValue,
            methods,
            inputNumberProps: {
                'aria-valuemax': maxTreatNull,
                'aria-valuemin': minTreatNull,
                'aria-valuenow': valueNow ?? undefined,
                'aria-valuetext': valueText !== '' ? valueText : undefined,
                autoComplete: autocomplete,
                autoFocus: autofocus,
                hasSteppers: step !== undefined && step > 0,
                isDisabled: disabled,
                isReadonly: readonly,
                isRequired: required,
                isRequiredShown: required && (userAssistanceDensity === 'compact' || (0, utils_1.treatNull)(value) === undefined),
                label: labelHint,
                labelEdge,
                labelStartWidth,
                onSpin: step ? handleSpin : undefined,
                onSpinComplete: step ? handleSpinComplete : undefined,
                onStep: step ? handleStep : undefined,
                placeholder,
                prefix: inputPrefix,
                suffix: inputSuffix,
                isStepDownDisabled: disabled ||
                    (hasMin &&
                        ((valueNow !== undefined && valueNow <= minTreatNull) ||
                            (displayValue === '' && minTreatNull === 0))),
                isStepUpDisabled: disabled ||
                    (hasMax &&
                        ((valueNow !== undefined && valueNow >= maxTreatNull) ||
                            (displayValue === '' && maxTreatNull === 0))),
                textAlign,
                userAssistanceDensity,
                virtualKeyboard,
                ...textFieldPropsWithOverride
            }
        };
    }
    exports.useNumberInputTextPreact = useNumberInputTextPreact;
});
