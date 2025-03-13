import { ApiTesteTestStrings } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteTestStringsGetOptionalParams } from "../models";
/** Class containing ApiTesteTestStrings operations. */
export declare class ApiTesteTestStringsImpl implements ApiTesteTestStrings {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiTesteTestStrings class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    get(options?: ApiTesteTestStringsGetOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiTesteTestStrings.d.ts.map