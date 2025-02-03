<script setup lang="ts">
import { ref, onMounted } from 'vue';

const { findOne } = useStrapi();
const user = useStrapiUser();

const profileData = ref<any | null>(null);

onMounted(async () => {
  if (user.value) {
    try {
      const response = await findOne(
        'users-permissions/users',
        user.value.id.toString()
      );
      profileData.value = response.data;
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  }
});
</script>

<template>
  <div class="profile">
    <h1>Your Profile</h1>
    <div v-if="profileData">
      <p>Username: {{ profileData.username }}</p>
      <p>Email: {{ profileData.email }}</p>
      <!-- Add more fields as needed -->
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<style scoped>
.profile {
  padding: 20px;
}

h1 {
  font-size: 2em;
}

p {
  font-size: 1.2em;
}
</style>
