<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { texturePackVersions } from '$lib/data';
	import { createTexturePack } from '$lib/storage';
	import { v4 } from 'uuid';
	const versions = texturePackVersions;

	function submit() {
		const id = v4();
		createTexturePack(
			id,
			(document.getElementById('name')! as HTMLInputElement).value,
			(document.getElementById('version')! as HTMLInputElement).value as JavaVersion
		);
		if (browser) {
			setTimeout(() => {
				goto(`tp/${id}`);
			});
		}
	}
</script>

<form>
	<div class="flex flex-col space-y-4">
		<div class="flex flex-col">
			<p class="text-l font-medium">Name</p>
			<input type="text" id="name" />
		</div>

		<div class="flex flex-col">
			<p class="text-l font-medium">Version</p>
			<select class="w-32" id="version">
				{#each versions as v}
					<option value={v}>{v}</option>
				{/each}
			</select>
		</div>

		<button class="btn cursor-pointer select-none" on:click={submit}>Create</button>
	</div>
</form>
