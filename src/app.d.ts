// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {

	type JavaVersion = "1.6.1" | "1.6.2" | "1.6.4" | "1.7.2" | "1.7.4" | "1.7.5" | "1.7.6" | "1.7.7" | "1.7.8" | "1.7.9" | "1.7.10" | "1.8" | "1.8.1" | "1.8.2" | "1.8.3" | "1.8.4" | "1.8.5" | "1.8.6" | "1.8.7" | "1.8.8" | "1.8.9" | "1.9" | "1.9.1" | "1.9.2" | "1.9.3" | "1.9.4" | "1.10" | "1.10.1" | "1.10.2" | "1.11" | "1.11.1" | "1.11.2" | "1.12" | "1.12.1" | "1.12.2" | "1.13" | "1.13.1" | "1.13.2" | "1.14" | "1.14.1" | "1.14.2" | "1.14.3" | "1.14.4" | "1.15" | "1.15.1" | "1.15.2" | "1.16" | "1.16.1" | "1.16.2" | "1.16.3" | "1.16.4" | "1.16.5" | "1.17" | "1.17.1" | "1.18" | "1.18.1" | "1.18.2" | "1.19" | "1.19.1" | "1.19.2" | "1.19.3" | "1.19.4" | "1.20" | "1.20.1"

	interface TexturePack {
		id: string
		name: string
		version: JavaVersion
		lastModified: Date
	}


	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			currentTexturePack: TexturePack
		}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
