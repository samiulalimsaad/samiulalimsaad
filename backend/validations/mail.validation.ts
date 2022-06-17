import * as Yup from "yup";

export const mailValidationSchema = Yup.object({
    email: Yup.string().email("invalid email").required("Email is required"),
    name: Yup.string().required("Your Name required"),
    message: Yup.string().required("Your message required"),
});
