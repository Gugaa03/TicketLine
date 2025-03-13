import { ApiAuthLoginPostOptionalParams } from "../models";

/** Interface representing a ApiAuthLogin. */
export interface ApiAuthLogin {
  /** @param options The options parameters. */
  post(options?: ApiAuthLoginPostOptionalParams): Promise<void>;
}
