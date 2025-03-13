import { ApiEvent } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import {
  ApiEventGetOptionalParams,
  ApiEventPostOptionalParams,
} from "../models";

/** Class containing ApiEvent operations. */
export class ApiEventImpl implements ApiEvent {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiEvent class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  get(options?: ApiEventGetOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }

  /** @param options The options parameters. */
  post(options?: ApiEventPostOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, postOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/api/Event",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  serializer,
};
const postOperationSpec: coreClient.OperationSpec = {
  path: "/api/Event",
  httpMethod: "POST",
  responses: { 200: {} },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer,
};
