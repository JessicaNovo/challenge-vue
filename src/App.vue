<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import LogoutButton from './components/LogoutButton.vue';
import userStore from '@/stores/user'
import postsStore from '@/stores/posts'

const id = localStorage.getItem('UserId');
if (id) {
  userStore.getUser(id)
  postsStore.getUserPosts(id)
}
</script>

<template>
  <div>
    <header>
      <nav>
        <div class="nav-section">
          <img
            alt="Koerber logo"
            class="logo"
            src="@/assets/korber-logo.svg"
            width="60"
            height="60"
          >

          <RouterLink to="/">
            Home
          </RouterLink>
       
          <RouterLink to="/about">
            About
          </RouterLink>
        </div>
        <div class="nav-section">
          <RouterLink
            to="/myprofile"
            v-if="!!userStore.userState.isLoggedIn"
            class="my-profile-link"
          >
            {{ userStore.userState.name }}
            <div class="profile-image__wrapper">
              <img
                :alt="userStore.userState.username"
                class="profile-image"
                :src="userStore.userState.image"
                width="32"
                height="32"
              >
            </div>
          </RouterLink>
          <LogoutButton v-if="!!userStore.userState.isLoggedIn" />
        </div>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  min-height: calc(32px + 4rem);
  margin: 0 auto 2rem;
  background: var(--color-background);
}

.logo {
  margin-left: 0;
  max-width: 100%;
  max-height: 32px;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  min-height: calc(32px + 1rem);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
.nav-section {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px auto;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

.my-profile-link {
  color: #fff;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-flex;
  padding-left: 1rem;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
}

nav a:first-of-type {
  border: 0;
}

.profile-image__wrapper {
  border: 1px solid #fff;
  border-radius: 50%;
  background-color: #d6d6d6;
  width: 32px;
  height: 32px;
  margin-left: 1rem;
}
.profile-image {
  width: 100%;
  height: 100%;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .nav-section {
    margin: 0;
  }
}
</style>
