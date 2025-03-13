import { ApiAuthLogin } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthLoginPostOptionalParams } from "../models";
/** Class containing ApiAuthLogin operations. */
export declare class ApiAuthLoginImpl implements ApiAuthLogin {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiAuthLogin class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    post(options?: ApiAuthLoginPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiAuthLogin.d.ts.map