<script setup lang="ts">
import Login from '../components/LoginScreen.vue'
import SearchDashboard from '../components/SearchDashboard.vue'
import userStore from '@/stores/user'
</script>

<template>
  <main v-if="!!userStore.userState.isLoggedIn">
    <SearchDashboard />
  </main>
  <main v-else>
    <Login />
  </main>
</template>
