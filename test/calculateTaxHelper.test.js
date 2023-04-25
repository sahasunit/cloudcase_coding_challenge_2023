import { expect } from "@jest/globals";
import { calculateTaxOnIncome } from "../calculateTaxHelper";

describe("Testing Calculate Tax Program", () => {
	test("Test 1 - Employee Income: $0, expected 0", () => {
		expect(calculateTaxOnIncome(0)).toEqual(0);
	});
	test("Test 2 - Employee Income: $37000, expected 3572", () => {
		expect(calculateTaxOnIncome(37000)).toEqual(3572);
	});
	test("Test 3 - Employee Income: $90000, expected 20797", () => {
		expect(calculateTaxOnIncome(90000)).toEqual(20797);
	});
	test("Test 4 - Employee Income: $180000, expected 54097", () => {
		expect(calculateTaxOnIncome(180000)).toEqual(54097);
	});
	test("Test 5 - Employee Income: $200000, expected 63097", () => {
		expect(calculateTaxOnIncome(200000)).toEqual(63097);
	});
	test("Test 6 - Employee Income: $23, expected 0", () => {
		expect(calculateTaxOnIncome(23)).toEqual(0);
	});
	test("Test 7 - Employee Income: -$876, expected -1 and warning message", () => {
		expect(calculateTaxOnIncome(-876)).toEqual(-1);
	});
	test("Test 8 - Employee Income: $18201, expected 0.19", () => {
		expect(calculateTaxOnIncome(18201)).toEqual(0.19);
	});
	test("Test 9 - Employee Income: $37001, expected 3572.325", () => {
		expect(calculateTaxOnIncome(37001)).toEqual(3572.325);
	});
	test("Test 10 - Employee Income: $34567, expected 3109.73", () => {
		expect(calculateTaxOnIncome(34567)).toEqual(3109.73);
	});
});
