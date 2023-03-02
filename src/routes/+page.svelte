<script lang="ts">
	import Button from './Button.svelte';
	import Wrapped from './Wrapped.svelte';
</script>

<Button intent="danger" type="button" class="more">Name</Button>
<Wrapped
	intent="danger"
	name="a"
	on:click={() => console.log('bpp')}
	on:onkeydown={() => console.log('bpp')}
/>
