import Link from "next/link";

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
                        className="font-semibold rounded-none hover:rounded-none"
                    >
                        {v.name}
                    </Link>
                </li>
            );
        })}
    </>
);

export default MenuItems;
