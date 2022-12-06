const emailjs = require("@emailjs/browser");

const { EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_PUBLIC } = process.env;

const postEmail = async (e, setSubmissionError, setSubmissionModal) => {
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

exports.handler = async (event, context) => {
  console.log(event);
  // try {
  //   const data = JSON.parse(event.body);

  //   await postEmail(data);

  //   return {
  //     statusCode: 200,
  //     body: JSON.stringify({
  //       message: "Your message was successfully received",
  //     }),
  //   };
  // } catch (error) {
  //   console.log(error);
  //   return {
  //     statusCode: 500,
  //     body: JSON.stringify({ error: "Failed to send email" }),
  //   };
  // }
};
