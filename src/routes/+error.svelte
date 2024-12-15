<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Error</title>
</svelte:head>

<div class="flex flex-col space-y-4">
	<p class="text-2xl font-semibold">{$page.status}: {$page.error?.message}</p>

	<a class="text-blue-400" href="/">Home</a>
</div>
