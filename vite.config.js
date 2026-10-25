import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import vercel from '@sveltejs/adapter-vercel';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit({ adapter: vercel(), preprocess: vitePreprocess() })]
});
