import { Image, ImageProps } from "antd";
import { FC } from "react";

const ImageGroupComponent = ({ ...props }) => {
  return (
    <>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
        {...props}
      />
    </>
  );
};

export default ImageGroupComponent;
