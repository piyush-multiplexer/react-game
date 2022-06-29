import React, { useState } from "react";

export default function Log() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleClick() {
    console.log(title, description);
  }

  return (
    <section className="hero">
      <h1 className="hero--header">{title}</h1>
      <textarea
        rows={3}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>
    </section>
  );
}
