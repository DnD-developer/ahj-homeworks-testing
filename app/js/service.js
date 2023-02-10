export default function checkValidInner(valueArray) {
	let sum = 0
	let bEven = false

	for (let n = valueArray.length - 1; n >= 0; n -= 1) {
		let nDigit = valueArray[n]

		if (bEven) {
			nDigit *= 2
			if (nDigit > 9) {
				nDigit -= 9
			}
		}

		sum += nDigit
		bEven = !bEven
	}

	return sum % 10 === 0
}

export function determinationCardOwnerShip(valueArray) {
	const [checkNumber] = valueArray

	switch (checkNumber) {
		case 4:
			return "Visa"
		case 5:
			return "MasterCard"
		case 3:
			return "AmericanExpress"
		case 2:
			return "MIR"
		default:
			break
	}

	return false
}
