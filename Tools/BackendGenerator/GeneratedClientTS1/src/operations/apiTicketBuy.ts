import { ApiTicketBuy } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { EventsAPI } from "../eventsAPI";
import { ApiTicketBuyPostOptionalParams } from "../models";

/** Class containing ApiTicketBuy operations. */
export class ApiTicketBuyImpl implements ApiTicketBuy {
  private readonly client: EventsAPI;

  /**
   * Initialize a new instance of the class ApiTicketBuy class.
   * @param client Reference to the service client
   */
  constructor(client: EventsAPI) {
    this.client = client;
  }

  /** @param options The options parameters. */
  post(options?: ApiTicketBuyPostOptionalParams): Promise<void> {
    return this.client.sendOperationRequest({ options }, postOperationSpec);
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const postOperationSpec: coreClient.OperationSpec = {
  path: "/api/Ticket/Buy",
  httpMethod: "POST",
  responses: { 200: {} },
  requestBody: Parameters.body4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.contentType],
  mediaType: "json",
  serializer,
};
