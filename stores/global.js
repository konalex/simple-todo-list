import { defineStore } from 'pinia';

export const useGlobalStore = defineStore('global', {
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