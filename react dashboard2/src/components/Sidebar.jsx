import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaBookOpen, // Suitable icon for Courses
    FaNewspaper, // Suitable icon for News
    FaClipboardCheck, // Suitable icon for Task
    FaCode, // Suitable icon for Hackathon
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const menuItem = [
        {
            path: "/",
            name: "Dashboard",
            icon: <FaTh />
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt />
        },
        {
            path: "/Courses",
            name: "Courses",
            icon: <FaBookOpen />
        },
        {
            path: "/News",
            name: "News",
            icon: <FaNewspaper />
        },
        {
            path: "/Task",
            name: "Task",
            icon: <FaClipboardCheck />
        },
        {
            path: "/Hackathon",
            name: "Hackathon",
            icon: <FaCode />
        }
    ]
    return (
        <div className="container">
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">Logo</h1>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;