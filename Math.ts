import { Multiply } from "./Advancedops";

namespace MyBasicArithmetic {
  export function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  export function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
}
function doTheMath() {
  let sum = MyBasicArithmetic.add(5, 8);
  console.log(sum);
  let Multiplication = Multiply(3, 6);
  console.log(Multiplication);
}

doTheMath();

//Modules
