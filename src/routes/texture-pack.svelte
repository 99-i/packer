<script lang="ts">
	let props = $props();
</script>

<div class="flex flex-col bg-slate-400 p-2">
	<div class="flex-initial bg-gray-500 p-1"><p>{props.name}</p></div>
	<div class="flex-initial p-1">
		<div class="flex flex-col">
			<div class="flex-inital">
				<p class="font-bold">
					Version: {props.version}
				</p>
			</div>
			<div class="flex-inital">
				<p class="font-bold">Last Modified: 1/23/2006 11:44</p>
			</div>
		</div>
	</div>
</div>
