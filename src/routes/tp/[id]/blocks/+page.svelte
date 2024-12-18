<script lang="ts">
	import type { PageData } from '../$types';
	import BlockCard from '../../../../components/block-card.svelte';

	const { data }: { data: PageData } = $props();

	console.log(data);
</script>

<div class="flex flex-col">
	<div class="flex flex-col">
		<p class="text-4xl font-semibold">
			Blocks of <a href="/tp/{data.currentTexturePack.id}" class="bg-gray-100"
				>{data.currentTexturePack.name}</a
			>
		</p>
	</div>

	<div class="mt-4 flex flex-wrap gap-4">
		{#each data.texturePackData.blocks as tp}
			<BlockCard prettyName={tp.prettyName} tpId={data.currentTexturePack.id} name={tp.name} />
		{/each}
	</div>
</div>
