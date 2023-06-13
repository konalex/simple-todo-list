<template>
	<nav class="flex justify-center container mx-auto pt-2">
		<MainThemeToggler />
		<MainLocales />
		<ul class="w-1/2 text-center">
			<li v-for="(route, i) in $router.options.routes" :key="i">
				<NuxtLink :to="route.path" :class="['capitalize', { 'underline underline-offset-8 text-blue-400': route.name === $route.name }]">
					{{ $t(`${route.name}_route`) }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
