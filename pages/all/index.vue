<template>
  <div class="container mx-auto py-4">
    <h1 class="text-center mb-6">All tasks</h1>
    <div class="flex">
      <TasksForm />
    </div>
    <div class="mt-6 w-4/12 mx-auto">
      <TasksPreview v-for="task in store.getTasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore();

</script>