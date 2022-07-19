import * as fs from 'fs';
import * as path from 'path';
import { compileFromFile } from 'json-schema-to-typescript';
import jq from 'node-jq';
// import awsVpcSchema from './aws_vpc.json';

const awsVpcSchemaPath = path.resolve(__dirname, './aws_vpc.json');
const awsVpcSchemaString = fs.readFileSync(awsVpcSchemaPath, 'utf8');
const awsVpcSchema = JSON.parse(awsVpcSchemaString);

// const newAwsVpcSchema = jsonpath.apply(awsVpcSchema, '$..additionalProperties', (additionalProperties) => additionalProperties == 'False' ? false: additionalProperties,
// );

console.debug(newAwsVpcSchema);
fs.writeFileSync(awsVpcSchemaPath, newAwsVpcSchema);

// const newVpc = {
// 	...awsVpc,

// }

// Compile from file
compileFromFile(path.resolve(__dirname, './aws_vpc.json'), {
  strictIndexSignatures: true,
}).then((ts) => fs.writeFileSync('./src/generated/awsSchema.ts', ts));
