// Write your solution in this file!
let employee = {
    name: "Grace Hopper",
    streetAddress: "AGH1234"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object to clone the original employee object
    let newEmployee = Object.assign({}, employee);
  
    // Update the newEmployee object with the new key-value pair
    newEmployee[key] = value;
  
    // Return the newEmployee object
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
