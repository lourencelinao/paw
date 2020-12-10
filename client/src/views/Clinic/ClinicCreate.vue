<template>
	<div class="lg:px-48 md:px-32 xl:px-64">
		<div class="text-bluegray-700 text-2xl border-b-2 border-bluegray-200 pb-3">
			Create
		</div>

		<!-- input fields -->

		<div class="mt-5 min-w-full">
			<form @submit.prevent="postClinic">
				<!-- name -->
				<div class="grid grid-cols-1 lg:grid-cols-2 sm:gap-4 gap-y-4">
					<div>
						<div class="text-xl text-bluegray-700">Name</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="clinic.name"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Address</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="clinic.address1"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">City</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="clinic.city"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Province</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="clinic.province"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Contact Number</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="clinic.contact_number"
						/>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Email Address</div>
						<input
							type="email"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
							v-model="clinic.email_address"
						/>
					</div>
				</div>

				<div class="flex justify-end space-x-2 mt-3">
					<router-link to="/shelter" class="px-4 py-2 border-2 border-bluegray-700 rounded hover:bg-bluegray-700 hover:text-white">Cancel</router-link>
					<button class="btn-primary px-4 py-2">Create</button>
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
	import ClinicService from "../../Services/ClinicService";
	import SuccessfulModal from "../../components/SuccessfulModal";
	import FailedModal from "../../components/FailedModal";
	export default {
		components: {
			SuccessfulModal,
			FailedModal,
		},
		data() {
			return {
				clinic: {
					name: "",
					address1: "",
					city: "",
					province: "",
					contact_number: "",
					email_address: "",
				},
				successToggle: false,
				failedToggle: false,
			};
		},
		methods: {
			async postClinic() {
				try {
					if (
						!this.clinic.name ||
						!this.clinic.address1 ||
						!this.clinic.city ||
						!this.clinic.province ||
						!this.clinic.contact_number ||
						!this.clinic.email_address
					) {
                        console.log('error')
						this.failedToggle = true;
						setTimeout(() => {
							this.failedToggle = false;
						}, 3000);
					} else {
                        await ClinicService.postClinic(this.clinic);
                        this.successToggle = true;
						setTimeout(() => {
							this.successToggle = false;
						}, 3000);
						this.clinic = ""; // clear input fields
					}
				} catch (err) {
					console.error(err.message);
				}
			},
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