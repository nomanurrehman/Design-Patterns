import { Transport } from './transport';

export class PushNotificationTransport implements Transport {
  send(content: string): void {
    // code to send notification via push notification 
  }  
}
