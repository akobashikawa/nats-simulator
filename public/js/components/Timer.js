import { ref, onMounted, onUnmounted } from 'vue';

const Timer = {
  template: `
    <div>
      <p>Tiempo: {{ formatTime(hours) }}:{{ formatTime(minutes) }}:{{ formatTime(seconds) }}</p>
    </div>
  `,

  setup() {
    const hours = ref(0);
    const minutes = ref(0);
    const seconds = ref(0);
    let interval = null;
    const isPaused = ref(false);

    function startTimer() {
      interval = setInterval(() => {
        if (!isPaused.value) {
          seconds.value++;
          if (seconds.value === 60) {
            seconds.value = 0;
            minutes.value++;
          }
          if (minutes.value === 60) {
            minutes.value = 0;
            hours.value++;
          }
        }
      }, 1000);
    }

    function stopTimer() {
      clearInterval(interval);
    }

    function pauseTimer() {
      isPaused.value = true;
    }

    function continueTimer() {
      isPaused.value = false;
    }

    function formatTime(value) {
      return value.toString().padStart(2, '0');
    }

    onMounted(() => {
      startTimer();
    });

    onUnmounted(() => {
      stopTimer();
    });

    return {
      hours,
      minutes,
      seconds,
      pauseTimer,
      continueTimer,
      formatTime,
    };
  },
};

export default Timer;