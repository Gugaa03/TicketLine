import { ApiAuthDeleteNameDeleteOptionalParams } from "../models";

/** Interface representing a ApiAuthDeleteName. */
export interface ApiAuthDeleteName {
  /**
   * @param name
   * @param options The options parameters.
   */
  delete(
    name: string,
    options?: ApiAuthDeleteNameDeleteOptionalParams,
  ): Promise<void>;
}
