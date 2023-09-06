import Image from "next/image";
import Saad from "../images/samiul-alim.png";
import SocialLinks from "./SocialLinks";
import ColoringTitle from "./utils/ColoringTitle";

const Footer = () => (
    <footer className="min-h-fit hero bg-[url('/footer.png')] bg-fixed">
        <div className="items-center justify-between p-10 px-20 footer text-neutral-content">
            <div className="flex items-center">
                <div className="avatar">
                    <div className="w-16 rounded-full">
                        <Image src={Saad} alt="Samiul Alim" />
                    </div>
                </div>
                <div>
                    <ColoringTitle
                        as="div"
                        fontSize="xs"
                        classes="grid h-16 font-semibold place-items-center drop-shadow-md"
                    >
                        Samiul Alim
                        <br />
                        Software Developer
                    </ColoringTitle>
                    <div className="text-xs font-semibold badge badge-primary drop-shadow-md">
                        {new Date().getFullYear() - 2021} years
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full">
                <SocialLinks />
            </div>
        </div>
    </footer>
);

export default Footer;
