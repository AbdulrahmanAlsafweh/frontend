'use client'

import {useState, useEffect } from "react"
import Link from "next/link";
export default function BlogsPage(){

  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blogs when the component mounts
    const fetchBlogs = async () => {
      try {
        const res = await fetch('http://localhost:8080/api/blogs');
        const data = await res.json();
        console.log(data);
        if (res.ok) {
          setBlogs(data); // Set fetched blogs to state
        } else {
          setError('Error fetching blogs.');
        }
      } catch (err) {
        setError('Error: ' + err.message);
      }
    };

    fetchBlogs();
  }, []);
    return (
        <div className="p-6 max-w-4xl mx-auto">
          <h1 className="text-3xl font-semibold text-center mb-6">All Blogs</h1>
          {error && <p className="text-red-500 text-center">{error}</p>}

          <div className="space-y-6">
            {blogs.length === 0 ? (
              <p className="text-center text-lg text-gray-500">
                No blogs found.
              </p>
            ) : (
              blogs.map((blog) => (
                <div key={blog.id} className="border-b pb-4 mb-4">
                  <h2 className="text-2xl font-semibold">
                    <Link
                      href={`/admin/blogs/${blog.id}`}
                      className="text-blue-600 hover:underline"
                    >
                      {blog.title}
                    </Link>
                  </h2>
                  <p className="text-gray-600">
                    {blog.content.slice(0, 100)}...
                  </p>
                  <p className="text-sm text-gray-500">
                    Category: {blog.category_name}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
    );
}