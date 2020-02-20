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
        max-width 950px
        margin auto
        background-color #fff
        padding 26px 33px 45px

        nav
            display flex
            justify-content space-between

        .transaction-list
            margin 32px auto 0

    @media screen and (max-width: 460px)
        .home nav
            flex-direction column

        .new-transaction-button
            margin-top 12px
            width 100%

    @media screen and (min-width: 1200px)
        .home
            margin-top 50px
</style>