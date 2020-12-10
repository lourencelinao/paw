<template>
	<div>
		<!--table  -->
		<!-- medical -->
		<div class="flex flex-col mt-5 bg-white p-5 rounded-md shadow">
			<div class="flex justify-between items-baseline pb-3">
				<div class="text-2xl text-bluegray-700 pb-2">Medical Records</div>
				<router-link
					:to="{ name: 'DogMedicalCreate', params: { id: $route.params.id } }"
					class="btn-primary px-4 py-2"
					>New Medical</router-link
				>
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
										Clinic
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
								<tr
									v-for="(medical, indx) in medicals"
									:key="indx"
									:class="{ 'bg-bluegray-050': indx % 2 != 0 }"
								>
									<td class="p-4 whitespace-nowrap text-sm text-bluegray-500">
										{{ moment(medical.created) }}
									</td>
									<td class="p-4 whitespace-nowrap text-sm text-bluegray-500">
										{{ medical.description }}
									</td>
									<td class="p-4 whitespace-nowrap text-sm text-bluegray-500">
										{{ medical.name }}
									</td>
									<td class="p-4 whitespace-nowrap text-sm text-bluegray-500">
										{{ medical.diagnosis }}
									</td>
									<td class="p-4 whitespace-nowrap text-sm text-bluegray-500">
										{{ medical.test_performed }}
									</td>
									<td class="p-4 whitespace-nowrap text-sm text-bluegray-500">
										{{ medical.action }}
									</td>
									<td class="p-4 whitespace-nowrap text-sm text-bluegray-500">
										{{ medical.medications }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										{{ medical.comment }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											:to="{
												name: 'DogMedicalEdit',
												params: {
													id: $route.params.id,
													medical_id: medical.medical_id,
												},
											}"
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<!-- <eye-icon size="1.5x" class="custom-class"></eye-icon> -->
											<edit-icon size="1.5x" class="custom-class"></edit-icon>
											<!-- <trash-icon size="1.5x" class="custom-class"></trash-icon> -->
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
				<router-link
					:to="{ name: 'VaccineCreate', params: { id: $route.params.id } }"
					class="btn-primary px-4 py-2"
					>New Vaccination</router-link
				>
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
										Vaccine
									</th>
									<th scope="col" class="px-4 py-3 bg-bluegray-050">
										<span class="sr-only">Ebluedit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<tr v-for="(vaccine, indx) in vaccinations" :key="indx" :class="{ 'bg-bluegray-050': indx % 2 != 0 }">
									<td
										class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										{{ moment(vaccine.created) }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										{{ vaccine.name }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										{{ vaccine.vaccine_name }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											:to="{ name: 'VaccineEdit', params: { id: $route.params.id, vaccine_id: vaccine.vaccination_id } }"
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<!-- <eye-icon size="1.5x" class="custom-class"></eye-icon> -->
											<edit-icon size="1.5x" class="custom-class"></edit-icon>
											<!-- <trash-icon size="1.5x" class="custom-class"></trash-icon> -->
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
	import MedicalService from "../../../Services/MedicalService";
	import VaccinationService from "../../../Services/VaccinationService";
	import moment from "moment";
	export default {
		components: {
			EditIcon,
			EyeIcon,
			TrashIcon,
			FilePlusIcon,
		},
		data() {
			return {
				medicals: [],
				vaccinations: [],
			};
		},
		methods: {
			async getMedical() {
				try {
					this.medicals = await MedicalService.getMedicals(this.$route.params.id);
					console.log(this.medicals);
				} catch (err) {
					console.error(err.message);
				}
			},
			async getVaccine() {
				try {
					this.vaccinations = await VaccinationService.getVaccinations(this.$route.params.id);
					console.log('vaccine', this.vaccinations);
				} catch (err) {
					console.error(err.message);
				}
			},
			moment(date) {
				return moment(date).format("L");
			},
		},
		created() {
			this.getMedical();
			this.getVaccine()
		},
	};
</script>

<style>
</style>