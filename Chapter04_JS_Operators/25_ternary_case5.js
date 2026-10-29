let responseTime = 850;
let sla = 1000;

let slaResponse = responseTime<=sla ? "Within SLA" : "Breached SLA";

console.log(`SLA ResponseTime is ${slaResponse}`);
console.log(`The SLA time is ${sla} ms`);