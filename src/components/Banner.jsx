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
                    <div className="flex items-center gap-2 py-2 px-4 border border-gray-200 rounded-3xl">
                        <p className="text-sm text-dark">4-Day Menorca Birthday Bash</p>
                        <img src="/nameChat.svg" alt="chat" />
                    </div>
                    <div className="w-full mx-auto">
                        <div className="p-5 rounded-3xl bg-gray-100 ">
                        <div className="flex items-center gap-1">
                            <img src="/palm-tree.svg" alt="Tree" />
                            <p className="text-sm text-dark">Trip</p>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="flex-[40%]">
                            <div className="w-full h-[150px] rounded-xl overflow-hidden">
                                <img src="/standout-img1.jpg" className="w-full h-full object-cover" alt="Stand Out Image" />
                            </div>
                            </div>
                            <div className="flex-[60%] p-5 flex flex-col gap-3">
                            <h4 className="text-2xl font-bold text-dark">7-Day Luxury Family Adventure French Riviera</h4>
                            <a href="#" className="py-2 px-5 block w-full bg-[#0ebeb2] text-white text-center rounded-xl">Open</a>
                            </div>
                        </div>
                        </div>
                        <p className="text-sm text-dark mt-4">Now that we have your trip, how about we modify and reserve it. I can help you tailor your trip, update your preferences and add or remove things. Remember, the whole trip will be booked for you hassle free! You don't have to do anything.</p>
                        <div className="flex items-center justify-between mt-5">
                        <div className="w-7 h-7 rounded-full overflow-hidden">
                            <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                        <small className="text-xs text-dark mt-4">I'd love any suggestions. Click to give <a href="#" className="underline">feedback</a>.</small>
                        </div>
                        <form action="#" className="mt-4">
                        <input type="text" className="h-12 rounded-4xl text-dark placeholder:text-gray-500 border border-gray-200 w-full p-4 focus:border-[#0ebeb2] focus:outline-none" placeholder="Ask anything, the more you share the better I can help…" />
                        <div className="flex mt-4 items-stretch gap-3 justify-between">
                            <div className="flex items-center gap-2">
                                 <div className="flex items-center gap-2 py-2 px-4 border border-gray-200 rounded-3xl cursor-pointer">
                                    <img src="/plus.svg" alt="chat" />
                                    <p className="text-xs text-dark">Modify Trip</p>
                                </div>
                                 <div className="flex items-center gap-2 py-2 px-4 border border-gray-200 rounded-3xl cursor-pointer">
                                    <img src="/plus.svg" alt="chat" />
                                    <p className="text-xs text-dark">Make It cheaper</p>
                                </div>
                                 <div className="flex items-center gap-2 py-2 px-4 border border-gray-200 rounded-3xl cursor-pointer">
                                    <img src="/plus.svg" alt="chat" />
                                    <p className="text-xs text-dark">Find me flights</p>
                                </div>
                            </div>
                            <div className="flex justify-end">
                                <button class="py-2 px-10 rounded-4xl flex cursor-pointer items-center gap-1 bg-gray-200"><p class="text-xs text-dark">Ask</p><img class="invert grayscale w-4" alt="Ask Icon" src="/ask.svg" /></button>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner