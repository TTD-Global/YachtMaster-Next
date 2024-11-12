import { cn } from '@/helpers/clsx';
import React from 'react'
// import DOMPurify from 'dompurify'

interface DescriptionContentProps {
    className?: string;
    title?: string;
    content: any;
}

const DescriptionContent:React.FC<DescriptionContentProps> = ({
    className, 
    title,
    content
}) => {
  // const data = '<ul><li>awdawdawdawdawaw</li><li>daw</li><li>daw</li><li>da</li><li>wd</li><li>aw</li><li>daw</li><li>daw</li><li>daw</li></ul><ol><li>awd</li><li>awd</li><li>aw</li><li>adw</li><li>da</li><li>w</li><li>awd</li><li>aw</li><li>daw</li><li>d</li><li>awd</li><li>aw</li><li>daw</li><li>daw</li><li>d</li><li>awd</li><li>awd</li><li>a</li><li>&nbsp;</li></ol>';
  // const sanitizedData = () => ({
  //   __html: DOMPurify.sanitize(content)
  // })
  return (
    <div className='relative overflow-hidden'>
      {title && <h3 className='text-[16px] font-[600] mb-3'>{title}</h3>}
      <div 
          className={cn('description-content', className) }
          dangerouslySetInnerHTML={content}
      />
    </div>
  )
}

export default DescriptionContent;
