const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Eligio Mariño',
  authorUrl: 'https://elig.io',
  cdktfVersion: '^0.11.2',
  defaultReleaseBranch: 'main',
  name: 'cdkc7n',
  repositoryUrl: 'https://github.com/gmeligio/cloud-custodian-cdk.git',
  jest: false,
  mergify: false,
  github: false,
  license: 'MIT',
  deps: [
    'ajv',
    'json-schema-to-typescript',
  ],
  description: 'CDK for Cloud Custodian (CDKC7N)',
  packageName: 'cdkc7n',
});

project.synth();
