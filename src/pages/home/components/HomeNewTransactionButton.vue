
<template>
    <router-link to="/transaction/new">
        <button class="new-transaction-button">Adicionar transação</button>
    </router-link>
</template>

<style lang="stylus" scoped>
.new-transaction-button
    width 230px
    height 40px
    border-radius 4px
    border 1px solid #eee
    background-color #edeef2
    font-size 1rem

    &:focus
        outline 0
</style>