<template>
	<div class="px-10">
		<div class="text-2xl text-bluegray-700">Recent Applications</div>
		<!-- 3 boxes -->
		<div class="grid grid-cols-3 gap-5 mt-3">
			<!-- box 1 -->
			<div class="bg-white rounded-lg shadow-lg">
				<div class="px-5 py-3 space-y-2">
					<div class="flex justify-between">
						<div class="text-lg font-semibold text-bluegray-500">
							James Charles
						</div>
						<span class="text-sm text-orange-700 bg-orange-100 rounded-full p-1"
							>Pending</span
						>
					</div>
					<div class="text-4xl text-bluegray-700">Adoption</div>
					<div class="text-md text-bluegray-300">2 days ago</div>
				</div>
				<div class="flex justify-center">
					<router-link
						to=""
						class="flex justify-center items-center bg-bluegray-050 text-bluegray-700 text-md tracking-wide block w-full py-3 hover:bg-bluegray-700 hover:text-bluegray-050 rounded-b-lg space-x-2"
					>
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
					<div class="flex justify-between">
						<div class="text-lg font-semibold text-bluegray-500">
							James Charles
						</div>
						<span class="text-sm text-green-700 bg-green-100 rounded-full p-1"
							>Approved</span
						>
					</div>
					<div class="text-4xl text-bluegray-700">Surrender</div>
					<div class="text-md text-bluegray-300">2 days ago</div>
				</div>
				<div class="flex justify-center">
					<router-link
						to=""
						class="flex justify-center items-center bg-bluegray-050 text-bluegray-700 text-md tracking-wide block w-full py-3 hover:bg-bluegray-700 hover:text-bluegray-050 rounded-b-lg space-x-2"
					>
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
					<div class="flex justify-between">
						<div class="text-lg font-semibold text-bluegray-500">
							James Charles
						</div>
						<span class="text-sm text-red-700 bg-red-100 rounded-full p-1"
							>Rejected</span
						>
					</div>
					<div class="text-4xl text-bluegray-700">Volunteer</div>
					<div class="text-md text-bluegray-300">2 days ago</div>
				</div>
				<div class="flex justify-center">
					<router-link
						to=""
						class="flex justify-center items-center text-bluegray-700 text-md bg-bluegray-050 tracking-wide block w-full py-3 hover:bg-bluegray-700 hover:text-bluegray-050 rounded-b-lg space-x-2"
					>
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

		<div class="text-2xl text-bluegray-700 mt-5">Quick Stats</div>
		<div class="space-y-5">
			<!-- 3 dog boxes -->
			<div class="grid grid-cols-3 gap-5">
				<!-- box 1 -->
				<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
					<div class="flex justify-between items-end">
						<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
							Total Dogs
						</div>
						<select
							name=""
							id=""
							class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
						>
							<option value="">30 days</option>
							<option value="">15 days</option>
							<option value="">7 days</option>
						</select>
						<!-- <div class="flex items-center space-x-2 mt-3">
						<trending-up-icon
							size="1.5x"
							class="text-green-700"
						></trending-up-icon>
						<div class="text-bluegray-700 text-sm tracking-wide font-medium">
							4.20% Increase
						</div>
					</div> -->
					</div>

					<div class="mt-3 text-bluegray-700 font-extralight text-5xl">69</div>
					<div class="flex items-center space-x-2 mt-3">
						<trending-up-icon
							size="1.5x"
							class="text-green-700"
						></trending-up-icon>
						<div class="text-bluegray-700 text-sm tracking-wide font-medium">
							4.20% Increase
						</div>
					</div>
				</div>
				<!-- box 2 -->
				<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
					<div class="flex justify-between items-baseline">
						<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
							New Applications
						</div>
						<select
							name=""
							id=""
							class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
						>
							<option value="">30 days</option>
							<option value="">15 days</option>
							<option value="">7 days</option>
						</select>
					</div>

					<div class="mt-3 text-bluegray-700 font-medium text-5xl">4</div>
					<div class="flex items-center space-x-2 mt-3">
						<trending-up-icon
							size="1.5x"
							class="text-green-700"
						></trending-up-icon>
						<div class="text-bluegray-700 text-sm tracking-wide font-medium">
							69% Increase
						</div>
					</div>
				</div>

				<!-- box 3 -->
				<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
					<div class="flex justify-between items-baseline">
						<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
							Active Dogs
						</div>
						<div class="text-bluegray-500 font-medium tracking-wide">
							(88 Total)
						</div>
					</div>

					<div class="mt-3">
						<div
							class="text-bluegray-300 tracking-wide flex items-baseline text-sm"
						>
							<span
								class="flex justify-center items-center w-3 h-3 text-green-800 rounded-full bg-green-800 opacity-75 mr-2"
								>.</span
							>Active (60 - 52%)
						</div>
						<div
							class="text-bluegray-300 tracking-wide flex items-baseline text-sm"
						>
							<span
								class="flex justify-center items-center w-3 h-3 text-yellow-800 rounded-full bg-yellow-800 opacity-75 mr-2"
								>.</span
							>Inactive (28 - 48%)
						</div>
					</div>
				</div>
			</div>
			<!-- 3 boxes end -->

			<!--  -->
			<div class="grid grid-cols-2 gap-5">
				<!-- box 1 -->
				<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
					<div class="flex justify-between items-end">
						<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
							Intake
						</div>
						<select
							name=""
							id=""
							class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
						>
							<option value="">All Time</option>
							<option value="">1 year</option>
							<option value="">6 months</option>
							<option value="">30 days</option>
							<option value="">15 days</option>
							<option value="">7 days</option>
						</select>
					</div>

					<div class="mt-3 text-bluegray-700 font-extralight text-5xl">69</div>
					<div class="flex items-center space-x-2 mt-3">
						<trending-up-icon
							size="1.5x"
							class="text-green-700"
						></trending-up-icon>
						<div class="text-bluegray-700 text-sm tracking-wide font-medium">
							4.20% Increase
						</div>
					</div>
				</div>

				<!-- box 2 -->
				<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
					<div class="flex justify-between items-end">
						<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
							Adopted
						</div>
						<select
							name=""
							id=""
							class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
						>
							<option value="">All Time</option>
							<option value="">1 year</option>
							<option value="">6 months</option>
							<option value="">30 days</option>
							<option value="">15 days</option>
							<option value="">7 days</option>
						</select>
					</div>

					<div class="mt-3 text-bluegray-700 font-extralight text-5xl">69</div>
					<div class="flex items-center space-x-2 mt-3">
						<trending-up-icon
							size="1.5x"
							class="text-green-700"
						></trending-up-icon>
						<div class="text-bluegray-700 text-sm tracking-wide font-medium">
							4.20% Increase
						</div>
					</div>
				</div>

				<!-- box 3 -->
				<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
					<div class="flex justify-between items-end">
						<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
							Transferred
						</div>
						<select
							name=""
							id=""
							class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
						>
							<option value="">All Time</option>
							<option value="">1 year</option>
							<option value="">6 months</option>
							<option value="">30 days</option>
							<option value="">15 days</option>
							<option value="">7 days</option>
						</select>
					</div>

					<div class="mt-3 text-bluegray-700 font-extralight text-5xl">69</div>
					<div class="flex items-center space-x-2 mt-3">
						<trending-up-icon
							size="1.5x"
							class="text-green-700"
						></trending-up-icon>
						<div class="text-bluegray-700 text-sm tracking-wide font-medium">
							4.20% Increase
						</div>
					</div>
				</div>

				<!-- box 4 -->
				<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
					<div class="flex justify-between items-end">
						<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
							Euthanized
						</div>
						<select
							name=""
							id=""
							class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
						>
							<option value="">All Time</option>
							<option value="">1 year</option>
							<option value="">6 months</option>
							<option value="">30 days</option>
							<option value="">15 days</option>
							<option value="">7 days</option>
						</select>
					</div>

					<div class="mt-3 text-bluegray-700 font-extralight text-5xl">69</div>
					<div class="flex items-center space-x-2 mt-3">
						<trending-up-icon
							size="1.5x"
							class="text-green-700"
						></trending-up-icon>
						<div class="text-bluegray-700 text-sm tracking-wide font-medium">
							4.20% Increase
						</div>
					</div>
				</div>
			</div>
		</div>

		<!--  -->
		<!-- <div class="grid grid-rows-4 grid-flow-col gap-4 mt-10">
			<div class="row-span-4 col-span-2 bg-white px-5 py-3 rounded-lg shadow-lg">
				Schedules
			</div>
			<div class="row-span-2 bg-white px-5 py-3 rounded-lg shadow-lg">
				<div>Recent Activity</div>
			</div>
			<div class="row-span-2 bg-white px-5 py-3 rounded-lg shadow-lg">
				Schedules
			</div>
		</div> -->
	</div>
</template>

<script>
	import { ChevronRightIcon, TrendingUpIcon } from "vue-feather-icons";
	export default {
		components: {
			TrendingUpIcon,
			ChevronRightIcon,
		},
	};
</script>

<style>
</style>