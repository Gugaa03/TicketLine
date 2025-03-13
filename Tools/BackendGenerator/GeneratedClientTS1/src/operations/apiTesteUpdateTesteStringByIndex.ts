import { ApiTesteUpdateTesteStringByIndex } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteUpdateTesteStringByIndexPostOptionalParams } from "../models";

/** Class containing ApiTesteUpdateTesteStringByIndex operations. */
export class ApiTesteUpdateTesteStringByIndexImpl
  implements ApiTesteUpdateTesteStringByIndex
{
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiTesteUpdateTesteStringByIndex class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  post(
    options?: ApiTesteUpdateTesteStringByIndexPostOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest({ options }, postOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/api/Teste/UpdateTesteStringByIndex",
  httpMethod: "POST",
  responses: { 200: {} },
  queryParameters: [Parameters.i, Parameters.newStr],
  urlParameters: [Parameters.$host],
  serializer,
};
