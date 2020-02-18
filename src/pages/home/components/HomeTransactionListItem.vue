<template>
    <div class="transaction-list-item">
        <div 
            class="group-info group-info-type">
            <p class="type" :class="transaction.type === transactionTypes.ADD ? 'add' : 'remove'">{{ transaction.type }}</p>
        </div>
        <div class="group-info group-info-amount">
            <h3>Valor</h3>
            <p class="amount">{{ transaction.amount | toMoney }}</p>
        </div>
        <div class="group-info group-info-description">
            <h3>Descrição</h3>
            <p class="description">{{ transaction.description }}</p>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapState } = createNamespacedHelpers('transactions')

export default {
    name: 'HomeTransactionListItem',
    props: {
        transaction: Object
    },
    computed: {
        ...mapState(['transactionTypes'])
    }
}
</script>

<style lang="stylus" scoped>
.transaction-list-item
    padding 20px 20px
    display flex
    align-content center

.group-info
    width 100%

    h3
        margin-bottom 5px

.group-info-type
    align-self center

    .type
        text-align center
        padding 5px 8px
        width 100px
        border-radius 3px

    .type.add
        border 1px solid green

    .type.remove
        border 1px solid red
</style>