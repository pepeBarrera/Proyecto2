// Buscar plantas maduras
exports.findMature = new Promise((resolve, reject) => {

	// Simular la búsqueda de plantas maduras
	let qty = Math.floor(Math.random() * (5-1)) + 1

	resolve(qty)

})