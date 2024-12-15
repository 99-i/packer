<script lang="ts">
	import { goto } from '$app/navigation';

	let props = $props();

	const tp: TexturePack = props.tp;
</script>

<div
	class="flex cursor-pointer flex-col bg-slate-200 p-2 transition-all hover:bg-slate-500"
	onclick={() => {
		goto(`/tp/${tp.id}`);
	}}
>
	<div class="flex-initial p-1 text-xl font-semibold">{tp.name}</div>
	<div class="flex-initial p-1">
		<div class="flex flex-col">
			<div class="flex-inital">
				<p class="font-bold">
					Version: {tp.version}
				</p>
			</div>
			<div class="flex-inital">
				<p class="font-bold">
					Last Modified: {tp.lastModified.getMonth() +
						1}/{tp.lastModified.getDate()}/{tp.lastModified.getFullYear()}
					{tp.lastModified.getHours()}:{tp.lastModified.getMinutes()}
				</p>
			</div>
		</div>
	</div>
</div>
