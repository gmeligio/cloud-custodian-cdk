import * as fs from 'fs';
import * as path from 'path';
// import { compileFromFile } from 'json-schema-to-typescript';
import * as jq from 'node-jq';

const awsVpcSchemaPath = path.resolve(__dirname, './aws_vpc.json');
const awsVpcSchema = fs.readFileSync(awsVpcSchemaPath, 'utf8');

jq.run('.definitions', awsVpcSchema, { input: 'string' }).then((definitions) => {console.debug(definitions);}).catch((err) => {console.error(err);});


// // const newAwsVpcSchema = jsonpath.apply(awsVpcSchema, '$..additionalProperties', (additionalProperties) => additionalProperties == 'False' ? false: additionalProperties,
// // );

// console.debug(newAwsVpcSchema);
// fs.writeFileSync(awsVpcSchemaPath, newAwsVpcSchema);

// // const newVpc = {
// // 	...awsVpc,

// // }

// // Compile from file
// compileFromFile(path.resolve(__dirname, './aws_vpc.json'), {
//   strictIndexSignatures: true,
// }).then((ts) => fs.writeFileSync('./src/generated/awsSchema.ts', ts));
