import React from "react";
import RoqquLogo from "../assets/roqqulogo.svg";
import PersonIcon from "../assets/personicon.svg";
import { Link } from "react-router-dom";
import { Button } from "./button";

export const Steptwo = () => {
  return (
    <div className="px-4 md:px-40 py-20 flex items-center justify-center text-white">
      <div className="md:px-10 w-[50%]">
        <img src={RoqquLogo} alt="roqqu logo" />

        <p
          className="mt-10 border-b-3 p-y-2"
          style={{ borderBottomColor: "rgb(51, 55, 57)" }}
        >
          Step 2/5
        </p>

        <div className="mt-10">
          <h1 className="text-3xl font-bold">Hey</h1>
          <h1 className="text-3xl font-bold">Please give us your legal name</h1>
        </div>

        <form className="mt-10">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-sm"
              style={{ color: "rgb(183, 177, 167)" }}
            >
              First Name
            </label>
            <div
              className="h-12 rounded-lg mt-2 relative"
              style={{ borderColor: "rgb(50, 56, 63)" }}
            >
              <input
                type="text"
                placeholder="e.g Jane"
                className="outline-none w-full h-full px-10 rounded-lg focus:border-inherit"
                style={{ background: "rgb(26, 30, 34)" }}
              />
              <img src={PersonIcon} alt="" className=" absolute left-2 top-3" />
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <label
              htmlFor="username"
              className="text-sm"
              style={{ color: "rgb(183, 177, 167)" }}
            >
              Last Name
            </label>
            <div
              className="h-12 rounded-lg mt-2 relative"
              style={{ borderColor: "rgb(50, 56, 63)" }}
            >
              <input
                type="text"
                placeholder="e.g Doe"
                className="outline-none w-full h-full px-10 rounded-lg focus:border-inherit"
                style={{ background: "rgb(26, 30, 34)" }}
              />
              <img src={PersonIcon} alt="" className=" absolute left-2 top-3" />
            </div>
          </div>

          <Link to="/stepthree">
            <Button
              btnContent="Continue"
              btnStyles="w-full mt-8 h-12 rounded-xl"
            />
          </Link>
        </form>
        <p className="mt-2">
          Already have an account? <span>Sign in</span>
        </p>
      </div>
    </div>
  );
};
