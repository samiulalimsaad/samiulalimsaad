const RESUME_URL =
    "https://drive.google.com/file/d/1ZtcoHzmc2DGqJOYZG3dMjHK970_POjsK/view?usp=sharing";

export default function ResumeButton() {
    return (
        <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-cyan-100 bg-white/90 px-5 py-2 text-sm font-semibold text-cyan-700 transition hover:border-cyan-300 hover:bg-cyan-50/80"
        >
            Resume
        </a>
    );
}
