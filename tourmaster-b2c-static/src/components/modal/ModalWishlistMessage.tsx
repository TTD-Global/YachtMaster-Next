'use client'
import React from 'react'
import { Button, Modal } from '@/components/ui';
import { IconTickCircle } from '@/components/icons';

interface ModalWishlistMessageProps {
    className?: string;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    handleCancel: () => void;
}
const ModalWishlistMessage:React.FC<ModalWishlistMessageProps> = ({
    isOpen, setIsOpen, handleCancel
}) => {

    return (
        <Modal 
            isOpen={isOpen} 
            opacity={'no-background'} 
            closeBlur={true}
            setIsOpen={setIsOpen} 
            className='
                max-w-[200px] 
                min-h-[20px]
                bg-white 
                text-success-700 
                text-[16px]
                font-[600]
                border 
                border-success-700 
                shadow-none
                p-4
                !rounded-xl
            '
        >
            <div className="inline-flex">
                <IconTickCircle/>
                <span className="ml-2">Added to wishlist!</span>
            </div>
        </Modal>
    )
}

export default ModalWishlistMessage;