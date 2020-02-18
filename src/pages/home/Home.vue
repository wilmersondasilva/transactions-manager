<template>
    <div class="home">
        <nav>
            <home-total-balance class="total-balance" />
            <home-new-transaction-button class="new-transaction-button" />
        </nav>
        <home-transaction-list class="transaction-list" />
    </div>
</template>

<script>
import HomeTransactionList from './components/HomeTransactionList'
import HomeNewTransactionButton from './components/HomeNewTransactionButton'
import HomeTotalBalance from './components/HomeTotalBalance'

export default {
    name: 'Home',
    components: {
        HomeTransactionList,
        HomeNewTransactionButton,
        HomeTotalBalance
    }
};
</script>

<style lang="stylus" scoped>
    .home
        width 96%
        max-width 850px
        margin auto

        nav
            display flex
            justify-content space-between

        .total-balance
            align-self center

        .transaction-list, nav
            margin 20px auto 0
</style>