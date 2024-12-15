<script lang="ts">
	import { page } from '$app/stores';
	import '../app.css';
	import Navbar from '../components/navbar/navbar.svelte';
	import { Modals } from 'svelte-modals';
	import type { PageData } from './$types';

	let { children } = $props();
</script>

<svelte:head>
	<title>{$page.data.title}</title>
</svelte:head>

<div class="flex flex-col">
	<div class="flex-none">
		<Navbar />
	</div>

	<div class="flex-auto p-5">
		{@render children()}
	</div>
	<Modals>
		<!-- shown when any modal is opened -->
		{#snippet backdrop({ close })}
			<div class="backdrop" onclick={() => close()}></div>
		{/snippet}
	</Modals>
</div>

<style>
	.backdrop {
		position: fixed;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		background: rgba(0, 0, 0, 0.5);
	}
</style>
