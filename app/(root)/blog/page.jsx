
export default function BlogPage(){
    const blogs = [
      {
        id: 1,
        title:
          "Digital Agency Solutions: How to Maximize Your Local Campaigns With Performance CTV",
        description:
          "Digital Agency Solutions: How to Maximize Your Local Campaigns With Performance CTV",
        date: "2021-09-01",
        image: "https://placehold.co/400",
        content: "blog 1 content",
      },
      {
        id: 2,
        title: "Linear and Streaming: The Evolution of Television Advertising ",
        description:
          "Linear and Streaming: The Evolution of Television Advertising",
        date: "2021-09-01",
        image: "https://placehold.co/400",
        content: "blog 1 content",
      },
      {
        id: 3,
        title: "5 Media Activation Tips for CPG & Retail Marketers",
        description: "Blog 3 description",
        date: "2021-09-01",
        image: "https://placehold.co/400",
        content: "blog 1 content",
      },
    ];
    return (
      <div className="md:mx-7 mx-5 my-5 md:my-7 relative flex flex-col ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 ">
          {blogs.map((blog) => (
            <div
              className="bg-white rounded-[24px] mx-auto hover:scale-105 transition-all duration-100 cursor-pointer relative  shadow-lg overflow-hidden max-w-[450px] min-h-[512px]"
              key={blog.id}
            >
              <div className="relative h-[300px]">
                <div className="inverted-radius-blogs ">
                  <img src={blog.image} className="max-h-[300px] object-cover w-full" alt="" />
                </div>
                <div className="absolute bottom-2 left-2 z-10 text-[#717171] p-2 flex flex-row items-center gap-3">
                  <img src="/Assets/Images/Blogs/date.png" alt="" />
                  <p className="text-[14px] font-Raleway">{blog.date}</p>
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
      </div>
    );
}