import { Tabs, TabsProps } from 'antd';
import { FC } from 'react';

interface TabsComponentsProps extends TabsProps {
    className?: string;
    alltabs?: any;
  }
  
const TabsComponents: FC<TabsComponentsProps> = ({
    className,
    // alltabs,
    ...props
  }) => {
    // const items: TabsProps['items'] = alltabs;
  return (
    <>
    <Tabs
        className={`my-component ${className}`} 
        {...props} 
      />
    </>
  )
}

export default TabsComponents;