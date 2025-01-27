<template>
  <header>
    <div class="header-left">
      <NuxtLink to="/">
        <img src="@/assets/duck-logo.svg" alt="Logo" />
      </NuxtLink>
      <nav class="main-nav">
        <NuxtLink to="/">Main</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/articles">Articles</NuxtLink>
      </nav>
    </div>

    <div class="header-right">
      <ToggleThemeButton />

      <template v-if="user">
        <div class="user-menu">
          <button @click="isOpen = !isOpen" class="user-button">
            <span class="username">{{ user.username }}</span>
            <span class="arrow">▼</span>
          </button>

          <div v-if="isOpen" class="dropdown">
            <div class="user-email">{{ user.email }}</div>
            <NuxtLink to="/profile" class="dropdown-item"
              >Профиль</NuxtLink
            >
            <button
              @click="handleLogout"
              class="dropdown-item logout-btn"
            >
              Выйти
            </button>
          </div>
        </div>
      </template>

      <template v-else>
        <div class="auth-links">
          <NuxtLink to="/login" class="auth-link">Войти</NuxtLink>
          <NuxtLink to="/register" class="auth-link"
            >Регистрация</NuxtLink
          >
        </div>
      </template>
    </div>
  </header>
</template>

<script setup>
const { logout } = useStrapiAuth();
const user = useStrapiUser();
const router = useRouter();
const isOpen = ref(false);

const handleLogout = async () => {
  try {
    await logout();
    router.push('/login');
  } catch (error) {
    console.error('Ошибка при выходе:', error);
  }
};

// Закрываем дропдаун при клике вне его
onMounted(() => {
  document.addEventListener('click', e => {
    if (!e.target.closest('.user-menu')) {
      isOpen.value = false;
    }
  });
});
</script>

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
}

.header-left {
  display: flex;
  align-items: center;
  gap: 30px;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

img {
  width: 40px;
}

.main-nav {
  display: flex;
  gap: 20px;
}

.main-nav a {
  color: white;
  text-decoration: none;
}

.user-menu {
  position: relative;
}

.user-button {
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.user-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.username {
  font-weight: 500;
}

.arrow {
  font-size: 0.8rem;
  transition: transform 0.3s;
}

.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 5px;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  border-radius: 8px;
  min-width: 200px;
  padding: 8px 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.user-email {
  padding: 8px 16px;
  color: #888;
  font-size: 0.9rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 5px;
}

.dropdown-item {
  display: block;
  padding: 8px 16px;
  color: white;
  text-decoration: none;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
}

.dropdown-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.logout-btn {
  color: #ff4444;
}

.auth-links {
  display: flex;
  gap: 15px;
}

.auth-link {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.auth-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
