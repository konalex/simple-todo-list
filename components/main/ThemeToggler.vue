<template>
	<div class="flex relative w-6 h-6">
		<Transition>
			<Icon
				v-if="colorMode.preference !== 'dark'"
				name="ic:round-dark-mode"
				size="1.5rem"
				:class="[ standart, 'text-gray-800 hover:border-gray-800']"
				@click="changeMode('dark')"
			/>
			<Icon
				v-else
				name="ic:twotone-light-mode"
				size="1.5rem"
				:class="[ standart, 'text-orange-300 hover:text-orange-200']"
				@click="changeMode('light')"
			/>
		</Transition>
	</div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();
const standart = 'absolute cursor-pointer transition-all rounded-full border border-transparent';

function changeMode(mode: string) {
	colorMode.preference = mode;
}
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
	transition: all 150ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
	transform: scale(0);
}
</style>