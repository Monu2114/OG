"use client";
import React from "react";
import { useState, useEffect } from "react";
import LetThemKnow from "../components/LetThemKnow";
import Comment from "./comment";

const PublicTalk = () => {
  const [comments, setComments] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [selectedTag, setSelectedTag] = useState("all");
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/comments");
      const data = await response.json();
      setComments(data);
      console.log(data);
    };
    fetchData();
  }, []);

  const tags = [
    "all",
    "hit",
    "flop",
    "average",
    "adirindi",
    "boring",
    "unique",
  ];

  const filteredComments =
    selectedTag === "all"
      ? comments
      : comments.filter((comment) => comment.description.includes(selectedTag));

  const handleClick = () => {
    setButtonClick(!buttonClick);
  };
  return (
    <div className="flex flex-col justify-between items-center mt-12">
      <h1 className="text-3xl font-bold text font-sans">Public Talk</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
        onClick={handleClick}
      >
        Let them Know Uncle
      </button>
      {buttonClick && <LetThemKnow setButtonClick={setButtonClick} />}

      {/* tags */}
      <div className="flex gap-2 mt-6 flex-wrap justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1 rounded-full border ${
              selectedTag === tag
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-gray-100 text-gray-700 border-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* comments */}
      <div className="flex flex-wrap gap-4 p-4 justify-center w-full">
        {filteredComments.length > 0
          ? filteredComments.map((comment, index) => (
              <Comment {...comment} key={index} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default PublicTalk;
