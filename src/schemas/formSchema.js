import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!.@#$%^&*]).{8,32}$/;

export const formSchema = yup.object().shape({
    fullName: yup.string()
        .matches(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/, 'Full name must include first name and last name')
    .required("Please enter your full name"),
    email: yup.string().email("Please enter a valid email")
        .test('not-ru', 'Russians are not allowed 🙂', value => {
            if (value) {
                return !value.toLowerCase().endsWith('.ru');
            }
            return true; 
        })
        .required("Please enter your email"),
    password: yup
    .string()
    .min(8)
    .max(32)
    .matches(passwordRules, {message: "Please create a stronger password"})
    .required("Please enter your password"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
        .required("Please confirm your password"),
    logIn_password: yup.string().required("Please enter your password"),
});
