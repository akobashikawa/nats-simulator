import { ref, onMounted, onUnmounted } from 'vue';

export default {
  props: {
    customers: {
      type: Array,
      required: true,
    },
  },
  template: `
    <ul>
      <li v-for="customer in customers" :key="customer.id">
        {{ customer.name }}
      </li>
    </ul>
  `,
};