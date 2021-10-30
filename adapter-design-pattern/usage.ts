import { RestApiClient } from './rest-api-client';
import { XmlApiClient } from './xml-api-client';
import { XmlAdapter } from './xml-adapter';

const restClient: RestApiClient = new RestApiClient();
const xmlClient: XmlApiClient = new XmlApiClient();
const xmlAdapter: XmlAdapter = new XmlAdapter(xmlClient);

/**
 * Somewhere in our application, a
 * RestApiClient object can be interchanged
 * for an XmlAdapter object. The details are
 * encapsulated from the code using the classes.
 */

/**
 * Operating with a RestApiClient object
 */
let client: RestApiClient = restClient;
client.get();
client.post();
client.patch();
client.delete();

/**
 * Operating with an XmlAdapter object
 */
client = xmlAdapter;
client.get();
client.post();
client.patch();
client.delete();
