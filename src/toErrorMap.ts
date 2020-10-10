import { FieldError } from "./generated/graphql";

export const toErrorMap = (errors: FieldError[]) => {
  const errorMap: Record<string, string> = {};

  errors.forEach((error) => (errorMap[error.field] = error.message));

  return errorMap;
};
