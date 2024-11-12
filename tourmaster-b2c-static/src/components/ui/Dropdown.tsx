import { cn } from "@/helpers/clsx";
import { Dropdown as DropdownComponent, DropdownProps } from "antd";

interface DropdownComponentsProps extends DropdownProps {
  className?: string;
  children?: React.ReactNode;
  placement?: "topLeft" | "topCenter" | "topRight" | "bottomLeft" | "bottomCenter" | "bottomRight" | "top" | "bottom" | undefined
}

const Dropdown = ({className, children, placement = "top", ...props} : DropdownComponentsProps) => {
  return (
    <>
        <DropdownComponent
          trigger={["click"]}
          className={cn("", className)}
          placement={placement}
          {...props}
        >
          {children}
        </DropdownComponent>
    </>
  );
};

export default Dropdown;
