import React, { useState } from "react";

export default function Log() {
  const [formData, setFormData] = useState({ title: "", description: "" });

  function handleClick() {
    console.log(formData);
  }

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <section className="hero">
      <input
        className="hero--input input"
        type="text"
        placeholder="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <textarea
        rows={3}
        className="hero--textarea input"
        placeholder="Description"
        value={formData.description}
        name="description"
        onChange={handleChange}
      />
      <button onClick={handleClick}>Submit</button>
    </section>
  );
}
