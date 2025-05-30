import { useForm } from 'react-hook-form';


type AddEntityProps = {
  config: EntityConfig;
};

// universal form (with configuration) for entering teacher/student/subject data in sidebar
// is used in Home.tsx

export function AddEntity({ config }: AddEntityProps) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log(`Add new ${config.apiEndpoint}:`, data);
    reset();
  };

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
        </div>
      ))}
      <button type="submit">Add</button>
    </form>
  );
}
