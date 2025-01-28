//Ts Modules

In this project i am asically implimenting Ts Modules in a Nutsheell using very simple examples

# Advancedops.ts

In this file i am using an external Modules-hese modules use the import/export syntax introduced in ECMAScript 6 (ES6)-
export function Multiply(num1: number, num2: number): number {
return num1 \* num2;
}
so in this code i am usign the export keyword to export that function and that is how basically external Modules are implimented.

# Math.ts

In this file we are basically importing the external module and also using the internal module MyBasicArithmetic and using it in the doTheMath() so when the function is called it logs the repsective results from the Operations.

namespace MyBasicArithmetic {
export function add(num1: number, num2: number): number {
return num1 + num2;
}

export function subtract(num1: number, num2: number): number {
return num1 - num2;
}
}
In this file we are implimenting Internal Modules and in this case we use the namespace to group the fuctions and export them inside the namespace so basically thats how internal modules are created and imported. you There is also no need to import a namespace module(Just note to include the namespace in the Global space with the calling function.).

expected output:
13
18
To run this code run CMD then copy this commands(MAke sure you have Node.js intalled and Visual studio code or any IDE of your choice)
=>> git clone https://github.com/jackonshiundu/ts-modules.git
=>> cd ts-modules
=>> code .
=>> npm install
=>> tsc
=>>node Math.js
