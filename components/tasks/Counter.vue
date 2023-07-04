<template>
	<div class="relative inline-flex flex-col w-aut ml-4 mb-4">
		<!-- counter -->
		<div class="flex items-center font-normal text-slate-700">
			<span class="text-[0.9rem] mr-3 dark:text-slate-400">{{ $t('counter_title') }}</span>
			<div class="flex items-center">
				<span class="text-blue-600 dark:text-blue-400"> {{ props.done }} </span>
				<span class="dark:text-slate-400">/</span>
				<span class="dark:text-slate-400"> {{ props.all }} </span>
			</div>
			<div v-if="changed" class="cursor-default flex items-center ml-5 text-orange-300 counter-action transition-all">
				<Icon class="text-lg" name="ic:round-star-rate" />
				<span class="ml-1 text-xs">{{ props.done === props.all ? $t('all_complete') : $t('counter_action') }}</span>
			</div>
		</div>
		<!-- meter -->
		<div class="flex h-3 w-64 rounded-[10px] overflow-hidden mt-4 relative">
			<div class="h-full w-full bg-blue-500 opacity-10 dark:bg-blue-100" />
			<div :style="style" class="absolute h-full bg-blue-500 rounded-[10px] transition-all" />
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<({
	all: number,
	done: number
})>();

const style = computed(() => {
	return { width: `${Math.round((props.done / props.all) * 100)}%` }
})

const changed = ref(false);

watch(() => props.done, (newValue, oldValue) => {
	if(newValue > oldValue) {
		changed.value = true;
		setTimeout(() => {
			changed.value = false
		}, 1000);
	}
})
</script>

<style lang="scss" scoped>

@keyframes show {
	0% {
		transform: translateY(0.5rem);
		opacity: 0
	}
	20% {
		transform: translateY(0);
		opacity: 1
	}
	80% {
		transform: translateY(0);
		opacity: 1
	}
	100% {
		transform: translateY(0.5rem);
		opacity: 0
	}
}
.counter-action {
	animation: show 1s ease-in-out forwards
}

</style>