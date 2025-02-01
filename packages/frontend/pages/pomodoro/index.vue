<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';

const minutes = ref(25);
const seconds = ref(0);
const isRunning = ref(false);
let interval: number | null = null;

const startTimer = () => {
  isRunning.value = true;
  interval = window.setInterval(() => {
    if (seconds.value === 0) {
      if (minutes.value === 0) {
        resetTimer();
      } else {
        minutes.value -= 1;
        seconds.value = 59;
      }
    } else {
      seconds.value -= 1;
    }
  }, 1000);
};

const pauseTimer = () => {
  isRunning.value = false;
  if (interval) {
    clearInterval(interval);
  }
};

const resetTimer = () => {
  isRunning.value = false;
  minutes.value = 25;
  seconds.value = 0;
  if (interval) {
    clearInterval(interval);
  }
};

onMounted(() => {
  // Any setup code if needed
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});
</script>

<template>
  <div class="pomodoro-app">
    <h1>Pomodoro Timer</h1>
    <div class="timer">
      <span>{{ minutes }}:{{ seconds }}</span>
    </div>
    <div class="controls">
      <button @click="startTimer" :disabled="isRunning">
        Start
      </button>
      <button @click="pauseTimer" :disabled="!isRunning">
        Pause
      </button>
      <button @click="resetTimer">Reset</button>
    </div>
  </div>
</template>

<style scoped>
body {
  background-color: red;
}

.pomodoro-app {
  text-align: center;
  margin-top: 50px;
}

.timer {
  font-size: 48px;
  margin: 20px 0;
}

.controls button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
