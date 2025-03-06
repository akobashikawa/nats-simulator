import { ref } from 'vue';
import Timer from './Timer.js';

const App = {
  components: {
    Timer,
  },

  template: `
    <h1>Simulator</h1>

    <button @click="start" :disabled="isRunning">Iniciar</button>
    <button @click="pause" :disabled="!isRunning || isPaused">Pausar</button>
    <button @click="continueTimer" :disabled="!isPaused">Continuar</button>
    <button @click="stop" :disabled="!isRunning">Terminar</button>
    <Timer v-if="isRunning" ref="timerComponent" />
  `,

  setup() {
    const isRunning = ref(false);
    const isPaused = ref(false);
    const timerComponent = ref(null);

    function start() {
      console.log('start');
      isRunning.value = true;
      isPaused.value = false;
    }

    function stop() {
      console.log('stop');
      isRunning.value = false;
      isPaused.value = false;
    }

    function pause() {
      console.log('pause');
      isPaused.value = true;
      timerComponent.value.pauseTimer();
    }

    function continueTimer() {
      console.log('continue');
      isPaused.value = false;
      timerComponent.value.continueTimer();
    }

    return {
      isRunning,
      isPaused,
      start,
      stop,
      pause,
      continueTimer,
      timerComponent,
    };
  },
};

export default App;