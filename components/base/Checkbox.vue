<template>
  <label :class="['flex items-center justify-center w-4 h-4 rounded-sm border border-blue-300 text-green-400 cursor-pointer transition-all', { 'border-green-400 bg-green-100': value.value }]">
	<input type="checkbox" class="hidden" :value="value" @change="check">
	<Icon v-if="value.value" name="mingcute:check-fill" />
  </label>
</template>

<script setup lang="ts">
const value = defineProps(['value']);
const emit = defineEmits(['change']);

function check() {
	emit('change', !value.value);
}
</script>