
export default function NavBar() { 
    return(
<header className="bg-white p-4 shadow-md">
  <div className="container mx-auto flex items-center justify-between">

    <nav className="flex items-center space-x-4 text-sm sm:text-base text-gray-600">
      <a href="#" className="hover:text-blue-600">Home</a>
      <a href="#" className="hover:text-blue-600">Shop</a>
      <a href="/Product" className="hover:text-blue-600">Product</a>
      <a href="#" className="hover:text-blue-600">Page</a>
      <a href="#" className="hover:text-blue-600">About</a>
    </nav>

    <div className="text-medium sm:text-base text-gray-800">
      <span className=" text-gray-600">Contact: </span>
      <a href="/Contact" className="font-medium text-sm leading-[15.4px] hover:text-blue-600">
      (808) 555-0111
      </a>
    </div>
  </div>
</header>
)
}