<template>
	<div>
        <div class="flex justify-between items-center bg-white rounded shadow-sm p-3">
		<div class="flex space-x-5 text-xl text-bluegray-700">
			<router-link to="/dogs/profile" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes(
							'profile'
						),
					}">Profile</router-link>
			<router-link to="/dogs/medical" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes(
							'medical'
						),
					}">Medical Records</router-link>
			<router-link to="/dogs/intake-outtake" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes(
							'intake-outtake'
						),
					}">Intake/Outtake</router-link>
			<router-link to="/dogs/applications" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path === '/dogs/applications',
					}">Applications</router-link>
			<router-link to="" class="text-bluegray-300">Images</router-link>
		</div>
		<!-- <hr class="border-bluegray-200"> -->
		<div>
			<router-link to="profile/edit" class="btn-primary px-4 py-3">
				Edit
			</router-link>
		</div>
	</div>

    <router-view></router-view>
    </div>
</template>

<script>
	export default {};
</script>

<style>
</style>