<template>
	<NuxtLayout name="default">
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from {
  opacity: 0;
  transform: scale(0.99);
}
.page-leave-to  {
	opacity: 0;
	transform: scale(0.99);
}
</style>