import Vue from 'vue'
import Vuex from 'vuex'

const headers = new Headers()
headers.append("Content-Type", "application/x-www-form-urlencoded");

Vue.use(Vuex)

function base (path) {
  return `http://ec2-18-207-210-129.compute-1.amazonaws.com${path}`
}

export default new Vuex.Store({
  state: {
    cpf: 0,
    contas: {},
    transacoes: {}
  },
  mutations: {
    SET_CPF (state, payload) {
      state.cpf = payload
    },

    SET_CONTAS (state, { result }) {
      let obj = {}

      for (let key in result) {
        let item = result[key]
        obj[item.conta_id] = item
      }

      Vue.set(state, 'contas', obj)
    },

    SET_TRANSACOES (state, { conta_id, data}) {
      let obj = {}
      for (let key in data.result) {
        let item = data.result[key]
        obj[item.transacao_id] = item
      }
      
      Vue.set(state.transacoes, conta_id, obj)
    }
  },
  actions: {
    async LOGIN ({ commit, dispatch }, { cpf, senha }) {
      // fazer login e requisitar todos os fodendos dados
      cpf = parseInt(cpf)
      await fetch(base('/usuario/cadastro'), {
        method: 'post',
        headers,
        body: new URLSearchParams({ cpf_cnpj: cpf, senha, cnpj_flag: "False", nome_completo: "asdasda" })
      })
        .then(async e => {
          commit('SET_CPF', cpf)
          dispatch('GET_CONTAS')
        })
    },

    // GET CONTAS
    async GET_CONTAS ({ commit, dispatch, state }) {
      await fetch(base('/usuario/contas'), {
        method: 'post',
        headers,
        body: new URLSearchParams({ 'cpf_cnpj': state.cpf })
      }).then(async response => {
        let data = await response.json()
        console.log('contas', data)
        commit('SET_CONTAS', data)
      })
    },

    async CADASTRAR_CONTA ({ commit, dispatch, state }, payload) {
      await fetch(base('/usuario/conta/cadastro'), {
        method: 'post',
        headers,
        body: new URLSearchParams({ 'cpf_cnpj': state.cpf, ...payload })
      }).then(async response => {
        let data = await response.json()
        console.log('CADASTRO', data)
      })
    },

    // GET TRANSACOES
    async GET_TRANSACOES ({ commit, dispatch, state }, { conta_id }) {
      await fetch(base('/usuario/conta/transacoes'), {
        method: 'post',
        headers,
        body: new URLSearchParams({ conta_id })
      }).then(async response => {
        let data = await response.json()
        commit('SET_TRANSACOES', { conta_id, data })
      })
    },

    async CADASTRAR_TRANSACAO ({ commit, dispatch, state }, payload) {
      await fetch(base('/usuario/conta/transacao/cadastro'), {
        method: 'post',
        headers,
        body: new URLSearchParams(payload)
      }).then(async response => {
        let data = await response.json()
        dispatch('GET_TRANSACOES', { conta_id: payload.conta_id })
      })
    },
  }
})