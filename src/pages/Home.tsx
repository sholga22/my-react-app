import React from 'react';
import { AddEntity } from '../components/AddEntity';
import { teacherConfig } from '../types/entities';

export default function Home() {
 

  return (
    
      <div className='schedule'>
        <Sidebar />
         
        <div className='schedule-main'>
          <h1>Welcom</h1>;
        </div>
      </div>
    
    )
}
    


      function Sidebar() {
  return (
      <div className='schedule-sidebar'>
        <div className='schedule-sidebar-section'>
         <h2>{teacherConfig.title}</h2>
            <AddEntity />                     
        </div>
        <div className='schedule-sidebar-section'>
          <h2>All students
          </h2>
        </div>
        <div className='schedule-sidebar-section'>
          <h2>All teachers
          </h2>
          
        </div>
      </div>
      )
}


