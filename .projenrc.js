const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Eligio Mariño',
  authorAddress: 'gmeligio@gmail.com',
  cdktfVersion: '^0.11.2',
  defaultReleaseBranch: 'main',
  name: 'cdkc7n',
  repositoryUrl: 'https://github.com/gmeligio/cdkc7n.git',
  jest: false,
  mergify: false,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();