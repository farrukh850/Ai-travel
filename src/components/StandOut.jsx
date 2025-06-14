import React from "react"

function StandOut() {
  return (
    <div className="lg:px-20 max-w-full lg:max-w-[70%] mx-auto">
        <div className="container">
            <h6 className="text-2xl font-semibold text-dark text-left">Tell me the why – I’ll nail the when, where & what</h6>
            <small className="text-sm block text-dark text-left mt-3">What makes me stand out</small>
            <div className="flex flex-col lg:flex-row items-stretch gap-5 lg:gap-3 mt-6">
              <div className="flex flex-col gap-3 flex-1">
                <div className="w-full h-[350px] rounded-3xl overflow-hidden relative">
                  <img src="/standout-img1.jpg" alt="Stand Out Image" className="w-full h-full object-cover" />
                  <button className="py-1 px-2 rounded-xl flex cursor-pointer items-center gap-1 bg-white absolute bottom-5 left-5"><p className="text-sm text-dark">Ask</p><img src="/ask.svg" className="invert grayscale w-4" alt="Ask Icon" /></button>
                </div>
                <p className="text-sm text-left italic text-dark">"We just got engaged and crave six days of pure zen - think autumn-coloured gardens, private hot-spring soaks and a hands-on sushi lesson this October"</p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <div className="w-full h-[350px] rounded-3xl overflow-hidden relative">
                  <img src="/standout-img2.jpg" alt="Stand Out Image" className="w-full h-full object-cover" />
                  <button className="py-1 px-2 rounded-xl flex items-center cursor-pointer gap-1 bg-white absolute bottom-5 left-5"><p className="text-sm text-dark">Ask</p><img src="/ask.svg" className="invert grayscale w-4" alt="Ask Icon" /></button>
                </div>
                <p className="text-sm text-left italic text-dark">"It’s my 30th with five besties, give us four sun-drenched days of turquoise swims, villa pool parties and sunset boat cruises in July"</p>
              </div>
              <div className="flex flex-col gap-3 flex-1">
                <div className="w-full h-[350px] rounded-3xl overflow-hidden relative">
                  <img src="/standout-img3.png" alt="Stand Out Image" className="w-full h-full object-cover" />
                  <button className="py-1 px-2 rounded-xl flex items-center cursor-pointer gap-1 bg-white absolute bottom-5 left-5"><p className="text-sm text-dark">Ask</p><img src="/ask.svg" className="invert grayscale w-4" alt="Ask Icon" /></button>
                </div>
                <p className="text-sm text-left italic text-dark">"Dad and I have always dreamed of spotting the Big Five. Plan an eight-day road-trip next month with whale watching, self-drive safaris and cosy budget lodges."</p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default StandOut