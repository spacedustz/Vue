import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from "@/components/teams/TeamsList";
import UsersList from "@/components/users/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";

const router = createRouter({

    routes: [
        // 해당 URL로 접속하면 옆의 컴포넌트를 로드하라는 의미
        { path: '/teams', component: TeamsList },
        { path: '/users', component: UsersList },
        { path: '/teams/:teamId', component: TeamMembers }
    ],
    history: createWebHistory(),
    linkActiveClass: 'router-link-active'
});

const app = createApp(App)

app.use(router);

app.mount('#app');