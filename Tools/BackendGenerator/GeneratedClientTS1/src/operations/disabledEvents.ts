import { DisabledEvents } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { DisabledEventsGetOptionalParams } from "../models";

/** Class containing DisabledEvents operations. */
export class DisabledEventsImpl implements DisabledEvents {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class DisabledEvents class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  get(options?: DisabledEventsGetOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/DisabledEvents",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer,
};
