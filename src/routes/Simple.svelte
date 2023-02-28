<script lang="ts">
	export let name = 'world';
	let className = '';

	export { className as class };
</script>

<div class={className}>Hello {name}</div>
