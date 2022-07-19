const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  name: 'cdkc7n',
  repositoryUrl: 'https://github.com/gmeligio/cloud-custodian-cdk.git',
  packageName: 'cdkc7n',
  description: 'CDK for Cloud Custodian (CDKC7N)',
  author: 'Eligio Mariño',
  authorUrl: 'https://elig.io',
  cdktfVersion: '^0.11.2',
  defaultReleaseBranch: 'main',
  jest: false,
  mergify: false,
  github: false,
  license: 'MIT',
  deps: [
    'ajv',
    'json-schema-to-typescript',
    'node-jq',
    'shelljs',
    '@swc-node/register',
  ],
  devDeps: [
    '@types/shelljs',
  ],
});

project.synth();
