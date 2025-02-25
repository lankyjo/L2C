"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Emailform = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      user_name: `${formData.firstName} ${formData.lastName}`,
      user_email: formData.email,
      user_message: formData.message,
    };

    emailjs
      .send(
        "service_p2fcorp", // Your EmailJS Service ID
        "template_mlclsrb", // Your EmailJS Template ID
        templateParams,
        "Xp3FyvatJNKvv9xaO" // Your EmailJS Public Key
      )
      .then(() => {
        setFeedback("Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        // Clear feedback after 5 seconds
        setTimeout(() => setFeedback(""), 5000);
      })
      .catch(() => {
        setFeedback("Failed to send message. Please try again.");
        // Clear feedback after 5 seconds
        setTimeout(() => setFeedback(""), 5000);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <form
      onSubmit={sendEmail}
      className="mt-10 md:px-5 px-4 py-10 md:max-w-[80%] md:mx-auto"
    >
      <h2 className="text-center text-3xl font-bungee mb-10">
        Send Me Your Thoughts: Fill Out the Form Below
      </h2>

      <div className="space-y-10">
        <div id="names" className="flex gap-5">
          <div className="flex-1">
            <label className="block text-sm">First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border-b border-black w-full p-3 bg-transparent"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm">Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border-b border-black w-full p-3 bg-transparent"
            />
          </div>
        </div>

        <div id="email">
          <label className="block text-sm">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border-b border-black w-full p-3 bg-transparent"
          />
        </div>

        <div id="textarea">
          <label className="block text-sm">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="border-b border-black w-full p-3 bg-transparent resize-none"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={isSending}
            className="bg-red-600 text-ivory px-24 py-3 inline-block"
          >
            {isSending ? "Sending..." : "Submit"}
          </button>
        </div>
        {feedback && (
          <p className="text-center mt-4 text-sm">{feedback}</p>
        )}
      </div>
    </form>
  );
};

export default Emailform;
