<template>
	<div class="lg:px-48 md:px-32 xl:px-64">
		<div
			class="text-bluegray-700 text-2xl border-b-2 border-bluegray-200 pb-3 mt-5"
		>
			Edit Medical Record
		</div>

		<!-- input fields -->

		<div class="mt-5 min-w-full">
			<form @submit.prevent="patchMedical">
				<!-- name -->
				<div class="grid grid-cols-1 lg:grid-cols-2 sm:gap-4 gap-y-4">
					<div>
						<div class="text-xl text-bluegray-700">Clinic</div>
						<select
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical[0].clinic_id"
						>
							<option v-for="(clinic, indx) in clinics" :key="indx" :value="clinic.clinic_id">{{ clinic.name }}</option>
						</select>
					</div>

					<!-- <div>
						<div class="text-xl text-bluegray-700">Veterinarian</div>
						<input
							type="text"
							list="veterinarian"
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							
						/>
						<datalist id="veterinarian" class="w-full">
							<option>Johnny Sins</option>
						</datalist>
					</div> -->
					<!-- 
					<div>
						<div class="text-xl text-bluegray-700">Date</div>
						<input
							type="date"
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model
						/>
						
					</div> -->

					<div>
						<div class="text-xl text-bluegray-700">Description</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical[0].description"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Diagnosis</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical[0].diagnosis"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Test Performed</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical[0].test_performed"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Action</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical[0].action"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Medication</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="medical[0].medications"
						/>
					</div>
				</div>
				<div class="mt-3">
					<div class="text-xl text-bluegray-700">Comments</div>
					<textarea
						class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						v-model="medical[0].comment"
					></textarea>
				</div>

				<div class="flex justify-end space-x-3 mt-5">
					<router-link :to="{ name: 'DogMedicalMain', params: { id: $route.params.id } }" class="btn-secondary px-4 py-2">Cancel</router-link>
					<button class="btn-primary px-4 py-2">Save</button>
				</div>
			</form>
		</div>
		<transition name="fade">
			<successful-modal v-if="successToggle">Success</successful-modal>
		</transition>
		<transition name="fade">
			<failed-modal v-if="failedToggle">Something went wrong</failed-modal>
		</transition>
	</div>
	</div>
</template>

<script>
	import { UploadIcon, Tren } from "vue-feather-icons";
	import MedicalService from "../../../Services/MedicalService";
	import ClinicService from "../../../Services/ClinicService";
	import SuccessfulModal from "../../../components/SuccessfulModal";
	import FailedModal from "../../../components/FailedModal";
	export default {
		components: {
			UploadIcon,
			SuccessfulModal,
			FailedModal,
		},
		data() {
			return {
				medical: {
					dog_id: "",
					clinic_id: "",
					description: "",
					diagnosis: "",
					test_performed: "",
					action: "",
					medications: "",
					comment: "",
				},
				clinics: [],
				successToggle: false,
				failedToggle: false,
			};
		},
		methods: {
			async patchMedical() {
				try {
                    console.log('test', this.medical[0])
					if (
						!this.medical[0].clinic_id ||
						!this.medical[0].description ||
						!this.medical[0].diagnosis ||
						!this.medical[0].test_performed ||
						!this.medical[0].action ||
						!this.medical[0].medications ||
						!this.medical[0].comment
					) {
						this.failedToggle = true;
						setTimeout(() => {
							this.failedToggle = false;
						}, 3000);
					} else {
                        this.medical[0].dog_id = this.$route.params.id;
						await MedicalService.patchMedical(this.medical[0]);
						this.successToggle = true;
						setTimeout(() => {
							this.successToggle = false;
						}, 3000);
					}
				} catch (err) {
					console.error(err.message);
				}
            },
            async getMedical() {
				try{
					this.medical = await MedicalService.getMedical(this.$route.params.medical_id)
					console.log(this.medical)
				}catch(err){
					console.error(err.message)
				}
			},
			async getClinics() {
				try {
					this.clinics = await ClinicService.getClinics();
					console.log(this.clinics);
				} catch (err) {
					console.error(err.message);
				}
			},
		},
		created() {
            this.getClinics();
            this.getMedical()
		},
	};
</script>
<style scoped>
	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
</style>