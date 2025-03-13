import { ApiTesteGetTesteStringByIndex } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteGetTesteStringByIndexPostOptionalParams } from "../models";
/** Class containing ApiTesteGetTesteStringByIndex operations. */
export declare class ApiTesteGetTesteStringByIndexImpl implements ApiTesteGetTesteStringByIndex {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiTesteGetTesteStringByIndex class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    post(options?: ApiTesteGetTesteStringByIndexPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiTesteGetTesteStringByIndex.d.ts.map