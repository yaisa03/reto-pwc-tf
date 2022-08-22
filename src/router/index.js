import { createRouter, createWebHistory } from "vue-router";
import LoginView from '../views/Login.vue';

const router = createRouter({
  history:createWebHistory(),
  routes: [
    {path:'/', component:LoginView},
    {path:'/loginPMO', component:LoginView},
    {path:'/loginUser', component:LoginView},
    {path: '/createProyect', component:import('../views/CreateProyect.vue')},
    {path: '/createRequierements',
    component:import('../views/CreateRequirement.vue'),
    /* children:[
    {path :':chatId',component:import('../views/DashcontrolView.vue') }
   ] */},
   {path: '/pmo', component:() => import('../views/PMO.vue')}
  ]
})

export default router
