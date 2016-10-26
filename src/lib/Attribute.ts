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
interface AttributeValidatorFunc {
    (value: any): boolean
}

export interface AttributeDefinition {
    name: string
    validate: AttributeValidatorFunc
}

/**
 * Checks a given list for attribute for the desired Attribute.
 */
export function hasAttribute (name, attributes: Attribute[]): boolean {
    for (const attr of attributes) {
        if(attr.name === name) {
            return true
        }
    }
    return false
}

/**
 * Gets the desired attribute from a list of Attributes.
 */
export function getAttribute (name, attributes: Attribute[]): Attribute {
    for (const attr of attributes) {
        if(attr.name === name) {
            return attr
        }
    }
    throw new Error('Could not find attribute!')
}

/**
 * Creates a new attribute.
 */
export function createAttribute (value: any, definition: AttributeDefinition): Attribute {
    return {
        name: definition.name,
        value
    }
}