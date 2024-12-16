export default function Header () {
    return(
<div>
<div className="bg-blue-900 text-white ">
<div className="container mx-auto flex flex-wrap items-center justify-between">

<p className="text-sm sm:text-base leading-[14.3px] font-normal">Free shipping on all orders over $50</p>


<div className="flex flex-wrap items-center space-x-4 sm:space-x-6 mt-2 sm:mt-0">
  {/* <!-- Language Selector --> */}
  <div className="flex items-center space-x-2">
    <select className="bg-blue-800 text-white text-sm sm:text-base rounded px-2 py-1 focus:outline-none">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
    </select>
  </div>
{/* 
  <!-- FAQ and Need Help --> */}
  <div className="flex items-center space-x-2 sm:space-x-4">
    <a href="/Faq" className="text-sm sm:text-base hover:underline">FAQ</a>
    <a href="/Contact" className="text-sm sm:text-base hover:underline">Need Help?</a>
  </div>
</div>
</div>
</div>
<header className="bg-gray-100 p-4 h-[84px] shadow-md">
  <div className="container mx-auto flex items-center justify-between">

    
      <img src="/Logo.svg" alt="Logo" className="w-[166px] h-[40px]  " />
    
    

      <a href="/Cart">
    <button className="flex bg-white text-black w-[120px] h-[44px] p-3 rounded hover:bg-blue-700 text-sm sm:text-base">
   
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
</svg>
<span className="mx-2">Cart</span>
 
    </button>
    </a>
  </div>
</header>
</div>

)}