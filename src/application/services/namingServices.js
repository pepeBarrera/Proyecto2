// Nombrar aleatoriamente una planta
exports.toName = function () {
	let namesAvailable = [
		'Orquidea',
		'Azalea',
		'Girasol',
		'Margarita',
		'Pino',
		'Mariguana',
		'Tulipan',
		'Amapola'
	]
	return namesAvailable[Math.floor(Math.random() * namesAvailable.length)]
}