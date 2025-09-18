import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_y21w9xk",
        "template_a0qea8c",
        formData,
        "QZftwaqayL7LA7tzU"
      )
      .then(
        (response) => {
          alert("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          alert("There was an error sending the message. Please try again.");
          console.error("EmailJS Error:", error);
          alert(`Error details: ${error.text}`);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h3 className="contact-kicker">Contacts</h3>
        <div className="contact-grid">
          <div className="contact-cta">
            <h2>
              Have a Job?
              <br />
              Let’s talk!
            </h2>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                placeholder="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                placeholder="you@example.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message
              <textarea
                rows="4"
                placeholder="Hi Yash, I’d like to discuss…"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
