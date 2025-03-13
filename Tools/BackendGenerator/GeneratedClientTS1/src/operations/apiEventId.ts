import { ApiEventId } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import {
  ApiEventIdGetOptionalParams,
  ApiEventIdDeleteOptionalParams,
  ApiEventIdPutOptionalParams,
} from "../models";

/** Class containing ApiEventId operations. */
export class ApiEventIdImpl implements ApiEventId {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiEventId class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  get(id: number, options?: ApiEventIdGetOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ id, options }, getOperationSpec);
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  delete(id: number, options?: ApiEventIdDeleteOptionalParams): Promise<void> {
    return this.client.sendOperationRequest(
      { id, options },
      deleteOperationSpec,
    );
  }

  /**
   * @param id
   * @param options The options parameters.
   */
  put(id: number, options?: ApiEventIdPutOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ id, options }, putOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/api/Event/{id}",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer,
};
const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/api/Event/{id}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  urlParameters: [Parameters.$host, Parameters.id],
  serializer,
};
const putOperationSpec: coreClient.OperationSpec = {
  path: "/api/Event/{Id}",
  httpMethod: "PUT",
  responses: { 200: {} },
  requestBody: Parameters.body2,
  urlParameters: [Parameters.$host, Parameters.id1],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer,
};
