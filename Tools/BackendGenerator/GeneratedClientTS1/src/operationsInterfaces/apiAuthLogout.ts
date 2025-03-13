import { ApiAuthLogoutPostOptionalParams } from "../models";

/** Interface representing a ApiAuthLogout. */
export interface ApiAuthLogout {
  /** @param options The options parameters. */
  post(options?: ApiAuthLogoutPostOptionalParams): Promise<void>;
}
