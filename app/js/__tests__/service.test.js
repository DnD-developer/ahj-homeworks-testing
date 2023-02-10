import checkValidInner, { determinationCardOwnerShip } from "../service"

describe("Test function for validation card number", () => {
	test("test checkvalidInner for true", () => {
		const result = checkValidInner([5, 5, 3, 6, 9, 1, 4, 1, 7, 5, 7, 0, 6, 7, 6, 5])

		expect(result).toBe(true)
	})

	test("test checkvalidInner for false", () => {
		const result = checkValidInner([5, "d", "rew", 5])

		expect(result).toBe(false)
	})
})

describe("Test function for difine pay system", () => {
	test.each([
		{ cardNumber: [4, 7, 1, 6, 5, 0, 0, 4, 1, 4, 5, 1, 5, 9, 7, 9], result: "Visa" },
		{ cardNumber: [5, 7, 1, 6, 5, 0, 0, 4, 1, 4, 5, 1, 5, 9, 7, 9], result: "MasterCard" },
		{ cardNumber: [3, 7, 1, 6, 5, 0, 0, 4, 1, 4, 5, 1, 5, 9, 7, 9], result: "AmericanExpress" },
		{ cardNumber: [2, 7, 1, 6, 5, 0, 0, 4, 1, 4, 5, 1, 5, 9, 7, 9], result: "MIR" },
		{ cardNumber: [1, 7, 1, 6, 5, 0, 0, 4, 1, 4, 5, 1, 5, 9, 7, 9], result: false }
	])("test $cardNumber", ({ cardNumber, result }) => {
		const resulting = determinationCardOwnerShip(cardNumber)

		expect(resulting).toBe(result)
	})
})
