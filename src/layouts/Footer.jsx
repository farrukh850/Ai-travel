const Footer = () => (
  <footer className="bg-gray-100 py-10">
    <div className="container">
      <div className="grid grid-cols-12 items-start gap-10">
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <a href="/"><img src="/logo.png" alt="Logo" className="w-30" /></a>
          <ul className="flex items-center gap-3 mt-8">
            <li><a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><img src="/insta.svg" className="w-5" alt="Instagram Icon" /></a></li>
            <li><a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><img src="/tiktok.svg" className="w-5" alt="TikTok Icon" /></a></li>
            <li><a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><img src="/fb.svg" className="w-5" alt="Facebook Icon" /></a></li>
            <li><a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center"><img src="/linkedin.svg" className="w-5" alt="Linkedin Icon" /></a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="text-xl font-semibold text-dark">Product</h4>
          <ul className="mt-5 flex flex-col gap-3">
            <li><a href="#" className="text-base text-gray-600">Itinerary planner</a></li>
            <li><a href="#" className="text-base text-gray-600">Travel bloggers</a></li>
            <li><a href="#" className="text-base text-gray-600">Budget planner</a></li>
            <li><a href="#" className="text-base text-gray-600">Influencers</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="text-xl font-semibold text-dark">Work With Us</h4>
          <ul className="mt-5 flex flex-col gap-3">
            <li><a href="#" className="text-base text-gray-600">Itinerary planner</a></li>
            <li><a href="#" className="text-base text-gray-600">Travel bloggers</a></li>
            <li><a href="#" className="text-base text-gray-600">Budget planner</a></li>
            <li><a href="#" className="text-base text-gray-600">Influencers</a></li>
          </ul>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-3">
          <h4 className="text-xl font-semibold text-dark">Resources</h4>
          <ul className="mt-5 flex flex-col gap-3">
            <li><a href="#" className="text-base text-gray-600">Itinerary planner</a></li>
            <li><a href="#" className="text-base text-gray-600">Travel bloggers</a></li>
            <li><a href="#" className="text-base text-gray-600">Budget planner</a></li>
            <li><a href="#" className="text-base text-gray-600">Influencers</a></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between pt-10 border-t border-gray-200 mt-10">
        <small className="text-sm text-gray-600">© 2025 All right reserved</small>
        <ul className="flex items-center gap-4">
          <li><a href="#" className="text-sm text-gray-600">Terms & Conditions</a></li>
          <li><a href="#" className="text-sm text-gray-600">Privacy</a></li>
          <li><a href="#" className="text-sm text-gray-600">Disclaimer</a></li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
