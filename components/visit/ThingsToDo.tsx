import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  price: string;
  rating: number;
  reviewsCount: number;
  badgeText: string;
  images: string[];
}

const VisitContent = [
      {
        title: "",
        price: "",
        rating: "",
        eviewsCount: "",
        images:""
        
      }
]

const ActivityCard: React.FC<CardProps> = ({ title, price, rating, reviewsCount, badgeText, images }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
      <div className="flex ">
        <div className="h-full">
          <Image
            src="/india.png"
            alt="Activity Image"
            width={200}
            height={20}
            className="rounded-tl-lg"
          />
        </div>
        <div className="w-1/2 h-auto relative">
          <Image
            src ="/india.png"
            alt="Activity Image"
            layout="fill"
            objectFit="cover"
            className="rounded-tr-lg"
          />
        </div>
        
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-sm text-gray-600">From {price}</p>
        <div className="flex items-center mt-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-green-500' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.847 1.415 8.307L12 18.902l-7.415 4.675L6 15.27 0 9.423l8.332-1.268z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-600 ml-2">Based on {reviewsCount} reviews</p>
        </div>
        <div className="mt-4">
          <span className="inline-block bg-yellow-400 text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
            {badgeText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ActivityCard;
