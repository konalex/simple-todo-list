<template>
  <div class="pt-4">
    <h1 class="text-center mb-6">All tasks</h1>
    <div class="flex">
      <TasksForm />
    </div>
    <div class="mt-1 container mx-auto">
      <div :class="['w-1/3 mx-auto text-center', {
        'text-green-500':  store.getTasks.filter(el => el.done).length === store.getTasks.length,
        'opacity-0': !store.getTasks.length
      }]">
        {{ store.getTasks.filter(el => el.done).length }}/{{ store.getTasks.length }}
      </div>
    </div>
    <div class="tasks-list overflow-auto">
      <div class="pb-2 pt-6 container mx-auto">
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