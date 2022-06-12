import emailjs from "@emailjs/browser";
import { FormEvent, useRef } from "react";

const ContactForm = () => {
    const form = useRef<any>(null);

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_i8dfwdj",
                "template_rrdb3vt",
                form.current,
                "knhMMSy5D_EDCcpQk"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div
            className="flex items-center justify-center h-full mx-auto sm:w-1/2"
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
        >
            <form ref={form} onSubmit={sendEmail} className="w-full space-y-4">
                <div className="form-control">
                    <label>Name</label>
                    <input
                        type="text"
                        name="user_name"
                        className="w-full input input-bordered input-primary"
                        placeholder="Your Name"
                    />
                </div>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="email"
                        name="user_email"
                        className="w-full input input-bordered input-primary"
                        placeholder="Your email"
                    />
                </div>
                <div className="form-control">
                    <label>Message</label>
                    <textarea
                        name="message"
                        rows={3}
                        className="w-full textarea textarea-bordered textarea-primary"
                        placeholder="Your Message...."
                    />
                </div>
                <div className="form-control">
                    <input
                        type="submit"
                        value="Send"
                        className="w-full btn btn-info"
                    />
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
