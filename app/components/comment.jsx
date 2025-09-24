import React from "react";
import { Star } from "lucide-react";

const Comment = ({ rating, flair, description, likes, dislikes }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 w-fit max-w-md border border-gray-200">
      {/* Header: rating + flair */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex gap-2">
          {new Array(5).fill(0).map((_, index) => {
            return (
              <Star
                key={index}
                className={`${index + 1 <= rating ? "fill-yellow-500" : ""}`}
              />
            );
          })}
        </div>
        <span className="px-3 py-1 text-sm bg-blue-100 text-blue-600 rounded-full">
          {flair}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 mb-3">{description}</p>

      {/* Footer: likes + dislikes */}
      <div className="flex items-center gap-4 text-sm text-gray-600">
        <span className="flex items-center gap-1">👍 {likes}</span>
        <span className="flex items-center gap-1">👎 {dislikes}</span>
      </div>
    </div>
  );
};

export default Comment;
