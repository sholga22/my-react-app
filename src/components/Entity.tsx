import { EntityConfig } from '../types/entities.ts'; 
import { Teacher, Student, Subject } from '../type/entities.tsx';


export const teacherConfig: EntityConfig = {
  title: "Add new teacher",
  apiEndpoint: '/teachers',
  fields: [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'phone', label: 'Phone number', type: 'text', required: true }
  ]
};

export const entityConfigs = {
  teacher: teacherConfig,
  // student: studentConfig,
  // subject: subjectConfig
};

