<template>
	<div>
		<div class="w-2/3 mx-auto">
			<span class="text-3xl text-bluegray-700 px-12 py-5">
				Volunteer Application Form
			</span>

			<div class="bg-white rounded-lg px-12 py-5 shadow-lg">
				<div class="grid grid-cols-2 gap-5">
					<!-- name -->
					<div>
						<div class="text-bluegray-500">Name</div>
						<div class="text-bluegray-700 text-2xl">
							{{ volunteer.fields.Firstname + " " + volunteer.fields.Lastname }}
						</div>
					</div>

					<!-- contact -->
					<div>
						<div class="text-bluegray-500">Contact Number</div>
						<div class="text-bluegray-700 text-2xl">
							{{ volunteer.fields.contact }}
						</div>
					</div>

					<!-- email -->
					<div>
						<div class="text-bluegray-500">Email</div>
						<div class="text-bluegray-700 text-2xl">
							{{ volunteer.fields.Email }}
						</div>
					</div>

					<!-- address -->
					<div>
						<div class="text-bluegray-500">Address</div>
						<div class="text-bluegray-700 text-2xl">
							{{ volunteer.fields.Address }}
						</div>
					</div>
					<!-- date -->
					<div>
						<div class="text-bluegray-500">Date Applied</div>
						<div class="text-bluegray-700 text-2xl">
							{{ moment(volunteer.createdTime) }}
						</div>
					</div>

					<!-- status -->
					<div>
						<div class="text-bluegray-500">Status</div>
						<span class="bg-orange-100 text-orange-800 rounded-full p-1">
							Pending
						</span>
					</div>
				</div>

				<div class="border-t-2 border-bluegray-300 mt-3"></div>
				<div class="space-y-5 mt-5">
					<div class="text-bluegray-700 text-2xl">Application Form</div>

					<div>
						<div class="text-bluegray-700">
							Do you have experience in handling dogs? Y/N
						</div>
						<div class="text-2xl text-bluegray-700">
							{{ volunteer.fields.experience }}
						</div>
					</div>

					<div>
						<div class="text-bluegray-700">
							If yes, please state your responsibility handling dogs (e.g vet
							assistant, dog caretaker,etc.)
						</div>
						<div class="text-2xl text-bluegray-700">
							{{ volunteer.fields.responsibility }}
						</div>
					</div>

					<div>
						<div class="text-bluegray-700">Tell us about yourself:</div>
						<div class="text-2xl text-bluegray-700">I'm ooga booga</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import moment from "moment";
	import VolunteerApplicationService from "../../Services/VolunteerApplicationService";
	export default {
		data() {
			return {
				volunteer: [],
			};
		},
		methods: {
			async getVolunteer() {
				try {
					this.volunteer = await VolunteerApplicationService.getVolunteer(
						this.$route.params.id
					);
					console.log(this.volunteer);
				} catch (err) {
					console.error(err.message);
				}
			},
			moment(date) {
				return moment(date).fromNow();
			},
		},
		created() {
			this.getVolunteer();
		},
	};
</script>

<style>
</style>