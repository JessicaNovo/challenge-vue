<script setup lang="ts">

interface Post {
  title: string;
  body: string;
  id: number;
  userId: number;
}

interface Props {
  title: string
  posts: Array<Post>
  newPostTitle?: string | null
  newPostBody?: string | null
}

const props = withDefaults(defineProps<Props>(), {
  posts: () => [],
  newPostTitle: () => '',
  newPostBody: () => ''
})

</script>

<template>
  <div
    v-if="props.posts.length > 0"
    class="posts__wrapper"
  >
    <h1 class="posts__title">
      {{ title }}
    </h1>
    <ul class="posts-list__wrapper">
      <li
        v-if="!!props.newPostTitle && props.newPostTitle.length > 0"
        class="post-item"
      >
        <h2 class="post-item__title">
          {{ props.newPostTitle }}
        </h2>
        <p class="post-item__body">
          {{ props.newPostBody }}
        </p>
      </li>
      <li
        v-for="(post, index) in props.posts"
        :key="index"
        class="post-item"
      >
        <h2 class="post-item__title">
          {{ post.title }}
        </h2>
        <p class="post-item__body">
          {{ post.body }}
        </p>
      </li>
    </ul>
  </div>
  <div v-else>
    There are currently no posts here
  </div>
</template>

<style scoped>
.posts__title {
  margin-bottom: 36px;
  font-weight: 400;
  font-size: 36px;
  line-height: 42px;
  color: var(--color-heading);
}
.posts-list__wrapper {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 45px;
}

.post-item {
  min-width: 300px;
  min-height: 300px;
  padding: 20px;
  background: var(--color-background-mute);
  box-shadow: 3px 3px 6px 4px var(--color-border);
  border-radius: 20px;
}
.post-item__title {
  font-weight: 400;
  font-size: 32px;
  line-height: 37px;
  color: var(--color-heading);
  margin-bottom: 18px;
}

.post-item__body {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: var(--color-text);
}

@media (min-width: 768px) {
  .posts-list__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .posts-list__wrapper {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>

