import { trackVisitorVisit } from "@/server-actions/visit";
import { headers } from "next/headers";

// Create a global variable to track if visitor has been logged
let visitorLogged = false;

export default async function Visitor() {
    if (process.env.NODE_ENV === "production" && !visitorLogged) {
        visitorLogged = true;
        trackVisitorVisit(headers()); // Call without headers since we're handling it internally
    }

    return null;
}
