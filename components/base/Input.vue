<template>
	<input
		type="text"
		class="h-8 border border-slate-200 outline-none bg-white rounded-md px-3 transition-all text-slate-700 shadow-sm hover:bg-white hover:shadow focus:border focus:border-slate-400 "
		:value="text"
		@change="change($event)"
	>
</template>

<script setup lang="ts">
const text = ref('')
const emit = defineEmits(['change'])
const props = defineProps(['clear'])

function change(event: any) {
	const { value } = event.target;	
	emit('change', value);
}

watch(props.clear, (value) => {
	if(value) text.value = '';
})


</script>