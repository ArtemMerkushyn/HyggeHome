import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!.@#$%^&*]).{8,32}$/;

export const formSchema = yup.object().shape({
    firstName: yup.string().min(1).required("Please enter your first name"),
    lastName: yup.string().min(3).required("Please enter your last name"),
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
    .matches(passwordRules, {message: "Please create a stronger password. Password must include a capital letter, lowercase letter, a number and a symbol"})
    .required("Please enter your password"),
    confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords must match")
    .required("Please confirm your password"),
});
