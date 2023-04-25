The language used is Javascript to calculate tax of employee income.

--------------------------------------------------------------------------------------

To start the program, ensure/install the packages listed below in the system.

- "npm install"
- "npm install --save-dev jest"

To run the program type in the terminal
node calculateTax.js 'command_input/{file_name}.txt'
Example: node calculateTax.js 'command_input/inputOne.txt'

To run your own test data, do the following:

- Create a txt file of employee income input in command_input folder 
- On the terminal type: node calculateTax.js 'command_file/{yourFileName}.txt'
- Observe the result

To test the helper function of the program on terminal using Jest case:
type: node --experimental-vm-modules node_modules/.bin/jest

The program will describe each test and will show all test cases passed
including when incorrect input was passed through