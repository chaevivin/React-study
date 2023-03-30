import React, { useState } from 'react';

export default function AppForm() {

  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label className='name'>이름 : </label>
      <input 
        type='text'
        id='formName'
        name='name' 
        value={form.name} 
        onChange={handleChange} 
      />
      <label>이메일 : </label>
      <input 
        type='email' 
        id='formEmail'
        name='email'
        value={form.email} 
        onChange={handleChange} 
      />
      <button className='formSubmit'>Submit</button>
    </form>
  );
}

