import Header from "../components/header";
import NavBar from "../components/NavBar";

export default function Cart ( ){

    return (
        <div>
<Header/>
<NavBar/>

<div className=" mt-auto justify-center ">
<h1 className="mt-56 text-4xl mx-auto justify-center">
    Bag
</h1>
<section className="py-10 bg-gray-100 flex">
  <div className="container mx-auto flex flex-col lg:flex-row items-start gap-6 lg:gap-10">
    {/* Product Card Section */}
    <div className="lg:w-[963px] flex flex-col gap-6 mx-auto">
      {/* Product Card */}
      <div className="flex items-center w-full h-[211px] bg-white shadow-md rounded-lg p-4">
        {/* Left Image */}
        <div className="flex-shrink-0 w-[150px] h-[150px] rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cart Details */}
        <div className="flex flex-col flex-grow ml-6">
          <h2 className="text-xl font-semibold text-gray-900">Library Stool Chair</h2>
          <p className="text-sm text-gray-600">Ashen Slate / Cobalt Bliss</p>
          <div className="flex items-center gap-4 text-gray-600 mt-2">
            <span className="text-sm font-medium">Size:</span>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">L</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600 mt-2">
            <span className="text-sm font-medium">Quantity:</span>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">1</span>
          </div>
        </div>

        {/* MRP Section */}
        <div className="flex-shrink-0 text-right">
          <p className="text-sm font-semibold text-gray-500">MRP:</p>
          <p className="text-lg font-bold text-gray-900">$99</p>
        </div>
      </div>
    </div>
    <div className="lg:w-[963px] flex flex-col gap-6 mx-auto">
      {/* Product Card */}
      <div className="flex items-center w-full h-[211px] bg-white shadow-md rounded-lg p-4">
        {/* Left Image */}
        <div className="flex-shrink-0 w-[150px] h-[150px] rounded-lg overflow-hidden">
          <img
            src="https://via.placeholder.com/150"
            alt="Product Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Cart Details */}
        <div className="flex flex-col flex-grow ml-6">
          <h2 className="text-xl font-semibold text-gray-900">Library Stool Chair</h2>
          <p className="text-sm text-gray-600">Ashen Slate / Cobalt Bliss</p>
          <div className="flex items-center gap-4 text-gray-600 mt-2">
            <span className="text-sm font-medium">Size:</span>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">L</span>
          </div>
          <div className="flex items-center gap-4 text-gray-600 mt-2">
            <span className="text-sm font-medium">Quantity:</span>
            <span className="text-sm bg-gray-200 px-2 py-1 rounded-md">1</span>
          </div>
        </div>

        {/* MRP Section */}
        <div className="flex-shrink-0 text-right">
          <p className="text-sm font-semibold text-gray-500">MRP:</p>
          <p className="text-lg font-bold text-gray-900">$99</p>
        </div>
      </div>
    </div>

    {/* Summary Section */}
    <div className="w-[350.67px] h-[295px] bg-white shadow-md rounded-lg p-6">
      <h3 className="text-lg font-bold text-gray-900 mb-4">Summary</h3>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Subtotal</span>
        <span className="font-medium">$198.00</span>
      </div>
      <div className="flex justify-between text-gray-700 mb-2">
        <span>Estimated Delivery & Handling</span>
        <span className="font-medium">Free</span>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between text-gray-900 font-bold text-lg">
        <span>Total</span>
        <span>$198.00</span>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md text-sm font-semibold hover:bg-blue-500 transition">
        Member Checkout
      </button>
    </div>
  </div>
</section>


</div>




        </div>




    )


}