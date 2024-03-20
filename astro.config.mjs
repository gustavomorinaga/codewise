import path from 'path';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind({ applyBaseStyles: false }), svelte()],
	vite: {
		resolve: {
			alias: {
				$lib: path.resolve('./src/lib')
			}
		}
	}
});
