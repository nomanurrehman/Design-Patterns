import { FileLoggerFactory } from './file-logger-factory';
import { DatabaseLoggerFactory } from './database-logger-factory';
import { Logger } from './logger';

function doSomething(factory: Logger): void {
  console.log(factory.read());
  factory.write();  
}

const databaseLoggerFactory: DatabaseLoggerFactory = new DatabaseLoggerFactory();
const fileLoggerFactory: FileLoggerFactory = new FileLoggerFactory();

doSomething(databaseLoggerFactory);
doSomething(fileLoggerFactory);
