<script setup lang="ts">
import Login from '../components/LoginScreen.vue'
import MyProfile from '../components/MyProfile.vue'
import userStore from '@/stores/user'
</script>

<template>
  <main v-if="!!userStore.userState.isLoggedIn">
    <MyProfile />
  </main>
  <main v-else>
    <Login />
  </main>
</template>
