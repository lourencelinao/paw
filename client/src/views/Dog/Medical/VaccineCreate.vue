<template>
	<div class="lg:px-48 md:px-32 xl:px-64">
		<div
			class="text-bluegray-700 text-2xl border-b-2 border-bluegray-200 pb-3 mt-5"
		>
			New Vaccination Record
		</div>

		<!-- input fields -->

		<div class="mt-5 min-w-full">
			<form action="">
				<!-- name -->
				<div class="grid grid-cols-1 sm:gap-4 gap-y-4 w-1/2 mx-auto">
					<div>
						<div class="text-xl text-bluegray-700">Clinic</div>
						<input
							type="text"
							list="clinic"
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
						<datalist id="clinic" class="w-full">
							<option>Paws and Claws</option>
						</datalist>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Veterinarian</div>
						<input
							type="text"
							list="veterinarian"
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
						<datalist id="veterinarian" class="w-full">
							<option>Johnny Sins</option>
						</datalist>
					</div>

					<div>
						<div class="text-xl text-bluegray-700">Vaccine</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>
                    
					<div class="flex justify-end space-x-3 mt-5">
						<button class="btn-secondary px-4 py-2">Cancel</button>
						<button class="btn-primary px-4 py-2">Create</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { UploadIcon, Tren } from "vue-feather-icons";
	export default {
		components: {
			UploadIcon,
		},
		methods: {
			chooseFiles() {
				document.getElementById("fileUpload").click();
			},
		},
	};
</script>

<style>
</style>