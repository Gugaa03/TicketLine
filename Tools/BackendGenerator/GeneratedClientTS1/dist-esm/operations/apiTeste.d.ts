import { ApiTeste } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiTesteDeleteOptionalParams } from "../models";
/** Class containing ApiTeste operations. */
export declare class ApiTesteImpl implements ApiTeste {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiTeste class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    delete(options?: ApiTesteDeleteOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiTeste.d.ts.map