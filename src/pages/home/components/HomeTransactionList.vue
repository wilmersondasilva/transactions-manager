<template>
    <div class="home-transaction-list">
        <h2 class="title">Transações</h2>
        <home-empty-list v-if="isListEmpty" />
        <div v-else class="transaction-list-container">
            <home-transaction-list-item class="transaction-item" v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import HomeTransactionListItem from './HomeTransactionListItem'
import HomeEmptyList from './HomeEmptyList'

const { mapState, mapActions } = createNamespacedHelpers('transactions')

export default {
    name: 'HomeTransactionList',
    components: {
        HomeTransactionListItem,
        HomeEmptyList
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
.home-transaction-list
    background-color #fff
    border 1px solid #e6e6e6
    border-radius 4px

.title
    text-align left
    padding 12px 20px
    border-bottom 1px solid #e6e6e6

.transaction-item + .transaction-item
    border-top 1px solid #e6e6e6

@media screen and (min-width: 1200px)
    .home-transaction-list
        max-height 641px
        overflow auto
</style>