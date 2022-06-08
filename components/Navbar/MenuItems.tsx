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
        name: "Education",
        path: "#education",
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
                <li key={v.name} data-aos="zoom-in">
                    <a href={v.path}>{v.name}</a>
                </li>
            ))}
        </>
    );
};

export default MenuItems;
