<template>
	<div>
		<div class="w-2/3 mx-auto">
			<div class="bg-white shadow rounded-lg mx-auto px-12 py-5">
				<div class="text-2xl text-bluegray-700">Invite New User</div>
				<input
					type="email"
					class="px-4 py-2 border-2 border-bluegray-100 focus:outline-none focus:ring-2 focus:ring-bluegray-700 rounded w-full mt-1"
					placeholder="E-Mail"
				/>
				<select
					name=""
					id=""
					class="px-4 py-2 border-2 border-bluegray-100 focus:outline-none focus:ring-2 focus:ring-bluegray-700 rounded w-full mt-1"
				>
					<option value="">Admin</option>
					<option value="">Manager</option>
					<option value="">Staff</option>
					<option value="">Volunteer</option>
				</select>
				<button class="btn-primary px-4 py-2 mt-3">Add</button>
			</div>
			<!-- table -->
			<div class="flex flex-col mt-5">
                <div class="text-3xl text-bluegray-700">Users</div>
				<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div
						class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
					>
						<div
							class="shadow overflow-hidden border-b border-bluegray-200 sm:rounded-lg"
						>
							<table class="min-w-full">
								<thead>
									<tr>
										<th
											scope="col"
											class="px-6 py-3 bg-bluegray-50 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
										>
											Name
										</th>
										<th
											scope="col"
											class="px-6 py-3 bg-bluegray-50 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
										>
											Role
										</th>
										<th scope="col" class="px-6 py-3 bg-bluegray-50">
											<span class="sr-only">Edit</span>
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
													<div class="text-sm text-bluegray-500">
														james.charles@example.com
													</div>
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="text-sm text-bluegray-900">Volunteer</div>
										</td>
										<td
											class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
										>
											<router-link
												to=""
												class="flex justify-center space-x-5 text-bluegray-700"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
												<refresh-cw-icon size="1.5x" class="custom-class"></refresh-cw-icon>
												<trash-icon
													size="1.5x"
													class="custom-class"
												></trash-icon>
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
													<div class="text-sm text-bluegray-500">
														james.charles@example.com
													</div>
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="text-sm text-bluegray-900">Staff</div>
										</td>
										<td
											class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
										>
											<router-link
												to=""
												class="flex justify-center space-x-5 text-bluegray-700"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
												<refresh-cw-icon size="1.5x" class="custom-class"></refresh-cw-icon>
												<trash-icon
													size="1.5x"
													class="custom-class"
												></trash-icon>
											</router-link>
										</td>
									</tr>
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
													<div class="text-sm text-bluegray-500">
														james.charles@example.com
													</div>
												</div>
											</div>
										</td>
										<td class="px-6 py-4 whitespace-nowrap">
											<div class="text-sm text-bluegray-900">Admin</div>
										</td>
										<td
											class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
										>
											<router-link
												to=""
												class="flex justify-center space-x-5 text-bluegray-700"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
												<refresh-cw-icon size="1.5x" class="custom-class"></refresh-cw-icon>
												<trash-icon
													size="1.5x"
													class="custom-class"
												></trash-icon>
											</router-link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<!-- table end -->
		</div>
	</div>
</template>

<script>
	import { EditIcon, EyeIcon, TrashIcon, FilePlusIcon, RefreshCwIcon  } from "vue-feather-icons";
	export default {
		components: {
			EditIcon,
			EyeIcon,
			TrashIcon,
            FilePlusIcon,
            RefreshCwIcon 
		},
	};
</script>

<style>
</style>