# Advent of Code

https://adventofcode.com

# 2019

## Day 1

https://adventofcode.com/2019/day/1

### Part 1

#### Problem Details

- **INPUT**: Read Input File with mass of each module
  - https://stackabuse.com/reading-a-file-line-by-line-in-node-js/
- Find fuel of each individual module based on mass of each module
- **OUTPUT**: Sum fuel of all modules

Pseudocode

```
# read input file
file = fopen(inputFile)

totalFuelRequired = 0

for (line in file as moduleMass) {
    totalFuelRequired += calcFuelByMass(moduleMass)
}

func calcFuelByMass(mass) {
    fuelOfModule = floor(moduleMass / 3) - 2
}

fuelCounterUpperTotal = sum(fuelOfModuleN1, fuelOfModuleN2, ...)
```

ex:

```
moduleMass = 12

fuelOfModule = floor(12 / 3) - 2
fuelOfModule = floor(4) - 2
fuelOfModule = 4 - 2
fuelOfModule = 2

moduleMass = 1969

fuelOfModule = floor(1969 / 3) - 2
fuelOfModule = floor(656.333) - 2
fuelOfModule = 656 - 2
fuelOfModule = 654
```

### Part 2

Pseudocode

```
# read input file
file = fopen(inputFile)

totalFuelRequired = 0

for (line in file as moduleMass) {
    totalFuelRequired += calcFuelByMass(moduleMass)
}

func calcFuelByMass(mass) {
    fuel = floor(mass / 3) - 2
    if fuel > 0 {
        fuel += calcFuelByMass(fuel)
    }

    if fuel > 0 {
        return fuel
    } else {
        return 0
    }
}

fuelCounterUpperTotal = sum(fuelOfModuleN1, fuelOfModuleN2, ...)
```
