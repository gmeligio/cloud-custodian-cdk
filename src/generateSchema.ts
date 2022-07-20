import * as fs from 'fs';
import * as path from 'path';
import * as sh from 'shelljs';

const awsVpcSchemaPath = path.resolve(__dirname, './aws_vpc.json');

const awsVpcSchemaOutput = sh.exec('custodian-cask schema --json aws.vpc', { silent: true }).stdout;

let awsVpcSchema = deleteFirstLines(awsVpcSchemaOutput, 3);

console.debug(awsVpcSchema);

fs.writeFileSync(awsVpcSchemaPath, awsVpcSchema);

function deleteFirstLines(text: string, count: number): string {
  let output = text;

  while (count--) {
    output = output.substring(output.indexOf('\n') + 1);
  }

  return output;
}