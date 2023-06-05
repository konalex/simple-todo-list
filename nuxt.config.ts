// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Simple TODO app'
		},
	},

	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icon', '@pinia/nuxt', '@nuxtjs/color-mode'],
	devtools: {
		enabled: true
	},
	pinia: {
		autoImports: [
		  'defineStore'
		],
	},
	colorMode: {
		classSuffix: ""
	}
})