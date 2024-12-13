"use client";
import { Avatar, Dropdown, Navbar, Badge} from "flowbite-react";
import { Link, NavLink } from "react-router-dom";
export function Header() {
    return (
        <Navbar className="bg-blue-950">
            <Link to={"/"} className="text-white active:text-blue-300">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Loop style</span>
            </Link>
            
            <div className="flex md:order-2 gap-5">
                <div className="relative inline-flex items-center text-sm">
                    <button type="button" className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5"></span>
                        <span className="sr-only">View notifications</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                    </button>
                    <Badge className="absolute bottom-0 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">0</Badge>
                </div>
                <Dropdown
                arrowIcon={false}
                inline
                label={
                    <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
                }
                >
                <Dropdown.Header>
                    <span className="block text-sm">Bonnie Green</span>
                    <span className="block truncate text-sm font-medium">name@flowbite.com</span>
                </Dropdown.Header>
                <Dropdown.Item>Dashboard</Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Earnings</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item>Sign out</Dropdown.Item>
                </Dropdown>
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