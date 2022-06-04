import React from "react";

const menuItems = [
    {
        name: "Projects",
        path: "#projects",
    },
    {
        name: "Experiences",
        path: "#experiences",
    },
    {
        name: "Skills",
        path: "#skills",
    },
    {
        name: "Contact",
        path: "#contact",
    },
];

const MenuItems = () => {
    return (
        <>
            {menuItems.map((v) => (
                <li key={v.name}>
                    <a href={v.path}>{v.name}</a>
                </li>
            ))}
        </>
    );
};

export default MenuItems;
