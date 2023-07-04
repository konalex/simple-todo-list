<template>
	<div class="flex flex-col pl-4 pr-2 pb-4 pt-6 bg-white rounded-md w-96 dark:bg-gray-600">
		<div class="flex flex-col cursor-default pb-4 pr-3">
			<div class="flex items-center">
				<div class="block w-2 h-2 rounded-full" :style="bgStyle" />
				<p class="text-md ml-3 capitalize font-bold dark:text-gray-300"> {{ name }} </p>
				<div
					v-if="tasks.length"
					class="bg-slate-100 w-6 h-6 flex items-center justify-center ml-4 rounded-full text-sm dark:bg-gray-500 dark:text-gray-200"
				>
					{{ tasks.length }}
				</div>
			</div>
			<div class="w-full h-1 mt-4" :style="bgStyle"></div>
		</div>
		<div class="pb-0 pt-6 w-full mx-auto h-[calc(100%-3.125rem)] overflow-auto">
			<draggable
				v-model="list"
				:animation="200"
				:disabled="false"
				:component-data="{
					tag: 'div',
					name: !drag ? 'flip-list' : null
				}"
				ghostClass="ghost"
				group="tasks"
				class="list-group transition-all"
				item-key="order"
				@start="drag = true"
				@end="drag = false"
				@add="add"
				@remove="remove"
			>
				<template #item="{ element }">
					<TasksPreview
						:key="element.id"
						:task="element"
						class="w-[calc(100%-0.75rem)] list-group-item"
					/>
				</template>
			</draggable>
		</div>
	</div>  
</template>

<script>
import { mapActions } from 'pinia'
import { useTasksStore as store } from '@/stores/tasks'
import draggable from "vuedraggable";
const onlyUnique = (value, index, array) => array.indexOf(value) === index;

export default {
	name: 'TasksGroup',
	components: {
		draggable
	},
	props: {
		name: {
			type: String,
			required: true
		},
		color: {
			type: String,
			default: () => `#${Math.floor(Math.random()*16777215).toString(16)}`
		},
		tasks: {
			type: Array,
			default: () => ([])
		},
		type: {
			type: Number,
			required: true
		}
	},
	data() { 
		return {
			list: [],
			bgStyle: { backgroundColor: this.color },
			drag: false
		}
	},
	watch: {
		tasks: {
			handler(value) {
				this.list = value.map((el, id) => { return { ...el, order: id + 1 } });
			},
			deep: true,
			immediate: true
		}
	},
	methods: {
		...mapActions(store, ['inProgress', 'done', 'restore']),
		// ...mapActions(store, ['done']),
		// ...mapActions(store, ['restore']),
		updateTasksInStore() {
			const unique = this.list.filter(onlyUnique);
			switch(this.type) {
				case 1:
					unique.forEach(el => { this.restore(el.id) })
					break;
				case 2:
					unique.forEach(el => { this.inProgress(el.id) })
					break;
				case 3:
					unique.forEach(el => { this.done(el.id) })
					break;
			}
		},
		add() {
			this.updateTasksInStore();
		},
		remove() {
			this.updateTasksInStore();
		}
	}
}
</script>

<style>
.ghost {
	opacity: 0.5;
}
</style>