import type { SvelteComponentTyped } from 'svelte';
import type { Newable } from 'ts-essentials';
import type { SvelteHTMLElements } from 'svelte/elements';

export type SvelteHTMLElementsKeys = keyof SvelteHTMLElements;

export type ComponentProps<T extends SvelteComponentTyped> = T extends SvelteComponentTyped<infer R>
	? R
	: unknown;

export type ComponentOrElementProps<T extends SvelteComponentTyped | SvelteHTMLElementsKeys> =
	T extends SvelteComponentTyped
		? ComponentProps<T>
		: T extends SvelteHTMLElementsKeys
		? SvelteHTMLElements[T]
		: unknown;

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
			} & { class: string })[];
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

export interface StyledComponent<
	TType extends SvelteComponentTyped | SvelteHTMLElementsKeys,
	TProps
> {
	propsType: ComponentOrElementProps<TType> & TProps;
	props: ComponentOrElementProps<TType>;
	class: string;
	component: TType extends SvelteHTMLElementsKeys
		? TType
		: TType extends SvelteComponentTyped
		? Newable<SvelteComponentTyped>
		: never;
}
