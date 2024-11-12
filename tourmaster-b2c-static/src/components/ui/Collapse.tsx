import { Collapse, CollapseProps } from 'antd';
import React from 'react'
interface CarouselComponentProps extends CollapseProps {
    className?: string;
}

const CollapseComponent = React.forwardRef<HTMLInputElement, CarouselComponentProps>(
    ({ className, ...props }, ref) => {
      return (
        <Collapse 
          {...props}
          className={className}
          ref={ref}
          expandIconPosition="end"
        />
      );
    }
);

CollapseComponent.displayName = "CollapseComponent"
export default CollapseComponent; 
