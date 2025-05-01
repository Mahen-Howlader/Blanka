import { leagueScript } from "@/app/layout";
import Button from "@/app/UI/Button";

function Hero() {

    return (
        <section className="flex justify-center items-center text-center scroll-smooth font-light text-white bg-[url('https://i.postimg.cc/DwxvGwgj/hero-img2.jpg')] min-h-[80vh] max-h-[80vh] md:min-h-screen md:max-h-screen bg-fixed bg-cover bg-center ">
           <div className="space-y-10">
           <div className={leagueScript.className}>
                <h1 className=" text-8xl md:text-[7.5rem]">
                    Hello
                </h1>
            </div>
            <div>
                <h2 className="text-xl md:text-[32px]">We are old school Web Designers <br />
                    & Developers from New York</h2>
            </div>
            <div className="md:pt-10">
                <Button value="Hire Us Now" href="contact"></Button>
            </div>
           </div>
        </section>
    );
}

export default Hero;