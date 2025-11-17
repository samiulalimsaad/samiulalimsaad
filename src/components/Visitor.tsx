"use client";

import { trackVisitorVisit } from "@/server-actions/visit";
import { useEffect } from "react";

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
