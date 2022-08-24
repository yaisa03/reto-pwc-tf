import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '../views/Login.vue';

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: LoginView },
		{ path: '/loginPMO', component: LoginView },
		{ path: '/loginUser', component: LoginView },
		{
			path: '/pmo',
			component: () => import('../views/PMO.vue'),
			children: [
				{ path: '', component: () => import('../views/Dashboard.vue') },
				{
					path: 'createProject',
					component: () => import('../views/CreateProject.vue')},
				{
					path: 'createRequirements',
					component: import('../views/CreateRequirement.vue')
				},
				{
					path: 'requirementList',
					component: () => import('../views/RequirementsList.vue'),
				},
				{
					path: 'manageUsers',
					component: () => import('../views/ManageUsers.vue'),
				},
				{ path: 'status', component: () => import('../views/Status.vue') },
			],
		},
		{
			path: '/user',
			component: () => import('../views/User.vue'),
			children: [
				{ path: '', component: () => import('../views/DashboardUser.vue') },
				{
					path: 'compleateRequirement',
					component: () => import('../views/CompleateRequirement.vue'),
				},
			],
		},
	],
});

export default router;
