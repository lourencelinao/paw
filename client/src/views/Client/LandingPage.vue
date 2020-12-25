<template>
	<div>
		<div class="h-96 relative">
			<img
				src="https://images.unsplash.com/photo-1598262088246-2b1a35324c83?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80"
				class="object-cover w-full h-full object-center absolute inset-0"
			/>
			<div class="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
			<div
				class="relative flex flex-col justify-start h-full pt-16 px-48 space-y-5"
			>
				<div class="text-4xl text-white tracking-wide">
					All dogs deserve a home
				</div>
				<div>
					<button class="btn-primary px-4 py-2">Adopt now</button>
				</div>
			</div>
		</div>

		<div class="mt-48 px-48 space-y-5 mb-12">
			<div class="text-6xl text-bluegray-700 text-center">Meet our pets!</div>
			<div class="grid grid-cols-4 gap-5">
				<!-- <div
					class="bg-white space-y-5 rounded-lg"
					v-for="(dog, indx) in dogs"
					:key="indx"
				>
					<img
						src="https://images.unsplash.com/photo-1548658146-f142deadf8f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
						alt=""
						class="object-fill w-full h-64 w-64 rounded-t-lg"
					/>
					<div class="text-center pb-5 text-3xl text-bluegray-700">
						{{ dog.dog_name }}
					</div>
				</div> -->
				<router-link
					:to="{ name: 'ClientDogProfile', params: { id: dog.dog_id } }"
					class="bg-white space-y-5 rounded-lg"
					v-for="(dog, indx) in dogs"
					:key="indx"
				>
					<img
						src="https://images.unsplash.com/photo-1548658146-f142deadf8f7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
						alt=""
						class="object-fill w-full h-64 w-64 rounded-t-lg"
					/>
					<div class="text-center pb-5 text-3xl text-bluegray-700">
						{{ dog.dog_name }}
					</div>
				</router-link>
				<!-- <div class="bg-white h-24">hey</div>
					<div class="bg-white h-24">hey</div>
					<div class="bg-white h-24">hey</div> -->
			</div>
		</div>
	</div>
</template>

<script>
	import DogService from "../../Services/DogService";
	export default {
		data() {
			return {
				dogs: [],
			};
		},
		methods: {
			async getDogs() {
				try {
					this.dogs = await DogService.getHealthyDogs();
					console.log(this.dogs);
				} catch (err) {
					console.error(err.message);
				}
			},
		},
		created() {
			this.getDogs();
		},
	};
</script>

<style>
</style>