import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	},

	onwarn: (warning, handler) => {
		if (warning.code.startsWith('a11y-')) return;
		if (warning.code === 'missing-exports-condition') return;
		if (warning.code === 'a11y-no-static-element-interactions') return;
		if (warning.code === 'svelte-ignore a11y-autofocus') return;
		if (warning.code.startsWith('css-unused-selector')) return;
		handler(warning);
	}
};

export default config;
