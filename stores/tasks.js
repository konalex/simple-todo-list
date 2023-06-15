import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useTasksStore = defineStore('tasks', {
	state: () => ({
		tasks: [],
		form: false
	}),
	getters: {
		getAllTasks: state => state.tasks,
		getNewTasks: state => state.tasks.filter(task => !task.done),
		getDoneTasks: state => state.tasks.filter(task => task.done)
	},
	actions: {
		toggle() {
			this.form = !this.form;
		},
		add(title, content) {
			this.tasks.push({
				id: uuidv4(),
				title: title,
				content: content,
				done: !!Math.round(Math.random())
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
		done(id, value) {
			this.tasks.find(element => element.id === id).done = value;
		}
	}
});