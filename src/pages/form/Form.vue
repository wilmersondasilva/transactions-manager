<template>
    <div class="form">
        <h2 class="title">Nova transação</h2>
        <form @submit.prevent="save">
            <div class="form-group transaction-type">
                <label for="type">Tipo de transação</label>
                <div class="input-group">
                    <select v-model="form.type" id="type" data-type required>
                        <option v-for="type in transactionTypes" :key="type" :value="type">{{ type }}</option>
                    </select>
                </div>
            </div>
            <div class="form-group-inline">
                <div class="form-group">
                    <label for="card-description">Descrição</label>
                    <input type="text" v-model.trim="form.description" :class="{ invalid: errors.description.isInvalid }" data-description id="card-description"/>
                    <p v-if="errors.description.isInvalid" class="error-message" data-description-error>{{ errors.description.message }}</p>
                </div>
                <div class="form-group amount">
                    <label for="card-amount">Valor</label>
                    <input v-money="moneyInputConfig" v-model="form.amount" :class="{ invalid: errors.amount.isInvalid }" data-amount id="card-amount"/>
                    <p v-if="errors.amount.isInvalid" class="error-message" data-amount-error>{{ errors.amount.message }}</p>
                </div>
            </div>
            <div class="button-container">
                <button type="submit" class="submit-button">Salvar</button>
            </div>
        </form>
    </div>
</template>

<script>
import { VMoney } from 'v-money'
import { createNamespacedHelpers } from 'vuex'

const { mapState, mapGetters, mapActions } = createNamespacedHelpers('transactions')

export default {
    name: 'Form',
    directives: {
        money: VMoney
    },
    data() {
        return {
            moneyInputConfig: {
                decimal: ',',
                thousands: '.',
                prefix: 'R$ ',
                precision: 2
            },
            errors: {
                description: {
                    isInvalid: false,
                    message: 'Campo obrigatório'
                },
                amount: {
                    isInvalid: false,
                    message: 'Valor não pode ser 0'
                }
            }
        }
    },
    computed: {
        ...mapState(['form', 'transactionTypes']),
        ...mapGetters(['formAmountValue'])
    },
    methods: {
        ...mapActions(['saveTransaction']),
        save() {
            const isValid = this.validateForm()

            if (isValid) {
                this.saveTransaction()
                this.$router.back()
            }
        },
        validateForm() {
            this.resetErrorMessages()

            if (!this.form.description) {
                this.errors .description.isInvalid = true
                return false
            }

            if (this.formAmountValue === 0) {
                this.errors .amount.isInvalid = true
                return false
            }

            return true
        },
        resetErrorMessages() {
            Object.keys(this.errors).forEach(key => this.errors[key].isInvalid = false)
        }
    }
}
</script>

<style lang="stylus" scoped>
.form
    width 80%
    margin auto
    margin-top 16px
    border 1px solid #e6e6e6
    border-radius 4px

.title
    text-align left
    padding 12px 20px
    border-bottom 1px solid #e6e6e6

form
    padding 20px

.form-group
    width 100%
    text-align left
    margin-bottom 20px

    label
        display block
        margin 10px 0    

    input, select 
        width 100%
        height 40px
        border 2px solid #eee
        border-radius 4px
        background-color #fff
        padding 1px 5px
        box-sizing border-box

        &:focus
            outline 0

        &.invalid
            border-color #d62727

    &.amount
        width 40%

.error-message
    font-size 12px
    margin-top 6px
    color #d62727


.transaction-type
    .type
        display flex
        justify-content space-between

        select
            width 48%

.form-group-inline
    display flex

    .form-group + .form-group
        margin-left 10px

.button-container
    margin-top 12px

.submit-button
    width 100%
    height 50px
    border-radius 4px
    border 2px solid #eee
    background-color #edeef2
    font-size 1rem

    &:focus
        outline 0

@media screen and (min-width: 650px)
    .form
        width 60%

@media screen and (min-width: 900px)
    .form
        width 50%

@media screen and (min-width: 1200px)
    .form
        width 30%
</style>