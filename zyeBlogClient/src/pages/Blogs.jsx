import React, { useState, useEffect } from 'react';
import BlogPage from '../components/BlogPage';


const Blogs = () => {
  const [imageURL, setImageURL] = useState('');



  useEffect(() => {
    // Fetch image from Unsplash API

    fetch(
      'https://api.unsplash.com/photos/random?query=blog&client_id=19FfL9gpkkUXUpo6dFbaLXDW-4NpSy5tCty2_aFhAA4'
    )
      .then((response) => response.json())
      .then((data) => setImageURL(data.urls.regular))
      .catch((error) => console.error('Error fetching image:', error));
  }, []);

  return (
    <div>
      {/* Blog Header with Background Image */}
      {imageURL && (
        <div
          className='py-40 bg-[#E9F1FA] text-center text-[#111439] bg-cover bg-center'
          style={{ backgroundImage: `url(${imageURL})` }}
        >
          <h1 className='text-5xl lg:text-7xl leading-snug opacity-0 font-bold mb-5'>
            Our Blog
          </h1>
        </div>
      )}

      {/* All blogs container */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  );
};

export default Blogs;
