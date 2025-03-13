import * as coreClient from "@azure/core-client";
import * as coreRestPipeline from "@azure/core-rest-pipeline";
import { ApiAuthRegisterImpl, ApiAuthLoginImpl, ApiAuthLogoutImpl, ApiAuthGetAllUsersImpl, ApiAuthDeleteNameImpl, ApiEventImpl, ApiEventIdImpl, EnableEventImpl, DisabledEventsImpl, ApiTesteHelloWordImpl, ApiTesteTestStringsImpl, ApiTesteGetTesteStringByIndexImpl, ApiTesteUpdateTesteStringByIndexImpl, ApiTesteImpl, ApiTicketBuyImpl, } from "./operations";
export class EventsAPI extends coreClient.ServiceClient {
    /**
     * Initializes a new instance of the EventsAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param $host server parameter
     * @param options The parameter options
     */
    constructor(credentials, $host, options) {
        var _a, _b, _c;
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
        const defaults = {
            requestContentType: "application/json; charset=utf-8",
            credential: credentials,
        };
        const packageDetails = `azsdk-js-eventsAPI/1.0.0-beta.1`;
        const userAgentPrefix = options.userAgentOptions && options.userAgentOptions.userAgentPrefix
            ? `${options.userAgentOptions.userAgentPrefix} ${packageDetails}`
            : `${packageDetails}`;
        if (!options.credentialScopes) {
            options.credentialScopes = ["https://management.azure.com/.default"];
        }
        const optionsWithDefaults = Object.assign(Object.assign(Object.assign({}, defaults), options), { userAgentOptions: {
                userAgentPrefix,
            }, endpoint: (_b = (_a = options.endpoint) !== null && _a !== void 0 ? _a : options.baseUri) !== null && _b !== void 0 ? _b : "{$host}" });
        super(optionsWithDefaults);
        let bearerTokenAuthenticationPolicyFound = false;
        if ((options === null || options === void 0 ? void 0 : options.pipeline) && options.pipeline.getOrderedPolicies().length > 0) {
            const pipelinePolicies = options.pipeline.getOrderedPolicies();
            bearerTokenAuthenticationPolicyFound = pipelinePolicies.some((pipelinePolicy) => pipelinePolicy.name ===
                coreRestPipeline.bearerTokenAuthenticationPolicyName);
        }
        if (!options ||
            !options.pipeline ||
            options.pipeline.getOrderedPolicies().length == 0 ||
            !bearerTokenAuthenticationPolicyFound) {
            this.pipeline.removePolicy({
                name: coreRestPipeline.bearerTokenAuthenticationPolicyName,
            });
            this.pipeline.addPolicy(coreRestPipeline.bearerTokenAuthenticationPolicy({
                credential: credentials,
                scopes: (_c = optionsWithDefaults.credentialScopes) !== null && _c !== void 0 ? _c : `${optionsWithDefaults.endpoint}/.default`,
                challengeCallbacks: {
                    authorizeRequestOnChallenge: coreClient.authorizeRequestOnClaimChallenge,
                },
            }));
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
        this.apiTesteGetTesteStringByIndex = new ApiTesteGetTesteStringByIndexImpl(this);
        this.apiTesteUpdateTesteStringByIndex =
            new ApiTesteUpdateTesteStringByIndexImpl(this);
        this.apiTeste = new ApiTesteImpl(this);
        this.apiTicketBuy = new ApiTicketBuyImpl(this);
    }
}
//# sourceMappingURL=eventsAPI.js.map