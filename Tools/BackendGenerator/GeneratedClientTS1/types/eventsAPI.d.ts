import * as coreAuth from '@azure/core-auth';
import * as coreClient from '@azure/core-client';

/** Interface representing a ApiAuthDeleteName. */
export declare interface ApiAuthDeleteName {
    /**
     * @param name
     * @param options The options parameters.
     */
    delete(name: string, options?: ApiAuthDeleteNameDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiAuthDeleteNameDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Interface representing a ApiAuthGetAllUsers. */
export declare interface ApiAuthGetAllUsers {
    /** @param options The options parameters. */
    get(options?: ApiAuthGetAllUsersGetOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiAuthGetAllUsersGetOptionalParams extends coreClient.OperationOptions {
}

/** Interface representing a ApiAuthLogin. */
export declare interface ApiAuthLogin {
    /** @param options The options parameters. */
    post(options?: ApiAuthLoginPostOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiAuthLoginPostOptionalParams extends coreClient.OperationOptions {
    body?: LoginCredentials;
}

/** Interface representing a ApiAuthLogout. */
export declare interface ApiAuthLogout {
    /** @param options The options parameters. */
    post(options?: ApiAuthLogoutPostOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiAuthLogoutPostOptionalParams extends coreClient.OperationOptions {
}

/** Interface representing a ApiAuthRegister. */
export declare interface ApiAuthRegister {
    /** @param options The options parameters. */
    post(options?: ApiAuthRegisterPostOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiAuthRegisterPostOptionalParams extends coreClient.OperationOptions {
    body?: UserDetails;
}

/** Interface representing a ApiEvent. */
export declare interface ApiEvent {
    /** @param options The options parameters. */
    get(options?: ApiEventGetOptionalParams): Promise<void>;
    /** @param options The options parameters. */
    post(options?: ApiEventPostOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiEventGetOptionalParams extends coreClient.OperationOptions {
}

/** Interface representing a ApiEventId. */
export declare interface ApiEventId {
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

/** Optional parameters. */
export declare interface ApiEventIdDeleteOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ApiEventIdGetOptionalParams extends coreClient.OperationOptions {
}

/** Optional parameters. */
export declare interface ApiEventIdPutOptionalParams extends coreClient.OperationOptions {
    body?: Event_2;
}

/** Optional parameters. */
export declare interface ApiEventPostOptionalParams extends coreClient.OperationOptions {
    body?: Event_2;
}

/** Interface representing a ApiTeste. */
export declare interface ApiTeste {
    /** @param options The options parameters. */
    delete(options?: ApiTesteDeleteOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiTesteDeleteOptionalParams extends coreClient.OperationOptions {
    i?: number;
}

/** Interface representing a ApiTesteGetTesteStringByIndex. */
export declare interface ApiTesteGetTesteStringByIndex {
    /** @param options The options parameters. */
    post(options?: ApiTesteGetTesteStringByIndexPostOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiTesteGetTesteStringByIndexPostOptionalParams extends coreClient.OperationOptions {
    i?: number;
}

/** Interface representing a ApiTesteHelloWord. */
export declare interface ApiTesteHelloWord {
    /** @param options The options parameters. */
    get(options?: ApiTesteHelloWordGetOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiTesteHelloWordGetOptionalParams extends coreClient.OperationOptions {
}

/** Interface representing a ApiTesteTestStrings. */
export declare interface ApiTesteTestStrings {
    /** @param options The options parameters. */
    get(options?: ApiTesteTestStringsGetOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiTesteTestStringsGetOptionalParams extends coreClient.OperationOptions {
}

/** Interface representing a ApiTesteUpdateTesteStringByIndex. */
export declare interface ApiTesteUpdateTesteStringByIndex {
    /** @param options The options parameters. */
    post(options?: ApiTesteUpdateTesteStringByIndexPostOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiTesteUpdateTesteStringByIndexPostOptionalParams extends coreClient.OperationOptions {
    i?: number;
    newStr?: string;
}

/** Interface representing a ApiTicketBuy. */
export declare interface ApiTicketBuy {
    /** @param options The options parameters. */
    post(options?: ApiTicketBuyPostOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface ApiTicketBuyPostOptionalParams extends coreClient.OperationOptions {
    body?: BuyTicketInput;
}

export declare interface BuyTicketInput {
    eventId?: number;
    userEmail?: string;
}

/** Interface representing a DisabledEvents. */
export declare interface DisabledEvents {
    /** @param options The options parameters. */
    get(options?: DisabledEventsGetOptionalParams): Promise<void>;
}

/** Optional parameters. */
export declare interface DisabledEventsGetOptionalParams extends coreClient.OperationOptions {
    body?: EnableEventInput;
}

/** Interface representing a EnableEvent. */
export declare interface EnableEvent {
    /** @param options The options parameters. */
    post(options?: EnableEventPostOptionalParams): Promise<void>;
}

export declare interface EnableEventInput {
    eventId?: number;
}

/** Optional parameters. */
export declare interface EnableEventPostOptionalParams extends coreClient.OperationOptions {
    body?: EnableEventInput;
}

declare interface Event_2 {
    id?: number;
    name: string;
    description?: string;
    type: string;
    startDate: Date;
    endDate: Date;
    capacity: number;
    createdBy: string;
    updatedBy?: string;
    createdOn: Date;
    updatedOn?: Date;
    photo: string;
    price?: number;
    location: string;
    isEnabled?: boolean;
    /** NOTE: This property will not be serialized. It can only be populated by the server. */
    readonly tickets?: Ticket[];
}
export { Event_2 as Event }

export declare class EventsAPI extends coreClient.ServiceClient {
    $host: string;
    /**
     * Initializes a new instance of the EventsAPI class.
     * @param credentials Subscription credentials which uniquely identify client subscription.
     * @param $host server parameter
     * @param options The parameter options
     */
    constructor(credentials: coreAuth.TokenCredential, $host: string, options?: EventsAPIOptionalParams);
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

/** Optional parameters. */
export declare interface EventsAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** Overrides client endpoint. */
    endpoint?: string;
}

export declare interface LoginCredentials {
    username?: string;
    password?: string;
}

export declare interface Ticket {
    id?: number;
    idEvent?: number;
    event?: Event_2;
    ticketBuyer?: TicketBuyers;
}

export declare interface TicketBuyers {
    id?: number;
    userEmail: string;
    vatNumber?: number;
    boughtOn?: Date;
    ticketId?: number;
    ticket?: Ticket;
}

export declare interface UserDetails {
    userName: string;
    password: string;
    email: string;
}

export { }
