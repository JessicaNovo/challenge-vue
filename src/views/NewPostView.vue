<script lang="ts">
import { reactive } from 'vue'

export default {
  setup() {

    const form = reactive({
      title: '',
      body: '',
    })

    const onSubmit = () => {
      const id = localStorage.getItem('UserId');
      if (id) {
        localStorage.setItem('NewPostAuthor', id)
        localStorage.setItem('NewPostTitle', form.title)
        localStorage.setItem('NewPostBody', form.body)
      }
      
    }

    return { form, onSubmit }
  }
}
</script>

<template>
  <main class="form__wrapper">
    <h1 class="form__title">
      New Post
    </h1>
    <form
      @submit.prevent="onSubmit"
      class="form"
    >
      <div class="form__item">
        <label>Title</label>
        <input
          v-model="form.title"
          class="form-control"
          placeholder="Title"
          required
        >
      </div>
      <div class="form__item">
        <label>Description</label>
        <textarea
          v-model="form.body"
          class="form-control"
          placeholder="Description"
          rows="10"
          required
        />
      </div>
      <button
        class="form__button"
        type="submit"
      >
        Save
      </button>
    </form>
  </main>
</template>

<style scoped>
.form__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
}

.form {
  width: 100%;
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
  min-width: 100%;
  width: fit-content;
  min-height: 40px;
  padding: .5rem;
  font-size: 16px;
  background: #fff;
  border: 1px solid #000000;
  border-radius: 20px;
}

.form__item textarea {
  min-width: 100%;
  width: fit-content;
  min-height: 40px;
  padding: .5rem;
  font-size: 16px;
  background: #fff;
  border: 1px solid #000000;
  border-radius: 20px;
}

.form__button {
  width: 100%;
  padding: .5rem 1rem;
  display: block;
  margin: 0 auto;
  background: #297FFF;
  border: 1px solid #000000;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
}

.form__button:hover {
  cursor: pointer;
}
</style>
