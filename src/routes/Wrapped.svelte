<script lang="ts">
	import { styled } from '$lib/styled';
	import Simple from './Simple.svelte';

	const Wrapped = styled(Simple, $$restProps, {
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
	});

	type $$Props = (typeof Wrapped)['$$Props'];
</script>

<svelte:component this={Wrapped.component} class={Wrapped.class} {...Wrapped.props} />
