import * as coreClient from "@azure/core-client";
export interface UserDetails {
    userName: string;
    password: string;
    email: string;
}
export interface LoginCredentials {
    username?: string;
    password?: string;
}
export interface Event {
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
export interface Ticket {
    id?: number;
    idEvent?: number;
    event?: Event;
    ticketBuyer?: TicketBuyers;
}
export interface TicketBuyers {
    id?: number;
    userEmail: string;
    vatNumber?: number;
    boughtOn?: Date;
    ticketId?: number;
    ticket?: Ticket;
}
export interface EnableEventInput {
    eventId?: number;
}
export interface BuyTicketInput {
    eventId?: number;
    userEmail?: string;
}
/** Optional parameters. */
export interface ApiAuthRegisterPostOptionalParams extends coreClient.OperationOptions {
    body?: UserDetails;
}
/** Optional parameters. */
export interface ApiAuthLoginPostOptionalParams extends coreClient.OperationOptions {
    body?: LoginCredentials;
}
/** Optional parameters. */
export interface ApiAuthLogoutPostOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiAuthGetAllUsersGetOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiAuthDeleteNameDeleteOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiEventGetOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiEventPostOptionalParams extends coreClient.OperationOptions {
    body?: Event;
}
/** Optional parameters. */
export interface ApiEventIdGetOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiEventIdDeleteOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiEventIdPutOptionalParams extends coreClient.OperationOptions {
    body?: Event;
}
/** Optional parameters. */
export interface EnableEventPostOptionalParams extends coreClient.OperationOptions {
    body?: EnableEventInput;
}
/** Optional parameters. */
export interface DisabledEventsGetOptionalParams extends coreClient.OperationOptions {
    body?: EnableEventInput;
}
/** Optional parameters. */
export interface ApiTesteHelloWordGetOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiTesteTestStringsGetOptionalParams extends coreClient.OperationOptions {
}
/** Optional parameters. */
export interface ApiTesteGetTesteStringByIndexPostOptionalParams extends coreClient.OperationOptions {
    i?: number;
}
/** Optional parameters. */
export interface ApiTesteUpdateTesteStringByIndexPostOptionalParams extends coreClient.OperationOptions {
    i?: number;
    newStr?: string;
}
/** Optional parameters. */
export interface ApiTesteDeleteOptionalParams extends coreClient.OperationOptions {
    i?: number;
}
/** Optional parameters. */
export interface ApiTicketBuyPostOptionalParams extends coreClient.OperationOptions {
    body?: BuyTicketInput;
}
/** Optional parameters. */
export interface EventsAPIOptionalParams extends coreClient.ServiceClientOptions {
    /** Overrides client endpoint. */
    endpoint?: string;
}
//# sourceMappingURL=index.d.ts.map