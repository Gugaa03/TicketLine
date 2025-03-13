import { EnableEvent } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { EnableEventPostOptionalParams } from "../models";

/** Class containing EnableEvent operations. */
export class EnableEventImpl implements EnableEvent {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class EnableEvent class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  post(options?: EnableEventPostOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, postOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/EnableEvent",
  httpMethod: "POST",
  responses: { 200: {} },
  requestBody: Parameters.body3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer,
};
