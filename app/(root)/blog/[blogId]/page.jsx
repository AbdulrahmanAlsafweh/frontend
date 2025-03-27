export default function BlogDetailsPage() {
  return (
    <div className="md:mx-7 mx-5 my-5 md:my-7 relative flex flex-col ">
        <div className="grid md:grid-cols-[900px_1fr] grid-cols-1 gap-4 relative">
        <div className=" relative">
          <div className="relative">
            <div className="inverted-radius-blogs w-full rounded-[24px] ">
              <img
                src="https://placehold.co/400"
                className=" object-cover w-full max-h-[490px] rounded-[24px] "
                alt=""
              />
            </div>
            <div className="absolute bottom-3 left-3 z-10 flex flex-row items-center justify-center text-white gap-3  ">
              <img src="/Assets/Images/Blogs/date_white.png" alt="date" />
              <p>2023/10/10</p>
            </div>
          </div>
          <div className="md:mt-5 text-white font-Raleway font-[19px]">
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              dolore illo, officiis porro, corporis iste sed itaque iusto
              similique ipsum eveniet repellat? Ratione est consequuntur id
              officiis, quas velit doloribus possimus dolore vero necessitatibus
              eligendi. Maxime possimus quia temporibus dolorem similique nisi
              quibusdam impedit culpa odio veritatis ea eum voluptas cumque
              necessitatibus eos accusamus provident, corrupti numquam tenetur
              saepe eligendi odit? Fuga odit harum ipsum ut recusandae veniam
              praesentium numquam? Possimus hic optio culpa enim reiciendis iure
              placeat excepturi necessitatibus ipsam a velit dicta, praesentium
              qui dolorum quo quibusdam quos, deserunt quod eveniet, atque odio
              illo? Tempore, voluptate quis? Iusto.
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
              doloremque modi, molestias laboriosam aliquam blanditiis
              repellendus reprehenderit sapiente ipsa perspiciatis, odio libero
              quasi omnis, tempore deleniti maiores asperiores pariatur dicta
              non amet quod. Explicabo eligendi itaque dolores veritatis quod
              incidunt iure impedit soluta! Odit perspiciatis repudiandae
              veritatis labore rem sequi?
            </p>
          </div>
        </div>

        <div className="relative mx-auto">
          <div className="relative min-h-[450px] w-[350px] ">
            <div className="inner-curve-blogs bg-white min-h-[450px] w-[350px] "></div>
            <p className="absolute -translate-x-1/2 left-1/2 top-2 text-white font-Raleway text-[20px]">
              Recent blogs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
