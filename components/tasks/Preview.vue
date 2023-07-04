<template>
	<div class="group relative">
		<div class="relative py-2 pl-4 pr-2 mb-7 rounded-md bg-gray-50 dark:bg-gray-700">
			<!-- project -->
			<div class="absolute inline-flex justify-center items-center bg-orange-500 px-4 rounded-md text-white -top-3 text-xs h-5 cursor-default">
				Project name
			</div>
			<!-- title -->
			<div class="flex justify-between items-center mt-6">
				<div class="flex items-center w-4/5">
					<div class="flex justify-between items-center w-full cursor-default">
						<p class="first-letter:capitalize truncate text-black font-bold text-lg dark:text-white"> {{ task.title }} </p>
					</div>
				</div>
				<div class="flex justify-end w-1/5">
				
				</div>
			</div>
			<!-- content -->
			<div
				v-if="task.content"
				class="block h-auto py-2 text-xs text-gray-500 cursor-default dark:text-gray-200"
			>
				<p class="first-letter:capitalize"> {{ task.content }} </p>
			</div>
			<!-- priority -->
			<div class="flex mt-5 mb-3 cursor-default">
				<div :class="['capitalize flex px-2 text-xs h-4 rounded-md mr-3', {
						'bg-amber-100 text-amber-500': priority === 0,
						'bg-emerald-100 text-emerald-500': priority === 1,
						'bg-red-100 text-red-500': priority === 2,
					}]"
				>
					{{  priorities[priority] }}
				</div>
				<div v-if="state"
					:class="['capitalize flex px-2 text-xs h-4 rounded-md mr-3', {
						'bg-amber-100 text-amber-500': state === 0,
						'bg-emerald-100 text-emerald-500': state === 1,
						'bg-red-100 text-red-500': state === 2,
					}]"
				>
					{{  states[state] }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	const priorities: string[] = ['low', 'medium', 'high'];
	const states: string[] = ['passed', 'complete', 'denied'];
	
	defineProps<({ task: any })>();

	const priority = ref(2);
	const state = ref(0);
</script>