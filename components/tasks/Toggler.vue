<template>
	<BaseButton @click="newTask" class="flex text-left hover:bg-slate-200 w-32 items-center px-2 py-2">
		<Icon
			name="material-symbols:add-rounded"
			:class="['left-2 transition-transform bg-transparent w-1/4', {
				'rotate-45': store.form
			}]"
		/>
		<div class="relative flex whitespace-nowrap overflow-hidden w-3/4 h-full p-0 text-center">
			<span
				:class="['w-full flex justify-center items-center h-full absolute top-0 transition-transform', {
					'translate-y-0': store.form,
					'translate-y-6 ': !store.form
				}]"
			>
				{{ $t('cancel') }}
			</span>
			<span
				:class="['w-full flex justify-center items-center translate-y-0 h-full absolute top-0 transition-transform', {
					'translate-y-6': store.form
				}]"
			>
				{{ $t('new_task') }}
			</span>
		</div>
	</BaseButton>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks'

const store = useTasksStore();

function newTask() {
  store.toggle();
}

</script>

<style>

</style>