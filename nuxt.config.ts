// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Simple TODO app'
		},
		pageTransition: { name: 'page', mode: 'out-in' }
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
	},
	i18n: {
		vueI18n: './i18n.config.ts'
	}
})