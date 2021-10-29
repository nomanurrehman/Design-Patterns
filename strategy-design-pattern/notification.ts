import { Transport } from './transport';

export class Notification {
  private readonly content: string;
  private readonly transport: Transport;
  
  constructor(content: string, transport: Transport) {

  }

  public send(): void {
    this.transport.send();
  }
}