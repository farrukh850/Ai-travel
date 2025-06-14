const Discover = () => (
  <section className="py-10">
    <div className="container">
      <div className="max-w-[600px] w-full mx-auto">
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
      <div className="pt-10 mt-8">
        <div className="flex gap-10">
          <div className="flex flex-col gap-4 items-start flex-1">
            <h3 className="text-5xl font-bold leading-14 text-dark">7-Day Luxury Family Adventure French Riviera</h3>
            <div className="flex items-center gap-2">
              <span className="py-1 px-2 rounded-md bg-[#e5f7ff] text-[#378cc0]">Pool Parties</span>
              <span className="py-1 px-2 rounded-md bg-[#edefff] text-[#6471f7]">Pool Parties</span>
              <span className="py-1 px-2 rounded-md bg-[#ffe1e9] text-[#e42f5f]">Pool Parties</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-3xl border border-gray-200 py-1 px-2"><p className="text-xs text-dark">Jul 1-5</p><p className="text-xs text-dark">6 travellers</p></div>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f3f3f3]"><img src="/download.svg" alt="Download" /></a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#f3f3f3]"><img src="/modify.svg" alt="Modify" /></a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#e7faee]"><img src="/whatsapp.svg" alt="Modify" /></a>
              <a href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#21BCBE]"><img src="/book-trip.svg" className="w-5" alt="Modify" /></a>
            </div>
          </div>
          <div className="w-full h-[300px] flex-1 rounded-4xl overflow-hidden">
            <img src="/gallery.png" alt="Gallery" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <h5 className="text-2xl font-bold text-dark mt-5 mb-5">TripOverview</h5>
      <p class="text-base text-dark">
        Embark on a <span class="font-semibold">7-day luxury family adventure</span> along the stunning French Riviera, perfectly tailored for two adults and three kids. Experience the <span class="font-semibold">vibrant charm of Nice</span>, the <span class="font-semibold">glamour of Cannes</span>, and the <span class="font-semibold">iconic allure of Saint-Tropez</span> while staying in exquisite luxury accommodations. Enjoy <span class="font-semibold">pristine beaches</span>, <span class="font-semibold">fun-filled water sports</span>, and <span class="font-semibold">unique cultural...</span> <a href="#" class="text-blue-500 hover:underline">Read more</a>.
      </p>
      <hr className="mb-4 mt-10 border w-full border-gray-100" />
      <h5 className="text-xl text-dark font-semibold mb-5">Highlights</h5>
      <div className="flex items-start gap-10 justify-between">
        <ul class="flex flex-col gap-4"><li class="flex items-center gap-3"><img alt="Check Icon" class="w-5" src="/check.svg" /><p class="text-base text-dark">Stay at the iconic Hotel Le Negresco in Nice with private beach access</p></li><li class="flex items-center gap-3"><img alt="Check Icon" class="w-5" src="/check.svg" /><p class="text-base text-dark">Enjoy a scenic 3-wheel vehicle drive along the French Riviera coast</p></li><li class="flex items-center gap-3"><img alt="Check Icon" class="w-5" src="/check.svg" /><p class="text-base text-dark">Parasailing and jet ski adventures suitable for the whole family</p></li></ul>
        <ul class="flex flex-col gap-4"><li class="flex items-center gap-3"><img alt="Check Icon" class="w-5" src="/check.svg" /><p class="text-base text-dark">Explore Nice's Old Town and vibrant Cours Saleya Flower Market</p></li><li class="flex items-center gap-3"><img alt="Check Icon" class="w-5" src="/check.svg" /><p class="text-base text-dark">Private boat trip to Lerins Islands and Cap d'Antibes in Cannes</p></li><li class="flex items-center gap-3"><img alt="Check Icon" class="w-5" src="/check.svg" /><p class="text-base text-dark">Relax in a panoramic villa in Cannes with stunning sea views</p></li></ul>
      </div>
      <hr className="mb-4 mt-10 border w-full border-gray-100" />
      <h5 className="text-xl text-dark font-semibold mb-5">Itenarary</h5>
      <div className="flex items-center gap-5 border-b border-gray-200">
        <div className="inline-flex items-center gap-2 border-b border-black pb-3">
          <span className="w-5 h-5 flex items-center justify-center text-sm text-white bg-black rounded-full">1</span>
          <p className="text-sm text-dark">Menorca</p>
        </div>
        <div className="inline-flex items-center gap-2 pb-3">
          <span className="w-5 h-5 flex items-center justify-center text-sm text-gray-600 bg-gray-300 rounded-full">2</span>
          <p className="text-sm text-dark">Cannes</p>
        </div>
        <div className="inline-flex items-center gap-2 pb-3">
          <span className="w-5 h-5 flex items-center justify-center text-sm text-gray-600 bg-gray-300 rounded-full">3</span>
          <p className="text-sm text-dark">Saint-Tropez</p>
        </div>
      </div>
      <div className="flex items-center gap-2 my-4">
        <h4 className="text-lg font-medium text-dark">Nice, France</h4>
        <p className="text-sm text-dark">(1 - 3 days)</p>
      </div>
      <p className="text-base text-dark">Menorca is a stunning island in Spain known for its beautiful beaches, crystal-clear waters, and vibrant beach clubs. It's perfect for a group looking to enjoy pool parties at a villa, s... <a href="#" className="font-semibold">Read more</a></p>
      <img src="/map.png" alt="Map" className="w-full my-4" />
      <div className=""></div>
    </div>
  </section>
)

export default Discover
