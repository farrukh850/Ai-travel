import React from "react"

function HowItWorks() {
  return (
    <div className="pb-20">
        <div className="container">
            <h2 className="text-4xl text-dark text-center font-bold">How it works</h2>
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 mt-16">
                <div className="flex flex-col gap-5 text-center flex-1 relative">
                    <span className="w-20 mx-auto rounded-full bg-[#eefffe] h-20 flex items-center justify-center border border-gray-100"><img src="/book.svg" className="w-8" alt="Book Icon" /></span>
                    <h5 className="text-lg font-semibold text-dark">Setup your creator profile</h5>
                    <p className="text-base text-gray-600">Fill in your details and personalize your profile by adding your profile picture or logo, your website, and social media links.</p>
                    <span className="w-5 h-5 flex items-center justify-center bg-[#0ebeb2] rounded-full text-xs text-white absolute top-1 left-1/2 -translate-1/2">1</span>
                </div>
                <div className="flex flex-col gap-5 text-center flex-1 lg:px-10 lg:mx-10 lg:border-l lg:border-r lg:border-gray-200 relative">
                    <span className="w-20 mx-auto rounded-full bg-[#eefffe] h-20 flex items-center justify-center border border-gray-100"><img src="/map-marker.svg" className="w-8" alt="Map Icon" /></span>
                    <h5 className="text-lg font-semibold text-dark">Upload content</h5>
                    <p className="text-base text-gray-600">Store and organize all your articles & affiliate links, and include them in dynamic itineraries.</p>
                    <span className="w-5 h-5 flex items-center justify-center bg-[#0ebeb2] rounded-full text-xs text-white absolute top-1 left-1/2 -translate-1/2">2</span>
                </div>
                <div className="flex flex-col gap-5 text-center flex-1 relative">
                    <span className="w-20 mx-auto rounded-full bg-[#eefffe] h-20 flex items-center justify-center border border-gray-100"><img src="/upload.svg" className="w-8" alt="Map Icon" /></span>
                    <h5 className="text-lg font-semibold text-dark">Connect your profile and blog</h5>
                    <p className="text-base text-gray-600">Add a link to the travels you create on Stippl to your blog posts, allowing your audience to use the itineraries and book trips.</p>
                    <span className="w-5 h-5 flex items-center justify-center bg-[#0ebeb2] rounded-full text-xs text-white absolute top-1 left-1/2 -translate-1/2">3</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HowItWorks