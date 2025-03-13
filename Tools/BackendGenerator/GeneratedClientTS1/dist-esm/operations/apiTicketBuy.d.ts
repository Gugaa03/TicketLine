import { ApiTicketBuy } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiTicketBuyPostOptionalParams } from "../models";
/** Class containing ApiTicketBuy operations. */
export declare class ApiTicketBuyImpl implements ApiTicketBuy {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiTicketBuy class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    post(options?: ApiTicketBuyPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiTicketBuy.d.ts.map