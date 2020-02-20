<template>
    <div class="transaction-list-item">
        <div class="group-info group-info-type">
            <p
                :class="[
                    'type',
                    { add: transaction.type === transactionTypes.ADD },
                    { remove: transaction.type === transactionTypes.REMOVE }
                ]"
            >
                {{ transaction.type | capitalize }}
            </p>
        </div>
        <div class="group-info group-info-description">
            <p class="description">{{ transaction.description }}</p>
        </div>
        <div class="group-info group-info-amount">
            <p class="amount">{{ transaction.amount | toMoney }}</p>
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
    font-size 15px
    color #333
    align-self center

.group-info-amount, .group-info-description
    font-weight bold

.group-info-type
    text-align left

    .type
        width 100px

    .type.add:before, .type.remove:before
        font-size 22px
        margin-right 8px
    
    .type.add:before
        content '+'
        color #25b94d

    .type.remove:before
        content '-'
        color #f83030

.group-info-amount
    text-align right
</style>