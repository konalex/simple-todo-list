<template>
	<div class="flex bg-slate-50 w-screen h-screen transition-all relative dark:bg-gray-700">
		<div class="w-1/5 bg-white shadow-lg flex flex-col justify-between dark:bg-gray-700">
			<Profile class="py-4 px-4 max-h-fit"/>
			<div class="pb-4 px-4 flex flex-col overflow-auto border-y-2 h-[90%]">

			</div>
			<div class="max-h-fit flex justify-between items-center bg-white shadow-xl py-2 pr-4 dark:bg-gray-700">
				<MainLocales />
				<MainThemeToggler />
			</div>
		</div>
		<div class="w-4/5 flex flex-col">
			<MainHeader />
			<div class="h-full pt-4 pr-4">
				<slot />
			</div>
			<TasksForm />
		</div>
	</div>
</template>