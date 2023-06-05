<template>
	<nav class="flex justify-center container mx-auto">
		<ul>
			<li v-for="(route, i) in $router.options.routes" :key="i">
				<NuxtLink :to="route.path" :class="['capitalize', { 'underline underline-offset-8 text-blue-400': route.name === $route.name }]">
					{{ route.name }}
				</NuxtLink>
			</li>
		</ul>
	</nav>
</template>
