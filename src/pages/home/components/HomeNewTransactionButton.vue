
<template>
    <router-link to="/transaction/new">
        <button class="new-transaction-button">Criar transação</button>
    </router-link>
</template>

<style lang="stylus" scoped>
.new-transaction-button
    width 230px
    height 41px
    border-radius 2px
    background-color #59b1f5
    color #fff
    font-size 1rem
    text-align center

    &:focus
        outline 0
</style>