import * as coreClient from "@azure/core-client";
import * as coreAuth from "@azure/core-auth";
import { ApiAuthRegister, ApiAuthLogin, ApiAuthLogout, ApiAuthGetAllUsers, ApiAuthDeleteName, ApiEvent, ApiEventId, EnableEvent, DisabledEvents, ApiTesteHelloWord, ApiTesteTestStrings, ApiTesteGetTesteStringByIndex, ApiTesteUpdateTesteStringByIndex, ApiTeste, ApiTicketBuy } from "./operationsInterfaces";
import { EventsAPIOptionalParams } from "./models";
export declare class EventsAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the EventsAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param $host server parameter
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, $host: string, options?: EventsAPIOptionalParams);
    apiAuthRegister: ApiAuthRegister;
    apiAuthLogin: ApiAuthLogin;
    apiAuthLogout: ApiAuthLogout;
    apiAuthGetAllUsers: ApiAuthGetAllUsers;
    apiAuthDeleteName: ApiAuthDeleteName;
    apiEvent: ApiEvent;
    apiEventId: ApiEventId;
    enableEvent: EnableEvent;
    disabledEvents: DisabledEvents;
    apiTesteHelloWord: ApiTesteHelloWord;
    apiTesteTestStrings: ApiTesteTestStrings;
    apiTesteGetTesteStringByIndex: ApiTesteGetTesteStringByIndex;
    apiTesteUpdateTesteStringByIndex: ApiTesteUpdateTesteStringByIndex;
    apiTeste: ApiTeste;
    apiTicketBuy: ApiTicketBuy;
}
//# sourceMappingURL=eventsAPI.d.ts.map