"use client";
import { Button, Rate, Pagination } from "@/components/ui";
import { ReviewList, } from "@/components/common";
import React, { useEffect, useState } from "react";
// import { useReviews } from "@/hooks/reviews";

interface Reviews {
  rating: number;
  total_review: number;
  reviews: Review[];
}

export interface Review {
  id: number;
  customer_image?: string | null;
  name_first: string;
  name_last?: string | null;
  review_date: string;
  rating: number;
  name: string;
  review?: string | null;
  images?: string[] | null;
}

interface FilterState {
  filter: "all" | "1" | "2" | "3" | "4" | "5" | "photo";
}

interface ReviewsSectionProps {
  id: number;
}

const ReviewsSection: React.FC<ReviewsSectionProps> = ({ id }) => {
  const [reviews, setReviews] = useState<Reviews>({
    rating: 0,
    total_review: 0,
    reviews: [],
  });
  const [filter, setFilter] = useState<FilterState>({ filter: "all" });
  const [pagination, setPagination] = useState({
    page: 1,
    pageSize: 5,
    total: 0,
  });

  const params = {
    filter: filter.filter,
    page: pagination.page,
    page_size: pagination.pageSize,
  };
  // const { GetAllReviews } = useReviews();
  // const { data } = GetAllReviews(id, params);

  const filterOptions: { label: string; value: FilterState["filter"] }[] = [
    { label: "All", value: "all" },
    { label: "5 stars", value: "5" },
    { label: "4 stars", value: "4" },
    { label: "3 stars", value: "3" },
    { label: "2 stars", value: "2" },
    { label: "1 star", value: "1" },
    { label: "With photos only", value: "photo" },
  ];

  const handlePageChange = (page: number) => {
    setPagination({ ...pagination, page: page });
  };

  // const getReviews = async () => {
  //   const meta = data.meta;
  //   setReviews({
  //     rating: data.rating,
  //     total_review: data.total_review,
  //     reviews: data.items,
  //   });
  //   setPagination({
  //     page: meta.page_current,
  //     pageSize: meta.page_size,
  //     total: meta.item_total,
  //   });
  // };

  // useEffect(() => {
  //   if (data) {
  //     getReviews();
  //   }
  // }, [filter, pagination.page, data]);

  return (
    <div className=" w-full h-full px-0 sm:px-0 py-6" id="scroll-to-reviews">
      <p className="text-[20px] font-medium mb-8">Reviews</p>
      <div className="border-[2px] border-solid border-gray-200 rounded-2xl px-8 py-6 flex flex-wrap gap-4 items-center">
        <p className="text-[34px] text-black">{reviews.rating || 0} / 5</p>
        <Rate value={reviews.rating} disabled />
        <p className="text-gray-500 ">
          (based on {reviews.total_review} reviews)
        </p>
      </div>
      <div className="sm:p-6 mt-2 flex flex-wrap gap-4">
        {filterOptions.map((filterOption) => (
          <Button
            key={filterOption.value}
            variant="tertiary-color"
            shape="round"
            className={`border-[#D1D4DA] text-primary-700 px-4 py-2 h-10 ${
              filterOption.value === "photo" ? "w-[159px]" : "w-[116px]"
            } ${
              filter.filter === filterOption.value &&
              "bg-primary-25 border-primary-600 "
            }`}
            onClick={() => setFilter({ filter: filterOption.value })}
          >
            <div>{filterOption.label}</div>
          </Button>
        ))}
      </div>

      {reviews.reviews.map((item) => (
        <div key={item.id}>
          <ReviewList
            id={item.id}
            customer_image={item.customer_image}
            name_first={item.name_first}
            name_last={item.name_last}
            review_date={item.review_date}
            rating={item.rating}
            name={item.name}
            review={item.review}
            images={item.images}
          />
        </div>
      ))}
      <div className="flex justify-end">
        <Pagination
          initialPage={pagination.page}
          total={pagination.total}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ReviewsSection;
