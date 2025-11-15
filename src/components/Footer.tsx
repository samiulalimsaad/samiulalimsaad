import SocialLinks from "@/components/sections/SocialLinks";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full bg-linear-to-b from-transparent via-sky-50/60 to-indigo-50/60 border-t border-white/60 mt-10">
            <div className="mx-auto max-w-6xl px-4 py-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-sm font-semibold tracking-wide text-zinc-700 uppercase">
                            Samiul Alim
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">
                            Fullstack Web Developer · Crafting modern,
                            performant web experiences.
                        </p>
                        <p className="mt-3 text-xs text-zinc-500">
                            © {currentYear} Samiul Alim. All rights reserved.
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
