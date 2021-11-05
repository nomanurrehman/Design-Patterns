import { Logger } from './logger';

export class FileLogger implements Logger {
  read(): string {
    return 'Log line read from file...';
  }
  
  write(): void {
    console.log('Log line written to file...');
  }  
}
