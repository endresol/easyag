import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Register from '@/components/Register';
import Login from '@/components/Login';
import Competitions from '@/components/Competitions';
import CreateCompetition from '@/components/CreateCompetition';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: HelloWorld,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/competitions',
      name: 'competitions',
      component: Competitions,
    },
    {
      path: '/competitions/create',
      name: 'create-competition',
      component: CreateCompetition,
    },
  ],
});
