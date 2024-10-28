import React from "react";

const ClassroomList = ({ Classrooms }) => {
    return (
        <div>
            {Classrooms?.map((Classroom) => (
                <div key={Classroom._id} className="p-4 border mb-2">
                    <h2 className="text-xl font-bold">{Classroom.studentName}</h2>
                    <p>{Classroom.studentRollNo}Enter your Roll number</p>
                    <p>{Classroom.classroomName}Enter your Classroom Name</p>
                    <p>Classroom Code {Classroom.classroomCode}</p>
                </div>
            ))}
        </div>
    );
};

export default ClassroomList;
