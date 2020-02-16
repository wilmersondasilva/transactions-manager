import { transactionService } from '@/services'

const state = {
    transactions: [],
	transactionTypes: {
		ADD: 'ENTRADA',
		REMOVE: 'SAÍDA'
	}
}

const getters = {
    totalBalance(state) {
        return state.transactions.reduce((total, transaction) => total + transaction.quantity, 0)
    }
}

const actions = {
    fetchAllTransactions({ commit }) {
        const response = transactionService.getAll()
		const transactions = [...response].map(transaction => ({ ...transaction, quantity: 0 }))
		commit('setTransactions', transactions)
    }
}

const mutations = {
    setTransactions(state, payload) {
        state.transactions = payload
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  