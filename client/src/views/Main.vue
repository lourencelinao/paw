<template>
	<div class="h-screen flex font-graphik">
		<!-- side navbar -->
		<nav class="h-full w-2/12 max-w-lg bg-bluegray-700">
			<!-- app name -->
			<div
				class="text-2xl font-medium bg-bluegray-800 h-16 flex justify-center items-center text-bluegray-100 tracking-widest"
			>
				PAW
			</div>
			<!-- app name end -->
			<!-- nav items -->
			<ul
				class="text-xl px-2 text-bluegray-100 space-y-3 mt-5 text-start tracking-wide"
			>
				<li
					class="p-3 rounded-full md:rounded-md hover:bg-bluegray-800"
					:class="{
						'bg-bluegray-800 text-white': $router.currentRoute.path.includes(
							'dashboard'
						),
					}"
				>
					<router-link
						to="/dashboard"
						class="block flex items-center space-x-2 sm:justify-center md:justify-center lg:justify-start"
					>
						<div>
							<img
								src="../icons/dashboard.svg"
								alt="dashboard_icon"
								class="sm:w-5 sm:h-5 md:h-8 md:w-8"
							/>
						</div>
						<div class="hidden sm:hidden md:hidden lg:inline">Dashboard</div>
					</router-link>
				</li>
				<li
					class="p-3 rounded-full md:rounded-md hover:bg-bluegray-800"
					:class="{
						'bg-bluegray-800 text-white': $router.currentRoute.path.includes(
							'dogs'
						),
					}"
				>
					<router-link
						to="/dogs"
						class="block flex items-center space-x-2 sm:justify-center md:justify-center lg:justify-start"
					>
						<div>
							<img
								src="../icons/dog.svg"
								alt="dog_icon"
								class="sm:w-5 sm:h-5 md:h-8 md:w-8"
							/>
						</div>
						<div class="hidden sm:hidden md:hidden lg:inline">Dogs</div>
					</router-link>
				</li>
				<li
					class="p-3 rounded-full md:rounded-md hover:bg-bluegray-800"
					:class="{
						'bg-bluegray-800 text-white': $router.currentRoute.path.includes(
							'applications'
						),
					}"
				>
					<router-link
						to="/applications"
						class="block flex items-center space-x-2 sm:justify-center md:justify-center lg:justify-start"
					>
						<div>
							<img
								src="../icons/docs.svg"
								alt="application_icon"
								class="sm:w-5 sm:h-5 md:h-8 md:w-8"
							/>
						</div>
						<div class="hidden sm:hidden md:hidden lg:inline">Applications</div>
					</router-link>
				</li>
				<li
					class="p-3 rounded-full md:rounded-md hover:bg-bluegray-800"
					:class="{
						'bg-bluegray-800 text-white': $router.currentRoute.path.includes(
							'people'
						),
					}"
				>
					<router-link
						to="/people"
						class="block flex items-center space-x-2 sm:justify-center md:justify-center lg:justify-start"
					>
						<div>
							<users-icon size="1.5x" class="custom-class"></users-icon>
						</div>
						<div class="hidden sm:hidden md:hidden lg:inline">People</div>
					</router-link>
				</li>

				<!-- admin only -->
				<!-- <div class="border-t border-gray-050">
					<li
					class="p-3 rounded-full md:rounded-md hover:bg-bluegray-800 mt-3"
					:class="{
						'bg-bluegray-800 text-white': $router.currentRoute.path.includes('team'),
					}"
				>
					<router-link
						to="/people"
						class="block flex items-center space-x-2 sm:justify-center md:justify-center lg:justify-start"
					>
						<div>
							<users-icon size="1.5x" class="custom-class"></users-icon>
						</div>
						<div class="hidden sm:hidden md:hidden lg:inline">Team</div>
					</router-link>
				</li>
				</div> -->
			</ul>
			<!-- nav items end -->
		</nav>
		<!-- side navbar end -->
		<!-- right content -->
		<div class="h-full w-full overflow-y-scroll">
			<!-- top nav -->
			<nav
				class="bg-white shadow-sm h-16 flex justify-between items-center px-10"
			>
				<div class="text-lg text-bluegray-700">{{ routeName }}</div>
				<div class="relative inline-block text-left">
					<div>
						<button
							type="button"
							class="inline-flex justify-center items-center space-x-2 w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-bluegray-700 focus:outline-none"
							id="options-menu"
							aria-haspopup="true"
							aria-expanded="true"
							v-on:click="dropdownToggle"
							v-on-clickaway="away"
						>
							<!-- Profile pic -->
							<img
								src="https://i.pravatar.cc/300"
								alt="profile_picture"
								class="h-10 w-10 rounded-full shadow"
							/>
							<div class="flex hidden sm:flex">
								<!-- Name -->
							<div class="font-medium">Lourence Linao</div>
							<!-- Heroicon name: chevron-down -->
							<svg
								class="-mr-1 ml-2 h-5 w-5"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clip-rule="evenodd"
								/>
							</svg>
							</div>
						</button>
					</div>

					<div
						class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="options-menu"
						v-if="dropdownState"
					>
						<div class="py-1">
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex space-x-2 items-center"
								role="menuitem"
							>
								<settings-icon size="1.5x" class="custom-class"></settings-icon>
								<div>Shelter settings</div>
							</a>
						</div>
						<div class="py-1">
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex space-x-2 items-center"
								role="menuitem"
							>
								<user-icon size="1.5x" class="custom-class"></user-icon>
								<div>Profile</div>
							</a>
							<a
								href="#"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex space-x-2 items-center"
								role="menuitem"
								><log-out-icon size="1.5x" class="custom-class"></log-out-icon>
								<div>Sign out</div></a
							>
						</div>
					</div>
				</div>
			</nav>
			<!-- top nav end -->

			<!-- main content -->
			<div class="px-10 mb-16">
				<router-view class="mt-10"></router-view>
			</div>
			<!-- main content end -->
		</div>
		<!-- right content end -->
	</div>
</template>

<script>
	import { mixin as clickaway } from "vue-clickaway2";
	import { UsersIcon, LogOutIcon, SettingsIcon, UserIcon } from "vue-feather-icons";
	export default {
		mixins: [clickaway],
		components: {
			UsersIcon,
			LogOutIcon,
			SettingsIcon,
			UserIcon,
		},
		data() {
			return {
				dropdownState: false,
				routeName: "",
			};
		},
		methods: {
			away: function () {
				if (this.dropdownState) {
					this.dropdownState = !this.dropdownState;
				}
			},
			dropdownToggle() {
				this.dropdownState = !this.dropdownState;
			},
			// active() {
			// 	return 'bg-bluegray'
			// }
		},
		watch: {
			$route(to, from) {
				this.routeName = this.$router.currentRoute.path.split("/")[1];
				this.routeName =
					this.routeName[0].toUpperCase() + this.routeName.slice(1);
			},
		},
		created() {
			this.routeName = this.$router.currentRoute.path.split("/")[1];
			this.routeName = this.routeName[0].toUpperCase() + this.routeName.slice(1);
		},
	};
</script>

<style>
</style>