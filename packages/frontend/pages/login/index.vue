<script setup>
const { login } = useStrapiAuth();
const router = useRouter();

const form = ref({
  identifier: '',
  password: '',
});
const error = ref('');

async function handleLogin() {
  try {
    await login(form.value);
    router.push('/');
    console.log(form.value);
  } catch (e) {
    error.value = 'Invalid credentials';
  }
}
</script>

<template>
  <div class="auth-container">
    <form @submit.prevent="handleLogin" class="auth-form">
      <h2>Login</h2>

      <div class="form-group">
        <label>Email:</label>
        <input
          type="email"
          v-model="form.identifier"
          required
          class="form-input"
        />
      </div>

      <div class="form-group">
        <label>Password:</label>
        <input
          type="password"
          v-model="form.password"
          required
          class="form-input"
        />
      </div>

      <div v-if="error" class="error-message">
        {{ error }}
      </div>

      <button type="submit" class="submit-btn">Login</button>

      <div class="auth-links">
        <NuxtLink to="/register"
          >Don't have an account? Register</NuxtLink
        >
        <NuxtLink to="/forgot-password">Forgot Password?</NuxtLink>
      </div>
    </form>
  </div>
</template>

<style scoped>
.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
}

.auth-form {
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-input {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.error-message {
  color: red;
  margin: 10px 0;
}

.auth-links {
  margin-top: 15px;
  text-align: center;
}
</style>
