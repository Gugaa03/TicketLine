import { ApiAuthDeleteName } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthDeleteNameDeleteOptionalParams } from "../models";
/** Class containing ApiAuthDeleteName operations. */
export declare class ApiAuthDeleteNameImpl implements ApiAuthDeleteName {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiAuthDeleteName class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /**
     * @param name
     * @param options The options parameters.
     */
    delete(name: string, options?: ApiAuthDeleteNameDeleteOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiAuthDeleteName.d.ts.map