<template>
	<div class="lg:px-48 md:px-32 xl:px-64">
		<div
			class="text-bluegray-700 text-2xl border-b-2 border-bluegray-200 pb-3 mt-5"
		>
			Edit Vaccination Record
		</div>

		<!-- input fields -->

		<div class="mt-5 min-w-full">
			<form @submit.prevent="patchVaccine">
				<!-- name -->
				<div class="grid grid-cols-1 sm:gap-4 gap-y-4 w-1/2 mx-auto">
					<div>
						<div class="text-xl text-bluegray-700">Clinic</div>
						<select
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="vaccine[0].clinic_id"
						>
							<option
								v-for="(clinic, indx) in clinics"
								:key="indx"
								:value="clinic.clinic_id"
							>
								{{ clinic.name }}
							</option>
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

					<div>
						<div class="text-xl text-bluegray-700">Vaccine</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="vaccine[0].vaccine_name"
						/>
					</div>

					<div class="flex justify-end space-x-3 mt-5">
						<router-link class="btn-secondary px-4 py-2" :to="{ name: 'DogMedicalMain', params: { id: $route.params.id } }">Cancel</router-link>
						<button class="btn-primary px-4 py-2">Save</button>
					</div>
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
</template>

<script>
	import { UploadIcon, Tren } from "vue-feather-icons";
	import ClinicService from '../../../Services/ClinicService'
	import VaccinationService from '../../../Services/VaccinationService'
	import SuccessfulModal from '../../../components/SuccessfulModal'
	import FailedModal from '../../../components/FailedModal'
	export default {
		components: {
			UploadIcon,
			SuccessfulModal,
			FailedModal,
		},
		data(){
			return {
				clinics: [],
				vaccine: [],
				successToggle: false,
				failedToggle: false,
			}
		},
		methods: {
			async getClinics() {
				try {
					this.clinics = await ClinicService.getClinics();
					console.log(this.clinics);
				} catch (err) {
					console.error(err.message);
				}
			},
			async getVaccine() {
				try {
                    this.vaccine = await VaccinationService.getVaccination(this.$route.params.vaccine_id);
					console.log('vaccine', this.vaccine);
				} catch (err) {
					console.error(err.message);
				}
			},
			async patchVaccine(){
				try{
					if(!this.vaccine[0].clinic_id || !this.vaccine[0].vaccine_name){
                        console.log('error')
						this.failedToggle = true;
						setTimeout(() => {
							this.failedToggle = false;
						}, 3000);
					}else{
                        // this.vaccine[0].dog_id = this.$route.params.id
                        console.log('vaccine', this.vaccine[0])
						await VaccinationService.patchVaccination(this.vaccine[0])
						this.successToggle = true;
						setTimeout(() => {
							this.successToggle = false;
						}, 3000);
						// this.vaccine = {};
					}
				}catch(err){
					console.error(err.message)
				}
			}
		},
		created() {
            this.getClinics()
            this.getVaccine()
		}
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