let statusCode = 400;

let responseGet = (statusCode < 300) ? "Sucess" : (statusCode < 400) ? "Redirect" : (statusCode<500) ? "Client Error" : "Server Error";

console.log(responseGet);