import Link from 'next/link';
import React from 'react';

function Footer() {
    const socialLinks = [
        {
            name: "Twitter",
            url: "https://twitter.com",
        },
        {
            name: "Facebook",
            url: "https://facebook.com",
        },
        {
            name: "Instagram",
            url: "https://instagram.com",
        },
        {
            name: "Behance",
            url: "https://behance.net",
        },
    ];
    return (
        <div>
            <footer className="bg-background text-white text-base font-light shadow-sm">
                <div className="w-full mx-auto max-w-screen-xl  px-5 md:flex py-10 lg:px-36  md:items-center md:justify-between">
                    <span className="text-center flex justify-center">
                        © 2022 Blanka WordPress Theme by CocoBasic.
                    </span>
                    <ul className="flex justify-center items-center pt-3 sm:pt-0">


                        {
                            socialLinks?.map((item , index) => {
                                return <li key={index}>
                                    <Link href="#" className="hover:underline me-4 md:me-6">
                                        {item?.name}
                                    </Link>
                                </li>
                            })
                        }


                    </ul>
                </div>
            </footer>
        </div>
    );
}

export default Footer;