'use client'
import React from 'react'
import { Button } from '@/components/ui';
import { IconTickCircle } from '@/components/icons';
import IconWarning from '@/components/icons/IconWarning';
import { Modal } from 'antd';

interface ModalParticipantsMessageProps {
    className?: string;
    isOpen: boolean;
    qty: number;
    setIsOpen: (value: boolean) => void;
    handleCancel: () => void;
}
const ModalParticipantsMessage: React.FC<ModalParticipantsMessageProps> = ({
    qty, isOpen, setIsOpen, handleCancel
}) => {

    return (
        <Modal
            centered={true}
            transitionName=''
            footer={null}
            closeIcon={false}
            open={isOpen}
            title={null}
            // opacity={'no-background'}
            // closeBlur={true}
            // setIsOpen={setIsOpen}
            className='max-w-[280px] custom-modal '>
            <div className='flex justify-center p-4 rounded-xl border border-[#344053]'>
                <div className="inline-flex text-base font-semibold tracking-tight">
                    <IconWarning />
                    <span className="ml-2 ">You can only select up to {qty}</span>
                </div>
            </div>
        </Modal>
    )
}

export default ModalParticipantsMessage;