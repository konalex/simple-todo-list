<template>
	<div :class="{
		'relative after:text-red-500 after:absolute after:top-2 after:left-1 after:w-1 after:h-1 required': required
	}">
		<input
			type="text"
			class="w-full h-8 relative border border-slate-200 outline-none bg-white rounded-md px-3 transition-all text-slate-700 shadow-sm hover:bg-white hover:shadow focus:border focus:border-slate-400"
			:placeholder="placeholder"
			:value="value"
			@change="change($event)"
		>
	</div>
</template>

<script setup lang="ts">
const emit = defineEmits(['change'])
defineProps(['required', 'placeholder', 'value'])

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