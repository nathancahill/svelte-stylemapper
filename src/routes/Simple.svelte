<script lang="ts">
	export let name = 'world';
	let className = '';

	export { className as class };
</script>

<div class={className} on:click on:keydown>Hello {name}</div>
