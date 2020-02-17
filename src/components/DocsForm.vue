<template>
  <div>
    <!-- Resource -->
    <h1 class="mdform__h1">
      <input
        v-model.lazy="resource"
        type="text"
        class="mdform__textbox"
        placeholder="Resource"
      >
    </h1>

    <!-- Endpoints -->
    <endpoint
      v-for="i in numEndpoints"
      :key="i - 1"
      :index="i - 1"
    />
    <button @click="$store.commit('addNewEndpoint')">
      Add new endpoint
    </button>
    <button @click="generateMarkdown">
      Generate Markdown
    </button>
  </div>
</template>
<script>
import { saveAs } from 'file-saver';
import Endpoint from './Endpoint.vue';

export default {
  components: {
    Endpoint,
  },
  data() {
    return {};
  },
  computed: {
    resource: {
      get() {
        return this.$store.state.resource;
      },
      set(value) {
        this.$store.commit('setResource', value);
      },
    },
    numEndpoints: {
      get() {
        return this.$store.state.endpoints.length;
      },
    },
  },
  methods: {
    generateMarkdown() {
      this.$store.dispatch('generateMarkdownString');
      const blob = new Blob([this.$store.state.markdownString], {
        type: 'text/markdown;charset=utf-8',
      });
      saveAs(blob, 'README.md');
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap");

.mdform {
  &__text,
  &__h1,
  &__h2 {
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #24292e;
  }

  &__h1,
  &__h2 {
    padding-bottom: 0.3em;
    border-bottom: 1px solid #eae3ef;
  }

  &__textbox {
    font: inherit;
  }

  &__codeinline,
  &__codeblock {
    font-family: "Source Code Pro", monospace;
    vertical-align: top;
  }
}
</style>
