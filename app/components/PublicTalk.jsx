"use client";
import React from "react";
import { useState, useEffect } from "react";
import LetThemKnow from "../components/LetThemKnow";
import Comment from "./comment";

const PublicTalk = () => {
  const [comments, setComments] = useState([]);
  const [buttonClick, setButtonClick] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/comments");
      const data = await response.json();
      setComments(data);
      console.log(data);
    };
    fetchData();
  }, []);

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

      {/* comments */}
      <div className="flex flex-wrap gap-4 p-4">
        {comments.map((comment, index) => {
          return <Comment {...comment} key={index} />;
        })}
      </div>
    </div>
  );
};

export default PublicTalk;
