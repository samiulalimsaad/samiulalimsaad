import Image from "next/image";

type EvidenceImageProps = {
    src: string;
    alt: string;
    caption?: string;
    width?: number;
    height?: number;
};

export default function EvidenceImage({
    src,
    alt,
    caption,
    width = 1200,
    height = 630,
}: EvidenceImageProps) {
    return (
        <figure className="my-8">
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white/60 p-2 backdrop-blur-sm">
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className="w-full rounded-xl object-cover"
                />
            </div>
            {caption && (
                <figcaption className="mt-3 flex items-center gap-2 text-center text-xs text-foreground/50">
                    <span className="inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-600">
                        Evidence
                    </span>
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
