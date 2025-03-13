import { EnableEvent } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { EnableEventPostOptionalParams } from "../models";
/** Class containing EnableEvent operations. */
export declare class EnableEventImpl implements EnableEvent {
    private readonly client;
    /**
     * Initialize a new instance of the class EnableEvent class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    post(options?: EnableEventPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=enableEvent.d.ts.map