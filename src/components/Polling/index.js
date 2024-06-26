"use client";
import React, { useState, useEffect } from "react";
import { frmlistGQL } from "@/lib/wpGraphQL";
import { getPostGQL } from "@/lib/functions";
import { useTranslation } from "react-i18next";

const Polling = ({ formId, locale }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const SUBMISSION_DELAY = 24 * 60 * 60 * 1000; // once a day

  useEffect(() => {
    const fetchData = async () => {
      const frms = await getPostGQL(frmlistGQL(formId), locale);
      setForm(frms.data.formidableForms.fields);
    };

    fetchData();
  }, [formId, locale]);

  if (!form) return <div>{t("Loading...")}</div>; // Show a loading state while the data is being fetched

  const CREATE_FORM_ENTRY = `
  mutation createFormEntry($formId: ID!, $fields: [FieldInput!]!) {
    createFormEntry(input: { formId: $formId, fields: $fields }) {
      success
      message
    }
  }
`;

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    const lastSubmissionTime = localStorage.getItem(
      "lastSubmissionTime" + formId
    );
    const now = new Date().getTime();

    if (lastSubmissionTime && now - lastSubmissionTime < SUBMISSION_DELAY) {
      setMessage(
        t("You have already submitted. you can't submit multiple times")
      );
      setLoading(false);
      return;
    }

    const fieldData = Array.from(event.target.elements)
      .filter(
        (el) =>
          el.name &&
          (el.type === "radio" || el.type === "checkbox") &&
          el.checked
      )
      .map((el) => ({ id: el.name, value: el.value }));

    const variables = {
      formId: formId.toString(), // Ensure formId is a string
      fields: fieldData,
    };
    // console.log(variables); // Debug: Check the structure of the variables

    const url =
      locale === "fa"
        ? "https://admin.34news.com/graphql"
        : "https://admin.34news.com/en/graphql";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: CREATE_FORM_ENTRY,
          variables: variables,
        }),
      });

      const result = await response.json();
      console.log(result); // Debug: Check the response

      if (result.errors) {
        setError(result.errors[0].message);
      } else if (result.data.createFormEntry.success) {
        setMessage(t("Vote Submitted successfully"));
        localStorage.setItem("lastSubmissionTime" + formId, now.toString());
      } else {
        setMessage(t("Failed to vote"));
      }
    } catch (error) {
      console.error(error); // Debug: Log the error
      setError(t("An error occurred. Please try again"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border rounded-md p-4 w-full mx-auto">
      <form
        onSubmit={handleSubmit}
        className="border rounded-md p-4 w-full mx-auto"
      >
        {form.map((field) => {
          if (field.type === "checkbox") {
            return (
              <div key={field.id}>
                <h4 className="text-xl lg:text-2xl font-semibold">
                  {field.name}
                </h4>
                {field.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-primary hover:text-white cursor-pointer"
                  >
                    <input
                      className="mt-1"
                      type="checkbox"
                      name={`${field.id}`}
                      value={option}
                    />
                    <span className="pl-2">{option}</span>
                  </label>
                ))}
              </div>
            );
          } else if (field.type === "radio") {
            return (
              <div key={field.id}>
                <h4 className="text-xl lg:text-2xl font-semibold">
                  {field.name}
                </h4>
                {field.options.map((option, index) => (
                  <label
                    key={index}
                    className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3 hover:bg-primary hover:text-white cursor-pointer"
                  >
                    <input
                      className="mt-1"
                      type="radio"
                      name={`${field.id}`}
                      value={option}
                    />
                    <span className="pl-2">{option}</span>
                  </label>
                ))}
              </div>
            );
          } else if (field.type === "submit") {
            return (
              <button
                key={field.id}
                type="submit"
                className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Submit
              </button>
            );
          }
          return null;
        })}
        {loading && <p>{t("Submitting...")}</p>}
        {message && <p>{message}</p>}
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default Polling;
