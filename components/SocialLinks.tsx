import { BsFacebook, BsGithub, BsLinkedin, BsMessenger } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const SocialLinks = () => {
    return (
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
                data-aos="flip-left"
                data-aos-duration="2000"
            >
                <BsGithub className="w-6 h-6 duration-500 hover:text-green-500" />
            </a>
            <a
                href="https://www.linkedin.com/in/samiulalimsaad"
                target="_blank"
                rel="noreferrer"
                data-aos="flip-right"
                data-aos-duration="2000"
            >
                <BsLinkedin className="w-6 h-6 duration-500 hover:text-sky-600" />
            </a>
            <a
                href="https://www.facebook.com/samiulalimsaad"
                target="_blank"
                rel="noreferrer"
                data-aos="flip-up"
                data-aos-duration="2000"
            >
                <BsFacebook className="w-6 h-6 duration-500 hover:text-blue-600" />
            </a>
            <a
                href="https://m.me/samiulalimsaad"
                target="_blank"
                rel="noreferrer"
                data-aos="flip-down"
                data-aos-duration="2000"
            >
                <BsMessenger className="w-6 h-6 duration-500 hover:text-pink-500" />
            </a>
        </div>
    );
};

export default SocialLinks;
