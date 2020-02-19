import { transactionService } from '@/services'

const transactionTypes = {
	ADD: 'ENTRADA',
	REMOVE: 'SAÍDA'
}

const getFormInitialState = () => ({
	type: transactionTypes.ADD,
	amount: 0,
	description: ''
})

const state = {
	transactions: [],
	form: getFormInitialState(),
	transactionTypes
}

const getters = {
    totalBalance(state) {
        return state.transactions.reduce((total, transaction) =>
			transaction.type === state.transactionTypes.ADD ? total + transaction.amount : total - transaction.amount
		, 0)
	},
	formAmountValue(state) {
		const { amount } = state.form
		return Number(amount.replace('R$', '').replace('.', '').replace(',', '.').trim())
	}
}

const actions = {
    fetchAllTransactions({ commit }) {
        const transactions = transactionService.getAll()
		commit('setTransactions', transactions)
	},
	saveTransaction({ commit, dispatch, state, getters }) {
		const data = Object.assign({}, state.form, { amount: getters.formAmountValue })
		transactionService.save(data)
		commit('resetForm')
		dispatch('fetchAllTransactions')
	}
}

const mutations = {
    setTransactions(state, payload) {
        state.transactions = payload
	},
	resetForm(state) {
		state.form = getFormInitialState()
	}
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
  