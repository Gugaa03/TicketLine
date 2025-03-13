import { DisabledEvents } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { DisabledEventsGetOptionalParams } from "../models";
/** Class containing DisabledEvents operations. */
export declare class DisabledEventsImpl implements DisabledEvents {
    private readonly client;
    /**
     * Initialize a new instance of the class DisabledEvents class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    get(options?: DisabledEventsGetOptionalParams): Promise<void>;
}
//# sourceMappingURL=disabledEvents.d.ts.map