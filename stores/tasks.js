import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useTasksStore = defineStore('tasks', {
	id: 'tasks',
	state: () => ({
		tasks: []
	}),
	getters: {
		getTasks: state => state.tasks
	},
	actions: {
		add(content) {
			this.tasks.push({
				id: uuidv4(),
				content: content,
				done: false,
				stared: false,
				pinned: false
			})
		},
		remove(id) {
			const index = this.tasks.findIndex(element => element.id === id);
			this.tasks.splice(index, 1);
		},
		update(id, content) {
			this.tasks.find(element => element.id === id).content = content;
		},
		star(id, value) {
			this.tasks.find(element => element.id === id).stared = value;
		}
	}
});