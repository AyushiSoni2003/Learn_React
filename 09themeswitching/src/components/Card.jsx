import React from "react";

export default function Card() {
  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Replace with a screenshot or graphic of your projects */}
      <img
        className="p-6 rounded-t-lg"
        src="https://reactjs.org/logo-og.png"
        alt="React Context API"
      />

      <div className="px-5 pb-6">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          React Context API Learning Journey
        </h5>

        <p className="mt-2 text-gray-700 dark:text-gray-300 text-sm">
          Built  <strong>ThemeSwitcher</strong> to
          master global state management without prop drilling using React.
        </p>

        <div className="flex items-center mt-3 mb-5">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mr-2">
            React
          </span>
          
          <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-800">
            Context API
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <a
            href="https://github.com/AyushiSoni2003/Learn_React/tree/main/09themeswitching"
            target="_blank"
            rel="noreferrer"
            className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
          >
            ThemeSwitcher Repo
          </a>
        </div>
      </div>
    </div>
  );
}
