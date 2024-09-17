import * as yup from "yup";

export const addProductSchema = yup.object().shape({
    name: yup.string().required("Please Enter product name"),
    shortDesc:yup.string().required("Please enter a short description of product"),
    inStock:yup.number().required("Please enter amount in stock"),
    price:yup.string().required("Please enter the price of product"),
    fullDesc:yup.string().required("Please enter a full description of product"),
})