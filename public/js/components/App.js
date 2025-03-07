import { ref, onMounted, computed } from 'vue';
import Timer from './Timer.js';
import ClientesList from './ClientesList.js';
import ClientesService from './ClientesService.js';
import { log } from '../utils/logger.js'; // Importa la función de registro condicional

const clientesService = new ClientesService();

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
      <button @click="getClientes" :disabled="isPaused">Listar Clientes</button>
      <button @click="createCliente" :disabled="isPaused">Crear Cliente</button>

      <ClientesList :clientes="clientesList" @delete-cliente="deleteCliente" />
    </main>
  `,

  setup() {
    const isRunning = ref(false);
    const isPaused = ref(false);
    const timerComponent = ref(null);
    const clientes = ref([]);

    onMounted(async () => {
      await getClientes();
    });

    function start() {
      log('start');
      isRunning.value = true;
      isPaused.value = false;
    }

    function stop() {
      log('stop');
      isRunning.value = false;
      isPaused.value = false;
    }

    function pause() {
      log('pause');
      isPaused.value = true;
      timerComponent.value.pauseTimer();
    }

    function continueTimer() {
      log('continue');
      isPaused.value = false;
      timerComponent.value.continueTimer();
    }

    async function getClientes() {
      log('getClientes');
      const loadedClientes = await clientesService.getClientes();
      clientes.value = loadedClientes;
    }

    async function createCliente() {
      log('createCliente');
      await clientesService.createCliente();
      await getClientes();
    }

    async function deleteCliente(id) {
      log('deleteCliente', id);
      await clientesService.deleteCliente(id);
      await getClientes();
    }

    const clientesList = computed(() => clientes.value);

    return {
      isRunning,
      isPaused,
      start,
      stop,
      pause,
      continueTimer,
      getClientes,
      createCliente,
      deleteCliente,
      timerComponent,
      clientesList,
    };
  },
};

export default App;