import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ReactLogo from "../assets/React.svg"; // Adjust the path as necessary
import Welcome from "./Welcome";

function Footer() {
  return (
    <>
      <Welcome />
      <section className="bg-gray-800 text-white py-12 px-6  md:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h1 className="text-2xl font-bold mb-4 flex items-center">
              <img
                src={ReactLogo}
                alt="React Logo"
                className="w-8 h-8 mr-2 animate-spin-slow"
              />
              React
            </h1>
            <p className="text-sm">
              React is a JavaScript library for building user interfaces. Learn
              what React is all about on our homepage.
            </p>
            <p className="mt-3 text-sm">
              &copy;{new Date().getFullYear()} All Rights Reserved
            </p>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4"> Learn React </h1>
            <ul className="space-y-2">
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Home
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Quick Start
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Installation
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Describing the UI
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Adding Interactivity
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Managing State
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Escape Hatches
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Api Reference</h1>
            <ul>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                React APIs
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                React DOM APIs
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">Community</h1>
            <ul>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Code of Conduct
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Meet the Team
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Docs Contributors
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Acknowledgements
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-4">More</h1>
            <ul>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Blog
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Meet the Team
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                React Native
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Privacy
              </li>
              <li className="hover:underline underline-offset-4 cursor-pointer">
                Terms
              </li>
            </ul>
            <div className="flex gap-4 mt-4 text-3xl">
              <FaFacebook className="hover:text-gray-400 cursor-pointer" />
              <FaXTwitter className="hover:text-gray-400 cursor-pointer" />
              <FaGithub className="hover:text-gray-400 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
