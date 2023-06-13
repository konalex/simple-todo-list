import locales from './global';
// Routes
const routes = {
	all_route: "List"
};

// Buttons
const buttons = {
	submit: "Submit",
	cancel: "Cancel",
	new_task: "New task",
}

// Titles
const titles = {
	all_title: "All tasks",
}

export default {
	...titles,
	...buttons,
	...routes,
	...locales
}