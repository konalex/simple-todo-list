<template>
	<div class="flex relative">
		<Icon
			name="ic:round-dark-mode"
			:class="[ standart, 'text-white hover:border-white', {
				'scale-0': $colorMode.preference === 'light'
			}]"
			size="1.5rem"
			@click="changeMode('light')"
		/>
		<Icon
			name="ic:twotone-light-mode"
			:class="[ standart, 'text-orange-400 hover:text-orange-600', {
				'scale-0': $colorMode.preference === 'dark'
			}]"
			size="1.5rem"
			@click="changeMode('dark')"
		/>
	</div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const standart = ref('absolute cursor-pointer transition-all rounded-full border border-transparent')

function changeMode(mode: string) {
	colorMode.preference = mode;
}
</script>