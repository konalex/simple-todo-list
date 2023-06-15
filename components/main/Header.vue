<template>
	<nav class="flex items-center justify-between container pt-2">
		<ul class="w-1/2 text-center flex ml-4 z-0">
			<li v-for="(route, i) in $router.options.routes" :key="i" class="z-0">
				<NuxtLink :to="route.path" :class="['capitalize inline-flex items-center py-3 px-6 transition-all', {
					'text-blue-400 bg-blue-100': route.name === $route.name,
					'bg-white text-slate-600 hover:bg-blue-100': route.name !== $route.name,
					'rounded-s-md ': i === 0,
					'rounded-e-md': i === $router.options.routes.length - 1
				}]">
					<Icon :name="icons[route.name]" class="w-6 h-6 mr-3" />
					<span>
						{{ $t(`${String(route.name)}_route`) }}
					</span>
				</NuxtLink>
			</li>
		</ul>
		<BaseButton
			class="flex text-left text-white w-36 items-center px-4 py-3 bg-blue-400 border-none hover:bg-blue-500 dark:bg-blue-700 dark:text-white dark:hover:bg-blue-800"
			@click="newTask"
		>
			<Icon name="material-symbols:add-rounded" class="bg-transparent w-1/4" />
			<div class="relative flex whitespace-nowrap w-3/4 h-full p-0 text-center">
				<span class="w-full flex justify-center items-center h-full transition-colors">
					{{ $t('new_task') }}
				</span>
			</div>
		</BaseButton>
	</nav>
</template>

<script setup>
const icons = ref({
	all: 'material-symbols:checklist-rounded',
	projects: 'iconoir:report-columns'
});

import { useTasksStore } from '@/stores/tasks'
const store = useTasksStore();

function newTask() {
	store.toggle();
}
</script>
