import {Entity, EntityDefinition} from "../lib/Entity"

export function presentEntityDefinition (entityDefinition: EntityDefinition): string {
    return `Entity Definition: ${ entityDefinition.name }
    ========
    Attributes:
    ${ entityDefinition.attributes.map(attribute => `Name: ${ attribute.name }, Required? ${ attribute.required }`) }`
}

export function presentEntity (entity: Entity): string {
    
    return ``
}