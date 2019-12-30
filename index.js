const core = require('@actions/core');
const {exec} = require('child_process');
const util = require('util');


exec('pip install -U pip');

exec('pip install poetry');

const createVirtualenv = core.getInput('create-virtualenv');

const createVirtualenvFlag = createVirtualenv.toLocaleLowerCase().trim().startsWith('t') ? 'true' : 'false';

exec(util.format('poetry config virtualenvs.create %s --local', createVirtualenvFlag));

exec('poetry install');