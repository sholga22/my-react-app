import React from 'react';
import { useForm } from 'react-hook-form';
import { teacherConfig } from '../types/entities';

// Функция генерации формы для добавления учителя
export function AddEntity() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data: any) => {
    console.log('Добавляем учителя:', data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">{teacherConfig.fields[0].label}</label>
      <input
        id="firstName"
        {...register('firstName', { required: teacherConfig.fields[0].required })}
        type="text"
      />
      <button type="submit">Add</button>
    </form>
  );
}