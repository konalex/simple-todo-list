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
		add(title, content) {
			this.tasks.push({
				id: uuidv4(),
				title: title,
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
		update(id, title, content) {
			const task = this.tasks.find(element => element.id === id);
			task.title = title;
			task.content = content;
		},
		star(id, value) {
			this.tasks.find(element => element.id === id).stared = value;
		},
		pin(id, value) {
			this.tasks.find(element => element.id === id).pinned = value;
		},
		done(id, value) {
			this.tasks.find(element => element.id === id).done = value;
		}
	}
});