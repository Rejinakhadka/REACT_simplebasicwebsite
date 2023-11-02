import React from 'react';
import { useForm } from 'react-hook-form';
import "../Form.css";

const Form = () => {
  const { register, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    <div className="form-container">
      <div className='form-header'>
        <h2>Contact Us</h2>
        <p>If you have any further inquiries, please let us know by filling out the form below.</p>
      </div>
      <div className='form-input'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <div className="input-field">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName")}
              />
            </div>
            <div className="input-field">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName")}
              />
            </div>
          </div>
          <div className="input-grid">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register("email")}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              {...register("message")}
            />
          </div>
          <button className='form-submit-button' >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
