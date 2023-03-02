# Svelte Stylemapper

Usage:

> Button.svelte

```svelte
<script lang="ts">
	import { styled } from 'svelte-stylemapper';

	$: Button = styled('button', $$restProps, {
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

	type $$Props = (typeof Button)['$$Props'];
</script>

<svelte:element this={Button.component} class={Button.class} {...Button.props}>
	<slot />
</svelte:element>
```

> +page.svelte

```svelte
<script lang="ts">
	import { Button } from './Button.svelte';
</script>

<Button intent="danger" type="button">Click me</Button>
```
