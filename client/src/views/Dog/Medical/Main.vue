<template>
	<div>
		<!--table  -->
		<!-- medical -->
		<div class="flex flex-col mt-5 bg-white p-5 rounded-md shadow">
            <div class="flex justify-between items-baseline pb-3">
                <div class="text-2xl text-bluegray-700 pb-2">Medical Records</div>
                <router-link to="/dogs/medical/create" class="btn-primary px-4 py-2">New Medical</router-link>
            </div>
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
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Date
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Description
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Veterinarian
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Diagnosis
									</th>
                                    <th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Test Performed
									</th>
                                    <th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Action
									</th>
                                    <th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Medication
									</th>
                                    <th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Comments
									</th>
									<th scope="col" class="px-4 py-3 bg-bluegray-050">
										<span class="sr-only">Ebluedit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<tr>
									<td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										4/20/69
									</td>
									<td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Fecal/Deworming
									</td>
									<td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										John Doe
									</td>
                                    <td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Fecal/Deworming
									</td>
                                    <td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Fecal/Deworming
									</td>
                                    <td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Action
									</td>
                                    <td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Medication
									</td>
                                    <td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Comments
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium"
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

        <!-- vaccination -->
        <div class="flex flex-col mt-10 p-5 rounded-md bg-white shadow">
            <div class="flex justify-between items-baseline pb-3">
                <div class="text-2xl text-bluegray-700 pb-2">Vaccination Records</div>
                <router-link to="/dogs/medical/vaccine/create" class="btn-primary px-4 py-2">New Vaccination</router-link>
            </div>
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
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Date
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Clinic
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Veterinarian
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Vaccine
									</th>
									<th scope="col" class="px-4 py-3 bg-bluegray-050">
										<span class="sr-only">Ebluedit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<tr>
									<td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										4/20/69
									</td>
									<td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Paws and Claws
									</td>
									<td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										John Doe
									</td>
                                    <td class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500">
										Lyme
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium"
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
        <!-- table end -->
	</div>
</template>

<script>
	import { EditIcon, EyeIcon, TrashIcon, FilePlusIcon } from "vue-feather-icons";
	export default {
		components: {
			EditIcon,
			EyeIcon,
			TrashIcon,
			FilePlusIcon,
		},
	};
</script>

<style>
</style>