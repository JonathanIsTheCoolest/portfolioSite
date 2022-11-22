import { EMAILJS_SERVICE, EMAILJS_TEMPLATE, EMAILJS_PUBLIC } from "../constants";

import emailjs from '@emailjs/browser';

export const postEmail = (e, cbOne,  cbTwo) => {
      // emailjs
      // .sendForm(
      //   EMAILJS_SERVICE, EMAILJS_TEMPLATE, e.target, EMAILJS_PUBLIC
      // )
      // .then((res) => {
      //   console.log(res);
      //   cbOne();
      //   cbTwo();
      // })
      // .catch((error) => console.log(`Something went wrong: ${error}`))

      // cbOne();
      cbTwo();
}