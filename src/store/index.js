import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    invoices: []
  },
  mutations: {
    SET_INVOICES(state, invoices) {
      state.invoices = invoices
    }
  },
  actions: {
    async fetchInvoices({ commit }) {
      try {
        await db.ref().on('value', snapshot => {
          commit('SET_INVOICES', snapshot.val())
        })
      } catch (error) {
        console.log(error)
      }
    }
  },
  modules: {}
})
