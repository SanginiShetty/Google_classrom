// controllers/classroom.controller.js
import { Classroom } from '../models/Classroom.model.js';

// Create a new classroom
export const createClassroom = async (req, res) => {
  console.log("Request body:", req.body); // Add this for debugging
  const {studentName, studentRollNo, classroomName, classroomCode, } = req.body;
  try {
    if (!studentName || !studentRollNo || !classroomName || !classroomCode) {
      return res
        .status(400)
        .json({ message: "All required fields must be provided" });
    }
    const classroom = await Classroom.create({
      studentName,
      studentRollNo,
      classroomName,
      classroomCode,
    });
    res.status(201).json(classroom);
  } catch (error) {
    console.error("Error creating classroom:", error.message);
    res.status(500).json({ message: error.message });
  }
};

// Get all classrooms
export const getClassrooms = async (req, res) => {
  try {
    const classrooms = await Classroom.find();
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a classroom by ID
export const getClassroomById = async (req, res) => {
  try {
    const classroom = await Classroom.findById(req.params.id);
    if (!classroom) return res.status(404).json({ message: "Classroom not found" });
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a classroom
export const updateClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!classroom) return res.status(404).json({ message: "Classroom not found" });
    res.status(200).json(classroom);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a classroom
export const deleteClassroom = async (req, res) => {
  try {
    const classroom = await Classroom.findByIdAndDelete(req.params.id);
    if (!classroom) return res.status(404).json({ message: "Classroom not found" });
    res.status(200).json({ message: "Classroom deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getClassroomByName = async (req, res) => {
  const { name } = req.params; // Extract name from parameters
  try {
    // Use a case-insensitive regular expression for partial matching
    const classrooms = await Classroom.find({
      classroomName: { $regex: name, $options: "i" },
    });

    // Check if any classrooms were found
    if (classrooms.length === 0) {
      return res
        .status(404)
        .json({
          message: "No classrooms found matching the search criteria",
        });
    }
    res.status(200).json(classrooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};