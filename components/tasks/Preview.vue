<template>
	<div :class="['group relative', {
		'sticky top-0 z-20': task.pinned
	}]">
		<div :class="['relative flex justify-between items-center py-2 pl-4 pr-2 mb-8 rounded-md border bg-slate-50 shadow-md z-10', {
			'border-orange-300': task.stared
		}]">
			<div class="flex items-center w-4/5">
				<BaseCheckbox :value="task.done" @change="task.done = $event" class="flex-4 mr-3" />
				<BaseInput v-if="change" :value="task.content" @change="updateContent" />
				<p v-else v-text="task.content" :class="['w-5/6 cursor-default first-letter:capitalize truncate', {
					'line-through': task.done
				}]" />
			</div>
			<div class="flex justify-end w-1/5">
				<div v-if="!task.done">
					<BaseButton v-if="change"
						class="mr-2 text-blue-400 hover:text-white hover:bg-blue-400 hover:border-blue-400"
						@click="update(task.id)">
						<Icon name="material-symbols:save" />
					</BaseButton>
					<BaseButton v-else
						class="mr-2 text-orange-400 hover:text-white hover:bg-orange-400 hover:border-orange-400"
						@click="edit">
						<Icon name="material-symbols:edit" />
					</BaseButton>
				</div>
				<BaseButton class="text-red-600 hover:text-white hover:bg-red-400 hover:border-red-400"
					@click="remove(task.id)">
					<Icon name="material-symbols:delete" />
				</BaseButton>
			</div>
		</div>
		<BaseButton title="Star" :class="['absolute right-1/2 top-0 group-hover:-translate-y-6 flex items-center z-0', {
			'border-transparent text-orange-300 hover:bg-orange-300 hover:text-white hover:border-orange-300': !task.stared,
			'-translate-y-4 group-hover:-translate-y-4 bg-orange-300 text-white border-orange-300': task.stared
		}]" @click="star(task.id, !task.stared)">
			<Icon name="material-symbols:star" />
		</BaseButton>
		<BaseButton title="Pin" :class="['absolute left-0 top-2 flex items-center z-0 text-blue-300 hover:bg-blue-300 hover:text-white hover:border-blue-300', {
			'z-20 -translate-x-6 group-hover:-translate-x-6 bg-blue-300 text-white': task.pinned,
			'border-transparent bg-transparent group-hover:-translate-x-6': !task.pinned
		}]" @click="pin(task.id, !task.pinned)">
			<Icon name="ic:round-push-pin" />
		</BaseButton>
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
	if (content.value) store.update(id, content.value);
	change.value = false;
}

function remove(id) {
	store.remove(id)
}

function updateContent(value) {
	content.value = value;
}

function star(id, value) {
	store.star(id, value);
}

function pin(id, value) {
	store.pin(id, value);
}

</script>