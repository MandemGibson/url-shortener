function App() {
  return (
    <main className="h-screen relative flex flex-col items-center overflow-hidden">
      <div className="absolute left-0">
        <div className="absolute  w-[300px] h-[300px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[250px] h-[250px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[200px] h-[200px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute right-0">
        <div className="absolute  w-[300px] h-[300px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[250px] h-[250px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[200px] h-[200px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="bg-gradient-to-r from-[#4ca5ff] to-[#b573f8] bg-clip-text mt-10">
        <h1 className="text-[40px] text-transparent font-bold font-poppins">
          Short Is Nice
        </h1>
      </div>
      <p className="text-white/50 font-poppins">
        Transform long URLs into tiny links in seconds.
      </p>

      <form className="flex flex-col w-full max-w-md mt-6">
        <h1 className="text-white/80 text-center">Create Link Below</h1>
        <div className="mt-2 relative">
          <label
            htmlFor="destination"
            className="block text-sm font-medium text-white"
          >
            Destination URL
          </label>
          <div className="flex items-center rounded-md bg-white mt-1">
            <input
              id="destination"
              name="destination"
              type="text"
              placeholder="eg. https://www.example.com/some/long-url"
              className="block w-full py-2 pl-3 pr-10 bg-transparent text-base
               text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />
          </div>
        </div>
        <button
          className="text-sm py-2 mt-3 font-medium rounded-md bg-[#4ca5ff] hover:bg-[#b573f8]
        hover:text-white transition ease-linear delay-75"
        >
          Generate Short Link
        </button>
      </form>
    </main>
  );
}

export default App;
