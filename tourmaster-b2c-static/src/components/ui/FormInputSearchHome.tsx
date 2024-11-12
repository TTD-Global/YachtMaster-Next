"use client";
import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/helpers/clsx";
import { IconSearchNormal } from "@/components/icons";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

export const InputVariants = cva(
  "outline outline-offset-0 outline-2 outline-transparent transition-all duration-200 ease-in-out focus-within:outline-primary-500 w-full h-12 pl-10 pr-[110px]",
  {
    variants: {
      shape: {
        default: "rounded-full",
        round: "rounded-3xl",
        circle: "rounded-full",
      },
    },
    defaultVariants: {
      shape: "default",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  search: any;
  setSearch: any;
}

const FormInputSearchHome = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, shape, search, setSearch, ...props }, ref) => {
    const Comp = "input";
    let router = useRouter();
    const handleSearch = (e: any) => {
      e.preventDefault();
      const query = {
        search_text: search ? search : "",
        is_search: "search",
      };
      const queryString = new URLSearchParams(query).toString();
      router.push(`/destination?${queryString}`, { scroll: false });
    };
    return (
      <>
        <div className="w-full relative">
          <div className="absolute top-3 left-3">
            <IconSearchNormal className="h-6 w-6 text-gray-500" />
          </div>
          <Comp
            className={cn(InputVariants({ shape, className }))}
            ref={ref}
            {...props}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute top-1 right-[2px]">
            <Button
              className="search-btn-from__button h-10 "
              variant="primary"
              shape={"round"}
              size="sm"
              onClick={handleSearch}
            >
              Search
            </Button>
          </div>
        </div>
      </>
    );
  }
);
FormInputSearchHome.displayName = "FormInputSearchHome";

export default FormInputSearchHome;
