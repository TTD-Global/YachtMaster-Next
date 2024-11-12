import { cn } from "@/helpers/clsx";
import * as React from "react"

export interface TitlePageProps extends React.HTMLAttributes<HTMLElement> {
    title: string | undefined;
}

const TitlePage = React.forwardRef<HTMLDivElement, TitlePageProps>(
    ({ className, title,  ...props }, ref) => {

      return (
        <h1
          className={cn(
            "text-gray-900 text-[24px] font-[500] my-4",
            className
          )}
          ref={ref}
          {...props}
        >
            {title}
        </h1>
      )
    }
  )
  TitlePage.displayName = "TitlePage"
  export default TitlePage;
