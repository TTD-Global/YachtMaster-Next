import { ProductDetail } from "@/components/common";

export interface PageProps {
  params: {
    id: number,
  },
  searchParams : { 
    [key: string]: string | string[] | undefined,
  }
}
//page path = product/:id
const Page = ({ params, searchParams }: PageProps) => {
  let province = Array.isArray(searchParams.province)
    ? searchParams.province
    : searchParams.province
    ? [searchParams.province]
    : [];

  return (
    <div className="main__container mx-auto">
      <ProductDetail id={params.id} province={province}/>
    </div>
  )
}

export default Page;
