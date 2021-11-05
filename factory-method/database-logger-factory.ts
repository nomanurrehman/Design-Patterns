import { LoggerFactory } from './logger-factory';
import { Logger } from './logger';
import { DatabaseLogger } from './database-logger';

export class DatabaseLoggerFactory extends LoggerFactory {
  public create(): Logger {
    return this.logger ? this.logger : new DatabaseLogger();
  }
}
