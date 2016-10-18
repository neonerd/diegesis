/**
 * Attributes can be tied to any kind of World structure.
 * They have a name and a value.
 */


// ATTRIBUTE
export interface Attribute {
    name: string
    value: any
}

// ATTRIBUTE DEFINITION
interface ValidatorFunc {
    (value: any): boolean
}

interface GeneratorFunc {
    (): any
}

export interface AttributeDefinition {
    name: string
    validate: ValidatorFunc
    generate?: GeneratorFunc
}

export function hasAttribute (name, attributes: Attribute[]): boolean {
    for (const attr of attributes) {
        if(attr.name === name) {
            return true
        }
    }
    return false
}

export function getAttribute (name, attributes: Attribute[]): Attribute {
    for (const attr of attributes) {
        if(attr.name === name) {
            return attr
        }
    }
    throw new Error('Could not find attribute!')
}

export function createAttribute (value: any, definition: AttributeDefinition): Attribute {
    return {
        name: definition.name,
        value
    }
}

export function generateAttribute (definition: AttributeDefinition) {
    return {
        name: definition.name,
        value: definition.generate()
    }
}