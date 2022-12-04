import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal:false
  },
  getters: {
  },
  mutations: {
    CHANGE_SHOWMODAL(state){
      state.showModal = !state.showModal
    }
  },
  actions: {
    changeShowModal({commit}){
      commit('CHANGE_SHOWMODAL')
    }
  },
  modules: {
  }
})
