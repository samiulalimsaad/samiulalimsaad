import Link from "next/link";
import ColoringTitle from "../utils/ColoringTitle";
import Container from "../utils/Container";
import MenuItems from "./MenuItems";

const siteTitle = (
    <Link href="/" passHref className="text-xl font-semibold normal-case">
        <ColoringTitle as="span">Samiul Alim</ColoringTitle>
    </Link>
);

const Navbar = () => (
    <header className="sticky top-0 glass btn-active backdrop-blur-3xl z-[999] bg-base-100">
        <Container>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-5 h-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className="p-2 mt-3 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                        >
                            <MenuItems />
                        </ul>
                    </div>
                    <div className="hidden sm:flex">{siteTitle}</div>
                </div>
                <div className="navbar-end lg:hidden">{siteTitle}</div>
                <div className="hidden navbar-end lg:flex">
                    <ul className="p-0 menu menu-horizontal">
                        <MenuItems />
                    </ul>
                </div>
            </div>
        </Container>
    </header>
);

export default Navbar;
