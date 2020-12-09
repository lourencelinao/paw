<template>
	<div>
		<div class="w-2/3 mx-auto">
			<span class="text-3xl text-bluegray-700 px-12 py-5">
				Surrender Application
			</span>

			<div class="bg-white rounded-lg px-12 py-5 shadow-lg">
				<div class="grid grid-cols-2 gap-5">
					<!-- name -->
					<div>
						<div class="text-bluegray-500">Name</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ surrender.fields.Firstname + " " + surrender.fields.Lastname }}
                        </div>
					</div>

					<!-- contact -->
					<div>
						<div class="text-bluegray-500">Contact Number</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ surrender.fields.contact }}
                        </div>
					</div>

					<!-- email -->
					<div>
						<div class="text-bluegray-500">Email</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ surrender.fields.Email }}
                        </div>
					</div>

					<!-- address -->
					<div>
						<div class="text-bluegray-500">Address</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ surrender.fields.Address }}
                        </div>
					</div>
					<!-- date -->
					<div>
						<div class="text-bluegray-500">Date Applied</div>
						<div class="text-bluegray-700 text-2xl">
                            {{ moment(surrender.createdTime) }}
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
						<div class="text-bluegray-700">Dog Name</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.dog_name }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Dog Birthdate</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.dog_birthdate }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Dog Gender</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.dog_gender }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Dog Color</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.dog_color }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Dog Breed</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.dog_breed }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Years Owned</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.years_owned }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Spayed/Neutered? Y/N</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.spayed }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Last Vet Visit</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.last_vet_visit }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Weight</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.Weight }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Indoor/Outdoor?</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.Indoor }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Vet Comment</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.vet_comment }}
                        </div>
					</div>

                    <div>
						<div class="text-bluegray-700">Reason of Surrender</div>
						<div class="text-2xl text-bluegray-700">
                            {{ surrender.fields.reason_of_surrender }}
                        </div>
					</div>

					<!-- <div>
						<div class="text-bluegray-700">Tell us about yourself:</div>
						<div class="text-2xl text-bluegray-700">{{ surrender.fields.tell_us_about_yourself }}</div>
					</div> -->
				</div>
			</div>
		</div>
	</div>
</template>

<script>
    import SurrenderApplicationService from "../../Services/SurrenderApplicationService";
    import moment from 'moment'
	export default {
        data() {
            return {
                surrender: []
            }
        },
        methods: {
            async getSurrender() {
                try{
                    this.surrender = await SurrenderApplicationService.getSurrender(this.$route.params.id)
                    console.log(this.surrender)
                }catch(err){
                    console.error(err.message)
                }
            },
            moment(date) {
				return moment(date).fromNow();
			},
        },
        created() {
            this.getSurrender()
        }
    };
</script>

<style>
</style>