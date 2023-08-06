"use client";
import Aos from "aos";
import { useEffect } from "react";

const AOSInit = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        Aos.init({
            easing: "ease-out-cubic",
            offset: 50,
        });
    }, []);
    return <>{children}</>;
};

export default AOSInit;
