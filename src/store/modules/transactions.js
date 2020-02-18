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
        return state.transactions.reduce((total, transaction) =>
			transaction.type === state.transactionTypes.ADD ? total + transaction.amount : total - transaction.amount
		, 0)
    }
}

const actions = {
    fetchAllTransactions({ commit }) {
        const response = transactionService.getAll()
		const transactions = [...response]
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
  