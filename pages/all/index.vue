<template>
	<div class="pt-4">
		<div class="mt-1 container mx-auto">
			<!-- Task counter -->
			<TasksCounter :all="all" :done="done" />
		</div>
		<div class="overflow-auto h-[calc(100vh-11rem)] px-4 flex">
			<!-- Task groups -->
			<TasksGroup
				v-for="(group, i) in groups"
				:key="i"
				:name="group.name"
				:color="group.color"
				:tasks="group.tasks"
				:type="group.type"
				class="mr-4"
			/>
		</div>
	</div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'
const store = useTasksStore()
const { t } = useI18n({ useScope: 'global' })

const groups = computed(() => [
	{
		name: t('todo_title'),
		color: '#973FCF',
		tasks: store.getNewTasks,
		type: 1
	},
	{
		name: t('process_title'),
		color: '#FFA500',
		tasks: store.getInProgressTask,
		type: 2
	},
	{
		name: t('done_title'),
		color: '#68B266',
		tasks: store.getDoneTasks,
		type: 3
	}
]);

const all = computed(() => store.getAllTasks.length)
const done = computed(() => store.getDoneTasks.length)

</script>

<style lang="scss">
.tasks-list {
	height: calc(100vh - 160px);
}
</style>