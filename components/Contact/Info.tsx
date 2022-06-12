import { AiFillFacebook } from "react-icons/ai";
import { BsFillTelephoneFill, BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
    return (
        <div
            className="flex flex-col justify-center space-y-4 sm:w-1/2"
            data-aos="flip-up"
            data-aos-duration="2000"
            data-aos-anchor-placement="center-bottom"
        >
            <h3 className="text-3xl">Samiul Alim</h3>
            <a
                href="mailto:samiulalimsaad@gmail.com"
                target="_blank"
                className="flex items-center"
                rel="noreferrer"
            >
                <span className="mr-4">
                    <MdEmail className="w-6 h-6" />
                </span>
                samiulalimsaad@gmail.com
            </a>
            <a
                href="tel:+8801715378032"
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
            >
                <span className="mr-4">
                    <BsFillTelephoneFill className="w-6 h-6" />
                </span>
                +880 1715 37 80 32
            </a>
            <a
                href="tel:+8801521418692"
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
            >
                <span className="mr-4">
                    <BsFillTelephoneFill className="w-6 h-6" />
                </span>
                +880 1521 418 692
            </a>
            <a
                href="https://facebook.com/samiulalimsaad"
                target="_blank"
                className="flex items-center"
                rel="noreferrer"
            >
                <span className="mr-4">
                    <AiFillFacebook className="w-6 h-6" />
                </span>
                facebook.com/samiulalimsaad
            </a>
            <a
                href="https://m.me/samiulalimsaad"
                className="flex items-center"
                target="_blank"
                rel="noreferrer"
            >
                <span className="mr-4">
                    <FaFacebookMessenger className="w-6 h-6" />
                </span>
                m.me/samiulalimsaad
            </a>

            <a
                href="https://linkedin.com/in//samiulalimsaad"
                target="_blank"
                className="flex items-center"
                rel="noreferrer"
            >
                <span className="mr-4">
                    <BsLinkedin className="w-6 h-6" />
                </span>
                linkedin.com/in//samiulalimsaad
            </a>
            <a
                href="https://github.com/samiulalimsaad"
                target="_blank"
                className="flex items-center"
                rel="noreferrer"
            >
                <span className="mr-4">
                    <BsGithub className="w-6 h-6" />
                </span>
                github.com/samiulalimsaad
            </a>
        </div>
    );
};

export default ContactInfo;
