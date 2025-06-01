import { useForm } from 'react-hook-form';
import type { EntityConfig } from '../config/configEntities';

type AddEntityProps = {
  config: EntityConfig;
};

// universal form (with configuration) for entering teacher/student/subject data in sidebar
// is used in Home.tsx

export function AddEntity({ config }: AddEntityProps) {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  // universal type for storing teacher/student/subject data
  type FormData = {
    [key: string]: any;  // for date from form
  };

  const onSubmit = async (data: FormData) => {
    console.log(`Add new ${config.apiEndpoint}:`, data);
    reset();


    // fetch API

    try {
      const response = await fetch(`http://localhost:3001/${config.apiEndpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log(`New ${config.apiEndpoint} was added:`, data);
        reset();
      } else {
        console.error('Save error');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // my form on Sidebar
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {config.fields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          <input
            id={field.name}
            type={field.type}
            {...register(field.name, { required: field.required })}
          />
          {errors[field.name] && <p style={{ color: 'red' }}>Это поле обязательно</p>}
        </div>
      ))}
      <button type="submit">Add</button>
    </form>
  );
}

