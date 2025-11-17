"use client";

import { trackVisitorVisit } from "@/server-actions/visit";
import { useEffect } from "react";

// Create a global variable to track if visitor has been logged
let visitorLogged = false;

export default function Visitor() {
    console.log(
        "Visitor component rendered",
        process.env.NODE_ENV,
        visitorLogged
    );

    useEffect(() => {
        if (!visitorLogged) {
            visitorLogged = true;
            trackVisitorVisit();
        }
    }, []);

    return null;
}
