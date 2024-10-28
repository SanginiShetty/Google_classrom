// models/Classroom.model.js
import { Schema, model } from 'mongoose';

const classroomSchema = new Schema({
  studentName: {
    type: String,
    required: true,
  },
  studentRollNo:{
    type: Number,
    required: true,
  },
  classroomName: {
    type: String,
    required: true,
  },
  classroomCode: {
    type: String,
    required: true,
  },
});

export const Classroom = model('Classroom', classroomSchema);
