import { FaGithub, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ReactLogo from "../assets/React.svg"; // Adjust the path as necessary
import Welcome from "./Welcome";

function Footer() {
  return (
    <>
      <Welcome />
      <section className="flex justify-between items-center gap-8 py-12 px-24 bg-gray-800 text-white">
        <div className="max-w-xs">
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
        </div>
        <div className="max-w-xs">
          <h1 className="text-2xl font-bold mb-4"> Learn React </h1>
          <ul className="space-y-2">
            <li className="hover:underline underline-offset-4 cursor-pointer">
              Home
            </li>
            <li className="hover:text-gray-400 cursor-pointer">Quick Start</li>
            <li className="hover:text-gray-400 cursor-pointer">Installation</li>
            <li className="hover:text-gray-400 cursor-pointer">
              Describing the UI
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              Adding Interactivity
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              Managing State
            </li>
            <li className="hover:text-gray-400 cursor-pointer">
              Escape Hatches
            </li>
          </ul>
        </div>
        <div className="max-w-xs">
          <h1 className="text-2xl font-bold mb-4">Api Reference</h1>
          <ul>
            <li>React APIs</li>
            <li>React DOM APIs</li>
          </ul>
        </div>
        <div className="max-w-xs">
          <h1 className="text-2xl font-bold mb-4">Community</h1>
          <ul>
            <li>Code of Conduct</li>
            <li>Meet the Team</li>
            <li>Docs Contributors</li>
            <li>Acknowledgements</li>
          </ul>
        </div>
        <div className="max-w-xs">
          <h1 className="text-2xl font-bold mb-4">More</h1>
          <ul>
            <li>Blog</li>
            <li>Meet the Team</li>
            <li>React Native</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
          <div className="flex gap-4 mt-4 text-3xl">
            <FaFacebook />
            <FaXTwitter />
            <FaGithub />
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
