import React, { useState } from "react";
import axios from "axios";

const ClassroomForm = ({ onClassroomAdded }) => {
    const [studentName, setstudentName] = useState("");
    const [studentRollNo, setstudentRollNo] = useState(0);
    const [classroomName, setclassroomName] = useState("");
    const [classroomCode, setclassroomCode] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newClassroom = { studentName, studentRollNo, classroomName, classroomCode};
            const response = await axios.post("http://localhost:3000/api/classroom", newClassroom, {
                withCredentials: true,
            });
            onClassroomAdded(response.data);
        } catch (error) {
            console.error(error.response?.data || "Error creating Classroom");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 shadow-md rounded-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Join Classroom</h2>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Student Name</label>
                <input
                    type="text"
                    id="name"
                    value={studentName}
                    onChange={(e) => setstudentName(e.target.value)}
                    placeholder="Enter Classroom name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="studentRollNo">Roll Number</label>
                <input
                    type="number"
                    id="studentRollNo"
                    value={studentRollNo}
                    onChange={(e) => setstudentRollNo(e.target.value)}
                    placeholder="Enter Student Roll Number"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="classroomName">Classroom Name</label>
                <input
                    type="text"
                    id="classroomName"
                    value={classroomName}
                    onChange={(e) => setclassroomName(e.target.value)}
                    placeholder="Enter number of Classroom Name"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="classroomCode">Classroom Code</label>
                <input
                    type="text"
                    id="classroomCode"
                    value={classroomCode}
                    onChange={(e) => setclassroomCode(e.target.value)}
                    placeholder="Enter Classroom Code"
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-orange-500"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-orange-500 text-white p-3 rounded-md hover:bg-orange-600 transition duration-300"
            >
                Add Classroom
            </button>
        </form>
    );
};

export default ClassroomForm;
