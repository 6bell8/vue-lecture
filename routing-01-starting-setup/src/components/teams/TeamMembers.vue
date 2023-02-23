<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in members"
        :key="member.id"
        :name="member.fullName"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/t2">Go to Team 2</router-link>
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  // app에서 가져온 데이터를 집어넣음
  inject: ['users', 'teams'],
  // main.js에서 가져온 teamId를 props로 내려서 직통으로 $route자리에 넣는 게 더 효율적임
  // props로 내렸을 때 장점은 라우팅으로 컴포넌트를 로드하는 경우에 사용가능
  props: ['teamId'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: '',
    };
  },
  // create에 있는 코드를 복제해서 watch에 넣어주는 대신에
  methods: {
    loadTeamMembers(teamId) {
      // params는 페이지 로드에 사용된 모든 $route 매개변수를 갖고있다 따라서, main.js에서 콜른뒤에 표시한 매개변수를 가져다가 사용하면된다
      // $route는 url이 바뀌면 업데이트 되는 프로퍼티이다
      // method에 인자 값을 route로 바꿔 주면서 created(this.$route)로 넣고 route로 축약하여 사용 할 수 있게되었다.
      // const teamId = route.params.teamId; // teams/t1

      // 라우팅 영역에서 컴포넌트 프로퍼티가 전달되지않기 때문에 눌렀을 때 아무것도 안나옴 따라서 main 컴포넌트에 props를 true로 전달 해주어야함
      const selectedTeam = this.teams.find((team) => team.id === teamId);
      const members = selectedTeam.members;
      const seclectedMembers = [];
      // for of (배열 순환문) 모든 member를 가져오는 키워드
      // member 내 유저 프로퍼티를 가져오는 문법
      for (const member of members) {
        const selectedUser = this.users.find((user) => user.id === member);
        seclectedMembers.push(selectedUser);
      }
      this.members = seclectedMembers;
      this.teamName = selectedTeam.name;
    },
  },
  // 생명주기 훅 컴포넌트 생성 시 모든 데이터가 사용 가능 상태,
  created() {
    this.loadTeamMembers(this.teamId);
  },
  // watch에 $route를 추가함으로서 $route 리렌더링을 감시할 수 있다.

  // watch에 route를 추가한 이유는 route는 url이 바뀔 때 마다 반응 하기 때문이다. 그리고 t1처럼 로드 된 컴포넌트를 파기하고 새로 구축하지않기때문 에 router-link를 사용하더라도 반응하지않는다.

  //따라서 $route를 watch로 지정 바뀔 때마다 인자값을 통해서 새로운 route로 바꾸어준다

  ///teams/t1 >  /teams/t2로 이동 시키기 위한 과정

  watch: {
    teamId(newId) {
      this.loadTeamMembers(newId);
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
