//in this file we are implimenting the concept of internal modules
//essentialy  Code is logically grouped using namespaces within a single file. Everything within the namespace is scoped under that namespace, avoiding global scope pollution. so there is not import or expors here.
//Internal modules were used to avoid global namespace pollution by creating a scoped module.
// Define the namespace without needing to import/export
namespace MyBasicArithmetic {
  export function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  export function subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
}
