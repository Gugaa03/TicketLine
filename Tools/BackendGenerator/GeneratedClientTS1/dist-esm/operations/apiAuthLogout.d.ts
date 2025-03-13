import { ApiAuthLogout } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthLogoutPostOptionalParams } from "../models";
/** Class containing ApiAuthLogout operations. */
export declare class ApiAuthLogoutImpl implements ApiAuthLogout {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiAuthLogout class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    post(options?: ApiAuthLogoutPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiAuthLogout.d.ts.map