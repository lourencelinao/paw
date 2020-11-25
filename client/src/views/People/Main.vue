<template>
	<div>
		<div class="flex justify-between items-baseline">
			<div class="text-2xl text-bluegray-700">Users</div>
			<router-link
				to="/people/user/create"
				class="btn-primary p-2 uppercase flex items-center text-sm text-bluegray-050"
				><user-plus-icon size="1.25x" class="mr-1"></user-plus-icon> New
				User</router-link
			>
		</div>
		<!-- admin only - users table -->
		<div class="flex flex-col mt-5">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div
						class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
					>
						<table class="min-w-full divide-y divide-gray-200">
							<thead>
								<tr>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Name
									</th>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Status
									</th>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Role
									</th>
									<th scope="col" class="px-6 py-3 bg-bluegray-050">
										<span class="sr-only">Ebluedit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<img
													class="h-10 w-10 rounded-full"
													src="https://yt3.ggpht.com/ytc/AAUvwnghGxttlnoIZ8GiuEYn_CyIeDVvV1lu1JS4a3YtmQ=s900-c-k-c0x00ffffff-no-rj"
													alt=""
												/>
											</div>
											<div class="ml-4">
												<div class="text-lg font-medium text-bluegray-900">
													Jane Cooper
												</div>
												<div class="text-sm text-bluegray-500">
													jane.cooper@example.com
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span
											class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800"
										>
											Active
										</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										Admin
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											to=""
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<eye-icon size="1.5x" class="custom-class"></eye-icon>
											<edit-icon size="1.5x" class="custom-class"></edit-icon>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</router-link>
									</td>
								</tr>

								<tr class="bg-bluegray-050">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<img
													class="h-10 w-10 rounded-full"
													src="https://yt3.ggpht.com/ytc/AAUvwnghGxttlnoIZ8GiuEYn_CyIeDVvV1lu1JS4a3YtmQ=s900-c-k-c0x00ffffff-no-rj"
													alt=""
												/>
											</div>
											<div class="ml-4">
												<div class="text-lg font-medium text-bluegray-900">
													John Doe
												</div>
												<div class="text-sm text-bluegray-500">
													john.doe@example.com
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<span
											class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800"
										>
											Inactive
										</span>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										Volunteer
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											to=""
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<eye-icon size="1.5x" class="custom-class"></eye-icon>
											<edit-icon size="1.5x" class="custom-class"></edit-icon>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</router-link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<!-- end table -->

		<div class="flex justify-between mt-10 items-baseline">
			<div class="text-2xl text-bluegray-700">Applicants</div>
			<button
				class="btn-primary p-2 uppercase flex items-center text-sm text-bluegray-050"
			>
				<user-plus-icon size="1.25x" class="mr-1"></user-plus-icon>
				New Applicant
			</button>
		</div>
		<!-- people table -->
		<div class="flex flex-col mt-5">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div
						class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
					>
						<table class="min-w-full divide-y divide-gray-200">
							<thead>
								<tr>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Name
									</th>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Address
									</th>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Contact
									</th>
									<th scope="col" class="px-6 py-3 bg-bluegray-050">
										<span class="sr-only">Ebluedit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<tr>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<img
													class="h-10 w-10 rounded-full"
													src="https://yt3.ggpht.com/ytc/AAUvwnghGxttlnoIZ8GiuEYn_CyIeDVvV1lu1JS4a3YtmQ=s900-c-k-c0x00ffffff-no-rj"
													alt=""
												/>
											</div>
											<div class="ml-4">
												<div class="text-lg font-medium text-bluegray-900">
													James Charles
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										Gayland
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										jamescharles@gmail.com
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											to=""
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<eye-icon size="1.5x" class="custom-class"></eye-icon>
											<edit-icon size="1.5x" class="custom-class"></edit-icon>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</router-link>
									</td>
								</tr>

								<tr class="bg-bluegray-050">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<img
													class="h-10 w-10 rounded-full"
													src="https://yt3.ggpht.com/ytc/AAUvwnghGxttlnoIZ8GiuEYn_CyIeDVvV1lu1JS4a3YtmQ=s900-c-k-c0x00ffffff-no-rj"
													alt=""
												/>
											</div>
											<div class="ml-4">
												<div class="text-lg font-medium text-bluegray-900">
													James Charles
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										Gayland
									</td>
									<td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
										<div>jamescharles@gmail.com</div>
										<div>09452069420</div>
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											to=""
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<eye-icon size="1.5x" class="custom-class"></eye-icon>
											<edit-icon size="1.5x" class="custom-class"></edit-icon>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</router-link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<!-- end table -->
	</div>
</template>

<script>
	import {
		EditIcon,
		EyeIcon,
		TrashIcon,
		PlusIcon,
		UsersIcon,
		UserPlusIcon,
	} from "vue-feather-icons";
	export default {
		components: {
			PlusIcon,
			UserPlusIcon,
			EditIcon,
			EyeIcon,
			TrashIcon,
		},
	};
</script>

<style>
</style>