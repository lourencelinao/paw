<template>
	<div>
		<div class="my-5 w-2/3 mx-auto rounded shadow bg-white py-5 px-8">
			<div class="flex justify-between items-center">
				<div class="text-3xl text-bluegray-700 pb-2">Intake</div>
				<!-- <router-link
					to="/dogs/medical/vaccine/create"
					class="btn-primary px-4 py-2"
					>New Intake</router-link
				> -->
			</div>

			<!-- intake -->
			<div class="grid grid-cols-2 gap-4 place-items-center py-5" v-if="intake.length != 0">
				<div class="w-full">
					<div class="text-bluegray-300 text-md">Arrival/Admission Date</div>
					<div class="text-3xl text-bluegray-700">{{ moment(intake[0].created) }}</div>
				</div>
				<div class="w-full">
					<div class="text-bluegray-300 text-md">
						Admission Attendant/Receiver
					</div>
					<div class="text-3xl text-bluegray-700">{{ intake[0].attendant }}</div>
				</div>
				<div class="w-full">
					<div class="text-bluegray-300 text-md">Type of Intake</div>
					<div class="text-3xl text-bluegray-700">{{ intake[0].intakeable_type }}</div>
				</div>
				<div class="w-full">
					<div class="text-bluegray-300 text-md">Person/Address/Shelter</div>
					<div class="text-3xl text-bluegray-700">{{ intake[0].firstname + " " + intake[0].middle_initial + " " + intake[0].lastname }}</div>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-4 place-items-center py-5" v-else>
				<div class="w-full">
					<div class="text-bluegray-300 text-md">Arrival/Admission Date</div>
					<div class="text-3xl text-bluegray-700"></div>
				</div>
				<div class="w-full">
					<div class="text-bluegray-300 text-md">
						Admission Attendant/Receiver
					</div>
					<div class="text-3xl text-bluegray-700"></div>
				</div>
				<div class="w-full">
					<div class="text-bluegray-300 text-md">Type of Intake</div>
					<div class="text-3xl text-bluegray-700"></div>
				</div>
				<div class="w-full">
					<div class="text-bluegray-300 text-md">Person/Address/Shelter</div>
					<div class="text-3xl text-bluegray-700"></div>
				</div>
			</div>
		</div>

		<!-- outtake -->
		<div class="flex flex-col mt-10 p-5 rounded-md bg-white shadow w-2/3 mx-auto">
			<div class="flex justify-between items-baseline pb-3">
				<div class="text-2xl text-bluegray-700 pb-2">Outtakes</div>
				<!-- <router-link
					to="/dogs/medical/vaccine/create"
					class="btn-primary px-4 py-2"
					>New Outtake</router-link
				> -->
			</div>
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div
						class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
					>
						<table class="min-w-full divide-y divide-gray-200">
							<thead>
								<tr>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Date
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Type
									</th>
									<th
										scope="col"
										class="px-4 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										To
									</th>
									<th scope="col" class="px-4 py-3 bg-bluegray-050">
										<span class="sr-only">Ebluedit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<tr v-for="(x, indx) in outtakes" :key="indx">
									<td
										class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										{{ moment(x.created) }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										{{ x.outtakeable_type }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										{{ x.firstname + " " + x.middle_initial +  " " +  x.lastname }}
									</td>
									<td
										class="px-4 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											to=""
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<!-- <eye-icon size="1.5x" class="custom-class"></eye-icon>
											<edit-icon size="1.5x" class="custom-class"></edit-icon>
											<trash-icon size="1.5x" class="custom-class"></trash-icon> -->
										</router-link>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import OuttakeService from '../../../Services/OuttakeService'
	import IntakeService from '../../../Services/IntakeService'
	import moment from 'moment'
	export default {
		data(){
			return{
				outtakes: [],
				intake: []
			}
		},
		methods: {
			async getIntake(){
				try{
					this.intake = await IntakeService.getIntake(this.$route.params.id)
					console.log(this.intake)
				}catch(err){
					console.error(err.message)
				}
			},
			async getOuttakes(){
				try{
					this.outtakes = await OuttakeService.getOuttakes(this.$route.params.id)
					console.log(this.outtakes)
				}catch(err){
					console.error(err.message)
				}
			},
				moment(date) {
				return moment(date).fromNow();
			},
		},
		created() {
			this.getOuttakes()
			this.getIntake()
		}
	};
</script>

<style>
</style>