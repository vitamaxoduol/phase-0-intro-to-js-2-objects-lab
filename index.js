// Write your solution in this file!
let employee = {
    name: "Grace Hopper",
    streetAddress: "AGH1234"
}
// function updateEmployeeWithKeyAndValue(employee, key, value) {
//   let newEmployee = { ...employee };
//   newEmployee = { ...newEmployee, [key]: value }; 
//   return newEmployee // Return the newEmployee object
// }
// let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Tom Mboya');
// console.log(updatedEmployee);
// OR
function updateEmployeeWithKeyAndValue(employee, key, value) {
  let newEmployee = Object.assign({}, employee);// Create a new object to clone the original employee object
  newEmployee[key] = value;
  return newEmployee;
}
let updatedEmployee = updateEmployeeWithKeyAndValue(employee, 'streetAddress', 'Tom Mboya');
console.log(updatedEmployee);

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)  {
    employee[key] = value;
    return employee; //The updated employee object
  }

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };// A new object is created using spread operator
    delete newEmployee[key];
    return newEmployee;
}
deleteFromEmployeeByKey(employee, key);

function destructivelyDeleteFromEmployeeByKey(employee, key) {

    delete employee[key]; // Delete the property with the specified key from the employee object
    return employee; //  Mutated employee object
}
destructivelyDeleteFromEmployeeByKey(employee, key)
