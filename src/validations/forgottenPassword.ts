import * as yup from "yup";

export const forgottenPasswordFormValidation = yup.object({
  email: yup
    .string()
    .email("Must be a valid email")
    .required("E-mail is required"),
});

export const resetPasswordFormValidation = yup.object({
  code: yup.string(),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d\.\-]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    ),
  passwordConfirmation: yup
    .string()
    .required()
    .oneOf([yup.ref("password")], "Passwords must match"),
});
