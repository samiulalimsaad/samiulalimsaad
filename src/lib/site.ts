export const SITE_URL = "https://www.samiulalimsaad.com";
export const PROFILE_ID = `${SITE_URL}/#person`;
export const AI_CONTEXT_URL = `${SITE_URL}/ai-context`;

export function absoluteUrl(path: string) {
    return new URL(path, SITE_URL).toString();
}
