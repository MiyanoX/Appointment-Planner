import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (e) => {
    return setTitle(e.target.value);
  }

  const handleContact = (e) => {
    return setContact(e.target.value);
  }

  const handleDate = (e) => {
    return setDate(e.target.value);
  }

  const handleTime = (e) => {
    return setTime(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} >
      <input type='text' value={title} placeholder="Title" onChange={handleTitle} ></input>
      <input type='date' value={date} placeholder="Date" onChange={handleDate} min={getTodayString()} ></input>
      <input type='time' value={time} placeholder="Time" onChange={handleTime} ></input>
      <ContactPicker value={contact} contacts={contacts} onChange={handleContact} ></ContactPicker>
      <input type="submit" value="submit" ></input>
    </form>
  );
};
