import VueRouter from 'vue-router';
import One from './components/tapbar/One.vue';
import Music from './components/tapbar/music.vue';

var router = new VueRouter({
    routes:[
        {path: '/', redirect:'/Music'},
        {path: '/One', component: One },
        {path: '/music', component: Music }
    ],
    linkActiveClass: "active"
})

export default router