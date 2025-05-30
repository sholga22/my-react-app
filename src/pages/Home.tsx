import { AddEntity } from '../components/AddEntity';
import { teacherConfig, studentConfig, subjectConfig } from '../config/configEntities';

export default function Home() {


  return (

    <div className='schedule'>
      <Sidebar />

      <div className='schedule-main'>
        <h1>Welcome!</h1>;
      </div>
    </div>

  )
}



function Sidebar() {
  return (
    <div className='schedule-sidebar'>
      <div className='schedule-sidebar-section'>
        <h2>{teacherConfig.title}</h2>
        <AddEntity config={teacherConfig} />
      </div>
      <div className='schedule-sidebar-section'>
        <h2>{studentConfig.title}</h2>
        <AddEntity config={studentConfig} />
      </div>
      <div className='schedule-sidebar-section'>
        <h2>{subjectConfig.title}</h2>
        <AddEntity config={subjectConfig} />
      </div>
    </div>
  )
}


