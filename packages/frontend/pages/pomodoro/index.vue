<script lang="ts" setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';

const minutes = ref(25);
const seconds = ref(0);
const isRunning = ref(false);
let interval: number | null = null;

const saveToLocalStorage = () => {
  localStorage.setItem(
    'pomodoroTimer',
    JSON.stringify({
      minutes: minutes.value,
      seconds: seconds.value,
      isRunning: isRunning.value,
      timestamp: isRunning.value ? Date.now() : null,
    })
  );
};

const loadFromLocalStorage = () => {
  const savedState = localStorage.getItem('pomodoroTimer');
  if (savedState) {
    const state = JSON.parse(savedState);
    if (state.isRunning && state.timestamp) {
      const elapsedTime = Math.floor(
        (Date.now() - state.timestamp) / 1000
      );
      let totalSeconds =
        state.minutes * 60 + state.seconds - elapsedTime;

      if (totalSeconds < 0) {
        totalSeconds = 0;
      }

      minutes.value = Math.floor(totalSeconds / 60);
      seconds.value = totalSeconds % 60;
    } else {
      minutes.value = state.minutes;
      seconds.value = state.seconds;
    }
    isRunning.value = state.isRunning;

    if (isRunning.value) {
      startTimer();
    }
  }
};

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
    saveToLocalStorage();
  }, 1000);
};

const pauseTimer = () => {
  isRunning.value = false;
  if (interval) {
    clearInterval(interval);
  }
  saveToLocalStorage();
};

const resetTimer = () => {
  isRunning.value = false;
  minutes.value = 25;
  seconds.value = 0;
  if (interval) {
    clearInterval(interval);
  }
  saveToLocalStorage();
};

onMounted(() => {
  loadFromLocalStorage();
});

onUnmounted(() => {
  if (interval) {
    clearInterval(interval);
  }
});

watch([minutes, seconds, isRunning], () => {
  saveToLocalStorage();
});
</script>

<template>
  <div class="pomodoro-app">
    <h1>Pomodoro Timer</h1>
    <div class="timer">
      <span
        >{{ minutes }}:{{ seconds < 10 ? '0' : ''
        }}{{ seconds }}</span
      >
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
