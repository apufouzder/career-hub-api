import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="shadow">
      <div className="justify-between container px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <h2 className="text-2xl font-bold text-blue-950">Career<span className="text-indigo-500">Find</span></h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-slate-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li>
                <Link to="/" className="text-gray-500">Home</Link>
              </li>
              <li>
                <Link to="/statistics" className="text-gray-500">Statistics</Link>
              </li>
              <li>
                <Link to="/applied" className="text-gray-500">Applied Jobs</Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-500">Blog</Link>
              </li>
            </ul>

            <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a href="#" className="inline-block w-full px-4 py-2 text-center text-white bg-indigo-500 rounded-md shadow hover:bg-gray-800">Star Applying</a>
            </div>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a href="#" className="px-4 py-2 text-white bg-indigo-500 rounded-md shadow hover:bg-gray-800">Star Applying </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;