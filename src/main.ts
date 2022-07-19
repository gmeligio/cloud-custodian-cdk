import { App, TerraformStack } from 'cdktf';
import { Construct } from 'constructs';
import { VpcEndpoint } from './generated/awsSchema';

class MyStack extends TerraformStack {
  constructor(scope: Construct, name: string) {
    super(scope, name);

    // define resources here
    // vpc: VpcEndpoint = new VpcEndpoint();
  }
}

const app = new App();
new MyStack(app, 'cdkc7n');
app.synth();
