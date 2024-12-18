<script>
	import { getTexturePacks } from '$lib/storage';
	import TexturePack from '../components/texture-pack.svelte';

	const texturePacks = getTexturePacks();
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-2xl font-semibold">Dashboard</h1>

	<div class="flex flex-wrap gap-4">
		{#each texturePacks as tp}
			<TexturePack {tp} />
		{/each}
		{#if texturePacks.length === 0}
			You do not have any texture packs.
		{/if}
	</div>
	<a href="/create" class="btn w-44">New texture pack</a>
</div>
