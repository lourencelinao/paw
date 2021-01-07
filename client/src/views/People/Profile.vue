<template>
	<div class="w-2/3 mx-auto">
		<div class="flex space-x-2">
			<user-icon
				size="3x"
				class="text-bluegray-700 shadow-sm rounded-full text-xl"
			></user-icon>
			<div>
				<div class="text-3xl text-bluegray-700">Your Profile</div>
				<div class="text-bluegray-500">Manage your account</div>
			</div>
		</div>

		<div class="bg-white shadow rounded-lg mt-5 flex px-12 py-5 space-x-5">
			<div class="w-1/3 flex flex-col items-center">
				<img
					src="https://i.pravatar.cc/300"
					alt="profile_picture"
					class="h-32 w-32 rounded-full shadow"
				/>
				<!-- <div class="text-center pt-3 text-bluegray-500">Click to update</div> -->
			</div>

			<div class="w-2/3">
				<!-- forms -->
				<form @submit.prevent="updateUserAndPerson" class="space-y-5">
					<!-- Email address -->
					<div>
						<div class="text-lg text-bluegray-700">Email Address</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].email_address"
						/>
					</div>

					<div>
						<button class="btn-primary px-4 py-2">Save Changes</button>
					</div>
				</form>
			</div>
		</div>

		<div class="bg-white shadow rounded-lg mt-5 px-12 py-5">
			<div class="text-2xl text-bluegray-700">Change your password</div>
			<form @submit.prevent="changePassword" class="mt-8 space-y-5">
				<!-- old password -->
				<div>
					<div class="text-lg text-bluegray-700">Old Password</div>
					<input
						type="password"
						placeholder="..."
						class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white placeholder-"
						v-model="password.old"
					/>
				</div>

				<!-- new password -->
				<div>
					<div class="text-lg text-bluegray-700">New Password</div>
					<input
						type="password"
						placeholder="Choose a strong password"
						class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white placeholder-"
						v-model="password.new"
					/>
				</div>

				<div>
					<button class="btn-primary py-2 px-4">Change password</button>
				</div>
			</form>
		</div>

		<div class="bg-white shadow rounded-lg mt-5 px-12 py-5">
			<form @submit.prevent="patchPerson">
				<div class="mt-8 grid grid-cols-2 gap-5">
					<!-- fistname -->
					<div>
						<div class="text-lg text-bluegray-700">Firstname</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].first_name"
						/>
					</div>
					<!-- middle initial -->
					<div>
						<div class="text-lg text-bluegray-700">Middle Initial</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].middle_initial"
						/>
					</div>

					<!-- Lastname -->
					<div>
						<div class="text-lg text-bluegray-700">Lastname</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].last_name"
						/>
					</div>

					<!-- Birthdate -->
					<div>
						<div class="text-lg text-bluegray-700">Birthdate</div>
						<input
							type="date"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].birthday"
						/>
					</div>

					<!-- Contact Number -->
					<div>
						<div class="text-lg text-bluegray-700">Contact Number</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].contact_number"
						/>
					</div>

					<!-- Address 1 -->
					<div>
						<div class="text-lg text-bluegray-700">Address 1</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].address1"
						/>
					</div>

					<!-- Address 2 -->
					<div>
						<div class="text-lg text-bluegray-700">Address 2</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].address2"
						/>
					</div>

					<!-- City -->
					<div>
						<div class="text-lg text-bluegray-700">City</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
							v-model="person[0].city"
						/>
					</div>
				</div>
				<div class="mt-5">
					<button class="btn-primary py-2 px-4">Save Changes</button>
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
	import { UserIcon } from "vue-feather-icons";
	import PeopleService from "../../Services/PeopleService";
	import UserService from "../../Services/UserService";
	import moment from "moment";
	import firebase from "firebase/app";
	import SuccessfulModal from "../../components/SuccessfulModal";
	import FailedModal from "../../components/FailedModal";
	import "firebase/auth";
	export default {
		components: {
			UserIcon,
			SuccessfulModal,
			FailedModal,
		},
		data() {
			return {
				person: [],
				successToggle: false,
				failedToggle: false,
				password: {
					old: "",
					new: "",
				},
			};
		},
		methods: {
			async patchPerson() {
				try {
					if (
						!this.person[0].first_name ||
						!this.person[0].middle_initial ||
						!this.person[0].last_name ||
						!this.person[0].birthdate ||
						!this.person[0].contact_number ||
						!this.person[0].address1 ||
						!this.person[0].address2 ||
						!this.person[0].city
					) {
						this.failedToggle = true;
						setTimeout(() => {
							this.failedToggle = false;
						}, 3000);
					} else {
						await PeopleService.patchPeople(this.person[0]);
							console.log("patch success");
						this.successToggle = true;
						setTimeout(() => {
							this.successToggle = false;
						}, 3000);
					}
				} catch (err) {
					console.error(err.message);
				}
			},
			async getPerson() {
				try {
					this.person = await PeopleService.getPerson(localStorage.id);
					this.person[0].birthday = moment(this.person[0].birthday).format(
						"YYYY-MM-DD"
					);
				} catch (err) {
					console.error(err.message);
				}
			},
			async updateUserAndPerson() {
				try {
					if (!this.person[0].email_address) {
						this.failedToggle = true;
						setTimeout(() => {
							this.failedToggle = false;
						}, 3000);
					} else {
						await UserService.patchUserEmail(
							this.person[0].email_address,
							localStorage.id
						);
						console.log("user success");
						await PeopleService.updatePersonEmail(
							this.person[0].email_address,
							this.person[0].person_id
						);
						console.log("people success");
						const user = firebase.auth().currentUser;
						console.log(user);
						user
							.updateEmail(this.person[0].email_address)
							.then(() => {
								console.log("Update successfull");
							})
							.catch((err) => {
								console.error(err.message);
							});
						this.successToggle = true;
						setTimeout(() => {
							this.successToggle = false;
						}, 3000);
					}
				} catch (err) {
					console.error(err.message);
				}
			},
			async changePassword() {
				try {
					// if(this.password.old === this.password.new && this.password.new.length >= 6){
					// 	console.log('longer')
					// }else{
					// 	console.log('short')
					// }
					if (
						this.password.old === localStorage.password &&
						this.password.new.length >= 6
					) {
						await UserService.patchUserPassword(
							this.password.new,
							localStorage.id
						);
						const user = firebase.auth().currentUser;
						user
							.updatePassword(this.password.new)
							.then(() => {
								console.log("firebase success");
							})
							.catch((err) => {
								console.error(err.message);
								this.failedToggle = true;
								setTimeout(() => {
									this.failedToggle = false;
								}, 3000);
							});
						console.log("password change success");
						this.successToggle = true;
						setTimeout(() => {
							this.successToggle = false;
						}, 3000);
						this.password = {};
					} else {
						this.failedToggle = true;
						setTimeout(() => {
							this.failedToggle = false;
						}, 3000);
					}
				} catch (err) {
					console.error(err.message);
				}
			},
			moment(date) {
				return moment(date).format("L");
			},
		},
		created() {
			this.getPerson();
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