import { getTexturePacks } from '$lib/storage';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import type { TexturePack, TexturePackDatas } from '../../../../../types';

export const load: PageLoad = async ({ fetch, params }) => {
	const id = params.id;

	const texturePacks = getTexturePacks();

	let texturePack: TexturePack | undefined;

	for (let i = 0; i < texturePacks.length; i++) {
		if (texturePacks[i].id === id) {
			texturePack = texturePacks[i];
		}
	}

	if (!texturePack) {
		error(404, 'Cannot find texture pack');
	}

	const texturePackFetch = await fetch('/data/texture-packs.json');

	const texturePackData = ((await texturePackFetch.json()) as TexturePackDatas)[
		texturePack.version
	];

	return {
		texturePackData,
		currentTexturePack: texturePack,
		title: params.block
	};
};
