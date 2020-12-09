<template>
	<div class="lg:px-48 md:px-32 xl:px-64">
		<div class="text-bluegray-700 text-2xl border-b-2 border-bluegray-200 pb-3 mt-5">
			New Medical Record
		</div>

		<!-- input fields -->

		<div class="mt-5 min-w-full">
			<form @submit.prevent="postMedicalRecord">
				<!-- name -->
				<div class="grid grid-cols-1 lg:grid-cols-2 sm:gap-4 gap-y-4">
					<div>
						<div class="text-xl text-bluegray-700">Clinic</div>
						<input
							type="text"
							list="clinic"
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.clinic"
						/>
						<datalist id="clinic" class="w-full">
							<option>Paws and Claws</option>
						</datalist>
					</div>


					<div>
						<div class="text-xl text-bluegray-700">Veterinarian</div>
						<input
							type="text"
							list="veterinarian"
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.veterinarian_id"
						/>
						<datalist id="veterinarian" class="w-full">
							<option>Johnny Sins</option>
						</datalist>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Description</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.description"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Diagnosis</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.diagnosis"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Test Performed</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.test_performed"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Action</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.action"
						/>
					</div>

                    <div>
						<div class="text-xl text-bluegray-700">Medication</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.medication"
						/>
					</div>

                    <div>
						<div class="text-xl text-bluegray-700">Comments</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical.comments"
						/>
					</div>
				</div>

				<div class="flex justify-end space-x-3 mt-5">
					<button class="btn-secondary px-4 py-2">Cancel</button>
					<button class="btn-primary px-4 py-2">Create</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { UploadIcon, Tren } from "vue-feather-icons";
	export default {
		components: {
			UploadIcon,
		},
		data(){
			return{
				medical: {
					dog_id: '',
					clinic_id: '',
					vet_id: '',
					description: '',
					diagnosis: '',
					test_performed: '',
					action: '',
					medications: '',
					comment: ''
				}
			}
		},
		methods: {
			chooseFiles() {
				document.getElementById("fileUpload").click();
			},
		},
	};
</script>

<style>
</style>