"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [message, setMessage] = useState("");

  // This function is called when the form is submitted
  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");
    const url = "https://admin.34news.com";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
        body: JSON.stringify({ email: email }),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("success");
        setMessage(t("Thanks for subscribing"));
        setEmail(""); // Clear the input after successful submission
      } else {
        setStatus("error");
        setMessage(data.message || t("Failed to subscribe. Please try again."));
      }
    } catch (error) {
      setStatus("error");
      setMessage(
        t("Failed to subscribe due to a network error. Please try again later.")
      );
    }
  };

  // Manage input field change
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div
      id="sign-up-pop-up"
      tabindex="-1"
      className="bg-gray-100 p-5 rounded-md"
    >
      <h3 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
        {t("Get more updates...")}
      </h3>
      <p className="mb-5 text-sm font-medium text-gray-500 dark:text-gray-300">
        {t(
          "Sign up for our newsletter and you'll be among the first to find out about new features."
        )}
      </p>
      <form onSubmit={handleSubmit}>
        <div data-style="clean" className="flex-row items-end mb-3">
          <div
            data-element="fields"
            data-stacked="false"
            className="flex items-center w-full max-w-md mb-3 seva-fields formkit-fields"
          >
            <div className="relative w-full me-3 formkit-field">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                  className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"></path>{" "}
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"></path>{" "}
                </svg>
              </div>
              <input
                id="email"
                className="formkit-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="email"
                aria-label="Email Address"
                placeholder={t("Your email address...")}
                required
                type="email"
                value=""
                onChange={handleInputChange}
              />
            </div>
            <button
              type="submit"
              data-element="submit"
              className="formkit-submit"
              disabled={status === "submitting"}
            >
              <span className=" px-5 py-3 text-sm font-medium text-center text-white bg-primary rounded-lg cursor-pointer hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {t("Subscribe")}
              </span>
            </button>
          </div>
          {status === "submitting" && (
            <p style={{ color: "green" }}>{t("Submitting...")}</p>
          )}
          {status === "success" && <p style={{ color: "green" }}>{message}</p>}
          {status === "error" && <p style={{ color: "red" }}>{message}</p>}
        </div>
      </form>
    </div>
  );
}

export default Newsletter;
