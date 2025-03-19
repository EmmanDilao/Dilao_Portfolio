import React from "react";
import Navbar from "./Navbar";
import avatar from "../assets/avatar.jpg";
import { service, testimonials } from "./data";

const About = () => {
  return (
    <div className="md:rounded-x1 bg-gray-600 md:m-7 flex-1 p-7">
      <Navbar />
      <div className="mt-7">
        <h1 className="text-white font-bold text-3x1 mb-2">About Me</h1>
        <hr className="border-3 text-yellow-500 w-12 rounded-4x1" />
        <div className="mt-5 md:hidden">
          <img src={avatar} alt="" className="bg-gray-700 rounded-2x1" />
        </div>
        <p className="mt-4 text-gray-300 text-x1 font-semibold">
          Hi! I'm Emmanuel Fernan Dilao, a passionate web developer with
          expertise in MySQL, Python, JavaScript, PHP, and Laravel. I specialize
          in creating dynamic, user-friendly, and efficient web applications
          that deliver seamless experiences.
        </p>
        <p className="mt-2 text-gray-300 text-x1 font-semibold">
          Beyond web development, I am eager to expand my expertise in game
          development, blending creativity with technical skills to create
          engaging digital experiences. I thrive on problem-solving, continuous
          learning, and collaboration, always looking for new challenges to push
          my skills further.
        </p>
        {/* service section */}
        <h1 className="text-2x1 text-white font-bold mt-7">What I'm Doing</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-7">
          {service.map((item, index) => {
            return (
              <div
                className="bg-gray-700 border shadow p-5 text-white flex gap-5 items-start rounded-x1"
                key={index}
              >
                <div className="text-6x1 text-yellow-500">{item.logo}</div>
                <div>
                  <h1 className="font-bold text-2x1">{item.title}</h1>
                  <p className="text-xl text-gray-300">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* testimonial section */}
        <h1 className="text-2x1 text-white font-bold mt-7">Testimonials</h1>
        <div className="flex flex-col md:flex-row gap-14 md:gap-7 mt-14">
          {testimonials.map((item, index) => {
            return (
              <div
                className="bg-gray-700 border border-white rounded-x1 shadow py-4 px-6"
                key={index}
              >
                <div className="flex -gap-5">
                  <img
                    src={item.img}
                    alt=""
                    className="h-20 w-20 bg-gray-800 rounded-2x1 -mt-14 border-2 shadow-2x1 border -gray-600"
                  />
                  <div>
                    <h1 className="text-white font-bold text-x1">
                      {item.name}
                    </h1>
                    <p>⭐⭐⭐⭐⭐</p>
                  </div>
                </div>
                <p className="text-gray-300 text-lg pr-6 mt-2">{item.para}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
