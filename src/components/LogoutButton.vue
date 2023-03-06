<script lang="ts">
import { defineComponent } from 'vue'
import userStore from '@/stores/user'

export default defineComponent({
  setup() {
    const { logout } = userStore
    
    const onSubmit = () => {
      logout();
    }

    return { onSubmit }
  }
})
</script>

<template>
  <form @submit.prevent="onSubmit">
    <button
      class="btn btn-success btn-block my-2"
      type="submit"
    >
      Logout
    </button>
  </form>
</template>
