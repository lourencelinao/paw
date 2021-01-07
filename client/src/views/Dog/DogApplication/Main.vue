<template>
	<div>
		<!-- <div class="flex justify-end">
			<router-link
				to="/dogs/create"
				class="btn-primary p-2 uppercase flex items-center text-sm text-bluebluegray-050"
			>
				<file-plus-icon size="1.25x" class="mr-1"></file-plus-icon>
				New Application
			</router-link>
		</div> -->
		<!-- table -->
		<div class="flex flex-col mt-5">
			<div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
					<div
						class="shadow overflow-hidden border-b border-bluegray-200 sm:rounded-lg"
					>
						<table class="min-w-full">
							<thead>
								<tr>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-50 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Name
									</th>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-50 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Type
									</th>
									<th
										scope="col"
										class="px-6 py-3 bg-bluegray-50 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										date applied
									</th>
									<th scope="col" class="px-6 py-3 bg-bluegray-50">
										<span class="sr-only">Edit</span>
									</th>
								</tr>
							</thead>
							<tbody class="bg-white">
								<tr v-for="(x, indx) in this.adoptions" :key="indx" :class="{ 'bg-bluegray-050': indx % 2 != 0 }">
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="flex items-center">
											<div class="flex-shrink-0 h-10 w-10">
												<img
													class="h-10 w-10 rounded-full"
													src="https://yt3.ggpht.com/ytc/AAUvwnghGxttlnoIZ8GiuEYn_CyIeDVvV1lu1JS4a3YtmQ=s900-c-k-c0x00ffffff-no-rj"
													alt=""
												/>
											</div>
											<div class="ml-4">
												<div class="text-lg font-medium text-bluegray-900">
													{{
														x.fields.Firstname +
														" " +
														x.fields.Lastname
													}}
												</div>
												<div class="text-sm text-bluegray-500">
													{{ x.fields.Email }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-900">Adoption</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-900">{{ moment(x.createdTime) }}</div>
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<router-link
											:to="{ name: 'AdoptionApplicationShow',
													params: { type: 'adoption', id: x.id }, }"
											class="flex justify-center space-x-5 text-bluegray-700"
										>
											<eye-icon size="1.5x" class="custom-class"></eye-icon>
											<!-- <edit-icon size="1.5x" class="custom-class"></edit-icon>
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
		<!-- table end -->
	</div>
</template>

<script>
	import { EditIcon, EyeIcon, TrashIcon, FilePlusIcon } from "vue-feather-icons";
	import AdoptionApplicationService from '../../../Services/AdoptionApplicationService'
	import DogService from '../../../Services/DogService'
	import moment from 'moment'
	export default {
		components: {
			EditIcon,
			EyeIcon,
			TrashIcon,
			FilePlusIcon,
		},
		data() {
			return{
				adoptions: [],
				dog: ''
			}
		},
		methods: {
			async getDogs(){
				try{
					this.dog = await DogService.getDog(this.$route.params.id)
					this.adoptions = await AdoptionApplicationService.getAdoptions();
					// console.log(this.dog)
					let list = []
					// console.log(this.adoptions.records)
					for(let i = 0; i < this.adoptions.records.length; i++) {
						console.log('yes')
						if(this.adoptions.records[0].fields.Dog_name === this.dog[0].dog_name){
							list.push(this.adoptions.records[i])
						}
					}
					this.adoptions = []
					for(let i = list.length - 1; i >= 0; i--){
						this.adoptions.push(list[i])
					}
					
				}catch(err){
					console.error(err.message)
				}
			},
			moment(date) {
				return moment(date).fromNow();
			},
		},
		created(){
			this.getDogs()
		}
	};
</script>

<style>
</style>