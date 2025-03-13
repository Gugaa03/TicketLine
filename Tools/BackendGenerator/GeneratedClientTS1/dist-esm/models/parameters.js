import { UserDetails as UserDetailsMapper, LoginCredentials as LoginCredentialsMapper, Event as EventMapper, EnableEventInput as EnableEventInputMapper, BuyTicketInput as BuyTicketInputMapper, } from "../models/mappers";
export const contentType = {
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
export const body = {
    parameterPath: ["options", "body"],
    mapper: UserDetailsMapper,
};
export const $host = {
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
export const body1 = {
    parameterPath: ["options", "body"],
    mapper: LoginCredentialsMapper,
};
export const name = {
    parameterPath: "name",
    mapper: {
        serializedName: "name",
        required: true,
        type: {
            name: "String",
        },
    },
};
export const body2 = {
    parameterPath: ["options", "body"],
    mapper: EventMapper,
};
export const id = {
    parameterPath: "id",
    mapper: {
        serializedName: "id",
        required: true,
        type: {
            name: "Number",
        },
    },
};
export const id1 = {
    parameterPath: "id",
    mapper: {
        serializedName: "Id",
        required: true,
        type: {
            name: "Number",
        },
    },
};
export const body3 = {
    parameterPath: ["options", "body"],
    mapper: EnableEventInputMapper,
};
export const i = {
    parameterPath: ["options", "i"],
    mapper: {
        serializedName: "i",
        type: {
            name: "Number",
        },
    },
};
export const newStr = {
    parameterPath: ["options", "newStr"],
    mapper: {
        serializedName: "newStr",
        type: {
            name: "String",
        },
    },
};
export const body4 = {
    parameterPath: ["options", "body"],
    mapper: BuyTicketInputMapper,
};
//# sourceMappingURL=parameters.js.map