<template>
    <div class="total-balance">
        <span class="current-balance">Saldo atual</span>
        <span :class="['amount', { negative: totalBalance < 0 }]">{{ totalBalance | toMoney }}</span>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'

const { mapGetters } = createNamespacedHelpers('transactions')

export default {
    name: 'HomeTotalBalance',
    computed: {
        ...mapGetters(['totalBalance'])
    }
}
</script>

<style lang="stylus" scoped>
.total-balance
    display flex
    flex-direction column
    justify-content space-around

    .current-balance
        font-size 13px
        color #999
    
    .amount
        font-size 18px
        font-weight bold
        color #333

    .amount.negative
        color #f83030
</style>