#!/usr/bin/env node

import { Command } from 'commander';
import { CLI } from './cli/CLI';

const program = new Command();
const cli = new CLI(program);

cli.initialize();
program.parse(process.argv);
