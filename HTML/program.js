// Number -> Any numberical value from Positive, Negative, Fractional, Decimals

// To create a Variable (Temp storage)
// Synax 
// var Variable_Name = Value; 
// Variable_Name -> Any valid text, it should be a-z, A-Z, 0-9, _, $

var age = 28;
console.log(age);

// String -> Any text value which is types inside '' or "" 

var email_id_1 = "karthick123.afx@gmail.com";  

var email_id_2 = "dummy@test.com";

console.log(email_id_1);
console.log(email_id_2);

var text = 'This is my "book" Reference';
console.log(text);

// Boolean -> It should be true or false;
var result = true;
console.log(result);

// undefined -> A variable will be initialized but value will not be assigned
var future_result;
console.log(future_result);


//Student Informations
var first_name = "karthick";
var last_name = "kumar";
var roll_number = "2335DFEG454";
var english_score = 75;
var math_score = 80;

//Change a variable value
first_name = "Mr.ABC";

//Clear the value from a Variable
first_name = undefined;


console.log(first_name);
// Object -> It is a collection of key and value (collection of property)
// syntax
// var variable_name = { 
//   key_1 : value_1,
//   key_2 : value_2
// };

// key -> It is similar to variable_name -> It should contains a-z, A-Z, 0-9, _, $
// value -> Number, string, Boolean, undefined, object, array

var student_information = {
  first_name : "karthick",
  last_name : "kumar",
  roll_number : "2335DFEG454",
  english_score : 78,
  math_score: 85
};

console.log(student_information);

// Operations in Object -> Read value, Insert value, Update value, Delete value

// To Read a value from Object
// Syntax
// object_variable_name.key; 
console.log(student_information.first_name);

// To Insert a new value into the Object
// Syntax
// object_variable_name.newKey = value;
student_information.blood_group = "A +ve";

// To Update a value from the Object
// syntax 
// object_variable_name.key = new value;
student_information.roll_number = "ABC1234354";

// To Delete a value from an Object 
// syntax
// delete object_variable_name.key;
delete student_information.first_name;

console.log(student_information);

// Array -> It is a collection of data (List of data)
// syntax
// var variable_name = [value1, value2, value3, ... , valueN];
// value -> Number, String, Boolean, undefined, Object, Array

var list_of_score = [98, 75, 57, 124, 978]; 
console.log(list_of_score);

var name_list = ["adasdas", "ewfrwer", "tert", "yrttgr"];
console.log(name_list);

var student_list = [
  {name : "Mr.ABC", age : 24},
  {name : "Mr.XYZ", age : 25},
  {name : "Mr.UIO", age : 27}
];

console.log(student_list);

// Operations in Array -> Read value, Insert value, Update value, Delete value

// To Read a value from Array
// syntax 
// array_variable_name[index] 
console.log(student_list[1])

// To insert a value into Array
// synax
// push -> Value will be inserted at end of the Array list
// array_variable_name.push(value1, value2, value3, ... , valueN);
student_list.push({name : "karthick", age: 27});

// unshift -> Values will be inserted at start of the Array list
// array_variable_name.unshift(value1, value2, value3, ... , valueN);
student_list.unshift({name : "zyan", age: 22});

// To update an Array value
// syntax 
// array_variable_name[index] = new Value;
student_list[2] = {name: "Zyan", age: 22};

// To delete a value from Array
// syntax 
// array_variable_name.splice(index, deleteCount);
student_list.splice(2, 1);

// Function -> Used to write a block of Code

// Syntax for Creating a Function (Function Definition)

// function function_name(){
//    define all our code
// }

// function_name -> It should be a proper text, it should include a-z, A-Z, 0-9, _ , $

// Syntax for Executing/Running the Function (Function Invocation)

// function_name();

function login(){
  var result = "You have loggin to the application";
  console.log(result);
}

function logout(){
  var value = "You have been Loggout!"
  console.log(value);
}

// Operators
// 1. Arithmetic Operator +, -, *, /, %, ++, --
// 2. Assignment Operator =
// 3. Comparision Operator <, <=, >, >=, ==, ===, !=, !== 
// 4. Logical Operator  &&, ||, !

// && - AND
// true && true -> true
// true && false -> false
// false && true -> false
// false && false -> false

// || - OR
// true || true -> true
// false || true -> true
// true || false -> true
// false || false -> false

// ! - NOT
// ! true -> false
// ! false -> true