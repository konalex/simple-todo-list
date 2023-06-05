import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
	id: 'global',
	state: () => ({
		mode: ''
	}),
	getters: {
		getMode: state => state.mode
	},
	actions: {
		setMode(value) {
			this.mode = value;
		} 
	}
})