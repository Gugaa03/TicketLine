import { ApiEventId } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiEventIdGetOptionalParams, ApiEventIdDeleteOptionalParams, ApiEventIdPutOptionalParams } from "../models";
/** Class containing ApiEventId operations. */
export declare class ApiEventIdImpl implements ApiEventId {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiEventId class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /**
     * @param id
     * @param options The options parameters.
     */
    get(id: number, options?: ApiEventIdGetOptionalParams): Promise<void>;
    /**
     * @param id
     * @param options The options parameters.
     */
    delete(id: number, options?: ApiEventIdDeleteOptionalParams): Promise<void>;
    /**
     * @param id
     * @param options The options parameters.
     */
    put(id: number, options?: ApiEventIdPutOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiEventId.d.ts.map