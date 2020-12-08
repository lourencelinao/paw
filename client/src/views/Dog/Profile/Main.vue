<template>
	<div>
		<div>
			<div class="flex justify-between items-center bg-white rounded shadow-sm p-3">
				<div class="flex space-x-5 text-xl text-bluegray-700">
					<router-link to="" class=""
						>Profile</router-link
					>
					<router-link to="" class="text-bluegray-300">Medical Records</router-link>
					<router-link to="" class="text-bluegray-300">Intake/Outtake</router-link>
					<router-link to="" class="text-bluegray-300">Applications</router-link>
					<router-link to="" class="text-bluegray-300">Images</router-link>
                    
				</div>
				<!-- <hr class="border-bluegray-200"> -->
				<div>
                    <router-link to="profile/edit" class="btn-primary px-4 py-3">
                        Edit
                    </router-link>
                </div>
			</div>
		</div>
		<!-- <hr class="border-bluegray-200" /> -->
		<router-view></router-view>
	</div>
</template>

<script>
	export default {};
</script>

<style>
</style>