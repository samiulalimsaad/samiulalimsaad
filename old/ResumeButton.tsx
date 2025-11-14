"use client";

import Link from "next/link";

const ResumeButton = () => {
    return (
        <Link
            href="https://drive.google.com/file/d/1ZtcoHzmc2DGqJOYZG3dMjHK970_POjsK/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            onClick={() =>
                !window.open(
                    "https://drive.google.com/file/d/1ZtcoHzmc2DGqJOYZG3dMjHK970_POjsK/view?usp=sharing",
                    "somesite",
                    "width=800, height=1200"
                )
            }
            className="bg-pink-700 btn hover:bg-pink-900"
        >
            Resume
        </Link>
    );
};

export default ResumeButton;
