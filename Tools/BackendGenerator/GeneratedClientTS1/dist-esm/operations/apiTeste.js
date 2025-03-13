import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ApiTeste operations. */
export class ApiTesteImpl {
    /**
     * Initialize a new instance of the class ApiTeste class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    delete(options) {
        return this.client.sendOperationRequest({ options }, deleteOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const deleteOperationSpec = {
    path: "/api/Teste",
    httpMethod: "DELETE",
    responses: { 200: {} },
    queryParameters: [Parameters.i],
    urlParameters: [Parameters.$host],
    serializer,
};
//# sourceMappingURL=apiTeste.js.map