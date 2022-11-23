import React, { useState } from "react";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState("");

  const handleSubmit = (e) => {
    setSubmitting(true);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "waitlist", name, email, message }),
    })
      .then(() => {
        setSubmitting(false);
        setSubmitted("Thank you for your kind words!");
      })
      .catch((error) => alert(error));

    e.preventDefault();
  };

  if (submitting) {
    return (
      <div className="transition ease-in-out duration-300 pb-10 m-auto bg-white text-center pt-20 success">
        <p className="text-2xl font-bold mb-8 text-main-color">
          Sending message..
        </p>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="transition ease-in-out duration-300 pb-10 m-auto bg-white text-center pt-20 success">
        <p className="text-main-color">Thanks for your message!.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="contact" value="contact" />

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
