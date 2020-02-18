<template>
    <div class="total-balance">
        <span class="current-balance">Saldo atual:&nbsp;</span>
        <span class="amount">{{ totalBalance | toMoney }}</span>
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