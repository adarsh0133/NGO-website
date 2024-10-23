import {
  RiArrowRightSLine,
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTwitterLine,
  RiYoutubeLine,
} from "@remixicon/react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="wfull h-fit bg-[#D65C85] p-5 lg:p-10  lg:flex lg:flex-col lg:justify-between lg:items-center">
      <div className="lg:flex lg:flex-row lg:justify-between">
      <div className="ouroffice ">
        <h1 className="text-4xl font-bold text-[#FFBA01]">Our Office</h1>
        <ul className="flex flex-col gap-2 text-2xl mt-5">
          <li className="flex gap-2 text-[#FFBA01]">
            <RiMapPinLine size={30} />
            <p className="text-white ml-2">
              <span>Address:</span>
              <span>
                <a href="#">Rewari, Haryana 123401</a>
              </span>
            </p>
          </li>
          <li className="flex gap-2 text-[#FFBA01]">
            <RiPhoneLine size={30} />
            <p className="text-white ml-2">
              <span>Phone:</span>
              <span>
                <a href="tel:+9112345678">7355881383</a>
              </span>
            </p>
          </li>
          <li className="flex gap-2 text-[#FFBA01]">
            <RiMailLine size={30} />
            <p className="text-white ml-2">
              <span>Email:</span>
              <span>
                <a href="mailto:example@example.com">example@example.com</a>
              </span>
            </p>
          </li>
        </ul>
        <div className="socials mt-10">
          <ul className="flex gap-4 text-2xl mt-5 text-[#FFBA01]">
            <li>
              <a href="https://www.facebook.com">
                <RiFacebookLine size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/needy.binders/">
                <RiInstagramLine size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <RiTwitterLine size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com">
                <RiLinkedinLine size={30} />
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com">
                <RiYoutubeLine size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="popular-links mt-10 lg:mt-0">
        <h1 className="text-4xl font-bold text-[#FFBA01]">Popular Links</h1>
        <ul className="flex flex-col gap-2 text-2xl mt-5">
          <li className="flex gap-2 text-white">
            <RiArrowRightSLine size={30} />
            <Link to="/">Home</Link>
          </li>
          <li className="flex gap-2 text-white">
            <RiArrowRightSLine size={30} />
            <Link to="/About">About</Link>
          </li>
          <li className="flex gap-2 text-white">
            <RiArrowRightSLine size={30} />
            <Link to="/approach">Our Approach</Link>
          </li>
        </ul>
      </div>

      <div className="email mt-10 px-10 py-5 lg:mt-0 lg:px-0 lg:py-0 lg:w-2/6">
        <form action="" className="flex flex-col gap-2 items-center">
          <label htmlFor="email" className="text-xl text-white">
            Email goes here
          </label>
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-2 rounded-md w-full"
          />
          <button
            type="submit"
            className="border-2 border-[#FFBA01] text-white px-4 py-2 rounded-md w-1/2"
          >
            Submit
          </button>
        </form>
        <p className="text-white text-xl mt-5">
          We {"don't"} need a cause to make a change DL/XXX/XXXX- NGO Needy Binders REG
          NO
        </p>
      </div>
      </div>

      <div className="copyright mt-10 grid place-items-center">
        <p className="text-white text-xl">
          Copyright © 2024. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
