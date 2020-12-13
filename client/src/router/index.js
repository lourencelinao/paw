import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Main from '../views/Main.vue'
import Dashboard from '../views/Dashboard.vue'
import DogMain from '../views/Dog/Main.vue'
import DogCreate from '../views/Dog/Create.vue'
import DogEdit from '../views/Dog/Edit.vue'
import DogNav from '../views/Dog/Nav.vue'

// dog
import DogProfileMain from '../views/Dog/Profile/Main.vue'
import DogProfile from '../views/Dog/Profile/Profile.vue'

import DogMedicalMain from '../views/Dog/Medical/Main.vue'
import DogMedicalCreate from '../views/Dog/Medical/Create.vue'
import DogMedicalEdit from '../views/Dog/Medical/Edit.vue'
import DogMedicalVaccineCreate from '../views/Dog/Medical/VaccineCreate.vue'
import DogMedicalVaccineEdit from '../views/Dog/Medical/VaccineEdit.vue'

import DogIntakeOuttakeMain from '../views/Dog/IntakeOuttake/Main.vue'

import DogApplicationMain from '../views/Dog/DogApplication/Main.vue'

import ApplicationMain from '../views/Application/Main.vue'
import AdoptionApplicationShow from '../views/Application/AdoptionApplicationShow.vue'
import SurrenderApplicationShow from '../views/Application/SurrenderApplicationShow.vue'
import VolunteerApplicationShow from '../views/Application/VolunteerApplicationShow.vue'

// person
import PeopleMain from '../views/People/Main.vue'
import ApplicantCreate from '../views/People/Applicant/Create.vue'

import UserCreate from '../views/People/User/Create.vue'

import Profile from '../views/People/Profile.vue'

import Shelter from '../views/Shelter.vue'
import ClinicCreate from '../views/Clinic/ClinicCreate.vue'

//client side

import LandingPage from '../views/Client/LandingPage.vue'
import ClientMain from '../views/Client/Main.vue'
import ClientDogProfile from '../views/Client/ClientDogProfile.vue'

import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Home,
		meta: { loginAuthenticated: true },
	},
	{
		path: '/dashboard',
		component: Main,
		meta: { requiresAuth: true },
		children: [
			{
				path: '',
				component: Dashboard,
			},
		],
	},
	{
		path: '/dogs',
		component: Main,
		meta: { requiresAuth: true },
		children: [
			{
				path: '',
				component: DogMain,
			},
			{
				path: 'create',
				component: DogCreate,
			},
			{
				path: ':id',
				component: DogNav,
				children: [
					{
						path: 'profile',
						name: 'DogProfile',
						component: DogProfile,
					},
					{
						path: 'edit',
						name: 'DogEdit',
						component: DogEdit,
					},
				],
			},
			{
				path: ':id',
				component: DogNav,
				children: [
					{
						path: 'medical',
						name: 'DogMedicalMain',
						component: DogMedicalMain,
					},
					{
						path: 'medical/create',
						name: 'DogMedicalCreate',
						component: DogMedicalCreate,
					},
					{
						path: 'medical/:medical_id/edit',
						name: 'DogMedicalEdit',
						component: DogMedicalEdit,
					},
					{
						path: 'vaccine/create',
						name: 'VaccineCreate',
						component: DogMedicalVaccineCreate,
					},
					{
						path: 'vaccine/:vaccine_id/edit',
						name: 'VaccineEdit',
						component: DogMedicalVaccineEdit,
					},
				],
			},
			{
				path: ':id',
				component: DogNav,
				children: [
					{
						path: 'intake-outtake',
						name: 'DogIntakeOuttakeMain',
						component: DogIntakeOuttakeMain,
					},
				],
			},
			{
				path: ':id',
				component: DogNav,
				children: [
					{
						path: 'applications',
						name: 'DogApplicationMain',
						component: DogApplicationMain,
					},
					
				],
			},
		],
	},
	{
		path: '/applications',
		component: Main,
		meta: { requiresAuth: true },
		children: [
			{
				path: '',
				component: ApplicationMain,
			},
			{
				path: '/volunteer/:id',
				name: 'VolunteerApplicationShow',
				component: VolunteerApplicationShow
			},
			{
				path: '/adoption/:id',
				name: 'AdoptionApplicationShow',
				component: AdoptionApplicationShow
			},
			{
				path: '/surrender/:id',
				name: 'SurrenderApplicationShow',
				component: SurrenderApplicationShow
			},
		],
	},
	{
		path: '/people',
		component: Main,
		meta: { requiresAuth: true },
		children: [
			{
				path: '',
				component: PeopleMain,
			},
			{
				path: 'user/create',
				component: UserCreate,
			},
			{
				path: 'create',
				component: ApplicantCreate,
			},
		],
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/profile',
		component: Main,
		meta: { requiresAuth: true },
		children: [
			{
				path: '',
				component: Profile,
			},
		],
	},
	{
		path: '/shelter',
		component: Main,
		meta: { requiresAuth: true },
		children: [
			{
				path: '',
				component: Shelter,
			},
		],
	},
	{
		path: '/clinic/create',
		component: Main,
		meta: { requiresAuth: true },
		children: [
			{
				path: '',
				component: ClinicCreate
			}
		]
	},
	{
		path: '/client',
		component: ClientMain,
		children: [
			{
				path: '',
				component: LandingPage
			},
			{
				path: 'dog/:id/profile',
				name: 'ClientDogProfile',
				component: ClientDogProfile
			}
		]
	},

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
	const loginAuthenticated = to.matched.some(
		(record) => record.meta.loginAuthenticated
	)
	const userAuthenticated = firebase.auth().currentUser

	if (requiresAuth && !userAuthenticated) {
		// will redirect to login if user tries to access protected routes
		next('/')
	} else if (loginAuthenticated && userAuthenticated) {
		// will redirect to dashboard when an authenticated user tries to access login page
		next('/dashboard')
	} else {
		//will proceed to the protected route since the user is authenticated
		next()
	}
})

export default router
