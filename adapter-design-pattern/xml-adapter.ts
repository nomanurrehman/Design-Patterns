import { RestApiClient } from './rest-api-client';
import { XmlApiClient } from './xml-api-client';

/**
 * Our application works with json apis.
 * Using an XMLAdapter class, we adopt
 * the xml client to make the xml api
 * function as a json api. Request payloads
 * and response data have been left out for
 * brevity but this class is a good contender
 * to convert json payload to xml payload
 * and xml response to json response.
 */

export class XmlAdapter extends RestApiClient {
  private readonly xmlApiClient: XmlApiClient;
  
  constructor(xmlApiClient: XmlApiClient) {
    super();
    this.xmlApiClient = xmlApiClient;  
  }

  get(): void {
    this.xmlApiClient.get();
  }
  
  post(): void {
    this.xmlApiClient.post();
  }
  
  patch(): void {
    this.xmlApiClient.post();
  }
  
  delete(): void {
    this.xmlApiClient.post();
  }
}
