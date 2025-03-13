import { EnableEventPostOptionalParams } from "../models";

/** Interface representing a EnableEvent. */
export interface EnableEvent {
  /** @param options The options parameters. */
  post(options?: EnableEventPostOptionalParams): Promise<void>;
}
