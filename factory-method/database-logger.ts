import { Logger } from './logger';

export class DatabaseLogger implements Logger {
  read(): string {
    return 'Log line read from database...';
  }
  
  write(): void {
    console.log('Log line written to database...');
  }  
}
