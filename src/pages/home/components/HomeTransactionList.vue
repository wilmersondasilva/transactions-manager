<template>
    <div class="home-transaction-list">
        <empty-list v-if="isListEmpty" text="Ainda não existem transações cadastradas"/>
        <div v-else class="transaction-list-container">
            <div class="header">
                <h3 class="type">Tipo de transação</h3>
                <h3 class="description">Descrição</h3>
                <h3 class="amount">Valor</h3>
            </div>
            <home-transaction-list-item class="transaction-item" v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HomeTransactionListItem from './HomeTransactionListItem'
import EmptyList from '@/components/EmptyList'

const { mapState, mapActions } = createNamespacedHelpers('transactions')

export default {
    name: 'HomeTransactionList',
    components: {
        HomeTransactionListItem,
        EmptyList
    },
    computed: {
        ...mapState(['transactions']),
        isListEmpty() {
            return this.transactions.length === 0
        }
    },
    created() {
        this.fetchAllTransactions();
    },
    methods: {
        ...mapActions(['fetchAllTransactions'])
    },
}
</script>

<style lang="stylus" scoped>
.header
    height 42px
    display flex
    justify-content space-around
    align-items center
    background-color #f2f2f2
    padding-left 20px
    padding-right 20px

    h3
        font-size 14px
        font-weight bold
        width 100%
        color #777

    h3.amount
        text-align right

.transaction-item + .transaction-item
    border-top 1px solid #e2e2e2
</style>