"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { CONTACT_CONTENT, SMS_CONSENT } from "@/lib/constants";

const initialFormData = {
  name: "",
  email: "",
  mobilePhone: "",
  message: "",
  smsConsent: false,
};

export function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const submittedAt = new Date().toISOString();
      const formUrl = window.location.href;
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "1c622b54-d498-48ed-ae76-708c3288eecc");
      formDataToSend.append("subject", "New contact request from Mega Glass website");
      formDataToSend.append("from_name", "Mega Glass Website");
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("Mobile Phone Number", formData.mobilePhone || "Not provided");
      formDataToSend.append("message", formData.message);
      formDataToSend.append(
        "SMS Consent",
        formData.smsConsent ? "Yes - opted in" : "No - not opted in"
      );
      formDataToSend.append("Submission Date and Time", submittedAt);
      formDataToSend.append("Form URL", formUrl);
      formDataToSend.append("SMS Consent Text Version", SMS_CONSENT.version);
      formDataToSend.append("SMS Consent Text", SMS_CONSENT.text);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        setFormData(initialFormData);
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setErrorMessage(data.message || "We could not send your message. Please try again.");
      }
    } catch {
      setErrorMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, type, value } = e.target;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {isSubmitted && (
        <div
          className="rounded-lg bg-green-50 p-4 text-green-800"
          role="status"
          aria-live="polite"
        >
          <p className="font-medium">Message sent successfully!</p>
          <p className="text-sm">We&apos;ll get back to you as soon as possible.</p>
        </div>
      )}

      {errorMessage && (
        <div
          className="rounded-lg bg-red-50 p-4 text-red-800"
          role="alert"
          aria-live="assertive"
        >
          {errorMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate={false}>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

        <div className="flex flex-col gap-2">
          <label htmlFor="mobilePhone" className="text-sm font-medium text-gray-900">
            {CONTACT_CONTENT.form.mobilePhoneLabel}{" "}
            <span className="font-normal text-gray-500">(optional)</span>
          </label>
          <input
            type="tel"
            id="mobilePhone"
            name="mobilePhone"
            value={formData.mobilePhone}
            onChange={handleChange}
            placeholder={CONTACT_CONTENT.form.mobilePhonePlaceholder}
            autoComplete="tel"
            inputMode="tel"
            className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-mega-teal focus:outline-none focus:ring-2 focus:ring-mega-teal focus:ring-opacity-20"
          />
        </div>

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

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="smsConsent"
              name="smsConsent"
              checked={formData.smsConsent}
              onChange={handleChange}
              aria-describedby="smsConsentLinks"
              className="mt-1 h-5 w-5 shrink-0 cursor-pointer rounded border-gray-300 text-mega-teal accent-mega-teal focus:ring-2 focus:ring-mega-teal focus:ring-offset-2"
            />
            <p className="text-sm leading-6 text-gray-700">
              <label htmlFor="smsConsent" className="cursor-pointer">
                By checking this box, I agree to receive conversational and informational
                text messages from Mega Glass LLC regarding estimates, scheduling,
                project updates, and customer support. Message frequency varies. Message
                and data rates may apply. Reply STOP to opt out or HELP for assistance.
                Consent is not a condition of purchase.
              </label>{" "}
              <span id="smsConsentLinks">
                View our{" "}
                <Link
                  href="/privacy-policy"
                  className="inline-block font-medium text-mega-teal underline underline-offset-2 hover:text-mega-dark-teal"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/sms-terms"
                  className="inline-block font-medium text-mega-teal underline underline-offset-2 hover:text-mega-dark-teal"
                >
                  SMS Terms and Conditions
                </Link>
                .
              </span>
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            disabled={isSubmitting}
            aria-disabled={isSubmitting}
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
