import { useState } from "react";
const Discover = ({ days }) => {
    const [openDay, setOpenDay] = useState(null);

  const toggleDay = (dayId) => {
    setOpenDay(openDay === dayId ? null : dayId);
  };

  return(
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
              <span className="py-1 px-2 rounded-md text-sm bg-[#e5f7ff] text-[#378cc0]">Pool Parties</span>
              <span className="py-1 px-2 rounded-md text-sm bg-[#edefff] text-[#6471f7]">Beach and Water Sports</span>
              <span className="py-1 px-2 rounded-md text-sm bg-[#ffe1e9] text-[#e42f5f]">French Reviera</span>
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
      <div className="flex flex-col gap-5">
        {sampleDays.map((day) => (
          <div key={day.id} className="flex flex-col gap-5 border-b border-gray-200 pb-5 last:border-b-0">
            {/* Header - always visible */}
            <div 
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleDay(day.id)}
            >
              <div className="flex items-center gap-3">
                <p className="text-sm text-dark font-semibold">{day.title}</p>
                <p className="text-sm text-gray-600">{day.date}</p>
              </div>
              <button className="w-5 h-5 bg-gray-200 rounded-full flex items-center justify-center">
                <img 
                  src="/caret-down.svg" 
                  alt="Caret Down" 
                  className={`w-4 transition-transform duration-200 ${openDay === day.id ? 'rotate-90' : '-rotate-90'}`} 
                />
              </button>
            </div>

            {/* Collapsible content */}
            {openDay === day.id && (
              <div className="flex flex-col gap-5">
                <p className="text-sm text-dark">{day.description}</p>
                
                {day.tips && (
                  <p className="text-sm text-dark">
                    <b>Tips:</b> {day.tips}
                  </p>
                )}

                {day.accommodation && (
                  <div className="border border-gray-200 rounded-2xl pt-6 px-4 pb-4 relative">
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-8">
                        <div className="rounded-3xl overflow-hidden w-[300px] h-[300px]">
                          <img src={day.accommodation.image} alt="Accommodation" className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-4 items-start">
                          <h4 className="text-lg font-semibold text-dark">{day.accommodation.name}</h4>
                          <div className="flex items-center gap-2">
                            <span className="bg-[#0ebeb2] px-2 py-1 text-white text-[10px] rounded-md">{day.accommodation.rating}</span>
                            <p className="text-xs text-gray-600">{day.accommodation.reviews}</p>
                          </div>
                          <p className="text-xs text-gray-600">{day.accommodation.price}</p>
                          <ul className="text-sm text-gray-600 mt-1 space-y-1">
                            {day.accommodation.amenities.map((amenity, index) => (
                              <li key={index} className="text-xs text-gray-600">{amenity}</li>
                            ))}
                          </ul>
                          <a href="#" className="px-4 py-2 text-sm hover:text-white rounded-4xl text-dark border border-gray-200 hover:bg-[#0ebeb2] hover:border-[#0ebeb2]">View Details</a>
                        </div>
                      </div>
                      <p className="text-gray-600 mt-5">
                        {day.accommodation.summary} <a href="#" className="text-gray-900 hover:underline">Read more</a>
                      </p>
                    </div>
                    <div className="flex items-center gap-2 absolute right-5 top-5">
                      <a href="#" className="text-sm text-dark bg-gray-200 rounded-4xl px-5 py-2">Read More</a>
                      <a href="#" className="text-sm text-white bg-[#0ebeb2] rounded-4xl px-5 py-2">Replace</a>
                    </div>
                    <span className="py-1 px-2 text-xs bg-[#e6f3ff] absolute left-4 -top-3 rounded-3xl">Accomodation</span>
                  </div>
                )}

                {day.attractions?.map((attraction, index) => (
                  <div key={index} className="border border-gray-200 rounded-2xl pt-6 px-4 pb-4 relative">
                    <div className="flex items-center gap-8">
                      <div className="rounded-xl overflow-hidden w-[100px] h-[100px]">
                        <img src={attraction.image} alt="Attraction" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col gap-2 items-start">
                        <h4 className="text-lg font-semibold text-dark">{attraction.name}</h4>
                        <p className="text-xs text-gray-600">Attraction</p>
                        <a href="#" className="px-4 py-2 text-sm hover:text-white rounded-4xl text-dark border border-gray-200 hover:bg-[#0ebeb2] hover:border-[#0ebeb2]">View Details</a>
                      </div>
                    </div>
                    <span className="py-1 px-2 text-xs bg-[#fdeee8] absolute left-4 -top-3 rounded-3xl">Attraction</span>
                  </div>
                ))}

                <div className="flex items-center justify-start">
                  <a href="#" className="px-3 py-1 flex items-center gap-2 border border-gray-300 rounded-3xl">
                    <img src="/plus.svg" alt="Plus Icon" />
                    <p>Add</p>
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex gap-5">
        <div className="flex items-start justify-between gap-3 flex-col flex-1">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden">
            <img src="/trip-1.png" alt="Trip Image" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-xs text-dark">@nico.scoo</small>
              <small className="text-xs text-gray-500">@nicala Water Sport</small>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-3 flex-col flex-1">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden">
            <img src="/trip-2.png" alt="Trip Image" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-xs text-dark">@nico.scoo</small>
              <small className="text-xs text-gray-500">@nicala Water Sport</small>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-3 flex-col flex-1">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden">
            <img src="/trip-3.png" alt="Trip Image" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-xs text-dark">@nico.scoo</small>
              <small className="text-xs text-gray-500">@nicala Water Sport</small>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-3 flex-col flex-1">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden">
            <img src="/standout-img1.jpg" alt="Trip Image" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-xs text-dark">@nico.scoo</small>
              <small className="text-xs text-gray-500">@nicala Water Sport</small>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-between gap-3 flex-col flex-1">
          <div className="w-full h-[300px] rounded-2xl overflow-hidden">
            <img src="/standout-img3.png" alt="Trip Image" className="w-full h-full object-cover" />
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full overflow-hidden">
              <img src="/avatar.png" alt="Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-1">
              <small className="text-xs text-dark">@nico.scoo</small>
              <small className="text-xs text-gray-500">@nicala Water Sport</small>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[rgba(33,188,190,.2)] border border-[#21bcbe] p-3 flex justify-between items-center mt-5 rounded-3xl">
        <div class="flex items-center gap-4"><div class="rounded-xl overflow-hidden w-[80px] h-[80px]"><img alt="Attraction" class="w-full h-full object-cover" src="/trip-1.png" /></div><div class="flex flex-col gap-2 items-start"><h4 class="text-lg font-semibold text-dark">Canes, France</h4><p class="text-xs text-gray-600">Day 3-5</p></div></div>
        <a href="#" className="py-3 px-5 bg-[#0ebeb2] rounded-4xl"><p className="text-base text-white">Next Destination</p></a>
      </div>
      <div className="flex flex-col ga-4 mt-8 pt-4 border-t border-gray-200 mb-5">
        <h5>Transfer & Transportation</h5>
        <div className="flex items-center gap-1">
          <p className="text-sm text-gray-400">3 Destination</p>
          <p className="text-sm text-gray-400">Jul 14 - 21</p>
          <a href="#" className="text-sm text-gray-400">Manage Transportation</a>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-3 relative">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full relative z-50 flex bg-white items-center justify-center border border-gray-200"><img src="/map-marker.svg" className="w-5" alt="Map Marker" /></span>
            <h4 className="py-2 w-full px-4 bg-gray-50 rounded-xl text-base font-semibold">Berlin, Germany</h4>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 relative z-50 rounded-full bg-white flex items-center justify-center border border-gray-200"><img src="/car.svg" className="w-5" alt="Car" /></span>
            <div className="rounded-2xl border border-gray-200 flex-auto">
              <div className="p-4 flex items-center justify-between">
              <h5 className="text-sm text-dark">Car</h5>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full block bg-green-500"></span>
                <p className="text-sm text-gray-400">Live prices coming soon...</p>
              </div>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-gry-200 flex items-center justify-center bg-gray-200"><img src="/car.svg" className="w-4" alt="Car Icon" /></span>
                  <p className="text-base text-dark">Tue, Jul 15</p>
                </div>
                <small className="text-sm text-gray-400">12h 30 min - Non-stop</small>
                <p className="text-base text-dark">Tue, Jul 15</p>
              </div>
              <div className="p-4 flex items-center justify-end gap-3">
                <button className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center"><img src="/delete.svg" className="w-4" alt="Delete" /></button>
                <button className="w-7 h-7 bg-[#21bcbe] rounded-full flex items-center justify-center"><img src="/recycle.svg" className="w-4" alt="Delete" /></button>
              </div>
            </div>
          </div>
          <span className="absolute left-4 top-3 bottom-0 w-[1px] h-[105%] border border-dashed border-gray-300"></span>
        </div>
        <div className="flex flex-col gap-3 relative">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full relative z-50 flex bg-white items-center justify-center border border-gray-200"><img src="/map-marker.svg" className="w-5" alt="Map Marker" /></span>
            <h4 className="py-2 w-full px-4 bg-gray-50 rounded-xl text-base font-semibold">Nice, France</h4>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 relative z-50 rounded-full bg-white flex items-center justify-center border border-gray-200"><img src="/car.svg" className="w-5" alt="Car" /></span>
            <div className="rounded-2xl border border-gray-200 flex-auto">
              <div className="p-4 flex items-center justify-between">
              <h5 className="text-sm text-dark">Car</h5>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full block bg-green-500"></span>
                <p className="text-sm text-gray-400">Live prices coming soon...</p>
              </div>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-gry-200 flex items-center justify-center bg-gray-200"><img src="/car.svg" className="w-4" alt="Car Icon" /></span>
                  <p className="text-base text-dark">Tue, Jul 15</p>
                </div>
                <small className="text-sm text-gray-400">12h 30 min - Non-stop</small>
                <p className="text-base text-dark">Tue, Jul 15</p>
              </div>
              <div className="p-4 flex items-center justify-end gap-3">
                <button className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center"><img src="/delete.svg" className="w-4" alt="Delete" /></button>
                <button className="w-7 h-7 bg-[#21bcbe] rounded-full flex items-center justify-center"><img src="/recycle.svg" className="w-4" alt="Delete" /></button>
              </div>
            </div>
          </div>
          <span className="absolute left-4 top-3 bottom-0 w-[1px] h-[105%] border border-dashed border-gray-300"></span>
        </div>
        <div className="flex flex-col gap-3 relative">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full relative z-50 flex bg-white items-center justify-center border border-gray-200"><img src="/map-marker.svg" className="w-5" alt="Map Marker" /></span>
            <h4 className="py-2 w-full px-4 bg-gray-50 rounded-xl text-base font-semibold">Cannes, France</h4>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 relative z-50 rounded-full bg-white flex items-center justify-center border border-gray-200"><img src="/car.svg" className="w-5" alt="Car" /></span>
            <div className="rounded-2xl border border-gray-200 flex-auto">
              <div className="p-4 flex items-center justify-between">
              <h5 className="text-sm text-dark">Car</h5>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full block bg-green-500"></span>
                <p className="text-sm text-gray-400">Live prices coming soon...</p>
              </div>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-gry-200 flex items-center justify-center bg-gray-200"><img src="/car.svg" className="w-4" alt="Car Icon" /></span>
                  <p className="text-base text-dark">Tue, Jul 15</p>
                </div>
                <small className="text-sm text-gray-400">12h 30 min - Non-stop</small>
                <p className="text-base text-dark">Tue, Jul 15</p>
              </div>
              <div className="p-4 flex items-center justify-end gap-3">
                <button className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center"><img src="/delete.svg" className="w-4" alt="Delete" /></button>
                <button className="w-7 h-7 bg-[#21bcbe] rounded-full flex items-center justify-center"><img src="/recycle.svg" className="w-4" alt="Delete" /></button>
              </div>
            </div>
          </div>
          <span className="absolute left-4 top-3 bottom-0 w-[1px] h-[105%] border border-dashed border-gray-300"></span>
        </div>
        <div className="flex flex-col gap-3 relative">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full relative z-50 flex bg-white items-center justify-center border border-gray-200"><img src="/map-marker.svg" className="w-5" alt="Map Marker" /></span>
            <h4 className="py-2 w-full px-4 bg-gray-50 rounded-xl text-base font-semibold">Saint-Tropez, France</h4>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 relative z-50 rounded-full bg-white flex items-center justify-center border border-gray-200"><img src="/car.svg" className="w-5" alt="Car" /></span>
            <div className="rounded-2xl border border-gray-200 flex-auto">
              <div className="p-4 flex items-center justify-between">
              <h5 className="text-sm text-dark">Car</h5>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full block bg-green-500"></span>
                <p className="text-sm text-gray-400">Live prices coming soon...</p>
              </div>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-gry-200 flex items-center justify-center bg-gray-200"><img src="/car.svg" className="w-4" alt="Car Icon" /></span>
                  <p className="text-base text-dark">Tue, Jul 15</p>
                </div>
                <small className="text-sm text-gray-400">12h 30 min - Non-stop</small>
                <p className="text-base text-dark">Tue, Jul 15</p>
              </div>
              <div className="p-4 flex items-center justify-end gap-3">
                <button className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center"><img src="/delete.svg" className="w-4" alt="Delete" /></button>
                <button className="w-7 h-7 bg-[#21bcbe] rounded-full flex items-center justify-center"><img src="/recycle.svg" className="w-4" alt="Delete" /></button>
              </div>
            </div>
          </div>
          <span className="absolute left-4 top-3 bottom-0 w-[1px] h-[105%] border border-dashed border-gray-300"></span>
        </div>
        <div className="flex flex-col gap-3 relative">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full relative z-50 flex bg-white items-center justify-center border border-gray-200"><img src="/map-marker.svg" className="w-5" alt="Map Marker" /></span>
            <h4 className="py-2 w-full px-4 bg-gray-50 rounded-xl text-base font-semibold">Berlin, Germany</h4>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 relative z-50 rounded-full bg-white flex items-center justify-center border border-gray-200"><img src="/car.svg" className="w-5" alt="Car" /></span>
            <div className="rounded-2xl border border-gray-200 flex-auto">
              <div className="p-4 flex items-center justify-between">
              <h5 className="text-sm text-dark">Car</h5>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full block bg-green-500"></span>
                <p className="text-sm text-gray-400">Live prices coming soon...</p>
              </div>
              </div>
              <div className="flex items-center justify-between p-4 border-t border-b border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-gry-200 flex items-center justify-center bg-gray-200"><img src="/car.svg" className="w-4" alt="Car Icon" /></span>
                  <p className="text-base text-dark">Tue, Jul 15</p>
                </div>
                <small className="text-sm text-gray-400">12h 30 min - Non-stop</small>
                <p className="text-base text-dark">Tue, Jul 15</p>
              </div>
              <div className="p-4 flex items-center justify-end gap-3">
                <button className="w-7 h-7 bg-gray-200 rounded-full flex items-center justify-center"><img src="/delete.svg" className="w-4" alt="Delete" /></button>
                <button className="w-7 h-7 bg-[#21bcbe] rounded-full flex items-center justify-center"><img src="/recycle.svg" className="w-4" alt="Delete" /></button>
              </div>
            </div>
          </div>
          <span className="absolute left-4 top-3 bottom-0 w-[1px] h-[105%] border border-dashed border-gray-300"></span>
        </div>
      </div>
      <div className="border rounded-2xl border-gray-200 py-3 px-5 flex items-center justify-between mt-10">
        <div className="flex flex-col gap-2">
          <h5 className="text-lg font-semibold text-dark">7-Day Luxury Family Adventure French Riviera</h5>
          <div className="flex items-center gap-1">
            <small className="text-xs text-gray-600">Total PKR 12,601,725</small>
            <small className="text-xs text-gray-600 underline">Jul 14 - Jul 21, 2025</small>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div class="flex items-center gap-3"><a href="#" class="w-10 h-10 rounded-full flex items-center justify-center bg-[#f3f3f3]"><img alt="Download" src="/download.svg" /></a><a href="#" class="w-10 h-10 rounded-full flex items-center justify-center bg-[#f3f3f3]"><img alt="Modify" src="/modify.svg" /></a><a href="#" class="w-10 h-10 rounded-full flex items-center justify-center bg-[#e7faee]"><img alt="Modify" src="/whatsapp.svg" /></a><a href="#" class="py-3 px-5 rounded-full flex items-center justify-center bg-[#21BCBE] gap-3"><img class="w-5" alt="Modify" src="/book-trip.svg" /><p className="text-sm text-white">Check Out</p></a></div>
        </div>
      </div>
    </div>
  </section>
  )
}
export default Discover


// Sample data structure for usage
const sampleDays = [
  {
    id: 1,
    title: "Day 1: Arrival and Relaxing Evening in Nice",
    date: "15 Jul, 2025",
    description: "Arrive in Nice after your long drive from Berlin and check in at Hotel Le Negresco. Spend a relaxing evening strolling along the iconic Promenade des Anglais...",
    tips: "After a long drive, keep activities light and enjoy the calming sea views to unwind and adjust to the local time.",
    accommodation: {
      name: "Hotel Le Negresco",
      image: "/villa.jpg",
      rating: "9.2",
      reviews: "Wonderful (1723 Reviews)",
      price: "PKR 907,672 per night + 5 guests",
      amenities: ["Pets allowed", "Family rooms", "Breakfast in the room"],
      summary: "This hotel offers a luxurious stay with spacious rooms and suites that can accommodate families comfortably..."
    },
    attractions: [
      {
        name: "Promenade des Anglais",
        image: "/trip-1.png"
      }
    ]
  },
  {
    id: 2,
    title: "Day 2: Cultural Landmarks and Lakeside Walk",
    date: "22 Jul, 2025",
    description: "Arrive in Nice after your long drive from Berlin and check in at Hotel Le Negresco. Spend a relaxing evening strolling along the iconic Promenade des Anglais...",
    tips: "After a long drive, keep activities light and enjoy the calming sea views to unwind and adjust to the local time.",
    accommodation: {
      name: "Hotel Le Negresco",
      image: "/standout-img1.jpg",
      rating: "9.2",
      reviews: "Wonderful (1723 Reviews)",
      price: "PKR 907,672 per night + 5 guests",
      amenities: ["Pets allowed", "Family rooms", "Breakfast in the room"],
      summary: "This hotel offers a luxurious stay with spacious rooms and suites that can accommodate families comfortably..."
    },
    attractions: [
      {
        name: "Promenade des Anglais",
        image: "/trip-2.png"
      }
    ]
  },
  {
    id: 3,
    title: "Day 3: Hanoi Hidden Gems by Bike",
    date: "22 Aug, 2025",
    description: "Arrive in Nice after your long drive from Berlin and check in at Hotel Le Negresco. Spend a relaxing evening strolling along the iconic Promenade des Anglais...",
    tips: "After a long drive, keep activities light and enjoy the calming sea views to unwind and adjust to the local time.",
    accommodation: {
      name: "Hotel Le Negresco",
      image: "/standout-img3.png",
      rating: "9.2",
      reviews: "Wonderful (1723 Reviews)",
      price: "PKR 907,672 per night + 5 guests",
      amenities: ["Pets allowed", "Family rooms", "Breakfast in the room"],
      summary: "This hotel offers a luxurious stay with spacious rooms and suites that can accommodate families comfortably..."
    },
    attractions: [
      {
        name: "Promenade des Anglais",
        image: "/trip-3.png"
      }
    ]
  }
  // Add more days as needed
];
