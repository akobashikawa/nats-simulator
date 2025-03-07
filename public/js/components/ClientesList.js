import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    clientes: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul>
      <li v-for="cliente in clientes" :key="cliente.id">
        {{ cliente.nombre }}
      </li>
    </ul>
  `,
};