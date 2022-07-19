import * as fs from 'fs';
import { compileFromFile } from 'json-schema-to-typescript';

// compile from file
compileFromFile('./config/schema/aws.vpc.json', {
  strictIndexSignatures: true,
}).then((ts) => fs.writeFileSync('./src/generated/awsSchema.ts', ts));
