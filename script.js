let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  function PrintDeveloper() {
    const developers = arr.filter(employee => employee.profession === 'developer');
    console.log('Developers:', developers);
  }
  
  function addData() {
    const newEmployee = { id: 4, name: 'susan', age: '20', profession: 'intern' };
    arr.push(newEmployee);
    console.log('Array after adding new employee:', arr);
  }
  
  function removeAdmin() {
    const filteredEmployees = arr.filter(employee => employee.profession !== 'admin');
    arr.length = 0; // Clear the existing array
    arr.push(...filteredEmployees); // Add the filtered employees back
    console.log('Array after removing admin employees:', arr);
  }
  
  function concatenateArray() {
    const additionalEmployees = [
      { id: 5, name: 'mark', age: '22', profession: 'developer' },
      { id: 6, name: 'lisa', age: '21', profession: 'admin' },
    ];
  
    arr = arr.concat(additionalEmployees);
    console.log('Array after concatenation:', arr);
  }
  
  // Example function to console.log the array
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
  }
  
  // Calling this function will display the initial state of the array in the console
  consoleArr();
  