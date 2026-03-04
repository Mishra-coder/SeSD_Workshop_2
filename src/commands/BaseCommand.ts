import { Command } from 'commander';

export abstract class BaseCommand {
  protected program: Command;

  constructor(program: Command) {
    this.program = program;
  }

  abstract register(): void;
}
