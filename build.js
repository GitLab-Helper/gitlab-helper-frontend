const fs = require('fs');

const PROD = process.env.PROD === 'true' || false;

const filePath = PROD ? '/app/dist/gitlab-helper/browser/config.json' : './apps/gitlab-helper/src/config/config.json';

let rawdata = fs.readFileSync(filePath);
let config = JSON.parse(rawdata);

Object.keys(config).forEach((key) => {
  if (process.env[key.toUpperCase()]) {
    config[key] = process.env[key.toUpperCase()];
  }
});

fs.writeFileSync(filePath, JSON.stringify(config));
