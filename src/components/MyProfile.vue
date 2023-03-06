<script lang="ts">
import { reactive } from 'vue'
import PostsList from './PostsList.vue';
import postsStore from '@/stores/posts'

interface Post {
  title: string;
  body: string;
  userId: number;
  id: number;
}

type PostsListType = Array<Post>;

const profileState = reactive({
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
   const id: string | null = localStorage.getItem('UserId') || null
   const newPostUserId: string | null = localStorage.getItem('NewPostAuthor') || null
   const newPostTitle: string | null = newPostUserId === id ? localStorage.getItem('NewPostTitle') : ''
   const newPostBody: string | null = newPostUserId === id ? localStorage.getItem('NewPostBody') : ''
   if (id) {
      postsStore.getUserPosts(id).then(()=> {
        profileState.posts = postsStore.postsState.posts
      })
    }
   return { profileState, newPostTitle, newPostBody }
 }
}
</script>

<template>
  <RouterLink to="/new-post" class="new-post-link">
    New Post
  </RouterLink>
  <PostsList
    title="My Posts"
    :posts="profileState.posts"
    :newPostTitle="newPostTitle"
    :newPostBody="newPostBody"
  />
</template>

<style scoped>
.new-post-link {
  width: fit-content;
  padding: .5rem 1rem;
  display: block;
  margin-left: auto;
  background: #297FFF;
  border: 1px solid #000000;
  border-radius: 20px;
  font-weight: 400;
  font-size: 18px;
  color: #fff;
}

.new-post-link:hover {
  cursor: pointer;
}
</style>
