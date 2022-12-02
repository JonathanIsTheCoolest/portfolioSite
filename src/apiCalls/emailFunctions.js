import {
  EMAILJS_SERVICE,
  EMAILJS_TEMPLATE,
  EMAILJS_PUBLIC,
} from "../constants";

import emailjs from "@emailjs/browser";

export const postEmail = (e, setSubmissionError, setSubmissionModal) => {
  emailjs
    .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target, EMAILJS_PUBLIC)
    .then((res) => {
      console.log(res);
      setSubmissionError(false);
    })
    .catch((error) => {
      setSubmissionError(true);
      console.log(`Something went wrong: ${error}`);
    });
  setSubmissionModal();
};
