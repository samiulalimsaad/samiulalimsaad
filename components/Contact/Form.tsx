import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Swal from "sweetalert2";
import { emailValidationSchema } from "../../backend/validations/mail.validation";
import { emailInterface } from "../../interfaces/Email.interface";

const initialValue: any = {
    name: "",
    email: "",
    message: "",
};

const ContactForm = () => {
    const sendEmail = async (value: emailInterface) => {
        try {
            let timerInterval: string | number | NodeJS.Timer | undefined;

            await axios.post("/api/email", value);

            await Swal.fire({
                title: "Thank You!",
                html: "Your message has been sent!",
                timer: 4000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                },
                willClose: () => {
                    clearInterval(timerInterval);
                },
            });
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div
            className="flex items-center justify-center h-full mx-auto sm:w-1/2"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
        >
            <Formik
                initialValues={initialValue}
                validationSchema={emailValidationSchema}
                onSubmit={sendEmail}
            >
                {({ isSubmitting, isValid }) => (
                    <Form className="w-full space-y-4">
                        <div className="form-control">
                            <label htmlFor="name">Name</label>
                            <Field
                                type="text"
                                id="name"
                                name="name"
                                className="w-full my-2 input input-bordered input-primary"
                                placeholder="Your Name"
                            />
                            <div className="text-error">
                                <ErrorMessage name="name" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-full my-2 input input-bordered input-primary"
                                placeholder="Your email"
                            />
                            <div className="text-error">
                                <ErrorMessage name="email" />
                            </div>
                        </div>
                        <div className="form-control">
                            <label htmlFor="message">Message</label>
                            <Field
                                as="textarea"
                                id="message"
                                name="message"
                                rows={3}
                                className="w-full my-2 textarea textarea-bordered textarea-primary"
                                placeholder="Your Message...."
                            />
                            <div className="text-error">
                                <ErrorMessage name="message" />
                            </div>
                        </div>
                        <div className="form-control">
                            <button
                                type="submit"
                                className="w-full btn btn-info"
                                disabled={isSubmitting || !isValid}
                            >
                                Send
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ContactForm;
