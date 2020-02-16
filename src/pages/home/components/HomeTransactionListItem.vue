<template>
    <div class="transaction-list-item">
        <div class="group-info group-info-type">
            <p class="type">{{ transaction.type }}</p>
        </div>
        <div class="group-info group-info-amount">
            <h3>Valor</h3>
            <p class="amount">{{ transaction.amount }}</p>
        </div>
        <div class="group-info group-info-description">
            <h3>Descrição</h3>
            <p class="description">{{ transaction.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeTransactionListItem',
    props: {
        transaction: Object
    }
}
</script>

<style lang="stylus" scoped>
.transaction-list-item
    padding 10px 20px
    text-align left 

.group-info
    width 100%
    margin-bottom 30px

@media screen and (min-width 600px) and (max-width 750px), screen and (min-width 1000px)
    .transaction-list-item
        display flex
        align-items center
        justify-content space-between
    
    .group-info
        margin-bottom 0
</style>