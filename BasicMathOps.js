"use strict";
//in this file we are implimenting the concept of internal modules
//essentialy  Code is logically grouped using namespaces within a single file. Everything within the namespace is scoped under that namespace, avoiding global scope pollution. so there is not import or expors here.
//Internal modules were used to avoid global namespace pollution by creating a scoped module.
// Define the namespace without needing to import/export
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
