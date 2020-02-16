const getAll = () => {
    return [
		{
			type: 'ENTRADA',
			amount: 100.99,
			description: 'Nubank'
		},
		{
			type: 'SAÍDA',
			amount: 10.99,
			description: 'Dinheiro do aluguel'
		},
		{
			type: 'ENTRADA',
			amount: 100.99,
			description: 'Pagamento do Fulano'
		}
	]
}

export default {
    getAll
}
