import Image from "next/image";
const socials = [
    {
        href: "https://github.com/samiulalimsaad",
        icon: "/socials/github.svg",
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/samiulalimsaad",
        icon: "/socials/linkedin.svg",
        label: "LinkedIn",
    },
    {
        href: "https://twitter.com/samiulalimsaad",
        icon: "/socials/twitter.svg",
        label: "Twitter",
    },
];
export default function Hero() {
    return (
        <section className="relative flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-[#1e293b] via-indigo-800 to-cyan-800 text-zinc-50">
            <div className="z-10 rounded-full border-4 border-indigo-500 bg-white shadow-xl">
                <Image
                    src="/avatars/samiul-alim.png"
                    width={140}
                    height={140}
                    alt="Samiul Alim"
                    className="rounded-full"
                    priority
                />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-linear-to-tr from-cyan-400 to-indigo-400 bg-clip-text text-transparent shadow-sm">
                Hi, I’m Samiul Alim
            </h1>
            <h2 className="text-xl sm:text-2xl font-semibold text-zinc-100/80 tracking-wider drop-shadow-sm">
                Software Engineer • Fullstack Web Developer
            </h2>
            <div className="flex gap-4 mt-4">
                {socials.map((s) => (
                    <a
                        key={s.href}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="rounded-full bg-zinc-800 bg-opacity-60 p-3 transition-transform hover:scale-110 hover:bg-opacity-90 w-12 h-12 flex items-center justify-center shadow"
                    >
                        <Image
                            src={s.icon}
                            alt={s.label}
                            width={24}
                            height={24}
                        />
                    </a>
                ))}
            </div>
        </section>
    );
}
