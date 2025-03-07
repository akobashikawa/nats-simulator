import { ref, onMounted, computed } from 'vue';
import Timer from './Timer.js';
import ClientesList from './ClientesList.js';
import ClientesService from './ClientesService.js';
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

      <ClientesList :clientes="clientes" />
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

		async function getClientes() {
			console.log('getClientes');
			const loadedClientes = await clientesService.getClientes();
			clientes.value = loadedClientes;
		}

		async function createCliente() {
			console.log('createCliente');
			await clientesService.createCliente();
			await getClientes();
		}


		return {
			isRunning,
			isPaused,
			start,
			stop,
			pause,
			continueTimer,
			getClientes,
			createCliente,
			timerComponent,
			clientes,
		};
	},
};

export default App;