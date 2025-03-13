import { ApiEvent } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiEventGetOptionalParams, ApiEventPostOptionalParams } from "../models";
/** Class containing ApiEvent operations. */
export declare class ApiEventImpl implements ApiEvent {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiEvent class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    get(options?: ApiEventGetOptionalParams): Promise<void>;
    /** @param options The options parameters. */
    post(options?: ApiEventPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiEvent.d.ts.map