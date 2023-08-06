import ColoringTitle from "../utils/ColoringTitle";
import ContactForm from "./Form";
import ContactInfo from "./Info";

const Contact = () => (
    <section
        id="contact"
        className="min-h-screen hero bg-[url('/contact.svg')] bg-fixed"
    >
        <div className="w-full h-full pt-20 pb-32 mx-auto bg-slate-900/80 hover:backdrop-blur-sm">
            <ColoringTitle as="h2" fontSize="5xl">
                Contact Me
            </ColoringTitle>
            <div className="divider"></div>
            <div className="items-center p-4 mx-auto space-y-10 sm:w-2/3 sm:flex justify-evenly">
                <ContactInfo />
                <ContactForm />
            </div>
        </div>
    </section>
);

export default Contact;
