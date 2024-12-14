import {browser} from "$app/environment"

export const getTexturePacks = (): TexturePack[] => {
	if(!browser) return []

	return JSON.parse(localStorage.getItem('texturePacks') || '[]')
}

export const createTexturePack = (id: string, name: string, version: JavaVersion) => {
	const packs = getTexturePacks()


	packs.push({
		id, name, version
	})

	localStorage.setItem('texturePacks', JSON.stringify(packs))
}
