import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/Home.vue';
import ResearchPage from '@/views/Research.vue';
import MLPage from '@/views/ResearchPage/MLPage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomePage
        },
        {
            path: '/research',
            name: 'Research',
            component: ResearchPage
        },
        {
            path: '/research/ML',
            name: 'ML',
            component: MLPage
        }
    ]
});