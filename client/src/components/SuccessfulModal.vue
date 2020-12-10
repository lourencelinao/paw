<template>
	<!-- <div
		class="w-1/3 bg-white shadow-sm absolute inset-0 h-60 mx-auto mt-24 rounded-lg px-5 py-5 text-center"
	>
        <check-icon size="2.5x" class="text-green-700 bg-green-100 rounded-full p-2 mx-auto"></check-icon>
		<div class="text-xl pt-5 tracking-tight font-semibold text-bluegray-700">Create successful</div>
        <div class="flex flex-col space-y-2 mt-5">
            <button class="btn-primary px-4 py-2">Create Again</button>
            <button class="border-2 border-bluegray-700 text-bluegray-700 rounded-md px-4 py-2 hover:bg-bluegray-700 hover:text-white tracking-wide">Go back to Dogs</button>
        </div>
	</div> -->
   <div class="absolute bg-white w-1/6 h-12 inset-0 flex justify-center items-center rounded-lg ml-auto shadow-lg mr-5 mt-auto mb-5 space-x-3 px-5 py-3">
        <check-icon size="2x" class="text-green-700 bg-green-100 rounded-full p-2"></check-icon>
        <div class="text-lg tracking-tight font-semibold text-green-700"><slot></slot></div>
    </div>
</template>

<script>
	import { CheckIcon } from "vue-feather-icons";
	export default {
		components: {
			CheckIcon,
		},
	};
</script>

<style>
</style>