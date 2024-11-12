import React from 'react'
import { IconFacebook } from '@/components/icons';


const FacebookButton:React.FC = () => {
    const loginFacebook = async () => {
        // await googleAuth()
      };
  return (
    <>
      <button
        type="button"
        onClick={loginFacebook}
        className='flex items-center justify-center w-full h-[48px] rounded-full bg-[#1877F2] hover:bg-[#0C63D4] text-white duration-100'
      >
        <div className="flex items-center gap-x-3">
          <div className="w-6 h-6 flex items-center justify-center">
            <IconFacebook />
          </div>
          <div className="h-[26px] flex items-center justify-center text-[16px] font-[500]">
            Continue with Facebook
          </div>
        </div>
      </button>
    </>
  )
}

export default FacebookButton
