import Link from "next/link";
import React from "react";
import MenuItems from "./MenuItems";

const Navbar = () => {
    return (
        <header className="sticky top-0 navbar bg-base-100 z-[999]">
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
                <Link href="/" passHref>
                    <a className="hidden text-xl normal-case sm:flex btn btn-ghost">
                        Samiul Alim
                    </a>
                </Link>
            </div>
            <div className="navbar-end lg:hidden">
                <Link href="/" passHref>
                    <a className="text-xl normal-case btn btn-ghost">
                        Samiul Alim
                    </a>
                </Link>
            </div>
            <div className="hidden navbar-end lg:flex">
                <ul className="p-0 menu menu-horizontal">
                    <MenuItems />
                </ul>
            </div>
        </header>
    );
};

export default Navbar;
