import type { Teacher, Student, Subject } from '../types/entities';


// configuration for universal form for adding subject/student/teacher

export type EntityType = 'teacher' | 'student' | 'subject';
export type EntityConfig = {
  title: string;
  fields: {
    name: keyof Teacher | keyof Student | keyof Subject;
    label: string;                                          // Caption for form field
    type: 'text' | 'select' | 'email' | 'textarea';         // Input field type, standart
    options?: { label: string; value: number | string }[]; // specially for  "select" field type: array of options for selection (Optional)
    required?: boolean;                                     // mandatory filling check (*)
  }[];
  apiEndpoint: string;                                      // where will the data go (for example, '/teachers', '/students'...).
};



export const teacherConfig: EntityConfig = {
  title: "Add new teacher",
  apiEndpoint: 'teachers',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'phone', label: 'Phone', type: 'text', required: true }
  ]
};

export const studentConfig: EntityConfig = {
  title: "Add new student",
  apiEndpoint: 'students',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'E-mail', type: 'email', required: true },
    { name: 'phone', label: 'Phone', type: 'text', required: true }
  ]
};

export const subjectConfig: EntityConfig = {
  title: "Add new subject",
  apiEndpoint: 'subjects',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'level', label: 'Level', type: 'text', required: false }
  ]
};

export const entityConfigs = {
  teacher: teacherConfig,
  student: studentConfig,
  subject: subjectConfig
};