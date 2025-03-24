
export default function Services(){

  const services = [
    {
      title: "UI UX Design",
      image: "Assets/Images/Services/ui_ux.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate excepturi, vel libero illum nihil voluptate iste. Quasi quos dicta necessitatibus?",
    },
    {
      title: "Web Development",
      image: "Assets/Images/Services/web_development.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate excepturi, vel libero illum nihil voluptate iste. Quasi quos dicta necessitatibus?",
    },
    {
      title: "Mobile Application",
      image: "Assets/Images/Services/mobile_development.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate excepturi, vel libero illum nihil voluptate iste. Quasi quos dicta necessitatibus?",
    },
    {
      title: "Saas",
      image: "Assets/Images/Services/saas.png",
      description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate excepturi, vel libero illum nihil voluptate iste. Quasi quos dicta necessitatibus?",
    },
    {
      title: "IT Support",
      image: "Assets/Images/Services/it_support.png",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate excepturi, vel libero illum nihil voluptate iste. Quasi quos dicta necessitatibus?",
    },
    
  ]
    return (
      <div className="flex flex-col  w-full md:px-16 md:py-16   relative">
        {/* <p className="text-[10rem] font-bold text-[#4D4650] ">
          <span className="text-secondary">W</span>
          <span className="bg-gradient-to-r from-secondary to-[#4D4650] text-transparent bg-clip-text">
            e
          </span>
          are best
        </p> */}

        <div className="text-[15vw] md:ml-10 font-bold text-[#4D4650]">
          <span className="text-secondary">W</span>
          <span className="relative inline-block align-top w-[5vw]    ">
            {/* Left yellow half */}
            <span className="absolute text-secondary clip-right-half">e</span>
            {/* Right black half */}
            <span className="absolute text-[#4D4650] clip-left-half ">e</span>
          </span>
          <span> are best</span>
        </div>
        {/* white spotlight */}
        <div className="absolute hidden md:block top-10 right-10 w-52 h-52 bg-white opacity-20 rounded-full blur-3xl"></div>

        {/* UI UX Design */}

        {services.map((service, index) => {
          
          return (
            <div className="mx-3 md:mx-0 ">
              <div className="flex flex-col md:flex-row relative gap-5   md:mx-0 justify-between md:items-center group hover:ml-10 transition-all duration-500 delay-300 hover:cursor-pointer py-16   ">
                <div className="flex flex-row gap-3 items-center    ">
                  <div className="flex justify-center items-center bg-white rounded-xl w-fit px-4 py-4 group-hover:bg-secondary transition-colors duration-500 delay-300">
                    <img src="Assets/Images/Services/ui_ux.png" alt="" />
                  </div>

                  <p className="capitalize text-white md:text-2xl font-bold">
                    {service.title}
                  </p>
                   
                </div>
                <p className="text-white text-opacity-60 font-Secondary md:w-[32vw] md:mr-16">
                  {service.description}
                </p>
                <img
                  src="Assets/Images/Services/placeholder.png"
                  className="w-52 group-hover:opacity-100 hidden md:block  group-hover:rotate-45 opacity-0 transition-all delay-100 duration-500 group-hover:scale-150 "
                  alt=""
                />
                {/* // if not the last element, add a horizontal line */}
              </div>
              {
                index !== services.length - 1 && (
                  <hr className="border-gray-600 w-full" />
                )
              }
            </div>
          );
        
          
})}

        {/* white spotlight */}
        <div className="absolute top-1/2 -translate-y-1/2  hidden md:block  left-10 w-52 h-52 bg-white opacity-20 rounded-full blur-3xl"></div>
      </div>
    );
}