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
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  // app에서 가져온 데이터를 집어넣음
  inject: ['users', 'teams'],
  components: {
    UserItem,
  },
  data() {
    return {
      teamName: '',
      members: '',
    };
  },
  // 생명주기 훅 컴포넌트 생성 시 모든 데이터가 사용 가능 상태,
  created() {
    // params는 페이지 로드에 사용된 모든 $route 매개변수를 갖고있다 따라서, main.js에서 콜른뒤에 표시한 매개변수를 가져다가 사용하면된다
    const teamId = this.$route.params.teamId; // teams/t1
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
