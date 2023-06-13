import locales from './global';
// Routes
const routes = {
	all_route: "Списком"
};

// Buttons
const buttons = {
	submit: "Підтвердити",
	cancel: "Відміна",
	new_task: "Створити",
}

// Titles
const titles = {
	all_title: "Всі задачі",
}

export default {
	...titles,
	...buttons,
	...routes,
	...locales
}