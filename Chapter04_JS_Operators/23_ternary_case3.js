let environment = "staging";

let baseUrl = environment === "prod" ? "https://api.example.com" : "https://staging.example.com";

console.log(baseUrl);