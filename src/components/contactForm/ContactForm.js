import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  const handleName = (e) => {
    setName(e.target.value);
  }

  const handlePhone = (e) => {
    setPhone(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={name} placeHolder='Name' onChange={handleName} ></input>
      <input type='tel' value={phone} placeHolder='Phone' onChange={handlePhone} pattern="^(0([1-9]{1}-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})$" ></input>
      <input type='email' value={email} placeHolder='Email' onChange={handleEmail} ></input>
      <input type='submit' value='submit' ></input>
    </form>
  );
};
