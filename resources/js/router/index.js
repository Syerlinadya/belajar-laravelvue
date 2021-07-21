import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter)  // untuk mengaktifkan komponen vue router

const Home = require('../pages/Home.vue').default;
const About = require('../pages/About.vue').default;
const NotFound = require('../pages/NotFound.vue').default;
import User from '../pages/User.vue';
import Profile from '../pages/Profile.vue';
import Register from '../pages/Register.vue';
import Edit from '../pages/Edit.vue';
import uploadFoto from '../pages/uploadFoto.vue';

const routes = [
    {
        name: 'Home',
        path: '/home', // template home yang akan dirender
        component: Home
    },
    {
        name: 'About',
        path:'/about', // render template about
        component: About
    },
    {
        name: 'User',
        path:'/user', //menampilkan daftar user berdasarkan namanya
        component: User,
    },
    {
        name: 'Register',
        path:'/user/register', 
        component: Register,
    },
    {
        name: 'Profile',
        path:'/user/:id', //menampilkan daftar user berdasarkan namanya
        component: Profile,
        props: true
    },
    {
        name: 'Upload',
        path:'/user/:id/photo', 
        component: uploadFoto,
        props: true
    },
    {
        name: 'Edit',
        path:'/user/:id/edit', 
        component: Edit,
        props: true
    },
    {
        // bila user memberikan parameter yang tidak ada
        path: '*',
        component: NotFound
    }
]

// insatance object dari view
const router = new VueRouter({
    // untuk menjalankan konfigurasi routing
    linkActiveClass: "active", // agar halaman lebih baik untuk mengetahui halaman yang aktif
    mode: 'history', //menghilangkan tanda # di link
    routes
})

export default router;