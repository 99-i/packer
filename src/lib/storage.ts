import {browser} from "$app/environment"
import {invalidateAll} from "$app/navigation"

export const getTexturePacks = (): TexturePack[] => {
	if (!browser) return []

	const texturePacks: TexturePack[] = JSON.parse(localStorage.getItem('texturePacks') || '[]')

	for (let i = 0; i < texturePacks.length; i++) {
		texturePacks[i].lastModified = new Date(texturePacks[i].lastModified)
	}

	return texturePacks
}

export const createTexturePack = (id: string, name: string, version: JavaVersion) => {
	const packs = getTexturePacks()


	packs.push({
		id, name, version, lastModified: new Date()
	})

	localStorage.setItem('texturePacks', JSON.stringify(packs))
}

export const deleteTexturePack = (id: string) => {
	console.log(id)
	const packs = getTexturePacks().filter(p => p.id !== id)

	console.log(packs)

	localStorage.setItem('texturePacks', JSON.stringify(packs))
}
