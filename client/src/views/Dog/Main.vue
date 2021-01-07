<template>
  <div class="font-graphik">
    <!-- 3 boxes -->
    <!-- <div class="grid grid-cols-3 gap-5">
			
			<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
				<div class="flex justify-between items-end">
					<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
						Total Dogs
					</div>
					<select
						name=""
						id=""
						class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
					>
						<option value="">30 days</option>
						<option value="">15 days</option>
						<option value="">7 days</option>
					</select>
				</div>

				<div class="mt-3 text-bluegray-700 font-extralight text-5xl">69</div>
				<div class="flex items-center space-x-2 mt-3">
					<trending-up-icon
						size="1.5x"
						class="text-green-700"
					></trending-up-icon>
					<div class="text-bluegray-700 text-sm tracking-wide font-medium">
						4.20% Increase
					</div>
				</div>
			</div>
			
			<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
				<div class="flex justify-between items-baseline">
					<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
						New Applications
					</div>
					<select
						name=""
						id=""
						class="bg-bluegray-050 rounded px-2 py-1 focus:ring-2 focus:ring-bluegray-700 focus:outline-none"
					>
						<option value="">30 days</option>
						<option value="">15 days</option>
						<option value="">7 days</option>
					</select>
				</div>

				<div class="mt-3 text-bluegray-700 font-medium text-5xl">4</div>
				<div class="flex items-center space-x-2 mt-3">
					<trending-up-icon
						size="1.5x"
						class="text-green-700"
					></trending-up-icon>
					<div class="text-bluegray-700 text-sm tracking-wide font-medium">
						69% Increase
					</div>
				</div>
			</div>

			
			<div class="bg-white rounded-lg px-5 py-2 shadow-lg">
				<div class="flex justify-between items-baseline">
					<div class="text-bluegray-500 text-lg font-semibold tracking-wide">
						Active Dogs
					</div>
					<div class="text-bluegray-500 font-medium tracking-wide">
						(88 Total)
					</div>
				</div>

				<div class="mt-3">
					<div
						class="text-bluegray-300 tracking-wide flex items-baseline text-sm"
					>
						<span
							class="flex justify-center items-center w-3 h-3 text-green-800 rounded-full bg-green-800 opacity-75 mr-2"
							>.</span
						>Active (60 - 52%)
					</div>
					<div
						class="text-bluegray-300 tracking-wide flex items-baseline text-sm"
					>
						<span
							class="flex justify-center items-center w-3 h-3 text-yellow-800 rounded-full bg-yellow-800 opacity-75 mr-2"
							>.</span
						>Inactive (28 - 48%)
					</div>
				</div>
			</div>
		</div> -->
    <!-- 3 boxes end -->
    <div class="flex justify-end mt-5">
      <router-link
        to="/dogs/create"
        class="btn-primary p-2 uppercase flex items-center text-sm text-bluebluegray-050"
      >
        <plus-icon size="1.25x" class="mr-1"></plus-icon>
        New Dog
      </router-link>
    </div>

    <!-- table -->
    <div class="flex flex-col mt-5 shadow-lg" v-if="dogs.length !== 0">
      <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow-lg overflow-hidden sm:rounded-lg">
            <table class="min-w-full">
              <thead>
                <tr>
                  <th
                    scope="col"
                    class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <!-- <th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Title
									</th> -->
                  <th
                    scope="col"
                    class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <!-- <th
										scope="col"
										class="px-6 py-3 bg-bluegray-050 text-left text-sm font-medium text-bluegray-500 uppercase tracking-wider"
									>
										Role
									</th> -->
                  <th scope="col" class="px-6 py-3 bg-bluegray-50">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                <tr
                  v-for="(dog, indx) in dogs"
                  :key="indx"
                  :class="{ 'bg-bluegray-050': indx % 2 != 0 }"
                >
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-full bg-red-100 h-10 w-10 rounded-full"
                          :src="getImg(dog.dog_id)"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-lg font-medium text-bluegray-900">
                          {{ dog.dog_name }}
                        </div>
                        <div class="text-sm text-bluegray-500">
                          {{ dog.breed }}
                        </div>
                      </div>
                    </div>
                  </td>
                  <!-- <td class="px-6 py-4 whitespace-nowrap">
										<div class="text-sm text-gray-900">
											Regional Paradigm Technician
										</div>
										<div class="text-sm text-bluegray-500">Optimization</div>
									</td> -->
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span
                      class="px-2 inline-flex text-sm leading-5 font-semibold rounded-full"
                      :class="{
                        'bg-green-100 text-green-800': dog.status === 'Healthy',
                        'bg-red-100 text-red-800':
                          dog.status === 'Died in Care',
                        'bg-blue-100 text-blue-800': dog.status === 'Adopted',
                        'bg-orange-100 text-orange-800':
                          dog.status === 'Recuperating',
                      }"
                    >
                      {{ dog.status }}
                    </span>
                  </td>
                  <!-- <td
										class="px-6 py-4 whitespace-nowrap text-sm text-bluegray-500"
									>
										Admin
									</td> -->
                  <td class="px-6 py-4 whitespace-nowrap text-right">
                    <div
                      class="text-sm font-medium flex items-center space-x-3 text-sm"
                    >
                      <router-link
                        :to="{ name: 'DogProfile', params: { id: dog.dog_id } }"
                        class="text-bluegray-700"
                      >
                        <eye-icon size="1.5x" class="text-lg"></eye-icon>
                      </router-link>
                      <router-link
                        :to="{ name: 'DogEdit', params: { id: dog.dog_id } }"
                        class="text-bluegray-700"
                      >
                        <edit-icon size="1.5x" class="text-lg"></edit-icon>
                      </router-link>
                      <button
                        class="text-bluegray-700"
                        @click="deleteDog(dog.dog_id)"
                      >
                        <trash-icon size="1.5x" class="text-lg"></trash-icon>
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <img
      src="../../icons/undraw_empty_xct9.svg"
      alt=""
      v-else
      class="h-1/2 w-1/2 mx-auto"
    />
    <!-- table end -->
  </div>
</template>

<script>
import DogService from "../../Services/DogService";
import DogImageService from "../../Services/DogImageServices";
import {
  EditIcon,
  EyeIcon,
  TrashIcon,
  PlusIcon,
  UsersIcon,
  TrendingUpIcon,
} from "vue-feather-icons";
import axios from "axios";
export default {
  components: {
    PlusIcon,
    EyeIcon,
    EditIcon,
    TrashIcon,
    UsersIcon,
    TrendingUpIcon,
  },
  data() {
    return {
      dogImg: "",
      dogs: [],
      images: [],
    };
  },
  methods: {
    async getDogs() {
      try {
        this.dogs = await DogService.getDogs();
        console.log(this.dogs);
      } catch (err) {
        console.error(err.message);
      }
    },
    async deleteDog(id) {
      try {
        await DogService.deleteDog(id);
        this.dogs = await DogService.getDogs();
        console.log(this.dogs);
      } catch (err) {
        console.error(err.message);
      }
    },
    async getImages() {
      try {
        this.images = await DogImageService.getAll();
        console.log(this.images);
      } catch (err) {
        console.error(err.message);
      }
    },
    getImg(id) {
		let img
		for(let i = 0; i < this.images.length; i++){
			if(this.images[i].dog_id === id){
				img = this.images[i]
				console.log(img)
      			return require(`../../../../img/${img.image}`);
				break
			}
		}
		return 'https://via.placeholder.com/300'
    },
  },
  created() {
    this.getDogs();
    this.getImages();
  },
};
</script>

<style>
</style>