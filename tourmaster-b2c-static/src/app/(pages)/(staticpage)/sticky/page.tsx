import React from 'react'

const Page = () => {
  return (
    <>
        <div className="bg-red-200 min-h-[540px]">
            content section 1
        </div>
        <div className="w-full bg-green-200 sticky top-[78px] z-[10] p-8">sticky level 2</div>
        <div className="bg-red-300 min-h-[840px]">
            content section 2
        </div>
        <div className="bg-red-400 min-h-[840px]">
            content section 3
        </div>
        <div className="bg-red-500 min-h-[840px]">
            content section 4
        </div>
        <div className="bg-red-600 min-h-[840px]">
            content section 5
        </div>
    </>
  )
}

export default Page