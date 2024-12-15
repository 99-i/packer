import {getTexturePacks} from '$lib/storage';
import {error} from '@sveltejs/kit';
import type {PageLoad} from './$types';


export const load: PageLoad = ({params}) => {
	const id = params.id

	const texturePacks = getTexturePacks()

	let texturePack

	for (let i = 0; i < texturePacks.length; i++) {
		if (texturePacks[i].id === id) {
			texturePack = texturePacks[i];
		}
	}

	if (!texturePack) {
		error(404, "Cannot find texture pack")
	}

	return {
		currentTexturePack: texturePack
	};
};
