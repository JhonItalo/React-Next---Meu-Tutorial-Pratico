

export async function GET() {
	return Response.json(products);
}

const products = [
	{
		'id': '1a23b4c5',
		'name': 'Produto A',
		'price': '19.99',
		'descript': 'Descrição do Produto A',
	},
	{
		'id': '6d78e9f0',
		'name': 'Produto B',
		'price': '29.99',
		'descript': 'Descrição do Produto B',
	},
	{
		'id': '1g23h4i5',
		'name': 'Produto C',
		'price': '39.99',
		'descript': 'Descrição do Produto C',
	},
	{
		'id': 'j6k7l89m',
		'name': 'Produto D',
		'price': '49.99',
		'descript': 'Descrição do Produto D',
	},
	{
		'id': 'n10o11p12',
		'name': 'Produto E',
		'price': '59.99',
		'descript': 'Descrição do Produto E',
	},
	{
		'id': 'q13r14s15',
		'name': 'Produto F',
		'price': '69.99',
		'descript': 'Descrição do Produto F',
	},
];
