import Image from "next/image";

type EvidenceImageProps = {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
};

export default function EvidenceImage({ src, alt, caption, width, height }: EvidenceImageProps) {
    return (
        <figure className="my-8">
            <div
                className="mx-auto w-full overflow-hidden rounded-2xl border border-gray-200 bg-white/60 p-2 backdrop-blur-sm"
                style={{ maxWidth: width + 16 }}
            >
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    sizes="(min-width: 56rem) 42rem, 100vw"
                    className="h-auto w-full rounded-xl"
                />
            </div>
            {caption && (
                <figcaption className="mx-auto mt-3 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-foreground/50">
                    <span className="inline-flex items-center gap-1 rounded-full border border-indigo-100 bg-indigo-50 px-2 py-0.5 text-[10px] font-medium text-indigo-600">
                        Evidence
                    </span>
                    {caption}
                </figcaption>
            )}
        </figure>
    );
}
