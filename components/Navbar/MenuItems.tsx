import Link from "next/link";
import ColoringTitle from "../utils/ColoringTitle";

const menuItems = [
    {
        name: "Projects",
        path: "/#projects",
    },
    {
        name: "Experiences",
        path: "/#experiences",
    },
    {
        name: "Skills",
        path: "/#skills",
    },
    {
        name: "Education",
        path: "/#education",
    },
    {
        name: "About",
        path: "/#about",
    },
    {
        name: "Blogs",
        path: "/#blogs",
    },
    {
        name: "Contact",
        path: "/#contact",
    },
];

const MenuItems = () => (
    <>
        {menuItems.map((v) => {
            return (
                <li key={v.name}>
                    <Link
                        href={v.path}
                        className="rounded-none hover:rounded-none"
                    >
                        <ColoringTitle as="span" fontSize="xs" classes="!py-0">
                            {v.name}
                        </ColoringTitle>
                    </Link>
                </li>
            );
        })}
    </>
);

export default MenuItems;
