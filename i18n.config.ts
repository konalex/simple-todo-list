import en from './locales/en';
import ua from './locales/ua';

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'ua',
	messages: { en, ua }
}))