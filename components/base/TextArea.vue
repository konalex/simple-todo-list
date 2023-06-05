<template>
	<textarea
		cols=""
		rows="5"
		class="border w-80 border-slate-200 outline-none bg-white rounded-md p-2 transition-all text-slate-700 shadow-sm hover:bg-white hover:shadow focus:border focus:border-slate-400"
		:value="text"
		:placeholder="placeholder"
		@input="input($event)"
	/>
</template>

<script setup lang="ts">
const text = ref('')
const emit = defineEmits(['input'])
defineProps(['placeholder'])

function input(event: any) {
	const { value } = event.target;	
	emit('input', value);
}


</script>