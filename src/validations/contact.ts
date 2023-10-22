import * as yup from 'yup';

export const contactMailValidation = yup.object({
  subject: yup.string().trim().required('Subject is required'),
  name: yup.string().trim().required('Name is required'),
  user_email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is required'),
  message: yup.string().trim().required('Message is required'),
})