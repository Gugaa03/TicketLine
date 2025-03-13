import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ApiAuthDeleteName operations. */
export class ApiAuthDeleteNameImpl {
    /**
     * Initialize a new instance of the class ApiAuthDeleteName class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @param name
     * @param options The options parameters.
     */
    delete(name, options) {
        return this.client.sendOperationRequest({ name, options }, deleteOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const deleteOperationSpec = {
    path: "/api/Auth/Delete/{name}",
    httpMethod: "DELETE",
    responses: { 200: {} },
    urlParameters: [Parameters.$host, Parameters.name],
    serializer,
};
//# sourceMappingURL=apiAuthDeleteName.js.map