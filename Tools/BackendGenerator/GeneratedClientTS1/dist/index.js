'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var coreClient = require('@azure/core-client');
var coreRestPipeline = require('@azure/core-rest-pipeline');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var coreClient__namespace = /*#__PURE__*/_interopNamespace(coreClient);
var coreRestPipeline__namespace = /*#__PURE__*/_interopNamespace(coreRestPipeline);

const UserDetails = {
    type: {
        name: "Composite",
        className: "UserDetails",
        modelProperties: {
            userName: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "userName",
                required: true,
                type: {
                    name: "String",
                },
            },
            password: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "password",
                required: true,
                type: {
                    name: "String",
                },
            },
            email: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "email",
                required: true,
                type: {
                    name: "String",
                },
            },
        },
    },
};
const LoginCredentials = {
    type: {
        name: "Composite",
        className: "LoginCredentials",
        modelProperties: {
            username: {
                serializedName: "username",
                nullable: true,
                type: {
                    name: "String",
                },
            },
            password: {
                serializedName: "password",
                nullable: true,
                type: {
                    name: "String",
                },
            },
        },
    },
};
const Event = {
    type: {
        name: "Composite",
        className: "Event",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number",
                },
            },
            name: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "name",
                required: true,
                type: {
                    name: "String",
                },
            },
            description: {
                serializedName: "description",
                nullable: true,
                type: {
                    name: "String",
                },
            },
            type: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "type",
                required: true,
                type: {
                    name: "String",
                },
            },
            startDate: {
                serializedName: "startDate",
                required: true,
                type: {
                    name: "DateTime",
                },
            },
            endDate: {
                serializedName: "endDate",
                required: true,
                type: {
                    name: "DateTime",
                },
            },
            capacity: {
                serializedName: "capacity",
                required: true,
                type: {
                    name: "Number",
                },
            },
            createdBy: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "createdBy",
                required: true,
                type: {
                    name: "String",
                },
            },
            updatedBy: {
                serializedName: "updatedBy",
                nullable: true,
                type: {
                    name: "String",
                },
            },
            createdOn: {
                serializedName: "createdOn",
                required: true,
                type: {
                    name: "DateTime",
                },
            },
            updatedOn: {
                serializedName: "updatedOn",
                nullable: true,
                type: {
                    name: "DateTime",
                },
            },
            photo: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "photo",
                required: true,
                type: {
                    name: "String",
                },
            },
            price: {
                serializedName: "price",
                type: {
                    name: "Number",
                },
            },
            location: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "location",
                required: true,
                type: {
                    name: "String",
                },
            },
            isEnabled: {
                serializedName: "isEnabled",
                type: {
                    name: "Boolean",
                },
            },
            tickets: {
                serializedName: "tickets",
                readOnly: true,
                nullable: true,
                type: {
                    name: "Sequence",
                    element: {
                        type: {
                            name: "Composite",
                            className: "Ticket",
                        },
                    },
                },
            },
        },
    },
};
const Ticket = {
    type: {
        name: "Composite",
        className: "Ticket",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number",
                },
            },
            idEvent: {
                serializedName: "idEvent",
                type: {
                    name: "Number",
                },
            },
            event: {
                serializedName: "event",
                type: {
                    name: "Composite",
                    className: "Event",
                },
            },
            ticketBuyer: {
                serializedName: "ticketBuyer",
                type: {
                    name: "Composite",
                    className: "TicketBuyers",
                },
            },
        },
    },
};
const TicketBuyers = {
    type: {
        name: "Composite",
        className: "TicketBuyers",
        modelProperties: {
            id: {
                serializedName: "id",
                type: {
                    name: "Number",
                },
            },
            userEmail: {
                constraints: {
                    MinLength: 1,
                },
                serializedName: "userEmail",
                required: true,
                type: {
                    name: "String",
                },
            },
            vatNumber: {
                serializedName: "vatNumber",
                nullable: true,
                type: {
                    name: "Number",
                },
            },
            boughtOn: {
                serializedName: "boughtOn",
                type: {
                    name: "DateTime",
                },
            },
            ticketId: {
                serializedName: "ticketId",
                type: {
                    name: "Number",
                },
            },
            ticket: {
                serializedName: "ticket",
                type: {
                    name: "Composite",
                    className: "Ticket",
                },
            },
        },
    },
};
const EnableEventInput = {
    type: {
        name: "Composite",
        className: "EnableEventInput",
        modelProperties: {
            eventId: {
                serializedName: "eventId",
                type: {
                    name: "Number",
                },
            },
        },
    },
};
const BuyTicketInput = {
    type: {
        name: "Composite",
        className: "BuyTicketInput",
        modelProperties: {
            eventId: {
                serializedName: "eventId",
                type: {
                    name: "Number",
                },
            },
            userEmail: {
                serializedName: "userEmail",
                nullable: true,
                type: {
                    name: "String",
                },
            },
        },
    },
};

