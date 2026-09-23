import { sveltekit } from '@sveltejs/kit/vite'
import { createRequire } from 'module';

var require = createRequire(import.meta.url);
var module = { exports: {} };

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
}

export default config;
