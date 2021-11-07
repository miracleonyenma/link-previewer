import { createStore } from 'vuex'

export default createStore({
  state: {
    wsEndpoint: ''
  },
  mutations: {
    updateWsEndpoint(state, payload){
      state.wsEndpoint = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
