import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="bg-white shadow-lg h-full w-64 flex flex-col">
      <div className="h-16 bg-white flex justify-center items-center">
        <img src="logo.png" alt="Google Classroom Logo" className="h-12" />
      </div>
      <div className="flex flex-col h-full">
        <Link to="/dashboard" className="flex flex-row h-12 px-6 hover:bg-gray-100 items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18m-18 0l7 7m0 0l-7 7"></path>
          </svg>
          <span className="ml-3 text-lg">Dashboard</span>
        </Link>
        <Link to="/classes" className="flex flex-row h-12 px-6 hover:bg-gray-100 items-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V18M6 6h12M6 18H12"></path>
          </svg>
          <span className="ml-3 text-lg">Classes</span>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;