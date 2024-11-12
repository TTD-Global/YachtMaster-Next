import React from 'react'
import {
  Button,
} from "@/components/ui"

interface EllipsisTextProps {
    children: any;
    onClick?: () => void ;
}

const EllipsisText:React.FC<EllipsisTextProps>  = ({ children, onClick }) => {
    const textRef = React.useRef<any>();
    const [readMore, setReadMore] = React.useState(false);

    React.useEffect(() => {
      if (textRef.current) {
        if (textRef.current.scrollHeight > (textRef.current.offsetHeight + 2)) {
          setReadMore(true);
        } 
      }
    }, [children ]);
  
  return (
    <div>
      <p ref={textRef} className={`line-clamp-2 text-[14px] font-[400] text-gray-600 tracking-[0.5px]`}>
        {children}
      </p>
      {readMore && (
        <Button
          variant={'link-color'}
          className='inline-block p-0 m-0 text-[14px] font-[500] tracking-[1.25px] leading-[20px]'
          shape={'round'}
          size={'lg'}
          onClick={(e) => { if (onClick) onClick() }}
        >
            See more
        </Button>
      )}
    </div>
  )
}

export default EllipsisText;