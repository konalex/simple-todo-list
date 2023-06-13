<template>
	<div class="-mt-1 ml-2 relative">
		<BaseButton class="border-transparent" @click="toggle">
			<CountryFlag :country="flags[locale] || locale" size="normal" class="rounded-sm picker" />
		</BaseButton>
		<div v-if="open" class="flex flex-col shadow-md rounded-md mt-1 border border-slate-200 absolute top-19 l-0">
			<div
				v-for="(lang, i) in availableLocales"
				:key="`${lang}-${i}`"
				:class="['transition flex items-center pt-0 px-1 pb-2 cursor-pointer hover:text-slate-700 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100 dark:hover:bg-slate-500', {
					'rounded-t-md': i === 0,
					'rounded-b-md': i === availableLocales.length - 1,
					'bg-slate-200 dark:bg-slate-500': lang === locale
				}]"
				@click="apply(lang)"
			>
				<CountryFlag :country="flags[lang] || lang" size="normal" class="rounded-md" />
				<span class="ml-1 -mb-2">
					{{ $t(`locale_${lang}`) }}
				</span>
			</div>
		</div>
	</div>
  </template>

<script setup lang="ts">
const open = ref(false);
function toggle() {
	open.value = !open.value;
}

import CountryFlag from 'vue-country-flag-next'
const { locale, availableLocales, setLocale } = useI18n()
const flags: any = { 'en': 'gb' }
function apply(lang: string) {
	setLocale(lang)
	toggle()
}

</script>

<style lang="scss" scoped>
.picker {
	margin-top: -0.6em !important;
	margin-right: -0.7em !important;
}
</style>