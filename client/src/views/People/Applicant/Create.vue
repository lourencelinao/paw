<template>
	<div class="lg:px-48 md:px-32 xl:px-64">
		<div class="text-bluegray-700 text-2xl border-b-2 border-bluegray-200 pb-3">
			Create
		</div>

		<!-- input fields -->

		<div class="mt-5 min-w-full">
			<form action="">
				<!-- name -->
				<div class="grid grid-cols-1 lg:grid-cols-2 sm:gap-4 gap-y-4">

					<div>
						<div class="text-xl text-bluegray-700">First name</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

                    <!-- middle initial -->
                    <div>
						<div class="text-xl text-bluegray-700">Middle Initial</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

					<!-- lastname -->
					<div>
						<div class="text-xl text-bluegray-700">Last name</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

					<!-- date of birth -->
					<div>
						<div class="text-xl text-bluegray-700">Contact number</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

					<!-- sex -->
					<div>
						<div class="text-xl text-bluegray-700">Email</div>
						<input
							type="email"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

					<!-- weight -->
					<div>
						<div class="text-xl text-bluegray-700">Date of birth</div>
						<input
							type="date"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

					<!-- marks -->
					<div>
						<div class="text-xl text-bluegray-700">Sex</div>
												<select
							name=""
							id=""
							class="w-full px-4 py-3 text-sm rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						>
							<option value="">Male</option>
							<option value="">Female</option>
						</select>
					</div>

					<!-- color -->
					<div>
						<div class="text-xl text-bluegray-700">Address 1</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

					<!-- status -->
					<div>
						<div class="text-xl text-bluegray-700">Address 2</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

					<!-- aggressive -->
					<div>
						<div class="text-xl text-bluegray-700">City</div>
						<input
							type="text"
							name=""
							id=""
							class="w-full px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700"
						/>
					</div>

				</div>

				<div class="flex justify-end space-x-3 mt-5">
					<button class="btn-secondary px-4 py-2">Cancel</button>
					<button class="btn-primary px-4 py-2">Create</button>
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