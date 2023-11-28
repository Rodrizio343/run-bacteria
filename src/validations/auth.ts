import * as yup from "yup";

export const registerValidation = yup.object({
  username: yup.string().trim().required("Username is required"),
  email: yup
    .string()
    .email("Must be a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Minimum eight characters, at least one letter and one number"
    ),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});

export const loginValidation = yup.object({
  identifier: yup.string().required("Username or e-mail is required"),
  password: yup.string().required("Password is required"),
});
