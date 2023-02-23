import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

// router 패키지에서 옵션을 내려받은 후에 main 파일에서 createRouter, createWebHistory(useNavigate) 프로퍼티를 설정해줌
const router = createRouter({
  history: createWebHistory(),
  routes: [
    // homepage에서 다른 페이지화면이 그대로 이동되어질 때 사용
    { path: '/', redirect: '/teams' }, //  or  alias( 프로퍼티에 대안라우트 개념으로) 사용

    // 중첩 라우트
    {
      name: 'team',
      path: '/teams',
      component: TeamsList,
      // children은 전체 경로를 중복해서 사용할 필요는 없다
      // children routes 는 routes에 직접 등록되지않아서 화면에 나타지않는다.
      // 화면구조는 동일 자식 구조와 url만 바뀌는 거의 vue 정체성
      children: [
        // : 뒤로 시작하는 모든 걸 라우트 매개변수라고 한다.
        // 매개변수로서 props는 $route 기능 뿐만아니라 teamId 기능까지 전달 한다.
        {
          name: 'team-members',
          path: ':teamId',
          component: TeamMembers,
          props: true,
        },
      ],
    },

    // { path: '/teams/new', }, team 세그먼트(:)에 다른 컴포넌트가 있다면, new가 먼저 와야함
    // teams/ 뒤에 뭐가 오든 똑같은 내용이 routing 된다

    { path: '/users', component: UsersList },

    // 다른 라우트를 안덮어 쓰기 위해서 마지막에 작성해야됨
    { path: '/:catchAll(.*)', component: NotFound }, // 맨 마지막에 작성되어야한다.
  ],
  // link class css(active, a 태그)
  linkActiveClass: 'active',
});

const app = createApp(App);

// router 설정을 마치고 use를 통해서 router   상수값을 사용해준다.
app.use(router);
app.mount('#app');
