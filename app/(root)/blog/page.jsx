'use client'
import {useState, useEffect } from "react"
import Link from "next/link";
export default function BlogPage(){
const [blogs, setBlogs] = useState([]);
const [categories, setCategories] = useState([]);
const [selectedCategories, setSelectedCategories] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

// Fetch categories
useEffect(() => {
  async function fetchCategories() {
    const res = await fetch("http://localhost:8080/api/blogcategories");
    const data = await res.json();
    setCategories(data);
  }
  fetchCategories();
}, []);

// Fetch blogs based on selected categories and current page
  useEffect(() => {
    // Fetch blogs based on selected category and current page
    async function fetchBlogs() {
      const categoryParam = selectedCategories
        ? `&category_id=${selectedCategories}`
        : "";
      const res = await fetch(
        `http://localhost:8080/api/blogs?page=${currentPage}${categoryParam}`
      );
      const data = await res.json();
      setBlogs(data.blogs);
    }
    fetchBlogs();
  }, [selectedCategories, currentPage]);


const formatDate = (date) => {
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Date(date).toLocaleDateString(undefined, options);
};

const handleCategoryClick = (categoryId) => {
  setSelectedCategories((prev) => {
    if (prev.includes(categoryId)) {
      return prev.filter((id) => id !== categoryId);
    } else {
      return [...prev, categoryId];
    }
  });
};

const handlePageChange = (page) => {
  setCurrentPage(page);
};
 
  return (
    <div className="md:mx-7 mx-5 my-5 md:my-7 relative flex flex-col ">
      <div className="mb-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleCategoryClick(category.id)}
            className={`mr-2 mb-2 px-4 py-2 rounded-lg border-[1px] border-secondary font-Raleway capitalize  cursor-pointer ${
              selectedCategories.includes(category.id)
                ? "bg-secondary text-blackk"
                : "bg-transparent text-white hover:text-secondary"
            }`}
          >
            {category.category_name}
          </button>
        ))}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
        {blogs.map((blog) => (
          <div
            className="bg-white rounded-[24px] mx-auto hover:scale-105 transition-all duration-100 cursor-pointer relative  shadow-lg overflow-hidden max-w-[450px] min-h-[512px]"
            key={blog.id}
          >
            <div className="relative h-[300px]">
              <div className="inverted-radius-blogs ">
                {blog.image === null ? (
                  <img
                    src="/Assets/Images/Brands/bg.jpg"
                    className="max-h-[300px] object-cover w-full"
                    alt=""
                  />
                ) : (
                  <img
                    src={`/Assets/Images/uploads/${blog.image}`}
                    className="max-h-[300px] object-cover w-full"
                    alt=""
                  />
                )}
              </div>
              <div className="absolute bottom-2 left-2 z-10 text-[#717171] p-2 flex flex-row items-center gap-3">
                <img src="/Assets/Images/Blogs/date.png" alt="" />
                <p className="text-[14px] font-Raleway">
                  {formatDate(blog.created_at.date)}
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-blackk font-Secondary text-[22px] font-bold p-4">
                {blog.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 flex justify-center">
        <nav>
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index + 1}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 rounded-full border-[1px] border-secondary font-Raleway capitalize  cursor-pointer ${
                    currentPage === index + 1
                      ? "bg-secondary text-blackk"
                      : "bg-transparent text-secondary  "
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            
          </ul>
        </nav>
      </div>
    </div>
  );
}