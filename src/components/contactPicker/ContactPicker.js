import React from "react";

export const ContactPicker = ({ contact, contacts, handleContact}) => {
  return (
    <select onChange={handleContact} defaultValue={contact} >
      <option selected value='' ></option>
      { contacts.map((contact) => {
        return <option key={contact.name} value={contact.name} >{contact.name}</option>
      })}
    </select>
  );
};
