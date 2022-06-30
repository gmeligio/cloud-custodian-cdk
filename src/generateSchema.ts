import { compileFromFile } from 'json-schema-to-typescript';
import * as fs from 'fs';

// compile from file
compileFromFile('./config/schema/aws.json', {
	strictIndexSignatures: true,
}).then((ts) => fs.writeFileSync('./src/generated/awsSchema.ts', ts));
