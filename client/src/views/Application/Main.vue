<template>
	<div>
		<div class="flex justify-center">
			<!-- <router-link
				to="/dogs/create"
				class="btn-primary p-2 uppercase flex items-center text-sm text-bluebluegray-050"
			>
				<file-plus-icon size="1.25x" class="mr-1"></file-plus-icon>
				New Application
			</router-link> -->
			<button
				:class="{
					'px-4 py-2 border-t-2 border-b-2 border-l-2 border-bluegray-700 rounded-l text-lg bg-bluegray-700 text-white focus:outline-none focus:shadow-outline': allToggle,
					'px-4 py-2 border-t-2 border-b-2 border-l-2 rounded-l border-bluegray-700 text-lg text-bluegray-700': !allToggle,
				}"
				@click="toggleAll"
			>
				All
			</button>
			<button
				:class="{
					'px-4 py-2 border-t-2 border-b-2 border-l-2 border-bluegray-700 text-lg bg-bluegray-700 text-white focus:outline-none focus:shadow-outline': adoptionToggle,
					'px-4 py-2 border-t-2 border-b-2 border-r-2 border-l-2 border-bluegray-700 text-lg text-bluegray-700': !adoptionToggle,
				}"
				@click="toggleAdoption"
			>
				Adoption
			</button>
			<button
				:class="{
					'px-4 py-2 border-t-2 border-b-2 border-l-2 border-bluegray-700 text-lg bg-bluegray-700 text-white focus:outline-none focus:shadow-outline': surrenderToggle,
					'px-4 py-2 border-t-2 border-b-2 border-r-2 border-bluegray-700 text-lg text-bluegray-700': !surrenderToggle,
				}"
				@click="toggleSurrender"
			>
				Surrender
			</button>
			<button
				:class="{
					'px-4 py-2 border-t-2 border-b-2 border-l-2 border-bluegray-700 text-lg bg-bluegray-700 rounded-r text-white focus:outline-none focus:shadow-outline': volunteerToggle,
					'px-4 py-2 border-t-2 border-b-2 border-r-2 border-bluegray-700 text-lg text-bluegray-700 rounded-r': !volunteerToggle,
				}"
				@click="toggleVolunteer"
			>
				Volunteer
			</button>
		</div>
		<!-- all -->
		<div class="flex flex-col mt-5" v-if="allToggle">
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
										Status
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
								<tr
									v-for="(all, indx) in all"
									:key="indx"
									:class="{ 'bg-bluegray-050': indx % 2 != 0 }"
								>
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
													{{ all.fields.Firstname + " " + all.fields.Lastname }}
												</div>
												<div class="text-sm text-bluegray-500">
													{{ all.fields.Email }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-700">
											{{ all.fields.Type }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="">
											<span
												class="text-sm text-orange-700 bg-orange-100 rounded-full p-1"
												>Pending</span
											>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-900">
											{{ moment(all.createdTime) }}
										</div>
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<div
											class="flex justify-center space-x-3 text-bluegray-700"
										>
											<router-link
												v-if="all.fields.Type === 'Adoption'"
												:to="{
													name: 'AdoptionApplicationShow',
													params: { type: 'adoption', id: all.id },
												}"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
											</router-link>
											<router-link
												v-else-if="all.fields.Type === 'Surrender'"
												:to="{
													name: 'SurrenderApplicationShow',
													params: { type: 'surrender', id: all.id },
												}"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
											</router-link>
											<router-link
												v-else
												:to="{
													name: 'VolunteerApplicationShow',
													params: { type: 'volunteer', id: all.id },
												}"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
											</router-link>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
		<!-- table end -->

		<!-- adoption -->
		<div class="flex flex-col mt-5" v-if="adoptionToggle">
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
										Status
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
								<tr
									v-for="(adoption, indx) in adoptions.records"
									:key="indx"
									:class="{ 'bg-bluegray-050': indx % 2 != 0 }"
								>
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
														adoption.fields.Firstname +
														" " +
														adoption.fields.Lastname
													}}
												</div>
												<div class="text-sm text-bluegray-500">
													{{ adoption.fields.Email }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-700">
											{{ adoption.fields.Type }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="">
											<span
												class="text-sm text-orange-700 bg-orange-100 rounded-full p-1"
												>Pending</span
											>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-900">
											{{ moment(adoption.createdTime) }}
										</div>
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<div
											class="flex justify-center space-x-3 text-bluegray-700"
										>
											<router-link
												:to="{
													name: 'AdoptionApplicationShow',
													params: { id: adoption.id },
												}"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
											</router-link>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- surrender -->
		<div class="flex flex-col mt-5" v-if="surrenderToggle">
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
										Status
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
								<tr
									v-for="(surrender, indx) in surrender.records"
									:key="indx"
									:class="{ 'bg-bluegray-050': indx % 2 != 0 }"
								>
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
														surrender.fields.Firstname +
														" " +
														surrender.fields.Lastname
													}}
												</div>
												<div class="text-sm text-bluegray-500">
													{{ surrender.fields.Email }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-700">
											{{ surrender.fields.Type }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="">
											<span
												class="text-sm text-orange-700 bg-orange-100 rounded-full p-1"
												>Pending</span
											>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-900">
											{{ moment(surrender.createdTime) }}
										</div>
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<div
											class="flex justify-center space-x-3 text-bluegray-700"
										>
											<router-link
												:to="{
													name: 'SurrenderApplicationShow',
													params: { type: 'surrender', id: surrender.id },
												}"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
											</router-link>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<!-- volunteer -->
		<div class="flex flex-col mt-5" v-if="volunteerToggle">
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
										Status
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
								<tr
									v-for="(volunteer, indx) in volunteer.records"
									:key="indx"
									:class="{ 'bg-bluegray-050': indx % 2 != 0 }"
								>
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
														volunteer.fields.Firstname +
														" " +
														volunteer.fields.Lastname
													}}
												</div>
												<div class="text-sm text-bluegray-500">
													{{ volunteer.fields.Email }}
												</div>
											</div>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-700">
											{{ volunteer.fields.Type }}
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="">
											<span
												class="text-sm text-orange-700 bg-orange-100 rounded-full p-1"
												>Pending</span
											>
										</div>
									</td>
									<td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-bluegray-900">
											{{ moment(volunteer.createdTime) }}
										</div>
									</td>
									<td
										class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
									>
										<div
											class="flex justify-center space-x-3 text-bluegray-700"
										>
											<router-link
												:to="{
													name: 'VolunteerApplicationShow',
													params: { id: volunteer.id },
												}"
											>
												<eye-icon size="1.5x" class="custom-class"></eye-icon>
											</router-link>
											<trash-icon size="1.5x" class="custom-class"></trash-icon>
										</div>
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
	import moment from "moment";
	import AdoptionApplicationService from "../../Services/AdoptionApplicationService";
	import SurrenderApplicationService from "../../Services/SurrenderApplicationService";
	import VolunteerApplicationService from "../../Services/VolunteerApplicationService";
	import { EditIcon, EyeIcon, TrashIcon, FilePlusIcon } from "vue-feather-icons";
	export default {
		components: {
			EditIcon,
			EyeIcon,
			TrashIcon,
			FilePlusIcon,
		},
		data() {
			return {
				all: [],
				adoptions: [],
				surrender: [],
				volunteer: [],
				allToggle: "",
				adoptionToggle: "",
				surrenderToggle: "",
				volunteerToggle: "",
			};
		},
		methods: {
			async getAdoption() {
				try {
					this.adoptions = await AdoptionApplicationService.getAdoptions();
				} catch (err) {
					console.error(err.message);
				}
			},
			async getSurrender() {
				try {
					this.surrender = await SurrenderApplicationService.getSurrenders();
				} catch (err) {
					console.error(err.message);
				}
			},
			async getVolunteer() {
				try {
					this.volunteer = await VolunteerApplicationService.getVolunteers();
				} catch (err) {
					console.error(err.message);
				}
			},
			mergeAndSort() {
				try {
					let a = 0,
						s = 0;
					let temp = [];
					while (
						a < this.adoptions.records.length &&
						s < this.surrender.records.length
					) {
						if (
							this.adoptions.records[a].createdTime >
							this.surrender.records[s].createdTime
						) {
							temp.push(this.adoptions.records[a]);
							a++;
						} else {
							temp.push(this.surrender.records[s]);
							s++;
						}
					}

					while (a < this.adoptions.records.length) {
						temp.push(this.adoptions.records[a]);
						a++;
					}

					while (s < this.surrender.records.length) {
						temp.push(this.surrender.records[s]);
						s++;
					}

					
					let t = 0,
						v = 0;
					while (t < temp.length && v < this.volunteer.records.length) {
						if (temp[t].createdTime > this.volunteer.records[v].createdTime) {
							this.all.push(temp[t]);
							t++;
						} else {
							this.all.push(this.volunteer.records[v]);
							v++;
						}
					}

					console.log("TEST");
					while (t < temp.length) {
						this.all.push(temp[t]);
						t++;
					}

					while (v < this.volunteer.records.length) {
						this.all.push(this.volunteer.records[v]);
						v++;
					}

					console.log(this.all);
				} catch (err) {
					console.error(err.message);
				}
			},
			moment(date) {
				return moment(date).fromNow();
			},
			toggleAll() {
				this.allToggle = true;
				this.adoptionToggle = false;
				this.volunteerToggle = false;
				this.surrenderToggle = false;
			},
			toggleAdoption() {
				this.allToggle = false;
				this.adoptionToggle = true;
				this.volunteerToggle = false;
				this.surrenderToggle = false;
			},
			toggleSurrender() {
				this.allToggle = false;
				this.adoptionToggle = false;
				this.volunteerToggle = false;
				this.surrenderToggle = true;
			},
			toggleVolunteer() {
				this.allToggle = false;
				this.adoptionToggle = false;
				this.volunteerToggle = true;
				this.surrenderToggle = false;
			},
		},
		async created() {
			this.allToggle = true;
			this.adoptionToggle = false;
			await this.getAdoption();
			await this.getSurrender();
			await this.getVolunteer();
			this.mergeAndSort();
		},
		computed: {
			reverseAdoptions() {
				return this.adoptions.splice().reverse();
			},
		},
	};
</script>

<style>
</style>