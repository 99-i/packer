<script lang="ts">
	import '../app.css';
	import Navbar from '../components/navbar/navbar.svelte';

	let { children } = $props();
</script>

<div class="flex h-screen w-screen flex-col bg-slate-300">
	<div class="flex-none">
		<Navbar />
	</div>

	<div class="flex-auto p-5">
		{@render children()}
	</div>
</div>
