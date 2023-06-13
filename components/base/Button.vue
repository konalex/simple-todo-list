<template>
  <button
    v-bind="$attrs"
    class="flex justify-center border items-center rounded-lg p-1 transition-all outline-none hover:shadow focus:border"
  >
	<slot></slot>
  </button>
</template>