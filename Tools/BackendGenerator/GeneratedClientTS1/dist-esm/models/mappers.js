export const UserDetails = {
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
export const LoginCredentials = {
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
export const Event = {
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
export const Ticket = {
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
export const TicketBuyers = {
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
export const EnableEventInput = {
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
export const BuyTicketInput = {
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
//# sourceMappingURL=mappers.js.map