<script lang="ts">
import userStore from '@/stores/user'

export default {
  setup() {
    const { logout } = userStore
    
    const onSubmit = () => {
      logout();
    }

    return { onSubmit }
  }
}
</script>

<template>
  <form
    @submit.prevent="onSubmit"
    class="button__wrapper"
  >
    <button
      class="button"
      type="submit"
    >
      Logout
    </button>
  </form>
</template>

<style scoped>
.button__wrapper {
  margin-left: 1rem;
}

.button {
  width: fit-content;
  font-size: 16px;
  background-color: transparent;
  color: var(--color-text);
  border: 0;
}

.button:hover {
  cursor: pointer;
}
</style>

