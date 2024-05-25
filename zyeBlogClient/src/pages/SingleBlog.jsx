import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import {FaUser} from "react-icons/fa"
import { FaClock } from "react-icons/fa6";
import SideBar from "../components/SideBar";



const SingleBlog = () => {
  const [imageURL, setImageURL] = useState("");
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];


  useEffect(() => {
    // Fetch image from Unsplash API
    fetch(
      "https://api.unsplash.com/photos/random?query=nature&client_id=19FfL9gpkkUXUpo6dFbaLXDW-4NpSy5tCty2_aFhAA4"
    )
      .then((response) => response.json())
      .then((data) => setImageURL(data.urls.regular))
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return (
    <div>
      {/*  Blog Header with Background Image   */}
      {imageURL && (
        <div
          className="py-40 bg-[#E9F1FA] text-center text-[#111439] bg-cover bg-center"
          style={{ backgroundImage: `url(${imageURL})` }}
        >
          <h2 className="text-5xl opacity-0 lg:text-7xl leading-snug font-bold mb-5">
            {title}
          </h2>
        </div>
      )}
 
      {/*  Blog Content   */}

      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="Blog content image" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-[#00ABE4] cursor-pointer">{title}</h2>
          <p className="mb-3 text-gray-600"><FaUser className="inline-flex items-center mr-2"/> {author} | {published_date}</p>
          <p className="mb-3 text-gray-600"><FaClock className="inline-flex items-center mr-2"/> {reading_time}</p>
          <p className="text-base mb-6 text-gray-500">{content}</p>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores asperiores laboriosam culpa aspernatur at a, sint ratione veniam minus iste mollitia alias aut nulla sunt reprehenderit. Cum architecto fugit at amet consectetur adipisicing elit. Mollitia impedit harum voluptatum nostrum adipisci sapiente eum aspernatur praesentium, architecto labore quo nisi cumque necessitatibus eligendi fugit nobis. Eaque, quam maxime ?</p> <br />
            <p>coma si na ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit harum voluptatum nostrum adipisci sapiente eum aspernatur praesentium, architecto labore quo nisi cumque necessitatibus eligendi fugit nobis. Eaque, quam maxime.</p>
            <p>coma si na ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit harum voluptatum nostrum adipisci sapiente eum aspernatur praesentium, architecto labore quo nisi cumque necessitatibus eligendi fugit nobis. Eaque, quam maxime.</p>
            <p>coma si na ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit harum voluptatum nostrum adipisci sapiente eum aspernatur praesentium, architecto labore quo nisi cumque necessitatibus eligendi fugit nobis. Eaque, quam maxime.</p><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente incidunt adipisci vel ipsam, natus sunt, excepturi quibusdam ex voluptate voluptatibus qui delectus ut inventore facere! Obcaecati velit illo ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente incidunt adipisci vel ipsam, natus sunt, excepturi quibusdam ex voluptate voluptatibus qui delectus ut inventore facere! Obcaecati velit illo ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sapiente incidunt adipisci vel ipsam, natus sunt, excepturi quibusdam ex voluptate voluptatibus qui delectus ut inventore facere! Obcaecati velit illo ad.</p>
          </div>
        </div>

        <div className="lg:w-1/2">
            <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
