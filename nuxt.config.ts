// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			title: 'Simple TODO app'
		}
	},

	modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-icon', '@pinia/nuxt'],
	devtools: {
		enabled: true
	},
	pinia: {
		autoImports: [
		  'defineStore'
		],
	  },
})