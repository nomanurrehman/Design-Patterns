import { Transport } from './transport';

export class EmailTransport implements Transport {
  send(content: string): void {
    // code to send notification via email
  }  
}
