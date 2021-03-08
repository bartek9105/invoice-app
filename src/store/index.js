import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    invoices: [],
    width: null
  },
  getters: {
    invoice: state => id => {
      return state.invoices.filter(invoice => invoice.id === id)[0]
    },
    invoices: state => filters => {
      if (filters.length > 0) {
        return state.invoices.filter(invoice => {
          return filters.includes(invoice.status)
        })
      }
      return state.invoices
    },
    width(state) {
      return state.width
    }
  },
  mutations: {
    SET_INVOICES(state, invoices) {
      state.invoices = invoices
    },
    SET_WINDOW_WIDTH(state, width) {
      state.width = width
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
