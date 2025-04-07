'use client'
import { useEffect, useState } from "react";
import Link from "next/link";
import { Breadcrumb } from "antd";
import Loading from "./loading";
import Image from "next/image";
import use from 'react'
export default function BlogDetailsPage({ params }) {
  const { blogId } = params; // Unwrap the params object
  console.log(blogId);
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shareUrl, setShareUrl] = useState("");
  useEffect(() => {
    // Fetch data using the blogId from URL params
    const fetchBlogData = async () => {
      const res = await fetch(`http://localhost:8080/api/blogs/${blogId}`);
      const data = await res.json();
      setBlogData(data);
      setLoading(false);
    };

    fetchBlogData();
  }, [blogId]); // Fetch when blogId changes

  const formatDate = (date) => {
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };

    return new Date(date).toLocaleDateString(undefined, options);
  };
  const shareLinks = blogData && {
    encodedUrl: encodeURIComponent(window.location.href),
    encodedTitle: encodeURIComponent(blogData.title),
    facebookShareLink: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      window.location.href
    )}`,
    linkedinShareLink: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
      window.location.href
    )}`,
    whatsappShareLink: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      blogData.title
    )}%20${encodeURIComponent(window.location.href)}`,
  };



  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="md:mx-7 mx-3 relative flex flex-col ">
          <div
            className="md:px-14 md:pb-7 pt-14 pb-7 px-3 font-Main md:pt-24 rounded-b-3xl bg-[#D2D4FF] mb-7 "
            key={blogData.id}
          >
            <Breadcrumb
              separator=">"
              items={[
                { title: <Link href="/">Home</Link> },
                {
                  title: <Link href="/">Blog</Link>,
                },
              ]}
            />
            <h2 className="font-Main font-bold md:text-[3rem] capitalize">
              {blogData.title}
            </h2>
          </div>

          <div className="grid md:grid-cols-[900px_1fr] grid-cols-1 gap-4 relative">
            <div className="relative">
              <div className="relative ">
                <div className="inverted-radius-blogs w-full rounded-[24px] min-h-[450px]">
                  <img
                    src={blogData.image} // Dynamic image URL
                    className="object-cover w-full max-h-[490px] rounded-[24px]"
                    alt={blogData.title}
                  />
                </div>
                <div className="absolute bottom-3 left-3 z-10 flex flex-row items-center justify-center text-white gap-3">
                  <img src="/Assets/Images/Blogs/date_white.png" alt="date" />
                  <p>{formatDate(blogData.created_at?.date)}</p>
                </div>
              </div>
              <div className="md:mt-5 text-white font-Raleway font-[19px]">
                <p dangerouslySetInnerHTML={{ __html: blogData.content }}></p>
              </div>
            </div>
            <div className="relative mx-auto">
              <div className="relative min-h-[450px] w-[350px]">
                <div className="inner-curve-blogs bg-white min-h-[450px] w-[350px] "></div>
                <p className="absolute -translate-x-1/2 left-1/2 top-2 text-white font-Raleway text-[20px]">
                  Recent blogs
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between bg-white rounded-full w-full px-10 py-5">
              <div>
                <p className="font-Raleway text-gray-500 capitalize ">
                  BY: {blogData.author}
                </p>
              </div>
              <div>
                <ul className="flex flex-row gap-7">
                  <li className="hover:scale-105 transition-all duration-75">
                    <a
                      href={shareLinks?.facebookShareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/Assets/Images/Blogs/facebook.png"
                        width={24}
                        height={24}
                        alt="Share on Facebook"
                      />
                    </a>
                  </li>
                  <li className="hover:scale-105 transition-all duration-75">
                    <a
                      href={shareLinks?.linkedinShareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/Assets/Images/Blogs/linkedin.png"
                        width={24}
                        height={24}
                        alt="Share on LinkedIn"
                      />
                    </a>
                  </li>
                  <li className="hover:scale-105 transition-all duration-75">
                    <a
                      href={shareLinks?.whatsappShareLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Image
                        src="/Assets/Images/Blogs/whatsapp.png"
                        width={24}
                        height={24}
                        alt="Share on WhatsApp"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
