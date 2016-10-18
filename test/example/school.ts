import * as terminal from "../../src/presenters/terminal"

import {createEntityDefinition} from "../../src/lib/Entity"

const Student = createEntityDefinition("student", [
    {name: "name", required: true}
])

console.log(
    terminal.presentEntityDefinition(Student)
)