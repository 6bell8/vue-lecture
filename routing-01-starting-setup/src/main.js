import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';

// router 패키지에서 옵션을 내려받은 후에 main 파일에서 createRouter, createWebHistory(useNavigate) 프로퍼티를 설정해줌
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/teams', component: TeamsList },
    // { path: '/teams/new', }, team 세그먼트에 다른 컴포넌트가 있다면, new가 먼저 와야함
    // teams/ 뒤에 뭐가 오든 똑같은 내용이 routing 된다
    // : 뒤로 시작하는 모든 걸 라우트 매개변수라고 한다.
    { path: '/teams/:teamId', component: TeamMembers },
    { path: '/users', component: UsersList },
  ],
  // link class css(active, a 태그)
  linkActiveClass: 'active',
});

const app = createApp(App);

// router 설정을 마치고 use를 통해서 router 상수값을 사용해준다.
app.use(router);
app.mount('#app');
