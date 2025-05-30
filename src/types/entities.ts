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
  level: string;
  apiEndpoint: '/subjects',
}



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