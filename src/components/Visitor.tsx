import { trackVisitorVisit } from "@/server-actions/visit";
import { headers } from "next/headers";

export default async function Visitor() {
    const headersList = headers();
    const result = await trackVisitorVisit(headersList);

    if (result.success) {
        console.log("Visitor tracked:", result.ip);
    } else {
        console.error("Tracking failed:", result.error);
    }

    return null;
}
