<template>
	<div :class="['flex justify-between items-center py-2 pl-4 pr-2 mb-2 rounded-md border border-slate-100 shadow-md', { 'border-orange-300': change }]">
		<div class="flex items-center w-4/5">
			<BaseCheckbox :value="task.done" @change="task.done = $event" class="flex-4 mr-3" />
			<BaseInput v-if="change" :value="task.content" @change="updateContent" />
			<p v-else :class="['w-5/6 cursor-default first-letter:capitalize truncate', { 'line-through': task.done }]">
				{{ task.content }}
			</p>
		</div>
		<div class="flex justify-end w-1/5">
			<div v-if="!task.done">
				<BaseButton v-if="change" class="mr-2 text-blue-400 hover:text-white hover:bg-blue-400 hover:border-blue-400" @click="update(task.id)" >
					<Icon name="material-symbols:save" />
				</BaseButton>
				<BaseButton v-else class="mr-2 text-orange-400 hover:text-white hover:bg-orange-400 hover:border-orange-400" @click="edit">
					<Icon name="material-symbols:edit" />
				</BaseButton>
			</div>
			<BaseButton class="text-red-600 hover:text-white hover:bg-red-400 hover:border-red-400" @click="remove(task.id)">
				<Icon name="material-symbols:delete" />
			</BaseButton>
		</div>
	</div>
</template>

<script setup>
import { useTasksStore } from '@/stores/tasks';

defineProps(['task'])
const store = useTasksStore();
const change = ref(false);
const content = ref('');

function edit() {
	change.value = true;
}

function update(id) {
	if(content.value) store.update(id, content.value);
	change.value = false;
}

function remove(id) {
	store.remove(id)
}

function updateContent(value) {
	content.value = value;
} 

</script>