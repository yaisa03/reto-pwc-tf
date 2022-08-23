import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/Login.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: LoginView },
    { path: '/loginPMO', component: LoginView },
    { path: '/loginUser', component: LoginView },
    /* { path: '/createProyect', component: import('../views/CreateProyect.vue') }, */
    {
      path: '/createRequirements',
      component: import('../views/CreateRequirement.vue'),
    /* children:[
    {path :':chatId',component:import('../views/DashcontrolView.vue') }
   ] */},
    {
      path: '/pmo', component: () => import('../views/PMO.vue'),
      children: [
        { path: '', component:() =>import('../views/Dashboard.vue')},
        { path: 'createProject', component:() =>import('../views/CreateProject.vue'), 
        children: [
          { path: 'createRequirement', component:() =>import('../views/CreateRequirement.vue')}]},
        { path: 'manageUsers', component:() =>import('../views/ManageUsers.vue')},
        { path: 'proyectsStatus', component:() =>import('../views/ProyectsStatus.vue')}
      ]
    },
    {
      path: '/user', component: () => import('../views/PMO.vue'),
      children: [
        { path: '', component:() =>import('../views/Dashboard.vue')},
        { path: 'createProject', component:() =>import('../views/CreateProject.vue')}
      ]
    }
  ]
})

export default router
