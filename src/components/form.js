import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <form className="form" data-netlify="true">
      <label className="label">Your name</label>
      <input
        type="text"
        value={name}
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <label className="label">Your email</label>
      <input
        type="email"
        value={email}
        placeholder="example@gmail.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <label className="label">Message</label>
      <input
        className="message-input"
        type="text"
        value={message}
        placeholder="message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="submit-button" type="submit">
        Reach out!
      </button>
    </form>
  );
};

export default Form;
