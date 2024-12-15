<script lang="ts">
	import { goto } from '$app/navigation';
	import Modal from '../../../components/modal.svelte';
	import type { PageData } from './$types';
	import DeleteModal from './delete-modal.svelte';

	const { data }: { data: PageData } = $props();

	let showDelete = $state(false);
</script>

<div class="flex flex-col">
	<p class="text-xs font-light">Texture Pack</p>

	<div class="flex flex-col space-y-4">
		<div class="flex flex-col">
			<p class="text-4xl font-semibold">{data.currentTexturePack.name}</p>
			<p class="text-l my-1 font-medium">Version {data.currentTexturePack.version}</p>
		</div>

		<button
			class="btn-green w-48"
			onclick={() => {
				goto(`/tp/${data.currentTexturePack.id}/blocks`);
			}}>Edit Blocks</button
		>

		<button
			class="btn-red w-48"
			onclick={() => {
				showDelete = true;
			}}>Delete Texture Pack</button
		>
	</div>
</div>

<Modal
	show={showDelete}
	onoutclick={() => {
		showDelete = false;
	}}
	><DeleteModal
		close={() => {
			showDelete = false;
		}}
		name={data.currentTexturePack.name}
		tpId={data.currentTexturePack.id}
	/></Modal
>
