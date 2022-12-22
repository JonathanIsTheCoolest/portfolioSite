const sendgrid = require("@sendgrid/mail");

const {
  REACT_APP_SENDGRID_API_KEY: API_KEY,
  REACT_APP_SENDGRID_TO_EMAIL: TO_EMAIL,
  REACT_APP_SENDGRID_FROM_EMAIL: FROM_EMAIL,
} = process.env;

sendgrid.setApiKey(API_KEY);

exports.handler = async function (event, context) {
  const { name, email, message } = JSON.parse(event.body);
  const messages = [
    {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject: `Inquiry from ${name}`,
      text: `You received a new message from ${name}:
        ${message}
        They can be reached at ${email}.
        Have a nice day self!`,
      html: `<p>You received a new message from ${name}:
      <br />
      ${message}
      <br />
      They can be reached at ${email}.
      <br /><br />
      Have a nice day self!
      </p>`,
    },
    {
      to: email,
      from: FROM_EMAIL,
      subject: `Confirmation email from jlrprogramming.com`,
      text: `Thanks for reaching out ${name}! your message: ${message}, has been received. I'll get back to you as soon as possible`,
      html: `<p>Thanks for reaching out ${name}!
        <br /><br />
        Your message:
        <br />
        <strong>${message}</strong>,
        <br />
        has been received.
        <br /><br />
        I'll get back to you as soon as possible.
        Sincerely,
        <br />
        Jonathan Lascano-Rusu
        </p>`,
    },
  ];

  try {
    await sendgrid.send(messages);
    return {
      statusCode: 200,
      body: JSON.stringify({
        ok: true,
        message: "Message sent",
      }),
    };
  } catch (error) {
    return {
      statusCode: error.code,
      body: JSON.stringify({
        ok: false,
        message: `Message failed to send: ${error.message}`,
      }),
    };
  }
};
