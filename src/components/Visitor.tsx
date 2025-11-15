"use client";

import { useEffect } from "react";

export default function Visitor() {
    useEffect(() => {
        if (process.env.NODE_ENV === "production") {
            fetch("/api/visit", { method: "POST" });
        }
    }, []);

    return null;
}
