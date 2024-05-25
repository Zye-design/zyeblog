import React from 'react';

const Pagination = ({ onPageChange, currentPage, totalItems, pageSize }) => {
  const totalPages = Math.ceil(totalItems / pageSize);

  const renderPaginationLinks = () => {
    return Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNumber) => (
      <li className={pageNumber === currentPage ? "activePagination" : ""} key={pageNumber}>
        <a href='#' onClick={(e) => {e.preventDefault(); onPageChange(pageNumber);}}>
          {pageNumber}
        </a>
      </li>
    ));
  };

  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
      </li>
      <div className='flex gap-1'>{renderPaginationLinks()}</div>
      <li>
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
      </li>
    </ul>
  );
};

export default Pagination;



import React from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ blogs, currentPage, selectedCategory, pageSize }) => {
  const filteredBlogs = blogs
    .filter((blog) => !selectedCategory || blog.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize);

  console.log("Filtered Blogs:", filteredBlogs);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {filteredBlogs.map((blog) => (
        <Link to={`/blogs/${blog.id}`} key={blog.id} className="p-5 shadow-lg rounded cursor-pointer">
          <div>
            <img src={blog.image} alt={blog.title} className="w-full" />
          </div>
          <h3 className="mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer">
            {blog.title}
          </h3>
          <p className="mb-2 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" /> {blog.author}
          </p>
          <p className="text-sm text-gray-500">
            Published: {blog.published_date}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;




import React, { useEffect, useState } from "react";
import BlogCards from "./BlogCard";
import Pagination from "./Pagination";
import Category from "./Category";
import SideBar from "./SideBar";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const pageSize = 12; // blogs per page
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      setLoading(true);
      setError(null);
      let url = `https://api.jsonbin.io/v3/b/664a5917ad19ca34f86c067b?meta=false&page=${currentPage}&limit=${pageSize}`;
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      try {
        console.log(`Fetching data from: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setBlogs(data.records || []); // Ensure data.records is an array
        setTotalBlogs(data.total || 0); // Ensure total is a number
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Category Section */}
      <Category
        onSelectCategory={handleCategoryChange}
        selectedCategory={selectedCategory}
        activeCategory={activeCategory}
      />

      {/* Blog and Sidebar Section */}
      <div className="flex flex-col lg:flex-row gap-12 mt-8">
        <div className="flex-1">
          {loading && <p>Loading...</p>}
          {error && <p>Error: {error}</p>}
          {!loading && !error && (
            <BlogCards
              blogs={blogs}
              currentPage={currentPage}
              selectedCategory={selectedCategory}
              pageSize={pageSize}
            />
          )}
        </div>

        {/* SideBar Component */}
        <div className="w-full lg:w-1/3">
          <SideBar />
        </div>
      </div>

      {/* Pagination Section */}
      <div className="mt-8">
        <Pagination
          onPageChange={handlePageChange}
          currentPage={currentPage}
          totalItems={totalBlogs}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default BlogPage;


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/664a5917ad19ca34f86c067b")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.record.slice(0, 15)))  // Access the 'record' field from the response
      .catch((error) => console.error("Error fetching the blogs:", error));
  }, []);

  return (
    <div>
      {/* Latest Blog */}
      <div>
        <h3 className="text-2xl font-semibold px-4">Latest Blogs</h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog.id}`}  // Dynamic route to blog details page
                className="text-base pb-2 hover:text-[#00ABE4] inline-flex items-center py-1"
              >
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Blog */}
      <div>
        <h3 className="text-2xl font-semibold px-4 mt-20">Popular Blogs</h3>
        <div>
          {popularBlogs.slice(5, 10).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2 px-4">
              <h4 className="font-medium mb-2">{blog.title}</h4>
              <Link
                to={`/blog/${blog.id}`}  // Dynamic route to blog details page
                className="text-base pb-2 hover:text-[#00ABE4] inline-flex items-center py-1"
              >
                Read more <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;



import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Blog from './pages/Blogs.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Portfolio from './pages/Portfolio.jsx';
import Services from './pages/Services.jsx';
import SingleBlog from './pages/SingleBlog.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blog',
        element: <Blog />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/portfolio',
        element: <Portfolio />
      },
      {
        path: '/services',
        element: <Services />
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog />,
        loader: async ({ params }) => {
          try {
            const response = await fetch(`https://api.jsonbin.io/v3/b/664a5917ad19ca34f86c067b/${params.id}`);
            if (!response.ok) {
              throw new Error(`Failed to fetch data: ${response.status} ${response.statusText}`);
            }
            const data = await response.json();
            return { blog: data };
          } catch (error) {
            console.error(error);
            throw error;
          }
        },
      }
      ,
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
