<script>
	import { goto } from '$app/navigation';
	import { deleteTexturePack } from '$lib/storage';

	const {
		// provided by <Modals />
		isOpen,
		close,

		name,
		tpId
	} = $props();
</script>

{#if isOpen}
	<div class="relative z-10">
		<div class="flex min-h-full items-end justify-center p-4 text-center">
			<div class="relative transform overflow-hidden bg-slate-800 text-left transition-all">
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
			</div>
		</div>
	</div>
{/if}
