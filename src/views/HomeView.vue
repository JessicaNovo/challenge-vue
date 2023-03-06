<script setup lang="ts">
import Login from '../components/LoginScreen.vue'
import TheWelcome from '../components/TheWelcome.vue'
import userStore from '@/stores/user'
</script>

<template>
  <main v-if="!!userStore.userState.isLoggedIn">
    <TheWelcome />
  </main>
  <main v-else>
    <Login />
  </main>
</template>
