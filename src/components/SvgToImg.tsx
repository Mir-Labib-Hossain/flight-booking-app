import Image from "next/image";

const SvgToImg = ({
    code,
    alt,
    width,
    height,
    className,
  }: {
    code: string;
    alt: string;
    width: number;
    height: number;
    className?: string;
  }) => {
    return (
      <Image
        src={`data:image/svg+xml;utf8,${encodeURIComponent(code)}`}
        alt={alt}
        width={width}
        height={height }
        className={className}
      />
    );
  };
  
  export default SvgToImg;
  