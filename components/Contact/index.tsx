import ContactForm from "./Form";
import ContactInfo from "./Info";

const Contact = () => (
    <section
        id="contact"
        className="min-h-screen hero bg-[url('/contact.svg')] bg-fixed"
    >
        <div className="w-full h-full pt-20 pb-32 mx-auto bg-slate-900/80 hover:backdrop-blur-sm">
            <h2
                className="my-8 text-6xl font-black text-center"
                data-aos="zoom-in-down"
                data-aos-duration="2000"
                data-aos-anchor-placement="center-bottom"
            >
                Contact Me
            </h2>
            <div className="divider"></div>
            <div className="items-center p-4 mx-auto space-y-10 sm:w-2/3 sm:flex justify-evenly">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    </section>
);

export default Contact;
