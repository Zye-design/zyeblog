import React, { useState, useEffect } from "react";

const About = () => {
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    // Fetch image from Unsplash API
    fetch(
      "https://api.unsplash.com/photos/random?query=about&client_id=19FfL9gpkkUXUpo6dFbaLXDW-4NpSy5tCty2_aFhAA4"
    )
      .then((response) => response.json())
      .then((data) => setImageURL(data.urls.regular))
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return (
    <div>
      {/*  About Header with Background Image   */}
      {imageURL && (
        <div
          className="py-40 bg-[#E9F1FA] text-center text-[#111439] bg-cover bg-center"
          style={{ backgroundImage: `url(${imageURL})` }}
        >
          <h1 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
            About Us page would be implemented here
          </h1>
        </div>
      )}
    </div>
  );
};

export default About;
