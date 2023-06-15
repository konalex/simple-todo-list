<template>
	<div class="flex flex-col px-4 pb-4 pt-6 bg-white rounded-md w-96">
		<div class="flex flex-col cursor-default pb-4">
			<div class="flex items-center">
				<div class="block w-2 h-2 rounded-full" :style="bgStyle" />
				<p class="text-md ml-3 capitalize font-bold"> {{ props.name }} </p>
				<div
					v-if="props.tasks.length"
					class="bg-slate-100 w-6 h-6 flex items-center justify-center ml-4 rounded-full text-sm"
				>
					{{ props.tasks.length }}
				</div>
			</div>
			<div class="w-full h-1 mt-4" :style="bgStyle"></div>
		</div>
		<div class="pb-0 pt-6 w-full mx-auto h-[calc(100%-3.125rem)] overflow-auto">
			<TasksPreview
				v-for="task in props.tasks"
				:key="task.id"
				:task="task"
				class="w-full"
			/>
		</div>
	</div>  
</template>

<script setup lang="ts">
const props = defineProps<({
	name: string,
	color: string,
	tasks: any[]
})>();

const bgStyle = ref({
	backgroundColor: props.color
})

</script>

<style>

</style>