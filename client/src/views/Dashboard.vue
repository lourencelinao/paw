<template>
	<div class="px-10">
		<div class="text-2xl text-bluegray-700">Recent Applications</div>
		<!-- 3 boxes -->
		<div class="grid grid-cols-3 gap-5 mt-3">
			<!-- box 1 -->
			<div class="bg-white rounded-lg shadow-lg">
				<div class="px-5 py-3 space-y-2">
					<div class="text-lg font-semibold text-bluegray-500">
						James Charles
					</div>
					<div class="text-4xl text-bluegray-700">Adoption</div>
					<div class="text-md text-bluegray-300">2 days ago</div>
				</div>
				<div class="flex justify-center">
					<router-link to="" class="flex justify-center items-center bg-bluegray-050 text-bluegray-700 text-md tracking-wide block w-full py-3 hover:bg-bluegray-700 hover:text-bluegray-050 rounded-b-lg space-x-2">
						<div>View Application</div>
						<chevron-right-icon
							size="1x"
							class="custom-class"
						></chevron-right-icon>
					</router-link>
				</div>
			</div>
			<!-- box 2 -->
			<div class="bg-white rounded-lg shadow-lg">
				<div class="px-5 py-3 space-y-2">
					<div class="text-lg font-semibold text-bluegray-500">
						James Charles
					</div>
					<div class="text-4xl text-bluegray-700">Surrender</div>
					<div class="text-md text-bluegray-300">2 days ago</div>
				</div>
				<div class="flex justify-center">
					<router-link to="" class="flex justify-center items-center bg-bluegray-050 text-bluegray-700 text-md tracking-wide block w-full py-3 hover:bg-bluegray-700 hover:text-bluegray-050 rounded-b-lg space-x-2">
						<div>View Application</div>
						<chevron-right-icon
							size="1x"
							class="custom-class"
						></chevron-right-icon>
					</router-link>
				</div>
			</div>

			<!-- box 3 -->
			<div class="bg-white rounded-lg shadow-lg">
				<div class="px-5 py-3 space-y-2">
					<div class="text-lg font-semibold text-bluegray-500">
						James Charles
					</div>
					<div class="text-4xl text-bluegray-700">Volunteer</div>
					<div class="text-md text-bluegray-300">2 days ago</div>
				</div>
				<div class="flex justify-center">
					<router-link to="" class="flex justify-center items-center text-bluegray-700 text-md bg-bluegray-050 tracking-wide block w-full py-3 hover:bg-bluegray-700 hover:text-bluegray-050 rounded-b-lg space-x-2">
						<div>View Application</div>
						<chevron-right-icon
							size="1x"
							class="custom-class"
						></chevron-right-icon>
					</router-link>
				</div>
			</div>
		</div>
		<!-- 3 boxes end -->

		<!--  -->
		<div class="grid grid-rows-4 grid-flow-col gap-4 mt-10">
			<div class="row-span-4 col-span-2 bg-white px-5 py-3 rounded-lg shadow-lg">
				Schedules
			</div>
			<div class="row-span-2 bg-white px-5 py-3 rounded-lg shadow-lg">
				<div>Recent Activity</div>
			</div>
			<div class="row-span-2 bg-white px-5 py-3 rounded-lg shadow-lg">
				Schedules
			</div>
		</div>
	</div>
</template>

<script>
	import { TrendingUpIcon, ChevronRightIcon } from "vue-feather-icons";
	export default {
		components: {
			TrendingUpIcon,
			ChevronRightIcon,
		},
	};
</script>

<style>
</style>