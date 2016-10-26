/**
 * What is an Entity?
 * Entities are subjects that can initiate actions.
 */

import {Attribute} from "./Attribute"

export interface Entity {
    id: string
    attributes: [Attribute]
}

interface EntityAttributeDefinition {
    name: string
    required: boolean
}

export interface EntityDefinition {
    name: string,
    attributes: EntityAttributeDefinition[]
}

export function createEntityDefinition (name: string, attributes: EntityAttributeDefinition[]): EntityDefinition {
    return {
        name,
        attributes
    }
}

export function createEntity (id: string, definition: EntityDefinition, attributes: [Attribute]): Entity {
    return {
        id,
        attributes
    }
}
