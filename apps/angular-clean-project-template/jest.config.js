module.exports = {
  name: 'angular-clean-project-template',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/angular-clean-project-template',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
