import React from 'react'
import { IconGoogle } from '@/components/icons';

interface LoginGoogleProps {
    onClick?: () => void
  }

const GoogleButton:React.FC<LoginGoogleProps> = ({ onClick }) => {
    const loginGoogle = () => {
        if (onClick) {
          onClick()
        }
    };
    return (
        <>
            <button
                type="button"
                onClick={loginGoogle}
                // variant="tertiary-gray"
                className='flex items-center justify-center w-full h-[48px] rounded-full border-[1px] border-solid border-[#D1D4DA] hover:bg-[#F9FAFB] active:shadow-[0_1px_2px_0px_rgba(16,24,40,0.05)] duration-100'
            >
                <div className="flex items-center gap-x-3 py-[10px]">
                <div className="w-7 h-7 flex items-center justify-center">
                    <IconGoogle />
                </div>
                <div className="h-[26px] flex items-center justify-center text-[16px] text-[#344054] font-[500]">
                    Continue with Google
                </div>
                </div>
            </button>

        </>
    )
}

export default GoogleButton