import type { SvelteComponentTyped } from 'svelte';
import type { Newable } from 'ts-essentials';
import type { SvelteHTMLElements } from 'svelte/elements';

export type SvelteHTMLElementsKeys = keyof SvelteHTMLElements;

export type ComponentProps<T extends SvelteComponentTyped> = T extends SvelteComponentTyped<infer R>
	? R
	: unknown;

export type Assign<T1 = Record<string, unknown>, T2 = Record<string, unknown>> = T1 extends any
	? Omit<T1, keyof T2> & T2
	: never;

export type StyleConfig =
	| {
			variants?: {
				[Name in string]: {
					[Pair in number | string]: string;
				};
			};
			forwardProps?: string[];
			defaultVariants?: {
				[Name in string]: string | number | boolean;
			};
			compoundVariants?: ({
				[Name in string]: string | number | boolean;
			} & { className: string })[];
	  }
	| string;

export type StyledComponentProps<TConfig extends any[]> = (TConfig[0] extends {
	variants: { [name: string]: unknown };
}
	? {
			[K in keyof TConfig[0]['variants']]?: StrictValue<keyof TConfig[0]['variants'][K]>;
	  }
	: unknown) &
	(TConfig extends [first: any, ...rest: infer V] ? StyledComponentProps<V> : unknown);

export type StrictValue<T> = T extends number
	? T
	: T extends 'true'
	? boolean
	: T extends 'false'
	? boolean
	: T extends `${number}`
	? number
	: T;

export interface StyledComponent<TType, TProps> {
	$$Props: (TType extends SvelteHTMLElementsKeys ? SvelteHTMLElements[TType] : never) & TProps;
	props: TType extends SvelteHTMLElementsKeys ? SvelteHTMLElements[TType] : never;
	class: string;
	component: TType extends SvelteHTMLElementsKeys ? string : never;
}

export interface StyledComponentComponent<TType extends SvelteComponentTyped, TProps, OwnProps> {
	$$Props: OwnProps & TProps;
	props: OwnProps;
	class: string;
	component: TType extends SvelteComponentTyped ? Newable<SvelteComponentTyped> : never;
}
