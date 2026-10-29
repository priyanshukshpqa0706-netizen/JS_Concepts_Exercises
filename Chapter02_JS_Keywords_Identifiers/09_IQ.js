// ============================================
// JavaScript Identifier Rules - IQ
// ============================================

let validName = "starts with letter";    //accepted
let _private = "starts with underscore";  //accepted
let $jquery = "starts with dollar sign";  //accepted


let item1 = "letter then digit";   //accepted
let _temp2 = "underscore then digit";  //accepted
let $var123 = "dollar then digits";  //accepted
let a1_b2 = "mixed letters digits underscore";  //accepted

// let 1stPlace = "invalid";
// let 2ndItem = "invalid";

// let function = "invalid"; 
// let function = "invalid"; but it actually works. Function is a built-in name, not a reserved word
let MyVar = "uppercase M";
let myvar = "lowercase v";


let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A";
let \u005f = "Unicode escape for _";


// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";
function Person() { return "constructor"; }

// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";