import { ref } from 'vue';
import Timer from './Timer.js';
import ClientesList from './ClientesList.js';
import Cliente from './Cliente.js';

const App = {
  components: {
    Timer,
    ClientesList,
  },

  template: `
    <h1>Simulator</h1>

    <button @click="start" :disabled="isRunning">Iniciar</button>
    <button @click="pause" :disabled="!isRunning || isPaused">Pausar</button>
    <button @click="continueTimer" :disabled="!isPaused">Continuar</button>
    <button @click="stop" :disabled="!isRunning">Terminar</button>
    <Timer v-if="isRunning" ref="timerComponent" />

    <hr>

    <main v-if="isRunning">
      <button @click="createCliente" :disabled="isPaused">Crear Cliente</button>

      <ClientesList :customers="customers" />
    </main>
  `,

  setup() {
    const isRunning = ref(false);
    const isPaused = ref(false);
    const timerComponent = ref(null);
    const customers = ref([]);

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

    function createCliente() {
      const newCliente = Cliente.create();
      customers.value.push(newCliente);
    }

    return {
      isRunning,
      isPaused,
      start,
      stop,
      pause,
      continueTimer,
      createCliente,
      timerComponent,
      customers,
    };
  },
};

export default App;