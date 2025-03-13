import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
/** Class containing ApiAuthLogout operations. */
export class ApiAuthLogoutImpl {
    /**
     * Initialize a new instance of the class ApiAuthLogout class.
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
    path: "/api/Auth/Logout",
    httpMethod: "POST",
    responses: { 200: {} },
    urlParameters: [Parameters.$host],
    serializer,
};
//# sourceMappingURL=apiAuthLogout.js.map