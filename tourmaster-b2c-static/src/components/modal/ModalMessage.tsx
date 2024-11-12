'use client'
import React from 'react'
import { Button, Modal } from '@/components/ui';
import { IconTickCircle, IconDanger, IconInfo, IconInfoCircle } from '@/components/icons';
import { cn } from '@/helpers/clsx';

interface ModalMessageProps {
    className?: string;
    type?: string;
    label?: string;
    isOpen: boolean;
    opacity?: string;
    closeBlur?: boolean;
    setIsOpen: (value: boolean) => void;
}

const ModalMessage:React.FC<ModalMessageProps> = ({
    isOpen, 
    setIsOpen, 
    type, 
    opacity,
    closeBlur,
    className, 
    label
}) => {
  return (
    <Modal 
        isOpen={isOpen} 
        opacity={opacity} 
        closeBlur={closeBlur}
        setIsOpen={setIsOpen} 
        className={cn(`
            max-w-[420px] 
            min-h-[20px]
            bg-white 
            text-[16px]
            font-[600]
            border 
            shadow-none
            p-4
            !rounded-xl
            ${type === 'success'
                ? "text-success-700 border-success-700"
                : type === 'danger'
                ? "text-error-700 border-error-700"
                : type === 'info-gray'
                ? "text-gray-700 border-gray-700"
                : "text-gray-900 border-gray-900"
            }
        `, className)}
    >
        <div className="inline-flex">
            { type === 'success'
                ? <IconTickCircle/>
                : type === 'danger'
                ? <IconDanger/>
                : type === 'info-gray'
                ? <IconInfoCircle/>
                : ""
            }
            
            <span className="ml-2">
                {label ? label : "Added to wishlist!"}
            </span>
        </div>
        
    </Modal>
  )
}

export default ModalMessage;
