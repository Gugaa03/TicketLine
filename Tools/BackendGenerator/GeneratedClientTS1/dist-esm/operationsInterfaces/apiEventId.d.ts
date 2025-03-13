import { ApiEventIdGetOptionalParams, ApiEventIdDeleteOptionalParams, ApiEventIdPutOptionalParams } from "../models";
/** Interface representing a ApiEventId. */
export interface ApiEventId {
    /**
     * @param id
     * @param options The options parameters.
     */
    get(id: number, options?: ApiEventIdGetOptionalParams): Promise<void>;
    /**
     * @param id
     * @param options The options parameters.
     */
    delete(id: number, options?: ApiEventIdDeleteOptionalParams): Promise<void>;
    /**
     * @param id
     * @param options The options parameters.
     */
    put(id: number, options?: ApiEventIdPutOptionalParams): Promise<void>;
}
//# sourceMappingURL=apiEventId.d.ts.map