import { Image, ImageProps } from "antd";
import { FC } from "react";

interface ImageComponentsProps extends ImageProps {
  alt?: string
  className?: string;
}

const ImageComponent: FC<ImageComponentsProps> = ({ alt, className, ...props }) => {
  return (
    <>
      <Image alt={alt} className={`my-component ${className} `} {...props} />
    </>
  );
};

export default ImageComponent;
