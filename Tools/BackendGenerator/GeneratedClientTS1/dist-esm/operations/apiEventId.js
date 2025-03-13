import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ApiEventId operations. */
export class ApiEventIdImpl {
    /**
     * Initialize a new instance of the class ApiEventId class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @param id
     * @param options The options parameters.
     */
    get(id, options) {
        return this.client.sendOperationRequest({ id, options }, getOperationSpec);
    }
    /**
     * @param id
     * @param options The options parameters.
     */
    delete(id, options) {
        return this.client.sendOperationRequest({ id, options }, deleteOperationSpec);
    }
    /**
     * @param id
     * @param options The options parameters.
     */
    put(id, options) {
        return this.client.sendOperationRequest({ id, options }, putOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec = {
    path: "/api/Event/{id}",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [Parameters.$host, Parameters.id],
    serializer,
};
const deleteOperationSpec = {
    path: "/api/Event/{id}",
    httpMethod: "DELETE",
    responses: { 200: {} },
    urlParameters: [Parameters.$host, Parameters.id],
    serializer,
};
const putOperationSpec = {
    path: "/api/Event/{Id}",
    httpMethod: "PUT",
    responses: { 200: {} },
    requestBody: Parameters.body2,
    urlParameters: [Parameters.$host, Parameters.id1],
    headerParameters: [Parameters.contentType],
    mediaType: "json",
    serializer,
};
//# sourceMappingURL=apiEventId.js.map