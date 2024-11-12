import { Rate, RateProps } from "antd";
import { FC } from "react";

interface RateComponentsProps extends RateProps {
  className?: string;
}

const RateComponent: FC<RateComponentsProps> = ({ className, ...props }) => {
  return (
    <>
      <Rate
        allowHalf
        style={{ color: "#FDB022", fontSize: 26 }}
        className={`my-component ${className} `}
        {...props}
      />
    </>
  );
};

export default RateComponent;
