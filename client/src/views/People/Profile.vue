<template>
	<div class="w-2/3 mx-auto">
		<div class="flex space-x-2">
			<user-icon
				size="3x"
				class="text-bluegray-700 shadow-sm rounded-full text-xl"
			></user-icon>
			<div>
				<div class="text-3xl text-bluegray-700">Your Profile</div>
				<div class="text-bluegray-500">Manage your account</div>
			</div>
		</div>

		<div class="bg-white shadow rounded-lg mt-5 flex px-12 py-5 space-x-5">
			<div class="w-1/3 flex flex-col items-center">
				<img
					src="https://i.pravatar.cc/300"
					alt="profile_picture"
					class="h-32 w-32 rounded-full shadow"
				/>
				<div class="text-center pt-3 text-bluegray-500">Click to update</div>
			</div>

			<div class="w-2/3">
				<!-- forms -->
				<form action="" class="space-y-5">
					<!-- Email address -->
					<div>
						<div class="text-lg text-bluegray-700">Email Address</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>

					<div>
						<button class="btn-primary px-4 py-2">Save Changes</button>
					</div>
				</form>
			</div>
		</div>

		<div class="bg-white shadow rounded-lg mt-5 px-12 py-5">
			<div class="text-2xl text-bluegray-700">Change your password</div>
			<form action="" class="mt-8 space-y-5">
				<!-- old password -->
				<div>
					<div class="text-lg text-bluegray-700">Old Password</div>
					<input
						type="password"
						placeholder="..."
						class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white placeholder-"
					/>
				</div>

				<!-- new password -->
				<div>
					<div class="text-lg text-bluegray-700">New Password</div>
					<input
						type="password"
						placeholder="Choose a strong password"
						class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white placeholder-"
					/>
				</div>

				<div>
					<button class="btn-primary py-2 px-4">Change password</button>
				</div>
			</form>
		</div>

		<div class="bg-white shadow rounded-lg mt-5 px-12 py-5">
			<form action="">
				<div class="mt-8 grid grid-cols-2 gap-5">
					<!-- fistname -->
					<div>
						<div class="text-lg text-bluegray-700">Firstname</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>
					<!-- middle initial -->
					<div>
						<div class="text-lg text-bluegray-700">Middle Initial</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>

					<!-- Lastname -->
					<div>
						<div class="text-lg text-bluegray-700">Lastname</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>

                    <!-- Birthdate -->
					<div>
						<div class="text-lg text-bluegray-700">Birthdate</div>
						<input
							type="date"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>
                    
                    <!-- Contact Number -->
					<div>
						<div class="text-lg text-bluegray-700">Contact Number</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>

                    <!-- Address 1 -->
					<div>
						<div class="text-lg text-bluegray-700">Address 1</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>

                    <!-- Address 2 -->
					<div>
						<div class="text-lg text-bluegray-700">Address 2</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>

                    <!-- City -->
					<div>
						<div class="text-lg text-bluegray-700">City</div>
						<input
							type="text"
							class="w-full border-2 border-bluegray-100 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-bluegray-700 focus:bg-white"
						/>
					</div>

				</div>
				<div class="mt-5">
					<button class="btn-primary py-2 px-4">Save Changes</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { UserIcon } from "vue-feather-icons";
	export default {
		components: {
			UserIcon,
		},
	};
</script>

<style>
</style>