<template>
  <!-- 버튼을 눌렀을 때 프로그램 자체에서 이동하는 방법 -->
  <button @click="confirmInput">Confirm</button>
  <ul>
    <user-item
      v-for="user in users"
      :key="user.id"
      :name="user.fullName"
      :role="user.role"
    ></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    // $는 this뒤에 $놓고, 라우터 메모리에 push 하는 방법이다.

    // 특수한 형태의 router 패키지 프로퍼티 접근법이다.
    confirmInput() {
      this.$router.push('/teams');
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>
