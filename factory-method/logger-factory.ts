import { Logger } from './logger';

export abstract class LoggerFactory {
  protected logger: Logger;  

  public abstract create(): Logger;
  
  public read(): string {
    this.logger = this.create();
    return this.logger.read();
  }

  public write(): void {
    this.logger = this.create();
    return this.logger.write();
  }
}
