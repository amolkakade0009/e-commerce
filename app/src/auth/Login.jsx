import React, { useContext, useState } from "react";
import { UrlContext } from "../context/UrlContext";
import { data, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { baseUrl } = useContext(UrlContext);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    await fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa(email + ":" + password)
      }
      // mode:"no-cors"
    })
      .then(response => response.json()) // Converts the JSON response from the server (which is a string) into a JavaScript object.
      .then(data => {
        console.log(data)
        if (data.token) {
          localStorage.setItem("token", data.token);
          navigate('/')
        } else {
          alert("Login failed")
        }
      })
      .catch(error => console.error("Error:", error));

    // Example login API call (replace with real logic)
    console.log("Logging in with:", { email, password });

    // Clear form
    setEmail("");
    setPassword("");
    setError("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500">
      <form
        onSubmit={handleLogin}
        className="bg-white/90 backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        {error && <p className="text-red-600 mb-4 text-sm text-center">{error}</p>}

        <div className="mb-5">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-medium mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg transition duration-300 transform hover:scale-105"
        >
          Log In
        </button>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-indigo-600 hover:underline font-medium">
            Sign Up
          </a>
        </p>
      </form>
    </div>

  );
};

export default Login;
