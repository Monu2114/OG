import React from "react";
import { useState } from "react";
import { Star } from "lucide-react";

const LetThemKnow = ({ setButtonClick }) => {
  const [starIndex, setStarIndex] = useState(-1);
  const [formData, setFormData] = useState({
    flair: "none",
    description: "",
    rating: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = { ...formData, rating: starIndex + 1 };
    setFormData(updatedData);
    console.log(updatedData); // this shows the real submitted data
    setButtonClick(false);

    try {
      const response = await fetch("/api/comments", {
        // Replace with your API endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setResponseMessage(`Success: ${data.message}`);
      // Optionally clear form data or perform other actions
      setFormData({ flair: "", description: "", rating: "" });
    } catch (error) {
      setResponseMessage(`Error: ${error.message}`);
    }
  };
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onStarClick = (index) => {
    index == starIndex ? setStarIndex(-1) : setStarIndex(index);
  };
  return (
    <form
      className="bg-white text-black rounded-xl p-4 flex flex-col gap-4 w-fit"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold text font-sans text-center">
        Tagalabettandi !
      </h1>

      <select
        onChange={(e) => onChange(e)}
        name="flair"
        value={formData.flair}
        className="border-black border-2 rounded-xl p-2"
      >
        <option value="die-hard-fan">Die Hard Fan</option>
        <option value="edo-ala-fan">Edo ala fan</option>
        <option value="pspk-fans-association">PSPK Fans Association</option>
        <option value="hater">Hater</option>
        <option value="none">None</option>
      </select>
      <div className="flex">
        {new Array(5).fill(0).map((_, index) => {
          return (
            <Star
              key={index}
              onClick={() => onStarClick(index)}
              className={`${
                index <= starIndex ? "fill-yellow-500" : ""
              } cursor-pointer`}
            />
          );
        })}
      </div>
      <textarea
        placeholder="Ante adi..."
        className="w-full h-24 p-2 border-2 border-black rounded-xl"
        onChange={onChange}
        name="description"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-full"
      >
        Submit
      </button>
    </form>
  );
};

export default LetThemKnow;
