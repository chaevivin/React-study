import React, { useState } from 'react';

export default function AppForm() {

  const [form, setForm] = useState({ name: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setForm({ name: '', email: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div className="formContainer">
      <form className='form' onSubmit={handleSubmit}>
        <div className="nameContainer">
          <label className='nameLabel'>이름</label>
          <input 
            type='text'
            id='formName'
            name='name' 
            value={form.name} 
            onChange={handleChange} 
          />
        </div>
        <div className="emailContainer">
          <label className='emailLabel'>이메일</label>
          <input 
            type='email' 
            id='formEmail'
            name='email'
            value={form.email} 
            onChange={handleChange} 
          />
        </div>
        <button className='formSubmit'>Submit</button>
      </form>
    </div>
  );
}

