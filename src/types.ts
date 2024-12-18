export enum JavaVersion {
	_1_7_10 = '1.7.10',
	_1_8_9 = '1.8.9',
	_1_16_5 = '1.16.5'
}

export interface TexturePack {
	id: string;
	name: string;
	version: JavaVersion;
	lastModified: Date;
}

export type TexturePackBlockData = {
	name: string;
	prettyName: string;
}[];

// for a single texture pack
export interface TexturePackData {
	blocks: TexturePackBlockData;
}

// /static/data/texture-packs.json
export type TexturePackDatas = Record<JavaVersion, TexturePackData>;
