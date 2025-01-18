import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/Home.vue';
import ResearchPage from '@/views/Research.vue';
import MLPage from '@/views/ResearchPage/MLPage.vue';
import StatsPage from '@/views/ResearchPage/StatsPage.vue';
import NetworkPage from '@/views/ResearchPage/NetworkPage.vue';
import QuantumPage from '@/views/ResearchPage/QuantumPage.vue';
import ANNPage from '@/views/ResearchPage/ANNPage.vue';
import TeamPage from '@/views/TeamPage.vue';
import PublicationView from '@/views/PublicationView.vue';
import PatentsView from '@/views/PatentsView.vue';

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
        },
        {
            path: '/research/Stats',
            name: 'Stats',
            component: StatsPage
        },
        {
            path: '/research/Network',
            name: 'Network',
            component: NetworkPage
        },
        {
            path: '/research/Quantum',
            name: 'Quantum',
            component: QuantumPage
        },
        {
            path: '/research/ANN',
            name: 'ANN',
            component: ANNPage
        },
        {
            path: '/team',
            name: 'Team',
            component: TeamPage
        },
        {
            path: '/publication',
            name: 'Publication',
            component: PublicationView
        },
        {
            path: '/patents',
            name: 'Patents',
            component: PatentsView
        }
    ]
});