"use client";

import { useState, FormEvent } from "react";
import { CONTACT_CONTENT } from "@/lib/constants";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "1c622b54-d498-48ed-ae76-708c3288eecc");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        // Show success message
        setIsSubmitted(true);

        // Reset form
        setFormData({ name: "", email: "", message: "" });

        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Success Message */}
      {isSubmitted && (
        <div className="rounded-lg bg-green-50 p-4 text-green-800">
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm">We&apos;ll get back to you as soon as possible.</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-900">
              {CONTACT_CONTENT.form.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={CONTACT_CONTENT.form.namePlaceholder}
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-mega-teal focus:outline-none focus:ring-2 focus:ring-mega-teal focus:ring-opacity-20"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-900">
              {CONTACT_CONTENT.form.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={CONTACT_CONTENT.form.emailPlaceholder}
              className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-mega-teal focus:outline-none focus:ring-2 focus:ring-mega-teal focus:ring-opacity-20"
              required
            />
          </div>
        </div>

        {/* Message Textarea */}
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-900">
            {CONTACT_CONTENT.form.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={CONTACT_CONTENT.form.messagePlaceholder}
            rows={6}
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-mega-teal focus:outline-none focus:ring-2 focus:ring-mega-teal focus:ring-opacity-20"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="group flex items-center gap-2 rounded-full bg-mega-teal px-8 py-4 font-medium text-white transition-all duration-300 hover:bg-mega-dark-teal hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isSubmitting ? "Sending..." : CONTACT_CONTENT.form.submitText}
            <svg
              className="h-5 w-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
