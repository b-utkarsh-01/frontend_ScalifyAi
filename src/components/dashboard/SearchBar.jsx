const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">

        <h2 className="text-3xl font-semibold text-gray-800">
          Dashboard
        </h2>

        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search for anything..."
            className="hidden sm:block w-[420px] px-4 py-2 rounded-full outline-none text-sm text-gray-700 placeholder-gray-400"
          />

          {/* Mobile: only icon */}
          <div className="bg-white rounded-full px-2 sm:px-4 py-2 flex items-center gap-2 sm:gap-4 cursor-pointer">

            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center">
              <i className="ri-user-3-fill text-gray-700"></i>
            </div>

            <div className="hidden sm:block leading-tight">
              <p className="text-sm font-semibold text-gray-800">
                himanshi asnani
              </p>
              <p className="text-xs text-gray-400">
                Product manager
              </p>
            </div>

            <i className="hidden sm:block ri-arrow-down-s-line text-xl text-gray-600"></i>
          </div>
        </div>
      </div>
      <input
        type="text"
        placeholder="Search for anything..."
        className="mt-3 sm:hidden w-full px-4 py-1 rounded-full outline-none text-sm text-gray-700 placeholder-gray-400"
      />
    </div>
  );
};

export default SearchBar;
