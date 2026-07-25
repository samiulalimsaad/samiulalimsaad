"use client";

import { useEffect } from "react";
import { trackVisitorVisit } from "@/server-actions/visit";

// Create a global variable to track if visitor has been logged
let visitorLogged = false;

export default function Visitor() {
    useEffect(() => {
        if (process.env.NODE_ENV === "production" && !visitorLogged) {
            visitorLogged = true;
            trackVisitorVisit();
        }
    }, []);

    return null;
}
