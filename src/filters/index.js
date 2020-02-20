export default Vue => {
    Vue.filter('toMoney', value => {
        const formatter = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
		})
		
		const formatted = formatter.format(Math.abs(value))
		
		return value >= 0 ? formatted : formatted.replace(/R\$\s/, 'R$ -')
	})
	
	Vue.filter('capitalize', value => {
		if (!value) return ''
		value = value.toString().toLowerCase()
		return value.charAt(0).toUpperCase() + value.slice(1)
	})
}
