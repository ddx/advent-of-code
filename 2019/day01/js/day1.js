const fs = require("fs");
const readline = require("readline");

console.log("Advent of Code Day 1");

const readInterface = readline.createInterface({
  input: fs.createReadStream(
    "/Users/deven/code/advent-of-code/2019/day01/input"
  ),
  console: false
});

var totalFuelRequired = 0;
readInterface.on("line", function(moduleMass) {
  totalFuelRequired += calcFuelByMass(moduleMass);
  console.log("Total fuel required: " + totalFuelRequired);
});

function calcFuelByMass(mass) {
  fuel = Math.floor(mass / 3) - 2;
  return fuel;
}
