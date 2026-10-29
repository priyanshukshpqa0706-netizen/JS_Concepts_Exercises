let temp = 29;

let feel = (temp>=40) ? "Very Hot" : (temp>=30) ? "Hot" : (temp>=20) ? "Warm" : (temp>=10) ? "Very Cold" : "Cold";

console.log(`Temperature feels like ${feel}`);