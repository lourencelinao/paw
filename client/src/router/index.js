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
import DogMedicalVaccineCreate from '../views/Dog/Medical/VaccineCreate.vue'

import DogIntakeOuttakeMain from '../views/Dog/IntakeOuttake/Main.vue'

import DogApplicationMain from '../views/Dog/DogApplication/Main.vue'

import ApplicationMain from '../views/Application/Main.vue'

// person
import PeopleMain from '../views/People/Main.vue'
import ApplicantCreate from '../views/People/Applicant/Create.vue'

import UserCreate from '../views/People/User/Create.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/dashboard',
		component: Main,
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
				path: 'profile',
				component: DogNav,
				children: [
					{
						path: '',
						component: DogProfile
					},
					{
						path: 'edit',
						component: DogEdit,
					},
				]
			},
			{
				path: 'medical',
				component: DogNav,
				children: [
					{
						path: '',
						component: DogMedicalMain
					},
					{
						path: 'create',
						component: DogMedicalCreate
					},
					{
						path: 'vaccine/create',
						component: DogMedicalVaccineCreate
					},
					
				]
			},
			{
				path: 'intake-outtake',
				component: DogNav,
				children: [
					{
						path: '',
						component: DogIntakeOuttakeMain
					}
				]
			},
			{
				path: 'applications',
				component: DogNav,
				children: [
					{
						path: '',
						component: DogApplicationMain
					}
				]
				
			}
		],
	},
	{
		path: '/applications',
		component: Main,
		children: [
			{
				path: '',
				component: ApplicationMain,
			},
		],
	},
	{
		path: '/people',
		component: Main,
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
				component: ApplicantCreate
			}
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
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
