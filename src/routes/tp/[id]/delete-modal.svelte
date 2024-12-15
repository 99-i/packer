<script>
	import { goto } from '$app/navigation';
	import { deleteTexturePack } from '$lib/storage';
	import { fade } from 'svelte/transition';

	const { close, name, tpId } = $props();
</script>

<dialog open class="duration-10 fixed inset-0 flex items-center justify-center bg-slate-800">
	<div class="flex flex-col space-y-1 p-3">
		<p class="text-xl font-semibold text-red-500">WARNING</p>
		<p class="text-gray-100">You are about to delete the texture pack</p>
		<p class="font-bold text-blue-400">{name}</p>
		<p class="text-gray-100">Are you sure?</p>
		<div class="mt-3 flex flex-row justify-end space-x-2">
			<button class="btn-white" onclick={close}>Cancel</button>
			<button
				class="btn-red"
				onclick={() => {
					deleteTexturePack(tpId);
					goto('/');
					close();
				}}>Delete</button
			>
		</div>
	</div>
</dialog>
