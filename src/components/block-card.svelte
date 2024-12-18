<script lang="ts">
	import { goto } from '$app/navigation';

	let { name, prettyName, tpId } = $props();
</script>

<button
	class="flex cursor-pointer flex-col bg-slate-200 p-1 text-left transition-all duration-500 hover:bg-slate-500"
	onclick={() => {
		goto(`/tp/${tpId}/blocks/${name}`);
	}}
>
	<div class="flex-initial">
		<img src="/thumbnails/block/{name}.png" style="image-rendering: pixelated;" width="120em" />
	</div>
	<div class="flex-initial p-1 text-xl font-semibold">{prettyName}</div>
</button>
