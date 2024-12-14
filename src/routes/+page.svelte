<script>
	import { getTexturePacks } from '$lib/storage';
	import TexturePack from './texture-pack.svelte';

	const texturePacks = getTexturePacks();
</script>

<div class="flex flex-col gap-4">
	<h1 class="text-2xl font-semibold">My Texture Packs</h1>

	<div class="flex flex-wrap gap-4">
		{#each texturePacks as tp}
			<TexturePack name={tp.name} />
		{/each}
	</div>
	<a href="/create" class="btn">New texture pack</a>
</div>
