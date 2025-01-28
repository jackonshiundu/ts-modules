"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MyBasicArithmetic;
(function (MyBasicArithmetic) {
    function add(num1, num2) {
        return num1 + num2;
    }
    MyBasicArithmetic.add = add;
    function subtract(num1, num2) {
        return num1 - num2;
    }
    MyBasicArithmetic.subtract = subtract;
})(MyBasicArithmetic || (MyBasicArithmetic = {}));
const Advancedops_1 = require("./Advancedops");
function doTheMath() {
    let sum = MyBasicArithmetic.add(5, 8);
    console.log(sum);
    let Multiplication = (0, Advancedops_1.Multiply)(3, 6);
    console.log(Multiplication);
}
doTheMath();
//Modules
