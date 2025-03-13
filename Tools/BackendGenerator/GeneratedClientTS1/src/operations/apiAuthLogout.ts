import { ApiAuthLogout } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthLogoutPostOptionalParams } from "../models";

/** Class containing ApiAuthLogout operations. */
export class ApiAuthLogoutImpl implements ApiAuthLogout {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiAuthLogout class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  post(options?: ApiAuthLogoutPostOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, postOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/api/Auth/Logout",
  httpMethod: "POST",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  serializer,
};
