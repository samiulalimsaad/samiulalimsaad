import Link from "next/link";
import React from "react";

const Navbar = () => {
    return (
        <div className="sticky top-0 navbar bg-base-100">
            <Link href="/" passHref>
                <a className="text-xl normal-case btn btn-ghost">Samiul Alim</a>
            </Link>
            <div className=" navbar-end">
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
                        <li>
                            <a>Item 1</a>
                        </li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg
                                    className="fill-current"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                                </svg>
                            </a>
                            <ul className="p-2">
                                <li>
                                    <a>Submenu 1</a>
                                </li>
                                <li>
                                    <a>Submenu 2</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a>Item 3</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="hidden navbar-end lg:flex ">
                <ul className="p-0 menu menu-horizontal">
                    <li>
                        <a>Item 1</a>
                    </li>
                    <li>
                        <a>Item 3</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