var Mappers = /*#__PURE__*/Object.freeze({
    __proto__: null,
    UserDetails: UserDetails,
    LoginCredentials: LoginCredentials,
    Event: Event,
    Ticket: Ticket,
    TicketBuyers: TicketBuyers,
    EnableEventInput: EnableEventInput,
    BuyTicketInput: BuyTicketInput
});

const contentType = {
    parameterPath: ["options", "contentType"],
    mapper: {
        defaultValue: "application/json",
        isConstant: true,
        serializedName: "Content-Type",
        type: {
            name: "String",
        },
    },
};
const body = {
    parameterPath: ["options", "body"],
    mapper: UserDetails,
};
const $host = {
    parameterPath: "$host",
    mapper: {
        serializedName: "$host",
        required: true,
        type: {
            name: "String",
        },
    },
    skipEncoding: true,
};
const body1 = {
    parameterPath: ["options", "body"],
    mapper: LoginCredentials,
};
const name = {
    parameterPath: "name",
    mapper: {
        serializedName: "name",
        required: true,
        type: {
            name: "String",
        },
    },
};
const body2 = {
    parameterPath: ["options", "body"],
    mapper: Event,
};
const id = {
    parameterPath: "id",
    mapper: {
        serializedName: "id",
        required: true,
        type: {
            name: "Number",
        },
    },
};
const id1 = {
    parameterPath: "id",
    mapper: {
        serializedName: "Id",
        required: true,
        type: {
            name: "Number",
        },
    },
};
const body3 = {
    parameterPath: ["options", "body"],
    mapper: EnableEventInput,
};
const i = {
    parameterPath: ["options", "i"],
    mapper: {
        serializedName: "i",
        type: {
            name: "Number",
        },
    },
};
const newStr = {
    parameterPath: ["options", "newStr"],
    mapper: {
        serializedName: "newStr",
        type: {
            name: "String",
        },
    },
};
const body4 = {
    parameterPath: ["options", "body"],
    mapper: BuyTicketInput,
};

