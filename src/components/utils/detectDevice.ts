type DeviceType = "mobile" | "tablet" | "desktop";

interface DeviceInfo {
    type: DeviceType;
    os: string | null;
    browser: string | null;
}

export const detectDevice = (userAgent: string): DeviceInfo => {
    const ua = userAgent.toLowerCase();
    let type: DeviceType = "desktop"; // Default
    let os: string | null = null;
    let browser: string | null = null;

    // OS Detection
    if (/android/i.test(ua)) {
        os = "Android";
    } else if (/iphone|ipad|ipod/i.test(ua)) {
        os = "iOS";
    } else if (/windows/i.test(ua)) {
        os = "Windows";
    } else if (/macintosh|mac os x/i.test(ua)) {
        os = "macOS";
    }

    // Browser Detection
    if (/chrome|crios|crmo/i.test(ua) && !/edg|opr|opera/i.test(ua)) {
        browser = "Chrome";
    } else if (/firefox|fxios/i.test(ua)) {
        browser = "Firefox";
    } else if (/safari/i.test(ua) && !/chrome|crios|crmo/i.test(ua)) {
        browser = "Safari";
    } else if (/edg/i.test(ua)) {
        browser = "Edge";
    }

    // Device Type Detection
    const mobileRegex =
        /mobile|phone|android|iphone|ipod|blackberry|iemobile|opera mini/i;
    const tabletRegex =
        /tablet|ipad|playbook|silk|android(?!.*mobile)|kindle|gt-p1000|sch-i800/i;

    if (tabletRegex.test(ua)) {
        type = "tablet";
    } else if (mobileRegex.test(ua)) {
        type = "mobile";
    }

    return { type, os, browser };
};
