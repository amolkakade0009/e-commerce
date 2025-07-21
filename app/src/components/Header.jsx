import React from 'react'

const Header = () => {
  return (
   <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
  <div className="text-2xl font-bold text-indigo-600 tracking-wide">
    MyApp
  </div>
  <nav className="space-x-4">
      <a
      href="/"
      className="text-gray-700 hover:text-indigo-600 font-medium transition"
    >
      Home
    </a>
    <a
      href="/login"
      className="text-gray-700 hover:text-indigo-600 font-medium transition"
    >
      Login
    </a>
    <a
      href="/signup"
      className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg font-medium transition"
    >
      Sign Up
    </a>
  </nav>
</header>

  )
}

export default Header;

