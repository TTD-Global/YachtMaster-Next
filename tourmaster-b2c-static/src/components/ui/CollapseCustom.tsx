import { cn } from "@/helpers/clsx";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import IconChevronUp from "../icons/IconChevronUp";
import IconChevronDown from "../icons/IconChevronDown";

export const CollapseVariants = cva("w-full overflow-hidden  relative", {
  variants: {
    variant: {
      primary: "bg-base-background",
    },
    bordered: {
      false: "border-none",
      true: "collapse-borderX "
    },
  },
  defaultVariants: {
    variant: "primary",
    bordered: false,
  },
});

export interface CollapseCustomProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof CollapseVariants> {
  className?: string;
  items: { key: string; label: React.ReactNode; children: React.ReactNode }[];
  defaultActiveKey?: string[];
  expandIcon?: (panelProps: { isActive: boolean }) => React.ReactNode;
}

const CollapseCustom = React.forwardRef<HTMLDivElement, CollapseCustomProps>(
  (
    { className, variant, bordered, items, defaultActiveKey, expandIcon, ...props },
    ref
  ) => {
    const [activeKeys, setActiveKeys] = React.useState<string[]>(
      defaultActiveKey || []
    );

    const handleToggle = (key: string) => {
      setActiveKeys((prevActiveKeys) =>
        prevActiveKeys.includes(key)
          ? prevActiveKeys.filter((activeKey) => activeKey !== key)
          : [...prevActiveKeys, key]
      );
    };

    return (
      <div className="flex flex-col gap-4 group-collapse" >
        {items.map((item) => {
          const isActive = activeKeys.includes(item.key);
          return (
            <div key={item.key}>
              <div
                onClick={() => handleToggle(item.key)}
                className={`rounded-2xl  ${cn(
                  CollapseVariants({ variant, bordered, className })
                )}`}
                ref={ref}
                {...props}
              >
                <div className="self-stretch h-[68px] flex-col justify-center items-start gap-4 flex p-[10px] cursor-pointer bg-green-300 rounded-b-2xl">
                  <div className="self-stretch justify-start items-start inline-flex px-3 py-2">
                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                      <div className="self-stretch text-gray-900 text-xl font-medium tracking-tight">
                        {item.label}
                      </div>
                    </div>
                    <div className="w-6 h-6 justify-center items-center flex">
                      <div className="w-6 h-6 relative">
                        {expandIcon ? (
                          expandIcon({ isActive })
                        ) : isActive ? (
                          <IconChevronUp className="text-[#1A1A1A]" />
                        ) : (
                          <IconChevronDown className="#1A1A1A" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ type: "spring", duration: 0.4, bounce: 0 }}
                    >
                      <div className="self-stretch flex-col justify-start items-start flex px-6 pb-4">
                        <div className="self-stretch justify-start items-center gap-4 inline-flex">
                          <div className="grow shrink basis-0 flex-col justify-start items-start gap-5 inline-flex">
                            <div className="self-stretch flex-col justify-start items-start flex">
                              <div className="self-stretch text-zinc-900 text-base font-normal tracking-wide">
                                {item.children}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              {/* <div className="w-full h-[1px] bg-gray-200 mt-4"></div> */}
            </div>
          );
        })}
      </div>
    );
  }
);

CollapseCustom.displayName = "CollapseCustom";
export default CollapseCustom;
