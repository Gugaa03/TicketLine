import { ApiEventGetOptionalParams, ApiEventPostOptionalParams } from "../models";
/** Interface representing a ApiEvent. */
export interface ApiEvent {
    /** @param options The options parameters. */
    get(options?: ApiEventGetOptionalParams): Promise<void>;
    /** @param options The options parameters. */
    post(options?: ApiEventPostOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiEvent.d.ts.map