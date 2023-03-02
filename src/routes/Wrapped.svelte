<script lang="ts">
	import type { SvelteComponent } from 'svelte';
	import { styled } from '$lib/styled';
	import { useForwardEvents } from './useForwardEvents';
	import Simple from './Simple.svelte';

	let baseRef: SvelteComponent;
	useForwardEvents(() => baseRef);

	$: ({
		component,
		class: classes,
		props,
		propsType
	} = styled(Simple, $$restProps, {
		variants: {
			intent: {
				neutral: 'bg-slate-300 border border-slate-500',
				danger: 'bg-red-300 border border-red-500',
				success: 'bg-green-300 border border-green-500'
			},
			size: {
				small: 'p-2',
				medium: 'p-4',
				large: 'p-8'
			}
			// Add any number of variants...
		},
		// Optionally set default variant values
		defaultVariants: {
			intent: 'neutral',
			size: 'medium'
		}
	}));

	type $$Props = typeof propsType;
</script>

<svelte:component this={component} bind:this={baseRef} class={classes} {...props} />
