"use client";
import { useState } from "react";
import { Avatar, Dropdown, Navbar} from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
import './Cart.css'
import { Cart } from "./Cart";
export function Header() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginLogout = () => {
        setIsLoggedIn(!isLoggedIn); // Cambia el estado entre Login y Logout
    };
    return (
        <Navbar className="bg-blue-950">
            <Link to={"/"} className="text-white active:text-blue-300">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Loop style</span>
            </Link>
            
            <div className="flex md:order-2 gap-5">
                <div className="relative inline-flex items-center text-sm">
                    <Cart />
                </div>
                {isLoggedIn ? (
                    <Dropdown
                        arrowIcon={false}
                        inline
                        label={<Avatar alt="User settings" rounded />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">Bonnie Green</span>
                            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                        </Dropdown.Header>
                        <Dropdown.Item>Dashboard</Dropdown.Item>
                        <Dropdown.Item>Settings</Dropdown.Item>
                        <Dropdown.Item>Earnings</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLoginLogout}>
                            Logout
                        </Dropdown.Item>
                    </Dropdown>
                ) : (
                    <Link to={"/login"} className="text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                        Login
                    </Link>
                )}
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse className="text-white">
                <NavLink to={"/"} className={({isActive}) => isActive ? 'text-blue-300': 'text-white'}>Home</NavLink>
                <NavLink to={"/categories"} className={({isActive}) => isActive ? 'text-blue-300': 'text-white'}>Categories</NavLink>
                <NavLink to={"/contact"} className={({isActive}) => isActive ? 'text-blue-300': 'text-white'}>Contact</NavLink>
            </Navbar.Collapse>
        </Navbar>
    )
}