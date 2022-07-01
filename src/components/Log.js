import React, { useState } from "react";

export default function Log() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    isPrivate: false,
  });

  function handleClick(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
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
        value={formData.title} // controlled input
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
      <div>
        <input
          id="isPrivate"
          type="checkbox"
          checked={formData.isPrivate}
          name="isPrivate"
          onChange={handleChange}
        />
        <label htmlFor="isPrivate">Keeep this Private?</label>
      </div>
      <button onClick={handleClick}>Submit</button>
    </section>
  );
}
