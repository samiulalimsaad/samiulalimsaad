import SocialLinks from "@/components/sections/SocialLinks";
import Image from "next/image";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full bg-linear-to-b from-transparent via-sky-50/60 to-indigo-50/60 border-t border-white/60 mt-10 animate-soft-in">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <div className="flex items-center gap-2 text-sm font-semibold tracking-wide text-zinc-700 uppercase">
                            <Image
                                src="/avatars/samiul-alim.png"
                                alt="Samiul Alim"
                                width={32}
                                height={32}
                                className="h-8 w-8 rounded-full"
                            />
                            <span className="bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                                Samiul Alim
                            </span>
                        </div>
                        <p className="text-xs text-zinc-500 mt-1">
                            Fullstack Web Developer · Crafting modern,
                            performant web experiences.
                        </p>
                        <p className="mt-3 text-xs text-zinc-500">
                            © {currentYear}{" "}
                            <span className="bg-linear-to-r from-cyan-500 via-indigo-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                                Samiul Alim
                            </span>
                            . All rights reserved.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-2">
                        <SocialLinks size={24} />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
