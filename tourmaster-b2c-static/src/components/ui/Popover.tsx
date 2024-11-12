import { Popover, PopoverProps } from "antd";
import { FC } from "react";
interface PopoverComponentsProps extends PopoverProps {
  className?: string;
}

const PopOverComponent: FC<PopoverComponentsProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Popover className={`${className}`} {...props}>
      {children}
    </Popover>
  );
};

export default PopOverComponent;
