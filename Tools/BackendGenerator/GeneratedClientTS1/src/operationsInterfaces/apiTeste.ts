import { ApiTesteDeleteOptionalParams } from "../models";

/** Interface representing a ApiTeste. */
export interface ApiTeste {
  /** @param options The options parameters. */
  delete(options?: ApiTesteDeleteOptionalParams): Promise<void>;
}
