"use client"
import { ReactNode, useEffect, useRef } from "react";
import { cn } from "@/helpers/clsx";
import IconCloseModal from "@/components/icons/IconCloseModal";
import { Portal } from "@/components/ui/Portal";

interface ModalProps {
  /*
    open state
  */
  isOpen: boolean;
  /*
    function to change state
  */
  setIsOpen: (value: boolean) => void
  /*
    show close button or not
  */
  closeButton?: boolean;
  /*
    children inside modal
  */
  children?: ReactNode;
  /*
    forward classname to custom outside component
  */
  closeBlur?: boolean;
  opacity?: string;
  title?: string;
  closeClassName?: string;
  className?: string
}

export const Modal = ({ 
  closeButton = false, 
  children, 
  isOpen, 
  setIsOpen, 
  opacity, 
  closeBlur,
  title, 
  closeClassName,
  className 

}: ModalProps) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  const childrenRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const handleClick = (event: any) => {
      if (
        // parentRef.current &&
        // parentRef.current.contains(event.target) &&
        childrenRef.current &&
        !childrenRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const touchHandler = (e: any) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };
    if (isOpen) {
      document.body.classList.add("no-scroll");
      document.addEventListener("wheel", touchHandler, { passive: false });
    } else {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("wheel", touchHandler, { capture: false });
    }

    return () => {
      document.body.classList.remove("no-scroll");
      document.removeEventListener("wheel", touchHandler, { capture: false });
    };
  }, [isOpen]);

  return (
    <>
      <Portal>
        <div
          ref={parentRef}
          className={`
            fixed 
            flex items-center 
            justify-center 
            inset-0 z-50 
            ${ opacity === 'medium'
                ? "bg-[rgba(0,0,0,0.80)]" 
                : opacity === 'no-background'
                ? " "
                : "bg-[rgba(0,0,0,0.50)]"} 
            ${ closeBlur ? " " : "backdrop-blur-[8px]"} 
            shadow-[0_8px_15px_14px_rgba(24,39,75,0.16)] 
            ${isOpen ? "animate-fadeinfast" : "animate-fadeoutfast hidden"}
          `}
        >
          <dialog
            ref={childrenRef}
            className={cn(`
              max-w-[1400px] max-h-[800px]
              min-h-[200px]
              rounded-[8px] bg-white
              left-[50%] top-[50%] z-50 shadow-[0_1px_3px_0px_rgba(16,24,40,0.10)] grid
              translate-x-[-50%] translate-y-[-50%] border
              p-10 duration-100 sm:rounded-lg md:w-full
            `, className)}
          >
            <div className={`relaitve min-w-[320px] grid grid-cols-1 duration-100  ${title? "max-h-[720px] overflow-y-auto" : " "}`}>
              {closeButton && (
                <div className={cn(`relative ${title? "border-b mb-4 pb-4" : "border-none"} `, closeClassName)}>
                  {title && (<span className="w-full text-primary-700 font-[500] text-[24px]">{title}</span>)}
                  <div
                    onClick={() => setIsOpen(false)}
                    className={`absolute right-0 top-0 flex items-center justify-center rounded-sm opacity-70 hover:opacity-100 duration-100 cursor-pointer`}
                  >
                    <IconCloseModal className="w-[24px] h-[24px]" /> 
                  </div>
                </div>
              )}
              {children}
            </div>
          </dialog>
        </div>
      </Portal>
    </>
  );
};