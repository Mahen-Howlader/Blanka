import Link from 'next/link';
import React from 'react';

function Navbar() {
    const navbarItems = [
        { label: "Home", path: "/home" },
        { label: "Services", path: "/services" },
        { label: "Portfolio", path: "/portfolio" },
        { label: "About", path: "/about" },
        { label: "Clients", path: "/clients" },
        {
            label: "Team", path: "/team",
        },
        { label: "Pricing", path: "/pricing" },
        { label: "News", path: "/news" },
        { label: "Contact", path: "/contact" },
        {
            label: "More +",
            path: "/more",
            children: [
                { label: "Features", path: "/more/features" },
                { label: "Portfolio Item I", path: "/more/portfolio-item-1" },
                { label: "Portfolio Item II", path: "/more/portfolio-item-2" },
                { label: "Portfolio Item III", path: "/more/portfolio-item-3" },
            ]
        },
    ];
    return (
        <div>
            <nav className="bg-background font-light border-gray-200 py-3 px-4">
                <div className="max-w-screen-2xl  mx-auto flex flex-wrap items-center justify-between p-4">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="https://i.postimg.cc/nrqV9KRB/logo-2x.png"
                            className="h-5"
                            alt="BLANKA"
                        />
                    </Link>

                    {/* Navigation Menu */}
                    <div className="">
                        <ul className=" hidden lg:flex  space-x-10">
                            {navbarItems.map((item, index) => (
                                <li key={index} className=" group relative">
                                    <Link
                                        href={item.path}
                                        className="block py-2 px-3 text-base  text-white hover:text-[#E625A4] md:bg-transparent md:p-0"
                                    >
                                        {item.label}
                                    </Link>

                                    {item.children && (
                                        <div className=" top-full absolute -left-20 w-max min-w-[10rem] max-w-[10rem] z-50 pt-2">
                                            <ul className="invisible  group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 bg-[#221C5A]  rounded shadow-lg">
                                                {item.children.map((child, idx) => (
                                                    <li key={idx}>
                                                        <Link
                                                            href={child.path}
                                                            className="block px-4 py-2 text-sm text-white hover:text-[#E625A4]"
                                                        >
                                                            {child.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>

                            ))}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>


    );
}

export default Navbar;