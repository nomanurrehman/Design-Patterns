import { Transport } from './transport';

export class Notification {
  private readonly content: string;
  private readonly transport: Transport;
  
  constructor(content: string, transport: Transport) {
    this.content = content;
    this.transport = transport;
  }

  public send(): void {
    this.transport.send();
  }
}