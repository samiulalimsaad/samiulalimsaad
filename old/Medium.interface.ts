export interface BlogInterface {
    id: string;
    title: string;
    link: string;
    author: string;
    published: Date;
    created: Date;
    category: string[];
    content: string;
    enclosures: [];
    content_encoded: string;
    media: {};
}

export interface MediumInterface {
    title: string;
    description: string;
    link: string;
    image: string;
    category: string[];
    items: BlogInterface[];
}
