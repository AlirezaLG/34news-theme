"use client";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function ContactForm({ locale, formId }) {
  const { t } = useTranslation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle', 'submitting', 'success', 'error'
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("submitting");

    const url =
      locale === "fa"
        ? "https://admin.34news.com/graphql"
        : "https://admin.34news.com/en/graphql";

    const query = `
      mutation SubmitFormidableForm($formId: Int!, $name: String!, $email: String!, $subject: String!, $message: String!) {
        submitFormidableForm(input: {formId: $formId, name: $name, email: $email, subject: $subject, message: $message}) {
          success
          message
        }
      }
    `;

    const variables = {
      formId, // Use the formId prop passed from the parent component
      name,
      email,
      subject,
      message,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query,
          variables,
        }),
      });

      const data = await response.json();
      console.log("GraphQL response:", data); // Log the full response for inspection

      if (
        response.ok &&
        data.data &&
        data.data.submitFormidableForm &&
        data.data.submitFormidableForm.success
      ) {
        setStatus("success");
        setResponseMessage(t("Thanks for contacting us!"));
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setStatus("error");
        setResponseMessage(
          data.data?.submitFormidableForm?.message ||
            t("Failed to submit the form. Please try again.")
        );
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage(
        t(
          "Failed to submit the form due to a network error. Please try again later."
        )
      );
    }
  };

  return (
    <React.Fragment>
      {/* prettier-ignore */}
      <form onSubmit={handleSubmit}>

      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Name")}</label>
            <input type="text" value={name} placeholder={t("Name")} onChange={(e) => setName(e.target.value)} id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
        </div>
        <div>
            <label for="Email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Email")}</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder={t("Email")}  id="Email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required />
        </div>
       </div>

    <div class="mb-6">
        <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Subject")}</label>
        <input type="text" id="subject" value={subject}  onChange={(e) => setSubject(e.target.value)} placeholder={t("Subject")} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"   />
    </div>
      
    <div className="mb-6">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{t("Your Message")}</label>
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder={t("Your Message")} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" ></textarea>
    </div>
    

      <button type="submit" class="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" disabled={status === "submitting"}>
        {t("Submit")}
      </button>
      {status === "submitting" && <p style={{ color: "green" }} >{t("Submitting...")}</p>}
      {status === "success" && <p style={{ color: "green" }} >{responseMessage}</p>}
      {status === "error" && <p style={{ color: "red" }}>{responseMessage}</p>}
    </form>
    </React.Fragment>
  );
}

export default ContactForm;
