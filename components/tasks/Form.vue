<template>
	<div
		id="task-form"
		:class="['w-full h-full fixed top-0 left-0 flex justify-end', {
			'opacity-100 z-10' : store.form,
			'opacity-0 -z-10' : !store.form
		}]"
	>
		<div class="bg-slate-900 opacity-60 w-full h-full absolute top-0 left-0" @click="close" />
		<form
			:class="['flex top-0 right-0 flex-col pt-8 pb-2 px-6 rounded-md h-full w-2/6 relative bg-slate-100 transition-transform shadow-xl justify-between', {
				'translate-x-0': store.form,
				'translate-x-full ': !store.form,
			}]"
			@submit.prevent="add"
		>
			<BaseButton
				class="absolute right-4 top-4 hover:bg-slate-200"
				@click="close" 
			>
				<Icon name="ic:round-close" />
			</BaseButton>
			
			<div class="main">
				<h2 class="mb-8 text-3xl">{{ $t('main_form_title') }}</h2>
				
				<BaseInput
					class=""
					:label="$t('main_form_task_title_label')"
					:placeholder="$t('main_form_task_title_placeholder')"
					:clear="clear"
					@change="changeTitle"
				/>
				<div class="my-4">
					<BaseTextArea
						class="w-full"
						:label="$t('main_form_task_description_label')"
						:placeholder="$t('main_form_task_description_placeholder')"
						:clear="clear"
						@input="changeContent"
					/>
				</div>
			</div>

			<div class="action flex flex-col justify-center items-center pb-20">
				<BaseButton
					type="submit"
					title="Add"
					class="w-36 h-12 border-blue-400 bg-blue-400 text-white hover:bg-blue-500"
				>
					{{ $t('submit') }}
				</BaseButton>
				<BaseButton
					class="w-36 h-10 border-transparent bg-transparent text-black shadow-none hover:shadow-none hover:text-red-400"
					@click="close"
				>
					{{  $t('cancel') }}
				</BaseButton>
			</div>
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
			store.toggle();
		})
	}
}

function close() {
  store.toggle();
}
</script>