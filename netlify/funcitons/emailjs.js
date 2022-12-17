const emailjs = require("@emailjs/browser");

const { EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_PUBLIC } = process.env;

exports.handler = async function (e, context) {
  emailjs
    .sendForm(
      EMAILJS_SERVICE,
      EMAILJS_TEMPLATE,
      JSON.parse(e.body),
      EMAILJS_PUBLIC
    )
    .then((res) => {
      console.log(res);
      return {
        statusCode: 200,
      };
    })
    .catch((error) => {
      console.error(`Something went wrong: ${error}`);
      return {
        statusCode: 400,
      };
    });
};
