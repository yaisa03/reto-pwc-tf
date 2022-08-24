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
        { path: 'allProjects', component: () => import('../views/AllProjects.vue') },
				{
					path: 'createProject',
					component: () => import('../views/CreateProject.vue')},
				{
					path: 'createRequirements',
					component: import('../views/CreateRequirement.vue')
				},
				{
					path: 'projectRequirements',
					component: () => import('../views/ProjectRequirements.vue'),
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
					path: 'completeRequirement',
					component: () => import('../views/CompleteRequirement.vue'),
				},
			],
		},
	],
});

export default router;
