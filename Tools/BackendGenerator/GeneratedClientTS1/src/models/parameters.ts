import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  UserDetails as UserDetailsMapper,
  LoginCredentials as LoginCredentialsMapper,
  Event as EventMapper,
  EnableEventInput as EnableEventInputMapper,
  BuyTicketInput as BuyTicketInputMapper,
} from "../models/mappers";

export const contentType: OperationParameter = {
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

export const body: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: UserDetailsMapper,
};

export const $host: OperationURLParameter = {
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

export const body1: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: LoginCredentialsMapper,
};

export const name: OperationURLParameter = {
  parameterPath: "name",
  mapper: {
    serializedName: "name",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const body2: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: EventMapper,
};

export const id: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "id",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const id1: OperationURLParameter = {
  parameterPath: "id",
  mapper: {
    serializedName: "Id",
    required: true,
    type: {
      name: "Number",
    },
  },
};

export const body3: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: EnableEventInputMapper,
};

export const i: OperationQueryParameter = {
  parameterPath: ["options", "i"],
  mapper: {
    serializedName: "i",
    type: {
      name: "Number",
    },
  },
};

export const newStr: OperationQueryParameter = {
  parameterPath: ["options", "newStr"],
  mapper: {
    serializedName: "newStr",
    type: {
      name: "String",
    },
  },
};

export const body4: OperationParameter = {
  parameterPath: ["options", "body"],
  mapper: BuyTicketInputMapper,
};
