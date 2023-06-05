<template>
  <button
    v-bind="$attrs"
    class="w-8 h-8 flex justify-center shadow-sm border border-slate-200 bg-slate-200 items-center rounded-lg p-1 transition-all outline-none hover:shadow focus:border"
  >
	<slot></slot>
  </button>
</template>