/*
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-gray-800 ">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className=" grid md:grid-cols-3 py-5">
       
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Be Ready To Grow
            </h1>
            <p className="text-gray-400">
              Get exclusive{" "}
              <span className=" text-white font-bold "> best update</span>{" "}
              straight to your inbox.{" "}
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2 "
                type="text"
                placeholder="Email"
              />
              <button className="bg-orange-500 hover:bg-orange-500/75 h-full inline-block py-2 px-6 text-white">
                Ok
              </button>
            </div>
          </div>
     

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
               
                
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3 ">
                  <li className="cursor-pointer">Home</li>
                  <li className="cursor-pointer">About</li>
                  <li className="cursor-pointer">Services</li>
                  <li className="cursor-pointer">Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker />
                    <p>Vidisha, Madhya Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdMessage />
                    <p>optimus@gmail.com</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdCall />
                    <p>+91 123456789</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-gray-300/40">
            <span className="text-sm text-gray-400">
              @copyright 2024 Mind-Sukoon
            </span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#">
                <FaInstagram className="text-4xl" />
              </a>
              <a href="#">
                <FaFacebook className="text-4xl" />
              </a>
              <a href="#">
                <FaLinkedin className="text-4xl" />
              </a>
            </div>

            <span className="text-sm text-gray-400 ">
              <ul className="flex gap-3">
                <li className="hover:text-white">Made with ❤️ by kunwar Awadhiya</li>

              </ul>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
*/

import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMessage } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-blue-900">
      <section className="max-w-[1200px] mx-auto text-white">
        <div className="grid md:grid-cols-3 py-5">
          {/* first column */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
              Learn With MinSchool
            </h1>
            <p className="text-gray-300">
              Subscribe for{" "}
              <span className="text-white font-bold">educational updates</span>{" "}
              straight to your inbox.
            </p>
            <br />
            <div className="flex items-center h-10">
              <input
                className="py-1 px-3 w-full h-full inline-block focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500 bg-blue-800 border-gray-200 border-2"
                type="text"
                placeholder="Email"
              />
              <button className="bg-green-600 hover:bg-green-700 h-full inline-block py-2 px-6 text-white">
                Subscribe
              </button>
            </div>
          </div>
          
          {/* Second column */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Explore
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-green-400">Courses</li>
                  <li className="cursor-pointer hover:text-green-400">Workshops</li>
                  <li className="cursor-pointer hover:text-green-400">Resources</li>
                  <li className="cursor-pointer hover:text-green-400">Blog</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Quick Links
                </h1>
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-green-400">Home</li>
                  <li className="cursor-pointer hover:text-green-400">About Us</li>
                  <li className="cursor-pointer hover:text-green-400">Our Teachers</li>
                  <li className="cursor-pointer hover:text-green-400">Student Login</li>
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                  Contact Us
                </h1>
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <HiLocationMarker className="text-green-400" />
                    <p>Vidisha, Madhya Pradesh</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdMessage className="text-green-400" />
                    <p>hello@mindchool.edu</p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <MdCall className="text-green-400" />
                    <p>+91 5456445458</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="hidden sm:block">
          <div className="flex justify-between items-center text-center py-6 border-t-2 border-blue-800">
            <span className="text-sm text-gray-300">
              &copy; {new Date().getFullYear()} MinSchool - All Rights Reserved
            </span>
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#" className="hover:text-green-400">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>

            <span className="text-sm text-gray-300">
              <ul className="flex gap-3">
              <li className="hover:text-white">Made with ❤️ by Kunwar</li>
              </ul>
            </span>
          </div>
        </div>
        
        {/* Mobile footer bottom */}
        <div className="sm:hidden py-6 border-t-2 border-blue-800">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-4 mb-4">
              <a href="#" className="hover:text-green-400">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="#" className="hover:text-green-400">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <span className="text-sm text-gray-300 text-center">
              &copy; {new Date().getFullYear()} MinSchool - All Rights Reserved
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;