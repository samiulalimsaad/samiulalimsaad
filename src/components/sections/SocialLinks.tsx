import {
    Code2,
    Facebook,
    Github,
    Linkedin,
    Mail,
    MessageCircle,
    MessageCircleCode,
    MessageSquareCode,
    Phone,
    Twitter,
} from "lucide-react";

const socialList = [
    {
        Icon: Github,
        href: "https://github.com/samiulalimsaad",
        label: "GitHub",
    },
    {
        Icon: Linkedin,
        href: "https://www.linkedin.com/in/samiulalimsaad",
        label: "LinkedIn",
    },
    {
        Icon: Twitter,
        href: "https://twitter.com/samiulalimsaad",
        label: "Twitter",
    },
    {
        Icon: Code2,
        href: "https://codeforces.com/profile/samiulalimsaad",
        label: "Codeforces",
    },
    {
        Icon: MessageSquareCode,
        href: "https://discord.com/users/938388181202653224",
        label: "Discord",
    },
    {
        Icon: Facebook,
        href: "https://facebook.com/samiulalimsaad",
        label: "Facebook",
    },
    {
        Icon: MessageCircle,
        href: "https://m.me/samiulalimsaad",
        label: "Messenger",
    },
    {
        Icon: MessageCircleCode,
        href: "https://wa.me/8801715378032",
        label: "WhatsApp",
    },
    { Icon: Mail, href: "mailto:samiulalimsaad@gmail.com", label: "Email" },
    { Icon: Phone, href: "tel:+8801715378032", label: "Phone" },
];
export default function SocialLinks({ size = 28 }: { size?: number }) {
    return (
        <div className="flex flex-wrap items-center justify-center gap-5 my-4">
            {socialList.map(({ Icon, href, label }) => (
                <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="rounded-xl bg-linear-to-br from-indigo-500 to-cyan-400 p-3 transition-transform duration-300 hover:scale-110 hover:from-cyan-600 hover:to-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                >
                    <Icon size={size} className="text-white cursor-pointer" />
                </a>
            ))}
        </div>
    );
}
