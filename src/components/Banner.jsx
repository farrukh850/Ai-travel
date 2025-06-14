import React from "react"

function Banner() {
  return (
    <div className="py-10">
        <div className="container">
            <div className="flex flex-col lg:flex-row items-stretch gap-5">
                <div className="flex flex-col items-start text-left gap-5 p-5 lg:p-10 border border-gray-200 rounded-lg flex-1">
                    <small className="uppercase text-sm text-gray-400 tracking-wide">For travel Bloggers</small>
                    <h1 className="uppercase text-3xl lg:text-4xl font-extrabold leading-10 lg:leading-12 text-[#0ebeb2]">The next destination in your blogging journey</h1>
                    <p className="uppercase text-sm text-gray-600 font-medium">Increase your revenue and visibility, while improving the planning experience of your audience.</p>
                    <ul className="flex flex-col gap-4">
                        <li className="flex items-center gap-3"><img src="/check.svg" alt="Check Icon" className="w-5" /><p className="text-base text-dark">Increase visibility and retention.</p></li>
                        <li className="flex items-center gap-3"><img src="/check.svg" alt="Check Icon" className="w-5" /><p className="text-base text-dark">Increase lifetime value of your affiliate income.</p></li>
                        <li className="flex items-center gap-3"><img src="/check.svg" alt="Check Icon" className="w-5" /><p className="text-base text-dark">Make your content even more dynamic.</p></li>
                        <li className="flex items-center gap-3"><img src="/check.svg" alt="Check Icon" className="w-5" /><p className="text-base text-dark">Provide a better planning experience</p></li> 
                    </ul>
                    <a href="#" className="py-2 px-6 border border-gray-200 hover:bg-black hover:text-white transition-all text-base text-dark rounded-[100px]">Learn More</a>
                </div>
                <div className="flex flex-col items-start text-left gap-5 p-10 border border-gray-200 rounded-lg flex-1">
                    <div className="w-full h-[400px]">
                        <img src="/baner-img.svg" className="w-full h-full object-contain" alt="Banner Image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner