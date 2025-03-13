import { ApiTesteHelloWord } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteHelloWordGetOptionalParams } from "../models";
/** Class containing ApiTesteHelloWord operations. */
export declare class ApiTesteHelloWordImpl implements ApiTesteHelloWord {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiTesteHelloWord class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    get(options?: ApiTesteHelloWordGetOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiTesteHelloWord.d.ts.map