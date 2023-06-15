import locales from './global';
// Routes
const routes = {
	all_route: "Списком",
	projects_route: "Проекти"
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

// Main form
const main_form = {
	main_form_title: 'Створити задачу',
	main_form_task_title_label: 'Заголовок задачі',
	main_form_task_title_placeholder: 'Введіть заголовок',
	main_form_task_description_label: 'Контент задачі',
	main_form_task_description_placeholder: 'Введіть опис задачі'
};

export default {
	...titles,
	...buttons,
	...routes,
	...locales,
	...main_form
}