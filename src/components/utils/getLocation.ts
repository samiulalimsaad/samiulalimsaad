import axios from "axios";

export async function getLocation(ip: string) {
    try {
        const response = await axios.get(`https://ipinfo.io/${ip}/json`);
        const locationData = response.data;
        const location = {
            city: locationData.city,
            region: locationData.region,
            country: locationData.country,
            // Add more fields as needed
        };
        return location;
    } catch (error) {
        return {};
    }
}
