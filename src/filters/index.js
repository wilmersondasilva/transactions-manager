export default Vue => {
    Vue.filter('toMoney', value => {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })

        return formatter.format(value)
    })
}
