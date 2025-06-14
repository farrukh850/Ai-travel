import React from "react"

function CTA() {
  return (
    <div className="max-w-full lg:max-w-1/2 mx-auto pb-5 lg:pb-10">
        <div className="container">
          <div className="flex flex-col items-start gap-4">
            <h5 className="text-2xl text-dark font-semibold">Sign Up to my newsletter</h5>
            <p className="text-base text-left"> A newsletter about traveling and using AI to make finding, planning and booking your vacations really easy.</p>
            <small>Over 73,000 Subscribers</small>
            <a href="#" className="py-2 px-5 bg-[#0ebeb2] text-base text-white rounded-lg">Subscribe</a>
        </div>
        </div>
    </div>
  )
}

export default CTA