/** Class containing ApiAuthRegister operations. */
class ApiAuthRegisterImpl {
    /**
     * Initialize a new instance of the class ApiAuthRegister class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec$7);
    }
}
// Operation Specifications
const serializer$e = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec$7 = {
    path: "/api/Auth/Register",
    httpMethod: "POST",
    responses: { 200: {} },
    requestBody: body,
    urlParameters: [$host],
    headerParameters: [contentType],
    mediaType: "json",
    serializer: serializer$e,
};

/** Class containing ApiAuthLogin operations. */
class ApiAuthLoginImpl {
    /**
     * Initialize a new instance of the class ApiAuthLogin class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec$6);
    }
}
// Operation Specifications
const serializer$d = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec$6 = {
    path: "/api/Auth/Login",
    httpMethod: "POST",
    responses: { 200: {} },
    requestBody: body1,
    urlParameters: [$host],
    headerParameters: [contentType],
    mediaType: "json",
    serializer: serializer$d,
};

/** Class containing ApiAuthLogout operations. */
class ApiAuthLogoutImpl {
    /**
     * Initialize a new instance of the class ApiAuthLogout class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec$5);
    }
}
// Operation Specifications
const serializer$c = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec$5 = {
    path: "/api/Auth/Logout",
    httpMethod: "POST",
    responses: { 200: {} },
    urlParameters: [$host],
    serializer: serializer$c,
};

/** Class containing ApiAuthGetAllUsers operations. */
class ApiAuthGetAllUsersImpl {
    /**
     * Initialize a new instance of the class ApiAuthGetAllUsers class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    get(options) {
        return this.client.sendOperationRequest({ options }, getOperationSpec$5);
    }
}
// Operation Specifications
const serializer$b = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec$5 = {
    path: "/api/Auth/GetAllUsers",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [$host],
    serializer: serializer$b,
};

/** Class containing ApiAuthDeleteName operations. */
class ApiAuthDeleteNameImpl {
    /**
     * Initialize a new instance of the class ApiAuthDeleteName class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @param name
     * @param options The options parameters.
     */
    delete(name, options) {
        return this.client.sendOperationRequest({ name, options }, deleteOperationSpec$2);
    }
}
// Operation Specifications
const serializer$a = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const deleteOperationSpec$2 = {
    path: "/api/Auth/Delete/{name}",
    httpMethod: "DELETE",
    responses: { 200: {} },
    urlParameters: [$host, name],
    serializer: serializer$a,
};

/** Class containing ApiEvent operations. */
class ApiEventImpl {
    /**
     * Initialize a new instance of the class ApiEvent class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    get(options) {
        return this.client.sendOperationRequest({ options }, getOperationSpec$4);
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec$4);
    }
}
// Operation Specifications
const serializer$9 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec$4 = {
    path: "/api/Event",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [$host],
    serializer: serializer$9,
};
const postOperationSpec$4 = {
    path: "/api/Event",
    httpMethod: "POST",
    responses: { 200: {} },
    requestBody: body2,
    urlParameters: [$host],
    headerParameters: [contentType],
    mediaType: "json",
    serializer: serializer$9,
};

/** Class containing ApiEventId operations. */
class ApiEventIdImpl {
    /**
     * Initialize a new instance of the class ApiEventId class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * @param id
     * @param options The options parameters.
     */
    get(id, options) {
        return this.client.sendOperationRequest({ id, options }, getOperationSpec$3);
    }
    /**
     * @param id
     * @param options The options parameters.
     */
    delete(id, options) {
        return this.client.sendOperationRequest({ id, options }, deleteOperationSpec$1);
    }
    /**
     * @param id
     * @param options The options parameters.
     */
    put(id, options) {
        return this.client.sendOperationRequest({ id, options }, putOperationSpec);
    }
}
// Operation Specifications
const serializer$8 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec$3 = {
    path: "/api/Event/{id}",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [$host, id],
    serializer: serializer$8,
};
const deleteOperationSpec$1 = {
    path: "/api/Event/{id}",
    httpMethod: "DELETE",
    responses: { 200: {} },
    urlParameters: [$host, id],
    serializer: serializer$8,
};
const putOperationSpec = {
    path: "/api/Event/{Id}",
    httpMethod: "PUT",
    responses: { 200: {} },
    requestBody: body2,
    urlParameters: [$host, id1],
    headerParameters: [contentType],
    mediaType: "json",
    serializer: serializer$8,
};

/** Class containing EnableEvent operations. */
class EnableEventImpl {
    /**
     * Initialize a new instance of the class EnableEvent class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec$3);
    }
}
// Operation Specifications
const serializer$7 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec$3 = {
    path: "/EnableEvent",
    httpMethod: "POST",
    responses: { 200: {} },
    requestBody: body3,
    urlParameters: [$host],
    headerParameters: [contentType],
    mediaType: "json",
    serializer: serializer$7,
};

/** Class containing DisabledEvents operations. */
class DisabledEventsImpl {
    /**
     * Initialize a new instance of the class DisabledEvents class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    get(options) {
        return this.client.sendOperationRequest({ options }, getOperationSpec$2);
    }
}
// Operation Specifications
const serializer$6 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec$2 = {
    path: "/DisabledEvents",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [$host],
    headerParameters: [contentType],
    mediaType: "json",
    serializer: serializer$6,
};

/** Class containing ApiTesteHelloWord operations. */
class ApiTesteHelloWordImpl {
    /**
     * Initialize a new instance of the class ApiTesteHelloWord class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    get(options) {
        return this.client.sendOperationRequest({ options }, getOperationSpec$1);
    }
}
// Operation Specifications
const serializer$5 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec$1 = {
    path: "/api/Teste/HelloWord",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [$host],
    serializer: serializer$5,
};

/** Class containing ApiTesteTestStrings operations. */
class ApiTesteTestStringsImpl {
    /**
     * Initialize a new instance of the class ApiTesteTestStrings class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    get(options) {
        return this.client.sendOperationRequest({ options }, getOperationSpec);
    }
}
// Operation Specifications
const serializer$4 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const getOperationSpec = {
    path: "/api/Teste/testStrings",
    httpMethod: "GET",
    responses: { 200: {} },
    urlParameters: [$host],
    serializer: serializer$4,
};

/** Class containing ApiTesteGetTesteStringByIndex operations. */
class ApiTesteGetTesteStringByIndexImpl {
    /**
     * Initialize a new instance of the class ApiTesteGetTesteStringByIndex class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec$2);
    }
}
// Operation Specifications
const serializer$3 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec$2 = {
    path: "/api/Teste/GetTesteStringByIndex",
    httpMethod: "POST",
    responses: { 200: {} },
    queryParameters: [i],
    urlParameters: [$host],
    serializer: serializer$3,
};

/** Class containing ApiTesteUpdateTesteStringByIndex operations. */
class ApiTesteUpdateTesteStringByIndexImpl {
    /**
     * Initialize a new instance of the class ApiTesteUpdateTesteStringByIndex class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec$1);
    }
}
// Operation Specifications
const serializer$2 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec$1 = {
    path: "/api/Teste/UpdateTesteStringByIndex",
    httpMethod: "POST",
    responses: { 200: {} },
    queryParameters: [i, newStr],
    urlParameters: [$host],
    serializer: serializer$2,
};

/** Class containing ApiTeste operations. */
class ApiTesteImpl {
    /**
     * Initialize a new instance of the class ApiTeste class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    delete(options) {
        return this.client.sendOperationRequest({ options }, deleteOperationSpec);
    }
}
// Operation Specifications
const serializer$1 = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const deleteOperationSpec = {
    path: "/api/Teste",
    httpMethod: "DELETE",
    responses: { 200: {} },
    queryParameters: [i],
    urlParameters: [$host],
    serializer: serializer$1,
};

/** Class containing ApiTicketBuy operations. */
class ApiTicketBuyImpl {
    /**
     * Initialize a new instance of the class ApiTicketBuy class.
     * @param client Reference to the service client
     */
    constructor(client) {
        this.client = client;
    }
    /** @param options The options parameters. */
    post(options) {
        return this.client.sendOperationRequest({ options }, postOperationSpec);
    }
}
// Operation Specifications
const serializer = coreClient__namespace.createSerializer(Mappers, /* isXml */ false);
const postOperationSpec = {
    path: "/api/Ticket/Buy",
    httpMethod: "POST",
    responses: { 200: {} },
    requestBody: body4,
    urlParameters: [$host],
    headerParameters: [contentType],
    mediaType: "json",
    serializer,
};

class EventsAPI extends coreClient__namespace.ServiceClient {
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
                coreRestPipeline__namespace.bearerTokenAuthenticationPolicyName);
        }
        if (!options ||
            !options.pipeline ||
            options.pipeline.getOrderedPolicies().length == 0 ||
            !bearerTokenAuthenticationPolicyFound) {
            this.pipeline.removePolicy({
                name: coreRestPipeline__namespace.bearerTokenAuthenticationPolicyName,
            });
            this.pipeline.addPolicy(coreRestPipeline__namespace.bearerTokenAuthenticationPolicy({
                credential: credentials,
                scopes: (_c = optionsWithDefaults.credentialScopes) !== null && _c !== void 0 ? _c : `${optionsWithDefaults.endpoint}/.default`,
                challengeCallbacks: {
                    authorizeRequestOnChallenge: coreClient__namespace.authorizeRequestOnClaimChallenge,
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

exports.EventsAPI = EventsAPI;
//# sourceMappingURL=index.js.map
