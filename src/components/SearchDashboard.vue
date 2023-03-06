<script lang="ts">
import PostsList from './PostsList.vue';
import postsStore from '@/stores/posts'
import { reactive } from 'vue'

interface Post {
  title: string;
  body: string;
  userId: number;
  id: number;
}

type PostsListType = Array<Post>;

const searchState = reactive({
  id: '',
  email: '',
  username: '',
  name: '',
  posts: <PostsListType>[]
})

export default {
  components: {
    PostsList
  },
  setup() {
    const { searchedUserState, getUser, getUserPosts } = postsStore
    const form = reactive({
      email: localStorage.getItem('LastSearchedUserEmail') || '',
    })

    const onSubmit = () => {
      getUser(form.email).then(() => {
        const id: string = localStorage.getItem('LastSearchedUserId') || ''
        getUserPosts(id)
        .then(() => {
          searchState.id = id;
          searchState.name = searchedUserState.name
          searchState.username = searchedUserState.username
          searchState.email = searchedUserState.email
          searchState.posts = postsStore.postsState.posts;
        })
        form.email = localStorage.getItem('LastSearchedUserEmail') || ''
      })}

    return { form, onSubmit, PostsList, searchState }
  }
}
</script>

<template>
  <div>
    <form @submit.prevent="onSubmit" class="form__wrapper">
      <div class="form__item">
        <label>Insert Email</label>
        <input
          v-model="form.email"
          placeholder="Email"
          required
        >
      </div>
      <button
        class="form__button"
        type="submit"
      >
        Search
      </button>
    </form>
    <div>
      <PostsList
        :posts="searchState.posts"
        :title="searchState.name + ' Posts'"
      />
    </div>
  </div>
</template>


<style scoped>
.form__wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: max-content;
  margin-bottom: 22px;
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

@media (min-width: 768px) {

  .form__wrapper {
    max-width: 500px;
    flex-wrap: nowrap;
    align-items: flex-end;
    margin-bottom: 22px;
  }

  .form__item {
    margin-bottom: 0;
  }

  .form__button {
    max-width: fit-content;
    margin-left: 18px;
  }
}
</style>
