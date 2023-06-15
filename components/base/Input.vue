<template>
	<label
		:class="[{
			'relative after:text-red-500 after:absolute after:top-2 after:left-1 after:w-1 after:h-1 required': required
		}]"
	>
		<p v-if="label" class="mb-1">{{ label }}</p>
		<input
			type="text"
			class="w-full h-12 relative border border-slate-200 mb-2 outline-none bg-white rounded-md px-3 transition-all text-slate-700 shadow-sm hover:bg-white hover:shadow focus:border focus:border-slate-400"
			:placeholder="placeholder"
			:value="value"
			@change="change($event)"
		>
	</label>
</template>

<script setup lang="ts">
const emit = defineEmits(['change']);
defineProps<{
	required?: boolean,
	placeholder?: string,
	value: string,
	label?: string
}>();

function change(event: any) {
	const { value } = event.target;	
	emit('change', value);
}
</script>

<style lang="scss" scoped>
.required {
	&::after {
		content: '*';
	}
}
</style>