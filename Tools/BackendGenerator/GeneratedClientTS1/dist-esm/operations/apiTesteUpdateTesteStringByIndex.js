import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ApiTesteUpdateTesteStringByIndex operations. */
export class ApiTesteUpdateTesteStringByIndexImpl {
    /**
     * Initialize a new instance of the class ApiTesteUpdateTesteStringByIndex class.
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
    path: "/api/Teste/UpdateTesteStringByIndex",
    httpMethod: "POST",
    responses: { 200: {} },
    queryParameters: [Parameters.i, Parameters.newStr],
    urlParameters: [Parameters.$host],
    serializer,
};
//# sourceMappingURL=apiTesteUpdateTesteStringByIndex.js.map