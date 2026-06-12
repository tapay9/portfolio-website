import Image from "next/image"
import Link from "next/link";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const socialIcon = [
        {
            img: "/images/icon/linkedin-icon.svg",
            href: "https://www.linkedin.com/in/taniyah-payton-3aa217381",
            icon: "Linkedin"
        },
        {
            img: "/images/icon/github-icon.svg",
            href: "https://github.com/tapay9",
            icon: "Github"
        },
        {
            img: "/images/icon/resume-icon.svg",
            href: "https://docs.google.com/document/d/1tbc0YsLJjkvIZtdhyOK1Pwf408I5B3bO/edit?usp=sharing&ouid=100021241488311655742&rtpof=true&sd=true",
            icon: "Resume"
        },
    ];

    return (
        <section>
            <div className="container">
                <div>
                    
                    {/* Banner */}
                    <div className="w-full h-72">
                        <Image
                            src={"/images/hero-sec/bg-img.jpg"}
                            alt="banner-img"
                            width={1080}
                            height={267}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="border-x border-primary/10">
                        <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">

                            <div className="absolute top-0 transform -translate-y-1/2">
                                <div className="relative w-[145px] h-[145px]">
                                    <Image
                                        src={"/images/hero-sec/user.jpg"}
                                        alt="user-img"
                                        fill
                                        className="object-cover rounded-full border-4 border-white"
                                    />
                                    <span className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                                <h1>Taniyah Payton</h1>
                                <p className="text-violet-700 font-normal">Computer Science Student</p>

                                <div className="flex items-center gap-2">
                                    <Image
                                        src={"/images/icon/map-icon.svg"}
                                        alt="map-icon"
                                        width={20}
                                        height={20}
                                    />
                                    <p className="text-primary">Baltimore, MD</p>
                                </div>
                            </div>

                            {/* Social + Button */}
                            <div className="flex flex-col md:flex-row items-center gap-4">
                                <div className="flex items-center gap-2">
                                    {socialIcon?.map((value, index) => {
                                        return (
                                            <a
                                                href={value?.href}
                                                key={index}
                                                rel="noopener noreferrer"
                                                key={index}
                                                className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full"
                                            >
                                                <Image
                                                    src={value?.img}
                                                    alt={value?.icon}
                                                    width={18}
                                                    height={18}
                                                />
                                            </a>
                                        )
                                    })}
                                </div>

                                <Button asChild className="h-auto rounded-full p-0.5!">
                                    <Link
                                        href="mailto:tapay9@morgan.edu"
                                        className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                                    >
                                        <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                                            <Image
                                                src="/images/icon/heart-icon.svg"
                                                alt="heart-icon"
                                                width={18}
                                                height={18}
                                                className="invert"
                                            />
                                            <span className="text-sm sm:text-base font-semibold text-white">
                                                Let's connect!
                                            </span>
                                        </span>
                                    </Link>
                                </Button>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection
