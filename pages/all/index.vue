<template>
  <div class="pt-4">
    <h1 class="text-center mb-6">All tasks</h1>
    <div class="flex">
      <TasksForm />
    </div>
    <div class="tasks-list overflow-auto">
      <div class="mt-6 pb-2 pt-6 container mx-auto">
        <TasksPreview v-for="task in store.getTasks" :key="task.id" :task="task" class="w-1/3 mx-auto" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore();

</script>

<style lang="scss">
.tasks-list {
	height: calc(100vh - 160px);
}
</style>