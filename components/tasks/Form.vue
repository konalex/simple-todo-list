<template>
  <div class="inline-block flex-col py-2 px-4 mx-auto rounded-md">
	<form class="flex" @submit.prevent="add">
		<BaseInput placeholder="Enter the task" @change="change" :clear="clear"/>
		<BaseButton type="submit" title="Add" class="ml-2 border-slate-200 bg-slate-200 text-slate-700 hover:bg-slate-300 hover:border-slate-300 focus:border-slate-400">
			<Icon name="material-symbols:add-rounded" />
		</BaseButton>
	</form>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';

const store = useTasksStore();
const text = ref('');
const clear = ref(false);

function change(value) {
	text.value = value;
}

function add() {
	if(text.value) {
		store.add(text.value);
		clear.value = true;
		nextTick(() => {
			text.value = '';
			clear.value = false;
		})
	}
}
</script>