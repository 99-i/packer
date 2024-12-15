<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { texturePackVersions } from '$lib/data';
	import { createTexturePack } from '$lib/storage';
	import { v4 } from 'uuid';
	import { JavaVersion } from '../../types';

	const versions = texturePackVersions;

	let name = $state('');
	let nameTouched = $state(false);

	let version: JavaVersion = $state(JavaVersion._1_8_9);

	function submit() {
		const id = v4();
		createTexturePack(id, name, version);

		if (browser) {
			goto(`/tp/${id}`);
		}
	}

	let nameError = $derived.by(() => {
		if (name.trim().length === 0 && nameTouched) {
			return 'Name cannot be empty.';
		} else {
			return false;
		}
	});
</script>

<div class="flex flex-col space-y-4">
	<div class="flex flex-col">
		<p class="text-l font-medium">Name</p>
		<div class="flex items-center space-x-4">
			<input
				type="text"
				id="name"
				class="w-80 border-2"
				class:border-red-500={nameError}
				bind:value={name}
				oninput={() => {
					nameTouched = true;
				}}
			/>
			{#if nameError}
				<p class="text-s font-bold text-red-500">{nameError}</p>
			{/if}
		</div>
	</div>

	<div class="flex flex-col">
		<p class="text-l font-medium">Version</p>
		<select class="w-32" id="version" bind:value={version}>
			{#each versions as v}
				<option value={v}>{v}</option>
			{/each}
		</select>
	</div>

	<button
		class="btn w-48"
		onclick={() => {
			nameTouched = true;
			if (nameError) {
				return;
			}
			submit();
		}}>Create Texture Pack</button
	>
</div>
