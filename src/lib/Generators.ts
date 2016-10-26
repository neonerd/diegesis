/**
 * Generator is a function that returns a value.
 * All generators are created via a factory function that returns the generator itself.
 */

interface GeneratorFunc {
  (): any
}

interface NumberGeneratorFunc extends GeneratorFunc {
  (): Number
}

interface GeneratorFactoryFunc {
  (): GeneratorFunc
}

// NUMBER GENERATION
enum IntegerGeneratorDistribution {Random, Gauss}
function integerGenerator (distribution: IntegerGeneratorDistribution, start: Number, end: Number): NumberGeneratorFunc {
  return function () {
    return 1
  }
}

// OPTION GENERATION
interface WeightedOptionDefinition {
  weight: Number
  value: any
}

function optionGenerator (options: any[]): GeneratorFunc {
  return function () {
    return options[0]
  }
}

function weightedOptionGenerator (options: WeightedOptionDefinition[]): GeneratorFunc {
  return function () {

  }
}