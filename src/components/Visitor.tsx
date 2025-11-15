import { trackVisitorVisit } from "@/server-actions/visit";
import { headers } from "next/headers";

export default async function Visitor() {
    if (process.env.NODE_ENV === "production") trackVisitorVisit(headers());

    return null;
}
