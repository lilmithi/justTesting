import React from "react";
import Navigation from "../Navigation";

function EventsPage() {
  return (
    <div className="">
      <div className="nav w-full font-semibold tracking-wide flex items-center justify-between p-4 shadow-lg fixed text-white bg-[#242565] z-10">
        <h3 className="text-xl px-4 font-bold cursor-default">Events</h3>
        <form>
          <input
            type="search"
            placeholder="Search..."
            className="rounded-full p-2 bg-gray-300 text-[#242565] px-4"
          />
        </form>
        <Navigation />
      </div>
      <div className="main-wrapper pt-20 px-4">
        {/* Festivals */}
        <div className="festivals my-8">
          <h3 className="text-[#242565] text-xl font-bold">Festivals</h3>
          <div className="events-container mt-4 grid md:grid-cols-3 xl:col-span-4 gap-y-6">
            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>
            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>

            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech */}
        <div className="tech my-8">
          <h3 className="text-[#242565] text-xl font-bold">Tech</h3>
          <div className="events-container mt-4 grid md:grid-cols-3 xl:col-span-4 gap-y-6">
            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>
            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>

            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Art */}
        <div className="art my-8">
          <h3 className="text-[#242565] text-xl font-bold">Art</h3>
          <div className="events-container mt-4 grid md:grid-cols-3 xl:col-span-4 gap-y-6">
            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>
            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>

            <div className="upcoming-card md:w-3/4 max-w-2xl h-80 col-span-1 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-[2s] ease-in-out cursor-pointer">
              <img
                src="https://i.pinimg.com/736x/89/63/9d/89639d41db2b2bba74840e22dd16c12f.jpg"
                alt="event pic"
                className="w-full object-cover h-1/2 object-top"
              />
              <div className="flex justify-between space-x-2">
                <div className="upcoming-card-date flex flex-col items-center text-sm py-2 px-2 gap-1">
                  <span className="text-[#686af3] font-bold text-lg">MAR</span>
                  <span className="font-bold text-xl">22</span>
                </div>
                <div className="upcoming-card-content flex flex-col text-sm h-full py-2">
                  <p className="font-bold text-md">Afro Centrique Fest</p>
                  <p className="font-bold mt-1">
                    Kenya National Theatre, Nairobi
                  </p>
                  <p className="p-1 text-gray-500">
                    The AfroFest supports local African Culture makers by
                    building awareness for local artists and businesses that
                    uphold African culture on a daily basis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsPage;
