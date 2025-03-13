import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import * as coreAuth from "@azure/core-auth";
import {
  ApiAuthRegisterImpl,
  ApiAuthLoginImpl,
  ApiAuthLogoutImpl,
  ApiAuthGetAllUsersImpl,
  ApiAuthDeleteNameImpl,
  ApiEventImpl,
  ApiEventIdImpl,
  EnableEventImpl,
  DisabledEventsImpl,
  ApiTesteHelloWordImpl,
  ApiTesteTestStringsImpl,
  ApiTesteGetTesteStringByIndexImpl,
  ApiTesteUpdateTesteStringByIndexImpl,
  ApiTesteImpl,
  ApiTicketBuyImpl,
} from "./operations";
import {
  ApiAuthRegister,
  ApiAuthLogin,
  ApiAuthLogout,
  ApiAuthGetAllUsers,
  ApiAuthDeleteName,
  ApiEvent,
  ApiEventId,
  EnableEvent,
  DisabledEvents,
  ApiTesteHelloWord,
  ApiTesteTestStrings,
  ApiTesteGetTesteStringByIndex,
  ApiTesteUpdateTesteStringByIndex,
  ApiTeste,
  ApiTicketBuy,
} from "./operationsInterfaces";
import { EventsAPIOptionalParams } from "./models";

export class EventsAPI extends coreClient.ServiceClient {
  $host: string;

  /**
   * Initializes a new instance of the EventsAPI class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    $host: string,
    options?: EventsAPIOptionalParams,
  ) {
    if (credentials === undefined) {
      throw new Error("'credentials' cannot be null");
    }
    if ($host === undefined) {
      throw new Error("'$host' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: EventsAPIOptionalParams = {
      requestContentType: "application/json; charset=utf-8",
      credential: credentials,
    };

    const packageDetails = `azsdk-js-eventsAPI/1.0.0-beta.1`;
    const userAgentPrefix =
      options.userAgentOptions && options.userAgentOptions.userAgentPrefix
        ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
        : `${packageDetails}`;

    if (!options.credentialScopes) {
      options.credentialScopes = ["https://management.azure.com/.default"];
    }
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      userAgentOptions: {
        userAgentPrefix,
      },
      endpoint: options.endpoint ?? options.baseUri ?? "{$host}",
    };
    super(optionsWithDefaults);

    let bearerTokenAuthenticationPolicyFound: boolean = false;
    if (options?.pipeline && options.pipeline.getOrderedPolicies().length > 0) {
      const pipelinePolicies: coreRestPipeline.PipelinePolicy[] =
        options.pipeline.getOrderedPolicies();
      bearerTokenAuthenticationPolicyFound = pipelinePolicies.some(
        (pipelinePolicy) =>
          pipelinePolicy.name ===
          coreRestPipeline.bearerTokenAuthenticationPolicyName,
      );
    }
    if (
      !options ||
      !options.pipeline ||
      options.pipeline.getOrderedPolicies().length == 0 ||
      !bearerTokenAuthenticationPolicyFound
    ) {
      this.pipeline.removePolicy({
        name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
      });
      this.pipeline.addPolicy(
        coreRestPipeline.bearerTokenAuthenticationPolicy({
          credential: credentials,
          scopes:
            optionsWithDefaults.credentialScopes ??
            `${optionsWithDefaults.endpoint}/.default`,
          challengeCallbacks: {
            authorizeRequestOnChallenge:
              coreClient.authorizeRequestOnClaimChallenge,
          },
        }),
      );
    }
    // Parameter assignments
    this.$host = $host;
    this.apiAuthRegister = new ApiAuthRegisterImpl(this);
    this.apiAuthLogin = new ApiAuthLoginImpl(this);
    this.apiAuthLogout = new ApiAuthLogoutImpl(this);
    this.apiAuthGetAllUsers = new ApiAuthGetAllUsersImpl(this);
    this.apiAuthDeleteName = new ApiAuthDeleteNameImpl(this);
    this.apiEvent = new ApiEventImpl(this);
    this.apiEventId = new ApiEventIdImpl(this);
    this.enableEvent = new EnableEventImpl(this);
    this.disabledEvents = new DisabledEventsImpl(this);
    this.apiTesteHelloWord = new ApiTesteHelloWordImpl(this);
    this.apiTesteTestStrings = new ApiTesteTestStringsImpl(this);
    this.apiTesteGetTesteStringByIndex = new ApiTesteGetTesteStringByIndexImpl(
      this,
    );
    this.apiTesteUpdateTesteStringByIndex =
      new ApiTesteUpdateTesteStringByIndexImpl(this);
    this.apiTeste = new ApiTesteImpl(this);
    this.apiTicketBuy = new ApiTicketBuyImpl(this);
  }

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
