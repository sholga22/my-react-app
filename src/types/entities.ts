export interface Teacher {
  id: number;
  name: string;
  phone: number;
  apiEndpoint: '/teachers',
}

export interface Student {
  id: number;
  name: string;
  teacherId: number;
  apiEndpoint: '/students',
}

export interface Subject {
  id: number;
  name: string;
  apiEndpoint: '/subjects',
}

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
  title: 'Add Teacher',
  apiEndpoint: '/teachers',
  fields: [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
  ],
};

export interface Lesson {
  id: number;
  teacherId: number;
  studentId: number;
  subjectId: number;
}

export interface Event {
  id: number;
  lessonId: number;
  eventData: Date;
  name: string;
  status: boolean; 
}