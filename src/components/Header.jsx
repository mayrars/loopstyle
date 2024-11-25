"use client";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
export function Header() {
    return (
        <Navbar container className="bg-blue-950">
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Loop style</span>
            </Navbar.Brand>
            <div className="flex md:order-2">
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
                <Navbar.Link href="#" className="text-white active:text-blue-300" active>
                Home
                </Navbar.Link>
                <Navbar.Link href="#" className="text-white">Categories</Navbar.Link>
                <Navbar.Link href="#" className="text-white">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    )
}