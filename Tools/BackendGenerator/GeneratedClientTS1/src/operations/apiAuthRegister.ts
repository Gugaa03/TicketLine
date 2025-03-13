import { ApiAuthRegister } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthRegisterPostOptionalParams } from "../models";

/** Class containing ApiAuthRegister operations. */
export class ApiAuthRegisterImpl implements ApiAuthRegister {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiAuthRegister class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  post(options?: ApiAuthRegisterPostOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, postOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/api/Auth/Register",
  httpMethod: "POST",
  responses: { 200: {} },
  requestBody: Parameters.body,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer,
};
