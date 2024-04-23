import Image from "next/image";
import { Inter } from "next/font/google";
import { useState } from "react";
import axios from "axios";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [formData, setFormData] = useState({
    username: "",
    phoneNumber: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    axios
      .post("https://ucoz1a.tunnel.pyjam.as/apiV1/lead-info/", formData, {
        headers: {
          "Access-Control-Allow-Origin": "your_frontend_domain",
          "Access-Control-Allow-Methods": "POST", // Specify the allowed methods
          "Access-Control-Allow-Headers": "Content-Type", // Specify the allowed headers
        },
      })
      .then((res) => console.log(res, "res"))
      .catch((err) => console.log(err));

    setFormData({
      username: "",
      phoneNumber: "",
      email: "",
    });
  };

  return (
    <div class="flex border-gray-300">
      {/* <!-- First half with background image --> */}
      <div
        class="w-1/2 h-screen bg-cover bg-center relative flex justify-center items-center"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1681996484614-6afde0d53071?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          clipPath: "polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 100%)", // Define your clip path here
        }}
      >
        <div class="absolute inset-0 bg-black opacity-25"></div>

        <p class="text-4xl font-medium text-white z-10">
          Have a smile on your face
        </p>
      </div>
      <div className="w-full flex flex-col  justify-center max-w-md h-100 mx-auto  rounded-lg  p-8">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
              placeholder="Enter username..."
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
              placeholder="Enter phone number..."
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm"
              placeholder="Enter email..."
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 bg-indigo-500 border border-transparent rounded-md font-semibold text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
