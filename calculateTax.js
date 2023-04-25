import { calculateTaxOnIncome } from "./calculateTaxHelper.js";
import fs from "fs";

/**
 * @function readRobotCommands - reads the input command file and starts the main process
 */
const readEmployeeIncome = () => {
	const filePath = process.argv;
	fs.readFile(filePath[2], "utf8", (err, data) => {
		if (err) {
			console.error({ err });
			return;
		}
		const employeeIncome = data;
		calculateTaxOnIncome(employeeIncome);
	});
};

readEmployeeIncome();
