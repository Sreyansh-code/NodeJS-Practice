// Accept two numbers through CLI and print it's sum


const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please provide valid numbers.");
  process.exit(1);
}

const sum = num1 + num2;

console.log("Sum:", sum);