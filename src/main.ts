import { Construct } from 'constructs';
import { App, TerraformStack } from 'cdktf';
import * as schema from './generated/schema'

class MyStack extends TerraformStack {
	constructor(scope: Construct, name: string) {
		super(scope, name);

		// define resources here
		schema.
	}
}

const app = new App();
new MyStack(app, 'cdkc7n');
app.synth();
