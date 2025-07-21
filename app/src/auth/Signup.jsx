import React, { useContext, useState } from "react";
import { UrlContext } from "../context/UrlContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "USER"
  });

  const [error, setError] = useState("");
  const { baseUrl } = useContext(UrlContext)
  const navigate = useNavigate()


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = form;

    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    await fetch(baseUrl + "/user/register", {
      method: "POST",
      body: JSON.stringify(form), //Converts a JavaScript object into a JSON string.
      headers: {
        "Content-Type": "application/json",
      }
    })
      .then(response => response.json()) // Converts the JSON response from the server (which is a string) into a JavaScript object.
      .then(body => {
        console.log(body)
        navigate("/login")
      })
      .catch(error => console.error("Error:", error));



    // Example signup logic (replace with actual API call)
    console.log("Signing up with:", form);

    // Clear form
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "USER"

    });
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <form
        onSubmit={handleSignup}
        className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Create Your Account
        </h2>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="John Doe"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="********"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
        >
          Sign Up
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-600 hover:underline font-medium">
            Log In
          </a>
        </p>
      </form>
    </div>

  );
};

export default Signup;
