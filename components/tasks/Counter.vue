<template>
	<div class="inline-flex flex-col w-aut ml-4 mb-4">
		<!-- counter -->
		<div class="flex items-center font-normal text-slate-700">
			<span class="text-[0.9rem] mr-3">Task Meter</span>
			<div class="flex items-center">
				<span class="text-blue-600"> {{ done }} </span>
				/
				<span> {{ all }} </span>
			</div>
		</div>
		<!-- meter -->
		<div class="flex h-3 w-64 rounded-[10px] overflow-hidden mt-4 relative">
			<div class="h-full w-full bg-blue-500 opacity-10" />
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
</script>