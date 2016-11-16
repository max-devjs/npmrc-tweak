#!/usr/bin/env node

const program = require('commander');
const spawn = require('child_process').spawn;

program
	.version('1.0.0')
	.usage('[options]')
	.option('-e, --edit', 'Edit')
	.parse(process.argv);

if (program.edit) {
	edit();
} else {
	show();
}

function show() {
	spawn('npm', ['config', 'list'], {
		stdio: 'inherit',
	});
}

function edit() {
	spawn('npm', ['config', 'edit', 'npmrc'], {
		stdio: 'inherit'
	});
}

module.exports = {
  show: show
};