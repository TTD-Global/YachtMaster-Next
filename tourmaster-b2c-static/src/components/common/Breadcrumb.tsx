import { cn } from "@/helpers/clsx";
import * as React from "react"
import { IconChevronRight } from "@/components/icons";

export interface OverflowProps extends React.InputHTMLAttributes<HTMLInputElement> {
    items: any[];
}

const Breadcrumb = React.forwardRef<HTMLDivElement, OverflowProps>(
    ({ className, items,  ...props }, ref) => {

      return (
        <div
          className={cn(
            "flex min-w-[150px]",
            className
          )}
          ref={ref}
          {...props}
        >
            <ul className="tour-breadcrumb">
                { items.map((item, index) => (
                    <li className="capitalize " key={index}>{item.title} <span><IconChevronRight className="w-4 h-4"/></span></li>
                ))}
            </ul>
        </div>
      )
    }
  )
  Breadcrumb.displayName = "Breadcrumb"
  
  export default Breadcrumb