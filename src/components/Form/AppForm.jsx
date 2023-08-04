import React, { useState } from 'react';
import styled from './AppForm.module.css';

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
    <div className={styled.container}>
      <form className={styled.form} onSubmit={handleSubmit}>
        <div className={styled.nameContainer}>
          <label className={styled.nameLabel}>이름</label>
          <input 
            type='text'
            id='formName'
            name='name' 
            value={form.name} 
            onChange={handleChange} 
            className={styled.input}
          />
        </div>
        <div className={styled.emailContainer}>
          <label className={styled.emailLabel}>이메일</label>
          <input 
            type='email' 
            id='formEmail'
            name='email'
            value={form.email} 
            onChange={handleChange} 
            className={styled.input}
          />
        </div>
        <button className={styled.formSubmit}>Submit</button>
      </form>
    </div>
  );
}

