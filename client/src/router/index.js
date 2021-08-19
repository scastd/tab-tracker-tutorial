import Vue from 'vue';
import Router from 'vue-router';

import AddSong from '@/components/AddSong';
import HelloWorld from '@/components/HelloWorld';
import HomePage from '@/components/HomePage';
import Login from '@/components/Login';
import Profile from '@/components/Profile';
import Register from '@/components/Register';
import Songs from '@/components/Songs';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'root', component: HelloWorld },
    { path: '/register', name: 'register', component: Register },
    { path: '/login', name: 'login', component: Login },
    { path: '/home', name: 'home', component: HomePage },
    { path: '/profile', name: 'profile', component: Profile },
    { path: '/songs', name: 'songs', component: Songs },
    { path: '/songs/add', name: 'add-song', component: AddSong }
  ]
});
