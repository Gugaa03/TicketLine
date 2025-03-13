import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ApiTesteHelloWord operations. */
export class ApiTesteHelloWordImpl {
    /**
     * Initialize a new instance of the class ApiTesteHelloWord class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    get(options) {
        return this.client.sendOperationRequest({ options }, getOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec = {
    path: "/api/Teste/HelloWord",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [Parameters.$host],
    serializer,
};
//# sourceMappingURL=apiTesteHelloWord.js.map