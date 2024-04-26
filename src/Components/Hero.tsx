
function Hero() {
  return (
    <>
    <div className="h-[38vh] w-[90%] mx-auto  flex justify-center items-center flex-col space-y-4 md:w-full">
        <div className="flex items-center justify-center gap-4">
        <h2 className="text-[25px] font-bold md:text-[35px]">Buy me a chocolate</h2>
        <img src="/icons8-chocolate.gif" height="35px" width="35px" />
        </div>
        <p className="text-center text-sm md:text-md">
        A crowd funding platform for creators. Get funded by your fans and followers.
        </p>
        <div>
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Start now</button>
        
        <button type="button" className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Read more</button>
        </div>
    </div>
    
    </>
  )
}

export default Hero