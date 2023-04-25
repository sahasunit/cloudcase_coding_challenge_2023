/**
 *
 * @param employeeIncome - Calculate tax, based on employee income
 */
export const calculateTaxOnIncome = (employeeIncome) => {
	//Display welcome and employee income message
	displayWelcomeScreen(employeeIncome);
	let taxPayable = 0;

	if (employeeIncome < 0) {
		console.log("Employee income cannot be in negative.");
		return -1;
	}

	if (employeeIncome <= 18200) {
		console.log("Tax Payable: $" + taxPayable);
		return taxPayable;
	}
	if (18200 < employeeIncome && employeeIncome <= 37000) {
		const additionalTaxableAmount = employeeIncome - 18200;
		taxPayable = 0.19 * additionalTaxableAmount;
		console.log("Tax Payable: $" + taxPayable);
		return taxPayable;
	}
	if (37000 < employeeIncome && employeeIncome <= 90000) {
		const additionalTaxableAmount = employeeIncome - 37000;
		taxPayable = 0.325 * additionalTaxableAmount + 3572;
		console.log("Tax Payable: $" + taxPayable);
		return taxPayable;
	}
	if (90000 < employeeIncome && employeeIncome <= 180000) {
		const additionalTaxableAmount = employeeIncome - 90000;
		taxPayable = 0.37 * additionalTaxableAmount + 20797;
		console.log("Tax Payable: $" + taxPayable);
		return taxPayable;
	}

	if (employeeIncome > 180000) {
		const additionalTaxableAmount = employeeIncome - 180000;
		taxPayable = 0.45 * additionalTaxableAmount + 54097;
		console.log("Tax Payable: $" + taxPayable);
		return taxPayable;
	}
	return taxPayable;
};

/**
 *
 * Welcome screen to show the program has started and processing the tax
 */
const displayWelcomeScreen = (employeeIncome) => {
	console.log("\nWelcome to Cloudcase Coding Challenge!");
	console.log("The Employee Income Recorded Is: $" + employeeIncome + "\n");
};
