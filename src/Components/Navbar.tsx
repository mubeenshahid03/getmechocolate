import Link from "next/link"

function Navbar() {
  return (
    <nav>
<div className=" bg-gray-300 h-16 w-full  flex items-center justify-between px-4">
    <div className="flex ">
<img src="/icons8-chocolate.gif" height="30px" width="30px" />
<h2 className="text-[20px] font-[700]">GetMeChocolate</h2>
    </div>

    {/* for links */}
    <div className="pt-[6px]  py-auto">
        <Link href='/login'>    
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Login</button>
        </Link>
    </div>

</div>

    </nav>
  )
}

export default Navbar