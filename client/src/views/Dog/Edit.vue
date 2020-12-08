<template>
	<div>
		<div class="grid grid-cols-1 my-12">
			<div class="flex">
				<div class="w-1/5 mx-auto">
					<img
						src="https://ourfunnylittlesite.com/wp-content/uploads/2018/07/1-4.jpg"
						alt=""
						class="rounded-full shadow-md"
					/>
				</div>
				<div class="w-2/3 bg-white rounded-md shadow-md">
					<div class="grid grid-cols-2 gap-4 p-5 text-bluegray-700">
						<div>
							<div class="text-sm text-bluegray-500">Name</div>
							<!-- <div class="text-2xl">Maya</div> -->
							<input
								type="text"
								class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
							/>
						</div>

						<div>
							<div class="text-sm text-bluegray-500">ID</div>
							<div class="text-2xl">42069</div>
						</div>

						<div>
							<div class="text-sm text-bluegray-500">Breed</div>
							<input
								type="text"
								class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
							/>
						</div>

						<div>
							<div class="text-sm text-bluegray-500">Sex</div>
							<!-- <div class="text-2xl">Female</div> -->
							<select
								name=""
								id=""
								class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-1/2"
							>
								<option value="">Male</option>
								<option value="">Female</option>
							</select>
						</div>

						<div>
							<div class="text-sm text-bluegray-500">Date of Birth</div>
							<input
								type="date"
								class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
							/>
						</div>

						<div>
							<div class="text-sm text-bluegray-500">Age</div>
							<div class="text-2xl">69</div>
						</div>

						<div>
							<div class="text-sm text-bluegray-500">Status</div>
							<select
								name=""
								id=""
								class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-1/2"
							>
								<option value="">Adopted</option>
								<option value="">Inactive</option>
								<option value="">Recuperating</option>
								<option value="">Transferred</option>
								<option value="">Healthy</option>
							</select>
						</div>

						<div>
							<div class="text-sm text-bluegray-500">Foster Parent</div>
							<select
								name=""
								id=""
								class="w-1/2 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-1/2"
							>
								<option value="">James Charles</option>
								<option value="">Shane Dawson</option>
							</select>
						</div>
					</div>

					<div class="px-5">
						<hr class="border-bluegray-200" />
					</div>

					<div>
						<div class="p-5 text-bluegray-700">
							<div class="text-2xl">Additional Info</div>

							<div class="flex mt-3">
								<div class="">
									<div class="text-sm text-bluegray-500">Weight</div>
									<input
										type="number"
										step="0.01"
										class="w-2/3 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
									/>
								</div>
								<div>
									<div class="text-sm text-bluegray-500">Color</div>
									<input
										type="text"
										class="w-2/3 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
									/>
								</div>
								<div>
									<div class="text-sm text-bluegray-500">Marks</div>
									<input
										type="text"
										class="w-2/3 px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
									/>
								</div>

								<div class="flex space-x-5">
									<div>
										<div class="text-sm text-bluegray-500">Aggressive?</div>
										<select
											name=""
											id=""
											class="px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
										>
											<option value="">No</option>
											<option value="">Yes</option>
										</select>
									</div>
									<div>
										<div class="text-sm text-bluegray-500">Trained?</div>
										<select
											name=""
											id=""
											class="px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white"
										>
											<option value="">No</option>
											<option value="">Yes</option>
										</select>
									</div>
								</div>
							</div>

							<div class="text-sm text-bluegray-500 mt-3">Description</div>
							<textarea
								name=""
								id=""
								class="px-4 py-2 bg-bluegray-050 rounded focus:ring-2 focus:ring-bluegray-700 focus:outline-none focus:shadow-outline focus:bg-white w-full"
							></textarea>
							<div class="flex justify-end mt-2 space-x-2">
								<button class="btn-secondary px-4 py-2">Cancel</button>
								<button class="btn-primary px-4 py-2">Save</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {};
</script>

<style>
</style>