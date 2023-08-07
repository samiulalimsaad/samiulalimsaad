import { BsFacebook, BsGithub, BsLinkedin, BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => (
    <div className="flex items-center gap-4">
        <a
            href="mailto:samiulalimsaad@gmail.com"
            target="_blank"
            className="flex items-center duration-500 hover:text-red-500"
            rel="noreferrer"
        >
            <MdEmail className="w-6 h-6" />
        </a>
        <a
            href="https://www.github.com/samiulalimsaad"
            target="_blank"
            rel="noreferrer"
        >
            <BsGithub className="w-6 h-6 duration-500 hover:text-green-500" />
        </a>
        <a
            href="https://www.linkedin.com/in/samiulalimsaad"
            target="_blank"
            rel="noreferrer"
        >
            <BsLinkedin className="w-6 h-6 duration-500 hover:text-sky-600" />
        </a>
        <a
            href="https://www.facebook.com/samiulalimsaad"
            target="_blank"
            rel="noreferrer"
        >
            <BsFacebook className="w-6 h-6 duration-500 hover:text-blue-600" />
        </a>
        <a href="https://m.me/samiulalimsaad" target="_blank" rel="noreferrer">
            <BsMessenger className="w-6 h-6 duration-500 hover:text-sky-500" />
        </a>
        <a href="https://wa.me/8801715378032" target="_blank" rel="noreferrer">
            <IoLogoWhatsapp className="w-6 h-6 duration-500 hover:text-teal-500" />
        </a>
    </div>
);

export default SocialLinks;
