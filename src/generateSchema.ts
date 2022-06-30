import { compileFromFile } from 'json-schema-to-typescript';
import * as fs from 'fs';
		
// compile from file
compileFromFile('./config/schema.json').then((ts) =>
    fs.writeFileSync('./src/generated/schema.d.ts', ts)
);