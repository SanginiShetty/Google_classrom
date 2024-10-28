import React from 'react'
import { Link } from "react-router-dom";

const Home = () => {
    return (
    <div className="bg-gray-100 text-gray-800">
  


    <section className="bg-green-600 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Welcome to Google Classroom</h1>
        <p className="mt-4 text-lg">
          Create your own classroom or join a classroom
        </p>
      </div>
    </section>


    <section className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow-md rounded-xl">
          <section className="bg-yellow-500 text-white py-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Classroom 1</h3>
            </section>
            <h2 >Engineering Mathematics-4</h2>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
          <section className="bg-yellow-500 text-white py-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Classroom 2</h3>
            </section>
            <p>Internet Programming</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
          <section className="bg-yellow-500 text-white py-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Classroom 3</h3>
            </section>
            <p>Computer Network and Network Design</p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-xl">
          <section className="bg-yellow-500 text-white py-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Classroom 4</h3>
            </section>
            <h2 >Engineering Mechanics</h2>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
          <section className="bg-yellow-500 text-white py-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Classroom 5</h3>
            </section>
            <p>Software Engineering</p>
          </div>
          <div className="bg-white p-6 shadow-md rounded-xl">
          <section className="bg-yellow-500 text-white py-5 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Classroom 6</h3>
            </section>
            <p>C Programming</p>
          </div>
        </div>
      </div>
    </section>


    <footer className="bg-orange-400 text-white py-8">
      <div className="container mx-auto text-center">
        <p></p>
      </div>
    </footer>
  </div>
);
}

export default Home
