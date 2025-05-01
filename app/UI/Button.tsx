import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

function Button({ value, href }: { value: string, href: string }) {
    return (
        <>
            <Link href={href} className="group bg-primary px-10 py-4 text-base font-light rounded-full text-white text-center  items-center  inline-flex space-x-2 shadow-2xl">
                <span>
                    {value}
                </span>
                <BiRightArrowAlt  className="group-hover:rotate-90 transition  delay-50 duration-300" size={25} />
            </Link>
        </>
    );
}

export default Button;