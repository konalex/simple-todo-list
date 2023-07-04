import { defineStore } from 'pinia';
import { v4 as uuidv4 } from 'uuid';

export const useTasksStore = defineStore('tasks', {
	state: () => ({
		tasks: [],
		form: false
	}),
	getters: {
		getAllTasks: state => state.tasks,
		getNewTasks: state => state.tasks.filter(task => !task.done && !task.work),
		getInProgressTask: state => state.tasks.filter(task => task.work && !task.done),
		getDoneTasks: state => state.tasks.filter(task => task.done && !task.work)
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
				done: false,
				work: false
			})
		},
		remove(id) {
			const index = this.tasks.findIndex(element => element.id === id);
			this.tasks.splice(index, 1);
		},
		update(id, title, content) {
			const index = this.tasks.findIndex(element => element.id === id);
			const task = this.tasks[index];
			task.title = title;
			task.content = content;
			this.tasks.splice(index, 1, task);
		},
		inProgress(id) {
			const index = this.tasks.findIndex(element => element.id === id);
			const task = this.tasks[index];
			task.work = true;
			task.done = false;
			this.tasks.splice(index, 1, task);
		},
		done(id) {
			const index = this.tasks.findIndex(element => element.id === id);
			const task = this.tasks[index];
			task.work = false;
			task.done = true;
			this.tasks.splice(index, 1, task);
		},
		restore(id) {
			const index = this.tasks.findIndex(element => element.id === id);
			const task = this.tasks[index];
			task.work = false;
			task.done = false;
			this.tasks.splice(index, 1, task);
		}
	}
});