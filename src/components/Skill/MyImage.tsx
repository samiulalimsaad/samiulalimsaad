interface MyImageProps {
    height: string | number;
    src: string;
    alt: string;
    classNames?: string;
}

const MyImage = ({ height, src, alt }: MyImageProps) => {
    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={src}
            height={height}
            className="duration-300 hover:scale-105"
            alt={alt}
        />
    );
};

export default MyImage;
