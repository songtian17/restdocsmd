<template>
  <div>
    <table>
      <thead>
        <tr>
          <td>Property</td>
          <td>Description</td>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, i) in tableInfo"
          :key="i"
        >
          <td>
            <input
              v-model.lazy="row.property"
              type="text"
              class="mdform__textbox"
              placeholder="Property"
            >
          </td>
          <td>
            <input
              v-model.lazy="row.description"
              type="text"
              class="mdform__textbox"
              placeholder="Description"
            >
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button @click="addRow">
              Add row
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tableInfo: [
        {
          property: '',
          description: '',
        },
      ],
    };
  },
  computed: {
    properties: {
      get() {
        return this.$store.state.endpoints[this.index].properties;
      },
      set(value) {
        this.$store.commit('setProperties', { i: this.index, properties: value });
      },
    },
  },
  watch: {
    tableInfo: {
      handler(value) {
        this.$store.commit('setProperties', { i: this.index, properties: value });
      },
      deep: true,
    },
  },
  methods: {
    addRow() {
      this.tableInfo.push({
        property: '',
        description: '',
      });
    },
  },
};
</script>
