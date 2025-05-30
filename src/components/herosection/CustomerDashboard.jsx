import arrowImg from "../../assets/arrow.png";

export default function CustomerDashboard() {
  return (
    <div
      className="group w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 px-4 sm:px-6 py-8 border border-gray-900 rounded-3xl transition-all duration-500 relative hover:border-t-yellow-600 hover:border-l-yellow-700 hover:border-b-yellow-600 hover:border-r-yellow-700"
      style={{
        background:
          "linear-gradient(283.02deg, rgba(243, 205, 1, 0.07) 0.62%, rgba(13, 12, 19, 0.2) 99.27%)",
      }}
    >
      {/* LEFT CONTENT */}
      <div className="w-full lg:w-2/3">
        {/* HEADING */}
        <h1 className="text-2xl sm:text-3xl font-bold text-start group-hover:bg-gradient-to-b group-hover:from-transparent group-hover:via-yellow-400 group-hover:to-transparent group-hover:bg-clip-text group-hover:text-transparent">
          CUSTOMER DASHBOARD
        </h1>

        {/* DESCRIPTION */}
        <p className="text-sm sm:text-base md:text-lg text-start my-4 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, enim
          debitis adipisci repellat vitae voluptatem, atque est magni rerum
          earum repudiandae pariatur dolor consectetur veniam eum amet incidunt
          omnis laboriosam.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6">
          <button className="w-full sm:w-40 py-2 tracking-wider rounded-full border-2 border-t-yellow-500 border-l-yellow-700 border-r-yellow-700 border-b-yellow-500 text-white transition-all duration-500 hover:text-black hover:border-l-yellow-700 hover:border-t-yellow-600 hover:border-b-yellow-600 hover:border-r-yellow-700 bg-gradient-to-l from-[#452e06] via-[#d1bf5a] via-50% to-[#452e06] hover:bg-black font-semibold">
            Contact Us
          </button>

          <button className="w-full sm:w-40 py-2 tracking-wider rounded-full border-2 border-t-yellow-500 border-l-yellow-700 border-r-yellow-700 border-b-yellow-500 bg-black text-white transition-all duration-500 hover:text-black hover:bg-gradient-to-l hover:from-[#452e06] hover:via-[#d1bf5a] hover:via-50% hover:to-[#452e06] hover:border-l-yellow-700 hover:border-t-yellow-600 hover:border-b-yellow-600 hover:border-r-yellow-700 font-semibold">
            Pricing
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <div className="hidden w-full sm:w-[300px] md:w-[370px] h-auto lg:flex justify-center">
        <img
          src={arrowImg}
          alt="Arrow image"
          className="w-full h-auto transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
    </div>
  );
}
