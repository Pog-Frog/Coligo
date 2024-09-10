import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Box } from "@mui/material";
import React from "react";


interface MenuOptionProps {
    link: {
        name: string;
        icon: React.ReactNode;
        url: string;
    };
}

const MenuOption: React.FC<MenuOptionProps> = ({ link }) => {
    const [t] = useTranslation();

    return (
        <li>
            <NavLink
                className={({ isActive }) => `sidebar-link ${isActive && "active"}`}
                to={link.url}

            >
                {link.icon}
                <Box sx={{ display: { xs: "none", md: "block" } }}>{t(link.name)}</Box>
            </NavLink>
        </li>
    );
};

export default MenuOption;
