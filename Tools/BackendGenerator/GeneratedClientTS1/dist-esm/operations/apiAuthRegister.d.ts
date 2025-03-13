import { ApiAuthRegister } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthRegisterPostOptionalParams } from "../models";
/** Class containing ApiAuthRegister operations. */
export declare class ApiAuthRegisterImpl implements ApiAuthRegister {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiAuthRegister class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    post(options?: ApiAuthRegisterPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiAuthRegister.d.ts.map