import Image from "next/image";
import Saad from "../images/samiul-alim.png";
import SocialLinks from "./SocialLinks";

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
                            data-aos-anchor-placement="top-bottom"
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
                    <SocialLinks />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
