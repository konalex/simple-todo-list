<template>
	<div class="pt-4">
		<div class="mt-1 container mx-auto">
			<!-- Task counter -->
			<TasksCounter :all="all" :done="done" />
		</div>
		<div class="overflow-auto h-[calc(100vh-11rem)] px-4 flex">
			<!-- Task groups -->
			<TasksGroup v-for="(group, i) in groups" :key="i" :name="group.name" :color="group.color" :tasks="group.tasks"
				class="mr-4" />
		</div>
	</div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore();

const groups = computed(() => {
	return [
		{
			name: 'To do',
			color: '#973FCF',
			tasks: store.getNewTasks
		},
		{
			name: 'in progress',
			color: '#FFA500',
			tasks: []
		},
		{
			name: 'done',
			color: '#68B266',
			tasks: store.getDoneTasks
		}
	]
});

const all = computed(() => {
	return store.getAllTasks.length;
})

const done = computed(() => {
	return store.getDoneTasks.length
})

</script>

<style lang="scss">
.tasks-list {
	height: calc(100vh - 160px);
}
</style>