import Ajv from 'ajv';
import * as fs from 'fs';

const schemaString = fs.readFileSync('./config/schema/aws.json', 'utf8');
const schema = JSON.parse(schemaString);
const validator = new Ajv();
if (validator.validateSchema(schema)) {
	console.log('Success: Schema is valid');
} else {
	console.log('Fail: Schema is invalid');
	console.log(validator.errors);
}
