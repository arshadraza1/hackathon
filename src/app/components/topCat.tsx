export default function Top() {
  return (
    <div>
      <div className="bg-white
         py-10 ">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold sm:text-center md:text-left text-gray-800 mb-8">Top Category</h2>
          <div className=" ">
            <div className="grid grid-cols-1   lg:grid-cols-3 gap-6 m-32 lg:m-auto items-center ">

              <button className="relative w-[424px] h-[424px] rounded-lg overflow-hidden shadow-lg group justb" >
              <a href="/singleProduct">
                <img
                  src="/top1.svg"
                  alt="Button Background"
                  className="w-full h-full object-cover"
                />

                <div className= "text-left absolute bottom-0 h-[85px] w-[424px] inset-x-0 bg-[rgba(0,0,0,0.7)]  backdrop-blur-md py-2 px-4">

                <span className="text-white text-lg font-semibold text">Wing Chair</span>
                <p className="text-white text-sm font-normal opacity-75 ">3,854 Products</p>
                </div>
                </a>
              </button>
              <button className="relative w-[424px] h-[424px] rounded-lg overflow-hidden shadow-lg group justb" >
              <a href="/singleProduct">
                <img
                  src="/top2.svg"
                  alt="Button Background"
                  className="w-full h-full object-cover"
                />

                <div className="text-left absolute bottom-0 h-[85px] w-[424px] inset-x-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-md py-2 px-4">

                <span className="text-white text-lg font-semibold text">Wing Chair</span>
                <p className="text-white text-sm font-normal opacity-75 ">3,854 Products</p>
                </div>
                </a>
              </button>
              <button className="relative w-[424px] h-[424px] rounded-lg overflow-hidden shadow-lg group justb" >
              <a href="/singleProduct">
                <img
                  src="/top3.svg"
                  alt="Button Background"
                  className="w-full h-full object-cover"
                />

                <div className="text-left absolute bottom-0 h-[85px] w-[424px] inset-x-0 bg-[rgba(0,0,0,0.7)] backdrop-blur-md py-2 px-4">
                <span className="text-white text-lg font-semibold text">Wing Chair</span>
                <p className="text-white text-sm font-normal opacity-75 ">3,854 Products</p>
                </div>
                </a>
              </button>

            </div>




          </div>
        </div>
      </div>

    </div>



  )
}