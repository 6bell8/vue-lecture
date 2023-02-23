<template>
  <li>
    <h3>{{ name }}</h3>
    <div class="team-members">{{ memberCount }} Members</div>
    <!--<props> id 가져옴, v-bind를 생략하고 :to로 축약해서 문자열과 id를 묶어줌 -->
    <!-- <router-link :to="'/teams/' + id">View Members</router-link> -->
    <!-- computed로 연산해서 동적바인딩으로 묶어주는 방법도 있음 '/teams/' + this.id -->
    <router-link :to="teamMembersLink">View Members</router-link>
  </li>
</template>

<script>
export default {
  // TeamsList components에서 id, props를 내려줌
  props: ['id', 'name', 'memberCount'],
  computed: {
    teamMembersLink() {
      // return '/teams/' + this.id;
      // 이름{name} 라우트
      // 가독성과 유지보수에 유리함, 프로퍼티 전달은 자식 노드에 path가 바뀌어도 name과 params로 관리하기 때문에 업데이트를 할 필요가 없다
      return {
        name: 'team-members',
        // main.js 에 들어가있는 path가 params 값에 들어가는 keys 역할을 함
        params: { teamId: this.id },
      };
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
}

li h3 {
  margin: 0.5rem 0;
  font-size: 1.25rem;
}

li .team-members {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: white;
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background-color: #11005c;
}

a:hover,
a:active {
  background-color: #220a8d;
}
</style>
