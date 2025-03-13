import { ApiTesteHelloWord } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteHelloWordGetOptionalParams } from "../models";

/** Class containing ApiTesteHelloWord operations. */
export class ApiTesteHelloWordImpl implements ApiTesteHelloWord {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiTesteHelloWord class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  get(options?: ApiTesteHelloWordGetOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, getOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getOperationSpec: coreClient.OperationSpec = {
  path: "/api/Teste/HelloWord",
  httpMethod: "GET",
  responses: { 200: {} },
  urlParameters: [Parameters.$host],
  serializer,
};
