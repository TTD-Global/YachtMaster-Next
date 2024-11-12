import React from 'react';
import { Skeleton } from 'antd';
import { Card, Button } from '@/components/ui'
import { ProductDetailLayout } from '@/components/layout';

const FormRadioCardSkeleton = () => {
  return (
    <>
        <ProductDetailLayout>
            <Card className="shadow-sm">
                <div className="w-full mb-0">
                    <Skeleton paragraph={{ rows: 4 }} active  />
                </div>
            </Card>
        </ProductDetailLayout>
    </>
  )
}

export default FormRadioCardSkeleton;