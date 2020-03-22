const {execSync} = require('child_process');


console.log('pip install -U pip...');
execSync('pip install -U pip', (error, stdout, stderr) => {
  if (error) {
    console.error(`execSync error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});

console.log('pip install poetry...');
execSync('pip install poetry', (error, stdout, stderr) => {
  if (error) {
    console.error(`execSync error: ${error}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});


console.log('poetry install...');
execSync('poetry install', (error, stdout, stderr) => {
  if (error) {
    console.error(`execSync error: ${error}`);
    console.error(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
  console.error(`stderr: ${stderr}`);
});