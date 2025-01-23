<template>
  <header>
    <NuxtLink to="/"
      ><img src="@/assets/duck-logo.svg" alt=""
    /></NuxtLink>
    <nav>
      <NuxtLink to="/">Main</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/articles">Articles</NuxtLink>
    </nav>
  </header>
</template>

<script></script>

<style scoped>
header {
  width: 100%;
  height: 50px;
  background-color: black;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  position: sticky;
  border-radius: 0 0 15px 15px;
  top: 0%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 100;
  img {
    width: 40px;
  }

  > nav {
    display: flex;
    gap: 20px;
    > a {
      color: white;
      text-decoration: none;
    }
  }
}
</style>
