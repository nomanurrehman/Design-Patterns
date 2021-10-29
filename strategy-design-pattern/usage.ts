import { Notification } from './notification';
import { EmailTransport } from './email-transport';
import { PushNotificationTransport } from './push-notification-transport';
import { TextMessageTransport } from './text-message-transport';

/**
 * Available transport types
 */
enum Transport {
  Email = "Email",
  Text = "Text",
  Push = "Push",
}

/**
 * Probably somewhere in your web application,
 * you can fetch user preferences and determine which
 * type of notifications they prefer. You can also generate
 * content for the notification using templates. Here, we
 * are doing that using a bunch of variables to keep things simple
 * and clear.
 */
const content = "Text or Html Content";
const preferredTransport = Transport.Email;
let notification: Notification;

/**
 * Based on the user's preferred transport type,
 * we pass in an instance of a transport object.
 */
switch(preferredTransport as string) {
  case Transport.Push:
    notification = new Notification(content, new PushNotificationTransport());
    break;
  case Transport.Text:
    notification = new Notification(content, new TextMessageTransport());
    break;        
  case Transport.Email:
  default:
    notification = new Notification(content, new EmailTransport());
    break;
}

/**
 * The transport details are encapsulated from the notification.
 * It only knows that it can call a "send" method on the transport
 * interface. The rest of the details(how it is done) is delegated
 * to the respective transport classes.
 */
notification.send();
