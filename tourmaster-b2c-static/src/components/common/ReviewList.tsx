"use client";
import { Image as AntImage, Rate, ImageGroup } from "@/components/ui";
import React, { useState } from "react";
import Image from "next/image";
import { Review } from "./ReviewsSection";

const ReviewList: React.FC<Review> = ({
  id,
  review_date,
  name_first,
  name_last,
  customer_image,
  rating,
  name,
  review,
  images,
}) => {
  const [expanded, setExpanded] = useState(false);
  const wordLength = 65;
  const truncatedReview = review?.split(" ").slice(0, wordLength).join(" ");
  const isTruncated = review && review.split(" ").length > wordLength;

  const toggleExpanded = () => setExpanded(!expanded);

  return (
    <div className="px-0 sm:px-8 py-6 flex flex-col gap-2">
      <div className="flex gap-3 items-center">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden">
          {customer_image ? (
            <Image
              width={48}
              height={48}
              alt={name_first}
              src={customer_image}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-600 font-medium text-lg">
              {name_first && name_first[0]}
              {name_last && name_last[0]}
            </span>
          )}
        </div>
        <div>
          <p className="text-gray-700 font-semibold">
            {name_first} {name_last && "*****"}
          </p>
          <p className="text-gray-600">{review_date}</p>
        </div>
      </div>
      <Rate value={rating} disabled />
      <div className="text-gray-500">Review for: {name}</div>

      <div className="tracking-[0.5px] text-gray-900 grid grid-cols-1">
        {expanded || !isTruncated ? review : `${truncatedReview} ... `}
        {isTruncated && (
          <span className="text-primary-600 px-4 py-2">
            <a className="cursor-pointer underline" onClick={toggleExpanded}>
              {expanded ? "See less" : "See more"}
            </a>
          </span>
        )}
      </div>

      {images && (
        <div className="flex flex-wrap gap-4">
          <ImageGroup>
            {images?.map((image, index) => (
              <AntImage
                key={index}
                width={104}
                height={104}
                src={image}
                className="rounded-lg"
              />
            ))}
          </ImageGroup>
        </div>
      )}
    </div>
  );
};

export default ReviewList;
