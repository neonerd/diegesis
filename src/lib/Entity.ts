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

export function entityGetAttribute (entity: Entity, attribute: Attribute): any {
    for (const attr of entity.attributes) {
        if(attr.name == attribute.name) {
            return attr
        }
    }

    return null
}

export function entityHasAttribute (entity: Entity, attribute: Attribute): boolean {
    for (const attr of entity.attributes) {
        if (attr.name == attribute.name) {
            return true
        }
    }

    return false
}

export function createEntityDefinition (name: string, attributes: EntityAttributeDefinition[]): EntityDefinition {
    return {
        name,
        attributes
    }
}
