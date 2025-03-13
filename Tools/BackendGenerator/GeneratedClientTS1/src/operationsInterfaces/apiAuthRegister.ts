import { ApiAuthRegisterPostOptionalParams } from "../models";

/** Interface representing a ApiAuthRegister. */
export interface ApiAuthRegister {
  /** @param options The options parameters. */
  post(options?: ApiAuthRegisterPostOptionalParams): Promise<void>;
}
