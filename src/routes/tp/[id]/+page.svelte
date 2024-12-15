<script lang="ts">
	import { modals } from 'svelte-modals';
	import type { PageData } from './$types';
	import DeleteModal from './delete-modal.svelte';

	const { data }: { data: PageData } = $props();
</script>

<div class="flex flex-col">
	<p class="text-l font-semibold">Texture Pack View</p>

	<div class="flex flex-col space-y-4">
		<div class="flex flex-col">
			<p class="text-4xl font-semibold">{data.currentTexturePack.name}</p>
		</div>

		<button
			class="btn-red w-48"
			onclick={() => {
				//@ts-ignore
				modals.open(DeleteModal, {
					name: data.currentTexturePack.name,
					tpId: data.currentTexturePack.id
				});
				console.log(data.currentTexturePack.id);
			}}>Delete Texture Pack</button
		>
	</div>
</div>
