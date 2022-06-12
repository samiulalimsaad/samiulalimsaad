import Image from "next/image";
import { BsFacebook, BsGithub, BsLinkedin, BsMessenger } from "react-icons/bs";
import Saad from "../images/samiul-alim.png";

const Footer = () => {
    return (
        <footer className="min-h-fit hero bg-[url('/footer.png')]">
            <div className="items-center justify-between p-10 px-20 footer text-neutral-content">
                <div className="flex items-center">
                    <div className="avatar">
                        <div
                            className="w-16 rounded-full"
                            data-aos="flip-left"
                            data-aos-duration="2000"
                        >
                            <Image src={Saad} alt="Samiul Alim" />
                        </div>
                    </div>
                    <p data-aos="zoom-in-right">
                        Samiul ALim
                        <br />
                        Web Developer since 2020
                    </p>
                </div>
                <div>
                    <div className="flex items-center gap-4">
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
                            <BsLinkedin className="w-6 h-6 duration-500 hover:text-blue-500" />
                        </a>
                        <a
                            href="https://www.facebook.com/samiulalimsaad"
                            target="_blank"
                            rel="noreferrer"
                            data-aos="flip-up"
                            data-aos-duration="2000"
                        >
                            <BsFacebook className="w-6 h-6 duration-500 hover:text-sky-300" />
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
                </div>
            </div>
        </footer>
    );
};

export default Footer;
