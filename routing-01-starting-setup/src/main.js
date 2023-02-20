import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

// router 패키지에서 옵션을 내려받은 후에 main 파일에서 createRouter, createWebHistory(useNavigate) 프로퍼티를 설정해줌
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    { path: '/users', component: UsersList },
  ],
});

const app = createApp(App);

// router 설정을 마치고 use를 통해서 router 상수값을 사용해준다.
app.use(router);
app.mount('#app');
