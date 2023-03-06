<script lang="ts">
import { reactive } from 'vue'
import userStore from '@/stores/user'

export default {
  setup() {
    const { userState, login } = userStore

    const form = reactive({
      username: '',
      password: '',
    })
    
    const onSubmit = () => {
      login(form.username, form.password)
      form.username = ''
      form.password = ''
    }

    return { form, onSubmit, userState }
  }
}
</script>

<template>
  <div class="form__wrapper">
    <h1 class="form__title">
      Login
    </h1>
    <form
      @submit.prevent="onSubmit"
      class="form"
    >
      <div class="form__item">
        <label>Username</label>
        <input
          v-model="form.username"
          class="form-control"
          placeholder="Username"
          required
        >
      </div>
      <div class="form__item">
        <label>Password</label>
        <input
          v-model="form.password"
          class="form-control"
          type="password"
          placeholder="Password"
          required
        >
      </div>
      <div class="error-message">
        {{ userState.error }}
      </div>
      <button
        class="form__button"
        type="submit"
      >
        Login
      </button>
    </form>
  </div>
</template>

<style scoped>
.form__wrapper {
  max-width: 300px;
  margin: 0 auto;
}

.form__title {
  font-weight: 400;
  font-size: 48px;
  line-height: 56px;
  color: var(--color-heading);
  margin-bottom: 50px;
}

.form__item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 22px;
}
.form__item label {
  width: 100%;
  margin-bottom: 18px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
  color: var(--color-text);
}

.form__item input {
  width: 100%;
  min-height: 40px;
  padding: .5rem;
  font-size: 16px;
  background: #fff;
  border: 1px solid #000000;
  border-radius: 20px;
}

.error-message {
  color: red;
  margin-bottom: 1rem;
  font-size: 16px;
}

.form__button {
  width: fit-content;
  padding: .5rem 1rem;
  display: block;
  margin: 0 auto;
  background: #297FFF;
  border: 1px solid #000000;
  border-radius: 20px;
  font-weight: 400;
  font-size: 24px;
  color: #fff;
}

.form__button:hover {
  cursor: pointer;
}
</style>
