import { cn } from "@/helpers/clsx";
import * as React from "react"
import { Tag } from '@/components/ui';

export interface OverflowProps extends React.InputHTMLAttributes<HTMLInputElement> {
    visibilityMap: any;
}

const Overflow = React.forwardRef<HTMLDivElement, OverflowProps>(
    ({ className, children, visibilityMap,  ...props }, ref) => {
        const shouldShowMenu = React.useMemo(
            () => Object.values(visibilityMap).some((v) => v === false),
            [visibilityMap]
        );

      return (
        <div
          className={cn(
            "flex min-w-[150px]",
            className
          )}
          ref={ref}
          {...props}
        >
            {React.Children.map(children, (child:any) => {
                return React.cloneElement(child, {
                    className: child.props.className + ` ${visibilityMap[child.props['data-targetid']]? "visible" : 'inVisible'}`,
                });
            })}
            {shouldShowMenu &&  (
              <Tag color="blue" bordered={false} className='tag-popular'> + {JSON.stringify(Object.values(visibilityMap).filter((list) => list === true).length)}</Tag>
            )}
        </div>
      )
    }
  )
  Overflow.displayName = "Overflow"
  
  export default Overflow;
