import React from 'react'

interface BoxContentBlueProps {
    title: string;
    detail: string | React.ReactNode;
  }
  
const BoxContentBlue: React.FC<BoxContentBlueProps> = ({ title, detail }) => {
  return (
    <div className="w-full flex flex-col gap-6">
      <p className="text-gray-900 text-2xl font-medium">{title}</p>
      <div className="px-8 py-6 text-black tracking-[0.5px] bg-primary-25 rounded-2xl">
        {detail}
      </div>
    </div>
  )
}

export default BoxContentBlue;
