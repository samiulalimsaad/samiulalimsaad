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

const MenuItems = () => {
    return (
        <>
            {menuItems.map((v) => (
                <li key={v.name} data-aos="zoom-in">
                    <Link href={v.path}>{v.name}</Link>
                </li>
            ))}
        </>
    );
};

export default MenuItems;
