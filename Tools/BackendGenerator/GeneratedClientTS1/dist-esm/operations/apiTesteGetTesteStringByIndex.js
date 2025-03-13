import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ApiTesteGetTesteStringByIndex operations. */
export class ApiTesteGetTesteStringByIndexImpl {
    /**
     * Initialize a new instance of the class ApiTesteGetTesteStringByIndex class.
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
    path: "/api/Teste/GetTesteStringByIndex",
    httpMethod: "POST",
    responses: { 200: {} },
    queryParameters: [Parameters.i],
    urlParameters: [Parameters.$host],
    serializer,
};
//# sourceMappingURL=apiTesteGetTesteStringByIndex.js.map