import { ApiAuthGetAllUsers } from "../operationsInterfaces";
import { EventsAPI } from "../eventsAPI";
import { ApiAuthGetAllUsersGetOptionalParams } from "../models";
/** Class containing ApiAuthGetAllUsers operations. */
export declare class ApiAuthGetAllUsersImpl implements ApiAuthGetAllUsers {
    private readonly client;
    /**
     * Initialize a new instance of the class ApiAuthGetAllUsers class.
     * @param client Reference to the service client
     */
    constructor(client: EventsAPI);
    /** @param options The options parameters. */
    get(options?: ApiAuthGetAllUsersGetOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiAuthGetAllUsers.d.ts.map