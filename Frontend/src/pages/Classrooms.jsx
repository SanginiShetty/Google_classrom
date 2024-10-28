import React, { useState, useEffect } from "react";
import axios from "axios";
import ClassroomForm from "../components/ClassroomForm";
import ClassroomList from "../components/ClassroomList";

const Classrooms = () => {
    const [Classrooms, setClassrooms] = useState([]);
    const [ClassroomName, setClassroomName] = useState("");
    const [searchedClassrooms, setSearchedClassrooms] = useState([]);
    const [ClassroomToUpdate, setClassroomToUpdate] = useState({
        studentName: "",
        studentRollNo: 0,
        classroomName: "",
        classroomCode: "",
    });
    const [ClassroomId, setClassroomId] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Fetch all Classrooms
    const fetchClassrooms = async () => {
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:3000/api/classroom");
            setClassrooms(response.data);
            setError(""); // Clear any previous errors
        } catch (error) {
            setError("Error fetching Classrooms.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Search Classroom by Name
    const handleSearchClassroom = async () => {
        if (!ClassroomName.trim()) return; // Prevent empty searches
        setLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/api/classroom/search/${ClassroomName}`);
            if (response.data.length > 0) {
                setSearchedClassrooms(response.data);
                setClassroomId(response.data[0]._id);
                setClassroomToUpdate({
                    studentName: response.data[0].studentName,
                    studentRollNo: response.data[0].studentRollNo,
                    classroomName: response.data[0].classroomName,
                    classroomCode: response.data[0].classroomCode,
                });
                setError(""); // Clear any previous errors
            } else {
                setSearchedClassrooms([]);
                setClassroomId("");
                setError("No Classrooms found with that name.");
            }
        } catch (error) {
            setError("Error searching Classrooms.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Update Classroom by ID
    const handleUpdateClassroom = async () => {
        setLoading(true);
        try {
            await axios.put(`http://localhost:3000/api/classroom/${ClassroomId}`, ClassroomToUpdate);
            fetchClassrooms(); // Refresh the list after updating
            alert("Classroom updated successfully");
            resetForm();
        } catch (error) {
            setError("Error updating Classroom.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Delete Classroom by ID
    const handleDeleteClassroom = async () => {
        setLoading(true);
        try {
            await axios.delete(`http://localhost:3000/api/Classrooms/${ClassroomId}`);
            fetchClassrooms(); // Refresh the list after deletion
            alert("Classroom deleted successfully");
            resetForm();
        } catch (error) {
            setError("Error deleting Classroom.");
            console.error(error.response.data);
        } finally {
            setLoading(false);
        }
    };

    // Reset the form and states
    const resetForm = () => {
        setClassroomId("");
        setClassroomToUpdate({
            studentName: "",
            studentRollNo: 0,
            classroomName: "",
            classroomCode: "",
        });
        setClassroomName("");
        setSearchedClassrooms([]);
    };

    useEffect(() => {
        fetchClassrooms();
    }, []);

    return (
        <div>
            <h1 className="text-2xl mb-4">Manage Classrooms</h1>
            {loading && <p className="text-blue-500">Loading...</p>}
            {error && <p className="text-orange-500">{error}</p>}
            
            {/* Search Classroom by ID */}
             <div>
                <input
                    type="text"
                    value={ClassroomName}
                    onChange={(e) => setClassroomName(e.target.value)}
                    placeholder="Enter Classroom Name"
                    className="border p-2 mb-4"
                />
                <button
                    onClick={handleSearchClassroom}
                    className="bg-orange-500 text-white p-2 rounded"
                >
                    Search Classroom
                </button>
            </div> 

            {/* Display Searched Classrooms */}
            {searchedClassrooms.length > 0 && (
                <div className="border p-4 mt-4">
                    <h3>Classroom Details:</h3>
                    {searchedClassrooms.map((Classroom) => (
                        <div key={Classroom._id} className="mb-4">
                            <p>ID: {Classroom._id}</p>
                            <p>Name: {Classroom.studentName}</p>
                            <p>Roll Number: {Classroom.studentRollNo}</p>
                            <p>Classroom Name: {Classroom.classroomName}</p>
                            <p>classroom Code: {Classroom.classroomCode}</p>
                            {/* Button to set selected Classroom for updating */}
                            <button
                                onClick={() => {
                                    setClassroomId(Classroom._id);
                                    setClassroomToUpdate({
                                        studentName: Classroom.studentName,
                                        studentRollNo: Classroom.studentRollNo,
                                        classroomName: Classroom.classroomName,
                                        classroomCode: Classroom.classroomCode,
                                    });
                                }}
                                className="bg-green-500 text-white p-1 rounded"
                            >
                                Update
                            </button>
                        </div>
                    ))}
                </div>
            )}

            {/* Update Classroom Form */}
            {ClassroomId && (
                <div>
                    <h3 className="text-lg mt-4">Update Classroom</h3>
                    <input
                        type="text"
                        value={ClassroomToUpdate.studentName}
                        onChange={(e) => setClassroomToUpdate({ ...ClassroomToUpdate, studentName: e.target.value })}
                        placeholder="StudentName"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="number"
                        value={ClassroomToUpdate.studentRollNo}
                        onChange={(e) => setClassroomToUpdate({ ...ClassroomToUpdate, studentRollNo: parseInt(e.target.value) })}
                        placeholder="RollNumber"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="text"
                        value={ClassroomToUpdate.classroomName}
                        onChange={(e) => setClassroomToUpdate({ ...ClassroomToUpdate, classroomName: e.target.value })}
                        placeholder="ClassroomName"
                        className="border p-2 mb-2"
                    />
                    <input
                        type="text"
                        value={ClassroomToUpdate.classroomCode}
                        onChange={(e) => setClassroomToUpdate({ ...ClassroomToUpdate, classroomCode: e.target.value })}
                        placeholder="ClassroomCode"
                        className="border p-2 mb-2"
                    />
                    {/* <button
                        onClick={handleUpdateClassroom}
                        className="bg-green-500 text-white p-2 rounded mt-2"
                    >
                        Update Classroom
                    </button> */}
                </div>
            )}

            {/* Delete Classroom Button */}
            {/* {ClassroomId && (
                <button
                    onClick={handleDeleteClassroom}
                    className="bg-red-500 text-white p-2 rounded mt-4"
                >
                    Delete Classroom
                </button>
            )} */}

            {/* Create New Classroom Form */}
            <ClassroomForm onClassroomAdded={(newClassroom) => setClassrooms((prev) => [...prev, newClassroom])} />

            {/* List of Classrooms */}
            <ClassroomList Classrooms={Classrooms} />
        </div>
    );
};

export default Classrooms;
