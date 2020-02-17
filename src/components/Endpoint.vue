<template>
  <div>
    <!-- Title -->
    <h2 class="mdform__h2">
      <input
        v-model.lazy="title"
        type="text"
        class="mdform__textbox"
        placeholder="Title"
      >
    </h2>
    <hr>

    <!-- Description -->
    <p class="mdform__text">
      <input
        v-model.lazy="description"
        type="text"
        class="mdform__textbox"
        placeholder="Description"
      >
    </p>

    <!-- HTTP Method, url -->
    <p class="mdform__text">
      <select v-model.lazy="method">
        <option value="GET">
          GET
        </option>
        <option value="POST">
          POST
        </option>
        <option value="PUT">
          PUT
        </option>
        <option value="DELETE">
          DELETE
        </option>
      </select>
      <input
        v-model.lazy="url"
        type="text"
        class="mdform__codeinline"
        placeholder="Url"
      >
    </p>

    <!-- Properties -->
    <properties-table />
    <!-- <table class="mdform__table">
      <thead>
        <tr>
          <th class="mdform__text">
            Property
          </th>
          <th class="mdform__text">
            Description
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="mdform__text">
            <input
              type="text"
              class="mdform__textbox"
              placeholder="Property"
            >
          </th>
          <th class="mdform__text">
            <input
              type="text"
              class="mdform__textbox"
              placeholder="Description"
            >
          </th>
        </tr>
      </tbody>
    </table> -->

    <!-- Example Request -->
    <h3 class="mdform__h3">
      Example Request
      <textarea
        v-model.lazy="request"
        rows="2"
        cols="60"
        wrap="soft"
        type="text"
        class="mdform__codeblock"
        placeholder="Example Request"
      />
    </h3>

    <!-- Example Request Body -->
    <h3 class="mdform__h3">
      Example Request Body
      <textarea
        v-model.lazy="requestBody"
        rows="12"
        cols="60"
        wrap="soft"
        class="mdform__codeblock"
        placeholder="Example Request Body"
      />
    </h3>

    <h3 class="mdform__h3">
      Example Response
      <textarea
        v-model.lazy="response"
        rows="12"
        cols="60"
        wrap="soft"
        class="mdform__codeblock"
        placeholder="Example Response"
      />
    </h3>
  </div>
</template>

<script>
import PropertiesTable from './PropertiesTable.vue';

export default {
  components: {
    PropertiesTable,
  },
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {};
  },
  computed: {
    title: {
      get() {
        return this.$store.state.endpoints[this.index].title;
      },
      set(value) {
        this.$store.commit('setTitle', { i: this.index, title: value });
      },
    },
    description: {
      get() {
        return this.$store.state.endpoints[this.index].description;
      },
      set(value) {
        this.$store.commit('setDescription', { i: this.index, description: value });
      },
    },
    method: {
      get() {
        return this.$store.state.endpoints[this.index].method;
      },
      set(value) {
        this.$store.commit('setMethod', { i: this.index, method: value });
      },
    },
    url: {
      get() {
        return this.$store.state.endpoints[this.index].url;
      },
      set(value) {
        this.$store.commit('setUrl', { i: this.index, url: value });
      },
    },
    request: {
      get() {
        return this.$store.state.endpoints[this.index].request;
      },
      set(value) {
        this.$store.commit('setRequest', { i: this.index, request: value });
      },
    },
    requestBody: {
      get() {
        return this.$store.state.endpoints[this.index].requestBody;
      },
      set(value) {
        this.$store.commit('setRequestBody', { i: this.index, requestBody: value });
      },
    },
    response: {
      get() {
        return this.$store.state.endpoints[this.index].response;
      },
      set(value) {
        this.$store.commit('setResponse', { i: this.index, response: value });
      },
    },
  },
};
</script>
