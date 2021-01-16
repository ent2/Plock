import { parse } from "https://deno.land/std@0.83.0/encoding/yaml.ts"
import type { Operator } from "https://denopkg.com/gnlow/yamlow@v0.1.0/mod.ts"

const blocks = {
    when(type: string){}
}
type Block = Operator<typeof blocks, any>[]

interface Project {
    title: string
    code: Block[]
}

const data = parse(await Deno.readTextFile("./test.plock.yaml")) as Project
console.log(data.code)