import { ApiTesteGetTesteStringByIndex } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteGetTesteStringByIndexPostOptionalParams } from "../models";

/** Class containing ApiTesteGetTesteStringByIndex operations. */
export class ApiTesteGetTesteStringByIndexImpl
  implements ApiTesteGetTesteStringByIndex
{
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiTesteGetTesteStringByIndex class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  post(
    options?: ApiTesteGetTesteStringByIndexPostOptionalParams,
  ): Promise<void> {
    return this.client.sendOperationRequest({ options }, postOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/api/Teste/GetTesteStringByIndex",
  httpMethod: "POST",
  responses: { 200: {} },
  queryParameters: [Parameters.i],
  urlParameters: [Parameters.$host],
  serializer,
};
