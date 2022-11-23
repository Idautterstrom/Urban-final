import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state }),
    })
      .then(() => alert("Success!"))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <form
      data-netlify="true"
      name="pizzaOrder"
      method="post"
      action="/pages/success"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
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
