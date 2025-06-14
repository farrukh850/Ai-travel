import React from "react"

function TopTrips() {
  return (
    <div className="py-5 lg:py-20">
        <div className="container">
            <h2 className="text-3xl lg:text-4xl text-left font-semibold text-dark">Top trips to level Up Your Vacation Game</h2>
            <div className="flex flex-col lg:flex-row items-center gap-3 mt-5">
                <div className="w-full h-[350px] rounded-2xl overflow-hidden relative">
                    <img src="/trip-1.png" alt="Destination Image" className="w-full h-full object-cover" />
                    <h3 className="text-2xl font-semibold text-white absolute text-left bottom-6 left-6 z-100">Road Trip Through the South of Spain</h3>
                    <div className="absolute w-full h-full top-0 bottom-0 bg-black/40"></div>
                </div>
                <div className="w-full h-[350px] rounded-2xl overflow-hidden relative">
                    <img src="/trip-2.png" alt="Destination Image" className="w-full h-full object-cover" />
                    <h3 className="text-2xl font-semibold text-white absolute text-left bottom-6 left-6 z-100">10 Days in Vietnam: Culture & Adventure</h3>
                    <div className="absolute w-full h-full top-0 bottom-0 bg-black/40"></div>
                </div>
                <div className="w-full h-[350px] rounded-2xl overflow-hidden relative">
                    <img src="/trip-3.png" alt="Destination Image" className="w-full h-full object-cover" />
                    <h3 className="text-2xl font-semibold text-white absolute text-left bottom-6 left-6 z-100">Romantic Getaway in the Amalfi Coast</h3>
                    <div className="absolute w-full h-full top-0 bottom-0 bg-black/40"></div>
                </div>
                <div className="w-full h-[350px] rounded-2xl overflow-hidden relative">
                    <img src="/trip-4.png" alt="Destination Image" className="w-full h-full object-cover" />
                    <h3 className="text-2xl font-semibold text-white absolute text-left bottom-6 left-6 z-100">Ultimate Summer Escape to Croatia</h3>
                    <div className="absolute w-full h-full top-0 bottom-0 bg-black/40"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopTrips