<!-- Modal.svelte -->
<script>
	import { fade } from 'svelte/transition';

	let props = $props();
</script>

{#if props.show}
	<div
		class="fixed inset-0 flex items-center justify-center bg-black/50"
		transition:fade={{
			duration: 200
		}}
		onclick={() => {
			console.log('test');
			props.onoutclick();
		}}
	></div>
	{@render props.children()}
{/if}
