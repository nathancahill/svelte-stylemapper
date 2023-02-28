import type { SvelteComponentTyped } from 'svelte';
import type { Newable } from 'ts-essentials';
import type { SvelteHTMLElements } from 'svelte/elements';
import type {
	StyledComponent,
	StyledComponentProps,
	StrictValue,
	StyledComponentComponent,
	ComponentProps
} from './types';

export function styled<
	TComponent extends keyof SvelteHTMLElements,
	TConfigs extends (string | { [key: string]: unknown })[]
>(
	component: TComponent,
	...configs: {
		[K in keyof TConfigs]: string extends TConfigs[K]
			? TConfigs[K]
			:
					| {
							variants?: {
								[Name in string]: {
									[Pair in number | string]: string;
								};
							};
							defaultVariants?: 'variants' extends keyof TConfigs[K]
								? {
										[Name in keyof TConfigs[K]['variants']]?: StrictValue<
											keyof TConfigs[K]['variants'][Name]
										>;
								  }
								: Record<string, never>;
							compoundVariants?: 'variants' extends keyof TConfigs[K]
								? Array<
										{
											[Name in keyof TConfigs[K]['variants']]?: StrictValue<
												keyof TConfigs[K]['variants'][Name]
											>;
										} & { className: string }
								  >
								: [];
							forwardProps?: 'variants' extends keyof TConfigs[K]
								? (keyof TConfigs[K]['variants'])[]
								: [];
					  }
					| string;
	}
): StyledComponent<TComponent, StyledComponentProps<TConfigs>> {
	return {
		$$Props: {} as StyledComponent<TComponent, StyledComponentProps<TConfigs>>['$$Props'],
		props: {} as StyledComponent<TComponent, StyledComponentProps<TConfigs>>['props'],
		class: '',
		component: '' as any
	};
}

export function styledComponent<
	TComponent extends SvelteComponentTyped,
	TConfigs extends (string | { [key: string]: unknown })[]
>(
	component: Newable<TComponent>,
	...configs: {
		[K in keyof TConfigs]: string extends TConfigs[K]
			? TConfigs[K]
			:
					| {
							variants?: {
								[Name in string]: {
									[Pair in number | string]: string;
								};
							};
							defaultVariants?: 'variants' extends keyof TConfigs[K]
								? {
										[Name in keyof TConfigs[K]['variants']]?: StrictValue<
											keyof TConfigs[K]['variants'][Name]
										>;
								  }
								: Record<string, never>;
							compoundVariants?: 'variants' extends keyof TConfigs[K]
								? Array<
										{
											[Name in keyof TConfigs[K]['variants']]?: StrictValue<
												keyof TConfigs[K]['variants'][Name]
											>;
										} & { className: string }
								  >
								: [];
							forwardProps?: 'variants' extends keyof TConfigs[K]
								? (keyof TConfigs[K]['variants'])[]
								: [];
					  }
					| string;
	}
): StyledComponentComponent<
	TComponent,
	StyledComponentProps<TConfigs>,
	ComponentProps<TComponent>
> {
	return {
		$$Props: {} as StyledComponentComponent<
			TComponent,
			StyledComponentProps<TConfigs>,
			ComponentProps<TComponent>
		>['$$Props'],
		props: {} as StyledComponentComponent<
			TComponent,
			StyledComponentProps<TConfigs>,
			ComponentProps<TComponent>
		>['props'],
		class: '',
		component: component as any
	};
}
