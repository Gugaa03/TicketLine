import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing EnableEvent operations. */
export class EnableEventImpl {
    /**
     * Initialize a new instance of the class EnableEvent class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec = {
    path: "/EnableEvent",
    httpMethod: "POST",
    responses: { 200: {} },
    requestBody: Parameters.body3,
    urlParameters: [Parameters.$host],
    headerParameters: [Parameters.contentType],
    mediaType: "json",
    serializer,
};
//# sourceMappingURL=enableEvent.js.map