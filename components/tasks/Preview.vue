<template>
	<div :class="['group relative', {
		'sticky top-0 z-20': task.pinned
	}]">
		<div :class="['relative py-2 pl-4 pr-2 mb-7 rounded-md border bg-slate-50 shadow-md z-10', {
			'border-orange-300': task.stared
		}]">
			<div class="flex justify-between items-center ">
				<div class="flex items-center w-4/5">
					<BaseCheckbox :value="task.done" @change="done(task.id, $event)" class="flex-4 mr-3" />
					<BaseInput v-if="change" :value="task.title" @change="updateTitle" />
					<div
						v-else
						:class="['flex justify-between items-center w-full cursor-default', {
							'line-through': task.done,
							'cursor-pointer group': task.content
						}]"
						@click="open = !open"
					>
						<p class="first-letter:capitalize truncate"> {{ task.title }} </p>
						<Icon
							v-if="task.content"
							name="solar:alt-arrow-down-linear"
							:class="['text-transparent transition-all group-hover:text-black', {
								'rotate-180': open
							}]"
						/>
					</div>
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
			<div v-if="task.content" :class="['opacity-0 border-t-2 transition-all scale-y-0 origin-top h-0', {
				'opacity-100 scale-y-100 block h-auto py-2 mt-2 ': open
			}]">
				<BaseTextArea v-if="change" :value="task.content" @input="updateContent" class="editable" />
				<p v-else class="first-letter:capitalize"> {{ task.content }} </p>
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

const props = defineProps(['task'])
// store
const store = useTasksStore();
function remove(id) {
	store.remove(id)
}

function star(id, value) {
	store.star(id, value);
}

function pin(id, value) {
	store.pin(id, value);
}

function done(id, value) {
	store.done(id, value)
}

// change
const change = ref(false);
function edit() {
	change.value = true;
}

function update(id) {
	const upTitle = title.value || props.task.title;
	const upContent = content.value || props.task.content;
	if (upTitle) store.update(id, upTitle, upContent);
	change.value = false;
}

// title
const title = ref('');
function updateTitle(value) {
	title.value = value;
}

// content
const content = ref('');
function updateContent(value) {
	content.value = value;
}

// open
const open = ref(false);
</script>

<style lang="scss" scoped>
.editable {
	width: 100%;
}
</style>