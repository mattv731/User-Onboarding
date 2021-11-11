import * as yup from 'yup';

const formSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('username is required')
        .min(3, 'Username must be 3 characters long'),
    email: yup
        .string()
        .email('Must be a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .required('A password is required')
        .min(6, 'Password must be at least 6 characters'),
    tos: yup
        .boolean()
        .oneOf([true], 'Accepting the terms and conditions is required')
})
export default formSchema