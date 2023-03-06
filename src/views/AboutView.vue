<template>
  <main class="about">
    <h1 class="about__title blue">
      How to use:
    </h1>

    <ul class="about__list">
      <li>Start by logging in to enjoy all the features</li>
      <li>Access your profile by clicking your name in the navigation header</li>
      <li>On your profile page you can:</li>
      <ul>
        <li>See all your posts</li>
        <li>Create a bew post, by clicking the New Post button, filling the content and saving</li>
      </ul>
      <li>On the Home page you can search for any user posts by entering theur email address and clicking the Search button</li>
    </ul>

    <div class="enjoy-text blue">
      Enjoy the app!
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
}

.about__title {
  margin-bottom: 30px;
}

.about__list {
  font-size: 24px;
  color: var(--color-text)
}


.enjoy-text {
  width: 100%;
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-top: 18px;
}
</style>
