import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    defaultEndpoint: {
      title: '',
      description: '',
      method: '',
      url: '',
      properties: [
        {
          property: '',
          description: '',
        },
      ],
      request: '',
      requestBody: '',
      response: '',
    },
    resource: '',
    endpoints: [
      {
        title: '',
        description: '',
        method: '',
        url: '',
        properties: [
          {
            property: '',
            description: '',
          },
        ],
        request: '',
        requestBody: '',
        response: '',
      },
    ],
    markdownString: '',
  },
  mutations: {
    setResource(state, resource) {
      state.resource = resource;
    },
    setTitle(state, { i, title }) {
      state.endpoints[i].title = title;
    },
    setDescription(state, { i, description }) {
      state.endpoints[i].description = description;
    },
    setMethod(state, { i, method }) {
      state.endpoints[i].method = method;
    },
    setUrl(state, { i, url }) {
      state.endpoints[i].url = url;
    },
    setProperties(state, { i, properties }) {
      state.endpoints[i].properties = properties;
    },
    setRequest(state, { i, request }) {
      state.endpoints[i].request = request;
    },
    setRequestBody(state, { i, requestBody }) {
      state.endpoints[i].requestBody = requestBody;
    },
    setResponse(state, { i, response }) {
      state.endpoints[i].response = response;
    },
    setMarkdownString(state, mdString) {
      state.markdownString = mdString;
    },
    addNewEndpoint(state) {
      state.endpoints.push(state.defaultEndpoint);
    },
  },
  actions: {
    generateMarkdownString({ state, commit }) {
      let mdString = '';
      mdString += `# ${state.resource}`;
      mdString += '\n\n';
      state.endpoints.forEach((endpoint) => {
        mdString += `## ${endpoint.title}`;
        mdString += '\n';
        mdString += '---';
        mdString += '\n';
        mdString += `${endpoint.description}`;
        mdString += '\n\n';
        mdString += `\`${endpoint.method} ${endpoint.url}\``;
        mdString += '\n\n';
        if (endpoint.properties.length) {
          mdString += 'Properties | Description';
          mdString += '\n';
          mdString += '--- | ---';
        }
        endpoint.properties.forEach((row) => {
          mdString += '\n';
          mdString += `${row.property} | ${row.description}`;
        });
        mdString += '\n\n';
        mdString += '### Example request';
        mdString += '\n\n';
        mdString += '```';
        mdString += endpoint.request;
        mdString += '```';
        mdString += '\n';
        mdString += '### Example request body';
        mdString += '\n\n';
        mdString += '```';
        mdString += endpoint.response;
        mdString += '```';
        mdString += '\n';
        mdString += '### Example response';
        mdString += '\n\n';
        mdString += '```';
        mdString += endpoint.response;
        mdString += '```';
        mdString += '\n\n';
      });
      commit('setMarkdownString', mdString);
    },
  },
  modules: {},
});
