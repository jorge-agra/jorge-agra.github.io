import { JetElement, JetSettableProperties, JetElementCustomEventStrict, JetSetPropertyType } from 'ojs/index';
import { GlobalProps } from 'ojs/ojvcomponent';
import 'ojs/oj-jsx-interfaces';
import { ComponentProps } from 'preact';
import { HighlightText as PreactHighlightText } from '@oracle/oraclejet-preact/UNSAFE_HighlightText';
import 'css!oj-c/highlight-text/highlight-text-styles.css';
type PreactHighlightTextProps = ComponentProps<typeof PreactHighlightText>;
export type HighlightTextProps = {
    matchText?: PreactHighlightTextProps['matchText'];
    text?: PreactHighlightTextProps['children'];
};
export declare const HighlightText: import("preact").ComponentType<import("ojs/ojvcomponent").ExtendGlobalProps<HighlightTextProps>>;
export {};
export interface CHighlightTextElement extends JetElement<CHighlightTextElementSettableProperties>, CHighlightTextElementSettableProperties {
    addEventListener<T extends keyof CHighlightTextElementEventMap>(type: T, listener: (this: HTMLElement, ev: CHighlightTextElementEventMap[T]) => any, options?: (boolean | AddEventListenerOptions)): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: (boolean | AddEventListenerOptions)): void;
    getProperty<T extends keyof CHighlightTextElementSettableProperties>(property: T): CHighlightTextElement[T];
    getProperty(property: string): any;
    setProperty<T extends keyof CHighlightTextElementSettableProperties>(property: T, value: CHighlightTextElementSettableProperties[T]): void;
    setProperty<T extends string>(property: T, value: JetSetPropertyType<T, CHighlightTextElementSettableProperties>): void;
    setProperties(properties: CHighlightTextElementSettablePropertiesLenient): void;
}
export namespace CHighlightTextElement {
    type matchTextChanged = JetElementCustomEventStrict<CHighlightTextElement['matchText']>;
    type textChanged = JetElementCustomEventStrict<CHighlightTextElement['text']>;
}
export interface CHighlightTextElementEventMap extends HTMLElementEventMap {
    'matchTextChanged': JetElementCustomEventStrict<CHighlightTextElement['matchText']>;
    'textChanged': JetElementCustomEventStrict<CHighlightTextElement['text']>;
}
export interface CHighlightTextElementSettableProperties extends JetSettableProperties {
    matchText?: HighlightTextProps['matchText'];
    text?: HighlightTextProps['text'];
}
export interface CHighlightTextElementSettablePropertiesLenient extends Partial<CHighlightTextElementSettableProperties> {
    [key: string]: any;
}
export interface HighlightTextIntrinsicProps extends Partial<Readonly<CHighlightTextElementSettableProperties>>, GlobalProps, Pick<preact.JSX.HTMLAttributes, 'ref' | 'key'> {
    onmatchTextChanged?: (value: CHighlightTextElementEventMap['matchTextChanged']) => void;
    ontextChanged?: (value: CHighlightTextElementEventMap['textChanged']) => void;
}
declare global {
    namespace preact.JSX {
        interface IntrinsicElements {
            'oj-c-highlight-text': HighlightTextIntrinsicProps;
        }
    }
}
