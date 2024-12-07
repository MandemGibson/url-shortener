import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaArrowRightLong, FaXTwitter } from "react-icons/fa6";

function App() {
  return (
    <main className="h-screen relative flex flex-col items-center justify-center sm:justify-normal overflow-hidden">
      <div className="absolute md:left-0 top-0">
        <div className="absolute  w-[300px] h-[300px] bg-white rounded-full sm:rounded-none rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[250px] h-[250px] bg-white rounded-full sm:rounded-none rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[200px] h-[200px] bg-white rounded-full sm:rounded-none rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="absolute right-0 hidden sm:block">
        <div className="absolute  w-[300px] h-[300px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[250px] h-[250px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute  w-[200px] h-[200px] bg-white rotate-45 opacity-5 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="bg-gradient-to-r from-[#4ca5ff] to-[#b573f8] bg-clip-text mt-10">
        <h1 className="text-[40px] text-transparent font-bold font-poppins">
          Short Is Nice
        </h1>
      </div>
      <p className="text-white/50 text-center font-poppins">
        Transform long URLs into tiny links in seconds.
      </p>

      <form className="px-5 flex flex-col w-full max-w-md mt-6">
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
          className="flex items-center text-sm py-2 mt-3 font-medium rounded-md bg-[#4ca5ff] 
          hover:bg-gradient-to-b hover:from-[#4ca5ff] hover:to-[#b573f8] justify-center
          gap-x-5 hover:text-white transition ease-linear delay-75 group"
        >
          Generate Short Link
          <FaArrowRightLong
            size={18}
            className="opacity-0 -translate-x-5 group-hover:opacity-100
            group-hover:translate-x-0 transition-all duration-300 ease-out"
          />
        </button>
      </form>
      <footer className="flex flex-col h-full w-full justify-end text-white py-4">
        <div
          className="flex flex-col items-center space-y-4 md:justify-between
       px-6 max-w-6xl mx-auto"
        >
          <div className="flex space-x-6">
            <a
              href="https://twitter.com/Mandem_Gibson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white/40 hover:text-black transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://linkedin.com/in/philip-gibson-cudjoe"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white/40 hover:text-[#0077b5] transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MandemGibson"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-white/40 hover:text-black transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
