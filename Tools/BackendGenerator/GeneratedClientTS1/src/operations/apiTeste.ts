import { ApiTeste } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteDeleteOptionalParams } from "../models";

/** Class containing ApiTeste operations. */
export class ApiTesteImpl implements ApiTeste {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiTeste class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  delete(options?: ApiTesteDeleteOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, deleteOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const deleteOperationSpec: coreClient.OperationSpec = {
  path: "/api/Teste",
  httpMethod: "DELETE",
  responses: { 200: {} },
  queryParameters: [Parameters.i],
  urlParameters: [Parameters.$host],
  serializer,
};
