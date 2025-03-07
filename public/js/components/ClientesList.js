import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    clientes: {
      type: Array,
      required: true,
    },
  },
  emits: ['delete-cliente'],
  template: `
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nombre }}
        <button @click="$emit('delete-cliente', cliente.id)">Eliminar</button>
      </li>
    </ul>
  `,

};