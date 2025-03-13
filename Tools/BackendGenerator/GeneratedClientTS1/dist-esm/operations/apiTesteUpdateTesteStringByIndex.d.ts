import { ApiTesteUpdateTesteStringByIndex } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteUpdateTesteStringByIndexPostOptionalParams } from "../models";
/** Class containing ApiTesteUpdateTesteStringByIndex operations. */
export declare class ApiTesteUpdateTesteStringByIndexImpl implements ApiTesteUpdateTesteStringByIndex {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiTesteUpdateTesteStringByIndex class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    post(options?: ApiTesteUpdateTesteStringByIndexPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiTesteUpdateTesteStringByIndex.d.ts.map