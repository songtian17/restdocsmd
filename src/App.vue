<template>
  <div id="app">
    <h1>Markdown documentation generator for REST APIs</h1>
    <DocsForm />
  </div>
</template>

<script>
import DocsForm from './components/DocsForm.vue';

export default {
  name: 'App',
  components: {
    DocsForm,
  },
};
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
