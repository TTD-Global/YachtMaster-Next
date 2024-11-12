"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui";
import { IconHeart, IconHeartOutline } from "@/components/icons";
import { cn } from "@/helpers/clsx";
import { ModalLogin } from "@/components/modal";

interface WishlistButton {
  className?: string;
  labelHidden?: boolean;
  variant?: string;
  id?: number;
  wishlist?: boolean;
}
const WishlistButton: React.FC<WishlistButton> = ({
  className,
  labelHidden = true,
  variant,
  id,
  wishlist = false,
}) => {
  const [modalLogin, setModalLogin] = useState(false);
  const [isSaved, setIsSaved] = useState<boolean>(wishlist);
  const [open, setOpen] = useState(false);
  const handleOpenChange = async (newOpen: boolean) => {
      setModalLogin(true);
  };
  useEffect(() => {
    setIsSaved(wishlist);
  }, [wishlist]);
  return (
    <>
      <ModalLogin isOpen={modalLogin} setIsOpen={setModalLogin} />
      <Button
        variant="link-gray"
        shape={"round"}
        className={`px-0 text-[14px] py-2 ${variant ? "text-white" : "text-gray-700"}`}
        onClick={() => handleOpenChange(!isSaved)}
      >
        {isSaved ? (
          <IconHeart
            className={cn(`w-4 h-4 mr-[8px] text-error-500 `, className)}
          />
        ) : (
          <IconHeartOutline className={cn(`w-4 h-4 mr-[8px] `, className)} />
        )}
        {!labelHidden && <>Add to wishlist</>}
      </Button>
    </>
  );
};

export default WishlistButton;
