<template>
	<div>
        <div class="flex justify-between items-center bg-white rounded shadow-sm p-3">
		<div class="flex space-x-5 text-xl text-bluegray-700">
			<router-link :to="{ name: 'DogProfile', params: { id: $route.params.id } }" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes(
							'profile'
						),
					}">Profile</router-link>
			<router-link :to="{ name: 'DogMedicalMain', params: { id: $route.params.id } }" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes(
							'medical'
						),
					}">Medical Records</router-link>
			<router-link :to="{ name: 'DogIntakeOuttakeMain', params: { id: $route.params.id } }" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes(
							'intake-outtake'
						),
					}">Intake/Outtake</router-link>
			<router-link :to="{ name: 'DogApplicationMain', params: { id: $route.params.id } }" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes('/applications'),
					}">Applications</router-link>
			<router-link :to="{ name: 'DogImages', params: { id: $route.params.id } }" class="text-bluegray-300" :class="{
						'text-bluegray-700 text-white': $router.currentRoute.path.includes('/images'),
					}">Images</router-link>
		</div>
		<!-- <hr class="border-bluegray-200"> -->
		<div v-if="getPathName('DogProfile')">
			<router-link :to="{ name: 'DogEdit', params: { id: $route.params.id } }" class="btn-primary px-4 py-3">
				Edit
			</router-link>
		</div>
	</div>

    <router-view></router-view>
    </div>
</template>

<script>
	export default {
		methods: {
			getPathName(name) {
				return this.$route.name === name
			}
		}
	};
</script>

<style>
</style>