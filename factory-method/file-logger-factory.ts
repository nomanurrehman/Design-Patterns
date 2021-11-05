import { LoggerFactory } from './logger-factory';
import { Logger } from './logger';
import { FileLogger } from './file-logger';

export class FileLoggerFactory extends LoggerFactory {
  public create(): Logger {
    return this.logger ? this.logger : new FileLogger();
  }
}
