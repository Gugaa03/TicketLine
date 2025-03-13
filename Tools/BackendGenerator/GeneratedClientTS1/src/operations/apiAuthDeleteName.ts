import { ApiAuthDeleteName } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthDeleteNameDeleteOptionalParams } from "../models";

/** Class containing ApiAuthDeleteName operations. */
export class ApiAuthDeleteNameImpl implements ApiAuthDeleteName {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiAuthDeleteName class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /**
   * @param name
   * @param options The options parameters.
   */
  delete(
    name: string,
    options?: ApiAuthDeleteNameDeleteOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { name, options },
      deleteOperationSpec,
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/api/Auth/Delete/{name}",
  httpMethod: "DELETE",
  responses: { 200: {} },
  urlParameters: [Parameters.$host, Parameters.name],
  serializer,
};
