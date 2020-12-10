<template>
	<div>
		<div class="grid grid-cols-1 my-12">
			<div class="flex">
				<div class="w-1/5 mx-auto">
					<img
						src="https://ourfunnylittlesite.com/wp-content/uploads/2018/07/1-4.jpg"
						alt=""
						class="rounded-full shadow-md"
					/>
				</div>
				<div class="w-2/3 bg-white rounded-md shadow-md">
					<form @submit.prevent="patchDog">
						<div class="grid grid-cols-2 gap-4 p-5 text-bluegray-700">
							<div>
								<div class="text-sm text-bluegray-500">Name</div>
								<!-- <div class="text-2xl">Maya</div> -->
								<input
									type="text"
									class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
									v-model="dog[0].dog_name"
								/>
							</div>

							<div>
								<div class="text-sm text-bluegray-500">ID</div>
								<div class="text-2xl">{{ dog[0].dog_id }}</div>
							</div>

							<div>
								<div class="text-sm text-bluegray-500">Breed</div>
								<input
									type="text"
									class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
									v-model="dog[0].breed"
								/>
							</div>

							<div>
								<div class="text-sm text-bluegray-500">Sex</div>
								<!-- <div class="text-2xl">Female</div> -->
								<select
									name=""
									id=""
									class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-1/2"
									v-model="dog[0].sex"
								>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>

							<div>
								<div class="text-sm text-bluegray-500">Date of Birth</div>
								<input
									type="date"
									class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
									v-model="dog[0].birthday"
								/>
							</div>

							<div>
								<div class="text-sm text-bluegray-500">Age</div>
								<div class="text-2xl">{{ getAge(dog[0].birthday) }}</div>
							</div>

							<div>
								<div class="text-sm text-bluegray-500">Status</div>
								<select
									name=""
									id=""
									class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-1/2"
									v-model="dog[0].status"
								>
									<option value="Adopted">Adopted</option>
									<option value="Died in Care">Died in Care</option>
									<option value="Inactive">Inactive</option>
									<option value="Recuperating">Recuperating</option>
									<option value="Transferred">Transferred</option>
									<option value="Healthy">Healthy</option>
								</select>
							</div>

							<div>
								<div class="text-sm text-bluegray-500">Foster Parent</div>
								<!-- <select
									name=""
									id=""
									class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-1/2"
								>
									<option value="">James Charles</option>
									<option value="">Shane Dawson</option>
								</select> -->
								<div class="text-2xl">James Charles</div>
							</div>
						</div>

						<div class="px-5">
							<hr class="border-bluegray-200" />
						</div>

						<div>
							<div class="p-5 text-bluegray-700">
								<div class="text-2xl">Additional Info</div>

								<div class="flex mt-3">
									<div class="">
										<div class="text-sm text-bluegray-500">Weight</div>
										<input
											type="number"
											step="0.01"
											class="w-2/3 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
											v-model="dog[0].weight"
										/>
									</div>
									<div>
										<div class="text-sm text-bluegray-500">Color</div>
										<input
											type="text"
											class="w-2/3 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
											v-model="dog[0].color"
										/>
									</div>
									<div>
										<div class="text-sm text-bluegray-500">Marks</div>
										<input
											type="text"
											class="w-2/3 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
											v-model="dog[0].marks"
										/>
									</div>

									<div class="flex space-x-5">
										<div>
											<div class="text-sm text-bluegray-500">Aggressive?</div>
											<select
												name=""
												id=""
												class="px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
												v-model="dog[0].aggressive"
											>
												<option value="No">No</option>
												<option value="Yes">Yes</option>
											</select>
										</div>
										<div>
											<div class="text-sm text-bluegray-500">Trained?</div>
											<select
												name=""
												id=""
												class="px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
												v-model="dog[0].trained"
											>
												<option value="No">No</option>
												<option value="Yes">Yes</option>
											</select>
										</div>
									</div>
								</div>

								<div class="text-sm text-bluegray-500 mt-3">Description</div>
								<textarea
									name=""
									id=""
									class="px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-full"
									v-model="dog[0].description"
								></textarea>
								<div class="flex justify-end mt-2 space-x-2">
									<router-link :to="{ name: 'DogProfile', params: { id: $route.params.id } }" class="btn-secondary px-4 py-2">Cancel</router-link>
									<button class="btn-primary px-4 py-2">Save</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
		<transition name="fade">
			<successful-modal v-if="successToggle">Update successful</successful-modal>
		</transition>
		<transition name="fade">
			<failed-modal v-if="failedToggle">Missing input fields</failed-modal>
		</transition>
	</div>
</template>

<script>
	import DogService from "../../Services/DogService";
	import moment from "moment";
	import SuccessfulModal from "../../components/SuccessfulModal";
	import FailedModal from "../../components/FailedModal";
	export default {
		components: {
			SuccessfulModal,
			FailedModal,
		},
		data() {
			return {
				dog: [],
				failedToggle: false,
				successToggle: false,
			};
		},
		methods: {
			moment(date) {
				return moment(date).format("L");
			},
			getAge(date) {
				var a = moment(moment(), "YYYY-MM-DD");
				var b = moment(date, "YYYY-MM-DD");

				let years = a.diff(b, "years");
				if (years === 0) {
					years = a.diff(b, "months") + " months old";
				} else {
					years = a.diff(b, "years") + " years old";
				}

				return years;
			},
			async getDog() {
				try {
					this.dog = await DogService.getDog(this.$route.params.id);
					this.dog[0].birthday = moment(this.dog[0].birthday).format(
						"YYYY-MM-DD"
					);
				} catch (err) {
					console.error(err.message);
				}
			},
			async patchDog() {
				try {
					console.log(this.dog[0])
					if (
						!this.dog[0].dog_name ||
						!this.dog[0].breed ||
						!this.dog[0].birthday ||
						!this.dog[0].sex ||
						!this.dog[0].weight ||
						!this.dog[0].color ||
						!this.dog[0].marks ||
						!this.dog[0].aggressive ||
						!this.dog[0].trained ||
						!this.dog[0].status ||
						!this.dog[0].description
					) {
						//if at least one input is empty
						console.log(this.dog[0]);
						this.failedToggle = true;
						setTimeout(() => {
							this.failedToggle = false;
						}, 3000);
					} else {
						await DogService.patchDog(this.dog[0]);
						this.successToggle = true;
						await setTimeout(() => {
							this.successToggle = false;
						}, 3000);
						// this.$router.push({ name: 'DogProfile', params: { id: this.$route.params.id } })
					}
				} catch (err) {
					console.error(err.message);
				}
			},
		},
		created() {
			this.getDog();
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