<template>
	<div>
		<div class="w-2/3 mx-auto">
			<span class="text-3xl text-bluegray-700 px-12 py-5">
				Adoption Application
			</span>

			<div class="bg-white rounded-lg px-12 py-5 shadow-lg">
				<div class="grid grid-cols-2 gap-5">
					<!-- name -->
					<div>
						<div class="text-bluegray-500">Name</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ adoption.fields.Firstname + " " + adoption.fields.Lastname }}
                        </div>
					</div>

					<!-- Pet -->
					<div>
						<div class="text-bluegray-500">Pet</div>
						<div class="text-bluegray-700 text-2xl">Maya</div>
					</div>

					<!-- contact -->
					<div>
						<div class="text-bluegray-500">Contact Number</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ adoption.fields.ContactNumber }}
                        </div>
					</div>

					<!-- email -->
					<div>
						<div class="text-bluegray-500">Email</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ adoption.fields.Email }}
                        </div>
					</div>

					<!-- address -->
					<div>
						<div class="text-bluegray-500">Address</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ adoption.fields.Address }}
                        </div>
					</div>
					<!-- date -->
					<div>
						<div class="text-bluegray-500">Date Applied</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ moment(adoption.createdTime) }}
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
						<div class="text-bluegray-700">Do you have any other pet/s?</div>
						<div class="text-2xl text-bluegray-700">
                            {{ adoption.fields.Do_you_own }}
                        </div>
					</div>

					<div>
						<div class="text-bluegray-700">
							If you have other pets,please list the breed of all pets you own
						</div>
						<div class="text-2xl text-bluegray-700">{{ adoption.fields.other_pet }}</div>
					</div>

					<div>
						<div class="text-bluegray-700">
							What is/are their behaviour towards dogs?
						</div>
						<div class="text-2xl text-bluegray-700">{{ adoption.fields.behavior }}</div>
					</div>

					<div>
						<div class="text-bluegray-700">
							Do you currently live in: Apartment, House, Condo, Other(please
							specify)
						</div>
						<div class="text-2xl text-bluegray-700">{{ adoption.fields.do_you_currently_live }}</div>
					</div>

					<div>
						<div class="text-bluegray-700">
							Is the residence currently: Rented, Owned, Leased by you?
						</div>
						<div class="text-2xl text-bluegray-700">{{ adoption.fields.residence }}</div>
					</div>


                    <div>
						<div class="text-bluegray-700">
							If not owned, please provide: Landlord's name and contact number:
						</div>
						<div class="text-2xl text-bluegray-700">
							{{ adoption.fields.owned }}
						</div>
					</div>

					<div>
						<div class="text-bluegray-700">
							Do you live with children? Please list their ages:
						</div>
						<div class="text-2xl text-bluegray-700">{{ adoption.fields.do_you_live_with_children }}</div>
					</div>

					<div>
						<div class="text-bluegray-700">Tell us about yourself:</div>
						<div class="text-2xl text-bluegray-700">{{ adoption.fields.tell_us_about_yourself }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import AdoptionApplicationService from "../../Services/AdoptionApplicationService";
    import moment from 'moment'
	export default {
        data() {
            return {
                adoption: []
            }
        },
        methods: {
            async getAdoption() {
                try{
                    this.adoption = await AdoptionApplicationService.getAdoption(this.$route.params.id)
                    console.log(this.adoption)
                }catch(err){
                    console.error(err.message)
                }
            },
            moment(date) {
				return moment(date).fromNow();
			},
        },
        created() {
            this.getAdoption()
        }
    };
</script>

<style>
</style>