import * as yup from "yup";

export const loginFormSchema = yup.object().shape({
    email: yup.string().email("Please enter a valid email")
        .test('not-ru', 'Russians are not allowed 🙂', value => {
            if (value) {
                return !value.toLowerCase().endsWith('.ru');
            }
            return true; 
        })
        .required("Please enter your email"),
    password: yup.string().required("Please enter your password"),
});
