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
						<div class="text-bluegray-700 text-2xl">{{ adoption.fields.Dog_name }}</div>
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
						<span class=" rounded-full p-1" :class="{ 'bg-green-100 text-green-700': adoption.fields.Status === 'Approved', 'text-orange-700 bg-orange-100':  adoption.fields.Status === 'Pending', 'text-red-700 bg-red-100': adoption.fields.Status === 'Rejected' }">
							{{ adoption.fields.Status }}
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

			<div class="flex items-center justify-end my-3 space-x-5" >
				<button class="bg-red-700 text-white font-medium tracking-widest rounded-md hover:bg-red-800 focus:outline-none px-4 py-2" @click="rejectAdoption(adoption.id)">Reject</button>
				<button class="btn-primary px-4 py-2" @click="approveAdoption(adoption.id)">Approve</button>
			</div>
		</div>
	</div>
</template>

<script>
	import AdoptionApplicationService from "../../Services/AdoptionApplicationService";
	import OuttakeService from '../../Services/OuttakeService'
	import DogService from '../../Services/DogService'
    import moment from 'moment'
	export default {
        data() {
            return {
				adoption: [],
				dog: ''
            }
        },
        methods: {
            async getAdoption() {
                try{
					this.adoption = await AdoptionApplicationService.getAdoption(this.$route.params.id)
					this.dog = await DogService.getDogByName(this.adoption.fields.Dog_name)
                    console.log(this.adoption)
                }catch(err){
                    console.error(err.message)
                }
            },
            moment(date) {
				return moment(date).fromNow();
			},
			async approveAdoption(id){
				try{
					await AdoptionApplicationService.approveAdoption(id)
					let outtake = { dog_id: this.dog[0].dog_id, outtakeable_type: 'Adopted', firstname: this.adoption.fields.Firstname, middle_initial: this.adoption.fields.MiddleInitial, lastname: this.adoption.fields.Lastname}
					await OuttakeService.postOuttake(outtake)
				}catch(err){
					console.error(err.message)
				}
			},
			async rejectAdoption(id){
				try{
					await AdoptionApplicationService.rejectAdoption(id)
				}catch(err){
					console.error(err.message)
				}
			}
        },
        created() {
            this.getAdoption()
        }
    };
</script>

<style>
</style>