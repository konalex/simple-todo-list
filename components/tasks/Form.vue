<template>
  <div class="inline-block flex-col py-2 px-4 mx-auto rounded-md">
	<form class="flex flex-col" @submit.prevent="add">
		<BaseInput placeholder="Enter the task" @change="changeTitle" :clear="clear" class="mb-2" :required="true" />
		<BaseTextArea placeholder="Enter the description" class="mb-2" @input="changeContent" :clear="clear" />
		<BaseButton
			type="submit"
			title="Add"
			class="w-full h-10 border-blue-400 bg-blue-400 text-white hover:bg-blue-500 hover:bg-blue-500"
		>
			<!-- <Icon name="material-symbols:add-rounded" /> -->
			Submit
		</BaseButton>
	</form>
  </div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';

// title
const title = ref('');
function changeTitle(value) {
	title.value = value;
}

// content
const content = ref('');
function changeContent(value) {
	content.value = value;
}

// action
const store = useTasksStore();
const clear = ref(false);
function add() {
	if(title.value) {
		store.add(title.value, content.value);
		clear.value = true;
		nextTick(() => {
			title.value = '';
			content.value = '';
			clear.value = false;
		})
	}
}
</script>