import { cn } from "@/helpers/clsx";
import { Card, CardProps } from "antd";
import * as React from "react";

interface CarouselComponentProps extends CardProps {
  className?: string;
}

const CardComponents = React.forwardRef<HTMLDivElement, CarouselComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <Card 
        {...props}
        ref={ref}
        style={{ width: "100%" }}
        // bodyStyle={{padding: "0"}}
        className={cn(`my-component rounded-2xl px-8 py-6`, className)}
      />
    );
  }
);

CardComponents.displayName = "CardComponents"
export default CardComponents;
