import { Transport } from './transport';

export class TextMessageTransport implements Transport {
  send(content: string): void {
    // code to send notification via text message
  }  
}
